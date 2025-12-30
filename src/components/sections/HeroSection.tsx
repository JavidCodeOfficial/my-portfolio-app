"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

function HeroSection() {
  return (
    <section className="min-h-[80vh] flex justify-center items-center overflow-hidden">
      <div className="max-w-2xl">
        <div className="px-4 sm:px-6 lg:px-16">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              طراحی و توسعه وب‌سایت‌های{" "}
              <span className="text-primary">حرفه ای و جذاب</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl">
              اینجا جایی است که ایده‌هایتان به واقعیت تبدیل می‌شوند.
              وب‌سایت‌هایی با تجربه کاربری عالی، سئو بهینه و کیفیت بالا ساخته می
              شود.
            </p>

            <div>
              <Link
                href="#"
                className="group inline-flex items-center gap-2 text-sm font-medium"
              >
                <span>مشاهده نمونه‌کارها</span>
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
