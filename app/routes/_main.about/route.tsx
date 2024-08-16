import { Link } from "@remix-run/react"
import { AboutDetails } from "./AboutDetails"
import { motion } from "framer-motion"
import { Button } from "~/components/ui/button"
import { FileDown } from "lucide-react"

const educations = [
	{
		title: "Análise e Desenvolvimento de Sistemas",
		desc: "Centro Universitário Vale do Salgado",
		imageUrl: "https://media.giphy.com/avatars/UniVS/FZDNJdWWlRWE.png",
		date: "2019 — 2021",
	},
]

const exp = [
	{
		title: "FullStack Developer",
		desc: "Freelancer",
		langs: [
			"Javascript,",
			"NodeJS,",
			"TypeScript,",
			"React,",
			"TwailwindCSS",
			"HTML,",
			"CSS,",
			"Remix,",
			"NextJS,",
			"Git",
		],
		imageUrl:
			"https://play-lh.googleusercontent.com/42jdMaq_H4ddixRCoxO5wKHc20ayOSr5MyJMPLKRSv445qD5Cb9-dCsCPt89_6uI4Prj",
		date: "2024 — atual",
	},
	{
		title: "Front-End Developer",
		desc: "Centro Universitário Vale do Salgado",
		langs: ["HTML,", "CSS,", "TypeScript,", "React"],
		imageUrl: "https://media.giphy.com/avatars/UniVS/FZDNJdWWlRWE.png",
		date: "2020 — 2021",
	},
]

export default function About() {
	const defaultAnimation = (duration: number) => {
		return {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			transition: { duration },
		}
	}

	const titleAnimation = defaultAnimation(1.5)
	const descAnimation = defaultAnimation(2)

	return (
		<div className="space-y-20">
			<section>
				<motion.h1
					{...titleAnimation}
					className="text-3xl font-bold sm:text-4xl">
					Sobre
				</motion.h1>
				<motion.p
					{...descAnimation}
					className="max-w-screen-lg tracking-tight py-10 gap-x-8 gap-y-20 px-6 lg:px-8 ">
					Sou desenvolvedora FullStack, sempre busco aprimorar minhas
					habilidades tanto em front-end quanto ao Back-end. Sou formada em{" "}
					<span className="font-semibold">
						Analise e Desenvolvimento de Sistemas
					</span>{" "}
					pelo Centro Universitário Vale do Salgado. Como{" "}
					<span className="font-semibold">desenvolvedora Fullstack</span>, estou
					sempre em busca de novos desafios e oportunidades para expandir meu
					conhecimento e contribuir para projetos inovadores. Estou comprometida
					em entregar soluções de alta qualidade, alinhadas com as melhores
					práticas da indústria e as necessidades do cliente.
				</motion.p>

				<Link to={"/curriculoTifany.pdf"} target="_blank">
					<Button variant="secondary">
						Baixar Curriculo <FileDown className="ml-2 h-4 w-4" />
					</Button>
				</Link>
			</section>

			<div className="py-10 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
				<h2 className="text-2xl font-bold tracking-tight">
					Linguagens e Tecnologias
				</h2>
			</div>
			<section>
				<motion.h1
					{...titleAnimation}
					className="text-3xl font-bold tracking-tight sm:text-4xl">
					Carreira
				</motion.h1>

				<div className="py-10">
					<motion.div
						{...descAnimation}
						className="mx-auto grid max-w-7xl gap-x-60 px-6 lg:px-8 xl:grid-cols-2">
						<div className="max-w-2x">
							<h2 className="text-2xl font-bold tracking-tight">Educação</h2>
							<AboutDetails items={educations} />
						</div>

						<div className="max-w-2xl">
							<h2 className="text-2xl font-bold tracking-tight">Experiência</h2>
							<AboutDetails items={exp} />
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	)
}
