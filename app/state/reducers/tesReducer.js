import {GET_REPOS, GET_REPOS_SUCCESS, GET_REPOS_FAIL} from '../actions/index';

export default function tesReducer (state = {}, action) {
  switch (action.type) {
  case GET_REPOS:
    return {...state, loading: true};
  case GET_REPOS_SUCCESS:
    return {...state, loading: false, repos: action.payload.data};
  case GET_REPOS_FAIL:
    return {...state, loading: false, error: action.payload.error};
  default:
    return state;
  }
}

export function tesRepos () {
  return {
    type: GET_REPOS,
    payload: {
      request: {
        url: ''
      }
    }
  };
}