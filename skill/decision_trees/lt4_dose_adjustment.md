# Decision Tree — LT4 Dose Adjustment

## 主流程

```
START: 已知 hypothyroidism on LT4 + 懷孕
│
├── GA 確認後立即動作（不等下次門診）
│
├── 增量幅度依病因
│   ├── Thyroidectomy / RAI ablated → +30–50%（Case 4 典型）
│   ├── Autoimmune thyroiditis → +20–25%
│   └── TSH-suppressive (cancer) → minimal / individualized
│
├── 給藥方式（任一）
│   ├── 日劑量 +25 µg（容易記）
│   └── 每週多 2 顆原劑量（+29%；7 → 9 顆/週）
│
├── 4 週後重驗 TSH + fT4
│   ├── Target TSH = trimester lower half (~0.5–2.0)
│   └── 4 週監測 92% 異常 vs 6 週 73%
│
└── 序列追蹤：第 4、8、12、20、30 週
```

## 病因別速查表
| 病因 | 增量 | 理由 |
|---|---|---|
| Total thyroidectomy | 30–50% | 無 reserve，無法 self-compensate 50% T4 production 需求 |
| RAI ablation（thyroid cancer / Graves） | 30–50% | 同上 |
| Autoimmune thyroiditis (Hashimoto's) | 20–25% | 殘餘功能可部分代償 |
| TSH-suppressive therapy (DTC) | 0–10% | 已 supraphysiologic LT4，fT4 至上限 |
| Lobectomy（單葉切除） | 10–20% | 殘餘葉可代償；個別化 |

## 已知 LT4 病人「驗孕陽性即增量」protocol
1. 病人在驗孕陽性當日 self-add 2 tablets/週（pre-printed 衛教單）
2. 同週通知 OB / Endo
3. Dating ultrasound 同次 reflex TSH
4. 4 週後重驗，按 trimester lower half 微調

## Target TSH（trimester-specific）
- T1: 0.1–2.5 mIU/L
- T2: 0.2–3.0 mIU/L
- T3: 0.3–3.0 mIU/L
- 通常以 lower half (~0.5–2.0) 為目標

## LT4 吸收 pitfalls
- 早晨空腹（起床後 30–60 分鐘）
- 與下列間隔至少 4 小時：
  - Prenatal vitamin（Fe / Ca）
  - Coffee（包括 latte）
  - PPI / H2 blocker / antacid
  - Cholestyramine / sucralfate
  - Soy protein / high-fiber meal
- 吸收變異大者：考慮 soft-gel（liothyronine）或 liquid

## 起始劑量（新發 hypothyroidism in pregnancy）
- 1.6 µg/kg/day for overt
- 50 µg/day for SCH（避免 100 µg overshoot 與 fT4 supraphysiologic）
- 若 TSH 8–10：50–75 µg/day
- 若 TSH > 10：75–100 µg/day（依體重）
- 2–4 週後重驗

## 產後處理
- 分娩當日或產後 1 週內降回 preconception 劑量
- 6 週後重驗 TSH 確認
- 哺乳對 LT4 無影響（不會經乳汁顯著轉移）
- gestational-onset SCH 多數可在產後 6–12 個月嘗試停藥

## ⚠️ Hard Stops（escalate）
- TSH > 20 持續 > 4 週 despite up-titration → 考慮 absorption issue / non-compliance / interaction，請主治
- fT4 supraphysiologic（> ULN × 1.2）持續 > 2 週 → down-titrate, 警覺 CATS-II ADHD signal
- 合併心律不整 / 心搏 > 120 → 暫停增量 + 主治評估
