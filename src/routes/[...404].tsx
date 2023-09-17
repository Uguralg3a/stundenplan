import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";
import "./404.css"

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>Page Not Found</h1>
      <p>Got Lost? 🔎 Try contacting the Administrator</p>
    </main>
  );
}
