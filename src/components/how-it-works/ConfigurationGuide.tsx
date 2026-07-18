import { CheckIcon } from '../landing/icons';
import { configurationGroups } from './content';

export function ConfigurationGuide() {
  return (
    <section id="configuration" className="border-t border-white/10 py-16 sm:py-24">
      <div className="max-w-3xl">
        <p className="text-[9px] font-black uppercase tracking-[.2em] text-emerald-400">Configure UploadFlow</p>
        <h2 className="mt-5 text-4xl leading-[.92] sm:text-5xl">Choose how UploadFlow fits your workflow.</h2>
        <p className="mt-6 text-sm leading-6 text-white/50">
          Settings define when UploadFlow appears, where files come from, and which reusable defaults are available. They do not publish,
          submit, or permanently alter source media by themselves.
        </p>
      </div>

      <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {configurationGroups.map((configuration, index) => (
          <article
            key={configuration.id}
            id={`configuration-${configuration.id}`}
            className="rounded-3xl border border-white/10 bg-white/3 p-5"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-[8px] text-white/25">/{String(index + 1).padStart(2, '0')}</span>
              <a href={`#configuration-${configuration.id}`} className="text-[8px] font-bold uppercase text-white/25 hover:text-[#eefb7a]">
                Configuration
              </a>
            </div>
            <h3 className="mt-5 text-xl">{configuration.title}</h3>
            <p className="mt-3 text-[11px] leading-5 text-white/45">{configuration.summary}</p>
            <ul className="mt-5 space-y-3">
              {configuration.choices.map((choice) => (
                <li key={choice} className="flex gap-2.5 text-[10px] leading-4 text-white/40">
                  <span className="mt-0.5 shrink-0 text-[#eefb7a]">
                    <CheckIcon />
                  </span>
                  {choice}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
