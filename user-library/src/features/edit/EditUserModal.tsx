import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Editable,
  EditablePreview,
  EditableInput,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  saveEditedUser,
  setUerToEditCity,
  setUerToEditCountry,
  setUerToEditEmail,
  setUerToEditFirstName,
  setUerToEditLastName,
  setUerToEditStreetName,
  setUerToEditStreetNumber,
  toggleModal,
} from "../home/state/homeSlice";

export default function EditUserModal() {
  const userToEdit = useAppSelector((state) => state.homeSlice.userToEdit);
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.homeSlice.isModalOpen);
  // const { email, name, location } = userToEdit;

  const openOrCloseModal = () => {
    dispatch(toggleModal());
  };

  return (
    <Modal isOpen={isModalOpen} onClose={openOrCloseModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Editable defaultValue={userToEdit?.email}>
            <EditablePreview />
            <EditableInput
              onChange={(text) =>
                dispatch(setUerToEditEmail(text.target.value))
              }
            />
          </Editable>
          <Editable defaultValue={userToEdit?.name?.first}>
            <EditablePreview />
            <EditableInput
              onChange={(text) =>
                dispatch(setUerToEditFirstName(text.target.value))
              }
            />
          </Editable>
          <Editable defaultValue={userToEdit?.name?.last}>
            <EditablePreview />
            <EditableInput
              onChange={(text) =>
                dispatch(setUerToEditLastName(text.target.value))
              }
              //   onChange={(text) => setLastNameToSave(text.target.value)}
            />
          </Editable>
          <Editable defaultValue={userToEdit?.location?.city}>
            <EditablePreview />
            <EditableInput
              onChange={(text) => dispatch(setUerToEditCity(text.target.value))}
              //   onChange={(text) => setCityToSave(text.target.value)}
            />
          </Editable>
          <Editable defaultValue={userToEdit?.location?.street?.name}>
            <EditablePreview />
            <EditableInput
              onChange={(text) =>
                dispatch(setUerToEditStreetName(text.target.value))
              }
              //   onChange={(text) => setStreetNameToSave(text.target.value)}
            />
          </Editable>
          <Editable
            defaultValue={userToEdit?.location?.street?.number?.toString()}
          >
            <EditablePreview />
            <EditableInput
              onChange={(text) =>
                dispatch(setUerToEditStreetNumber(Number(text.target.value)))
              }
              //   onChange={(text) =>
              // setsStreetNumberToSave(Number(text.target.value))
              //   }
            />
          </Editable>
          <Editable defaultValue={userToEdit?.location?.country}>
            <EditablePreview />
            <EditableInput
              onChange={(text) =>
                dispatch(setUerToEditCountry(text.target.value))
              }
              //   onChange={(text) => setscountryToSave(text.target.value)}
            />
          </Editable>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => {
              openOrCloseModal();
              userToEdit && dispatch(saveEditedUser(userToEdit));
            }}
          >
            Save
          </Button>
          <Button onClick={openOrCloseModal} variant="ghost">
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
