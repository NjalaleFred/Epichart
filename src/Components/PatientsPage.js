import React, { useState } from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Select,
  Image,
  IconButton,
} from "@chakra-ui/react";

export const Patient = ({ doctor}) => {
  const [showForm, setShowForm] = useState(false);
  const [updateFrom, setUpdateFrom] = useState(false)
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [patient, setPatient] = useState([]);

  const toggleForm = () => {
    setShowForm(!showForm);
  };


  const handleSubmit = () => {
    fetch("http://localhost:9292/patients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        age: age,
        gender: gender,
        phoneNumber: phoneNumber,
        email: email,
        doctor_id: doctor.id,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setPatient(data);
        toggleForm(); // Hide the form after successful submission
      });
  };

  


  const myPatientList = doctor.medical_records ? (
    <Table variant="striped">
      <Thead>
        <Tr>
          <Th>Profile</Th>
          <Th>Name</Th>
          <Th>Age</Th>
          <Th>Gender</Th>
          <Th>Email</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {doctor.medical_records.map((record) => (
          <Tr key={record.patient.id}>
            <Td>
              <Image
                src="data:image/jpeg;base64,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"
                boxSize="50px"
                alt="User"
              />
            </Td>
            <Td>{record.patient.name}</Td>
            <Td>{record.patient.age}</Td>
            <Td>{record.patient.gender}</Td>
            <Td>{record.patient.email}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  ) : (
    <strong>No medical records found.</strong>
  );

  return (
    <Box>
      {myPatientList}
      <Button onClick={toggleForm} mt={4} colorScheme="teal">
        Create Patient
      </Button>
      {showForm && (
        <Box
          mt={4}
          p={4}
          borderWidth="1px"
          borderColor="gray.200"
          borderRadius="md"
        >
          <FormControl isRequired mb={2}>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired mb={2}>
            <FormLabel>Age</FormLabel>
            <Input
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired mb={2}>
            <FormLabel>Gender</FormLabel>
            <Select
              placeholder="Select gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>
          </FormControl>
          <FormControl isRequired mb={2}>
            <FormLabel>Phone Number</FormLabel>
            <Input
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired mb={2}>
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <Button onClick={handleSubmit} colorScheme="teal" mt={4}>
            Submit
          </Button>
        </Box>
      )}
    </Box>
  );
};
