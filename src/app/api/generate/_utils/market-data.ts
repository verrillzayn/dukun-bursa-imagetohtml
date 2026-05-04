import type { NextRequest } from "next/server";
import type { MarketMover, MarketPulseData } from "@/lib/data";

export type MarketPulseInput = Partial<Omit<MarketPulseData, "ihsg" | "fx">> & {
  ihsg?: Partial<MarketPulseData["ihsg"]>;
  fx?: Partial<MarketPulseData["fx"]>;
  aiText?: string;
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const pickString = (value: unknown): string | undefined =>
  typeof value === "string" ? value : undefined;

const normalizeMovers = (value: unknown): MarketMover[] | undefined => {
  if (!Array.isArray(value)) return undefined;

  const movers = value
    .filter(isRecord)
    .map((item) => {
      const ticker = pickString(item.ticker);
      const changePercent = pickString(item.changePercent);

      if (!ticker || !changePercent) return null;
      return { ticker, changePercent };
    })
    .filter(Boolean) as MarketMover[];

  return movers.length ? movers : undefined;
};

const normalizeChartData = (value: unknown): number[] | undefined => {
  if (!Array.isArray(value)) return undefined;
  const points = value.filter(
    (item): item is number => typeof item === "number" && Number.isFinite(item),
  );

  return points.length ? points : undefined;
};

const mergeMarketData = (
  base: MarketPulseData,
  input: MarketPulseInput | null,
): MarketPulseData => {
  if (!input) return base;

  const ihsgInput = isRecord(input.ihsg) ? input.ihsg : undefined;
  const fxInput = isRecord(input.fx) ? input.fx : undefined;

  return {
    ...base,
    title: pickString(input.title) ?? base.title,
    ihsg: {
      ...base.ihsg,
      label: pickString(ihsgInput?.label) ?? base.ihsg.label,
      value: pickString(ihsgInput?.value) ?? base.ihsg.value,
      change: pickString(ihsgInput?.change) ?? base.ihsg.change,
      changePercent:
        pickString(ihsgInput?.changePercent) ?? base.ihsg.changePercent,
      open: pickString(ihsgInput?.open) ?? base.ihsg.open,
      high: pickString(ihsgInput?.high) ?? base.ihsg.high,
      low: pickString(ihsgInput?.low) ?? base.ihsg.low,
    },
    fx: {
      ...base.fx,
      label: pickString(fxInput?.label) ?? base.fx.label,
      value: pickString(fxInput?.value) ?? base.fx.value,
      change: pickString(fxInput?.change) ?? base.fx.change,
      changePercent:
        pickString(fxInput?.changePercent) ?? base.fx.changePercent,
    },
    topGainers: normalizeMovers(input.topGainers) ?? base.topGainers,
    topLosers: normalizeMovers(input.topLosers) ?? base.topLosers,
    chartData: normalizeChartData(input.chartData) ?? base.chartData,
    aiText: pickString(input.aiText) ?? base.aiText,
    dateStr: pickString(input.dateStr) ?? base.dateStr,
  };
};

const parseJsonBody = async (
  req: NextRequest,
): Promise<MarketPulseInput | null> => {
  const contentType = req.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return null;

  try {
    return (await req.json()) as MarketPulseInput;
  } catch {
    return null;
  }
};

export const buildMarketDataFromGet = (
  req: NextRequest,
  base: MarketPulseData,
): MarketPulseData => {
  const { searchParams } = new URL(req.url);
  const judul = searchParams.get("judul") ?? undefined;
  const harga = searchParams.get("harga") ?? undefined;
  const perubahan = searchParams.get("perubahan") ?? undefined;

  const overrides: MarketPulseInput = {};
  const ihsgOverrides: Partial<MarketPulseData["ihsg"]> = {};

  if (judul) {
    overrides.title = judul;
  }

  if (harga) {
    ihsgOverrides.value = harga;
  }

  if (perubahan) {
    ihsgOverrides.changePercent = perubahan;
  }

  if (Object.keys(ihsgOverrides).length > 0) {
    overrides.ihsg = ihsgOverrides;
  }

  return mergeMarketData(base, overrides);
};

export const buildMarketDataFromPost = async (
  req: NextRequest,
  base: MarketPulseData,
): Promise<MarketPulseData> => {
  const body = await parseJsonBody(req);
  return mergeMarketData(base, body);
};
