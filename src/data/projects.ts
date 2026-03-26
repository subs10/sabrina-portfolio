export interface Slide {
  title: string;
  description: string;
  image: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  organization: string;
  year: string;
  description: string;
  tags: string[];
  coverImage: string;
  secondaryImage?: string;
  videoUrl?: string;
  youtubeUrl?: string;
  images?: string[];
  slides?: Slide[];
  imagesOnly?: boolean;
  hideLearnings?: boolean;
  caseStudy: {
    overview: string;
    role: string;
    roleDetails: string[];
    challenge: string;
    approach: string;
    impact: string[];
    learnings: string;
    relatedSkills: string[];
    stats?: string[];
    externalLink?: { label: string; url: string };
    bulletRoleDetails?: boolean;
    listImpact?: boolean;
  };
}

export const projects: Project[] = [
  {
    slug: "hosted-scanner",
    title: "Hosted Scanner Product Launch",
    category: "Product Management",
    organization: "StackHawk",
    year: "2025",
    description:
      "Led end-to-end project coordination for the Hosted Scanner product launch, spanning design, engineering, sales, and leadership.",
    tags: [
      "cross-functional communication",
      "release planning",
      "scrum facilitation",
      "stakeholder management",
    ],
    coverImage: "/images/projects/hosted-scanner/cover.png",
    caseStudy: {
      overview:
        "Hosted Scanner is a managed security scanning offering at [StackHawk](https://www.stackhawk.com), designed to make dynamic application security testing accessible to enterprise AppSec teams who need to scan legacy systems, acquired applications, and compliance-driven production apps. The launch expanded StackHawk\u2019s market reach by offering an alternative scanning method for teams blocked by pipeline integration or YAML configuration requirements.\n\nThe project brought together design, engineering, sales, and leadership in a coordinated 6-week design and build cycle, followed by a strategic launch that positioned Hosted Scanner as a complementary capability to StackHawk\u2019s core developer-first platform.",
      role: "As Product Management Intern, I supported the launch by coordinating cross-functional teams and ensuring information stayed clear during fast-paced product development and release.",
      roleDetails: [
        "Launch Coordination & Documentation: Tracked feature readiness, documented decisions, and translated technical progress into updates that sales and leadership could act on. Created and maintained internal documentation that kept teams aligned as development accelerated toward launch.",
        "Cross-Functional Communication: Shaped how progress and decisions were communicated across teams. Worked closely with design and engineering to coordinate implementation and testing, stepped in to clarify priorities where needed, and ensured everyone had the context they needed to move forward.",
        "Go-to-Market Support: Contributed to preparing customer-facing launch communications and supporting materials. Helped translate technical capabilities into messaging that resonated with enterprise AppSec teams evaluating the product.",
        "Feature Prioritization: Surfaced features to prioritize in upcoming sprints based on customer feedback, competitive positioning, and strategic goals. Participated in sprint planning discussions to ensure development efforts aligned with launch objectives.",
      ],
      challenge:
        "StackHawk\u2019s developer-first platform was built for teams running scans locally or in CI/CD pipelines. But enterprise AppSec teams kept hitting blockers: legacy systems they didn\u2019t control, acquired applications without source code access, and compliance requirements for production scanning. These teams wanted StackHawk but couldn\u2019t adopt it because pipeline integration or YAML configuration didn\u2019t fit their workflows.\n\nWe were also losing deals to competitors who only offered hosted scanning\u2014pressing a button was easier than our setup process, even though our core product was more powerful. Hosted Scanner needed to remove these barriers while positioning as a bridge to StackHawk\u2019s full capabilities, not a replacement for them.",
      approach:
        "I worked across teams to keep the launch moving smoothly during parallel development cycles. This meant maintaining clear documentation that design, engineering, sales, and leadership could reference, tracking what was ready and what still needed work, and translating technical updates into language that helped each team do their job.\n\nI participated in sprint planning to surface priority features, coordinated with design during prototyping and testing phases, and helped prepare go-to-market materials that positioned Hosted Scanner appropriately for enterprise customers. Throughout the launch, I focused on anticipating what information teams would need next and making sure it was accessible before they asked for it.",
      impact: [
        "Market Expansion: Hosted Scanner opened StackHawk to enterprise customers who had been blocked by pipeline or YAML requirements, creating a new adoption path for teams not ready to shift left immediately.",
        "Competitive Positioning: Enabled StackHawk to compete against vendors offering only hosted scanning, which we\u2019d previously been losing deals to.",
        "Customer Flexibility: Gave existing StackHawk customers a secondary capability for specific scenarios\u2014legacy apps, acquisitions, compliance scans\u2014that supplemented their pipeline-first workflows without replacing them.",
      ],
      learnings:
        "Operating in Ambiguity: Coordinating multiple teams during a fast-paced launch meant adapting quickly, asking the right questions, and anticipating what teams needed before blockers emerged. I learned to work effectively when information was incomplete and priorities were shifting.\n\nDocumentation as Enablement: Clear, accessible documentation was critical to keeping teams aligned. I learned to structure information differently for engineering, sales, and leadership\u2014same facts, different formats based on what each group needed to act on.\n\nAI-Assisted Workflows: I utilized AI tools to draft and refine internal product documentation, iterating on structure and language to better support the team.",
      relatedSkills: [
        "Product Management",
        "Launch Coordination",
        "Cross-Functional Collaboration",
        "Documentation",
        "Go-to-Market Strategy",
        "Feature Prioritization",
        "Stakeholder Communication",
      ],
    },
  },
  {
    slug: "stackhawk-vibe",
    title: "StackHawk Vibe",
    category: "Product Research",
    organization: "StackHawk",
    year: "2025",
    description:
      "Supported research and internal documentation for a cutting-edge AI-driven MCP product designed to bring security testing into AI coding workflows.",
    tags: [
      "product research",
      "internal documentation",
      "AI-driven workflows",
      "team collaboration",
    ],
    coverImage: "/images/projects/stackhawk-vibe/cover.jpg",
    caseStudy: {
      overview:
        "[StackHawk](https://www.stackhawk.com) Vibe introduced the first DAST (Dynamic Application Security Testing) solution delivered directly inside AI coding assistants through Model Context Protocol (MCP) integration. The project targeted an emerging market of AI-first builders\u2014developers and non-developers alike using tools like Cursor and Claude Code to build applications conversationally. By embedding security testing into their existing workflow, Vibe eliminated the need for users to context-switch to traditional security dashboards or learn complex security tooling.\n\nLaunched as a rapid 2-week MVP sprint with ongoing iteration, Vibe positioned StackHawk at the forefront of AI-assisted development security, reaching an entirely new user base while unexpectedly attracting enterprise interest in AI-driven security workflows.",
      role: "As Product Management Intern, I led competitive intelligence and market research that informed Vibe\u2019s strategic positioning and feature prioritization.",
      roleDetails: [
        "Competitive Analysis & Market Research: Conducted comprehensive research on the emerging MCP ecosystem, tracking competitor movements, capabilities, and go-to-market strategies. Analyzed how other security and development tools were approaching AI assistant integrations to identify gaps and opportunities for differentiation.",
        "Strategic Insights & Documentation: Synthesized research findings into actionable insights for product, engineering, and leadership teams. Documented the competitive landscape, highlighted feature opportunities, and tracked market trends in AI-assisted development tools to inform roadmap decisions.",
        "Cross-Functional Collaboration: Worked closely with product design, engineering, and go-to-market teams to translate research into product decisions. Participated in sprint planning discussions, contributed to feature prioritization, and helped shape messaging around Vibe\u2019s unique value proposition.",
      ],
      challenge:
        "The AI coding tools market was projected to reach $99 billion by 2034, with rapid adoption among both traditional developers and a new wave of non-technical builders. My research revealed that while competitors were experimenting with AI integrations, no DAST provider had successfully delivered security testing directly inside AI coding assistants. This represented a first-mover opportunity in an exploding market segment.",
      approach:
        "I established ongoing competitive monitoring to track competitor MCP initiatives and feature releases, while documenting the broader ecosystem of tools integrating with AI coding platforms. I synthesized findings into strategic documentation that helped engineering and design teams understand competitive context and make informed decisions quickly during the rapid MVP sprint.",
      impact: [
        "First-Mover Advantage: StackHawk became the first DAST company to deliver MCP-driven security testing directly inside AI coding assistants, establishing market leadership in an emerging category.",
        "Market Expansion: Successfully reached an entirely new user segment of AI-first builders, expanding StackHawk\u2019s addressable market and attracting unexpected enterprise interest.",
        "Informed Decision-Making: Competitive intelligence provided strategic context that helped teams move quickly and confidently during development and launch.",
      ],
      learnings:
        "In fast-moving markets, the ability to research quickly and synthesize insights creates competitive advantage. I learned that research only creates value when it\u2019s accessible and actionable\u2014structuring findings so different teams could immediately use them for their specific needs became one of my most valuable contributions.",
      relatedSkills: [
        "Product Management",
        "Competitive Analysis",
        "Market Research",
        "Strategic Planning",
        "Cross-Functional Collaboration",
        "AI/ML Product Strategy",
        "Documentation",
        "Stakeholder Communication",
      ],
    },
  },
  {
    slug: "hawkai-video",
    title: "HawkAI Promotional Video",
    category: "Visual Storytelling",
    organization: "StackHawk",
    year: "2024",
    description:
      "Designed and produced a launch video for HawkAI, orchestrating visuals, animation, and music to highlight product features and generate excitement for the release.",
    tags: [
      "product marketing",
      "figma",
      "brand communication",
      "visual storytelling",
    ],
    coverImage: "/images/projects/hawkai-video/cover.jpg",
    videoUrl: "/images/projects/hawkai-video/promo-video.mp4",
    caseStudy: {
      overview:
        "HawkAI is [StackHawk](https://www.stackhawk.com)\u2019s AI-powered API discovery feature that automatically identifies and catalogs APIs across applications, eliminating the manual work of documenting endpoints and helping security teams understand their API attack surface. The feature launch in 2024 represented a major product milestone, introducing machine learning capabilities that could detect APIs even in complex, undocumented codebases.\n\nAs the centerpiece of the marketing campaign, I created a [promotional video](https://youtu.be/6WE_v63gFDA) that brought energy and personality to a highly technical feature. The video premiered across all social media channels and played a role in setting the creative tone for the launch.",
      role: "As Marketing and Design Intern, I owned the promotional video from concept to delivery.",
      roleDetails: [
        "Creative Direction & Storyboarding: Developed the creative concept of a fun and dramatic movie trailer that would make a technical feature feel exciting and accessible. This direction aligned with StackHawk\u2019s fun, approachable brand while standing out from typical enterprise security marketing.",
        "Content Development: Worked with the design team to collect and sequence images that would visually communicate HawkAI\u2019s capabilities. Collaborated with marketing to gather customer quotes and wrote copy that balanced technical accuracy with engaging storytelling.",
        "Video Production: Animated images and text, timed sequences to music, and edited the final video. Made deliberate choices about pacing, transitions, and music to create a trailer-style build that kept viewers engaged while conveying the product\u2019s value.",
        "Marketing Collaboration: Coordinated with the marketing team to ensure the video supported broader launch messaging and could be adapted across different social media platforms.",
      ],
      challenge:
        "API discovery is complex and technical. Most security professionals understand why it matters\u2014you can\u2019t secure what you don\u2019t know exists\u2014but explaining how AI-powered discovery works in an engaging way is difficult. Traditional product marketing for enterprise security tools tends toward dry, feature-focused content that doesn\u2019t generate excitement.\n\nStackHawk needed a launch asset that would make a technical feature feel exciting, stand out in crowded social media feeds, align with the company\u2019s fun brand, and generate genuine enthusiasm internally and externally.",
      approach:
        "I took creative inspiration from movie trailers, using dramatic pacing, bold text treatments, and energetic music to build anticipation. The video followed a narrative arc: establishing the problem (APIs are everywhere and hard to track), building tension (manual discovery doesn\u2019t scale), and delivering the solution (HawkAI does it automatically).\n\nWorking with the design team, I selected and sequenced images that would visually support this story while showcasing the product interface. Customer quotes added credibility and real-world context, while copy focused on impact rather than technical specifications. I animated everything to music, timing transitions and text reveals to create momentum.",
      impact: [
        "Campaign Centerpiece: The video became one of the lead assets for the HawkAI launch across all social media channels, helping set the creative tone for the campaign.",
        "Internal Enthusiasm: The team loved the creative direction. The fun approach resonated with StackHawk\u2019s culture and brand image, proving that enterprise security marketing didn\u2019t have to be boring.",
        "Creative Differentiation: The movie trailer style stood out from typical product launch videos in the security space, helping StackHawk\u2019s content cut through noise in social feeds.",
      ],
      learnings:
        "Choosing a dramatic tone for an enterprise security product was a risk, but it aligned perfectly with StackHawk\u2019s brand and resonated with both internal teams and customers. I learned that creative risks pay off when you know your brand well, and that focusing on storytelling over feature lists makes technical content more accessible. Small decisions about pacing and timing animations to music made a significant difference in keeping viewers engaged.",
      relatedSkills: [
        "Video Production",
        "Creative Direction",
        "Storyboarding",
        "Marketing",
        "Brand Strategy",
        "Content Development",
        "Animation",
        "Cross-Functional Collaboration",
      ],
    },
  },
  {
    slug: "scripps-journal",
    title: "Scripps College Journal",
    category: "Editorial Design & Layout",
    organization: "Scripps College",
    year: "2024",
    description:
      "Sole designer of the journal\u2019s layout and visual structure from concept through print, translating student writing and artwork into a cohesive, publication-ready design.",
    tags: [
      "editorial design",
      "publication layout",
      "adobe indesign",
      "visual hierarchy",
    ],
    coverImage: "/images/projects/scripps-journal/cover.jpg",
    secondaryImage: "/images/projects/scripps-journal/secondary.jpg",
    images: [
      "/images/projects/scripps-journal/cover.jpg",
      "/images/projects/scripps-journal/secondary.jpg",
    ],
    caseStudy: {
      overview:
        "The [Scripps College Journal](https://community.scrippscollege.edu/scrippsjournal/) is the college\u2019s annually published literary journal, showcasing student works in creative nonfiction, fiction, poetry, and visual art. As Layout Editor, I was the sole designer responsible for the 2025 edition\u2014a 50+ page publication featuring work from 20+ artists selected through a highly competitive submission process.\n\nI owned the complete design process: establishing layout standards, designing every page, creating the cover and spine, collaborating with artists to preserve their creative visions, and coordinating with the publisher for print production. The project required 40+ hours of hands-on layout work and culminated in an open mic launch event for over 100 attendees.",
      role: "As Layout Editor, I was the sole designer responsible for the complete publication.",
      roleDetails: [
        "Built the Design System: Established typography, spacing, margins, and formatting rules flexible enough to handle poetry, prose, creative nonfiction, and visual art while maintaining consistency across 50+ pages.",
        "Designed Every Layout: Made decisions about how each piece would appear on the page\u2014balancing white space, text flow, and visual hierarchy to give submissions appropriate emphasis without overwhelming the work itself.",
        "Collaborated with Artists: Worked directly with 20+ contributors to understand their formatting needs and ensure layout choices honored their creative intent.",
        "Sequenced the Journal: Partnered with editors to determine the order and pacing of pieces, using layout to reinforce editorial choices\u2014alternating between dense prose and visual breathing room.",
        "Designed Cover & Coordinated Production: Created the cover and spine design, then worked with the publisher to ensure all files met technical specifications for print.",
        "Launched the Journal: Helped organize an open mic night where featured artists read their work to an audience of over 100 people.",
      ],
      challenge:
        "Literary journals live or die by restraint. The design needs to serve the work without imposing a heavy hand, but it also can\u2019t feel generic. With 20+ artists selected through a competitive process, each piece deserved thoughtful treatment\u2014but the journal also needed to feel like a curated whole, not a collection of disconnected parts.\n\nThe complexity came from range. Concrete poetry has completely different spatial needs than a six-page essay. Visual art reproductions require different technical considerations than prose. I needed a design system that could flex across all these formats while maintaining a consistent visual identity, all within the technical constraints of print production.",
      approach:
        "I anchored the system in a typography palette that felt literary and timeless\u2014sophisticated enough for an academic publication, readable enough to disappear when needed. From there, I built spacing and formatting rules that could accommodate different content types: tight leading for dense prose, generous white space for short poems, full bleeds for artwork.\n\nCollaboration shaped everything. Working directly with artists meant understanding when to preserve unconventional formatting choices and when to suggest alternatives that would work better in print. For sequencing, I treated the journal like a single reading experience, using page breaks, spacing, and visual pacing to create rhythm throughout.",
      impact: [
        "The final publication honored every contributor\u2019s work while feeling cohesive and intentional.",
        "Artists were satisfied with how their pieces appeared, and the open mic night brought over 100 people together to celebrate.",
        "The journal represented Scripps College\u2019s literary community at a professional standard that did justice to the competitive selection process.",
      ],
      learnings:
        "Design for literary work is an exercise in restraint. The best layouts are ones readers don\u2019t consciously notice\u2014they just experience the work itself. Establishing clear systems early saved me when things got complicated, while direct collaboration with artists taught me when to advocate for design decisions and when to defer to creative vision.",
      relatedSkills: [
        "Graphic Design",
        "Layout Design",
        "Typography",
        "Print Production",
        "Editorial Collaboration",
        "Design Systems",
        "Publication Design",
        "Artist Relations",
        "Event Coordination",
      ],
      stats: [
        "50+ pages",
        "20+ featured artists",
        "40+ hours of production",
        "100+ attendees at launch event",
      ],
    },
  },
  {
    slug: "building-this-website",
    title: "Building This Website",
    category: "Design + Development",
    organization: "Personal",
    year: "2025\u20132026",
    description:
      "Designed, coded, and hosted with AI, all from scratch.",
    tags: [
      "vibe-coding",
      "AI-assisted development",
      "creative direction",
      "UI/UX design",
      "front-end development",
    ],
    coverImage: "/images/projects/building-this-website/cover.jpg",
    hideLearnings: true,
    caseStudy: {
      overview:
        "My previous portfolio wasn\u2019t telling the full story. I needed something that could hold **three very different bodies of work** (product management, design, and fine art) and still feel cohesive and distinctly mine.\n\nRather than defaulting to Squarespace or Framer, I decided to build it myself using **Claude Code**. I\u2019d been watching vibe-coding become a real workflow in design and product environments. Using AI tools fluently isn\u2019t a shortcut anymore, it\u2019s a skill. I wanted to prove to myself that I could lead a full technical build end-to-end, even without an extensive engineering background.\n\nThe result is a fully custom, self-hosted website that I designed, directed, and shipped **solo, over 11 days**.",
      role: "The result is a fully custom Next.js site. No templates, no drag-and-drop builders, just clean code I understand and can maintain. Every page, interaction, and visual detail was a deliberate choice.",
      roleDetails: [
        "6 page templates (Home, Projects, Art, About, Contact, Case Studies)",
        "Custom image carousel with lightbox full-screen expand",
        "Scroll-triggered fade animations (Framer Motion)",
        "Interactive hero text with cursor-reactive distortion",
        "Frosted glass navigation header",
        "Fully responsive across mobile and desktop",
        "Reusable component library (Nav, Footer, ProjectCard, ImageLightbox)",
        "Self-hosted on Netlify \u2014 no ongoing platform fees",
      ],
      bulletRoleDetails: true,
      challenge:
        "**Communicating design intent without code vocabulary:** I don\u2019t write CSS. So I had to get precise in other ways. I referenced sites I liked, describing the feeling of an interaction, explaining what was wrong with what I was seeing in the browser. This pushed me to develop a much sharper design vocabulary. \u201CThe yellow isn\u2019t readable\u201D became \u201Cmatch the header yellow to the gold in the page body hover states.\u201D\n\n**Debugging as a non-developer:** When something broke, I couldn\u2019t read the error and fix it directly. I had to describe symptoms clearly, share screenshots, and trust the iteration process. This was frustrating at times, but it taught me a lot about how design decisions translate (or don\u2019t) into code. I got faster at identifying root causes by the end.\n\n**Staying the creative director:** The biggest challenge wasn\u2019t technical, it was staying in the driver\u2019s seat rather than reacting to whatever the AI produced. The best outputs came when I arrived with strong opinions. The weakest moments were when I asked Claude to \u201Cmake it look better\u201D without knowing what better meant to me. The tool is only as good as the direction behind it.",
      approach:
        "**Phase 1, Foundation & Creative Direction:** Before writing any code, I had to figure out what I wanted the site to feel like. I gathered reference sites, prepared my content, and came into the build with a clear creative vision: warm tones pulled from my artwork, a clean editorial layout for the projects section, and interactions with genuine personality. I used my existing project case studies as **context documents** so Claude always had a full picture of my work and voice.\n\n**Phase 2, Page by Page:** I worked through the site section by section \u2014 home, projects, art, about, contact \u2014 iterating on each until it felt right before moving forward. The projects pages needed structured case study formatting with enough visual breathing room to let the work speak. The art pages needed a gallery experience that felt more like a museum than a portfolio grid. This phase was the most iterative. I would describe what I wanted, see the result in the browser, and redirect with precision. Every detail went through **multiple rounds**, from cursor behavior to scroll animations and hover states. I logged **20+ distinct feedback sessions** across the **11 days**.\n\n**Phase 3, Polish & the Details:** The last stretch was the hardest and the most satisfying. Getting scroll animations to trigger correctly at all scroll speeds. Making the lightbox image expansion feel seamless. Matching the exact yellow across the header and page body. Ensuring the contact page read cleanly on mobile. These aren\u2019t glamorous problems, but solving them is the difference between a rough prototype and something I am proud to share.",
      impact: [
        "**Strong opinions make better AI outputs.** The more specific and directional I was, the better the results. Vague prompts produced generic designs. Clear creative conviction produced something that felt like mine.",
        "**AI doesn\u2019t eliminate iteration, it makes each iteration faster.** I still went through dozens of rounds on the scroll animations, the nav header, the contact page. The difference is that each round took minutes instead of days.",
        "**Shipping teaches you things planning can\u2019t.** Seeing the site in a real browser, on my phone, at different screen sizes is where the real design work happened. No amount of planning would have surfaced the issues I found by actually using the thing.",
        "**This is the future of building.** Not because AI replaces designers or developers, but because the gap between \u201CI have an idea\u201D and \u201CI have a website\u201D is getting shorter. Knowing how to close that gap \u2014 with taste, direction, and persistence \u2014 is a real and growing skill.",
      ],
      listImpact: true,
      learnings:
        "This project took more time than I expected and produced something better than I planned for. I came in wanting to prove I could use AI tools. I left having built a site that holds my full range of work and feels like a real extension of how I think and make.",
      relatedSkills: [
        "Vibe-Coding",
        "AI-Assisted Development",
        "Creative Direction",
        "UI/UX Design",
        "Front-End Development",
        "Product Thinking",
      ],
      stats: [
        "4\u20136 hrs active build time",
        "11 days start to finish",
        "20+ feedback sessions",
        "6 page templates built",
      ],
    },
  },
  {
    slug: "selected-design",
    title: "Selected Design Work",
    category: "Digital Marketing & Design",
    organization: "",
    year: "2024\u20132025",
    description:
      "Produced a range of digital design assets including ad campaigns, social media graphics, and website landing and login pages, focusing on clarity, usability, and brand consistency.",
    tags: ["UI design", "digital marketing assets", "figma", "web interfaces"],
    coverImage: "/images/projects/selected-design/cover.png",
    images: [
      "/images/projects/selected-design/cover.png",
    ],
    imagesOnly: true,
    caseStudy: {
      overview:
        "A collection of design projects created to build skills, explore new techniques, and support real-world marketing and product needs. These pieces represent ongoing learning and experimentation across different formats and design challenges.",
      role: "Designer across multiple projects and formats.",
      roleDetails: [
        "[StackHawk](https://www.stackhawk.com) Google Ad Campaign: Designed display ads for Google Ads campaigns, balancing brand identity with conversion-focused messaging in constrained formats.",
        "StackHawk Login Page Updates: Redesigned login page elements to highlight key product features and updates for users as they access the platform, improving feature awareness and engagement.",
        "Social Media Graphics: Created LinkedIn and social media graphics to support product launches, company announcements, and marketing initiatives\u2014maintaining brand consistency while optimizing for platform-specific requirements.",
      ],
      challenge:
        "Each project demanded different design thinking\u2014from the strict size constraints of display advertising to the user experience considerations of login page redesigns to the attention-grabbing requirements of social media content.",
      approach:
        "Approached each format with its unique constraints and goals, prioritizing clarity and brand consistency while optimizing for the specific context where each piece would appear.",
      impact: [
        "Delivered cohesive design assets across multiple channels and formats.",
        "Maintained brand consistency while adapting to platform-specific requirements.",
        "Built versatile design skills across advertising, UI, and social media formats.",
      ],
      learnings:
        "Working across different formats taught me to think about design constraints as creative catalysts rather than limitations. Each format\u2019s restrictions pushed me to communicate more efficiently and make every visual choice intentional.",
      relatedSkills: [
        "Graphic Design",
        "Digital Marketing",
        "Brand Design",
        "Social Media",
        "UI Design",
      ],
    },
  },
];
