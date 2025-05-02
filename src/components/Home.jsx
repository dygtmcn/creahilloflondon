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
      <OurWork />
      <News />
      <OurTeam />
      <Songs />
      <MailingList />
      <Footer />
    </main>
  );
}
