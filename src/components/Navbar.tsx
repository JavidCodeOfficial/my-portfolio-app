"use client";

import { navItems } from "@/lib/contants";
import { UserCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useScrolled } from "@/hooks/useScrolled";
import MobileSheet from "./MobileSheet";

function Navbar() {
  const scrolled = useScrolled(10);

  return (
    <nav className="fixed z-50 flex items-center w-full px-2">
      <motion.div
        initial={false}
        animate={{
          borderRadius: scrolled ? 10 : 50,
          backgroundColor: scrolled
            ? "color-mix(in oklch, var(--accent) 60%, transparent)"
            : "color-mix(in oklch, var(--accent) 25%, transparent)",
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="overflow-hidden max-w-6xl w-full mx-auto mt-4 backdrop-blur-lg border border-border"
      >
        <div className="px-4">
          <div className="flex items-center justify-between h-16">
            {/* MOBILE MENU */}
            <div className="flex md:hidden">
              <MobileSheet />
            </div>

            {/* LOGO */}
            <div className="shrink-0">
              <h1 className="text-xl font-bold text-foreground pb-1">
                فرانت وب
              </h1>
            </div>

            {/* DESKTOP LINKS */}
            <div className="hidden md:flex items-center space-x-12">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* MOBILE CTA */}
            <div className="flex md:hidden rounded-full bg-primary/10">
              <Link href={"#"}>
                <UserCircle size={32} />
              </Link>
            </div>

            {/* DESKTOP CTA */}
            <Link className="hidden md:flex" href={"#"}>
              <Button className="rounded-full">
                <span className="pb-1">ثبت درخواست</span>
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;
