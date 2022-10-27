import { Form, Input, Modal } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppProvider';
import { AuthContext } from '../../Context/AuthProvider';
import { addDocument } from '../../firebase/services';

const AddRoomModal = () => {
  const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext);
  const {
    user: { uid },
  } = useContext(AuthContext);

  const [form] = Form.useForm();

  const handleOk = () => {
    addDocument('rooms', { ...form.getFieldsValue(), members: [uid] });

    form.resetFields();
    setIsAddRoomVisible(false);
  };

  const handleCancel = () => {
    form.resetFields();
    setIsAddRoomVisible(false);
  };

  return (
    <div>
      <Modal
        title='Tao phong'
        open={isAddRoomVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout='vertical'>
          <Form.Item label='Ten phong' name='name'>
            <Input placeholder='nhap ten phong' />
          </Form.Item>
          <Form.Item label='Mo ta' name='description'>
            <TextArea placeholder='nhap mo ta' />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddRoomModal;
