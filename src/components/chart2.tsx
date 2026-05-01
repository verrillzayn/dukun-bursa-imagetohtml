/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */
export const Sparkline = ({
  data,
  width,
  height,
  color,
  strokeWidth,
}: {
  data: number[];
  width: number;
  height: number;
  color: string;
  strokeWidth?: number;
}) => {
  if (data.length < 2) return null;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  // 1. Map data ke koordinat X dan Y
  const points = data.map((val, i) => ({
    x: (i / (data.length - 1)) * width,
    y: height - ((val - min) / range) * height,
  }));

  // 2. Buat perintah Path SVG (Move To awal)
  let d = `M ${points[0].x} ${points[0].y}`;

  // 3. Tambahkan lengkungan menggunakan Quadratic Curve
  for (let i = 0; i < points.length - 1; i++) {
    const curr = points[i];
    const next = points[i + 1];

    // Titik kontrol di tengah antara dua point
    const cx = (curr.x + next.x) / 2;
    const cy = (curr.y + next.y) / 2;

    // "Q controlX controlY, endX endY"
    // Kita gunakan T (smooth quadratic) atau langsung koordinat
    d += ` Q ${curr.x} ${curr.y}, ${cx} ${cy}`;
  }

  // Tambahkan titik terakhir agar garis sampai ujung
  d += ` L ${points[points.length - 1].x} ${points[points.length - 1].y}`;

  // Buat path untuk area (menutup garis ke bawah)
  const firstPoint = points[0];
  const lastPoint = points[points.length - 1];

  // Kita tambahkan garis ke pojok kanan bawah, lalu ke pojok kiri bawah, baru tutup (Z)
  const areaPathData = `${d} L ${lastPoint.x} ${height} L ${firstPoint.x} ${height} Z`;

  return (
    <svg width={width} height={height} style={{ display: "flex" }}>
      {/* <title>Sparkline Chart</title> */}
      <defs>
        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Layer 1: Fill Area (Tanpa Stroke) */}
      <path d={areaPathData} fill="url(#chartGradient)" stroke="none" />

      {/* Layer 2: Garis Kurva (Tanpa Fill) */}
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth || "1.5"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
