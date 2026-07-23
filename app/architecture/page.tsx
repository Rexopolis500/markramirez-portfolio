import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Architecture",
  description:
    "The understand-first philosophy and dual-render architecture behind Mark Ramirez's portfolio system.",
};

const markupExample = `<mr-system data-purpose="portfolio-system">
  <mr-graphic
    data-type="orbital-system-core"
    data-renderer="svg-dom"
    data-quality="adaptive" />

  <mr-module
    data-node-id="devad"
    data-tier="core"
    data-route="/projects/devad">
    <article>
      <h2>DevAD</h2>
      <p>A workbench for understanding codebases.</p>
      <a href="/projects/devad">Open dossier</a>
    </article>
  </mr-module>
</mr-system>`;

export default function ArchitecturePage() {
  return (
    <main className="architecture-page">
      <nav className="dossier-nav">
        <Link href="/">← Return to system</Link>
        <span>ARCHITECTURE / OPERATING PRINCIPLES</span>
      </nav>
      <header className="architecture-hero">
        <p className="kicker">Understand first</p>
        <h1>Elaborate architecture.<br /><span>Economical execution.</span></h1>
        <p>
          The portfolio is one body of meaningful content with two presentations:
          an indexable website and a living system interface.
        </p>
      </header>

      <section className="architecture-principles" aria-label="Design principles">
        <article><span>01</span><h2>Understand</h2><p>Learn the environment before introducing architecture.</p></article>
        <article><span>02</span><h2>Reuse</h2><p>Preserve the useful systems, semantics, and capabilities already present.</p></article>
        <article><span>03</span><h2>Intervene</h2><p>Add only the smallest mechanism that understanding proves necessary.</p></article>
        <article><span>04</span><h2>Explain</h2><p>Let the interface reveal what the system is doing and why.</p></article>
      </section>

      <section className="language-section">
        <div className="language-copy">
          <p className="kicker">System markup</p>
          <h2>The interface reads the website’s own language.</h2>
          <p>
            Custom elements describe modules, graphics, connections, and behavior.
            Standard HTML inside those elements remains the accessible, searchable
            website. The build prepares the scene; the browser only paints and interacts.
          </p>
          <ol className="process-list">
            <li><strong>Author</strong><span>One semantic source</span></li>
            <li><strong>Prepare</strong><span>Validate and organize the scene</span></li>
            <li><strong>Deliver</strong><span>HTML plus compact visual instructions</span></li>
            <li><strong>Enhance</strong><span>Activate only after capability checks pass</span></li>
          </ol>
        </div>
        <div className="code-window">
          <div className="code-window-bar"><span /><span /><span /><b>system-markup.html</b></div>
          <pre><code>{markupExample}</code></pre>
        </div>
      </section>

      <section className="performance-contract">
        <p className="kicker">Performance contract</p>
        <h2>The build system thinks. The host delivers. The browser paints.</h2>
        <div>
          <span>No continuous page parsing</span>
          <span>No mandatory graphics engine</span>
          <span>No content trapped in canvas</span>
          <span>Adaptive visual quality</span>
          <span>Motion pauses off-screen</span>
          <span>Complete HTML fallback</span>
        </div>
      </section>
    </main>
  );
}
