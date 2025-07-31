import React from 'react';

const Stepper = ({ steps, activeStep }) => {
  return (
    <div className="flex justify-center mb-10">
      {steps.map((label, index) => (
        <div key={index} className="flex items-center gap-2">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm border transition-all duration-300
              ${index === activeStep
                ? 'bg-white text-black border-white shadow-lg'
                : 'text-white/70 border-white/30'
              }`}
          >
            {index + 1}
          </div>
          {index < steps.length - 1 && (
            <div className="w-8 h-px bg-white/40" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
