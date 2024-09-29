import { supabase } from "~/services/supabase.server"

export async function getProjects() {
	const { data: projectsData, error: projectsError } = await supabase
		.from("projects")
		.select()
	if (projectsError) throw Error(projectsError.message)

	return projectsData
}

