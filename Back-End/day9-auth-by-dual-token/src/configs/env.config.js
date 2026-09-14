import env from "dotenv";

env.config();


export const config = {
    port:Number(process.env.PORT) ?? 8000,
    mongooseUrl:process.env.MONGOOSE_URL,
    refreshSecreate:process.env.REFRESH_SECREATE,
    acessSecreate:process.env.ACCESS_SECREATE,
    salt:Number(process.env.SALT)
}