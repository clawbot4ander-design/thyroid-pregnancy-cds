import fs from 'node:fs';
import path from 'node:path';

const SKILL_ROOT = path.join(process.cwd(), 'skill');

function safeRead(rel: string): string {
  try {
    return fs.readFileSync(path.join(SKILL_ROOT, rel), 'utf8');
  } catch {
    return '';
  }
}

const FILES = [
  'SKILL.md',
  'knowledge/physiology.md',
  'knowledge/treatment_thresholds.md',
  'knowledge/iodine.md',
  'knowledge/guideline_pivot.md',
  'decision_trees/early_thyrotoxicosis.md',
  'decision_trees/sch_pathway.md',
  'decision_trees/lt4_dose_adjustment.md',
  'decision_trees/iodine_screening.md',
  'templates/output_template.md',
];

let cached: string | null = null;

export function loadKnowledgePack(): string {
  if (cached) return cached;
  const sections = FILES.map((f) => {
    const body = safeRead(f);
    return `\n\n========== ${f} ==========\n\n${body}`;
  });
  cached = sections.join('\n');
  return cached;
}
