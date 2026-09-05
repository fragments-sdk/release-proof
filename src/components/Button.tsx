import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
}

/** The one canonical action control in this repository. */
export function Button({ variant = "primary", children, ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      data-variant={variant}
      style={{
        background:
          variant === "primary" ? "var(--fui-color-accent)" : "var(--fui-color-surface)",
        color: variant === "primary" ? "var(--fui-color-accent-contrast)" : "var(--fui-color-text)",
        border: "1px solid var(--fui-color-border)",
        borderRadius: "var(--fui-radius-md)",
        padding: "var(--fui-space-2) var(--fui-space-4)",
        fontSize: "var(--fui-font-size-md)",
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
