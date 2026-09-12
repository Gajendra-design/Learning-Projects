import env from "dotenv"

env.config();

export const envPort = process.env.PORT;
export const mongoDbUrl = process.env.MONGOOSE_URI;
export const salt = Number(process.env.SALT);
export const jwtSecreate = process.env.JWT_SECREATE;

