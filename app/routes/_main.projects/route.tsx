import { personalProject } from "~/assets/images"
import { ProjectsDetails } from "./ProjectsDetails"

const projects = [
	{
		title: "Portfólio/Curriculo",
		desc: "Projeto com layout responsivo utilizando JavaScript, TypeScript, TailwindCSS, ReactJS e Remix",
		bannerImg: personalProject,
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
