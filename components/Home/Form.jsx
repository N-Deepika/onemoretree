import React, { useState } from "react";
import {
  TextInput,
  Button,
  Select,
  PasswordInput,
  InputWrapper,
} from "@mantine/core";
import FormImage from "../../assets/form.jpg";
import Image from "next/image";
const { useNotifications } = require("@mantine/notifications");
import { CheckIcon } from "@heroicons/react/solid";

const Form = () => {
  const notifications = useNotifications();
  const [fullName, setFullName] = useState("");
  const [city, setCity] = useState("");
  const [contact, setContact] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [company, setCompany] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    let route;
    e.preventDefault();
    setLoading(true);
    const id = notifications.showNotification({
      loading: true,
      title: "Registering",
      message: "Please Wait Patiently",
      autoClose: false,
      disallowClose: true,
    });
    if (type === "Distributor") {
      route = "distributor";
    } else {
      route = "Contributor";
    }
    fetch(`https://onemoretree.ml/auth/register/${route}`, {
      // fetch(`http://localhost:5000/auth/register/${route}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name: fullName,
        city: city,
        password: password,
        company_name: company,
        contact_no: contact,
        email,
      }),
    })
      .then(async (res) => {
        let user = await res.json();
        if (res.status === 200) {
          return user;
        } else {
          setIsLoading(false);
          notifications.updateNotification(id, {
            title: "Error",
            message: `Registration Failed! ${user.message}`,
            autoClose: 4000,
          });
          throw new Error("User Already Exists");
        }
      })
      .then((user) => {
        setIsLoading(false);
        notifications.updateNotification(id, {
          color: "teal",
          title: "Registration Successful",
          message: "Registration Succeded! Welcome To The Club",
          icon: <CheckIcon />,
          autoClose: 4000,
        });
      })
      .catch((e) => {
        notifications.updateNotification(id, {
          title: "Error",
          message: `Registration Failed!\n ${e.message}`,
          autoClose: 4000,
        });
      });
    setFullName("");
    setCity("");
    setPassword("");
    setCompany("");
    setEmail("");
    setContact("");
    setConfirmPassword("");
    setType("");
  };

  return (
    <div className="flex hover:shadow-2xl flex-col md:flex-row mb-20 w-11/12 mx-auto justify-center items-stretch">
      <div className="w-full h-80 sm:h-auto rounded-t-xl md:rounded-t-none md:rounded-tl-xl md:rounded-bl-xl overflow-hidden md:w-1/2">
        <img
          src={FormImage.src}
          alt="form"
          className="h-full w-full object-cover"
        />
      </div>
      <form
        className={` md:border-2 w-full md:w-1/2 ml-auto border-slate-400 py-6 lg:px-16 h-full md:h-auto grid place-items-center font-Rubik px-4 text-black sm:px-8 sm:py-6 `}
      >
        <div className="">
          <div className={`w-full flex flex-col`}>
            <div className="mb-4 tracking-wide flex flex-col gap-y-2">
              <p className="text-5xl font-bold">Get Yourself Registered</p>
            </div>
            <InputWrapper>
              <Select
                className={`mb-2`}
                styles={{
                  input: { color: "black", padding: "15px 10px" },
                  label: { color: "black", fontSize: "1rem" },
                  required: { color: "red" },
                }}
                label="Registering As:"
                id="type"
                description="Select your registeration type"
                placeholder="Registration Type"
                required
                value={type}
                data={[
                  { value: "Distributor", label: "Distributor" },
                  { value: "Contributor", label: "Contributor" },
                ]}
                onChange={(e) => {
                  console.log(e);
                  setType(e);
                }}
              />
              <TextInput
                className={`mb-2 `}
                styles={{
                  input: { color: "black", padding: "15px 10px" },
                  label: { color: "black", fontSize: "1rem" },
                  required: { color: "red" },
                }}
                id="fullName"
                required
                label="Full Name"
                placeholder="Your name"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
              />
              <div className="flex my-2 flex-row justify-center items-center gap-2">
                <TextInput
                  className={`my-2 sm:my-0 sm:w-1/2`}
                  styles={{
                    input: { color: "black", padding: "15px 10px" },
                    label: { color: "black", fontSize: "1rem" },
                    required: { color: "red" },
                  }}
                  id="contact"
                  required
                  label="Contact Number"
                  description="Phone with country code"
                  placeholder="Your Contact Number"
                  value={contact}
                  onChange={(event) => setContact(event.target.value)}
                />

                <TextInput
                  className={`my-2 sm:my-0 sm:w-1/2`}
                  styles={{
                    input: { color: "black", padding: "15px 10px" },
                    label: { color: "black", fontSize: "1rem" },
                    required: { color: "red" },
                  }}
                  required
                  id="email"
                  label="E-mail Address"
                  description="Your Email Address"
                  placeholder="Email"
                  value={email}
                  onChange={(event) =>
                    // form.setFieldValue("email", event.currentTarget.value)
                    setEmail(event.target.value)
                  }
                />
              </div>
              <TextInput
                className={`mb-2 `}
                styles={{
                  input: { color: "black", padding: "15px 10px" },
                  label: { color: "black", fontSize: "1rem" },
                  required: { color: "red" },
                }}
                id="city"
                required
                label="City"
                placeholder="Your City"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />

              <TextInput
                className={`w-full my-2 ${
                  type === "Contributor" ? "hidden" : ""
                }`}
                styles={{
                  input: { color: "black", padding: "15px 10px" },
                  label: { color: "black", fontSize: "1rem" },
                  required: { color: "red" },
                }}
                required
                id="company"
                label="Company Name"
                description="Enter Your Company Name"
                placeholder="Company Name"
                value={company}
                onChange={(event) =>
                  // form.setFieldValue("email", event.currentTarget.value)
                  setCompany(event.target.value)
                }
              />

              <div className="flex my-2 flex-col sm:flex-row gap-2">
                <PasswordInput
                  className={`my-2 sm:my-0 sm:w-1/2 ${
                    type === "Contributor" ? "hidden" : ""
                  }`}
                  styles={{
                    input: { color: "black", padding: "15px 10px" },
                    label: { color: "black", fontSize: "1rem" },
                    required: { color: "red" },
                  }}
                  placeholder="Password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  label="Password"
                  required
                />

                <PasswordInput
                  className={`my-2 sm:my-0 sm:w-1/2 ${
                    type === "Contributor" ? "hidden" : ""
                  }`}
                  styles={{
                    input: { color: "black", padding: "15px 10px" },
                    label: { color: "black", fontSize: "1rem" },
                    required: { color: "red" },
                  }}
                  placeholder="Confirm Password"
                  error={
                    password !== confirmPassword && confirmPassword.length >= 1
                      ? "Password Does Not Match"
                      : ""
                  }
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  label="Confirm Password"
                  required
                />
              </div>
            </InputWrapper>

            <div className="ml-auto">
              <Button
                loading={isLoading ? true : false}
                className="rounded-lg mt-4 w-full sm:w-44 bg-blue-600 hover:bg-blue-700"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
