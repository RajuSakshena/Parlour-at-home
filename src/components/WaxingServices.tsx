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
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (cat: string) => {
    sectionRefs.current[cat]?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveCategory(cat);
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

      {/* NAVBAR STYLING (Glassmorphism + Active State) */}
      <div className="sticky top-0 z-40 bg-white/70 backdrop-blur-md py-3 md:py-4 border-b">
        <div className="flex justify-center">
          <div className="flex gap-3 md:gap-4 overflow-x-auto px-2 md:px-6 no-scrollbar pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => scrollToSection(cat)}
                className={`px-4 py-1.5 md:px-6 md:py-2.5 rounded-full font-bold text-xs md:text-sm whitespace-nowrap transition-all duration-300 shadow-sm border ${
                  activeCategory === cat
                    ? "bg-purple-700 text-white shadow-md"
                    : "bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-700 hover:text-white"
                }`}
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
            {/* Section Heading - Bigger + Gradient Bar */}
            <div className="flex items-center gap-2 md:gap-4 mb-6 md:mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 tracking-[-0.02em] uppercase">
                {cat}
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {allWaxingData[cat]?.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white/70 backdrop-blur-md border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:scale-[1.02] flex flex-col md:flex-row md:items-stretch overflow-hidden transition-all duration-300"
                >
                  {/* Image Container with Hover Zoom */}
                  <div className="w-full h-48 md:w-36 lg:w-44 md:h-auto flex-shrink-0 overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-t-none">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-4 md:p-5 flex-1 flex flex-col">
                    <div className="flex justify-between items-start gap-3">
                      <h3 className="text-sm md:text-base font-bold text-gray-800 leading-tight flex-1">
                        {item.title}
                      </h3>
                      {/* ADD Button - Gradient + Rounded Full */}
                      <button className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-5 py-1.5 rounded-full text-xs font-bold shadow-md hover:scale-105 active:scale-95 transition-all duration-300 flex-shrink-0 whitespace-nowrap">
                        ADD
                      </button>
                    </div>

                    {/* Price Section */}
                    <div className="flex items-center gap-2 mt-2">
                      <span className="font-black text-xl md:text-2xl text-gray-900">₹{item.price}</span>
                      <span className="line-through text-xs text-gray-400">₹{item.mrp}</span>
                      <span className="text-orange-600 text-xs font-bold bg-orange-100 px-2.5 py-px rounded-full">
                        {item.discount}
                      </span>
                    </div>

                    <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                      ⏱ <span className="font-medium">{item.duration}</span>
                    </p>

                    {/* Includes */}
                    <ul className="mt-3 space-y-1 flex-1">
                      {item.includes.map((i, k) => (
                        <li key={k} className="text-xs md:text-sm text-gray-500 flex items-start gap-1.5">
                          <span className="text-purple-400 mt-0.5">•</span>
                          <span>{i}</span>
                        </li>
                      ))}
                    </ul>

                    {/* VIEW DETAILS */}
                    <button
                      onClick={() => setSelected(item)}
                      className="mt-4 text-purple-600 text-xs md:text-sm font-semibold hover:underline flex items-center gap-1 self-start transition-colors"
                    >
                      VIEW DETAILS
                      <span className="text-base leading-none">→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* DETAIL MODAL - Premium Glass + Animation */}
      {selected && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 transition-opacity duration-300"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white/95 backdrop-blur-2xl rounded-3xl max-w-[480px] w-full mx-4 relative max-h-[85vh] shadow-2xl transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-20 bg-white shadow-md text-gray-700 w-8 h-8 rounded-2xl flex items-center justify-center font-bold text-xl hover:rotate-90 transition-transform"
            >
              ✕
            </button>

            <div className="overflow-y-auto max-h-[85vh] p-6 md:p-8">
              {/* Header Image + Info */}
              <div className="flex gap-4 md:gap-6 mb-6">
                <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 overflow-hidden rounded-2xl shadow-inner">
                  <img
                    src={selected.image}
                    className="w-full h-full object-cover"
                    alt={selected.title}
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                    {selected.title}
                  </h2>

                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-3xl font-black text-purple-700">₹{selected.price}</span>
                    <span className="text-sm text-gray-400 line-through">₹{selected.mrp}</span>
                    <span className="text-orange-600 text-sm font-bold">{selected.discount}</span>
                  </div>

                  <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                    <span className="inline-block w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                    Duration: {selected.duration}
                  </p>
                </div>
              </div>

              {/* Includes */}
              <div>
                <h4 className="font-bold text-gray-800 mb-3 text-sm uppercase tracking-[0.5px]">
                  Includes
                </h4>
                <ul className="space-y-3">
                  {selected.includes.map((i, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex gap-3">
                      <span className="text-purple-500 text-lg leading-none mt-px">✔</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Information */}
              {selected.info && selected.info.length > 0 && (
                <div className="mt-8 bg-gradient-to-br from-purple-50 to-white border border-purple-100 p-5 rounded-2xl">
                  <h4 className="font-bold text-gray-800 mb-3 text-sm uppercase tracking-[0.5px]">
                    Important Information
                  </h4>
                  <ul className="space-y-3 text-xs md:text-sm">
                    {selected.info.map((i, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-700">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Book Now Button - Premium Gradient */}
              <button className="w-full mt-8 bg-gradient-to-r from-purple-600 to-purple-800 text-white py-4 rounded-2xl text-base font-semibold shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98]">
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}