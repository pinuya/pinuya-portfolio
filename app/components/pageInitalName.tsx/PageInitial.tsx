import { Link } from "@remix-run/react"
import { Button } from "../ui/button"
import { FileDown, MoveRight } from "lucide-react"

export default function PageInitial() {
	return (
		<div>
			<h1 className="font-semibold text-4xl">Tifany Alves</h1>
			<p className="text-sm mt-2">
				Oi, sou desenvolvedora <span className="font-semibold">Full Stack</span>
				, amo tecnologia, <br /> desenvolver sistemas e colecionar figures.
			</p>
			<div className="mt-6 flex justify-between">
				<Link to={"/about"}>
					<Button variant="secondary">
						{" "}
						Saiba mais <MoveRight className="ml-2 h-4 w-4" />
					</Button>
				</Link>
				<Link to={"../../public/CurriculumTifany.pdf"} target="_blank">
					<Button>
						Baixar Curriculo <FileDown className="ml-2 h-4 w-4" />
					</Button>
				</Link>
			</div>
		</div>
	)
}
