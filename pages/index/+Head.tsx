export default function Head() {
  return (
    <>
      <meta name="description" content="Welcome to Arif Basha's personal portfolio website. Explore my projects, skills, and get in touch!" />
      <meta name="keywords" content="Arif Basha, Portfolio, Web Developer, Android Developer, Projects, Skills, Contact" />
      <meta name="author" content="Arif Basha" />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="ArifBasha | Portfolio" />
      <meta property="og:description" content="Welcome to Arif Basha's portfolio. Explore projects, skills, and contact information." />
      <meta property="og:url" content="https://arifbasha559.vercel.app/" />
      <meta property="og:image" content="https://arifbasha559.vercel.app/Profile.jpg" />
      <meta property="og:site_name" content="Arif Basha Portfolio" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ArifBasha | Portfolio" />
      <meta name="twitter:description" content="Welcome to Arif Basha's portfolio. Explore projects, skills, and contact information." />
      <meta name="twitter:creator" content="@arifbasha559" />
      <link rel="canonical" href="https://arifbasha559.vercel.app/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Arif Basha",
            url: "https://arifbasha559.vercel.app/",
            sameAs: [
              "https://github.com/ArifBasha559",
              "https://www.linkedin.com/in/arifbasha559/",
            ],
            jobTitle: "Full-stack Developer",
            description: "Full-stack developer building modern web and mobile experiences. Explore projects, skills, and contact me for collaborative work.",
          }),
        }}
      />
    </>
  );
}