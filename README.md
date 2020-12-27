# Ars Magica 5e for Foundry VTT

This is an early release Foundry VTT system for Ars Magica 5th Edition.

This package is intended to enable Ars Magica play using Foundry VTT. In order to play, official Ars Magica materials are still required.

Ars Magica content is copyright Trident, Inc d/b/a Atlas Games. Ars Magica, Mythic Europe, and Covenants are trademarks of Trident, Inc. Order of Hermes and Tremere are trademarks of White Wolf, Inc.

Official material for Ars Magica 5th edition is published by and may be purchased from Atlas Games (https://atlas-games.com).

This project was based on the [Boilerplate System](https://gitlab.com/asacolips-projects/foundry-mods/boilerplate) by Asacolips.

## Contribute
Please contribute in any way you can. I am but a novice developer. You can also [join our Discord for development of this system](https://discord.gg/DdDetc9SYP).

## Release Notes

0.1.0
- Initial release.

0.1.1
- Corrected manifest. Added license.

0.1.2
- Corrected item template and spell template.

0.1.3
- Fixed + buttons to add inventory/spells directly in character sheet.
- Modified header - moved Age (Apparent) up there and moved House down to a Magus-specific section in Description tab.
- Exposed remaining Magus-specific fields I had in DB but forgot to add to sheet (parens, primus, etc.)
- Added conditional logic to only display Magus fields on description as well as Arts tab on character sheet if actor type = magus.
- Renamed "Items" tab to "Inventory".
- Fixed warping, decrepitude, and reputation.
- Added book item type to support level, quality, type (summa/tractatus)

0.1.4
- Corrected some description fields that weren't set as strings.

0.1.5
- Re-did Virtues & Flaws tab - still very much a work in-progress
- Updated header and tab font to Goudy Text MT Lombardic Capitals.

0.1.6
- Validated compatibility with FoundryVTT version 0.7.9
- Increased actor sheet profile image size to 256px
- Added support for Fatigue and Wounds. Will be improved in the near future, but functional.

## TO DO
- Change virtues and flaws to item entities.
- implement stress / botch dice mechanics
- figure out how to make the other actor types work (only Magus works currently)
- abilities requiring specializations
- virtue/flaw net cost/point spend
- deal with encumbrance/load/"weight" of items per actor

