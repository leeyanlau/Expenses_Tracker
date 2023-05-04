import React from "react";
import axios from "axios";

const submitData = async (e) => {
  const txnData = {
    expenses_date: "2023-12-30",
    expenses_time: "12:00:01",
    category: "Food from entry",
    amount: 500.5,
  };
  e.preventDefault();
  try {
    console.log("submitting...");
    await axios.post("http://localhost:8800/entry", txnData);
    console.log("submitted");
  } catch (err) {
    console.log(err);
  }
};

const Entry = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1 style={{ color: "#fff", padding: "1rem" }}>Entry</h1>
        <button onClick={submitData} style={{ height: "25px" }}>
          Submit
        </button>
      </div>
    </>
  );
};

export default Entry;
