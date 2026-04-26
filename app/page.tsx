import dynamic from "next/dynamic";
import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { SectionSkeleton } from "@/components/SectionSkeleton";

const Skills = dynamic(
  () => import("@/components/Skills").then((m) => ({ default: m.Skills })),
  { loading: () => <SectionSkeleton /> },
);

const FeaturedProjects = dynamic(
  () => import("@/components/FeaturedProjects").then((m) => ({ default: m.FeaturedProjects })),
  { loading: () => <SectionSkeleton /> },
);

const Experience = dynamic(
  () => import("@/components/Experience").then((m) => ({ default: m.Experience })),
  { loading: () => <SectionSkeleton /> },
);

const Leadership = dynamic(
  () => import("@/components/Leadership").then((m) => ({ default: m.Leadership })),
  { loading: () => <SectionSkeleton /> },
);

const Differentiation = dynamic(
  () => import("@/components/Differentiation").then((m) => ({ default: m.Differentiation })),
  { loading: () => <SectionSkeleton /> },
);

const Contact = dynamic(
  () => import("@/components/Contact").then((m) => ({ default: m.Contact })),
  { loading: () => <SectionSkeleton /> },
);

const Footer = dynamic(
  () => import("@/components/Footer").then((m) => ({ default: m.Footer })),
  { ssr: true },
);

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Experience />
      <Leadership />
      <Differentiation />
      <Contact />
      <Footer />
    </div>
  );
}
