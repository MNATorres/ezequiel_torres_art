import { NextResponse } from "next/server";
import { getExperiences } from "@/lib/experiences";

// Same-origin proxy so client components (e.g. the landing teaser) can read the
// experiences without exposing the backend URL or dealing with CORS.
export async function GET() {
  try {
    const experiences = await getExperiences();
    return NextResponse.json({ experiences });
  } catch {
    return NextResponse.json({ experiences: [] });
  }
}
