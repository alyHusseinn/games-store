import { useEffect } from "react";

export const useAdjustPagePaddingTop = (
  pageRef: React.MutableRefObject<HTMLDivElement>
) => {
  // useaAjustPaddingTop
  useEffect(() => {
    const header = document.querySelector("header") as HTMLDivElement;
    const headerHeight = header.offsetHeight;
    pageRef.current.style.paddingTop = headerHeight + 10 + "px";
  }, [pageRef]);
};
