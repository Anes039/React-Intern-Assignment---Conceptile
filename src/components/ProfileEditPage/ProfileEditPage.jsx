
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { updateStudentData } from '../Features/dataSlice.jsx';
import Buttons from '../Buttons/Buttons'; 
import classes from './ProfileEditPage.module.css'; 

const ProfileEditPage = () => {
  const dispatch = useDispatch();
  const studentData = useSelector((state) => state.studentData); 

  
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/edit');
      const data = await response.json();
      dispatch(updateStudentData(data.data)); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, [dispatch]);

  return (
    <div>
      <h3>Profile Edit Page</h3>
      <Buttons /> 
      {studentData.map((item) => (
        <div key={item.id} className={classes.profileItem}>
          <p>Your name: <span className={classes.fields}>{item.name}</span></p>
          <p>Your age: <span className={classes.fields}>{item.age}</span></p>
          <p>Your email: <span className={classes.fields}>{item.email}</span></p>
          <p>Your phone number: <span className={classes.fields}>{item.number}</span></p>
          
          <div className={classes.institutions}>
            List of Institutions:
            <li>Institution name: <span className={classes.fields}>{item.institutions?.name}</span></li>
            <li>Degree: <span className={classes.fields}>{item.institutions?.degree}</span></li>
            <li>Duration: <span className={classes.fields}>{item.institutions?.years}</span></li>
          </div>
          <div className={classes.courses}>
            List of Courses:
            <li>Course Name: <span className={classes.fields}>{item.courses?.name}</span></li>
            <li>Instructor Name: <span className={classes.fields}>{item.courses?.instructor}</span></li>
            <li>Duration: <span className={classes.fields}>{item.courses?.duration}</span></li>
          </div>
          <Buttons id={item.id} /> 
        </div>
      ))}
    </div>
  );
};

export default ProfileEditPage;
