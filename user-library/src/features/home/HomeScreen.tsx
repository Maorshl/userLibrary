import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import UsersTable from "./components/UsersTable";
import { getUsers } from "./state/homeActions";

function HomeScreen() {
  return (
    <div>
      <UsersTable />
    </div>
  );
}

export default HomeScreen;
