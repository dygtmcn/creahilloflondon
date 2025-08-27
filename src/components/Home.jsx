// src/components/Home.jsx
import HomeAnimation from "./HomeAnimation";
import OurWork from "./OurWork";
import Songs from "./Songs";
import OurTeam from "./OurTeam";
import News from "./News";
import MailingList from "./MailingList";
import Footer from "./Footer";

export default function Home() {
  return (
    <main>
      <HomeAnimation />

      {/* === About → OurWork === */}
      <section id="ourWork" data-section>
        <OurWork />
      </section>

      {/* === Blog → News === */}
      <section id="news" data-section>
        <News />
      </section>

      <OurTeam />

      {/* === Songs → Songs === */}
      <section id="songs" data-section>
        <Songs />
      </section>

      <MailingList />
      <Footer />
    </main>
  );
}
