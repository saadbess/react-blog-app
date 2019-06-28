import React, { Fragment } from "react";
import ArticlesList from "../components/ArticlesList";
import articleContent from "./article-content";

const ArticlesPage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find(article => article.name === name);

  // if an article does not exist in article-content, returns a H1
  if (!article) return <h1>Article does not exist!</h1>;

  // filter articleContent so other articles include all the other articles expect the article we're on
  const otherArticles = articleContent.filter(article => article.name !== name);

  return (
    <Fragment>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArticles} />
    </Fragment>
  );
};
export default ArticlesPage;
