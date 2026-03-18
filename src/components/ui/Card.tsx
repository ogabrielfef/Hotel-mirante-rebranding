import { ReactNode } from "react"

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border p-6 shadow-sm">
      {children}
    </div>
  )
}
