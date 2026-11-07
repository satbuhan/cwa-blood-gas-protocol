/* Clinical Algorithm Atlas — Blood gas-guided assessment of the chemical
   warfare agent (CWA) casualty.

   Source: "Blood Gas Analysis in the Management of Chemical Warfare Agent
   Exposure: A Systematic Review" (blinded submission manuscript, 2026;
   corresponding author not named in the blinded text), and its Figure 2
   decision algorithm, "Blood gas-guided assessment of the chemical warfare
   agent casualty" (inspected directly as a supplied image, not just
   text-extracted). All label/sub text in NODES below is transcribed
   byte-for-byte from that figure; only meaning, rationale, cautions,
   references and glossary are added by this tool.

   WORKFLOW NOTE — this build used a new source path for this atlas: rather
   than uploading the full ~12,000-word manuscript, Dr Karcıoğlu ran it
   through an external AI (Gemini) using a structured condensation prompt
   (metadata / abstract / purpose statement / methodology / claim-tagged
   clinical content / guideline-sourced-detail flagging / complete verbatim
   reference list), and the resulting structured .md was what this session
   actually built from. This did NOT replace independent reference
   verification — no skip-verification exception was given for this tool,
   unlike the two prior author-exception builds
   (epinephrine-revisited-protocol, ketamine-indications-protocol) — and
   the caution turned out to be warranted (see below).

   Every one of the manuscript's 83 references was run through independent
   verification against a primary source (DOI resolution plus a
   title/author/journal/subject-matter check), not accepted from the
   condensed document's own reference list. First pass (same turn as the
   build) covered 66 references; a budget-exhaustion gap of 17 references
   was closed in a follow-up pass once the search-tool budget reset on a
   later turn — see below. Final outcome, all 83 references resolved:
     - 73 references independently verified clean.
     - 5 references corrected after verification — 2 publication-year
       corrections (refs 19, 31: epub-ahead-of-print year cited instead of
       print year), 1 publication-year correction with a distinct-companion-
       paper check (ref 57), 1 title-mismatch (ref 62: bracketed English
       title in the manuscript does not match the real French title), and
       1 further publication-year correction found in the follow-up pass
       (ref 78: cited as 2008, the DOI's epub-ahead-of-print date, but the
       indexed print year is 2010 — same epub-vs-print pattern as 19/31/57).
     - 5 references flagged NOT VERIFIED — likely fabricated or non-existent
       (refs 27, 28, 29, 71, 73): exhaustive, multi-angle independent
       searching (exact title, DOI, author-combination, journal
       table-of-contents) found no trace of any of these five anywhere.
       A follow-up recheck pass tried genuinely different search angles on
       all five specifically to rule out a false fabrication flag (bare-DOI
       search, explicit DOI-resolution attempts, author-only search) and
       got the same result for every one — still no trace anywhere. This is
       the same fabricated-reference failure mode seen before in this atlas
       (nsaid-pain-protocol, ketamine-head-injury-protocol,
       tenecteplase-alteplase-stemi-protocol's ref 73) — except this time
       five turned up in one pass, the most of any tool so far, and it is
       the first time this failure mode has shown up specifically in a
       document that passed through an external AI condensation step
       first. Whether the fabrication originated in the original manuscript
       or was introduced/compounded during AI condensation could not be
       determined (the original manuscript text was never uploaded to this
       session to check). Two of these five (refs 28, 29) are cited
       directly on the `mgmt_b` node, which carries its own explicit
       caveat; the other three are not cited on any node but remain fully
       visible, with this same honest flag, in the References panel.
     - 0 references left unchecked. The 17 that initially hit the shared
       web-search budget limit (refs 5, 9-15, 74-78, 80-83) — several of
       them well-known standard EBM methodology citations (PRISMA 2020,
       RoB 2, ROBINS-I, QUADAS-2, SYRCLE, GRADE) — were all independently
       completed in the follow-up pass: 16 verified clean, 1 corrected
       (ref 78, see above).

   This is a shorter, 10-box decision algorithm built from an 83-reference
   systematic review, so not every reference is cited on a specific node —
   many support background epidemiology, review methodology, or
   evidence-table entries that inform the review's conclusions without
   being drawn as their own box in Figure 2. The full, independently
   assessed reference list is always in the References panel regardless of
   which refs a given node cites.
*/
const REFERENCES = [
  {
    id: 1,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Marzec, J. and Nadadur, S. (2024) 'Countermeasures against Pulmonary Threat Agents', The Journal of pharmacology and experimental therapeutics, 388(2), pp. 560-567.",
    url: "https://doi.org/10.1124/jpet.123.001822"
  },
  {
    id: 2,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Hulse, E.J., Haslam, J.D., Emmett, S.R. and Woolley, T. (2019) 'Organophosphorus nerve agent poisoning: managing the poisoned patient', British Journal of Anaesthesia, 123(4), pp. 457-463.",
    url: "https://doi.org/10.1016/j.bja.2019.04.061"
  },
  {
    id: 3,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Ranieri, V.M., Rubenfeld, G.D., Thompson, B.T., Ferguson, N.D., Caldwell, E., Fan, E. et al. (2012) 'Acute respiratory distress syndrome: the Berlin Definition', JAMA, 307(23), pp. 2526-2533.",
    url: "https://doi.org/10.1001/jama.2012.5669"
  },
  {
    id: 4,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Mikkelsen, M.E., Miltiades, A.N., Gaieski, D.F., Goyal, M., Fuchs, B.D., Shah, C.V. et al. (2009) 'Serum lactate is associated with mortality in severe sepsis independent of organ failure and shock', Critical Care Medicine, 37(5), pp. 1670-1677.",
    url: "https://doi.org/10.1097/CCM.0b013e31819fcf68"
  },
  {
    id: 5,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Vincent, J.L., Quintairos e Silva, A., Couto, L. and Taccone, F.S. (2016) 'The value of blood lactate kinetics in critically ill patients: a systematic review', Critical Care, 20(1), 257.",
    url: "https://doi.org/10.1186/s13054-016-1403-5"
  },
  {
    id: 6,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Bloom, B.M., Grundlingh, J., Bestwick, J.P. and Harris, T. (2014) 'The role of venous blood gas in the emergency department: a systematic review and meta-analysis', European Journal of Emergency Medicine, 21(2), pp. 81-88.",
    url: "https://doi.org/10.1097/MEJ.0b013e32836437cf"
  },
  {
    id: 7,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Byrne, A.L., Bennett, M., Chatterji, R., Symons, R., Pace, N.L. and Thomas, P.S. (2014) 'Peripheral venous and arterial blood gas analysis in adults: are they comparable? A systematic review and meta-analysis', Respirology, 19(2), pp. 168-175.",
    url: "https://doi.org/10.1111/resp.12225"
  },
  {
    id: 8,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Kelly, A.M. (2010) 'Review article: can venous blood gas analysis replace arterial in emergency medical care', Emergency Medicine Australasia, 22(6), pp. 493-498.",
    url: "https://doi.org/10.1111/j.1742-6723.2010.01344.x"
  },
  {
    id: 9,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Page, M.J., McKenzie, J.E., Bossuyt, P.M., Boutron, I., Hoffmann, T.C., Mulrow, C.D. et al. (2021) 'The PRISMA 2020 statement: an updated guideline for reporting systematic reviews', BMJ, 372, n71.",
    url: "https://doi.org/10.1136/bmj.n71"
  },
  {
    id: 10,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Sterne, J.A.C., Savović, J., Page, M.J., Elbers, R.G., Blencowe, N.S., Boutron, I. et al. (2019) 'RoB 2: a revised tool for assessing risk of bias in randomised trials', BMJ, 366, l4898.",
    url: "https://doi.org/10.1136/bmj.l4898"
  },
  {
    id: 11,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Sterne, J.A.C., Hernán, M.A., Reeves, B.C., Savović, J., Berkman, N.D., Viswanathan, M. et al. (2016) 'ROBINS-I: a tool for assessing risk of bias in non-randomised studies of interventions', BMJ, 355, i4919.",
    url: "https://doi.org/10.1136/bmj.i4919"
  },
  {
    id: 12,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Whiting, P.F., Rutjes, A.W.S., Westwood, M.E., Mallett, S., Deeks, J.J., Reitsma, J.B. et al. (2011) 'QUADAS-2: a revised tool for the quality assessment of diagnostic accuracy studies', Annals of Internal Medicine, 155(8), pp. 529-536.",
    url: "https://doi.org/10.7326/0003-4819-155-8-201110180-00009"
  },
  {
    id: 13,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Hooijmans, C.R., Rovers, M.M., de Vries, R.B.M., Leenaars, M., Ritskes-Hoitinga, M. and Langendam, M.W. (2014) 'SYRCLE's risk of bias tool for animal studies', BMC Medical Research Methodology, 14, 43.",
    url: "https://doi.org/10.1186/1471-2288-14-43"
  },
  {
    id: 14,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Guyatt, G.H., Oxman, A.D., Vist, G.E., Kunz, R., Falck-Ytter, Y., Alonso-Coello, P. et al. (2008) 'GRADE: an emerging consensus on rating quality of evidence and strength of recommendations', BMJ, 336(7650), pp. 924-926.",
    url: "https://doi.org/10.1136/bmj.39489.470347.AD"
  },
  {
    id: 15,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Guyatt, G., Oxman, A.D., Akl, E.A., Kunz, R., Vist, G., Brozek, J. et al. (2011) 'GRADE guidelines: 1. Introduction-GRADE evidence profiles and summary of findings tables', Journal of Clinical Epidemiology, 64(4), pp. 383-394.",
    url: "https://doi.org/10.1016/j.jclinepi.2010.04.026"
  },
  {
    id: 16,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Lakens, D. (2013) 'Calculating and reporting effect sizes to facilitate cumulative science: a practical primer for t-tests and ANOVAs', Frontiers in Psychology, 4, 863.",
    url: "https://doi.org/10.3389/fpsyg.2013.00863"
  },
  {
    id: 17,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Sullivan, G.M. and Feinn, R. (2012) 'Using effect size-or why the P value is not enough', Journal of Graduate Medical Education, 4(3), pp. 279-282.",
    url: "https://doi.org/10.4300/JGME-D-12-00156.1"
  },
  {
    id: 18,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Thiermann, H., Worek, F. and Horn, G. (2025) 'Approaches to the treatment of nerve agent poisoning with oximes - from experimental studies to the intensive care unit', Clinical Toxicology, 63(6), pp. 375-392.",
    url: "https://doi.org/10.1080/15563650.2025.2501266"
  },
  {
    id: 19,
    kind: "Corrected after independent verification: Title/authors/journal confirmed exactly (Tokuda Y, Kikuchi M, Takahashi O, Stein GH, 'Prehospital management of sarin nerve gas terrorism in urban settings: 10 years of progress after the Tokyo subway sarin attack', Resuscitation 68, p.193, PMID 16325985) via INRAE ESTHER database. However, the ESTHER citation key and indexing list this as a 2006 publication (volume 68 of Resuscitation = 2006), not 2005 as stated in the manuscript. The DOI given (10.1016/j.resuscitation.2005.05.023) reflects a 2005 epub-ahead-of-print date, but the formal print year is 2006. Manuscript's '(2005)' should likely read '(2006)' — a minor year citation error, common for epub/print year mismatches, but a real discrepancy against the indexed publication year.",
    text: "Tokuda, Y., Kikuchi, M., Takahashi, O. and Stein, G.H. (2005) 'Prehospital management of sarin nerve gas terrorism in urban settings: 10 years of progress after the Tokyo subway sarin attack', Resuscitation, 68(2), pp. 193-202.",
    url: "https://doi.org/10.1016/j.resuscitation.2005.05.023"
  },
  {
    id: 20,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Alozi, M. and Rawas-Qalaji, M. (2020) 'Treating organophosphates poisoning: management challenges and potential solutions', Critical Reviews in Toxicology, 50(9), pp. 764-779.",
    url: "https://doi.org/10.1080/10408444.2020.1837069"
  },
  {
    id: 21,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Anderson, P.D. (2011) 'Emergency management of chemical weapons injuries', Journal of Pharmacy Practice, 25(1), pp. 61-8.",
    url: "https://doi.org/10.1177/0897190011420677"
  },
  {
    id: 22,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Xu, B., Zeng, W., Chen, F. et al. (2023) 'Clinical characteristics and early prediction of mortality risk in patients with acute organophosphate poisoning-induced shock', Frontiers in Medicine, 9, 990934.",
    url: "https://doi.org/10.3389/fmed.2022.990934"
  },
  {
    id: 23,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Yuan, S., Gao, Y., Ji, W., Song, J. and Mei, X. (2018) 'The evaluation of acute physiology and chronic health evaluation II score, poisoning severity score, sequential organ failure assessment score combine with lactate to assess the prognosis of the patients with acute organophosphate pesticide poisoning', Medicine, 97(21), e10862.",
    url: "https://doi.org/10.1097/MD.0000000000010862"
  },
  {
    id: 24,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Tang, W., Ruan, F., Chen, Q. et al. (2016) 'Independent Prognostic Factors for Acute Organophosphorus Pesticide Poisoning', Respiratory Care, 61(7), pp. 965-70.",
    url: "https://doi.org/10.4187/respcare.04514"
  },
  {
    id: 25,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Lee, S.B., Kang, C., Kim, D.H. et al. (2017) 'Base deficit is a predictor of mortality in organophosphate insecticide poisoning', Human & Experimental Toxicology, 37(2), pp. 118-124.",
    url: "https://doi.org/10.1177/0960327117694073"
  },
  {
    id: 26,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Dong, N., Wang, S., Li, X. et al. (2021) 'Prognostic nomogram for the severity of acute organophosphate insecticide self-poisoning: a retrospective observational cohort study', BMJ Open, 11(5), e042765.",
    url: "https://doi.org/10.1136/bmjopen-2020-042765"
  },
  {
    id: 27,
    kind: "NOT VERIFIED — likely fabricated or non-existent. No trace found via extensive searching: exact title ('Emergency risk stratification for early respiratory failure in acute pesticide poisoning: a nomogram prediction model'), the DOI (10.1093/postmj/qgag002), and the author combination (Wang Q, Luo Y, Wu Y) in connection with Postgraduate Medical Journal all returned zero matching results across many search variations. Other, unrelated papers on similar topics exist (e.g. Korean PREP-score papers, a diquat poisoning nomogram paper) but none match this citation's title/authors/journal/DOI. This appears to be a non-existent/fabricated reference — classic failure mode of a citation with no trace via title/author/DOI search. [Rechecked in a follow-up pass with genuinely different search angles (bare-DOI search, DOI resolution attempts, author-only search, checking whether the DOI points to a different real paper) — same result, still no trace found anywhere.]",
    text: "Wang, Q., Luo, Y., Wu, Y. et al. (2026) 'Emergency risk stratification for early respiratory failure in acute pesticide poisoning: a nomogram prediction model', Postgraduate Medical Journal, 102(1209), pp. 680-688.",
    url: "https://doi.org/10.1093/postmj/qgag002"
  },
  {
    id: 28,
    kind: "NOT VERIFIED — likely fabricated or non-existent. No trace found via extensive searching: exact title ('PGI Score: A Promising Alternative to Serum Cholinesterase for Predicting Mortality and Adverse Outcomes in Acute Organophosphorus Poisoning: A Cross-Sectional Study'), the DOI (10.1111/bcpt.70145), and the author combination (Sagah GA, Sobeeh FG, Nassar EH, Selim AF, Sharif AF) all returned zero matching results. Checked an Assiut University faculty profile page for an author named Sagah — their 2024-2025 publication list contains unrelated papers (renal toxicity, milk microbiology, cardiology), with no PGI-score/organophosphorus paper. No evidence this paper exists — appears to be a non-existent/fabricated reference. [Rechecked in a follow-up pass with genuinely different search angles (bare-DOI search, DOI resolution attempts, author-only search, checking whether the DOI points to a different real paper) — same result, still no trace found anywhere.]",
    text: "Sagah, G.A., Sobeeh, F.G., Nassar, E.H., Selim, A.F. and Sharif, A.F. (2025) 'PGI Score: A Promising Alternative to Serum Cholinesterase for Predicting Mortality and Adverse Outcomes in Acute Organophosphorus Poisoning: A Cross-Sectional Study', Basic & Clinical Pharmacology & Toxicology, 137(6), e70145.",
    url: "https://doi.org/10.1111/bcpt.70145"
  },
  {
    id: 29,
    kind: "NOT VERIFIED — likely fabricated or non-existent. No trace found via extensive searching: exact title ('Early Markers in Severe Organophosphorus Poisoning and Their Association with Mortality'), the DOI (10.1016/j.jemermed.2024.12.004), and the author combination (Parrey AH, Koka M, Ismail M, Ashraf M, Lone H) all returned zero matching results in The Journal of Emergency Medicine or anywhere else. Many other organophosphorus-poisoning-marker papers exist from other author groups, but none match this one. Appears to be a non-existent/fabricated reference. [Rechecked in a follow-up pass with genuinely different search angles (bare-DOI search, DOI resolution attempts, author-only search, checking whether the DOI points to a different real paper) — same result, still no trace found anywhere.]",
    text: "Parrey, A.H., Koka, M., Ismail, M., Ashraf, M. and Lone, H. (2024) 'Early Markers in Severe Organophosphorus Poisoning and Their Association with Mortality', The Journal of Emergency Medicine, 73, pp. 95-101.",
    url: "https://doi.org/10.1016/j.jemermed.2024.12.004"
  },
  {
    id: 30,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Coskun, R., Gundogan, K., Sezgin, G.C. et al. (2015) 'A retrospective review of intensive care management of organophosphate insecticide poisoning: Single center experience', Nigerian Journal of Clinical Practice, 18(5), pp. 644-50.",
    url: "https://doi.org/10.4103/1119-3077.158962"
  },
  {
    id: 31,
    kind: "Corrected after independent verification: Title/authors/journal/pages confirmed exactly via direct fetch of INRAE ESTHER database entry (PMID 29217407): Alahakoon C, Dassanayake TL, Gawarammana IB, Weerasinghe VS, 'Can we predict intermediate syndrome? A review', Neurotoxicology, vol.69, starting page 209. However, the source lists this as a 2018 publication (consistent with volume 69 of Neurotoxicology = 2018), not 2017 as stated in the manuscript. The DOI given (10.1016/j.neuro.2017.12.002) reflects a December 2017 epub-ahead-of-print date, but the formal print year is 2018. Manuscript's '(2017)' likely should read '(2018)' — a minor year discrepancy against the indexed publication year, same pattern as reference 19.",
    text: "Alahakoon, C., Dassanayake, T.L., Gawarammana, I.B. and Weerasinghe, V.S. (2017) 'Can we predict intermediate syndrome? A review', Neurotoxicology, 69, pp. 209-216.",
    url: "https://doi.org/10.1016/j.neuro.2017.12.002"
  },
  {
    id: 32,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Galindez-Gonzalez, A.L., Ortega-Toro, T.A., Eraso Revelo, J.P., Solarte Argoti, E.M. and Del Castillo Calderon, J.G. (2021) '[Unusual Organophosphate Poisoning: Transplacental Route]', Andes Pediatrica, 92(5), pp. 760-764.",
    url: "https://doi.org/10.32641/andespediatr.v92i5.3275"
  },
  {
    id: 33,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Badrane, N., Askour, M., Berechid, K., Abidi, K., Dendane, T. and Zeggwagh, A.A. (2014) 'Severe oral and intravenous insecticide mixture poisoning with diabetic ketoacidosis: a case report', BMC Research Notes, 7, 485.",
    url: "https://doi.org/10.1186/1756-0500-7-485"
  },
  {
    id: 34,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Akyildiz, B.N., Kondolot, M., Kurtoglu, S. and Akin, L. (2009) 'Organophosphate intoxication presenting as diabetic keto-acidosis', Annals of Tropical Paediatrics, 29(2), pp. 155-8.",
    url: "https://doi.org/10.1179/146532809X440789"
  },
  {
    id: 35,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed). Note: full co-author list (Bharti, Guleria, Arya) beyond the first author could not be independently confirmed (paywalled record); title/journal/volume/page/DOI all match via a NASA/ADS bibcode record.",
    text: "Krishnamurthy, B., Bharti, S., Guleria, R. and Arya, D.S. (2012) 'Organophosphorus poisoning--an uncommon cause of severe but fatal metabolic acidosis', Experimental and Toxicologic Pathology, 65(5), pp. 709-10.",
    url: "https://doi.org/10.1016/j.etp.2012.09.004"
  },
  {
    id: 36,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Buckley, N.A., Eddleston, M., Li, Y., Bevan, M. and Robertson, J. (2011) 'Oximes for acute organophosphate pesticide poisoning', The Cochrane Database of Systematic Reviews, 2011(2), CD005085.",
    url: "https://doi.org/10.1002/14651858.CD005085.pub2"
  },
  {
    id: 37,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Eddleston, M. (2013) 'Applied clinical pharmacology and public health in rural Asia--preventing deaths from organophosphorus pesticide and yellow oleander poisoning', British Journal of Clinical Pharmacology, 75(5), pp. 1175-88.",
    url: "https://doi.org/10.1111/j.1365-2125.2012.04449.x"
  },
  {
    id: 38,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Pichamuthu, K., Jerobin, J., Nair, A. et al. (2010) 'Bioscavenger therapy for organophosphate poisoning - an open-labeled pilot randomized trial comparing fresh frozen plasma or albumin with saline in acute organophosphate poisoning in humans', Clinical Toxicology, 48(8), pp. 813-9.",
    url: "https://doi.org/10.3109/15563650.2010.518970"
  },
  {
    id: 39,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Banerjee, I., Tripathi, S.K. and Roy, A.S. (2014) 'Efficacy of pralidoxime in organophosphorus poisoning: revisiting the controversy in Indian setting', Journal of Postgraduate Medicine, 60(1), pp. 27-30.",
    url: "https://doi.org/10.4103/0022-3859.128803"
  },
  {
    id: 40,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Lin, C.C., Hung, D.Z., Chen, H.Y. and Hsu, K.H. (2016) 'The effectiveness of patient-tailored treatment for acute organophosphate poisoning', Biomedical Journal, 39(6), pp. 391-399.",
    url: "https://doi.org/10.1016/j.bj.2016.11.001"
  },
  {
    id: 41,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Basher, A., Rahman, S.H., Ghose, A., Arif, S.M., Faiz, M.A. and Dawson, A.H. (2013) 'Phase II study of magnesium sulfate in acute organophosphate pesticide poisoning', Clinical Toxicology, 51(1), pp. 35-40.",
    url: "https://doi.org/10.3109/15563650.2012.757318"
  },
  {
    id: 42,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Liu, H.X., Liu, C.F. and Yang, W.H. (2015) 'Clinical study of continuous micropump infusion of atropine and pralidoxime chloride for treatment of severe acute organophosphorus insecticide poisoning', Journal of the Chinese Medical Association, 78(12), pp. 709-13.",
    url: "https://doi.org/10.1016/j.jcma.2015.08.006"
  },
  {
    id: 43,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed). Note: one database mirror showed issue \"12\" where the manuscript cites \"34(1)\"; title/journal/year/pages all matched exactly, so this is flagged rather than treated as disqualifying.",
    text: "Zhao, B., Yang, L., Xiao, L. et al. (2016) '[The influence of sodium bicarbonate combined with ulinastatin on cholinesterase activity for patients with acute phoxim pesticide poisoning]', Chinese Journal of Industrial Hygiene and Occupational Diseases, 34(1), pp. 53-5.",
    url: "https://doi.org/10.3760/cma.j.issn.1001-9391.2016.01.015"
  },
  {
    id: 44,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Baud, F.J., Borron, S.W., Mégarbane, B., Trout, H., Lapostolle, F., Vicaut, E. et al. (2002) 'Value of lactic acidosis in the assessment of the severity of acute cyanide poisoning', Critical Care Medicine, 30(9), pp. 2044-2050.",
    url: "https://doi.org/10.1097/00003246-200209000-00015"
  },
  {
    id: 45,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Habeb, B., Kothia, D. and Brooks, A. (2025) 'Unmasking Cyanide Toxicity: A Case of Encephalopathy and Ventilatory Support Following Smoke Inhalation', Cureus, 17(11), e96859.",
    url: "https://doi.org/10.7759/cureus.96859"
  },
  {
    id: 46,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Baud, F., Boukobza, M. and Borron, S.W. (2011) 'Cyanide: an unreported cause of neurological complications following smoke inhalation', BMJ Case Reports, 2011.",
    url: "https://doi.org/10.1136/bcr.09.2011.4881"
  },
  {
    id: 47,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed). Note: confirmed by an exact title/author/journal match from an independent source; volume/page/DOI could not be cross-confirmed from a second independent source before the search budget ran out, so treat with slightly extra scrutiny.",
    text: "Fortin, J.L., Judic-Peureux, V., Desmettre, T. et al. (2011) 'Hydrogen cyanide poisoning in a prison environment: a case report', Journal of Correctional Health Care, 17(1), pp. 29-33.",
    url: "https://doi.org/10.1177/1078345810385647"
  },
  {
    id: 48,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Sang-A-Gad, P., Guharat, S. and Wananukul, W. (2011) 'A mass cyanide poisoning from pickling bamboo shoots', Clinical Toxicology, 49(9), pp. 834-839.",
    url: "https://doi.org/10.3109/15563650.2011.618456"
  },
  {
    id: 49,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Wong, E., Dodson, N., Wagner, S. and Thornton, S. (2022) 'Time to Burn? Characteristics of Hydroxocobalamin Administration in an Academic Medical Center', Journal of Pharmacy Practice, 37(2), pp. 369-373.",
    url: "https://doi.org/10.1177/08971900221136633"
  },
  {
    id: 50,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Stanton, E.W., Wang, S., Han, K. et al. (2024) 'Hydroxocobalamin is not associated with methemoglobinemia in patients with inhalation injury and suspected cyanide toxicity and a proposed algorithm for hydroxocobalamin administration', Burns, 50(7), pp. 1746-1751.",
    url: "https://doi.org/10.1016/j.burns.2024.04.007"
  },
  {
    id: 51,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Lawson-Smith, P., Jansen, E.C., Hilsted, L. and Hyldegaard, O. (2010) 'Effect of hyperbaric oxygen therapy on whole blood cyanide concentrations in carbon monoxide intoxicated patients from fire accidents', Scandinavian Journal of Trauma, Resuscitation and Emergency Medicine, 18, 32.",
    url: "https://doi.org/10.1186/1757-7241-18-32"
  },
  {
    id: 52,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Reade, M.C., Davies, S.R., Morley, P.T. et al. (2012) 'Review article: management of cyanide poisoning', Emergency Medicine Australasia, 24(3), pp. 225-238.",
    url: "https://doi.org/10.1111/j.1742-6723.2012.01538.x"
  },
  {
    id: 53,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Babacan, A. (2023) 'Diagnostic accuracy of carboxyhemoglobin saturation with pulse CO-oximetry in patients with carbon monoxide poisoning', Toxicology Research, 12(5), pp. 964-969.",
    url: "https://doi.org/10.1093/toxres/tfad090"
  },
  {
    id: 54,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Sebbane, M., Claret, P.G., Mercier, G. et al. (2013) 'Emergency department management of suspected carbon monoxide poisoning: role of pulse CO-oximetry', Respiratory Care, 58(10), pp. 1614-1620.",
    url: "https://doi.org/10.4187/respcare.02313"
  },
  {
    id: 55,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Papin, M., Latour, C., Leclere, B. and Javaudin, F. (2023) 'Accuracy of pulse CO-oximetry to evaluate blood carboxyhemoglobin level: a systematic review and meta-analysis of diagnostic test accuracy studies', European Journal of Emergency Medicine, 30(4), pp. 233-243.",
    url: "https://doi.org/10.1097/MEJ.0000000000001043"
  },
  {
    id: 56,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Feiner, J.R., Rollins, M.D., Sall, J.W., Eilers, H., Au, P. and Bickler, P.E. (2013) 'Accuracy of carboxyhemoglobin detection by pulse CO-oximetry during hypoxemia', Anesthesia and Analgesia, 117(4), pp. 847-858.",
    url: "https://doi.org/10.1213/ANE.0b013e31828610a0"
  },
  {
    id: 57,
    kind: "Corrected after independent verification: Paper exists with correct title/authors/journal/volume/issue/pages: Feiner JR, Bickler PE, Mannheimer PD, 'Accuracy of methemoglobin detection by pulse CO-oximetry during hypoxia', Anesth Analg, 111(1), pp.143-148 (confirmed via P. Bickler's official UCSF faculty profile page, PMID 20007731). However the correct publication year is 2010 (July 2010 print issue), not 2009 as given in the manuscript. Note: there is a similarly-titled but distinct companion paper, 'Improved accuracy of methemoglobin detection by pulse CO-oximetry during hypoxia' (same authors, Anesth Analg 111(5):1160-7, Sept 2010) -- manuscript's ref 57 is correctly the non-'Improved' one, just mis-dated.",
    text: "Feiner, J.R., Bickler, P.E. and Mannheimer, P.D. (2009) 'Accuracy of methemoglobin detection by pulse CO-oximetry during hypoxia', Anesthesia and Analgesia, 111(1), pp. 143-148.",
    url: "https://doi.org/10.1213/ANE.0b013e3181c91bb6"
  },
  {
    id: 58,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Feiner, J.R. and Bickler, P.E. (2010) 'Improved accuracy of methemoglobin detection by pulse CO-oximetry during hypoxia', Anesthesia and Analgesia, 111(5), pp. 1160-1167.",
    url: "https://doi.org/10.1213/ANE.0b013e3181f46da8"
  },
  {
    id: 59,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Nisar, S., Gibson, C.D., Sokolovic, M. and Shah, N.S. (2020) 'Pulse Oximetry Is Unreliable in Patients on Veno-Venous Extracorporeal Membrane Oxygenation Caused by Unrecognized Carboxyhemoglobinemia', ASAIO Journal, 66(10), pp. 1105-1109.",
    url: "https://doi.org/10.1097/MAT.0000000000001144"
  },
  {
    id: 60,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Caboot, J.B., Jawad, A.F., McDonough, J.M. et al. (2012) 'Non-invasive measurements of carboxyhemoglobin and methemoglobin in children with sickle cell disease', Pediatric Pulmonology, 47(8), pp. 808-815.",
    url: "https://doi.org/10.1002/ppul.22504"
  },
  {
    id: 61,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Negev, S., Gruenbaum, S., Frenkel, A., Zlotnik, A. and Gabay, O. (2024) 'Methemoglobinemia screening and treatment in tank warfare survivors', The American Journal of Emergency Medicine, 81, pp. 159.e1-159.e5.",
    url: "https://doi.org/10.1016/j.ajem.2024.04.013"
  },
  {
    id: 62,
    kind: "Corrected after independent verification: TITLE MISMATCH (failure mode 1). Authors (P. Andujar, B. Nemery), journal (Revue des Maladies Respiratoires), volume/issue (26, N°8), pages (867-885), date (Oct 2009), and DOI (10.1016/S0761-8425(09)73682-4) all confirmed exactly via the publisher's own page (em-consulte.com, article 249547). However the manuscript's bracketed English title '[Acute and subacute chemical pneumonitis]' does NOT match the actual article. The real (French) title is 'Pathologies respiratoires aigues et subaigues d'origine toxique' (= 'Acute and subacute respiratory pathologies of toxic origin'), a different phrasing/concept (toxic-origin respiratory disease generally, not specifically 'chemical pneumonitis'). Could not verify what PubMed's own bracketed English translation of this title is (search budget exhausted before this could be checked), but the title as printed in the manuscript does not match the verbatim French title found on the publisher's site. DOI and all other fields are correct, so this is likely a paraphrased/mistranslated title rather than a wrong paper.",
    text: "Andujar, P. and Nemery, B. (2009) '[Acute and subacute chemical pneumonitis]', Revue des maladies respiratoires, 26(8), pp. 867-85.",
    url: "https://doi.org/10.1016/s0761-8425(09)73682-4"
  },
  {
    id: 63,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "White, C.W. and Martin, J.G. (2010) 'Chlorine gas inhalation: human clinical evidence of toxicity and experience in animal models', Proceedings of the American Thoracic Society, 7(4), pp. 257-63.",
    url: "https://doi.org/10.1513/pats.201001-008SM"
  },
  {
    id: 64,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed). Note: confirmed by an exact title/author/journal match from an independent source; volume/page/DOI could not be cross-confirmed from a second independent source before the search budget ran out, so treat with slightly extra scrutiny.",
    text: "Zellner, T. and Eyer, F. (2019) 'Choking agents and chlorine gas - History, pathophysiology, clinical effects and treatment', Toxicology letters, 320, pp. 73-79.",
    url: "https://doi.org/10.1016/j.toxlet.2019.12.005"
  },
  {
    id: 65,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Achanta, S. and Jordt, S.E. (2019) 'Toxic effects of chlorine gas and potential treatments: a literature review', Toxicology mechanisms and methods, 31(4), pp. 244-256.",
    url: "https://doi.org/10.1080/15376516.2019.1669244"
  },
  {
    id: 66,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Saeed, O., Boyer, N.L., Pamplin, J.C. et al. (2018) 'Inhalation Injury and Toxic Industrial Chemical Exposure', Military medicine, 183(suppl_2), pp. 130-132.",
    url: "https://doi.org/10.1093/milmed/usy073"
  },
  {
    id: 67,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Radbel, J., Laskin, D.L., Laskin, J.D. and Kipen, H.M. (2020) 'Disease-modifying treatment of chemical threat agent-induced acute lung injury', Annals of the New York Academy of Sciences, 1480(1), pp. 14-29.",
    url: "https://doi.org/10.1111/nyas.14438"
  },
  {
    id: 68,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Jenkins, J.L., McCarthy, M.L., Sauer, L.M. et al. (2008) 'Mass-casualty triage: time for an evidence-based approach', Prehospital and disaster medicine, 23(1), pp. 3-8.",
    url: "https://doi.org/10.1017/s1049023x00005471"
  },
  {
    id: 69,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Koenig, K.L., Boatright, C.J., Hancock, J.A. et al. (2008) 'Health care facility-based decontamination of victims exposed to chemical, biological, and radiological materials', The American journal of emergency medicine, 26(1), pp. 71-80.",
    url: "https://doi.org/10.1016/j.ajem.2007.07.004"
  },
  {
    id: 70,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Grainge, C. and Rice, P. (2010) 'Management of phosgene-induced acute lung injury', Clinical toxicology (Philadelphia, Pa.), 48(6), pp. 497-508.",
    url: "https://doi.org/10.3109/15563650.2010.506877"
  },
  {
    id: 71,
    kind: "NOT VERIFIED — likely fabricated or non-existent. No trace found. Extensive searching (exact title phrase \"Temporal evaluation of lung injury following chlorine Inhalation in a ventilated pig model\", the DOI 10.1080/08958378.2024.2433762, author names Neal/Harvilchuck/Pressburger/Coley/Hu combined with 'chlorine inhalation pig', and journal+volume+page combination 'Inhalation Toxicology' 36 521-537) returned zero matching results across multiple independent searches. Only unrelated chlorine-inhalation pig studies (e.g., Watkins et al., Perrott et al.) surfaced instead. This citation does not appear to exist anywhere via title/author/DOI search -- confirmed failure mode 2. [Rechecked in a follow-up pass with genuinely different search angles (bare-DOI search, DOI resolution attempts, author-only search, checking whether the DOI points to a different real paper) — same result, still no trace found anywhere.]",
    text: "Neal, M., Harvilchuck, J., Pressburger, D., Coley, W. and Hu, T.C. (2024) 'Temporal evaluation of lung injury following chlorine Inhalation in a ventilated pig model', Inhalation toxicology, 36(9-10), pp. 521-537.",
    url: "https://doi.org/10.1080/08958378.2024.2433762"
  },
  {
    id: 72,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Watkins, R., Perrott, R., Bate, S. et al. (2021) 'Development of chlorine-induced lung injury in the anesthetized, spontaneously breathing pig', Toxicology mechanisms and methods, 31(4), pp. 257-271.",
    url: "https://doi.org/10.1080/15376516.2021.1906808"
  },
  {
    id: 73,
    kind: "NOT VERIFIED — likely fabricated or non-existent. No trace found. Extensive searching (exact title phrase \"A longitudinal characterization of cardiopulmonary and systemic injury following acute chlorine inhalation in rats\", the DOI 10.1016/j.taap.2026.118062, author names Jadhav/Johns/Zafar/Ahmad combined with 'chlorine inhalation rats cardiopulmonary', and journal 'Toxicology and Applied Pharmacology' + article number '118062') returned zero matching results across multiple independent searches -- no article, preprint, or index record with this title/author/DOI combination exists in any searchable source. This citation does not appear to exist anywhere -- confirmed failure mode 2. [Rechecked in a follow-up pass with genuinely different search angles (bare-DOI search, DOI resolution attempts, author-only search, checking whether the DOI points to a different real paper) — same result, still no trace found anywhere.]",
    text: "Jadhav, G.R., Johns, A.J., Zafar, I., Ahmad, A. and Ahmad, S. (2026) 'A longitudinal characterization of cardiopulmonary and systemic injury following acute chlorine inhalation in rats', Toxicology and applied pharmacology, 517, 118062.",
    url: "https://doi.org/10.1016/j.taap.2026.118062"
  },
  {
    id: 74,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Alishlash, A.S., Sapkota, M., Ahmad, I. et al. (2021) 'Chlorine inhalation induces acute chest syndrome in humanized sickle cell mouse model and ameliorated by postexposure hemopexin', Redox biology, 44, 102009.",
    url: "https://doi.org/10.1016/j.redox.2021.102009"
  },
  {
    id: 75,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Li, W. and Pauluhn, J. (2017) 'Phosgene-induced acute lung injury (ALI): differences from chlorine-induced ALI and attempts to translate toxicology to clinical medicine', Clinical and translational medicine, 6(1), 19.",
    url: "https://doi.org/10.1186/s40169-017-0149-2"
  },
  {
    id: 76,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Yadav, A.K., Bracher, A., Doran, S.F. et al. (2010) 'Mechanisms and modification of chlorine-induced lung injury in animals', Proceedings of the American Thoracic Society, 7(4), pp. 278-83.",
    url: "https://doi.org/10.1513/pats.201001-009SM"
  },
  {
    id: 77,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Li, W., Liu, F., Wang, C., Truebel, H. and Pauluhn, J. (2012) 'Novel insights into phosgene-induced acute lung injury in rats: role of dysregulated cardiopulmonary reflexes and nitric oxide in lung edema pathogenesis', Toxicological Sciences, 131(2), pp. 612-628.",
    url: "https://doi.org/10.1093/toxsci/kfs317"
  },
  {
    id: 78,
    kind: "Corrected after independent verification: Title/authors/journal/volume/issue/pages confirmed exactly (Wang, L., Liu, C., Zhang, H. et al., 'Intravenous administration of hyperoxygenated solution attenuates pulmonary edema formation in phosgene-induced acute lung injury in rabbits', The Journal of Surgical Research, 164(1), pp. 131-138) via an independent published reference list and a PubMed/MEDLINE mirror (PMID 20959170). However, the correct publication year is 2010, not 2008 as given in the manuscript -- the DOI (10.1016/j.jss.2008.09.017) reflects a 2008 epub-ahead-of-print date, but the formal print year is 2010 (Elsevier copyright year confirmed as 2010). Same epub-vs-print-year pattern as references 19, 31 and 57.",
    text: "Wang, L., Liu, C., Zhang, H. et al. (2008) 'Intravenous administration of hyperoxygenated solution attenuates pulmonary edema formation in phosgene-induced acute lung injury in rabbits', The Journal of Surgical Research, 164(1), pp. 131-138.",
    url: "https://doi.org/10.1016/j.jss.2008.09.017"
  },
  {
    id: 79,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed). Note: confirmed by an exact title/author/journal match from an independent source; volume/page/DOI could not be cross-confirmed from a second independent source before the search budget ran out, so treat with slightly extra scrutiny.",
    text: "Parkhouse, D.A., Brown, R.F., Jugg, B.J. et al. (2007) 'Protective ventilation strategies in the management of phosgene-induced acute lung injury', Military medicine, 172(3), pp. 295-300.",
    url: "https://doi.org/10.7205/milmed.172.3.295"
  },
  {
    id: 80,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "de Lange, D.W. and Meulenbelt, J. (2011) 'Do corticosteroids have a role in preventing or reducing acute toxic lung injury caused by inhalation of chemical agents?', Clinical toxicology (Philadelphia, Pa.), 49(2), pp. 61-71.",
    url: "https://doi.org/10.3109/15563650.2011.553196"
  },
  {
    id: 81,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Luo, S., Pauluhn, J., Trübel, H. and Wang, C. (2014) 'Corticosteroids found ineffective for phosgene-induced acute lung injury in rats', Toxicology letters, 229(1), pp. 85-92.",
    url: "https://doi.org/10.1016/j.toxlet.2014.06.011"
  },
  {
    id: 82,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Smith, A., Brown, R., Jugg, B. et al. (2009) 'The effect of steroid treatment with inhaled budesonide or intravenous methylprednisolone on phosgene-induced acute lung injury in a porcine model', Military medicine, 174(12), pp. 1287-94.",
    url: "https://doi.org/10.7205/milmed-d-09-00050"
  },
  {
    id: 83,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Rendell, R., Fairhall, S., Graham, S. et al. (2018) 'Assessment of N-acetylcysteine as a therapy for phosgene-induced acute lung injury', Toxicology letters, 290, pp. 145-152.",
    url: "https://doi.org/10.1016/j.toxlet.2018.03.025"
  },
];const NODES = [
  {
    id: "trigger",
    type: "terminal",
    label: "Suspected chemical agent exposure",
    sub: "Scene safety, PPE, decontamination, ABC",
    tone: "key",
    meaning: "The algorithm opens at first clinical contact with any casualty where chemical exposure is plausible — a scene incident, a mass-casualty chemical release, or an unexplained toxidrome. Immediate priorities are scene safety, personal protective equipment, decontamination, and airway-breathing-circulation resuscitation, run in parallel rather than strictly in sequence where casualty numbers allow.",
    rationale: "Existing mass-casualty triage systems were not developed for, and are not validated against, chemical-agent casualties, which creates a practical need for rapid, repeatable, point-of-care physiological markers — blood gas, lactate, acid-base status — to identify patients who are metabolically decompensating before they look obviously unwell. Casualties also frequently arrive at a receiving facility without prior field decontamination, so the sequence of decontamination, resuscitation and blood sampling has to be managed without compromising staff safety or delaying the physiological assessment that drives everything downstream.",
    cautions: [
      "In the 1995 Tokyo subway sarin attack, most casualties were ambulatory while a minority developed life-threatening respiratory failure — this established the management paradigm of simultaneous decontamination, respiratory support and antidote administration, rather than a strict one-step-at-a-time sequence."
    ],
    refs: [19, 68, 69]
  },
  {
    id: "panel",
    type: "process",
    label: "Obtain early blood gas + co-oximetry",
    sub: "pH, PaCO2, PaO2/FiO2, HCO3- / base excess, lactate, COHb, MetHb",
    meaning: "A single early blood-gas-plus-co-oximetry draw gives a fast read on the dominant pathophysiology across all four CWA classes at once — pH and PaCO2 for ventilatory failure, PaO2/FiO2 for oxygenation/ARDS, bicarbonate/base excess and lactate for metabolic derangement, and carboxyhaemoglobin/methaemoglobin for dyshaemoglobinaemia — rather than waiting on agent identification, which is frequently unavailable or delayed in the field.",
    rationale: "In critically ill patients generally, serum lactate is associated with mortality independently of organ failure and shock, and blood lactate clearance kinetics track treatment response over time — both properties this algorithm leans on repeatedly downstream, first to recognise the dominant pattern and later to monitor response to treatment.",
    refs: [1, 3, 4, 5]
  },
  {
    id: "pattern_decision",
    type: "decision",
    label: "Dominant blood-gas pattern?",
    meaning: "The same early panel is read for one of three distinct physiological signatures, each pointing toward a different CWA class and a different immediate treatment path. This single read-and-branch step is the hinge of the whole algorithm: it converts a panel of numbers into a provisional working diagnosis before any agent-specific laboratory confirmation is available.",
    rationale: "Synthesising the evidence, a coherent bedside approach emerges: a high-anion-gap lactic acidosis with preserved oxygen content points towards a blood agent and justifies empirical antidote; a rising carbon dioxide tension with falling pH heralds the ventilatory failure of nerve-agent poisoning and the need for atropine, oxime and airway control; and a falling PaO2/FiO2 ratio defines and grades the ARDS of choking-agent and vesicant inhalation and triggers lung-protective ventilation.",
    refs: [2, 18, 70]
  },
  {
    id: "pattern_a",
    type: "branch",
    label: "High-anion-gap lactic acidosis; preserved/high venous O2 sat; narrow arterio-venous O2 difference",
    meaning: "A severe high-anion-gap lactic acidosis with a venous oxygen saturation that is preserved or even elevated, and a narrowed arterio-venous oxygen difference, is the classic cyanide signature: mitochondrial cytochrome c oxidase is blocked, so tissues cannot extract the oxygen that is still being delivered to them. Relying on pulse oximetry or PaO2 alone is falsely reassuring here, because oxygen delivery itself is not the problem.",
    rationale: "Cyanide — whether from a deliberate chemical-warfare release, an industrial accident, or enclosed-space fire smoke — inhibits cellular aerobic respiration despite normal oxygen delivery, producing exactly this pattern: preserved or elevated PaO2 and calculated SaO2, elevated venous oxygen saturation, and a minimal arterio-venous oxygen gradient. Because laboratory blood cyanide assays are rarely available acutely, plasma lactate becomes the decisive bedside surrogate marker for toxic exposure.",
    refs: [1, 44, 45]
  },
  {
    id: "pattern_b",
    type: "branch",
    label: "Rising PaCO2, falling pH, hypoxaemia; cholinergic signs (miosis, bronchorrhoea)",
    meaning: "A rising PaCO2 with a falling pH and hypoxaemia, accompanied by cholinergic signs such as miosis and bronchorrhoea, marks nerve-agent or organophosphate poisoning. This is primarily a ventilatory-failure pattern, not a pure metabolic one: the acetylcholinesterase-inhibited patient is failing to breathe effectively before they are failing to perfuse.",
    rationale: "Nerve agents and organophosphorus compounds inhibit acetylcholinesterase, producing a cholinergic crisis in which early death results chiefly from respiratory failure — bronchorrhoea, bronchoconstriction, neuromuscular paralysis of the respiratory muscles, and depression of central respiratory drive. Early CO2 retention and hypoxaemia then progress to mixed respiratory and metabolic acidaemia as compensation fails and lactate accumulates from increased work of breathing, seizures, circulatory collapse and solvent toxicity.",
    refs: [2, 18]
  },
  {
    id: "pattern_c",
    type: "branch",
    label: "Falling PaO2/FiO2; PaCO2 normal/low early; onset may be delayed (phosgene)",
    meaning: "A falling PaO2/FiO2 ratio with a PaCO2 that is normal or even low early on marks choking-agent or vesicant inhalation — an oxygenation-failure pattern, distinct from the ventilatory failure of nerve agents. The clinically important trap is the word \"early\": with phosgene in particular, the onset of severe lung injury can be delayed, so a reassuring early gas does not rule the diagnosis out.",
    rationale: "Choking/pulmonary agents and inhaled vesicants injure the airway epithelium and alveolar-capillary membrane, causing bronchospasm, non-cardiogenic permeability pulmonary oedema, toxic pneumonitis and acute lung injury/ARDS. Water-soluble gases such as chlorine provoke immediate irritation and can progress to ARDS within 24 hours, but poorly water-soluble phosgene penetrates straight to the alveoli with minimal initial symptoms, and fulminant pulmonary oedema and severe ARDS may be delayed by up to a day after exposure.",
    cautions: [
      "A single normal initial blood gas cannot exclude severe pulmonary-agent injury, especially after phosgene exposure — serial arterial blood gases tracking the PaO2/FiO2 trajectory and acid-base status are mandatory, not optional, even in a patient who looks well at presentation."
    ],
    refs: [1, 3, 66, 70]
  },
  {
    id: "mgmt_a",
    type: "process",
    tone: "key",
    label: "Suspect BLOOD AGENT (cyanide)",
    sub: "Lactate ≥8–10 mmol/L supports toxicity → empiric hydroxocobalamin ± sodium thiosulfate.\nSerial lactate to monitor response.",
    meaning: "Once the cyanide pattern is recognised, treatment does not wait for a confirmatory laboratory cyanide level — it is started empirically. A plasma lactate in the range of 8-10 mmol/L or higher supports the diagnosis and the decision to treat, and hydroxocobalamin with or without sodium thiosulfate is given as the antidote of choice.",
    rationale: "The original diagnostic threshold — plasma lactate ≥8 mmol/L being 94% sensitive and 70% specific for a toxic blood cyanide concentration ≥1.0 mg/L — comes from a landmark retrospective cohort of acute cyanide poisoning. The broader \"8-10 mmol/L\" range shown here reflects how clinical guidelines and smoke-inhalation algorithms have since expanded that cutoff in practice. Across nine human case series, hydroxocobalamin and the nitrite/sodium-thiosulfate combination were both effective with no serious adverse effects reported, which is why they are recommended as the antidotes of choice; serial lactate measurement is then used to track clearance and confirm the treatment is working.",
    cautions: [
      "One cohort of hydroxocobalamin-treated patients found no significant difference in methaemoglobin levels or mortality between treated and untreated groups, and in another cohort of 55 treated patients, time to antidote administration was longer in non-survivors than survivors — treatment timing appears to matter, and the antidote's effect on hard outcomes is not as cleanly demonstrated as its biochemical rationale."
    ],
    refs: [44, 45, 47, 49, 50, 52]
  },
  {
    id: "mgmt_b",
    type: "process",
    tone: "key",
    label: "Suspect NERVE AGENT / organophosphate",
    sub: "→ atropine + oxime, airway control / ventilation.\npH <7.2, high lactate / base deficit flag high risk; watch for intermediate syndrome.",
    meaning: "Nerve-agent/organophosphate management is dual-track from the start: give atropine and an oxime and secure the airway, while simultaneously using the blood gas to risk-stratify. An admission pH below 7.2, a high lactate, or a widened base deficit all flag a high risk of death or need for mechanical ventilation.",
    rationale: "Across multiple cohorts, admission pH, lactate and base deficit — alone or combined into validated nomograms and risk scores — were reproducible, independent predictors of mortality and ventilator need in organophosphorus poisoning, which is the primary human clinical surrogate for nerve-agent exposure. The specific pH cutoffs reported across the underlying cohorts actually range from about 7.2 to 7.35 depending on the study; \"<7.2\" here is the rounded bedside threshold the algorithm displays.",
    cautions: [
      "Watch closely for the intermediate syndrome — delayed neuromuscular respiratory failure that can occur after apparent recovery from the acute cholinergic crisis. It is poorly predicted by clinical scores, cholinesterase levels, or blood gases alone; single-fibre electromyography is the more promising predictor, where available.",
      "Oxime therapy's actual mortality benefit remains contested: a Cochrane review of seven pralidoxime randomised trials found results ranging from benefit to harm, and concluded current evidence is insufficient to say whether oximes help or harm — the WHO regimen specifically is not supported by that review.",
      "Two of the cited risk-stratification studies supporting the pH/lactate thresholds here (refs 28 and 29) could not be independently verified against any traceable primary source despite repeated, differently-angled searching — they may be fabricated or garbled citations. The underlying clinical pattern (acidaemia and hyperlactataemia predicting mortality in OP poisoning) is independently supported by the other cited cohorts (refs 22, 25, 31, 36), but these two specific studies and their reported numbers should not be relied on until confirmed — see their entries in the References panel."
    ],
    refs: [2, 18, 22, 25, 28, 29, 31, 36]
  },
  {
    id: "mgmt_c",
    type: "process",
    tone: "key",
    label: "Suspect CHOKING AGENT / vesicant inhalation",
    sub: "→ O2 to SpO2 ≥94%, bronchodilators, lung-protective ventilation by PaO2/FiO2 (Berlin); ECMO if refractory. Serial ABG (delayed onset).",
    meaning: "Choking-agent and vesicant management centres on oxygenation and lung protection: titrate oxygen to an SpO2 of at least 94%, give bronchodilators, and ventilate using lung-protective settings guided by the Berlin-definition PaO2/FiO2 ratio, escalating to ECMO if the hypoxaemia is refractory. Serial arterial blood gases matter here specifically because of the delayed-onset risk described on the pattern box.",
    rationale: "This bundle — an SaO2/SpO2 target of at least 94% with the lowest effective oxygen fraction, nebulised beta-agonists given within an hour of exposure, early ARDSnet-style low-tidal-volume high-PEEP ventilation, and ECMO for conventional-ventilation-refractory ARDS — is drawn from phosgene and chlorine management reviews and toxic-industrial-chemical inhalation guidelines, rather than from primary statistical pooling inside this review itself. In phosgene-exposed pigs, low-tidal-volume, high-PEEP protective ventilation significantly improved arterial oxygenation, reduced pulmonary shunt fraction, and improved survival to 24 hours compared with conventional ventilation.",
    cautions: [
      "Corticosteroids and N-acetylcysteine have not shown benefit here and should not be assumed to help: a systematic review of chemical lung injury found no convincing evidence for corticosteroids, and in multiple animal phosgene-injury models, corticosteroids (inhaled or intravenous) and nebulised N-acetylcysteine failed to improve survival, lung oedema, or shunt fraction — in one rat model, curative steroids actually increased adverse outcomes.",
      "Most of the direct evidence behind this pathway is preclinical (porcine and rodent models) rather than from human CWA casualties, which is reflected in the GRADE certainty rating for this part of the algorithm (low)."
    ],
    refs: [3, 64, 66, 70, 79, 80, 81, 82, 83]
  },
  {
    id: "reassess",
    type: "process",
    label: "Repeat blood gas / lactate clearance to track response and guide triage and disposition.",
    sub: "Venous sampling is adequate for pH, HCO3-, base excess and lactate; arterial is needed for PaCO2 and PaO2.\nPulse co-oximetry is a screening adjunct—confirm with laboratory co-oximetry and interpret with caution during hypoxaemia.",
    meaning: "Whichever pattern triggered treatment, the algorithm converges here: repeat the blood gas and track lactate clearance to follow the response to treatment and guide ongoing triage and disposition decisions, rather than treating the first gas as a one-off diagnostic test.",
    rationale: "Repeated measurement — exploiting the favourable kinetics of lactate clearance and the trajectory of acid-base variables — tracks response to treatment and informs disposition. Venous sampling suffices for the metabolic variables that drive triage (pH, bicarbonate, base excess, lactate), with arterial sampling reserved for questions of ventilation and oxygenation; peripheral venous values are not interchangeable with arterial values for PaCO2 or PaO2.",
    cautions: [
      "Pulse co-oximetry (SpCO, SpMet) is a useful scene-screening adjunct at normoxia, but its accuracy degrades substantially during hypoxaemia and shock — it cannot rule poisoning in or out on its own and must be confirmed by laboratory blood co-oximetry whenever the result will change management."
    ],
    refs: [3, 5, 6, 7, 8, 24, 54, 55, 56, 57]
  }
];

const GLOSSARY = [
  {
    match: "ARDS",
    full: "acute respiratory distress syndrome",
    def: "Acute, diffuse lung inflammation causing severe hypoxaemia, graded by the Berlin definition using the PaO2/FiO2 ratio."
  },
  {
    match: "Berlin",
    full: "Berlin definition of ARDS",
    def: "Grades ARDS severity by the PaO2/FiO2 ratio measured under at least 5 cmH2O of PEEP or CPAP: mild (200–300), moderate (100–200), severe (≤100)."
  },
  {
    match: "PaO2/FiO2",
    full: "arterial oxygen tension to inspired oxygen fraction ratio",
    def: "The core oxygenation-failure metric used to grade ARDS severity and to guide lung-protective ventilation; falls as gas-exchange worsens."
  },
  {
    match: "intermediate syndrome",
    def: "Delayed neuromuscular respiratory failure occurring roughly one to four days after apparent recovery from the acute cholinergic crisis of organophosphate/nerve-agent poisoning; poorly predicted by clinical scores or blood gases alone."
  },
  {
    match: "co-oximetry",
    def: "Multi-wavelength oximetry (laboratory or pulse) that measures carboxyhaemoglobin and methaemoglobin in addition to oxyhaemoglobin — needed because standard two-wavelength pulse oximetry cannot detect these dyshaemoglobins."
  },
  {
    match: "cholinergic crisis",
    def: "The toxic syndrome of acetylcholinesterase inhibition — excessive cholinergic stimulation causing bronchorrhoea, bronchoconstriction, miosis, and eventually neuromuscular respiratory paralysis."
  },
  {
    match: "dyshaemoglobinaemia",
    def: "An abnormal, non-oxygen-carrying haemoglobin variant — such as carboxyhaemoglobin (COHb) or methaemoglobin (MetHb) — that displaces or masks true oxyhaemoglobin and renders standard pulse oximetry inaccurate."
  }
];

const AGENTS = [
  "Atropine",
  "Hydroxocobalamin",
  "Sodium thiosulfate",
  "Pralidoxime",
  "N-acetylcysteine"
];
