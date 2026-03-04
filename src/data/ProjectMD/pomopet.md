**PomoPet** is a text-based productivity app that combines virtual pet simulation with a Pomodoro timer — grow your pet by completing focus sessions, then train stats, shop, and compete in the arena on breaks.

## Tech stack

**C++** — File-based save (`data/pet.txt`, `data/petInventory.txt`); ASCII art and ANSI colors in the Windows console.

## Features

- **Pomodoro loop** — 25-minute focus session while your pet “trains” in a chosen stat; 5-minute break to pick one of four locations (Forest, Field, Kitchen, Wishing Well) to train Strength, Speed, Health, or Luck.
- **Long break** — After four focus sessions, a 10-minute break unlocks the **Shop** (consumables and equipment for gold) and the **Arena** (strength battles and speed races).
- **Arena** — D&D-style d20 rolls for damage/distance; critical success (20) and critical failure (1); NPC stats scale with your pet; win rewards (gold + consumable) or lose gold.
- **Save/load** — Pet stats, gold, inventory, and progress persist between sessions.

For a full breakdown of mechanics (combat, races, shop items, validation), see the [README on GitHub](https://github.com/sabareias/pomopet).
