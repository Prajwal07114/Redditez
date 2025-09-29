import { createClient } from "@supabase/supabase-js";


const supabaseUrl = "https://ecorsrrkcvhcydghuiqi.supabase.co"

const supabaseAnonkey = import .meta.env.Vite_Supabase_Anon_key as string;



export const supabase =createClient(supabaseUrl,supabaseAnonkey)