import CameraView from "@/components/custom/camera-view";
import DefaultLayout from "@/components/layouts/default";

export default function Home() {
  return (
    <DefaultLayout
      head={{
        title: "YOLOv11 Fruits & Vegetables Classification",
        description: "Veritae veritatum",
      }}
    >
      <div className="w-full flex flex-col flex-1 items-center justify-center">
        <div className="mx-auto w-full md:border-x flex-1 flex flex-col border-border h-full max-w-5xl p-5">
          <div className="w-full grid md:grid-cols-2 items-center justify-center grid-cols-1 gap-5">
            <CameraView />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
