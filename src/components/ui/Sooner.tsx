"use client";

import { FC, RefAttributes } from "react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, toast, ToasterProps } from "sonner";

const Toaster: FC<ToasterProps & RefAttributes<HTMLElement>> = (props) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as "system" | "light" | "dark" | undefined}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
