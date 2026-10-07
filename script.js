const foodData = [
  {
    id: 1,
    name: "Isaw",
    alternateName: "Chicken intestine skewers",
    description: "Charcoal-grilled chicken intestines served with a vinegar-soy dip.",
    longDescription:
      "Isaw is one of the most iconic grilled street foods in the Philippines, especially popular in Manila and nearby areas. Its smoky, savory flavor and chewy texture make it a beloved snack for late-night street-side eating.",
    category: "Grilled",
    region: "Luzon",
    provinces: ["Metro Manila", "Quezon", "Bulacan"],
    ingredients: ["Chicken intestines", "Vinegar", "Soy sauce", "Garlic", "Pepper", "Seasonings"],
    preparation:
      "The cleaned intestines are marinated, skewered, and grilled over charcoal until lightly charred and tender.",
    flavorProfile: { Sweet: 1, Salty: 4, Spicy: 3, Sour: 4, Savory: 5 },
    texture: "Chewy",
    priceRange: "₱10–₱30",
    bestTimeToEat: "Late afternoon to evening",
    commonlyFoundAt: "Street stalls, market corners, school areas",
    culturalBackground:
      "Isaw became a beloved street-food symbol in Metro Manila and has been associated with budget-friendly, after-school, and evening snacking traditions.",
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=80",
    tags: ["grilled", "savory", "manila", "barbecue", "street snack"],
    flavor: "Savory",
  },
  {
    id: 2,
    name: "Kwek-kwek",
    alternateName: "Quail egg fritters",
    description: "Quail eggs coated in orange batter and deep-fried until crisp and golden.",
    longDescription:
      "Kwek-kwek is a classic Filipino street snack made from quail eggs covered in a bright orange batter and fried until crunchy. It is usually served with a sweet and spicy vinegar sauce, making it especially popular at food stalls and school-area vendors.",
    category: "Fried",
    region: "Nationwide",
    provinces: ["Metro Manila", "Cebu", "Davao"],
    ingredients: ["Quail eggs", "Flour", "Annatto", "Seasonings", "Vinegar", "Sweet chili sauce"],
    preparation:
      "Quail eggs are boiled, coated in batter, then deep-fried until the outside turns crisp and the inside stays soft.",
    flavorProfile: { Sweet: 2, Salty: 4, Spicy: 3, Sour: 2, Savory: 4 },
    texture: "Crispy",
    priceRange: "₱10–₱30",
    bestTimeToEat: "Any time",
    commonlyFoundAt: "Stall carts, school canteens, side streets",
    culturalBackground:
      "Kwek-kwek is a widely familiar Filipino street-food item that has become part of many everyday snack routines across the country.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    tags: ["fried", "crispy", "quail eggs", "savory", "popular"],
    flavor: "Savory",
  },
  {
    id: 3,
    name: "Fish Balls",
    alternateName: "Fishball",
    description: "Tender fish balls deep-fried and served with a sweet and spicy sauce.",
    longDescription:
      "Fish balls are among the most accessible Filipino street snacks, sold in carts and market corners. They are usually skewered, dipped in sauce, and enjoyed for their mild savory flavor and soft interior.",
    category: "Snacks",
    region: "Nationwide",
    provinces: ["Metro Manila", "Cebu", "Bicol"],
    ingredients: ["Fish", "Cornstarch", "Seasonings", "Sweet sauce", "Spicy sauce", "Vinegar"],
    preparation:
      "Fish paste is shaped into balls, fried until fully cooked, and then served with a sauce mixture of sweet, spicy, and tangy flavors.",
    flavorProfile: { Sweet: 2, Salty: 4, Spicy: 3, Sour: 2, Savory: 4 },
    texture: "Soft",
    priceRange: "₱10–₱30",
    bestTimeToEat: "Afternoon to evening",
    commonlyFoundAt: "Street corner carts, school areas, night markets",
    culturalBackground:
      "Fish balls are a familiar sight in Filipino neighborhoods, often shared as affordable after-school or after-work snacks.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    tags: ["street snack", "fish", "sauce", "budget food", "nationwide"],
    flavor: "Salty",
  },
  {
    id: 4,
    name: "Kikiam",
    alternateName: "Kikiam sticks",
    description: "A savory dark-brown Chinese-inspired Filipino street snack that is fried and served with sauce.",
    longDescription:
      "Kikiam is a popular local specialty that blends Chinese-influenced flavors with Filipino street-food culture. It is often sold alongside fish balls and squid balls, served with a sweet and savory dip.",
    category: "Fried",
    region: "Nationwide",
    provinces: ["Metro Manila", "Quezon", "Cebu"],
    ingredients: ["Ground pork", "Wheat flour", "Shrimp", "Seasonings", "Sweet sauce", "Chili"],
    preparation:
      "The mixture is formed into logs, fried until browned, and served with a sweet and savory dipping sauce.",
    flavorProfile: { Sweet: 2, Salty: 4, Spicy: 2, Sour: 1, Savory: 5 },
    texture: "Crispy",
    priceRange: "₱10–₱30",
    bestTimeToEat: "Evening",
    commonlyFoundAt: "Food stalls, public markets, roadside snack carts",
    culturalBackground:
      "Kikiam reflects the influence of Chinese culinary traditions in the Philippines and is now widely enjoyed in street-food culture.",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1200&q=80",
    tags: ["fried", "pork", "sauce", "street snack", "popular"],
    flavor: "Savory",
  },
  {
    id: 5,
    name: "Taho",
    alternateName: "Silken tofu drink",
    description: "Warm tofu with arnibal syrup and sago pearls, often sold by vendors in the early morning.",
    longDescription:
      "Taho is a comforting Filipino street food that balances soft tofu, sweet syrup, and chewy pearls. It is a familiar breakfast favorite sold in many neighborhoods and is often enjoyed while strolling through the city early in the day.",
    category: "Drinks",
    region: "Nationwide",
    provinces: ["Metro Manila", "Pampanga", "Cebu"],
    ingredients: ["Soybean curd", "Brown sugar syrup", "Sago pearls", "Water"],
    preparation:
      "Fresh tofu is prepared then topped with caramelized sugar syrup and sago pearls before serving warm or at room temperature.",
    flavorProfile: { Sweet: 5, Salty: 1, Spicy: 0, Sour: 1, Savory: 1 },
    texture: "Creamy",
    priceRange: "₱10–₱30",
    bestTimeToEat: "Morning",
    commonlyFoundAt: "Sidewalk carts, neighborhood corners, school routes",
    culturalBackground:
      "Taho is one of the best-known Filipino street foods and is deeply tied to early-morning routines and city life.",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80",
    tags: ["breakfast", "sweet", "beverage", "soy", "popular"],
    flavor: "Sweet",
  },
  {
    id: 6,
    name: "Balut",
    alternateName: "Duck embryo",
    description: "A fertilized duck egg boiled and eaten from shell, often with vinegar, salt, and chili.",
    longDescription:
      "Balut is a distinctive street food deeply rooted in Filipino culture and is often associated with late-night eating and social gatherings. It is eaten with a mix of salt, vinegar, and chili, and is known for its rich flavor and unique texture.",
    category: "Savory",
    region: "Nationwide",
    provinces: ["Metro Manila", "Laguna", "Cebu"],
    ingredients: ["Duck egg", "Salt", "Vinegar", "Chili", "Seasonings"],
    preparation:
      "The egg is incubated, boiled until cooked, and served warm with seasonings or dipping sauces.",
    flavorProfile: { Sweet: 1, Salty: 4, Spicy: 3, Sour: 3, Savory: 5 },
    texture: "Soft",
    priceRange: "₱31–₱50",
    bestTimeToEat: "Late evening",
    commonlyFoundAt: "Late-night carts, market areas, side streets",
    culturalBackground:
      "Balut is often regarded as a traditional Filipino snack with a long cultural presence in street-food culture, particularly in urban areas.",
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=80",
    tags: ["duck egg", "late night", "savory", "traditional", "iconic"],
    flavor: "Savory",
  },
  {
    id: 7,
    name: "Turon",
    alternateName: "Banana spring roll",
    description: "Slices of saba banana and jackfruit rolled in lumpia wrapper and fried until crisp.",
    longDescription:
      "Turon is a sweet and flaky fried snack that brings together banana, caramelized sugar, and sometimes jackfruit. It is a popular afternoon treat sold in many neighborhood corners and market stalls.",
    category: "Sweet",
    region: "Nationwide",
    provinces: ["Metro Manila", "Cebu", "Davao"],
    ingredients: ["Saba banana", "Jackfruit", "Spring roll wrapper", "Brown sugar", "Cooking oil"],
    preparation:
      "Banana and fruit are wrapped in lumpia wrappers, fried until crisp, then coated with sugar for a caramelized finish.",
    flavorProfile: { Sweet: 5, Salty: 1, Spicy: 0, Sour: 1, Savory: 1 },
    texture: "Crispy",
    priceRange: "₱10–₱30",
    bestTimeToEat: "Afternoon",
    commonlyFoundAt: "Street carts, school areas, market stalls",
    culturalBackground:
      "Turon has become a familiar sweet snack in the Philippines, especially in urban street-food culture where quick, affordable sweets are easy to enjoy.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    tags: ["sweet", "fried", "banana", "jackfruit", "street snack"],
    flavor: "Sweet",
  },
  {
    id: 8,
    name: "Banana Cue",
    alternateName: "Caramelized banana",
    description: "Saba bananas deep-fried and coated with brown sugar for a glossy caramel finish.",
    longDescription:
      "Banana cue is one of the easiest and most beloved sweet snacks to find on the streets. The bananas are deep-fried and tossed with sugar to give each piece a rich caramelized coating and golden color.",
    category: "Sweet",
    region: "Nationwide",
    provinces: ["Metro Manila", "Laguna", "Bicol"],
    ingredients: ["Saba banana", "Brown sugar", "Cooking oil"],
    preparation:
      "Bananas are fried until tender and then coated in caramelized sugar to create a glossy, sweet finish.",
    flavorProfile: { Sweet: 5, Salty: 1, Spicy: 0, Sour: 1, Savory: 1 },
    texture: "Soft",
    priceRange: "₱10–₱30",
    bestTimeToEat: "Afternoon to evening",
    commonlyFoundAt: "Street vendors, market corners, school routes",
    culturalBackground:
      "Banana cue remains one of the most iconic Filipino sweet snacks and is often associated with everyday urban street food culture.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
    tags: ["banana", "caramel", "sweet", "quick bite", "street favorite"],
    flavor: "Sweet",
  },
  {
    id: 9,
    name: "Kamote Cue",
    alternateName: "Sweet potato cue",
    description: "Sweet potato slices fried and coated in caramelized brown sugar.",
    longDescription:
      "Kamote cue is a sweet and hearty snack made from sweet potato slices that are fried and tossed in sugar. It is an affordable and familiar treat sold by street vendors across the Philippines.",
    category: "Sweet",
    region: "Nationwide",
    provinces: ["Metro Manila", "Baguio", "Cebu"],
    ingredients: ["Sweet potato", "Brown sugar", "Cooking oil"],
    preparation:
      "Sweet potato slices are fried until tender and then coated with caramelized sugar for a crunchy-sweet finish.",
    flavorProfile: { Sweet: 4, Salty: 1, Spicy: 0, Sour: 0, Savory: 1 },
    texture: "Soft",
    priceRange: "₱10–₱30",
    bestTimeToEat: "Afternoon",
    commonlyFoundAt: "Sidewalk stands, school areas, neighborhood markets",
    culturalBackground:
      "Kamote cue is a classic Filipino sweet snack that has been enjoyed for generations as an inexpensive yet comforting treat.",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80",
    tags: ["sweet potato", "caramelized", "sweet", "quick snack", "budget food"],
    flavor: "Sweet",
  },
  {
    id: 10,
    name: "Betamax",
    alternateName: "Chicken blood skewers",
    description: "Grilled chicken blood cubes served with a tangy, savory sauce.",
    longDescription:
      "Betamax is a distinctively Filipino grilled snack, known for its rich taste and chewy texture. It is commonly sold by vendors and enjoyed as a savory barbecue-style snack.",
    category: "Grilled",
    region: "Luzon",
    provinces: ["Metro Manila", "Bulacan", "Pangasinan"],
    ingredients: ["Chicken blood", "Salt", "Vinegar", "Soy sauce", "Garlic", "Pepper"],
    preparation:
      "The blood mixture is formed, cooked, skewered, and grilled over charcoal until a smoky char develops.",
    flavorProfile: { Sweet: 1, Salty: 4, Spicy: 2, Sour: 2, Savory: 5 },
    texture: "Chewy",
    priceRange: "₱10–₱30",
    bestTimeToEat: "Evening",
    commonlyFoundAt: "Roadside grills, food parks, night markets",
    culturalBackground:
      "Betamax is a well-known Filipino grilled street food recognized for its strong savory profile and the cultural identity of local nitty-gritty food stalls.",
    image:
      "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=1200&q=80",
    tags: ["grilled", "savory", "barbecue", "blood cubes", "street classic"],
    flavor: "Savory",
  },
  {
    id: 11,
    name: "Adidas",
    alternateName: "Chicken feet skewers",
    description: "Grilled chicken feet served with a spicy vinegar dip and seasonings.",
    longDescription:
      "Adidas is a beloved grilled street snack known for its crunchy texture and savory flavor. It is often enjoyed with vinegar, chili, and garlic, making it a perfect street-side bite.",
    category: "Grilled",
    region: "Nationwide",
    provinces: ["Metro Manila", "Cavite", "Cebu"],
    ingredients: ["Chicken feet", "Soy sauce", "Vinegar", "Garlic", "Pepper", "Chili"],
    preparation:
      "Chicken feet are cleaned, marinated, grilled until charred, and served with a vinegar-based dipping sauce.",
    flavorProfile: { Sweet: 1, Salty: 4, Spicy: 3, Sour: 3, Savory: 5 },
    texture: "Chewy",
    priceRange: "₱10–₱30",
    bestTimeToEat: "Evening",
    commonlyFoundAt: "Street grills, side roads, market stalls",
    culturalBackground:
      "Adidas shows how Filipino street food often turns affordable cuts and local ingredients into beloved snacks enjoyed across different communities.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
    tags: ["grilled", "chicken feet", "savory", "vinegar", "street snack"],
    flavor: "Savory",
  },
  {
    id: 12,
    name: "Proven",
    alternateName: "Pig or chicken intestines",
    description: "A grilled offal snack with a bold savory and smoky taste.",
    longDescription:
      "Proven is another classic grilled Filipino snack that uses offal or internal parts, known for its strong flavor and satisfying chew. It is commonly sold beside other popular barbecue-type bites.",
    category: "Grilled",
    region: "Luzon",
    provinces: ["Metro Manila", "Laguna", "Rizal"],
    ingredients: ["Offal", "Soy sauce", "Vinegar", "Garlic", "Pepper", "Seasonings"],
    preparation:
      "The ingredients are cleaned, marinated, and grilled over charcoal until smoky and savory.",
    flavorProfile: { Sweet: 1, Salty: 4, Spicy: 2, Sour: 2, Savory: 5 },
    texture: "Chewy",
    priceRange: "₱10–₱30",
    bestTimeToEat: "Evening",
    commonlyFoundAt: "Night markets, grilled stands, city streets",
    culturalBackground:
      "Proven exemplifies the Filipino preference for resourceful ingredients transformed into memorable street snacks.",
    image:
      "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=1200&q=80",
    tags: ["offal", "grilled", "savory", "charcoal", "street food"],
    flavor: "Savory",
  },
  {
    id: 13,
    name: "Dynamite",
    alternateName: "Stuffed chili finger food",
    description: "A street-side favorite of large chili peppers stuffed with cheese and processed meat, deep-fried.",
    longDescription:
      "Dynamite is a bold and spicy Filipino snack that is stuffed with savory fillings and fried until crisp. It is known for the contrast between the crunchy shell and the molten, hearty center.",
    category: "Fried",
    region: "Nationwide",
    provinces: ["Metro Manila", "Cebu", "Iloilo"],
    ingredients: ["Chili", "Cheese", "Ground meat", "Seasonings", "Batter"],
    preparation:
      "Chili peppers are stuffed with savory fillings, coated in batter, and deep-fried until golden and crunchy.",
    flavorProfile: { Sweet: 1, Salty: 4, Spicy: 5, Sour: 1, Savory: 5 },
    texture: "Crispy",
    priceRange: "₱10–₱30",
    bestTimeToEat: "Afternoon to evening",
    commonlyFoundAt: "Street stalls, food parks, weekend markets",
    culturalBackground:
      "Dynamite is a playful but popular street-food item that has become a favorite for those who love bold, spicy bites.",
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=80",
    tags: ["spicy", "fried", "stuffed", "cheesy", "heat"],
    flavor: "Spicy",
  },
  {
    id: 14,
    name: "Sorbetes",
    alternateName: "Filipino ice cream",
    description: "Traditional Filipino ice cream sold in a cone or cup with a rich, creamy texture.",
    longDescription:
      "Sorbetes is a classic Filipino frozen treat usually sold from a cart or pushcart, often with playful flavors and a nostalgic feel. It is widely loved for its creamy consistency and distinctive local taste.",
    category: "Dessert",
    region: "Nationwide",
    provinces: ["Metro Manila", "Cebu", "Davao"],
    ingredients: ["Milk", "Sugar", "Eggs", "Flavorings", "Stabilizers"],
    preparation:
      "The ice cream is frozen in a traditional churn and served in cups or cones, often with a creamy texture and a generous scoop.",
    flavorProfile: { Sweet: 5, Salty: 0, Spicy: 0, Sour: 0, Savory: 1 },
    texture: "Creamy",
    priceRange: "₱10–₱30",
    bestTimeToEat: "Afternoon",
    commonlyFoundAt: "Street carts, parks, school areas",
    culturalBackground:
      "Sorbetes evokes the nostalgic local street culture of ice cream carts and family outings, especially in urban neighborhoods.",
    image:
      "https://images.unsplash.com/photo-1570197788417-0e823ef4b095?auto=format&fit=crop&w=1200&q=80",
    tags: ["ice cream", "dessert", "classic", "creamy", "nostalgic"],
    flavor: "Sweet",
  },
  {
    id: 15,
    name: "Sago't Gulaman",
    alternateName: "Sago and gulaman drink",
    description: "A sweet and refreshing beverage with tapioca pearls and gelatin cubes in brown sugar syrup.",
    longDescription:
      "Sago't Gulaman is a refreshing Filipino drink made from tapioca pearls, gelatin, and sweetened syrup. It is a common street-side beverage, especially in hot weather, and is known for its cool and satisfying sweetness.",
    category: "Drinks",
    region: "Nationwide",
    provinces: ["Metro Manila", "Iloilo", "Davao"],
    ingredients: ["Tapioca pearls", "Gulaman", "Brown sugar", "Water", "Ice"],
    preparation:
      "The pearls and gelatin cubes are mixed with sweet syrup and chilled, then served over ice for a refreshing drink.",
    flavorProfile: { Sweet: 5, Salty: 0, Spicy: 0, Sour: 1, Savory: 0 },
    texture: "Chewy",
    priceRange: "₱10–₱30",
    bestTimeToEat: "Hot afternoons",
    commonlyFoundAt: "Street vendors, markets, school sidewalks",
    culturalBackground:
      "This drink is a popular treat during warm weather and is widely enjoyed across the country as a cooling refreshment.",
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2e6?auto=format&fit=crop&w=1200&q=80",
    tags: ["drink", "refreshing", "sweet", "pearls", "cooling"],
    flavor: "Sweet",
  },
  {
    id: 16,
    name: "Carioca",
    alternateName: "Caramelized sweet potato balls",
    description: "A crunchy, caramel-sweet snack made from cassava or sweet potato dough.",
    longDescription:
      "Carioca is a delightful street snack with a sweet, caramelized flavor and a uniquely chewy texture. It is often sold in small stalls and enjoyed as a quick snack while walking around the city.",
    category: "Sweet",
    region: "Visayas",
    provinces: ["Cebu", "Iloilo", "Bohol"],
    ingredients: ["Cassava", "Sweet potato", "Brown sugar", "Cooking oil"],
    preparation:
      "The dough is shaped, fried, and then coated with caramel or sugar to create a crispy-sweet finish.",
    flavorProfile: { Sweet: 5, Salty: 0, Spicy: 0, Sour: 0, Savory: 1 },
    texture: "Chewy",
    priceRange: "₱10–₱30",
    bestTimeToEat: "Afternoon",
    commonlyFoundAt: "Public markets, street stalls, local fairs",
    culturalBackground:
      "Carioca reflects the playful sweetness of local snack culture in the Visayas, where fried sweets are often sold in bustling public markets.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    tags: ["visayas", "sweet", "fried", "cassava", "caramel"],
    flavor: "Sweet",
  },
  {
    id: 17,
    name: "Maruya",
    alternateName: "Banana fritter",
    description: "Banana slices coated in batter and fried into a golden, crisp snack.",
    longDescription:
      "Maruya is a familiar fried banana snack sold by local vendors, especially in the Visayas. Its crisp outer layer and soft banana center make it an easy and satisfying snack.",
    category: "Sweet",
    region: "Visayas",
    provinces: ["Iloilo", "Cebu", "Bacolod"],
    ingredients: ["Banana", "Flour", "Salt", "Sugar", "Cooking oil"],
    preparation:
      "Banana slices are dipped in batter, fried until golden, and often served warm with a dusting of sugar or syrup.",
    flavorProfile: { Sweet: 4, Salty: 1, Spicy: 0, Sour: 0, Savory: 1 },
    texture: "Crispy",
    priceRange: "₱10–₱30",
    bestTimeToEat: "Late afternoon",
    commonlyFoundAt: "Sidewalk stands, afternoon markets, food courts",
    culturalBackground:
      "Maruya is especially associated with everyday market culture in the Visayas and remains a beloved comfort snack across the islands.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
    tags: ["banana", "fried", "sweet", "visayas", "market snack"],
    flavor: "Sweet",
  },
  {
    id: 18,
    name: "Lugaw",
    alternateName: "Rice porridge",
    description: "A warm rice porridge served with toppings like garlic, egg, and savory seasonings.",
    longDescription:
      "Lugaw is a comforting Filipino rice porridge often sold in the early morning or during rainy weather. It is simple, warming, and can be customized with toppings like chicken, egg, and crispy garlic.",
    category: "Savory",
    region: "Nationwide",
    provinces: ["Metro Manila", "Pangasinan", "Cebu"],
    ingredients: ["Rice", "Chicken", "Egg", "Garlic", "Broth", "Seasonings"],
    preparation:
      "Rice is simmered in broth until soft and porridge-like, then topped with savory ingredients for a warm, comforting bowl.",
    flavorProfile: { Sweet: 1, Salty: 4, Spicy: 1, Sour: 0, Savory: 5 },
    texture: "Soft",
    priceRange: "₱31–₱50",
    bestTimeToEat: "Morning or rainy day",
    commonlyFoundAt: "Breakfast stalls, sidewalk counters, local eateries",
    culturalBackground:
      "Lugaw is a universal comfort food in Philippine street culture, often enjoyed as an easy breakfast or a warm meal after late nights.",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80",
    tags: ["porridge", "comfort food", "savory", "breakfast", "warm"],
    flavor: "Savory",
  },
  {
    id: 19,
    name: "Siomai",
    alternateName: "Steamed dumplings",
    description: "A soft, savory dumpling often served with chili garlic sauce.",
    longDescription:
      "Siomai is a classic Filipino street snack adapted from Chinese culinary traditions. It is commonly steamed, sold in small packs, and enjoyed with soy sauce or chili garlic condiments.",
    category: "Snacks",
    region: "Nationwide",
    provinces: ["Metro Manila", "Cebu", "Davao"],
    ingredients: ["Ground pork or shrimp", "Wrapper", "Seasonings", "Garlic", "Soy sauce"],
    preparation:
      "The filling is wrapped in dumpling wrappers and steamed until juicy, savory, and tender.",
    flavorProfile: { Sweet: 1, Salty: 4, Spicy: 2, Sour: 1, Savory: 5 },
    texture: "Soft",
    priceRange: "₱10–₱30",
    bestTimeToEat: "Any time",
    commonlyFoundAt: "Food carts, mall food courts, public markets",
    culturalBackground:
      "Siomai has become a staple in Filipino street food culture through its accessibility, convenience, and familiar savory taste.",
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=80",
    tags: ["dumplings", "savory", "steamed", "popular", "street snack"],
    flavor: "Savory",
  },
  {
    id: 20,
    name: "Lumpia",
    alternateName: "Spring rolls",
    description: "A crispy wrapped finger food filled with vegetables and meat, often served with vinegar sauce.",
    longDescription:
      "Lumpia is a popular Filipino snack that can be found in many street and market settings. It is usually fried until crisp and served with a tangy dipping sauce that balances its savory filling.",
    category: "Fried",
    region: "Nationwide",
    provinces: ["Metro Manila", "Cebu", "Pampanga"],
    ingredients: ["Wrapper", "Ground pork", "Carrots", "Vegetables", "Soy sauce", "Vinegar"],
    preparation:
      "The filling is wrapped and fried until crisp, then served with a vinegar-based dip or sweet chili sauce.",
    flavorProfile: { Sweet: 1, Salty: 4, Spicy: 2, Sour: 2, Savory: 5 },
    texture: "Crispy",
    priceRange: "₱10–₱30",
    bestTimeToEat: "Any time",
    commonlyFoundAt: "Street vendors, church bazaars, neighborhood markets",
    culturalBackground:
      "Lumpia draws from Chinese culinary traditions but has become an important part of Filipino food culture and local street-side dining.",
    image:
      "https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9?auto=format&fit=crop&w=1200&q=80",
    tags: ["spring rolls", "fried", "savory", "family favorite", "street snack"],
    flavor: "Savory",
  }
];

const filterState = {
  category: "",
  region: "",
  price: "",
  flavor: "",
  texture: "",
};

const grid = document.getElementById("foodGrid");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("foodSearch");
const searchStatus = document.getElementById("searchStatus");
const resultsMeta = document.getElementById("resultsMeta");
const clearFiltersButton = document.getElementById("clearFilters");
const categoryButtons = document.querySelectorAll(".category-card");
const filterButtons = document.querySelectorAll(".filter-option");
const navLinks = document.getElementById("navLinks");
const hamburger = document.querySelector(".hamburger");
const modal = document.getElementById("foodModal");
const modalClose = document.querySelector(".modal-close");

function normalize(value) {
  return String(value).toLowerCase().trim();
}

function matchesPrice(item, priceFilter) {
  if (!priceFilter) return true;
  if (priceFilter === "₱10–₱30") return item.priceRange === "₱10–₱30";
  if (priceFilter === "₱31–₱50") return item.priceRange === "₱31–₱50";
  if (priceFilter === "₱51+") return item.priceRange === "₱51+";
  return true;
}

function getFilteredFoods() {
  const query = normalize(searchInput.value);

  return foodData.filter((food) => {
    const matchesSearch =
      !query ||
      [
        food.name,
        food.alternateName,
        food.category,
        food.region,
        food.description,
        food.tags.join(" "),
        food.provinces.join(" "),
      ]
        .join(" ")
        .toLowerCase()
        .includes(query);

    const matchesCategory = !filterState.category || food.category === filterState.category;
    const matchesRegion = !filterState.region || food.region === filterState.region;
    const matchesPrice = matchesPrice(food, filterState.price);
    const matchesFlavor = !filterState.flavor || food.flavor === filterState.flavor;
    const matchesTexture = !filterState.texture || food.texture === filterState.texture;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesRegion &&
      matchesPrice &&
      matchesFlavor &&
      matchesTexture
    );
  });
}

function renderFlavorProfile(flavorProfile) {
  const entries = Object.entries(flavorProfile);
  return entries
    .map(
      ([name, value]) => `
        <div class="flavor-row">
          <span>${name}</span>
          <div class="flavor-track">
            <span class="flavor-fill" style="width: ${Math.max(value, 1) * 20}%"></span>
          </div>
        </div>
      `
    )
    .join("");
}

function renderFoodCards(items) {
  if (!items.length) {
    grid.innerHTML = "";
    emptyState.classList.remove("hidden");
    resultsMeta.textContent = "Showing 0 foods";
    searchStatus.textContent = "We couldn't find that street food.";
    return;
  }

  emptyState.classList.add("hidden");
  searchStatus.textContent = `Showing ${items.length} result${items.length > 1 ? "s" : ""}.`;
  resultsMeta.textContent = `Showing ${items.length} food${items.length > 1 ? "s" : ""}`;

  grid.innerHTML = items
    .map(
      (food) => `
        <article class="food-card">
          <img src="${food.image}" alt="${food.name}" />
          <div class="food-card-content">
            <h3>${food.name}</h3>
            <p class="food-description">${food.description}</p>

            <div class="meta-row">
              <div>
                <span>Category</span>
                <strong>${food.category}</strong>
              </div>
              <div>
                <span>Region</span>
                <strong>${food.region}</strong>
              </div>
            </div>

            <div class="food-footer">
              <span class="badge">${food.category}</span>
              <span class="price-tag">${food.priceRange}</span>
            </div>

            <div class="food-footer" style="margin-top: 14px;">
              <span class="price-tag">${food.region}</span>
              <button class="view-btn" type="button" data-food-id="${food.id}">View Details</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function updateFilterButtons() {
  filterButtons.forEach((button) => {
    const group = button.dataset.filterGroup;
    const selected = filterState[group];
    const active = selected === button.dataset.filter;
    button.classList.toggle("active", active);
  });
}

function applyFilters() {
  const filtered = getFilteredFoods();
  renderFoodCards(filtered);
  updateFilterButtons();
}

function setSearchStatusFromInput() {
  if (!searchInput.value.trim()) {
    searchStatus.textContent = "Discover your next favorite bite.";
    return;
  }

  const filtered = getFilteredFoods();
  if (!filtered.length) {
    searchStatus.textContent = "We couldn't find that street food.";
  } else {
    searchStatus.textContent = `Showing ${filtered.length} result${filtered.length > 1 ? "s" : ""}.`;
  }
}

searchInput.addEventListener("input", () => {
  applyFilters();
  setSearchStatusFromInput();
});

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;
    filterState.category = category;
    document.getElementById("explore").scrollIntoView({ behavior: "smooth", block: "start" });
    applyFilters();
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const { filterGroup, filter } = button.dataset;
    if (filterState[filterGroup] === filter) {
      filterState[filterGroup] = "";
    } else {
      filterState[filterGroup] = filter;
    }
    applyFilters();
  });
});

clearFiltersButton.addEventListener("click", () => {
  Object.keys(filterState).forEach((key) => {
    filterState[key] = "";
  });
  searchInput.value = "";
  applyFilters();
  searchStatus.textContent = "Discover your next favorite bite.";
});

function openModal(id) {
  const food = foodData.find((item) => item.id === Number(id));
  if (!food) return;

  document.getElementById("modalImage").src = food.image;
  document.getElementById("modalImage").alt = food.name;
  document.getElementById("modalCategory").textContent = food.category;
  document.getElementById("modalName").textContent = food.name.toUpperCase();
  document.getElementById("modalDescription").textContent = food.description;
  document.getElementById("factCategory").textContent = food.category;
  document.getElementById("factPrice").textContent = food.priceRange;
  document.getElementById("factFound").textContent = food.commonlyFoundAt;
  document.getElementById("factFlavor").textContent = food.flavor;
  document.getElementById("factTexture").textContent = food.texture;
  document.getElementById("factRegion").textContent = food.region;
  document.getElementById("modalLongDescription").textContent = food.longDescription;
  document.getElementById("modalIngredients").innerHTML = food.ingredients
    .map((ingredient) => `<span>${ingredient}</span>`)
    .join("");
  document.getElementById("modalPreparation").textContent = food.preparation;
  document.getElementById("modalFlavorProfile").innerHTML = renderFlavorProfile(food.flavorProfile);
  document.getElementById("modalWhere").textContent = food.commonlyFoundAt;
  document.getElementById("modalCultural").textContent = food.culturalBackground;

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

grid.addEventListener("click", (event) => {
  const button = event.target.closest(".view-btn");
  if (!button) return;
  const foodId = button.dataset.foodId;
  openModal(foodId);
});

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  hamburger.setAttribute("aria-expanded", String(isOpen));
});

Array.from(document.querySelectorAll(".region-card")).forEach((card) => {
  card.addEventListener("click", () => {
    const region = card.dataset.region;
    filterState.region = region;
    document.getElementById("explore").scrollIntoView({ behavior: "smooth", block: "start" });
    applyFilters();
  });
});

applyFilters();
searchStatus.textContent = "Discover your next favorite bite.";

