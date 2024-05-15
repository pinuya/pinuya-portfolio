import { Link } from "@remix-run/react"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
	return (
		<footer className="w-full flex items-center gap-x-56 text-xs">
			<>
				<span className="self-center align-top w-80">© 2024, Tifany Alves</span>

				<div className="flex gap-2 ">
					<Link to={"https://github.com/pinuya"}>
						<Github />
					</Link>
					<Link to={"https://www.linkedin.com/in/tifanyanunes/"}>
						<Linkedin />
					</Link>
					<Link to={"https://twitter.com/pinuyadev"}>
						<Twitter />
					</Link>
				</div>
			</>
		</footer>
	)
}
