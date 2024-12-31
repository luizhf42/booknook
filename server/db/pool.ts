import mysql from "mysql2/promise";

const pool = mysql.createPool({
	host: "127.0.0.1",
	user: "root",
	password: "01032006",
	database: "booknook",
	port: 3306,
});

export default pool;