import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTeamScoreThunk, fetchTeams } from '../../../store/teams'; // Custom thunk

import './TeamPane.css';

export default function TeamPane({ teamId }) {
    const dispatch = useDispatch();

    const team = useSelector((state) => state.teams.allTeams[teamId-1]); // Assuming you have a teams reducer that stores team data by ID

    useEffect(() => {
        dispatch(fetchTeams(teamId)); // Fetch the team data when the component mounts
    }, [dispatch, teamId]);

    const [scoreInput, setScoreInput] = useState('');
    const [errors, setErrors] = useState({});
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const validateInput = (value) => {
        if (value.trim() === '') {
            setErrors({ score: 'Score is required' });
            setIsButtonDisabled(true);
            return;
        }

        const parsed = Number(value);

        if (isNaN(parsed)) {
            setErrors({ score: 'Score must be a number' });
            setIsButtonDisabled(true);
        } else if (parsed === 0) {
            setErrors({ score: 'Score cannot be zero' });
            setIsButtonDisabled(true);
        } else if (parsed*-1 > team.score) {
            setErrors({ score: 'You cannot decrease the score below zero' });
            setIsButtonDisabled(true);
        } else {
            setErrors({});
            setIsButtonDisabled(false);
        }
    };

    useEffect(() => {
        validateInput(scoreInput);
    }, [scoreInput]);

    if (!team) {
        return <div className="team-pane">Loading...</div>; // Show loading state if team data is not available
    }


    const handleInputChange = (e) => {
        setScoreInput(e.target.value);
    };

    const handleUpdateScore = async () => {
        const parsedScore = Number(scoreInput);

        if (isNaN(parsedScore) || parsedScore === 0) return;

        await dispatch(updateTeamScoreThunk(team.id, parsedScore)).then(() => {
            dispatch(fetchTeams(team.id)); // Refresh the team data after updating the score
        })

        setScoreInput('');
        setIsButtonDisabled(true);
    };

    return (
        <div className="team-pane">
            <div className="team-header">
                <img src={team.logoUrl} alt={`${team.name} logo`} className="team-logo-img" />
                <h2>{team.name}</h2>
            </div>
            <p className="team-description">{team.description}</p>
            <div className="team-details">
                <h2>Score: {team.score}</h2>
            </div>
            <div className="team-actions">
                <div className="add-score-pane">
                    <input
                        type="number"
                        className="score-input"
                        value={scoreInput}
                        onChange={handleInputChange}
                        placeholder="e.g. 5 or -5"
                    />
                    {errors.score && <p className="error-message">{errors.score}</p>}
                    <button
                        className="Save"
                        disabled={isButtonDisabled}
                        onClick={handleUpdateScore}
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
}
