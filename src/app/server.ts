import { Server } from "http";
import app from "./app";

let server: Server;
const port = 3000;

async function bootstrap() {
  server = app.listen(port, () => {
    console.log("How are you monir ullah?");
    console.log(`Example app listening on port ${port}`);
  });
}

bootstrap();
