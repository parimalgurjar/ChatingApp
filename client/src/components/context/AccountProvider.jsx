import React, { createContext, useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";

// Create the context
export const AccountContext = createContext(null);

// Create a provider component
const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [person, setPerson] = useState({});
  const [activeUsers, setActiveUsers] = useState([]);
  const [newMessageFlag, setNewMessageFlag] = useState(false);

  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:9000");
  }, []);

  return (
    <AccountContext.Provider
      value={{
        account,
        setAccount,
        person,
        setPerson,
        socket,
        activeUsers,
        setActiveUsers,
        newMessageFlag,
        setNewMessageFlag
        
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
