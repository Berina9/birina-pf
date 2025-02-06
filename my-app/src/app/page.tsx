import About from "./component/About";
import Hero from "./component/Hero";
import Projects from "./component/Projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <About />
    </div>
  );
}
