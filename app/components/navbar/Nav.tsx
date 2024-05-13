import { Link, useLocation } from "@remix-run/react"
import { ModeToggle } from "../mode-togle"
import { cn } from "~/lib/utils"

const routes = [
	{
		title: "Inicio",
		to: "/",
	},
	{
		title: "Sobre",
		to: "/about",
	},
	{
		title: "Projetos",
		to: "/projects",
	},
]

export default function Nav() {
	const location = useLocation()
	return (
		<div className="flex w-full justify-between pb-2 border-b bg-card">
			<ModeToggle />

			<div className="flex gap-x-6 font-semibold lowercase">
				{routes.map((route) => (
					<Link
						key={route.to}
						prefetch="intent"
						to={route.to}
						className={cn(
							"text-muted-foreground hover:text-primary",
							location.pathname === route.to && "text-primary",
						)}>
						{route.title}
					</Link>
				))}
			</div>
		</div>
	)
}
