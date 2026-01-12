import { describe, test, expect } from "bun:test"
import { createBuiltinSkills } from "./skills"

describe("createBuiltinSkills", () => {
  describe("tldrAvailable option", () => {
    test("#given tldrAvailable false #when createBuiltinSkills called #then tldr skill not included", () => {
      //#given
      const options = { tldrAvailable: false }

      //#when
      const skills = createBuiltinSkills(options)

      //#then
      const skillNames = skills.map((s) => s.name)
      expect(skillNames).not.toContain("tldr")
    })

    test("#given tldrAvailable true #when createBuiltinSkills called #then tldr skill included first", () => {
      //#given
      const options = { tldrAvailable: true }

      //#when
      const skills = createBuiltinSkills(options)

      //#then
      const skillNames = skills.map((s) => s.name)
      expect(skillNames).toContain("tldr")
      expect(skills[0].name).toBe("tldr")
    })

    test("#given no options #when createBuiltinSkills called #then tldr skill not included", () => {
      //#given - no options provided

      //#when
      const skills = createBuiltinSkills()

      //#then
      const skillNames = skills.map((s) => s.name)
      expect(skillNames).not.toContain("tldr")
    })

    test("#given tldrAvailable true #when createBuiltinSkills called #then tldr skill has mcp config", () => {
      //#given
      const options = { tldrAvailable: true }

      //#when
      const skills = createBuiltinSkills(options)

      //#then
      const tldrSkill = skills.find((s) => s.name === "tldr")
      expect(tldrSkill).toBeDefined()
      expect(tldrSkill?.mcpConfig).toBeDefined()
      expect(tldrSkill?.mcpConfig?.tldr).toBeDefined()
      expect(tldrSkill?.mcpConfig?.tldr.command).toBe("tldr-mcp")
    })
  })

  describe("base skills", () => {
    test("#given any options #when createBuiltinSkills called #then playwright skill included", () => {
      //#when
      const skills = createBuiltinSkills()

      //#then
      const skillNames = skills.map((s) => s.name)
      expect(skillNames).toContain("playwright")
    })

    test("#given any options #when createBuiltinSkills called #then git-master skill included", () => {
      //#when
      const skills = createBuiltinSkills()

      //#then
      const skillNames = skills.map((s) => s.name)
      expect(skillNames).toContain("git-master")
    })

    test("#given any options #when createBuiltinSkills called #then frontend-ui-ux skill included", () => {
      //#when
      const skills = createBuiltinSkills()

      //#then
      const skillNames = skills.map((s) => s.name)
      expect(skillNames).toContain("frontend-ui-ux")
    })
  })
})
