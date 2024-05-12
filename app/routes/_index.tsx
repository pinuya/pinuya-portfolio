import type { MetaFunction } from "@remix-run/node"
import { ModeToggle } from "~/components/mode-togle"
import Name from "~/components/pageInitalName.tsx/Name"
import Img from "~/assets/tifanypfp.jpeg"
import { Link } from "@remix-run/react"

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
			<div className="flex w-full justify-between">
				<ModeToggle />

				<div className="flex gap-x-2">
					<Link prefetch="intent" to={"/about"}>
						Sobre
					</Link>
					<Link prefetch="intent" to={"/projects"}>
						Projetos
					</Link>
				</div>
			</div>

			<section className="flex items-center gap-x-8">
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
