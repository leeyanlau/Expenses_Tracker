import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "budget",
});

app.listen(8800, () => {
  console.log("Connected to backend!");
});

// To test successful backend connection
app.get("/", (req, res) => res.json("hello, this is the backend!"));

// To get data for display of all transactions
app.get("/data", (req, res) => {
  const q = "SELECT * FROM expenses ORDER BY expenses_date DESC, expenses_time DESC";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// To add data into database
app.post("/entry", (req, res) => {
  const q = "INSERT INTO expenses (`expenses_date`,`expenses_time`,`category`,`amount`) VALUES (?)";
  const values = [req.body.expenses_date, req.body.expenses_time, req.body.category, req.body.amount];
  //   const values = ["2023-05-05", "00:00:01", "Food from Backend", "10.5"];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Expense created!");
  });
});
