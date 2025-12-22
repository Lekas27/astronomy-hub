import { Link } from "@tanstack/react-router";
import type { FC, ReactNode } from "react";

import { classNameManager } from "@/shared/lib/css";

const { joinClasses } = classNameManager;

type Props = {
  to: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
};

export const NavLink: FC<Props> = ({ to, children, icon, className }) => {
  return (
    <Link
      to={to}
      className={joinClasses(
        className ||
          "flex items-center space-x-1 px-4 py-2 text-emerald-100 font-medium rounded-lg hover:bg-white/10 hover:text-lime-400 transition-all duration-300 relative group"
      )}
    >
      {icon && icon}
      <span className="text-white">{children}</span>
      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-lime-400 transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></span>
    </Link>
  );
};
