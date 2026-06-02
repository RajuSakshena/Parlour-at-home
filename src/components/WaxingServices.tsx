import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";

/* =========================
   IMAGE IMPORTS (src/images/)
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
   NAV MENU
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

/* =========================
   SERVICE DATA
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
    },
    {
      title: "Butt Wax",
      price: 239,
      mrp: 341,
      discount: "30% Off",
      duration: "25 minutes",
      image: buttWax,
      includes: ["Product Used: Honey wax"],
      info: [],
    },
    {
      title: "Bikini",
      price: 499,
      mrp: 713,
      discount: "30% Off",
      duration: "25 minutes",
      image: bikiniWax,
      includes: ["Excluding butt(Honey wax)"],
      info: ["Product Used: Honey wax"],
    },
    {
      title: "Bikini & Butt Wax",
      price: 649,
      mrp: 927,
      discount: "30% Off",
      duration: "30 minutes",
      image: bikiniButtWax,
      includes: ["Product Used: Honey wax"],
      info: [],
    },
    {
      title: "Under Arms Wax",
      price: 59,
      mrp: 118,
      discount: "50% Off",
      duration: "10 minutes",
      image: underArmsWax,
      includes: ["Product used - Honey Wax"],
      info: [],
    },
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
        "Leaves skin soft ,supple & tan free",
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
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
        "Leaves skin soft ,supple & tan free",
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
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
        "Leaves skin soft ,supple & tan free",
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
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
        "Leaves skin soft ,supple & tan free",
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
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
        "Leaves skin soft ,supple & tan free",
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
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
        "Leaves skin soft ,supple & tan free",
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
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
        "Leaves skin soft ,supple & tan free",
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
    },
    {
      title: "White Choc HL",
      price: 249,
      mrp: 356,
      discount: "30% Off",
      duration: "15 minutes",
      image: whiteChocHalfLegs,
      includes: [
        "Wax : Half legs wax",
        "Richelon White Choc Liposoluble wax",
        "Leaves skin soft ,supple & tan free",
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
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
        "Leaves skin soft ,supple & tan free",
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
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
        "Leaves skin soft ,supple & tan free",
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
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
        "Leaves skin soft ,supple & tan free",
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
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
        "Leaves skin soft ,supple & tan free",
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
    },
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
    },
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
    },
    {
      title: "Roll On Full Arms",
      price: 529,
      mrp: 1058,
      discount: "50% Off",
      duration: "30 minutes",
      image: rollOnFullArms,
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
    },
    {
      title: "Roll On Full Legs",
      price: 649,
      mrp: 1298,
      discount: "50% Off",
      duration: "34 minutes",
      image: rollOnFullLegs,
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
    },
  ],
  "Facial Wax": [
    {
      title: "Full Face Wax",
      price: 399,
      mrp: 798,
      discount: "50% Off",
      duration: "40 minutes",
      image: fullFaceWax,
      includes: ["Product Used: Rica Brazilian peel off wax"],
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
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
        "Any service related complaint should be reported within 24 hrs with pictures via email",
      ],
    },
  ],
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
export default function WaxingServices() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<WaxingService | null>(null);
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

  // Calculate total number of waxing services
  const totalServices = Object.values(allWaxingData).reduce(
    (acc, services) => acc + services.length,
    0
  );

  // JSON-LD Structured Data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.parlouratdoorstep.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.parlouratdoorstep.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Waxing Services at Home",
        item: "https://www.parlouratdoorstep.com/services/waxing",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Waxing Services",
    provider: {
      "@type": "LocalBusiness",
      name: "Parlour at Doorstep",
      telephone: "+919811923486",
      url: "https://www.parlouratdoorstep.com",
      areaServed: {
        "@type": "City",
        name: "Delhi NCR",
      },
    },
    areaServed: ["Delhi", "Noida", "Gurugram", "Ghaziabad", "Faridabad"],
    description:
      "Professional waxing services at home including Honey Wax, White Chocolate Wax, Rica Wax, Roll On Wax, and Facial Wax. Certified beauticians bring salon-quality waxing treatments to your doorstep.",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "59",
      highPrice: "1699",
      offerCount: totalServices,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Waxing Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Honey Wax" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "White Chocolate Wax" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rica Wax" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roll On Wax" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Facial Wax" } },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What types of waxing services do you offer at home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer Honey Wax, White Chocolate Wax, Rica Wax, Roll On Wax, and Facial Wax services. Each type includes various options like full body, half legs, full arms, underarms, bikini, and back waxing.",
        },
      },
      {
        "@type": "Question",
        name: "How long should my hair be for effective waxing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For effective waxing, hair should be at least 6mm in length. This ensures the wax can properly grip and remove the hair from the root.",
        },
      },
      {
        "@type": "Question",
        name: "What is the price range for waxing services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our waxing services start from ₹59 for underarms and go up to ₹1699 for full body with bikini. Most services are available at 30-50% discount.",
        },
      },
      {
        "@type": "Question",
        name: "Which areas do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve Delhi NCR including Delhi, Noida, Gurugram, Ghaziabad, and Faridabad.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book a waxing service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can book by clicking the 'Book Now' button or calling us directly at +91 9811923486. You can also reach us on WhatsApp using the floating button on the right.",
        },
      },
      {
        "@type": "Question",
        name: "Is air conditioning required for waxing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Air conditioning is recommended for waxing during summer and monsoon. Without air conditioning, waxing may not yield the desired result as the wax needs proper temperature conditions.",
        },
      },
      {
        "@type": "Question",
        name: "What should I avoid before waxing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Avoid using moisturizer or oil before waxing services. Also avoid waxing in areas with wounds, injuries, or previous history of skin reactions.",
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Waxing Services at Home in Delhi NCR | Parlour at Doorstep</title>
        <meta
          name="description"
          content="Book professional waxing services at home in Delhi, Noida, Gurugram, Ghaziabad and Faridabad. Honey Wax, White Chocolate Wax, Rica Wax, Roll On Wax and Facial Wax by certified beauticians."
        />
        <link rel="canonical" href="https://www.parlouratdoorstep.com/services/waxing" />
        <meta property="og:title" content="Waxing Services at Home in Delhi NCR | Parlour at Doorstep" />
        <meta
          property="og:description"
          content="Book professional waxing services at home in Delhi, Noida, Gurugram, Ghaziabad and Faridabad. Honey Wax, White Chocolate Wax, Rica Wax, Roll On Wax and Facial Wax by certified beauticians."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.parlouratdoorstep.com/services/waxing" />
        <meta property="og:site_name" content="Parlour at Doorstep" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Waxing Services at Home in Delhi NCR | Parlour at Doorstep" />
        <meta
          name="twitter:description"
          content="Book professional waxing services at home in Delhi, Noida, Gurugram, Ghaziabad and Faridabad. Honey Wax, White Chocolate Wax, Rica Wax, Roll On Wax and Facial Wax by certified beauticians."
        />
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
            Waxing
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

        {/* SECTIONS */}
        <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-10 py-6 md:py-10 space-y-8 md:space-y-16">
          {categories.map((cat) => (
            <div key={cat} ref={(el) => (sectionRefs.current[cat] = el)}>
              <h2 className="text-lg md:text-xl lg:text-2xl font-black mb-4 md:mb-6 uppercase tracking-tight">
                {cat}
              </h2>

              {/* FORCED 3 COLUMNS - NO BREAKPOINTS */}
              <div className="grid grid-cols-3 gap-3">
                {allWaxingData[cat].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl shadow-sm hover:shadow-lg flex flex-col overflow-hidden transition-shadow"
                  >
                    {/* IMAGE - fixed height, object-cover */}
                    <div className="w-full h-28 flex-shrink-0 overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    {/* CONTENT - compact */}
                    <div className="p-3 flex-1 flex flex-col">
                      <h3 className="text-xs font-bold text-gray-800 break-words leading-tight">
                        {item.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1">
                        <span className="font-black text-sm">₹{item.price}</span>
                        <span className="line-through text-xs text-gray-400">₹{item.mrp}</span>
                        <span className="bg-orange-100 text-orange-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                          {item.discount}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-400 mt-0.5">⏱ {item.duration}</p>

                      <ul className="mt-2 space-y-0.5 flex-1 text-[11px] text-gray-500">
                        {item.includes.slice(0, 2).map((i, k) => (
                          <li key={k} className="break-words">• {i}</li>
                        ))}
                        {item.includes.length > 2 && (
                          <li className="text-purple-600 text-[10px]">+{item.includes.length - 2} more</li>
                        )}
                      </ul>

                      <button
                        onClick={() => setSelected(item)}
                        className="mt-2 text-purple-700 text-[11px] font-bold hover:underline self-start active:scale-95 transition-transform"
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

        {/* DETAIL MODAL */}
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
                  {selected.info && selected.info.length > 0 && (
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
                  )}
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
