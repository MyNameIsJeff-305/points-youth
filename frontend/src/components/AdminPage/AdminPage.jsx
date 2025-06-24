import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUserThunk, restoreUser } from '../../store/session'; // Assuming you have a logout action in your session store
import { fetchTeams } from '../../store/teams'; // Assuming you have a fetchTeams action

import TeamPane from './TeamPane'; // Assuming you have a TeamPane component to display each team

import './AdminPage.css';
import { useEffect } from 'react';

export default function AdminPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const teams = useSelector((state) => state.teams.allTeams); // Assuming you have a teams reduce
    const user = useSelector((state) => state.session.user); // Assuming you have a session reducer

    useEffect(() => {
        dispatch(fetchTeams())
        dispatch(restoreUser()); // Restore user session on component mount
    }, [dispatch]);

    // Redirect to Home if no user is logged in
    if (!user || !user.user) {
        navigate('/'); // Redirect to home page if no user is logged in
        return null; // Prevent rendering the admin page
    }

    const logout = async () => {
        await dispatch(logoutUserThunk()); // Wait for logout to complete
        dispatch(restoreUser());           // Optionally refresh session
        navigate('/');
    };

    return (
        <div className="admin-page">
            <header className="admin-header">
                <div>
                    <h1>Admin Scores</h1>
                </div>
                <div className='admin-header-links'>
                    <Link to="/" className="home-link">Home</Link>
                    <p className="logout-link" onClick={logout}>Logout</p>
                </div>
            </header>
            {
                teams && (
                    <section className="admin-content">
                        {teams.map((team) => (
                            <TeamPane key={team.id} teamId={team.id} />
                        ))}
                    </section>
                )
            }
            <footer className="admin-footer">
            </footer>
        </div>
    );
}