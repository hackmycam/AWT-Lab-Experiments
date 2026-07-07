import React from "react";

class EmployeeForm extends React.Component {
  constructor() {
    super();
    this.state = {
      Sname: "",
      Sid: "",
      Dept: "",
      Age: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.clearData = this.clearData.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  clearData() {
    this.setState({
      Sname: "",
      Sid: "",
      Dept: "",
      Age: ""
    });
  }

  render() {
    const boxStyle = {
      width: "350px",
      margin: "50px auto",
      padding: "20px",
      border: "2px solid black",
      borderRadius: "10px",
      backgroundColor: "#f2f2f2"
    };

    const headingStyle = {
      textAlign: "center",
      color: "blue"
    };

    return (
      <div style={boxStyle}>
        <h2 style={headingStyle}>Employee Form</h2>
        <label>Student Name:</label><br />
        <input
          type="text"
          name="Sname"
          value={this.state.Sname}
          onChange={this.handleChange}
        /><br /><br />

        <label>Student ID:</label><br />
        <input
          type="text"
          name="Sid"
          value={this.state.Sid}
          onChange={this.handleChange}
        /><br /><br />

        <label>Department:</label><br />
        <input
          type="text"
          name="Dept"
          value={this.state.Dept}
          onChange={this.handleChange}
        /><br /><br />

        <label>Age:</label><br />
        <input
          type="text"
          name="Age"
          value={this.state.Age}
          onChange={this.handleChange}
        /><br /><br />

        <h3>Employee Details</h3>
        <p><b>Name :</b> {this.state.Sname}</p>
        <p><b>ID :</b> {this.state.Sid}</p>
        <p><b>Department :</b> {this.state.Dept}</p>
        <p><b>Age :</b> {this.state.Age}</p>
        <button onClick={this.clearData}>Clear</button>
      </div>
    );
  }
}

class UserEvents extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.value,
      message: "onChange Event Triggered"
    });
  }

  handleClick() {
    this.setState({
      name: "",
      message: "onClick Event Triggered (Textbox Cleared)"
    });
  }

  handleFocus() {
    this.setState({
      message: "onFocus Event Triggered"
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      message: "onSubmit Event Triggered"
    });
  }

  render() {
    const boxStyle = {
      backgroundColor: "lightblue",
      border: "2px solid black",
      width: "300px",
      margin: "50px auto",
      padding: "20px",
      textAlign: "center"
    };

    return (
      <div style={boxStyle}>
        <h2>User Event Handling</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={this.state.name}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
          /><br /><br />
          <button type="button" onClick={this.handleClick}>Clear</button><br /><br />
          <input type="submit" value="Submit" />
        </form>
        <h3>{this.state.message}</h3>
        <p>Name: {this.state.name}</p>
      </div>
    );
  }
}

export default function Employee() {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
      <EmployeeForm />
      <UserEvents />
    </div>
  );
}
