"use client"

import DashboardLayout from "@/components/layouts/dashboard-layout";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default function RobotPage() {
    return (
        <DashboardLayout>
            <div className="p-4 md:p-6 space-y-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Robot Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Battery</TableHead>
                                    <TableHead>Location</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {/* Example row – you can replace this with dynamic data later */}
                                <TableRow>
                                    <TableCell>AlphaBot</TableCell>
                                    <TableCell className="text-green-600">Online</TableCell>
                                    <TableCell>87%</TableCell>
                                    <TableCell>Warehouse A</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>BetaBot</TableCell>
                                    <TableCell className="text-yellow-600">Idle</TableCell>
                                    <TableCell>56%</TableCell>
                                    <TableCell>Loading Dock</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>GammaBot</TableCell>
                                    <TableCell className="text-red-600">Offline</TableCell>
                                    <TableCell>0%</TableCell>
                                    <TableCell>Unknown</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    )
}
=======
"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function RobotsPage() {
  return (
    <div className="p-4 md:p-6 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Robot Status</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Battery</TableHead>
                <TableHead>Location</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Example row – you can replace this with dynamic data later */}
              <TableRow>
                <TableCell>AlphaBot</TableCell>
                <TableCell className="text-green-600">Online</TableCell>
                <TableCell>87%</TableCell>
                <TableCell>Warehouse A</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>BetaBot</TableCell>
                <TableCell className="text-yellow-600">Idle</TableCell>
                <TableCell>56%</TableCell>
                <TableCell>Loading Dock</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>GammaBot</TableCell>
                <TableCell className="text-red-600">Offline</TableCell>
                <TableCell>0%</TableCell>
                <TableCell>Unknown</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

