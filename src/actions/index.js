import { DIFFICULTY, MAX_POINTS } from '../constants/action-types';


export function changeDifficulty(difficulty) {
    return {
        type: "DIFFICULTY",
        difficulty
    };
}

export function maxPoints(number) {
    return {
        type: "MAX_POINTS",
        number
    }
}
