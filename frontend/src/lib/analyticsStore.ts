import { mkdir, readFile, writeFile } from "fs/promises"
import path from "path"

export interface VisitRecord {
  id: string
  path: string
  referrer: string
  userAgent: string
  language: string
  ipHash: string
  timestamp: string
}

export interface VisitSummary {
  total: number
  today: number
  last24h: number
  last7d: number
  topPages: Array<{ path: string; count: number }>
  referrers: Array<{ referrer: string; count: number }>
  recent: VisitRecord[]
}

const fileName = "visits.json"
let writeQueue = Promise.resolve()

function analyticsDir() {
  return process.env.ANALYTICS_DATA_DIR || path.join(process.cwd(), ".analytics")
}

function analyticsFile() {
  return path.join(analyticsDir(), fileName)
}

async function readVisits() {
  try {
    const content = await readFile(analyticsFile(), "utf8")
    const parsed = JSON.parse(content)
    return Array.isArray(parsed) ? (parsed as VisitRecord[]) : []
  } catch {
    return []
  }
}

async function writeVisits(visits: VisitRecord[]) {
  await mkdir(analyticsDir(), { recursive: true })
  await writeFile(analyticsFile(), JSON.stringify(visits.slice(-5000), null, 2))
}

function countBy<T extends string>(items: T[]) {
  const counts = new Map<T, number>()
  for (const item of items) counts.set(item, (counts.get(item) ?? 0) + 1)

  return Array.from(counts.entries())
    .map(([key, count]) => ({ key, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8)
}

export async function addVisit(visit: VisitRecord) {
  writeQueue = writeQueue.catch(() => undefined).then(async () => {
    const visits = await readVisits()
    visits.push(visit)
    await writeVisits(visits)
  })

  await writeQueue
}

export async function getVisitSummary(): Promise<VisitSummary> {
  const visits = await readVisits()
  const now = Date.now()
  const today = new Date().toISOString().slice(0, 10)

  const last24h = visits.filter((visit) => now - Date.parse(visit.timestamp) <= 24 * 60 * 60 * 1000)
  const last7d = visits.filter((visit) => now - Date.parse(visit.timestamp) <= 7 * 24 * 60 * 60 * 1000)

  return {
    total: visits.length,
    today: visits.filter((visit) => visit.timestamp.startsWith(today)).length,
    last24h: last24h.length,
    last7d: last7d.length,
    topPages: countBy(visits.map((visit) => visit.path)).map(({ key, count }) => ({ path: key, count })),
    referrers: countBy(visits.map((visit) => visit.referrer || "Direct")).map(({ key, count }) => ({
      referrer: key,
      count,
    })),
    recent: visits.slice(-20).reverse(),
  }
}
