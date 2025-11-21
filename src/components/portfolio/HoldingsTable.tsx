import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";
import { usePortfolio } from "@/hooks/usePortfolio";

export const HoldingsTable = () => {
  const { data: holdings, isLoading } = usePortfolio();

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Holdings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            Loading holdings...
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!holdings || holdings.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Holdings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            No holdings yet. Add your first transaction to get started.
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Holdings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead>Symbol</TableHead>
                <TableHead>Shares</TableHead>
                <TableHead className="text-right">Avg Cost</TableHead>
                <TableHead className="text-right">Current Price</TableHead>
                <TableHead className="text-right">Total Value</TableHead>
                <TableHead className="text-right">Unrealized P&L</TableHead>
                <TableHead className="text-right">Day Change</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {holdings.map((holding) => {
                const totalValue = holding.total_quantity * (holding.current_price || holding.average_cost);
                const totalCost = holding.total_quantity * holding.average_cost;
                const unrealizedPL = totalValue - totalCost;
                const unrealizedPLPercent = (unrealizedPL / totalCost) * 100;

                return (
                  <TableRow key={holding.id} className="hover:bg-muted/30">
                    <TableCell>
                      <div>
                        <div className="font-semibold">{holding.symbol}</div>
                        <div className="text-sm text-muted-foreground">{holding.symbol}</div>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{holding.total_quantity}</TableCell>
                    <TableCell className="text-right">${holding.average_cost.toFixed(2)}</TableCell>
                    <TableCell className="text-right font-medium">${(holding.current_price || holding.average_cost).toFixed(2)}</TableCell>
                    <TableCell className="text-right font-semibold">${totalValue.toLocaleString()}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex flex-col items-end gap-1">
                        <span className={unrealizedPL >= 0 ? "text-success font-semibold" : "text-loss font-semibold"}>
                          {unrealizedPL >= 0 ? "+" : ""}${Math.abs(unrealizedPL).toFixed(2)}
                        </span>
                        <Badge variant={unrealizedPLPercent >= 0 ? "default" : "destructive"} className="text-xs">
                          {unrealizedPLPercent >= 0 ? "+" : ""}{unrealizedPLPercent.toFixed(2)}%
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="text-muted-foreground text-sm">
                        N/A
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
