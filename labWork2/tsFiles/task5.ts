interface Course {
    courseName: string;
    durationInHours: number;
    students: string[];
    writeCourseInfo(): void;
}

class OnlineCourse implements Course {
    courseName: string;
    durationInHours: number;
    students: string[];
    constructor(courseName: string, durationInHours: number, students: string[]) {
        this.courseName = courseName;
        this.durationInHours = durationInHours;
        this.students = students;
    }
    registerStudent(student: string): void {
        this.students.push(student);
    }

    isStudentRegistered(student: string): boolean {
        return this.students.includes(student);
    }

    writeCourseInfo(): void {
        console.log(`Course \"${this.courseName}\" (${this.durationInHours} hours long)\n`+
            `\tRegistered students: ${this.students}`);
    }
}

class CourseManager {
    private courses: Course[];
    constructor(courses: Course[]) {
        this.courses = courses;
    }

    addCourse(course: Course): void {
        this.courses.push(course);
    }
    removeCourse(courseName: string): void {
        this.courses = this.courses.filter(course => course.courseName !== courseName);
    }

    findCourse(courseName: string): Course | undefined {
        return this.courses.find(course => course.courseName === courseName);
    }

    writeCoursesInfo(): void {
        this.courses.forEach(course => course.writeCourseInfo());
    }
}

const course1 = new OnlineCourse("Mogging", 2, ["Tyler Derden", "Dude"]);
const course2 = new OnlineCourse("Programming", 15, ["Tyler Derden", "Dude", "Eugene"]);
const course3 = new OnlineCourse("Playing Minecraft", 1500, ["Dude", "Eugene"]);

course3.registerStudent("Notch");

const courseManager = new CourseManager([course1, course2]);
courseManager.addCourse(course3);

courseManager.writeCoursesInfo();