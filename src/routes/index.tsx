import { Title } from "solid-start";
import Counter from "~/components/Counter";
import MyImage from '~/assets/test-image.gif';

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">S
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
        <img src={MyImage} alt="Descriptive text" />

      </p>
    </main>
  );
}
