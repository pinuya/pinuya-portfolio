import { bikcraftProject, dogsProject, personalProject } from "~/assets/images"
import { ProjectsDetails } from "./ProjectsDetails"
import { motion } from "framer-motion"
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination"

const projects = [
	{
		title: "Portfólio/Currículo",
		desc: "Projeto com layout responsivo utilizando JavaScript, TypeScript, TailwindCSS, ReactJS e Remix",
		bannerImg: personalProject,
		linkRep: "https://github.com/pinuya/pinuya.dev",
	},
	{
		title: "Dogs",
		desc: "Projeto de estudos do curso Origamid. Com layout responsivo utilizando JavaScript, CSS e ReactJS.",
		bannerImg: dogsProject,
		linkRep: "https://github.com/pinuya/Dogs",
	},
	{
		title: "Bikcraft",
		desc: "Projeto de estudos do curso Origamid. Codigo refatorado com TypeScript e Remix.",
		bannerImg: bikcraftProject,
		linkRep: "https://github.com/pinuya/Bikecraft",
	},
]

export default function Projects() {
	return (
		<motion.div
			className=""
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1.5 }}>
			<h2 className="text-3xl font-bold sm:text-4xl">Portfolio</h2>

			<ProjectsDetails projectList={projects} />

			{/* <Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious href="#" />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">1</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
					<PaginationItem>
						<PaginationNext href="#" />
					</PaginationItem>
				</PaginationContent>
			</Pagination> */}
		</motion.div>
	)
}
