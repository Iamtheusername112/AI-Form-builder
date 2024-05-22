"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  AreaChart,
  LibraryBig,
  MessageCircleReply,
  Settings,
} from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function SideNav() {
  const menuList = [
    {
      id: 1,
      name: "My Forms",
      icon: LibraryBig,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Responses",
      icon: MessageCircleReply,
      path: "/dashboard/responses",
    },
    {
      id: 3,
      name: "Analytics",
      icon: AreaChart,
      path: "/dashboard/analytics",
    },
    {
      id: 1,
      name: "Upgrade",
      icon: Settings,
      path: "/dashboard/upgrade",
    },
  ];

  const path = usePathname();

  useEffect(() => {}, [path]);

  return (
    <div className="shadow border h-screen">
      <div className="p-5">
        {menuList.map((menu, index) => (
          <h2
            key={index}
            className={`flex items-center gap-3 p-4 mb-3 hover:bg-primary hover:text-white 
            rounded-lg cursor-pointer text-gray-500 ${
              path == menu.path && "bg-primary text-white"
            } `}
          >
            <menu.icon />
            {menu.name}
          </h2>
        ))}
      </div>
      <div className="fixed bottom-7 p-6 w-64">
        <Button className="w-full">+ Create Form</Button>
        <div className="my-5">
          <Progress value={33} />
          <h2 className="text-sm mt-2 text-gray-600">
            <strong>2</strong> out <strong>3</strong> files created
          </h2>
          <h2 className="text-sm mt-3 text-gray-600">
            Upgrade your plan for unlimited AI form build
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
