import { Link } from "@remix-run/react"
import { Button } from "../ui/button"
import { BriefcaseBusiness, MoveRight } from "lucide-react"
import { motion } from "framer-motion"

import { FaXTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6"

export default function PageInitial() {
	return (
		<div className="flex space-x-12">
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 0.8,
					delay: 1,
					ease: [0, 0.71, 0.2, 1.01],
				}}
				className="hidden sm:flex sm:flex-col sm:space-y-6 sm:justify-center">
				<Link to={"https://x.com/pinuyaa"}>
					<FaXTwitter className="hover:fill-cyan-700" />
				</Link>

				<Link to={"https://github.com/pinuya"}>
					<FaGithub className="hover:fill-slate-600" />
				</Link>

				<Link to={"https://www.instagram.com/imnotif/"}>
					<FaInstagram className="hover:fill-fuchsia-700" />
				</Link>
				<Link to={"https://www.linkedin.com/in/tifanyanunes/"}>
					<FaLinkedin className="hover:fill-cyan-600" />
				</Link>
			</motion.div>

			<div>
				<div className="flex flex-col items-center sm:items-start">
					<motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 0.8,
							delay: 0.5,
							ease: [0, 0.71, 0.2, 1.01],
						}}>
						<h1 className="pb-2 font-dancingScript text-6xl bg-gradient-to-r from-pink-300 via-pink-400 to-pink-600 text-transparent bg-clip-text ">
							Tifany Alves
						</h1>
					</motion.div>

					<motion.h2
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1.5 }}
						className="font-semibold ">
						Software Engineer{" "}
						<span className="bg-gradient-to-r from-pink-300 via-pink-400 to-pink-600 text-transparent bg-clip-text">
							.
						</span>
					</motion.h2>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1.5 }}
						className="text-sm mt-2 ">
						Olá, seja bem vindo(a)! <br /> Prazer, sou{" "}
						<span className="font-semibold">desenvolvedora FullStack</span>,{" "}
						gosto de ler, programar e colecionar.
					</motion.p>
				</div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.5 }}
					className="mt-6 flex justify-normal space-x-4">
					<Link to={"/about"}>
						<Button variant={"outline"}>
							{" "}
							Saiba mais <MoveRight className="ml-2 h-4 w-4" />
						</Button>
					</Link>

					<Link to={"/projects"}>
						<Button variant={"outline"}>
							{" "}
							Ver projetos <BriefcaseBusiness className="ml-2 h-4 w-4" />
						</Button>
					</Link>
				</motion.div>
			</div>
		</div>
	)
}
