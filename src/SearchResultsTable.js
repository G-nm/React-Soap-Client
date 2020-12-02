import React from "react";

const SearchResultsTable = ({ searchResults }) => {
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Age</th>
            <th scope="col">Phonenumber</th>
            <th scope="col">address</th>
            <th scope="col">Entrypoints</th>
            <th scope="col">Email</th>
            <th scope="col">StudentId</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((user, index) => {
            return (
              <tr key={index}>
                <td id="firstitem">{user.username}</td>
                <td>{user.age}</td>
                <td>{user.phonenumber}</td>
                <td>{user.address}</td>
                <td>{user.entrypoints}</td>
                <td>{user.email}</td>
                <td>{user.studentid}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default SearchResultsTable;
