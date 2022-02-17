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

  const getNewId = () => {
    const replies = comments
      .filter((comment) => comment.replies && comment.replies.length > 0)
      .map((comment) => comment.replies);
    const ids = comments.concat(...replies).map((comment) => comment.id);

    const maxId = Math.max(...ids);
    return maxId + 1;
  };

  const addComment = (content) => {
    const newId = getNewId();

    const commentData = {
      id: newId,
      content,
      createdAt: Date.now(),
      replies: [],
      score: 0,
      user: currentUser,
    };

    setComments([...comments, commentData]);
  };

  const updateComment = (commentId, data) => {
    const { content, score, updateReply, addReply, replyingTo } = data;
    const updatedComments = [...comments];

    if (updateReply) {
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
    } else if (addReply) {
      const newId = getNewId();

      const replyData = {
        parentId: replyingTo.id,
        id: newId,
        content: content || "",
        createdAt: Date.now(),
        replyingTo: replyingTo.username,
        score: 0,
        user: currentUser,
      };

      updatedComments.forEach((comment) => {
        if (comment.id === commentId || comment.id === replyingTo.id) {
          comment.replies = [...comment.replies, replyData];
        }
      });
      setComments(updatedComments);
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

  const deleteComment = (commentId, parentId) => {
    console.log("COMMENT ID", commentId, parentId);
    let updatedComments = [...comments];

    if (parentId) {
      const commentIndex = updatedComments.findIndex(
        (comment) => comment.id === parentId
      );

      const filteredReplies = updatedComments[commentIndex].replies.filter(
        (reply) => reply.id !== commentId
      );

      updatedComments[commentIndex].replies = filteredReplies;

      console.log("UPpdated Comment", updatedComments);
    } else {
      const filtered = updatedComments.filter(
        (comment) => comment.id !== commentId
      );
      updatedComments = filtered;
    }

    setComments(updatedComments);
  };

  return (
    <>
      <div className="interactive-comments-section pt-24 sm:px-24 px-8 bg-neutral-light-grey h-full py-12 flex flex-col">
        {comments.map((comment) => (
          <React.Fragment key={comment.id}>
            <CommentCard
              key={`${comment.id} ${comment.user.username}`}
              comment={comment}
              currentUser={currentUser}
              updateComment={updateComment}
              deleteComment={deleteComment}
            />
            {comment.replies && comment.replies.length > 0 && (
              <div className="border-l-2 sm:pl-10 sm:ml-10 ml-0 mb-4 pl-5">
                {comment.replies.map((reply) => (
                  <CommentReplyCard
                    key={`${reply.id} ${reply.user.username}`}
                    reply={reply}
                    currentUser={currentUser}
                    updateComment={updateComment}
                    deleteComment={deleteComment}
                  />
                ))}
              </div>
            )}
          </React.Fragment>
        ))}

        <NewCommentCard currentUser={currentUser} onAdd={addComment} />
      </div>
    </>
  );
}
