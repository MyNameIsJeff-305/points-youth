import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUserThunk, restoreUser } from '../../store/session'; // Assuming you have a logout action in your session store

import './AdminPage.css';
import { useEffect } from 'react';

export default function AdminPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state) => state.session.user); // Assuming you have a session reducer

    useEffect(() => {
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
                <h1>Admin Scores</h1>
                <p className="logout-link" onClick={logout}>Logout</p>
            </header>
            <p>This page is under construction.</p>
            <p>Admin functionalities will be implemented soon.</p>
        </div>
    );
}