const skincare = [
    {
        id: 1,
        name: "CeraVe Oil Cleanser",
        brand: "CeraVe",
        compatibility: "Not Safe",
        imagePath: "/images/ceravecleanser.jpg",
        isTrending: true,
        isRecommended: false,

        // extra information for product page
        description: "A gentle, non-foaming oil cleanser that effectively removes makeup, dirt, and excess oil without disrupting the skin's natural barrier.",
        safeIngredients: ["Ceramides", "Hyaluronic Acid", "Niacinamide"],
        irritantIngredients: ["Fragrance", "Coconut Oil"],
        whyNotSafe: 
        "This product contains fragrance and coconut oil, which can be irritating for sensitive skin types.",
        whereToBuy: [
            { store: "Ulta", url: "https://www.ulta.com/p/hydrating-foaming-oil-cleanser-pimprod2039907?sku=2611324" },
            { store: "Amazon", url: "https://www.amazon.com/CeraVe-Hydrating-Triglyceride-Hyaluronic-Ceramides/dp/B0C7J7CWBN" }
        ]
    },
    {
        id: 2,
        name: "Anua Heartleaf Foaming Cleanser",
        brand: "Anua",
        compatibility: "Safe",
        imagePath: "/images/anuafoamingcleanser.jpg",
        isTrending: true,
        isRecommended: false,

        // extra information for product page
        description: "A gentle foaming cleanser infused with heartleaf extract to soothe and cleanse the skin without stripping its natural moisture.",
        safeIngredients: ["Heartleaf Extract", "Panthenol", "Allantoin"],
        irritantIngredients: [],
        whereToBuy: [
            { store: "Ulta", url: "https://www.ulta.com/p/heartleaf-quercetinol-pore-deep-cleansing-foam-pimprod2048920?sku=2634189" },
            { store: "Amazon", url: "https://www.amazon.com/ANUA-Heartleaf-Quercetinol-Pore-Cleansing/dp/B0BVV8BNYJ" }
        ]
    },
    {
        name: "Paula's Choice 2% BHA Liquid Exfoliant",
        brand: "Paula's Choice",
        compatibility: "Not Safe",
        imagePath: "/images/paulaschoice.jpg",
            isTrending: true,
        isRecommended: false,
    },
    {
        name: "Madagascar Centella Ampoule",
        brand: "Skin1004",
        compatibility: "Safe",
        imagePath: "/images/madagascarcentella.jpg",
            isTrending: true,
        isRecommended: false,
    },
    {
        name: "Drunk Elephant Cream Protini Polypeptide",
        brand: "Drunk Elephant",
        compatibility: "Not Safe",
        imagePath: "/images/drunkelephant.jpg",
            isTrending: true,
        isRecommended: false,
    },
    {
        name: "Ordinary Niacinamide 10% + Zinc 1%",
        brand: "The Ordinary",
        compatibility: "Safe",
        imagePath: "/images/ordinaryniacinamide.jpg",
            isTrending: false,
        isRecommended: true,
    },
    {
        name: "La Roche-Posay Toleriane Double Repair Face Moisturizer",
        brand: "La Roche-Posay",
        compatibility: "Safe",
        imagePath: "/images/larocheposay.jpg",
        isTrending: false,
        isRecommended: true,
    },
    {
        name: "Neutrogena Hydro Boost Water Gel",
        brand: "Neutrogena",
        compatibility: "Not Safe",
        imagePath: "/images/neutrogenahydroboost.jpg",
        isTrending: false,
        isRecommended: true,
    },
    {
        name: "EltaMD UV Clear Broad-Spectrum SPF 46",
        brand: "EltaMD",
        compatibility: "Safe",
        imagePath: "/images/eltamduvclear.jpg",
        isTrending: false,
        isRecommended: true,
    },
    {
        name: "Bioderma Sensibio H2O Micellar Water",
        brand: "Bioderma",
        compatibility: "Safe",
        imagePath: "/images/biodermasensibio.jpg",
        isTrending: false,
        isRecommended: true,
    },
];