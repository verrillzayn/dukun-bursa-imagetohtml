const Page = () => {
  return (
    <div className="border border-yellow-600 h-[90vh] aspect-[9/16] m-auto body">
      <div className="container">
        <div className="header">
          <div className="logo">
            <div className="logo-icon"></div>
            <span>MARKETLENS</span>
          </div>
          <div className="header-title">
            <h1>Ikhtisar Pasar</h1>
            <p>Jumat, 2 Januari 2026</p>
          </div>
        </div>

        <div className="summary-container">
          <div className="summary-card">
            <div className="summary-title">IHSG (Penutupan)</div>
            <div className="summary-value up">▲ 7,510.50 (+0.85%)</div>
            <div className="summary-detail">
              Open: 7,450.00 | High: 7,530.00 | Low: 7,440.00
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-title">Kurs Rupiah (USD/IDR)</div>
            <div className="summary-value down">▼ 16,350.00 (-0.12%)</div>
            <div className="summary-detail">
              Kurs Jual: 16,380 | Kurs Beli: 16,320
            </div>
          </div>
        </div>

        <div className="lists-container">
          <div className="list-panel gainers">
            <div className="list-header">TOP GAINERS</div>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>KODE</th>
                  <th>HARGA</th>
                  <th>%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>ASII</td>
                  <td>6,250</td>
                  <td>+5.8%</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>TLKM</td>
                  <td>4,100</td>
                  <td>+4.2%</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>BBPR</td>
                  <td>4,100</td>
                  <td>+4.1%</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>BNBR</td>
                  <td>3,900</td>
                  <td>+3.0%</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>RAJA</td>
                  <td>3,600</td>
                  <td>+2.7%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="list-panel losers">
            <div className="list-header">TOP LOSERS</div>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>KODE</th>
                  <th>HARGA</th>
                  <th>%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>BBRI</td>
                  <td>5,800</td>
                  <td>-3.2%</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>BBNI</td>
                  <td>5,600</td>
                  <td>-2.8%</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>ENRG</td>
                  <td>4,100</td>
                  <td>-2.4%</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>MEDC</td>
                  <td>2,200</td>
                  <td>-1.9%</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>BUVA</td>
                  <td>1,700</td>
                  <td>-1.7%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="footer">
          <span>16:15 WIB</span>
          <span>Sumber: Bursa Fiktif</span>
          <span>www.marketlens.id</span>
        </div>
      </div>
    </div>
  );
};

export default Page;
