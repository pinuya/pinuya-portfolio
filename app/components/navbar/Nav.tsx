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
		<div className="flex w-full justify-between pb-2 border-b bg-card h-12">
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

			<div className=" gap-x-4 font-semibold hidden sm:block sm:flex">
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
