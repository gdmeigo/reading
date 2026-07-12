# Lexical Policy

This policy is part of the reading-material specification.

## Root-Sense Preference

- Prefer broad, reusable root-sense words over narrower everyday synonyms when both are natural.
- Through NH1, use `seat` rather than `chair` unless a physical chair with legs/back is the point of the scene.
- From NH2 onward, this `seat` over `chair` preference does not need to be enforced.
- Choose non-target nouns so they can work across many contexts.
- Keep target ID words and grammar visible in the story text.

## Maintenance

- When the user identifies another narrow word to avoid, add it to this file.
- Revise existing stories consistently after adding a new preference.
- Run `node tools/check_lexical_policy.mjs` before committing story changes.
