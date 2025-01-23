
import { Banner } from "@/components/MainPage/Banner/Banner";
import { RecomendTitle } from "@/components/MainPage/RecomendTitle/RecomendTitle";
import Sidebar from "@/components/MainPage/Sidebar/Sidebar";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto overflow-hidden">
      <div className="flex gap-6">
        <Sidebar />

        <div className="flex-1 flex flex-col gap-8 overflow-hidden">
          <Banner />

          <RecomendTitle />
        </div>
      </div>
    </div>
  );
}
