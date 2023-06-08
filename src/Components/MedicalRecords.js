import React, { useState, useRef } from "react";
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Button,
  Input,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export const MedicalRecords = ({ doctor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [medication, setMedication] = useState("");
  const [treatment, setTreatment] = useState("");
  const [vitals, setVitals] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [recordId, setRecordId] = useState("");
  const initialRef = useRef();
  const finalRef = useRef();

  const toggleForm = (id) => {
    setRecordId(id);
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleUpdateRecord = (e) => {
    e.preventDefault();
    if (recordId){
      fetch(`http://localhost:9292/records/${recordId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
          medication: medication,
          treatment: treatment,
          vitals: vitals,
          diagnosis: diagnosis,
        }),
      })
        .then((resp) => resp.json())
        .then((data) => {
          handleClose();
        });
    }
  };

  const myMedicalRecords = doctor.medical_records ? (
    doctor.medical_records.map((record) => (
      <Box
        key={record.id}
        bg="white"
        boxShadow="md"
        p={4}
        mb={4}
        borderRadius="md"
      >
        <Heading as="h2" size="lg" mb={2}>
          Patient: {record.patient.name}
        </Heading>
        <Text>
          <strong>Diagnosis:</strong> {record.diagnosis}
        </Text>
        <Text>
          <strong>Treatment:</strong> {record.treatment}
        </Text>
        <Text>
          <strong>Medication:</strong> {record.medication}
        </Text>
        <Text>
          <strong>Vitals:</strong> {record.vitals}
        </Text>

        <Button onClick={()=>toggleForm(record.id)}>Update</Button>
      </Box>
    ))
  ) : (
    <Text>No medical records found.</Text>
  );

  return (
    <Box>
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
      {myMedicalRecords}
    </Box>
  );
};
