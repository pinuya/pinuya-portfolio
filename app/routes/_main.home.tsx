import { tifanyPfp } from "~/assets/images"
import PageInitial from "~/components/pageInitalName.tsx/PageInitial"

export default function Home() {
	return (
		<section className="flex items-center justify-center flex-1 gap-x-28">
			<PageInitial />
			<img src={tifanyPfp} alt="imagem" className="rounded-full w-44 h-44" />
		</section>
	)
}
