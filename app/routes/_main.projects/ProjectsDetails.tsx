import { Link } from "@remix-run/react"

type Items = {
	title: string
	desc: string
	bannerImg: string
	socialIcons?: string[]
}

type Props = {
	items: Items[]
}

export function ProjectsDetails(props: Props) {
	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
				{props.items.map((item) => (
					<div key={item.title}>
						<h2 className="text-2xl font-bold">Projetos</h2>

						<div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
							<div className="group relative">
								<div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
									<img
										src={item.bannerImg}
										alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
										className="h-full w-full object-cover object-center"
									/>
								</div>
								<h3 className="mt-6 text-sm">
									<Link to={"/home"}>
										<span className="absolute inset-0" />
									</Link>
								</h3>
								<p className="text-base font-semibold">{item.title}</p>
								<p className="text-base font-semibold">{item.desc}</p>
								<Link to={"https://github.com/pinuya"}>{item.socialIcons}</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
