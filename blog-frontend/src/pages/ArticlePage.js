import React, { Fragment, useState, useEffect } from "react";
import ArticlesList from "../components/ArticlesList";
import CommentsList from '../components/CommentsList';
import NotFoundPage from "./NotFoundPage";
import articleContent from "./article-content";

const ArticlesPage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find(article => article.name === name);

  const [articleInfo, setArticleInfo] = useState({ upvote: 0, comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body);
    }
    fetchData();
  }, [name]);

  // if an article does not exist in article-content, returns a H1
  if (!article) return <NotFoundPage />;

  // filter articleContent so other articles include all the other articles expect the article we're on
  const otherArticles = articleContent.filter(article => article.name !== name);

  return (
    <Fragment>
      <h1>{article.title}</h1>
      <p>This post has been upvoted {articleInfo.upvotes} times</p>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <CommentsList comments={articleInfo.comments} />
      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArticles} />
    </Fragment>
  );
};
export default ArticlesPage;
