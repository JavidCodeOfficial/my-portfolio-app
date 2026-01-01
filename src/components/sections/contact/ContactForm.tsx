"use client";

import { motion } from "motion/react";
import { fadeX } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  return (
    <motion.form
      {...fadeX({ x: -100, delay: 0.2 })}
      className="space-y-6"
      onSubmit={(e) => e.preventDefault()}
    >
      <Input placeholder="نام" />
      <Input type="email" placeholder="ایمیل" />
      <Textarea rows={5} placeholder="پیام شما..." />

      <Button size={"lg"} className="rounded-full px-8">
        <span className="pb-1">ارسال پیام</span>
      </Button>
    </motion.form>
  );
}
