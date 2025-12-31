"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import Orb from "../Orb";
import Magnet from "../Magnet";

function HeroSection() {
  return (
    <section className="min-h-[80vh] flex justify-center items-center overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center"
        >
          <div className="relative w-[280px] h-[280px] md:w-[420px] md:h-[420px]">
            <Orb
              hoverIntensity={0.5}
              rotateOnHover={true}
              hue={50}
              forceHoverState={false}
            />
          </div>
        </motion.div>

        {/* Left Content */}
        <div className="max-w-2xl">
          <div className="">
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                طراحی و توسعه وب‌سایت‌های{" "}
                <span className="text-primary">حرفه ای و جذاب</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl">
                اینجا جایی است که ایده‌هایتان به واقعیت تبدیل می‌شوند.
                وب‌سایت‌هایی با تجربه کاربری عالی، سئو بهینه و کیفیت بالا ساخته
                می شود.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Magnet padding={50} disabled={false} magnetStrength={2}>
                  <Button
                    className="group inline-flex items-center gap-2 text-sm font-medium"
                    size="lg"
                  >
                    <span className="pb-1">مشاهده نمونه‌کارها</span>
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  </Button>
                </Magnet>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
