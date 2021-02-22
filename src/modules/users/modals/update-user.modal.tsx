import { Form, Input, Modal } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateUserInterface } from '../../../interfaces';
import { ModalAction, UserAction } from '../../../redux/actions';
import { UPDATE_USER_MODAL } from '../constants/modal.constants';

export const UpdateUserModal = () => {

    const dispatch = useDispatch();

    const { visible, ...user } = useSelector<any, any>(
        state => state.modal[UPDATE_USER_MODAL] ?? {} as any,
    );

    const [form] = Form.useForm();
    const formLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 18 },
    };

    const submit = (values: UpdateUserInterface) => {
        dispatch(UserAction.updateUser(user.id, values));
    };

    return <Modal
        title="Update user"
        visible={visible}
        onCancel={() => dispatch(ModalAction.close(UPDATE_USER_MODAL))}
        onOk={() => form.submit()}
    >
        <Form
            form={form}
            onFinish={(values) => submit(values)}
            {...formLayout}
        >
            <Form.Item
                label="username"
                name="username"
                initialValue={user.username}
                required
            >
                <Input placeholder="Please enter your username" />
            </Form.Item>
            <Form.Item
                label="password"
                name="password"
                initialValue={user.password}
                required
            >
                <Input placeholder="Please enter your password" />
            </Form.Item>
            <Form.Item
                label="paltform"
                name="platform"
                initialValue={user.platform}
                required
            >
                <Input placeholder="Please enter your platform" />
            </Form.Item>
        </Form>
    </Modal>
}
