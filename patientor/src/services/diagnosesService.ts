import diagnosesData from '../data/diagnoses';
import { Diagnosis } from '../types';


const getDiagnoses = (): Diagnosis[] => {
  return diagnosesData
};


const addDiagnosis = () => {
  return null;
};

export default {
  getDiagnoses,
  addDiagnosis
};