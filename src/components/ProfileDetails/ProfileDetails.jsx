import classes from  './ProfileDetails.module.css';
import EditPageButton from '../EditPageButton/EditPageButton';
import { useSelector } from 'react-redux';
import { useEffect,useState } from 'react';


const ProfileDetails = () => {
  const [data,setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/edit').then((response => response.json())).then(data => setData(data.data))
  },
 []
)
  
  //let userData = useSelector((state) => state.studentData);
  
  //console.log(userData)
  //userData = Array.isArray(userData) ? userData : [];
  let user = data.map((item, id) => (
    <div key={id}>
     
      <p>Your name :<span className={classes.fields}>{item.name} </span></p>
      <p>Your age : <span className={classes.fields}>{item.age} </span></p>
      <p>Your email : <span className={classes.fields}>{item.email} </span></p>
      <p>Your phone number :<span className={classes.fields}>{item.number } </span></p>
      
      <div className={classes.institutions}>
        List of Institutions :
         <li >Instution name:<span className={classes.fields}>{item.institutions.name} </span></li>
         <li > Degreee: <span className={classes.fields}>{item.institutions.degree} </span></li>
         <li > Duration: <span className={classes.fields}>{item.institutions.years} </span></li>
      </div>
      <div className={classes.courses}>
        List of Courses :
         <li > Course Name: <span className={classes.fields}>{item.courses.name} </span></li>
         <li > Instructor Name: <span className={classes.fields}>{item.courses.instructor} </span></li>
         <li > Duration: <span className={classes.fields}> {item.courses.duration} </span></li>
      </div>
    </div>
  ));

  return <div>
        <div className={classes.title}>
            <h1>Profile Details Page</h1>
            <EditPageButton/>
          
        </div>
    {user}</div>;
};
export default ProfileDetails;
