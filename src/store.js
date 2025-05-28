export const initialStore=()=>{
  return{
    message: null,
    videoGames: [
    {
        title: "Counter-Strike 2",
        text: "The modern evolution of the classic tactical shooter. Counter-Strike 2 brings graphical, physics, and network improvements that elevate the competitive experience while staying true to its strategic gameplay roots.",
        img: "https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react/social/cs2.jpg",
        date: "Sep 2023",
        top: 1,
        type: "FPS"
    },
    {
        title: "Fortnite",
        text: "A cultural phenomenon blending building, shooting, and live events. Fortnite is more than just a battle royale — it's a social platform with concerts, creative modes, and collaborations with major franchises.",
        img: "https://cdn2.unrealengine.com/social-image-chapter4-s3-3840x2160-d35912cc25ad.jpg",
        date: "Jul 2017",
        top: 2,
        type: "Battle Royale"
    },
    {
        title: "Minecraft",
        text: "An infinite sandbox for building, exploring, and surviving. Minecraft is one of the best-selling and most influential games ever, with a massive community and ongoing updates since its release.",
        img: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_4/2x1_NSwitch_Minecraft_image1600w.jpg",
        date: "Nov 2011",
        top: 3,
        type: "Sandbox"
    },
    {
        title: "Valorant",
        text: "A tactical hero-based shooter that combines precise gunplay with unique agent abilities. Valorant emphasizes strategy, teamwork, and fast-paced action in tight competitive maps.",
        img: "https://www.riotgames.com/darkroom/1200/1dbd7211e78ce5faa7a8af9d10afad47:2b5979e3922758399ba389561e797919/ps-f2p-val-console-launch-16x9.jpg",
        date: "Jun 2020",
        top: 4,
        type: "FPS"
    },
    {
        title: "Apex Legends",
        text: "A squad-based battle royale set in the Titanfall universe. Apex Legends introduces unique characters with abilities that encourage team synergy and fast, fluid combat.",
        img: "https://cdn1.epicgames.com/spt-assets/5dcd88f4e2094a698ebffa43438edc33/apex-legends-1ugyx.jpg",
        date: "Feb 2019",
        top: 5,
        type: "Battle Royale"
    },
    {
        title: "PUBG: Battlegrounds",
        text: "The game that popularized the battle royale genre. PUBG drops players into a large map where they scavenge for weapons, survive the shrinking zone, and fight to be the last one standing.",
        img: "https://cdn1.epicgames.com/spt-assets/53ec4985296b4facbe3a8d8d019afba9/pubg-battlegrounds-16v1j.jpg",
        date: "Dec 2017",
        top: 6,
        type: "Battle Royale"
    },
    {
        title: "Terraria",
        text: "A 2D sandbox adventure game where you dig, build, fight, and explore. Terraria offers a vast world full of enemies, treasures, crafting systems, and creative possibilities.",
        img: "https://hb.imgix.net/b7c65e77a5f126a1024a8459ec0fd08f879860f1.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=993b7e1d9df1e22a531675612b644e59",
        date: "May 2011",
        top: 7,
        type: "Sandbox"
    },
    {
        title: "Garry's Mod",
        text: "A sandbox physics game that gives players tools to create almost anything. From building contraptions to hosting minigames and roleplay servers, creativity is the only limit.",
        img: "https://sm.ign.com/ign_es/release/g/garrys-mod/garrys-mod-pc_1gs1.jpg",
        date: "Nov 2006",
        top: 8,
        type: "Sandbox"
    },
    {
        title: "Call of Duty: Modern Warfare II",
        text: "A cinematic and fast-paced FPS with a gripping campaign and robust multiplayer modes. MWII refines the classic COD formula with updated visuals and smooth gunplay.",
        img: "https://fotografias-neox.atresmedia.com/clipping/cmsimages01/2022/06/03/4EE1156F-7B08-4C6F-A565-6F559E9EB344/call-duty-modern-warfare-2_98.jpg?crop=1920,1080,x0,y11&width=1900&height=1069&optimize=high&format=webply",
        date: "Oct 2022",
        top: 9,
        type: "FPS"
    },
  {
    title: "Hollow Knight",
    text: "A beautifully hand-drawn metroidvania set in a haunting underground kingdom. Hollow Knight blends precise platforming with challenging combat and deep exploration.",
    img: "https://hb.imgix.net/11155f2d1b6ae9df1e6fe77d232c711c7eb09a75.jpg?auto=compress,format&fit=crop&h=353&w=616&s=db4abf165d43abab76789569124a58d0",
    date: "Feb 2017",
    top: 10,
    type: "Platform"
},
{
    title: "Celeste",
    text: "An emotional platformer about climbing a mountain, both literally and metaphorically. Celeste features tight controls, clever level design, and a heartfelt story.",
    img: "https://rubik-audiovisual.com/wp-content/uploads/2024/02/imagenes-rubik-1.jpeg",
    date: "Jan 2018",
    top: 11,
    type: "Platform"
},
{
    title: "Ori and the Blind Forest",
    text: "A visually stunning platformer with fluid movement and emotional storytelling. Ori combines exploration and combat with environmental puzzles and upgrades.",
    img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2015/03/456632-analisis-ori-and-blind-forest.png?tf=3840x",
    date: "Mar 2015",
    top: 12,
    type: "Platform"
},
{
    title: "The Witcher 3: Wild Hunt",
    text: "A massive open-world RPG set in a dark fantasy universe. The Witcher 3 features deep storytelling, rich characters, and rewarding exploration.",
    img: "https://gaming-cdn.com/images/products/268/orig/the-witcher-3-wild-hunt-pc-juego-gog-com-cover.jpg?v=1710174099",
    date: "May 2015",
    top: 13,
    type: "RPG"
},
{
    title: "Persona 5 Royal",
    text: "A stylish turn-based RPG where you balance school life with dungeon crawling. Persona 5 Royal refines the original with new content and enhanced mechanics.",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1687950/capsule_616x353.jpg?t=1733297467",
    date: "Oct 2022",
    top: 14,
    type: "RPG"
},
{
    title: "Elden Ring",
    text: "An expansive action RPG from the creators of Dark Souls, featuring open-world exploration, punishing combat, and deep lore crafted with George R. R. Martin.",
    img: "https://image.api.playstation.com/vulcan/img/rnd/202111/0506/hcFeWRVGHYK72uOw6Mn6f4Ms.jpg",
    date: "Feb 2022",
    top: 15,
    type: "RPG"
}],
    videogamesTypes: ["FPS", "Battle Royale","Platform","RPG", "Sandbox"]

  }
}

export default function storeReducer(store, action = {}) {
  
}
