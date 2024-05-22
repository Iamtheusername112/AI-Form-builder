import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="p-6 border-b shadow-lg">
      <div className="flex justify-between items-center">
        <Image src={"/logo.svg"} width={50} height={50} alt="logo" />
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

export default Header;
