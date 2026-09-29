class Student {
    constructor(name, age, course, school, feeStatus) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.school = school;
        this.feeStatus = feeStatus;
    }

    introduceStudent() {
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }

    tellCourse() {
        return `I am studying ${this.course}.`;
    }

    revealFeeStatus() {
        return `School fee status: ${this.feeStatus}`;
    }
}


// 10 Students

const student1 = new Student(
    "Samuel",
    18,
    "Cybersecurity",
    "Adeleke University",
    "Paid"
);

const student2 = new Student(
    "David",
    19,
    "Computer Science",
    "University of Lagos",
    "Pending"
);

const student3 = new Student(
    "Daniel",
    20,
    "Software Engineering",
    "Covenant University",
    "Paid"
);

const student4 = new Student(
    "Michael",
    18,
    "Information Technology",
    "University of Ibadan",
    "Paid"
);

const student5 = new Student(
    "John",
    21,
    "Computer Engineering",
    "FUTA",
    "Pending"
);

const student6 = new Student(
    "Joshua",
    19,
    "Cybersecurity",
    "Babcock University",
    "Paid"
);

const student7 = new Student(
    "Emmanuel",
    20,
    "Data Science",
    "University of Abuja",
    "Pending"
);

const student8 = new Student(
    "Daniel",
    18,
    "Web Development",
    "Adeleke University",
    "Paid"
);

const student9 = new Student(
    "Chris",
    22,
    "Computer Science",
    "University of Benin",
    "Paid"
);

const student10 = new Student(
    "Joseph",
    19,
    "Software Engineering",
    "Lagos State University",
    "Pending"
);


// Put all students inside an array

const students = [
    student1,
    student2,
    student3,
    student4,
    student5,
    student6,
    student7,
    student8,
    student9,
    student10
];


// Display students on the webpage

const studentContainer = document.getElementById("student-container");

students.forEach((student) => {

    const card = document.createElement("div");

    card.classList.add("student-card");

    card.innerHTML = `
        <h3>${student.name}</h3>

        <p><strong>Age:</strong> ${student.age}</p>

        <p><strong>Course:</strong> ${student.course}</p>

        <p><strong>School:</strong> ${student.school}</p>

        <p class="${student.feeStatus === "Paid" ? "fee-paid" : "fee-pending"}">
            ${student.revealFeeStatus()}
        </p>
    `;

    studentContainer.appendChild(card);
});