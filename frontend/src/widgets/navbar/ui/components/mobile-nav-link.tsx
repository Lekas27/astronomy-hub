import { Link } from "@tanstack/react-router";
import type { FC, ReactNode } from "react";

import { classNameManager } from "@/shared/lib/css";

const { joinClasses } = classNameManager;

type Props = {
  to: string;
  children: ReactNode;
  className?: string;
};

export const MobileNavLink: FC<Props> = ({ to, children, className }) => {
  return (
    <Link
      to={to}
      className={joinClasses(
        className || "",
        "block px-4 py-3 font-medium rounded-lg hover:bg-white/10 hover:text-lime-400 transition-all duration-300 hover:pl-6 text-white!"
      )}
    >
      {children}
    </Link>
  );
};
