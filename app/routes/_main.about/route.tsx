import { AboutDetails } from "./AboutDetails"

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
		langs: ["HTML,", "CSS,", "TypeScript,", "React"],
		imageUrl: "https://media.giphy.com/avatars/UniVS/FZDNJdWWlRWE.png",
		date: "2020 — 2021",
	},
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
		<div className="flex flex-col items-centerjustify-center">
			<div>
				<div className="">
					<div className="w-full  overflow-y-auto">
						<h1 className="mt-20 text-3xl font-bold tracking-tight sm:text-4xl">
							Sobre
						</h1>
						<p className="max-w-screen-lg tracking-tight py-10 gap-x-8 gap-y-20 px-6 lg:px-8 ">
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
						Carreira
					</h1>
				</div>

				{/* <div className="py-10 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
					<h2 className="text-2xl font-bold tracking-tight">
						Linguagens e Tecnologias
					</h2>
				</div> */}

				<div className="py-10">
					<div className="mx-auto grid max-w-7xl gap-x-60 px-6 lg:px-8 xl:grid-cols-2">
						<div className="max-w-2x">
							<h2 className="text-2xl font-bold tracking-tight">Educação</h2>
							<AboutDetails items={educations} />
						</div>

						<div className="max-w-2xl">
							<h2 className="text-2xl font-bold tracking-tight">Experiência</h2>
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
