import React from "react";

export default function NewCommentCard({ currentUser }) {
  const MobileView = () => {
    return (
      <div className="flex flex-col bg-white p-4 rounded-md">
        <textarea
          className="border-[1px] h-24 rounded-md resize-none w-full px-4 py-2 mb-4"
          placeholder="Add a comment..."
        />
        <div className="flex justify-between">
          <img
            alt="avatar"
            className="w-10 h-10 rounded-full mr-4"
            src={require(`./../../assets/interactive-comments-section${currentUser.image.webp.substring(
              1
            )}`)}
          />

          <button className="bg-primary-moderate-blue text-white w-28 h-12 rounded-lg">
            SEND
          </button>
        </div>
      </div>
    );
  };

  const DesktopView = () => {
    return (
      <div className="flex bg-white p-6 rounded-md">
        <img
          alt="avatar"
          className="w-10 h-10 rounded-full mr-4"
          src={require(`./../../assets/interactive-comments-section${currentUser.image.webp.substring(
            1
          )}`)}
        />
        <textarea
          className="border-[1px] h-24 rounded-md resize-none w-full px-4 py-2 mr-4"
          placeholder="Add a comment..."
        />
        <button className="bg-primary-moderate-blue text-white w-36 h-12 rounded-lg hover:opacity-50">
          SEND
        </button>
      </div>
    );
  };
  return (
    <>
      <div className="sm:block hidden">
        <DesktopView />
      </div>
      <div className="sm:hidden">
        <MobileView />
      </div>
    </>
  );
}
