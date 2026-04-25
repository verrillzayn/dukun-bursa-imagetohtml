import {
  ArrowDown,
  ArrowUpRight,
  Coins,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { Sparkline } from "@/components/chart2";
import { IHSGChart } from "@/components/ihsg-chart";

const chartData = [186, 305, 237, 73, 209, 214];

const Page = () => {
  return (
    <div className="h-[99vh] aspect-9/16 m-auto overflow-hidden">
      <div className="min-h-screen bg-[#0d1117] text-white flex flex-col pt-4 relative">
        {/* <!-- Background --> */}

        <div className="absolute bottom-0 left-0 right-0 top-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-[-20%] right-0 top-[10%] h-125 w-125 rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-125 w-125 rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>

        {/* <!-- Header Logo Area --> */}
        <div className="px-2 mb-1 flex flex-col items-center justify-center space-x-3">
          <h1 className="text-xl font-extrabold tracking-tight uppercase">
            Market Pulse
          </h1>
          <p className="text-xs text-gray-400 tracking-wide">By Dukun Bursa</p>
        </div>
        {/* <!-- Market Summary Label --> */}
        <div className="flex items-center justify-between mb-1 px-5">
          <div className="h-px flex-1 bg-gray-500" />
          <div className="flex items-center mx-2 space-x-2 text-gray-400 text-xs font-semibold tracking-widest uppercase">
            <TrendingUp className="text-sm" />
            <span>Ringkasan Pasar</span>
          </div>
          <div className="h-px flex-1 bg-gray-500" />
        </div>
        {/* <!-- Main Content Scrollable Area --> */}
        <main className="flex-1 px-4 space-y-2">
          {/* <!-- IHSG Main Card --> */}
          <fieldset className="bg-transparent backdrop-blur-xs border border-gray-800 rounded-xl p-3 pt-0 mb-2 relative">
            <legend className="-ml-2.5 px-2 pb-0.5 text-gray-100 font-bold text-xs">
              IHSG Close
            </legend>

            <div className="flex justify-between items-start mb-1">
              <div className="pl-4">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-extrabold text-[#4ade80]">
                    7.150,23
                  </span>
                  <ArrowUpRight className="size-5 text-[#4ade80]" />
                </div>
                <p className="text-[#4ade80] text-[10px] font-medium mt-0.5">
                  ▲ +12,45 (+0,17%)
                </p>
              </div>
            </div>

            <IHSGChart />
            <Sparkline
              color="#4ade80"
              data={chartData}
              height={56}
              width={324}
            />

            {/* <!-- Market Stats Bar --> */}
            <div className="grid grid-cols-5 gap-2 mt-4">
              <div className="bg-[#0d1117] px-2 pt-0.5 rounded-lg border border-gray-800 text-center">
                <p className="text-[8px] text-gray-500 uppercase">Open</p>
                <p className="text-[10px] font-bold">7.120</p>
              </div>
              <div className="bg-[#0d1117] px-2 pt-0.5 rounded-lg border border-gray-800 text-center">
                <p className="text-[8px] text-gray-500 uppercase">High</p>
                <p className="text-[10px] font-bold">7.165</p>
              </div>
              <div className="bg-[#0d1117] px-2 pt-0.5 rounded-lg border border-gray-800 text-center">
                <p className="text-[8px] text-gray-500 uppercase">Low</p>
                <p className="text-[10px] font-bold">7.110</p>
              </div>
              <fieldset className="bg-[#0d1117] px-2 pt-0.5 pb-1 rounded-lg border border-gray-800 text-center col-span-2 relative -mt-1.5">
                <legend className="text-[8px] text-amber-500/80 font-bold uppercase px-1 -ml-4 flex items-center gap-0.5">
                  <Coins className="text-amber-500/80 size-2" />
                  USD/IDR
                </legend>
                <p className="text-[10px] text-[#f87171] font-bold">
                  Rp 15.650
                </p>
                <p className="text-[#f87171] text-[6px] font-medium flex items-center justify-center space-x-0.5">
                  {/* <iconify-icon icon="lucide:arrow-down"></iconify-icon> */}
                  <ArrowDown className="text-[#f87171] size-2" />
                  <span>-15 (-0,10%)</span>
                </p>
              </fieldset>
            </div>
          </fieldset>

          <div className="flex justify-between border-t border-gray-800 pt-2">
            {/* <!-- Top 10 Gainers --> */}
            <div className="bg-[#161b22] border border-gray-800 rounded-md overflow-hidden">
              <div className="bg-emerald-700 px-4 py-2 flex items-center space-x-2">
                {/* <iconify-icon icon="lucide:trending-up" className="text-white"></iconify-icon> */}
                <TrendingUp className="text-white size-4" />
                <span className="font-bold text-xs text-white uppercase tracking-tight">
                  Top Gainers
                </span>
              </div>
              <table className="w-full text-left">
                <thead className="text-[10px] uppercase text-gray-400 border-b border-gray-800">
                  <tr className="">
                    <th className="py-2 px-4">#</th>
                    <th className="py-2">Symbol</th>
                    <th className="py-2 px-4 text-right">Change %</th>
                  </tr>
                </thead>
                <tbody className="text-[10px]">
                  <tr className="border-b border-gray-800/50">
                    <td className="py-2 px-4 text-gray-500">1</td>
                    <td className="py-2 pl-1 font-bold">BBCA</td>
                    <td className="py-2 px-5 text-right text-[#4ade80] font-semibold">
                      +3.50%
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-2 px-4 text-gray-500">2</td>
                    <td className="py-2 pl-1 font-bold">TLKM</td>
                    <td className="py-2 px-5 text-right text-[#4ade80] font-semibold">
                      +2.80%
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-2 px-4 text-gray-500">3</td>
                    <td className="py-2 pl-1 font-bold">UNVR</td>
                    <td className="py-2 px-5 text-right text-[#4ade80] font-semibold">
                      +2.80%
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-2 px-4 text-gray-500">4</td>
                    <td className="py-2 pl-1 font-bold">BBTA</td>
                    <td className="py-2 px-5 text-right text-[#4ade80] font-semibold">
                      +1.50%
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-2 px-4 text-gray-500">5</td>
                    <td className="py-2 pl-1 font-bold">TREM</td>
                    <td className="py-2 px-5 text-right text-[#4ade80] font-semibold">
                      +1.50%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* <!-- Top 10 Losers --> */}
            <div className="bg-[#161b22] border border-gray-800 rounded-md overflow-hidden">
              <div className="bg-[#ef4444] px-4 py-2 flex items-center space-x-2">
                {/* <iconify-icon icon="lucide:trending-down" className="text-white"></iconify-icon> */}
                <TrendingDown className="text-white size-4" />
                <span className="font-bold text-xs text-white uppercase tracking-tight">
                  Top Losers
                </span>
              </div>
              <table className="w-full text-left">
                <thead className="text-[10px] uppercase text-gray-400 border-b border-gray-800">
                  <tr>
                    <th className="py-2 px-4">#</th>
                    <th className="py-2">Symbol</th>
                    <th className="py-2 px-4 text-right">Change %</th>
                  </tr>
                </thead>
                <tbody className="text-[10px]">
                  <tr className="border-b border-gray-800/50">
                    <td className="py-2 px-4 text-gray-500">1</td>
                    <td className="py-2 pl-1 font-bold">GOTO</td>
                    <td className="py-2 px-5 text-right text-[#f87171] font-semibold">
                      -4.20%
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-2 px-4 text-gray-500">2</td>
                    <td className="py-2 pl-1 font-bold">ASII</td>
                    <td className="py-2 px-5 text-right text-[#f87171] font-semibold">
                      -3.20%
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-2 px-4 text-gray-500">3</td>
                    <td className="py-2 pl-1 font-bold">BBCA</td>
                    <td className="py-2 px-5 text-right text-[#f87171] font-semibold">
                      -4.20%
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-2 px-4 text-gray-500">4</td>
                    <td className="py-2 pl-1 font-bold">BBTO</td>
                    <td className="py-2 px-5 text-right text-[#f87171] font-semibold">
                      -4.20%
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-2 px-4 text-gray-500">5</td>
                    <td className="py-2 pl-1 font-bold">KIJA</td>
                    <td className="py-2 px-5 text-right text-[#f87171] font-semibold">
                      -4.20%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* <!-- Quotes --> */}
          <div className="mt-8 px-4 flex">
            {/* <span className="border-l-2 mr-4" /> */}
            <p className="italic text-center">
              "Hari ini pasar lagi merah merona, waktunya cicil atau kabur?"
            </p>
          </div>
        </main>
        {/* <!-- Footer Info --> */}
        <footer className="text-center pt-2 pb-6 mx-auto">
          <p className="text-[10px] text-gray-600 uppercase tracking-widest">
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
    </div>
  );
};

export default Page;
