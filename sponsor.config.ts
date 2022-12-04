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
      title: 'Sponsors',
      // to replace the entire tier rendering
      // compose: (composer, tierSponsors, config) => {
      //   composer.addRaw(
      //     '<-- custom svg -->',
      //   )
      // },
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 10,
      preset: presets.medium,
      // to insert custom elements after the tier block
      composeAfter: (composer, tierSponsors, config) => {
        composer.addSpan(10)
      },
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 50,
      preset: presets.large,
    }
  ],
})
