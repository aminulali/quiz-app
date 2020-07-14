import React, { useState } from "react";

// useState - allows use of state in a function component
const QuestionBox = ({ question, options, selected }) => {
    /* creating state variables and assigning options 
    value to the answer variable */
    const [answer, setAnswer] = useState(options);
    return (
        <div className="questionBox">
            <div className="question">{question}</div>
            {answer.map((text, index) => (
                <button
                    key={index}
                    className="answerBtn"
                    onClick={() => {
                        setAnswer([text]);
                        selected(text);
                    }}
                >
                    {text}
                </button>
            ))}
        </div>
    );
};

export default QuestionBox;