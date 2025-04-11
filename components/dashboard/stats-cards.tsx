"use client";

import { Battery, Box, CheckCircle, Truck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Robots</CardTitle>
          <Truck className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12/15</div>
          <p className="text-xs text-muted-foreground">
            3 robots currently inactive
          </p>
          <div className="mt-4 h-1 w-full bg-muted">
            <div className="h-1 w-4/5 bg-green-500 rounded-full" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Inventory Status
          </CardTitle>
          <Box className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">87%</div>
          <p className="text-xs text-muted-foreground">+2.5% from last week</p>
          <div className="mt-4 h-1 w-full bg-muted">
            <div className="h-1 w-[87%] bg-blue-500 rounded-full" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Battery Status</CardTitle>
          <Battery className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">76%</div>
          <p className="text-xs text-muted-foreground">
            Average across all robots
          </p>
          <div className="mt-4 h-1 w-full bg-muted">
            <div className="h-1 w-3/4 bg-yellow-500 rounded-full" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Task Completion</CardTitle>
          <CheckCircle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">94.2%</div>
          <p className="text-xs text-muted-foreground">+1.2% from yesterday</p>
          <div className="mt-4 h-1 w-full bg-muted">
            <div className="h-1 w-[94%] bg-green-500 rounded-full" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
