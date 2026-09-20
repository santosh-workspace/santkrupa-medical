/**
 * दुकानाची अधिकृत माहिती — Google Business Profile शी जुळणारी.
 * हीच माहिती वेबसाइट, JSON-LD आणि साइटवरील पत्त्यासाठी वापरली जाते (NAP).
 */

export const SHOP_NAME = "संतकृपा मेडिकल";
export const SHOP_NAME_EN = "Santkrupa Medical & General Store";

export const SHOP_TAGLINE = "आपल्या आरोग्याच्या गरजांसाठी विश्वासू ठिकाण.";

/* ---- संपर्क ---- */
export const SHOP_PHONE_DISPLAY: string = "+91 99229 69583";
export const SHOP_PHONE_LINK: string = "+919922969583";
export const SHOP_WHATSAPP_LINK: string = "+919922969583";
export const SHOP_EMAIL: string = "mailid.tom@gmail.com";

/* ---- पत्ता (GBP शी शब्दशः जुळणारा) ---- */
export const SHOP_STREET = "Juna Charoli Road, School No. 4";
export const SHOP_LOCALITY = "Alandi Devachi";
export const SHOP_CITY = "Alandi Devachi";
export const SHOP_DISTRICT = "Pune";
export const SHOP_STATE = "Maharashtra";
export const SHOP_PIN = "412105";
export const SHOP_COUNTRY = "IN";

export const SHOP_ADDRESS =
  "Juna Charoli Road, School No. 4, Alandi Devachi, Pune, Maharashtra 412105";
export const SHOP_AREA_HINT = "आळंदी देवाची व परिसर (१० किमी परिसर)";

/* ---- वेळ — दररोज २४ तास ---- */
export const SHOP_TIMINGS = "दररोज २४ तास खुले (२४×७)";
export const SHOP_TIMINGS_NOTE = SHOP_TIMINGS;
export const SHOP_HOURS_OPEN = "00:00";
export const SHOP_HOURS_CLOSE = "23:59";

/* ---- Maps / Business Profile ---- */
export const GOOGLE_MAPS_URL = "https://share.google/56scKV9jJp30T0qwU";

export const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Santkrupa+Medical+%26+General+Store+Alandi+Devachi+Pune+412105&output=embed";

export const hasPhone = SHOP_PHONE_DISPLAY.trim().length > 0 && SHOP_PHONE_LINK.trim().length > 0;
export const hasAddress = SHOP_ADDRESS.trim().length > 0;
export const hasTimings = SHOP_TIMINGS.trim().length > 0;
export const hasEmail = SHOP_EMAIL.trim().length > 0;
