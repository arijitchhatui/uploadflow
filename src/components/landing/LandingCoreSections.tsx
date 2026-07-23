import { availableToday, browserFeatures, compatibilityNotes, permissions, primaryCta, workflow } from './content';
import { ArrowIcon, CheckIcon } from './icons';

export function HeroSection() {
  return (
    <>
      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(238,251,122,.08),transparent_31%),linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-size-[auto,48px_48px,48px_48px]" />
        <div className="relative mx-auto grid min-h-[calc(100svh-65px)] max-w-360 items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:px-12">
          <div>
            <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3.5 py-2 text-xs font-bold uppercase tracking-widest text-emerald-300">
              Available on the Chrome Web Store
            </span>
            <h1 className="mt-8 text-[clamp(2.55rem,8vw,6.5rem)] leading-[.86] tracking-[-.065em]">
              Move images &amp; videos
              <br />
              <span className="text-[#eefb7a]">between websites</span>
              <br />
              without downloading.
            </h1>
            <h2 className="mt-8 max-w-xl text-2xl leading-tight tracking-tight sm:text-3xl">
              Capture it on one site. <span className="text-white/45">Prepare it. Upload it on another.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
              UploadFlow lets you capture authorized media from one webpage, crop, optimize, watermark, or redact it privately, and deliver
              it directly to another website&apos;s upload field—without cluttering your Downloads folder.
            </p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/50">
              Never download it. Never lose it. UploadFlow remembers the media you explicitly save so you do not have to manage folders or
              filenames.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={primaryCta.href}
                target={primaryCta.href.startsWith('http') ? '_blank' : undefined}
                rel={primaryCta.href.startsWith('http') ? 'noreferrer' : undefined}
                className="inline-flex min-h-12 items-center gap-3 rounded-full bg-[#eefb7a] px-6 text-xs sm:text-sm font-black uppercase text-black transition hover:bg-[#f4ff94]"
              >
                {primaryCta.label} <ArrowIcon />
              </a>
              <a
                href="/test"
                className="inline-flex min-h-12 items-center rounded-full border border-white/15 px-6 text-xs sm:text-sm font-bold uppercase hover:border-[#eefb7a]/40 hover:text-[#eefb7a] transition"
              >
                Test Page
              </a>
              <a
                href="/how-it-works"
                className="inline-flex min-h-12 items-center rounded-full border border-white/15 px-6 text-xs sm:text-sm font-bold uppercase hover:border-white/40 transition"
              >
                See how it works
              </a>
            </div>
          </div>
          <figure className="overflow-hidden rounded-[26px] border border-white/15 bg-[#15191b] shadow-[0_45px_120px_rgba(0,0,0,.55)]">
            <img
              src="/features/product-overview-actual.png"
              alt="Actual UploadFlow landing page, upload workspace, and persistent media shelf"
              width="2832"
              height="1530"
              className="h-auto w-full object-contain object-top"
            />
            <figcaption className="border-t border-white/10 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white/50">
              UploadFlow Extension · Popup, editor, and side-panel architecture
            </figcaption>
          </figure>
        </div>
      </section>
      <div className="overflow-hidden border-b border-white/10 bg-[#eefb7a] py-3.5 text-black">
        <div className="flex min-w-max justify-center gap-10 text-xs sm:text-sm font-black uppercase italic tracking-widest">
          <span>Capture</span>
          <span>✦</span>
          <span>Transform</span>
          <span>✦</span>
          <span>Deliver</span>
          <span>✦</span>
          <span>Recall</span>
        </div>
      </div>
    </>
  );
}

export function AvailableTodaySection() {
  return (
    <section className="border-b border-white/10 bg-[#111416]">
      <div className="mx-auto max-w-360 px-5 py-20 sm:px-8 lg:px-12">
        <p className="text-xs font-extrabold uppercase tracking-[.2em] text-emerald-400">Chrome Web Store Extension</p>
        <h2 className="mt-5 text-4xl sm:text-6xl">What is already working</h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/55">
          UploadFlow is available on the Chrome Web Store. These core capabilities work in the extension build.
        </p>
        <div className="mt-10 grid border-l border-t border-white/15 sm:grid-cols-2">
          {availableToday.map(([title, copy]) => (
            <article key={title} className="border-b border-r border-white/15 p-6 sm:p-8">
              <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-300">
                Ready in build
              </span>
              <h3 className="mt-7 text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WorkflowSection() {
  return (
    <section id="workflow" className="mx-auto max-w-360 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#eefb7a]">How it works</p>
          <h2 className="mt-4 text-5xl">
            One pause.
            <br />
            Total control.
          </h2>
        </div>
        <div className="border-t border-white/15">
          {workflow.map(([number, title, copy]) => (
            <article key={number} className="grid gap-4 border-b border-white/15 py-8 sm:grid-cols-[70px_180px_1fr]">
              <span className="font-mono text-xs sm:text-sm font-semibold text-[#eefb7a]">/{number}</span>
              <h3 className="text-xl">{title}</h3>
              <p className="text-sm sm:text-base leading-relaxed text-white/55">{copy}</p>
            </article>
          ))}
        </div>
      </div>
      <img
        src="/features/cross-site-handoff.png"
        alt="UploadFlow cross-site media handoff"
        width="1731"
        height="909"
        className="mt-16 rounded-[28px] border border-white/15"
      />
    </section>
  );
}

export function ExtensionSection() {
  return (
    <section id="extension" className="border-y border-white/10 bg-[#111416]">
      <div className="mx-auto grid max-w-360 gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:px-12">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-widest text-emerald-400">From source to destination</p>
          <h2 className="mt-5 text-5xl">
            Find it once.
            <br />
            <span className="text-[#eefb7a]">Upload it elsewhere.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/55">
            Inspect Mode reveals controls only while hovering. Right-click capture and the persistent shelf provide alternate paths.
          </p>
        </div>
        <div className="border-t border-white/15">
          {browserFeatures.map(([number, title, copy]) => (
            <article key={number} className="grid grid-cols-[44px_1fr] border-b border-white/15 py-5">
              <span className="font-mono text-xs sm:text-sm font-semibold text-[#eefb7a]">/{number}</span>
              <div>
                <h3 className="text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{copy}</p>
              </div>
            </article>
          ))}
        </div>
        <img
          src="/features/media-shelf-actual.png"
          alt="Actual UploadFlow side panel showing saved media beside the landing page"
          width="2808"
          height="1498"
          loading="lazy"
          className="h-auto w-full rounded-3xl border border-white/15 object-contain object-top lg:col-span-2"
        />
      </div>
    </section>
  );
}

export function TrustSections() {
  return (
    <>
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-360 px-5 py-20 sm:px-8 lg:px-12">
          <h2 className="text-4xl">
            Clear permissions.
            <br />
            Clear boundaries.
          </h2>
          <div className="mt-10 grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {permissions.map(([title, copy]) => (
              <article key={title} className="border-b border-r border-white/15 p-6">
                <h3 className="text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="border-b border-white/10 bg-[#111416]">
        <div className="mx-auto grid max-w-360 gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-400">Compatibility</p>
            <h2 className="mt-5 text-5xl">Some URLs stay protected.</h2>
          </div>
          <ul className="border-t border-white/15">
            {compatibilityNotes.map((note) => (
              <li key={note} className="flex gap-3 border-b border-white/15 py-4 text-sm sm:text-base text-white/60">
                <CheckIcon />
                {note}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="privacy">
        <div className="mx-auto grid max-w-360 gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-12">
          <h2 className="text-6xl">
            Your files
            <br />
            stay yours.
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-white/60">
            <strong className="text-white">Local by default. </strong>Image preparation, privacy review, crop/background work, watermarks,
            batches, platform packs, duplicate checks, and supported video work run in your browser. URL retrieval and optional AI upscaling
            are explicit network actions.
          </p>
        </div>
      </section>
    </>
  );
}
