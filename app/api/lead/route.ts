import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ ok: true, route: "lead GET OK" });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    return NextResponse.json({
      success: true,
      message: "API lead OK",
      received: body,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Erreur serveur test",
      },
      { status: 500 }
    );
  }
}
