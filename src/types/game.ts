export type Rarity='Common'|'Uncommon'|'Rare'|'Epic'|'Legendary'|'Mythic'; export type Variant='Base'|'Foil'|'Chrome'|'Gold'|'Diamond'|'1st Edition'|'Autograph'|'Relic'|'Super Rare';
export interface Card {id:string;playerName:string;team:string;position:string;year:number;setName:string;cardNumber:string;rarity:Rarity;overall:number;image:string;baseValue:number;variant:Variant;stats:{stat1:string;stat2:string;stat3:string}}
export interface OwnedCard {id:string;variant:Variant;serialNumber?:string;grade?:number;acquiredAt:number}
export interface Pack {id:string;name:string;description:string;image:string;cost:number;cardsPerPack:number;rarityOdds:Record<Rarity,number>;variantOdds:Record<Variant,number>;guarantee?:Rarity}
export interface Listing {id:string;cardId:string;variant:Variant;price:number}
export interface GameState {cash:number;xp:number;cardsOwned:OwnedCard[];packsOpened:number;recentPulls:OwnedCard[];upgrades:Record<string,number>;marketplaceListings:Listing[];completedSets:string[]}
