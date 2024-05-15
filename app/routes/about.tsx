import Nav from "~/components/navbar/Nav"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "~/components/ui/carousel"
import Img1 from "~/assets/tifanypfp.jpeg"

export default function About() {
	return (
		<div className="p-8 flex items-center flex-col w-full">
			<Nav />

			<div className="mt-20">
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
				<Carousel className="mt-12">
					<CarouselContent>
						<CarouselItem className="md:basis-1/2 lg:basis-1/3">
							<img src={Img1} alt="imagem 1" />
						</CarouselItem>
						<CarouselItem className="md:basis-1/2 lg:basis-1/3">
							...
						</CarouselItem>
						<CarouselItem className="md:basis-1/2 lg:basis-1/3">
							...
						</CarouselItem>
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>

				<section className="w-full mt-20">
					<h1 className="text-3xl font-semibold">Sobre</h1>
					<p>bla bla bla</p>
				</section>
			</div>
		</div>
	)
}
