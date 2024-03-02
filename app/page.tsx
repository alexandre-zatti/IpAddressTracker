import { IpSearch } from "@/app/components/IpSearch";
import { IpInfoContainer } from "@/app/components/IpInfoContainer";
import { IpDataProvider } from "@/app/components/IpDataProvider";
import { Map } from "@/app/components/Map";

export default async function Home() {

  return (
    <main className="min-h-screen grid grid-rows-[300px_auto] grid-cols-1">
      <IpDataProvider>
        <div className="bg-mobile md:bg-desktop bg-cover flex flex-col gap-6 items-center p-6 relative">
          <h1 className="text-2xl text-white md:text-4xl">IP Adress Tracker</h1>
          <IpSearch/>
          <IpInfoContainer/>
        </div>
        <Map/>
      </IpDataProvider>
    </main>
  );
}
