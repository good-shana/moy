import { Dispatch } from "redux";
import { Client } from "../../clients/client";
import { CreateUserInterface, UpdateUserInterface, UserInterface } from "../../interfaces";
import { getUsersInterface } from "../../interfaces/users/get-users.interface";
import { CREATE_USER_MODAL, UPDATE_USER_MODAL } from "../../modules/users/constants/modal.constants";
import { Action } from "../action";
import { USER } from "../constants/action-types.constants";
import { ModalAction } from "./modal.action";
import { PaginationAction } from "./pagination.action";

export class UserAction {

    private static client = new Client();

    public static getUsers(query: getUsersInterface) {
        return async (dispatch: Dispatch<any>, state: any) => {
            const { page, size, total, list } = await this.client.get('/api/users', {
                params: {
                    ...query,
                }
            });
            dispatch(new Action(USER).put('users', list));
            // dispatch(PaginationAction.update('user', ))
        }
    }
    
    public static createUser(values: CreateUserInterface) {
        return async (dispatch: Dispatch<any>, state: any) => {
            await this.client.post('/api/users', values);

            const { page, size } = state().pagination.user;
            dispatch(this.getUsers({ page, size }));
            dispatch(ModalAction.close(CREATE_USER_MODAL));
        }
    }

    public static updateUser(id: string, values: UpdateUserInterface) {
        return async (dispatch: Dispatch<any>, state: any) => {
            await this.client.put(`/api/users/${id}`, values);
            const users = state().user.users;
            users.forEach((user: UserInterface, index: number) => {
                if (user.id === id) {
                    users[index] = { ...user, ...values };
                }
            });
            dispatch(new Action(USER).put('users', [...users]));
            dispatch(ModalAction.close(UPDATE_USER_MODAL));
        }
    }

    public static deleteUser(id: string) {
        return async (dispatch: Dispatch<any>, state: any) => {
            await this.client.delete(`/api/users/${id}`);
        }
    }
}