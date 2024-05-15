import { Link } from "@remix-run/react"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
	return (
		<footer className="w-full flex flex-wrap justify-center gap-36">
			<>
				<span className="text-muted-foreground text-xs">
					© 2024, Tifany Alves
				</span>

				<div className="flex gap-5 text-muted-foreground">
					<Link to={"https://github.com/pinuya"}>
						<Github className=" hover:text-primary" />
					</Link>
					<Link
						to={"https://www.linkedin.com/in/tifanyanunes/"}
						className="hover:text-primary">
						<Linkedin />
					</Link>
					<Link
						to={"https://twitter.com/pinuyadev"}
						className="hover:text-primary">
						<Twitter />
					</Link>
				</div>
			</>
		</footer>
	)
}
