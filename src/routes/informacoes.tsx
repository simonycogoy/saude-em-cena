import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/informacoes")({
  head: () => ({
    meta: [
      { title: "Informações de saúde — Portal de Saúde de Itaqui" },
      { name: "description", content: "Orientações sobre doenças, prevenção e cuidados." },
      { property: "og:title", content: "Informações de saúde — Portal de Saúde de Itaqui" },
      { property: "og:description", content: "Orientações sobre doenças, prevenção e cuidados." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ComingSoon title="Informações de saúde" description="Orientações sobre doenças, prevenção e cuidados." />,
});
