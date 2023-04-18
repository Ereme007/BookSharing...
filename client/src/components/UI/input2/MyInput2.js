import React from 'react';
import classes from './MyInput2.module.css';

const MyInput2 = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.myInput2} {...props}/>
    );
});

export default MyInput2;
