const students = [
  {
    "id": 1,
    "name": "Alice",
    "courses": ["Math", "Science", "History"]
  },
  {
    "id": 2,
    "name": "Bob",
    "courses": ["History", "English", "Math", "Art"]
  },
  {
    "id": 3,
    "name": "Charlie",
    "courses": ["Science", "English", "Music"]
  },
  {
    "id": 4,
    "name": "David",
    "courses": ["Math", "History", "Art", "PE"]
  },
  {
    "id": 5,
    "name": "Eva",
    "courses": ["Science", "Math", "Music"]
  },
  {
    "id": 6,
    "name": "Frank",
    "courses": ["English", "Art"]
  },
  {
    "id": 7,
    "name": "Grace",
    "courses": ["Math", "Science", "English", "Music"]
  },
  {
    "id": 8,
    "name": "Helen",
    "courses": ["History", "Art", "PE"]
  },
  {
    "id": 9,
    "name": "Ivy",
    "courses": ["Science", "English", "Art"]
  },
  {
    "id": 10,
    "name": "Jack",
    "courses": ["Math", "History", "Music"]
  }
]

const getStudentName = (student) => student.name;
console.log(getStudentName(students[0]))

const getCourse = (student,number) => student["courses"][number]
console.log(getCourse(students[4], 2));

const addCourseToStudent = (student, course) => {
  	student.courses.push(course);
	return student;
}
//console.log(addCourseToStudent(students[7], "Physics"));

const countCourses = (student) => student.courses.length;
console.log(countCourses(students[1]));

const listAllCourses = (students) => {
     let wantedCourses = [ ];
     students.forEach(student => student.courses.forEach(course => wantedCourses.find((c) => c == course) == undefined  ? wantedCourses.push(course): false));
     return wantedCourses;
}
console.log(listAllCourses(students))



const removeCourseFromStudent = (student, course) => { 
  student.courses = student.courses.filter((crse) => course == crse ? false:true);
  return student;
}
console.log(removeCourseFromStudent(students[6],"Science"));

const findStudentById = (studentId, students) => students.find(student => student.id == studentId ? true:false);
console.log(findStudentById(10,students));


const getStudentsByCourse = (course, students) => students.filter(student => student.courses.find((c) => c==course) == undefined ? false : student)
console.log(getStudentsByCourse("Music",students));
