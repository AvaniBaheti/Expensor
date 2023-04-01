import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import passport from "passport";
import passportConfig from "./config/passport.js";
import connect from "./database/mongdb.js";
import routes from "./routes/index.js";
import path from "path";
dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
passportConfig(passport);

app.use("/", routes);

await connect();

// deployment
const __dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "./client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "./client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
