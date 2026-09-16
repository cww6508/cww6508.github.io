import {Rarity,Variant} from '../types/game';
export const PLACEHOLDER_CARD_IMAGE='PLACEHOLDER_CARD_IMAGE'; export const PLACEHOLDER_VALUE=4.5;
export const ECONOMY_CONFIG={startingCash:1000,sellMultiplier:1,gradingFee:25,marketplacePriceVariance:.15};
export const RARITY_ODDS:Record<Rarity,number>={Common:55,Uncommon:25,Rare:12,Epic:5,Legendary:2.5,Mythic:.5};
export const VARIANT_MULTIPLIERS:Record<Variant,number>={Base:1,Foil:1.5,Chrome:2,Gold:3,Diamond:5,'1st Edition':2.5,Autograph:8,Relic:10,'Super Rare':25};
export const GRADE_MULTIPLIERS:Record<number,number>={7:.8,8:1,8.5:1.15,9:1.4,9.5:2,10:4};
export const XP={pack:35,rare:20,sell:5,upgrade:40,set:100};
