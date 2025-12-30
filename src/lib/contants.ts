export const navItems = [
  { name: "صفحه اصلی", href: "/" },
  { name: "مهارت ها", href: "/#" },
  { name: "نمونه کار ها", href: "/#" },
  { name: "بلاگ", href: "/#" },
  { name: "تماس", href: "/#" },
];

export const skills = [
  {
    title: "Frontend Development",
    desc: "طراحی و پیاده‌سازی رابط‌های کاربری مدرن با تمرکز بر عملکرد، دسترس‌پذیری و تجربه کاربری.",
  },
  {
    title: "Next.js & React",
    desc: "ساخت اپلیکیشن‌های SSR و SPA با معماری مقیاس‌پذیر، بهینه‌سازی سئو و رندر سمت سرور.",
  },
  {
    title: "UI / UX Engineering",
    desc: "تبدیل طراحی به رابط‌های دقیق با رعایت spacing، typography و تعاملات کاربرپسند.",
  },
  {
    title: "Performance & Optimization",
    desc: "بهینه‌سازی سرعت لود، کاهش bundle size و بهبود Core Web Vitals برای تجربه کاربری بهتر و سئو قوی‌تر.",
  },
  {
    title: "SEO & Accessibility",
    desc: " پیاده‌سازی ساختارهای سئو محور،semantic HTML و رعایت دسترس‌پذیری برای کاربران و موتورهای جستجو.",
  },
  {
    title: "State Management & Architecture",
    desc: "طراحی معماری قابل نگهداری با مدیریت وضعیت بهینه برای پروژه‌های کوچک تا مقیاس‌پذیر.",
  },
];

// data/projects.ts
export const projects = [
  {
    id: "coffee-store",
    title: "فروشگاه آنلاین قهوه",
    description:
      "طراحی و توسعه یک فروشگاه سریع و مقیاس‌پذیر با تمرکز بر تجربه خرید ساده و سئو.",
    category: "E-Commerce",
    tech: ["Next.js", "Tailwind", "Supabase"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    href: "/projects/coffee-store",
  },
  {
    id: "admin-dashboard",
    title: "داشبورد مدیریت محتوا",
    description:
      "داشبوردی برای مدیریت و تحلیل داده‌ها با رابط کاربری تمیز و قابل توسعه.",
    category: "Dashboard",
    tech: ["React", "Shadcn", "Charts"],
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80",
    href: "/projects/admin-dashboard",
  },
  {
    id: "personal-portfolio",
    title: "وب‌سایت شخصی و Portfolio",
    description: "طراحی یک وب‌سایت چندصفحه‌ای با تمرکز بر برندینگ شخصی و سئو.",
    category: "Portfolio",
    tech: ["Next.js", "SEO", "Animation"],
    image: "https://placehold.co/1200x750/png?text=Portfolio+Preview",
    href: "/projects/personal-portfolio",
  },
];
