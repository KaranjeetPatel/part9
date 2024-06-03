import { NewPatientEntry, Gender } from "./types";

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
  };

const parseString = (text: unknown): string => {
    if (!text || !isString(text)) {
        throw new Error('Incorrect or missing text');
      };
    return text;
};

const isGender = (param: string): param is Gender => {
    return Object.values(Gender).map(v => v.toString()).includes(param);
  };

const parseGender = (text: unknown): string => {
    if (!isString(text) || !isGender(text)) {
        throw new Error('Incorrect gender selection');
    };
    return text;
};

const parseOccupation = (text: unknown): string => {
  if (!isString(text)) {
    return '';
  }else {
    return text;
  }
}

const checkNewPatient = (object: unknown): NewPatientEntry => {
    if ( !object || typeof object !== 'object' ) {
        throw new Error('Incorrect or missing data');
      }
    if ( 'name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object) {
        const newPatient: NewPatientEntry = {
            name: parseString(object.name),
            dateOfBirth: parseString(object.dateOfBirth),
            ssn: parseString(object.ssn),
            gender: parseGender(object.gender),
            occupation: parseOccupation(object.occupation)
        };
        return newPatient;
    }
    throw new Error('Incorrect data: some fields are missing');
}

export default checkNewPatient;