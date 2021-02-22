import { MODAL } from '../constants/action-types.constants';

const defaults = {};

export const modal = (state: any = defaults, action: any) => {

    switch (action.type) {
        case MODAL: 
            state[action.key] = action.value;
            return state;
        default: 
            return state;
    }
}
