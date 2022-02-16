import React from "react";
import {
  CommentCard,
  CommentReplyCard,
  NewCommentCard,
} from "../../components";
import commentsData from "./../../assets/interactive-comments-section/data.json";
import "./index.css";

export default function InteractiveCommentsSection() {
  const { comments: commentsExternal, currentUser } = commentsData;

  const [comments, setComments] = React.useState(commentsExternal);

  console.log(comments);

  const addComment = (content) => {
    const replies = comments
      .filter((comment) => comment.replies && comment.replies.length > 0)
      .map((comment) => comment.replies);
    const ids = comments.concat(...replies).map((comment) => comment.id);

    const maxId = Math.max(...ids);

    const commentData = {
      id: maxId + 1,
      content,
      createdAt: Date.now(),
      replies: [],
      score: 0,
      user: currentUser,
    };

    setComments([...comments, commentData]);
  };

  const updateComment = (commentId, data) => {
    console.log("DATA: ", data);
    const { content, score, isReply } = data;
    const updatedComments = [...comments];

    if (isReply) {
      const commentIndex = updatedComments.findIndex(
        (comment) =>
          comment.replies &&
          comment.replies.length > 0 &&
          comment.replies.find((reply) => reply.id === commentId)
      );

      const replyIndex = updatedComments[commentIndex].replies.findIndex(
        (reply) => reply.id === commentId
      );

      if (content) {
        updatedComments[commentIndex].replies[replyIndex].content = content;
      }

      if (score) {
        updatedComments[commentIndex].replies[replyIndex].score = score;
      }
    } else {
      const index = comments.findIndex((comment) => comment.id === commentId);
      if (content) {
        updatedComments[index].content = content;
      }

      if (score) {
        updatedComments[index].score = score;
      }
    }

    setComments(updatedComments);
  };

  return (
    <div className="interactive-comments-section pt-24 sm:px-24 px-8 bg-neutral-light-grey h-full py-12 flex flex-col">
      {comments.map((comment) => (
        <React.Fragment key={comment.id}>
          <CommentCard
            key={`${comment.id} ${comment.user.username}`}
            comment={comment}
            currentUser={currentUser}
            updateComment={updateComment}
          />
          {comment.replies && comment.replies.length > 0 && (
            <div className="border-l-2 sm:pl-10 sm:ml-10 ml-0 mb-4 pl-5">
              {comment.replies.map((reply) => (
                <CommentReplyCard
                  key={`${reply.id} ${reply.user.username}`}
                  reply={reply}
                  currentUser={currentUser}
                  updateComment={updateComment}
                />
              ))}
            </div>
          )}
        </React.Fragment>
      ))}
      <NewCommentCard currentUser={currentUser} onAdd={addComment} />
    </div>
  );
}
