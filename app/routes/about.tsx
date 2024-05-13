import Nav from "~/components/navbar/Nav"

export default function About() {
	return (
		<div className="p-8 flex items-center flex-col w-full">
			<Nav />

			<div className="mt-12">
				<h1 className="text-7xl font-semibold">
					Tifany
					<span className="text-primary"> Alves</span>
				</h1>
				<h2 className="text-3xl">
					Desenvolvedora <span className="text-primary">Full-Stack</span>
				</h2>
			</div>
			<section className="mt-12 justify-center gap-20 flex flex-row">
				<div className="flex flex-col flex-1">
					<h1 className="text-3xl self-center text-primary">Sobre</h1>
					<p className="">
						Graduada em Análise e Desenvolvimento de Sistemas pelo Centro
						Universitário Vale do Salgado. <br />
						Profissional com experiência em desenvolvimento Full Stack. Com
						habilidades sólidas em diversas tecnologias e frameworks,
						desenvolvimento de backends robustos e interfaces de usuário
						elegantes e responsivas.
					</p>
				</div>

				<div className="flex flex-col flex-1">
					<h1 className="text-3xl self-center text-primary">Tecnologias</h1>
				</div>
			</section>
		</div>
	)
}
