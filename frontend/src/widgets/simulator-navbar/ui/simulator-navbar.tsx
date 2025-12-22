import { Link } from "@tanstack/react-router";
import { Box, Sparkles, Zap, Activity, Radio, StepBack } from "lucide-react";
import type { FC, ReactNode } from "react";

import type { ActiveSimulationType } from "@/pages/simulator/model/types/simulation";
import { Button } from "@/shared/components/ui/button";
import { Paragraph } from "@/shared/components/ui/typography/paragraph";
import { Span } from "@/shared/components/ui/typography/span";
import { Title } from "@/shared/components/ui/typography/title";

type Props = {
  element: ReactNode;
  activeSimulation: ActiveSimulationType | null;
  changeSimulation: (simulation: ActiveSimulationType) => void;
};

export const SimulatorNavbar: FC<Props> = ({
  element,
  changeSimulation,
  activeSimulation,
}) => {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="border-b-2 border-cyan-500/30 bg-linear-to-b from-slate-900 via-slate-900/95 to-slate-900/90 backdrop-blur-sm sticky top-0 z-10 shadow-2xl shadow-cyan-500/10">
        {/* Top console strip */}
        <div className="h-1 bg-linear-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>

        <div className="container mx-auto px-6 py-4">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full"></div>
                <div className="relative p-3 bg-linear-to-br from-cyan-500/20 to-blue-600/20 rounded-lg border border-cyan-400/30">
                  <Sparkles className="w-7 h-7 text-cyan-400" />
                </div>
              </div>
              <div>
                <Title className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-blue-300 to-cyan-300 tracking-wide uppercase">
                  Astronomy Simulator
                </Title>
                <Paragraph className="text-xs text-cyan-400/70 font-mono tracking-wider mt-1 flex items-center gap-2">
                  <Radio className="w-3 h-3 animate-pulse" />
                  SYSTEM ONLINE • READY FOR SIMULATION
                </Paragraph>
              </div>
            </div>
            <Link
              className="
            relative flex items-center gap-3 px-6 py-3 rounded-lg
            font-mono text-sm uppercase tracking-wider font-bold
            transition-all duration-300
          hover:bg-linear-to-br! hover:from-cyan-500/30! hover:to-blue-600/30! hover:border-2! hover:border-cyan-400/50! hover:text-cyan-100! hover:shadow-lg! hover:shadow-cyan-500/20!
          bg-red-800/50! border! border-red-700/50! text-red-400! 
          "
              to="/"
            >
              <StepBack className="w-4 h-4" />
              Leave Simulation
            </Link>

            {/* Status Indicators */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-cyan-500/10 border border-cyan-400/30 rounded">
                <Activity className="w-4 h-4 text-green-400 animate-pulse" />
                <Span className="text-xs font-mono text-green-400">ACTIVE</Span>
              </div>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                <div
                  className="w-2 h-2 rounded-full bg-cyan-400/60 animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 rounded-full bg-cyan-400/30 animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Console Control Panel */}
          <div className="relative">
            {/* Decorative corner brackets */}
            <div className="absolute -top-1 -left-1 w-6 h-6 border-l-2 border-t-2 border-cyan-400/50"></div>
            <div className="absolute -top-1 -right-1 w-6 h-6 border-r-2 border-t-2 border-cyan-400/50"></div>
            <div className="absolute -bottom-1 -left-1 w-6 h-6 border-l-2 border-b-2 border-cyan-400/50"></div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 border-r-2 border-b-2 border-cyan-400/50"></div>

            <div className="bg-linear-to-br from-slate-800/80 to-slate-900/80 border border-cyan-500/20 rounded-lg p-4 backdrop-blur">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                <Span className="text-xs font-mono text-cyan-300/70 uppercase tracking-wider">
                  Module Selection
                </Span>
              </div>

              {/* Tab Navigation */}
              <div className="flex gap-3">
                <Button
                  onClick={() => changeSimulation("supernova")}
                  className={`
                    relative flex items-center gap-3 px-6 py-3 rounded-lg font-mono text-sm uppercase tracking-wider transition-all duration-300
                    ${
                      activeSimulation === "supernova"
                        ? "bg-linear-to-br from-cyan-500/30 to-blue-600/30 border-2 border-cyan-400/50 text-cyan-100 shadow-lg shadow-cyan-500/20"
                        : "bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:bg-slate-700/50 hover:border-cyan-500/30 hover:text-cyan-300"
                    }
                  `}
                  icon={Zap}
                  iconClassName="w-5 h-5 relative text-cyan-600"
                >
                  {activeSimulation === "supernova" && (
                    <div className="absolute inset-0 bg-cyan-400/10 blur-xl rounded-lg"></div>
                  )}

                  <Span className="relative">Supernova</Span>
                  {activeSimulation === "supernova" && (
                    <div className="absolute -right-1 -top-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                  )}
                </Button>

                <Button
                  onClick={() => changeSimulation("asteroid-collision")}
                  className={`
                    relative flex items-center gap-3 px-6 py-3 rounded-lg font-mono text-sm uppercase tracking-wider transition-all duration-300
                    ${
                      activeSimulation === "asteroid-collision"
                        ? "bg-linear-to-br from-cyan-500/30 to-blue-600/30 border-2 border-cyan-400/50 text-cyan-100 shadow-lg shadow-cyan-500/20"
                        : "bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:bg-slate-700/50 hover:border-cyan-500/30 hover:text-cyan-300"
                    }
                  `}
                  icon={Box}
                  iconClassName="w-5 h-5 relative text-cyan-600"
                >
                  {activeSimulation === "asteroid-collision" && (
                    <div className="absolute inset-0 bg-cyan-400/10 blur-xl rounded-lg"></div>
                  )}

                  <Span className="relative">Asteroid Collision</Span>
                  {activeSimulation === "asteroid-collision" && (
                    <div className="absolute -right-1 -top-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Element slot */}
        <div className="border-t border-cyan-500/10">{element}</div>
      </div>
    </div>
  );
};
