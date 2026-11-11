import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/noticias")({
  head: () => ({
    meta: [
      { title: "Notícias — Portal de Saúde de Itaqui" },
      { name: "description", content: "Campanhas, avisos e novidades da saúde de Itaqui." },
      { property: "og:title", content: "Notícias — Portal de Saúde de Itaqui" },
      { property: "og:description", content: "Campanhas, avisos e novidades da saúde de Itaqui." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ComingSoon title="Notícias" description="Campanhas, avisos e novidades da saúde de Itaqui." />,
});
