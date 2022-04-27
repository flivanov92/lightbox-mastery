import "./index.css";
import { render } from "@testing-library/react";
import App from "./app/app";

const here = document.getElementById("mypage");
const app = <App />;

render(app, here);
