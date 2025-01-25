import { Banner } from "@/components/MainPage/Banner/Banner";
import { RecomendTitle } from "@/components/MainPage/RecomendTitle/RecomendTitle";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <Banner />

      <RecomendTitle />
    </div>
  );
}
