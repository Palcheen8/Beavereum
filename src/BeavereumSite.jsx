import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Beaver, Coins, ShieldX } from "lucide-react";

export default function BeavereumSite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-brown-800 mb-4">
          🦫 Beavereum (BVRM)
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          Canada’s most trustworthy crypto — just don't ask for it back.
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <Button className="bg-yellow-400 text-black hover:bg-yellow-300">
            Buy BVRM
          </Button>
          <Button variant="outline">View Smart Contract</Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <Card className="rounded-2xl shadow-xl">
          <CardContent className="p-6">
            <Beaver className="h-12 w-12 text-brown-600 mb-2" />
            <h2 className="text-xl font-bold mb-1">About</h2>
            <p className="text-gray-600 text-sm">
              BVRM is a meme token inspired by the industrious beavers of the north. Minted with love, and locked away forever.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-xl">
          <CardContent className="p-6">
            <Coins className="h-12 w-12 text-green-600 mb-2" />
            <h2 className="text-xl font-bold mb-1">Buy Only</h2>
            <p className="text-gray-600 text-sm">
              You can buy BVRM, but selling is disabled. Why? Because we’re building the dam, not draining the lake.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-xl">
          <CardContent className="p-6">
            <ShieldX className="h-12 w-12 text-red-600 mb-2" />
            <h2 className="text-xl font-bold mb-1">Anti-Rug Code</h2>
            <p className="text-gray-600 text-sm">
              Liquidity pool transfers are blocked by the smart contract itself. Satirical? Absolutely. Secure? Like a beaver lodge.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16 text-center text-sm text-gray-500">
        © 2025 Beavereum. All rights preserved in maple syrup.
      </div>
    </div>
  );
}