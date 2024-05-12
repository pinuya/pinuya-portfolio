import { Link } from "@remix-run/react"
import { Github, Linkedin } from "lucide-react"

export default function Name() {
	return (
		<div className="font-semibold uppercase">
			<h1 className="text-7xl">
				Tifany
				<span className="text-primary"> Alves</span>
			</h1>
			<h2 className="text-3xl">
				Desenvolvedora <span className="text-primary">Full-Stack</span>
			</h2>
			<section className="mt-2 flex items-start space-x-4">
				<Link to={"https://github.com/pinuya"} className="hover:text-primary">
					<Github />
				</Link>
				<Link
					to={"https://www.linkedin.com/in/tifanyanunes/"}
					className="hover:text-primary">
					<Linkedin />
				</Link>
			</section>
		</div>
	)
}
