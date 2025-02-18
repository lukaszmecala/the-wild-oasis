import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://cdiuigcauejpbzugxtwh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkaXVpZ2NhdWVqcGJ6dWd4dHdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0ODgxNTgsImV4cCI6MjA1NTA2NDE1OH0.mhlzPE--HhSxrmVsZIfxJrnhBD6eP1oTV4tP0E9wK00";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
