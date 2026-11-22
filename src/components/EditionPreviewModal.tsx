import { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, X } from 'lucide-react';
import type { DigitalEdition } from '../data/storeData';
import { ResilientImage } from './ResilientImage';

interface EditionPreviewModalProps {
  edition: DigitalEdition | null;
  onClose: () => void;
}

export function EditionPreviewModal({ edition, onClose }: EditionPreviewModalProps) {
  useEffect(() => {
    if (!edition) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [edition, onClose]);

  return (
    <AnimatePresence>
      {edition && (
        <motion.div
          key="edition-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#040D0A]/80 backdrop-blur-[3px]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="edition-modal-title"
          onClick={onClose}
        >
          <motion.div
            key={edition.id}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl bg-[#0D221B] border border-[#1F4235] rounded-lg overflow-hidden max-h-[90vh] flex flex-col text-[#F6F4EE]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#1D3E32]">
              <div className="flex items-center gap-2 text-xs text-[#B8C5BE]">
                <span className="font-mono tabular-nums text-[#E2C15A]">{edition.indexNumber}</span>
                <span aria-hidden="true">·</span>
                <span>{edition.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span>{edition.format}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums font-medium text-[#E2C15A]">
                  {edition.priceLabel}
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close preview"
                className="inline-flex items-center justify-center w-10 h-10 rounded-md text-[#B8C5BE] hover:text-[#F6F4EE] hover:bg-[#143026] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
              >
                <X className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
              </button>
            </div>

            <div className="overflow-y-auto p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-5 bg-[#091A14] rounded-md overflow-hidden border border-[#1D3E32] aspect-square">
                  <ResilientImage
                    src={edition.thumbnailImage}
                    alt={edition.coverAlt}
                    fallbackTitle={edition.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="md:col-span-7 flex flex-col gap-5">
                  <div>
                    <h2
                      id="edition-modal-title"
                      className="font-display text-2xl sm:text-3xl font-bold text-[#F6F4EE] tracking-tight"
                    >
                      {edition.title}
                    </h2>
                    <p className="mt-1.5 text-sm sm:text-base font-medium text-[#E2C15A]">
                      {edition.subtitle}
                    </p>
                  </div>

                  <p className="text-[15px] leading-7 text-[#D3DDD8]">
                    {edition.detailedOverview}
                  </p>

                  <div className="pt-4 border-t border-[#1D3E32]">
                    <h3 className="text-sm font-semibold text-[#F6F4EE] mb-3">
                      Inside This Edition
                    </h3>
                    <ul className="space-y-2.5 text-sm text-[#B8C5BE] leading-6">
                      {edition.keyHighlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span
                            className="font-mono text-xs text-[#D4AF37] pt-1 tabular-nums shrink-0"
                            aria-hidden="true"
                          >
                            0{idx + 1}
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-sm text-[#9CB0A7] pt-4 border-t border-[#1D3E32]">
                    {edition.audienceNote}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={edition.gumroadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#091A14] bg-[#D4AF37] hover:bg-[#E2C15A] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
                    >
                      <span>Get on Gumroad ({edition.priceLabel})</span>
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                    <button
                      type="button"
                      onClick={onClose}
                      className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-[#F6F4EE] bg-[#143026] hover:bg-[#1B3E31] border border-[#244D3E] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
