import { Avatar, Form, Modal, Select, Spin } from 'antd';
import { debounce } from 'lodash';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { AppContext } from '../../Context/AppProvider';
import { db } from '../../firebase/config';

function DebounceSelect({
  fetchOptions,
  debounceTimeout = 500,
  curMembers,
  ...props
}) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState([]);

  const debounceFetcher = useMemo(() => {
    const loadOptions = (value) => {
      setOptions([]);
      setFetching(true);

      fetchOptions(value, curMembers)
        .then((newOptions) => {
          console.log(value);
          setOptions(newOptions);
          setFetching(false);
        })
        .catch((error) => {
          console.log(error.message);
        });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout, curMembers]);

  useEffect(() => {
    return () => {
      // clear when unmount
      setOptions([]);
    };
  }, []);

  // console.log(options);

  return (
    <Select
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size='small' /> : null}
      {...props}
    >
      {options.map((option) => (
        <Select.Option
          key={option.value}
          value={option.value}
          title={option.label}
        >
          <Avatar size='small' src={option.photoURL}>
            {option.photoURL ? '' : option.label?.charAt(0)?.toUpperCase()}
          </Avatar>
          {` ${option.label}`}
        </Select.Option>
      ))}
    </Select>
  );
}

async function fetchUserList(search, curMembers) {
  return db
    .collection('users')
    .where('keywords', 'array-contains', search?.toLowerCase())
    .orderBy('displayName')
    .get()
    .then((snapshot) => {
      return snapshot.docs
        .map((doc) => {
          return {
            label: doc.data().displayName,
            value: doc.data().uid,
            photoURL: doc.data().photoURL,
          };
        })
        .filter((opt) => !curMembers.includes(opt.value));
    });
}

const InviteMemberModal = () => {
  const [value, setValue] = useState([]);
  const [form] = Form.useForm();

  const {
    inviteMemberVisible,
    setInviteMemberVisible,
    selectedRoom,
    selectedRoomId,
  } = useContext(AppContext);

  const handleOk = () => {
    form.resetFields();
    setValue([]);
    let roomRef = db.collection('rooms').doc(selectedRoomId);
    roomRef.update({
      members: [...selectedRoom.members, ...value.map((val) => val.value)],
    });

    setInviteMemberVisible(false);
  };

  const handleCancel = () => {
    form.resetFields();
    setValue([]);
    setInviteMemberVisible(false);
  };

  return (
    <div>
      <Modal
        title='Mời thành viên'
        open={inviteMemberVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose={true}
      >
        <Form form={form} layout='vertical'>
          <DebounceSelect
            mode='multiple'
            name='search-user'
            lable='Tên các thành viên'
            value={value}
            placeholder='Nhập tên thành viên'
            fetchOptions={fetchUserList}
            onChange={(newValue) => setValue(newValue)}
            style={{ width: '100%' }}
            curMembers={selectedRoom?.members}
          />
        </Form>
      </Modal>
    </div>
  );
};

export default InviteMemberModal;
