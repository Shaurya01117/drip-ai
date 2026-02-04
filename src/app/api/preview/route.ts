import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const image = formData.get("image");

    if (!image) {
      return NextResponse.json(
        { error: "No image uploaded" },
        { status: 400 }
      );
    }

    // ⏳ Fake AI processing delay
    await new Promise((r) => setTimeout(r, 2000));

    // 🎭 Placeholder result
    return NextResponse.json({
      success: true,
      message: "Preview generated (fake AI)",
      previewUrl: "https://placehold.co/400x600?text=AI+Preview",
    });
  } catch (e) {
    return NextResponse.json(
      { error: "Something broke" },
      { status: 500 }
    );
  }
}

