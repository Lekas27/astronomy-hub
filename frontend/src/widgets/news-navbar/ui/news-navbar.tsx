import { Sparkles, SpaceIcon } from "lucide-react";
import { type FC } from "react";

import type { NewsSection } from "@/widgets/news-navbar/model/types/news-navbar";

type Props = {
  active: NewsSection;
  onChange: (section: NewsSection) => void;
};

export const NewsNavbar: FC<Props> = ({ active, onChange }) => {
  const baseClasses =
    "flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-300";

  const activeClasses =
    "bg-linear-to-r from-purple-600 to-blue-600 text-white shadow-lg";

  const inactiveClasses =
    "text-purple-300 hover:text-white bg-purple-900! hover:bg-purple-500/10";

  return (
    <div className="flex justify-center gap-3 py-6 border-b border-purple-800">
      <button
        onClick={() => onChange("apod")}
        className={`${baseClasses} ${
          active === "apod" ? activeClasses : inactiveClasses
        }`}
      >
        <Sparkles className="h-4 w-4" />
        APOD
      </button>

      {/* <button
        onClick={() => onChange("astronomy")}
        className={`${baseClasses} ${
          active === "astronomy" ? activeClasses : inactiveClasses
        }`}
      >
        <Telescope className="h-4 w-4" />
        Astronomy
      </button>

      <button
        onClick={() => onChange("spaceflight")}
        className={`${baseClasses} ${
          active === "spaceflight" ? activeClasses : inactiveClasses
        }`}
      >
        <Rocket className="h-4 w-4" />
        Spaceflight
      </button> */}

      {/* New NeoWs button */}
      <button
        onClick={() => onChange("neows")}
        className={`${baseClasses} ${
          active === "neows" ? activeClasses : inactiveClasses
        }`}
      >
        <SpaceIcon className="h-4 w-4" />
        NeoWs
      </button>
    </div>
  );
};
