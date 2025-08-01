function createPatient(patientName, patientSSN) {
    let PII = {
        name: patientName,
        ssn: patientSSN,
    }
    return {
        getName: function () {
            return PII.name
        },
        getSSN: function () {
            return PII.ssn
        }
    };
};

let patient1 = createPatient("John Doe", "123-45-6789");
let patient2 = createPatient("Jane Doe", "333-44-5555");


console.log(patient1.ssn);
console.log(patient1.name);
console.log(patient1.getSSN());
console.log(patient1.getName());

console.log(patient2.ssn);
console.log(patient2.name);
console.log(patient2.getSSN());
console.log(patient2.getName());
