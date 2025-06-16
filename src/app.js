import express from "express"
import cors from "cors"
import CookieParser from "cookieparser"

const app = express()

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials: true
    }
))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(CookieParser())
app.use(express.static("public"))

export {app}