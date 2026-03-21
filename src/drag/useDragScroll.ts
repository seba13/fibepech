import { useEffect, useRef } from "react";

interface UseDragScrollOptions {
  friction?: number;

  maxVelocity?: number;

  containerPadding?: number;

  dragTargetSelector?: string;
}

interface UseDragScrollReturn {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export const useDragScroll = ({
  friction = 0.92,
  maxVelocity = 30,
  containerPadding = 0,
  dragTargetSelector,
}: UseDragScrollOptions = {}): UseDragScrollReturn => {
  const containerRef = useRef<HTMLDivElement>(null);

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollOriginRef = useRef(0);
  const translateXRef = useRef(0);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const animationFrameRef = useRef<number>(-1);
  const hasDraggedRef = useRef(false); // para distinguir click de drag

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.style.cursor = "grab";

    const getBounds = () => {
      const scrollW = container.scrollWidth;
      const clientW = container.clientWidth;
      return {
        min: clientW - scrollW - containerPadding,
        max: containerPadding,
      };
    };

    const clamp = (value: number, min: number, max: number) =>
      Math.min(Math.max(value, min), max);

    const applyTranslate = (x: number) => {
      container.style.transform = `translateX(${x}px)`;
    };

    const cancelAnimation = () => {
      if (animationFrameRef.current !== -1) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = -1;
      }
    };

    const animateInertia = () => {
      velocityRef.current *= friction;

      if (Math.abs(velocityRef.current) < 0.4) {
        velocityRef.current = 0;
        const bounds = getBounds();
        translateXRef.current = clamp(
          translateXRef.current,
          bounds.min,
          bounds.max
        );
        applyTranslate(translateXRef.current);
        animationFrameRef.current = -1;
        return;
      }

      const bounds = getBounds();
      translateXRef.current = clamp(
        translateXRef.current + velocityRef.current,
        bounds.min,
        bounds.max
      );
      applyTranslate(translateXRef.current);
      animationFrameRef.current = requestAnimationFrame(animateInertia);
    };

    const onPointerDown = (e: PointerEvent) => {
      if (dragTargetSelector) {
        const target = e.target as HTMLElement;
        if (!target.closest(dragTargetSelector)) return;
      }

      if (e.pointerType === "mouse" && e.button !== 0) return;

      cancelAnimation();

      isDraggingRef.current = true;
      hasDraggedRef.current = false;
      startXRef.current = e.clientX;
      scrollOriginRef.current = translateXRef.current;
      velocityRef.current = 0;
      lastXRef.current = e.clientX;

      container.setPointerCapture(e.pointerId);
      container.style.cursor = "grabbing";
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDraggingRef.current) return;

      const deltaX = e.clientX - startXRef.current;

      if (Math.abs(deltaX) > 4) {
        hasDraggedRef.current = true;
      }

      const rawVelocity = e.clientX - lastXRef.current;
      velocityRef.current = clamp(rawVelocity, -maxVelocity, maxVelocity);
      lastXRef.current = e.clientX;

      const bounds = getBounds();
      translateXRef.current = clamp(
        scrollOriginRef.current + deltaX,
        bounds.min,
        bounds.max
      );
      applyTranslate(translateXRef.current);
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!isDraggingRef.current) return;

      isDraggingRef.current = false;
      container.releasePointerCapture(e.pointerId);
      container.style.cursor = "grab";

      if (hasDraggedRef.current && Math.abs(velocityRef.current) > 0.4) {
        animationFrameRef.current = requestAnimationFrame(animateInertia);
      }
    };

    const onPointerCancel = (e: PointerEvent) => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      container.releasePointerCapture(e.pointerId);
      container.style.cursor = "grab";
    };

    const onClickCapture = (e: MouseEvent) => {
      if (hasDraggedRef.current) {
        e.stopPropagation();
        e.preventDefault();
      }
    };

    container.style.touchAction = "pan-y";
    container.style.userSelect = "none";

    container.addEventListener("pointerdown", onPointerDown);
    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerup", onPointerUp);
    container.addEventListener("pointercancel", onPointerCancel);
    container.addEventListener("click", onClickCapture, true);

    return () => {
      cancelAnimation();
      container.removeEventListener("pointerdown", onPointerDown);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerup", onPointerUp);
      container.removeEventListener("pointercancel", onPointerCancel);
      container.removeEventListener("click", onClickCapture, true);
    };
  }, [friction, maxVelocity, containerPadding, dragTargetSelector]);

  return { containerRef };
};
