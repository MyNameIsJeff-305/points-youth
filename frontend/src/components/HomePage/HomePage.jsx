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
                <span>Entonces tus oídos oirán a tus espaldas palabra, diciendo: Este es el camino, andad por él, ya sea que vayáis a la derecha o a la izquierda. <br></br>Isaías 30:21</span>
            </div>
            <div>
                <TeamScoreBoard ogTeams={teams} />
            </div>
            <div className='footer'>
                <button onClick={() => dispatch(fetchTeams())}>
                    <MdRefresh />
                </button>
                {user?.user ? (
                    <div className="welcome-message">
                        <p>Welcome, {user?.user?.username}!</p>
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