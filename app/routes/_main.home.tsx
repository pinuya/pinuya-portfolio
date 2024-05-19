import { tifanyPfp } from "~/assets/images"
import PageInitial from "~/components/pageInitalName.tsx/PageInitial"

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-y-10 flex-1 gap-x-28 sm:flex-row ">
			<PageInitial />
			<img src={tifanyPfp} alt="imagem" className="rounded-full w-44 h-44" />
		</section>
	)
}
