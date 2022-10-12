import React from "react";

export const UserSelectionContext = React.createContext();

const UserSelectionContextProvider = ({ children, value }) => {
  return (
    <UserSelectionContext.Provider value={value}>
      {children}
    </UserSelectionContext.Provider>
  );
};

export default UserSelectionContextProvider;
