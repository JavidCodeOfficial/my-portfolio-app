import { navItems } from "@/lib/contants";
import { Menu, UserCircle } from "lucide-react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="mt-4 mx-2 bg-background/80 backdrop-blur-md rounded-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* MOBILE MENU */}
          <div className="flex md:hidden">
            <button title="menu" type="button">
              <Menu />
            </button>
          </div>

          {/* LOGO */}
          <div className="shrink-0">
            <h1 className="text-xl font-bold text-foreground">فرانت وب</h1>
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
          <div className="hidden md:flex">
            <Link href={"#"}>ثبت درخواست</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
