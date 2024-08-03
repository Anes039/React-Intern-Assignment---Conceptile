import { useSelector } from 'react-redux';
import classes from './ProfileEditPage.module.css';
import Buttons from '../Buttons/Buttons';

const ProfileEditPage = () => {
    let userData = useSelector((state) => state.studentData);
    userData = Array.isArray(userData) ? userData : []
    const data = userData.map((item, id) => (
        <div key={id}>
            <p>Your name: <span className={classes.fields}>{item.name}</span></p>
            <p>Your age: <span className={classes.fields}>{item.age}</span></p>
            <p>Your email: <span className={classes.fields}>{item.email}</span></p>
            <p>Your phone number: <span className={classes.fields}>{item.number}</span></p>
            <div className={classes.institutions}>
                List of Institutions:
                <li>Institution name: <span className={classes.fields}>{item.institutions.name}</span></li>
                <li>Degree: <span className={classes.fields}>{item.institutions.degree}</span></li>
                <li>Duration: <span className={classes.fields}>{item.institutions.years}</span></li>
            </div>
            <div className={classes.courses}>
                List of Courses:
                <li>Course Name: <span className={classes.fields}>{item.courses.name}</span></li>
                <li>Instructor Name: <span className={classes.fields}>{item.courses.instructor}</span></li>
                <li>Duration: <span className={classes.fields}>{item.courses.duration}</span></li>
            </div>
            <Buttons id={item.id} />
        </div>
    ));

    return (
        <div>
            <h3>Profile Edit Page</h3>
            <Buttons />
            {data}
        </div>
    );
}

export default ProfileEditPage;
