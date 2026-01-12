import { $ } from "bun"

let tldrAvailableCache: boolean | null = null

export async function checkTldrMcpAvailable(): Promise<boolean> {
  if (tldrAvailableCache !== null) {
    return tldrAvailableCache
  }

  try {
    const isWindows = process.platform === "win32"
    const result = isWindows
      ? await $`where tldr-mcp`.quiet().nothrow()
      : await $`which tldr-mcp`.quiet().nothrow()

    tldrAvailableCache = result.exitCode === 0
    return tldrAvailableCache
  } catch {
    tldrAvailableCache = false
    return false
  }
}

export function isTldrMcpAvailable(): boolean {
  return tldrAvailableCache === true
}

export function resetTldrAvailabilityCache(): void {
  tldrAvailableCache = null
}
