import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

const supabaseUrl = process.env.SUPABASE_PROJECT_URL!;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export const supabaseServer = createClient<Database>(supabaseUrl, supabaseServiceRoleKey);
