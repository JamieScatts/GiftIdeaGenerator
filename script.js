let currentIndex = {
    "12-19": 0,
    "20-29": 0,
    "30-39": 0,
    "40-49": 0,
    "50-59": 0,
    "60+": 0
};

function generateGift() {
    const gifts = {
        "12-19": [
            "board game", "video game", "sports equipment", "book", "action figure", "graphic novel", "music headphones",
            "puzzle", "LEGO set", "art supplies", "video game gift card", "fashion accessories", 
            "Bluetooth speaker", "smartwatch", "phone case", "LED lights for room", "art book", "fidget spinner",
            "skateboard", "roller skates", "remote control car", "headphones stand", "guitar pick",
            "coloring book", "jump rope", "fitness band", "magic set", "watercolor paint set", "personalized keychain",
            "anime figurine", "nail polish set", "phone stand", "drone", "pop socket for phone", "virtual reality headset", "3D puzzle", "smart pen", "graphic tee",
            "comic book", "wall art", "collectible trading cards", "personalized journal",
            "Polaroid camera", "wireless mouse", "gaming controller", "beanie", "sunglasses", "hat", "headphones", "wireless headphones",
            "Rubix cube", "football", "shoes", "portable speaker", "audiobook", "gift voucher"
        ],
        "20-29": [
            "smartphone accessory", "fitness tracker", "coffee maker", "backpack", "mug", "wireless headphones",
            "gaming headset", "book", "home decor item", "experience voucher", "portable speaker", "board game", 
            "coffee table book", "beach towel", "stylish journal", "smart pen", "luxury candle", "art print",
            "fitness equipment", "travel gear", "laptop sleeve", "minimalist wallet", "personalized necklace",
            "puzzle game", "yoga mat", "travel adapter", "camera", "cozy blanket",
            "sunglasses", "phone tripod", "gym bag", "gaming mouse", "portable charger", "personalized phone case", "book light",
            "vintage poster", "Clothes", "travel pillow", "gaming mouse pad", "mug", "lava lamp",
            "watch", "Bluetooth speaker", "mini fridge", "travel journal", "hat", "painting", "beanie", "smart watch"
        ],
        "30-39": [
            "cookbook", "wine glasses set", "outdoor gear", "designer watch", "art print",
            "coffee machine", "fitness equipment", "travel accessories", "puzzle", "personalized journal",
            "fitness tracker", "gym gear", "backpack", "travel bag", "stylish jacket",
            "board game", "whiskey set", "digital camera", "fitness tracker", "DIY home project kit",
            "luxury coffee set", "bike helmet", "camping gear", "smartphone tripod", "book",
            "pottery", "shoes", "travel mug", "decorative vase", "wireless earbuds", "fitness watch", "cutting board", "sunglasses", "cookware set",
            "tool set", "wine opener", "customized photo frame", "personalized notebook", "T-shirt", "Candle", "Bath bomb"
        ],
        "40-49": [
            "gardening kit", "travel bag", "whiskey glass set", "smart speaker", "fitness tracker", "Wine", "Champagne",
            "personalized artwork", "stylish clothing", "high-quality coffee beans", "tool set", "cookware", "gourmet food basket",
            "designer watch", "wine glasses set", "leather wallet", "book subscription", "coffee maker", "home decor item",
            "luxury candle", "spa gift set", "barbecue grill", "personalized photo album", "travel pillow", "Bluetooth headphones",
            "coffee table", "smart home appliance", "designer shoes", "fitness tracker", "tool organizer", "photo frame",
            "Bluetooth speaker", "cozy blanket", "vacuum cleaner", "sunglasses", "outdoor gear", "smart thermostat", "decoration set",
            "bike accessories", "tablet", "digital photo frame", "designer jacket", "laptop bag", "travel journal", "barbecue accessories",
            "flavored coffee set", "cookbook", "sleep mask", "personalized keychain", "Bluetooth earbuds"
        ],
        "50-59": [
            "massager", "luxury skincare set", "fitness equipment", "personalized photo album", "gardening tools",
            "coffee maker", "smart home appliance", "puzzle", "book", "relaxation gift set", "fancy wine glasses", "tablet",
            "fitness tracker", "cozy throw blanket", "luxury pen", "travel gear", "warm scarf",
            "air purifier", "wooden photo frame", "massage chair", "coffee table book", "travel bag",
            "personalized journal", "book subscription", "wine opener", "wine cooler", "leather gloves", "smart watch",
            "vacuum cleaner", "decorative vases", "backyard furniture", "sports gear", "stylish sunglasses", "quilt",
            "glassware", "tea set", "organic beauty kit", "reading light", "art print",
            "customized mug", "tote bag", "jewelry box", "gift card", "necklace", "earings"
        ],
        "60+": [
            "photo frame", "knitting kit", "gardening supplies", "book", "digital photo album",
            "puzzle", "smart home device", "comfortable slippers", "jigsaw puzzle", "table games", "chess set",
            "blanket", "wooden puzzle", "easy chair", "vintage record player", "reading glasses", "personalized mug",
            "massage gun", "coffee making set", "gardening kit", "magnetic photo frame", "booklight", "digital clock",
            "lap desk", "chocolate gift box", "shawl", "wine glasses", "books",
            "music player", "yoga mat", "memory foam pillow", "customized calendar", "gardening tools",
            "blanket", "personalized journal", "heated pillow", "heated blanket", "table lamp", "tote bag", "scarf",
            "scented candles", "hat", "digital photo frame", "subscription box", "tea infuser", "coffee set"
        ]
    };

    const ageCategory = document.getElementById("age-category").value;
    const giftIdeas = gifts[ageCategory];

    
    const gift = giftIdeas[currentIndex[ageCategory]];

    
    document.getElementById("gift-idea").textContent = `Your gift idea: ${gift}`;

   
    currentIndex[ageCategory]++;

    
    if (currentIndex[ageCategory] === giftIdeas.length) {
        currentIndex[ageCategory] = 0;
    }
}
