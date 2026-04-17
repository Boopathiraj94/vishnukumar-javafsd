import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Profiles from './Card';
 

function App() {

 const employee = [
  {
    id: 1,
    name: "Arun Kumar",
    role: "Frontend Developer",
    salary: 35000,
    department: "IT"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Backend Developer",
    salary: 40000,
    department: "IT"
  },
  {
    id: 3,
    name: "Ravi Kumar",
    role: "UI/UX Designer",
    salary: 30000,
    department: "Design"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "HR Manager",
    salary: 45000,
    department: "HR"
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Project Manager",
    salary: 60000,
    department: "Management"
  },
  {
    id: 6,
    name: "Anjali Mehta",
    role: "QA Tester",
    salary: 28000,
    department: "Testing"
  },
  {
    id: 7,
    name: "Karthik Raj",
    role: "DevOps Engineer",
    salary: 50000,
    department: "IT"
  },
  {
    id: 8,
    name: "Meena Iyer",
    role: "Data Analyst",
    salary: 42000,
    department: "Analytics"
  },
  {
    id: 9,
    name: "Rahul Das",
    role: "Support Engineer",
    salary: 27000,
    department: "Support"
  },
  {
    id: 10,
    name: "Divya Nair",
    role: "Marketing Executive",
    salary: 32000,
    department: "Marketing"
  }
];
  return (
   <>
    <Header />
    
    <div className='container'> 
    {/* {
      [10,50,90,70,60,30,90,30].map((ele,index)=>(
         <Profiles key={index} marks={ele} />
      ))
    } */}

    {
      employee && employee.map((ele,index)=>(
         <Profiles key={index} empname={ele.name} role={ele.role}  salary={ele.salary} department = {ele.department}  />
      ))
    }
   </div>
   </>
  );
}

export default App;
