import { useState } from "react";
import { Link } from "react-router-dom";


function Easy() {
    const [varOne, setVarOne] = useState(Math.floor(Math.random() * 10));
    const [varTwo, setVarTwo] = useState(Math.floor(Math.random() * 10));
    const [question, setQuestion] = useState(Math.floor(Math.random() * 4) + 1);
    const [point, setPoint] = useState(0);
    const [answer, setAnswer] = useState("");

    let correctAudio = new Audio("/assets/audio/correct.mp3");
    let operator;
    let correctAnswer;

    if (varTwo > varOne) {
        let temp = varOne;
        setVarOne(varTwo);
        setVarTwo(temp);
    }

    if ((varTwo === 0 || varOne === 0) && question === 4) {
        do {
            setVarOne(Math.floor(Math.random() * 10));
            setVarTwo(Math.floor(Math.random() * 10));
        } while (varTwo == 0 || varOne == 0);
    }

    switch (question) {
        case 1:
            operator = "+";
            correctAnswer = varOne + varTwo;
            break;
        case 2:
            operator = "-";
            correctAnswer = varOne - varTwo;
            break;
        case 3:
            operator = "×";
            correctAnswer = varOne * varTwo;
            break;
        case 4:
            operator = "÷";
            correctAnswer = parseFloat((varOne / varTwo).toFixed(3));
            break;
        default:
            operator = "+";
            correctAnswer = varOne + varTwo;
            break;
    }

    function randomize() {
        setVarOne(Math.floor(Math.random() * 10));
        setVarTwo(Math.floor(Math.random() * 10));
        setQuestion(Math.floor(Math.random() * 4) + 1);
        setAnswer("");
    }
    
    function checkAnswer() {
        if (parseFloat(answer) === correctAnswer) {
            setPoint(point + 1);
            correctAudio.play();
        }
        randomize();
    }
    
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-200 to-pink-300 p-6 text-center">
                <Link
                    to="/"
                    className="absolute top-[5%] left-[5%] text-gray-900 text-xl bg-gradient-to-br from-pink-200 to-pink-300 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-900 hover:text-white transition duration-200 flex items-center justify-center"
                >
                    Home
                </Link>
                <h1 className="text-3xl md:text-5xl font-[Tektur] font-extrabold text-gray-800 drop-shadow-md mb-6">
                    🎉 Math Trainer 🎉
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 p-4 bg-white rounded-xl shadow-md mb-4 border-4 border-blue-400">
                    {varOne} {operator} {varTwo} = ?
                </h2>
                <input
                    type="number"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && checkAnswer()}
                    className="border-4 border-purple-500 p-3 rounded-lg text-center text-2xl shadow-md focus:outline-none focus:ring-4 focus:ring-purple-300 transition duration-300"
                    placeholder="Your answer..."
                />
                <button
                    onClick={checkAnswer}
                    className="mt-4 px-6 py-3 bg-green-500 text-white text-xl font-bold rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
                >
                    ✅ Submit Answer
                </button>
                <p className="mt-6 text-2xl font-semibold text-gray-900">🎯 Score: <span className="text-blue-600">{point}</span></p>
            </div>  
        </>
        
    );
}

export default Easy;
