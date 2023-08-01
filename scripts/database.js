const database = {
  schools: [
    {
      id: 1,
      name: "Abjuration",
      description:
        "This school is focused on protective spells, as well as spells which cancel or interfere with other spells, magical effects, or supernatural abilities.",
      disclaimer:
        "Abjuration is intended for self-defense and may never be used to counter spells intended for medical therapy or domestic enhancement, or to dispel municipal wards or other enchantments for the public good.",
    },
    {
      id: 2,
      name: "Conjuration",
      description:
        "This school is focused on instantaneous transportation, conjuring manifestations of creatures, energy or objects, and object creation.",
      disclaimer:
        "Conjuration is strictly forbidden within city limits, and teleportation spells are forbidden without a current license valid within the region of incantation.",
    },
    {
      id: 3,
      name: "Divination",
      description:
        "This school is focused on acquiring and revealing information.",
      disclaimer:
        "Farsight into private dwellings is forbidden, and publication of prognosticated information is subject to statutes of divinatory libel.",
    },
    {
      id: 5,
      name: "Evocation",
      description:
        "This school pertains to creating matter and energy, called up out of nothing.",
      disclaimer:
        "All acts of evocation are subject to the laws of physical combat.",
    },
    {
      id: 6,
      name: "Illusion",
      description:
        "This school involves the ability to change the appearance of something, by creating a phantasm.",
      disclaimer:
        "Illusions used to coerce or mislead are subject to the same statutes and penalties as other such skullduggery.",
    },
    {
      id: 7,
      name: "Necromancy",
      description: "Necromancy spells involve death, undeath, and the manipulation of life energy.",
      disclaimer: "Raised corpses are subject to the same laws as elementals and familiars, and the summoner shall be liable for any damages incurred during the period of resurrection.",
    },
    {
      id: 8,
      name: "Transmutation",
      description:
        "This school focuses on the ability to change matter. Spells in this school alter the properties of their targets.",
      disclaimer:
        "All transmutations must be consensual, and must be reversed upon request or per prior contractual specification.",
    },
  ],
  archetypes: [
    {
      id: 1,
      name: "Wizard",
      description: "Achieves a command of magic through study of texts and mastery of spells",
      greeting: "May the light of knowledge guide and fortify thee",
      schoolId: 1, // Belongs to Abjuration
      bookId: 1, // The Tome of Disbalance
    },
    {
      id: 2,
      name: "Sorcerer",
      description: "Power is based on innate ability and cultivated through meditation and practice",
      greeting: "I honor your path, and your way.",
      schoolId: 5, // Belongs to Evocation
      bookId: 3, // Spectral Fireworks and Raising the Dead
    },
    {
      id: 3,
      name: "Warlock",
      description: "Draws power from affiliation to a deity, fortified by his/her faith therein",
      greeting: "As we beckon to that which beckons, so I beckon unto thee",
      schoolId: 7, // Belongs to Necromancy
      bookId: 14, // Ghostly Spirits and How to Raise Them
    },
    {
      id: 4,
      name: "Druid",
      description: "Magic is rooted in nature, and fluctuates based on setting and the favor of animist spirits",
      greeting: "May your roots be deep and your fruits be sweet",
      schoolId: 8, // Belongs to Transmutation
      bookId: 6, // The Elements and You
    },
    {
      id: 5,
      name: "Bard",
      description: "Gains limited spellcasting ability by channeling creative energies, bolstered by muses",
      greeting: "Drain the tankard, for another awaits!",
      schoolId: 6, // Belongs to Illusion
      bookId: 13, // Birdsong as Incantation
    },
    {
      id: 6,
      name: "Cleric",
      description: "Channels divine power from a deity to heal, protect, and smite",
      greeting: "May the blessings of [deity name] shine upon you.",
      schoolId: 4, // Belongs to Enchantment (New School)
      bookId: 12, // Just Say No: Wards, Counters, and Disenchantment
    },
    {
      id: 7,
      name: "Paladin",
      description: "Holy warriors, sworn to uphold justice and righteousness",
      greeting: "With faith as my shield, I stand ready to defend.",
      schoolId: 3, // Belongs to Divination
      bookId: 10, // Creatures and their Applications
    },
    {
      id: 8,
      name: "Ranger",
      description:"Masters of the wilderness, skilled in tracking and survival",
      greeting: "In harmony with nature, I welcome your company.",
      schoolId: 2, // Belongs to Conjuration
      bookId: 7, // Mudruk's Field Guide to Fairy Circles
    },
    {
      id: 9,
      name: "Summoner",
      description: "Able to invoke elementals, beasts and spirit creatures to their side",
      greeting: "In battle or camaraderie, I offer my loyalty.",
      schoolId: 1, // Belongs to Abjuration
      bookId: 8, // An Introduction to Summoning
    },
    {
      id: 10,
      name: "Rogue",
      description: "Masters of stealth, cunning, and subterfuge",
      greeting: "Shadows guide my steps; how may I assist you?",
      schoolId: 6, // Belongs to Illusion
      bookId: 2, // Bobbin's Guide to Manifestation
    },
    {
      id: 11,
      name: "Monk",
      description:
        "Masters of martial arts, harnessing inner ki to perform extraordinary feats",
      greeting: "In tranquility, we find strength. What brings you here?",
      schoolId: 8, // Belongs to Transmutation
      bookId: 9, // From This To That: Transmutation made Easy
    },
    {
      id: 12,
      name: "Artificer",
      description:
        "Inventors and creators, using magical craftsmanship to craft powerful items",
      greeting: "Welcome to my workshop of wonders. How may I assist you?",
      schoolId: 5, // Belongs to Evocation
      bookId: 6, // The Elements and You (Same book as Druid)
    },
    {
      id: 13,
      name: "Shapeshifter",
      description: "Able to transform into creatures and other forms",
      greeting: "Let us prevail. What brings you here?",
      schoolId: 2, // Belongs to Conjuration
      bookId: 11, // Wild Magic
    },
    {
      id: 14,
      name: "Sage",
      description:
        "Scholars and knowledge-seekers, experts in various academic disciplines",
      greeting: "Greetings, seeker of knowledge. How may I enlighten you?",
      schoolId: 3, // Belongs to Divination
      bookId: 4, // Telepathy: The Mind Within the Mind
    },
    {
      id: 15,
      name: "Inquisitor",
      description:
        "Determined investigators, skilled in rooting out deceit and corruption",
      greeting: "In the name of truth and justice, speak your purpose.",
      schoolId: 1, // Belongs to Abjuration
      bookId: 1, // The Tome of Disbalance (Same book as Wizard)
    },
    {
      id: 16,
      name: "Alchemist",
      description:
        "Masters of concoctions, brewing potions and elixirs with magical effects",
      greeting: "Welcome to my apothecary. What elixir do you seek?",
      schoolId: 5, // Belongs to Evocation
      bookId: 9, // From This To That: Transmutation made Easy (Same book as Monk)
    },
  ],
  books: [
    {
      id: 1,
      name: "The Tome of Disbalance",
    },
    {
      id: 2,
      name: "Bobbin's Guide to Manifestation",
    },
    {
      id: 3,
      name: "Spectral Fireworks and Raising the Dead",
    },
    {
      id: 4,
      name: "Telepathy: The Mind Within the Mind",
    },
    {
      id: 5,
      name: "Telekinesis for Dummies",
    },
    {
      id: 6,
      name: "The Elements and You",
    },
    {
      id: 7,
      name: "Mudruk's Field Guide to Fairy Circles",
    },
    {
      id: 8,
      name: "An Introduction to Summoning",
    },
    {
      id: 9,
      name: "From This To That: Transmutation made Easy",
    },
    {
      id: 10,
      name: "Creatures and their Applications",
    },
    {
      id: 11,
      name: "Wild Magic",
    },
    {
      id: 12,
      name: "Just Say No: Wards, Counters, and Disenchantment",
    },
    {
      id: 13,
      name: "Birdsong as Incantation",
    },
    {
      id: 14,
      name: "Ghostly Spirits and How to Raise Them",
    },
  ],
};
