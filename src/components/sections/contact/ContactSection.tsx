"use client";

import { motion } from "motion/react";
import { fadeUp, fadeX } from "@/lib/animations";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-[60vh] py-24 flex justify-center items-center overflow-hidden"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div {...fadeUp()} className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            تماس با من
          </h2>
          <p className="mt-4 text-muted-foreground">
            برای همکاری، پروژه یا فقط یک سلام 👋
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 md:items-start gap-12">
          {/* Info */}
          <motion.div
            {...fadeX({ x: 100, delay: 0.1 })}
            className="space-y-6 md:flex md:flex-col md:justify-center md:items-center"
          >
            <div>
              <ContactItem label="ایمیل" value="tajavydi1997@gmail.com" />
              <ContactItem label="تلگرام" value="@mtjavidiprogrammer" />
              <ContactItem
                label="گیت‌هاب"
                value="https://github.com/JavidCodeOfficial"
              />
            </div>
          </motion.div>

          {/* Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-lg font-medium text-foreground">{value}</span>
    </div>
  );
}
