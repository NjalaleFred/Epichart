import React from "react";
import {
    Input,
    FormControl,
    FormLabel,
    Select,
    Button,
    Box,
  } from "@chakra-ui/react";

export const CreatePatient = ({ handleSubmit, showForm, toggleForm, name, age, gender, phoneNumber, email, setName, setAge, setGender, setPhoneNumber, setEmail }) => {
  return (
    showForm && (
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
    )
  );
};
