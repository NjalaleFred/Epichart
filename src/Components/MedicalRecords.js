import React, { useState, useRef } from "react";
import { MedicalChart } from "./MedicalChart";
import { UpdatePatient } from "./UpdatePatient";
import { Box } from "@chakra-ui/react";

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
    if (recordId) {
      fetch(`http://localhost:9292/records/${recordId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
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

  return (
    <Box>
      <UpdatePatient
        handleUpdateRecord={handleUpdateRecord}
        initialRef={initialRef}
        finalRef={finalRef}
        setDiagnosis={setDiagnosis}
        diagnosis={diagnosis}
        setMedication={setMedication}
        medication={medication}
        setVitals={setVitals}
        vitals={vitals}
        setTreatment={setTreatment}
        treatment={treatment}
        handleClose={handleClose}
        isOpen={isOpen}
      />
      <MedicalChart doctor={doctor} toggleForm={toggleForm} />
    </Box>
  );
};
