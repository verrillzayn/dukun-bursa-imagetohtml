/** biome-ignore-all lint/performance/noImgElement: explanation */

import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import {
  ArrowDown,
  ArrowUpRight,
} from "@/app/api/generate/_components/render-icon";
import { Sparkline } from "@/components/chart2";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const chartData = [186, 305, 237, 73, 209, 214];

  try {
    const { searchParams } = new URL(req.url);
    const origin = req.nextUrl.origin;

    // Ambil data dari query params (dikirim oleh n8n nanti)
    const judul = searchParams.get("judul") || "Update IHSG";
    const harga = searchParams.get("harga") || "0.00";
    const perubahan = searchParams.get("perubahan") || "0%";
    const isUp = !perubahan.includes("-");

    const loadAsset = async (path: string) => {
      const res = await fetch(new URL(path, origin));
      if (!res.ok) {
        throw new Error(`Failed to load asset ${path}: ${res.status}`);
      }
      return res.arrayBuffer();
    };

    const bgImageUrl = new URL("/test-bg.png", origin).toString();

    // Load only faces you actually use (keeps response fast)
    const [
      geistRegular,
      geistMedium,
      geistMediumItalic,
      geistBold,
      geistItalic,
      geistBoldItalic,
      geistExtraBold,
    ] = await Promise.all([
      loadAsset("/fonts/Geist/ttf/Geist-Regular.ttf"),
      loadAsset("/fonts/Geist/ttf/Geist-Medium.ttf"),
      loadAsset("/fonts/Geist/ttf/Geist-MediumItalic.ttf"),
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
          {/* <!-- IHSG Main Card --> */}
          <div
            style={{
              display: "flex",
              //     border: "2px solid red",
              marginTop: "280px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            tw="w-[92%] h-[523px]"
          >
            <div
              tw="flex items-start w-full"
              style={{ flexDirection: "column" }}
            >
              <div
                style={{ display: "flex" }}
                tw="flex justify-between items-start"
              >
                <div
                  tw="pl-[5rem] pt-[2rem] flex"
                  style={{ flexDirection: "column" }}
                >
                  <div tw="flex items-center">
                    <span tw="text-[68px] font-extrabold text-[#4ade80]">
                      7.150,23
                    </span>
                    <ArrowUpRight
                      style={{
                        width: "3.5rem",
                        height: "3.5rem",
                        marginLeft: "0.5rem",
                      }}
                      tw="text-[#4ade80]"
                    />
                  </div>
                  <p tw="text-[#4ade80] text-[28px] font-medium mt-0.5">
                    ▲ +12,45 (+0,17%)
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  //    border: "1px solid blue",
                  width: "95%",
                  marginTop: "-10px",
                  height: "200px",
                  position: "relative",
                  overflow: "hidden",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                tw=""
              >
                <Sparkline
                  color="#4ade80"
                  data={chartData}
                  height={195}
                  width={1080 - 140}
                  strokeWidth={4}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "28px",
                  //    border: "1px solid blue",
                  width: "100%",
                  height: "150px",
                  color: "white",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    // border: "1px solid blue",
                    width: "55%",
                    marginLeft: "-9px",
                    position: "relative",
                    height: "70%",
                    color: "white",
                    alignItems: "center",
                    justifyContent: "space-around",
                    paddingLeft: "12px",
                    paddingTop: "6px",
                  }}
                >
                  <p
                    style={{
                      //   position: "absolute",
                      //   top: "50%",
                      //   transform: "translate(0, -50%)",
                      marginLeft: "-4px",
                      fontWeight: 800,
                    }}
                    tw="text-[29px] pt-[9px]"
                  >
                    7.120
                  </p>
                  <p
                    style={{
                      //   position: "absolute",
                      //   top: "50%",
                      //   transform: "translate(0, -50%)",
                      fontWeight: 800,
                      marginLeft: "12px",
                    }}
                    tw="text-[29px] pt-[9px]"
                  >
                    7.165
                  </p>
                  <p
                    style={{
                      //   position: "absolute",
                      //   top: "50%",
                      //   transform: "translate(0, -50%)",
                      fontWeight: 800,
                      marginLeft: "20px",
                    }}
                    tw="text-[29px] pt-[9px]"
                  >
                    7.110
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    // border: "1px solid blue",
                    width: "35%",
                    position: "relative",
                    height: "70%",
                    color: "white",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "0px",
                    paddingBottom: "2px",
                    paddingTop: "4px",
                  }}
                >
                  <p
                    style={{
                      //   position: "absolute",
                      //   top: "50%",
                      //   transform: "translate(0, -50%)",
                      fontWeight: 800,
                      color: "#f87171",
                    }}
                    tw="text-[28px]"
                  >
                    Rp 15.650
                  </p>
                  <p style={{ marginTop: "12px" }}>
                    <ArrowDown
                      style={{
                        width: "1.5em",
                        height: "1.5em",
                        color: "#f87171",
                      }}
                    />
                    <span
                      tw="text-[#f87171] text-[18px]"
                      style={{ fontWeight: 700 }}
                    >
                      -15 (-0,10%)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- IHSG Main Card --> */}

          <div
            style={{
              display: "flex",
              marginLeft: "auto",
              marginRight: "auto",
              paddingTop: "228px",
              justifyContent: "space-between",
            }}
            tw="w-[93%] h-[690px]"
          >
            <div
              style={{
                display: "flex",
                //  border: "1px solid blue",
                height: "98%",
                width: "47.5%",
                flexDirection: "column",
              }}
              tw=""
            >
              <div
                style={{
                  display: "flex",
                  //    border: "1px solid yellow",
                  height: "20%",
                  width: "100%",
                  paddingLeft: "32px",
                  gap: "12px",
                  //    justifyContent: "space-around",
                  alignItems: "center",
                }}
                tw="text-[28px] "
              >
                <td style={{}} tw="px-4 text-gray-500">
                  1
                </td>
                <td tw="font-bold text-white" style={{ paddingLeft: "30px" }}>
                  BBCA
                </td>
                <td
                  style={{ paddingLeft: "108px" }}
                  tw="px-5 text-right text-[#4ade80] font-semibold"
                >
                  +3.50%
                </td>
              </div>
              <div
                style={{
                  display: "flex",
                  //    border: "1px solid yellow",
                  height: "20%",
                  width: "100%",
                  paddingLeft: "32px",
                  gap: "12px",
                  //    justifyContent: "space-around",
                  alignItems: "center",
                }}
                tw="text-[28px] "
              >
                <td style={{}} tw="px-4 text-gray-500">
                  1
                </td>
                <td tw="font-bold text-white" style={{ paddingLeft: "30px" }}>
                  BBCA
                </td>
                <td
                  style={{ paddingLeft: "108px" }}
                  tw="px-5 text-right text-[#4ade80] font-semibold"
                >
                  +3.50%
                </td>
              </div>
              <div
                style={{
                  display: "flex",
                  //    border: "1px solid yellow",
                  height: "20%",
                  width: "100%",
                  paddingLeft: "32px",
                  gap: "12px",
                  //    justifyContent: "space-around",
                  alignItems: "center",
                }}
                tw="text-[28px] "
              >
                <td style={{}} tw="px-4 text-gray-500">
                  1
                </td>
                <td tw="font-bold text-white" style={{ paddingLeft: "30px" }}>
                  BBCA
                </td>
                <td
                  style={{ paddingLeft: "108px" }}
                  tw="px-5 text-right text-[#4ade80] font-semibold"
                >
                  +3.50%
                </td>
              </div>
              <div
                style={{
                  display: "flex",
                  //    border: "1px solid yellow",
                  height: "20%",
                  width: "100%",
                  paddingLeft: "32px",
                  gap: "12px",
                  //    justifyContent: "space-around",
                  alignItems: "center",
                }}
                tw="text-[28px] "
              >
                <td style={{}} tw="px-4 text-gray-500">
                  1
                </td>
                <td tw="font-bold text-white" style={{ paddingLeft: "30px" }}>
                  BBCA
                </td>
                <td
                  style={{ paddingLeft: "108px" }}
                  tw="px-5 text-right text-[#4ade80] font-semibold"
                >
                  +3.50%
                </td>
              </div>
              <div
                style={{
                  display: "flex",
                  //    border: "1px solid yellow",
                  height: "20%",
                  width: "100%",
                  paddingLeft: "32px",
                  gap: "12px",
                  //    justifyContent: "space-around",
                  alignItems: "center",
                }}
                tw="text-[28px] "
              >
                <td style={{}} tw="px-4 text-gray-500">
                  1
                </td>
                <td tw="font-bold text-white" style={{ paddingLeft: "30px" }}>
                  BBCA
                </td>
                <td
                  style={{ paddingLeft: "108px" }}
                  tw="px-5 text-right text-[#4ade80] font-semibold"
                >
                  +3.50%
                </td>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                //  border: "1px solid blue",
                height: "98%",
                width: "47.5%",
                flexDirection: "column",
              }}
              tw=""
            >
              <div
                style={{
                  display: "flex",
                  //    border: "1px solid yellow",
                  height: "20%",
                  width: "100%",
                  paddingLeft: "32px",
                  gap: "12px",
                  //    justifyContent: "space-around",
                  alignItems: "center",
                }}
                tw="text-[28px] "
              >
                <td style={{}} tw="px-4 text-gray-500">
                  1
                </td>
                <td tw="font-bold text-white" style={{ paddingLeft: "30px" }}>
                  BBCA
                </td>
                <td
                  style={{ paddingLeft: "110px" }}
                  tw="px-5 text-right text-[#f87171] font-semibold"
                >
                  +3.50%
                </td>
              </div>
              <div
                style={{
                  display: "flex",
                  //    border: "1px solid yellow",
                  height: "20%",
                  width: "100%",
                  paddingLeft: "32px",
                  gap: "12px",
                  //    justifyContent: "space-around",
                  alignItems: "center",
                }}
                tw="text-[28px] "
              >
                <td style={{}} tw="px-4 text-gray-500">
                  1
                </td>
                <td tw="font-bold text-white" style={{ paddingLeft: "30px" }}>
                  BBCA
                </td>
                <td
                  style={{ paddingLeft: "110px" }}
                  tw="px-5 text-right text-[#f87171] font-semibold"
                >
                  +3.50%
                </td>
              </div>
              <div
                style={{
                  display: "flex",
                  //    border: "1px solid yellow",
                  height: "20%",
                  width: "100%",
                  paddingLeft: "32px",
                  gap: "12px",
                  //    justifyContent: "space-around",
                  alignItems: "center",
                }}
                tw="text-[28px] "
              >
                <td style={{}} tw="px-4 text-gray-500">
                  1
                </td>
                <td tw="font-bold text-white" style={{ paddingLeft: "30px" }}>
                  BBCA
                </td>
                <td
                  style={{ paddingLeft: "110px" }}
                  tw="px-5 text-right text-[#f87171] font-semibold"
                >
                  +3.50%
                </td>
              </div>
              <div
                style={{
                  display: "flex",
                  //    border: "1px solid yellow",
                  height: "20%",
                  width: "100%",
                  paddingLeft: "32px",
                  gap: "12px",
                  //    justifyContent: "space-around",
                  alignItems: "center",
                }}
                tw="text-[28px] "
              >
                <td style={{}} tw="px-4 text-gray-500">
                  1
                </td>
                <td tw="font-bold text-white" style={{ paddingLeft: "30px" }}>
                  BBCA
                </td>
                <td
                  style={{ paddingLeft: "110px" }}
                  tw="px-5 text-right text-[#f87171] font-semibold"
                >
                  +3.50%
                </td>
              </div>
              <div
                style={{
                  display: "flex",
                  //    border: "1px solid yellow",
                  height: "20%",
                  width: "100%",
                  paddingLeft: "32px",
                  gap: "12px",
                  //    justifyContent: "space-around",
                  alignItems: "center",
                }}
                tw="text-[28px] "
              >
                <td style={{}} tw="px-4 text-gray-500">
                  1
                </td>
                <td tw="font-bold text-white" style={{ paddingLeft: "30px" }}>
                  BBCA
                </td>
                <td
                  style={{ paddingLeft: "110px" }}
                  tw="px-5 text-right text-[#f87171] font-semibold"
                >
                  +3.50%
                </td>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              //     border: "2px solid red",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            tw="w-[80%] h-[300px]"
          >
            <p
              style={{
                fontStyle: "italic",
                fontWeight: 500,
                margin: "auto",
                textAlign: "center",
                color: "white",
                lineHeight: "1.5",
              }}
              tw="text-[44px] italic"
            >
              "Hari ini pasar lagi merah merona, waktunya cicil atau kabur?"
            </p>
          </div>
          <div
            style={{
              display: "flex",
              //     border: "2px solid red",
              justifyContent: "center",
              alignItems: "flex-end",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            tw="w-[92%] h-[60px]"
          >
            <p
              tw="text-[28px] text-gray-600 uppercase tracking-widest"
              style={{ margin: "" }}
            >
              {/* [Sumber Data] | [Waktu & Tanggal Update] */}
              Source: idx.co.id |{" "}
              {
                new Date()
                  .toLocaleString("id-ID", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })
                  .split(",")[0]
              }
            </p>
          </div>
        </div>
      </div>,
      {
        width: 1080,
        height: 1920,
        fonts: [
          { name: "Geist", data: geistRegular, weight: 400, style: "normal" },
          { name: "Geist", data: geistMedium, weight: 500, style: "normal" },
          {
            name: "Geist",
            data: geistMediumItalic,
            weight: 500,
            style: "italic",
          },
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
