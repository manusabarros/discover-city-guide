import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const Skeleton: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ className, ...props }) => (
  <div
    className={cn("animate-pulse rounded-md bg-primary/10", className)}
    {...props}
  />
);

export { Skeleton };
