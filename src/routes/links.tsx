import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/links")({
  head: () => ({
    meta: [
      { title: "Links Úteis — Portal de Saúde de Itaqui" },
      { name: "description", content: "Serviços externos e canais oficiais de saúde." },
      { property: "og:title", content: "Links Úteis — Portal de Saúde de Itaqui" },
      { property: "og:description", content: "Serviços externos e canais oficiais de saúde." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ComingSoon title="Links Úteis" description="Serviços externos e canais oficiais de saúde." />,
});
