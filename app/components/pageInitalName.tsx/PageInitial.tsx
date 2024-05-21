import { Link } from "@remix-run/react"
import { Button } from "../ui/button"
import { FileDown, MoveRight } from "lucide-react"

export default function PageInitial() {
	return (
		<div>
			<div className="flex flex-col items-center sm:items-start">
				<h1 className="font-semibold text-4xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
					Tifany Alves
				</h1>
				<h2 className="font-semibold">
					FullStack Developer | Software Engineer{" "}
					<span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
						.
					</span>
				</h2>
				<p className="text-sm mt-2">
					Olá, seja bem vindo(a)! Prazer, sou{" "}
					<span className="font-semibold">desenvolvedora FullStack</span>,{" "}
					<br /> fique a vontade para conhecer melhor o meu trabalho.
				</p>
			</div>
			<div className="mt-6 flex justify-between">
				<Link to={"/about"}>
					<Button>
						{" "}
						Saiba mais <MoveRight className="ml-2 h-4 w-4" />
					</Button>
				</Link>
				<Link to={"../../public/CurriculumTifany.pdf"} target="_blank">
					<Button variant="secondary">
						Baixar Curriculo <FileDown className="ml-2 h-4 w-4" />
					</Button>
				</Link>
			</div>
		</div>
	)
}
