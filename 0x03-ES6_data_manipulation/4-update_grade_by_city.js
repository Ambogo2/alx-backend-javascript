function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.city === city)
    .map((student) => {
      const gradeObject = newGrades.find(
        (grade) => grade.studentId === student.id,
      ); // Find the grade for the student
      return {
        ...student, // Spread operator to keep other properties
        grade: gradeObject ? gradeObject.grade : 'N/A', // Assign grade if found, else 'N/A'
      };
    });
}

export default updateStudentGradeByCity;
