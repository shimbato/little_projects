import React from "react";
import { ComicList } from "../comicList/ComicList";
import { AppBanner } from "../appBanner/AppBanner";

export const ComicPage = () => {
  return (
    <div>
      <AppBanner />
      <ComicList />
    </div>
  );
};
