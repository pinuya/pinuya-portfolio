import { SquareArrowOutUpRight } from "lucide-react"
import { AboutDetails } from "./AboutDetails"
import { Link } from "@remix-run/react"

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
		title: "Front-End Developer",
		desc: "Centro Universitário Vale do Salgado",
		imageUrl: "https://media.giphy.com/avatars/UniVS/FZDNJdWWlRWE.png",
		date: "2020 — 2021",
	},
	{
		title: "Full Stack Developer",
		desc: "Freelancer",
		imageUrl:
			"https://play-lh.googleusercontent.com/42jdMaq_H4ddixRCoxO5wKHc20ayOSr5MyJMPLKRSv445qD5Cb9-dCsCPt89_6uI4Prj",
		date: "2024 — atual",
	},
]

const certificates = [
	{
		title: "Imersao IA + Google Gemini",
		desc: "Alura",
		langs: ["Python,", "Gemini"],
		imageUrl:
			"https://yt3.googleusercontent.com/W7GokEE6ydjZFa_Tpz6yvSsDlVPTe7d4yTsJqKXy1Gbhu1BGXCfKJ_I-_TzOq37m8R9S97kQ=s900-c-k-c0x00ffffff-no-rj",
		date: "2024",
	},
]

export default function About() {
	return (
		<div>
			<div>
				<div className="pt-96">
					<div className="w-full mt-20">
						<h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
							Sobre
						</h1>
						<p className="max-w-screen-lg mt-10 tracking-tight">
							Sou desenvolvedora Full Stack, sempre busco aprimorar minhas
							habilidades tanto em front-end quanto ao Back-end. Meu nome é
							Tifany, tenho 23 anos, sou formada em{" "}
							<span className="font-semibold">
								Analise e Desenvolvimento de Sistemas
							</span>{" "}
							pelo Centro Universitário Vale do Salgado. Onde adquiri uma base
							sólida em algoritmos, estrutura de dados e programação orientada a
							objetos. Além disso, estou sempre em busca de aprendizado
							contínuo, seja através de cursos online, workshops ou projetos
							pessoais. Estou comprometida em criar soluções eficientes e
							elegantes para os desafios tecnológicos que encontro. Tenho uma
							sólida experiência em desenvolvimento web, com mais de dois anos
							trabalhando com projetos.
							<br />
							Como{" "}
							<span className="font-semibold">desenvolvedora Fullstack</span>,
							estou sempre em busca de novos desafios e oportunidades para
							expandir meu conhecimento e contribuir para projetos inovadores.
							Estou comprometida em entregar soluções de alta qualidade,
							alinhadas com as melhores práticas da indústria e as necessidades
							do cliente.
						</p>
					</div>
				</div>

				<div className="mt-20">
					<h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
						Experiência Profissional
					</h1>
				</div>

				<div className="py-10 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
					<h2 className="text-2xl font-bold tracking-tight">Skills</h2>
					<div className="flex items-start gap-2 mt-5">
						<img
							className="hover:opacity-75 cursor-pointer"
							src="https://img.shields.io/badge/-TypeScript-333333?style=flat&logo=typescript&logoColor=007ACC"
							alt="TS"
						/>
						<img
							className="hover:opacity-75 cursor-pointer"
							src="https://img.shields.io/badge/-JavaScript-333333?style=flat&logo=javascript&logoColor=F7DF1E"
							alt="JavaScript"
						/>
						<img
							className="hover:opacity-75 cursor-pointer"
							src="https://img.shields.io/badge/-Node.JS-333333?style=flat&logo=node.js&logoColor=43853D"
							alt="Node"
						/>
						<img
							className="hover:opacity-75 cursor-pointer"
							src="https://img.shields.io/badge/-React-333333?style=flat&logo=react&logoColor=61DAFB"
							alt="React"
						/>

						<img
							className="hover:opacity-75 cursor-pointer"
							src="https://img.shields.io/badge/-HTML-333333?style=flat&logo=html5&logoColor=E34F26"
							alt="HTML"
						/>

						<img
							className="hover:opacity-75 cursor-pointer"
							src="https://img.shields.io/badge/-CSS-333333?style=flat&logo=css3&logoColor=1572B6"
							alt="CSS"
						/>

						<img
							className="hover:opacity-75 cursor-pointer"
							src="https://img.shields.io/badge/-Tailwind_CSS-333333?style=flat&logo=tailwind-css&logoColor=38B2AC"
							alt="TailwindCSS"
						/>

						<img
							className="hover:opacity-75 cursor-pointer"
							src="https://img.shields.io/badge/-Docker-333333?style=flat&logo=docker&logoColor=2496ED"
							alt="Docker"
						/>

						<img
							className="hover:opacity-75 cursor-pointer"
							src="https://img.shields.io/badge/-Remix-333333?style=flat&logo=remix&logoColor=3274C5"
							alt="Remix"
						/>
					</div>
				</div>

				<div className="py-10">
					<div className="mx-auto grid max-w-7xl gap-x-60 px-6 lg:px-8 xl:grid-cols-2">
						<div className="max-w-2x">
							<h2 className="text-2xl font-bold tracking-tight">Educação</h2>
							<AboutDetails items={educations} />
						</div>

						<div className="max-w-2xl">
							<h2 className="text-2xl font-bold tracking-tight">Experiencia</h2>
							<AboutDetails items={exp} />
						</div>
					</div>

					<div className="max-w-2xl px-6">
						<h2 className="text-2xl font-bold tracking-tight">Certificados</h2>
						<AboutDetails items={certificates} />
					</div>
				</div>
			</div>
		</div>
	)
}
