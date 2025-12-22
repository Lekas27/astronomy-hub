import { AsteroidCollisionSimulator } from "@/features/simulator/asteroid-collision/viewport/ui/asteroid-collision";
import { SupernovaSimulator } from "@/features/simulator/supernova/viewport/ui/supernova";
import { useSimulator } from "@/pages/simulator/model/hooks/use-simulator";
import { SimulatorNavbar } from "@/widgets/simulator-navbar/ui/simulator-navbar";

export const SimulatorPage = () => {
  const { activeSimulation, changeSimulation } = useSimulator();

  return (
    <SimulatorNavbar
      activeSimulation={activeSimulation}
      changeSimulation={changeSimulation}
      element={
        <div className="container mx-auto px-6 py-8 min-w-screen">
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            {activeSimulation === "supernova" && <SupernovaSimulator />}
            {activeSimulation === "asteroid-collision" && (
              <AsteroidCollisionSimulator />
            )}
          </div>
        </div>
      }
    />
  );
};
