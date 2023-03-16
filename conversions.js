"use strict";

function lbsToKg(pounds) {
    const KILOGRAMS_PER_POUNDS = 0.45359237;
    return pounds * KILOGRAMS_PER_POUNDS;
}

function kgToLbs(kilograms) {
    const POUNDS_PER_KILOGRAM = 2.20462262;
    return kilograms * POUNDS_PER_KILOGRAM;
}