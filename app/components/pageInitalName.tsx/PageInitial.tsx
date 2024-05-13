import { Link } from "@remix-run/react"
import { FileDown, Github, Linkedin } from "lucide-react"
import { Button } from "../ui/button"

export default function Name() {
	return (
		<div className="font-semibold uppercase items-stretch">
			<h1 className="text-7xl">
				Tifany
				<span className="text-primary"> Alves</span>
			</h1>
			<h2 className="text-3xl">
				Desenvolvedora <span className="text-primary">Full-Stack</span>
			</h2>
			<section className="mt-2 flex items-center justify-between">
				<div className="flex gap-4">
					<Link to={"https://github.com/pinuya"} className="hover:text-primary">
						<Github />
					</Link>
					<Link
						to={"https://www.linkedin.com/in/tifanyanunes/"}
						className="hover:text-primary">
						<Linkedin />
					</Link>
				</div>

				<Link to={"../../public/CurriculumTifany.pdf"} target="_blank">
					<Button>
						<FileDown className="mr-2 h-4 w-4" /> Baixar Curriculo
					</Button>
				</Link>
			</section>
		</div>
	)
}
