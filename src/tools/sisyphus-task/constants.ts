import type { CategoryConfig } from "../../config/schema"

export const VISUAL_CATEGORY_PROMPT_APPEND = `<Category_Context>
You are working on VISUAL/UI tasks.

Design-first mindset:
- Bold aesthetic choices over safe defaults
- Unexpected layouts, asymmetry, grid-breaking elements
- Distinctive typography (avoid: Arial, Inter, Roboto, Space Grotesk)
- Cohesive color palettes with sharp accents
- High-impact animations with staggered reveals
- Atmosphere: gradient meshes, noise textures, layered transparencies

AVOID: Generic fonts, purple gradients on white, predictable layouts, cookie-cutter patterns.
</Category_Context>`

export const STRATEGIC_CATEGORY_PROMPT_APPEND = `<Category_Context>
You are working on BUSINESS LOGIC / ARCHITECTURE tasks.

Strategic advisor mindset:
- Bias toward simplicity: least complex solution that fulfills requirements
- Leverage existing code/patterns over new components
- Prioritize developer experience and maintainability
- One clear recommendation with effort estimate (Quick/Short/Medium/Large)
- Signal when advanced approach warranted

Response format:
- Bottom line (2-3 sentences)
- Action plan (numbered steps)
- Risks and mitigations (if relevant)
</Category_Context>`

export const ARTISTRY_CATEGORY_PROMPT_APPEND = `<Category_Context>
You are working on HIGHLY CREATIVE / ARTISTIC tasks.

Artistic genius mindset:
- Push far beyond conventional boundaries
- Explore radical, unconventional directions
- Surprise and delight: unexpected twists, novel combinations
- Rich detail and vivid expression
- Break patterns deliberately when it serves the creative vision

Approach:
- Generate diverse, bold options first
- Embrace ambiguity and wild experimentation
- Balance novelty with coherence
- This is for tasks requiring exceptional creativity
</Category_Context>`

export const QUICK_CATEGORY_PROMPT_APPEND = `<Category_Context>
You are working on SMALL / QUICK tasks.

Efficient execution mindset:
- Fast, focused, minimal overhead
- Get to the point immediately
- No over-engineering
- Simple solutions for simple problems

Approach:
- Minimal viable implementation
- Skip unnecessary abstractions
- Direct and concise
</Category_Context>

<Caller_Warning>
⚠️ THIS CATEGORY USES A LESS CAPABLE MODEL (claude-haiku-4-5).

The model executing this task has LIMITED reasoning capacity. Your prompt MUST be:

**EXHAUSTIVELY EXPLICIT** - Leave NOTHING to interpretation:
1. MUST DO: List every required action as atomic, numbered steps
2. MUST NOT DO: Explicitly forbid likely mistakes and deviations
3. EXPECTED OUTPUT: Describe exact success criteria with concrete examples

**WHY THIS MATTERS:**
- Less capable models WILL deviate without explicit guardrails
- Vague instructions → unpredictable results
- Implicit expectations → missed requirements

**PROMPT STRUCTURE (MANDATORY):**
\`\`\`
TASK: [One-sentence goal]

MUST DO:
1. [Specific action with exact details]
2. [Another specific action]
...

MUST NOT DO:
- [Forbidden action + why]
- [Another forbidden action]
...

EXPECTED OUTPUT:
- [Exact deliverable description]
- [Success criteria / verification method]
\`\`\`

If your prompt lacks this structure, REWRITE IT before delegating.
</Caller_Warning>`

export const MOST_CAPABLE_CATEGORY_PROMPT_APPEND = `<Category_Context>
You are working on COMPLEX / MOST-CAPABLE tasks.

Maximum capability mindset:
- Bring full reasoning power to bear
- Consider all edge cases and implications
- Deep analysis before action
- Quality over speed

Approach:
- Thorough understanding first
- Comprehensive solution design
- Meticulous execution
- This is for the most challenging problems
</Category_Context>`

export const WRITING_CATEGORY_PROMPT_APPEND = `<Category_Context>
You are working on WRITING / PROSE tasks.

Wordsmith mindset:
- Clear, flowing prose
- Appropriate tone and voice
- Engaging and readable
- Proper structure and organization

Approach:
- Understand the audience
- Draft with care
- Polish for clarity and impact
- Documentation, READMEs, articles, technical writing
</Category_Context>`

export const GENERAL_CATEGORY_PROMPT_APPEND = `<Category_Context>
You are working on GENERAL tasks.

Balanced execution mindset:
- Practical, straightforward approach
- Good enough is good enough
- Focus on getting things done

Approach:
- Standard best practices
- Reasonable trade-offs
- Efficient completion
</Category_Context>

<Caller_Warning>
⚠️ THIS CATEGORY USES A MID-TIER MODEL (claude-sonnet-4-5).

While capable, this model benefits significantly from EXPLICIT instructions.

**PROVIDE CLEAR STRUCTURE:**
1. MUST DO: Enumerate required actions explicitly - don't assume inference
2. MUST NOT DO: State forbidden actions to prevent scope creep or wrong approaches
3. EXPECTED OUTPUT: Define concrete success criteria and deliverables

**COMMON PITFALLS WITHOUT EXPLICIT INSTRUCTIONS:**
- Model may take shortcuts that miss edge cases
- Implicit requirements get overlooked
- Output format may not match expectations
- Scope may expand beyond intended boundaries

**RECOMMENDED PROMPT PATTERN:**
\`\`\`
TASK: [Clear, single-purpose goal]

CONTEXT: [Relevant background the model needs]

MUST DO:
- [Explicit requirement 1]
- [Explicit requirement 2]

MUST NOT DO:
- [Boundary/constraint 1]
- [Boundary/constraint 2]

EXPECTED OUTPUT:
- [What success looks like]
- [How to verify completion]
\`\`\`

The more explicit your prompt, the better the results.
</Caller_Warning>`

export const JAVA_SPRING_CATEGORY_PROMPT_APPEND = `<Category_Context>
You are working on JAVA SPRING BOOT tasks.

Spring Boot expertise:
- Use @Autowired/@Component/@Service/@Repository for dependency injection
- Leverage Spring Data JPA for persistence (repositories, entities, @Query)
- Follow Bean lifecycle and scoping best practices
- Use Lombok (@Data, @Builder, @Slf4j) to reduce boilerplate
- Test with @SpringBootTest, @DataJpaTest, MockMvc

Core Craftsmanship applies:
- KISS, DRY, meaningful naming
- TDD when appropriate
- Atomic commits, conventional format
</Category_Context>`

export const JAVA_QUARKUS_CATEGORY_PROMPT_APPEND = `<Category_Context>
You are working on JAVA QUARKUS tasks.

Quarkus expertise:
- Build for native compilation (GraalVM-friendly code)
- Use CDI (@Inject, @ApplicationScoped, @RequestScoped) for dependency injection
- Embrace reactive patterns with Mutiny (Uni, Multi)
- Leverage dev mode for hot reload during development
- Keep startup time and memory footprint low

Core Craftsmanship applies:
- KISS, DRY, meaningful naming
- TDD when appropriate
- Atomic commits, conventional format
</Category_Context>`

export const TS_REACT_CATEGORY_PROMPT_APPEND = `<Category_Context>
You are working on TYPESCRIPT REACT tasks.

React best practices:
- Prefer hooks (useState, useEffect, useCallback, useMemo, custom hooks)
- Component composition over inheritance
- Manage state effectively (lift up, context, or state libraries)
- Strict TypeScript typing (no any, proper interfaces/types)
- Test with React Testing Library and Jest

Core Craftsmanship applies:
- KISS, DRY, meaningful naming
- TDD when appropriate
- Atomic commits, conventional format
</Category_Context>`

export const TS_ANGULAR_CATEGORY_PROMPT_APPEND = `<Category_Context>
You are working on TYPESCRIPT ANGULAR tasks.

Angular best practices:
- Organize with modules and services
- Master RxJS patterns (observables, operators like map, switchMap, catchError)
- Use dependency injection with decorators (@Injectable, providers)
- Choose template-driven vs reactive forms appropriately
- Test with TestBed, jasmine, and karma

Core Craftsmanship applies:
- KISS, DRY, meaningful naming
- TDD when appropriate
- Atomic commits, conventional format
</Category_Context>`

export const TS_NEXT_CATEGORY_PROMPT_APPEND = `<Category_Context>
You are working on TYPESCRIPT NEXT.JS tasks.

Next.js App Router conventions:
- Distinguish Server Components from Client Components ('use client')
- Leverage SSR/SSG/ISR patterns appropriately
- Use API routes and middleware for backend logic
- Optimize images with next/image, use dynamic imports for code splitting
- Follow file-based routing conventions

Core Craftsmanship applies:
- KISS, DRY, meaningful naming
- TDD when appropriate
- Atomic commits, conventional format
</Category_Context>`

export const PYTHON_FAST_CATEGORY_PROMPT_APPEND = `<Category_Context>
You are working on PYTHON FASTAPI tasks.

FastAPI best practices:
- Define Pydantic models for request/response validation
- Use async/await for I/O-bound operations
- Type hints everywhere (parameters, return types)
- Leverage dependency injection with Depends()
- Automatic API docs via OpenAPI

Core Craftsmanship applies:
- KISS, DRY, meaningful naming
- TDD when appropriate
- Atomic commits, conventional format
</Category_Context>`

export const GO_BACKEND_CATEGORY_PROMPT_APPEND = `<Category_Context>
You are working on GO BACKEND tasks.

Go idioms and conventions:
- Explicit error handling (no exceptions, return error values)
- Design with interfaces for flexibility and testability
- Use goroutines and channels for concurrency
- Prefer standard library over external dependencies
- Write table-driven tests

Core Craftsmanship applies:
- KISS, DRY, meaningful naming
- TDD when appropriate
- Atomic commits, conventional format
</Category_Context>`

export const RUST_SYSTEMS_CATEGORY_PROMPT_APPEND = `<Category_Context>
You are working on RUST SYSTEMS tasks.

Rust best practices:
- Respect ownership and borrowing rules (avoid unnecessary clones)
- Use lifetime annotations when required
- Prefer Result/Option patterns (avoid unwrap() in production code)
- Embrace zero-cost abstractions
- Justify and document any unsafe blocks clearly

Core Craftsmanship applies:
- KISS, DRY, meaningful naming
- TDD when appropriate
- Atomic commits, conventional format
</Category_Context>`

export const DEVOPS_CATEGORY_PROMPT_APPEND = `<Category_Context>
You are working on DEVOPS tasks.

DevOps best practices:
- Infrastructure as Code (IaC) for all infrastructure changes
- Docker best practices: multi-stage builds, minimal base images, layer caching
- Kubernetes patterns: deployments, services, configmaps, secrets
- Use Terraform/Pulumi for declarative infrastructure
- Immutability and declarative approach over imperative scripts

Core Craftsmanship applies:
- KISS, DRY, meaningful naming
- TDD when appropriate
- Atomic commits, conventional format
</Category_Context>`

export const SPIKE_CATEGORY_PROMPT_APPEND = `<Category_Context>
You are working on SPIKE tasks.

Feasibility-first mindset:
- Raw backbone, proof of concept
- Speed over polish
- Fail fast to learn fast
- No tests, no edge cases, just core functionality
</Category_Context>`

export const CRAFT_CATEGORY_PROMPT_APPEND = `<Category_Context>
You are working on CRAFT tasks.

Software Craftsmanship philosophy:
- TDD/BDD: Write test first, implement, refactor
- Incremental organic growth with baby steps
- KISS, DRY, meaningful naming
- Atomic commits with conventional commit format
- Fail fast, validate early
- Boy Scout Rule: Leave code better than found
- Quality through fast feedback loops
</Category_Context>`

export const CREATE_CATEGORY_PROMPT_APPEND = `<Category_Context>
You are working on UI/UX CREATION tasks.

Design with best practices mindset:
- Established design patterns and conventions
- Accessibility and UX best practices
- User-centered approach
- Component composition and reusability

Approach:
- Follow proven design systems
- Ensure accessible, inclusive interfaces
- Clear component hierarchy
- Responsive and performant
</Category_Context>`

export const EXPERIMENT_CATEGORY_PROMPT_APPEND = `<Category_Context>
You are working on EXPERIMENTAL tasks.

Break rules thoughtfully mindset:
- Out-of-box thinking encouraged
- Unconventional approaches welcome
- Artistic freedom to explore
- Try novel solutions

Approach:
- Challenge conventional patterns
- Test radical ideas
- Iterate fearlessly
- Balance innovation with coherence
</Category_Context>`

export const BRAINSTORM_CATEGORY_PROMPT_APPEND = `<Category_Context>
You are working on BRAINSTORMING tasks.

Multi-perspective ideation mindset:
- Explore all angles and approaches
- Generate multiple alternatives
- Embrace diverse perspectives
- No premature convergence

Approach:
- Divergent thinking first
- Consider edge cases and extremes
- Cross-pollinate ideas
- Defer judgment until options exhausted
</Category_Context>`

export const ANALYZE_CATEGORY_PROMPT_APPEND = `<Category_Context>
You are working on ANALYSIS / DEBUGGING tasks.

Deep investigation mindset:
- Systematic root cause analysis
- Evidence-based reasoning
- Trace the problem methodically
- Leave no stone unturned

Approach:
- Hypothesis-driven investigation
- Isolate variables and test
- Follow the data trail
- Document findings clearly
</Category_Context>`

export const REVIEW_CATEGORY_PROMPT_APPEND = `<Category_Context>
You are working on CODE REVIEW tasks.

Critical evaluation mindset:
- Security vulnerabilities and risks
- Performance implications
- Maintainability and technical debt
- Best practices adherence

Approach:
- Skeptical but constructive
- Identify anti-patterns
- Consider long-term impact
- Suggest concrete improvements
</Category_Context>`

export const SPEC_CATEGORY_PROMPT_APPEND = `<Category_Context>
You are working on API SPECIFICATION tasks.

Contract-first design mindset:
- Precise definitions and constraints
- RESTful conventions and standards
- OpenAPI compatibility
- Clear interface contracts

Approach:
- Define before implementing
- Version compatibility planning
- Document edge cases
- Ensure discoverability
</Category_Context>`

export const DOCUMENT_CATEGORY_PROMPT_APPEND = `<Category_Context>
You are working on TECHNICAL DOCUMENTATION tasks.

Clear structured documentation mindset:
- Conventional technical documentation style
- Scannable format with headers
- Accurate and complete coverage
- Developer-friendly organization

Approach:
- Start with overview, drill down
- Use examples and code snippets
- Maintain consistency
- Focus on clarity over cleverness
</Category_Context>`

export const WRITE_CATEGORY_PROMPT_APPEND = `<Category_Context>
You are working on CREATIVE WRITING tasks.

Authentic voice mindset:
- Personal and engaging tone
- Less formal, more conversational
- Readable and flowing prose
- Connect with the reader

Approach:
- Write like you speak
- Use storytelling techniques
- Vary sentence structure
- Balance personality with clarity
</Category_Context>`

export const DEFAULT_CATEGORIES: Record<string, CategoryConfig> = {
  "visual-engineering": {
    model: "cliproxy/gemini-3-pro-preview",
    temperature: 0.7,
  },
  ultrabrain: {
    model: "cliproxy/gemini-claude-opus-4-5-thinking",
    temperature: 0.1,
  },
  artistry: {
    model: "cliproxy/gemini-3-pro-preview",
    temperature: 0.9,
  },
  quick: {
    model: "cliproxy/gemini-3-flash-preview",
    temperature: 0.3,
  },
  "most-capable": {
    model: "cliproxy/gemini-claude-opus-4-5-thinking",
    temperature: 0.1,
  },
  writing: {
    model: "cliproxy/gemini-3-pro-preview",
    temperature: 0.5,
  },
  general: {
    model: "cliproxy/gemini-claude-sonnet-4-5",
    temperature: 0.3,
  },
  spike: {
    model: "cliproxy/gemini-3-flash-preview",
    temperature: 0.5,
  },
  craft: {
    model: "cliproxy/gemini-claude-sonnet-4-5",
    temperature: 0.2,
  },
  "java-spring": {
    model: "cliproxy/gemini-claude-sonnet-4-5",
    temperature: 0.2,
  },
  "java-quarkus": {
    model: "cliproxy/gemini-claude-sonnet-4-5",
    temperature: 0.2,
  },
  "ts-react": {
    model: "cliproxy/gemini-claude-sonnet-4-5",
    temperature: 0.2,
  },
  "ts-angular": {
    model: "cliproxy/gemini-claude-sonnet-4-5",
    temperature: 0.2,
  },
  "ts-next": {
    model: "cliproxy/gemini-claude-sonnet-4-5",
    temperature: 0.2,
  },
  "python-fast": {
    model: "cliproxy/gemini-claude-sonnet-4-5",
    temperature: 0.2,
  },
  "go-backend": {
    model: "cliproxy/gemini-claude-sonnet-4-5",
    temperature: 0.2,
  },
  "rust-systems": {
    model: "cliproxy/gemini-claude-sonnet-4-5",
    temperature: 0.2,
  },
  devops: {
    model: "cliproxy/gemini-claude-sonnet-4-5",
    temperature: 0.2,
  },
  create: {
    model: "cliproxy/gemini-3-pro-preview",
    temperature: 0.6,
  },
  experiment: {
    model: "cliproxy/gemini-3-pro-preview",
    temperature: 0.9,
  },
  brainstorm: {
    model: "cliproxy/gemini-claude-opus-4-5-thinking",
    temperature: 0.8,
  },
  analyze: {
    model: "cliproxy/gemini-claude-opus-4-5-thinking",
    temperature: 0.1,
  },
  review: {
    model: "cliproxy/gemini-claude-opus-4-5-thinking",
    temperature: 0.2,
  },
  spec: {
    model: "cliproxy/gemini-claude-sonnet-4-5",
    temperature: 0.1,
  },
  document: {
    model: "cliproxy/gemini-3-pro-preview",
    temperature: 0.3,
  },
  write: {
    model: "cliproxy/gemini-3-pro-preview",
    temperature: 0.6,
  },
}

export const CATEGORY_PROMPT_APPENDS: Record<string, string> = {
  "visual-engineering": VISUAL_CATEGORY_PROMPT_APPEND,
  ultrabrain: STRATEGIC_CATEGORY_PROMPT_APPEND,
  artistry: ARTISTRY_CATEGORY_PROMPT_APPEND,
  quick: QUICK_CATEGORY_PROMPT_APPEND,
  "most-capable": MOST_CAPABLE_CATEGORY_PROMPT_APPEND,
  writing: WRITING_CATEGORY_PROMPT_APPEND,
  general: GENERAL_CATEGORY_PROMPT_APPEND,
  spike: SPIKE_CATEGORY_PROMPT_APPEND,
  craft: CRAFT_CATEGORY_PROMPT_APPEND,
  "java-spring": JAVA_SPRING_CATEGORY_PROMPT_APPEND,
  "java-quarkus": JAVA_QUARKUS_CATEGORY_PROMPT_APPEND,
  "ts-react": TS_REACT_CATEGORY_PROMPT_APPEND,
  "ts-angular": TS_ANGULAR_CATEGORY_PROMPT_APPEND,
  "ts-next": TS_NEXT_CATEGORY_PROMPT_APPEND,
  "python-fast": PYTHON_FAST_CATEGORY_PROMPT_APPEND,
  "go-backend": GO_BACKEND_CATEGORY_PROMPT_APPEND,
  "rust-systems": RUST_SYSTEMS_CATEGORY_PROMPT_APPEND,
  devops: DEVOPS_CATEGORY_PROMPT_APPEND,
  create: CREATE_CATEGORY_PROMPT_APPEND,
  experiment: EXPERIMENT_CATEGORY_PROMPT_APPEND,
  brainstorm: BRAINSTORM_CATEGORY_PROMPT_APPEND,
  analyze: ANALYZE_CATEGORY_PROMPT_APPEND,
  review: REVIEW_CATEGORY_PROMPT_APPEND,
  spec: SPEC_CATEGORY_PROMPT_APPEND,
  document: DOCUMENT_CATEGORY_PROMPT_APPEND,
  write: WRITE_CATEGORY_PROMPT_APPEND,
}

export const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  "visual-engineering": "Frontend, UI/UX, design, styling, animation",
  ultrabrain: "Strict architecture design, very complex business logic",
  artistry: "Highly creative/artistic tasks, novel ideas",
  quick: "Cheap & fast - small tasks with minimal overhead, budget-friendly",
  "most-capable": "Complex tasks requiring maximum capability",
  writing: "Documentation, prose, technical writing",
  general: "General purpose tasks",
  spike: "Feasibility-first exploration, proof of concept, speed over polish",
  craft: "Software Craftsmanship with TDD, quality through fast feedback loops",
  "java-spring": "Spring Boot idioms, DI, JPA patterns, Lombok",
  "java-quarkus": "Quarkus native, CDI, reactive Mutiny patterns",
  "ts-react": "React hooks, component composition, strict TypeScript",
  "ts-angular": "Angular modules, RxJS, dependency injection",
  "ts-next": "Next.js App Router, server components, SSR/SSG",
  "python-fast": "FastAPI, Pydantic, async/await, type hints",
  "go-backend": "Go idioms, explicit errors, goroutines, interfaces",
  "rust-systems": "Ownership, lifetimes, Result/Option, zero-cost",
  devops: "IaC, Docker, Kubernetes, Terraform, immutability",
  create: "UI/UX creation with established patterns and accessibility",
  experiment: "Break rules thoughtfully, unconventional approaches",
  brainstorm: "Multi-perspective ideation, explore all angles",
  analyze: "Deep debugging, systematic root cause analysis",
  review: "Critical code review for security, performance, maintainability",
  spec: "API design, contracts, RESTful conventions",
  document: "Clear, structured technical documentation",
  write: "Blog posts, personal voice, engaging prose",
}

const BUILTIN_CATEGORIES = Object.keys(DEFAULT_CATEGORIES).join(", ")

export const SISYPHUS_TASK_DESCRIPTION = `Spawn agent task with category-based or direct agent selection.

MUTUALLY EXCLUSIVE: Provide EITHER category OR agent, not both (unless resuming).

- category: Use predefined category (${BUILTIN_CATEGORIES}) → Spawns Sisyphus-Junior with category config
- agent: Use specific agent directly (e.g., "oracle", "explore")
- background: true=async (returns task_id), false=sync (waits for result). Default: false. Use background=true ONLY for parallel exploration with 5+ independent queries.
- resume: Session ID to resume (from previous task output). Continues agent with FULL CONTEXT PRESERVED - saves tokens, maintains continuity.
- skills: Array of skill names to prepend to prompt (e.g., ["playwright", "frontend-ui-ux"]). Skills will be resolved and their content prepended with a separator. Empty array = no prepending.

**WHEN TO USE resume:**
- Task failed/incomplete → resume with "fix: [specific issue]"
- Need follow-up on previous result → resume with additional question
- Multi-turn conversation with same agent → always resume instead of new task

Prompts MUST be in English.`
