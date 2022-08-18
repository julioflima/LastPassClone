import Routes from "./routes/Routes";
import App from "./App";

const routes = new Routes().init();
const app = new App(routes).server;

app.listen(3333);
