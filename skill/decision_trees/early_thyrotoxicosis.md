# Decision Tree — Early Thyrotoxicosis (TSH ↓ + fT4 ↑)

## 分支判斷

```
START: TSH < trimester lower limit AND fT4 > ULN
│
├── 有甲亢症狀（palpitation, weight loss, tremor, ophthalmopathy, goiter）？
│
├── YES → 偏向 Graves
│   ├── 已知 Graves 病史 + on ATD？ → 走 Graves-on-ATD branch
│   └── 新發 → 驗 TRAb + TT3/TT4 ratio + thyroid US（無 scintigraphy）
│       ├── TRAb (+) → 確診 Graves（走 Graves new-onset branch）
│       └── TRAb (-) + TT3/TT4 < 20 → 重新考慮 GTT、subacute thyroiditis、factitious、toxic adenoma
│
└── NO → 高機率 GTT
    ├── 有 HG features (BW loss > 5%, 脫水, ketonuria)？ → 走 HG branch
    └── 沒有 → 走 plain GTT branch
```

## Branch A — Plain GTT（無症狀、無 HG）
- **最常見情境（Case 1）**
- Action: 驗 **TRAb / TSI** 排除 Graves；同次加驗 TT3
- TRAb (-) → 安排 GA 14–18 週重驗 TFT，多數自然 normalize
- TRAb (+) → 確診 Graves，走 Graves new-onset branch
- 不要立即 ATD（organogenesis window 6–10 GA、無症狀 NNT ≈ ∞）
- 不要 propranolol（無症狀）
- 不要 scintigraphy（孕期禁忌）

## Branch B — Hyperemesis Gravidarum + GTT（Case 2）
- **真正的 emergency 是電解質 + 酮酸 + 脫水，不是甲狀腺**
- Priority 1: IV NS / LR + thiamine（防 Wernicke）
- Priority 2: Antiemetic
  - 首選 doxylamine-pyridoxine
  - 次選 ondansetron 4–8 mg q8h（FDA cleft palate 風險已 largely refuted）
  - Metoclopramide 10 mg q8h
  - Promethazine 12.5–25 mg
- 不用 ATD（嘔吐病人吸收不穩、PTU 肝毒性、胎兒 fT4 過低風險）
- β-blocker：僅 心搏 > 100 + 顯著焦慮，propranolol 短期 1–2 週
- TFT 追蹤：14–18 週重驗，多數隨 hCG 下降 normalize
- Admit criteria：Modified PUQE ≥ 13、持續酮尿、無法忍受口服、體重 > 5%
- 對病人話術：「妳的甲狀腺數值是因為孕吐和懷孕荷爾蒙造成的暫時變化，不是甲狀腺生病」

## Branch C — Known Graves on ATD（Case 3）

### 評估 ATA 2017 「孕期可停 ATD」5 條件
1. 治療 > 6 個月 ✓?
2. TSH 在治療下回到正常 ✓?
3. MMI < 10 mg（或 PTU < 200 mg）✓?
4. 無 orbitopathy / 顯著 goiter ✓?
5. TRAb < 3× ULN ✓?

### 全部符合 → **停 ATD + 密切追蹤**
- 1–2 週 reassess、之後每 4 週追蹤
- 多數反彈在 4–8 週，6 週是 sensible 重驗時點
- 14–16 週後若反彈：可切回 MMI（過了致畸窗 + 肝毒性 < PTU）

### 不全符合
- GA < 10 週 + 還在用 MMI / CMZ → 切換 PTU（過 16 GA 後可切回 MMI）
- 顯著 goiter / orbitopathy / TRAb 高陽 → 維持 ATD monotherapy 最低有效劑量
- Target: maternal **fT4 / TT4 at upper limit 或略高**
- **Avoid block-and-replace（禁忌）**

### Fetal monitoring（無論停藥或繼續）
- 18–22 週 fetal scan（goiter / tachycardia / IUGR / advanced bone age）
- 28–34 週重驗 TRAb 評估 neonatal Graves 風險
- TRAb 高陽 (> 5× ULN) → cord blood TSH/fT4/TRAb + day 3–5、10–14、4 週新生兒 TFT

## Branch D — Graves new-onset in pregnancy（少見）
- ATD monotherapy 最低有效劑量
- GA ≤ 16: PTU 50 mg q8h 起始；之後可切 MMI
- GA > 16: MMI 5–10 mg/day 起始
- LFT (PTU): baseline + 每 2–4 週 × 6 個月、之後 q1–3 月
- Fetal monitoring 同 Branch C
- 若 ATD 過敏 / 肝損傷 / 控制不佳 → 考慮孕期 thyroidectomy（首選 GA 14–22 週）

## ⚠️ Hard Stops（自動 escalate to attending）
- 急性 thyroid storm（高燒、HR > 140、CHF、AMS）
- 顯著 fetal goiter / tachycardia >180 bpm
- 嚴重 ophthalmopathy 急性惡化
- 疑似 hydatidiform mole（高 hCG > 10⁵ + bleeding + uterine size 大於 GA）
- ATD 嚴重 ADR（agranulocytosis、fulminant hepatitis）
