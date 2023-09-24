import React, { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    FirstName: "",
    LastName: "",
    DOB: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special characters!",
      label: "Username",
      pattern: /^[A-Za-z0-9]{3,16}$/,
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
      required: true,
    },
    {
      id: 3,
      name: "FirstName",
      type: "text",
      placeholder: "First Name",
      label: "First Name",
      pattern: /^[A-Za-z]+$/,
      required: true,
    },
    {
      id: 4,
      name: "LastName",
      type: "text",
      placeholder: "Last Name",
      label: "Last Name(Optional)",
      pattern: /^[A-Za-z]+$/,
      required: false,
    },
    {
      id: 5,
      name: "DOB",
      type: "date",
      placeholder: "Birthday",
      label: "Date of Birth",
    },
    {
      id: 6,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 7,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Form Input</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            id={input.id}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            errorMessage={input.errorMessage}
            label={input.label}
            pattern={input.pattern}
            required={input.required}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
