import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/style.css';
import quizService from './quizService';
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';

// root of the application
class QuizApp extends Component {
    state = {
        questionBank: [],
        score: 0,
        responses: 0
    }

    getQuestions = () => {
        /* invoke quizService, then storing the 
        returned questions to the state */
        quizService().then(question => {
            this.setState({
                questionBank: question
            });
        });
    };

    computeAnswer = (answer, correctAnswer) => {
        // increments score value if user chooses the correct answer
        if (answer === correctAnswer) {
            this.setState({
                score: this.state.score + 1
            })
        }

        // increments response value when user answers the question and the value is below 5
        this.setState({
            responses: this.state.responses < 5 ? this.state.responses + 1 : 5
        })
    }

    playAgain = () => {
        this.getQuestions();
        // reset state values
        this.setState({
            score: 0,
            responses: 0
        })
    }

    // retrieves questions
    componentDidMount() {
        this.getQuestions();
    }

    render() {
        return (
            <div className="container">
                <div className="title">Quiz</div>
                {this.state.questionBank.length > 0 &&
                    this.state.responses < 5 &&
                    this.state.questionBank.map(
                        ({ question, answers, correct, questionId }) =>
                            <QuestionBox
                                question={question}
                                options={answers}
                                key={questionId}
                                selected={answer => this.computeAnswer(answer, correct)}
                            />)}
                {/* when the user answers all questions, they will receive their score and an option to play again */}
                {this.state.responses === 5 ? <Result score={this.state.score} playAgain={this.playAgain} /> : null}
            </div>
        );
    }
}

ReactDOM.render(<QuizApp />, document.getElementById('root'));
