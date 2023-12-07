"use client";

import React, { useState } from "react";

const SharedComment = ({ comment }) => {
  const { question, answer } = comment;
  const [isQuestionVisible, setIsQuestionVisible] = useState(true);

  const handleToggle = () => {
    setIsQuestionVisible(!isQuestionVisible);
  };
  return (
    <div className=" w-full md:w-2/4 h-auto p-2 bg-[#6C3428] relative border-2 border-[#C08261]">
      <div className="mr-10">
        {isQuestionVisible ? <p>{question} ?</p> : <p>{answer}</p>}
      </div>
      <button
        className="max-w-max h-auto bg-[#C38154] p-2 absolute right-0 top-0"
        onClick={handleToggle}
      >
        {isQuestionVisible ? (
          <img src="/images/common/plus.png" alt="plus" />
        ) : (
          <img src="/images/common/minus.png" alt="minus" />
        )}
      </button>
    </div>
  );
};

export default SharedComment;
