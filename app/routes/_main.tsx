import { Outlet } from "@remix-run/react"
import { Footer } from "~/components/footer/Footer"
import Nav from "~/components/navbar/Nav"

export default function Main() {
	return (
		<div className="p-6 flex flex-col h-screen w-full">
			<Nav />

			<div className="flex-1 flex items-center justify-center">
				<Outlet />
			</div>

			<Footer />
		</div>
	)
}
