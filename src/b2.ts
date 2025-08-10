
class Student {
    id: number;
    age: number;
    email: string;

    constructor(id: number, age: number, email: string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
const students: Student[] = [];
students.push(new Student(1, 20, "sv1@gmail.com"));

students.push(new Student(2, 21, "sgshgs@gmail.com"));
for (const student of students) {
    console.log(`ID: ${student.id}, Age: ${student.age}, Email: ${student.email}`);
}
