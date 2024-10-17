"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/sections/logo.png";

function Hero() {
  const [first, setFirst] = useState("");
const [last, setLast] = useState("");
const [startingHero, setStartHero] = useState(true);
const [def, setDef] = useState("Mode");
const [select, setSelect] = useState(false);
const [mode, setMode] = useState("Rag");
const [questions, setQuestions] = useState<string[]>([]);
const [answers, setAnswers] = useState<string[][]>([]);

useEffect(() => {
  initializeQuestionsAndAnswers();
}, []);

function onSelect(e: string) {
  setDef(e);
  setSelect(false);
  setMode(e);
}

function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
  setFirst(e.target.value);
}

function initializeQuestionsAndAnswers() {
  const initialQuestions = [
    "What exercises can I do with dumbbells?",
    "What exercises can I do with dumbbells?",
  ];

  const initialAnswers = [
    [
      JSON.stringify({
        Query: "What are some good exercises for upper body?",
        Response: "User Query: What are some good exercises for upper body?",
        "Relevant Exercises": [
          {
            Exercise: "Arms-crossed jump squat",
            Description: "Average",
            "Muscle Group": "Quadriceps",
            Equipment: "Body Only",
          },
          {
            Exercise: "Handstand push-up",
            Description: "Average",
            "Muscle Group": "Shoulders",
            Equipment: "Body Only",
          },
        ],
      }),
      JSON.stringify({
        Exercise: "Bicep Curls",
        Description: "Easy",
        "Muscle Group": "Biceps",
        Equipment: "Dumbbells",
      }),
    ],
    [
      JSON.stringify({
        Exercise: "Standing One-Arm Dumbbell Triceps Extension",
        Description: "Average",
        "Muscle Group": "Triceps",
        Equipment: "Dumbbells",
      }),
    ],
  ];

  setQuestions(initialQuestions);
  setAnswers(initialAnswers);
}

async function getOutput(question: string) {
  let newAnswers: string[] = [];

  let res;
  if (mode === "Grag") {
    res = await gragOutput(question);
  } else if (mode === "Rag") {
    res = await ragOutput(question);
  } else {
    // Multi mode: append both Grag and Rag outputs
    const resMultiGrag = await gragOutput(question);
    const resMultiRag = await ragOutput(question);
    // Append both outputs together
    newAnswers = [resMultiGrag, resMultiRag];
  }

  if (!newAnswers.length) {
    newAnswers = Array.isArray(res) ? res : [res];
  }

  setQuestions((prevQuestions) => [...prevQuestions, question]);
  setAnswers((prevAnswers) => [...prevAnswers, newAnswers]);
  setStartHero(false);
}

async function ragOutput(question: string): Promise<string> {
  try {
    const res = await fetch("https://fc89-34-106-45-247.ngrok-free.app/ ", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    if (res.ok) {
      const response = await res.json();
      return response;
    }
  } catch (error) {
    console.error("Error fetching RagOutput:", error);
  }

  return "RagOutput response";
}

async function gragOutput(question: string): Promise<string> {
  try {
    const res = await fetch("https://a373-35-226-41-33.ngrok-free.app/query", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    if (res.ok) {
      const response = await res.json();
      console.log(response["answer"])
    
      return response["answer"];
    }
  } catch (error) {
    console.error("Error fetching GragOutput:", error);
  }

  return "";
}

async function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
  if (e.key === "Enter") {
    e.preventDefault();
    const currentQuestion = first;
    setFirst("");
    await getOutput(currentQuestion);
  }
}


const AnswerComponent = ({ answer }: { answer: string }) => {
  let parsedAnswer;

  try {
    // Try to parse the string to JSON
    parsedAnswer = JSON.parse(answer);
    console.log(typeof parsedAnswer);
  } catch (e) {
    // If parsing fails, treat the answer as a normal string
    parsedAnswer = null;
  }

  // Function to check if a value is an object
  const isObject = (value: any) => {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  };

  return (
    <div className="border border-white/20 p-5 rounded-lg max-w-2xl w-full md:w-1/2 mx-auto text-sm md:text-base mt-5">
      <div className="flex items-center mb-3">
        <div className="w-12 h-12">
          <Image src={logo} alt="hello" />
        </div>
        <div className="ml-2 text-lg">GymmRock</div>
      </div>
      <div>
        {/* Check if parsedAnswer is an array */}
        {Array.isArray(parsedAnswer) ? (
          <ul className="list-disc pl-5">
            {parsedAnswer.map((item: any, index: number) => (
              <li key={index} className="my-2">
                <span className="font-semibold text-orange-500">
                  {item.exercise}:
                </span>
                
              </li>
            ))}
          </ul>
        ) : (
          // If not JSON, assume the answer is a normal string with possible newlines
          answer.split("\n").map((line, index) => (
            <div key={index}>{line}</div>
          ))
        )}
      </div>
    </div>
  );
};


  return (
    <section className="mb-10">
      <div className="container">
        {startingHero ? (
          <div className="flex flex-col items-center gap-14">
            <div className="mx-auto text-center mt-20 max-auto-full font-sans tracking-tight text-3xl md:text-5xl">
              Let's begin the{" "}
              <span className="italic font-sans bg-clip-text bg-gradient-to-r from-orange-600 to-orange-300 text-transparent">
                Work
              </span>{" "}
              out
            </div>
            <textarea
              style={{
                overflowY: "scroll",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
              onChange={handleChange}
              onKeyDown={onKeyDown}
              placeholder="Please type here"
              value={first}
              className="p-5 bg-transparent relative border-2 border-orange-600 text-lg md:h-56 lg:h-56 h-20 rounded-full md:rounded-lg w-11/12 md:w-3/4 lg:w-3/4 mx-auto outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition-all duration-300 ease-in-out"
            ></textarea>

            <div className="relative">
              <div
                className="bg-gradient-to-r from-orange-600 to-orange-300 p-2 rounded-lg text-center cursor-pointer"
                onClick={() => setSelect(!select)}
              >
                {def}
              </div>

              {select && (
                <div className="absolute bg-black text-white p-2 mt-2 rounded-md z-10 flex flex-col gap-2">
                  {["Grag", "Rag", "Multi"].map((option) => (
                    <ul
                      key={option}
                      className="cursor-pointer"
                      onClick={() => onSelect(option)}
                    >
                      {option}
                    </ul>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-8 mt-5">
            {questions.map((item, index) => (
              <div key={index} className="w-full">
                <div className="bg-gradient-to-r from-orange-600 to-orange-200 text-transparent bg-clip-text text-3xl mb-5 text-center">
                  {item}
                </div>

                <div className="flex md:flex-row flex-col gap-3 w-full">
                  {answers[index]?.map((answer, subIndex) => (
                    <AnswerComponent
                      key={`${index}-${subIndex}`}
                      answer={answer}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;