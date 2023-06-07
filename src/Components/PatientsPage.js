import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Image } from '@chakra-ui/react';

export const Patient = ({ doctor }) => {
  const myPatientList = doctor.medical_records ? (
    <Table variant="striped">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Age</Th>
          <Th>Gender</Th>
          <Th>Email</Th>
        </Tr>
      </Thead>
      <Tbody>
        {doctor.medical_records.map((record) => (
          <Tr key={record.patient.id}>
            <Td>{record.patient.name}</Td>
            <Td>{record.patient.age}</Td>
            <Td>{record.patient.gender}</Td>
            <Td>{record.patient.email}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  ) : (
    <p>No medical records found.</p>
  );

  return <div>{myPatientList}</div>;
};
