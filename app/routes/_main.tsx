import { Outlet } from "@remix-run/react"
import { Footer } from "~/components/footer/Footer"
import Nav from "~/components/navbar/Nav"

export default function Main() {
	return (
		<div className="p-8 flex items-center justify-center flex-col h-screen w-full">
			<Nav />

			<div className="h-full flex-1 flex items-center justify-center">
				<Outlet />
			</div>

			<div className="">
				<Footer />
			</div>
		</div>
	)
}
