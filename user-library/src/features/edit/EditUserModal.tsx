import React, { useState } from "react";
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
import { saveEditedUser, toggleModal } from "../home/state/homeSlice";

export default function EditUserModal() {
  const userToEdit = useAppSelector((state) => state.homeSlice.userToEdit);
  const [userToSave, setUserToSave] = useState(userToEdit);
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.homeSlice.isModalOpen);
  const { email, name, location } = userToEdit;

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
          <Editable defaultValue={email}>
            <EditablePreview />
            <EditableInput
              onChange={(text) =>
                setUserToSave((prevState) => {
                  return { ...prevState, email: text.target.value };
                })
              }
            />
          </Editable>
          <Editable defaultValue={name?.first}>
            <EditablePreview />
            <EditableInput
              onChange={(text) =>
                setUserToSave((prevState) => {
                  return { ...prevState, name: { first: text.target.value } };
                })
              }
            />
          </Editable>
          <Editable defaultValue={name?.last}>
            <EditablePreview />
            <EditableInput
              onChange={(text) =>
                setUserToSave((prevState) => {
                  return { ...prevState, name: { last: text.target.value } };
                })
              }
            />
          </Editable>
          <Editable defaultValue={location?.city}>
            <EditablePreview />
            <EditableInput
              onChange={(text) =>
                setUserToSave((prevState) => {
                  return {
                    ...prevState,
                    location: { city: text.target.value },
                  };
                })
              }
            />
          </Editable>
          <Editable defaultValue={location?.street?.name}>
            <EditablePreview />
            <EditableInput
              onChange={(text) =>
                setUserToSave((prevState) => {
                  return {
                    ...prevState,
                    location: { street: { name: text.target.value } },
                  };
                })
              }
            />
          </Editable>
          <Editable defaultValue={location?.street?.number?.toString()}>
            <EditablePreview />
            <EditableInput
              onChange={(text) =>
                setUserToSave((prevState) => {
                  return {
                    ...prevState,
                    location: { street: { number: Number(text.target.value) } },
                  };
                })
              }
            />
          </Editable>
          <Editable defaultValue={location?.country}>
            <EditablePreview />
            <EditableInput
              onChange={(text) =>
                setUserToSave((prevState) => {
                  return {
                    ...prevState,
                    location: { country: text.target.value },
                  };
                })
              }
            />
          </Editable>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => {
              openOrCloseModal();
              dispatch(saveEditedUser(userToSave));
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
