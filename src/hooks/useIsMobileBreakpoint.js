import { useCallback, useEffect, useState } from "react";

export const useIsMobileBreakpoint = () => {
  const [isMobileBreakpoint, setIsMobileBreakpoint] = useState(false);

  const updateTarget = useCallback((event) => {
    if (event.matches) {
      setIsMobileBreakpoint(true);
    } else {
      setIsMobileBreakpoint(false);
    }
  }, []);

  useEffect(() => {
    if (window.matchMedia) {
      const media = window.matchMedia("(max-width: 991.98px)");
      media.addEventListener("change", (event) => updateTarget(event));

      if (media.matches) {
        setIsMobileBreakpoint(true);
      }

      return () =>
        media.removeEventListener("change", (event) => updateTarget(event));
    }
  }, [updateTarget]);

  return isMobileBreakpoint;
};
