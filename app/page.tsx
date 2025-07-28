"use client";

import type React from "react";

import { ChangeEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";
import Orb from "@/components/blocks/Backgrounds/Orb/Orb";
import Image from "next/image";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send the email to your backend
      console.log("Email submitted:", email);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 bg-background">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[700px] z-0 flex items-center justify-center">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md">
        <Card className="backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl w-full max-w-lg mx-auto rounded-lg">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-24 h-24 rotate-45">
              <Image
                src="/waiting.png"
                alt="Waiting"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <CardTitle className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-primary p-1 bg-clip-text text-transparent mb-0">
              Join the Waitlist
            </CardTitle>
            <CardDescription className="text-muted-foreground text-md">
              Be the first to know when we launch something amazing
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/90 font-medium">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setEmail(e.target.value)
                      }
                      className="pl-10 py-6 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/20 focus:border-purple-400 transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-white font-semibold py-6 rounded-lg transition-all duration-300 transform hover:shadow-lg"
                >
                  Join Waitlist
                </Button>
              </form>
            ) : (
              <div className="text-center space-y-4 py-8">
                <div className="mx-auto w-24 h-24">
                  <Image
                    src="/check.png"
                    alt="Check"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  You&apos;re on the list!
                </h3>
                <p className="text-white/70">
                  We&apos;ll notify you at{" "}
                  <span className="text-purple-300 font-medium">{email}</span>{" "}
                  when we&apos;re ready to launch.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
