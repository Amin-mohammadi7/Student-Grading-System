export function calculateClassAverage(students, courseId) {
  const grades = students
    .map(stu => stu.courses.find(crs => crs.courseId === courseId))
    .filter(crs => crs)
    .map(crs => crs.grade);

  if (grades.length === 0) return 0;

  const sum = grades.reduce((a, b) => a + b, 0);
  return sum / grades.length;
}

export function findTopStudent(students) {
  return students.reduce((best, cur) =>
    cur.getAverage() > best.getAverage() ? cur : best
  );
}

export function filterStudents(students, check) {
  return students.filter(check);
}
