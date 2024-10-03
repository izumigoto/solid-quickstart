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
      {/* Script to Set and Display Cookie */}
      <script>
        {`
          // Set a cookie with a name, value, and expiration time
          const expiryDate = new Date();
          expiryDate.setTime(expiryDate.getTime() + (7 * 24 * 60 * 60 * 1000)); // 7 days from now
          const expires = "expires=" + expiryDate.toUTCString();
          document.cookie = "test_cookie=HelloWorld; " + expires + "; path=/"; 

          // Display the cookie
          alert(document.cookie); // This should display 'test_cookie=HelloWorld'
        `}
      </script>
    </main>
  );
}
