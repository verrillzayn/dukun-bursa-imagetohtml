/** biome-ignore-all lint/performance/noImgElement: explanation */

import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import { TrendingUp } from "@/app/api/coba/_components/icon/render-icon";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const origin = req.nextUrl.origin;

    // Ambil data dari query params (dikirim oleh n8n nanti)
    const judul = searchParams.get("judul") || "Update IHSG";
    const harga = searchParams.get("harga") || "0.00";
    const perubahan = searchParams.get("perubahan") || "0%";
    const isUp = !perubahan.includes("-");

    // Load Font (Pastikan path-nya benar)
    //     const fontData = await fetch(
    //       new URL("../../../../public/fonts/Inter-Bold.ttf", import.meta.url),
    //     ).then((res) => res.arrayBuffer());
    //     const fontData = await fetch(
    //       new URL(
    //         "../../../../public/fonts/Geist/ttf/Geist-Bold.ttf",
    //         import.meta.url,
    //       ),
    //     ).then((res) => res.arrayBuffer());

    const loadAsset = async (path: string) => {
      const res = await fetch(new URL(path, origin));
      if (!res.ok) {
        throw new Error(`Failed to load asset ${path}: ${res.status}`);
      }
      return res.arrayBuffer();
    };

    const bgImageUrl = new URL("/bg-img-market-pulse.png", origin).toString();

    // Load only faces you actually use (keeps response fast)
    const [
      geistRegular,
      geistMedium,
      geistBold,
      geistItalic,
      geistBoldItalic,
      geistExtraBold,
    ] = await Promise.all([
      loadAsset("/fonts/Geist/ttf/Geist-Regular.ttf"),
      loadAsset("/fonts/Geist/ttf/Geist-Medium.ttf"),
      loadAsset("/fonts/Geist/ttf/Geist-Bold.ttf"),
      loadAsset("/fonts/Geist/ttf/Geist-Italic.ttf"),
      loadAsset("/fonts/Geist/ttf/Geist-BoldItalic.ttf"),
      loadAsset("/fonts/Geist/ttf/Geist-ExtraBold.ttf"),
    ]);

    return new ImageResponse(
      // Bagian ini adalah desain shadcn/Tailwind kamu
      // Gunakan dimensi 9:16 (1080x1920) untuk Story atau 1:1 (1080x1080) untuk Feed
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <img
          src={bgImageUrl}
          alt="bg"
          style={{ width: "100%", height: "100%" }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            flexDirection: "column",
          }}
          tw="w-full h-full"
        >
          {/* <!-- Header Logo Area --> */}

          <div
            style={{ marginTop: "20px" }}
            tw="flex flex-col items-center justify-center"
          >
            <h1
              style={{ margin: 0, marginTop: "20px", fontWeight: 800 }}
              tw="text-[56px] text-white uppercase"
            >
              Market Pulse
            </h1>
            <p
              style={{ margin: 0, marginTop: "8px" }}
              tw="text-[35px] text-gray-400 tracking-wide"
            >
              By Dukun Bursa
            </p>
          </div>

          {/* <!-- Header Logo Area --> */}

          {/* <!-- Market Summary Label --> */}
          <div
            tw="flex items-center justify-between mb-1 px-5"
            style={{ marginTop: "24px" }}
          >
            <div tw="h-[4px] flex-1 bg-gray-500" />
            <div
              style={{ margin: "0px 2rem", gap: "1.5rem" }}
              tw="flex items-center text-gray-400 text-[32px] font-semibold tracking-widest uppercase"
            >
              {/* <TrendingUp tw="text-sm" /> */}
              <TrendingUp />
              <span>Ringkasan Pasar</span>
            </div>
            <div tw="h-[4px] flex-1 bg-gray-500" />
          </div>
          {/* <!-- Market Summary Label --> */}

          {/* <!-- IHSG Main Card --> */}
          <div
            style={{
              display: "flex",
              border: "1px solid #1e2939",
              height: 500,
              margin: "3.5rem 20px",
              borderRadius: "1.5rem",
              padding: "2rem",
              flexDirection: "column",
              backdropFilter: "blur(10px)",
            }}
          ></div>
          {/* <!-- IHSG Main Card --> */}
        </div>
      </div>,
      {
        width: 1080,
        height: 1920,
        fonts: [
          { name: "Geist", data: geistRegular, weight: 400, style: "normal" },
          { name: "Geist", data: geistMedium, weight: 500, style: "normal" },
          { name: "Geist", data: geistBold, weight: 700, style: "normal" },
          { name: "Geist", data: geistItalic, weight: 400, style: "italic" },
          {
            name: "Geist",
            data: geistBoldItalic,
            weight: 700,
            style: "italic",
          },
          {
            name: "Geist",
            data: geistExtraBold,
            weight: 800,
            style: "normal",
          },
        ],
      },
    );
  } catch (e: any) {
    console.log({ error: e });

    return new Response(`Failed to generate image`, { status: 500 });
  }
}
