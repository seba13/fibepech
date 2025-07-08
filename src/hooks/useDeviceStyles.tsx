import useDeviceDetect from "./useDeviceDetect";

export const useDeviceStyles = () => {
  const { isMobile } = useDeviceDetect();

  return {
    paddingHorizontal: isMobile ? "px-1" : "px-4",
    paddingVertical: isMobile ? "py-2" : "py-3",
    paddingLeft: isMobile ? "pl-1" : "pl-4",
    paddingRight: isMobile ? "pr-1" : "pr-4",
    paddingBottom: isMobile ? "pb-2" : "pb-3",
    paddingTop: isMobile ? "pt-2" : "pt-3",
    marginBottom: isMobile ? "mb-1": "mb-4"
  };
};
