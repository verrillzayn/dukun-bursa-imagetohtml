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
      <div tw="aspect-9/16 m-auto overflow-hidden">
        <div tw="min-h-screen bg-[#0d1117] text-white flex flex-col pt-4 relative">
          {/* <!-- Background --> */}

          <div tw="absolute bottom-0 left-0 right-0 top-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          <div tw="relative h-full w-full bg-slate-950">
            <div tw="absolute bottom-0 left-[-20%] right-0 top-[10%] h-125 w-125 rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            <div tw="absolute bottom-0 right-[-20%] top-[-10%] h-125 w-125 rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          </div>

          {/* <!-- Header Logo Area --> */}
          <div tw="px-2 mb-1 flex flex-col items-center justify-center space-x-3">
            <h1 tw="text-xl font-extrabold tracking-tight uppercase">
              Market Pulse
            </h1>
            <p tw="text-xs text-gray-400 tracking-wide">By Dukun Bursa</p>
          </div>
          {/* <!-- Market Summary Label --> */}
          <div tw="flex items-center justify-between mb-1 px-5">
            <div tw="h-px flex-1 bg-gray-500" />
            <div tw="flex items-center mx-2 space-x-2 text-gray-400 text-xs font-semibold tracking-widest uppercase">
              <Icons.TrendingUp tw="text-sm" />
              <span>Ringkasan Pasar</span>
            </div>
            <div tw="h-px flex-1 bg-gray-500" />
          </div>
          {/* <!-- Main Content Scrollable Area --> */}
          <main tw="flex-1 px-4 space-y-2">
            {/* <!-- IHSG Main Card --> */}
            <fieldset tw="bg-transparent backdrop-blur-xs border border-gray-800 rounded-xl p-3 pt-0 mb-2 relative">
              <legend tw="-ml-2.5 px-2 pb-0.5 text-gray-100 font-bold text-xs">
                IHSG Close
              </legend>

              <div tw="flex justify-between items-start mb-1">
                <div tw="pl-4">
                  <div tw="flex items-center space-x-2">
                    <span tw="text-2xl font-extrabold text-[#4ade80]">
                      7.150,23
                    </span>
                    <Icons.ArrowUpRight tw="size-5 text-[#4ade80]" />
                  </div>
                  <p tw="text-[#4ade80] text-[10px] font-medium mt-0.5">
                    ▲ +12,45 (+0,17%)
                  </p>
                </div>
              </div>

              <Sparkline
                color="#4ade80"
                data={chartData}
                height={56}
                width={324}
              />

              {/* <!-- Market Stats Bar --> */}
              <div tw="grid grid-cols-5 gap-2 mt-4">
                <div tw="bg-[#0d1117] px-2 pt-0.5 rounded-lg border border-gray-800 text-center">
                  <p tw="text-[8px] text-gray-500 uppercase">Open</p>
                  <p tw="text-[10px] font-bold">7.120</p>
                </div>
                <div tw="bg-[#0d1117] px-2 pt-0.5 rounded-lg border border-gray-800 text-center">
                  <p tw="text-[8px] text-gray-500 uppercase">High</p>
                  <p tw="text-[10px] font-bold">7.165</p>
                </div>
                <div tw="bg-[#0d1117] px-2 pt-0.5 rounded-lg border border-gray-800 text-center">
                  <p tw="text-[8px] text-gray-500 uppercase">Low</p>
                  <p tw="text-[10px] font-bold">7.110</p>
                </div>
                <fieldset tw="bg-[#0d1117] px-2 pt-0.5 pb-1 rounded-lg border border-gray-800 text-center col-span-2 relative -mt-1.5">
                  <legend tw="text-[8px] text-amber-500/80 font-bold uppercase px-1 -ml-4 flex items-center gap-0.5">
                    <Icons.Coins tw="text-amber-500/80 size-2" />
                    USD/IDR
                  </legend>
                  <p tw="text-[10px] text-[#f87171] font-bold">Rp 15.650</p>
                  <p tw="text-[#f87171] text-[6px] font-medium flex items-center justify-center space-x-0.5">
                    {/* <iconify-icon icon="lucide:arrow-down"></iconify-icon> */}
                    <Icons.ArrowDown tw="text-[#f87171] size-2" />
                    <span>-15 (-0,10%)</span>
                  </p>
                </fieldset>
              </div>
            </fieldset>

            <div tw="flex justify-between border-t border-gray-800 pt-2">
              {/* <!-- Top 10 Gainers --> */}
              <div tw="bg-[#161b22] border border-gray-800 rounded-md overflow-hidden">
                <div tw="bg-emerald-700 px-4 py-2 flex items-center space-x-2">
                  {/* <iconify-icon icon="lucide:trending-up" tw="text-white"></iconify-icon> */}
                  <Icons.TrendingUp tw="text-white size-4" />
                  <span tw="font-bold text-xs text-white uppercase tracking-tight">
                    Top Gainers
                  </span>
                </div>
                <table tw="w-full text-left">
                  <thead tw="text-[10px] uppercase text-gray-400 border-b border-gray-800">
                    <tr tw="">
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
              </div>

              {/* <!-- Top 10 Losers --> */}
              <div tw="bg-[#161b22] border border-gray-800 rounded-md overflow-hidden">
                <div tw="bg-[#ef4444] px-4 py-2 flex items-center space-x-2">
                  {/* <iconify-icon icon="lucide:trending-down" tw="text-white"></iconify-icon> */}
                  <Icons.TrendingDown tw="text-white size-4" />
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
              </div>
            </div>

            {/* <!-- Quotes --> */}
            <div tw="mt-8 px-4 flex">
              {/* <span tw="border-l-2 mr-4" /> */}
              <p tw="italic text-center">
                "Hari ini pasar lagi merah merona, waktunya cicil atau kabur?"
              </p>
            </div>
          </main>
          {/* <!-- Footer Info --> */}
          <footer tw="text-center pt-2 pb-6 mx-auto">
            <p tw="text-[10px] text-gray-600 uppercase tracking-widest">
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
          </footer>
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
