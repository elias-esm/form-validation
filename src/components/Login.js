import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { validata } from './validata';
import { notify } from './toast';
import styles from './SignUp.module.css';
import { Link } from 'react-router-dom';

const Login = () => {

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validata(data, 'login'))
    }, [data, touched])

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
            notify('success', 'Hi, You Login successfully')
        } else {
            notify('error', 'Sorry, please check again')
            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true
            })
        }
        // notify()

    }





    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>Login</h2>
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

                <div className={styles.formButtons}>
                    <>
                        <Link to="/signup">Sign Up</Link>
                        <button type='submit'>Login</button>
                    </>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;