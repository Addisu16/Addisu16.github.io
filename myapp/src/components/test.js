import { Employee } from "./employee.js";
const addis=new Employee('Addis',"1000n 4th","527-000-0000","10/11/2000","CEO","17000");
const wengel=new Employee('wengel',"1000n 4th","527","10/11/2000","CEO","17000");
const Rajiv=new Employee('Rajiv',"1000n 4th","527","10/11/2000","CEO","17000");

const employeeList=[addis,wengel,Rajiv];

  function getHighestSalary(employees) {
    let maxSalary = -Infinity;
    let employeeDetails=[];
    for(const employee of employees){
        if (employee.salary > maxSalary) {
            maxSalary =employee.salary;
            employeeDetails=[employee];
        }else if(employee.salary===maxSalary){
            employeeDetails.push(employee);
        }
    }  
    
    if(employeeDetails.length>0){
        return employeeDetails;
    }else{
        return "No employee Found";
    }
}     
    
  function totalCompanyPays() {
    return employeeList.reduce((total,employee)=>total+parseInt(employee.salary),0)

  }

   
  const totaPays=totalCompanyPays();
  console.log("Company total Pays: ",totaPays)
  const highestSalary=getHighestSalary(employeeList);
  console.log("The highest paid employee is: ",highestSalary);


  











