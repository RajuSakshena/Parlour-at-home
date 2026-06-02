import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
      "Niacinamide: Boost your skin's protein synthesis and keep it moist",
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
    includes: ["VLCC Insta Glow Clean Up", "Suitable for all skin types"],
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
    includes: ["VLCC Fruit clean up", "Suitable for all skin types"],
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
    includes: ["Ammonia free skin lightening formula", "Removes tanning effect of the sun"],
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
    includes: ["Ammonia free skin lightening formula", "Removes tanning effect of the sun"],
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
    includes: ["Ammonia free skin lightening formula", "Removes tanning effect of the sun"],
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
    includes: ["Ammonia free skin lightening formula", "Removes tanning effect of the sun"],
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
    includes: ["Ammonia free skin lightening formula", "Removes tanning effect of the sun"],
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
    includes: ["Ammonia free skin lightening formula", "Removes tanning effect of the sun"],
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
    includes: ["Ammonia free skin lightening formula", "Removes tanning effect of the sun"],
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
    includes: ["Excluding Face & neck", "Ammonia free skin lightening formula", "Removes tanning effect of the sun"],
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
    includes: ["Including Face & Neck", "Ammonia free skin lightening formula", "Removes tanning effect of the sun"],
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
   FLOATING BUTTONS STYLES
========================= */
const floatingStyles = `
  @keyframes shake {
    0%   { transform: rotate(0deg) scale(1); }
    10%  { transform: rotate(-12deg) scale(1.05); }
    20%  { transform: rotate(12deg) scale(1.05); }
    30%  { transform: rotate(-10deg) scale(1.05); }
    40%  { transform: rotate(10deg) scale(1.05); }
    50%  { transform: rotate(-6deg) scale(1.05); }
    60%  { transform: rotate(6deg) scale(1.05); }
    70%  { transform: rotate(-3deg) scale(1); }
    80%  { transform: rotate(3deg) scale(1); }
    100% { transform: rotate(0deg) scale(1); }
  }
  @keyframes pulse-ring {
    0%   { transform: scale(1); opacity: 0.6; }
    70%  { transform: scale(1.5); opacity: 0; }
    100% { transform: scale(1.5); opacity: 0; }
  }
  .float-btn {
    animation: shake 2.5s ease-in-out infinite;
  }
  .float-btn:nth-child(2) {
    animation-delay: 1.25s;
  }
  .pulse-ring {
    animation: pulse-ring 2s ease-out infinite;
  }
  .pulse-ring-2 {
    animation: pulse-ring 2s ease-out infinite;
    animation-delay: 1.25s;
  }
`;

/* =========================
   COMPONENT
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

  const scrollToSection = useCallback((cat: string) => {
    sectionRefs.current[cat]?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleBookNow = useCallback(() => {
    window.location.href = "tel:+919811923486";
  }, []);

  // JSON-LD Structured Data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.parlouratdoorstep.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.parlouratdoorstep.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Facial Services at Home",
        "item": "https://www.parlouratdoorstep.com/services/facial"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Facial Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Parlour at Doorstep",
      "telephone": "+919811923486",
      "url": "https://www.parlouratdoorstep.com",
      "areaServed": {
        "@type": "City",
        "name": "Delhi NCR"
      }
    },
    "areaServed": [
      "Delhi",
      "Noida",
      "Gurugram",
      "Ghaziabad",
      "Faridabad"
    ],
    "description": "Professional facial services at home including Luxury Facials, Premium Facials, Ultra Premium Facials, Clean-Up, De-tan, Bleach, and Threading. Certified beauticians bring salon-quality treatments to your doorstep.",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "20",
      "highPrice": "2999",
      "offerCount": allData["Luxury Facial"].length + allData["Premium Facial"].length + allData["Ultra Premium Facial"].length + allData["Clean-Up"].length + allData["De-tan"].length + allData["Bleach"].length + allData["Threading"].length
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Facial Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Luxury Facial" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Premium Facial" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ultra Premium Facial" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Clean-Up" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "De-tan" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bleach" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Threading" } }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of facials do you offer at home?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer Luxury Facials, Premium Facials, Ultra Premium Facials, Clean-Up, De-tan, Bleach, and Threading services. Our facials include popular brands like Lotus, O3+, Sara, Aroma Magic, and more."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide bridal facials at home?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer specialized bridal facials including Lotus Bridal Glow, Sara Gold Facial, Sara Diamond Facial, and O3+ Bridal Glow to give you a radiant glow on your special day."
        }
      },
      {
        "@type": "Question",
        "name": "What is the price range for facial services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our facial services start from ₹20 for threading and go up to ₹2999 for premium treatments like Casmara Goji Facial. Most facials are available at 30-50% discount."
        }
      },
      {
        "@type": "Question",
        "name": "Which areas do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve Delhi NCR including Delhi, Noida, Gurugram, Ghaziabad, and Faridabad."
        }
      },
      {
        "@type": "Question",
        "name": "How do I book a facial service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book by clicking the 'Book Now' button or calling us directly at +91 9811923486. You can also reach us on WhatsApp using the floating button on the right."
        }
      },
      {
        "@type": "Question",
        "name": "Are the products used safe for sensitive skin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use high-quality, monodose products from trusted brands. Some facials are specifically formulated for sensitive skin, but please check individual service details or consult with our beautician before booking."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Facial Services at Home in Delhi NCR | Parlour at Doorstep</title>
        <meta name="description" content="Book professional facial services at home in Delhi, Noida, Gurugram, Ghaziabad and Faridabad. Luxury, Premium and Bridal Facials by certified beauticians." />
        <link rel="canonical" href="https://www.parlouratdoorstep.com/services/facial" />
        <meta property="og:title" content="Facial Services at Home in Delhi NCR | Parlour at Doorstep" />
        <meta property="og:description" content="Book professional facial services at home in Delhi, Noida, Gurugram, Ghaziabad and Faridabad. Luxury, Premium and Bridal Facials by certified beauticians." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.parlouratdoorstep.com/services/facial" />
        <meta property="og:site_name" content="Parlour at Doorstep" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Facial Services at Home in Delhi NCR | Parlour at Doorstep" />
        <meta name="twitter:description" content="Book professional facial services at home in Delhi, Noida, Gurugram, Ghaziabad and Faridabad. Luxury, Premium and Bridal Facials by certified beauticians." />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="bg-[#f6edff] min-h-screen">
        {/* INJECT FLOATING BUTTON STYLES */}
        <style>{floatingStyles}</style>

        {/* HEADER WITH BACK BUTTON */}
        <div className="py-4 md:py-6 lg:py-8 text-center bg-white border-b relative">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors shadow-sm active:scale-95"
            aria-label="Go back"
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
                  className="px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-purple-200 text-purple-800 text-sm md:text-base font-semibold whitespace-nowrap hover:bg-purple-300 transition-colors active:scale-95"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* SECTIONS - MODIFIED FOR FIXED 3 COLUMNS, COMPACT CARDS */}
        <div className="max-w-7xl mx-auto px-3 py-6 space-y-8">
          {categories.map((cat) => (
            <div key={cat} ref={(el) => (sectionRefs.current[cat] = el)}>
              <h2 className="text-lg font-black mb-4 uppercase tracking-tight">
                {cat}
              </h2>

              {/* Fixed 3 columns grid without responsive breakpoints */}
              <div className="grid grid-cols-3 gap-3">
                {allData[cat].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg shadow-sm hover:shadow-md flex flex-col overflow-hidden transition-shadow"
                  >
                    {/* IMAGE - fixed height, object-cover */}
                    <div className="h-32 w-full overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    {/* CONTENT - compact padding and text-xs */}
                    <div className="p-2 flex flex-col flex-1">
                      <h3 className="text-xs font-bold text-gray-800 break-words leading-tight">
                        {item.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-x-1 gap-y-0 mt-1">
                        <span className="font-black text-xs">
                          ₹{item.price}
                        </span>
                        <span className="line-through text-[10px] text-gray-400">
                          ₹{item.mrp}
                        </span>
                        <span className="bg-orange-100 text-orange-700 text-[10px] font-bold px-1 py-0.5 rounded-full">
                          {item.discount}
                        </span>
                      </div>
                      <p className="text-[10px] text-gray-400 mt-0.5">⏱ {item.duration}</p>

                      <ul className="mt-2 space-y-0.5 flex-1">
                        {item.includes.slice(0, 3).map((i, k) => (
                          <li key={k} className="text-[10px] text-gray-500 break-words">
                            • {i}
                          </li>
                        ))}
                        {item.includes.length > 3 && (
                          <li className="text-purple-600 text-[10px]">+{item.includes.length - 3} more</li>
                        )}
                      </ul>

                      <button
                        onClick={() => setSelected(item)}
                        className="mt-2 text-purple-700 text-[10px] font-bold hover:underline self-start active:scale-95 transition-transform"
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

        {/* =====================
            FLOATING BUTTONS
            (WhatsApp + Call)
        ===================== */}
        <div className="fixed right-3 sm:right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 items-center">
          {/* WhatsApp Button */}
          <div className="relative flex items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60 pulse-ring" />
            <a
              href="https://wa.me/919811923486"
              target="_blank"
              rel="noopener noreferrer"
              className="float-btn relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl shadow-green-300/50 active:scale-95 transition-transform"
              aria-label="Chat on WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="w-7 h-7 sm:w-8 sm:h-8"
                fill="none"
              >
                <circle cx="24" cy="24" r="24" fill="#25D366" />
                <path
                  d="M34.5 13.4A14.7 14.7 0 0 0 24 9C16.3 9 10 15.3 10 23c0 2.5.7 4.9 1.9 7L10 39l9.3-2.4a14.8 14.8 0 0 0 14.7-3.7A14.8 14.8 0 0 0 38 23c0-3.9-1.5-7.6-3.5-9.6zm-10.5 20a12.3 12.3 0 0 1-6.3-1.7l-.5-.3-5 1.3 1.3-4.9-.3-.5A12.3 12.3 0 0 1 24 11.5c6.8 0 12.3 5.5 12.3 12.3S30.8 36.1 24 36.1zm6.7-9.2c-.4-.2-2.2-1.1-2.5-1.2-.3-.1-.6-.2-.8.2-.3.4-1 1.2-1.2 1.5-.2.3-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.8-2.2-2.1-2.6-.2-.4 0-.6.2-.7.2-.2.4-.4.6-.7.2-.2.3-.4.4-.7.1-.3 0-.6-.1-.8-.1-.2-.8-2-1.1-2.7-.3-.7-.6-.6-.8-.6h-.7c-.3 0-.7.1-1 .4-.4.4-1.4 1.3-1.4 3.2s1.4 3.7 1.6 4c.2.2 2.8 4.3 6.8 6 .9.4 1.7.6 2.2.8.9.3 1.8.3 2.4.2.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5z"
                  fill="white"
                />
              </svg>
            </a>
          </div>

          {/* Call Button */}
          <div className="relative flex items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-60 pulse-ring-2" />
            <a
              href="tel:+919811923486"
              className="float-btn relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-purple-600 flex items-center justify-center shadow-xl shadow-purple-300/50 active:scale-95 transition-transform"
              aria-label="Call us"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="w-6 h-6 sm:w-7 sm:h-7"
                fill="none"
              >
                <circle cx="24" cy="24" r="24" fill="#7C3AED" />
                <path
                  d="M34.3 29.6l-3.5-1.5a1.5 1.5 0 0 0-1.7.4l-1.6 1.9a22.2 22.2 0 0 1-9.9-9.9l1.9-1.6a1.5 1.5 0 0 0 .4-1.7L18.4 13.7a1.5 1.5 0 0 0-1.7-.9l-3.3.8A1.5 1.5 0 0 0 12 15c0 12.2 9.8 22 22 22a1.5 1.5 0 0 0 1.4-1.1l.8-3.4a1.5 1.5 0 0 0-.9-1.9z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* DETAIL MODAL - unchanged */}
        {selected && (
          <div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <div
              className="bg-white max-w-[480px] w-full rounded-2xl overflow-hidden relative shadow-2xl flex flex-col max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-20 bg-gray-100 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center font-bold active:scale-95 transition-transform"
                aria-label="Close modal"
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
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 leading-tight break-words">
                      {selected.title}
                    </h2>
                    <div className="mt-2 flex flex-wrap items-baseline gap-1 md:gap-2">
                      <span className="text-base md:text-lg font-bold text-purple-700">
                        ₹{selected.price}
                      </span>
                      <span className="text-xs md:text-sm text-gray-400 line-through">
                        ₹{selected.mrp}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Duration: {selected.duration}
                    </p>
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1 md:mb-2 text-xs md:text-sm uppercase tracking-wide md:tracking-wider">
                      Includes:
                    </h4>
                    <ul className="grid grid-cols-1 gap-1 md:gap-2">
                      {selected.includes.map((i, idx) => (
                        <li
                          key={idx}
                          className="text-xs md:text-sm text-gray-600 flex gap-1 md:gap-2 break-words"
                        >
                          <span className="text-purple-500 flex-shrink-0">✔</span> {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-3 md:p-4 rounded-lg md:rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-1 md:mb-2 text-xs md:text-sm uppercase tracking-wide md:tracking-wider">
                      Information:
                    </h4>
                    <ul className="space-y-1 md:space-y-1.5">
                      {selected.info.map((i, idx) => (
                        <li
                          key={idx}
                          className="text-xs md:text-sm text-gray-900 flex gap-1 md:gap-2 items-start break-words"
                        >
                          <span className="mt-1 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />{" "}
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* BOOK NOW → CALLS +91 9811923486 */}
                <button
                  onClick={handleBookNow}
                  className="w-full mt-4 md:mt-6 bg-purple-700 text-white py-2 md:py-3 rounded-xl text-sm md:text-base font-bold shadow-lg shadow-purple-200 active:scale-95 transition-transform"
                >
                  📞 Book Now
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
