---
name: thyroid-pregnancy-case
description: Clinical decision support for thyroid dysfunction and iodine nutrition during pregnancy. Use when a clinician describes a pregnant patient with abnormal TSH/fT4/TPOAb, suspected gestational thyrotoxicosis vs Graves, hyperemesis gravidarum, levothyroxine adjustment after thyroidectomy/RAI, subclinical hypothyroidism, euthyroid TPOAb positive, or iodine intake/supplementation questions during pregnancy. Triggers on phrases like "孕期甲狀腺", "pregnancy thyroid", "孕婦 TSH", "妊娠甲亢", "SCH in pregnancy", "TPOAb pregnancy", "pregnant LT4 dose", "iodine pregnancy".
---

# Thyroid–Pregnancy Clinical Decision Support

This skill turns the case-discussion knowledge from the 2026/05 童綜合 talk + 10-role panel review into a structured decision-support workflow. It is **clinician-facing decision support, not a replacement for clinical judgment.**

## When to use
Trigger when the user describes a pregnant patient (or pre-pregnancy / postpartum case) and asks for analysis or next steps related to thyroid function, anti-thyroid drugs, levothyroxine, TPOAb, or iodine. Typical triggers:
- "GA 11 週、TSH 5.8、fT4 1.0 …"
- "pregnant lady, MMI 5 mg, GA 6 wk, what to do"
- "TPOAb (+) euthyroid, should I treat?"
- "post-thyroidectomy pregnancy TSH 4.0"
- "iodine multivitamin needed?"

## Hard safety stops (always flag, never auto-recommend)
Before producing a recommendation, **explicitly flag and defer to attending** if any of the following:
1. Overt thyrotoxicosis (fT4 > 2× ULN with symptoms) at any GA
2. TSH > 20 mIU/L or overt hypothyroidism (fT4 below trimester reference)
3. TRAb > 5× ULN at any time, or > 3× ULN after 22 weeks
4. Fetal goiter, fetal tachycardia (>160 bpm), IUGR with maternal Graves
5. Suspected hydatidiform mole / molar pregnancy (very high hCG + bleeding)
6. Iodine-induced thyroid storm or amiodarone exposure
7. Active thyroid cancer or known thyroid nodule >1 cm

## Workflow (every case, in order)

### Step 1 — Echo a structured Summary
Restate the patient in one paragraph (age, GA, history, meds, key labs, symptoms, iodine intake). If anything is missing that would change the recommendation, **list the missing fields and stop** before continuing.

### Step 2 — Identify the case archetype
Map the patient to one of seven archetypes from `decision_trees/`:
- A. Early thyrotoxicosis with no symptoms → `early_thyrotoxicosis.md`
- B. Hyperemesis gravidarum + biochemical hyperthyroid → `early_thyrotoxicosis.md` (HG branch)
- C. Known Graves on ATD → `early_thyrotoxicosis.md` (Graves branch) + `lt4_dose_adjustment.md` (if ATD-LT4 transitions)
- D. Hypothyroid on LT4 (incl. post-thyroidectomy / RAI) → `lt4_dose_adjustment.md`
- E. Subclinical hypothyroidism (SCH) → `sch_pathway.md`
- F. Euthyroid TPOAb (+) → `sch_pathway.md` (TPOAb branch)
- G. Iodine intake / supplementation question → `iodine_screening.md`

If patient fits multiple archetypes (e.g. SCH + iodine deficient diet), address **both** in the analysis.

### Step 3 — Cite background knowledge
Reference the relevant `knowledge/` files. Pull the **specific** thresholds, RCT names, NNT/NNH, and trimester reference into the answer. Do not paraphrase loosely — use the numbers verbatim from the knowledge files.

### Step 4 — Integrated analysis (2–3 paragraphs)
Synthesize across MFM, Endo, REI, PedEndo, Iodine, Pharm, NeuroDev, Stat/EBM, Implementation, and SDM perspectives — written as connected prose, not as bulleted role-by-role.

### Step 5 — Concrete recommendation
Use the output template at `templates/output_template.md`. Always include:
- Immediate next step (lab / drug / referral, with dose if applicable)
- Follow-up timing
- Fetal / neonatal monitoring plan if relevant
- Patient counseling script (3-step: 正常化 → 數字框架 → 計畫式語言)
- ⚠️ Safety flags / when to escalate

### Step 6 — Open questions
List 2–3 clinically relevant follow-up questions the clinician may want to consider.

## Output language
Match the input language. If user writes mixed zh-TW + English (typical Taiwan clinical use), respond in zh-TW with English drug names and journal abbreviations.

## What this skill is NOT for
- General endocrine cases outside pregnancy
- Postpartum thyroiditis without pregnancy context (mention briefly if relevant, but defer to attending)
- Pediatric thyroid disease (refer to PedEndo)
- Thyroid cancer staging / RAI dose decisions
