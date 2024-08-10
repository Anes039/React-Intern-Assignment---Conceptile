import classes from './Buttons.module.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeData, editData } from '../Features/dataSlice';
import { useState } from 'react';
import Add from '../Add/Add';

const Buttons = ({ id }) => {
    const [showAddForm, setShowAddForm] = useState(false);
    const dispatch = useDispatch();

    const handleAddClick = () => setShowAddForm(!showAddForm);
    const handleEditClick = () => dispatch(editData(id));
    const handleRemoveClick = () => {
        dispatch(removeData(id));
        setShowAddForm(false);
    };

    const buttons = [
        {
            text: 'Add',
            action: handleAddClick,
        },
        {
            text: 'Remove',
            action: handleRemoveClick,
        },
        {
            text: 'Edit',
            action: handleEditClick,
        },
    ];

    return (
        <div className={classes.container}>
            {buttons.map((btn, index) => (
                <button onClick={btn.action} className={classes.btn} key={index}>
                    {btn.text}
                </button>
            ))}
            {showAddForm && <Add />}
        </div>
    );
};

Buttons.propTypes = {
    id: PropTypes.number.isRequired,
};

export default Buttons;
