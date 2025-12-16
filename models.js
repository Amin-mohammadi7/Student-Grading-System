export class Student {
  constructor(id, name, courses) {
    Object.defineProperty(this, "id", {
      value: id,
      writable: false,
      configurable: false,
      enumerable: true
    });

    this.name = name;
    this.courses = courses;
  }

  addCourse(courseId, grade) {
    this.courses.push({ courseId, grade });
  }

  getAverage() {
    let sum = 0;

    for (let i = 0; i < this.courses.length; i++) {
      sum += this.courses[i].grade;
    }

    return sum / this.courses.length;
  }
}
