import React, { Component } from "react";
import Navbar from "./Navbar";
import Nav from "./Nav";
import "./Admin.css";

class Admin extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="admin-container">
          <h1 className="admin-header">Admin Dashboard</h1>
          <Navbar />
        </div>
      </>
    );
  }
}

export default Admin;
