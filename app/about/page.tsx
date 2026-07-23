import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Mark Ramirez, a C#/.NET software architect and developer focused on understandable, user-first systems.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <nav className="dossier-nav">
        <Link href="/">← Return to system</Link>
        <span>OPERATOR PROFILE / MARK RAMIREZ</span>
      </nav>
      <section className="about-hero">
        <div className="operator-mark">MR<span>operator / architect</span></div>
        <div>
          <p className="kicker">Software architect &amp; developer</p>
          <h1>I turn difficult systems into understandable tools.</h1>
          <p>
            I design C#/.NET desktop applications, developer tools, analysis
            environments, and systems that respect the person using them.
          </p>
        </div>
      </section>
      <section className="about-grid">
        <article>
          <p className="module-meta">How I work</p>
          <h2>Architecture begins after understanding.</h2>
          <p>
            I start by asking what already exists, what the user actually needs,
            and which assumptions can be removed. The architecture grows from that evidence.
          </p>
        </article>
        <article>
          <p className="module-meta">What I build</p>
          <h2>Tools for people doing complex work.</h2>
          <p>
            My strongest work sits where desktop software, developer experience,
            system observation, data interpretation, and practical UX meet.
          </p>
        </article>
        <article>
          <p className="module-meta">Professional direction</p>
          <h2>Open to remote software opportunities.</h2>
          <p>
            I am building toward professional C#/.NET and software-tooling work,
            supported by private source, working applications, and architecture walkthroughs.
          </p>
        </article>
      </section>
      <section className="capability-matrix">
        <p className="kicker">Capability matrix</p>
        <div>
          <span>C# / .NET</span><span>WinForms / WPF</span><span>Roslyn</span>
          <span>SQLite</span><span>System architecture</span><span>Desktop UX</span>
          <span>Developer tooling</span><span>Runtime observation</span><span>Technical communication</span>
        </div>
      </section>
    </main>
  );
}
