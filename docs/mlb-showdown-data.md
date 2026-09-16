# ShowdownBot data discovery and migration gate

## Investigation status

**No ShowdownBot card fields have been imported into this repository.** This is a
hard migration gate: the old `src/data/cards.ts` data is fictional demo data and
must not be relabelled as MLB Showdown data.

### Primary source requested

- Website: <https://www.showdownbot.com>
- Investigation date: 2026-09-16

### Access result

The website could not be inspected from this execution environment. A direct
`curl -IL https://www.showdownbot.com` request was denied by the configured
network proxy with `CONNECT tunnel failed, response 403`. The supplied
web-search/browser integration also returned HTTP 401 before it could open the
site. No local ShowdownBot export, API contract, GitHub checkout, JSON, CSV, or
other raw dataset exists in this repository.

Accordingly, the following are **not verified** and are intentionally not
represented in the game model: source IDs, player/name fields, years, sets,
teams, positions, card numbers, Showdown points, ratings, hitting/pitching
outcomes, defense, speed, card types, variants, image URLs, API availability,
and licenses or terms of use.

## Existing-project inventory

The current app is a small React/TypeScript client-side demo:

| Concern | Current location | Current behavior |
| --- | --- | --- |
| Card model/database | `src/types/game.ts`, `src/data/cards.ts` | `Card` mixes fictional player metadata with game rarity/variant/value fields. |
| Packs/opening | `src/data/packs.ts`, `src/game/engine.ts`, `src/App.tsx` | Configurable fictional packs generate cards and show a reveal overlay. |
| Collection/detail/selling | `src/pages.tsx`, `src/components/CardView.tsx`, `src/components/Modal.tsx` | Collection filters and card modal operate on individual owned copies. |
| Marketplace/economy | `src/game/engine.ts`, `src/data/config.ts` | Local randomized listings and synthetic estimated values. |
| XP/upgrades | `src/data/config.ts`, `src/data/upgrades.ts`, `src/App.tsx` | Local XP/level and upgrade costs. |
| Persistence/navigation | `src/store/gameStore.ts`, `src/App.tsx` | LocalStorage and in-component page navigation. |

These systems can be preserved, but a proper migration must first change the
owned-card store from individual copies to a `cardId` + `quantity` record and
move game-only data (value, grading, pack rarity) away from raw Showdown data.

## Required source verification before implementation

Provide a reachable ShowdownBot export, documented endpoint, repository, or a
small raw-data sample with its license/usage terms. Then document all of the
following before implementing the parser or adapter:

1. Canonical source URL and revision/date.
2. Raw format and how it is obtained (API, JSON, CSV, or export).
3. Exact raw key names/types, nullability, and card ID semantics.
4. Actual years, sets, team encoding, positions, and card-number rules.
5. Actual player/card attributes, separated by applicable card type.
6. Image availability, source paths/URLs, and permission to display or bundle.
7. Attribution, copyright, and API/rate-limit restrictions.

## Intended data boundary after verification

The implementation will use this boundary once—not before—the raw schema is
known:

```text
ShowdownBot raw export → parser → validator → adapter → normalized cards
                                               ↓
                               values map / image resolver / game economy
                                               ↓
                                  packs, marketplace, collection, React UI
```

The importer will retain only verified source fields; malformed records will
produce warnings and be skipped. A separate `cardId → game value` map will
contain `PLACEHOLDER_CARD_VALUE` until values are supplied. An image resolver
will prefer user-provided local images, then a source image only when its use is
permitted, and finally `PLACEHOLDER_CARD_IMAGE`. No Showdown points or rating
will be used as a monetary value.

## Attribution and branding

Any completed migration must describe the app as an independent fan-made
project. It must not claim affiliation with MLB, MLB Showdown, ShowdownBot, or
a rights holder, and must not bundle source images without verified permission.
