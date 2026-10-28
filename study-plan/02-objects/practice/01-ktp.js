// Task: Build an identity card object, then read, update, add, delete and check its properties.

const identity = {
    name: 'Mira Setiawan',
    birthPlace: 'Jakarta',
    birthDate: '1995-08-17',
    gender: 'Female',
    address: {
        street: 'Melati Street No. 5',
        city: 'South Jakarta',
    },
    occupation: 'Private Employee',
};

console.log(identity.name); // Mira Setiawan
console.log(identity['gender']); // Female
console.log(identity.address.city); // South Jakarta

identity.occupation = 'Front-End Developer';
identity.nationality = 'Indonesian';

delete identity.birthPlace;
console.log('birthPlace' in identity); // false

console.log(identity); // prediction: no birthPlace; occupation is 'Front-End Developer'; nationality is last
