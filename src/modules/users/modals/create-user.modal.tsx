import { Form, Input, Modal } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CreateUserInterface } from '../../../interfaces';
import { ModalAction, UserAction } from '../../../redux/actions';
import { CREATE_USER_MODAL } from '../constants/modal.constants';

export const CreateUserModal = () => {

    const dispatch = useDispatch();
    const { visible } = useSelector<any, any>(
        state => state.modal[CREATE_USER_MODAL] ?? {} as any,
    );

    const [form] = Form.useForm();
    const formLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 18 },
    };

    const submit = (values: CreateUserInterface) => {
        dispatch(UserAction.createUser(values));
    };

    return <Modal
        title="Create user"
        visible={visible}
        onCancel={() => dispatch(ModalAction.close(CREATE_USER_MODAL))}
        onOk={() => form.submit()}
    >
        <Form
            form={form}
            onFinish={(values) => submit(values)}
            {...formLayout}
        >
            <Form.Item label="username" required name="username">
                <Input placeholder="Please enter your username" />
            </Form.Item>
            <Form.Item label="password" required name="password">
                <Input placeholder="Please enter your password" />
            </Form.Item>
            <Form.Item label="platform" required name="platform">
                <Input placeholder="Please enter your platform" />
            </Form.Item>
        </Form>
    </Modal>
}