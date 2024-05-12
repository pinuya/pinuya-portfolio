import type { MetaFunction } from "@remix-run/node";
import { ModeToggle } from "~/components/mode-togle";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio Tifany" },
    {
      name: "Portfolio contendo informacoes e projetos pessoais de Tifany Alves",
      content: "Portfolio",
    },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Tifany Alves</h1>
      <ModeToggle />
      <h2>Desenvolvedora Full-Stack.</h2>
    </div>
  );
}
