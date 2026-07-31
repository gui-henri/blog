# Pipeline

The three phases, in detail.

## Phase 1 — Identify (capture)

**Triggers** — capture whenever any of these happen:

- `studied` — I studied a new topic (course, doc, book, hands-on).
- `learned` — something clicked; I now understand something I didn't.
- `built` — I created something: code, a sketch, a fix, an experiment.
- `trend` — an important current discussion in my field crossed my path.

**The capture note** — a single atomic idea, written in ≤ 10 minutes.
Template: [templates/capture-note.md](./templates/capture-note.md).
File location: `src/content/inbox/YYYY-MM-DD-slug.md`.

Rules:

- One idea per note. If a session produces three ideas, write three notes.
- Don't judge quality. Capture first, triage later.
- If there's no time to write a full note, write the worst note that counts as a note.
  A capture that isn't written is a capture that never happened.

## Phase 2 — Internalize (deep work)

**Promotion criteria** — a capture leaves the inbox when *both* hold:

1. **Competent** — I'm competent enough to teach it (writing is the test).
2. **Complex** — the topic is complex enough to deserve the long form.

If only one holds, prefer a **note** instead of an essay.

**The essay** — long-form writing is the internalization mechanism.
Template: [templates/article.md](./templates/article.md).
File location: `src/content/posts/YYYY-MM-DD-slug/index.mdx`.

**The video script** — derived from the finished essay. Not a recording of it:
a spoken version with one argument, an example, and a payoff.
Template: [templates/video-script.md](./templates/video-script.md).

**Publish during the process.** A thread saying "I'm studying X and hit a weird bug" is
valid content. It builds the reputation of a person who makes progress in public.

## Phase 3 — Distribute (artifacts)

Every piece of knowledge becomes an artifact somewhere. The smallest wins ship as notes
and short posts; the largest become essays and videos.

- Notes → a short post on X / LinkedIn / Instagram story.
- Essays → the repurpose matrix (1 essay → thread + post + carousel + reel + video).
- Builds → a "what I shipped" post per project milestone.

Channel angles:

| Channel | Angle |
| --- | --- |
| **Blog (here)** | Source of truth. Long-form, searchable, permanent. |
| **X** | Short ideas, threads, in-progress thinking, replies. |
| **LinkedIn** | Professional angle of the same content. |
| **Instagram** | Visual: carousels, progress shots, the person behind the work. |
| **YouTube** | The essay as a video — the deepest internalization. |

## Weekly review

Each week: walk the inbox.

- Promote → move to `notes/` or `posts/` (apply the promotion criteria).
- Combine → merge related captures into one essay idea.
- Archive → delete the rest. This is the filter; most captures should not become essays.

Timebox: 30 minutes. The review is a filter, not a writing session.
