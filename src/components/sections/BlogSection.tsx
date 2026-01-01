"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts } from "@/lib/contants";
import { fadeUp } from "@/lib/animations";

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="px-4 sm:px-6 lg:px-16 py-16 space-y-16">
        {/* Header */}
        <div className="flex items-center justify-center">
          <motion.div {...fadeUp()} className="max-w-2xl text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight font-bold mb-6">
              نوشته‌ها
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              یادداشت‌هایی درباره توسعه وب، طراحی، تفکر مهندسی و اخبار مربوط به
              تکنولوژی
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div key={post.id} {...fadeUp({ delay: index * 0.1 })}>
              <Link href={`/blog/${post.id}`} className="block h-full">
                <Card
                  className="
                  h-full
                  bg-background/70
                  backdrop-blur-lg
                  border-border/50
                  transition-all
                  hover:border-primary/50
                "
                >
                  <CardHeader>
                    <CardTitle className="leading-snug line-clamp-2 text-foreground">
                      {post.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex flex-col gap-6">
                    <p className="text-sm line-clamp-2 text-muted-foreground/80">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto flex justify-between text-xs text-primary/80">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
