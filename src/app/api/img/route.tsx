/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */
import { ImageResponse } from "@vercel/og";

import type { NextRequest } from "next/server";
import { Sparkline } from "@/components/chart2";
import { Icons } from "@/components/icons/render-icons";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const chartData = [186, 305, 237, 73, 209, 214];

  try {
    return new ImageResponse(
      // Bagian ini adalah desain shadcn/Tailwind kamu
      // Gunakan dimensi 9:16 (1080x1920) untuk Story atau 1:1 (1080x1080) untuk Feed
      <div
        tw="m-auto overflow-hidden flex flex-col"
        style={{ width: "1080px", height: "1920px" }}
      >
        <div
          style={{
            minHeight: "100vh",
            backgroundColor: "#000",
            color: "#ffffff",
            display: "flex",
            flexDirection: "column",
            paddingTop: "1rem",
            position: "relative",
          }}
        >
          {/* <!-- Background --> */}
          {/* <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              top: 0,
              zIndex: 0,
              backgroundImage:
                "linear-gradient(to right, #4f4f4f2e 1px, transparent 1px), linear-gradient(to bottom, #4f4f4f2e 1px, transparent 1px)",
              backgroundSize: "14px 24px",
              maskImage:
                "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
            }}
          /> */}
          <div
            tw="bottom-0 left-0 right-0 top-0"
            style={{
              backgroundColor: "#0d1117",
              display: "contents",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "-10%",
                top: "20%",
                width: 1000,
                height: 1000,
                borderRadius: 9999,
                backgroundImage:
                  "radial-gradient(circle farthest-side, rgba(255, 0, 182, 0.15), rgba(255, 255, 255, 0))",
              }}
            />
            <div
              style={{
                position: "absolute",
                // bottom: 0,
                right: "-10%",
                top: "5%",
                width: 1000,
                height: 1000,
                borderRadius: 9999,
                backgroundImage:
                  "radial-gradient(circle farthest-side, rgba(255, 0, 182, 0.15), rgba(255, 255, 255, 0))",
              }}
            />
          </div>
        </div>
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

const asd = `


<div tw="relative flex flex-1 flex-col">
            {/* <!-- Header Logo Area --> */}
            <div tw="px-2 mb-1 flex flex-col items-center justify-center">
              <h1 tw="text-5xl font-extrabold tracking-tight uppercase">
                Market Pulse
              </h1>
              <p tw="text-xs text-gray-400 tracking-wide">By Dukun Bursa</p>
            </div>
            {/* <!-- Market Summary Label --> */}
            <div tw="flex items-center justify-between mb-1 px-5">
              <div tw="h-px flex-1 bg-gray-500" />
              <div tw="flex items-center mx-2 text-gray-400 text-xs font-semibold tracking-widest uppercase">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  tw="text-sm"
                  style={{ marginRight: 8 }}
                >
                  <path d="M16 7h6v6" />
                  <path d="m22 7-8.5 8.5-5-5L2 17" />
                </svg>
                <span>Ringkasan Pasar</span>
              </div>
              <div tw="h-px flex-1 bg-gray-500" />
            </div>
            {/* <!-- Main Content Scrollable Area --> */}
            <main tw="flex-1 px-4 flex flex-col">
              {/* <!-- IHSG Main Card --> */}
              <fieldset tw="bg-transparent border border-gray-800 rounded-xl p-3 pt-0 mb-2 relative">
                <legend tw="-ml-2.5 px-2 pb-0.5 text-gray-100 font-bold text-xs">
                  IHSG Close
                </legend>

                <div tw="flex justify-between items-start mb-1">
                  <div tw="pl-4 flex flex-col">
                    <div tw="flex items-center">
                      <span tw="text-2xl font-extrabold text-[#4ade80]">
                        7.150,23
                      </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        tw="text-[#4ade80]"
                        style={{ marginLeft: 8, width: 20, height: 20 }}
                      >
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </div>
                    <p tw="text-[#4ade80] text-[10px] font-medium mt-0.5">
                      ▲ +12,45 (+0,17%)
                    </p>
                  </div>
                </div>

                <svg width="324" height="56" style="display: flex;">
                  <title>Sparkline Chart</title>
                  <defs>
                    <linearGradient
                      id="chartGradient"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        stop-color="#4ade80"
                        stop-opacity="0.4"
                      ></stop>
                      <stop
                        offset="100%"
                        stop-color="#4ade80"
                        stop-opacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 28.724137931034484 Q 0 28.724137931034484, 32.4 14.362068965517242 Q 64.8 0, 97.19999999999999 8.206896551724139 Q 129.6 16.413793103448278, 162 36.20689655172414 Q 194.4 56, 226.8 39.58620689655173 Q 259.2 23.172413793103452, 291.6 22.56896551724138 L 324 21.96551724137931 L 324 56 L 0 56 Z"
                    fill="url(#chartGradient)"
                    stroke="none"
                  ></path>
                  <path
                    d="M 0 28.724137931034484 Q 0 28.724137931034484, 32.4 14.362068965517242 Q 64.8 0, 97.19999999999999 8.206896551724139 Q 129.6 16.413793103448278, 162 36.20689655172414 Q 194.4 56, 226.8 39.58620689655173 Q 259.2 23.172413793103452, 291.6 22.56896551724138 L 324 21.96551724137931"
                    fill="none"
                    stroke="#4ade80"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>

                {/* <!-- Market Stats Bar --> */}
                <div tw="flex mt-4">
                  <div
                    tw="bg-[#0d1117] px-2 pt-0.5 rounded-lg border border-gray-800 text-center flex flex-col"
                    style={{ width: "19%", marginRight: 8 }}
                  >
                    <p tw="text-[8px] text-gray-500 uppercase">Open</p>
                    <p tw="text-[10px] font-bold">7.120</p>
                  </div>
                  <div
                    tw="bg-[#0d1117] px-2 pt-0.5 rounded-lg border border-gray-800 text-center flex flex-col"
                    style={{ width: "19%", marginRight: 8 }}
                  >
                    <p tw="text-[8px] text-gray-500 uppercase">High</p>
                    <p tw="text-[10px] font-bold">7.165</p>
                  </div>
                  <div
                    tw="bg-[#0d1117] px-2 pt-0.5 rounded-lg border border-gray-800 text-center flex flex-col"
                    style={{ width: "19%", marginRight: 8 }}
                  >
                    <p tw="text-[8px] text-gray-500 uppercase">Low</p>
                    <p tw="text-[10px] font-bold">7.110</p>
                  </div>
                  <fieldset
                    tw="bg-[#0d1117] px-2 pt-0.5 pb-1 rounded-lg border border-gray-800 text-center relative"
                    style={{ width: "40%", marginTop: -6 }}
                  >
                    <legend tw="text-[8px] text-amber-500 font-bold uppercase px-1 -ml-4 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        tw="text-amber-500"
                        style={{ width: 8, height: 8, marginRight: 2 }}
                      >
                        <path d="M13.744 17.736a6 6 0 1 1-7.48-7.48" />
                        <path d="M15 6h1v4" />
                        <path d="m6.134 14.768.866-.5 2 3.464" />
                        <circle cx="16" cy="8" r="6" />
                      </svg>
                      USD/IDR
                    </legend>
                    <p tw="text-[10px] text-[#f87171] font-bold">Rp 15.650</p>
                    <p tw="text-[#f87171] text-[6px] font-medium flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        tw="text-[#f87171]"
                        style={{ width: 8, height: 8, marginRight: 2 }}
                      >
                        <path d="M12 5v14" />
                        <path d="m19 12-7 7-7-7" />
                      </svg>
                      <span>-15 (-0,10%)</span>
                    </p>
                  </fieldset>
                </div>
              </fieldset>

              <div tw="flex justify-between border-t border-gray-800 pt-2">
                {/* <!-- Top 10 Gainers --> */}
                {/* <div
                  tw="bg-[#161b22] border border-gray-800 rounded-md overflow-hidden flex flex-col"
                  style={{ width: "49%" }}
                >
                  <div tw="bg-emerald-700 px-4 py-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      tw="text-white"
                      style={{ width: 16, height: 16, marginRight: 8 }}
                    >
                      <path d="M16 7h6v6" />
                      <path d="m22 7-8.5 8.5-5-5L2 17" />
                    </svg>
                    <span tw="font-bold text-xs text-white uppercase tracking-tight">
                      Top Gainers
                    </span>
                  </div>
                  <table tw="w-full text-left">
                    <thead tw="text-[10px] uppercase text-gray-400 border-b border-gray-800">
                      <tr>
                        <th tw="py-2 px-4">#</th>
                        <th tw="py-2">Symbol</th>
                        <th tw="py-2 px-4 text-right">Change %</th>
                      </tr>
                    </thead>
                    <tbody tw="text-[10px]">
                      <tr tw="border-b border-gray-800/50">
                        <td tw="py-2 px-4 text-gray-500">1</td>
                        <td tw="py-2 pl-1 font-bold">BBCA</td>
                        <td tw="py-2 px-5 text-right text-[#4ade80] font-semibold">
                          +3.50%
                        </td>
                      </tr>
                      <tr tw="border-b border-gray-800/50">
                        <td tw="py-2 px-4 text-gray-500">2</td>
                        <td tw="py-2 pl-1 font-bold">TLKM</td>
                        <td tw="py-2 px-5 text-right text-[#4ade80] font-semibold">
                          +2.80%
                        </td>
                      </tr>
                      <tr tw="border-b border-gray-800/50">
                        <td tw="py-2 px-4 text-gray-500">3</td>
                        <td tw="py-2 pl-1 font-bold">UNVR</td>
                        <td tw="py-2 px-5 text-right text-[#4ade80] font-semibold">
                          +2.80%
                        </td>
                      </tr>
                      <tr tw="border-b border-gray-800/50">
                        <td tw="py-2 px-4 text-gray-500">4</td>
                        <td tw="py-2 pl-1 font-bold">BBTA</td>
                        <td tw="py-2 px-5 text-right text-[#4ade80] font-semibold">
                          +1.50%
                        </td>
                      </tr>
                      <tr tw="border-b border-gray-800/50">
                        <td tw="py-2 px-4 text-gray-500">5</td>
                        <td tw="py-2 pl-1 font-bold">TREM</td>
                        <td tw="py-2 px-5 text-right text-[#4ade80] font-semibold">
                          +1.50%
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div> */}

                {/* <!-- Top 10 Losers --> */}
                {/* <div
                  tw="bg-[#161b22] border border-gray-800 rounded-md overflow-hidden flex flex-col"
                  style={{ width: "49%" }}
                >
                  <div tw="bg-[#ef4444] px-4 py-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      tw="text-white"
                      style={{ width: 16, height: 16, marginRight: 8 }}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 17h6v-6" />
                      <path d="m22 17-8.5-8.5-5 5L2 7" />
                    </svg>
                    <span tw="font-bold text-xs text-white uppercase tracking-tight">
                      Top Losers
                    </span>
                  </div>
                  <table tw="w-full text-left">
                    <thead tw="text-[10px] uppercase text-gray-400 border-b border-gray-800">
                      <tr>
                        <th tw="py-2 px-4">#</th>
                        <th tw="py-2">Symbol</th>
                        <th tw="py-2 px-4 text-right">Change %</th>
                      </tr>
                    </thead>
                    <tbody tw="text-[10px]">
                      <tr tw="border-b border-gray-800/50">
                        <td tw="py-2 px-4 text-gray-500">1</td>
                        <td tw="py-2 pl-1 font-bold">GOTO</td>
                        <td tw="py-2 px-5 text-right text-[#f87171] font-semibold">
                          -4.20%
                        </td>
                      </tr>
                      <tr tw="border-b border-gray-800/50">
                        <td tw="py-2 px-4 text-gray-500">2</td>
                        <td tw="py-2 pl-1 font-bold">ASII</td>
                        <td tw="py-2 px-5 text-right text-[#f87171] font-semibold">
                          -3.20%
                        </td>
                      </tr>
                      <tr tw="border-b border-gray-800/50">
                        <td tw="py-2 px-4 text-gray-500">3</td>
                        <td tw="py-2 pl-1 font-bold">BBCA</td>
                        <td tw="py-2 px-5 text-right text-[#f87171] font-semibold">
                          -4.20%
                        </td>
                      </tr>
                      <tr tw="border-b border-gray-800/50">
                        <td tw="py-2 px-4 text-gray-500">4</td>
                        <td tw="py-2 pl-1 font-bold">BBTO</td>
                        <td tw="py-2 px-5 text-right text-[#f87171] font-semibold">
                          -4.20%
                        </td>
                      </tr>
                      <tr tw="border-b border-gray-800/50">
                        <td tw="py-2 px-4 text-gray-500">5</td>
                        <td tw="py-2 pl-1 font-bold">KIJA</td>
                        <td tw="py-2 px-5 text-right text-[#f87171] font-semibold">
                          -4.20%
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div> */}
              </div>

              {/* <!-- Quotes --> */}
              <div tw="mt-8 px-4 flex">
                <p tw="italic text-center">
                  "Hari ini pasar lagi merah merona, waktunya cicil atau kabur?"
                </p>
              </div>
            </main>
            {/* <!-- Footer Info --> */}
            <footer tw="text-center pt-2 pb-6 mx-auto">
              <p tw="text-[10px] text-gray-600 uppercase tracking-widest">
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
            </footer>
          </div>
`;
