import Info from "~/components/aboutInfo/Info"
import Nav from "~/components/navbar/Nav"

export default function About() {
	return (
		<div className="p-8 flex items-center flex-col w-full">
			<Nav />

			<div className="mt-12">
				<h1 className="text-3xl font-semibold">Ola, me chamo Tifany</h1>
				<div className="text-3xl flex gap-2 justify-center">
					<p className="text-sm mt-2">
						Sou desenvolvedora <span className="font-semibold">Full Stack</span>
						, amo tecnologia, <br /> desenvolver sistemas e colecionar figures.
					</p>
				</div>
			</div>

			<div>
				<Info />
			</div>
		</div>
	)
}
