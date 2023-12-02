function Person(name = "null", age = 0, gender = "Unknown") {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  
  function Employee(name, age, gender, department = "Unknown", designation = "Unknown", salary = 0) {
    Person.call(this, name, age, gender);
    this.department = department;
    this.designation = designation;
    this.salary = salary;
  }
  
  function Teacher(name, age, gender, department, designation, salary, subject = "Unknown") {
    Employee.call(this, name, age, gender, department, designation, salary);
    this.subject = subject;
  }
  
  function Staff(name, age, gender, department, designation, salary, role = "Unknown") {
    Employee.call(this, name, age, gender, department, designation, salary);
    this.role = role;
  }
  
  function Student(name, age, gender, studentID = "Unknown", courses = []) {
    Person.call(this, name, age, gender);
    this.studentID = studentID;
    this.courses = courses;
  }
  
  function Courses() {
    this.students = [];
    this.teachers = [];
  
    this.addStudent = function (student) {
      this.students.push(student);
    };
  
    this.addTeacher = function (teacher) {
      this.teachers.push(teacher);
    };
  }
  
  const student1 = new Student("ali", 21, "Female", "S12345", ["OS", "OOSE"]);
  const student2 = new Student("sara", 22, "Female", "S67890", ["DSA", "ITDS"]);
  
  const teacher1 = new Teacher("ahmed", 35, "Male", "DSA", "ITDS", 60000, "OS");
  const teacher2 = new Teacher("kamran", 35, "male", "OS", "OOSE", 80000, "OOSE");
  
  const staff1 = new Staff("faisal", 25, "Male", "Administration", "admission fee", 40000, "Afees");
  const staff2 = new Staff("sidra", 27, "Female", "fee section", "transport fees", 35000, "transport section");
  
  console.log("Student 1:", student1);
  console.log("Student 2:", student2);
  
  console.log("Teacher 1:", teacher1);
  console.log("Teacher 2:", teacher2);
  
  console.log("Staff 1:", staff1);
  console.log("Staff 2:", staff2);
  