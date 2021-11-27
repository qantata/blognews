import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/*
 * Used to scroll to the top of the page whenever
 * the user navigates to a new page. If the originating
 * page is scrolled down, then without this helper the
 * destination page would start off scrolled down, which
 * is horrible ux.
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
