"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Box } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useFormik } from "formik";
import * as Yup from "yup";
import useUserStore from "@/store/useAuthStore";

export default function LoginPage() {
  const router = useRouter();
  const { login, error: loginError, isLoading } = useUserStore();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().min(6, "Min 6 characters").required("Password is required"),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      const success = await login(values.email, values.password);

      if (success) {
        router.push("/dashboard");
      } else if (loginError) {
        setErrors({ email: loginError });
      }

      setSubmitting(false);
    },
  });

  return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#F5EBE0] p-4">
        <div className="w-full max-w-md">
          <div className="mb-8 flex items-center justify-center gap-2">
            <Box className="h-8 w-8 text-[#8B4513]" />
            <span className="text-2xl font-bold text-[#5D4037]">RoboTrack</span>
          </div>
          <Card className="border-[#D2B48C]">
            <CardHeader>
              <CardTitle className="text-2xl text-[#5D4037]">Log in</CardTitle>
              <CardDescription className="text-[#8B4513]">
                Enter your email and password to access your account
              </CardDescription>
            </CardHeader>
            <form onSubmit={formik.handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#5D4037]">Email</Label>
                  <Input
                      id="email"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      placeholder="name@example.com"
                      className="border-[#D2B48C]"
                  />
                  {formik.touched.email && formik.errors.email ? (
                      <div className="text-xs text-red-500">{formik.errors.email}</div>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-[#5D4037]">Password</Label>
                    <Link href="/forgot-password" className="text-xs text-[#8B4513] hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                      id="password"
                      name="password"
                      type="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      placeholder="your password"
                      className="border-[#D2B48C]"
                  />
                  {formik.touched.password && formik.errors.password ? (
                      <div className="text-xs text-red-500">{formik.errors.password}</div>
                  ) : null}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button
                    type="submit"
                    className="w-full bg-[#8B4513] text-white hover:bg-[#5D4037]"
                    disabled={formik.isSubmitting || isLoading}
                >
                  {formik.isSubmitting || isLoading ? "Logging in..." : "Log in"}
                </Button>
                <div className="text-center text-sm">
                  <span className="text-[#5D4037]">Don't have an account? </span>
                  <Link href="/register" className="text-[#8B4513] hover:underline">
                    Sign up
                  </Link>
                </div>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
  );
}