import type { RowDataPacket } from "mysql2";
import pool from "~/server/db/pool";

export default defineEventHandler(async (event) => {
	const id = getRouterParam(event, "id");

	const query = "SELECT * FROM users WHERE id = ?";
	const [users] = await pool.query<RowDataPacket[]>(query, [id]);

	if (users.length === 0) {
		throw createError({
			statusCode: 404,
			message: `User with ID ${id} not found.`,
		});
	}

	return users[0];
});
