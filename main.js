import { Student } from "./models.js";
import { fetchStudents } from "./database.js";
import { calculateClassAverage, findTopStudent, filterStudents } from "./analytics.js";

console.log("Start");

fetchStudents((data) => {
  console.log("Data loaded");

  const students = data.map(stu => new Student(stu.id, stu.name, stu.courses));

  console.log(students[0].id);

  try {
    students[0].id = 999;
  } catch (e) {}

  console.log(students[0].id);

  const avg = calculateClassAverage(students, 101);
  console.log("Course 101 avg:", avg.toFixed(2));

  const best = findTopStudent(students);
  console.log("Top:", best.name, best.getAverage().toFixed(1));

  const list = filterStudents(students, stu =>
    stu.courses.some(crs => crs.courseId === 102)
  );

  console.log("Course 102:", list.map(stu => stu.name).join(", "));
});
