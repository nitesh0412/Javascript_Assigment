class Address {
    constructor(address, city, country) {
      this.address = address;
      this.city = city;
      this.country = country;
    }
  }
  
  class Contact {
    constructor(officeNo, personalNo, workEmail, personalEmail) {
      this.officeNo = officeNo;
      this.personalNo = personalNo;
      this.workEmail = workEmail;
      this.personalEmail = personalEmail;
    }
  }
  
  class Employee {
    constructor(firstName, lastName, employeeId, personalNumber, personalEmail, workNumber, workEmail, salaryPerMonth, designation, department, dateOfBirth, dateOfJoining, dateOfResignation, personalAddress, officeAddress, reportingManager, totalExperience, cuurentCompanyExperience, annualSalary) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullName = firstName + " " + lastName;
      this.employeeId = employeeId;
      this.personalNumber = personalNumber;
      this.personalEmail = personalEmail;
      this.workNumber = workNumber;
      this.workEmail = workEmail;
      this.salaryPerMonth = salaryPerMonth;
      this.designation = designation;
      this.department = department;
      this.reportingManager = reportingManager;
      this.dateOfBirth = dateOfBirth;
      this.dateOfJoining = dateOfJoining;
      this.dateOfResignation = dateOfResignation;
      this.totalExperience = totalExperience; //this.dateOfResignation ? this.Calculatetotalexperience() : null;
      this.cuurentCompanyExperience = cuurentCompanyExperience; //this.calculateCurrentCompanyExperience()
      this.annualSalary = annualSalary;
      this.personalAddress = personalAddress;
      this.officeAddress = officeAddress;
      this.subordinates = [];
    }
  
    static newEmployee(firstName, lastName, employeeId, personalNumber, personalEmail, workNumber, workEmail, salaryPerMonth, designation, department, dateOfBirth, dateOfJoining, dateOfResignation, personalAddress, officeAddress, reportingManager, totalExperience, cuurentCompanyExperience, annualSalary) {
     
        const personalAddr = new Address(
        personalAddress.address,
        personalAddress.city,
        personalAddress.country
      );
  
      const officeAddr = new Address(
        officeAddress.address,
        officeAddress.city,
        officeAddress.country
      );
  
      const employee = new Employee(
        firstName,
        lastName,
        employeeId,
        personalNumber,
        personalEmail,
        workNumber,
        workEmail,
        salaryPerMonth,
        designation,
        department,
        dateOfBirth,
        dateOfJoining,
        dateOfResignation,
        personalAddr,
        officeAddr,
        reportingManager,
        totalExperience,
        cuurentCompanyExperience,
        annualSalary
      );
  
      employee.totalExperience = employee.Calculatetotalexperience();
      employee.cuurentCompanyExperience = employee.calculateCurrentCompanyExperience();
      employee.annualSalary = employee.calculateAnnualSalary();
  
      return employee;
    }
  
    resign(resignationDate) {
      this.dateOfResignation = resignationDate;
      this.totalExperience = this.Calculatetotalexperience();
    }
  
    calculateCurrentCompanyExperience() {
      const startDate = new Date(this.dateOfJoining);
      const currentDate = new Date();
  
      const months = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + (currentDate.getMonth() - startDate.getMonth());
      const years = Math.floor(months / 12);
      const remainingMonths = months % 12;
  
      return { years, months: remainingMonths };
    }
  
    addSubordinate(subordinate) {
      if (subordinate instanceof Employee) {
        this.subordinates.push(subordinate.fullName);
      } else {
        console.log("must be an employee");
      }
    }
  
    setReportingManager(manager) {
      if (manager instanceof Employee) {
        this.reportingManager = manager.fullName;
        manager.addSubordinate(this);
      } else {
        console.log("No manager is assigned yet");
      }
    }
  
    calculateAnnualSalary() {
      return this.salaryPerMonth * 12;
    }
  
    Calculatetotalexperience() {
      const startDate = new Date(this.dateOfJoining);
      const endDate = this.dateOfResignation ? new Date(this.dateOfResignation) : new Date();
  
      const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
      const years = Math.floor(months / 12);
      const remainingMonths = months % 12;
  
      return { years, months: remainingMonths };
    }
  }
  
  
const e1 = Employee.newEmployee(
    "Nitesh",
    "Kumawat",
    100,
    9082596460,
    "nitesh@gmail.com",
    7021763321,
    "nitesh@google.com",
    20000,
    "software engineer",
    "Devlopment",
    "1990-01-10",
    "2022-07-01",
    null,
    {
      address: "Airoli",
      city: "Navi Mumbai",
      country: "India"
    },
    {
      address: "Aurionpro",
      city: "Navi Mumabi",
      country: "India"
    }
  );
  
  const e2 = Employee.newEmployee(
    "Lalit",
    "kumawat",
    2,
    7890876543,
    "lala@gmail.com",
    1234567890,
    "loki@google.com",
    60000,
    "tester",
    "IT",
    "1985-05-10",
    "2021-03-15",
    null,
    {
      address: "punjab",
      city: "punjba",
      country: "India"
    },
    {
      address: "austail",
      city: "Thane",
      country: "India"
    }
  );
  
  const e3 = Employee.newEmployee(
    "anonymous",
    "anynymous",
    3,
    9987654321,
    "anonymous@gmail.com",
    1122334455,
    "anonymous@google.com",
    100000,
    "SDE2",
    "IT",
    "1992-09-25",
    "2023-02-20",
    null,
    {
      address: "peru",
      city: "america",
      country: "India"
    },
    {
      address: "england",
      city: "asddfgf",
      country: "India"
    }
  );
  
  console.log(e1);
  console.log(e2);
  console.log(e3);
  