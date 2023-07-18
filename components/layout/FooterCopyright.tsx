"use client";
import { AppConfig } from "@/app/utils/AppConfig";
import Link from "next/link";
import { FcLike } from "react-icons/fc";

const FooterCopyright = () => (
  <div className="footer-copyright flex justify-center">
    © Copyright {new Date().getFullYear()} @ {AppConfig.title}. Made with&nbsp;
    <FcLike /> {/* &nbsp; adds a space */}
    &nbsp;by GeekyAnts QA

    <style jsx>
      {`
        .footer-copyright :global(a) {
          @apply text-primary-500;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { FooterCopyright };
