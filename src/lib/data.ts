export const MOCK_DATA = {
  IHSG: {
    label: "Indeks Harga Saham Gabungan",

    open: "6,000",
    close: "6,100",
    high: "6,150",
    low: "5,900",
    change: "+100",
    changePercent: "+1.5%",
  },
  kurs: {
    label: "Kurs Rupiah",
    value: "14,000",
    change: "+200",
    changePercent: "+1.4%",
    BIMid: "14,000",
    BIAsk: "14,100",
    BIBid: "13,900",
  },
  topGainers: [
    { ticker: "BBCA", changePercent: "+3.5%", price: "30,000" },
    { ticker: "TLKM", changePercent: "+2.8%", price: "4,000" },
    { ticker: "ASII", changePercent: "+2.5%", price: "7,000" },
    { ticker: "BBCA", changePercent: "+3.5%", price: "30,000" },
    { ticker: "TLKM", changePercent: "+2.8%", price: "4,000" },
    { ticker: "ASII", changePercent: "+2.5%", price: "7,000" },
    { ticker: "BBCA", changePercent: "+3.5%", price: "30,000" },
    { ticker: "TLKM", changePercent: "+2.8%", price: "4,000" },
    { ticker: "ASII", changePercent: "+2.5%", price: "7,000" },
    { ticker: "ASII", changePercent: "+2.5%", price: "7,000" },
  ],
  topLosers: [
    { ticker: "BBCA", changePercent: "+3.5%", price: "30,000" },
    { ticker: "TLKM", changePercent: "+2.8%", price: "4,000" },
    { ticker: "ASII", changePercent: "+2.5%", price: "7,000" },
    { ticker: "BBCA", changePercent: "+3.5%", price: "30,000" },
    { ticker: "TLKM", changePercent: "+2.8%", price: "4,000" },
    { ticker: "ASII", changePercent: "+2.5%", price: "7,000" },
    { ticker: "BBCA", changePercent: "+3.5%", price: "30,000" },
    { ticker: "TLKM", changePercent: "+2.8%", price: "4,000" },
    { ticker: "ASII", changePercent: "+2.5%", price: "7,000" },
    { ticker: "ASII", changePercent: "+2.5%", price: "7,000" },
  ],
};

export const MOCK_DATA2 = {};
export type MarketIndexSummary = {
  label: string;
  value: string;
  change: string;
  changePercent: string;
  open: string;
  high: string;
  low: string;
};

export type MarketFxSummary = {
  label: string;
  value: string;
  change: string;
  changePercent: string;
};

export type MarketMover = {
  ticker: string;
  changePercent: string;
};

export type MarketPulseData = {
  title: string;
  ihsg: MarketIndexSummary;
  fx: MarketFxSummary;
  topGainers: MarketMover[];
  topLosers: MarketMover[];
  chartData: number[];
};

export const MOCK_MARKET_PULSE: MarketPulseData = {
  title: "Update IHSG",
  ihsg: {
    label: "Indeks Harga Saham Gabungan",
    value: "7.150,23",
    change: "+12,45",
    changePercent: "+0,17%",
    open: "7.120",
    high: "7.165",
    low: "7.110",
  },
  fx: {
    label: "Kurs Rupiah",
    value: "Rp 15.650",
    change: "-15",
    changePercent: "-0,10%",
  },
  topGainers: [
    { ticker: "BBCA", changePercent: "+3.50%" },
    { ticker: "TLKM", changePercent: "+2.80%" },
    { ticker: "ASII", changePercent: "+2.50%" },
    { ticker: "BMRI", changePercent: "+2.20%" },
    { ticker: "ICBP", changePercent: "+1.90%" },
  ],
  topLosers: [
    { ticker: "ANTM", changePercent: "-3.10%" },
    { ticker: "INCO", changePercent: "-2.75%" },
    { ticker: "ADRO", changePercent: "-2.40%" },
    { ticker: "PGAS", changePercent: "-2.10%" },
    { ticker: "GOTO", changePercent: "-1.85%" },
  ],
  chartData: [186, 305, 237, 73, 209, 214],
};
