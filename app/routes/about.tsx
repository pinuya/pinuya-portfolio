import Info from "~/components/aboutInfo/Info"
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
				<h2 className="text-3xl flex gap-2 justify-center">
					Desenvolvedora <span className="text-primary"> Full-Stack</span>
				</h2>
			</div>

			<div>
				<Info />
			</div>
		</div>
	)
}
