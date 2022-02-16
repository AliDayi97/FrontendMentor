import React from "react";
import { CommentCard } from "..";

export default function CommentReplyCard({
  reply,
  currentUser,
  updateComment,
}) {
  const handleCommentUpdate = (replyId, data) => {
    updateComment(replyId, { isReply: true, ...data });
  };

  return (
    <CommentCard
      comment={reply}
      currentUser={currentUser}
      updateComment={handleCommentUpdate}
    />
  );
}
