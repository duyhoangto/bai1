import _ from 'lodash';

const Question = (props) => {
    const { data, index, handleCheckbox } = props;
    if (_.isEmpty(data)) {
        return (<></>);
    }

    return (
        <>
            {data.image ? (
                <div className='q-image'>
                    <img src={`data:image/jpeg;base64,${data.image}`} alt="question" />
                </div>
            ) : (
                <div className='q-image'></div>
            )}

            <div className="question">Question {index + 1}: {data.questionDescription}?</div>
            <div className="answers">
                {data.answers && data.answers.length > 0 && data.answers.map((a, idx) => (
                    <div key={`answer-${idx}`} className="a-child">
                        <div className="form-check">
                            <input
                                id={`flexCheckDefault-${a.id}`}
                                className="form-check-input"
                                type="checkbox"
                                checked={a.isSelected}
                                onChange={(event) => handleCheckbox(event, a.id, data.questionID)}
                            />
                            <label htmlFor={`flexCheckDefault-${a.id}`} className="form-check-label">
                                {a.description}
                            </label>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Question;
