---
title: "Static site deploys on GitHub Pages: the actions/deploy-pages pattern"
createdAt: 2026-07-31
trigger: studied
tags: [ci-cd, github-actions]
source: "https://docs.astro.build/en/guides/deploy/github/"
---

## The idea

The current deploy-pages pattern is `upload-pages-artifact` → `deploy-pages`, with a build
job and a deploy job split by `environment: github-pages`. Needs `permissions: pages: write`,
`id-token: write`, and the artifact path pointing at the build output.

## Why it matters

It's the default for every static site on Pages and I keep re-deriving the YAML from memory.
Having it captured means next time it's a copy-paste, not a research session.

## Seed

- Note idea: "GitHub Pages deploy in 2026" — the minimal workflow.
- Possible hook for a short: "The YAML that ships your static site".
