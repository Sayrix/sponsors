/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineConfig, presets } from 'sponsorkit'

export default defineConfig({
  github: {
    login: 'sayrix',
    type: 'user',
  },
  formats: ['json', 'svg'],
  tiers: [
    {
      title: 'Sponsors โค๏ธ',
      preset: presets.base,
    },
    {
      title: 'Silver Sponsors ๐',
      monthlyDollars: 5,
      preset: presets.medium,
      // to insert custom elements after the tier block
      composeAfter: (composer, tierSponsors, config) => {
        composer.addSpan(10)
      },
    },
    {
      title: 'Gold Sponsors ๐งก',
      monthlyDollars: 10,
      preset: presets.large,
    },
    {
      title: 'Platinum Sponsors ๐ค',
      monthlyDollars: 20,
      preset: presets.xl,
    },
  ],
})
