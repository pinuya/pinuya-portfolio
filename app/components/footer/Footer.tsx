import {
	GitHubLogoIcon,
	LinkedInLogoIcon,
	TwitterLogoIcon,
} from "@radix-ui/react-icons"
import { Link } from "@remix-run/react"

export function Footer() {
	return (
		<footer className="w-full flex flex-wrap justify-center gap-x-36">
			<span className="text-muted-foreground text-xs">
				© 2024, Tifany Alves
			</span>

			<div className="flex gap-5 text-muted-foreground">
				<Link to={"https://github.com/pinuya"}>
					<GitHubLogoIcon className=" hover:text-primary" />
				</Link>
				<Link
					to={"https://www.linkedin.com/in/tifanyanunes/"}
					className="hover:text-primary">
					<LinkedInLogoIcon />
				</Link>
				<Link
					to={"https://twitter.com/pinuyadev"}
					className="hover:text-primary">
					<TwitterLogoIcon />
				</Link>
			</div>
		</footer>
	)
}
