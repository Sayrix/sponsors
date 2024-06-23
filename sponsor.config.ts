/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineConfig, tierPresets } from 'sponsorkit'

export default defineConfig({
  github: {
    login: 'sayrix',
    type: 'user',
  },
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
      // to insert custom elements after the tier block
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
