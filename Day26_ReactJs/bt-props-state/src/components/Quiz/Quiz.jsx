import React, { use, useState } from "react";
import { DataQuestion } from "./Data";
const Quiz = () => {
  console.log(DataQuestion);
  const [indexQuestion, setQuestion] = useState(0);
  const [isResult, setIsResult] = useState(false);
  const [score,setScore] = useState(0);
  const handleNextQuestion = (isCorrect) => {
    if(isCorrect)
    {
      setScore(score + 1);
    }
    if (indexQuestion + 1 < DataQuestion.length) {
      setQuestion(indexQuestion + 1);
    } else {
      setIsResult(true);
    }
  };
  console.log(score,"score");
  const handleGoback = () =>
  {
    setIsResult(false);
    setQuestion(0);
    setScore(0);
  }
  return isResult ? (
    <div className="box-result mx-5 text-center flex flex-col gap-2">
      <p>Màn Kết Quả</p>
      <p>Bạn đã trả lời đúng {score}/{DataQuestion.length}</p>
       <p>Bạn đã trả lời sai {DataQuestion.length - score}/{DataQuestion.length} </p>
       <p>{score > 3 ? "Bạn Làm Tốt Rồi Hãy Cố Gắng Hơn" : "Bạn Làm Quá tệ Cần Phải Làm Lại"}</p>
       <button onClick={handleGoback} className="w-full py-1 rounded-2xl bg-gray-700 text-white font-semibold">Quay Lại</button>
    </div>
  ) : (
    <div>
      <h1 className="font-bold text-[30px] text-center mt-3">
        Câu Hỏi {indexQuestion + 1} : {DataQuestion[indexQuestion].questionText}
      </h1>
      <div className="text-center flex justify-center items-center flex-col mt-3 gap-2">
        {DataQuestion[indexQuestion].answerOptions.map((item) => (
          <button
            onClick={() => {handleNextQuestion(item.isCorrect)}}
            className="btn-anserw"
            key={item.answerText}
          >
            {item.answerText}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
