import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

/* =========================
   IMAGE IMPORTS (Exact filenames - case-sensitive)
========================= */
// Honey Wax
import honeyFullArms from "../images/Honey Full Arms Wax.jpg";
import honeyHalfLegs from "../images/Honey Half Legs Wax.jpg";
import honeyFullLegs from "../images/Honey Full Legs Wax.jpg";
import honeyStomachHalfBack from "../images/Honey Stomach - Half Back Wax.jpg";
import honeyFullBack from "../images/Honey Full Back Wax.jpg";
import honeyFullBody from "../images/Honey Full Body Wax.jpg";
import honeyFullBodyBikini from "../images/Honey Full Body + Bikini Wax.jpg";
import honeyFAFLUA from "../images/Honey FA+FL+UA Wax.jpg";
import honeyFullArmsUA from "../images/Honey Full Arms & UA Wax.jpg";
// Basic Wax
import buttWax from "../images/Butt Wax.jpg";
import bikiniWax from "../images/Bikini.jpg";
import bikiniButtWax from "../images/Bikini & Butt Wax.jpg";
import underArmsWax from "../images/Under Arms Wax.jpg";
import smoothSkinDays from "../images/Smooth Skin Days.jpg";
// White Chocolate Wax
import whiteChocFullBody from "../images/Full Body White Chocolate.jpg";
import whiteChocFAUA from "../images/White Choc FA & UA.jpg";
import whiteChocFA from "../images/White Choc FA.jpg";
import whiteChocHA from "../images/White Choc HA.jpg";
import whiteChocFL from "../images/White Choc FL.jpg";
import whiteChocHalfLegs from "../images/White Choc Half Legs Wax.jpg";
import whiteChocHalfBack from "../images/White Choc Half Back - Stomach Wax.jpg";
import whiteChocFullBack from "../images/White Choc Full Back Wax.jpg";
import whiteChocBikini from "../images/White Choc Bikini Wax.jpg";
import whiteChocUnderArms from "../images/White Choc Under Arms Wax.jpg";
// Rica Wax
import ricaFullBody from "../images/Rica Full Body Wax (without bikini).jpg";
import ricaFAFLUA from "../images/Rica FA + FL + UA (Full Arms, Full Legs & Under Arms).jpg";
import ricaFullArms from "../images/Rica Full Arms Wax.jpg";
import ricaHalfLegs from "../images/Rica Half Legs Wax.jpg";
import ricaFullLegs from "../images/Rica Full Legs Wax.jpg";
import ricaStomachHalfBack from "../images/Rica Stomach - Half Back Wax.jpg";
import ricaFullBack from "../images/Rica Full Back Wax.jpg";
import ricaBikini from "../images/Rica Bikini Wax.jpg";
import ricaUnderArms from "../images/Rica Under Arms Wax.jpg";
// Roll On Wax
import rollOnFullBody from "../images/ROLL ON Full Body.jpg";
import rollOnFAFLUA from "../images/ROLL ON FA+ FL+UA.jpg";
import rollOnFullArms from "../images/Roll On Full Arms.jpg";
import rollOnHalfLegs from "../images/Roll On Half Legs.jpg";
import rollOnFullLegs from "../images/Roll On Full Legs.jpg";
import rollOnStomach from "../images/Roll On Stomach.jpg";
import rollOnHalfBack from "../images/Roll On Half Back.jpg";
import rollOnFullBack from "../images/Roll On Full Back.jpg";
// Deals
import bestWaxingDeal from "../images/Best Waxing Deal.jpg";
// Facial Wax
import fullFaceWax from "../images/Full Face Wax.jpg";
import upperLipsWax from "../images/Upper Lips.jpg";
import chinWax from "../images/Chin.jpg";
import sideLockWax from "../images/Side Lock.jpg";

/* =========================
   NAV MENU CATEGORIES
========================= */
const categories = [
  "Honey Wax",
  "White Chocolate wax",
  "Rica Wax",
  "Roll On Wax",
  "Facial Wax",
];

/* =========================
   TYPES
========================= */
type WaxingService = {
  title: string;
  duration: string;
  price: number;
  mrp: number;
  discount: string;
  image: string;
  includes: string[];
  info: string[];
};

const WAX_IMG = "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=600";

/* =========================
   SERVICE DATA (All items from pricescard.txt)
========================= */
const allWaxingData: Record<string, WaxingService[]> = {
"Honey Wax": [
{
title: "Honey Full Body + Bikini Wax",
price: 1299,
mrp: 1856,
discount: "30% Off",
duration: "80 minutes",
image: honeyFullBodyBikini,
includes: ["Excluding Face( Honey wax)"],
info: [
"In order to have an effective waxing, hair should be at least 6mm in length",
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "Honey Full Body Wax",
price: 899,
mrp: 1284,
discount: "30% Off",
duration: "60 minutes",
image: honeyFullBody,
includes: ["Excluding Face, Bikini & Butt(Honey wax)"],
info: [
"In order to have an effective waxing, hair should be at least 6mm in length",
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "Honey FA+FL+UA Wax",
price: 449,
mrp: 642,
discount: "30% Off",
duration: "45 minutes",
image: honeyFAFLUA,
includes: ["Full Arms , Full legs & Under Arms"],
info: [
"In order to have an effective waxing, hair should be at least 6mm in length",
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "Honey Full Arms & UA Wax",
price: 199,
mrp: 284,
discount: "30% Off",
duration: "20 minutes",
image: honeyFullArmsUA,
includes: ["Product Used: Honey wax"],
info: [
"In order to have an effective waxing, hair should be at least 6mm in length",
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "Honey Full Arms Wax",
price: 175,
mrp: 250,
discount: "30% Off",
duration: "15 minutes",
image: honeyFullArms,
includes: ["Product Used: Honey wax"],
info: [
"In order to have an effective waxing, hair should be at least 6mm in length",
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "Honey Half Legs Wax",
price: 229,
mrp: 327,
discount: "30% Off",
duration: "15 minutes",
image: honeyHalfLegs,
includes: ["Product Used: Honey wax"],
info: [
"In order to have an effective waxing, hair should be at least 6mm in length",
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "Honey Full Legs Wax",
price: 249,
mrp: 356,
discount: "30% Off",
duration: "25 minutes",
image: honeyFullLegs,
includes: ["Product Used: Honey wax"],
info: [
"In order to have an effective waxing, hair should be at least 6mm in length",
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "Honey Stomach / Half Back Wax",
price: 249,
mrp: 356,
discount: "30% Off",
duration: "25 minutes",
image: honeyStomachHalfBack,
includes: ["Product Used: Honey Wax"],
info: [
"In order to have an effective waxing, hair should be at least 6mm in length",
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "Honey Full Back Wax",
price: 289,
mrp: 413,
discount: "30% Off",
duration: "20 minutes",
image: honeyFullBack,
includes: ["Product Used: Honey wax"],
info: [
"In order to have an effective waxing, hair should be at least 6mm in length",
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "Butt Wax",
price: 239,
mrp: 341,
discount: "30% Off",
duration: "25 minutes",
image: buttWax,
includes: ["Product Used: Honey wax"],
info: []
},
{
title: "Bikini",
price: 499,
mrp: 713,
discount: "30% Off",
duration: "25 minutes",
image: bikiniWax,
includes: ["Excluding butt(Honey wax)"],
info: ["Product Used: Honey wax"]
},
{
title: "Bikini & Butt Wax",
price: 649,
mrp: 927,
discount: "30% Off",
duration: "30 minutes",
image: bikiniButtWax,
includes: ["Product Used: Honey wax"],
info: []
},
{
title: "Under Arms Wax",
price: 59,
mrp: 118,
discount: "50% Off",
duration: "10 minutes",
image: underArmsWax,
includes: ["Product used - Honey Wax"],
info: []
}
],
"White Chocolate wax": [
{
title: "Smooth Skin Days",
price: 609,
mrp: 1218,
discount: "50% Off",
duration: "45 minutes",
image: smoothSkinDays,
includes: [
"Wax : Full Arms, Full Legs & Under Arms(Honey wax)",
"Richelon White Choc Liposoluble wax",
"Leaves skin soft ,supple & tan free"
],
info: [
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid taking Oil based Wax , if you have sensitive or extra dry skin",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "Full Body White Chocolate",
price: 1249,
mrp: 2498,
discount: "50% Off",
duration: "75 minutes",
image: whiteChocFullBody,
includes: [
"Wax : Full Body without Bikini",
"Richelon White Choc Liposoluble wax",
"Leaves skin soft ,supple & tan free"
],
info: [
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid taking Oil based Wax , if you have sensitive or extra dry skin",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "Best Waxing Deal",
price: 1699,
mrp: 3398,
discount: "50% Off",
duration: "90 minutes",
image: bestWaxingDeal,
includes: [
"Wax : Full Body with Bikini",
"Richleon White Choc Liposoluble wax",
"Leaves skin soft ,supple & tan free"
],
info: [
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid taking Oil based Wax , if you have sensitive or extra dry skin",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "White Choc FA & UA",
price: 349,
mrp: 499,
discount: "30% Off",
duration: "20 minutes",
image: whiteChocFAUA,
includes: [
"Wax : Full arms & Under arms",
"Richelon White Choc Liposoluble wax",
"Leaves skin soft ,supple & tan free"
],
info: [
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid taking Oil based Wax , if you have sensitive or extra dry skin",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "White Choc FA",
price: 309,
mrp: 442,
discount: "30% Off",
duration: "15 minutes",
image: whiteChocFA,
includes: [
"Wax : Full arms wax without under arms",
"Richelon White Choc Liposoluble wax",
"Leaves skin soft ,supple & tan free"
],
info: [
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid taking Oil based Wax , if you have sensitive or extra dry skin",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "White Choc HA",
price: 199,
mrp: 284,
discount: "30% Off",
duration: "15 minutes",
image: whiteChocHA,
includes: [
"Wax : Half Arms wax",
"Richelon White Choc Liposoluble wax",
"Leaves skin soft ,supple & tan free"
],
info: [
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid taking Oil based Wax , if you have sensitive or extra dry skin",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "White Choc FL",
price: 399,
mrp: 570,
discount: "30% Off",
duration: "20 minutes",
image: whiteChocFL,
includes: [
"Wax : Full legs wax",
"Richelon White Choc Liposoluble wax",
"Leaves skin soft ,supple & tan free"
],
info: [
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid taking Oil based Wax , if you have sensitive or extra dry skin",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "White Choc HL",
price: 249,
mrp: 356,
discount: "30% Off",
duration: "15 minutes",
image: whiteChocHalfLegs,
includes: [
"Wax : HAlf legs wax",
"Richelon White Choc Liposoluble wax",
"Leaves skin soft ,supple & tan free"
],
info: [
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid taking Oil based Wax , if you have sensitive or extra dry skin",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "White Choc Half Back/Stomach",
price: 399,
mrp: 570,
discount: "30% Off",
duration: "15 minutes",
image: whiteChocHalfBack,
includes: [
"Wax : Half back or Stomach wax",
"Richelon White Choc Liposoluble wax",
"Leaves skin soft ,supple & tan free"
],
info: [
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid taking Oil based Wax , if you have sensitive or extra dry skin",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "White Choc Full Back",
price: 499,
mrp: 713,
discount: "30% Off",
duration: "25 minutes",
image: whiteChocFullBack,
includes: [
"Wax : Full back wax",
"Richelon White Choc Liposoluble wax",
"Leaves skin soft ,supple & tan free"
],
info: [
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid taking Oil based Wax , if you have sensitive or extra dry skin",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "White Choc Bikini",
price: 699,
mrp: 999,
discount: "30% Off",
duration: "25 minutes",
image: whiteChocBikini,
includes: [
"Wax : Bikini wax",
"Richelon White Choc Liposoluble wax",
"Leaves skin soft ,supple & tan free"
],
info: [
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid taking Oil based Wax , if you have sensitive or extra dry skin",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "White Choc Under Arms",
price: 99,
mrp: 142,
discount: "30% Off",
duration: "10 minutes",
image: whiteChocUnderArms,
includes: [
"Wax : Under arms wax",
"Richelon White Choc Liposoluble wax",
"Leaves skin soft ,supple & tan free"
],
info: [
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid taking Oil based Wax , if you have sensitive or extra dry skin",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
}
],
"Rica Wax": [
{
title: "Rica Full Body Wax",
price: 899,
mrp: 1798,
discount: "50% Off",
duration: "60 minutes",
image: ricaFullBody,
includes: ["Rica Wax : Full Body without bikini"],
info: [
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid taking Rica Wax , if you have sensitive or extra dry skin",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "Rica FA+FL+UA",
price: 599,
mrp: 1198,
discount: "50% Off",
duration: "45 minutes",
image: ricaFAFLUA,
includes: ["Rica Wax : Full arms, Full legs & Under arms"],
info: [
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid taking Rica Wax , if you have sensitive or extra dry skin",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "Rica Full Arms Wax",
price: 349,
mrp: 698,
discount: "50% Off",
duration: "20 minutes",
image: ricaFullArms,
includes: ["Rica Wax : Full arms wax"],
info: [
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid taking Rica Wax , if you have sensitive or extra dry skin",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "Rica Half Legs Wax",
price: 299,
mrp: 598,
discount: "50% Off",
duration: "15 minutes",
image: ricaHalfLegs,
includes: ["Rica Wax : Half legs wax"],
info: [
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid taking Rica Wax , if you have sensitive or extra dry skin",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "Rica Full Legs Wax",
price: 399,
mrp: 798,
discount: "50% Off",
duration: "25 minutes",
image: ricaFullLegs,
includes: ["Rica Wax : Full legs wax"],
info: [
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid taking Rica Wax , if you have sensitive or extra dry skin",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "Rica Stomach / Half Back Wax",
price: 399,
mrp: 798,
discount: "50% Off",
duration: "25 minutes",
image: ricaStomachHalfBack,
includes: ["Rica Wax : Stomach / Half back wax"],
info: [
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid taking Rica Wax , if you have sensitive or extra dry skin",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "Rica Full Back Wax",
price: 499,
mrp: 998,
discount: "50% Off",
duration: "30 minutes",
image: ricaFullBack,
includes: ["Rica Wax : Full back wax"],
info: [
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid taking Rica Wax , if you have sensitive or extra dry skin",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "Rica Bikini Wax",
price: 599,
mrp: 1198,
discount: "50% Off",
duration: "25 minutes",
image: ricaBikini,
includes: ["Rica Wax : Bikini wax"],
info: [
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid taking Rica Wax , if you have sensitive or extra dry skin",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "Rica Under Arms Wax",
price: 149,
mrp: 298,
discount: "50% Off",
duration: "10 minutes",
image: ricaUnderArms,
includes: ["Rica Wax : Under arms wax"],
info: [
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid taking Rica Wax , if you have sensitive or extra dry skin",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
}
],
"Roll On Wax": [
{
title: "ROLL ON Full Body",
price: 1499,
mrp: 2998,
discount: "50% Off",
duration: "80 minutes",
image: rollOnFullBody,
includes: ["White Choc Roll On Wax"],
info: [
"Full Body without bikini",
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid taking Rica Wax , if you have sensitive or extra dry skin",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "ROLL ON FA+ FL+UA",
price: 1049,
mrp: 2098,
discount: "50% Off",
duration: "70 minutes",
image: rollOnFAFLUA,
includes: ["White Choc Roll On Wax"],
info: [
"Full Legs,Full Arms & Underarms",
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid taking Rica Wax , if you have sensitive or extra dry skin",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "Roll On Full Arms",
price: 529,
mrp: 1058,
discount: "50% Off",
duration: "30 minutes",
image: rollOnFullArms,
includes: ["White ChocRoll On wax"],
info: [
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid taking Rica Wax , if you have sensitive or extra dry skin",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "Roll On Half Legs",
price: 499,
mrp: 998,
discount: "50% Off",
duration: "20 minutes",
image: rollOnHalfLegs,
includes: ["White Choc Roll On Wax"],
info: [
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid taking Rica Wax , if you have sensitive or extra dry skin",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "Roll On Full Legs",
price: 649,
mrp: 1298,
discount: "50% Off",
duration: "34 minutes",
image: rollOnFullLegs,
includes: ["white Choc Roll On wax"],
info: [
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid taking Rica Wax , if you have sensitive or extra dry skin",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "Roll On Stomach",
price: 549,
mrp: 1098,
discount: "50% Off",
duration: "25 minutes",
image: rollOnStomach,
includes: ["White Choc Roll On wax"],
info: [
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid taking Rica Wax , if you have sensitive or extra dry skin",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "Roll On Half Back",
price: 549,
mrp: 1098,
discount: "50% Off",
duration: "25 minutes",
image: rollOnHalfBack,
includes: ["White Choc Roll On WAX"],
info: [
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid taking Rica Wax , if you have sensitive or extra dry skin",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "Roll On Full Back",
price: 599,
mrp: 856,
discount: "30% Off",
duration: "40 minutes",
image: rollOnFullBack,
includes: ["White Choc Roll On wax"],
info: [
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid taking Rica Wax , if you have sensitive or extra dry skin",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
}
],
"Facial Wax": [
{
title: "Full Face Wax",
price: 399,
mrp: 798,
discount: "50% Off",
duration: "40 minutes",
image: fullFaceWax,
includes: ["Product Used: RIca Brazilian peel off wax"],
info: [
"Rica Brazilian peel off wax is safe for sensitive areas",
"Rica Brazilian peel off wax is less painful than strip wax",
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid taking Oil based Wax , if you have sensitive or extra dry skin",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "Upper Lips",
price: 60,
mrp: 86,
discount: "30% Off",
duration: "10 minutes",
image: upperLipsWax,
includes: ["Product Used: Rica Brazilian Wax"],
info: [
"Rica Brazilian peel off wax is safe for sensitive areas",
"Rica Brazilian peel off wax is less painful than strip wax",
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid taking Oil based Wax , if you have sensitive or extra dry skin",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "Chin",
price: 65,
mrp: 93,
discount: "30% Off",
duration: "10 minutes",
image: chinWax,
includes: ["Product Used: RICA Brazilian Wax"],
info: [
"Rica Brazilian peel off wax is safe for sensitive areas",
"Rica Brazilian peel off wax is less painful than strip wax",
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid taking Oil based Wax , if you have sensitive or extra dry skin",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
},
{
title: "Side Lock",
price: 99,
mrp: 141,
discount: "30% Off",
duration: "15 minutes",
image: sideLockWax,
includes: ["Product Used: Rica Brazilian wax"],
info: [
"Rica Brazilian peel off wax is safe for sensitive areas",
"Rica Brazilian peel off wax is less painful than strip wax",
"Avoid using moisturiser/oil before taking waxing services",
"Air conditioning is recommended for waxing during summer and monsoon",
"Without Air Conditioning , waxing may not yield desired result",
"Avoid taking Oil based Wax , if you have sensitive or extra dry skin",
"Avoid waxing in areas with wounds/injuries /previous history of skin reaction",
"Post waxing some may experience redness/inflammation,which subsides in few hr",
"In case of undergrowth or razor usage , waxing may not yield desired result",
"Usage of ice is recommended in case of redness / bumpiness",
"Any service related complaint should be reported within 24 hrs with pictures via email"
]
}
]
};

export default function WaxingServices() {
  const navigate = useNavigate();
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [selected, setSelected] = useState<WaxingService | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (cat: string) => {
    sectionRefs.current[cat]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="bg-[#fcf8ff] min-h-screen">
      {/* TITLE IN MIDDLE WITH BACK BUTTON */}
      <div className="py-4 md:py-6 lg:py-8 text-center bg-white border-b relative">
        {/* Back Arrow Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors shadow-sm"
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">Waxing</h1>
        <p className="text-xs md:text-sm text-gray-500 mt-1 uppercase tracking-widest">Premium Salon Services</p> 
      </div>

      {/* NAVBAR STYLING (Same as FacialServices.tsx) */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md py-3 md:py-4 border-b">
        <div className="flex justify-center">
          <div className="flex gap-3 md:gap-4 overflow-x-auto px-2 md:px-6 no-scrollbar pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => scrollToSection(cat)}
                className="px-4 py-1.5 md:px-6 md:py-2.5 rounded-full bg-purple-100 text-purple-700 font-bold text-xs md:text-sm whitespace-nowrap hover:bg-purple-700 hover:text-white transition-all shadow-sm border border-purple-200"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES LIST */}
      <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-10 py-6 md:py-10 space-y-8 md:space-y-20">
        {categories.map((cat) => (
          <div key={cat} ref={(el) => (sectionRefs.current[cat] = el)} className="scroll-mt-32">
            <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-8">
              <h2 className="text-lg md:text-xl lg:text-2xl font-black text-gray-800 uppercase tracking-tight">{cat}</h2>
              <div className="h-1 flex-1 bg-gradient-to-r from-purple-200 to-transparent rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {allWaxingData[cat]?.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl md:rounded-2xl shadow-sm hover:shadow-lg flex flex-col md:flex-row md:items-stretch overflow-hidden transition-shadow"
                >
                  <div className="w-full h-48 md:w-36 lg:w-44 md:h-auto flex-shrink-0 overflow-hidden rounded-t-xl md:rounded-l-xl md:rounded-t-none">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  <div className="p-3 md:p-4 flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm md:text-base font-bold text-gray-800">{item.title}</h3>
                      <button className="bg-purple-700 text-white px-3 md:px-4 py-1 md:py-1.5 rounded-xl text-xs md:text-sm font-bold active:scale-95 transition-transform">
                        ADD
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-black text-base md:text-lg lg:text-xl">₹{item.price}</span>
                      <span className="line-through text-xs text-gray-400">
                        ₹{item.mrp}
                      </span>
                      <span className="text-orange-600 text-xs font-bold">
                        {item.discount}
                      </span>
                    </div>

                    <p className="text-xs text-gray-400 mt-1">
                      ⏱ {item.duration}
                    </p>

                    <ul className="mt-2 md:mt-3 space-y-1">
                      {item.includes.map((i, k) => (
                        <li key={k} className="text-xs md:text-sm text-gray-500">
                          • {i}
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => setSelected(item)}
                      className="mt-2 md:mt-3 text-purple-700 text-xs md:text-sm font-bold hover:underline"
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
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-xl md:rounded-2xl max-w-[480px] w-full mx-4 relative max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-20 bg-gray-100 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center font-bold"
            >
              ✕
            </button>

            <div className="overflow-y-auto p-4 md:p-6">
              <div className="flex gap-2 md:gap-4 mb-4 md:mb-6">
                <img
                  src={selected.image}
                  className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-xl"
                />

                <div>
                  <h2 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
                    {selected.title}
                  </h2>

                  <div className="mt-2 flex items-baseline gap-1 md:gap-2">
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

              <div>
                <h4 className="font-bold text-gray-800 mb-1 md:mb-2 text-xs md:text-sm uppercase tracking-wide md:tracking-wider">
                  Includes:
                </h4>

                <ul className="space-y-1 md:space-y-2">
                  {selected.includes.map((i, idx) => (
                    <li key={idx} className="text-xs md:text-sm text-gray-600 flex gap-1 md:gap-2">
                      <span className="text-purple-500">✔</span> {i}
                    </li>
                  ))}
                </ul>
              </div>

              {selected.info && (
                <div className="bg-gray-50 p-3 md:p-4 rounded-lg md:rounded-xl mt-3 md:mt-4">
                  <h4 className="font-bold text-gray-800 mb-1 md:mb-2 text-xs md:text-sm uppercase tracking-wide md:tracking-wider">
                    Information:
                  </h4>

                  <ul className="space-y-1 md:space-y-1.5">
                    {selected.info.map((i, idx) => (
                      <li key={idx} className="text-xs md:text-sm text-gray-900 flex gap-1 md:gap-2 items-start">
                        <span className="mt-1 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

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