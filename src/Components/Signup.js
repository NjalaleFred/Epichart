import { useHistory } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

export const Signup = () => {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    fetch("http://localhost:9292/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        role: role,
        name: name,
        email: email,
        password: password,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          history.push("/login");
        }
      })
      .catch((error) => {
        console.error("Signup request failed:", error);
      });
  };

  return (
    <Box
      maxW="md"
      mx="auto"
      mt={8}
      p={6}
      borderWidth={1}
      borderRadius="md"
      boxShadow="md"
    >
      <Heading as="h1" mb={6}>
        Signup
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Role</FormLabel>
          <Select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select role</option>
            <option value="doctor">Doctor</option>
          </Select>
        </FormControl>

        {role === "doctor" && (
          <FormControl mb={4}>
            <FormLabel>Doctor's Name</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
        )}

        <FormControl mb={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        {error && (
          <Text color="red.500" mb={4}>
            {error}
          </Text>
        )}

        <Button type="submit" colorScheme="blue">
          Sign Up
        </Button>
      </form>
    </Box>
  );
};
