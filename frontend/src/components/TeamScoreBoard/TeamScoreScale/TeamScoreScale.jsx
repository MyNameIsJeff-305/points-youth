import './TeamScoreScale.css';

const TeamScoreScale = ({ teamName, color, logoUrl, score, tempMax }) => {
    const percentage = tempMax > 0 ? (score / tempMax) * 100 : 0;

    return (
        <>
            <div className="score-scale-container">
                <div className="team-name">{teamName}</div>
                <div className="scale-wrapper">
                    <div className="scale-bar">
                        <div
                            className="scale-fill"
                            style={{
                                height: `${percentage}%`,
                                backgroundColor: color,
                            }}
                        ></div>
                    </div>
                    <div className="team-score">
                        <div className="score-text">
                            {score} pts
                        </div>
                        <div className='team-logo'>
                            <img
                                src={logoUrl}
                                alt={`${teamName} logo`}
                            />
                        </div>
                    </div>

                </div>
            </div>
            <div className="score-scale-container-mobile">
                <div className="team-score-mobile">
                    <div className="score-text-mobile">
                        {score} pts
                    </div>
                    <div className='team-logo-mobile'>
                        <img
                            src={logoUrl}
                            alt={`${teamName} logo`}
                        />
                    </div>
                </div>
                <div className="scale-wrapper-mobile">
                    <div className="scale-bar-mobile">
                        <div
                            className="scale-fill-mobile"
                            style={{
                                height: `100%`,
                                width: `${percentage}%`,
                                backgroundColor: color,
                            }}
                        ></div>
                    </div>
                    <div className="team-name-mobile">{teamName}</div>
                </div>
            </div>
        </>
    );
};

export default TeamScoreScale;
