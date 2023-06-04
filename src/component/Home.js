import { createId, multiply } from "../module/index.js";

export default function Home() {
  const id = createId();
  const number = 2;
  const div = document.createElement("div");
  div.innerText = `Home: ${multiply(id, number)}`;
  return div;
}
