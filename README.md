## Zombie Smash
![](https://algo-zombie-smash.pages.dev/assets/screenshots/home.png)
![](https://algo-zombie-smash.pages.dev/assets/screenshots/demo2.png)

# Demo Video

# Demo
https://algo-zombie-smash.pages.dev

# Concept
You and your SMASHER have to cross over the USA to deliver an important package. The only issue: It’s full of zombies!
The game is a 2D car game that will make you go from one point to another while smashing and killing zombies on your way. It is inspired from the very popular Earn to Die 2 game that has more than 100M+ downloads on Android alone. Here is a trailer for the game.
We propose to create a similar game where your car is a SMASHER NFT on-chain. 

# Mood Board
The following Mood Board contains pictures courtesy of [Earn To Die 2](https://play.google.com/store/apps/details?id=com.notdoppler.earntodie2)
![](https://algo-zombie-smash.pages.dev/assets/screenshots/mood2.png)

# Designing smashers, upgrades, backgrounds, etc…
We hired artist Robson Teixeira to create everything we’ll need for our game: smashers, garage, the upgradable elements and some elements of the game. Next slide is the proof from fiverr.com. We have paid him 621.17 euros so far to originally design all you’re going to see next. We own their full copyrights.
![](https://algo-zombie-smash.pages.dev/assets/screenshots/fiverr.png)

# Getting started
The player will first need a SMASHER NFT to play the game. When you open the game, the first screen is your list of SMASHERs, where you can select one or mint a new one.

# Upgradability
Next, you can access the garage where you can upgrade your SMASHER. Each upgrade costs SMASHER Coins, an in-game ARC3 currency that you earn at the end of each level depending on the number of zombies you have killed. 
![](https://algo-zombie-smash.pages.dev/assets/screenshots/garage-scene1.png)

# Upgradability
Once you have enough SMASHER Coins, you can upgrade your NFT SMASHER on-chain with new weapons, armor, wheels, etc and make it the perfect zombie killing machine.
![](https://algo-zombie-smash.pages.dev/assets/screenshots/garage-scene2.png)

# 2387
That’s the number of unique combination your SMASHER NFT can have already, and we’re just getting started!
![](https://algo-zombie-smash.pages.dev/assets/screenshots/configs.png)

# How it works?
Your SMASHER is dynamic NFT which means its metadata can be upgraded on-chain to equip your SMASHER with a gun, a booster, an armor, better wheels, etc…
We prerender all combinations of SMASHER and assign it a code. Each digit corresponds to the level of upgrade of the corresponding part. 
For instance: This is SMASHER 0000000
![](https://algo-zombie-smash.pages.dev/assets/screenshots/config1.png)

# How it works?
An this is SMASHER 1220132 
![](https://algo-zombie-smash.pages.dev/assets/screenshots/config2.png)

When upgrading a SMASHER NFT, we simply change the code in its metadata on-chain so the TokenURI points to the new pre-rendered configuration.

# The Map
Each level is also a token! Its metadata contains the configuration of the level from the shape of the terrain to the position and strength of each zombie. Why is that? Because Zombie SMASHER is a metaverse when people can create and sell levels! From the map, you can see all levels and their ratings. The map will itself be a marketplace but for levels. You will be able to see the ratings of each level just like Happy Wheels (See next slide) so you can choose to purchase a level or not. Levels are NT-NFT, Non-Transfer NFT, you purchase them directly from its creator then you can play the level, but never resell it. 

![](https://algo-zombie-smash.pages.dev/assets/screenshots/happy-wheels.jpeg)
Image courtesy of Happy Wheels

![](https://algo-zombie-smash.pages.dev/assets/screenshots/map-scene.png)
Still under development!

# Game flow
![](https://algo-zombie-smash.pages.dev/assets/screenshots/flow2.png)

# Token Model
We have 3 tokens :
- SMASHER D-NFTs (Dynamic NFT), they represent the SMASHER and can be updated on-chain with pre-rendered SMASHER metadata corresponding to their new SMASHER configuration

- SMASHER COINS, a in-game currency that you earn at the end of each level and that you can spend to buy new upgrades.

- LEVELS NT-NFTs (Non-Transferrable NFT), their metadata contains the whole configuration of a level (terrain shape, background images, position and strength of the zombies, etc…). They are created by the players and can be sold on the marketplace. Players can buy them to play the level but cannot resell it. They can rate the level to attract or warn off other players to this level.

# Token Distribution
- SMASHER D-NFTs (Dynamic NFT): We plan to create 10,000 premium SMASHER designs that only the owner of that NFT can have. In addition, we’ll constantly mint and inject basic low-level SMASHERs into the marketplace for people who want to play the game but can’t afford a premium SMASHER. 

- SMASHER COINS: No initial distribution. Players earn them a the end of the level then spend them on upgrades, it’s a zero-sum game.

- LEVELS NT-NFTs (Non-Transferrable NFT): We plan to create a dozen levels to get the ball rolling then let the community create and sell levels.

# Token Economy
- SMASHER D-NFTs (Dynamic NFT): the revenues of the initial mint of the 10,000 premium SMASHERs will go in a DAO that will finance the development of the game. The second market royalties (5%) will also go into the DAO.

- SMASHER COINS: No plan for it yet.

- LEVELS NT-NFTs (Non-Transferrable NFT): Only the creator can mint the levels he created. He can then sell them on the marketplace. There is a 5% royalties going into the DAO.  The remaining 95% goes to the creator.

# Demo
We are far from done but we have already coded the basics of the project, available at:
https://algo-zombie-smash.pages.dev

We created an ARC19 smart contract for the SMASHERs and added metadata upgradability and marketplace functionalities. We also developed the first part of the game using the Phaser.js engine. The marketplace and garage are fully functional and you can already pilot your SMASHER in a physics sandbox (that is empty so far)
To play de prototype, you'll need to install AlgoSigner, connect it to the `Testnet` and have some tokens to mint a SMASHER NFT.

# Todo list
- SMASHER D-NFT ARC19  ✅
- Upgrade your SMASHER onchain ✅
- SMASHER COIN ARC3 Contract ❌ (3-7 days to complete)
- LEVELS NT-NFT ARC19 + Marketplace Contract ❌ (3-7 days to complete)
- In-game SMASHER marketplace ❌ (9-13 days to complete)
- In-game Levels marketplace ❌ (9-13 days to complete)
- Physics Sandbox ✅
- Pilot your SMASHER NFT ✅
- Implement a full level ❌ (I already got some level background and zombie designs from Robson but will need much more to actually complete a level)
- Implement multiples levels, multiples SMASHERs with their upgrades ❌ (This is where most of the budget will go. All the technical pieces are in place, now we just need to fill the game with content)

# Contact me
I’m a freelance developer and developing the game in my extra time. If you any question, don't hesite to contact me.

Email: waylad42@gmail.com
Discord: waylad#4756

![](https://algo-zombie-smash.pages.dev/assets/screenshots/zombie.png)
