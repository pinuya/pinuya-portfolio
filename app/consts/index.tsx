import { FaFigma, FaGithub, FaNodeJs } from "react-icons/fa6"
import { DiJavascript } from "react-icons/di"
import { FaDocker, FaReact } from "react-icons/fa"
import { RiNextjsFill, RiRemixRunFill, RiTailwindCssFill } from "react-icons/ri"
import {
	SiExpress,
	SiPostgresql,
	SiTypescript,
	SiVisualstudiocode,
	SiVite,
} from "react-icons/si"

export const skillIcons = {
	JavaScript: () => <DiJavascript className="w-6 h-6 text-primary" />,
	TypeScript: () => <SiTypescript className="w-6 h-6 text-primary" />,
	React: () => <FaReact className="w-6 h-6 text-primary" />,
	"Node.js": () => <FaNodeJs className="w-6 h-6 text-primary" />,
	Docker: () => <FaDocker className="w-6 h-6 text-primary" />,
	Postgres: () => <SiPostgresql className="w-6 h-6 text-primary" />,
	TailwindCSS: () => <RiTailwindCssFill className="w-6 h-6 text-primary" />,
	Remix: () => <RiRemixRunFill className="w-6 h-6 text-primary" />,
	Vite: () => <SiVite className="w-6 h-6 text-primary" />,
	"Next.js": () => <RiNextjsFill className="w-6 h-6 text-primary" />,
	Express: () => <SiExpress className="w-6 h-6 text-primary" />,
	Git: () => <FaGithub className="w-6 h-6 text-primary" />,
	"Visual Studio Code": () => (
		<SiVisualstudiocode className="w-6 h-6 text-primary" />
	),
	Figma: () => <FaFigma className="w-6 h-6 text-primary" />,
}
