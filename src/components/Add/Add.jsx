import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import classes from "./Add.module.css";
import { addData } from "../Features/dataSlice";

const Add = ({ id }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: Date.now(),
    name: "",
    age: "",
    email: "",
    number: "",
    institutions: {
      name: "",
      degree: "",
      years: "",
    },
    courses: {
      name: "",
      instructor: "",
      duration: "",
    },
  });
  const [visible, setVisible] = useState(true);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [section, field] = name.split(".");
      setFormData((prevData) => ({
        ...prevData,
        [section]: {
          ...prevData[section],
          [field]: value,
        },
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
    setVisible(false);
  };

  return (
    <div>
      {visible && (
        <form className={classes.form} onSubmit={onSubmitHandler}>
          <div className={classes.personal_info}>
            <div>
              <p>Personal info</p>
              <label>Your name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={onChangeHandler}
              />
            </div>
            <div>
              <label>Your age:</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={onChangeHandler}
              />
            </div>
            <div>
              <label>Your email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={onChangeHandler}
              />
            </div>
            <div>
              <label>Your phone number:</label>
              <input
                type="text"
                name="number"
                value={formData.number}
                onChange={onChangeHandler}
              />
            </div>
          </div>

          <div className={classes.institutions}>
            <div>
              <label>Institution name:</label>
              <input
                type="text"
                name="institutions.name"
                value={formData.institutions.name}
                onChange={onChangeHandler}
              />
            </div>
            <div>
              <label>Degree:</label>
              <input
                type="text"
                name="institutions.degree"
                value={formData.institutions.degree}
                onChange={onChangeHandler}
              />
            </div>
            <div>
              <label>Years:</label>
              <input
                type="text"
                name="institutions.years"
                value={formData.institutions.years}
                onChange={onChangeHandler}
              />
            </div>
          </div>

          <div className={classes.courses}>
            <label>Course Name:</label>
            <input
              type="text"
              name="courses.name"
              value={formData.courses.name}
              onChange={onChangeHandler}
            />
            <label>Instructor Name:</label>
            <input
              type="text"
              name="courses.instructor"
              value={formData.courses.instructor}
              onChange={onChangeHandler}
            />
            <label>Duration:</label>
            <input
              type="text"
              name="courses.duration"
              value={formData.courses.duration}
              onChange={onChangeHandler}
            />
          </div>
          <div className={classes.btn_container}>
            <button
              type="button"
              onClick={() => setVisible(false)}
              style={{ color: "white", background: "black", width: '100%' }}
            >
              Cancel
            </button>

            <button
              type="submit"
              style={{ color: "white", background: "#007BFF", marginTop: "1rem" }}
            >
              Save Data
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

Add.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Add;
