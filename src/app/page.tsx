import AboutSession from "@/components/shared/about-session";
import AchievementsSession from "@/components/shared/achievements-session";
import IntroSession from "@/components/shared/intro-session";

export default function Home() {
  return (
    <main className="container min-h-screen mt-24">
      <IntroSession />
      <AchievementsSession />
      <AboutSession />
    </main>
  );
}
