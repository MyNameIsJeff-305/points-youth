import { useState } from 'react';
import TeamScoreScale from './TeamScoreScale';

import './TeamScoreBoard.css';

const TeamScoreBoard = ({ ogTeams }) => {
    // eslint-disable-next-line no-unused-vars
    const [teams, setTeams] = useState(ogTeams);

    const tempMax = Math.max(...teams.map((team) => team.score), 1); // avoid div by 0

    return (
        <div className="team-score-board">
            {teams.map((team) => (
                <div key={team.name}>
                    <TeamScoreScale
                        teamName={team.name}
                        color={team.color}
                        score={team.score}
                        tempMax={tempMax}
                        logoUrl={team.logoUrl}
                    />
                </div>
            ))}
        </div>
    );
};

export default TeamScoreBoard;
