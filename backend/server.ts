import {appPort} from './config';
import express from "express";
import cors from "cors";
import {db} from './src/db/DBConfig';
import userRouter from './src/routes/user.routes';
import testRouter from './src/routes/test.routes';
import checkTestRouter from './src/routes/checkTest.routes';



const app = express();

app.use(cors({origin: "http://localhost:3000/"}));
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/users", userRouter);
app.use("/tests", testRouter)
app.use("/checkedTests", checkTestRouter);

app.get("/", (req, res) => {
    res.json({message: "Wassup bro?"})
})

app.listen(appPort, () => {
    console.log("Server is running at host: " + appPort)
})

db.sequelize.sync()
    .then(() => {
        console.log("DB is synced")
    })
    .catch((err) => {
        console.error("Failed to sync a db")
    })

export default app;