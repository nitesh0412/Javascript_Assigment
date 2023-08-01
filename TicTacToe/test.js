class Address {
    constructor(address, city, country) {
      this.address = address;
      this.city = city;
      this.country = country;
    }
  }
  
  class Contact {
    constructor(officeNo, personalNo, workMail, personalMail, officeAddress, personalAddress) {
      this.officeNo = officeNo;
      this.personalNo = personalNo;
      this.workMail = workMail;
      this.personalMail = personalMail;
      this.officeAddress = new Address(...officeAddress);
      this.personalAddress = new Address(...personalAddress);
    }
  }
  
  class Employee {
    constructor(info) {
      this.firstname = info.firstname;
      this.lastname = info.lastname;
      this.employeeId = info.employeeId;
      this.salary = info.salary;
      this.designation = info.designation;
      this.department = info.department;
      this.dateOfJoining = info.dateOfJoining;
      this.dateOfResignation = info.dateOfResignation || null;
      this.contactEmail = info.contactEmail;
      this.workEmail = info.workEmail;
      this.dob = info.dob;
      this.address = new Address(...info.address);
      this.reportingOfficer = info.reportingOfficer || null;
      this.subordinates = info.subordinates || [];
      this.contact = new Contact(...info.contact);
    }
  
    get fullname() {
      return `${this.firstname} ${this.lastname}`;
    }
  
    get annualSalary() {
      return this.salary * 12;
    }
  
    setReportingManager(reportingOfficer) {
      this.reportingOfficer = reportingOfficer;
    }
  
    addSubordinate(subordinate) {
      this.subordinates.push(subordinate);
    }
  
    calculateTotalExperience(currentDate) {
      const startDate = new Date(this.dateOfJoining);
      const endDate = this.dateOfResignation ? new Date(this.dateOfResignation) : new Date(currentDate);
      const diffInMs = endDate - startDate;
      const totalMonths = diffInMs / (1000 * 60 * 60 * 24 * 30.44);
      const years = Math.floor(totalMonths / 12);
      const remainingMonths = Math.round(totalMonths - years * 12);
      return { years, months: remainingMonths };
    }
  
    static isEmployeeNotResigned(employee) {
      return !employee.dateOfResignation;
    }
  }

const e1 = new Employee({
    firstname: "Nitesh",
    lastname: "Kumawat",
    employeeId: "EMP123",
    salary: 50000,
    designation: "Software Engineer",
    department: "Engineering",
    dateOfJoining: "2022-01-15",
    contactEmail: "nites@company.com",
    workEmail: "nitesh@work.com",
    dob: "1990-05-20",
    address: ["xyxyxyxyxyxyx", "Navi Mumbai", "India"],
    contact: [
      "1234567890",
      "9876543210",
      "nitesh@company.com",
      "nitesh.personal@company.com",
      ["Office Address", "Office City", "Office Country"],
      ["Personal Address", "Personal City", "Personal Country"],
    ],
    dateOfResignation: "2023-06-30", 
  });
  
  const e2 = new Employee({
    firstname: "Anonymous",
    lastname: "Smith",
    employeeId: "EMP456",
    salary: 60000,
    designation: "Senior Software Engineer",
    department: "Engineering",
    dateOfJoining: "2021-09-10",
    contactEmail: "anonymous@google.com",
    workEmail: "anonymous@work.com",
    dob: "1988-11-12",
    address: ["nmnmnmnmnnmnmnmnmn", "Mumbai", "India"],
    contact: [
      "2223334444",
      "9998887777",
      "anonymous@google.com",
      "anonymous.personal@google.com",
      ["Office Address 2", "Office City 2", "Office Country 2"],
      ["Personal Address 2", "Personal City 2", "Personal Country 2"],
    ],
  });
  
  const e3 = new Employee({
    firstname: "Lalit",
    lastname: "Kumawat",
    employeeId: "EMP789",
    salary: 75000,
    designation: "Product Manager",
    department: "Product Management",
    dateOfJoining: "2020-03-25",
    dateOfResignation: "2023-07-31",
    contactEmail: "lokit@company.com",
    workEmail: "ioloiy@work.com",
    dob: "1985-07-05",
    address: ["asdsad", "Pune", "India"],
    contact: [
      "4445556666",
      "1112223333",
      "lokit@company.com",
      "lokit.personal@company.com",
      ["Office Address 3", "Office City 3", "Office Country 3"],
      ["Personal Address 3", "Personal City 3", "Personal Country 3"],
    ],
  });
  
  e2.setReportingManager(e1.fullname);
  e1.addSubordinate(e3.fullname);
  
  const currentDate = "2023-07-31";
  const totalExperience = e1.calculateTotalExperience(currentDate);
  
  console.log("Total Experience:", totalExperience.years, totalExperience.months);
  
  
  console.log(e1);
  console.log(e2);
  console.log(e3);
  
  
  