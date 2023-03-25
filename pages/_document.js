import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/images/logo_default.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" href="/images/building_blocks.jpg" as="image" />
        <link rel="preload" href="/images/business_value.jpg" as="image" />
        <link rel="preload" href="/images/calm.jpg" as="image" />
        <link rel="preload" href="/images/collaboration.jpg" as="image" />
        <link rel="preload" href="/images/partnership_tall.jpg" as="image" />
        <link rel="preload" href="/images/people_talking.jpg" as="image" />
        <link rel="preload" href="/images/purpose_tall.jpg" as="image" />
        <link rel="preload" href="/images/shapes.png" as="image" />
        <link rel="preload" href="/images/trust_and_respect.jpg" as="image" />
        <link rel="preload" href="/images/trust_and_respect_in_team.jpg" as="image" />
        <link rel="preload" href="/images/understandability_illustration.png" as="image" />
        <link rel="preload" href="/images/working_in_office.jpg" as="image" />
        <link
          rel="preload"
          href="https://themossconcept-website-assets.fra1.cdn.digitaloceanspaces.com/working.mov"
          as="video"
        />
        <link
          rel="preload"
          href="https://themossconcept-website-assets.fra1.cdn.digitaloceanspaces.com/frontpage.mp4"
          as="video"
        />
        <link
          rel="preload"
          href="https://themossconcept-website-assets.fra1.cdn.digitaloceanspaces.com/building_blocks.mov"
          as="video"
        />
        <link
          rel="preload"
          href="https://themossconcept-website-assets.fra1.cdn.digitaloceanspaces.com/trees-swaying.mov"
          as="video"
        />
        <link
          rel="preload"
          href="https://themossconcept-website-assets.fra1.cdn.digitaloceanspaces.com/forrest.mov"
          as="video"
        />
        <link
          rel="preload"
          href="https://themossconcept-website-assets.fra1.cdn.digitaloceanspaces.com/teamwork.mov"
          as="video"
        />
        <meta name="theme-color" content="#000000" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
