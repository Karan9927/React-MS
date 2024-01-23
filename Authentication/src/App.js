import React from "react";
import { AuthProvider } from "./AuthContext";
import Main from "./Main";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </div>
  );
};

export default App;
