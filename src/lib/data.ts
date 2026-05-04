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
  aiText: string;
  dateStr: string;
};

export const MOCK_MARKET_PULSE: MarketPulseData = {
  title: "Update IHSG",
  ihsg: {
    label: "Indeks Harga Saham Gabungan",
    value: "7.150,23", // Nilai IHSG saat ini atau close terakhir
    change: "+12,45", // Perubahan nilai IHSG dibandingkan dengan close sebelumnya
    changePercent: "+0,17%", // Persentase perubahan nilai IHSG dibandingkan dengan close sebelumnya
    open: "7.120", // Nilai IHSG saat pembukaan pasar
    high: "7.165", // Nilai IHSG tertinggi selama sesi perdagangan
    low: "7.110", // Nilai IHSG terendah selama sesi perdagangan
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
  // chartData: [186, 305, 237, 73, 209, 214],
  chartData: [
    7015.69, 7034.69, 7048.84, 7060.92, 7057.89, 7043.88, 7023.3, 7024.82,
    7017.48, 7022.36, 7014.41, 6983.74, 6999.08, 7001.45, 7000.24, 7007.52,
    7010.11, 7009.29, 6996.85, 7004.89, 7003.23, 7002.2, 7002.76, 7005.48,
    7001.22, 7002.01, 6987.72, 6988.84, 6984.4, 6967.45, 6961.78, 6959.44,
    6967.1, 6975.39, 6974.55, 6968.52, 6960.97, 6959.37, 6963.67, 6960.34,
    6959.06, 6957.27, 6952.02, 6958.57, 6960.29, 6969.18, 6973.84, 6970.09,
    6967.3, 6970.22, 6970.91, 6974.68, 6968.54, 6969.5, 6968.81, 6965.93,
    6965.09, 6962.63, 6955.37, 6959.66, 6959.03, 6957.65, 6955.18, 6957.17,
    6971.95, 6971.95,
  ],
  aiText: "Hari ini pasar lagi merah merona, waktunya cicil atau kabur?",
  dateStr: new Date()
    .toLocaleString("id-ID", {
      dateStyle: "medium",
      timeStyle: "short",
    })
    .split(",")[0],
};
