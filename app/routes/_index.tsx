import { Link, useLoaderData } from "@remix-run/react";
import {
  CalendarIcon,
  FileDownIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import { ModeToggle } from "~/components/mode-togle";
import { motion, useScroll, type Variants } from "framer-motion";
import { FaGithub, FaTwitter } from "react-icons/fa6";
import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import type { Project } from "~/types";
import { skillIcons } from "~/consts";
import { getExperiences, getProjects, getSkills } from "~/models";
import ScrollIndicator from "~/components/ScrollIndicator";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio Tifany" },
    {
      name: "Portfolio contendo informacoes e projetos pessoais de Tifany Alves",
      content: "Portfolio",
    },
  ];
};

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export async function loader() {
  const [projects, experiences, skills] = await Promise.all([
    getProjects(),
    getExperiences(),
    getSkills(),
  ]);

  return {
    experiences,
    projects,
    skills,
  };
}

export default function Main() {
  const { experiences, projects, skills } = useLoaderData<typeof loader>();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const { scrollYProgress } = useScroll();
  const defaultAnimation = (duration: number) => {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration },
    };
  };

  const textAnimation = defaultAnimation(2);
  const buttonAnimation = defaultAnimation(4);

  return (
    <div className="flex flex-col min-h-screen w-full">
      <motion.div
        className="progress-bar z-10"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="flex flex-col min-h-[100dvh]">
        <header className="px-4 lg:px-6 h-14 flex self-end">
          <div className="flex items-center justify-center">
            <ModeToggle />
          </div>
        </header>

        <main className="flex-1">
          <section id="home" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <motion.div {...textAnimation} className="space-y-2">
                    <h1 className="text-3xl text-secondary-foreground font-semibold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Tifany Alves
                    </h1>
                    <p className="text-3xl text-secondary-foreground font-semibold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Software Engineer
                    </p>
                    <p className="max-w-[600px] text-muted-foreground">
                      Formada em Analise e Desenvolvimento de Sistemas,
                      atualmente sendo uma Software Engineer com foco no
                      Front-End. Buscando sempre desenvolver telas robustas e
                      responsivas.
                    </p>
                  </motion.div>
                  <motion.div
                    {...buttonAnimation}
                    className="flex flex-col gap-2 min-[400px]:flex-row"
                  >
                    <Link
                      to={"#projects"}
                      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      Veja meu trabalho
                    </Link>
                    <Link
                      to={"/curriculoTifany.pdf"}
                      target="_blank"
                      className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      Baixar curriculo <FileDownIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </motion.div>
                </div>
                <motion.img
                  {...buttonAnimation}
                  src="/assets/a2.jpg"
                  width="550"
                  height="550"
                  alt="bocchi pfp"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                />
              </div>
              <ScrollIndicator />
            </div>
          </section>

          <section id="xp" className="py-16 bg-muted">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              className="container mx-auto px-4"
            >
              <motion.h2
                variants={cardVariants}
                className="text-3xl font-bold text-center mb-12"
              >
                Experiência Profissional
              </motion.h2>
              <motion.div className="max-w-3xl mx-auto">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={1}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mb-12 relative pl-8"
                  >
                    <div className="absolute left-0 top-0 mt-1 w-4 h-4 rounded-full bg-primary" />
                    {index !== experiences.length - 1 && (
                      <div className="absolute left-[7px] top-4 bottom-0 w-[2px] bg-gray-200" />
                    )}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-gray-950 text-xl font-semibold mb-2">
                        {exp.position}
                      </h3>
                      <p className="text-gray-600 mb-2">{exp.company}</p>
                      <p className="text-sm text-gray-500 mb-4 flex items-center">
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        {exp.duration}
                      </p>
                      <ul className="list-disc list-inside text-gray-700">
                        <li className="mb-1">{exp.description}</li>
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </section>

          <section
            id="skills"
            className="container mx-auto py-12 md:py-16 lg:py-20"
          >
            <div className="space-y-6 md:space-y-8 lg:space-y-10">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                className="space-y-4 text-center"
              >
                <motion.h2
                  variants={cardVariants}
                  className="text-3xl font-bold text-center mb-12"
                >
                  Skills
                </motion.h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
              >
                {skills.map((s, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="bg-muted rounded-full p-3"
                    >
                      {skillIcons[s.title as keyof typeof skillIcons]?.()}
                    </motion.div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {s.title}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          <section id="projects">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              className="container mx-auto px-4 py-12"
            >
              <motion.h2
                variants={cardVariants}
                className="text-3xl font-bold text-center mb-8"
              >
                Projetos
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105"
                    onClick={() => setSelectedProject(project)}
                  >
                    <img
                      src={project?.image ?? ""}
                      alt={project?.title ?? ""}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>

              <Dialog
                open={selectedProject !== null}
                onOpenChange={() => setSelectedProject(null)}
              >
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{selectedProject?.title}</DialogTitle>
                    <DialogDescription>
                      <img
                        src={selectedProject?.image}
                        alt={selectedProject?.title}
                        className="w-full h-48 object-cover rounded-md mb-4"
                      />
                      <p>{selectedProject?.details}</p>
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <Link to={selectedProject?.link ?? ""}>
                        <Button className="gap-2" variant={"secondary"}>
                          <FaGithub /> GitHub
                        </Button>
                      </Link>
                    </div>

                    <Button onClick={() => setSelectedProject(null)}>
                      Close
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          </section>
        </main>

        <footer className="bg-muted py-6 text-muted-foreground">
          <div className="container flex items-center justify-between">
            <div className="text-sm">
              &copy; Feito com 💜 2024{" "}
              <a href={"/aerials.html"} className="underline">
                Aerials
              </a>
              .
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to={"https://github.com/pinuya"}
                className="relative group inline-block"
              >
                <FaGithub className="h-5 w-5 text-muted-foreground transition-all duration-500 group-hover:text-gray-800" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                to={"https://www.linkedin.com/in/tifanyanunes/"}
                className="relative group inline-block"
              >
                <LinkedinIcon className="h-5 w-5 text-muted-foreground transition-all duration-500 group-hover:text-blue-500" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                to={"https://www.instagram.com/imaerials/"}
                className="relative group inline-block"
              >
                <InstagramIcon className="h-5 w-5 text-muted-foreground transition-all duration-500 group-hover:text-purple-500" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                to={"https://x.com/aerialsdev"}
                className="relative group inline-block"
              >
                <FaTwitter className="h-5 w-5 text-muted-foreground transition-all duration-500 group-hover:text-blue-400" />
                <span className="sr-only">X</span>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
