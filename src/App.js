import axios from "axios";
import parseString from "xml2js";
import "./App.css";
import { useState } from "react";
import Navbar from "./Navbar";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [registerStatus, setRegisterStatus] = useState("");

  let search = async (studentnumber) => {
    let searchxml = `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xmlns:ws="http://localhost:8000/studentregistration">
  <soap:Body>
    <ws:search>
      <studentid>${studentnumber}</studentid>
    </ws:search>
  </soap:Body>
  </soap:Envelope>`;

    try {
      let posts = await axios.post(
        "http://localhost:8001/studentregistration?wsdl",
        searchxml
      );
      let jsondata = await parseString.parseStringPromise(posts.data);
      let user = [
        {
          address:
            jsondata["soap:Envelope"]["soap:Body"][0]["ws:searchResponse"][0][
              "ws:address"
            ][0],
          age:
            jsondata["soap:Envelope"]["soap:Body"][0]["ws:searchResponse"][0][
              "ws:age"
            ][0],
          username:
            jsondata["soap:Envelope"]["soap:Body"][0]["ws:searchResponse"][0][
              "ws:username"
            ][0],
          entrypoints:
            jsondata["soap:Envelope"]["soap:Body"][0]["ws:searchResponse"][0][
              "ws:entrypoints"
            ][0],
          studentid:
            jsondata["soap:Envelope"]["soap:Body"][0]["ws:searchResponse"][0][
              "ws:studentid"
            ][0],
          email:
            jsondata["soap:Envelope"]["soap:Body"][0]["ws:searchResponse"][0][
              "ws:email"
            ][0],
          phonenumber:
            jsondata["soap:Envelope"]["soap:Body"][0]["ws:searchResponse"][0][
              "ws:phonenumber"
            ][0],
        },
      ];
      setSearchResults(user);
    } catch (error) {
      console.log(error);
    }
  };

  let register = async (user) => {
    let registrationxml = `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xmlns:ws="http://localhost:8000/studentregistration">
    <soap:Body>
      <ws:registration>
        <username>${user.username}</username>
        <age>${user.age}</age>
        <phonenumber>${user.phonenumber}</phonenumber>
        <address>${user.address}</address>
        <entrypoints>${user.entrypoints}</entrypoints>
        <email>${user.email}</email>
        <studentid>${user.studentid}</studentid>
      </ws:registration>
    </soap:Body>
  </soap:Envelope>`;
    let posts = await axios.post(
      "http://localhost:8001/studentregistration?wsdl",
      registrationxml,
      {
        headers: {},
      }
    );
    let jsondata = await parseString.parseStringPromise(posts.data);

    let status =
      jsondata["soap:Envelope"]["soap:Body"][0]["ws:registrationResponse"][0][
        "ws:status"
      ][0];

    setRegisterStatus(status);
  };

  return (
    <>
      <Navbar
        searchResults={searchResults}
        search={search}
        register={register}
        registerStatus={registerStatus}
        setRegisterStatus={setRegisterStatus}
      />
    </>
  );
}

export default App;
