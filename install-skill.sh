#!/usr/bin/env bash
# Install the thyroid-pregnancy-case Claude Code Skill
set -euo pipefail

TARGET="${HOME}/.claude/skills/thyroid-pregnancy-case"
SOURCE="$(cd "$(dirname "$0")" && pwd)/skill"

if [ ! -d "$SOURCE" ]; then
  echo "❌ skill/ directory not found at $SOURCE"
  exit 1
fi

mkdir -p "$TARGET"
cp -r "$SOURCE/." "$TARGET/"

echo "✅ Skill installed to $TARGET"
echo ""
echo "Files:"
ls -1 "$TARGET"
echo ""
echo "Restart Claude Code (or open a new session) to pick up the skill."
echo "Trigger by mentioning a case, e.g. 'GA 11 週 TSH 5.8 fT4 1.0 無症狀 ...'"
