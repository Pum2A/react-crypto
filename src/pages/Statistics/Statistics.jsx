import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { BarChart, Bar } from "recharts";
function Statistics() {
  const userActivity = [
    { date: "6d ago", activeUsers: 120 },
    { date: "2d ago", activeUsers: 30 },
    { date: "63d ago", activeUsers: 450 },
    { date: "1d ago", activeUsers: 10 },
    { date: "2d ago", activeUsers: 130 },
    { date: "67d ago", activeUsers: 1220 },
  ];

  return (
    <div>
      <Card>
        <CardHeader>
          <CardContent>
            <BarChart width={48} height={48} data={userActivity}>
              <Bar dataKey={"activeUsers"}></Bar>
            </BarChart>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
}

export default Statistics;
