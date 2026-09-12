import env from "dotenv";
env.config();

export const envVariables = {
    port:process.env.port,
    mongooseConnectionUrl:process.env.MONGOOSE_CONNECTION_URL,
    salt:Number(process.env.SALT),   //remember env me jo number hai wo unko string formate me deta hai
    jwtSecreate:process.env.JWT_PRIVATE_KEY
}