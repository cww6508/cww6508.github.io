# Diamond Dynasty — migration prototype

This repository contains a React/TypeScript prototype for a card-shop game. Its
current card database is fictional demo data and is **not** MLB Showdown data.

## ShowdownBot migration status

The requested primary source is [ShowdownBot](https://www.showdownbot.com), but
this environment cannot reach it (proxy HTTP 403) or use its browser/search tool
(HTTP 401). We therefore did not guess a ShowdownBot schema or falsely rename
the demo cards. See [the data discovery and migration gate](docs/mlb-showdown-data.md)
for the repository inventory, exact blocked checks, and the source details
needed before an adapter can be implemented safely.
