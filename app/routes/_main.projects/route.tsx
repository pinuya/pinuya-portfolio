import { personalProject } from "~/assets/images"
import { ProjectsDetails } from "./ProjectsDetails"
import { motion } from "framer-motion"

const projects = [
	{
		title: "Portfólio/Currículo",
		desc: "Projeto com layout responsivo utilizando JavaScript, TypeScript, TailwindCSS, ReactJS e Remix",
		bannerImg: personalProject,
		linkRep: "https://github.com/pinuya/pinuya.dev",
	},
]

export default function Projects() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1.5 }}>
			<h2 className="mt-20 text-3xl font-bold tracking-tight sm:text-4xl">
				Projetos
			</h2>

			<ProjectsDetails projectList={projects} />
		</motion.div>
	)
}
