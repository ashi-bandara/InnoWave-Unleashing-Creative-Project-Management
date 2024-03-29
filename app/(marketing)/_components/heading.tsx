"use client";

import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-medium">
      Harmonizing your Ideas, Documents, & Plans <br/> Welcome to the Unified World of <br/> <span className="font-black text-4xl sm:text-6xl md:text-7xl">InnoWave</span>
      </h1>
      <br/>
      <br/>
      <h3 className="text-base sm:text-xl md:text-2xl font-regular">
      Step into the InnoWave Workspace, where seamless connections pave the way for better, faster work...
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter InnoWave
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get InnoWave for free
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  )
}