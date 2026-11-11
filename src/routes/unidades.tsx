import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/unidades")({
  head: () => ({
    meta: [
      { title: "Unidades de Saúde — Portal de Saúde de Itaqui" },
      { name: "description", content: "Encontre postos, ESFs e hospitais da cidade." },
      { property: "og:title", content: "Unidades de Saúde — Portal de Saúde de Itaqui" },
      { property: "og:description", content: "Encontre postos, ESFs e hospitais da cidade." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ComingSoon title="Unidades de Saúde" description="Encontre postos, ESFs e hospitais da cidade." />,
});
