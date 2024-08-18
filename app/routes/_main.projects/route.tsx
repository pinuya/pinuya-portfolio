import { bikcraftProject, dogsProject, personalProject } from "~/assets/images"
import { ProjectsDetails } from "./ProjectsDetails"
import { motion } from "framer-motion"
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "~/components/ui/pagination"
import { type LoaderFunctionArgs, json } from "@remix-run/node"
import { useLoaderData, useSearchParams } from "@remix-run/react"

export const loader = (args: LoaderFunctionArgs) => {
	const url = new URL(args.request.url)
	const pageNumber = Number(url.searchParams.get("page") ?? 1)

	const page = Number.isNaN(pageNumber) ? 1 : pageNumber
	const quantity = 3

	const projects = [
		{
			title: "Portfólio",
			desc: "Projeto com layout responsivo utilizando JavaScript, TypeScript, TailwindCSS, ReactJS e Remix.",
			bannerImg: personalProject,
			linkRep: "https://github.com/pinuya/pinuya.dev",
			linkDeploy: "https://pinyua.site",
		},
		{
			title: "Dogs",
			desc: "Projeto de estudos do curso Origamid. Com layout responsivo utilizando JavaScript, CSS e ReactJS.",
			bannerImg: dogsProject,
			linkRep: "https://github.com/pinuya/Dogs",
			linkDeploy: "https://dogs-rouge.vercel.app/",
		},
		{
			title: "Bikcraft",
			desc: "Projeto de estudos do curso Origamid. Codigo refatorado com TypeScript e Remix.",
			bannerImg: bikcraftProject,
			linkRep: "https://github.com/pinuya/Bikecraft",
			linkDeploy: "https://pinuya.github.io/Bicycle-Project/",
		},
	]

	return json({
		projects: projects.slice((page - 1) * quantity, page * quantity),
		totalPage: Math.ceil(projects.length / quantity),
	})
}

export default function Projects() {
	const { projects, totalPage } = useLoaderData<typeof loader>()
	const [searchParams, setSearchParams] = useSearchParams()
	return (
		<motion.div
			className=""
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1.5 }}>
			<h2 className="text-3xl font-bold sm:text-4xl">Portfólio</h2>

			<ProjectsDetails projectList={projects} />

			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious
							className="cursor-pointer"
							onClick={() => {
								const page = Number(searchParams.get("page") ?? 1)
								if (page - 1 <= 0) {
									return
								}
								setSearchParams((prev) => {
									prev.set("page", (page - 1).toString())
									return prev
								})
							}}
						/>
					</PaginationItem>
					{Array.from({ length: totalPage }, (_value, key) => key).map((v) => (
						<PaginationItem className="cursor-pointer" key={v}>
							<PaginationLink
								onClick={() => {
									setSearchParams((prev) => {
										prev.set("page", (v + 1).toString())
										return prev
									})
								}}>
								{v + 1}
							</PaginationLink>
						</PaginationItem>
					))}
					<PaginationItem>
						<PaginationNext
							className="cursor-pointer"
							onClick={() => {
								const page = Number(searchParams.get("page") ?? 1)
								if (page + 1 > totalPage) {
									return
								}
								setSearchParams((prev) => {
									prev.set("page", (page + 1).toString())
									return prev
								})
							}}
						/>
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</motion.div>
	)
}
