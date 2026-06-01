import "dotenv/config"

export const ENV ={
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    CLIENT_URL: process.env.CLIENT_URL,
    RESEND_EMAIL_FROM: process.env.EMAIL_FROM,
    RESEND_EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME
}