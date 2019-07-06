import React, { Fragment } from 'react';

const CommentsList = ({ comments }) => (
    <Fragment>
        {comments.map((comment, key) => (
            <div className="comment" key={key}>
            <h4>{comment.username}</h4>
            <p>{comment.text}</p>
            </div>
        ))}
    </Fragment>
);

export default CommentsList;