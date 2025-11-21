import { PortfolioHeader } from "@/components/portfolio/PortfolioHeader";
import { PortfolioStats } from "@/components/portfolio/PortfolioStats";
import { HoldingsTable } from "@/components/portfolio/HoldingsTable";
import { PortfolioChart } from "@/components/portfolio/PortfolioChart";
import { Footer } from "@/components/Footer";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <PortfolioHeader />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <PortfolioStats />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <PortfolioChart />
          </div>
          <div className="space-y-6">
            <div className="bg-card rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-4">Market Movers</h3>
              <div className="space-y-3">
                {[
                  { symbol: "AAPL", change: 2.4 },
                  { symbol: "TSLA", change: -1.8 },
                  { symbol: "MSFT", change: 1.2 },
                ].map((stock) => (
                  <div key={stock.symbol} className="flex justify-between items-center">
                    <span className="font-medium">{stock.symbol}</span>
                    <span className={stock.change >= 0 ? "text-success" : "text-loss"}>
                      {stock.change >= 0 ? "+" : ""}{stock.change}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <HoldingsTable />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
