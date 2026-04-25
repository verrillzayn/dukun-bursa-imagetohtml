const Page = () => {
  return (
    <div className="border border-yellow-600 h-[90vh] aspect-[9/16] m-auto">
      <div className="inset-0 -z-10 h-full w-full items-center px-2 pt-8 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        {/* HEADER */}
        <div className="">
          <h1 className="text-4xl font-bold text-indigo-100 m-auto w-fit">
            MARKET PULSE
          </h1>
          <div className="border rounded-md bg-slate-300 pl-2 mt-2 flex justify-between w-fit gap-3 mx-auto">
            <p>
              by <span className="font-bold">Dukun Bursa</span>
            </p>
            <div className="rounded-md bg-accent-foreground text-white w-fit px-2.5">
              <p>19 april 2026</p>
            </div>
          </div>
        </div>
        {/* HEADER */}

        {/* COL 2 */}
        <div className="rounded-md border border-muted-foreground/55 mt-6 flex px-1 py-1 gap-1 cust-bg">
          {/* <IHSGCard /> */}
          <CurrencyCard />
          <CurrencyCard />
        </div>
        {/* COL 2 */}

        {/* COL 3 */}
        <div className="border mt-6 flex justify-between">
          <TopTable />
          <TopTable />
        </div>
        {/* COL 3 */}
      </div>
    </div>
  );
};

export default Page;

function CurrencyCard() {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg max-w-sm mx-auto border border-slate-800 w-1/2 pb-1">
      {/* CARD HEADER */}
      <div className="w-full border-b border-slate-800 px-2 py-1 text-white text-[10px] font-bold">
        IHSG (PENUTUPAN)
      </div>
      {/* CARD HEADER */}

      {/* CARD CONTENT */}
      <div className="flex-1 w-full border-slate-800 my-1">
        <div className="text-xl font-bold text-green-500 text-center">
          16,350.00
        </div>
      </div>
      {/* CARD CONTENT */}

      {/* CARD FOOTER */}
      <div className="mx-1 p-0.5">
        <table className="w-full text-[8px] text-white table">
          <thead>
            <tr>
              <th className="border-[0.5px] border-slate-700 py-0.5 rounded-tl-md">
                OPEN
              </th>
              <th className="border-y-[0.5px] border-slate-700 py-0.5">HIGH</th>
              <th className="border-[0.5px] border-slate-700 py-0.5 rounded-tr-md">
                LOW
              </th>
            </tr>
          </thead>
          <tbody className="text-white">
            <tr>
              <td className="text-center border-x-[0.5px] border-b-[0.5px] border-slate-700 py-0.5 rounded-bl-md">
                16,380
              </td>
              <td className="text-center border-b-[0.5px] border-slate-700 py-0.5">
                16,400
              </td>
              <td className="text-center border-x-[0.5px] border-b-[0.5px] border-slate-700 py-0.5 rounded-br-md">
                16,320
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* CARD FOOTER */}
    </div>
  );
}

function TopTable() {
  return (
    <div className="border border-red-500">
      <div className="text-white">TOP GAINERS</div>
      <div>
        <table className="w-full text-[8px] text-white table">
          <thead>
            <tr>
              <th className="border-[0.5px] border-slate-700 py-0.5 rounded-tl-md">
                #
              </th>
              <th className="border-y-[0.5px] border-slate-700 py-0.5">KODE</th>
              <th className="border-y-[0.5px] border-slate-700 py-0.5">
                HARGA
              </th>
              <th className="border-[0.5px] border-slate-700 py-0.5 rounded-tr-md">
                %
              </th>
            </tr>
          </thead>
          <tbody className="text-white">
            <tr>
              <td className="text-center border-x-[0.5px] border-b-[0.5px] border-slate-700 py-0.5 rounded-bl-md">
                1
              </td>
              <td className="text-center border-b-[0.5px] border-slate-700 py-0.5">
                ASII
              </td>
              <td className="text-center border-b-[0.5px] border-slate-700 py-0.5">
                6,250
              </td>
              <td className="text-center border-x-[0.5px] border-b-[0.5px] border-slate-700 py-0.5 rounded-br-md">
                +5.8%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
