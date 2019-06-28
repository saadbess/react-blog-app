import React, { Fragment } from "react";
import ArticlesList from "../components/ArticlesList";
import articleContent from "./article-content";

const ArticlesListPage = () => (
  <Fragment>
    <h1>Articles</h1>
    <ArticlesList articles={articleContent} />
  </Fragment>
);
export default ArticlesListPage;
