import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { validata } from './validata';
import { notify } from './toast';
import styles from './SignUp.module.css'
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        isAccepted: false
    })

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validata(data,'signup'))
    }, [data, touched]);
    

    const focusHandler = event => {
        setTouched({ ...touched, [event.target.name]: true })
    }


    const changeHandler = event => {
        if (event.target.name === 'isAccepted') {
            setData({ ...data, [event.target.name]: event.target.checked })
        } else {
            setData({ ...data, [event.target.name]: event.target.value })
        }

    }

    const submitHandler = event => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            notify('success', 'Hi, You SignUp successfully')
        } else {
            notify('error', 'Sorry, please check again ')
            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true
            })
        }

    }





    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>SignUp</h2>
                <div className={styles.formField}>
                    <label>name</label>
                    <input
                        className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput}
                        type='text'
                        name='name'
                        value={data.name}
                        onChange={changeHandler}
                        onBlur={focusHandler} />
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
                <div className={styles.formField}>
                    <label>email</label>
                    <input
                        className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput}
                        type='text'
                        name='email'
                        value={data.email}
                        onChange={changeHandler}
                        onBlur={focusHandler} />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label>password</label>
                    <input
                        className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput}
                        type='password'
                        name='password'
                        value={data.password}
                        onChange={changeHandler}
                        onBlur={focusHandler} />
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className={styles.formField}>
                    <label>confirmPassword</label>
                    <input
                        className={(errors.confirmPassword && touched.confirmPassword) ? styles.uncompleted : styles.formInput}
                        type='password'
                        name='confirmPassword'
                        value={data.confirmPassword}
                        onChange={changeHandler}
                        onBlur={focusHandler} />
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div className={styles.formField}>
                    <div className={styles.checkBoxContainer}>
                        <label>I accept term of privacy policy</label>
                        <input type='checkbox'
                            name='isAccepted'
                            value={data.isAccepted}
                            onChange={changeHandler}
                            onBlur={focusHandler} />
                        {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                    </div>
                </div>
                <div className={styles.formButtons}>
                        <Link to="/login">Login</Link>
                        <button type='submit'>Sign Up</button>
                </div>
                <ToastContainer />
            </form>
        </div>
    );
};

export default SignUp;