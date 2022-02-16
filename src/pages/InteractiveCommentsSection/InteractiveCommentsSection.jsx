import React from "react";
import {
  CommentCard,
  CommentReplyCard,
  NewCommentCard,
} from "../../components";
import commentsData from "./../../assets/interactive-comments-section/data.json";
import "./index.css";

export default function InteractiveCommentsSection() {
  const { comments, currentUser } = commentsData;

  return (
    <div className="interactive-comments-section pt-24 px-24 bg-neutral-light-grey h-full py-12 flex flex-col">
      {comments.map((comment) => (
        <React.Fragment key={comment.id}>
          <CommentCard
            key={`${comment.id} ${comment.user.username}`}
            comment={comment}
            currentUser={currentUser}
          />
          {comment.replies && comment.replies.length > 0 && (
            <div className="border-l-2 sm:pl-10 sm:ml-10 ml-0 mb-4 pl-5">
              {comment.replies.map((reply) => (
                <CommentReplyCard
                  key={`${reply.id} ${reply.user.username}`}
                  reply={reply}
                  currentUser={currentUser}
                />
              ))}
            </div>
          )}
        </React.Fragment>
      ))}
      <NewCommentCard currentUser={currentUser} />
    </div>
  );
}
