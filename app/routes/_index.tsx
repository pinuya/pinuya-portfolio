import type { MetaFunction } from "@remix-run/node"
import Img from "~/assets/tifanypfp.jpeg"
import PageInitial from "~/components/pageInitalName.tsx/PageInitial"
import Nav from "~/components/navbar/Nav"

export const meta: MetaFunction = () => {
	return [
		{ title: "Portfolio Tifany" },
		{
			name: "Portfolio contendo informacoes e projetos pessoais de Tifany Alves",
			content: "Portfolio",
		},
	]
}

export default function Index() {
	return (
		<div className="p-8 flex items-center flex-col w-full">
			<Nav />

			<section className="mt-52 flex items-center gap-x-8">
				<PageInitial />
				<img src={Img} alt="imagem" className="rounded-full w-60 h-60" />
			</section>
		</div>
	)
}
