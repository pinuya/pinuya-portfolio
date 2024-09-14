import { Link } from "@remix-run/react"
import {
	CalendarIcon,
	FigmaIcon,
	FileDownIcon,
	GitFork,
	InstagramIcon,
	LinkedinIcon,
} from "lucide-react"
import {
	initialImage,
	listifyProject,
	nyakoStore,
	personalProject,
} from "~/assets/images"
import { ModeToggle } from "~/components/mode-togle"
import { motion, useScroll, type Variants } from "framer-motion"
import { FaBluesky, FaGithub, FaNodeJs } from "react-icons/fa6"
import { DiJavascript } from "react-icons/di"
import { FaDocker, FaReact } from "react-icons/fa"
import { RiNextjsFill, RiRemixRunFill, RiTailwindCssFill } from "react-icons/ri"
import { SiExpress, SiPostgresql, SiTypescript } from "react-icons/si"
import type { MetaFunction } from "@remix-run/node"
import { useState } from "react"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "~/components/ui/dialog"
import { Button } from "~/components/ui/button"

export const meta: MetaFunction = () => {
	return [
		{ title: "Portfolio Tifany" },
		{
			name: "Portfolio contendo informacoes e projetos pessoais de Tifany Alves",
			content: "Portfolio",
		},
	]
}

const cardVariants: Variants = {
	offscreen: {
		y: 300,
	},
	onscreen: {
		y: 0,
		transition: {
			type: "spring",
			bounce: 0.4,
			duration: 0.8,
		},
	},
}

interface Experience {
	company: string
	position: string
	duration: string
	description: string[]
}

const experiences: Experience[] = [
	{
		company: "Autônomo",
		position: "Software Engineer",
		duration: "Jan 2022 - Present",
		description: [
			"Implementa novos recursos usando React e TypeScript, melhorando o envolvimento do usuário em 30%.",
			"Desenvolve sites otimizados, responsivos e com design em alta no mercado.",
		],
	},
	{
		company: "UniVS - Centro Universitário Vale do Salgado",
		position: "Frontend Developer",
		duration: "Jan 2019 - Jan 2020",
		description: [
			"Desenvolveu sites utilizando React e NextJs.",
			"Colaborou com designers UX para implementar designs responsivos.",
		],
	},
]

interface Project {
	id: number
	title: string
	description: string
	image: string
	details: string
}

const projects: Project[] = [
	{
		id: 1,
		title: "Portfólio",
		description: "Projeto Full-Stack para apresentar minhas habilidades.",
		image: personalProject,
		details:
			"Esse projeto foi feito com o objetivo de demonstrar minhas habilidades e como eu as uso no dia-a-dia. Projeto feito em TypeScript, React, Remix e TailwindCSS, sempre estou atulizando e aplicando as melhores praticas de programacao.",
	},
	{
		id: 2,
		title: "Listify",
		description: "Projeto Full-Stack para organização e tasks",
		image: listifyProject,
		details:
			"Projeto feito com o objetivo em ajudar as pessoas com a organização de simples tasks diarias. Feito com TypeScript, React, Node, Remix, TailwindCSS e SupaBase.",
	},
	{
		id: 3,
		title: "Nyako-Store",
		description: "Projeto Full-Stack de lojinha virtual.",
		image: nyakoStore,
		details: "Projeto ainda em processo de desenvolvimento UI.",
	},
	// {
	// 	id: 3,
	// 	title: "",
	// 	description: "",
	// 	image: ,
	// 	details: "",
	// },
]

export default function Main() {
	const [selectedProject, setSelectedProject] = useState<Project | null>(null)

	const { scrollYProgress } = useScroll()
	const defaultAnimation = (duration: number) => {
		return {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			transition: { duration },
		}
	}

	const textAnimation = defaultAnimation(2)
	const buttonAnimation = defaultAnimation(4)

	return (
		<div className="flex flex-col min-h-screen w-full">
			<motion.div
				className="progress-bar"
				style={{ scaleX: scrollYProgress }}
			/>
			<div className="flex flex-col min-h-[100dvh]">
				<header className="px-4 lg:px-6 h-14 flex items-center">
					<Link to={""} className="flex items-center justify-center">
						<ModeToggle />
						<span className="sr-only">Portfolio</span>
					</Link>
					<nav className="ml-auto flex gap-4 sm:gap-6">
						<Link
							to={"#home"}
							className="text-sm font-medium hover:underline underline-offset-4">
							Home
						</Link>
						<Link
							to={"#xp"}
							className="text-sm font-medium hover:underline underline-offset-4">
							Experiência
						</Link>
						<Link
							to={"#skills"}
							className="text-sm font-medium hover:underline underline-offset-4">
							Skills
						</Link>
						<Link
							to={"#projects"}
							className="text-sm font-medium hover:underline underline-offset-4">
							Projetos
						</Link>
					</nav>
				</header>

				<main className="flex-1">
					<section id="home" className="w-full py-12 md:py-24 lg:py-32">
						<div className="container px-4 md:px-6">
							<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
								<div className="flex flex-col justify-center space-y-4">
									<motion.div {...textAnimation} className="space-y-2">
										<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
											Tifany Alves
										</h1>
										<p className="text-xl text-muted-foreground">
											Software Engineer
										</p>
										<p className="max-w-[600px] text-muted-foreground md:text-xl">
											Sou uma engenheira de software apaixonada com foco na
											construção aplicativos da web modernos, escaláveis ​​e
											fáceis de usar.
										</p>
									</motion.div>
									<motion.div
										{...buttonAnimation}
										className="flex flex-col gap-2 min-[400px]:flex-row">
										<Link
											to={"#projects"}
											className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
											Veja meu trabalho
										</Link>
										<Link
											to={"/curriculoTifany.pdf"}
											target="_blank"
											className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
											Baixar curriculo <FileDownIcon className="ml-2 h-4 w-4" />
										</Link>
									</motion.div>
								</div>
								<motion.img
									{...buttonAnimation}
									src={initialImage}
									width="550"
									height="550"
									alt="Hero"
									className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
								/>
							</div>
						</div>
					</section>

					<section id="xp" className="py-16 bg-muted">
						<motion.div
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, amount: 0.8 }}
							className="container mx-auto px-4">
							<motion.h2
								variants={cardVariants}
								className="text-3xl font-bold text-center mb-12">
								Experiência Profissional
							</motion.h2>
							<div className="max-w-3xl mx-auto">
								{experiences.map((exp, index) => (
									<div key={1} className="mb-12 relative pl-8">
										<div className="absolute left-0 top-0 mt-1 w-4 h-4 rounded-full bg-primary" />
										{index !== experiences.length - 1 && (
											<div className="absolute left-[7px] top-4 bottom-0 w-[2px] bg-gray-200" />
										)}
										<div className="bg-white p-6 rounded-lg shadow-md">
											<h3 className="text-gray-950 text-xl font-semibold mb-2">
												{exp.position}
											</h3>
											<p className="text-gray-600 mb-2">{exp.company}</p>
											<p className="text-sm text-gray-500 mb-4 flex items-center">
												<CalendarIcon className="w-4 h-4 mr-2" />
												{exp.duration}
											</p>
											<ul className="list-disc list-inside text-gray-700">
												{exp.description.map((item, i) => (
													<li key={i} className="mb-1">
														{item}
													</li>
												))}
											</ul>
										</div>
									</div>
								))}
							</div>
						</motion.div>
					</section>

					<section
						id="skills"
						className="container mx-auto py-12 md:py-16 lg:py-20">
						<div className="space-y-6 md:space-y-8 lg:space-y-10">
							<motion.div
								initial="offscreen"
								whileInView="onscreen"
								viewport={{ once: true, amount: 0.8 }}
								className="space-y-4 text-center">
								<motion.h2
									variants={cardVariants}
									className="text-3xl font-bold text-center mb-12">
									Skills
								</motion.h2>
							</motion.div>
							<div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
								<div className="flex flex-col items-center gap-2">
									<motion.div
										whileHover={{ scale: 1.2 }}
										className="bg-muted rounded-full p-3">
										<DiJavascript className="w-6 h-6 text-primary" />
									</motion.div>
									<span className="text-sm font-medium text-muted-foreground">
										JavaScript
									</span>
								</div>
								<div className="flex flex-col items-center gap-2">
									<motion.div
										whileHover={{ scale: 1.2 }}
										className="bg-muted rounded-full p-3">
										<SiTypescript className="w-6 h-6 text-primary" />
									</motion.div>
									<span className="text-sm font-medium text-muted-foreground">
										TypeScript
									</span>
								</div>
								<div className="flex flex-col items-center gap-2">
									<motion.div
										whileHover={{ scale: 1.2 }}
										className="bg-muted rounded-full p-3">
										<FaReact className="w-6 h-6 text-primary" />
									</motion.div>
									<span className="text-sm font-medium text-muted-foreground">
										React
									</span>
								</div>
								<div className="flex flex-col items-center gap-2">
									<motion.div
										whileHover={{ scale: 1.2 }}
										className="bg-muted rounded-full p-3">
										<FaNodeJs className="w-6 h-6 text-primary" />
									</motion.div>
									<span className="text-sm font-medium text-muted-foreground">
										Node.js
									</span>
								</div>

								<div className="flex flex-col items-center gap-2">
									<motion.div
										whileHover={{ scale: 1.2 }}
										className="bg-muted rounded-full p-3">
										<FaDocker className="w-6 h-6 text-primary" />
									</motion.div>
									<span className="text-sm font-medium text-muted-foreground">
										Docker
									</span>
								</div>
								<div className="flex flex-col items-center gap-2">
									<motion.div
										whileHover={{ scale: 1.2 }}
										className="bg-muted rounded-full p-3">
										<SiPostgresql className="w-6 h-6 text-primary" />
									</motion.div>
									<span className="text-sm font-medium text-muted-foreground">
										Postgress
									</span>
								</div>
								<div className="flex flex-col items-center gap-2">
									<motion.div
										whileHover={{ scale: 1.2 }}
										className="bg-muted rounded-full p-3">
										<RiTailwindCssFill className="w-6 h-6 text-primary" />
									</motion.div>
									<span className="text-sm font-medium text-muted-foreground">
										TailwindCSS
									</span>
								</div>
								<div className="flex flex-col items-center gap-2">
									<motion.div
										whileHover={{ scale: 1.2 }}
										className="bg-muted rounded-full p-3">
										<RiRemixRunFill className="w-6 h-6 text-primary" />
									</motion.div>
									<span className="text-sm font-medium text-muted-foreground">
										Remix
									</span>
								</div>
								<div className="flex flex-col items-center gap-2">
									<motion.div
										whileHover={{ scale: 1.2 }}
										className="bg-muted rounded-full p-3">
										<SiExpress className="w-6 h-6 text-primary" />
									</motion.div>
									<span className="text-sm font-medium text-muted-foreground">
										Express
									</span>
								</div>
								<div className="flex flex-col items-center gap-2">
									<motion.div
										whileHover={{ scale: 1.2 }}
										className="bg-muted rounded-full p-3">
										<RiNextjsFill className="w-6 h-6 text-primary" />
									</motion.div>
									<span className="text-sm font-medium text-muted-foreground">
										Next.js
									</span>
								</div>
								<div className="flex flex-col items-center gap-2">
									<motion.div
										whileHover={{ scale: 1.2 }}
										className="bg-muted rounded-full p-3">
										<GitFork className="w-6 h-6 text-primary" />
									</motion.div>
									<span className="text-sm font-medium text-muted-foreground">
										Git
									</span>
								</div>
								<div className="flex flex-col items-center gap-2">
									<motion.div
										whileHover={{ scale: 1.2 }}
										className="bg-muted rounded-full p-3">
										<FigmaIcon className="w-6 h-6 text-primary" />
									</motion.div>
									<span className="text-sm font-medium text-muted-foreground">
										Figma
									</span>
								</div>
							</div>
						</div>
					</section>

					<section>
						<motion.div
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, amount: 0.8 }}
							className="container mx-auto px-4 py-12">
							<motion.h2
								variants={cardVariants}
								className="text-3xl font-bold text-center mb-8">
								Projetos
							</motion.h2>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
								{projects.map((project) => (
									<div
										key={project.id}
										className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105"
										onClick={() => setSelectedProject(project)}>
										<img
											src={project.image}
											alt={project.title}
											className="w-full h-48 object-cover"
										/>
										<div className="p-4">
											<h3 className="text-xl font-semibold mb-2">
												{project.title}
											</h3>
											<p className="text-muted-foreground">
												{project.description}
											</p>
										</div>
									</div>
								))}
							</div>

							<Dialog
								open={selectedProject !== null}
								onOpenChange={() => setSelectedProject(null)}>
								<DialogContent>
									<DialogHeader>
										<DialogTitle>{selectedProject?.title}</DialogTitle>
										<DialogDescription>
											<img
												src={selectedProject?.image}
												alt={selectedProject?.title}
												className="w-full h-48 object-cover rounded-md mb-4"
											/>
											<p>{selectedProject?.details}</p>
										</DialogDescription>
									</DialogHeader>
									<div className="mt-4 flex justify-end">
										<Button onClick={() => setSelectedProject(null)}>
											Close
										</Button>
									</div>
								</DialogContent>
							</Dialog>
						</motion.div>
					</section>
				</main>

				<footer className="bg-muted py-6 text-muted-foreground">
					<div className="container flex items-center justify-between">
						<div className="text-sm">
							&copy; 2024 Tifany Alves. Todos os direitos reservados.
						</div>
						<div className="flex items-center space-x-4">
							<Link
								to={"https://bsky.app/profile/pinuya.bsky.social"}
								className="text-muted-foreground hover:text-foreground">
								<FaBluesky className="h-5 w-5" />
								<span className="sr-only">X</span>
							</Link>
							<Link
								to={"https://www.linkedin.com/in/tifanyanunes/"}
								className="text-muted-foreground hover:text-foreground">
								<LinkedinIcon className="h-5 w-5" />
								<span className="sr-only">LinkedIn</span>
							</Link>
							<Link
								to={"https://www.instagram.com/imnotif/"}
								className="text-muted-foreground hover:text-foreground">
								<InstagramIcon className="h-5 w-5" />
								<span className="sr-only">Instagram</span>
							</Link>
							<Link
								to={"https://github.com/pinuya"}
								className="text-muted-foreground hover:text-foreground">
								<FaGithub className="h-5 w-5" />
								<span className="sr-only">GitHub</span>
							</Link>
						</div>
					</div>
				</footer>
			</div>
		</div>
	)
}
