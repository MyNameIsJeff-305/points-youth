import { csrfFetch } from "./csrf";

//Constants
const GET_TEAMS = 'teams/GET_TEAMS';
const ADD_TEAM = 'teams/ADD_TEAM';
const UPDATE_TEAM = 'teams/UPDATE_TEAM';
const DELETE_TEAM = 'teams/DELETE_TEAM';
const GET_TEAM = 'teams/GET_TEAM';
const INCREASE_SCORE = 'teams/INCREASE_SCORE';
const DECREASE_SCORE = 'teams/DECREASE_SCORE';

// Action Creators
const getTeams = (teams) => ({
    type: GET_TEAMS,
    teams,
});

const addTeam = (team) => ({
    type: ADD_TEAM,
    team,
});

const updateTeam = (team) => ({
    type: UPDATE_TEAM,
    team,
});

const deleteTeam = (teamId) => ({
    type: DELETE_TEAM,
    teamId,
});

const getTeam = (team) => ({
    type: GET_TEAM,
    team,
});

const increaseScore = (teamId, points) => ({
    type: INCREASE_SCORE,
    teamId,
    points,
});

const decreaseScore = (teamId, points) => ({
    type: DECREASE_SCORE,
    teamId,
    points,
});

// Thunks
export const fetchTeams = () => async (dispatch) => {
    const response = await csrfFetch('/api/teams');
    if (response.ok) {
        const { teams } = await response.json();
        dispatch(getTeams(teams));
    }
};

export const fetchTeam = (teamId) => async (dispatch) => {
    const response = await csrfFetch(`/api/teams/${teamId}`);
    if (response.ok) {
        const { team } = await response.json();
        dispatch(getTeam(team));
    }
};

export const createTeam = (teamData) => async (dispatch) => {
    const response = await csrfFetch('/api/teams', {
        method: 'POST',
        body: JSON.stringify(teamData),
    });
    if (response.ok) {
        const { team } = await response.json();
        dispatch(addTeam(team));
    }
};

export const updateTeamThunk = (teamId, teamData) => async (dispatch) => {
    const response = await csrfFetch(`/api/teams/${teamId}`, {
        method: 'PUT',
        body: JSON.stringify(teamData),
    });
    if (response.ok) {
        const { team } = await response.json();
        dispatch(updateTeam(team));
    }
};

export const deleteTeamThunk = (teamId) => async (dispatch) => {
    const response = await csrfFetch(`/api/teams/${teamId}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        dispatch(deleteTeam(teamId));
    }
};

export const increaseTeamScore = (teamId, points) => async (dispatch) => {
    const response = await csrfFetch(`/api/teams/${teamId}/score`, {
        method: 'POST',
        body: JSON.stringify({ points }),
    });
    if (response.ok) {
        dispatch(increaseScore(teamId, points));
    }
}

export const decreaseTeamScore = (teamId, points) => async (dispatch) => {
    const response = await csrfFetch(`/api/teams/${teamId}/substract-score`, {
        method: 'POST',
        body: JSON.stringify({ points }),
    });
    if (response.ok) {
        dispatch(decreaseScore(teamId, points));
    }
};

// Reducer
const initialState = {
    allTeams: [],
    team: null,
};

const teamsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TEAMS:
            return { ...state, allTeams: action.teams };
        case ADD_TEAM:
            return { ...state, allTeams: [...state.allTeams, action.team] };
        case UPDATE_TEAM:
            return {
                ...state,
                allTeams: state.allTeams.map(team =>
                    team.id === action.team.id ? action.team : team
                ),
            };
        case DELETE_TEAM:
            return {
                ...state,
                allTeams: state.allTeams.filter(team => team.id !== action.teamId),
            };
        case GET_TEAM:
            return { ...state, team: action.team };
        case INCREASE_SCORE:
            return {
                ...state,
                allTeams: state.allTeams.map(team =>
                    team.id === action.teamId ? { ...team, score: team.score + action.points } : team
                ),
            };
        case DECREASE_SCORE:
            return {
                ...state,
                allTeams: state.allTeams.map(team =>
                    team.id === action.teamId ? { ...team, score: team.score - action.points } : team
                ),
            };
        default:
            return state;
    }
};

export default teamsReducer;


