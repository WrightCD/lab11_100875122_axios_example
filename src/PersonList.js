import React, { Component } from "react";
import axios from "axios";

class PersonList extends Component {
  state = {
    persons: [],
  };

  // Component Lifecycle Callback
  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`).then((res) => {
      console.log(res.data);
      const persons = res.data.results;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <div>
        {this.state.persons.map((person) => (
          <div key={person.login.uuid} className="person-container">
            <div className="person-title">
              <strong>{`${person.name.title} ${person.name.first} ${person.name.last} - ${person.login.uuid}`}</strong>
            </div>
            <div className="person-content">
              <div className="person-header">
                <img
                  src={person.picture.large}
                  alt={`${person.name.first} ${person.name.last}`}
                  className="person-image"
                />
                <button className="person-details-button">Details</button>
              </div>
              <table className="person-table">
                <tbody>
                  <tr>
                    <td colSpan="3">
                      <strong>User Name</strong>: {person.login.username}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3">
                      <strong>Gender</strong>: {person.gender}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3">
                      <strong>Time Zone Description</strong>:{" "}
                      {person.location.timezone.description}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3">
                      <strong>Address</strong>:{" "}
                      {`${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}, ${person.location.country}, ${person.location.postcode}`}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3">
                      <strong>Email</strong>: {person.email}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3">
                      <strong>Birth Date and Age</strong>:{" "}
                      {`${person.dob.date} (${person.dob.age} years)`}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3">
                      <strong>Register Date</strong>: {person.registered.date}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3">
                      <strong>Phone Number</strong>: {person.phone}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PersonList;
