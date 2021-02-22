import { Action } from "../action";
import { MODAL } from "../constants/action-types.constants";

export class ModalAction {
    public static open<T extends any>(modal: string, data?: T) {
        return new Action(MODAL).put(modal, { visible: true, ...(data as any) });
    }

    public static close(modal: string) {
        return new Action(MODAL).put(modal, { visible: false });
    }
}