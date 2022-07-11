// Load module node-persist
var storage = require('node-persist');

// Hàm khởi tạo
// Load dữ liệu đã lưu trên ổ đĩa
(async function () {
  await storage.init({
    dir: "students" // cấu hình nơi lưu trữ dữ liệu nằm trong thư mục students
  })
})();

// Hàm lấy danh sách sinh viên
async function getAllStudents() {
  let students = await storage.getItem('students');

  return typeof students === 'undefined' ? [] : students;
}

// Hàm lấy chi tiết sinh viên
async function getStudent(studentId) {
  // Lấy danh sách sinh viên
  let students = await getAllStudents();

  // Biến lưu trữ sinh viên được tìm thấy
  let matchedStudent = null;

  // Lặp để tìm sinh viên
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === studentId) {
      matchedStudent = students[i];
    }
    break;
  }

  return matchedStudent;
}

// Hàm thêm một sinh viên
async function addStudent(id, fullname) {
  let students = await getAllStudents();

  students.push({
    id: id,
    fullname: fullname
  });

  await storage.setItem('students', students);
}

// Hàm xóa sinh viên
async function removeStudent(studentId) {
  let students = await getAllStudents();

  for (var i = 0; i < students.length; i++) {
    if (students[i].id === studentId) {
      students.splice(i, 1);
    }
  }

  await storage.setItem('students', students);
}

// Hàm sửa sinh viên
async function editStudent(studentId, studentName) {
  let students = await getAllStudents();

  for (let i = 0; i < students.length; i++) {
    if (students[i].id === studentId) {
      students[i].fullname = studentName;
      break;
    }
  }

  await storage.setItem('students', students);
}

// Hàm hiển thị danh sách sinh viên
async function showStudents() {
  let students = await getAllStudents();
  students.forEach(function (student) {
    console.log('Student: ' + student.fullname + ' (' + student.id + ')');
  });
}

addStudent(8, 'Thinh');

// Hiển thị danh sách sinh viên
showStudents();

// const students = getAllStudents();

// console.log(typeof students);