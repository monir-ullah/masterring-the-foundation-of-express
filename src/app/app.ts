import express, { NextFunction, Request, Response } from "express";

const app = express();

// Express parser

app.use(express.json());
app.use(express.json());

// app.get("/:id/:email", (req: Request, res: Response) => {
//   console.log(req.params);
//   res.send("Hello Developer");
// });

const createUser = express.Router();
app.use("/api/v1/users", createUser);
const course = express.Router();
app.use("/api/v1/courses", course);

createUser.post("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);
  res.json({
    name: "Monir Ullah",
    age: 23,
    gender: "Male",
  });
});

course.get("/get-course", (req: Request, res: Response) => {
  const getCourse = req.body;
  console.log(getCourse);
  res.json(getCourse);
});

const loger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next();
};
app.get("/", loger, (req: Request, res: Response) => {
  console.log(req.query);
  res.send("Hello Developer");
});

app.post("/:id/:email", (req: Request, res: Response) => {
  console.log(req.params);
  res.json({
    isTrue: true,
    course: "Level -2",
  });
});

// export default app
export default app;
