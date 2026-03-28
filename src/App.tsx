import { Test } from "components";

export default function App() {
  return (
    <div className="bg-yellow relative grid h-dvh place-content-center px-6.75">
      <main>
        <Test />
      </main>
      <footer>
        <footer className="text-preset-2 absolute bottom-4 w-full text-center font-light text-slate-900">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            className="font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.linkedin.com/in/abdelrhman-vanta/"
            className="font-bold"
          >
            Abdelrhman Abdelaal
          </a>
          .
        </footer>
      </footer>
    </div>
  );
}
