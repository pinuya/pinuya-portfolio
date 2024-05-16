export default function About() {
	return (
		<div>
			<div>
				<div className="pt-96">
					<div className="w-full mt-20 grid grid-cols-2 gap-36">
						<h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
							Sobre
						</h1>
						<p className="max-w-lg">
							Sou desenvolvedora Full Stack, sempre busco aprimorar minhas
							habilidades tanto em front-end quanto ao Back-end. Meu nome é
							Tifany, tenho 23 anos, sou formada em Analise e Desenvolvimento de
							Sistemas e estou comprometida em criar soluções eficientes e
							elegantes para os desafios tecnológicos que encontro. Tenho uma
							sólida experiência em desenvolvimento web, com mais de dois anos
							trabalhando com projetos.
							<br />
							Como desenvolvedora fullstack, estou sempre em busca de novos
							desafios e oportunidades para expandir meu conhecimento e
							contribuir para projetos inovadores. Estou comprometida em
							entregar soluções de alta qualidade, alinhadas com as melhores
							práticas da indústria e as necessidades do cliente.
						</p>
					</div>
				</div>

				<div className="mt-20">
					<h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
						Experiência Profissional
					</h1>
				</div>

				<div className="py-10">
					<div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
						<div className="max-w-2xl">
							<h2 className="text-2xl font-bold tracking-tight">Educação</h2>
							<p className="mt-6 leading-8">
								Sou formada em{" "}
								<span className="font-semibold">
									Análise e Desenvolvimento de Sistemas
								</span>{" "}
								pelo Centro Universitário Vale do Salgado. <br />
								Onde adquiri uma base sólida em algoritmos, estrutura de dados e
								programação orientada a objetos. Além disso, estou sempre em
								busca de aprendizado contínuo, seja através de cursos online,
								workshops ou projetos pessoais.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
