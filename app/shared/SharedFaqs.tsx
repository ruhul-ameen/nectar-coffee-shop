"use client";

import SharedComment from "@/components/SharedComment";
import Link from "next/link";
import React, { useState } from "react";

const comments = [
  {
    id: 1,
    question: "How do i set up an office coffee station for employee",
    answer:
      "Establish an office coffee hub with a quality coffee maker, diverse coffee and tea options, creamers, and mugs. Keep it clean, add a water cooler, and consider a comfortable seating area. Include snacks and seek employee feedback for ongoing improvement.",
  },
  {
    id: 2,
    question: "How do i set up an office coffee station for employee",
    answer:
      "Establish an office coffee hub with a quality coffee maker, diverse coffee and tea options, creamers, and mugs. Keep it clean, add a water cooler, and consider a comfortable seating area. Include snacks and seek employee feedback for ongoing improvement.",
  },
  {
    id: 3,
    question: "How do i set up an office coffee station for employee",
    answer:
      "Establish an office coffee hub with a quality coffee maker, diverse coffee and tea options, creamers, and mugs. Keep it clean, add a water cooler, and consider a comfortable seating area. Include snacks and seek employee feedback for ongoing improvement.",
  },
];

const SharedFaqs = () => {
  const [isQuestionVisible, setIsQuestionVisible] = useState(true);

  const handleToggle = () => {
    setIsQuestionVisible(!isQuestionVisible);
  };
  return (
    <section>
      <h1 className="text-3xl font-bold text-center my-10 uppercase">
        Customer's common questions
      </h1>
      <div className="flex flex-col items-center justify-center gap-4">
        {comments.map((comment) => (
          <SharedComment key={comment.id} comment={comment} />
        ))}
      </div>
      <div className="flex items-center justify-center mt-10">
        <button className="border rounded-sm px-4 py-2 text-white hover:text-[#361500] hover:bg-white font-semibold">
          <Link href={"/faqs"}>More Questions</Link>
        </button>
      </div>
    </section>
  );
};

export default SharedFaqs;
