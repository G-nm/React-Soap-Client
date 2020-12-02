import React from "react";
import RegistrationForm from "./RegistrationForm";
import SearchForm from "./SearchForm";
const Navbar = ({
  searchResults,
  search,
  register,
  registerStatus,
  setRegisterStatus,
}) => {
  return (
    <>
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" data-toggle="tab" href="#register">
            Register
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#search">
            Search
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <RegistrationForm
          register={register}
          registerStatus={registerStatus}
          setRegisterStatus={setRegisterStatus}
        />
        <SearchForm search={search} searchResults={searchResults} />
      </div>
    </>
  );
};

export default Navbar;
