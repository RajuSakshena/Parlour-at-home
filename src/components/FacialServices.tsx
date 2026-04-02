import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

/* =========================
   IMAGE IMPORTS (src/images/)
========================= */
import lotusWhiteGlowActivatedCharcoalFacial from "../images/Lotus WhiteGlow Activated Charcoal Facial.jpg";
import lotusWhiteGlowBrighteningFacial from "../images/Lotus WhiteGlow Brightening Facial.jpg";
import lotusHydravitalFacial from "../images/Lotus Hydravital Facial.jpg";
import fruitFacial from "../images/Fruit Facial.jpg";
import antiTanFacial from "../images/Anti Tan Facial.jpg";
import aromaMagicBridalGlow from "../images/Aroma Magic Bridal Glow.jpg";
import vedicLineVitaminCFacial from "../images/Vedic Line Vitamin C Facial.jpg";
import redWineFacial from "../images/Red Wine Facial.jpg";
import saraGoldFacial from "../images/Sara Gold Facial.jpg";
import saraDiamondFacial from "../images/Sara Diamond Facial.jpg";
import lotusBridalGlowFacial from "../images/Lotus Bridal Glow Facial.jpg";
import o3SeaWhiteFacial from "../images/O3+ Sea White Facial.jpg";
import o3WhiteningFacial from "../images/O3+ Whitening Facial.jpg";
import o3AntiAgeingFacial from "../images/O3+ Anti Ageing Facial.jpg";
import o3PowerBrighteningWithBleach from "../images/O3+ PowerBrightening With O3+ Bleach.jpg";
import lotusInstafairTreatment from "../images/Lotus Instafair Treatment.jpg";
import seasoulCcDermaIceFacial from "../images/Seasoul CC Derma Ice Facial.jpg";
import lotusGoldSheenTreatment from "../images/Lotus GoldSheen Treatment.jpg";
import o3BridalGlow from "../images/03+ Bridal Glow.jpg";
import casmaraGojiFacial from "../images/Casmara Goji Facial.jpg";
import instaGlowCleanUp from "../images/Insta Glow Clean Up.jpg";
import fruitCleanUp from "../images/Fruit Clean Up.jpg";
import faceNeckDeTan from "../images/Face & Neck DeTan.jpg";
import underarmsDeTan from "../images/Underarms De Tan.jpg";
import fullArmsDeTan from "../images/Full Arms DeTan.jpg";
import fullLegsDeTan from "../images/Full Legs De Tan.jpg";
import stomachDeTan from "../images/Stomach DeTan.jpg";
import halfBackDeTan from "../images/Half Back DeTan.jpg";
import fullBackDeTan from "../images/Full Back DeTan.jpg";
import fullBodyDeTan from "../images/Full Back DeTan.jpg";
import fullBodyDeTanFaceNeck from "../images/Full Body DeTan + Face & Neck.jpg";
import faceNeckBleach from "../images/Face & Neck Bleach.jpg";
import fullArmsBleach from "../images/Full Arms Bleach.jpg";
import halfLegsBleach from "../images/Half Legs Bleach.jpg";
import fullLegsBleach from "../images/Full Legs Bleach.jpg";
import fullBackBleach from "../images/Full Back Bleach.jpg";
import fullFrontBleach from "../images/Full Front Bleach.jpg";
import fullBodyBleach from "../images/Full Body Bleach.jpg";
import eyeBrowThreading from "../images/Eye Brow Threading.jpg";
import upperLipThreading from "../images/Upper Lip Threading.jpg";
import foreheadThreading from "../images/Forehead Threading.jpg";
import chinThreading from "../images/Chin Threading.jpg";
import sideLocksThreading from "../images/Side Locks Threading.jpg";
import fullFaceThreading from "../images/Full Face Threading.jpg";

/* =========================
   NAV MENU
========================= */
const categories = [
  "Luxury Facial",
  "Premium Facial",
  "Ultra Premium Facial",
  "Clean-Up",
  "De-tan",
  "Bleach",
  "Threading",
];

/* =========================
   TYPES
========================= */
type FacialService = {
  title: string;
  duration: string;
  price: number;
  mrp: number;
  discount: string;
  image: string;
  includes: string[];
  info: string[];
};

/* =========================
   LUXURY FACIAL DATA
========================= */
const luxuryFacials: FacialService[] = [
  {
    title: "Lotus WhiteGlow Activated Charcoal Facial",
    duration: "60 minutes",
    price: 749,
    mrp: 1498,
    discount: "50% Off",
    image: lotusWhiteGlowActivatedCharcoalFacial,
    includes: [
      "Removes dead skin cells & blackheads",
      "Minimizes pores by removing dirt & excess oil",
      "For Oily & Combination skin - Chemical Free",
    ],
    info: [
      "Perfect facial for glowing & polished skin in summers",
      "5 step facial with Almonds, Activated charcoal, and Tea Tree oil",
      "Balances skin moisture & prevents breakouts",
      "Monodose products used",
      "Steam is not recommended",
      "Apply sunscreen after facial and avoid direct sunlight for 24 hours",
      "Avoid Heavy Makeup and Workout after Facial",
      "For Any Services Related Complaint, Report Within 24 Hours Of Services",
    ],
  },
  {
    title: "Lotus WhiteGlow Brightening Facial",
    duration: "60 minutes",
    price: 749,
    mrp: 1498,
    discount: "50% Off",
    image: lotusWhiteGlowBrighteningFacial,
    includes: [
      "Lightens, whitens & brightens your skin",
      "Revives natural glow & regulates pigmentation",
      "For all skin types - Chemical free",
    ],
    info: [
      "Four step facial with natural ingredients like saxifraga and grape extracts",
      "Chemical Free",
      "Monodose products used",
      "Steam is not recommended",
      "Apply sunscreen after facial and avoid direct sunlight for 24 hours",
      "Avoid Heavy Makeup and Workout after Facial",
      "For Any Services Related Complaint, Report Within 24 Hours Of Services",
    ],
  },
  {
    title: "Lotus Hydravital Facial",
    duration: "60 minutes",
    price: 699,
    mrp: 1398,
    discount: "50% Off",
    image: lotusHydravitalFacial,
    includes: [
      "Suitable for Normal to Dry skin",
      "Refreshes and revitalizes skin cells",
      "Maintains firmness and skin elasticity",
    ],
    info: [
      "Contains ingredients for cleansing, exfoliation & toning",
      "Preserves natural moisture levels while massage provides nourishment",
      "Steam is not recommended",
      "Apply sunscreen after facial and avoid direct sunlight for 24 hours",
      "Avoid Heavy Makeup and Workout after Facial",
      "For Any Services Related Complaint, Report Within 24 Hours Of Services",
    ],
  },
  {
    title: "Fruit Facial",
    duration: "60 minutes",
    price: 549,
    mrp: 1098,
    discount: "50% Off",
    image: fruitFacial,
    includes: [
      "VLCC five step facial",
      "For blemish free & radiant complexion",
      "Suitable for all skin types",
    ],
    info: [
      "Papaya is a rich source of papain and Vitamin A",
      "Helps in breaking down inactive proteins and sloughing off dead skin cells",
      "Hydrates skin and maintains oil balance",
      "Monodose products used",
      "Steam is not recommended",
      "Apply sunscreen after facial and avoid direct sunlight for 24 hours",
      "Avoid Heavy Makeup and Workout after Facial",
      "For Any Services Related Complaint, Report Within 24 Hours Of Services",
    ],
  },
  {
    title: "Anti Tan Facial",
    duration: "60 minutes",
    price: 549,
    mrp: 1098,
    discount: "50% Off",
    image: antiTanFacial,
    includes: [
      "VLCC five step facial",
      "Reduces tan & heals sun damaged skin",
      "Suitable for all skin types",
    ],
    info: [
      "Pistachios, nutmeg, oatmeal & cucumber extracts",
      "Blended with Aloe Vera & Winter Cherry",
      "Gently fades tan and softens skin",
      "Monodose products used",
      "Steam is not recommended",
      "Apply sunscreen after facial and avoid direct sunlight",
      "Avoid Heavy Makeup and Workout after Facial",
      "For Any Services Related Complaint, Report Within 24 Hours Of Services",
    ],
  },
  {
    title: "Aroma Magic Bridal Glow",
    duration: "60 minutes",
    price: 699,
    mrp: 1398,
    discount: "50% Off",
    image: aromaMagicBridalGlow,
    includes: [
      "Blossom Kochhar's 7 step facial",
      "Imparts dazzling radiance",
      "Suitable for all skin types",
    ],
    info: [
      "Enhances natural glow & imparts dazzling radiance to skin",
      "Counteracts pollution & stress damage",
      "Leaves skin revitalized & polished",
      "Monodose products used",
      "Steam is not recommended",
      "Apply sunscreen after facial and avoid sunlight",
      "Avoid Heavy Makeup and Workout after Facial",
      "For Any Services Related Complaint, Report Within 24 Hours Of Services",
    ],
  },
  {
    title: "Vedic Line Vitamin C Facial",
    duration: "60 minutes",
    price: 699,
    mrp: 1398,
    discount: "50% Off",
    image: vedicLineVitaminCFacial,
    includes: [
      "Lightens and rejuvenates the skin",
      "Boosts collagen synthesis",
      "Suitable for all skin types",
    ],
    info: [
      "Niacinamide: Boost your skin’s protein synthesis and keep it moist",
      "Turmeric Extract: Contains antioxidants and anti-inflammatory components",
      "Aloe Vera Extract: Maintains moisture and restores radiance",
      "Sodium Hyaluronate: Boost Skin Firmness",
      "Reduces early signs of Ageing",
      "Keep your Skin Hydrated",
      "Practice Face exercise at Home for best Result",
      "Avoid Heavy Makeup and Workout after Facial",
      "For Any Services Related Complaint, Report Within 24 Hours Of Services",
    ],
  },
  {
    title: "Red Wine Facial",
    duration: "60 minutes",
    price: 599,
    mrp: 1198,
    discount: "50% Off",
    image: redWineFacial,
    includes: [
      "GlamVeda Red wine 6 step facial",
      "Reduces fine lines, pigmentation, dark circles",
      "For all skin types - No Paraben/SLS",
    ],
    info: [
      "Gives an instant wrinkle-free effect",
      "Wine's active anti-oxidants supply oxygen into the skin",
      "Works for skin tightening, removes toxins from the skin",
      "Free from parabens, artificial colourants, mineral oils & dyes",
      "Monodose products used",
      "Steam is not recommended",
      "Apply sunscreen after facial and avoid direct sunlight for 24 hours",
      "Avoid Heavy Makeup and Workout after Facial",
      "For Any Services Related Complaint, Report Within 24 Hours Of Services",
    ],
  },
];

/* =========================
   PREMIUM FACIAL DATA
========================= */
const premiumFacials: FacialService[] = [
  {
    title: "Sara Gold Facial",
    duration: "60 minutes",
    price: 775,
    mrp: 1550,
    discount: "50% Off",
    image: saraGoldFacial,
    includes: [
      "Six step facial with two masks",
      "Provides Ultra Bridal radiance & shine",
      "For all skin types - Organic, Paraben & Sulfate free",
    ],
    info: [
      "Sara by O3+ Organic, Paraben & Sulfate free",
      "Lightens skin tone, soothes wrinkles, reduces pigmentation",
      "6 step facial - Gold Cleansing Gel, Gold Peel-Off Mask, Gold Cream, Gold Facial Mask, Gold Serum, Gold Facial Mould Mask",
      "Not suitable for sensitive skin",
      "Bleach is not recommended with facials containing peel off mask",
      "Monodose products used",
      "Steam is not recommended",
      "Apply sunscreen after facial and avoid direct sunlight for 24 hours",
      "Avoid Heavy Makeup and Workout after Facial",
      "For Any Services Related Complaint, Report Within 24 Hours Of Services",
    ],
  },
  {
    title: "Sara Diamond Facial",
    duration: "60 minutes",
    price: 899,
    mrp: 1798,
    discount: "50% Off",
    image: saraDiamondFacial,
    includes: [
      "Six step facial with two masks",
      "Provides mega glow & ultra brightening",
      "Suitable for all skin types-Cruelty free",
    ],
    info: [
      "Sara by O3+ - Contains natural ingredients",
      "Imparts Ultra-brightening facial effect without any fuss",
      "Revitalizes the skin & removes the tan from the skin",
      "Consists of diamond cleansing gel, diamond cream, diamond facial mask, diamond serum, diamond peel mask, and diamond facial mould mask",
      "Not suitable for sensitive skin",
      "Bleach is not recommended with facials containing peel off mask",
      "Monodose products used",
      "Steam is not recommended",
      "Apply sunscreen after facial and avoid direct sunlight for 24 hours",
      "Avoid Heavy Makeup and Workout after Facial",
      "For Any Services Related Complaint, Report Within 24 Hours Of Services",
    ],
  },
];

/* =========================
   ULTRA PREMIUM FACIAL DATA
========================= */
const ultraPremiumFacials: FacialService[] = [
  {
    title: "Lotus Bridal Glow Facial",
    duration: "60 minutes",
    price: 1299,
    mrp: 2598,
    discount: "50% Off",
    image: lotusBridalGlowFacial,
    includes: [
      "Five step facial with algae peel off mask",
      "Reduces premature ageing",
      "Illuminating glow for all skin types-Paraben free",
    ],
    info: [
      "Infused with luxurious ingredients, like exotic rose oil & 24K gold leaves",
      "Prepares skin for your big event by giving it an illuminating glow",
      "It revitalizes skin & removes skin impurities & pollutants",
      "Contains cleansing gel,Micro polisher,Deep cell-activating serum,Facial cream,Algae peel-off mask",
      "Monodose products used",
      "Bleach is not recommended with facial consisting peel off mask",
      "Steam is not recommended",
      "Apply sunscreen after facial & avoid direct sunlight for 24 hours",
      "Avoid Heavy Makeup and Workout after Facial",
      "For Any Services Related Complaint, Report Within 24 Hours Of Services",
    ],
  },
  {
    title: "O3+ Sea White Facial",
    duration: "60 minutes",
    price: 1299,
    mrp: 2598,
    discount: "50% Off",
    image: o3SeaWhiteFacial,
    includes: [
      "Balances oil, prevents future acne",
      "Purifies the skin while brightening",
      "For normal /oily / combination/acne prone skin",
    ],
    info: [
      "Instantly brightens and controls oil",
      "Consists of Cleanser, Scrub, Cream & Peel Off Mask",
      "Skin appears clearer and blemish free",
      "Enriched with the goodness of Marine Water & Seaweed",
      "Consists of Peel off mask for an ultimate relaxation",
      "Monodose products used",
      "Bleach is not recommended with facial consisting peel off mask",
      "Steam is not recommended",
      "Apply sunscreen after facial & avoid direct sunlight for 24 hours",
      "Avoid Heavy Makeup and Workout after Facial",
      "For Any Services Related Complaint, Report Within 24 Hours Of Services",
    ],
  },
  {
    title: "O3+ Whitening Facial",
    duration: "60 minutes",
    price: 1399,
    mrp: 2798,
    discount: "50% Off",
    image: o3WhiteningFacial,
    includes: [
      "With glow boosting anti-oxidants",
      "Reduces fine lines & pigmentation",
      "Instant glow & brightening on all skin types",
    ],
    info: [
      "Enriched with Vitamin C, rich bilberries and bisabolol",
      "Evens the skin tone & nourishes,improves the over all health of skin",
      "Consists of Peel off mask for an ultimate relaxation",
      "Monodose products used",
      "Bleach is not recommended with facial consisting peel off mask",
      "Steam is not recommended",
      "Apply sunscreen after facial & avoid direct sunlight for 24 hours",
      "Avoid Heavy Makeup and Workout after Facial",
      "For Any Services Related Complaint, Report Within 24 Hours Of Services",
    ],
  },
  {
    title: "O3+ Anti Ageing Facial",
    duration: "60 minutes",
    price: 1399,
    mrp: 2798,
    discount: "50% Off",
    image: o3AntiAgeingFacial,
    includes: [
      "Instant brightening and glow boosting",
      "Reduces finelines and wrinkles",
      "Suitable for all skin types",
    ],
    info: [
      "Enriched with ingredients such as Jojoba Oil, Bisabolol & Aloe Extract",
      "This facial kit is an absolute treat for skin with signs of ageing",
      "Stimulates collagen & repairs skin",
      "Monodose products used",
      "Bleach is not recommended with facial consisting peel off mask",
      "Steam is not recommended",
      "Apply sunscreen after facial & avoid direct sunlight for 24 hours",
      "Avoid Heavy Makeup and Workout after Facial",
      "For Any Services Related Complaint, Report Within 24 Hours Of Services",
    ],
  },
  {
    title: "O3+PowerBrightening With O3+ Bleach",
    duration: "90 minutes",
    price: 1499,
    mrp: 2998,
    discount: "50% Off",
    image: o3PowerBrighteningWithBleach,
    includes: [
      "Complimentary O3+ Face & neck Bleach",
      "For ultimate brightening & whitening of skin",
      "Suitable for all skin types",
    ],
    info: [
      "It brightens & evens out the skin tone, reduce dark spots & blemishes",
      "Improves the overall texture and radiance of the skin",
      "Rejuvenates skin from the deepest of pores for a brightening and whitening look",
      "Monodose products used",
      "Steam is not recommended",
      "Apply sunscreen after facial & avoid direct sunlight for 24 hours",
      "Avoid Heavy Makeup and Workout after Facial",
      "For Any Services Related Complaint, Report Within 24 Hours Of Services",
    ],
  },
  {
    title: "Lotus Instafair Treatment",
    duration: "75 minutes",
    price: 1599,
    mrp: 3198,
    discount: "50% Off",
    image: lotusInstafairTreatment,
    includes: [
      "Melanin control and skin lightening treatment",
      "Highly concentrated herbal actives",
      "Suitable for all skin types",
    ],
    info: [
      "After the basic CETOM (Cleanse-Exfoliate-Tone-Moisturise) with HYDRAVITALS/PURAVITALS",
      "Induction of INSTAFAIR Skin Whitening Complex with the help of ultrasonic",
      "Massage with HYDRAVITALS jojoba stimulating massage cream/Puravitals Cinnamon Energising Massage Gel",
      "Apply Instafair Skin Mulberry whitening masque",
      "Apply Instafair Skin Whitening Pill Mask and Concentrate",
      "Moisturizes your skin making it feel smooth and radiant",
      "Delivers high percentage of actives to brighten, moisturize & improve skin complexion",
      "Chemical Free",
      "Monodose products used",
      "Steam is not recommended",
      "Apply sunscreen after facial and avoid direct sunlight for 24 hours",
      "Avoid Heavy Makeup and Workout after Facial",
      "For Any Services Related Complaint, Report Within 24 Hours Of Services",
    ],
  },
  {
    title: "Seasoul CC Derma Ice Facial",
    duration: "90 minutes",
    price: 1799,
    mrp: 3598,
    discount: "50% Off",
    image: seasoulCcDermaIceFacial,
    includes: [
      "With Glutathione,Vitamin C, Alpha Arbutin",
      "Gives instant brightening & hydration",
      "For all skin types- Paraben/Sulfate free",
    ],
    info: [
      "Helps skin regeneration & production of collagen and elastin",
      "For Pore Cleansing & Tightening, this Ice Infusion Facial works wonders",
      "Its Enriched with Alpha Arbutin, Vitamin C, KakaduPlum, Glutathione & Noni Fruit, which also helps to bring instant brightening & hydration to the skin giving a CC ready skin",
      "PH Balanced ,No Sulphate ,No Phospahte ,No Paraben ,No Petrochemicals",
      "Monodose products used",
      "Steam is not recommended",
      "Apply sunscreen after facial and avoid direct sunlight for 24 hours",
      "Avoid Heavy Makeup and Workout after Facial",
      "For Any Services Related Complaint, Report Within 24 Hours Of Services",
    ],
  },
  {
    title: "Lotus GoldSheen Treatment",
    duration: "75 minutes",
    price: 1999,
    mrp: 2856,
    discount: "30% Off",
    image: lotusGoldSheenTreatment,
    includes: [
      "Exclusive facial with gold bhasm",
      "Contains actives for instant gold-like luster",
      "For all skin types-Paraben/Sulphate free",
    ],
    info: [
      "Gold Bhasm has a rejuvenating & stimulating effect on your skin due to its metallic action",
      "After the basic CETOM (Cleanse-Exfoliate-Tone-Moisturise) with HYDRAVITALS or PURAVITALS",
      "GOLDSHEEN Pre-Treat Gel - Apply Goldsheen Pretreat gel with ultrasonic for 3 minutes, Wipe the gel",
      "Massage with Hydravitals Jojoba Stimulating Massage Cream/Puravitals Cinnamon Energising Massage Gel",
      "GOLDSHEEN Radiance Gel - Massage Radiance Gel for 2 minutes with ultrasonic",
      "GOLDSHEEN Shimmer Masque - Apply Goldsheen Shimmer Masque",
      "GOLDSHHEN Apply Glow Enhancing Pill Mask & Concentrate",
      "It exfoliates the skin helping get rid of spots, blemishes, dull surface cells",
      "Smoothens out wrinkles giving you a smooth & glowing skin",
      "Monodose products used",
      "Steam is not recommended",
      "Apply sunscreen after facial and avoid direct sunlight for 24 hours",
      "Avoid Heavy Makeup and Workout after Facial",
      "For Any Services Related Complaint, Report Within 24 Hours Of Services",
    ],
  },
  {
    title: "O3+ Bridal Glow",
    duration: "90 minutes",
    price: 2099,
    mrp: 4198,
    discount: "50% Off",
    image: o3BridalGlow,
    includes: [
      "Gently repairs & brightens skin",
      "Removes tan while boosting glow",
      "Ultimate radiance for all skin types",
    ],
    info: [
      "Enriched with the goodness of Peppermint, Shea Butter, Vitamin C & Cucumber",
      "A 10-step regimen that aims at giving you the healthiest, tan free & glowing skin while solving multiple skin concerns",
      "Mix of deep serum penetration, peel off mask & massage renews your skin from the inside out",
      "This kit is not only for brides, it is an ultimate radiance facial for all types of skin",
      "Monodose products used",
      "Bleach is not recommended with facial consisting peel off mask",
      "Steam is not recommended",
      "Apply sunscreen after facial & avoid direct sunlight for 24 hours",
      "Avoid Heavy Makeup and Workout after Facial",
      "For Any Services Related Complaint, Report Within 24 Hours Of Services",
    ],
  },
  {
    title: "Casmara Goji Facial",
    duration: "90 minutes",
    price: 2999,
    mrp: 4998,
    discount: "40% Off",
    image: casmaraGojiFacial,
    includes: [
      "High technologyfacial with Goji Berries",
      "Prevents the appearance of signs of aging",
      "With Algae Peel Off Goji Mask 2070",
    ],
    info: [
      "Goji berry extract, the fruit of longevity,balances the natural condition of the skin",
      "Protects it from external agents delaying & preventing aging",
      "Intensive and long-lasting moisturization",
      "Effects are enhanced with the use of ultrasonic",
      "Suitable for all skin types",
      "Monodose products used",
      "Steam is not recommended",
      "Apply sunscreen after facial and avoid direct sunlight for 24 hours",
      "Avoid Heavy Makeup and Workout after Facial",
      "For Any Services Related Complaint, Report Within 24 Hours Of Services",
    ],
  },
];

/* =========================
   CLEAN-UP DATA
========================= */
const cleanUpServices: FacialService[] = [
  {
    title: "Insta Glow Clean Up",
    duration: "40 minutes",
    price: 399,
    mrp: 798,
    discount: "50% Off",
    image: instaGlowCleanUp,
    includes: [
      "VLCC Insta Glow Clean Up",
      "Suitable for all skin types",
    ],
    info: [
      "For Any Services Related Complaint, Report Within 24 Hours Of Services",
    ],
  },
  {
    title: "Fruit Clean Up",
    duration: "30 minutes",
    price: 399,
    mrp: 798,
    discount: "50% Off",
    image: fruitCleanUp,
    includes: [
      "VLCC Fruit clean up",
      "Suitable for all skin types",
    ],
    info: [
      "With Papaya In combination with other fruit and vegetable extracts like watermelon, peach, orange and cucumber",
      "This Fruit clean up helps achieve a blemish-free, radiant complexion",
      "For Any Services Related Complaint, Report Within 24 Hours Of Services",
    ],
  },
];

/* =========================
   DE-TAN DATA
========================= */
const deTanServices: FacialService[] = [
  {
    title: "Face & Neck DeTan",
    duration: "25 minutes",
    price: 249,
    mrp: 356,
    discount: "30% Off",
    image: faceNeckDeTan,
    includes: [
      "Ammonia free skin lightening formula",
      "Removes tanning effect of the sun",
    ],
    info: [
      "Raaga de-tan professional cream is a unique skin lightening product",
      "Contains natural actives like milk, honey, tomato, lemon, bilberry, grape fruit extracts and essential oils",
      "The kojic acid helps to inhibit the melanin formation and lightens the skin tone on regular usage",
      "It doesn't have any kind of colour lifting effect on facial hair like the normally used skin bleach",
      "Monodose products used",
      "Not recommended if allergic to milk products",
      "Slight tingling sensation is normal & may vary person to person",
    ],
  },
  {
    title: "Underarms De Tan",
    duration: "20 minutes",
    price: 179,
    mrp: 256,
    discount: "30% Off",
    image: underarmsDeTan,
    includes: [
      "Ammonia free skin lightening formula",
      "Removes tanning effect of the sun",
    ],
    info: [
      "Raaga de-tan professional cream is a unique skin lightening product",
      "Contains natural actives like milk, honey, tomato, lemon, bilberry, grape fruit extracts and essential oils",
      "The kojic acid helps to inhibit the melanin formation and lightens the skin tone on regular usage",
      "It doesn't have any kind of colour lifting effect on facial hair like the normally used skin bleach",
      "Monodose products used",
      "Not recommended if allergic to milk products",
      "Slight tingling sensation is normal & may vary person to person",
    ],
  },
  {
    title: "Full Arms DeTan",
    duration: "30 minutes",
    price: 349,
    mrp: 499,
    discount: "30% Off",
    image: fullArmsDeTan,
    includes: [
      "Ammonia free skin lightening formula",
      "Removes tanning effect of the sun",
    ],
    info: [
      "Full arms de tan including Under arms",
      "Raaga de-tan professional cream is a unique skin lightening product",
      "Contains natural actives like milk, honey, tomato, lemon, bilberry, grape fruit extracts and essential oils",
      "The kojic acid helps to inhibit the melanin formation and lightens the skin tone on regular usage",
      "It doesn't have any kind of colour lifting effect on facial hair like the normally used skin bleach",
      "Monodose products used",
      "Not recommended if allergic to milk products",
      "Slight tingling sensation is normal & may vary person to person",
    ],
  },
  {
    title: "Full Legs De Tan",
    duration: "30 minutes",
    price: 399,
    mrp: 570,
    discount: "30% Off",
    image: fullLegsDeTan,
    includes: [
      "Ammonia free skin lightening formula",
      "Removes tanning effect of the sun",
    ],
    info: [
      "Raaga de-tan professional cream is a unique skin lightening product",
      "Contains natural actives like milk, honey, tomato, lemon, bilberry, grape fruit extracts and essential oils",
      "The kojic acid helps to inhibit the melanin formation and lightens the skin tone on regular usage",
      "It doesn't have any kind of colour lifting effect on facial hair like the normally used skin bleach",
      "Monodose products used",
      "Not recommended if allergic to milk products",
      "Slight tingling sensation is normal & may vary person to person",
    ],
  },
  {
    title: "Stomach DeTan",
    duration: "30 minutes",
    price: 199,
    mrp: 284,
    discount: "30% Off",
    image: stomachDeTan,
    includes: [
      "Ammonia free skin lightening formula",
      "Removes tanning effect of the sun",
    ],
    info: [
      "Raaga de-tan professional cream is a unique skin lightening product",
      "Contains natural actives like milk, honey, tomato, lemon, bilberry, grape fruit extracts and essential oils",
      "The kojic acid helps to inhibit the melanin formation and lightens the skin tone on regular usage",
      "It doesn't have any kind of colour lifting effect on facial hair like the normally used skin bleach",
      "Monodose products used",
      "Not recommended if allergic to milk products",
      "Slight tingling sensation is normal & may vary person to person",
    ],
  },
  {
    title: "Half Back De Tan",
    duration: "30 minutes",
    price: 199,
    mrp: 284,
    discount: "30% Off",
    image: halfBackDeTan,
    includes: [
      "Ammonia free skin lightening formula",
      "Removes tanning effect of the sun",
    ],
    info: [
      "Raaga de-tan professional cream is a unique skin lightening product",
      "Contains natural actives like milk, honey, tomato, lemon, bilberry, grape fruit extracts and essential oils",
      "The kojic acid helps to inhibit the melanin formation and lightens the skin tone on regular usage",
      "It doesn't have any kind of colour lifting effect on facial hair like the normally used skin bleach",
      "Monodose products used",
      "Not recommended if allergic to milk products",
      "Slight tingling sensation is normal & may vary person to person",
    ],
  },
  {
    title: "Full Back De Tan",
    duration: "30 minutes",
    price: 269,
    mrp: 384,
    discount: "30% Off",
    image: fullBackDeTan,
    includes: [
      "Ammonia free skin lightening formula",
      "Removes tanning effect of the sun",
    ],
    info: [
      "Raaga de-tan professional cream is a unique skin lightening product",
      "Contains natural actives like milk, honey, tomato, lemon, bilberry, grape fruit extracts and essential oils",
      "The kojic acid helps to inhibit the melanin formation and lightens the skin tone on regular usage",
      "It doesn't have any kind of colour lifting effect on facial hair like the normally used skin bleach",
      "Monodose products used",
      "Not recommended if allergic to milk products",
      "Slight tingling sensation is normal & may vary person to person",
    ],
  },
  {
    title: "Full Body De Tan",
    duration: "60 minutes",
    price: 829,
    mrp: 1658,
    discount: "50% Off",
    image: fullBodyDeTan,
    includes: [
      "Excluding Face & neck",
      "Ammonia free skin lightening formula",
      "Removes tanning effect of the sun",
    ],
    info: [
      "Raaga de-tan professional cream is a unique skin lightening product",
      "Contains natural actives like milk, honey, tomato, lemon, bilberry, grape fruit extracts and essential oils",
      "The kojic acid helps to inhibit the melanin formation and lightens the skin tone on regular usage",
      "It doesn't have any kind of colour lifting effect on facial hair like the normally used skin bleach",
      "Monodose products used",
      "Not recommended if allergic to milk products",
      "Slight tingling sensation is normal & may vary person to person",
    ],
  },
  {
    title: "Full Body DeTan+Face&Neck",
    duration: "85 minutes",
    price: 999,
    mrp: 1998,
    discount: "50% Off",
    image: fullBodyDeTanFaceNeck,
    includes: [
      "Including Face & Neck",
      "Ammonia free skin lightening formula",
      "Removes tanning effect of the sun",
    ],
    info: [
      "Raaga de-tan professional cream is a unique skin lightening product",
      "Contains natural actives like milk, honey, tomato, lemon, bilberry, grape fruit extracts and essential oils",
      "The kojic acid helps to inhibit the melanin formation and lightens the skin tone on regular usage",
      "It doesn't have any kind of colour lifting effect on facial hair like the normally used skin bleach",
      "Monodose products used",
      "Not recommended if allergic to milk products",
      "Slight tingling sensation is normal & may vary person to person.",
    ],
  },
];

/* =========================
   BLEACH DATA
========================= */
const bleachServices: FacialService[] = [
  {
    title: "Face & Neck Bleach",
    duration: "25 minutes",
    price: 229,
    mrp: 327,
    discount: "30% Off",
    image: faceNeckBleach,
    includes: ["Helps in lightening hair color", "Evens out skin tone"],
    info: [
      "Skin looks brighter",
      "Hides unwanted hair",
      "Reduces tanning & appearence of dark spots",
      "Tingling sensation is normal with bleach",
      "Avoid bleach with peel off mask services",
      "Avoid bleach in case of dry/sensitive/acne prone skin",
      "Avoid bleach with active acne/dermatitis/injury/wound/allergy",
      "Avoid scrubbing/make up/heavy exercise /direct sun exposure post service",
      "Apply moisturiser & sunscreen to avoid damage to your skin",
      "In case of redness post bleach use cold compress/aloe vera gel to calm down the skin",
    ],
  },
  {
    title: "Full Arms Bleach",
    duration: "30 minutes",
    price: 329,
    mrp: 549,
    discount: "40% Off",
    image: fullArmsBleach,
    includes: ["Helps in lightening hair color", "Evens out skin tone"],
    info: [
      "Skin looks brighter",
      "Hides unwanted hair",
      "Reduces tanning & appearence of dark spots",
      "Tingling sensation is normal with bleach",
      "Avoid bleach with peel off mask services",
      "Avoid bleach in case of dry/sensitive/acne prone skin",
      "Avoid bleach with active acne/dermatitis/injury/wound/allergy",
      "Avoid scrubbing/make up/heavy exercise /direct sun exposure post service",
      "Apply moisturiser & sunscreen to avoid damage to your skin",
      "In case of redness post bleach use cold compress/aloe vera gel to calm down the skin",
    ],
  },
  {
    title: "Half Legs Bleach",
    duration: "15 minutes",
    price: 329,
    mrp: 470,
    discount: "30% Off",
    image: halfLegsBleach,
    includes: ["Helps in lightening hair color", "Evens out skin tone"],
    info: [
      "Skin looks brighter",
      "Hides unwanted hair",
      "Reduces tanning & appearence of dark spots",
      "Tingling sensation is normal with bleach",
      "Avoid bleach with peel off mask services",
      "Avoid bleach in case of dry/sensitive/acne prone skin",
      "Avoid bleach with active acne/dermatitis/injury/wound/allergy",
      "Avoid scrubbing/make up/heavy exercise /direct sun exposure post service",
      "Apply moisturiser & sunscreen to avoid damage to your skin",
      "In case of redness post bleach use cold compress/aloe vera gel to calm down the skin",
    ],
  },
  {
    title: "Full Legs Bleach",
    duration: "30 minutes",
    price: 399,
    mrp: 570,
    discount: "30% Off",
    image: fullLegsBleach,
    includes: ["Helps in lightening hair color", "Evens out skin tone"],
    info: [
      "Skin looks brighter",
      "Hides unwanted hair",
      "Reduces tanning & appearence of dark spots",
      "Tingling sensation is normal with bleach",
      "Avoid bleach with peel off mask services",
      "Avoid bleach in case of dry/sensitive/acne prone skin",
      "Avoid bleach with active acne/dermatitis/injury/wound/allergy",
      "Avoid scrubbing/make up/heavy exercise /direct sun exposure post service",
      "Apply moisturiser & sunscreen to avoid damage to your skin",
      "In case of redness post bleach use cold compress/aloe vera gel to calm down the skin",
    ],
  },
  {
    title: "Full Back Bleach",
    duration: "30 minutes",
    price: 329,
    mrp: 470,
    discount: "30% Off",
    image: fullBackBleach,
    includes: ["Helps in lightening hair color", "Evens out skin tone"],
    info: [
      "Skin looks brighter",
      "Hides unwanted hair",
      "Reduces tanning & appearence of dark spots",
      "Tingling sensation is normal with bleach",
      "Avoid bleach with peel off mask services",
      "Avoid bleach in case of dry/sensitive/acne prone skin",
      "Avoid bleach with active acne/dermatitis/injury/wound/allergy",
      "Avoid scrubbing/make up/heavy exercise /direct sun exposure post service",
      "Apply moisturiser & sunscreen to avoid damage to your skin",
      "In case of redness post bleach use cold compress/aloe vera gel to calm down the skin",
    ],
  },
  {
    title: "Full Front Bleach",
    duration: "30 minutes",
    price: 329,
    mrp: 470,
    discount: "30% Off",
    image: fullFrontBleach,
    includes: ["Helps in lightening hair color", "Evens out skin tone"],
    info: [
      "Skin looks brighter",
      "Hides unwanted hair",
      "Reduces tanning & appearence of dark spots",
      "Tingling sensation is normal with bleach",
      "Avoid bleach with peel off mask services",
      "Avoid bleach in case of dry/sensitive/acne prone skin",
      "Avoid bleach with active acne/dermatitis/injury/wound/allergy",
      "Avoid scrubbing/make up/heavy exercise /direct sun exposure post service",
      "Apply moisturiser & sunscreen to avoid damage to your skin",
      "In case of redness post bleach use cold compress/aloe vera gel to calm down the skin",
    ],
  },
  {
    title: "Full Body Bleach",
    duration: "60 minutes",
    price: 849,
    mrp: 1415,
    discount: "40% Off",
    image: fullBodyBleach,
    includes: ["Helps in lightening hair color", "Evens out skin tone"],
    info: [
      "Including Under arms, front & back",
      "Skin looks brighter",
      "Hides unwanted hair",
      "Reduces tanning & appearence of dark spots",
      "Tingling sensation is normal with bleach",
      "Avoid bleach with peel off mask services",
      "Avoid bleach in case of dry/sensitive/acne prone skin",
      "Avoid bleach with active acne/dermatitis/injury/wound/allergy",
      "Avoid scrubbing/make up/heavy exercise /direct sun exposure post service",
      "Apply moisturiser & sunscreen to avoid damage to your skin",
      "In case of redness post bleach use cold compress/aloe vera gel to calm down the skin",
    ],
  },
];

/* =========================
   THREADING DATA
========================= */
const threadingServices: FacialService[] = [
  {
    title: "Eye Brow Threading",
    duration: "10 minutes",
    price: 30,
    mrp: 43,
    discount: "30% Off",
    image: eyeBrowThreading,
    includes: ["Eye Brow Threading"],
    info: [
      "Threading is an ancient method of hair removal",
      "Threading helps to clear all the small unwanted hair",
      "A bit of pain & redness is normal post service",
      "Apply some aloe vera gel to calm the skin",
      "Redness will subside after few hours",
      "Avoid scrubbing & bleach for 24 hours",
      "Avoid direct sun exposure",
    ],
  },
  {
    title: "Upper Lip Threading",
    duration: "5 minutes",
    price: 20,
    mrp: 29,
    discount: "30% Off",
    image: upperLipThreading,
    includes: ["Upper Lip Threading"],
    info: [
      "Pain & redness is normal",
      "Avoid direct sun exposure post service",
      "Avoid scrubbing & bleach for 24 hours",
    ],
  },
  {
    title: "Fore Head Threading",
    duration: "10 minutes",
    price: 20,
    mrp: 29,
    discount: "30% Off",
    image: foreheadThreading,
    includes: ["Fore Head Threading"],
    info: [
      "Pain & redness is normal",
      "Avoid direct sun exposure post service",
      "Avoid scrubbing & bleach for 24 hours",
    ],
  },
  {
    title: "Chin Threading",
    duration: "5 minutes",
    price: 20,
    mrp: 29,
    discount: "30% Off",
    image: chinThreading,
    includes: ["Chin Threading"],
    info: [
      "Pain & redness is normal",
      "Avoid direct sun exposure post service",
      "Avoid scrubbing & bleach for 24 hours",
    ],
  },
  {
    title: "Side Locks Threading",
    duration: "15 minutes",
    price: 49,
    mrp: 70,
    discount: "30% Off",
    image: sideLocksThreading,
    includes: ["Side Locks Threading"],
    info: [
      "Pain & redness is normal",
      "Avoid direct sun exposure post service",
      "Avoid scrubbing & bleach for 24 hours",
    ],
  },
  {
    title: "Full Face Threading",
    duration: "40 minutes",
    price: 169,
    mrp: 242,
    discount: "30% Off",
    image: fullFaceThreading,
    includes: ["Full Face Threading"],
    info: [
      "Eye brows & side locks threading including",
      "Full Face Threading is recommended for better complexion",
      "It makes the skin soft and smooth",
      "Pain & redness is normal post service",
      "Apply some aloe vera gel to calm down the skin",
      "Avoid scrubbing & bleach for 24 hours",
      "Not recommended in case of loose skin",
    ],
  },
];

const allData: Record<string, FacialService[]> = {
  "Luxury Facial": luxuryFacials,
  "Premium Facial": premiumFacials,
  "Ultra Premium Facial": ultraPremiumFacials,
  "Clean-Up": cleanUpServices,
  "De-tan": deTanServices,
  "Bleach": bleachServices,
  "Threading": threadingServices,
};

/* =========================
   COMPONENT - RESPONSIVE + ADD BUTTON REMOVED
========================= */
export default function FacialServices() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<FacialService | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    window.scrollTo(0, 0);
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  const scrollToSection = (cat: string) => {
    sectionRefs.current[cat]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#f6edff] min-h-screen">
      {/* HEADER WITH BACK BUTTON */}
      <div className="py-4 md:py-6 lg:py-8 text-center bg-white border-b relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors shadow-sm"
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
          Facial
        </h1>
        <p className="text-xs md:text-sm text-gray-500 mt-1 uppercase tracking-widest">
          Premium Salon Services
        </p>
      </div>

      {/* NAV BAR */}
      <div className="sticky top-0 z-40 bg-[#f6edff] py-3 md:py-4 shadow-sm">
        <div className="flex justify-center">
          <div className="flex gap-3 overflow-x-auto px-2 md:px-4 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => scrollToSection(cat)}
                className="px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-purple-200 text-purple-800 text-sm md:text-base font-semibold whitespace-nowrap hover:bg-purple-300 transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* SECTIONS */}
      <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-10 py-6 md:py-10 space-y-8 md:space-y-16">
        {categories.map((cat) => (
          <div key={cat} ref={(el) => (sectionRefs.current[cat] = el)}>
            <h2 className="text-lg md:text-xl lg:text-2xl font-black mb-4 md:mb-6 uppercase tracking-tight">{cat}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {allData[cat].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl md:rounded-2xl shadow-sm hover:shadow-lg flex flex-col md:flex-row md:items-stretch overflow-hidden transition-shadow"
                >
                  {/* IMAGE - Mobile: Full width on top | Desktop: Fixed left */}
                  <div className="w-full h-48 md:w-36 lg:w-44 md:h-auto flex-shrink-0 overflow-hidden rounded-t-xl md:rounded-l-xl md:rounded-t-none">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* CONTENT - ADD BUTTON REMOVED */}
                  <div className="p-4 md:p-5 flex-1 flex flex-col">
                    {/* Title only (no ADD button) */}
                    <h3 className="text-sm md:text-base font-bold text-gray-800">{item.title}</h3>

                    {/* Price & Duration */}
                    <div className="flex items-center gap-2 mt-2">
                      <span className="font-black text-base md:text-lg lg:text-xl">₹{item.price}</span>
                      <span className="line-through text-xs text-gray-400">₹{item.mrp}</span>
                      <span className="text-orange-600 text-xs font-bold">{item.discount}</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">⏱ {item.duration}</p>

                    {/* Includes */}
                    <ul className="mt-3 md:mt-4 space-y-1 flex-1 text-xs md:text-sm text-gray-500">
                      {item.includes.map((i, k) => (
                        <li key={k}>• {i}</li>
                      ))}
                    </ul>

                    {/* View Details (kept) */}
                    <button
                      onClick={() => setSelected(item)}
                      className="mt-4 text-purple-700 text-xs md:text-sm font-bold hover:underline self-start"
                    >
                      VIEW DETAILS
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* DETAIL MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-[480px] w-full rounded-2xl overflow-hidden relative shadow-2xl flex flex-col max-h-[85vh]">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-20 bg-gray-100 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center font-bold"
            >
              ✕
            </button>
            <div className="overflow-y-auto p-4 md:p-6">
              <div className="flex gap-2 md:gap-4 mb-4 md:mb-6">
                <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center bg-white rounded-xl">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="max-w-full max-h-full object-contain rounded-xl"
                  />
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">{selected.title}</h2>
                  <div className="mt-2 flex items-baseline gap-1 md:gap-2">
                    <span className="text-base md:text-lg font-bold text-purple-700">₹{selected.price}</span>
                    <span className="text-xs md:text-sm text-gray-400 line-through">₹{selected.mrp}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Duration: {selected.duration}</p>
                </div>
              </div>
              <div className="space-y-3 md:space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800 mb-1 md:mb-2 text-xs md:text-sm uppercase tracking-wide md:tracking-wider">Includes:</h4>
                  <ul className="grid grid-cols-1 gap-1 md:gap-2">
                    {selected.includes.map((i, idx) => (
                      <li key={idx} className="text-xs md:text-sm text-gray-600 flex gap-1 md:gap-2">
                        <span className="text-purple-500">✔</span> {i}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 md:p-4 rounded-lg md:rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-1 md:mb-2 text-xs md:text-sm uppercase tracking-wide md:tracking-wider">Information:</h4>
                  <ul className="space-y-1 md:space-y-1.5">
                    {selected.info.map((i, idx) => (
                      <li key={idx} className="text-xs md:text-sm text-gray-900 flex gap-1 md:gap-2 items-start">
                        <span className="mt-1 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" /> {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <button className="w-full mt-4 md:mt-6 bg-purple-700 text-white py-2 md:py-3 rounded-xl text-sm md:text-base font-bold shadow-lg shadow-purple-200">
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}