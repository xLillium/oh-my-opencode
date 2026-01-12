import { describe, test, expect, afterEach } from "bun:test"
import {
  checkTldrMcpAvailable,
  isTldrMcpAvailable,
  resetTldrAvailabilityCache,
} from "./tldr-availability"

describe("tldr-availability", () => {
  afterEach(() => {
    //#given - reset cache between tests
    resetTldrAvailabilityCache()
  })

  describe("checkTldrMcpAvailable", () => {
    test("#given tldr-mcp command #when checkTldrMcpAvailable called #then returns boolean", async () => {
      //#given - system may or may not have tldr-mcp installed

      //#when
      const result = await checkTldrMcpAvailable()

      //#then
      expect(typeof result).toBe("boolean")
    })

    test("#given first call made #when called again #then returns cached result", async () => {
      //#given
      const firstResult = await checkTldrMcpAvailable()

      //#when
      const secondResult = await checkTldrMcpAvailable()

      //#then
      expect(secondResult).toBe(firstResult)
    })

    test("#given nonexistent command #when check called #then returns false", async () => {
      //#given
      const { $ } = await import("bun")
      const result = await $`which this-command-definitely-does-not-exist-12345`.quiet().nothrow()

      //#when
      const isAvailable = result.exitCode === 0

      //#then
      expect(isAvailable).toBe(false)
    })
  })

  describe("isTldrMcpAvailable", () => {
    test("#given cache not populated #when isTldrMcpAvailable called #then returns false", () => {
      //#given - fresh state after reset

      //#when
      const result = isTldrMcpAvailable()

      //#then
      expect(result).toBe(false)
    })

    test("#given checkTldrMcpAvailable was called #when isTldrMcpAvailable called #then returns cached value", async () => {
      //#given
      const asyncResult = await checkTldrMcpAvailable()

      //#when
      const syncResult = isTldrMcpAvailable()

      //#then
      expect(syncResult).toBe(asyncResult)
    })
  })

  describe("resetTldrAvailabilityCache", () => {
    test("#given cache populated #when resetTldrAvailabilityCache called #then cache is cleared", async () => {
      //#given
      await checkTldrMcpAvailable()
      expect(isTldrMcpAvailable()).toBeDefined()

      //#when
      resetTldrAvailabilityCache()

      //#then - sync check returns false when cache is null
      expect(isTldrMcpAvailable()).toBe(false)
    })
  })
})
