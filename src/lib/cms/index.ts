import { homeContent } from "@/data/home"
import type { HomeContent } from "@/types/content"

export async function getHomeContent(): Promise<HomeContent> {
  // Caminho A (local)
  return homeContent

  // 🔮 Futuro (Caminho B)
  // const res = await fetch("https://api.site.com/home")
  // return res.json()
}
