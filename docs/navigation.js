export default [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Introduction",
        path: "/introduction"
    },
    {
        name: "Playing with a Standard Card Deck",
        path: "/standard-deck"
    },
    {
        name: "Common Special Rules",
        children: [
            {
                name: "UNO 7-0",
                path: "/7-0"
            },
            {
                name: "Jump In",
                path: "/jump-in"
            },
            {
                name: "Cumulate (Progressive UNO)",
                path: "/cumulate"
            },
            {
                name: "Draw and Play",
                path: "/draw-and-play"
            },
            {
                name: "Draw until Match",
                path: "/draw-until-match"
            },
        ]
    },
    {
        name: "Custom Game Modes and Rules",
        children: [
            {
                name: "Cumulate v2",
                path: "/cumulate2"
            },
            {
                name: "No U UNO",
                path: "/no-u"
            },
            {
                name: "Two Card UNO",
                path: "/two-card"
            },
            {
                name: "Full Deck UNO",
                path: "/full-deck"
            },
            {
                name: "Power of Two",
                path: "/power-of-two"
            },
            {
                name: "Negative Draw Cards",
                path: "/negative"
            },
            {
                name: "Twos",
                path: "/twos"
            },
            {
                name: "Battle Royale",
                path: "/battle-royale"
            }
        ]
    },
]