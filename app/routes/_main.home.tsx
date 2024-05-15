import { tifanyPfp } from "~/assets/images"
import PageInitial from "~/components/pageInitalName.tsx/PageInitial"

export default function Home() {
	return (
		<section className="flex flex-1 gap-x-56">
			<PageInitial />
			<img src={tifanyPfp} alt="imagem" className="rounded-full w-60 h-60" />
		</section>
	)
}
