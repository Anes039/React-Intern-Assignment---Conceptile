import { useState } from "react";
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import classes from './Add.module.css';
import { addData } from "../Features/dataSlice";

const Add = ({ id }) => {
    const dispatch = useDispatch();
    const [visible,isVisible] = useState(false);
    const [formData, setFormData] = useState({
        id: Math.random(),
        name: "",
        age: '',
        email: "",
        number: "",
        institutions: {
            name: '',
            degree: '',
            years: ''
        },
        courses: {
            name: '',
            instructor: '',
            duration: ''
        }
    });
    

    const onChangeHandler = (e) => {
        const { name, value } = e.target;

        if (name.includes('.')) {
            const [section, field] = name.split('.');
            setFormData((prevData) => ({
                ...prevData,
                [section]: {
                    ...prevData[section],
                    [field]: value
                }
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(addData(formData));
        isVisible(!visible)
        setFormData( {
            id: Math.random(),
            name: "",
            age: '',
            email: "",
            number: "",
            institutions: {
                name: '',
                degree: '',
                years: ''
            },
            courses: {
                name: '',
                instructor: '',
                duration: ''
            }
        })
    };

    return (
        <div>
           {isVisible ? (
             <form  className={classes.form} onSubmit={onSubmitHandler}>
                
             <div>
                 <label>Your name:</label>
                 <input type="text" name="name" value={formData.name} onChange={onChangeHandler} />
             </div>
             <div>
                 <label>Your age:</label>
                 <input type="number" name="age" value={formData.age} onChange={onChangeHandler} />
             </div>
             <div>
                 <label>Your email:</label>
                 <input type="email" name="email" value={formData.email} onChange={onChangeHandler} />
             </div>
             <div>
                 <label>Your phone number:</label>
                 <input type="text" name="number" value={formData.number} onChange={onChangeHandler} />
             </div>
             <div className={classes.institutions}>
                 <label>Institution name:</label>
                 <input type="text" name="institutions.name" value={formData.institutions.name} onChange={onChangeHandler} />
                 <label>Degree:</label>
                 <input type="text" name="institutions.degree" value={formData.institutions.degree} onChange={onChangeHandler} />
                 <label>Years:</label>
                 <input type="text" name="institutions.years" value={formData.institutions.years} onChange={onChangeHandler} />
             </div>
             <div className={classes.courses}>
                 <label>Course Name:</label>
                 <input type="text" name="courses.name" value={formData.courses.name} onChange={onChangeHandler} />
                 <label>Instructor Name:</label>
                 <input type="text" name="courses.instructor" value={formData.courses.instructor} onChange={onChangeHandler} />
                 <label>Duration:</label>
                 <input type="text" name="courses.duration" value={formData.courses.duration} onChange={onChangeHandler} />
             </div>
             <button style={{color:'white',background:'#007BFF',marginTop:'1rem'}} type="submit">Add Data</button>
         </form>
           ): ''}
        </div>
    );
};

export default Add;

Add.propTypes = {
    id: PropTypes.number.isRequired,
};
