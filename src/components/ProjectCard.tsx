import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { motion } from "motion/react";

type Project = {
  title: string;
  description: string;
  category: string;
  tech: string[];
  image: string;
  href: string;
};

function ProjectCard({
  title,
  description,
  category,
  tech,
  image,
  href,
}: Project) {
  return (
    <motion.div
      whileHover={{
        rotateX: 20,
        rotateY: -20,
        scale: 1.05,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      style={{ perspective: 1000 }}
    >
      <Card className="group border border-border/50 rounded-xl overflow-hidden p-0 shadow-md">
        {/* Screenshot */}
        <CardHeader className="relative aspect-16/10 overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <Image src={image} alt={title} fill className="object-cover" />
          </motion.div>
        </CardHeader>

        {/* Content */}
        <CardContent
          className="p-6 flex flex-col justify-between h-full"
          style={{ transform: "translateZ(30px)" }}
        >
          <div>
            <Badge
              variant={"secondary"}
              className="text-xs uppercase tracking-wide text-foreground backdrop-blur-xs"
            >
              {category}
            </Badge>

            <h3 className="text-lg font-semibold mt-2 mb-3">{title}</h3>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              {tech.join(" · ")}
            </span>

            <Link href={href}>
              <Button className="text-sm font-medium inline-flex items-center gap-1 group/link">
                <span className="pb-1"> مشاهده جزئیات</span>
                <ArrowLeft className="h-4 w-4 transition-transform group-hover/link:-translate-x-1" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;
