import Image from "next/image";
import { COMPANY_NAME } from "@/lib/site";

type SiteLogoProps = {
  priority?: boolean;
  size?: "md" | "lg";
};

const sizeClasses = {
  md: {
    wrapper: "gap-3",
    image: "h-11 w-auto",
    title: "text-lg",
    subtitle: "text-xs tracking-[0.28em]",
  },
  lg: {
    wrapper: "gap-3",
    image: "h-12 w-auto",
    title: "text-lg",
    subtitle: "text-xs tracking-[0.28em]",
  },
} as const;

export function SiteLogo({ priority = false, size = "md" }: SiteLogoProps) {
  const classes = sizeClasses[size];

  return (
    <div className={`flex items-center ${classes.wrapper}`}>
      <Image
        src="/video8n_logo.svg"
        alt="Video8n logo"
        width={611}
        height={336}
        priority={priority}
        className={classes.image}
      />
      <div>
        <p className={`${classes.title} font-semibold text-white`}>Video8n</p>
        <p className={`${classes.subtitle} uppercase text-white/[0.45]`}>
          {COMPANY_NAME}
        </p>
      </div>
    </div>
  );
}
