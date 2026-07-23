import { SystemExperience } from "./system/system-experience";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mark Ramirez",
  jobTitle: "Software Architect and Developer",
  knowsAbout: [
    "C#",
    ".NET",
    "Desktop application development",
    "Developer tools",
    "Software architecture",
    "User experience design",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <SystemExperience />
    </>
  );
}
