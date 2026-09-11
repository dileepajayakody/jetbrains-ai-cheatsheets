# JetBrains Central Console — Editorial Seed

Voice: practical, administrator-focused, and governance-oriented. JetBrains
Central Console is the cloud control plane for organizations adopting JetBrains
AI products and services. Focus on managing people, product access, policies,
usage, costs, and billing across teams rather than on individual coding flows.

## Sections to cover (roughly)

1. **Getting Started** (s1, ⚡) — EAP status, intended administrators, JetBrains Account sign-in, and the first organization setup steps.
2. **Latest & EAP** (s11, 🧪) — capabilities explicitly marked new, preview, or EAP in the current documentation.
3. **Organizations & Teams** (s2, 🏢) — organization structure, teams, roles, membership, and administrative scope.
4. **Users & Access** (s5, 👥) — invitations, access assignment, removal, and product entitlement controls.
5. **Products & Services** (s6, 🧰) — supported JetBrains IDEs, plugins, services, team tools, and AI-powered features.
6. **AI Policies** (s7, 🛡️) — organization and team policy controls, available models and features, and enforcement scope.
7. **Budgets & Limits** (s8, 💳) — quotas, spending limits, and controls at team and organization levels.
8. **Usage & Analytics** (s9, 📊) — consumption, cost, adoption, and usage-pattern visibility.
9. **Usage-Based Billing** (s10, 🧾) — billing concepts, consumption accounting, and administrator workflows.
10. **Central CLI** (s4, ⌨️) — unified billing for supported CLI coding agents without separate provider API keys.
11. **JetBrains Account Transition** (s12, 🔄) — how Central Console relates to familiar JetBrains Account organization management and where workflows differ.
12. **Governance Tips** (s3, 💡) — practical rollout, least-privilege access, staged policy changes, budget monitoring, and periodic adoption reviews.

## Content ownership (avoid repetition)

- Membership, roles, and team structure → **Organizations & Teams** only.
- Invitations and product entitlements → **Users & Access** only.
- Model and feature availability controls → **AI Policies** only.
- Quotas and spending limits → **Budgets & Limits** only.
- Consumption and adoption reporting → **Usage & Analytics** only.
- Billing mechanics → **Usage-Based Billing** only.
- CLI proxy and provider-key replacement → **Central CLI** only.

## Pro tips flavor

Roll out to a pilot team first; assign only the access each team needs; set
budgets before broad enablement; compare adoption with cost regularly; verify
EAP behavior against the current docs before changing organization-wide policy.

## Note

Central Console is documented as an EAP and its capabilities are evolving.
Rely strictly on the official docs for feature names and availability. End with
an "Updated" row noting the docs scrape date.
