"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// Express parser
app.use(express_1.default.json());
app.use(express_1.default.json());
// app.get("/:id/:email", (req: Request, res: Response) => {
//   console.log(req.params);
//   res.send("Hello Developer");
// });
const createUser = express_1.default.Router();
app.use("/api/v1/users", createUser);
const course = express_1.default.Router();
app.use("/api/v1/courses", course);
createUser.post("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        name: "Monir Ullah",
        age: 23,
        gender: "Male",
    });
});
course.get("/get-course", (req, res) => {
    const getCourse = req.body;
    console.log(getCourse);
    res.json(getCourse);
});
const loger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
app.get("/", loger, (req, res) => {
    console.log(req.query);
    res.send("Hello Developer");
});
app.post("/:id/:email", (req, res) => {
    console.log(req.params);
    res.json({
        isTrue: true,
        course: "Level -2",
    });
});
// export default app
exports.default = app;
