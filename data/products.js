// ===================================================
// BANSILAL TEXTILE — Product Data
// All product categories derived from Stitch design
// ===================================================

const PRODUCTS = [
  // =================== ROYAL SAREES ===================
  {
    id: "s001",
    name: "Yeola Paithani Silk Saree — Peacock Pallu",
    slug: "yeola-paithani-silk-saree-peacock-pallu",
    category: "royal-sarees",
    categoryLabel: "Royal Sarees",
    price: 24500,
    compareAtPrice: 32000,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD50VDD-RWefQcKofFaIJ-Y1ZRexILcmf40KUVi1eOA-VC-arRegjVX1yOTLO1_c-xqZt516jQAsE6VvqGUW6CKUbahNAEJ14okanbI1T6hoiK5pUVtX8PunHo2P7lXLSTvr6FwzfG2lZ71bRm-Zj2AbMPKPCYq1Nj2FK90nedo2ncELU2fCkne9FsdCURF9rDBo4X568Q8c2dAUy5FpezMQtGkX366FinE5cXMMNPM_u4lPrZBqerycA",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDSM9Wrcxgtr6vJ6zx4ySgrLB9hppvTKYGSC2My_1EiZKA_Owj37dwRiIMZLC4gSLbeIl1pvzLyh-D6ZeooIz1GAMOM8VDXfGQdQ20oFbzUfER5ogw3YI5EH6ePuIPtQ9jmFpmeqxrrLnHb_2-S-PsNVGglFvUPQtZU4UztgBnr2_tfcBMZx1OKYZRysnlx_z7M3r-HI9ugN-WEhXQcuw3mzkC86UWrKwtBo72BTp8kmwGZSB3aSsa3Fg"
    ],
    description: "A masterpiece of Yeola craftsmanship, this royal Paithani saree features the iconic peacock pallu woven with real 22-carat gold zari threads. Each saree takes 3–6 months to complete on traditional pit looms by master weavers of Yeola, Maharashtra.",
    fabric: "Pure Mulberry Silk with Real Gold Zari",
    weave: "Handwoven — Yeola Paithani",
    colors: ["Royal Purple", "Peacock Green", "Crimson Red"],
    selectedColor: "Royal Purple",
    sizes: ["5.5m", "6m", "6.5m", "9m (Nauvari)"],
    stock: 8,
    rating: 4.9,
    reviewCount: 142,
    tags: ["paithani", "bridal", "silk", "handloom", "zari", "new-arrival"],
    badges: ["SILK MARK", "HANDLOOM CERTIFIED"],
    featured: true,
    bestseller: true,
    newArrival: false
  },
  {
    id: "s002",
    name: "Kanjivaram Bridal Silk — Temple Border",
    slug: "kanjivaram-bridal-silk-temple-border",
    category: "royal-sarees",
    categoryLabel: "Royal Sarees",
    price: 18900,
    compareAtPrice: 23500,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBTgZmfb1uvi0upVYG0ccKdNHdB4RjnPZwQzpUKMtE9udoaGaMpZrVNPGJqk8wWkOZ0JoIkeHi1FRkwFcSmBx_AIAaWy8Sjh-EauACfeJkwIMJfCFE-HewVwqkbtvZGGy2C_y6jVK73C55OTk9Y7965tE9ctbm2gx5lmzjufHNhxLIF959v6ntxUIhZ4rr63oM_i7q4qYULsk0IvyxCditgXaEQWEap5xhmntsZmVSI3VmaZ6sdcalfhA"
    ],
    description: "Authentic Kanjivaram silk with traditional temple border, woven in Kanchipuram by master weavers using contrast zari. Heavy silk weight (650g+) with rich lustre that deepens over generations.",
    fabric: "Pure Kanchipuram Silk",
    weave: "Handwoven — Kanjivaram",
    colors: ["Magenta Pink", "Navy Blue", "Emerald Green", "Ruby Red"],
    selectedColor: "Magenta Pink",
    sizes: ["5.5m", "6m"],
    stock: 12,
    rating: 4.8,
    reviewCount: 89,
    tags: ["kanjivaram", "bridal", "silk", "temple-border"],
    badges: ["SILK MARK"],
    featured: true,
    bestseller: true,
    newArrival: false
  },
  {
    id: "s003",
    name: "Banarasi Brocade Saree — Jaal Motif",
    slug: "banarasi-brocade-saree-jaal-motif",
    category: "royal-sarees",
    categoryLabel: "Royal Sarees",
    price: 12800,
    compareAtPrice: null,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCrWACsfJG_Dd2hDR7RN4C2BYTpI3aeAA7l1eXTyNnBfxNqniS-PmKbVO2yR-cSCE9RmY5KFf3Ixn9IN6Iq5Mk2148ZTMe5Jzk0OuJJVvC6tPqS0XHjopJ_ey1mY8Y10L8Cknhi9WZDEVXIrMbEAIzbDkpjOjhDMvNDWc89sER1oeKg4MEz2jOjp9wfWcnlrJOI6uinjD6dCA7ckQZ13MiYl_rFKHOuGjNgHdmJUcYSM5_zu-iAX2T4g"
    ],
    description: "Genuine Banarasi brocade featuring the classic jaal (floral net) motif in pure silver and gold zari. Woven in Varanasi's old city by sixth-generation weavers.",
    fabric: "Pure Banarasi Silk with Silver Zari",
    weave: "Handwoven — Banarasi Brocade",
    colors: ["Ivory Cream", "Champagne Gold", "Maroon"],
    selectedColor: "Ivory Cream",
    sizes: ["5.5m", "6m"],
    stock: 15,
    rating: 4.7,
    reviewCount: 67,
    tags: ["banarasi", "bridal", "brocade", "silver-zari"],
    badges: ["PURE SILK"],
    featured: false,
    bestseller: false,
    newArrival: true
  },
  {
    id: "s004",
    name: "Chanderi Silk Cotton Saree — Floral Butis",
    slug: "chanderi-silk-cotton-saree-floral-butis",
    category: "royal-sarees",
    categoryLabel: "Royal Sarees",
    price: 4200,
    compareAtPrice: 5500,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDKdRVTaC8LPnLpOIbOtNxojgS0FngNOX3tFUnnRANiDeyW4Iq7hyBo1312SH7QNGBSOhydZLOslM1RR97P3jgqhhsITeFUEF_kXOiwdFMMrl3erWNV-qEibpWbY_DgKomzFcDIK25UtwxG-t-ihooa6tXuf98kLPOGvH_LjVxBK6KHY_Uwh9z_TXxL43dtvPxW8MUbbFy7uWeh7llChzUDeO-b4CeIUzzPkmZ7qDFNg8PCmBh8lFeeag"
    ],
    description: "Delicate Chanderi saree combining the sheen of silk with the comfort of cotton. Lightweight and perfect for day events, festive occasions, or office wear with subtle gold buti motifs.",
    fabric: "Silk Cotton Blend (60% Silk, 40% Cotton)",
    weave: "Handwoven — Chanderi",
    colors: ["Pastel Pink", "Mint Green", "Sky Blue", "Lemon Yellow"],
    selectedColor: "Pastel Pink",
    sizes: ["5.5m", "6m"],
    stock: 24,
    rating: 4.6,
    reviewCount: 203,
    tags: ["chanderi", "everyday", "lightweight", "festive"],
    badges: [],
    featured: false,
    bestseller: true,
    newArrival: false
  },
  {
    id: "s005",
    name: "Traditional Nauvari Silk — 9-Yard Ceremonial",
    slug: "traditional-nauvari-silk-9-yard-ceremonial",
    category: "royal-sarees",
    categoryLabel: "Royal Sarees",
    price: 8500,
    compareAtPrice: null,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCrWACsfJG_Dd2hDR7RN4C2BYTpI3aeAA7l1eXTyNnBfxNqniS-PmKbVO2yR-cSCE9RmY5KFf3Ixn9IN6Iq5Mk2148ZTMe5Jzk0OuJJVvC6tPqS0XHjopJ_ey1mY8Y10L8Cknhi9WZDOeVXIrMbEAIzbDkpjOjhDMvNDWc89sER1oeKg4MEz2jOjp9wfWcnlrJOI6uinjD6dCA7ckQZ13MiYl_rFKHOuGjNgHdmJUcYSM5_zu-iAX2T4g"
    ],
    description: "The authentic 9-yard Maharashtrian Nauvari saree in auspicious turmeric yellow with emerald green contrast border. Essential for Marathi weddings, pujas, and traditional ceremonies.",
    fabric: "Pure Silk — Yeola Origin",
    weave: "Traditional Maharashtrian Nauvari",
    colors: ["Turmeric Yellow", "Auspicious Red", "Sacred Green"],
    selectedColor: "Turmeric Yellow",
    sizes: ["9m"],
    stock: 10,
    rating: 4.9,
    reviewCount: 178,
    tags: ["nauvari", "maharashtrian", "wedding", "ceremony", "traditional"],
    badges: ["HANDLOOM CERTIFIED"],
    featured: true,
    bestseller: false,
    newArrival: false
  },

  // =================== DRESS MATERIALS ===================
  {
    id: "d001",
    name: "Hand-Embroidered Chanderi Suit Set",
    slug: "hand-embroidered-chanderi-suit-set",
    category: "dress-materials",
    categoryLabel: "Dress Materials",
    price: 5800,
    compareAtPrice: 7200,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDqT5QqjAI07_ijBF_NeQLyLD5U5JkoaQ7wUpt7jJUqNyJb2iKexzxadsIHRCIrIPN6bE1c-fGflSnKpoUan8FaMFBPkGddK4utBTjEs4RO1587GebxgKRAFBwV2ILMU1ONsoRkvlDNCrWFSdFEFmQba59QUcUlYY7MWs3e2khyo9h0IAgixWqaPMu1iu0hyE-r3eCi4J8Qfdxx8-QIRbI76B1XMGyxRW-naxMrImZUX-tWi3Ke_0xVdg"
    ],
    description: "Unstitched 3-piece suit set — top, bottom, and dupatta — in pure Chanderi with hand-embroidered threadwork. Custom stitching available in-store within 7 working days.",
    fabric: "Pure Chanderi Silk Cotton",
    weave: "Handwoven with Hand Embroidery",
    colors: ["Rose Pink", "Sage Green", "Peach"],
    selectedColor: "Rose Pink",
    sizes: ["Unstitched (Standard 2.5m top, 2m bottom, 2.25m dupatta)"],
    stock: 18,
    rating: 4.7,
    reviewCount: 94,
    tags: ["suit-set", "chanderi", "unstitched", "embroidery"],
    badges: ["CUSTOM FIT"],
    featured: true,
    bestseller: false,
    newArrival: true
  },
  {
    id: "d002",
    name: "Kashmiri Tilla Embroidered Salwar Set",
    slug: "kashmiri-tilla-embroidered-salwar-set",
    category: "dress-materials",
    categoryLabel: "Dress Materials",
    price: 9200,
    compareAtPrice: null,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDKdRVTaC8LPnLpOIbOtNxojgS0FngNOX3tFUnnRANiDeyW4Iq7hyBo1312SH7QNGBSOhydZLOslM1RR97P3jgqhhsITeFUEF_kXOiwdFMMrl3erWNV-qEibpWbY_DgKomzFcDIK25UtwxG-t-ihooa6tXuf98kLPOGvH_LjVxBK6KHY_Uwh9z_TXxL43dtvPxW8MUbbFy7uWeh7llChzUDeO-b4CeIUzzPkmZ7qDFNg8PCmBh8lFeeag"
    ],
    description: "Authentic Kashmiri Tilla embroidered salwar kameez in luxurious wool blend. The tilla (metallic thread) work is done by expert artisans from Srinagar using centuries-old patterns.",
    fabric: "Premium Pashmina Blend with Tilla (Silver Thread) Work",
    weave: "Hand Embroidered — Kashmiri",
    colors: ["Deep Maroon", "Royal Blue", "Forest Green"],
    selectedColor: "Deep Maroon",
    sizes: ["Unstitched — Small", "Unstitched — Medium", "Unstitched — Large"],
    stock: 7,
    rating: 4.8,
    reviewCount: 45,
    tags: ["kashmiri", "tilla", "premium", "embroidered"],
    badges: ["ARTISAN CRAFT"],
    featured: false,
    bestseller: false,
    newArrival: true
  },

  // =================== WOMEN'S COUTURE ===================
  {
    id: "w001",
    name: "Maharani Bridal Lehenga — Velvet Zardozi",
    slug: "maharani-bridal-lehenga-velvet-zardozi",
    category: "womens-couture",
    categoryLabel: "Women's Couture",
    price: 48000,
    compareAtPrice: 62000,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLM-i-e4GItriXMYvw5g_ztyqMuoXCtfs8MaSEVg1oEZQ-WLr53pZWM_KIv9GNbChgKOWhZV02cernWEZMfZpWIX2-HLdP3GqUWRxe1CGvwYolQoLmmwNKjj0DppPhnHrCHuRknioFZxjWoBv35tBxFUUkxm_F9rNmydYYLiC7cDflfmKE97nf1zVsraMM2ZeGBdNKeMKwIc5fe30fHAXv3dxvCq1aZP42LzRcNSW40W7_qeSOTMm9Og",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAOxQlmFh3z_UXrvoWZq1hEj9QMqqAft0z8lYGtKXN-gfsTv4ENMegm7_mU29ig3_Ip58idvYTJYjtlMsXnhVgIIKc81nio9lcNA_scBpyWskT9d10iBqSuI0RX3mWJBtYiJW7SGOL_XZgguOlqGIhZnuf5822BvCQuG0Ea7HQoQ2vVIWkOpZmhEsbLh1smac9FaNB5KI9v06hjysBP3H2uW7hE7AX4AD3ZoYpmPaspis8RtLIMbymZpw"
    ],
    description: "A regal bridal lehenga in deep crimson velvet with dense zardozi hand-embroidery using semi-precious stones and real gold threads. Complete set includes lehenga, choli, and dupatta. Takes 45–60 days for custom sizing.",
    fabric: "Pure Velvet with Semi-Precious Stone Zardozi Embroidery",
    weave: "Hand Embroidered — Mughal Zardozi",
    colors: ["Crimson Red", "Royal Navy", "Deep Maroon"],
    selectedColor: "Crimson Red",
    sizes: ["XS (30-32)", "S (32-34)", "M (34-36)", "L (36-38)", "XL (38-40)", "Custom"],
    stock: 5,
    rating: 5.0,
    reviewCount: 28,
    tags: ["bridal", "lehenga", "zardozi", "velvet", "premium"],
    badges: ["BRIDAL READY", "BESPOKE AVAILABLE"],
    featured: true,
    bestseller: true,
    newArrival: false
  },
  {
    id: "w002",
    name: "Floor-Length Anarkali — Pure Organza",
    slug: "floor-length-anarkali-pure-organza",
    category: "womens-couture",
    categoryLabel: "Women's Couture",
    price: 6800,
    compareAtPrice: 8900,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLM-i-e4GItriXMYvw5g_ztyqMuoXCtfs8MaSEVg1oEZQ-WLr53pZWM_KIv9GNbChgKOWhZV02cernWEZMfZpWIX2-HLdP3GqUWRxe1CGvwYolQoLmmwNKjj0DppPhnHrCHuRknioFZxjWoBv35tBxFUUkxm_F9rNmydYYLiC7cDflfmKE97nf1zVsraMM2ZeGBdNKeMKwIc5fe30fHAXv3dxvCq1aZP42LzRcNSW40W7_qeSOTMm9Og"
    ],
    description: "Ethereal floor-length Anarkali in pure organza with delicate sequin work at the hemline. Perfect for receptions, sangeets, and festive celebrations.",
    fabric: "Pure Organza with Sequence Work",
    weave: "Ready-to-wear (alteration available)",
    colors: ["Champagne Gold", "Blush Pink", "Powder Blue"],
    selectedColor: "Champagne Gold",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    stock: 20,
    rating: 4.7,
    reviewCount: 112,
    tags: ["anarkali", "festive", "organza", "reception"],
    badges: ["FESTIVE EDIT"],
    featured: false,
    bestseller: true,
    newArrival: false
  },
  {
    id: "w003",
    name: "Sharara Set — Georgette with Embroidered Kameez",
    slug: "sharara-set-georgette-embroidered-kameez",
    category: "womens-couture",
    categoryLabel: "Women's Couture",
    price: 7500,
    compareAtPrice: null,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDqT5QqjAI07_ijBF_NeQLyLD5U5JkoaQ7wUpt7jJUqNyJb2iKexzxadsIHRCIrIPN6bE1c-fGflSnKpoUan8FaMFBPkGddK4utBTjEs4RO1587GebxgKRAFBwV2ILMU1ONsoRkvlDNCrWFSdFEFmQba59QUcUlYY7MWs3e2khyo9h0IAgixWqaPMu1iu0hyE-r3eCi4J8Qfdxx8-QIRbI76B1XMGyxRW-naxMrImZUX-tWi3Ke_0xVdg"
    ],
    description: "Contemporary sharara set with heavy georgette dupatta and embroidered short kameez. The flared palazzo silhouette is perfect for haldi, mehendi, and daytime functions.",
    fabric: "Heavy Georgette with Mirror and Thread Work",
    weave: "Semi-stitched (final fitting available)",
    colors: ["Mustard Yellow", "Terracotta", "Sage Green"],
    selectedColor: "Mustard Yellow",
    sizes: ["S", "M", "L", "XL"],
    stock: 14,
    rating: 4.5,
    reviewCount: 77,
    tags: ["sharara", "festive", "georgette", "haldi"],
    badges: [],
    featured: false,
    bestseller: false,
    newArrival: true
  },

  // =================== MEN'S REGALIA ===================
  {
    id: "m001",
    name: "Royal Champagne Groom Sherwani — Pure Mulberry Silk",
    slug: "royal-champagne-groom-sherwani-mulberry-silk",
    category: "mens-regalia",
    categoryLabel: "Men's Regalia",
    price: 32000,
    compareAtPrice: 42000,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCficxIjo2utK8TUrgwjDioreb7iXo0D6tA6uL61rSr2r9Wpmj2-aY5i5iIHQNgQdChXgoVNBylaWv0L6oyXOAYBMFMriEYZNJUJfT_zRUmdbetj6-SFFWLb7i41apqATZV3pv6rYfayte6GLA9EBJpYhPoS-RgOkAjDxsbK-yktBH-ItvASaYYHe9Wt2Nt02NwlaRbVKaQNkBPTZYR5NLetKENPbChWvr5Ij8lvdRJr_wBUFhalrTnTQ",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAOJTUkpNsTZZ7CALJMghV0aBLfANe4lBKPsw1MsFM6xVxv5AC4EJuKPQI0NhhqKlMTJlQUt34wb8ioRpxpciafXSDriA6qwk50KvF83H-vAm8_BFFOvO0mMxIrfk0CzSHmfd3EDgNsep3Gk-FPaITvFPHuTa06IwpW6up2k6spIrDEccAHBLUM7MqPLoDwAGA-AZSKsuzLQuErt3BvbTRsQBnnLPCOO6zmqEJhj_J0r4vTTEF0jZjcbA"
    ],
    description: "An ivory raw silk sherwani with subtle self threadwork and pearl hand embroidery, matched with gold stole and churidar. The quintessential groom's ensemble for Maharashtrian and North Indian weddings.",
    fabric: "Pure Mulberry Silk — Ivory Raw Silk",
    weave: "Machine-assisted with hand embroidery finishing",
    colors: ["Ivory Cream", "Champagne Gold", "Off-White Pearl"],
    selectedColor: "Ivory Cream",
    sizes: ["38", "40", "42", "44", "46", "Custom Bespoke"],
    stock: 6,
    rating: 4.9,
    reviewCount: 63,
    tags: ["sherwani", "groom", "bridal", "silk", "wedding"],
    badges: ["ROYAL WEAR", "BESPOKE AVAILABLE"],
    featured: true,
    bestseller: true,
    newArrival: false
  },
  {
    id: "m002",
    name: "Banarasi Silk Kurta-Pajama — Gold Buti Weave",
    slug: "banarasi-silk-kurta-pajama-gold-buti",
    category: "mens-regalia",
    categoryLabel: "Men's Regalia",
    price: 8400,
    compareAtPrice: 10500,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD823SdQQ_DhqE5hnba4nVLTaWeiHIbiIKGWh9sD1ix4wy_7QYEAM40dvJpUUN-Lh4IvqUerextlmSYqZWX3wtAvBJLrmY_tRuDJHaJI5JAJ5ghCwsU2vEopYL8QwyriVSD_4pp5gvgmP0-lXDMXMDUu_qA8U_L3SSBP9oX-j3BW6TK7Lk_i507sc9MOApSOK--6kl8XOJbdr5w-cGuVyleRzJuI-oMf1cGyPSsa7MKUuqqu8IA0Us_gA"
    ],
    description: "Luxurious Banarasi silk kurta with woven gold butis, paired with matching silk churidar. Perfect for sangeet, engagement, and Diwali festive occasions.",
    fabric: "Pure Banarasi Silk with Woven Gold Buti",
    weave: "Handwoven — Banarasi",
    colors: ["Rich Maroon", "Royal Blue", "Emerald Green", "Black"],
    selectedColor: "Rich Maroon",
    sizes: ["38", "40", "42", "44", "46"],
    stock: 22,
    rating: 4.7,
    reviewCount: 134,
    tags: ["kurta", "banarasi", "festive", "silk"],
    badges: ["PURE SILK"],
    featured: false,
    bestseller: true,
    newArrival: false
  },
  {
    id: "m003",
    name: "Modi Jacket + Nehru Kurta — Linen Blend",
    slug: "modi-jacket-nehru-kurta-linen-blend",
    category: "mens-regalia",
    categoryLabel: "Men's Regalia",
    price: 4200,
    compareAtPrice: null,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAOJTUkpNsTZZ7CALJMghV0aBLfANe4lBKPsw1MsFM6xVxv5AC4EJuKPQI0NhhqKlMTJlQUt34wb8ioRpxpciafXSDriA6qwk50KvF83H-vAm8_BFFOvO0mMxIrfk0CzSHmfd3EDgNsep3Gk-FPaITvFPHuTa06IwpW6up2k6spIrDEccAHBLUM7MqPLoDwAGA-AZSKsuzLQuErt3BvbTRsQBnnLPCOO6zmqEJhj_J0r4vTTEF0jZjcbA"
    ],
    description: "Smart Modi jacket paired with mandarin collar Nehru kurta in breathable linen blend. A modern classic for political events, casual ethnic occasions, and corporate festive wear.",
    fabric: "Premium Linen-Cotton Blend",
    weave: "Machine-woven (Premium Quality)",
    colors: ["Slate Grey", "Navy Blue", "Olive Khaki", "Cream White"],
    selectedColor: "Slate Grey",
    sizes: ["38", "40", "42", "44", "46", "48"],
    stock: 35,
    rating: 4.5,
    reviewCount: 201,
    tags: ["modi-jacket", "nehru", "everyday", "linen"],
    badges: [],
    featured: false,
    bestseller: false,
    newArrival: true
  },

  // =================== CHILDREN'S PAVILIONS ===================
  {
    id: "c001",
    name: "Silk Dhoti Kurta Set — Boys Festive",
    slug: "silk-dhoti-kurta-set-boys-festive",
    category: "childrens-pavilions",
    categoryLabel: "Children's Pavilions",
    price: 2800,
    compareAtPrice: 3500,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBqjMwsXbjujAt2T-IF8s24pUuud5WKnaPB3hE9YNOlkNlNhH0QULMKI9mcEa-WxBZ0Sk0eo18TiCrm_aNvBKimW3xrgm5sc0cx0nIQ-yP5COqB1jYbyF_c0VK17IsV6c1T8EIMZMmHVvpbIhp4NB6A_s0vX1zhS-815ohywTnpbus0INABY0gEPc5OGsYjF7Am40ne1UwryifFOfyQZlkdnP7QsLm4PZn-VHld9hQ6EgiDhc7auTST_A"
    ],
    description: "Traditional Indian boys festive set — vibrant yellow silk dhoti with matching kurta and angavastram stole. Made with soft breathable silk to keep little ones comfortable during long ceremonies.",
    fabric: "Soft Silk Blend (Comfortable for Children)",
    weave: "Machine-woven — Festival Edition",
    colors: ["Vibrant Yellow", "Royal Purple", "Festive Orange"],
    selectedColor: "Vibrant Yellow",
    sizes: ["2-3 Years", "3-4 Years", "5-6 Years", "7-8 Years", "9-10 Years"],
    stock: 30,
    rating: 4.8,
    reviewCount: 156,
    tags: ["kids", "boys", "dhoti-kurta", "festive", "silk"],
    badges: ["COMFORT COTTON"],
    featured: false,
    bestseller: true,
    newArrival: false
  },
  {
    id: "c002",
    name: "Parkar Polka — Traditional Marathi Girls Dress",
    slug: "parkar-polka-traditional-marathi-girls-dress",
    category: "childrens-pavilions",
    categoryLabel: "Children's Pavilions",
    price: 2400,
    compareAtPrice: null,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBqjMwsXbjujAt2T-IF8s24pUuud5WKnaPB3hE9YNOlkNlNhH0QULMKI9mcEa-WxBZ0Sk0eo18TiCrm_aNvBKimW3xrgm5sc0cx0nIQ-yP5COqB1jYbyF_c0VK17IsV6c1T8EIMZMmHVvpbIhp4NB6A_s0vX1zhS-815ohywTnpbus0INABY0gEPc5OGsYjF7Am40ne1UwryifFOfyQZlkdnP7QsLm4PZn-VHld9hQ6EgiDhc7auTST_A"
    ],
    description: "Authentic Parkar Polka — the traditional Maharashtrian dress for young girls, featuring bright pink cotton with gold zari border. Perfect for Ganesh Chaturthi, weddings, and school cultural programs.",
    fabric: "Premium Cotton with Zari Border",
    weave: "Traditional Maharashtrian",
    colors: ["Bright Pink", "Peacock Blue", "Mango Yellow"],
    selectedColor: "Bright Pink",
    sizes: ["2-3 Years", "4-5 Years", "6-7 Years", "8-9 Years", "10-11 Years"],
    stock: 25,
    rating: 4.9,
    reviewCount: 189,
    tags: ["kids", "girls", "parkar-polka", "maharashtrian", "traditional"],
    badges: ["MAHARASHTRIAN AUTHENTIC"],
    featured: true,
    bestseller: true,
    newArrival: false
  },

  // =================== TEXTILES & BOLTS ===================
  {
    id: "t001",
    name: "Pure Tussar Silk Fabric — By the Meter",
    slug: "pure-tussar-silk-fabric-by-meter",
    category: "textiles-bolts",
    categoryLabel: "Textiles & Bolts",
    price: 1200,
    compareAtPrice: null,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADtTyoQ1dk2e6Oj3t_XPDZHWLPfyG8xDrkFWgg9lXJXlUmooLslcfxTMK4DHymUwsH4rKjqaFJX1ItbsMJBGGhYelwgix0RVPfZjCwncR3vmSDtw2q7Am_cz4dt9j0qwbI73p8ci0dhmOvq6lk7jUYFLmVHHo1YxE56eJlBT2W1sA_NwIScumBCYKcuONWfrpcwbXgsEuGGN4mYeFZ0YcJ5x2VL4aGr49d5n_peidnXqRNeLnW041feQ"
    ],
    description: "Natural Tussar silk (Kosa silk) fabric sold by the meter. With its characteristic rough texture and natural ecru to champagne color, ideal for salwar suits, saree blouses, and home furnishings.",
    fabric: "100% Pure Tussar Silk",
    weave: "Handwoven — Jharkhand Origin",
    colors: ["Natural Ecru", "Champagne", "Sand Gold", "Slate Brown"],
    selectedColor: "Natural Ecru",
    sizes: ["1m", "2m", "3m", "5m", "10m (Wholesale)"],
    stock: 500,
    rating: 4.6,
    reviewCount: 312,
    tags: ["fabric", "tussar", "silk", "by-meter", "wholesale"],
    badges: ["50,000+ BOLTS"],
    featured: false,
    bestseller: true,
    newArrival: false,
    priceUnit: "per meter"
  },
  {
    id: "t002",
    name: "Banarasi Brocade Fabric — Gold Jaal Weave",
    slug: "banarasi-brocade-fabric-gold-jaal-weave",
    category: "textiles-bolts",
    categoryLabel: "Textiles & Bolts",
    price: 2800,
    compareAtPrice: 3400,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADtTyoQ1dk2e6Oj3t_XPDZHWLPfyG8xDrkFWgg9lXJXlUmooLslcfxTMK4DHymUwsH4rKjqaFJX1ItbsMJBGGhYelwgix0RVPfZjCwncR3vmSDtw2q7Am_cz4dt9j0qwbI73p8ci0dhmOvq6lk7jUYFLmVHHo1YxE56eJlBT2W1sA_NwIScumBCYKcuONWfrpcwbXgsEuGGN4mYeFZ0YcJ5x2VL4aGr49d5n_peidnXqRNeLnW041feQ"
    ],
    description: "Premium Banarasi brocade with intricate gold jaal (lattice) weave, sold by the meter. Perfect for festive blouses, lehenga fabric, and curtain panels.",
    fabric: "Pure Silk with Gold Zari Brocade",
    weave: "Handwoven — Varanasi",
    colors: ["Ruby Red", "Jade Green", "Midnight Blue", "Black Gold"],
    selectedColor: "Ruby Red",
    sizes: ["1m", "2m", "3m", "5m"],
    stock: 200,
    rating: 4.8,
    reviewCount: 145,
    tags: ["fabric", "banarasi", "brocade", "gold-zari", "by-meter"],
    badges: ["PURE SILK"],
    featured: false,
    bestseller: false,
    newArrival: false,
    priceUnit: "per meter"
  },
  {
    id: "t003",
    name: "Fine Khadi Cotton — Hand Spun Natural",
    slug: "fine-khadi-cotton-hand-spun-natural",
    category: "textiles-bolts",
    categoryLabel: "Textiles & Bolts",
    price: 380,
    compareAtPrice: null,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADtTyoQ1dk2e6Oj3t_XPDZHWLPfyG8xDrkFWgg9lXJXlUmooLslcfxTMK4DHymUwsH4rKjqaFJX1ItbsMJBGGhYelwgix0RVPfZjCwncR3vmSDtw2q7Am_cz4dt9j0qwbI73p8ci0dhmOvq6lk7jUYFLmVHHo1YxE56eJlBT2W1sA_NwIScumBCYKcuONWfrpcwbXgsEuGGN4mYeFZ0YcJ5x2VL4aGr49d5n_peidnXqRNeLnW041feQ"
    ],
    description: "Authentic hand-spun Khadi cotton from certified Khadi artisans. 100% natural, breathable, and comfortable for daily wear. Available in natural ecru, and a range of natural dye colors.",
    fabric: "100% Hand-Spun Khadi Cotton",
    weave: "Hand-Spun — KVIC Certified",
    colors: ["Natural White", "Indigo Blue", "Earth Brown", "Saffron"],
    selectedColor: "Natural White",
    sizes: ["1m", "5m", "10m", "25m (Bulk)"],
    stock: 1000,
    rating: 4.7,
    reviewCount: 443,
    tags: ["fabric", "khadi", "cotton", "everyday", "natural"],
    badges: ["KVIC CERTIFIED"],
    featured: false,
    bestseller: true,
    newArrival: false,
    priceUnit: "per meter"
  }
];

// =================== CATEGORIES ===================
const CATEGORIES = [
  {
    id: "royal-sarees",
    name: "Royal Sarees",
    label: "Loom Masterpiece",
    badge: "SILK MARK",
    description: "Yeola Paithani, Kanjivaram Bridal Silks, Banarasi Brocade, Chanderi, Georgette, and Organza.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD50VDD-RWefQcKofFaIJ-Y1ZRexILcmf40KUVi1eOA-VC-arRegjVX1yOTLO1_c-xqZt516jQAsE6VvqGUW6CKUbahNAEJ14okanbI1T6hoiK5pUVtX8PunHo2P7lXLSTvr6FwzfG2lZ71bRm-Zj2AbMPKPCYq1Nj2FK90nedo2ncELU2fCkne9FsdCURF9rDBo4X568Q8c2dAUy5FpezMQtGkX366FinE5cXMMNPM_u4lPrZBqerycA",
    slug: "royal-sarees",
    cta: "Explore Drapes"
  },
  {
    id: "dress-materials",
    name: "Dress Materials",
    label: "Unstitched Luxury",
    badge: "CUSTOM FIT",
    description: "Hand-embroidered pure cotton, festive Chanderi suits, Kashmiri Tilla, and zari-detailed salwar lengths.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqT5QqjAI07_ijBF_NeQLyLD5U5JkoaQ7wUpt7jJUqNyJb2iKexzxadsIHRCIrIPN6bE1c-fGflSnKpoUan8FaMFBPkGddK4utBTjEs4RO1587GebxgKRAFBwV2ILMU1ONsoRkvlDNCrWFSdFEFmQba59QUcUlYY7MWs3e2khyo9h0IAgixWqaPMu1iu0hyE-r3eCi4J8Qfdxx8-QIRbI76B1XMGyxRW-naxMrImZUX-tWi3Ke_0xVdg",
    slug: "dress-materials",
    cta: "Explore Sets"
  },
  {
    id: "womens-couture",
    name: "Women's Couture",
    label: "Ready Couture",
    badge: "BRIDAL READY",
    description: "Festive designer lehengas, Floor-length Anarkalis, Sharara sets, and daily designer Kurti editions.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLM-i-e4GItriXMYvw5g_ztyqMuoXCtfs8MaSEVg1oEZQ-WLr53pZWM_KIv9GNbChgKOWhZV02cernWEZMfZpWIX2-HLdP3GqUWRxe1CGvwYolQoLmmwNKjj0DppPhnHrCHuRknioFZxjWoBv35tBxFUUkxm_F9rNmydYYLiC7cDflfmKE97nf1zVsraMM2ZeGBdNKeMKwIc5fe30fHAXv3dxvCq1aZP42LzRcNSW40W7_qeSOTMm9Og",
    slug: "womens-couture",
    cta: "View Pret Collection"
  },
  {
    id: "mens-regalia",
    name: "Men's Regalia",
    label: "Gentlemen's Atelier",
    badge: "ROYAL WEAR",
    description: "Bespoke Kurta-Pajamas, Modi jackets, royal Groom Sherwanis, and fine Italian and Giza cotton suitings.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCficxIjo2utK8TUrgwjDioreb7iXo0D6tA6uL61rSr2r9Wpmj2-aY5i5iIHQNgQdChXgoVNBylaWv0L6oyXOAYBMFMriEYZNJUJfT_zRUmdbetj6-SFFWLb7i41apqATZV3pv6rYfayte6GLA9EBJpYhPoS-RgOkAjDxsbK-yktBH-ItvASaYYHe9Wt2Nt02NwlaRbVKaQNkBPTZYR5NLetKENPbChWvr5Ij8lvdRJr_wBUFhalrTnTQ",
    slug: "mens-regalia",
    cta: "View Men's Wear"
  },
  {
    id: "childrens-pavilions",
    name: "Children's Pavilions",
    label: "Junior Festive",
    badge: "COMFORT COTTON",
    description: "Traditional Dhoti sets, Parkar Polka for young girls, festive ethnic gowns, and soft breathable celebration wear.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqjMwsXbjujAt2T-IF8s24pUuud5WKnaPB3hE9YNOlkNlNhH0QULMKI9mcEa-WxBZ0Sk0eo18TiCrm_aNvBKimW3xrgm5sc0cx0nIQ-yP5COqB1jYbyF_c0VK17IsV6c1T8EIMZMmHVvpbIhp4NB6A_s0vX1zhS-815ohywTnpbus0INABY0gEPc5OGsYjF7Am40ne1UwryifFOfyQZlkdnP7QsLm4PZn-VHld9hQ6EgiDhc7auTST_A",
    slug: "childrens-pavilions",
    cta: "Explore Kids"
  },
  {
    id: "textiles-bolts",
    name: "Textiles & Bolts",
    label: "By The Meter",
    badge: "50,000+ BOLTS",
    description: "Pure Banarasi brocades, raw Tussar silk, fine natural linen, georgette, and designer borders sold cut to measure.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADtTyoQ1dk2e6Oj3t_XPDZHWLPfyG8xDrkFWgg9lXJXlUmooLslcfxTMK4DHymUwsH4rKjqaFJX1ItbsMJBGGhYelwgix0RVPfZjCwncR3vmSDtw2q7Am_cz4dt9j0qwbI73p8ci0dhmOvq6lk7jUYFLmVHHo1YxE56eJlBT2W1sA_NwIScumBCYKcuONWfrpcwbXgsEuGGN4mYeFZ0YcJ5x2VL4aGr49d5n_peidnXqRNeLnW041feQ",
    slug: "textiles-bolts",
    cta: "View Fabric Lounge"
  }
];

// =================== HELPERS ===================
function getProductBySlug(slug) {
  return PRODUCTS.find(p => p.slug === slug) || null;
}

function getProductsByCategory(categorySlug) {
  return PRODUCTS.filter(p => p.category === categorySlug);
}

function getFeaturedProducts() {
  return PRODUCTS.filter(p => p.featured);
}

function getBestsellers() {
  return PRODUCTS.filter(p => p.bestseller);
}

function getNewArrivals() {
  return PRODUCTS.filter(p => p.newArrival);
}

function searchProducts(query) {
  if (!query || query.trim() === '') return PRODUCTS;
  const q = query.toLowerCase().trim();
  return PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.fabric.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.categoryLabel.toLowerCase().includes(q) ||
    p.tags.some(t => t.includes(q)) ||
    p.description.toLowerCase().includes(q)
  );
}

function formatPrice(n) {
  return '₹' + n.toLocaleString('en-IN');
}

function getDiscount(price, compareAtPrice) {
  if (!compareAtPrice) return 0;
  return Math.round(((compareAtPrice - price) / compareAtPrice) * 100);
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  let html = '<div class="stars" aria-label="Rating: ' + rating + ' out of 5">';
  for (let i = 0; i < full; i++) html += '<span class="material-symbols-outlined" style="font-size:14px;font-variation-settings:\'FILL\' 1">star</span>';
  if (half) html += '<span class="material-symbols-outlined" style="font-size:14px;font-variation-settings:\'FILL\' 1">star_half</span>';
  for (let i = full + half; i < 5; i++) html += '<span class="material-symbols-outlined" style="font-size:14px">star</span>';
  html += '</div>';
  return html;
}

function buildProductCardHTML(product, wishlist = []) {
  const isWished = wishlist.includes(product.id);
  const discount = getDiscount(product.price, product.compareAtPrice);
  return `
    <article class="product-card" data-product-id="${product.id}">
      <div class="product-card__image-wrap">
        <a href="product.html?slug=${product.slug}" aria-label="View ${product.name}">
          <img class="product-card__image" src="${product.images[0]}" alt="${product.name} — ${product.fabric}" loading="lazy">
        </a>
        ${product.newArrival ? '<span class="product-card__badge product-card__badge--new">New</span>' : ''}
        ${discount > 0 && !product.newArrival ? `<span class="product-card__badge product-card__badge--sale">${discount}% Off</span>` : ''}
        <button class="product-card__wishlist${isWished ? ' is-wished' : ''}" 
          data-product-id="${product.id}"
          aria-label="${isWished ? 'Remove from wishlist' : 'Add to wishlist'}"
          onclick="wishlistManager.toggle('${product.id}', this)">
          <span class="material-symbols-outlined" style="font-size:16px;font-variation-settings:'FILL' ${isWished ? 1 : 0}">favorite</span>
        </button>
      </div>
      <div class="product-card__body">
        <span class="product-card__category">${product.categoryLabel}</span>
        <h3 class="product-card__name"><a href="product.html?slug=${product.slug}" style="color:inherit;text-decoration:none;">${product.name}</a></h3>
        <p class="product-card__fabric">${product.fabric.split('—')[0].trim()}</p>
        <div class="product-card__price-row">
          <span class="product-card__price">${formatPrice(product.price)}</span>
          ${product.compareAtPrice ? `<span class="product-card__compare-price">${formatPrice(product.compareAtPrice)}</span>` : ''}
          ${discount > 0 ? `<span style="font-size:0.75rem;color:var(--color-secondary);font-weight:600;">${discount}% off</span>` : ''}
        </div>
        ${product.stock <= 5 ? '<p style="font-size:0.75rem;color:#ba1a1a;margin-top:0.25rem;">Only ' + product.stock + ' left</p>' : ''}
        <button class="product-card__add-btn" onclick="cartManager.addToCart('${product.id}', 1, this)">
          Add to Cart
        </button>
      </div>
    </article>`;
}
