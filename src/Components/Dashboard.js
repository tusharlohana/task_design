import React from "react";

const Dashboard = () => {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
    console.log("logout clicked");
  };
  return (
    <div>
      <h1>You are logedIn</h1>
      <button>
        <a onClick={() => logout()}> logout</a>
      </button>
    </div>
  );
};

export default Dashboard;
