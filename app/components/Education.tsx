"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Badge from "./Badge";

const VERIFICATION_URL =
  "https://www.michaelsutter.com/ediploma?fn=diplomastatuscheck&key=0200000074daa4e28aa042bd474107d1d0df3b0014e6aca7e79887ac37858acab3a892ad22d3673dec184b078c23e4d1a5cf14730e9422e6f9905092cdfa5b1f38782081";

type Education = {
  institution: string;
  period: string;
  title: string;
  description: string;
  tags: string[];
  certificateUrl?: string;
  idx: number;
};

export default function Education({
  institution,
  period,
  title,
  description,
  tags,
  certificateUrl,
  idx,
}: Education) {
  const t = useTranslations("career");
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <div className="relative pl-3 mb-10 md:mb-8">
      <div className="absolute -left-[21px] top-2 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-100"></div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-1">
          <h2 className="font-lato font-bold text-base md:text-lg text-slate-600">
            {institution}
          </h2>
          <p className="font-lato text-xs sm:text-sm md:text-base text-slate-600">
            {period}
          </p>
          {tags.length > 0 && (
            <div className="hidden md:flex flex-wrap gap-1 mt-2">
              {tags.map((tag) => (
                <Badge key={tag} label={tag} />
              ))}
            </div>
          )}
        </div>

        <div className="md:col-span-3">
          <div className="flex items-center gap-1.5 flex-wrap">
            <h3 className="font-lato font-semibold text-base sm:text-lg md:text-xl text-slate-800">
              {title}
            </h3>
            {certificateUrl && (
              <button
                type="button"
                onClick={() => dialogRef.current?.showModal()}
                className="font-lato text-[11px] sm:text-xs px-2 py-0.5 rounded-full border border-indigo-900 text-indigo-900 bg-transparent hover:bg-indigo-900 hover:text-slate-100 transition-colors duration-100 cursor-pointer"
              >
                {t("viewCertificate")}
              </button>
            )}
          </div>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-1 md:hidden">
              {tags.map((tag) => (
                <Badge key={tag} label={tag} />
              ))}
            </div>
          )}
          {description && (
            <p className="mt-2 font-lato text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>

      {certificateUrl && (
        <dialog
          ref={dialogRef}
          aria-labelledby={`edu-cert-title-${idx}`}
          onClick={(e) => {
            if (e.target === dialogRef.current) dialogRef.current?.close();
          }}
          className="rounded-3xl border-4 border-indigo-900 bg-slate-100 p-3 md:p-5 shadow-2xl max-w-[85vw] md:max-w-lg m-auto"
        >
          <div className="flex flex-col items-center">
            <div className="w-full flex justify-end mb-1">
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                aria-label={t("closeDialog")}
                className="font-lato text-sm px-3 py-1 rounded-lg border border-indigo-900 text-indigo-900 bg-transparent hover:bg-indigo-900 hover:text-slate-100 transition-colors duration-100 cursor-pointer"
              >
                ✕
              </button>
            </div>
            <h3
              id={`edu-cert-title-${idx}`}
              className="font-bevan text-lg md:text-xl text-slate-800 mb-3 text-center"
            >
              {title}
            </h3>
            <div className="relative w-full max-h-[55vh] overflow-y-auto rounded-2xl flex justify-center">
              <Image
                src={certificateUrl}
                alt={`${title} — ${institution}`}
                width={1000}
                height={1400}
                className="object-contain w-auto h-auto max-h-[55vh] rounded-2xl"
              />
            </div>
            <a
              href={VERIFICATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-xs text-indigo-700 hover:underline font-lato"
            >
              {t("validationUrl")}
            </a>
          </div>
        </dialog>
      )}
    </div>
  );
}