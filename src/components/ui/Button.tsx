import { ButtonHTMLAttributes } from "react"
import clsx from "clsx"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline"
}

export default function Button({
  variant = "primary",
  className,
  ...props
}: Props) {
  return (
    <button
      className={clsx(
        "rounded-lg px-5 py-2 text-sm font-medium transition",
        variant === "primary" &&
          "bg-black text-white hover:opacity-80",
        variant === "outline" &&
          "border border-black hover:bg-black hover:text-white",
        className
      )}
      {...props}
    />
  )
}
