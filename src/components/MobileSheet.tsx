"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Menu } from "lucide-react";
import { navItems } from "@/lib/contants";
import { useState } from "react";
import { motion } from "motion/react";

export default function MobileSheet() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Menu Button */}
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden p-2"
          aria-label="Open menu"
        >
          <Menu />
        </Button>
      </SheetTrigger>

      {/* Sheet Content */}
      <SheetContent
        side="right"
        className="w-72 sm:w-80 flex items-center justify-start py-12"
      >
        <SheetTitle></SheetTitle>
        <nav className="flex flex-col gap-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ y: 500, rotate: -60, opacity: 0 }}
              animate={{ y: 0, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
