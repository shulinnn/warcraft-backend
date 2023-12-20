import express, { Application } from "express";
import { raceRouter } from "../routes/race";
import { heroRouter } from "../routes/hero";
import { mapRouter } from "../routes/map";
import { cardRouter } from "../routes/card";
import { itemRouter } from "../routes/item";
import { creepRouter } from "../routes/creep";
import { buildingRouter } from "../routes/building";
import { unitRouter } from "../routes/unit";

export const app: Application = express();
const port = process.env.PORT || 8000;
app.use("/assets", express.static("public"));

app.use("/", raceRouter);
app.use("/", heroRouter);
app.use("/", mapRouter);
app.use("/", cardRouter);
app.use("/", itemRouter);
app.use("/", creepRouter);
app.use("/", buildingRouter);
app.use("/", unitRouter);

app.listen(port, () => {
  console.log(`Server is ONLINE at http://localhost:${port}`);
});
