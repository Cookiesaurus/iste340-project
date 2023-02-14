// Evan Hiltzik

// collection of Select titles, options, and depth
var selectInfo = {
  "menus" : [
        {
          "key": "Main",
          "options": ["Horror", "Action" , "Comedy"],
          "description": "Select a Genre",
          "depth" : 0
        },
        {
          "key": "Horror",
          "options": ["Sci-Fi", "Zombie", "Slasher"],
          "description": "Select a Horror Genre",
          "depth" : 1
        },
        {
          "key": "Action",
          "options": ["Thriller", "Mystery", "Adventure"],
          "description": "Select an Action Genre",
          "depth" : 1
        },
        {
          "key": "Comedy",
          "options": ["Horror Comedy", "Romantic Comedy", "Action Comedy"],
          "description": "Select a Comedy Genre",
          "depth" : 1
        },
        {
          "key": "Sci-Fi",
          "options": ["(SF) 1990s", "(SF) 2000s", "(SF) 2010s"],
          "description": "Select a Release Decade",
          "depth" : 2
        },
        {
          "key": "Zombie",
          "options": ["(Z) 1990s", "(Z) 2000s", "(Z) 2010s"],
          "description": "Select a Release Decade",
          "depth" : 2
        },
        {
          "key": "Slasher",
          "options": ["(S) 1990s", "(S) 2000s", "(S) 2010s"],
          "description": "Select a Release Decade",
          "depth" : 2 
        },
        {
          "key": "Thriller",
          "options": ["(T) 1990s", "(T) 2000s", "(T) 2010s"],
          "description": "Select a Release Decade",
          "depth" : 2
        },
        {
          "key": "Mystery",
          "options": ["(M) 1990s", "(M) 2000s", "(M) 2010s"],
          "description": "Select a Release Decade",
          "depth" : 2
        },
        {
          "key": "Adventure",
          "options": ["(A) 1990s", "(A) 2000s", "(A) 2010s"],
          "description": "Select a Release Decade",
          "depth" : 2
        },
        {
          "key": "Horror Comedy",
          "options": ["(HC) 1990s", "(HC) 2000s", "(HC) 2010s"],
          "description": "Select a Release Decade",
          "depth" : 2
        },
        {
          "key": "Romantic Comedy",
          "options": ["(RC) 1990s", "(RC) 2000s", "(RC) 2010s"],
          "description": "Select a Release Decade",
          "depth" : 2
        },
        {
          "key": "Action Comedy",
          "options": ["(AC) 1990s", "(AC) 2000s", "(AC) 2010s"],
          "description": "Select a Release Decade",
          "depth" : 2
        }
      ]
}

// collection of chosen genre+decade, and recommended movies
var dataInfo = {
  "info" : [
    {
      "key": "(SF) 1990s",
      "text": "Event Horizon (1997),\nCube (1997),\nTremors (1990),\nBody Snatchers (1993)"
    },
    {
      "key": "(SF) 2000s",
      "text": "The Mist (2007),\nCloverfield (2008),\nThe Happening (2008),\nPandorum (2009)"
    },
    {
      "key": "(SF) 2010s",
      "text": "The Platform (2019),\nV/H/S (2012),\nColor Out of Space (2019),\nCircle (2015)"
    },
    {
      "key": "(Z) 1990s",
      "text": "Night of the Living Dead (1990),\nThe Boneyard (1991),\nArmy of Darkness (1992),\nBraindead (1992)"
    },
    {
      "key": "(Z) 2000s",
      "text": "28 Days Later (2002),\n28 Weeks Later (2007),\nSlither (2006),\nI Am Legend (2007)"
    },
    {
      "key": "(Z) 2010s",
      "text": "World War Z (2013),\nTrain to Busan (2016),\nZombieland: Double Tap (2019),\nThe Cabin in the Woods (2012)"
    },
    {
      "key": "(S) 1990s",
      "text": "Scream (1996),\nCandyman (1992),\nI Know What you did last summer (1997),\nBride of Chucky (1998)"
    },
    {
      "key": "(S) 2000s",
      "text": "Trick 'r Treat (2007),\nHalloween (2007),\nFreddy vs Jason (2003),\nIdentity (2003)"
    },
    {
      "key": "(S) 2010s",
      "text": "Green Room (2015),\nHappy Death Day (2017),\nIt Follows (2014),\nHaunt (2019)"
    },
    {
      "key": "(T) 1990s",
      "text": "Jacob's Ladder (1990),\nThe Game (1997),\nMission: Impossible (1996),\nLeon: The Professional (1994)"
    },
    {
      "key": "(T) 2000s",
      "text": "The Machinist (2004),\nThe Butterfly Effect 20(04),\n1408 (2007),\nOrphan (2009)"
    },
    {
      "key": "(T) 2010s",
      "text": "Vivarium (2019),\nThe Call (2013),\nInception (2010),\nSplit (2016)"
    },
    {
      "key": "(M) 1990s",
      "text": "Perfect Blue (1997),\nTwin Peaks: Fire Walk With Me (1990),\nSe7en (1995)),\nThe Silence of the Lambs (1991))"
    },
    {
      "key": "(M) 2000s",
      "text": "Memento (2000),\nOldboy (2003),\nKiss Kiss, Bang Bang (2005),\nZodiac (2007)"
    },
    {
      "key": "(M) 2010s",
      "text": "Knives Out (2019),\nAnnihilation (2018),\nBlade Runner 2049 (2017),\nShutter Island (2010)"
    },
    {
      "key": "(A) 1990s",
      "text": "The Fifth Element (1997),\nThe Mummy (1999),\nStargate (1994),\nWaterworld (1995)"
    },
    {
      "key": "(A) 2000s",
      "text": "Casino Royale (2006),\nSunshine (2007),\nWatchmen (2009),\nSerenity (2005)"
    },
    {
      "key": "(A) 2010s",
      "text": "Interstellar (2014),\nLogan (2017),\nGuardians of the Galaxy (2014),\nThe Dark Knight Rises (2012)"
    },
    {
      "key": "(HC) 1990s",
      "text": "Scream (1995),\nBuffy the Vampire Slayer (1992),\nDracula: Dead and Loving It (1995),\nTroll 2 (1990)"
    },
    {
      "key": "(HC) 2000s",
      "text": "Shaun of the Dead (2004),\nHot Fuzz (2007),\nBubba Ho-Tep (2002),\nSlither (2006)"
    },
    {
      "key": "(HC) 2010s",
      "text": "Tucker and Dale vs Evil (2010),\nFright Night (2011),\nRubber (2010),\nWhat We Do in the Shadows (2014)"
    },
    {
      "key": "(RC) 1990s",
      "text": "Forrest Gump (1994),\nOnly You (1994),\nGroundhog Day (1993),\nPretty Woman (1990)"
    },
    {
      "key": "(RC) 2000s",
      "text": "Amelie (2001),\nBridget Jones's Diary (2001),\n500 Days of Summer (2009),\nThe 40-Year-Old Virgin (2005)"
    },
    {
      "key": "(RC) 2010s",
      "text": "Crazy, Stupid, Love (2011),\nMan Up (2015),\nObvious Child (2014),\nSilver Linings Playbook (2012)"
    },
    {
      "key": "(AC) 1990s",
      "text": "Rush Hour (1998),\nDemolition Man (1993),\nLock, Stock and Two Smoking Barrels (1998),\nMen in Black (1997)"
    },
    {
      "key": "(AC) 2000s",
      "text": "Pineapple Eexpress (2008),\nHancock (2008),\nThe Incredibles (2004),\nTropic Thunder (2008)"
    },
    {
      "key": "(AC) 2010s",
      "text": "Guns Akimbo (2019),\nDeadpool (2016),\nKingsman: The Secret Service (2014),\nSherlock Holmes (2011)"
    },
    
  ]
}