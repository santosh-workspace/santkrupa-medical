/**
 * दुकानाची माहिती — एकाच ठिकाणी बदला, संपूर्ण वेबसाइटवर आपोआप दिसेल.
 *
 * महत्वाचे: अचूक फोन / पत्ता / वेळ उपलब्ध नसेल तर खोटी माहिती टाकू नका.
 * खालील *PLACEHOLDER* मूल्ये रिकामी ठेवा — वेबसाइट आपोआप सौम्य
 * "लवकरच अद्ययावत होईल" असा संदेश दाखवेल.
 */

export const SHOP_NAME = "संतकृपा मेडिकल";
export const SHOP_NAME_EN = "Santkrupa Medical";

export const SHOP_TAGLINE = "आपल्या आरोग्याच्या गरजांसाठी विश्वासू ठिकाण.";

/* ---- संपर्क (उपलब्ध झाल्यावर भरा) ---- */
// उदाहरण: SHOP_PHONE_DISPLAY = "+91 98220 12345"
// उदाहरण: SHOP_PHONE_LINK = "+919822012345" (tel: साठी, मोकळ्या जागा नकोत)
export const SHOP_PHONE_DISPLAY: string = "";
export const SHOP_PHONE_LINK: string = "";

export const SHOP_ADDRESS: string = "";
export const SHOP_AREA_HINT = "महाराष्ट्र";
export const SHOP_TIMINGS: string = "";
export const SHOP_TIMINGS_NOTE = "दुकानाची वेळ लवकरच येथे अद्ययावत केली जाईल.";

/* ---- Maps ---- */
// दुकानाचा अचूक Google Maps लिंक मिळाल्यावर येथे टाका.
// तोपर्यंत नावाने शोधणारी सुरक्षित लिंक वापरली जाते — खोटा पत्ता तयार होत नाही.
export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Santkrupa+Medical+Maharashtra";

export const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Santkrupa+Medical+Maharashtra&output=embed";

export const hasPhone = SHOP_PHONE_DISPLAY.trim().length > 0 && SHOP_PHONE_LINK.trim().length > 0;
export const hasAddress = SHOP_ADDRESS.trim().length > 0;
export const hasTimings = SHOP_TIMINGS.trim().length > 0;
