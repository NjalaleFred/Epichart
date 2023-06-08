import React, { useState } from "react";
import { CreatePatient } from "../CreatePatient";
import { Box, Button } from "@chakra-ui/react";
import { PatientList } from "./PatientList";

export const Patient = ({ doctor }) => {
  const [showForm, setShowForm] = useState(false);
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

  return (
    <Box>
      <PatientList doctor={doctor} />
      <Button onClick={toggleForm} mt={4} colorScheme="teal">
        Create Patient
      </Button>
      <CreatePatient
        handleSubmit={handleSubmit}
        showForm={showForm}
        toggleForm={toggleForm}
        name={name}
        age={age}
        gender={gender}
        phoneNumber={phoneNumber}
        email={email}
        setName={setName}
        setAge={setAge}
        setGender={setGender}
        setPhoneNumber={setPhoneNumber}
        setEmail={setEmail}
      />
    </Box>
  );
};
