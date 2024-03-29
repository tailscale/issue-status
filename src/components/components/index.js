import React from "react";
import Skeleton from "./skeleton";
import Component from "./component";
import useDidMount from "../useDidMount";

export default ({ loading, components }) => {
  const [hasMounted] = useDidMount();

  // Copy and sort by the GitHub issue title
  const sorted = components.slice().sort((a, b) => a.title.localeCompare(b.title))

  return !loading || hasMounted ? (
    sorted?.length > 0 ? (
      sorted?.map((component) => (
        <Component key={component.id} component={component} />
      ))
    ) : (
      <p>No Components found.</p>
    )
  ) : (
    <>
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </>
  );
};
