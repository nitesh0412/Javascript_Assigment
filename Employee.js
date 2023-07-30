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
    "Yash",
    "Shinde",
    100,
    9167910032,
    "shindeyash172@gmail.com",
    9167910032,
    "yash.shinde@aurionpro.com",
    20000,
    "SDE1",
    "CashManagement",
    "10/1/2002",
    "7/1/2022",
    "",
    { address: "Neelambari", city: "Thane", country: "India" },
    { address: "Aurionpro Rabale", city: "Thane", country: "India" }
  );
  
  const e2 = Employee.newEmployee(
    "Amit",
    "Mete",
    2,
    9167910032,
    "amitmete@gmail.com",
    9167910032,
    "amit.mete@aurionpro.com",
    60000,
    "SDE2",
    "IT",
    "5/10/2001",
    "10/1/2022",
    "",
    { address: "1/101,xyz building", city: "Thane", country: "India" },
    { address: "101 XYZ", city: "Thane", country: "India" }
  );
  
  const e3 = Employee.newEmployee(
    "Aniket",
    "Shinde",
    2,
    9167910032,
    "aniketshinde@gmail.com",
    9167910032,
    "aniketshinde@aurionpro.com",
    100000,
    "SDE2",
    "IT",
    "5/10/2001",
    "10/1/2022",
    "",
    { address: "1/101,xyz building", city: "Thane", country: "India" },
    { address: "101 XYZ", city: "Thane", country: "India" }
  );
  
  console.log(e1);
  console.log(e2);
  console.log(e3);
  