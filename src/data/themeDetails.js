export const THEME_DETAILS = [
  {
    id: 1,
    title: "Claw & Shield",
    image: "/tracks/fintech.png",
    imageScale: 1,
    subtitle: "ArmorIQ x OpenClaw Hackathon Brief",
    summary:
      "Design autonomous OpenClaw agents that can take real actions on user systems while staying strictly aligned with user-defined intent boundaries.",
    sections: [
      {
        title: "Context and Core Question",
        items: [
          "Autonomous agents can modify files and execute commands directly on local systems.",
          "That power introduces the risk of irreversible or unintended actions.",
          "Core challenge: preserve user control while enabling autonomy.",
          "\"Autonomy must not mean loss of control.\"",
        ],
      },
      {
        title: "Your Challenge",
        items: [
          "Build an OpenClaw-based autonomous system with intent-aware execution.",
          "Demonstrate meaningful multi-step reasoning and real action execution.",
          "Enforce clear intent boundaries at runtime with deterministic constraints.",
          "Show explicit blocking of unauthorized behavior and visible policy violations.",
        ],
      },
      {
        title: "Technical Requirements",
        items: [
          "An OpenClaw-based autonomous agent.",
          "Real execution of actions in a system environment.",
          "Intent validation layer before execution.",
          "Policy-based runtime enforcement.",
        ],
      },
      {
        title: "Architectural Expectations",
        items: [
          "Clear separation between reasoning and execution.",
          "A visible and explicit enforcement layer.",
          "Traceability through logs or decision records.",
          "At least one allowed action and one blocked action with clear rationale.",
        ],
      },
      {
        title: "Intent and Policy Design",
        items: [
          "Define a structured intent model.",
          "Define an enforceable policy model (directory scopes, command restrictions, etc.).",
          "Hardcoded if/else checks alone are not sufficient for policy logic.",
        ],
      },
      {
        title: "Judging Criteria",
        items: [
          "Enforcement strength and deterministic blocking of violations.",
          "Architectural clarity of the enforcement mechanism.",
          "Depth and correctness of OpenClaw integration.",
          "Accurate delegation enforcement (if implemented).",
          "Use-case realism and depth of scenario design.",
        ],
      },
      {
        title: "Submission Requirements",
        items: [
          "Source code repository.",
          "Architecture diagram.",
          "Short technical document describing models and mechanisms.",
          "Three-minute demo video.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Open Innovation (AI/ML)",
    image: "/tracks/openinovation.png",
    imageScale: 1.2,
    subtitle: "Build High-Impact AI/ML Solutions",
    summary:
      "Choose a real problem space and deliver a practical AI/ML-powered product with measurable user value, responsible behavior, and clear technical depth.",
    sections: [
      {
        title: "Theme Focus",
        items: [
          "Open-domain innovation using AI/ML across healthcare, education, productivity, climate, accessibility, or civic systems.",
          "Prioritize practical impact, usability, and deployable outcomes over demo-only prototypes.",
          "Define one clear user segment and one measurable outcome your system improves.",
        ],
      },
      {
        title: "Your Challenge",
        items: [
          "Identify a meaningful real-world pain point and validate why it matters.",
          "Design an AI/ML workflow that goes beyond a thin wrapper around an API.",
          "Demonstrate end-to-end flow: input, reasoning/modeling, and useful output action.",
          "Ship a usable prototype with a clear product narrative and decision transparency.",
        ],
      },
      {
        title: "Technical Expectations",
        items: [
          "Working AI/ML core integrated into a real product flow.",
          "Clear data handling assumptions and model behavior explanation.",
          "Fallback or guardrail handling for uncertain or unsafe outputs.",
          "Reproducible demo path with stable runtime behavior.",
        ],
      },
      {
        title: "Evaluation Lens",
        items: [
          "Problem depth and relevance of the selected use case.",
          "Technical quality of modeling, orchestration, and system design.",
          "UX clarity, usefulness, and reliability of outputs.",
          "Responsible AI thinking: safety, bias awareness, and transparency.",
          "Execution quality, polish, and demo completeness.",
        ],
      },
      {
        title: "Suggested Deliverables",
        items: [
          "Source repository with readable setup instructions.",
          "Architecture overview (diagram preferred).",
          "Short brief: problem, users, model choices, constraints, and impact metrics.",
          "Concise video demo showing real usage flow and outcomes.",
        ],
      },
    ],
  },
];
