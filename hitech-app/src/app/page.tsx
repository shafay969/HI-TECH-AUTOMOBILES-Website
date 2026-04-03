import { BackgroundPaths } from '@/components/ui/background-paths'
import { NeonButton } from '@/components/ui/neon-button'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Background Paths layer */}
      <BackgroundPaths title="Background Paths" />

      {/* Neon Button showcase — overlaid on top */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 gap-4 pointer-events-none">
        <p className="text-xs tracking-[0.2em] text-[#777] uppercase font-mono mb-2">
          Hi-Tech Automobiles — Neon Buttons
        </p>
        <div className="flex flex-wrap gap-4 items-center justify-center pointer-events-auto">
          {/* Default — outline with neon glow */}
          <NeonButton size="lg">Explore Our Craft</NeonButton>

          {/* Solid — filled red */}
          <NeonButton variant="solid" size="lg">
            Book via WhatsApp
          </NeonButton>

          {/* Ghost */}
          <NeonButton variant="ghost" size="lg">
            Call +92 300 4154606
          </NeonButton>

          {/* No neon (plain) */}
          <NeonButton neon={false} size="lg">
            Learn More
          </NeonButton>
        </div>
      </div>
    </div>
  )
}
