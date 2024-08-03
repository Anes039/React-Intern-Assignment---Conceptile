import classes from './Buttons.module.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeData, addData, editData } from '../Features/dataSlice';
import { useState } from 'react';
import Add from '../Add/Add';

const Buttons = ({ id }) => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    const firstAction = () => setShow(!show); // Define as a function
    const secondAction = () => dispatch(editData(id));
    const thirdAction = () => dispatch(removeData(id));

    const dummy = [
        {
            text: 'Add',
            action: firstAction,
        },
        {
            text: 'Remove',
            action: thirdAction,
        },
        {
            text: 'Edit',
            action: secondAction,
        },
    ];

    return (
        
        <div className={classes.container}>
            {!show ? (
                dummy.map((btn, idx) => (
                    <button onClick={btn.action} className={classes.btn} key={idx}>
                        {btn.text}
                    </button>
                )))
             : ( <Add /> )  }
           
          
        </div>
    );
};

Buttons.propTypes = {
    id: PropTypes.number.isRequired,
};

export default Buttons;