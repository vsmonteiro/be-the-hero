import React, { useState } from "react";

export const Context = React.createContext({
  ongId: "",
  setOngId: () => {},
  ongName: "",
  setOngName: () => {},
});

function AppContext({ children }) {
  const [ongId, setOngId] = useState("");
  const [ongName, setOngName] = useState("");

  const defaultContext = {
    ongId,
    ongName,
    setOngId,
    setOngName,
  };

  return <Context.Provider value={defaultContext}>{children}</Context.Provider>;
}

export default AppContext;
