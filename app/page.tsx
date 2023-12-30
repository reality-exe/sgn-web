import { createClient } from "@/utils/supabase/server";
import DiscordButton from "../components/DiscordButton";

//#region Next.js Imports
import { cookies } from "next/headers";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

//#region Local Imports
const ancient = localFont({ src: "./fonts/anquietas.ttf" });
//#endregion

export default async function Index() {
  const cookieStore = cookies();

  const supabase = createClient(cookieStore);

  var { data: gates } = await supabase.from("gates").select("*");
  var { data: gate_summary } = await supabase
    .from("gate_summary")
    .select("*")
    .single();

  return (
    <div className="flex-1 w-full flex flex-col gap-0 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-25">
        <div className="w-full max-w-7xl flex justify-between items-center p-3 text-sm">
          <p className="text-2xl">Ancients of Resonite</p>
          <div className="flex gap-4">
            <DiscordButton />
          </div>
        </div>
      </nav>

      
      <div className="animate-in flex-1 flex gap-20 flex-col mx-2 text-center">
        {gates?.length != 0 && (
          <div className={roboto.className}>
            <p className="my-5">
              MilkyWay Gates:{" "}
              <span className="text-sky-400">{gate_summary?.m_count}</span> |
              Pegasus Gates:{" "}
              <span className="text-sky-400">{gate_summary?.p_count}</span> |
              Universe Gates:{" "}
              <span className="text-sky-400">{gate_summary?.u_count}</span>
            </p>
            <div className="flex flex-wrap gap-5 place-content-center">
              {gates?.map((gate: any) => (
                <div
                  className="p-4 bg-foreground/10 rounded-xl w-72"
                  key={gate.id}
                >
                  <p className="text-xl my-2">{gate.name}</p>
                  <div className="grid grid-cols-1 divide-y gap-2 text-sm">
                    <div className="flex justify-between">
                      <p>Gate Address:</p>
                      <p>
                        {gate.gate_address}
                        <span className="text-sky-400">
                          {gate.gate_code.substring(0, 1)}
                        </span>
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p>Host ID:</p>
                      <p>{gate.host_id}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Players:</p>
                      <p>
                        {gate.current_users}/{gate.max_users}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p>Is Headless:</p>
                      <p>{gate.is_headless ? "Yes" : "No"}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {gates?.length == 0 && (
          <div className="flex flex-wrap my-10 text-3xl">
            No Active Stargates
          </div>
        )}
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-4 flex justify-center text-center text-xl">
        <p className={ancient.className}>We are the Ancients of Resonite</p>
      </footer>
    </div>
  );
}
