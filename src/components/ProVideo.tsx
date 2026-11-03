"use client";

import { useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { GRADIENT_TEXT } from "@/components/styles";

const CONTROL_BUTTON =
  "inline-flex h-10 min-w-10 items-center justify-center gap-2 rounded-full bg-black/55 px-3 text-sm sm:h-11 sm:px-4 font-semibold text-white backdrop-blur transition hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900";

/**
 * Product tour video. Plays muted and loops, like an Apple product page.
 * Visitors who prefer reduced motion get the poster and can press Play.
 */
export function ProVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    video.play().catch(() => setPlaying(false));
  }, []);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      trackEvent("pro_video_interaction", { action: "play" });
    } else {
      video.pause();
      trackEvent("pro_video_interaction", { action: "pause" });
    }
  }

  function toggleSound() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    if (!video.muted && video.paused) void video.play();
    trackEvent("pro_video_interaction", { action: video.muted ? "mute" : "unmute" });
  }

  return (
    <section
      id="see-it"
      aria-labelledby="see-it-heading"
      className="scroll-mt-24 bg-white px-4 pb-4 pt-24 sm:px-6 sm:pt-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-lg font-semibold text-pro-pink">See it in action</p>
          <h2
            id="see-it-heading"
            className="mt-3 text-balance font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl"
          >
            Step up <span className={GRADIENT_TEXT}>your practice.</span>
          </h2>
        </div>
        <div className="relative mt-12 overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl shadow-pro-violet/20 ring-1 ring-slate-900/10 sm:mt-16 sm:rounded-[2.5rem]">
          <video
            ref={videoRef}
            className="block aspect-video h-auto w-full"
            muted
            loop
            playsInline
            preload="metadata"
            poster="/media/doulio-pro-poster.jpg"
            aria-label="Doulio PRO product tour: clients, your public page, leads, invoices and payments, insurance claims, reports, opportunities, the client app and business support"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          >
            <source src="/media/doulio-pro.webm" type="video/webm" />
            <source src="/media/doulio-pro.mp4" type="video/mp4" />
          </video>
          <div className="absolute bottom-2 right-2 flex gap-2 sm:bottom-5 sm:right-5">
            <button type="button" onClick={togglePlay} className={CONTROL_BUTTON}>
              {playing ? (
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="5" width="4" height="14" rx="1" />
                  <rect x="14" y="5" width="4" height="14" rx="1" />
                </svg>
              ) : (
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 5v14l12-7z" />
                </svg>
              )}
              <span className="sr-only sm:not-sr-only">{playing ? "Pause" : "Play"}</span>
            </button>
            <button
              type="button"
              onClick={toggleSound}
              aria-pressed={!muted}
              className={CONTROL_BUTTON}
            >
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 5 6 9H2v6h4l5 4z" fill="currentColor" />
                {muted ? (
                  <>
                    <path d="m23 9-6 6" />
                    <path d="m17 9 6 6" />
                  </>
                ) : (
                  <>
                    <path d="M15.5 8.5a5 5 0 0 1 0 7" />
                    <path d="M19 5a10 10 0 0 1 0 14" />
                  </>
                )}
              </svg>
              <span className="sr-only sm:not-sr-only">{muted ? "Sound on" : "Sound off"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
