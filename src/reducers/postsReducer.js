import { CREATE_POST, FETCH_POSTS, FETCH_POST, UPDATE_POST, DELETE_POST } from '../actions/posts'

const initialState = []

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
            return [
                ...state,
                action.post
            ]
        case FETCH_POSTS:
            return [
                ...state
            ]
        case FETCH_POST:
            return [
                ...state.filter((post) => post.id === action.id)
            ]
        case UPDATE_POST:
            return state 
        case DELETE_POST:
            return state.filter((post) => post.id !== action.id)
        default:
            return state
    }
}
  
export default postsReducer