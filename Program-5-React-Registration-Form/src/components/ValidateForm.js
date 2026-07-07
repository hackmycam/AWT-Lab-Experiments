import React, { useState } from "react";

function Validate() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    password: "",
    email: "",
    mobile: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let newErrors = {};

    const namePattern = /^[A-Za-z]+$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z]+\.[a-z]{2,}$/;
    const mobilePattern = /^[0-9]{10}$/;

    if (!namePattern.test(formData.fname) || formData.fname.length < 6) {
      newErrors.fname = "First Name must contain only alphabets and minimum 6 characters";
    }
    if (formData.lname.trim() === "") {
      newErrors.lname = "Last Name cannot be empty";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }
    if (!emailPattern.test(formData.email)) {
      newErrors.email = "Enter a valid Email ID";
    }
    if (!mobilePattern.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must contain exactly 10 digits";
    }
    if (formData.address.trim() === "") {
      newErrors.address = "Address cannot be empty";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage("");
    } else {
      setErrors({});
      setSuccessMessage("Registration Successful");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.field}>
          <label>First Name:</label>
          <input
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
          />
          {errors.fname && <p style={styles.error}>{errors.fname}</p>}
        </div>

        <div style={styles.field}>
          <label>Last Name:</label>
          <input
            type="text"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
          />
          {errors.lname && <p style={styles.error}>{errors.lname}</p>}
        </div>

        <div style={styles.field}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p style={styles.error}>{errors.password}</p>}
        </div>

        <div style={styles.field}>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}
        </div>

        <div style={styles.field}>
          <label>Mobile Number:</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          {errors.mobile && <p style={styles.error}>{errors.mobile}</p>}
        </div>

        <div style={styles.field}>
          <label>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <p style={styles.error}>{errors.address}</p>}
        </div>

        <button type="submit">Register</button>
      </form>

      {successMessage && <p style={styles.success}>{successMessage}</p>}
    </div>
  );
}

const styles = {
  container: {
    width: "400px",
    margin: "30px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontFamily: "Arial",
  },
  field: {
    marginBottom: "15px",
    display: "flex",
    flexDirection: "column",
  },
  error: {
    color: "red",
    fontSize: "14px",
  },
  success: {
    color: "green",
    marginTop: "15px",
    fontWeight: "bold",
  },
};

export default Validate;
