import React, { useEffect, useState } from "react";
import parseJwt from "../../helpers/authHelper";
import { useHistory } from "react-router-dom";

const Listing = () => {
  let history = useHistory();
  const token = sessionStorage.getItem("token");
  const user = parseJwt(token).username;
  const [listing, setListing] = useState([]);
  const logout = (event) => {
    event.preventDefault();
    sessionStorage.removeItem("token");
    history.push("/login");
  };
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "http://localhost:4000/contact_form/entries",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setListing(data);
    };
    getData();
  }, [token]);
  return (
    <main id="listing" className="backgroundcolor">
      <section>
        <div className="container">
          <h1 className="font">Contact Listings for user: {user}</h1>
          <table className="listing-table">
            <thead>
              <tr className="listing-header-row">
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>subject</th>
                <th>comments</th>
              </tr>
            </thead>
            <tbody>
              {listing.length === 0 && (
                <tr className="no-found-row">
                  <td className="listing-column">
                    <i>No listings found</i>
                  </td>
                </tr>
              )}
              {listing.length > 0 &&
                listing.map((entry) => (
                  <tr className="listing-row">
                    <td className="listing-column">{entry.id}</td>
                    <td className="listing-column">{entry.firstName}</td>
                    <td className="listing-column">{entry.email}</td>
                    <td className="listing-column">{entry.subject}</td>
                    <td className="listing-column">{entry.comments}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="logout-button">
        <input
          className="form-btn font"
          type="submit"
          value="Log Out"
          onClick={logout}
        />
      </section>
    </main>
  );
};

export default Listing;
