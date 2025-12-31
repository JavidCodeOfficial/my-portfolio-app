"use client";

import Particles from "./Particles";

export default function BackgroundParticles() {
  return (
    <div className="fixed inset-0 z-0">
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={120}
        particleSpread={10}
        speed={0.05}
        particleBaseSize={80}
        moveParticlesOnHover={true}
        alphaParticles={true}
        disableRotation={false}
      />
    </div>
  );
}
