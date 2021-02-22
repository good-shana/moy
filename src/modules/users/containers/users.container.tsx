import { Button, Input, Popconfirm, Table } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMount } from 'react-use';
import { ReloadOutlined } from '@ant-design/icons';
import { Tools } from '../../components/tools';
import { ModalAction, PaginationAction, UserAction } from '../../../redux/actions';
import { CreateUserModal } from '../modals/create-user.modal';
import { CREATE_USER_MODAL, UPDATE_USER_MODAL } from '../constants/modal.constants';
import { UpdateUserModal } from '../modals/update-user.modal';

export const UsersContainer = () => {

    const dispatch = useDispatch();

    const users = useSelector<any, any>(state => state.user.users ?? [] as any);
    const pagination = useSelector<any, any>(
        state => state.pagination.user ?? {} as any,
    );

    useMount(async () => {
        dispatch(UserAction.getUsers({
            page: pagination.page,
            size: pagination.size,
        }));
    });

    const refresh = (page: number = pagination.page, size: number = pagination.size) => {
        dispatch(UserAction.getUsers({
            page,
            size,
        }));
    };
    const onPageChange = (page: number, size?: number) => {
        refresh(page, size);
    };

    return <div>
        <Tools>
            <Input.Search 
                style={{ width: 240 }} 
                placeholder="platform"
                onSearch={(value) => {
                    dispatch(UserAction.getUsers({
                        page: pagination.page,
                        size: pagination.size,
                        key: value,
                    }));
                }}
            />
            <Button
                type="primary"
                onClick={() => dispatch(ModalAction.open(CREATE_USER_MODAL))}
            >
                Create
            </Button>
            <Button
                type="ghost"
                icon={<ReloadOutlined />}
                onClick={() => refresh()}
            />
        </Tools>
        <Table
            dataSource={users}
            rowKey="id"
            pagination={{
                total: pagination.total,
                current: pagination.page,
                pageSize: pagination.size,
                pageSizeOptions: ['5', '10', '20'],
                showSizeChanger: true,
                onShowSizeChange: onPageChange,
                onChange: onPageChange,
            }}
        >
            <Table.Column title="username" key="username" dataIndex="username" />
            <Table.Column title="password" key="password" dataIndex="password" />
            <Table.Column title="platform" key="platform" dataIndex="platform" />
            <Table.Column title="operation" key="operation" render={(record) => {
                return <span>
                    <Button
                        type="primary"
                        onClick={() => dispatch(ModalAction.open(UPDATE_USER_MODAL, record))}
                    >
                        Edit
                    </Button>
                    <Popconfirm 
                        title="Confirm to delete this user?"
                        onConfirm={() => dispatch(UserAction.deleteUser(record.id))}
                    >
                        <Button danger>Delete</Button>
                    </Popconfirm>
                </span>
            }} />
        </Table>

        <CreateUserModal />
        <UpdateUserModal />
    </div>
}
