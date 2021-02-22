import { USER } from '../constants/action-types.constants';

const defaults = { users: [] }

export const user = (state: any = defaults, action: any) => {
    switch (action.type) {
        case USER:
            const newState = { ...state };
            newState[action.key] = action.value;
            return newState;
        default: 
            return state;
    }
};
