import { dogsProject, personalProject } from "~/assets/images"
import { ProjectsDetails } from "./ProjectsDetails"
import { motion } from "framer-motion"

const projects = [
	{
		title: "Portfólio/Currículo",
		desc: "Projeto com layout responsivo utilizando JavaScript, TypeScript, TailwindCSS, ReactJS e Remix",
		bannerImg: personalProject,
		linkRep: "https://github.com/pinuya/pinuya.dev",
	},
	{
		title: "Dogs",
		desc: "Projeto de estudos do curso Origamid. Com layout responsivo utilizando JavaScript, CSS e ReactJS.",
		bannerImg: dogsProject,
		linkRep: "https://github.com/pinuya/Dogs",
	},
]

export default function Projects() {
	return (
		<motion.div
			className="self-start"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1.5 }}>
			<h2 className="text-3xl font-bold sm:text-4xl">Projetos</h2>

			<ProjectsDetails projectList={projects} />
		</motion.div>
	)
}
