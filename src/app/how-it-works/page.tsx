import type { Metadata } from 'next';
import { ConfigurationGuide } from '../../components/how-it-works/ConfigurationGuide';
import { FeatureSection } from '../../components/how-it-works/FeatureSection';
import { featureGroups } from '../../components/how-it-works/content';
import { LandingFooter, LandingHeader } from '../../components/landing/LandingChrome';

export const metadata: Metadata = {
  title: 'How UploadFlow Works',
  description:
    'A detailed guide to UploadFlow capture, configuration, media shelf, preparation tools, privacy review, batches, video editing, and cross-site handoff.'
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-[#0b0d0f] text-white">
      <LandingHeader />
      <main className="mx-auto max-w-360 px-5 pt-20 sm:px-8 lg:px-12">
        <header className="py-20 sm:py-28">
          <p className="text-xs font-bold uppercase tracking-wider text-[#eefb7a]">Product guide</p>
          <h1 className="mt-6 max-w-5xl text-5xl leading-[.86] sm:text-7xl lg:text-8xl">
            From a webpage
            <br />
            to a ready upload.
          </h1>
          <p className="mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-white/60">
            Follow the complete local-first workflow, understand the settings you can control, and see where Chrome or the source website
            sets a capability boundary.
          </p>
          <nav className="mt-10 flex flex-wrap gap-2.5" aria-label="Page sections">
            <a
              href="#configuration"
              className="rounded-full border border-[#eefb7a]/40 bg-[#eefb7a]/12 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#eefb7a] transition hover:bg-[#eefb7a]/20"
            >
              Configuration
            </a>
            {featureGroups.map((feature) => (
              <a
                key={feature.id}
                href={`#${feature.id}`}
                className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/65 hover:border-[#eefb7a]/40 hover:text-[#eefb7a] transition"
              >
                {feature.title}
              </a>
            ))}
          </nav>
        </header>
        <ConfigurationGuide />
        {featureGroups.map((feature, index) => (
          <FeatureSection key={feature.id} feature={feature} index={index} />
        ))}
      </main>
      <LandingFooter />
    </div>
  );
}
