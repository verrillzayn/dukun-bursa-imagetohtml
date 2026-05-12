/** biome-ignore-all lint/performance/noImgElement: explanation */
export const runtime = "edge";
export const revalidate = 0;
export const dynamic = "force-dynamic";

import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import {
  ArrowDown,
  ArrowUpRight,
} from "@/app/api/generate/_components/render-icon";
import {
  buildMarketDataFromGet,
  buildMarketDataFromPost,
} from "@/app/api/generate/_utils/market-data";
import { Sparkline } from "@/components/chart2";
import { type MarketMover, MOCK_MARKET_PULSE } from "@/lib/data";

const IMAGE_WIDTH = 1080;
const IMAGE_HEIGHT = 1920;
const CHART_WIDTH = IMAGE_WIDTH - 140;
const CHART_HEIGHT = 195;
const POSITIVE_COLOR = "#4ade80";
const NEGATIVE_COLOR = "#f87171";
// const AI_TEXT = "Hari ini pasar lagi merah merona, waktunya cicil atau kabur?";

const isNegative = (value: string) => value.includes("-");

const loadAsset = async (path: string, origin: string) => {
  const res = await fetch(new URL(path, origin));
  if (!res.ok) {
    throw new Error(`Failed to load asset ${path}: ${res.status}`);
  }
  return res.arrayBuffer();
};

const renderMoverRow = (
  mover: MarketMover,
  index: number,
  accentColor: string,
  valuePaddingLeft: string,
) => (
  <div
    key={`${mover.ticker}-${index}`}
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
    <td style={{ width: "4rem" }} tw="px-4 text-gray-500">
      {index + 1}
    </td>
    <td
      tw="font-bold text-white"
      style={{
        paddingLeft: "10px",
        width: "9rem",
      }}
    >
      {mover.ticker}
    </td>
    <td
      style={{
        paddingLeft: valuePaddingLeft,
        color: accentColor,
      }}
      tw="px-5 text-right font-semibold"
    >
      {mover.changePercent}
    </td>
  </div>
);

const handleRequest = async (req: NextRequest, method: "GET" | "POST") => {
  const origin = req.nextUrl.origin;
  const marketData =
    method === "POST"
      ? await buildMarketDataFromPost(req, MOCK_MARKET_PULSE)
      : buildMarketDataFromGet(req, MOCK_MARKET_PULSE);

  const { ihsg, fx, topGainers, topLosers, chartData, aiText, dateStr } =
    marketData;
  const ihsgIsUp = !isNegative(ihsg.change) && !isNegative(ihsg.changePercent);
  const ihsgColor = ihsgIsUp ? POSITIVE_COLOR : NEGATIVE_COLOR;
  const IhsgIcon = ihsgIsUp ? ArrowUpRight : ArrowDown;
  const ihsgChangeText = `${
    ihsgIsUp ? "▲" : "▼"
  } ${ihsg.change} (${ihsg.changePercent})`;

  const fxIsUp = isNegative(fx.change) && isNegative(fx.changePercent);
  const fxColor = fxIsUp ? POSITIVE_COLOR : NEGATIVE_COLOR;
  const FxIcon = !fxIsUp ? ArrowUpRight : ArrowDown;
  const fxChangeText = `${fx.change} (${fx.changePercent})`;

  const bgImageUrl = new URL("/test-bg.png", origin).toString();

  try {
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
      loadAsset("/fonts/Geist/ttf/Geist-Regular.ttf", origin),
      loadAsset("/fonts/Geist/ttf/Geist-Medium.ttf", origin),
      loadAsset("/fonts/Geist/ttf/Geist-MediumItalic.ttf", origin),
      loadAsset("/fonts/Geist/ttf/Geist-Bold.ttf", origin),
      loadAsset("/fonts/Geist/ttf/Geist-Italic.ttf", origin),
      loadAsset("/fonts/Geist/ttf/Geist-BoldItalic.ttf", origin),
      loadAsset("/fonts/Geist/ttf/Geist-ExtraBold.ttf", origin),
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
                    <span
                      tw="text-[68px] font-extrabold"
                      style={{ color: ihsgColor }}
                    >
                      {ihsg.value}
                    </span>
                    <IhsgIcon
                      style={{
                        width: "3.5rem",
                        height: "3.5rem",
                        marginLeft: "0.5rem",
                        color: ihsgColor,
                      }}
                    />
                  </div>
                  <p
                    tw="text-[28px] font-medium mt-0.5"
                    style={{ color: ihsgColor }}
                  >
                    {ihsgChangeText}
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
                  color={ihsgColor}
                  data={chartData}
                  height={CHART_HEIGHT}
                  width={CHART_WIDTH}
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
                    {ihsg.open}
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
                    {ihsg.high}
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
                    {ihsg.low}
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
                      color: fxColor,
                    }}
                    tw="text-[28px]"
                  >
                    {fx.value}
                  </p>
                  <p style={{ marginTop: "12px" }}>
                    <FxIcon
                      style={{
                        width: "1.5em",
                        height: "1.5em",
                        color: fxColor,
                      }}
                    />
                    <span
                      tw="text-[18px]"
                      style={{ fontWeight: 700, color: fxColor }}
                    >
                      {fxChangeText}
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
              {topGainers
                .slice(0, 5)
                .map((mover, index) =>
                  renderMoverRow(mover, index, POSITIVE_COLOR, "60px"),
                )}
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
              {topLosers
                .slice(0, 5)
                .map((mover, index) =>
                  renderMoverRow(mover, index, NEGATIVE_COLOR, "60px"),
                )}
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
              "{aiText}"
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
              {/* {
                new Date()
                  .toLocaleString("id-ID", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })
                  .split(",")[0]
              } */}
              {dateStr}
            </p>
          </div>
        </div>
      </div>,
      {
        width: IMAGE_WIDTH,
        height: IMAGE_HEIGHT,
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
  } catch (error: unknown) {
    console.log({ error });

    return new Response(`Failed to generate image`, { status: 500 });
  }
};

export async function GET(req: NextRequest) {
  return handleRequest(req, "GET");
}

export async function POST(req: NextRequest) {
  return handleRequest(req, "POST");
}
