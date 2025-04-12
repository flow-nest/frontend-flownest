"use client"

import DashboardLayout from "@/components/layouts/dashboard-layout";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export default function ShelvePage() {
    return (
        <DashboardLayout>
            <div className="flex flex-col gap-6">
                <h1 className="text-3xl font-bold">Shelve</h1>

                <Card>
                    <CardHeader>
                        <CardTitle>Shelve Data</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="aspect-video bg-muted flex items-center justify-center rounded-md">
                            <p className="text-muted-foreground">Shelve data will be displayed here</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    )
}