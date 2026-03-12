import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const {
      firstName,
      email,
      birthDate,
      birthTime,
      birthPlace
    } = body;

    console.log("Nouveau lead Astrae :", {
      firstName,
      email,
      birthDate,
      birthTime,
      birthPlace
    });

    return NextResponse.json({
      success: true
    });

  } catch (error) {

    console.error("Erreur API lead :", error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );

  }

}
