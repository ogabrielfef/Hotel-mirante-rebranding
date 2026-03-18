import { ReactNode } from "react"

export function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
      {children}
    </h2>
  )
}
