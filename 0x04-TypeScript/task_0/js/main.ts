interface Student {
    firstName: string ;
    lastName: string;
    age: number;
    location: string;
}

const user: Student = {
    firstName: "Ruth",
    lastName: "Ambogo",
    age: 20,
    location: "Mombasa"
}
const user_1: Student = {
  firstName: "Emmanuel",
  lastName: "Lihanda",
  age: 15,
  location: "Meru",
};

let studentsList: Student[] = [user, user_1];

document.addEventListener("DOMContentLoaded", () => {
  renderTable(studentsList);
});

function renderTable(students: Student[]) {
  const table = document.createElement("table");
  const headers = ["First Name", "Location"];

  // Create header row
  const headerRow = document.createElement("tr");
  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  // Create a row for each student
  students.forEach((student) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });

  document.body.appendChild(table);
}
