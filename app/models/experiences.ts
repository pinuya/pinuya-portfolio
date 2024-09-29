import { supabase } from "~/services/supabase.server"

export async function getExperiences(){
	const { data: experiencesData, error: experiencesError } = await supabase
		.from("experiences")
		.select()

	if (experiencesError) throw Error(experiencesError.message)

	return experiencesData
}
