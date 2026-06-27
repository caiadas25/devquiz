import type { MetadataRoute } from "next";
import { quizzes } from "@/data/quizzes";

export function generateStaticParams() {
  return quizzes.map((q) => ({ id: q.id }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://devquiz.vercel.app";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${base}/stats`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.5 },
    { url: `${base}/categories`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    ...quizzes.map((q) => ({
      url: `${base}/quiz/${q.id}`,
      lastModified: new Date(q.date),
      changeFrequency: "never" as const,
      priority: 0.8,
    })),
  ];
}
