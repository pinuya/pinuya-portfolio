import { Link } from "@remix-run/react"

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

type Langs = {
	name: string
}

export function AboutDetails(props: Props) {
	return (
		<div className="py-5">
			<Link to={"https://www.linkedin.com/in/tifanyanunes/"}>
				<ul className="flex flex-col gap-5">
					{props.items.map((item) => (
						<li key={item.title}>
							<div className="flex items-start gap-x-6 hover:opacity-75">
								<img
									className="h-16 w-16 rounded-full cursor-pointer"
									src={item.imageUrl}
									alt=""
								/>
								<div>
									<h3 className="text-lg font-semibold leading-7 tracking-tight cursor-pointer">
										{item.title}
									</h3>
									<p className="text-base text-secondary-foreground leading-6 cursor-pointer">
										{item.desc}
									</p>
									<p className="text-sm italic leading-6 cursor-pointer">
										{item.langs?.map((lang) => (
											<span key={lang}> {lang} </span>
										))}
									</p>
									<p className="text-sm italic leading-6 cursor-pointer">
										{item.date}
									</p>
								</div>
							</div>
						</li>
					))}
				</ul>
			</Link>
		</div>
	)
}
