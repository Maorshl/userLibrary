import React, { useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { getUsers } from "../state/homeActions";

export default function UsersTable() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.homeSlice.users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr>
              <Td>{user.name?.first + " " + user.name?.last}</Td>
              <Td>{user.email}</Td>
              <Td isNumeric>{user.location?.postcode}</Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
