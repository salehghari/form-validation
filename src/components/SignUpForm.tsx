import React from 'react'
import styles from "../styles/SignUpForm.module.css";
import { useFormik } from 'formik';
import { SignUpFormSchema } from './Validation';
import { ISignupParams } from '@/types/signup.interface';

const initialValues: ISignupParams = {
  username: "",
  email: "",
  phoneNumber: 0,
  password: "",
  confirmPassword: "",
}

export default function SignUpForm() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  useFormik({
    validationSchema: SignUpFormSchema,
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log("validation success✅");
      console.log(values);

      // send request and stuff
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="username"
        className={styles.formInput}
        type="text"
        name="username"
        placeholder="Enter Your Username"
        onBlur={handleBlur}
        value={values.username}
        onChange={handleChange}
      />

      {touched.username && errors.username && <div>{errors.username}</div>}

      <input
        id="email"
        className={styles.formInput}
        type="email"
        name="email"
        placeholder="Enter Your Email"
        onBlur={handleBlur}
        value={values.email}
        onChange={handleChange}
      />
      {touched.email && errors.email && <div>{errors.email}</div>}

      <input
        id="phoneNumber"
        className={styles.formInput}
        type="text"
        name="phoneNumber"
        placeholder="Enter Your Phone number"
        onBlur={handleBlur}
        value={values.phoneNumber}
        onChange={handleChange}
      />
      {touched.phoneNumber && errors.phoneNumber && <div>{errors.phoneNumber}</div>}

      <input
        id="password"
        className={styles.formInput}
        type="password"
        name="password"
        placeholder="Enter Your Password"
        onBlur={handleBlur}
        value={values.password}
        onChange={handleChange}
      />
      {touched.password && errors.password && <div>{errors.password}</div>}

      <input
        id="confirmPassword"
        className={styles.formInput}
        type="password"
        name="confirmPassword"
        placeholder="Enter Your Password Again"
        onBlur={handleBlur}
        value={values.confirmPassword}
        onChange={handleChange}
      />
      {touched.confirmPassword && errors.confirmPassword && <div>{errors.confirmPassword}</div>}

      <button disabled={!!Object.keys(errors).length} type="submit">
        Submit
      </button>
    </form>
  );
}