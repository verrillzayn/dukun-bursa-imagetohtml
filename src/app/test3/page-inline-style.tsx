import {
  ArrowDown,
  ArrowUpRight,
  Coins,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { Sparkline } from "@/components/chart2";

const chartData = [186, 305, 237, 73, 209, 214];

const PageInlineStyle = () => {
  return (
    <div
      style={{
        height: "99vh",
        aspectRatio: "9 / 16",
        margin: "auto",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#0d1117",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          paddingTop: "1rem",
          position: "relative",
        }}
      >
        {/* <!-- Background --> */}

        <div
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
        />
        <div
          style={{
            position: "relative",
            height: "100%",
            width: "100%",
            backgroundColor: "#020617",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: "-20%",
              right: 0,
              top: "10%",
              width: 500,
              height: 500,
              borderRadius: "9999px",
              backgroundImage:
                "radial-gradient(circle farthest-side, rgba(255,0,182,.15), rgba(255,255,255,0))",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: "-20%",
              top: "-10%",
              width: 500,
              height: 500,
              borderRadius: "9999px",
              backgroundImage:
                "radial-gradient(circle farthest-side, rgba(255,0,182,.15), rgba(255,255,255,0))",
            }}
          />
        </div>

        {/* <!-- Header Logo Area --> */}
        <div
          style={{
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            marginBottom: "0.25rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "1.25rem",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              textTransform: "uppercase",
            }}
          >
            Market Pulse
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: "0.75rem",
              color: "#9ca3af",
              letterSpacing: "0.025em",
            }}
          >
            By Dukun Bursa
          </p>
        </div>
        {/* <!-- Market Summary Label --> */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "0.25rem",
            paddingLeft: "1.25rem",
            paddingRight: "1.25rem",
          }}
        >
          <div
            style={{
              height: 1,
              flex: 1,
              backgroundColor: "#6b7280",
            }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "0.5rem",
              marginRight: "0.5rem",
              color: "#9ca3af",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            <TrendingUp style={{ width: 14, height: 14, marginRight: "0.5rem" }} />
            <span>Ringkasan Pasar</span>
          </div>
          <div
            style={{
              height: 1,
              flex: 1,
              backgroundColor: "#6b7280",
            }}
          />
        </div>
        {/* <!-- Main Content Scrollable Area --> */}
        <main
          style={{
            flex: 1,
            paddingLeft: "1rem",
            paddingRight: "1rem",
            display: "flex",
            flexDirection: "column",
            rowGap: "0.5rem",
          }}
        >
          {/* <!-- IHSG Main Card --> */}
          <fieldset
            style={{
              backgroundColor: "transparent",
              backdropFilter: "blur(2px)",
              border: "1px solid #1f2937",
              borderRadius: "0.75rem",
              paddingTop: 0,
              paddingBottom: "0.75rem",
              paddingLeft: "0.75rem",
              paddingRight: "0.75rem",
              marginBottom: "0.5rem",
              position: "relative",
            }}
          >
            <legend
              style={{
                marginLeft: "-0.625rem",
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.125rem",
                color: "#f3f4f6",
                fontWeight: 700,
                fontSize: "0.75rem",
              }}
            >
              IHSG Close
            </legend>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "0.25rem",
              }}
            >
              <div style={{ paddingLeft: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      color: "#4ade80",
                    }}
                  >
                    7.150,23
                  </span>
                  <ArrowUpRight
                    style={{
                      width: 20,
                      height: 20,
                      marginLeft: "0.5rem",
                      color: "#4ade80",
                    }}
                  />
                </div>
                <p
                  style={{
                    margin: 0,
                    color: "#4ade80",
                    fontSize: "10px",
                    fontWeight: 500,
                    marginTop: "2px",
                  }}
                >
                  ▲ +12,45 (+0,17%)
                </p>
              </div>
            </div>

            <Sparkline color="#4ade80" data={chartData} height={56} width={324} />

            {/* <!-- Market Stats Bar --> */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
                gap: "0.5rem",
                marginTop: "1rem",
              }}
            >
              <div
                style={{
                  backgroundColor: "#0d1117",
                  paddingTop: "2px",
                  paddingBottom: 0,
                  paddingLeft: "0.5rem",
                  paddingRight: "0.5rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #1f2937",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: "8px",
                    color: "#6b7280",
                    textTransform: "uppercase",
                  }}
                >
                  Open
                </p>
                <p style={{ margin: 0, fontSize: "10px", fontWeight: 700 }}>7.120</p>
              </div>
              <div
                style={{
                  backgroundColor: "#0d1117",
                  paddingTop: "2px",
                  paddingBottom: 0,
                  paddingLeft: "0.5rem",
                  paddingRight: "0.5rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #1f2937",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: "8px",
                    color: "#6b7280",
                    textTransform: "uppercase",
                  }}
                >
                  High
                </p>
                <p style={{ margin: 0, fontSize: "10px", fontWeight: 700 }}>7.165</p>
              </div>
              <div
                style={{
                  backgroundColor: "#0d1117",
                  paddingTop: "2px",
                  paddingBottom: 0,
                  paddingLeft: "0.5rem",
                  paddingRight: "0.5rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #1f2937",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: "8px",
                    color: "#6b7280",
                    textTransform: "uppercase",
                  }}
                >
                  Low
                </p>
                <p style={{ margin: 0, fontSize: "10px", fontWeight: 700 }}>7.110</p>
              </div>
              <fieldset
                style={{
                  backgroundColor: "#0d1117",
                  paddingTop: "2px",
                  paddingBottom: "4px",
                  paddingLeft: "0.5rem",
                  paddingRight: "0.5rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #1f2937",
                  textAlign: "center",
                  gridColumn: "span 2 / span 2",
                  position: "relative",
                  marginTop: "-0.375rem",
                }}
              >
                <legend
                  style={{
                    marginLeft: "-1rem",
                    paddingLeft: "0.25rem",
                    paddingRight: "0.25rem",
                    fontSize: "8px",
                    color: "rgba(245, 158, 11, 0.8)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                    columnGap: "2px",
                  }}
                >
                  <Coins
                    style={{
                      width: 8,
                      height: 8,
                      color: "rgba(245, 158, 11, 0.8)",
                    }}
                  />
                  USD/IDR
                </legend>
                <p style={{ margin: 0, fontSize: "10px", color: "#f87171", fontWeight: 700 }}>
                  Rp 15.650
                </p>
                <p
                  style={{
                    margin: 0,
                    color: "#f87171",
                    fontSize: "6px",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ArrowDown style={{ width: 8, height: 8, color: "#f87171" }} />
                  <span style={{ marginLeft: "2px" }}>-15 (-0,10%)</span>
                </p>
              </fieldset>
            </div>
          </fieldset>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderTop: "1px solid #1f2937",
              paddingTop: "0.5rem",
            }}
          >
            {/* <!-- Top 10 Gainers --> */}
            <div
              style={{
                backgroundColor: "#161b22",
                border: "1px solid #1f2937",
                borderRadius: "0.375rem",
                overflow: "hidden",
                width: "49%",
              }}
            >
              <div
                style={{
                  backgroundColor: "#047857",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <TrendingUp
                  style={{ width: 16, height: 16, color: "#ffffff", marginRight: "0.5rem" }}
                />
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    color: "#ffffff",
                    textTransform: "uppercase",
                    letterSpacing: "-0.025em",
                  }}
                >
                  Top Gainers
                </span>
              </div>
              <table style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
                <thead
                  style={{
                    fontSize: "10px",
                    textTransform: "uppercase",
                    color: "#9ca3af",
                    borderBottom: "1px solid #1f2937",
                  }}
                >
                  <tr>
                    <th style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "1rem", paddingRight: "1rem" }}>#</th>
                    <th style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}>Symbol</th>
                    <th
                      style={{
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        paddingLeft: "1rem",
                        paddingRight: "1rem",
                        textAlign: "right",
                      }}
                    >
                      Change %
                    </th>
                  </tr>
                </thead>
                <tbody style={{ fontSize: "10px" }}>
                  <tr style={{ borderBottom: "1px solid rgba(31, 41, 55, 0.5)" }}>
                    <td style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "1rem", paddingRight: "1rem", color: "#6b7280" }}>1</td>
                    <td style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "0.25rem", fontWeight: 700 }}>BBCA</td>
                    <td
                      style={{
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        paddingLeft: "1.25rem",
                        paddingRight: "1.25rem",
                        textAlign: "right",
                        color: "#4ade80",
                        fontWeight: 600,
                      }}
                    >
                      +3.50%
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(31, 41, 55, 0.5)" }}>
                    <td style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "1rem", paddingRight: "1rem", color: "#6b7280" }}>2</td>
                    <td style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "0.25rem", fontWeight: 700 }}>TLKM</td>
                    <td
                      style={{
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        paddingLeft: "1.25rem",
                        paddingRight: "1.25rem",
                        textAlign: "right",
                        color: "#4ade80",
                        fontWeight: 600,
                      }}
                    >
                      +2.80%
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(31, 41, 55, 0.5)" }}>
                    <td style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "1rem", paddingRight: "1rem", color: "#6b7280" }}>3</td>
                    <td style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "0.25rem", fontWeight: 700 }}>UNVR</td>
                    <td
                      style={{
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        paddingLeft: "1.25rem",
                        paddingRight: "1.25rem",
                        textAlign: "right",
                        color: "#4ade80",
                        fontWeight: 600,
                      }}
                    >
                      +2.80%
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(31, 41, 55, 0.5)" }}>
                    <td style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "1rem", paddingRight: "1rem", color: "#6b7280" }}>4</td>
                    <td style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "0.25rem", fontWeight: 700 }}>BBTA</td>
                    <td
                      style={{
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        paddingLeft: "1.25rem",
                        paddingRight: "1.25rem",
                        textAlign: "right",
                        color: "#4ade80",
                        fontWeight: 600,
                      }}
                    >
                      +1.50%
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(31, 41, 55, 0.5)" }}>
                    <td style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "1rem", paddingRight: "1rem", color: "#6b7280" }}>5</td>
                    <td style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "0.25rem", fontWeight: 700 }}>TREM</td>
                    <td
                      style={{
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        paddingLeft: "1.25rem",
                        paddingRight: "1.25rem",
                        textAlign: "right",
                        color: "#4ade80",
                        fontWeight: 600,
                      }}
                    >
                      +1.50%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* <!-- Top 10 Losers --> */}
            <div
              style={{
                backgroundColor: "#161b22",
                border: "1px solid #1f2937",
                borderRadius: "0.375rem",
                overflow: "hidden",
                width: "49%",
              }}
            >
              <div
                style={{
                  backgroundColor: "#ef4444",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <TrendingDown
                  style={{ width: 16, height: 16, color: "#ffffff", marginRight: "0.5rem" }}
                />
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    color: "#ffffff",
                    textTransform: "uppercase",
                    letterSpacing: "-0.025em",
                  }}
                >
                  Top Losers
                </span>
              </div>
              <table style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
                <thead
                  style={{
                    fontSize: "10px",
                    textTransform: "uppercase",
                    color: "#9ca3af",
                    borderBottom: "1px solid #1f2937",
                  }}
                >
                  <tr>
                    <th style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "1rem", paddingRight: "1rem" }}>#</th>
                    <th style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}>Symbol</th>
                    <th
                      style={{
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        paddingLeft: "1rem",
                        paddingRight: "1rem",
                        textAlign: "right",
                      }}
                    >
                      Change %
                    </th>
                  </tr>
                </thead>
                <tbody style={{ fontSize: "10px" }}>
                  <tr style={{ borderBottom: "1px solid rgba(31, 41, 55, 0.5)" }}>
                    <td style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "1rem", paddingRight: "1rem", color: "#6b7280" }}>1</td>
                    <td style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "0.25rem", fontWeight: 700 }}>GOTO</td>
                    <td
                      style={{
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        paddingLeft: "1.25rem",
                        paddingRight: "1.25rem",
                        textAlign: "right",
                        color: "#f87171",
                        fontWeight: 600,
                      }}
                    >
                      -4.20%
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(31, 41, 55, 0.5)" }}>
                    <td style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "1rem", paddingRight: "1rem", color: "#6b7280" }}>2</td>
                    <td style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "0.25rem", fontWeight: 700 }}>ASII</td>
                    <td
                      style={{
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        paddingLeft: "1.25rem",
                        paddingRight: "1.25rem",
                        textAlign: "right",
                        color: "#f87171",
                        fontWeight: 600,
                      }}
                    >
                      -3.20%
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(31, 41, 55, 0.5)" }}>
                    <td style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "1rem", paddingRight: "1rem", color: "#6b7280" }}>3</td>
                    <td style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "0.25rem", fontWeight: 700 }}>BBCA</td>
                    <td
                      style={{
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        paddingLeft: "1.25rem",
                        paddingRight: "1.25rem",
                        textAlign: "right",
                        color: "#f87171",
                        fontWeight: 600,
                      }}
                    >
                      -4.20%
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(31, 41, 55, 0.5)" }}>
                    <td style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "1rem", paddingRight: "1rem", color: "#6b7280" }}>4</td>
                    <td style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "0.25rem", fontWeight: 700 }}>BBTO</td>
                    <td
                      style={{
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        paddingLeft: "1.25rem",
                        paddingRight: "1.25rem",
                        textAlign: "right",
                        color: "#f87171",
                        fontWeight: 600,
                      }}
                    >
                      -4.20%
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(31, 41, 55, 0.5)" }}>
                    <td style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "1rem", paddingRight: "1rem", color: "#6b7280" }}>5</td>
                    <td style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "0.25rem", fontWeight: 700 }}>KIJA</td>
                    <td
                      style={{
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        paddingLeft: "1.25rem",
                        paddingRight: "1.25rem",
                        textAlign: "right",
                        color: "#f87171",
                        fontWeight: 600,
                      }}
                    >
                      -4.20%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* <!-- Quotes --> */}
          <div
            style={{
              marginTop: "2rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              display: "flex",
            }}
          >
            <p style={{ margin: 0, fontStyle: "italic", textAlign: "center" }}>
              "Hari ini pasar lagi merah merona, waktunya cicil atau kabur?"
            </p>
          </div>
        </main>
        {/* <!-- Footer Info --> */}
        <footer
          style={{
            textAlign: "center",
            paddingTop: "0.5rem",
            paddingBottom: "1.5rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "10px",
              color: "#4b5563",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
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
        </footer>
      </div>
    </div>
  );
};

export default PageInlineStyle;
