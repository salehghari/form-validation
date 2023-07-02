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
      alert("validation success✅");

      // send request and stuff
    },
  });
  
  return (
    <form className="flex flex-col gap-6 items-center h-auto max-w-sm w-10/12" onSubmit={handleSubmit}>
      <div className="w-full">
        <input
          id="username"
          className={`${styles.formInput} transition-colors border-2 border-transparent focus:border-blue-400 w-full bg-white shadow-md rounded py-2 outline-none px-4`}
          type="text"
          name="username"
          placeholder="Enter Your Username"
          onBlur={handleBlur}
          value={values.username}
          onChange={handleChange}
        />

        {touched.username && errors.username && <div className="text-orange-700 mt-2">{errors.username}</div>}
      </div>

      <div className="w-full">
        <input
          id="email"
          className={`${styles.formInput} transition-colors border-2 border-transparent focus:border-blue-400 w-full bg-white shadow-md rounded outline-none py-2 px-4`}
          type="email"
          name="email"
          placeholder="Enter Your Email"
          onBlur={handleBlur}
          value={values.email}
          onChange={handleChange}
        />
        {touched.email && errors.email && <div className="text-orange-700 mt-2">{errors.email}</div>}
      </div>


      <div className="w-full">
        <input
          id="phoneNumber"
          className={`${styles.formInput} transition-colors border-2 border-transparent focus:border-blue-400 w-full bg-white shadow-md rounded outline-none py-2 px-4`}
          type="text"
          name="phoneNumber"
          placeholder="Enter Your Phone number"
          onBlur={handleBlur}
          value={values.phoneNumber}
          onChange={handleChange}
        />
        {touched.phoneNumber && errors.phoneNumber && <div className="text-orange-700 mt-2">{errors.phoneNumber}</div>}
      </div>

      <div className="w-full">
        <input
          id="password"
          className={`${styles.formInput} transition-colors border-2 border-transparent focus:border-blue-400 w-full bg-white shadow-md rounded outline-none py-2 px-4`}
          type="password"
          name="password"
          placeholder="Enter Your Password"
          onBlur={handleBlur}
          value={values.password}
          onChange={handleChange}
        />
        {touched.password && errors.password && <div className="text-orange-700 mt-2">{errors.password}</div>}
      </div>

      <div className="w-full">
        <input
          id="confirmPassword"
          className={`${styles.formInput} transition-colors border-2 border-transparent focus:border-blue-400 w-full bg-white shadow-md rounded outline-none py-2 px-4`}
          type="password"
          name="confirmPassword"
          placeholder="Enter Your Password Again"
          onBlur={handleBlur}
          value={values.confirmPassword}
          onChange={handleChange}
        />
        {touched.confirmPassword && errors.confirmPassword && <div className="text-orange-700 mt-2">{errors.confirmPassword}</div>}
      </div>

      <button className="disabled:opacity-75 py-1 px-4 rounded transition-colors bg-blue-400 text-white hover:bg-blue-500" disabled={!!Object.keys(errors).length} type="submit">
        Submit
      </button>
    </form>
  );
}