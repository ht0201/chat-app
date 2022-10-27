import React, { createContext, useContext, useMemo, useState } from 'react';
import UseFirestore from '../hooks/useFirestore';
import { AuthContext } from './AuthProvider';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState('');
  const [inviteMemberVisible, setInviteMemberVisible] = useState(false);

  //get uid of user current
  const {
    user: { uid },
  } = useContext(AuthContext);

  // create condition object
  const roomsCondition = useMemo(() => {
    return {
      fieldName: 'members',
      operator: 'array-contains',
      compareValue: uid,
    };
  }, [uid]);

  // find on collection
  const rooms = UseFirestore('rooms', roomsCondition);

  const selectedRoom = useMemo(
    () => rooms?.find((room) => room.id === selectedRoomId),
    [rooms, selectedRoomId]
  );

  const usersCondition = useMemo(() => {
    if (selectedRoom) {
      return {
        fieldName: 'uid',
        operator: 'in',
        compareValue: selectedRoom.members,
      };
    }
  }, [selectedRoom?.members]);

  const members = UseFirestore('users', usersCondition);

  const clearState = () => {
    setSelectedRoomId('');
    setIsAddRoomVisible(false);
    setInviteMemberVisible(false);
  };

  return (
    <AppContext.Provider
      value={{
        rooms,
        members,
        selectedRoom,
        isAddRoomVisible,
        setIsAddRoomVisible,
        selectedRoomId,
        setSelectedRoomId,
        inviteMemberVisible,
        setInviteMemberVisible,
        clearState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
