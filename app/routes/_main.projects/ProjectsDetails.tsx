import { Link } from "@remix-run/react"
import { Github, SquareArrowOutUpRight } from "lucide-react"
import { motion } from "framer-motion"

type Items = {
	title: string
	desc: string
	bannerImg: string
	socialIcons?: string[]
}

type Props = {
	items: Items[]
}

export function ProjectsDetails(props: Props) {
	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
				{props.items.map((item) => (
					<div key={item.title}>
						<h2 className="text-3xl font-bold tracking-tight sm:text-4x">
							Projetos
						</h2>

						<motion.div
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.8 }}
							className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 py-10 gap-x-8 gap-y-20 px-6 lg:px-8">
							<div className="group relative">
								<div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
									<img
										src={item.bannerImg}
										alt="Imagem do projeto"
										className="h-full w-full object-cover object-center"
									/>
								</div>
								<h3 className="mt-6 text-sm flex items-center">
									<Link to={"/home"}>
										<span className="absolute inset-0" />
									</Link>
								</h3>
								<p className="text-lg font-semibold">{item.title}</p>
								<p className="mt-1 text-sm">{item.desc}</p>
							</div>
						</motion.div>
						<div className="flex flex-1 space-x-4 px-6 lg:px-8">
							<Link to={"https://github.com/pinuya/Personal-Website"}>
								<Github className="hover:opacity-60" />
							</Link>
							<Link to={""}>
								<SquareArrowOutUpRight className="hover:opacity-60" />
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
