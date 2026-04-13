/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineConfig, tierPresets } from 'sponsorkit'

export default defineConfig({
  outputDir: '.',
  formats: ['json', 'svg'],
  tiers: [
    {
      title: 'Sponsors ❤️',
      preset: tierPresets.base,
    },
    {
      title: 'Silver Sponsors 💖',
      monthlyDollars: 3,
      preset: tierPresets.medium,
      composeAfter: (composer, tierSponsors, config) => {
        composer.addSpan(10)
      },
    },
    {
      title: 'Gold Sponsors 🧡',
      monthlyDollars: 5,
      preset: tierPresets.large,
    },
    {
      title: 'Platinum Sponsors 🤍',
      monthlyDollars: 10,
      preset: tierPresets.xl,
    },
  ],
})
