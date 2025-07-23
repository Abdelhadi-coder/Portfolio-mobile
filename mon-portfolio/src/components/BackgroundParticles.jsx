import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import { useCallback } from "react"

export default function BackgroundParticles() {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 30 },
          size: { value: 2 },
          color: { value: "#60a5fa" },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false,
          },
          opacity: {
            value: 0.3,
          },
        },
        background: { color: "transparent" },
      }}
    />
  )
}
