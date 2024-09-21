import "./LoanForm.css";
import Modal from "./Modal";
import { useState } from "react";
export default function LoanForm() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formInputs, setFormInputs] = useState({
    name: "",
    phone: "",
    age: "",
    isEmployee: false,
    salary: "",
  });

  function handelFormSubmit(e) {
    e.preventDefault();
    setErrorMessage(null);
    const { age, phone } = formInputs;
    if (age < 18 || age > 60) {
      setErrorMessage("Sorry The Age Is Not Allowed");
    } else if (phone.length !== 11) {
      setErrorMessage("Sorry Phone Number Is Not Allowed");
    }
    setShowModal(true);
  }
  function handelCancelPOPUP() {
    if (showModal) {
      setShowModal(false);
    }
  }
  const btnIsDisabled =
    formInputs.name === "" ||
    formInputs.phone === "" ||
    formInputs.age === "" ||
    formInputs.salary === "";
  return (
    <div onClick={handelCancelPOPUP}>
      <form
        style={{
          width: "50%",
          backgroundColor: "teal",
          padding: "20px",
          margin: "auto",
          color: "white",
          borderRadius: "20px",
        }}>
        <h1>Requesting a Loan</h1>
        <hr></hr>
        <div className="name box">
          <label>Name: </label>
          <input
            type="text"
            value={formInputs.name}
            onChange={(e) => {
              setFormInputs({ ...formInputs, name: e.target.value });
            }}></input>
        </div>

        <div className="number box">
          <label>Phone: </label>
          <input
            type="number"
            value={formInputs.phone}
            onChange={(e) => {
              setFormInputs({ ...formInputs, phone: e.target.value });
            }}></input>
        </div>

        <div className="age box">
          <label>Age: </label>
          <input
            type="number"
            value={formInputs.age}
            onChange={(e) => {
              setFormInputs({ ...formInputs, age: e.target.value });
            }}></input>
        </div>

        <div className="employee box">
          <label>Are You Employee? </label>
          <input
            type="checkbox"
            checked={formInputs.isEmployee}
            onChange={(e) => {
              setFormInputs({ ...formInputs, isEmployee: e.target.checked });
            }}></input>
        </div>

        <div className="salary box">
          <label>Salary: </label>
          <select
            value={formInputs.salary}
            onChange={(e) => {
              setFormInputs({ ...formInputs, salary: e.target.value });
            }}>
            <option value="" disabled>
              Select Salary
            </option>
            <option>Less Than 500$</option>
            <option>between 500$ and 2000$</option>
            <option>above 2000$</option>
          </select>
        </div>
        <div className="submit box">
          <button
            className={btnIsDisabled ? "disabled" : ""}
            onClick={handelFormSubmit}
            disabled={btnIsDisabled}>
            Submit
          </button>
        </div>
      </form>
      <Modal isVisable={showModal} errorMessage={errorMessage} />
    </div>
  );
}
