import type { Metadata } from 'next';
import { LandingFooter, LandingHeader } from '../../components/landing/LandingChrome';

export const metadata: Metadata = {
  title: 'Support | UploadFlow',
  description: 'Get help with UploadFlow, report a problem, or learn how to delete locally stored extension data.'
};

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-[#0b0d0f] text-white">
      <LandingHeader />
      <main className="px-5 pt-28 pb-16 sm:px-8 sm:py-24">
        <article className="mx-auto max-w-3xl">
          <a href="/" className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#eefb7a] hover:underline">
            ← UploadFlow
          </a>
          <p className="mt-12 text-xs font-bold uppercase tracking-wider text-emerald-400">Extension support</p>
          <h1 className="mt-5 text-5xl leading-[.9] sm:text-7xl">
            Help with files
            <br />
            in motion.
          </h1>
          <p className="mt-7 text-base sm:text-lg leading-relaxed text-white/60">
            Use the steps below before reporting an issue. Never include private files, signed media URLs, passwords, tokens, or personal
            information in a public report.
          </p>

          <div className="mt-14 space-y-8">
            <section id="install" className="rounded-2xl border border-emerald-500/25 bg-emerald-950/30 p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">Chrome Web Store</p>
              <h2 className="mt-3 text-xl sm:text-2xl font-bold">Install UploadFlow</h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/60">
                Install the UploadFlow extension directly from the official Chrome Web Store listing.
              </p>
              <a
                href="https://chromewebstore.google.com/detail/uploadflow/geaebpfeoobmmdodclaglapichfalifh"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex min-h-11 items-center rounded-full bg-[#eefb7a] px-6 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0b0d0f] transition hover:bg-[#f4ff94]"
              >
                Add to Chrome ↗
              </a>
            </section>

            <section className="rounded-2xl border border-white/10 bg-white/3 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold">Troubleshooting</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm sm:text-base leading-relaxed text-white/60">
                <li>Open UploadFlow Settings and confirm upload interception is enabled.</li>
                <li>After an extension update, reload the extension and refresh existing webpage tabs.</li>
                <li>Confirm the source URL is direct, still valid, and allows browser access.</li>
                <li>
                  Try the supported flows at{' '}
                  <a href="/test" className="text-[#eefb7a] underline underline-offset-2">
                    the test page
                  </a>
                  .
                </li>
              </ol>
            </section>

            <section className="rounded-2xl border border-white/10 bg-white/3 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold">Delete local data</h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/60">
                Private workflow history is disabled by default and can be cleared completely or per destination from UploadFlow Settings.
                Remove shelf records individually, or uninstall UploadFlow from <code className="text-white">chrome://extensions</code> to
                remove every extension setting and local record.
              </p>
            </section>

            <section className="rounded-2xl border border-white/10 bg-white/3 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold">Report a problem</h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/60">
                Open a GitHub issue and include the website, Chrome version, expected behavior, actual behavior, and reproducible steps.
                Replace private URLs with safe examples and never attach confidential files.
              </p>
              <a
                href="https://github.com/cloudgrids/uploadflow/issues/new/choose"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex min-h-11 items-center rounded-full bg-[#eefb7a] px-6 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0b0d0f] transition hover:bg-[#f4ff94]"
              >
                Open an issue or feature request ↗
              </a>
            </section>

            <p className="text-sm sm:text-base text-white/50">
              For privacy information, see the{' '}
              <a href="/privacy" className="text-[#eefb7a] underline underline-offset-2">
                UploadFlow privacy policy
              </a>
              .
            </p>
          </div>
        </article>
      </main>
      <LandingFooter />
    </div>
  );
}
