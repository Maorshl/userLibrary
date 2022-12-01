import React, { useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Avatar,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { getUsers } from "../state/homeActions";
import { setUserToEdit, toggleModal } from "../state/homeSlice";
import { User } from "../../../models/users";

export default function UsersTable() {
  const users = useAppSelector((state) => state.homeSlice.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const onUserEdit = (user: User) => {
    dispatch(toggleModal());
    dispatch(setUserToEdit(user));
  };

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="whatsapp">
        <Thead>
          <Tr>
            <Th>Image</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Address</Th>
            <Th>UUID</Th>
            <Th>Edit</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user, i) => (
            <Tr key={`table-row-${i}`}>
              <Td>
                <Avatar src={user.picture?.medium} />
              </Td>
              <Td>
                {user.name?.title +
                  " " +
                  user.name?.first +
                  " " +
                  user.name?.last}
              </Td>
              <Td>{user.email}</Td>
              <Td>
                {user.location?.city +
                  " " +
                  user?.location?.street?.name +
                  " " +
                  user?.location?.street?.number +
                  " " +
                  user?.location?.country}
              </Td>
              <Td>{user.login?.uuid}</Td>
              <Td color={"blue"} onClick={() => onUserEdit(user)}>
                Edit
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Image</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Address</Th>
            <Th>UUID</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
