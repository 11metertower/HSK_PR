"use client";

import { useState, useRef, useEffect } from "react";
import { Music, VolumeX, Sparkles } from "lucide-react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Soft romantic lofi-piano arpeggio chord progression in C/G major
  // [Cmaj7 -> Em7 -> Fmaj7 -> Gsus4]
  const notesMap: { [key: string]: number } = {
    C4: 261.63,
    D4: 293.66,
    E4: 329.63,
    G4: 392.0,
    B4: 493.88,
    C5: 523.25,
    D5: 587.33,
    E5: 659.25,
    G5: 783.99,
  };

  const arpeggios = [
    ["C4", "E4", "G4", "B4", "C5"],
    ["E4", "G4", "B4", "D5", "E5"],
    ["F4", "A4", "C5", "E5", "G5"],
    ["G4", "B4", "D5", "G5", "D5"],
  ];

  const playNote = (ctx: AudioContext, freq: number, delay: number = 0) => {
    if (!ctx || ctx.state === "closed") return;
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);

      // Warm attack & gentle decay (resembles music box / soft rhodes)
      const startTime = ctx.currentTime + delay;
      gain.gain.setValueAtTime(0.001, startTime);
      gain.gain.exponentialRampToValueAtTime(0.08, startTime + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 1.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 1.9);
    } catch {
      // AudioContext state error safety
    }
  };

  const startMusic = async () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      if (ctx.state === "suspended") {
        await ctx.resume();
      }

      let step = 0;
      const stepDuration = 700; // ms between notes

      const chordSequence = [
        [261.63, 329.63, 392.0, 493.88], // Cmaj7
        [329.63, 392.0, 493.88, 587.33], // Em7
        [349.23, 440.0, 523.25, 659.25], // Fmaj7
        [392.0, 493.88, 587.33, 783.99], // G7
      ];

      let chordIdx = 0;
      let noteInChord = 0;

      intervalRef.current = setInterval(() => {
        const chord = chordSequence[chordIdx];
        const freq = chord[noteInChord];
        playNote(ctx, freq);

        noteInChord++;
        if (noteInChord >= chord.length) {
          noteInChord = 0;
          chordIdx = (chordIdx + 1) % chordSequence.length;
        }
        step++;
      }, stepDuration);

      setIsPlaying(true);
    } catch (e) {
      console.error("Audio init error:", e);
    }
  };

  const stopMusic = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close().catch(() => {});
      audioCtxRef.current = null;
    }
    setIsPlaying(false);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopMusic();
    } else {
      startMusic();
    }
  };

  useEffect(() => {
    return () => {
      stopMusic();
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 z-40 max-w-[480px]">
      <button
        onClick={toggleMusic}
        aria-label="배경음악 재생/일시정지"
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium tracking-wider backdrop-blur-md transition-all duration-300 shadow-sm border ${
          isPlaying
            ? "bg-[#FAF7F2]/90 text-[#976F56] border-[#B88E72]/40 ring-2 ring-[#B88E72]/20 shadow-md"
            : "bg-white/80 text-[#7E756F] border-[#E8E2D8] hover:text-[#2D2725]"
        }`}
      >
        {isPlaying ? (
          <>
            <span className="flex items-center gap-0.5">
              <span className="w-0.5 h-3 bg-[#B88E72] animate-[pulse_1s_infinite]"></span>
              <span className="w-0.5 h-4 bg-[#B88E72] animate-[pulse_1.2s_infinite]"></span>
              <span className="w-0.5 h-2 bg-[#B88E72] animate-[pulse_0.8s_infinite]"></span>
            </span>
            <span className="font-serif text-[11px] ml-1">BGM On</span>
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5 opacity-70" />
            <span className="font-serif text-[11px]">BGM Off</span>
          </>
        )}
      </button>
    </div>
  );
}
