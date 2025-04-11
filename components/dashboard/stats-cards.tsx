"use client";

import { Battery, Box, CheckCircle, Truck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="border-[#D2B48C] bg-[#F5EBE0] brown-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-[#8B4513]">
            Active Robots
          </CardTitle>
          <Truck className="h-4 w-4 text-[#8B4513]" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-[#5D4037]">12/15</div>
          <p className="text-xs text-[#8B4513]">3 robots currently inactive</p>
          <div className="mt-4 h-1 w-full bg-[#E6D2B5]">
            <div className="h-1 w-4/5 bg-[#8B4513] rounded-full" />
          </div>
        </CardContent>
      </Card>
      <Card className="border-[#D2B48C] bg-[#F5EBE0] brown-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-[#8B4513]">
            Inventory Status
          </CardTitle>
          <Box className="h-4 w-4 text-[#8B4513]" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-[#5D4037]">87%</div>
          <p className="text-xs text-[#8B4513]">+2.5% from last week</p>
          <div className="mt-4 h-1 w-full bg-[#E6D2B5]">
            <div className="h-1 w-[87%] bg-[#8B4513] rounded-full" />
          </div>
        </CardContent>
      </Card>
      <Card className="border-[#D2B48C] bg-[#F5EBE0] brown-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-[#8B4513]">
            Battery Status
          </CardTitle>
          <Battery className="h-4 w-4 text-[#8B4513]" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-[#5D4037]">76%</div>
          <p className="text-xs text-[#8B4513]">Average across all robots</p>
          <div className="mt-4 h-1 w-full bg-[#E6D2B5]">
            <div className="h-1 w-3/4 bg-[#8B4513] rounded-full" />
          </div>
        </CardContent>
      </Card>
      <Card className="border-[#D2B48C] bg-[#F5EBE0] brown-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-[#8B4513]">
            Task Completion
          </CardTitle>
          <CheckCircle className="h-4 w-4 text-[#8B4513]" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-[#5D4037]">94.2%</div>
          <p className="text-xs text-[#8B4513]">+1.2% from yesterday</p>
          <div className="mt-4 h-1 w-full bg-[#E6D2B5]">
            <div className="h-1 w-[94%] bg-[#8B4513] rounded-full" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
