import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

export const MedicalRecords = ({ doctor }) => {
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
      </Box>
    ))
  ) : (
    <Text>No medical records found.</Text>
  );

  return <Box>{myMedicalRecords}</Box>;
};
