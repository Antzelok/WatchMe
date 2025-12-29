import { Metadata } from "next";
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
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SignUpForm from "./sign-up-form";

export const metadata: Metadata = {
  title: "Sign Up",
};

const SignUpPage = async ({
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

          <CardTitle className="text-center">Create Account</CardTitle>
          <CardDescription className="text-center">
            Enter your details below
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;