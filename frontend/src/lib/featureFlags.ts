function booleanFlag(value: string | undefined, fallback: boolean) {
  if (value === undefined) return fallback

  const normalized = value.trim().toLowerCase()
  if (["1", "true", "yes", "on"].includes(normalized)) return true
  if (["0", "false", "no", "off"].includes(normalized)) return false

  return fallback
}

export const featureFlags = {
  openToWork: booleanFlag(process.env.NEXT_PUBLIC_OPEN_TO_WORK, false),
  showPhone: booleanFlag(process.env.NEXT_PUBLIC_SHOW_PHONE, true),
}
