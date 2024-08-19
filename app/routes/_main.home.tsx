import { pfpInitial } from "~/assets/images"
import PageInitial from "~/components/pageInitalName.tsx/PageInitial"
import { motion } from "framer-motion"

export default function Home() {
	return (
		<section className="flex flex-1 flex-col items-center justify-center gap-y-10 gap-x-28 sm:flex-row">
			<PageInitial />
			<motion.img
				initial={{ x: "100%" }}
				animate={{ x: 0 }}
				transition={{ duration: 1, ease: "easeOut" }}
				src={pfpInitial}
				alt="imagem"
				className="rounded-full w-44 h-44"
			/>
		</section>
	)
}
