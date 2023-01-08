/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineConfig, presets } from 'sponsorkit'

export default defineConfig({
  github: {
    login: 'sayrix',
    type: 'user',
  },
  formats: ['json', 'svg', 'png'],
  tiers: [
    {
      title: 'Sponsors ❤️',
      preset: presets.base,
    },
    {
      title: 'Silver Sponsors 💖',
      monthlyDollars: 5,
      preset: presets.medium,
      // to insert custom elements after the tier block
      composeAfter: (composer, tierSponsors, config) => {
        composer.addSpan(10)
      },
    },
    {
      title: 'Gold Sponsors 🧡',
      monthlyDollars: 10,
      preset: presets.large,
    },
    {
      title: 'Platinum Sponsors 🤍',
      monthlyDollars: 20,
      preset: presets.xl,
    },
  ],
})
