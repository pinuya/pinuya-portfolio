import { Link, useLocation } from "@remix-run/react"
import { ModeToggle } from "../mode-togle"
import { cn } from "~/lib/utils"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { MenuIcon } from "lucide-react"

const routes = [
	{
		title: "Inicio",
		to: "/home",
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
		<nav className="w-full border-b bg-card">
			<div className="flex justify-between items-center p-6 h-16">
				<ModeToggle />

				<div className="sm:hidden">
					<DropdownMenu>
						<DropdownMenuTrigger>
							<MenuIcon />
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							{routes.map((route) => (
								<DropdownMenuItem key={route.to}>
									<Link
										key={route.to}
										prefetch="intent"
										to={route.to}
										className={cn(
											"text-muted-foreground font-semibold hover:text-primary",
											location.pathname === route.to && "text-primary",
										)}>
										{route.title}
									</Link>
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>

				<div className="gap-x-4 font-semibold hidden sm:flex">
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
		</nav>
	)
}
