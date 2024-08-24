import { Link } from "@remix-run/react"
import { AboutDetails } from "./AboutDetails"
import { motion } from "framer-motion"
import { Button } from "~/components/ui/button"
import { FileDown } from "lucide-react"
import { tifanyPfp } from "~/assets/images"
import { IoLogoJavascript, IoShareSocialSharp } from "react-icons/io5"
import { SiJavascript, SiTypescript } from "react-icons/si"
import { FaDocker, FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa6"
import { RiTailwindCssFill } from "react-icons/ri"
import { BiLogoPostgresql } from "react-icons/bi"

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
			<section className="space-y-4">
				<div className="flex flex-col items-center gap-x-28 sm:flex-row">
					<motion.p
						{...descAnimation}
						className="max-w-3xl tracking-tight px-6 py-10 gap-x-8 lg:px-8 ">
						Sou desenvolvedora FullStack, sempre busco aprimorar minhas
						habilidades tanto em front-end quanto ao Back-end. Sou formada em{" "}
						<span className="font-semibold">
							Analise e Desenvolvimento de Sistemas
						</span>{" "}
						pelo Centro Universitário Vale do Salgado. Como{" "}
						<span className="font-semibold">desenvolvedora Fullstack</span>,
						estou sempre em busca de novos desafios e oportunidades para
						expandir meu conhecimento e contribuir para projetos inovadores.
						Estou comprometida em entregar soluções de alta qualidade, alinhadas
						com as melhores práticas da indústria e as necessidades do cliente.
					</motion.p>

					<motion.img
						src={tifanyPfp}
						alt="imagem"
						className="rounded-full w-44 h-44"
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						transition={{ duration: 1, ease: "easeOut" }}
					/>
				</div>
				<div className="flex gap-x-8 lg:px-8 ">
					<Link to={"/curriculoTifany.pdf"} target="_blank">
						<Button variant="secondary">
							Baixar Curriculo <FileDown className="ml-2 h-4 w-4" />
						</Button>
					</Link>

					<Link to={"https://linktr.ee/pinuya"}>
						<Button variant="secondary">
							Redes sociais
							<IoShareSocialSharp className="ml-2 h-4 w-4" />
						</Button>
					</Link>
				</div>
			</section>

			<section>
				<div className="py-10 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
					<h2 className="text-2xl font-bold tracking-tight">
						Linguagens e Tecnologias
					</h2>
					<div className="flex flex-col md:flex-row space-x-6">
						<SiJavascript className="size-12" />
						<SiTypescript className="size-12" />
						<FaNodeJs className="size-12" />
						<FaReact className="size-12" />
						<RiTailwindCssFill className="size-12" />
						<FaDocker className="size-12" />
						<BiLogoPostgresql className="size-12" />
						<FaGitAlt className="size-12" />
					</div>
				</div>
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
