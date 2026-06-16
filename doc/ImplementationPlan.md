# Portfolio Implementation Plan

## 1. Objective

Build a polished personal portfolio for Muhammad Wasay Tariq from a zero-progress React/Vite starter project. The finished site should present him as a software engineering student and full-stack developer with strong systems, backend, database, and architecture experience.

The portfolio should be:

- Content-first: every visible section should support the resume/profile information in `p_draft.md`.
- Professional: the design should feel credible for software engineering, full-stack, systems, and architecture roles.
- Fast: lightweight React, minimal dependencies, optimized assets, and a clean Vite production build.
- Maintainable: profile content should be easy to update without digging through presentation markup.
- Responsive: desktop, tablet, and mobile should all feel intentionally designed.
- Accessible: semantic HTML, readable contrast, keyboard navigation, and sensible focus states.

## 2. Source Material

Primary source:

- `p_draft.md`

Important profile facts to preserve:

- Name: Muhammad Wasay Tariq
- Role line: Software Engineering Student / Full-Stack Developer
- Education: FAST NUCES Islamabad, BS Software Engineering, Class of 2028
- Email: wasaytariq05@gmail.com
- GitHub: github.com/includeduck
- Core strengths: C++, SQL Server, Data Structures and Algorithms, Object-Oriented Design
- Broader skills: React, JavaScript, TypeScript, ASP.NET Core, Spring Boot, Java, C#, SQL, Python, Entity Framework Core, JDBC, Hibernate/JPA, Git, Maven, CMake, JUnit, xUnit, Linux
- Achievements: 270+ LeetCode problems, top grade in Data Structures, 7 shipped full-stack/desktop projects
- Career interests: Software Engineer, Forward-Deployed Software Engineer, Harness Engineer, Full-Stack Developer, Software Architect

The text in `p_draft.md` currently contains some mojibake characters where punctuation should appear. During implementation, normalize those visible characters into plain punctuation in the rendered site. Do not change the draft file unless explicitly asked.

## 3. Current Project Assumptions

The project is currently a Vite React app with starter content:

- `src/App.jsx`
- `src/App.css`
- `src/index.css`
- `src/main.jsx`
- `public/favicon.svg`
- `public/icons.svg`
- starter assets in `src/assets`

The existing app surface should be treated as disposable starter UI. The implementation should replace the starter counter/documentation/social sections with the real portfolio experience.

The current dependency set is small:

- React
- React DOM
- Vite
- ESLint

Do not introduce new dependencies unless they solve a clear problem. The first implementation should be achievable with React and CSS.

## 4. Product Direction

The portfolio should position Muhammad as an early-career engineer with unusually broad project depth. The site should avoid looking like a generic student landing page. It should emphasize:

- Complete systems built across frontend, backend, database, desktop, and compiler domains.
- Engineering judgment: modularity, tested APIs, clean architecture, database design, and maintainability.
- Practical credibility: real repositories, concrete stacks, and implementation-heavy project descriptions.
- Career readiness: clear contact paths, focused interests, and strong technical signal above decoration.

Suggested tone:

- Direct
- Technical
- Calm
- Confident
- Not overly flashy

Suggested visual personality:

- Editorial but practical
- Dense enough to scan
- Light technical texture
- Strong typography
- Restrained color
- Clear section rhythm

Avoid:

- Generic hero slogans
- Decorative cards everywhere
- Oversized marketing copy
- A one-color purple/blue gradient theme
- Heavy animations that distract from project substance
- Hiding the actual projects below a long intro

## 5. Information Architecture

Recommended page order:

1. Header / navigation
2. Hero
3. Technical focus strip
4. Featured projects
5. Skills
6. Achievements
7. Currently exploring / career interests
8. Contact footer

This should be a single-page portfolio with anchor navigation. Each section should have a stable `id` so the header can link to it.

Suggested anchors:

- `#home`
- `#projects`
- `#skills`
- `#achievements`
- `#contact`

## 6. Section Requirements

### 6.1 Header

Purpose:

- Provide quick identity, navigation, and contact actions.

Content:

- Left side: Muhammad Wasay Tariq or short mark such as `MWT`.
- Right side navigation: Projects, Skills, Achievements, Contact.
- Primary action: email link.
- Secondary action: GitHub link.

Behavior:

- Sticky or top-fixed header is optional. If sticky, keep it compact and ensure it does not cover anchor targets.
- On mobile, collapse nav into a compact layout or wrap cleanly. Avoid building a menu unless needed.

Implementation notes:

- Use semantic `header` and `nav`.
- Add `aria-label="Primary navigation"` to the nav.
- External links should include `target="_blank"` and `rel="noreferrer"`.

### 6.2 Hero

Purpose:

- Immediately communicate who Muhammad is, what he builds, and why the visitor should keep reading.

Recommended content:

- Eyebrow: `FAST NUCES Islamabad - BS Software Engineering, Class of 2028`
- H1: `Muhammad Wasay Tariq`
- Subheading: `Software Engineering Student and Full-Stack Developer`
- Body copy adapted from the About section:
  - Focus on complete, well-architected systems.
  - Mention compilers, multithreaded/systems-style work, full-stack platforms, backend APIs, relational databases, and desktop applications.
- Calls to action:
  - `View Projects`
  - `Contact`
  - `GitHub`

Suggested supporting metrics:

- `270+` algorithm problems solved
- `7` shipped full-stack and desktop projects
- `Top grade` in Data Structures

Design notes:

- The hero should be the first real viewport signal.
- Use a strong layout with text and a technical summary panel or metrics strip.
- Do not make a marketing-style split hero with generic illustration.
- If an image is used, it should reinforce the personal/technical identity rather than being decorative stock.

### 6.3 Technical Focus Strip

Purpose:

- Give recruiters and engineers a quick read on the domains Muhammad is strongest in.

Recommended items:

- Full-stack systems
- Backend APIs
- SQL Server and relational databases
- C++ and algorithms
- Compiler construction
- Desktop applications

Implementation notes:

- This can be a horizontal band below the hero.
- Keep labels short.
- Use compact tags or grouped text, not large cards.

### 6.4 Featured Projects

Purpose:

- Make the projects the strongest section of the site.
- Show breadth while keeping each project easy to scan.

Projects from `p_draft.md`:

1. GPA System
2. Smart Disaster Response
3. MiniCompiler
4. Normalizer
5. CDIEM - Digital Investigation & Evidence Management
6. Keyboard Analytics Platform
7. BFSMaze

Recommended project data fields:

- `title`
- `summary`
- `stack`
- `repoUrl`
- `category`
- `highlights`
- `featured`

Suggested categories:

- Full-stack
- Backend
- Systems
- Desktop
- Database
- Compiler

Suggested layout:

- First two or three projects can be visually emphasized.
- Remaining projects can use a tighter grid/list.
- Each project should include a short description, stack chips, and a GitHub link.

Recommended project emphasis:

- GPA System: strong full-stack/API/testing signal.
- Smart Disaster Response: strong system complexity/workflow/database signal.
- MiniCompiler: strong systems/architecture signal.
- Normalizer: database theory and educational tooling signal.
- CDIEM: domain-specific desktop/database workflow signal.
- Keyboard Analytics Platform: distributed app signal.
- BFSMaze: algorithms and C++ foundation signal.

Project card requirements:

- Title should be visible and linked only if the entire title clearly communicates the destination.
- Repo link should be an obvious action.
- Stack should be readable, not a long unbroken sentence.
- Avoid text overflow on mobile.
- Keep cards equal enough in structure to scan, but allow featured projects more room.

### 6.5 Skills

Purpose:

- Translate the detailed technical skills into recruiter-friendly and engineer-friendly groups.

Recommended grouping:

- Languages
- Frontend
- Backend
- Databases
- Tools and Testing
- Strongest In
- Comfortable With
- Exploring

Content:

- Languages: C++, Java, C#, JavaScript, TypeScript, SQL, Python
- Frontend: React, HTML5, CSS3, Vite, Tailwind CSS
- Backend: ASP.NET Core, Spring Boot, REST APIs, JWT Authentication
- Databases: Microsoft SQL Server, Entity Framework Core, JDBC, Hibernate/JPA
- Tools: Git, Maven, CMake, JUnit, xUnit, Linux
- Strongest in: C++, SQL Server, Data Structures and Algorithms, Object-Oriented Design
- Comfortable with: JavaScript, React, Software Architecture, Database Design
- Exploring: Python, Linux systems programming, Flask

Design notes:

- Use compact skill groups rather than huge individual badges everywhere.
- Keep the strongest skills visually distinguishable.
- Do not overstate skill level beyond the draft.

### 6.6 Achievements

Purpose:

- Provide measurable proof points.

Content:

- Solved 270+ LeetCode problems across data structures and algorithms.
- Top grade in university Data Structures coursework.
- Shipped 7 full-stack and desktop projects across ASP.NET Core, Spring Boot, JavaFX, React, SQL Server, and C++.

Design notes:

- Use metric-style display for the first two items.
- Include one sentence of context if needed.
- Keep this section concise.

### 6.7 Currently Exploring and Career Interests

Purpose:

- Show growth direction and role alignment.

Currently exploring:

- Advanced data structures and algorithms
- Software architecture
- Systems programming
- Compiler construction
- Full-stack development

Career interests:

- Software Engineer
- Forward-Deployed Software Engineer
- Harness Engineer
- Full-Stack Developer
- Software Architect

Design notes:

- This can be a two-column section on desktop.
- On mobile, stack the columns.
- Keep the copy grounded and specific.

### 6.8 Contact Footer

Purpose:

- End with clear ways to continue.

Content:

- Email: wasaytariq05@gmail.com
- GitHub: github.com/includeduck
- Short closing line adapted from the Philosophy section:
  - The goal is software that is understandable, scalable, and practical to use.

Implementation notes:

- Use `mailto:` for the email.
- Use a real external GitHub link.
- Include a small copyright line if desired.

## 7. Content Architecture

Create a dedicated content module so portfolio data is separate from layout.

Recommended file:

- `src/data/portfolio.js`

Suggested exports:

- `profile`
- `metrics`
- `projects`
- `skillGroups`
- `achievements`
- `interests`

Example shape:

```js
export const profile = {
  name: 'Muhammad Wasay Tariq',
  title: 'Software Engineering Student and Full-Stack Developer',
  education: 'FAST NUCES Islamabad - BS Software Engineering, Class of 2028',
  email: 'wasaytariq05@gmail.com',
  github: 'https://github.com/includeduck',
}
```

Implementation rule:

- Avoid duplicating the same content in multiple components.
- Components should render data from the content module wherever practical.

## 8. Component Architecture

Recommended structure:

- `src/App.jsx`
- `src/components/Header.jsx`
- `src/components/Hero.jsx`
- `src/components/MetricStrip.jsx`
- `src/components/ProjectSection.jsx`
- `src/components/ProjectCard.jsx`
- `src/components/SkillsSection.jsx`
- `src/components/AchievementsSection.jsx`
- `src/components/InterestsSection.jsx`
- `src/components/Footer.jsx`
- `src/data/portfolio.js`

Alternative for a smaller implementation:

- Keep components in `App.jsx` until the file becomes hard to scan.
- Still keep content in `src/data/portfolio.js`.

Preferred approach:

- Split sections into components from the beginning because this portfolio has enough content to justify it.

Component responsibilities:

- `App.jsx`: page composition only.
- `Header.jsx`: identity, nav links, contact actions.
- `Hero.jsx`: headline, intro, primary actions, metrics.
- `MetricStrip.jsx`: reusable metric display if not embedded in hero.
- `ProjectSection.jsx`: section wrapper and featured/non-featured layout.
- `ProjectCard.jsx`: single project display.
- `SkillsSection.jsx`: grouped skills.
- `AchievementsSection.jsx`: measurable achievements.
- `InterestsSection.jsx`: exploring and career interests.
- `Footer.jsx`: contact links and closing philosophy.

## 9. Styling Architecture

Current CSS can be replaced with portfolio-specific styling.

Recommended approach:

- Use plain CSS with CSS custom properties.
- Keep global tokens in `src/index.css`.
- Keep component/page styles in `src/App.css` unless the project grows.

CSS token categories:

- Colors
- Typography
- Spacing
- Borders
- Shadows
- Layout widths
- Focus states

Suggested color direction:

- Base: near-white or soft off-white background.
- Text: high-contrast dark neutral.
- Secondary text: muted neutral.
- Accent 1: technical green, cyan, or blue-green.
- Accent 2: warm amber or rust used sparingly.
- Borders: subtle neutral.
- Code/skill chips: low-contrast neutral backgrounds.

Avoid making the site dominated by:

- Purple gradients
- Dark blue/slate-only palettes
- Beige/brown-only palettes
- Decorative glow/orb backgrounds

Typography:

- Use system fonts unless a font dependency is intentionally added.
- H1 should be prominent but not oversized on mobile.
- Body text should be comfortable for long project descriptions.
- Use `letter-spacing: 0` for normal text.

Layout:

- Use a max-width container around 1080px to 1180px.
- Use full-width section bands where helpful.
- Avoid nested cards.
- Use stable grid definitions:
  - Projects: `grid-template-columns: repeat(auto-fit, minmax(...))`
  - Skills: grouped columns that collapse cleanly.

Motion:

- Keep transitions subtle.
- Hover states can change border, background, or transform by a few pixels.
- Respect `prefers-reduced-motion`.

## 10. Responsive Requirements

Target viewport classes:

- Mobile: 320px to 767px
- Tablet: 768px to 1023px
- Desktop: 1024px and above
- Wide desktop: 1280px and above

Responsive behavior:

- Header links must not overflow at 320px width.
- Hero should stack on mobile.
- Project cards should become a single column on mobile.
- Skills should stack or use two columns depending on available width.
- Buttons and links should be touch-friendly.
- Long project names should wrap cleanly.
- Stack chips should wrap without breaking layout.

Specific mobile checks:

- `CDIEM - Digital Investigation & Evidence Management` must not overflow.
- `Keyboard Analytics Platform` card content should remain readable.
- Email address should wrap or be displayed in a way that does not cause horizontal scroll.

## 11. Accessibility Requirements

Semantic structure:

- One `h1` on the page.
- Section headings should follow a logical order.
- Use `main` for page content.
- Use `section` elements with accessible headings.
- Use `footer` for final contact content.

Links and buttons:

- Use links for navigation and external destinations.
- Do not use buttons for links.
- Make focus states visible.
- External GitHub links should have clear labels, such as `View GPA System repository`.

Images:

- Avoid decorative images unless they improve the page.
- Decorative images should have empty `alt=""`.
- Informative images should have meaningful alt text.

Color and contrast:

- Maintain WCAG-friendly contrast for body text, links, buttons, and focus states.
- Do not rely on color alone to communicate project category or importance.

Motion:

- Add reduced-motion handling if animations/transitions are used.

Keyboard:

- Every interactive element should be reachable by keyboard.
- Focus order should follow visual order.
- Anchor links should land at sensible positions.

## 12. SEO and Metadata

Update document metadata in `index.html`.

Recommended changes:

- Title: `Muhammad Wasay Tariq | Software Engineering Portfolio`
- Meta description: concise summary of full-stack, backend, systems, databases, and compiler projects.
- Theme color matching the final palette.

Recommended Open Graph metadata:

- `og:title`
- `og:description`
- `og:type`
- `og:url` if final deployment URL is known later

Optional later:

- Add a social preview image if a deployment target is known.
- Add structured data for `Person`.

## 13. Asset Plan

Initial implementation can avoid heavy image assets.

Use existing assets only if they support the final design. The current React/Vite starter logos should be removed from the rendered app.

Possible asset needs:

- A simple favicon or personal mark.
- Optional social preview image.
- Optional project thumbnails if screenshots become available.

Asset rules:

- Optimize images before committing.
- Use meaningful filenames.
- Keep image dimensions reasonable.
- Do not add large binary assets without a clear purpose.

## 14. Implementation Phases

### Phase 1: Content Modeling

Goal:

- Convert `p_draft.md` into structured JavaScript data.

Tasks:

- Create `src/data/portfolio.js`.
- Add profile data.
- Add metrics.
- Add all seven projects.
- Add skill groups.
- Add achievements.
- Add interests and currently exploring items.
- Normalize punctuation from the draft for rendered content.

Acceptance criteria:

- All source content from `p_draft.md` is represented.
- No project is missing a stack or repository link.
- No mojibake characters are visible in the data.

### Phase 2: Page Skeleton

Goal:

- Replace the starter Vite page with the real portfolio structure.

Tasks:

- Remove starter counter state from `App.jsx`.
- Remove React/Vite starter logo usage from the rendered page.
- Compose the main page sections.
- Add header navigation.
- Add section anchors.

Acceptance criteria:

- The page renders as a complete portfolio skeleton.
- Header links scroll to valid sections.
- No starter Vite copy remains visible.

### Phase 3: Hero and Contact Paths

Goal:

- Make the first viewport immediately useful.

Tasks:

- Build hero content from profile data.
- Add primary and secondary calls to action.
- Add metrics near the hero.
- Add email and GitHub links.

Acceptance criteria:

- A visitor can identify Muhammad, his role, education, and strengths without scrolling far.
- Contact and GitHub are available in the hero or header.
- Metrics are visible and readable.

### Phase 4: Projects

Goal:

- Build the strongest section of the portfolio.

Tasks:

- Render all projects from data.
- Create reusable project card component.
- Emphasize top projects.
- Add stack chips.
- Add GitHub repository links.
- Add project categories/highlights where helpful.

Acceptance criteria:

- All seven projects are visible.
- Each project has title, description, stack, and repository link.
- Cards scan well on desktop and mobile.
- Long project names do not overflow.

### Phase 5: Skills, Achievements, Interests

Goal:

- Complete the supporting credibility sections.

Tasks:

- Render grouped skills.
- Highlight strongest skills.
- Render achievements with measurable proof points.
- Render currently exploring and career interests.

Acceptance criteria:

- Skills are grouped logically.
- Strongest skills are easy to find.
- Achievements are concise and measurable.
- Interests do not feel like filler.

### Phase 6: Visual Design

Goal:

- Replace starter styling with a mature portfolio design.

Tasks:

- Define global CSS variables.
- Build page layout and section spacing.
- Style header, hero, cards, chips, links, and footer.
- Add responsive grid behavior.
- Add hover/focus states.
- Add reduced-motion styles if needed.

Acceptance criteria:

- Site looks intentionally designed, not like a starter template.
- Layout works from 320px mobile to wide desktop.
- Text is readable and does not overlap.
- Color palette is balanced and not one-note.

### Phase 7: Metadata and Polish

Goal:

- Prepare the app for sharing and deployment.

Tasks:

- Update `index.html` title and meta description.
- Confirm favicon behavior.
- Review visible text for typos and punctuation issues.
- Check all links.
- Remove unused imports and starter assets from code references.

Acceptance criteria:

- Browser title is portfolio-specific.
- Source has no unused React/Vite starter imports.
- All external links open correctly.
- Email link opens a mail client.

### Phase 8: Verification

Goal:

- Ensure the implementation is correct and production-ready.

Commands:

```bash
npm run lint
npm run build
```

Manual checks:

- Desktop viewport around 1440px wide.
- Laptop viewport around 1024px wide.
- Tablet viewport around 768px wide.
- Mobile viewport around 390px wide.
- Narrow mobile viewport around 320px wide.
- Keyboard tab order.
- Header anchor navigation.
- External links.
- Text wrapping.
- Color contrast.

Acceptance criteria:

- Lint passes.
- Production build passes.
- No horizontal scroll on mobile.
- No visible starter content.
- No broken links.

## 15. Suggested Copy Mapping

### Hero Copy

Use this as a starting point:

> I build complete, well-architected systems across full-stack web platforms, backend APIs, relational databases, desktop applications, and compiler pipelines.

Supporting sentence:

> My project work focuses on modular design, tested APIs, clean data models, and software that stays understandable after the first version ships.

### Project Section Intro

Use this as a starting point:

> A selection of systems spanning ASP.NET Core, Spring Boot, React, SQL Server, JavaFX, C++, and compiler architecture.

### Skills Section Intro

Use this as a starting point:

> Strongest in C++, SQL Server, data structures, algorithms, and object-oriented design, with practical full-stack experience across React, ASP.NET Core, Spring Boot, and relational databases.

### Footer Copy

Use this as a starting point:

> I like starting from a specification and following it through to software that is understandable, scalable, and practical to use.

## 16. Risk List

Risk: The portfolio could become too text-heavy.

Mitigation:

- Use section summaries, stack chips, and concise project cards.
- Keep long explanations limited to project descriptions.

Risk: The projects could look similar because many include backend/database work.

Mitigation:

- Add categories and project-specific highlights.
- Emphasize different value in each card: testing, workflows, compiler architecture, normalization algorithms, chain-of-custody, analytics, BFS.

Risk: Mobile layout could overflow because of long technical names.

Mitigation:

- Use wrapping chips.
- Set `min-width: 0` on grid/flex children.
- Test long project names at 320px width.

Risk: The site could look like a generic template.

Mitigation:

- Design around the actual project content.
- Use focused technical copy.
- Avoid generic stock visuals and starter logos.

Risk: Adding dependencies could slow implementation.

Mitigation:

- Build with React and CSS first.
- Add libraries only when there is a specific need.

## 17. Definition of Done

The portfolio implementation is done when:

- The app no longer shows starter Vite/React content.
- The page includes all major content from `p_draft.md`.
- All seven featured projects are present with stacks and repository links.
- The layout is responsive across mobile, tablet, and desktop.
- Email and GitHub links work.
- The site has portfolio-specific metadata.
- `npm run lint` passes.
- `npm run build` passes.
- Manual browser review finds no overlap, horizontal scrolling, broken anchors, or unreadable text.

## 18. Future Enhancements

These should be considered after the first complete version is working:

- Add project screenshots or short demo GIFs.
- Add a downloadable resume PDF.
- Add a small case-study page for the strongest two projects.
- Add deployment through Vercel, Netlify, or GitHub Pages.
- Add Open Graph preview image.
- Add analytics only if there is a real need.
- Add a blog or notes section for compiler/database/systems writeups.

