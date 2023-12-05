import { useEffect, useState, useRef } from "react";

export default function useHasScrolledUp() {
  const [hasScrolledUp, setHasScrolledUp] = useState(true);
  const timeOutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    let oldScrollY = window.scrollY;
    // on scroll, let the interval function know the user has scrolled
    function handler() {
      clearTimeout(timeOutRef.current);
      // run hasScrolled() and reset didScroll status
      timeOutRef.current = setTimeout(() => {
        if (hasScrolledUp()) {
          setHasScrolledUp(true);
        } else {
          setHasScrolledUp(false);
        }
      }, 20);
    }

    function hasScrolledUp(): boolean {
      const currentScrollY = window.scrollY;
      const didScroll = oldScrollY > currentScrollY;
      oldScrollY = currentScrollY;
      return didScroll;
    }

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
      clearTimeout(timeOutRef.current);
    };
  });

  return hasScrolledUp;
}
