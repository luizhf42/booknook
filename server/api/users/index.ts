import pool from "~/server/db/pool";

export default defineEventHandler(async () => {
	const query = "SELECT * FROM users";
	const [users] = await pool.query(query);

	return users;
});
