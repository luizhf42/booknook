import type { User } from "~/models/User";
import pool from "~/server/db/pool";
import type { RowDataPacket } from "mysql2";

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	const { id, username, name, picture }: User = body;

	if (!id || !username || !name || !picture) {
		throw createError({ statusCode: 400, message: "Missing required fields." });
	}

	const checkQuery = "SELECT * FROM users WHERE username = ?";
	const [existingUsers] = await pool.query<RowDataPacket[]>(checkQuery, [
		username,
	]);

	if (existingUsers.length > 0) {
		throw createError({ statusCode: 409, message: "Username already exists." });
	}

	const insertQuery =
		"INSERT INTO users (id, username, name, picture) VALUES (?, ?, ?, ?)";
	await pool.execute(insertQuery, [id, username, name, picture]);

	return {
		message: "User created successfully.",
		location: `http://localhost:3000/api/users/${id}`,
	};
});
