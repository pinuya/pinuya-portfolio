import type { MetaFunction } from "@remix-run/node"

import Name from "~/components/pageInitalName.tsx/Name"
import Img from "~/assets/tifanypfp.jpeg"
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
				<Name />
				<img
					src={Img}
					alt="vai tomar no cu biome"
					className="rounded-full w-60 h-60"
				/>
			</section>
		</div>
	)
}
