class Admission {
	constructor() {
		this.students = [];
	}
	enrollStudent(student) {
		console.log(`${student.name} has been enrolled.`);
		this.students.push(student);
	}
	assignCourse(student, course) {
		console.log(`${student.name} has been enrolled in ${course}.`);
		student.courses.push(course);
	}
	showEnrolledStudents() {
		console.log("enrolled students \n");
		this.students.forEach(stud => {
			console.log(`- ${stud.name} (${stud.email})`);
		});
	}
}

class Student {
	constructor(name, email) {
		this.name = name;
		this.email = email;
		this.courses = [];
	}
	showCourse() {
		this.courses.forEach(course => {
			console.log(`${this.name}'s enrolled courses: ${course}`);
		})
	}
}

const admissionOffice = new Admission();
const student1 = new Student('mithun', 'mithun@gmail.com');
const student2 = new Student('arushi', 'aruwushu@gmail.com');
const student3 = new Student('nick', 'nickii@gmail.com');
admissionOffice.enrollStudent(student1);
admissionOffice.enrollStudent(student2);
admissionOffice.enrollStudent(student3);
admissionOffice.assignCourse(student1, 'data science');
admissionOffice.assignCourse(student2, 'Literature');
admissionOffice.assignCourse(student3, 'Art');
admissionOffice.showEnrolledStudents()
student1.showCourse()
student2.showCourse()
