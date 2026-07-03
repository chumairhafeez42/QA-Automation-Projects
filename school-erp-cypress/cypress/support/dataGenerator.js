// ***********************************************
// Random test data generator using @faker-js/faker
// Ensures every test run uses fresh, unique data
// ***********************************************

import { faker } from "@faker-js/faker";

export function generateStudent(overrides = {}) {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    dob: faker.date.birthdate({ min: 5, max: 15, mode: "age" }).toISOString().split("T")[0],
    gender: faker.helpers.arrayElement(["Male", "Female"]),
    className: "Class 1",
    section: "A",
    guardianName: faker.person.fullName(),
    guardianPhone: faker.phone.number("03#########"),
    email: faker.internet.email(),
    address: faker.location.streetAddress(),
    ...overrides,
  };
}

export function generateTeacher(overrides = {}) {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.number("03#########"),
    subject: faker.helpers.arrayElement(["Mathematics", "Science", "English", "History", "Computer Science"]),
    qualification: faker.helpers.arrayElement(["B.Ed", "M.Ed", "M.Sc", "M.A"]),
    joiningDate: faker.date.past({ years: 3 }).toISOString().split("T")[0],
    ...overrides,
  };
}

export function generateClass(overrides = {}) {
  return {
    className: `Class ${faker.number.int({ min: 6, max: 12 })}`,
    section: faker.helpers.arrayElement(["A", "B", "C"]),
    teacher: faker.person.fullName(),
    capacity: faker.number.int({ min: 20, max: 50 }).toString(),
    ...overrides,
  };
}

export function generateFeePayment(overrides = {}) {
  return {
    feeType: faker.helpers.arrayElement(["Tuition Fee", "Admission Fee", "Exam Fee", "Transport Fee"]),
    amount: faker.number.int({ min: 1000, max: 20000 }).toString(),
    paymentMode: faker.helpers.arrayElement(["Cash", "Card", "Bank Transfer", "Online"]),
    paymentDate: new Date().toISOString().split("T")[0],
    remarks: faker.lorem.sentence(4),
    ...overrides,
  };
}
