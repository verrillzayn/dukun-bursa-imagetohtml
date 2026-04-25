import { ImageResponse } from "@vercel/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // Ambil data dari query params (dikirim oleh n8n nanti)
    const judul = searchParams.get("judul") || "Update IHSG";
    const harga = searchParams.get("harga") || "0.00";
    const perubahan = searchParams.get("perubahan") || "0%";
    const isUp = !perubahan.includes("-");

    // Load Font (Pastikan path-nya benar)
    //     const fontData = await fetch(
    //       new URL("../../../../public/fonts/Inter-Bold.ttf", import.meta.url),
    //     ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      // Bagian ini adalah desain shadcn/Tailwind kamu
      // Gunakan dimensi 9:16 (1080x1920) untuk Story atau 1:1 (1080x1080) untuk Feed
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 128,
          background: "lavender",
        }}
      >
        Hello!
      </div>,
      {
        width: 1080,
        height: 1920, // Ganti jadi 1920 jika ingin format 9:16
        //    fonts: [
        //      {
        //        name: "Inter",
        //        data: fontData,
        //        style: "normal",
        //        weight: 700,
        //      },
        //    ],
      },
    );
  } catch (e: any) {
    console.log({ error: e });

    return new Response(`Failed to generate image`, { status: 500 });
  }
}
