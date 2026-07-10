import { useEffect, useState } from "react";

export function useMediaQueries(query: string): boolean {
  // 1. Format the input. Convert it to a min-width media query.
  const formattedQuery = `(min-width: ${query}px)`;

  // Default to false (Mobile-First) to prevent SSR server crashes
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(formattedQuery).matches;
  });
  // const [matches, setMatches] = useState(false);

  useEffect(
    function () {
      // Prevent execution if window is undefined (fallback safety)
      if (typeof window === "undefined") return;

      const media = window.matchMedia(formattedQuery);

      // Modern browsers support the event object directly
      const listener = (e: MediaQueryListEvent) => setMatches(e.matches);

      media.addEventListener("change", listener);

      return () => media.removeEventListener("change", listener);
    },
    [formattedQuery],
  );

  return matches;
}
