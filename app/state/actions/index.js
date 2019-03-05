import {createAction} from 'redux-actions';

export const GET_REPOS = 'GET_REPOS';
export const GET_REPOS_SUCCESS = 'GET_REPOS_SUCCESS';
export const GET_REPOS_FAIL = 'GET_REPOS_FAIL';

export const showRepos = createAction(GET_REPOS_SUCCESS);
export const hideRepos = createAction(GET_REPOS_FAIL);
