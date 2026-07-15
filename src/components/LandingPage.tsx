import { UploadFlowIcon } from '../lib/icons';

const features = [
  {
    title: 'Optimize images',
    description: 'Resize, compress, and convert PNG, JPEG, and WebP files before they leave your browser.',
    icon: '↗'
  },
  {
    title: 'Redact private data',
    description: 'Review text files and mask email addresses, phone numbers, cards, and IP addresses.',
    icon: '✦'
  },
  {
    title: 'Add watermarks',
    description: 'Place a configurable text watermark on images with a live preview before upload.',
    icon: 'A'
  },
  {
    title: 'Stay local',
    description: 'File transformations happen on your device. UploadFlow does not send files to a server.',
    icon: '⌁'
  }
];

const steps = [
  ['01', 'Choose a file', 'Select or drop a supported file on any webpage.'],
  ['02', 'Review and edit', 'UploadFlow pauses the upload and opens its local editor.'],
  ['03', 'Continue safely', 'Approve the result and the modified file returns to the webpage.']
];

export function LandingPage() {
  return (
    <div className="h-full w-full overflow-y-auto bg-white text-slate-950 dark:bg-neutral-900 dark:text-white">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 px-5 py-4 backdrop-blur dark:border-white/10 dark:bg-neutral-900/90">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950 text-white dark:bg-white dark:text-slate-950">
              <UploadFlowIcon />
            </div>
            <div>
              <h1 className="m-0 text-[17px] leading-none">UploadFlow</h1>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">Private upload toolkit</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-emerald-600 sm:inline-flex dark:text-emerald-400">
              Runs locally
            </span>
            <a
              href="/test"
              className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-white transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
            >
              Test UploadFlow
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-5 pb-10">
        <section className="border-b border-slate-200 py-10 md:py-16 dark:border-white/10">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Control every upload</p>
          <h2 className="max-w-3xl text-4xl leading-[0.98] md:text-6xl">Smaller, safer files before they reach the web.</h2>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
            UploadFlow intercepts supported file selections, gives you a private editing workspace, and returns the finished file to the original webpage.
          </p>
        </section>

        <section className="py-8 md:py-12">
          <div className="mb-3 flex items-end justify-between">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">Capabilities</p>
              <h2 className="mt-1 text-base">Built for files in motion</h2>
            </div>
            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">No cloud required</span>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 dark:border-white/10 dark:bg-white/5">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-950 text-xs font-black text-white dark:bg-white dark:text-slate-950">
                  {feature.icon}
                </span>
                <h3 className="mt-3 text-xs">{feature.title}</h3>
                <p className="mt-1.5 text-[10px] leading-4 text-slate-500">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-xl bg-slate-950 p-5 text-white md:p-7 dark:bg-white dark:text-slate-950">
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] opacity-55">How it works</p>
          <div className="mt-4 grid divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0 dark:divide-slate-950/10">
            {steps.map(([number, title, description]) => (
              <div key={number} className="grid grid-cols-[30px_1fr] gap-3 py-4 md:px-5 md:py-2 md:first:pl-0 md:last:pr-0">
                <span className="font-mono text-[10px] font-bold opacity-45">{number}</span>
                <div>
                  <h3 className="text-xs">{title}</h3>
                  <p className="mt-1 text-[10px] leading-4 opacity-60">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
