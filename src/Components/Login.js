import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  FormControl,
  FormLabel,
  Button,
  Input,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
} from "@chakra-ui/react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [setUser] = useState("")
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    fetch("http://localhost:9292/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setUser(data)
          history.push(`/doctor/${data.doctor_id}`);
        }
      })
      .catch((error) => {
        console.error("Signup request failed:", error);
      });
  }

  return (
    <Card
      maxW="md"
      mx="auto"
      mt={8}
      p={6}
      borderWidth={1}
      borderRadius="md"
      boxShadow="md"
    >
      <CardHeader>
        <Heading as="h2" size="md">
          Log in
        </Heading>
      </CardHeader>

      <CardBody>
        <div>
          <form onSubmit={handleLogin}>
            <FormControl isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                vaule={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            {error && (
              <Text color="red.500" mb={4}>
                {error}
              </Text>
            )}
            <Button type="submit" colorScheme="blue">
              Log in
            </Button>
          </form>
        </div>
      </CardBody>
    </Card>
  );
};
