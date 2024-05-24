import { ProjectsDetails } from "./ProjectsDetails"
import { motion } from "framer-motion"

const projects = [
	{
		title: "Portifolio",
		desc: "Projeto pessoal onde eu me apresento e mostro minhas habilidades",
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
