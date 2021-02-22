import { PUT } from './constants/verbs.constants';

export class Action {
    constructor(
        private readonly type: string,
    ) {
        
    }

    put<T extends any>(key: string, value: T) {
        return {
            type: this.type,
            key,
            verb: PUT,
            value,
        }
    }
}