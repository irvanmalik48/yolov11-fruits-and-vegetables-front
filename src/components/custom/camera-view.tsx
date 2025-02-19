import { useEffect, useRef, useState } from "react";
import { Camera } from "react-camera-pro";
import { Camera as CameraLucide, Stars, SwitchCamera, X } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type Result = {
  id: string;
  image: string;
  prediction: string;
};

export default function CameraView() {
  const cameraRef = useRef(null);
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const [image, setImage] = useState<Result[]>([]);
  const [parent, _enableAnimations] = useAutoAnimate();

  useEffect(() => {
    const resultsLocalStorage = localStorage.getItem("results");
    if (resultsLocalStorage) {
      setImage(JSON.parse(resultsLocalStorage));
    }
  }, []);

  return (
    <>
      <div className="w-full h-fit relative rounded-lg overflow-hidden border border-border">
        <Camera
          aspectRatio={3 / 4}
          ref={cameraRef}
          errorMessages={{
            noCameraAccessible:
              "No camera accessible. Please connect a camera.",
            permissionDenied:
              "Permission denied. Please give access to the camera.",
            switchCamera: "Switch camera isn't supported.",
            canvas: "Canvas isn't supported.",
          }}
          numberOfCamerasCallback={setNumberOfCameras}
        />
        <div className="absolute top-0 left-0 w-full bg-background/90 dark:bg-background/50 backdrop-blur-lg border-b border-border px-5 py-3">
          <p className="text-xs text-center line-clamp-1">
            Camera Count:{" "}
            <span className="font-semibold">{numberOfCameras}</span>
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-transparent gap-3 grid grid-cols-2 bg-opacity-50 p-3">
          <button
            className="w-full bg-background/90 dark:bg-background/50 hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors backdrop-blur-lg border border-border flex justify-center gap-3 items-center text-foreground rounded-md py-2 text-sm"
            onClick={() => {
              // @ts-expect-error
              const photo = cameraRef?.current?.takePhoto();
              setImage([
                ...image,
                {
                  id: uuidv4(),
                  image: photo,
                  prediction: "TBD",
                },
              ]);
              localStorage.setItem(
                "results",
                JSON.stringify([
                  ...image,
                  {
                    id: uuidv4(),
                    image: photo,
                    prediction: "TBD",
                  },
                ])
              );
            }}
          >
            <CameraLucide className="w-4 h-4" />
            <span className="line-clamp-1 hidden md:inline">Take Photo</span>
          </button>
          <button
            className="w-full bg-background/90 dark:bg-background/50 hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors backdrop-blur-lg border border-border flex justify-center gap-3 items-center text-foreground rounded-md py-2 text-sm"
            onClick={() => {
              // @ts-expect-error
              cameraRef?.current?.switchCamera();
            }}
          >
            <SwitchCamera className="w-4 h-4" />
            <span className="line-clamp-1 hidden md:inline">Switch Camera</span>
          </button>
        </div>
      </div>
      <div className="w-full flex h-[639.984px] flex-col gap-3">
        <h2 className="w-full flex items-center justify-center md:justify-start gap-3 text-lg font-medium text-foreground">
          <Stars className="w-6 h-6" />
          <span>Predicted Results</span>
        </h2>
        <div
          ref={parent}
          className="w-full overflow-y-scroll overflow-x-hidden border border-border rounded-lg h-full"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {image.length === 0 && (
            <p className="text-xs text-center w-full h-full flex items-center justify-center text-muted-foreground">
              No results available.
            </p>
          )}
          {image.map((result) => (
            <div
              key={result.id}
              className="w-full relative group flex overflow-hidden gap-3 border-b border-border/50"
            >
              <div className="py-3 pl-3">
                <img
                  src={result.image}
                  alt="Captured Image"
                  className="w-12 border rounded-md border-border"
                />
              </div>
              <div className="w-full min-h-full flex flex-col justify-center gap-1">
                <p className="text-xs text-muted-foreground">
                  ID:{" "}
                  <span className="font-medium text-foreground">
                    {result.id}
                  </span>
                </p>
                <p className="text-xs text-muted-foreground">
                  Prediction: {result.prediction}
                </p>
              </div>
              <button
                onClick={() => {
                  setImage(image.filter((img) => img.id !== result.id));
                  localStorage.setItem(
                    "results",
                    JSON.stringify(image.filter((img) => img.id !== result.id))
                  );
                }}
                className="absolute p-3 bg-transparent hover:bg-primary hover:text-primary-foreground rounded-full right-3 top-1/2 -translate-y-1/2 translate-x-15 rotate-90 transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:rotate-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
