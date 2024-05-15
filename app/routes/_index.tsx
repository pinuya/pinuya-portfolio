import type { MetaFunction } from "@remix-run/node"
import Img from "~/assets/tifanypfp.jpeg"
import PageInitial from "~/components/pageInitalName.tsx/PageInitial"
import Nav from "~/components/navbar/Nav"
import { Footer } from "~/components/footer/Footer"

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
		<div className="p-8 flex items-center justify-center flex-col h-screen w-full">
			<Nav />

			<div className="h-full flex-1 flex items-center justify-center">
				<section className="flex flex-1 gap-x-56">
					<PageInitial />
					<img src={Img} alt="imagem" className="rounded-full w-60 h-60" />
				</section>
			</div>

			<div className="">
				<Footer />
			</div>
		</div>
	)
}
