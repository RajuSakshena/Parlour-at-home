import { useRef, useEffect, useState } from "react";

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
image: WAX_IMG,
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
image: WAX_IMG,
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
image: WAX_IMG,
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
image: WAX_IMG,
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
image: WAX_IMG,
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
image: WAX_IMG,
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
image: WAX_IMG,
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
image: WAX_IMG,
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
image: WAX_IMG,
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
image: WAX_IMG,
includes: ["Product Used: Honey wax"],
info: []
},
{
title: "Bikini",
price: 499,
mrp: 713,
discount: "30% Off",
duration: "25 minutes",
image: WAX_IMG,
includes: ["Excluding butt(Honey wax)"],
info: ["Product Used: Honey wax"]
},
{
title: "Bikini & Butt Wax",
price: 649,
mrp: 927,
discount: "30% Off",
duration: "30 minutes",
image: WAX_IMG,
includes: ["Product Used: Honey wax"],
info: []
},
{
title: "Under Arms Wax",
price: 59,
mrp: 118,
discount: "50% Off",
duration: "10 minutes",
image: WAX_IMG,
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
image: WAX_IMG,
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
image: WAX_IMG,
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
image: WAX_IMG,
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
image: WAX_IMG,
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
image: WAX_IMG,
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
image: WAX_IMG,
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
image: WAX_IMG,
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
image: WAX_IMG,
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
image: WAX_IMG,
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
price: 479,
mrp: 684,
discount: "30% Off",
duration: "20 minutes",
image: WAX_IMG,
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
}
],
"Rica Wax": [
{
title: "RICA FA + FL + UA",
price: 899,
mrp: 1798,
discount: "50% Off",
duration: "60 minutes",
image: WAX_IMG,
includes: ["Product: Rica White Chocolate Wax"],
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
title: "RICA Full Arms & UA",
price: 549,
mrp: 784,
discount: "30% Off",
duration: "20 minutes",
image: WAX_IMG,
includes: ["Product: Rica White Chocolate Wax"],
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
title: "RICA Full Arms",
price: 449,
mrp: 642,
discount: "30% Off",
duration: "25 minutes",
image: WAX_IMG,
includes: ["Product: Rica White Chocolate Wax - Without Under arms"],
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
title: "RICA: Half Leg",
price: 349,
mrp: 499,
discount: "30% Off",
duration: "15 minutes",
image: WAX_IMG,
includes: ["Product: Rica White Chocolate Wax"],
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
title: "RICA Full Legs",
price: 589,
mrp: 842,
discount: "30% Off",
duration: "20 minutes",
image: WAX_IMG,
includes: ["Product: Rica White Chocolate Wax"],
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
title: "Rica Half Back / Stomach",
price: 449,
mrp: 642,
discount: "30% Off",
duration: "15 minutes",
image: WAX_IMG,
includes: ["Product: Rica White Chocolate Wax"],
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
title: "RICA Full Back",
price: 499,
mrp: 713,
discount: "30% Off",
duration: "20 minutes",
image: WAX_IMG,
includes: ["Product: Rica White Chocolate Wax"],
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
title: "RICA WAX Bikini",
price: 849,
mrp: 1213,
discount: "30% Off",
duration: "45 minutes",
image: WAX_IMG,
includes: ["Excluding butt(RICA Brazilian Wax)"],
info: [
"Rica Brazilian peel off wax is less painful than strip wax",
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
title: "RICA Wax Butt",
price: 410,
mrp: 585,
discount: "30% Off",
duration: "30 minutes",
image: WAX_IMG,
includes: ["Product Used: Rica White Choc Wax"],
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
title: "RICA Bikini & Butt",
price: 1199,
mrp: 1713,
discount: "30% Off",
duration: "60 minutes",
image: WAX_IMG,
includes: ["Product Used: RICA Brazillian Wax"],
info: [
"Rica Brazilian peel off wax is less painful than strip wax",
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
title: "Rica Bikini Line/Butt Line",
price: 249,
mrp: 356,
discount: "30% Off",
duration: "25 minutes",
image: WAX_IMG,
includes: ["Product Used: Rica Wax / Rica Brazilian wax"],
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
title: "RICA Under Arms",
price: 129,
mrp: 184,
discount: "30% Off",
duration: "10 minutes",
image: WAX_IMG,
includes: ["Product : RICA White Chocolate/Brazilian"],
info: [
"Rica Brazilian peel off wax is less painful than strip wax",
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
title: "Roll On Full Body+Bikini",
price: 2699,
mrp: 3856,
discount: "30% Off",
duration: "165 minutes",
image: WAX_IMG,
includes: ["Full body + Bikini(Excluding face)"],
info: [
"White Choc Roll on wax Full Body",
"Rica Brazilian Bikini wax",
"Face wax is not included",
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
title: "Full Body Roll On",
price: 2099,
mrp: 3499,
discount: "40% Off",
duration: "120 minutes",
image: WAX_IMG,
includes: ["Excluding Face , Bikini & Butt"],
info: [
"White Chocolate Roll on - Full body wax",
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
image: WAX_IMG,
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
image: WAX_IMG,
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
image: WAX_IMG,
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
image: WAX_IMG,
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
image: WAX_IMG,
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
image: WAX_IMG,
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
image: WAX_IMG,
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
image: WAX_IMG,
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
image: WAX_IMG,
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
image: WAX_IMG,
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
image: WAX_IMG,
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
      {/* TITLE IN MIDDLE */}
      <div className="py-8 text-center bg-white border-b">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Waxing</h1>
        <p className="text-gray-500 text-sm mt-1 uppercase tracking-widest">Premium Salon Services</p> 
      </div>

      {/* NAVBAR STYLING (Same as FacialServices.tsx) */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md py-4 border-b">
        <div className="flex justify-center">
          <div className="flex gap-4 overflow-x-auto px-6 no-scrollbar pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => scrollToSection(cat)}
                className="px-6 py-2.5 rounded-full bg-purple-100 text-purple-700 font-bold text-sm whitespace-nowrap hover:bg-purple-700 hover:text-white transition-all shadow-sm border border-purple-200"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES LIST */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-20">
        {categories.map((cat) => (
          <div key={cat} ref={(el) => (sectionRefs.current[cat] = el)} className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-black text-gray-800 uppercase tracking-tighter">{cat}</h2>
              <div className="h-1 flex-1 bg-gradient-to-r from-purple-200 to-transparent rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {allWaxingData[cat]?.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl shadow flex overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-36 md:w-44 object-cover"
                  />

                  <div className="p-4 flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold">{item.title}</h3>
                      <button className="bg-purple-700 text-white px-4 py-1.5 rounded-xl text-xs font-bold">
                        ADD
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-black">₹{item.price}</span>
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

                    <ul className="mt-3 space-y-1">
                      {item.includes.map((i, k) => (
                        <li key={k} className="text-xs text-gray-500">
                          • {i}
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => setSelected(item)}
                      className="mt-3 text-purple-700 text-xs font-bold hover:underline"
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

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl max-w-md w-full mx-4 relative max-h-[80vh]">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-20 bg-gray-100 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center font-bold"
            >
              ✕
            </button>

            <div className="overflow-y-auto p-6">
              <div className="flex gap-4 mb-6">
                <img
                  src={selected.image}
                  className="w-28 h-28 object-cover rounded-xl"
                />

                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {selected.title}
                  </h2>

                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-lg font-bold text-purple-700">
                      ₹{selected.price}
                    </span>
                    <span className="text-gray-400 line-through text-sm">
                      ₹{selected.mrp}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 mt-1">
                    Duration: {selected.duration}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-2 text-sm uppercase tracking-wider">
                  Includes:
                </h4>

                <ul className="space-y-2">
                  {selected.includes.map((i, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex gap-2">
                      <span className="text-purple-500">✔</span> {i}
                    </li>
                  ))}
                </ul>
              </div>

              {selected.info && (
                <div className="bg-gray-50 p-4 rounded-xl mt-4">
                  <h4 className="font-bold text-gray-800 mb-2 text-sm uppercase tracking-wider">
                    Information:
                  </h4>

                  <ul className="space-y-1.5">
                    {selected.info.map((i, idx) => (
                      <li key={idx} className="text-xs text-gray-900 flex gap-2 items-start">
                        <span className="mt-1 w-1 h-1 bg-gray-400 rounded-full" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button className="w-full mt-6 bg-purple-700 text-white py-3 rounded-xl font-bold shadow-lg shadow-purple-200">
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}