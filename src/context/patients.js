import React, { useState, createContext, useContext } from 'react';

const PatientsContext = createContext();

export function PatientsProvider({ children }) {
  const [patients, setPatients] = useState();
  const [gender, setGender] = useState('both');
  const [open, setOpen] = useState();
  const [patient, setPatient] = useState({});

  return (
    <PatientsContext.Provider
      value={{
        patients,
        setPatients,
        patient,
        setPatient,
        open,
        setOpen,
        gender,
        setGender,
      }}
    >
      {children}
    </PatientsContext.Provider>
  );
}

export function usePatients() {
  const context = useContext(PatientsContext);
  const { patients, setPatients, gender, setGender, patient, setPatient } =
    context;
  return { patients, setPatients, gender, setGender, patient, setPatient };
}
