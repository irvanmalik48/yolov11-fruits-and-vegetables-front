import DefaultLayout from "@/components/layouts/default";

export default function Home() {
  return (
    <DefaultLayout
      head={{ title: "Project Arienne", description: "Veritae veritatum" }}
    >
      <div className="mx-auto w-full max-w-4xl">home</div>
    </DefaultLayout>
  );
}
