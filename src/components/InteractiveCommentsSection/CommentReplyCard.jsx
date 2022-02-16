import React from "react";
import { CommentCard } from "..";

export default function CommentReplyCard({ reply, currentUser }) {
  return (
    <CommentCard
      className="w-[90%]"
      comment={reply}
      currentUser={currentUser}
    />
  );
}
