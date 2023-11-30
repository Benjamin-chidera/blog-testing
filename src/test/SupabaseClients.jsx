import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qwqkmcbyeecqdjxidvle.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3cWttY2J5ZWVjcWRqeGlkdmxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU5ODMwMTMsImV4cCI6MjAxMTU1OTAxM30.3xh9um8UpkzPdeFTLbKZxsuf7xmH7IQF2PaHuhE7Klo";
export const supabase = createClient(supabaseUrl, supabaseKey);
