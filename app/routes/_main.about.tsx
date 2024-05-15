import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "~/components/ui/carousel"
import Img1 from "~/assets/tifanypfp.jpeg"
import setup from "~/assets/setup.jpeg"
import projectDog from "~/assets/projectdog.jpeg"

export default function About() {
	return (
		<div>
			<div className="">
				<h1 className="text-3xl flex justify-center font-semibold">Olá 👋</h1>
				<div className="text-3xl flex gap-2 justify-center">
					<p className="text-sm mt-2">
						Me chamo Tifany, sou desenvolvedora{" "}
						<span className="font-semibold">Full Stack</span>, amo tecnologia,{" "}
						<br /> desenvolver sistemas e colecionar figures.
					</p>
				</div>
			</div>
			<div>
				<div>
					<Carousel className="">
						<CarouselContent>
							<CarouselItem className="">
								{/* <img src={Img1} alt="imagem 1" /> */}
							</CarouselItem>
							<CarouselItem className="">
								{/* <img src={setup} alt="imagem 2" /> */}
							</CarouselItem>
							<CarouselItem className="h-4 w-4">
								<img src={projectDog} alt="imagem 3" />
							</CarouselItem>
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>

				<div className="">
					<section className="w-full mt-20 grid grid-cols-2 gap-36">
						<h1 className="text-3xl font-semibold">Sobre</h1>
						<p>bla bla bla</p>
					</section>
				</div>

				<section className="w-full mt-20">
					<h1 className="text-3xl font-semibold">Informacoes Profissionais</h1>
					<p>bla bla bla</p>
				</section>
			</div>
		</div>
	)
}
