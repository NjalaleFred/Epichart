import React from "react";
import {
  FormControl,
  FormLabel,
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export const UpdatePatient = ({
  diagnosis,
  treatment,
  medication,
  vitals,
  handleUpdateRecord,
  initialRef,
  finalRef,
  setDiagnosis,
  setMedication,
  setVitals,
  setTreatment,
  handleClose,
  isOpen,
}) => {
  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={handleClose}
    >
      <ModalOverlay bg="transparent" />
      <ModalContent>
        <ModalHeader>Update Record</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <form onSubmit={(e) => handleUpdateRecord(e)}>
            <FormControl isRequired>
              <FormLabel>Diagnosis</FormLabel>
              <Input
                type="text"
                value={diagnosis}
                onChange={(e) => setDiagnosis(e.target.value)}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Treatment</FormLabel>
              <Input
                type="text"
                value={treatment}
                onChange={(e) => setTreatment(e.target.value)}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Medication</FormLabel>
              <Input
                type="text"
                value={medication}
                onChange={(e) => setMedication(e.target.value)}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Vitals</FormLabel>
              <Input
                type="text"
                value={vitals}
                onChange={(e) => setVitals(e.target.value)}
              />
            </FormControl>

            <Button type="submit" colorScheme="blue">
              Update
            </Button>
          </form>
        </ModalBody>

        <ModalFooter>
          <Button onClick={handleClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
