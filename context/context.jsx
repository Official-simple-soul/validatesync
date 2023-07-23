import React, { useContext, useState } from 'react';

const chatContext = React.createContext();

const ChatProvider = ({ children }) => {
  const [userChatGlobal, setUserChatGlobal] = useState('First');
  // const [adminChatGlobal, setAdminChatGlobal] = useState('');

  return (
    <chatContext.Provider
      value={{
        userChatGlobal,
        setUserChatGlobal,
        // adminChatGlobal,
        // setAdminChatGlobal,
      }}
    >
      {children}
    </chatContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(chatContext);
};

export { useGlobalContext, ChatProvider };
