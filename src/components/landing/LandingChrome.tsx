'use client';

import { useState } from 'react';
import { UploadFlowIcon } from '../../lib/icons';
import { ArrowIcon } from './icons';
import { primaryCta } from './content';

export function LandingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0b0d0f]/90 backdrop-blur-xl transition-all">
      <div className="mx-auto flex min-h-16 sm:min-h-20 w-full max-w-360 items-center justify-between px-4 sm:px-8 lg:px-12">
        <a href="/#top" className="flex min-w-0 shrink items-center gap-2.5 sm:gap-3.5 text-white transition-opacity hover:opacity-90" aria-label="UploadFlow home">
          <span className="grid h-8 w-8 sm:h-10 sm:w-10 shrink-0 place-items-center rounded-xl bg-white text-black shadow-md">
            <UploadFlowIcon />
          </span>
          <span className="min-w-0">
            <strong className="block text-sm sm:text-base lg:text-lg font-black uppercase italic tracking-tight truncate">UploadFlow</strong>
            <small className="hidden min-[420px]:block text-[10px] sm:text-[11px] font-bold uppercase tracking-[.18em] text-white/50 truncate">Private upload toolkit</small>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[.12em] text-white/70 md:flex"
          aria-label="Main navigation"
        >
          <a href="/test" className="text-[#eefb7a] font-extrabold hover:text-[#f4ff94] transition-colors">Test</a>
          <a href="/how-it-works" className="hover:text-white transition-colors">How it works</a>
          <a href="/#extension" className="hover:text-white transition-colors">Extension</a>
          <a href="/#tools" className="hover:text-white transition-colors">Tools</a>
          <a href="/#privacy" className="hover:text-white transition-colors">Privacy</a>
          <a href="/support" className="hover:text-white transition-colors">Support</a>
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={primaryCta.href}
            target={primaryCta.href.startsWith('http') ? '_blank' : undefined}
            rel={primaryCta.href.startsWith('http') ? 'noreferrer' : undefined}
            className="inline-flex shrink-0 whitespace-nowrap items-center gap-1 sm:gap-2 rounded-full bg-white px-2.5 sm:px-5 py-1.5 sm:py-2.5 text-[10px] sm:text-xs font-extrabold uppercase tracking-wide text-black transition-all hover:bg-[#eefb7a] hover:scale-105 active:scale-95"
          >
            {primaryCta.label} <ArrowIcon />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="grid h-8 w-8 sm:h-10 sm:w-10 shrink-0 place-items-center rounded-xl border border-white/15 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
          >
            {mobileMenuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          className="border-t border-white/10 bg-[#0b0d0f]/95 px-5 py-5 backdrop-blur-2xl md:hidden animate-fadeIn"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-2 text-sm font-semibold uppercase tracking-wider">
            <a
              href="/test"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg bg-[#eefb7a]/10 px-4 py-3 font-extrabold text-[#eefb7a] hover:bg-[#eefb7a]/20"
            >
              Test
            </a>
            <a
              href="/how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-4 py-3 text-white/80 hover:bg-white/5 hover:text-white"
            >
              How it works
            </a>
            <a
              href="/#extension"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-4 py-3 text-white/80 hover:bg-white/5 hover:text-white"
            >
              Extension
            </a>
            <a
              href="/#tools"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-4 py-3 text-white/80 hover:bg-white/5 hover:text-white"
            >
              Tools
            </a>
            <a
              href="/#privacy"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-4 py-3 text-white/80 hover:bg-white/5 hover:text-white"
            >
              Privacy
            </a>
            <a
              href="/support"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-4 py-3 text-white/80 hover:bg-white/5 hover:text-white"
            >
              Support
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export function LandingFooter() {
  return (
    <footer className="mx-auto flex w-full max-w-360 flex-col gap-6 px-5 py-10 text-xs font-semibold uppercase tracking-wider text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
      <span className="flex items-center gap-2.5 text-sm font-bold text-white/80">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-white text-black">
          <UploadFlowIcon />
        </span>
        UploadFlow
      </span>
      <div className="flex flex-wrap gap-6 sm:gap-8">
        <a href="https://cloudgrids.tech/" className="hover:text-white transition-colors">Published by CloudGrids</a>
        <a href="/how-it-works" className="hover:text-white transition-colors">How it works</a>
        <a href="/privacy" className="hover:text-white transition-colors">Privacy policy</a>
        <a href="/support" className="hover:text-white transition-colors">Support</a>
        <a href="#top" className="hover:text-white transition-colors text-[#eefb7a]">Back to top ↑</a>
      </div>
    </footer>
  );
}
