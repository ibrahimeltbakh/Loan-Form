import "./Modal.css";
export default function Model({ isVisable, errorMessage = null }) {
  if (isVisable) {
    return (
      <div className="overlay ">
        <div className="modal">
          <h1 style={{ color: errorMessage ? "red" : "green" }}>
            {errorMessage != null
              ? errorMessage
              : "The Form Has Been Submitted Successfully"}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
