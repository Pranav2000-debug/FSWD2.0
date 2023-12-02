const person = {
    firstName : "Mithun",
    lastName : "Shankar",
    age : 23, 
};

function ageInDays(personObject, callback) {
    const fullName = `${personObject.firstName} ${personObject.lastName}`;
    const ageDays = personObject.age * 365;
    callback(fullName, ageDays);
}

function message(fullname, age) {
    console.log(`The person's full name is ${fullname} and their age in days is ${age}`);
}

ageInDays(person, message);