import { add, createId } from "../module/index.js";

export default function Header() {
  const id = createId();
  const div = document.createElement("div");
  const number = 1;
  div.innerHTML = `Header: ${add(number, id)}`;
  return div;
}
