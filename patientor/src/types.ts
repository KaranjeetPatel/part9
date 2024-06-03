
export interface Diagnosis {
    code: String;
    name: String;
    latin?: String;
}

export interface Patient {
    id: String;
    name: String;
    dateOfBirth: String;
    ssn: String;
    gender: String;
    occupation: String;
}

export type NonSensitivePatient = Omit<Patient, 'ssn'>;

export type NewPatientEntry = Omit<Patient, 'id'>;

export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other'
};