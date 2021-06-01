import { DIFFICULTY, MAX_POINTS } from '../constants/action-types';

const initialState = {
    maxpoints: 5,
    variants: 4
};


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case MAX_POINTS:
            var newState = { ...state };
            return {
                ...newState,
                maxpoints: action.number
            };
        case DIFFICULTY:
            var anotherState = { ...state };
            return {
                ...anotherState,
                variants: action.difficulty
            };

        default:
            return state;
    }
}

export default rootReducer;
