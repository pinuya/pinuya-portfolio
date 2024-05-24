import { ProjectsDetails } from "./ProjectsDetails"
import { motion } from "framer-motion"

const projects = [
	{
		title: "Portfólio/Curriculo",
		desc: "Projeto com layout responsivo utilizando JavaScript, TypeScript, TailwindCSS, ReactJS e Remix",
		bannerImg: "../../../public/portfolioImg.png",
		socialIcons: [""],
	},
]

export default function Projects() {
	return (
		<div>
			<ProjectsDetails items={projects} />
		</div>
	)
}
