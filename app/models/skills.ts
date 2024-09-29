import { supabase } from "~/services/supabase.server"

export async function getSkills() {
	const { data: skillsData, error: skillsError } = await supabase
		.from("skills")
		.select()
	if (skillsError) throw Error(skillsError.message)

	return skillsData
}
