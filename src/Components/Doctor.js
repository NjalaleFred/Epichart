import React, { useState, useEffect } from "react";
import { useParams, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { DoctorHomePage } from "./DoctorHomePage";
import { Patient } from "./PatientsPage";
import { MedicalRecords } from "./MedicalRecords";

export const Doctor = () => {
  const [doctor, setDoctor] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/doctors/${params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setDoctor(data));
  }, [params.id]);

  return (
    <Router>
      <nav>
          <Navbar doctorId={params.id} />
        </nav>
      <div className="App">
        <Switch>
          <Route exact path={`/doctor/${params.id}`}>
            <DoctorHomePage doctor={doctor} />
          </Route>
          <Route path={`/doctor/${params.id}/patients`}>
            <Patient doctor={doctor} />
          </Route>
          <Route path={`/doctor/${params.id}/records`}>
            <MedicalRecords doctor={doctor} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
