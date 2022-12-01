import React from "react";
import EditUserModal from "../edit/EditUserModal";
import UsersTable from "./components/UsersTable";

function HomeScreen() {
  return (
    <div className="main-table">
      <UsersTable />
      <EditUserModal />
    </div>
  );
}

export default HomeScreen;
