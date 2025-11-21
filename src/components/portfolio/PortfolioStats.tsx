import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, DollarSign, TrendingUp } from "lucide-react";
import { usePortfolio } from "@/hooks/usePortfolio";

export const PortfolioStats = () => {
  const { data: holdings } = usePortfolio();

  const totalValue = holdings?.reduce((sum, h) => {
    return sum + (h.total_quantity * (h.current_price || h.average_cost));
  }, 0) || 0;

  const totalCost = holdings?.reduce((sum, h) => {
    return sum + (h.total_quantity * h.average_cost);
  }, 0) || 0;

  const totalReturn = totalValue - totalCost;
  const totalReturnPercent = totalCost > 0 ? (totalReturn / totalCost) * 100 : 0;

  const stats = [
    {
      label: "Total Value",
      value: `$${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      change: `${totalReturn >= 0 ? '+' : ''}$${Math.abs(totalReturn).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      changePercent: `${totalReturnPercent >= 0 ? '+' : ''}${totalReturnPercent.toFixed(2)}%`,
      isPositive: totalReturn >= 0,
      icon: DollarSign,
    },
    {
      label: "Today's Return",
      value: "$0.00",
      change: "+0%",
      changePercent: "",
      isPositive: true,
      icon: TrendingUp,
    },
    {
      label: "Total Return",
      value: `$${Math.abs(totalReturn).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      change: `${totalReturnPercent >= 0 ? '+' : ''}${totalReturnPercent.toFixed(2)}%`,
      changePercent: "",
      isPositive: totalReturn >= 0,
      icon: ArrowUpRight,
    },
    {
      label: "Cost Basis",
      value: `$${totalCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      change: `${holdings?.length || 0} Holdings`,
      changePercent: "",
      isPositive: null,
      icon: DollarSign,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              {stat.isPositive !== null && (
                <div className={`flex items-center gap-1 ${stat.isPositive ? "text-success" : "text-loss"}`}>
                  {stat.isPositive ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4" />
                  )}
                </div>
              )}
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className={stat.isPositive ? "text-success text-sm" : stat.isPositive === false ? "text-loss text-sm" : "text-muted-foreground text-sm"}>
                {stat.change}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
