import { Outlet } from "@remix-run/react"
import { Footer } from "~/components/footer/Footer"
import Nav from "~/components/navbar/Nav"

export default function Main() {
	return (
		<div className="flex flex-col min-h-screen w-full">
			<Nav />

			<div className="flex flex-grow items-center justify-center p-4">
				<Outlet />
			</div>

			<Footer />
		</div>
	)
}
