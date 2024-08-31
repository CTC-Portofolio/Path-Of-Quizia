import { Question } from "./types";

export const Questions = [
  {
    statement:
      "Which of the following orbs places the following flask enchantment: 'Use When Charges Reach Full'",
    type: "single",
    answers: [
      { text: "Enkindling Orb", isCorrect: false },
      { text: "Instilling Orb", isCorrect: true },
      { text: "Tailoring Orb", isCorrect: false },
      { text: "Tempering Orb", isCorrect: false },
    ],
    tags: ["crafting", "flasks"],
  },
  {
    statement:
      "Which of the following orbs places the following flask enchantment: 'X% Increased Effect. Gains no charges during effect'",
    type: "single",
    answers: [
      { text: "Enkindling Orb", isCorrect: true },
      { text: "Instilling Orb", isCorrect: false },
      { text: "Tailoring Orb", isCorrect: false },
      { text: "Tempering Orb", isCorrect: false },
    ],
    tags: ["crafting", "flasks"],
  },
  {
    statement:
      "You can create a rare flask by using a regal orb on a magic flask",
    type: "single",
    answers: [
      { text: "True", isCorrect: false },
      { text: "False", isCorrect: true },
    ],
    tags: ["crafting", "flasks"],
  },
  {
    statement: "You can apply enkindling orbs to mana flasks",
    type: "single",
    answers: [
      { text: "True", isCorrect: false },
      { text: "False", isCorrect: true },
    ],
    tags: ["crafting", "flasks"],
  },
  {
    statement: "You can apply instilling orbs to life flasks",
    type: "single",
    answers: [
      { text: "True", isCorrect: false },
      { text: "False", isCorrect: true },
    ],
    tags: ["crafting", "flasks"],
  },
  {
    statement: "You can reduce the effect of a flask",
    type: "single",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    tags: ["crafting", "flasks"],
  },
  {
    statement: "You can apply horticrafting enchantments to flasks",
    type: "single",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    tags: ["crafting", "flasks"],
  },
  {
    statement: "Which of the following currency orbs can be applied to flasks?",
    type: "multiple",
    answers: [
      { text: "Vaal orb", isCorrect: true },
      { text: "Alteration orb", isCorrect: true },
      { text: "Transmutation orb", isCorrect: true },
      { text: "Exalted orb", isCorrect: false },
      { text: "Chance orb", isCorrect: true },
      { text: "Ancient orb", isCorrect: false },
    ],
    tags: ["crafting", "flasks"],
  },
  {
    statement: "What does quality do to life flasks?",
    type: "single",
    answers: [
      { text: "Increases the amount of life recovered", isCorrect: true },
      { text: "Reduces the time the life gets recovered", isCorrect: false },
    ],
    tags: ["crafting", "flasks"],
  },
  {
    statement: "What does quality do to utility flasks?",
    type: "single",
    answers: [
      { text: "Increases the duration", isCorrect: true },
      { text: "Increased the effect", isCorrect: false },
    ],
    tags: ["crafting", "flasks"],
  },
  {
    statement:
      "Life, mana and hybrid effects always end when at full health/mana",
    type: "single",
    answers: [
      { text: "True", isCorrect: false },
      { text: "False", isCorrect: true },
    ],
    tags: ["crafting", "flasks"],
  },
  {
    statement: "Tinctures are considered flasks",
    type: "single",
    answers: [
      { text: "True", isCorrect: false },
      { text: "False", isCorrect: true },
    ],
    tags: ["flasks", "tinctures"],
  },
  {
    statement: "Bismuth flasks offer additional maximum elemental resistances",
    type: "single",
    answers: [
      { text: "True", isCorrect: false },
      { text: "False", isCorrect: true },
    ],
    tags: ["flasks"],
  },
  {
    statement: "Flasks can increase the item rarity of your loot",
    type: "single",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    tags: ["flasks"],
  },
  {
    statement:
      "Which of the following places the following body armour enchantment: 'Quality does not increase its defences, grands +1 Maximum life per 2% quality'",
    type: "single",
    answers: [
      { text: "Tailoring Orb", isCorrect: false },
      { text: "Horticrafting Station", isCorrect: true },
      { text: "Tempering Orb", isCorrect: false },
    ],
    tags: ["crafting", "horticrafting"],
  },
  {
    statement: "The Horticrafting Station has a 'Reforge attributes' option",
    type: "single",
    answers: [
      { text: "True", isCorrect: false },
      { text: "False", isCorrect: true },
    ],
    tags: ["crafting", "horticrafting"],
  },
  {
    statement: "The Horticrafting Station has a 'Reforge mana' option",
    type: "single",
    answers: [
      { text: "True", isCorrect: false },
      { text: "False", isCorrect: true },
    ],
    tags: ["crafting", "horticrafting"],
  },
  {
    statement: "The Horticrafting Station has a 'Randomize Influence' option",
    type: "single",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    tags: ["crafting", "horticrafting"],
  },
  {
    statement: "The Horticrafting Station options respect metamods",
    type: "single",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    tags: ["crafting", "horticrafting"],
  },
  {
    statement: "The Horticrafting Station can guarantee influence modifiers",
    type: "single",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    tags: ["crafting", "horticrafting", "influence"],
  },
  {
    statement: "The Horticrafting Station can synthesise items",
    type: "single",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    tags: ["crafting", "horticrafting", "synthesis"],
  },
  {
    statement:
      "The Horticrafting add/remove options work exactly like a veiled orb remove/add",
    type: "single",
    answers: [
      { text: "True", isCorrect: false },
      { text: "False", isCorrect: true },
    ],
    tags: ["crafting", "horticrafting", "veiled"],
  },
  {
    statement:
      "The Horticrafting add/remove options first remove, then add a modifier of the given type",
    type: "single",
    answers: [
      { text: "True", isCorrect: false },
      { text: "False", isCorrect: true },
    ],
    tags: ["crafting", "horticrafting"],
  },
  {
    statement:
      "The Horticrafting add/remove options first add, then remove a modifier of the given type",
    type: "single",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    tags: ["crafting", "horticrafting"],
  },
  {
    statement:
      "The Horticrafting add/remove options cannot be used on influenced items",
    type: "single",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    tags: ["crafting", "horticrafting"],
  },
  {
    statement:
      "The Horticrafting add/remove options cannot be used on synthesised items",
    type: "single",
    answers: [
      { text: "True", isCorrect: false },
      { text: "False", isCorrect: true },
    ],
    tags: ["crafting", "horticrafting"],
  },
  {
    statement:
      "The horticrafting station allows you to change elemental resistances from one type to another",
    type: "single",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    tags: ["crafting", "horticrafting"],
  },
  {
    statement:
      "The Horticrafting station can change uber elder fragments into other uber elder fragments",
    type: "single",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    tags: ["crafting", "horticrafting"],
  },
  {
    statement:
      "You can color your sockets white using the horticrafting station",
    type: "single",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    tags: ["crafting", "horticrafting"],
  },
  {
    statement:
      "The Horticrafting station can change uber Atziri fragments into other uber Atziri fragments",
    type: "single",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    tags: ["horticrafting"],
  },
  {
    statement:
      "Which of the following fragments can be changed at the horticrafting station?",
    type: "multiple",
    answers: [
      { text: "Shaper", isCorrect: true },
      { text: "Elder", isCorrect: true },
      { text: "Conqueror", isCorrect: true },
      { text: "Uber Elder", isCorrect: true },
      { text: "Uber boss", isCorrect: false },
    ],
    tags: ["horticrafting"],
  },
  {
    statement:
      "Which of the following items can be changed at the horticrafting station?",
    type: "multiple",
    answers: [
      { text: "Fossils", isCorrect: true },
      { text: "Oils", isCorrect: true },
      { text: "Catalysts", isCorrect: true },
      { text: "Essences", isCorrect: true },
      { text: "Breach and Timeless Splinters", isCorrect: true },
      { text: "Delirium orbs", isCorrect: true },
      { text: "Divination cards", isCorrect: true },
    ],
    tags: ["horticrafting"],
  },
  {
    statement:
      "The horticrafting divination card gamble option is weighted against the player.",
    type: "single",
    answers: [
      { text: "true", isCorrect: false },
      { text: "false", isCorrect: true },
    ],
    tags: ["horticrafting"],
  },
  {
    statement: "For Weapons and armours quality is a more modifier",
    type: "single",
    answers: [
      { text: "true", isCorrect: true },
      { text: "false", isCorrect: false },
    ],
    tags: ["crafting"],
  },
  {
    statement: "Chance orbs can transform an item from normal into unique",
    type: "single",
    answers: [
      { text: "true", isCorrect: true },
      { text: "false", isCorrect: false },
    ],
    tags: ["crafting"],
  },
  {
    statement: "Exalted orbs respect metamods",
    type: "single",
    answers: [
      { text: "true", isCorrect: true },
      { text: "false", isCorrect: false },
    ],
    tags: ["crafting"],
  },
  {
    statement: "Regal orbs respect metamods",
    type: "single",
    answers: [
      { text: "true", isCorrect: true },
      { text: "false", isCorrect: false },
    ],
    tags: ["crafting"],
  },
  {
    statement: "Alchemy orbs respect metamods",
    type: "single",
    answers: [
      { text: "true", isCorrect: false },
      { text: "false", isCorrect: false },
      { text: "Does not apply", isCorrect: true },
    ],
    tags: ["crafting"],
  },
  {
    statement: "Chaos orbs respect metamods",
    type: "single",
    answers: [
      { text: "true", isCorrect: true },
      { text: "false", isCorrect: false },
    ],
    tags: ["crafting"],
  },
  {
    statement: "Veiled orbs respect the following metamods",
    type: "multiple",
    answers: [
      { text: "Prefixes cannot be changed", isCorrect: true },
      { text: "Suffixes cannot be changed", isCorrect: true },
      { text: "Cannot roll attack modifiers", isCorrect: false },
      { text: "Cannot roll caster modifiers", isCorrect: false },
    ],
    tags: ["crafting"],
  },
  {
    statement:
      "Item quality increased the change for a Jeweller's Orb to reforge with 6 sockets",
    type: "single",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    tags: ["crafting"],
  },
  {
    statement:
      "Item quality increased the change for a Fusing Orb to reforge an item with 6 links",
    type: "single",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    tags: ["crafting"],
  },
  {
    statement:
      "If you increase the number of sockets using the crafting bench, the first sockets do not get recolored",
    type: "single",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    tags: ["crafting"],
  },
  {
    statement:
      "Orbs of Binding can be applied to the same items as alchemy orbs",
    type: "single",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    tags: ["crafting"],
  },
  {
    statement:
      "Sacred orbs reroll the numeric values of a weapon's base attack",
    type: "single",
    answers: [
      { text: "True", isCorrect: false },
      { text: "False", isCorrect: true },
    ],
    tags: ["crafting"],
  },
  {
    statement: "Orbs of Scouring respect metamods",
    type: "single",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    tags: ["crafting"],
  },
  {
    statement: "Blessed orbs corrupt items",
    type: "single",
    answers: [
      { text: "True", isCorrect: false },
      { text: "False", isCorrect: true },
    ],
    tags: ["crafting"],
  },
  {
    statement: "Vaal orbs can transform an item from unique to rare",
    type: "single",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    tags: ["crafting", "corruption"],
  },
  {
    statement: "Vaal orbs can change the modifiers on an item",
    type: "single",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    tags: ["crafting", "corruption"],
  },
  {
    statement: "A corrupted item is no longer modifiable by any means",
    type: "single",
    answers: [
      { text: "True", isCorrect: false },
      { text: "False", isCorrect: true },
    ],
    tags: ["crafting", "corruption"],
  },
  {
    statement: "You can apply Exarch/Eater implicits to Synthesised items",
    type: "single",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    tags: ["crafting", "synthesis", "eldritch"],
  },
  {
    statement: "How many tiers do eldritch implicits have?",
    type: "single",
    answers: [
      { text: "4", isCorrect: false },
      { text: "5", isCorrect: false },
      { text: "6", isCorrect: true },
    ],
    tags: ["crafting", "eldritch"],
  },
  {
    statement: "An orb of conflict is biased against the higher tier modifier",
    type: "single",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    tags: ["crafting", "eldritch"],
  },
  {
    statement:
      "You can apply quality to corrupted gear - weapons, shield, armour, jewelry",
    type: "single",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    tags: ["crafting", "corruption"],
  },
  {
    statement: "You can reforge the socket colors of a corrupted item",
    type: "single",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    tags: ["crafting", "corruption"],
  },
  {
    statement: "You can reforge the socket links of a corrupted item",
    type: "single",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    tags: ["crafting", "corruption"],
  },
  {
    statement: "You can reforge the number of sockets of a corrupted item",
    type: "single",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    tags: ["crafting", "corruption"],
  },
  {
    statement:
      "Which of the following orbs apply influence to an eligible item?",
    type: "multiple",
    answers: [
      { text: "Warlord's Exalted Orb", isCorrect: true },
      { text: "Crusader's Exalted Orb", isCorrect: true },
      { text: "Orb of Dominance", isCorrect: false },
    ],
    tags: ["crafting", "influence"],
  },
  {
    statement: "Influenced items can be fractured",
    type: "single",
    answers: [
      { text: "True", isCorrect: false },
      { text: "False", isCorrect: true },
    ],
    tags: ["crafting", "influence"],
  },
  {
    statement: "Orbs of dominance are used to create double influenced items",
    type: "single",
    answers: [
      { text: "True", isCorrect: false },
      { text: "False", isCorrect: true },
    ],
    tags: ["crafting", "influence"],
  },
  {
    statement: "Orbs of dominance are used to elevate influenced modifiers",
    type: "single",
    answers: [
      { text: "True", isCorrect: false },
      { text: "False", isCorrect: true },
    ],
    tags: ["crafting", "influence"],
  },
  {
    statement:
      "Tier 1 is the maximum tier possible for influenced mods on boots",
    type: "single",
    answers: [
      { text: "True", isCorrect: false },
      { text: "False", isCorrect: true },
    ],
    tags: ["crafting", "influence"],
  },
  {
    statement: "Orbs of dominance do not respect item level",
    type: "single",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    tags: ["crafting", "influence"],
  },
  {
    statement: "Orbs of dominance respect the following metamods",
    type: "multiple",
    answers: [
      { text: "Prefixes cannot be changed", isCorrect: true },
      { text: "Suffixes cannot be changed", isCorrect: true },
      { text: "Cannot roll attack modifiers", isCorrect: false },
      { text: "Cannot roll caster modifiers", isCorrect: false },
    ],
    tags: ["crafting", "influence"],
  },
  {
    statement: "Awakener's Orbs do not respect metamods",
    type: "single",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    tags: ["crafting", "influence"],
  },
  {
    statement:
      "You can apply an Awakener's Orb to a double influenced item as a receiver",
    type: "single",
    answers: [
      { text: "True", isCorrect: false },
      { text: "False", isCorrect: true },
    ],
    tags: ["crafting", "influence"],
  },
  {
    statement:
      "The top tier of an essence (Deafening) is always stronger than the equivalent T1 modifier",
    type: "single",
    answers: [
      { text: "True", isCorrect: false },
      { text: "False", isCorrect: true },
    ],
    tags: ["crafting", "essences"],
  },
  {
    statement: "Essences can force non-native mods to roll on items",
    type: "single",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    tags: ["crafting", "essences"],
  },
  {
    statement: "Essences respect metamods",
    type: "single",
    answers: [
      { text: "True", isCorrect: false },
      { text: "False", isCorrect: false },
      { text: "Not Applicable", isCorrect: true },
    ],
    tags: ["crafting", "essences"],
  },
  {
    statement: "You can have multiple essence modifiers on a single item",
    type: "single",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    tags: ["crafting", "essences"],
  },
  {
    statement: "Fossil crafting respects metamods",
    type: "single",
    answers: [
      { text: "True", isCorrect: false },
      { text: "False", isCorrect: false },
      { text: "Not Applicable", isCorrect: true },
    ],
    tags: ["crafting", "fossils"],
  },
  {
    statement:
      "What is the maximum number of fossils you can socket into a resonator?",
    type: "single",
    answers: [
      { text: "1", isCorrect: false },
      { text: "2", isCorrect: false },
      { text: "3", isCorrect: false },
      { text: "4", isCorrect: true },
      { text: "5", isCorrect: false },
    ],
    tags: ["crafting", "fossils"],
  },
  {
    statement: "Fossils can add corrupted essence modifiers to an item",
    type: "single",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    tags: ["crafting", "fossils"],
  },
  {
    statement: "Fossils can add special implicits",
    type: "single",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    tags: ["crafting", "fossils"],
  },
  {
    statement: "Fossils can modify the sockets of an item",
    type: "single",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    tags: ["crafting", "fossils"],
  },
] as const satisfies Question[];
