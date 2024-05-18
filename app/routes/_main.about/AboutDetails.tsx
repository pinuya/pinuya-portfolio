import { Link } from "@remix-run/react"
import { SquareArrowOutUpRight } from "lucide-react"

type Items = {
	title: string
	desc: string
	imageUrl: string
	date: string
	langs?: string[]
}

type Props = {
	items: Items[]
}

export function AboutDetails(props: Props) {
	return (
		<div className="py-5">
			<div className="">
				<ul className="flex flex-col gap-5">
					{props.items.map((item) => (
						<li key={item.title}>
							<div className="flex items-start gap-x-6">
								<img
									className="h-16 w-16 rounded-full"
									src={item.imageUrl}
									alt=""
								/>
								<div>
									<h3 className="text-lg font-semibold leading-7 tracking-tight">
										{item.title}
									</h3>
									<p className="text-base text-secondary-foreground leading-6">
										{item.desc}
									</p>
									<p className="text-sm italic leading-6">
										{item.langs?.map((lang) => (
											<span key={lang}> {lang} </span>
										))}
									</p>
									<p className="text-sm italic leading-6">{item.date}</p>
								</div>
								<div className="flex">
									<Link to={"https://www.linkedin.com/in/tifanyanunes/"}>
										<SquareArrowOutUpRight />
									</Link>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
