import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export const PortfolioChart = () => {
  const data = [
    { time: "9:30", value: 121000 },
    { time: "10:00", value: 121500 },
    { time: "11:00", value: 122200 },
    { time: "12:00", value: 121800 },
    { time: "13:00", value: 123100 },
    { time: "14:00", value: 123800 },
    { time: "15:00", value: 124200 },
    { time: "16:00", value: 124582 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Portfolio Performance - Today</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis 
              dataKey="time" 
              className="text-xs"
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
            />
            <YAxis 
              className="text-xs"
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
              }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, 'Portfolio Value']}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="hsl(var(--success))" 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
