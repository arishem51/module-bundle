import Header from "./component/Header.js";
import Home from "./component/Home.js";

const container = document.getElementById("root");

const Components = [Header, Home];

Components.forEach((child) => {
  container.appendChild(child());
});
