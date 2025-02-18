import CameraView from "@/components/custom/camera-view";
import DefaultLayout from "@/components/layouts/default";

export default function Home() {
  return (
    <DefaultLayout
      head={{ title: "Project Arienne", description: "Veritae veritatum" }}
    >
      <div className="w-full p-5">
        <div className="mx-auto w-full max-w-4xl">
          <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-5">
            <CameraView />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
