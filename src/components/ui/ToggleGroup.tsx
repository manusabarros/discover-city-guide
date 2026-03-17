import { createContext, forwardRef, RefAttributes, useContext } from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { cn } from "@/lib/utils";
import { toggleVariants } from "@/components/ui/Toggle";

const ToggleGroupContext = createContext<{
  size: "default" | "sm" | "lg" | null | undefined;
  variant: "default" | "outline" | null | undefined;
}>({
  size: "default",
  variant: "default",
});

const ToggleGroup = forwardRef<
  HTMLDivElement,
  (
    | ToggleGroupPrimitive.ToggleGroupSingleProps
    | ToggleGroupPrimitive.ToggleGroupMultipleProps
  ) &
    RefAttributes<HTMLDivElement> & {
      variant: "default" | "outline" | null | undefined;
      size: "default" | "sm" | "lg" | null | undefined;
    }
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = forwardRef<
  HTMLButtonElement,
  ToggleGroupPrimitive.ToggleGroupItemProps &
    RefAttributes<HTMLButtonElement> & {
      variant: "default" | "outline" | null | undefined;
      size: "default" | "sm" | "lg" | null | undefined;
    }
>(({ className, children, variant, size, ...props }, ref) => {
  const context = useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
