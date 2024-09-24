import { createClient } from "@supabase/supabase-js";
import type { Database } from "database.types";

const supabaseUrl = process.env.API_URL ?? "";
const supabaseKey = process.env.SERVICE_ROLE_KEY ?? "";

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);