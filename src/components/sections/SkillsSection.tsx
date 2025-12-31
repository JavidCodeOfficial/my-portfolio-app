"use client";

import { skills } from "../../lib/contants";
import { motion } from "motion/react";
function SkillsSection() {
  return (
    <section className="min-h-screen flex justify-center items-center overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-16 py-16 space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center"
        >
          <div className="max-w-2xl text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              مهارت‌ها و تخصص‌ها
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              ابزارها و تکنولوژی‌هایی که برای ساخت تجربه‌های سریع، قابل توسعه و
              کاربرمحور از آن‌ها استفاده می‌کنم.
            </p>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {/* Skill Card */}
          {skills.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-border/50 rounded-xl bg-card backdrop-blur-md p-6"
            >
              <h3 className="font-semibold text-primary text-lg mb-2">
                {card.title}
              </h3>
              <p className="text-foreground text-sm leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
