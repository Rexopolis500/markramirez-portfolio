import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "../../lib/portfolio";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Mark Ramirez`,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.summary,
    applicationCategory: "DeveloperApplication",
    author: { "@type": "Person", name: "Mark Ramirez" },
    url: `https://mark-ramirez-dev.rexopolis500.chatgpt.site/projects/${project.slug}`,
  };

  return (
    <main className="dossier-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <nav className="dossier-nav">
        <Link href="/">← Return to system</Link>
        <span>PROJECT DOSSIER / {project.slug.toUpperCase()}</span>
      </nav>

      <header className="dossier-hero">
        <div>
          <p className="kicker">{project.eyebrow}</p>
          <h1>{project.title}</h1>
        </div>
        <div className="dossier-identity">
          <span>Status<strong>{project.status}</strong></span>
          <span>Role<strong>{project.role}</strong></span>
        </div>
        <p className="dossier-lead">{project.description}</p>
      </header>

      <section className="dossier-grid" aria-label={`${project.title} case study`}>
        <article className="dossier-section large">
          <span className="section-number">01</span>
          <p className="module-meta">The challenge</p>
          <h2>What needed to be understood</h2>
          <p>{project.challenge}</p>
        </article>
        <article className="dossier-section large">
          <span className="section-number">02</span>
          <p className="module-meta">The architecture</p>
          <h2>How the system responds</h2>
          <p>{project.architecture}</p>
        </article>
        <article className="dossier-section">
          <span className="section-number">03</span>
          <p className="module-meta">Capabilities</p>
          <ul className="dossier-list">
            {project.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
          </ul>
        </article>
        <article className="dossier-section">
          <span className="section-number">04</span>
          <p className="module-meta">Technology</p>
          <ul className="tech-list">
            {project.tech.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        </article>
        <article className="dossier-section wide">
          <span className="section-number">05</span>
          <p className="module-meta">Current outcome</p>
          <h2>What the work demonstrates</h2>
          <p>{project.outcome}</p>
          <div className="source-note">
            <strong>Source status</strong>
            <span>Private repository · Selected code and guided walkthrough available</span>
          </div>
        </article>
      </section>

      <nav className="project-switcher" aria-label="Other projects">
        <span>CONNECTED MODULES</span>
        <div>
          {projects.filter((item) => item.slug !== project.slug).map((item) => (
            <Link key={item.slug} href={`/projects/${item.slug}`}>{item.title} ↗</Link>
          ))}
        </div>
      </nav>
    </main>
  );
}
