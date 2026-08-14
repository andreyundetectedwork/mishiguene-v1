/**
 * Mishiguene Restaurant - Interactive Logic & I18n Data
 */

// I18N DICTIONARIES
const translations = {
  es: {
    tagline: "COCINA DE INMIGRANTES",
    reviews_count: "(3400+ opiniones)",
    hours_today: "Lun - Dom: 19:00 - 00:00",
    nav_about: "Experiencia",
    nav_menu: "Menú",
    nav_pastrami: "Pastrón Emblemático",
    nav_reviews: "Opiniones",
    nav_location: "Ubicación",
    btn_reserve: "Reservar / Llamar",
    btn_call_now: "Llamar +54 11 7216-1226",
    hero_sub: "BUENOS AIRES · PALERMO",
    hero_title: "Tradición reinventada con maestría y pasión",
    hero_desc: "Una interpretación sofisticada de la cocina judía e internacional. Recetas familiares elevadas con alta gastronomía y una carta de vinos de excepción.",
    btn_explore_menu: "Explorar la Carta",
    btn_reserve_table: "Reservar Mesa",
    hl_rating_label: "Google Reviews",
    hl_michelin_val: "Recomendado",
    hl_michelin_label: "Guía Michelin",
    hl_artisanal: "Artesanal & Auténtico",
    about_subtitle: "Nuestra Esencia",
    about_title: "Un viaje sensorial por la cocina de inmigrantes",
    about_p1: "Mishiguene rinde homenaje a la memoria emotiva de los hogares de inmigrantes, fusionando recetas de transmisión oral con la elegancia técnica de la alta cocina contemporánea.",
    about_p2: "En un ambiente íntimo rodeado de maderas oscuras, manteles impolutos y una tenue iluminación cálida, cada velada se transforma en un banquete memorable acentuado por una destacada selección vitivinícola.",
    feat1_title: "Maridaje Seleccionado",
    feat1_desc: "Etiquetas exclusivas diseñadas para potenciar cada matiz de especias y ahumados.",
    feat2_title: "Ahumados a la Leña",
    feat2_desc: "Cocciones lentas de más de 14 horas con mezclas secretas de especias.",
    pastrami_badge: "Plato Emblema",
    pastrami_sub: "Especialidad Inigualable",
    pastrami_title: "Pastrón Mishiguene",
    pastrami_desc: "Nuestra receta emblema de la casa. Costillar vacuno curado durante 10 días en un baño de sal, hierbas y especias Ras El Hanout. Ahumado durante 4 horas a la leña y cocido al vapor durante 14 horas continuas.",
    pastrami_opt1_title: "Pastrón de Costillar Vacuno",
    pastrami_opt1_desc: "Servido con Risotto de Farfalaj trufado y salsa demiglace (200g / 400g).",
    pastrami_opt2_title: "Wellington de Pastrón",
    pastrami_opt2_desc: "Pastron de costillar vacuno, duxelle de hongos, acelga y mostaza de Dijon con demiglace de dátiles.",
    pastrami_opt3_title: "Pastrón con Latkes",
    pastrami_opt3_desc: "Pecho vacuno, latkes de papa, reducción de vino tinto, huevo frito y jalea de cebollas para compartir.",
    btn_reserve_pastrami: "Reservar tu experiencia",
    menu_subtitle: "Carta Gastronómica",
    menu_title: "Nuestra Carta Completa",
    menu_desc: "Todos los precios están expresados en pesos argentinos. Incluyen IVA (21%).",
    cat_degustacion: "✨ Menú Degustación",
    cat_entradas: "🥗 Entradas",
    cat_mezze: "🧆 Mezze & Bocados",
    cat_principales: "🍲 Platos de Temporada",
    cat_pastron: "🥩 Pastrón Emblemático",
    cat_postres: "🍰 Postres",
    reviews_subtitle: "Testimonios",
    reviews_title: "Lo que dicen nuestros comensales",
    reviews_total_count: "Basado en más de 3400 opiniones en Google",
    loc_subtitle: "Visítanos",
    loc_title: "Ubicación y Horarios",
    loc_address_title: "Dirección",
    btn_open_maps: "Ver en Google Maps →",
    loc_hours_title: "Horario de Atención",
    day_mon: "Lunes",
    day_tue: "Martes",
    day_wed: "Miércoles",
    day_thu: "Jueves",
    day_fri: "Viernes",
    day_sat: "Sábado",
    day_sun: "Domingo",
    loc_phone_title: "Reservas telefónicas",
    cta_title: "Viva una velada inolvidable en Mishiguene",
    cta_desc: "Asegure su mesa con anticipación para disfrutar de la mejor propuesta gastronómica de inmigrantes en Buenos Aires.",
    btn_call_reserve: "Llamar +54 11 7216-1226",
    footer_desc: "Honrando las raíces, reinterpretando los recuerdos de cocina familiar con elegancia y distinción.",
    footer_nav_title: "Navegación",
    footer_contact_title: "Contacto & Redes",
    tax_note: "Ley 27.743 - IVA contenido 21%"
  },
  en: {
    tagline: "IMMIGRANT CUISINE",
    reviews_count: "(3400+ reviews)",
    hours_today: "Mon - Sun: 7:00 PM - 12:00 AM",
    nav_about: "Experience",
    nav_menu: "Menu",
    nav_pastrami: "Signature Pastrami",
    nav_reviews: "Reviews",
    nav_location: "Location",
    btn_reserve: "Reserve / Call",
    btn_call_now: "Call +54 11 7216-1226",
    hero_sub: "BUENOS AIRES · PALERMO",
    hero_title: "Tradition reinvented with mastery and passion",
    hero_desc: "A sophisticated interpretation of Jewish and international cuisine. Family recipes elevated with fine dining craftsmanship and an exceptional wine list.",
    btn_explore_menu: "Explore Menu",
    btn_reserve_table: "Reserve Table",
    hl_rating_label: "Google Reviews",
    hl_michelin_val: "Recommended",
    hl_michelin_label: "Michelin Guide",
    hl_artisanal: "Artisanal & Authentic",
    about_subtitle: "Our Essence",
    about_title: "A sensory journey through immigrant culinary heritage",
    about_p1: "Mishiguene pays homage to the emotional memory of immigrant homes, blending oral heritage recipes with technical precision and modern fine dining elegance.",
    about_p2: "In an intimate setting surrounded by dark wood, crisp white tablecloths, and warm ambient lighting, every evening becomes a memorable feast paired with an outstanding wine cellar.",
    feat1_title: "Curated Wine Pairing",
    feat1_desc: "Exclusive labels selected to enhance every nuance of spice and wood smoke.",
    feat2_title: "Wood-Fired Smoking",
    feat2_desc: "Slow roasting techniques over 14 hours with secret spice blends.",
    pastrami_badge: "Flagship Dish",
    pastrami_sub: "Unrivaled Specialty",
    pastrami_title: "Mishiguene Pastrami",
    pastrami_desc: "Our house signature recipe. Beef ribs cured for 10 days in a bath of salt, herbs, and Ras El Hanout spices. Wood-smoked for 4 hours and steam-cooked for 14 continuous hours.",
    pastrami_opt1_title: "Beef Ribs Pastrami",
    pastrami_opt1_desc: "Served with truffle Farfalaj risotto and demiglace sauce (200g / 400g).",
    pastrami_opt2_title: "Pastrami Wellington",
    pastrami_opt2_desc: "Beef short rib pastrami, mushroom duxelles, swiss chard, and Dijon mustard with date demiglace.",
    pastrami_opt3_title: "Pastrami with Latkes",
    pastrami_opt3_desc: "Beef brisket, potato latkes, red wine reduction, fried egg, and onion jam to share.",
    btn_reserve_pastrami: "Book your experience",
    menu_subtitle: "Culinary Menu",
    menu_title: "Our Complete Menu",
    menu_desc: "All prices are in Argentine Pesos (ARS). VAT included (21%).",
    cat_degustacion: "✨ Tasting Menu",
    cat_entradas: "🥗 Appetizers",
    cat_mezze: "🧆 Mezze & Bites",
    cat_principales: "🍲 Seasonal Dishes",
    cat_pastron: "🥩 Signature Pastrami",
    cat_postres: "🍰 Desserts",
    reviews_subtitle: "Testimonials",
    reviews_title: "What our guests say",
    reviews_total_count: "Based on 3400+ reviews on Google",
    loc_subtitle: "Visit Us",
    loc_title: "Location & Hours",
    loc_address_title: "Address",
    btn_open_maps: "Open in Google Maps →",
    loc_hours_title: "Opening Hours",
    day_mon: "Monday",
    day_tue: "Tuesday",
    day_wed: "Wednesday",
    day_thu: "Thursday",
    day_fri: "Friday",
    day_sat: "Saturday",
    day_sun: "Sunday",
    loc_phone_title: "Phone Reservations",
    cta_title: "Experience an unforgettable evening at Mishiguene",
    cta_desc: "Reserve your table in advance to savor the finest immigrant culinary concept in Buenos Aires.",
    btn_call_reserve: "Call +54 11 7216-1226",
    footer_desc: "Honoring roots, reinterpreting family culinary memories with elegance and distinction.",
    footer_nav_title: "Navigation",
    footer_contact_title: "Contact & Social",
    tax_note: "Law 27.743 - VAT 21% included"
  }
};

// FULL MENU DATA (Translated per language)
const menuData = {
  es: {
    degustacion: [
      { name: "MENÚ DEGUSTACIÓN", price: "$135.000 / $142.000", desc: "Un menú elaborado con la más alta selección de los mejores platos de nuestra carta.", badge: "Experiencia Completa" },
      { name: "MARIDAJE DE VINOS", price: "$49.000", desc: "Acompañamiento de etiquetas seleccionadas. Incluye bebidas sin alcohol, infusión o café." },
      { name: "MARIDAJE DE VINOS ALTO", price: "$85.000", desc: "Incluye cóctel de bienvenida, vinos de alta gama, bebidas sin alcohol e infusión o café." },
      { name: "SERVICIO DE PAN", price: "Incluido", desc: "Pan pita, jalá y bagel de Jerusalén, acompañados de pepinos encurtidos, jalea de cebollas y sal marina." }
    ],
    entradas: [
      { name: "LABNE Y TOMATES", price: "$32.900", desc: "Labne de queso de cabra y tomate de temporada, vinagre de sauco, aceite de oliva, miel fresca, anchoa, olivas negras y hierbas." },
      { name: "ENDIVIA, MELÓN Y PEPINOS", price: "$38.000", desc: "Ensalada de endivias, avellanas tostadas, esferas de melón y pepino con vinagreta de ajíes secos, ajo, especias y labne." },
      { name: "BABA GANOUSH", price: "$23.500", desc: "Berenjena ahumada, coulis de tomates, salsa tahina, almendras, zaatar y hierbas frescas." },
      { name: "SABIJ", price: "$23.900", desc: "Berenjena frita, salsa amba de mango fermentado, tahina, sésamo, vinagre, aceite de hierbas y mango." },
      { name: "HUMMUS DE TEMPORADA", price: "$29.500", desc: "Salteado de vegetales de estación, corazones de pollo, ajo, cebolla morada y sumac." },
      { name: "KIBBE DE PESCA DEL DÍA", price: "$26.900", desc: "Tartar de pesca del día, trigo burgol, pilpel juma, aceite de oliva, jugo de lima, nabo y polvo de almendras." },
      { name: "KIBBE", price: "$42.000", desc: "Tartar de lomo de novillo y trigo burgol, salsa harisa, labne, coulis de tomates y croutones de pita frito." },
      { name: "TERRINA DE HÍGADOS DE POLLO", price: "$36.000", desc: "Hígados de pollo, mostaza de Dijon, jalea de cebollas, gribenes, tostadas de jalá, mango encurtido y aceite de trufa." },
      { name: "GUEFILTEFISH", price: "$34.900", desc: "Terrina de pescados, pickles de verduras, salsa jrein, mostaza de Dijon y caviar de zanahoria." },
      { name: "FORSHMAK", price: "$32.000", desc: "Pez limón ahumado sobre tostada de pan jalá, labne de huevo, ciboulette, cebolla encurtida y manzana verde." },
      { name: "MUHAMARA CON LANGOSTINOS", price: "$35.000", desc: "Muhamara, langostinos a la plancha, salsa marroquí y hojas de alcaparra fritas." },
      { name: "FLOR PARA UN MISHIGUENE", price: "$34.900", desc: "Coliflor rostizada al horno con especias, ras el hanout, salsa tahina, tomatillo y pilpel juma." }
    ],
    mezze: [
      { name: "LAFFA", price: "$6.000", desc: "Pan tradicional con zaatar y aceite de oliva extra virgen." },
      { name: "HUMMUS & PUERROS", price: "$15.500", desc: "Hummus de garbanzos y tahina con puerros asados a la leña, yema de huevo, puerro frito y anchoa." },
      { name: "TAHINA", price: "$16.500", desc: "Salsa cremosa a base de sésamo, aceite de oliva y limón." },
      { name: "MELENA DE LEÓN", price: "$28.500 / $29.500", desc: "Hongos melena de león con tahina, pilpel juma, tomatillos y hierbas frescas." },
      { name: "LOX DE TRUCHA", price: "$29.500", desc: "Filet de trucha curado con remolacha, vodka, especias y eneldo fresco." },
      { name: "MUHAMARA", price: "$23.500", desc: "Puré de pimientos asados, nueces crujientes y miga de pan especiada." },
      { name: "STRACCIATELLA", price: "$33.500", desc: "Miel de dátiles, frutillas lactofermentadas y hojas verdes frescas." },
      { name: "ZHOUG", price: "$15.500", desc: "Salsa picante a base de jalapeños tatemados, cilantro, perejil y especias." },
      { name: "COLES DE BRUSELAS", price: "$29.000", desc: "Coles fritas, labneh de dátiles, chiles encurtidos, uvas encurtidas y chips de ajo." },
      { name: "CORAZONES DE POLLO", price: "$23.900", desc: "Salteados con cebolla confitada, jalapeños y mezcla de baharat." },
      { name: "MEZZE SELECCIÓN POR 3", price: "$65.000", desc: "Incluye Laffa, Hummus, Pickles y Muhamara." },
      { name: "MEZZE SELECCIÓN POR 6", price: "$120.000", desc: "Incluye Laffa, Hummus, Pickles, Coles de Bruselas, Zhoug, Babaganoush y Cabutia." }
    ],
    principales: [
      { name: "VARENIKES DE PAPA", price: "$32.900", desc: "Ravioles de papa, schmaltz, gribenes, caldo de pollo reconfortante y cebolla confitada." },
      { name: "RISOTTO DE FARFALAJ", price: "$34.900", desc: "Pasta de centeno cocida en caldo de pollo, condimentada con aceite de trufas, perejil, ajo y cebolla confitada." },
      { name: "BUREKA DE PAPA Y TRUFA", price: "$37.500", desc: "Bureka de masa filo rellena de puré de papas trufadas, espuma de huevos trufados y polvo de hongos." },
      { name: "CHIPIRONES", price: "$42.000", desc: "Salteado de chipirones al anís, morrones asados, acelga, olivas negras y salsa tahina emulsionada." },
      { name: "PESCA DEL DÍA", price: "$62.000", desc: "Servida con salsa beurre blanc de mejillones al pastis, limón en conserva y vegetales de estación." },
      { name: "FARFALAJ DE MAR", price: "$47.000", desc: "Pasta de centeno cocida en caldo de algas wakame con almejas, mejillones, chipirones y langostinos." },
      { name: "POLLITO DE GRANJA", price: "$48.500", desc: "Ahumado a la leña con laca de miel, ajo, jengibre, chucrut de la casa, limón verde y almendras." },
      { name: "OJO DE BIFE MADURADO", price: "$65.000", desc: "Ojo de bife madurado 30 días en seco al grill, crema de coliflor y tahina, costra de queso feta y terrina de tomates." }
    ],
    pastron: [
      { name: "PASTRÓN DE COSTILLAR VACUNO (200g / 400g)", price: "$100.000 / $180.000", desc: "Curado 10 días, ahumado a la leña 4h y cocido al vapor 14h. Servido con Risotto de Farfalaj trufado y demiglace.", badge: "Estrella de la Casa" },
      { name: "WELLINGTON DE PASTRÓN", price: "$115.000", desc: "Pastrón de costillar vacuno, duxelle de hongos, acelga y mostaza de Dijon. Demiglace de dátiles y pimientas." },
      { name: "PASTRÓN CON LATKES", price: "$120.000", desc: "Pecho vacuno, latkes de papa, reducción de vino tinto, huevo frito por persona y jalea de cebollas. Ideal para compartir." }
    ],
    postres: [
      { name: "MALABI DE COCO", price: "$20.000", desc: "Chutney de piña con gochujang, crema de chocolate blanco, lima y ensalada de frutos rojos." },
      { name: "STRUDEL DE MANZANA", price: "$20.000", desc: "Strudel artesanal de manzana, gel de vinagre de la casa y helado de manteca noisette." },
      { name: "BANANA, HALVA Y CABRA", price: "$16.000", desc: "Sablé de avellanas, dulce de leche de cabra, crema suave de banana y halva." },
      { name: "CALABAZA, QUESO AZUL Y MISO", price: "$18.000", desc: "Calabaza nixtamalizada, mousse de queso azul y toffee cremosa de calabaza con miso." },
      { name: "BAKLAVA DE MANDARINA Y LABNEH", price: "$20.000", desc: "Baklava cítrica de mandarina, labneh y toque de anís estrellado." },
      { name: "TORTA MISHIGUENE", price: "$18.000", desc: "Bizcochuelo de cacao y café, cremoso de chocolate blanco, praliné de avellanas y helado de yogur." }
    ]
  },
  en: {
    degustacion: [
      { name: "TASTING MENU", price: "$135.000 / $142.000", desc: "A curated menu featuring the ultimate selection of our signature dishes.", badge: "Full Experience" },
      { name: "WINE PAIRING", price: "$49.000", desc: "Selected wine labels to accompany your meal. Includes non-alcoholic drinks, tea or coffee." },
      { name: "PREMIUM WINE PAIRING", price: "$85.000", desc: "Includes welcome cocktail, high-end wines, non-alcoholic drinks, and tea or coffee." },
      { name: "BREAD SERVICE", price: "Included", desc: "Pita bread, challah, and Jerusalem bagel served with pickled cucumbers, onion jam, and sea salt." }
    ],
    entradas: [
      { name: "LABNEH & TOMATOES", price: "$32.900", desc: "Goat cheese labneh, seasonal tomatoes, elderberry vinegar, olive oil, fresh honey, anchovies, and black olives." },
      { name: "ENDIVE, MELON & CUCUMBER", price: "$38.000", desc: "Endive salad with toasted hazelnuts, melon spheres, cucumber, dried chili vinaigrette, garlic, and labneh." },
      { name: "BABA GANOUSH", price: "$23.500", desc: "Smoked eggplant, tomato coulis, tahini sauce, almonds, za'atar, and fresh herbs." },
      { name: "SABICH", price: "$23.900", desc: "Fried eggplant, fermented mango amba sauce, tahini, sesame seeds, herb oil, and fresh mango." },
      { name: "SEASONAL HUMMUS", price: "$29.500", desc: "Sautéed seasonal vegetables, chicken hearts, garlic, red onion, and sumac." },
      { name: "CATCH OF THE DAY KIBBEH", price: "$26.900", desc: "Fresh fish tartare, bulgur wheat, pilpel juma, olive oil, lime juice, radish, and almond dust." },
      { name: "BEEF KIBBEH", price: "$42.000", desc: "Beef sirloin tartare, bulgur wheat, harissa sauce, labneh, tomato coulis, and fried pita croutons." },
      { name: "CHICKEN LIVER TERRINE", price: "$36.000", desc: "Chicken livers, Dijon mustard, onion jam, gribenes, challah toast, pickled mango, and truffle oil." },
      { name: "GEFILTE FISH", price: "$34.900", desc: "Fish terrine, vegetable pickles, chrein sauce, Dijon mustard, and carrot caviar." },
      { name: "FORSHMAK", price: "$32.000", desc: "Smoked yellowtail on challah toast, egg labneh, chives, pickled red onions, and green apple." },
      { name: "MUHAMMARA WITH PRAWNS", price: "$35.000", desc: "Muhammara spread, grilled prawns, Moroccan sauce, and fried caper leaves." },
      { name: "FLOWER FOR A MISHIGUENE", price: "$34.900", desc: "Oven-roasted spiced cauliflower, Ras el Hanout, tahini sauce, tomatillo, and pilpel juma." }
    ],
    mezze: [
      { name: "LAFFA BREAD", price: "$6.000", desc: "Traditional flatbread topped with za'atar and extra virgin olive oil." },
      { name: "HUMMUS & LEEKS", price: "$15.500", desc: "Chickpea & tahini hummus topped with wood-charred leeks, egg yolk, fried leeks, and anchovy." },
      { name: "TAHINI", price: "$16.500", desc: "Creamy sesame dip with extra virgin olive oil and lemon." },
      { name: "LION'S MANE MUSHROOM", price: "$28.500 / $29.500", desc: "Lion's mane mushrooms with tahini, pilpel juma, tomatillos, and fresh herbs." },
      { name: "TROUT LOX", price: "$29.500", desc: "Beetroot-cured trout fillet infused with vodka, spices, and fresh dill." },
      { name: "MUHAMMARA", price: "$23.500", desc: "Roasted red pepper, walnut, and spiced breadcrumb spread." },
      { name: "STRACCIATELLA", price: "$33.500", desc: "Date honey, lacto-fermented strawberries, and fresh leafy greens." },
      { name: "ZHOUG", price: "$15.500", desc: "Spicy green sauce made with charred jalapeños, cilantro, parsley, and spices." },
      { name: "BRUSSELS SPROUTS", price: "$29.000", desc: "Crispy fried sprouts, date labneh, pickled chilies, pickled grapes, and garlic chips." },
      { name: "CHICKEN HEARTS", price: "$23.900", desc: "Sautéed with confit onions, jalapeños, and baharat spice blend." },
      { name: "MEZZE TRIO SELECTION", price: "$65.000", desc: "Includes Laffa, Hummus, Pickles, and Muhammara." },
      { name: "MEZZE 6-DISH SELECTION", price: "$120.000", desc: "Includes Laffa, Hummus, Pickles, Brussels Sprouts, Zhoug, Babaganoush, and Cabutia." }
    ],
    principales: [
      { name: "POTATO VARENIKES", price: "$32.900", desc: "Potato ravioli dumpling, schmaltz, gribenes, comforting chicken broth, and confit onion." },
      { name: "FARFALAJ RISOTTO", price: "$34.900", desc: "Rye pasta cooked in rich chicken broth, finished with truffle oil, parsley, garlic, and confit onion." },
      { name: "POTATO & TRUFFLE BUREKA", price: "$37.500", desc: "Crispy phyllo pastry filled with truffled potato mash, served with truffled egg foam and mushroom dust." },
      { name: "BABY SQUID (CHIPIRONES)", price: "$42.000", desc: "Anise-sautéed baby squid with roasted peppers, swiss chard, black olives, and garlic-emulsified tahini." },
      { name: "CATCH OF THE DAY", price: "$62.000", desc: "Served with mussel & pastis beurre blanc sauce, preserved lemon, and sautéed seasonal vegetables." },
      { name: "SEAFOOD FARFALAJ", price: "$47.000", desc: "Rye pasta cooked in wakame seaweed broth with clams, mussels, baby squid, prawns, and confit garlic." },
      { name: "FARM CHICKEN", price: "$48.500", desc: "Wood-smoked roasted chicken, honey-ginger glaze, house sauerkraut, lime, and almonds." },
      { name: "DRY-AGED RIBEYE (OJO DE BIFE)", price: "$65.000", desc: "30-day dry-aged grilled ribeye, cauliflower-tahini cream, feta cheese crust, and tomato terrine." }
    ],
    pastron: [
      { name: "BEEF RIB PASTRAMI (200g / 400g)", price: "$100.000 / $180.000", desc: "Cured 10 days, wood-smoked 4h, steam-cooked 14h. Served with truffled Farfalaj Risotto.", badge: "House Flagship" },
      { name: "PASTRAMI WELLINGTON", price: "$115.000", desc: "Beef rib pastrami wrapped in puff pastry with mushroom duxelles, swiss chard, Dijon mustard, and date demiglace." },
      { name: "PASTRAMI WITH LATKES", price: "$120.000", desc: "Beef brisket, potato latkes, red wine reduction, fried egg per person, and onion jam. Perfect for sharing." }
    ],
    postres: [
      { name: "COCONUT MALABI", price: "$20.000", desc: "Pineapple chutney with gochujang, white chocolate lime cream, and fresh berry salad." },
      { name: "APPLE STRUDEL", price: "$20.000", desc: "Artisanal apple strudel, house vinegar gel, and noisette butter ice cream." },
      { name: "BANANA, HALVA & GOAT MILK", price: "$16.000", desc: "Hazelnut sablé, goat milk dulce de leche, banana cream, and halva." },
      { name: "PUMPKIN, BLUE CHEESE & MISO", price: "$18.000", desc: "Nixtamalized pumpkin, blue cheese mousse, and pumpkin-miso toffee." },
      { name: "MANDARIN & LABNEH BAKLAVA", price: "$20.000", desc: "Citrus mandarin baklava, fresh labneh, and a touch of star anise." },
      { name: "MISHIGUENE CAKE", price: "$18.000", desc: "Cocoa & coffee sponge cake, white chocolate cream, hazelnut praline, and yogurt ice cream." }
    ]
  }
};

// SELECTED REVIEWS DATA
const reviewsData = {
  es: [
    {
      author: "Anna Kuhn",
      rating: 5,
      text: "¡Bruno fue el mejor! La comida fue increíble. Los mezzes eran emocionantes y totalmente diferentes. El plato de labne con tomate fue maravilloso, y el pastrami con el risotto, el mejor que he probado jamás."
    },
    {
      author: "Tony Palazzolo",
      rating: 5,
      text: "Quería probar este restaurante desde que supe que vendría a Buenos Aires. Mi esposa y yo reservamos y superó todas mis expectativas. La atención de Mariano, el Pastrami Wellington y el postre de calabaza con queso azul fueron memorables."
    },
    {
      author: "David J Lee",
      rating: 5,
      text: "Un lugar grandioso para experimentar la auténtica cocina judía. La comida y el servicio fueron excepcionales. Mi favorito absoluto fue el lox de trucha y el hummus con puerros. ¡Muy recomendado!"
    },
    {
      author: "Emilce Paez",
      rating: 5,
      text: "¡Este lugar es una BOMBA! La comida es espectacular. Como pescetariana probé la ensalada de endivias y el Forshmak. Bruno y Mariano explicaron el menú a la perfección. ¡Volveré sin duda!"
    },
    {
      author: "Jonathan Cole",
      rating: 5,
      text: "Una experiencia gastronómica fantástica, de las mejores en nuestro mes por Argentina. Gran selección de platos con toques ashkenazí y sefardí, ambiente deslumbrante y una presentación impecable."
    }
  ],
  en: [
    {
      author: "Anna Kuhn",
      rating: 5,
      text: "Bruno was the best! Food was amazing too! Mezzes were exciting and different. Labneh dish wonderful with the tomato! Pastrami with the risotto was maybe the best risotto I have ever had."
    },
    {
      author: "Tony Palazzolo",
      rating: 5,
      text: "I wanted to try this restaurant ever since I knew I was going to Buenos Aires. The Pastrami Wellington, the Baba Ganoush substitution, and the pumpkin with blue cheese dessert exceeded all expectations!"
    },
    {
      author: "David J Lee",
      rating: 5,
      text: "Great place to try Jewish cuisine. The food and service were exceptional. The maître d' was so helpful. My favorites were the trout lox and hummus with leek. Superb!"
    },
    {
      author: "Emilce Paez",
      rating: 5,
      text: "This place is BOMB! The food is so good as a pescatarian. Bruno and Mariano were the best explaining the menu based on what we were craving!"
    },
    {
      author: "Jonathan Cole",
      rating: 5,
      text: "Fantastic dining experience - one of our best during a month in Argentina. Fantastic selection of Jewish dishes with both Ashkenazi and Sephardic flare. Gorgeous interiors."
    }
  ]
};

// CURRENT STATE
let currentLang = 'es';
let currentCategory = 'degustacion';

// DOM ELEMENTS
const burgerBtn = document.getElementById('burgerBtn');
const mobileDrawer = document.getElementById('mobileDrawer');
const langButtons = document.querySelectorAll('.lang-btn');
const menuGrid = document.getElementById('menuGrid');
const reviewsGrid = document.getElementById('reviewsGrid');
const menuTabButtons = document.querySelectorAll('.menu-tab-btn');

// INITIALIZE APP
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  initNavigation();
  initLanguage();
  renderMenu();
  renderReviews();
});

// NAVIGATION LOGIC
function initNavigation() {
  burgerBtn.addEventListener('click', () => {
    mobileDrawer.classList.toggle('open');
    burgerBtn.classList.toggle('active');
  });

  // Close drawer on link click
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
    });
  });

  // Category Tab Click
  menuTabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      menuTabButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentCategory = e.target.getAttribute('data-category');
      renderMenu();
    });
  });
}

// LANGUAGE SWITCHER LOGIC
function initLanguage() {
  langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedLang = e.target.getAttribute('data-lang');
      if (selectedLang === currentLang) return;

      currentLang = selectedLang;
      langButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');

      updateStaticText();
      renderMenu();
      renderReviews();
    });
  });
}

function updateStaticText() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang] && translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });
}

// RENDER MENU ITEMS
function renderMenu() {
  if (!menuGrid) return;
  menuGrid.innerHTML = '';

  const items = menuData[currentLang][currentCategory] || [];

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'menu-item-card';

    card.innerHTML = `
      <div>
        <div class="item-top">
          <h3 class="item-title">${item.name}</h3>
          <span class="item-price">${item.price}</span>
        </div>
        <p class="item-desc">${item.desc}</p>
      </div>
      ${item.badge ? `<span class="item-badge-tasting">${item.badge}</span>` : ''}
    `;

    menuGrid.appendChild(card);
  });
}

// RENDER REVIEWS
function renderReviews() {
  if (!reviewsGrid) return;
  reviewsGrid.innerHTML = '';

  const reviews = reviewsData[currentLang] || [];

  reviews.forEach(rev => {
    const card = document.createElement('div');
    card.className = 'review-card';

    card.innerHTML = `
      <div>
        <div class="review-stars">★★★★★</div>
        <p class="review-text">"${rev.text}"</p>
      </div>
      <div class="review-author">— ${rev.author}</div>
    `;

    reviewsGrid.appendChild(card);
  });
}