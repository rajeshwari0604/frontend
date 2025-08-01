import React from "react";
import CircleCounter from "../Components/CircleCounter";

const StatsSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-[10vw] items-center justify-center bg-[#0e1629] py-16">
      <CircleCounter
        value="3000+"
        label="Deliveries"
        gradientId="grad1"
        gradientFrom="#3b82f6"
        gradientTo="#1d4ed8"
        percentage={1}
        radius={110}
      />
      <CircleCounter
        value="10000+"
        label="Happy Patients"
        gradientId="grad2"
        gradientFrom="#3b82f6"
        gradientTo="#1d4ed8"
        percentage={1}
        radius={110}
      />
      <CircleCounter
        value="6000+"
        label="Surgeries"
        gradientId="grad3"
        gradientFrom="#3b82f6"
        gradientTo="#1d4ed8"
        percentage={1}
        radius={110}
      />
    </div>
  );
};

export default StatsSection;
