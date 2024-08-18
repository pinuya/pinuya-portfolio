import { Link } from "@remix-run/react"
import { Button } from "../ui/button"
import { MoveRight } from "lucide-react"
import { motion } from "framer-motion"

import { FaXTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6"

export default function PageInitial() {
	return (
		<div className="flex space-x-6">
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 0.8,
					delay: 1,
					ease: [0, 0.71, 0.2, 1.01],
				}}
				className="flex flex-col space-y-6 justify-center">
				<Link to={"https://x.com/tiffrieren"}>
					<FaXTwitter className="hover:fill-cyan-700" />
				</Link>

				<Link to={"https://github.com/pinuya"}>
					<FaGithub className="hover:fill-slate-600" />
				</Link>

				<Link to={"https://www.instagram.com/tifsnunes/"}>
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
						<h1 className="pb-2 font-dancingScript text-6xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text ">
							Tifany Alves
						</h1>
					</motion.div>

					<motion.h2
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1.5 }}
						className="font-semibold ">
						Software Engineer{" "}
						<span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
							.
						</span>
					</motion.h2>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1.5 }}
						className="text-sm mt-2 ">
						Olá, seja bem vindo(a)! Prazer, sou{" "}
						<span className="font-semibold">desenvolvedora FullStack</span>,{" "}
						<br /> gosto de ler, programar e colecionar.
					</motion.p>
				</div>
				<motion.div className="mt-6 flex justify-normal">
					<Link to={"/about"}>
						<Button className="">
							{" "}
							Saiba mais <MoveRight className="ml-2 h-4 w-4" />
						</Button>
					</Link>
				</motion.div>
			</div>
		</div>
	)
}
