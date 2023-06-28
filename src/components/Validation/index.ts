import * as yup from "yup";

const phoneRegExp: RegExp = /[0۰][9۹]([0-39۹\u06F0-\u06F3])[0-9\u06F0-\u06F9]-?[0-9\u06F0-\u06F9]{3}-?[0-9\u06F0-\u06F9]{4}/gu;

const emailRegExp: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const username = yup
  .string()
  .required("Oops! It seems you forgot to enter your username! Please provide one.")
  .min(4, "At least 4 characters!")
  .max(16, "At most 16 characters!");

const email = yup
  .string()
  .required("Please don't forget to enter your email so we can keep you updated!")
  .matches(emailRegExp, "Invalid Email");

const phoneNumber = yup
  .string()
  .required("Enter your phone number to receive important updates and notifications!")
  .matches(phoneRegExp, "Invalid Phone Number");

const password = yup
  .string()
  .required("Please don't forget to enter your password. It's necessary for account security!")
  .min(8, "At least 8 characters. Hackers would love you!");

const confirmPassword = yup
  .string()
  .required("We need you to confirm your password! Please enter it again")
  .oneOf([yup.ref("password")], "Oops! The passwords you entered don't match. Please try again.");

export const SignUpFormSchema = yup.object().shape({
  username,
  email,
  phoneNumber,
  password,
  confirmPassword
});