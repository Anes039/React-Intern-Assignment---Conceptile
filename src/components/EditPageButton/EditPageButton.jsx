import classes from './EditPageButton.module.css';
import { Link } from 'react-router-dom';

const EditPageButton = () => {
    return (
        <Link to='edit' >
            <button className={classes.btn}>Edit Profile</button>
           
        </Link>
        
    )
}
export default EditPageButton;