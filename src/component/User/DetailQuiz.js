import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz } from "../../services/APIservice";
import _ from 'lodash';
import './DetailQuiz.scss';
import Question from "./Question";

const DetailQuiz = () => {
    const params = useParams();
    const quizid = params.id;
    const location = useLocation();
    const [dataQuiz, setDataQuiz] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        fetchQuestion();
    }, [quizid]);

    const fetchQuestion = async () => {
        let res = await getDataQuiz(quizid);
        if (res && res.EC === 0) {
            let raw = res.DT;
            let data = _.chain(raw)
                .groupBy("id")
                .map((value, key) => {
                    let questionDescription = value[0].description;
                    let image = value[0].image;
                    let answers = value.map(item => ({
                        ...item.answers,
                        isSelected: false
                    }));

                    return {
                        questionID: key,
                        answers,
                        questionDescription,
                        image
                    };
                })
                .value();
            setDataQuiz(data);
        }
    };

    const handlePrev = () => {
        if (index > 0) setIndex(index - 1);
    };

    const handleNext = () => {
        if (dataQuiz && dataQuiz.length > index + 1) setIndex(index + 1);
    };

    const handleCheckbox = (event, answersId, questionId) => {
        let dataQuizClone = _.cloneDeep(dataQuiz);
        let question = dataQuizClone.find(item => +item.questionID === +questionId);
        if (question && question.answers) {
            question.answers = question.answers.map(item => ({
                ...item,
                isSelected: item.id === answersId ? !item.isSelected : item.isSelected
            }));
        }
        setDataQuiz(dataQuizClone);
    };

    const handleFinish = () => {
        let payload = {
            quizid: quizid,
            answers: dataQuiz.map(question => ({
                questionId: +question.questionID,
                userAnswersId: question.answers.filter(a => a.isSelected).map(a => a.id)
            }))
        };
        console.log('Check payload', payload);
    };

    return (
        <div className="detail-quiz-container">
            <div className="left-container">
                <div className="title">
                    Quiz {quizid}: {location?.state?.quiztitle}
                </div>
                <hr />
                <div className="quiz-body">
                    <img alt="quiz" />
                </div>
                <div className="quiz-content">
                    <Question
                        index={index}
                        data={dataQuiz && dataQuiz.length > 0 ? dataQuiz[index] : {}}
                        handleCheckbox={handleCheckbox}
                    />
                </div>
                <div className="footer">
                    <button onClick={handlePrev} className="btn btn-secondary">Prev</button>
                    <button onClick={handleNext} className="btn btn-primary btn1">Next</button>
                    <button onClick={handleFinish} className="btn btn-warning">Finish</button>
                </div>
            </div>
            <div className="right-container">
                Count Down
            </div>
        </div>
    );
};

export default DetailQuiz;
