import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/documentacao")({
  head: () => ({
    meta: [
      { title: "Documentação — Portal de Saúde de Itaqui" },
      { name: "description", content: "Documentos, formulários e normas da saúde municipal." },
      { property: "og:title", content: "Documentação — Portal de Saúde de Itaqui" },
      { property: "og:description", content: "Documentos, formulários e normas da saúde municipal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ComingSoon title="Documentação" description="Documentos, formulários e normas da saúde municipal." />,
});
