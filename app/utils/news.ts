export interface NewsItem {
  label: Record<string, string>
  desc: Record<string, string>
  url: string
}

export interface NewsSection {
  icon: string
  title: Record<string, string>
  items: NewsItem[]
}

export { default as newsSections } from "./news.json"
