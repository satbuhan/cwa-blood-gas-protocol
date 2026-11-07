# Blood Gas-Guided Assessment of the Chemical Warfare Agent Casualty

An interactive, referenced walkthrough of the decision algorithm for using
blood gas analysis, lactate and co-oximetry to recognise, pattern-match and
manage chemical warfare agent (CWA) exposure — nerve agents/organophosphates,
blood agents (cyanide), and choking agents/vesicants — at the bedside. Every
box and decision point in the diagram can be selected to reveal, in one
place: what the step means, why the algorithm calls for it, and the sources
behind it.

**Live site:** https://satbuhan.github.io/cwa-blood-gas-protocol/

**Authors:** Dr. Özgür Karcıoğlu & Dr. Satuk Buğra Han Bozatlı

This tool is part of a growing atlas of tools built the same way:

- [Clinical Algorithm Atlas](https://satbuhan.github.io/clinical-algorithm-atlas/) — the hub page for all of them
- [Acute aortic dissection — initial medical management](https://github.com/satbuhan/aortic-dissection-protocol) ([live site](https://satbuhan.github.io/aortic-dissection-protocol/))
- [Butyrophenone selection — acute agitation & hyperactive delirium](https://github.com/satbuhan/agitation-delirium-protocol) ([live site](https://satbuhan.github.io/agitation-delirium-protocol/))
- [Influenza antiviral selection — baloxavir marboxil vs oseltamivir](https://github.com/satbuhan/influenza-antiviral-protocol) ([live site](https://satbuhan.github.io/influenza-antiviral-protocol/))
- [Dexketoprofen vs ibuprofen — selecting an NSAID for acute pain](https://github.com/satbuhan/nsaid-pain-protocol) ([live site](https://satbuhan.github.io/nsaid-pain-protocol/))
- [Anticoagulant reversal in gastrointestinal haemorrhage](https://github.com/satbuhan/anticoagulant-reversal-protocol) ([live site](https://satbuhan.github.io/anticoagulant-reversal-protocol/))
- [The adult with obesity in emergency and critical care](https://github.com/satbuhan/obesity-critical-care-protocol) ([live site](https://satbuhan.github.io/obesity-critical-care-protocol/))
- [Dapagliflozin / SGLT2 inhibitor — overdose and acute illness management](https://github.com/satbuhan/dapagliflozin-overdose-protocol) ([live site](https://satbuhan.github.io/dapagliflozin-overdose-protocol/))
- [Lidocaine vs prilocaine — local anaesthesia for laceration repair](https://github.com/satbuhan/lidocaine-prilocaine-protocol) ([live site](https://satbuhan.github.io/lidocaine-prilocaine-protocol/))
- [Reperfusion therapy in acute pulmonary thromboembolism](https://github.com/satbuhan/pte-thrombolysis-protocol) ([live site](https://satbuhan.github.io/pte-thrombolysis-protocol/))
- [LMWH selection & renal dosing in NSTE-ACS](https://github.com/satbuhan/lmwh-nste-acs-protocol) ([live site](https://satbuhan.github.io/lmwh-nste-acs-protocol/))
- [Ketamine in head injury — safety & complication management](https://github.com/satbuhan/ketamine-head-injury-protocol) ([live site](https://satbuhan.github.io/ketamine-head-injury-protocol/))
- [Midazolam versus clonazepam — seizures, acute agitation & anxiety](https://github.com/satbuhan/midazolam-clonazepam-protocol) ([live site](https://satbuhan.github.io/midazolam-clonazepam-protocol/))
- [Vasopressor (aminergic) agent selection in shock states](https://github.com/satbuhan/vasopressor-shock-protocol) ([live site](https://satbuhan.github.io/vasopressor-shock-protocol/))
- [Whole-body CT in traumatic circulatory shock](https://github.com/satbuhan/wbct-trauma-protocol) ([live site](https://satbuhan.github.io/wbct-trauma-protocol/))
- [Epinephrine/Adrenaline revisited — contemporary decision-making algorithm](https://github.com/satbuhan/epinephrine-revisited-protocol) ([live site](https://satbuhan.github.io/epinephrine-revisited-protocol/))
- [Ketamine in emergency and critical care — indication-based decision algorithm](https://github.com/satbuhan/ketamine-indications-protocol) ([live site](https://satbuhan.github.io/ketamine-indications-protocol/))
- [Tenecteplase versus alteplase — fibrinolysis in STEMI](https://github.com/satbuhan/tenecteplase-alteplase-stemi-protocol) ([live site](https://satbuhan.github.io/tenecteplase-alteplase-stemi-protocol/))

## Why this exists

A flowchart alone tells a reader *what* to do at each step but not *why*,
and a reader outside the authors' own team cannot easily check the evidence
behind a specific box (why lactate ≥8–10 mmol/L for cyanide; why pH <7.2
flags high risk in nerve-agent poisoning; why a normal early gas doesn't
rule out phosgene injury). This page keeps the original algorithm exactly
as authored, and attaches the clinical reasoning and literature to each box
without cluttering the diagram itself.

The algorithm this page presents is Figure 2 of "Blood Gas Analysis in the
Management of Chemical Warfare Agent Exposure: A Systematic Review" — the
review's own synthesis of 83 studies into "a coherent bedside approach"
(Section 4.5) for recognising the dominant blood-gas pattern and acting on
it before agent-specific laboratory confirmation is available.

## Status

This is a working version, built to be tested on both desktop and mobile.

- **Source workflow note:** this build used a new path for this atlas. The
  source manuscript (~12,000 words) was condensed by Dr. Karcıoğlu through
  an external AI (Gemini) into a structured document — metadata, abstract,
  methodology, claim-tagged clinical content, and a complete verbatim
  reference list — rather than uploaded here in full, and this tool was
  built from that structured document plus the authors' own Figure 2 image.
  **This did not replace independent reference verification** — no
  skip-verification exception was given for this build, the same as every
  tool in this atlas except the two explicitly marked exceptions below.
- **Every one of the manuscript's 83 references was run through independent
  verification** against a primary source (DOI resolution plus a
  title/author/journal/subject-matter check), not accepted from the
  condensed document's own reference list. 66 were checked in the same
  turn as the build; the remaining 17, which initially hit the session's
  shared web-search budget limit, were completed in a follow-up pass once
  the budget reset on a later turn. All 83 are now resolved — none left
  unchecked.
  - **73 references verified clean.**
  - **5 references corrected** after verification — 2 publication-year
    corrections (refs 19, 31 — an epub-ahead-of-print year was cited
    instead of the print year), 1 further publication-year correction
    (ref 57), 1 title mismatch (ref 62 — the manuscript's bracketed
    English title doesn't match the real French title), and 1 more
    publication-year correction found in the follow-up pass (ref 78 —
    cited as 2008, the DOI's epub date, but the indexed print year is
    2010). Each correction is recorded in that reference's own `kind`
    field in `assets/content.js`.
  - **5 references flagged NOT VERIFIED — likely fabricated or
    non-existent** (refs 27, 28, 29, 71, 73): exhaustive, multi-angle
    independent searching (exact title, DOI, author combination, and a
    check of the journal's own table of contents) found no trace of any of
    these five, anywhere. A follow-up pass specifically rechecked all five
    using different search angles (bare-DOI search, explicit DOI-resolution
    attempts, author-only search) to rule out a false fabrication flag —
    same result every time, still no trace anywhere. This is the same
    fabricated-reference failure mode seen before in this atlas — but this
    is the first time it has shown up in a manuscript that passed through
    an external AI condensation step first, and five turning up in one
    pass is the most of any tool so far. Whether the fabrication
    originated in the original manuscript or was introduced during AI
    condensation could not be determined, since the original manuscript
    text was never uploaded to this session. Two of these five (refs 28,
    29) are cited directly on the `mgmt_b` node, which carries its own
    explicit caveat in the readout panel; the other three are not cited on
    any node but remain fully visible, with the same honest flag, in the
    References panel.
- The diagram's trunk, the 3-way pattern-recognition fan-out, the matching
  3-way management row, and the closing reassessment box were transcribed
  directly from the authors' own Figure 2 image (inspected directly, not
  just text-extracted) and cross-checked against the manuscript's own
  Section 4.5 (the algorithm's own purpose statement), Sections 3.2–3.4
  (per-agent-class evidence), and the "guideline-sourced details" section
  of the condensed document, which flags which figure thresholds come from
  external guidelines rather than from this review's own primary pooling.
  This is an 83-reference systematic review behind a 10-box algorithm — not
  every reference maps onto a specific box; many support background
  epidemiology, review methodology, or evidence-table entries. The full,
  independently assessed reference list is always in the References panel
  regardless of which refs a given node cites.

## Disclaimer

This is an academic / educational reference tool, not a substitute for
institutional protocol or bedside clinical judgement. Five references could
not be verified and may be fabricated (see Status above) — do not treat any
claim resting solely on refs 27, 28, 29, 71 or 73 as confirmed. Verify any
threshold or dose against current local protocol before clinical use.

## How it's built

Plain HTML/CSS/JS, no build step and no framework — a single static site
that GitHub Pages can serve directly.

```
index.html          page structure — masthead, the diagram (trunk, the
                     3-way pattern/management fan-out, the closing
                     reassessment box), readout panel, references,
                     abbreviation legend, footer
assets/style.css     design (the "paper" masthead/references, the
                     single-trunk diagram grid and its 3-wide fan-outs)
assets/content.js     ← single source of truth for every node's text
                     and reference list. Edit this file to change what
                     the page says.
assets/app.js         rendering + interaction (builds the diagram and its
                     connector lines from content.js, handles the
                     click-to-expand panel on desktop and the bottom
                     sheet on mobile)
```

### Running it locally

No install needed:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

### Editing content

Open `assets/content.js`. Each entry in `NODES` is one box or decision
diamond from the diagram (`meaning`, `rationale`, optional `cautions`, and
`refs` pointing at numbered entries in `REFERENCES`). Add or edit a
reference in `REFERENCES` and point to it by `id` from any node. Never
change a node's `label` or `sub` text without the author team's sign-off —
those fields are the algorithm itself, transcribed verbatim from Figure 2.

### Building the next tool in this atlas

See [`METHODOLOGY.md`](METHODOLOGY.md) — the full build/verification
process (fidelity rule, content schema, citation verification, QA steps),
written so that any collaborator or AI assistant can pick up this project
in a fresh session and build the next tool the same way.

## License

Content and code are released under
[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) —
share and adapt with attribution, non-commercially, under the same license.
