import patientData from '../data/patients';
import { Patient, NonSensitivePatient, NewPatientEntry } from '../types';
import { v1 as uuid } from 'uuid';

const getPatients = (): Patient[] => {
    return patientData;
};

const getNonSensitivePatients = (): NonSensitivePatient[] => {
  return patientData.map(({id, name, dateOfBirth, gender, occupation}) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

const addPatient = (object: NewPatientEntry) : Patient => {
    const newPatient = {
        id: uuid(),
        ...object
    }
  patientData.push(newPatient);
  return newPatient;
};

export default {
  getPatients,
  getNonSensitivePatients,
  addPatient
};