import { Link } from "@remix-run/react"
import {
	FacebookIcon,
	FigmaIcon,
	FileDownIcon,
	GitFork,
	InstagramIcon,
	LinkedinIcon,
} from "lucide-react"
import {
	initialSawako,
	listifyProject,
	personalProject,
	projectX,
	tifanyPfp,
} from "~/assets/images"
import { ModeToggle } from "~/components/mode-togle"
import { motion, useScroll } from "framer-motion"
import { FaBluesky, FaGithub, FaNodeJs, FaXTwitter } from "react-icons/fa6"
import { Card, CardHeader, CardContent } from "~/components/ui/card"
import { DiJavascript } from "react-icons/di"
import { FaDocker, FaReact } from "react-icons/fa"
import { RiNextjsFill, RiRemixRunFill, RiTailwindCssFill } from "react-icons/ri"
import { SiExpress, SiPostgresql, SiTypescript } from "react-icons/si"
import type { MetaFunction } from "@remix-run/node"

export const meta: MetaFunction = () => {
	return [
		{ title: "Portfolio Tifany" },
		{
			name: "Portfolio contendo informacoes e projetos pessoais de Tifany Alves",
			content: "Portfolio",
		},
	]
}

export default function Main() {
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
							to={"#about"}
							className="text-sm font-medium hover:underline underline-offset-4">
							Sobre
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
									initial={{ x: "100%" }}
									animate={{ x: 0 }}
									transition={{ duration: 1, ease: "easeOut" }}
									src={initialSawako}
									width="550"
									height="550"
									alt="Hero"
									className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
								/>
							</div>
						</div>
					</section>

					<section
						id="about"
						className="w-full py-12 md:py-24 lg:py-32 bg-muted">
						<div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:items-center">
							<div className="flex justify-center">
								<motion.img
									src={tifanyPfp}
									alt="Tifany"
									className="h-48 w-48 rounded-lg"
									initial={{ x: "100%" }}
									animate={{ x: 0 }}
									transition={{ duration: 1, ease: "easeOut" }}
								/>
							</div>
							<motion.div {...textAnimation} className="space-y-4">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
									Sobre Mim
								</h2>
								<p className="max-w-[600px] text-muted-foreground md:text-xl">
									Sou uma desenvolvedora full-stack com mais de 2 anos de
									experiência na construção de aplicações web. Sou especialista
									em React, Node.js e PostgreSQL e estou sempre ansiosa para
									aprender novas tecnologias.
								</p>
								<div className="grid grid-cols-2 gap-4">
									<div className="space-y-1">
										<h3 className="text-lg font-medium">Principal Skills</h3>
										<ul className="space-y-1 text-muted-foreground">
											<li>React</li>
											<li>Node.js</li>
											<li>PostgreSQL</li>
											<li>Docker</li>
										</ul>
									</div>
									<div className="space-y-1">
										<h3 className="text-lg font-medium">Experiência</h3>
										<ul className="space-y-1 text-muted-foreground">
											<li>
												Full-Stack Developer, Freelancer. (2023 - Presente)
											</li>
											<li>Front-End Developer, UNIVS. (2019 - 2020)</li>
										</ul>
									</div>
								</div>
							</motion.div>
						</div>
					</section>

					<section
						id="skills"
						className="container mx-auto py-12 md:py-16 lg:py-20">
						<div className="space-y-6 md:space-y-8 lg:space-y-10">
							<motion.div {...textAnimation} className="space-y-4 text-center">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
									Skills
								</h2>
								<p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
									Confira as linguagens e frameworks que eu domino
								</p>
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

					<section id="projects" className="w-full py-12 md:py-24 lg:py-32">
						<div className="container grid gap-6 px-4 md:px-6">
							<motion.div {...textAnimation} className="space-y-4 text-center">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
									Projetos
								</h2>
								<p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
									Confira alguns dos aplicativos web que desenvolvi para meus
									clientes e projetos pessoais.
								</p>
							</motion.div>
							<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
								<motion.div whileHover={{ scale: 1.2 }}>
									<Link to={"https://github.com/pinuya/pinuya-portfolio"}>
										<Card>
											<CardHeader>
												<img
													src={personalProject}
													width={400}
													height={300}
													alt="Project 1"
													className="aspect-video overflow-hidden rounded-t-lg object-cover"
												/>
											</CardHeader>
											<CardContent className="space-y-2">
												<h3 className="text-xl font-medium">Portfólio</h3>
												<p className="text-muted-foreground">
													Uma aplicação web de uso pessoal, onde apresento a
													vocês quem eu sou. Utilizei Remix e TailwindCSS.
												</p>
											</CardContent>
										</Card>
									</Link>
								</motion.div>

								<motion.div whileHover={{ scale: 1.2 }}>
									<Link to={"https://github.com/pinuya/listify-app"}>
										<Card>
											<CardHeader>
												<img
													src={listifyProject}
													width={400}
													height={300}
													alt="Project 2"
													className="aspect-video overflow-hidden rounded-t-lg object-cover"
												/>
											</CardHeader>
											<CardContent className="space-y-2">
												<h3 className="text-xl font-medium">Listify</h3>
												<p className="text-muted-foreground">
													Com Listify, você pode criar e gerenciar listas para
													uma variedade de necessidades. Ainda em
													desenvolvimento...
												</p>
											</CardContent>
										</Card>
									</Link>
								</motion.div>

								<motion.div whileHover={{ scale: 1.2 }}>
									<Link to={""}>
										<Card>
											<CardHeader>
												<img
													src={projectX}
													width={400}
													height={300}
													alt="Project 3"
													className="aspect-video overflow-hidden rounded-t-lg object-cover"
												/>
											</CardHeader>
											<CardContent className="space-y-2">
												<h3 className="text-xl font-medium">Projeto Secreto</h3>
												<p className="text-muted-foreground">
													Ainda em processo de desenvolvimento. Após a
													finalização e a aprovação do cliente, divulgarei aqui.
												</p>
											</CardContent>
										</Card>
									</Link>
								</motion.div>
							</div>
						</div>
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
