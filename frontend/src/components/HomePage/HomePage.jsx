import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TeamScoreBoard from '../TeamScoreBoard';
import { fetchTeams } from '../../store/teams'; // Assuming you have a fetchTeams action
import { restoreUser, logoutUserThunk } from '../../store/session';
import { ThreeDot } from "react-loading-indicators";

import { MdRefresh } from "react-icons/md";

import './Homepage.css';
import { Link } from 'react-router-dom';

export default function HomePage() {
    const teams = useSelector((state) => state.teams.allTeams);
    const user = useSelector((state) => state.session.user); // Assuming you have a session reducer

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchTeams());
        dispatch(restoreUser()); // Restore user session on component mount
    }, [dispatch])

    if (!teams || teams.length === 0) {
        return (
            <div className='loading'>
                <ThreeDot color="#f4e491" size="medium" text="" textColor="" />
                <p>Loading teams...</p>
            </div>
        );
    }

    const logout = async () => {
        await dispatch(logoutUserThunk());
        navigate('/');
    };

    return (
        <div className='homepage'>
            <div className='header'>
                <h1>Semana de la Juventud</h1>
                <tittle>Más allá del espejo: Jóvenes con identidad en un mundo sin dirección</tittle>
            </div>
            <div className='scoreboard'>
                <TeamScoreBoard ogTeams={teams} />
            </div>
            <div className='footer'>
                <div className='button-container'>
                    <button onClick={() => dispatch(fetchTeams())}>
                        <MdRefresh />
                    </button>
                </div>
                {user?.user ? (
                    <div className='admin-links'>
                        <Link to="/admin" className="login-link">Admin</Link>
                        <p className="logout-link" onClick={logout}>Logout</p>
                    </div>
                ) : (
                    <div className='welcome-message'>

                        <Link to="/login" className="login-link">Login</Link>
                    </div>
                )}
            </div>
        </div>
    );
}