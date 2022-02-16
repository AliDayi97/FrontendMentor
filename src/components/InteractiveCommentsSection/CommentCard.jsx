import React, { useState } from "react";
import { ReactComponent as DeleteIcon } from "./../../assets/interactive-comments-section/images/icons/icon-delete.svg";
import { ReactComponent as EditIcon } from "./../../assets/interactive-comments-section/images/icons/icon-edit.svg";
import { ReactComponent as MinusIcon } from "./../../assets/interactive-comments-section/images/icons/icon-minus.svg";
import { ReactComponent as PlusIcon } from "./../../assets/interactive-comments-section/images/icons/icon-plus.svg";
import { ReactComponent as ReplyIcon } from "./../../assets/interactive-comments-section/images/icons/icon-reply.svg";

export default function CommentCard({ comment, currentUser, updateComment }) {
  const [replying, setReplying] = useState(false);
  const [editing, setEditing] = useState(false);

  const handleUpvote = () => {
    updateComment(comment.id, { score: comment.score + 1 });
  };
  const handleDownvote = () => {
    updateComment(comment.id, { score: comment.score - 1 });
  };

  const CommentActions = () => {
    return currentUser.username === comment.user.username ? (
      <div className="flex gap-4 h-fit">
        <div className="group flex gap-2 items-center hover:cursor-pointer">
          <DeleteIcon className="fill-[#ED6368] group-hover:opacity-50" />
          <div className="text-primary-soft-red font-medium group-hover:opacity-50">
            Delete
          </div>
        </div>
        <div
          className="group flex gap-2 items-center hover:cursor-pointer"
          onClick={() => setEditing(true)}
        >
          <EditIcon className="fill-[#5357B6] group-hover:opacity-50" />
          <div className="text-primary-moderate-blue font-medium group-hover:opacity-50">
            Edit
          </div>
        </div>
      </div>
    ) : (
      <div
        className="group flex gap-2 items-center hover:cursor-pointer"
        onClick={() => setReplying(true)}
      >
        <ReplyIcon className="fill-[#5357B6] group-hover:opacity-50" />
        <div className="text-primary-moderate-blue font-medium group-hover:opacity-50">
          Reply
        </div>
      </div>
    );
  };

  return (
    <div className="card bg-white flex mb-4 sm:p-6 p-2 rounded-md sm:flex-row flex-col-reverse self-center w-full">
      <div className="flex justify-between sm:items-start sm:m-0 items-center m-2">
        <div className="sm:w-11 sm:h-22 sm:flex-col sm:py-12 sm:px-2 sm:ml-0 sm:mt-0 w-24 h-10 bg-neutral-very-light-grey flex items-center justify-around rounded-lg">
          <div
            className="group hover:cursor-pointer p-1"
            onClick={handleUpvote}
          >
            <PlusIcon className="fill-[#C5C6EF] group-hover:fill-primary-moderate-blue overflow-visible" />
          </div>
          <div className="my-4 text-primary-moderate-blue">{comment.score}</div>
          <div
            className="group hover:cursor-pointer p-1"
            onClick={handleDownvote}
          >
            <MinusIcon className="fill-[#C5C6EF] group-hover:fill-primary-moderate-blue overflow-visible" />
          </div>
        </div>

        <div className="sm:hidden">
          <CommentActions />
        </div>
      </div>

      <div className="flex flex-col ml-4 w-full">
        <div className="flex flex-row mb-4 items-center flex-wrap">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={require(`./../../assets/interactive-comments-section${comment.user.image.webp.substring(
              1
            )}`)}
            alt="avatar"
          />
          <h1 className="h-fit mr-4">{comment.user.username}</h1>
          {currentUser.username === comment.user.username && (
            <div className="bg-primary-moderate-blue text-white px-2 py-[1px] text-sm rounded-sm mr-4">
              you
            </div>
          )}
          <div className="h-fit min-h-fit opacity-60 flex-1">
            {comment.createdAt}
          </div>
          <div className="sm:flex hidden">
            <CommentActions />
          </div>
        </div>

        <div className="flex flex-col">
          {editing ? (
            <div className="flex flex-col">
              <textarea
                rows={4}
                className="opacity-70 resize-none w-100 border-2 border-primary-moderate-blue rounded-md mb-2"
                value={`${
                  comment.replyingTo
                    ? `@${comment.replyingTo} ${comment.content}`
                    : comment.content
                    ? comment.content
                    : ""
                }`}
                onChange={(e) =>
                  updateComment(comment.id, {
                    content: comment.replyingTo
                      ? e.target.value.substring(comment.replyingTo.length + 2)
                      : e.target.value,
                  })
                }
              />
              <button
                className="bg-primary-moderate-blue text-white w-36 h-12 rounded-lg hover:opacity-50 self-end"
                onClick={() => setEditing(false)}
              >
                UPDATE
              </button>
            </div>
          ) : (
            <div className="opacity-70">
              {comment.replyingTo && (
                <div className="font-semibold text-primary-bright-blue contents">
                  @{comment.replyingTo}{" "}
                </div>
              )}
              {comment.content}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
