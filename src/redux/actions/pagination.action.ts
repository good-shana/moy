import { Action } from "../action";
import { PAGINATION } from "../constants/action-types.constants";

export class PaginationAction {
    public static update(key: string, page: number, size: number, total: number, length: number) {
        return new Action(PAGINATION).put(key, {
            page,
            size,
            total,
            length,
        });
    }
}
