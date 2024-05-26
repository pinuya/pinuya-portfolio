import { personalProject } from "~/assets/images"
import { ProjectsDetails } from "./ProjectsDetails"

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
		<div>
			<h2 className="mt-20 text-3xl font-bold tracking-tight sm:text-4xl">
				Projetos
			</h2>

			<ProjectsDetails projectList={projects} />
		</div>
	)
}
