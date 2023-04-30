import React, { Component } from "react";
import Navbar from "./Navbar";
import Nav from "./Nav";

class Admin extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="admin-container">
          <h1 className="admin-header">Admin Dashboard</h1>
          <Navbar />
          {/* Content for specific admin dashboard page */}
        </div>
      </>
    );
  }
}

export default Admin;
