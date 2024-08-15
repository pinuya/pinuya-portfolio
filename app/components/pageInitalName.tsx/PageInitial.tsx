import { Link } from "@remix-run/react"
import { Button } from "../ui/button"
import { FileDown, MoveRight } from "lucide-react"
import { motion } from "framer-motion"
import {
	GitHubLogoIcon,
	InstagramLogoIcon,
	LinkedInLogoIcon,
	TwitterLogoIcon,
} from "@radix-ui/react-icons"

export default function PageInitial() {
	const defaultAnimation = (duration: number) => {
		return {
			initial: { x: "-100%" },
			animate: { x: 0 },
			transition: { duration, ease: "easeOut" },
		}
	}
	const titleAnimation = defaultAnimation(1)
	const roleAnimation = defaultAnimation(1.25)
	const buttonAnimation = defaultAnimation(1.5)

	return (
		<div className="flex space-x-6">
			<div className="flex flex-col space-y-6 justify-center">
				<Link
					to={"https://github.com/pinuya"}
					className="hover:bg-primary-foreground">
					<GitHubLogoIcon />
				</Link>
				<Link
					to={"https://x.com/tiffrieren"}
					className="hover:bg-primary-foreground">
					<TwitterLogoIcon />
				</Link>
				<Link to={"https://www.instagram.com/tifsnunes/"}>
					<InstagramLogoIcon />
				</Link>
				<Link to={"https://www.linkedin.com/in/tifanyanunes/"}>
					<LinkedInLogoIcon />
				</Link>
			</div>

			<div>
				<div className="flex flex-col items-center sm:items-start">
					<motion.div {...titleAnimation}>
						<h1 className="font-dancingScript text-6xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text ">
							Tifany Alves
						</h1>
					</motion.div>

					<motion.h2 {...roleAnimation} className="font-semibold ">
						FullStack Developer | Software Engineer{" "}
						<span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
							.
						</span>
					</motion.h2>
					<motion.p {...roleAnimation} className="text-sm mt-2 ">
						Olá, seja bem vindo(a)! Prazer, sou{" "}
						<span className="font-semibold">desenvolvedora FullStack</span>,{" "}
						<br /> Atualmente estou reformando meu portfolio, caso veja algo sem{" "}
						<br />
						animacao ou inacabado peco um pouco de paciencia rs.
					</motion.p>
				</div>
				<motion.div {...buttonAnimation} className="mt-6 flex justify-between">
					<Link to={"/about"}>
						<Button className="">
							{" "}
							Saiba mais <MoveRight className="ml-2 h-4 w-4" />
						</Button>
					</Link>
					<Link to={"/curriculoTifany.pdf"} target="_blank">
						<Button variant="secondary">
							Baixar Curriculo <FileDown className="ml-2 h-4 w-4" />
						</Button>
					</Link>
				</motion.div>
			</div>
		</div>
	)
}
