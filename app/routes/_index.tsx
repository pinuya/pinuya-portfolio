import { redirect, type MetaFunction } from "@remix-run/node"

export const meta: MetaFunction = () => {
	return [
		{ title: "Portfolio Tifany" },
		{
			name: "Portfolio contendo informacoes e projetos pessoais de Tifany Alves",
			content: "Portfolio",
		},
	]
}

export const loader = () => {
	return redirect("/home")
}
