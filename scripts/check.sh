#!/bin/bash
# GitHub OS health check
# Run before committing to catch common mistakes.
# Usage: bash scripts/check.sh

ERRORS=0

echo "Running GitHub OS health checks..."
echo ""

# 1. Secret detection -- scan for common secret patterns
echo "Checking for secrets..."
SECRETS=$(grep -r -l -I \
  -e 'AKIA[0-9A-Z]\{16\}' \
  -e 'sk-[a-zA-Z0-9]\{20,\}' \
  -e 'ghp_[a-zA-Z0-9]\{36\}' \
  -e 'password\s*=\s*["\x27][^"\x27]\+["\x27]' \
  -e 'secret\s*=\s*["\x27][^"\x27]\+["\x27]' \
  -e 'token\s*=\s*["\x27][^"\x27]\+["\x27]' \
  --include="*.md" --include="*.json" --include="*.js" --include="*.ts" \
  --include="*.py" --include="*.yml" --include="*.yaml" --include="*.env" \
  --include="*.toml" --include="*.cfg" \
  --exclude-dir=.git --exclude-dir=node_modules \
  . 2>/dev/null | grep -v 'scripts/check.sh' | grep -v '.gitignore')

if [ -n "$SECRETS" ]; then
  echo "  FAILED: Possible secrets found in:"
  echo "$SECRETS" | sed 's/^/    /'
  echo ""
  echo "  Remove secrets and use environment variables instead."
  ERRORS=$((ERRORS + 1))
else
  echo "  OK"
fi
echo ""

# 2. Check for .env files that shouldn't be committed
echo "Checking for .env files..."
ENV_FILES=$(find . -name ".env" -o -name ".env.local" -o -name ".env.production" \
  -not -path "./.git/*" 2>/dev/null)

if [ -n "$ENV_FILES" ]; then
  echo "  WARNING: .env files found (should be in .gitignore):"
  echo "$ENV_FILES" | sed 's/^/    /'
  ERRORS=$((ERRORS + 1))
else
  echo "  OK"
fi
echo ""

# 3. Check config.json isn't empty
echo "Checking config.json..."
if [ -f "config.json" ]; then
  NAME=$(python3 -c "import json; print(json.load(open('config.json')).get('name',''))" 2>/dev/null)
  if [ -z "$NAME" ]; then
    echo "  NOTE: config.json has no name set. Run /setup to configure."
  else
    echo "  OK (configured for: $NAME)"
  fi
else
  echo "  WARNING: config.json not found"
  ERRORS=$((ERRORS + 1))
fi
echo ""

# 4. Check for files in wrong places (loose files in root)
echo "Checking repo structure..."
LOOSE_FILES=$(find . -maxdepth 1 -type f \
  -not -name ".*" \
  -not -name "config.json" \
  -not -name "agents.md" \
  -not -name "CLAUDE.md" \
  -not -name "README.md" \
  -not -name "LICENSE" \
  -not -name "Makefile" \
  2>/dev/null)

if [ -n "$LOOSE_FILES" ]; then
  echo "  WARNING: Files in root that might belong elsewhere:"
  echo "$LOOSE_FILES" | sed 's/^/    /'
  echo "  Consider moving to apps/, docs/, workflows/, or journal/"
else
  echo "  OK"
fi
echo ""

# 5. Check for large files
echo "Checking for large files..."
LARGE_FILES=$(find . -type f -size +5M \
  -not -path "./.git/*" -not -path "*/node_modules/*" 2>/dev/null)

if [ -n "$LARGE_FILES" ]; then
  echo "  WARNING: Large files (>5MB) found:"
  echo "$LARGE_FILES" | sed 's/^/    /'
  echo "  Consider adding to .gitignore or using Git LFS."
else
  echo "  OK"
fi
echo ""

# Summary
if [ $ERRORS -gt 0 ]; then
  echo "Found $ERRORS issue(s). Fix before committing."
  exit 1
else
  echo "All checks passed."
  exit 0
fi
