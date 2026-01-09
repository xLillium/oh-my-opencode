# Custom Categories Guide

## Overview
Categories in Oh My OpenCode enable domain-specific task delegation via the `sisyphus_task` tool. By selecting a category, you instruct Sisyphus to spawn a specialized subagent with an optimized model, temperature, and system prompt appends tailored for that specific domain.

- **Domain-Specific Delegation**: Routes tasks to the best-suited model for the job.
- **Pre-configured Behavior**: Each category has tuned parameters (model, temperature).
- **Three types**:
  - **Intensity**: Focus on speed vs. quality.
  - **Purpose**: Specialized for common development workflows (UI, Analysis, Docs).
  - **Stack**: Tailored for specific programming languages and frameworks.

## Quick Reference Table
| Category | Type | Model | Temp | When to Use |
|----------|------|-------|------|-------------|
| spike | Intensity | gemini-3-flash-preview | 0.5 | Feasibility exploration, POC |
| craft | Intensity | claude-sonnet-4-5 | 0.2 | TDD, Software Craftsmanship |
| create | Purpose | gemini-3-pro-preview | 0.6 | UI/UX with best practices |
| experiment | Purpose | gemini-3-pro-preview | 0.9 | Break rules thoughtfully |
| brainstorm | Purpose | claude-opus-4-5-thinking | 0.8 | Multi-perspective ideation |
| analyze | Purpose | claude-opus-4-5-thinking | 0.1 | Deep debugging, root cause |
| review | Purpose | claude-opus-4-5-thinking | 0.2 | Code review, find flaws |
| spec | Purpose | claude-sonnet-4-5 | 0.1 | API design, contracts |
| document | Purpose | gemini-3-pro-preview | 0.3 | Technical documentation |
| write | Purpose | gemini-3-pro-preview | 0.6 | Blog posts, personal voice |
| java-spring | Stack | claude-sonnet-4-5 | 0.2 | Spring Boot development |
| java-quarkus | Stack | claude-sonnet-4-5 | 0.2 | Quarkus native development |
| ts-react | Stack | claude-sonnet-4-5 | 0.2 | React with TypeScript |
| ts-angular | Stack | claude-sonnet-4-5 | 0.2 | Angular development |
| ts-next | Stack | claude-sonnet-4-5 | 0.2 | Next.js App Router |
| python-fast | Stack | claude-sonnet-4-5 | 0.2 | FastAPI development |
| go-backend | Stack | claude-sonnet-4-5 | 0.2 | Go backend services |
| rust-systems | Stack | claude-sonnet-4-5 | 0.2 | Rust systems programming |
| devops | Stack | claude-sonnet-4-5 | 0.2 | IaC, Docker, K8s, Terraform |

## Intensity Categories

### spike
**When to use**: Quick feasibility check, proof of concept, exploring if something is possible.
**When NOT to use**: Production code, anything requiring quality or tests.
**Philosophy**: Speed over polish. Fail fast to learn fast. Raw backbone, no edge cases.

Example:
```javascript
sisyphus_task(category="spike", prompt="Can we integrate the new payment API?")
```

### craft
**When to use**: Production code, features that need to last.
**Philosophy**: Software Craftsmanship - TDD/BDD, baby steps, quality through fast feedback. KISS, DRY, meaningful naming. Atomic commits.

Example:
```javascript
sisyphus_task(category="craft", prompt="Implement user authentication with proper tests")
```

## Purpose Categories

### create
**When to use**: UI/UX creation with established patterns and accessibility.
**Philosophy**: Design with best practices. Follow proven design systems, ensure accessibility, and maintain clear component hierarchy.
**Example invocation**:
```javascript
sisyphus_task(category="create", prompt="Create a responsive navbar component with mobile menu")
```

### experiment
**When to use**: Break rules thoughtfully, unconventional approaches.
**Philosophy**: Out-of-box thinking. Surprising and delightful twists, radical directions, and testing unconventional ideas.
**Example invocation**:
```javascript
sisyphus_task(category="experiment", prompt="Suggest a radical new way to visualize the user's progress tree")
```

### brainstorm
**When to use**: Multi-perspective ideation, explore all angles.
**Philosophy**: Multi-perspective ideation. Divergent thinking, generating diverse bold options, and considering extreme edge cases.
**Example invocation**:
```javascript
sisyphus_task(category="brainstorm", prompt="What are potential features for our v2 roadmap?")
```

### analyze
**When to use**: Deep debugging, systematic root cause analysis.
**Philosophy**: Deep investigation. Systematic root cause analysis, evidence-based reasoning, and methodical hypothesis-driven testing.
**Example invocation**:
```javascript
sisyphus_task(category="analyze", prompt="Find the cause of the race condition in the cache layer")
```

### review
**When to use**: Code review for security, performance, and maintainability.
**Philosophy**: Critical evaluation. Skeptical but constructive, identifying anti-patterns, and considering long-term impact.
**Example invocation**:
```javascript
sisyphus_task(category="review", prompt="Review this PR for potential memory leaks and security flaws")
```

### spec
**When to use**: API design, contracts, and RESTful conventions.
**Philosophy**: Contract-first design. Precise definitions, constraints, and OpenAPI compatibility. Define before implementing.
**Example invocation**:
```javascript
sisyphus_task(category="spec", prompt="Design the REST API for the new notification system")
```

### document
**When to use**: Technical documentation and READMEs.
**Philosophy**: Clear structured documentation. Scannable format, accurate coverage, and developer-friendly organization.
**Example invocation**:
```javascript
sisyphus_task(category="document", prompt="Write the setup guide for the microservices environment")
```

### write
**When to use**: Blog posts, personal voice, and engaging prose.
**Philosophy**: Authentic voice. Personal and engaging tone, storytelling techniques, and connecting with the reader.
**Example invocation**:
```javascript
sisyphus_task(category="write", prompt="Draft a blog post about our journey adopting Rust")
```

## Stack Categories

### java-spring
**When to use**: Spring Boot development.
**Key idioms/patterns**: @Autowired, Spring Data JPA, Lombok (@Data, @Builder), @SpringBootTest, MockMvc.
**Example invocation**:
```javascript
sisyphus_task(category="java-spring", prompt="Create a REST controller for managing product inventory")
```

### java-quarkus
**When to use**: Quarkus native development.
**Key idioms/patterns**: CDI (@Inject, @ApplicationScoped), Mutiny (Uni, Multi), Native compilation, dev mode.
**Example invocation**:
```javascript
sisyphus_task(category="java-quarkus", prompt="Implement a reactive database client for User profiles")
```

### ts-react
**When to use**: React with TypeScript.
**Key idioms/patterns**: Hooks (useState, useEffect), Component composition, Strict typing, React Testing Library.
**Example invocation**:
```javascript
sisyphus_task(category="ts-react", prompt="Implement a custom hook for handling form validation")
```

### ts-angular
**When to use**: Angular development.
**Key idioms/patterns**: Modules/Services, RxJS (Observables), Dependency Injection, Reactive Forms, TestBed.
**Example invocation**:
```javascript
sisyphus_task(category="ts-angular", prompt="Create a data service with RxJS error handling")
```

### ts-next
**When to use**: Next.js App Router.
**Key idioms/patterns**: Server/Client Components, SSR/SSG, next/image, File-based routing, Middleware.
**Example invocation**:
```javascript
sisyphus_task(category="ts-next", prompt="Setup dynamic routing for the blog section")
```

### python-fast
**When to use**: FastAPI development.
**Key idioms/patterns**: Pydantic models, async/await, Type hints, Depends(), Automatic OpenAPI.
**Example invocation**:
```javascript
sisyphus_task(category="python-fast", prompt="Create a validated endpoint for user registration")
```

### go-backend
**When to use**: Go backend services.
**Key idioms/patterns**: Explicit error handling, Interfaces, Goroutines/Channels, Standard library, Table-driven tests.
**Example invocation**:
```javascript
sisyphus_task(category="go-backend", prompt="Implement a concurrent worker pool for processing jobs")
```

### rust-systems
**When to use**: Rust systems programming.
**Key idioms/patterns**: Ownership/Borrowing, Result/Option patterns, Lifetimes, Zero-cost abstractions.
**Example invocation**:
```javascript
sisyphus_task(category="rust-systems", prompt="Optimize the memory allocation in the parser")
```

### devops
**When to use**: IaC, Docker, Kubernetes, Terraform, Terraform.
**Key idioms/patterns**: Infrastructure as Code, Multi-stage builds, Declarative approach, Immutability.
**Example invocation**:
```javascript
sisyphus_task(category="devops", prompt="Create a multi-stage Dockerfile for the Go backend")
```

## How Sisyphus Uses Categories

- **Auto-Selection**: Sisyphus can auto-select categories based on task context and your instructions.
- **Skill Combination**: Categories can be combined with skills for enhanced capability (e.g., `ts-react` + `playwright`).
- **Explicit Override**: Use an explicit category when you want a specific model or behavior for a sub-task.

## Configuration

You can customize the behavior of any category in `oh-my-opencode.json`:

```json
{
  "categories": {
    "craft": {
      "model": "anthropic/claude-opus-4-5",
      "temperature": 0.1,
      "prompt_append": "Always prioritize performance in your refactorings."
    }
  }
}
```

## Examples

### 1. Rapid Prototyping
```javascript
// Quick and dirty spike to see if it works
sisyphus_task(category="spike", prompt="Show me a POC of using WebSockets for live chat")
```

### 2. High-Quality Feature Implementation
```javascript
// Crafting with tests and quality
sisyphus_task(category="craft", prompt="Implement the user profile editing flow with full test coverage")
```

### 3. Cross-Functional Collaboration
```javascript
// Backend logic followed by UI creation
await sisyphus_task(category="business-logic", prompt="Implement the discount calculation engine")
await sisyphus_task(category="create", prompt="Build the checkout summary UI using the new engine")
```

### 4. Deep Troubleshooting
```javascript
// Detailed analysis of a bug
sisyphus_task(category="analyze", prompt="Explain why the session token expires prematurely on mobile devices")
```

### 5. API First Development
```javascript
// Design the spec before implementation
sisyphus_task(category="spec", prompt="Create the OpenAPI spec for the external billing API")
```
