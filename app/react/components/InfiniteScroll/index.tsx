/* eslint-disable react-hooks/exhaustive-deps */
import type { MutableRefObject } from "react";
import React, { useEffect } from "react";
import type { InfiniteScrollProps } from "./types";
import LoadingSpinner from "../LoadingSpinner";

const InfiniteScroll = React.forwardRef<Element, InfiniteScrollProps>(
  ({ children, load, loading }, ref) => {
    useEffect(() => {
      return () => {
        if (ref && typeof ref !== "function" && ref.current) {
          ref.current.removeEventListener("scroll", handleScroll);
        }
      };
    }, [load, ref]);

    useEffect(() => {
      if (ref && typeof ref !== "function" && ref.current) {
        ref.current.addEventListener("scroll", handleScroll);
      }
    }, [load, ref]);

    const loadNextItems = async () => {
      await load();
    };

    const handleScroll = () => {
      if (
        ref &&
        (ref as MutableRefObject<Element>).current.scrollTop +
          (ref as MutableRefObject<Element>).current.clientHeight >=
          (ref as MutableRefObject<Element>).current.scrollHeight &&
        !loading
      ) {
        loadNextItems();
      }
    };

    return (
      <>
        {children}
        {loading && <LoadingSpinner />}
      </>
    );
  }
);

InfiniteScroll.displayName = "InfiniteScroll";

export default InfiniteScroll;
