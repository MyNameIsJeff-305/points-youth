import './TeamScoreScale.css';

const TeamScoreScale = ({ teamName, color, logoUrl, score, tempMax }) => {
    const percentage = tempMax > 0 ? (score / tempMax) * 100 : 0;

    return (
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
    );
};

export default TeamScoreScale;
