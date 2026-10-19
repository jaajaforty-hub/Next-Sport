"use server";

import { db } from "@/db/db";

interface FormStatus {
  success: boolean;
  message: string;
}

async function processLogo(file: File | null): Promise<Buffer | null> {
  if (!file || file.size === 0) return null;
  const arrayBuffer = await file.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

export default async function HandleUpdate(
  dayName: string,
  prevState: FormStatus,
  formData: FormData
): Promise<FormStatus> {
  try {
    
    const [logo1, logo2, logo3, logo4] = await Promise.all([
      processLogo(formData.get("team_one_logo") as File | null),
      processLogo(formData.get("team_two_logo") as File | null),
      processLogo(formData.get("team_three_logo") as File | null),
      processLogo(formData.get("team_four_logo") as File | null),
    ]);

    const teams = [
      {
        id: 1,
        name: String(formData.get("team_one_name") || ""),
        country: String(formData.get("team_one_country") || ""),
        results: String(formData.get("team_one_results") || ""),
        time: String(formData.get("game_one_time") || ""),
        odd: String(formData.get("team_one_odd") || ""),
        logo: logo1,
      },
      {
        id: 2,
        name: String(formData.get("team_two_name") || ""),
        country: String(formData.get("team_two_country") || ""),
        results: String(formData.get("team_two_results") || ""), // Fixed form field name
        time: String(formData.get("game_two_time") || ""),
        odd: String(formData.get("team_two_odd") || ""),
        logo: logo2,
      },
      {
        id: 3,
        name: String(formData.get("team_three_name") || ""),
        country: String(formData.get("team_three_country") || ""),
        results: String(formData.get("team_three_results") || ""), // Fixed form field name
        time: String(formData.get("game_three_time") || ""),
        odd: String(formData.get("team_three_odd") || ""),
        logo: logo3,
      },
      {
        id: 4,
        name: String(formData.get("team_four_name") || ""),
        country: String(formData.get("team_four_country") || ""),
        results: String(formData.get("team_four_results") || ""), // Fixed form field name
        time: String(formData.get("game_four_time") || ""),
        odd: String(formData.get("team_four_odd") || ""),
        logo: logo4,
      },
    ];

   
    for (const team of teams) {
      await db.query(
        `
        INSERT INTO ${dayName} 
        VALUES
        ($1,$2,$3,$4,$5,$6,$7) 

        ON CONFLICT (id) DO 

        UPDATE SET
        id = EXCLUDED.id,
        logo = EXCLUDED.logo,
        team_name = EXCLUDED.team_name,
        country = EXCLUDED.country,
        results = EXCLUDED.results,
        odd = EXCLUDED.odd,
        time = EXCLUDED.time
        
      `,
        [
          team.id,
          team.logo,
          team.name,
          team.country,
          team.results,
          team.odd,
          team.time,
        ]
      );
    }

    return {
      success: true,
      message: "Games updated successfully",
    };
  } catch (error) {
    console.error("Database update error:", error);

    return {
      success: false,
      message: "Failed to update games",
    };
  }
}