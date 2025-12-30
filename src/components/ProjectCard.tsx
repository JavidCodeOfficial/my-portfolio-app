import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
    <div className="group border border-border/50 rounded-xl overflow-hidden transition-shadow hover:shadow-lg">
      {/* Screenshot */}
      <div className="relative aspect-16/10 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between h-full">
        <div>
          <span className=" text-xs uppercase tracking-wide text-muted-foreground backdrop-blur-xs">
            {category}
          </span>

          <h3 className="text-lg font-semibold mt-2 mb-3">{title}</h3>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {tech.join(" · ")}
          </span>

          <Link
            href={href}
            className="text-sm font-medium inline-flex items-center gap-1 group/link"
          >
            مشاهده جزئیات
            <ArrowLeft className="h-4 w-4 transition-transform group-hover/link:-translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
