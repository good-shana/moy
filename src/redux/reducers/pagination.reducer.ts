import { PAGINATION } from "../constants/action-types.constants";

const defaults = {
    user: { page: 1, size: 10, total: 0, length: 0 },
};

export const pagination = (state: any = defaults, action: any) => {
    switch (action.type) {
        case PAGINATION: 
            const newState = { ...defaults, [action.key]: action.value };
            return newState;
        default: 
            return state;
    }
}
