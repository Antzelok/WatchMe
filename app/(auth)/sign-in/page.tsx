import { Metadata } from "next";
import { Suspense } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import CredentialsSignInForm from "./credentials-signin-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Sign In",
};

const SignInPage = async ({
  searchParams,
}: {
  searchParams: { callbackUrl?: string };
}) => {
  const session = await auth();

  if (session) {
    redirect(searchParams.callbackUrl || "/");
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader className="space-y-4">
          <Link href="/" className="flex-center">
            <Image
              src="/images/logo.svg"
              height={100}
              width={100}
              alt={`${APP_NAME} logo`}
              priority
            />
          </Link>

          <CardTitle className="text-center">Sign In</CardTitle>
          <CardDescription className="text-center">
            Sign in to your account
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <Suspense fallback={<div>Loading form...</div>}>
            <CredentialsSignInForm />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;