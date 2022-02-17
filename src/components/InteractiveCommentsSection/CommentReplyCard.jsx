import React from "react";
import { CommentCard } from "..";

export default function CommentReplyCard({
  reply,
  currentUser,
  updateComment,
  deleteComment,
}) {
  const handleReplyUpdate = (replyId, data) => {
    updateComment(replyId, {
      updateReply: data.addReply ? false : true,
      ...data,
    });
  };

  const handleReplyDelete = (replyId, parentId) => {
    deleteComment(replyId, parentId);
  };

  return (
    <CommentCard
      comment={reply}
      currentUser={currentUser}
      updateComment={handleReplyUpdate}
      deleteComment={handleReplyDelete}
    />
  );
}
