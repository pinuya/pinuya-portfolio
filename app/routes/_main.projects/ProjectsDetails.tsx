import { Link } from "@remix-run/react"
import { motion } from "framer-motion"
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area"

type Projects = {
	title: string
	desc: string
	bannerImg: string
	linkRep: string
}

type Props = {
	projectList: Projects[]
}

export function ProjectsDetails(props: Props) {
	return (
		<div className=" max-w-7xl px-4 sm:px-6 lg:px-8">
			<div className="py-16 sm:py-24 xlg:max-w-none grid grid-cols-1 sm:grid-cols-3">
				{props.projectList.map((project) => (
					<Link
						to={project.linkRep}
						key={project.title}
						className="lg:space-y-0 py-5 gap-x-8 gap-y-5 sm:gap-y-10 px-6 lg:px-8">
						<motion.div
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.8 }}
							className="rounded p-px bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
							<div className="shadow-lg h-full w-full bg-primary-foreground px-6 py-4 ">
								<div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
									<img
										src={project.bannerImg}
										alt="Imagem do projeto"
										className="h-full w-full object-cover object-center"
									/>
								</div>

								<p className="mt-6 flex items-center text-lg font-semibold">
									{project.title}
								</p>
								<p className="mt-3 text-sm">{project.desc}</p>
							</div>
						</motion.div>
					</Link>
				))}
			</div>
		</div>
	)
}
