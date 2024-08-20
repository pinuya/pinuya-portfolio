import { Link } from "@remix-run/react"
import { motion } from "framer-motion"

type Projects = {
	title: string
	desc: string
	bannerImg: string
	linkRep: string
	linkDeploy: string
}

type Props = {
	projectList: Projects[]
}

export function ProjectsDetails(props: Props) {
	return (
		<div className="max-w-7xl px-4 sm:px-6 lg:px-8">
			<div className="py-5 xlg:max-w-none grid grid-cols-1 sm:grid-cols-3">
				{props.projectList.map((project) => (
					<div
						key={project.title}
						className="lg:space-y-0 py-5 gap-x-8 gap-y-5 sm:gap-y-10 px-6 lg:px-8">
						<motion.div className="relative flex flex-col mt-6 text-primary bg-primary-foreground shadow-md bg-clip-border rounded-xl w-96">
							<div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
								<img src={project.bannerImg} alt="card-image" />
							</div>
							<div className="p-6">
								<h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
									{project.title}
								</h5>
								<p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
									{project.desc}
								</p>
							</div>
							<div className="p-6 pt-0 space-x-4">
								<Link to={project.linkDeploy}>
									<button
										className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-pink-300 text-primary shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
										type="button">
										Deploy
									</button>
								</Link>
								<Link to={project.linkRep}>
									<button
										className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-pink-300 text-primary shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
										type="button">
										Repositório
									</button>
								</Link>
							</div>
						</motion.div>
					</div>
				))}
			</div>
		</div>
	)
}
