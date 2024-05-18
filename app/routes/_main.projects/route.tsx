import { ProjectsDetails } from "./ProjectsDetails"

const projects = [
	{
		title: "Portifolio",
		desc: "Projeto pessoal onde eu me apresento e mostro minhas habilidades",
		bannerImg:
			"https://media.discordapp.net/attachments/1226542179380494359/1241373744711073973/image.png?ex=6649f6e4&is=6648a564&hm=fe15570d14fbae95fdb6dfc31cb88c461d23652dc986ac88eb260b523a77088a&=&format=webp&quality=lossless&width=645&height=444",
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
