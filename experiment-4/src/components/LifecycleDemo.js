import React from "react";

class ChildComponent extends React.Component {
  componentWillUnmount() {
    alert("Child Component Removed");
  }
  render() {
    return (
      <div style={{ padding: "10px", border: "1px dashed red", marginTop: "10px" }}>
        <h4>Child Component</h4>
      </div>
    );
  }
}

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      showChild: true
    };
    this.changeCount = this.changeCount.bind(this);
    this.toggleChild = this.toggleChild.bind(this);
  }

  componentDidMount() {
    document.title = "React life Cycle Demo";
    console.log("Parent Mounted");
  }

  componentDidUpdate() {
    console.log("Parent Updated");
  }

  changeCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  toggleChild() {
    this.setState({
      showChild: !this.state.showChild
    });
  }

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Parent Component</h2>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.changeCount}>Increase Count</button><br/><br/>
        <button onClick={this.toggleChild}>
          {this.state.showChild ? "Remove Child Component" : "Add Child Component"}
        </button>
        {this.state.showChild && <ChildComponent />}
      </div>
    );
  }
}

export default Main;
