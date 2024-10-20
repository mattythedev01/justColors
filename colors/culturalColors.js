const colors = require("colors");

const culturalColors = {
  // African
  kente: (text) => colors.yellow(colors.green(colors.red(text))),
  adinkra: (text) => colors.black(colors.yellow(text)),
  zulu: (text) => `\x1b[38;2;255;0;0m${text}\x1b[0m`, // Bright red
  maasai: (text) => `\x1b[38;2;230;0;0m${text}\x1b[0m`, // Deep red
  yoruba: (text) => `\x1b[38;2;0;128;0m${text}\x1b[0m`, // Green
  ashanti: (text) => `\x1b[38;2;255;215;0m${text}\x1b[0m`, // Gold
  ndebele: (text) => `\x1b[38;2;255;140;0m${text}\x1b[0m`, // Dark orange
  swahili: (text) => `\x1b[38;2;0;0;255m${text}\x1b[0m`, // Blue
  xhosa: (text) => `\x1b[38;2;128;0;128m${text}\x1b[0m`, // Purple
  fulani: (text) => `\x1b[38;2;165;42;42m${text}\x1b[0m`, // Brown
  tuareg: (text) => `\x1b[38;2;70;130;180m${text}\x1b[0m`, // Steel blue
  dogon: (text) => `\x1b[38;2;210;180;140m${text}\x1b[0m`, // Tan
  berber: (text) => `\x1b[38;2;255;127;80m${text}\x1b[0m`, // Coral
  nubian: (text) => `\x1b[38;2;218;165;32m${text}\x1b[0m`, // Goldenrod

  // Asian
  redEnvelope: (text) => colors.red(colors.yellow(text)),
  jade: (text) => `\x1b[38;2;0;168;107m${text}\x1b[0m`,
  sakura: (text) => `\x1b[38;2;255;183;197m${text}\x1b[0m`, // Cherry blossom pink
  saffron: (text) => `\x1b[38;2;244;196;48m${text}\x1b[0m`,
  royalYellow: (text) => `\x1b[38;2;250;218;94m${text}\x1b[0m`, // Imperial yellow
  peonyRed: (text) => `\x1b[38;2;214;36;53m${text}\x1b[0m`, // Chinese red
  matcha: (text) => `\x1b[38;2;134;167;69m${text}\x1b[0m`, // Japanese green tea color
  amethyst: (text) => `\x1b[38;2;153;102;204m${text}\x1b[0m`, // Korean purple
  turmeric: (text) => `\x1b[38;2;255;199;44m${text}\x1b[0m`, // Indian yellow
  lotus: (text) => `\x1b[38;2;253;190;210m${text}\x1b[0m`, // Light pink
  bamboo: (text) => `\x1b[38;2;118;165;70m${text}\x1b[0m`, // Bamboo green
  cinnabar: (text) => `\x1b[38;2;227;66;52m${text}\x1b[0m`, // Vermilion
  indigo: (text) => `\x1b[38;2;75;0;130m${text}\x1b[0m`, // Deep indigo
  khaki: (text) => `\x1b[38;2;195;176;145m${text}\x1b[0m`, // Light khaki

  // Latin American
  aztecGold: (text) => `\x1b[38;2;195;153;83m${text}\x1b[0m`,
  mayaBlue: (text) => `\x1b[38;2;115;194;251m${text}\x1b[0m`,
  incanRed: (text) => `\x1b[38;2;205;38;38m${text}\x1b[0m`, // Deep red
  amazonGreen: (text) => `\x1b[38;2;34;139;34m${text}\x1b[0m`, // Forest green
  quetzalGreen: (text) => `\x1b[38;2;0;161;107m${text}\x1b[0m`, // Vibrant green
  cacao: (text) => `\x1b[38;2;97;75;58m${text}\x1b[0m`, // Brown
  chiliPepper: (text) => `\x1b[38;2;233;44;44m${text}\x1b[0m`, // Bright red
  marigold: (text) => `\x1b[38;2;255;165;0m${text}\x1b[0m`, // Orange
  taino: (text) => `\x1b[38;2;255;223;0m${text}\x1b[0m`, // Bright yellow
  andeanPink: (text) => `\x1b[38;2;255;192;203m${text}\x1b[0m`, // Light pink
  pampasGrass: (text) => `\x1b[38;2;244;240;236m${text}\x1b[0m`, // Off-white
  guarana: (text) => `\x1b[38;2;128;0;0m${text}\x1b[0m`, // Maroon
  patagoniaBlue: (text) => `\x1b[38;2;137;207;240m${text}\x1b[0m`, // Sky blue
  condorBrown: (text) => `\x1b[38;2;101;67;33m${text}\x1b[0m`, // Dark brown

  // Middle Eastern
  persianBlue: (text) => `\x1b[38;2;28;57;187m${text}\x1b[0m`,
  turkishTurquoise: (text) => `\x1b[38;2;0;244;243m${text}\x1b[0m`,
  arabianGold: (text) => `\x1b[38;2;255;215;0m${text}\x1b[0m`, // Rich gold
  desertSand: (text) => `\x1b[38;2;237;201;175m${text}\x1b[0m`, // Light sandy color
  damascusRose: (text) => `\x1b[38;2;225;127;158m${text}\x1b[0m`, // Rose pink
  saffroniOrange: (text) => `\x1b[38;2;244;196;48m${text}\x1b[0m`, // Saffron orange
  berylGreen: (text) => `\x1b[38;2;222;229;176m${text}\x1b[0m`, // Pale green
  byzantinePurple: (text) => `\x1b[38;2;112;41;99m${text}\x1b[0m`, // Deep purple
  henna: (text) => `\x1b[38;2;191;78;39m${text}\x1b[0m`, // Reddish-brown
  cedarBrown: (text) => `\x1b[38;2;103;75;57m${text}\x1b[0m`, // Cedar wood color
  nileCyan: (text) => `\x1b[38;2;0;191;191m${text}\x1b[0m`, // Bright cyan
  oliveGreen: (text) => `\x1b[38;2;128;128;0m${text}\x1b[0m`, // Olive
  caravanBeige: (text) => `\x1b[38;2;255;253;208m${text}\x1b[0m`, // Light beige
  mosaicBlue: (text) => `\x1b[38;2;0;150;255m${text}\x1b[0m`, // Bright blue

  // Native American
  turquoise: (text) => `\x1b[38;2;64;224;208m${text}\x1b[0m`,
  earthRed: (text) => `\x1b[38;2;191;75;75m${text}\x1b[0m`,
  navajoWhite: (text) => `\x1b[38;2;255;222;173m${text}\x1b[0m`, // Soft, pale orange
  cherokeeRed: (text) => `\x1b[38;2;168;39;39m${text}\x1b[0m`, // Deep reddish-brown
  coyoteBrown: (text) => `\x1b[38;2;129;97;62m${text}\x1b[0m`, // Earthy brown
  puebloBlue: (text) => `\x1b[38;2;93;173;226m${text}\x1b[0m`, // Sky blue
  mesaYellow: (text) => `\x1b[38;2;252;186;3m${text}\x1b[0m`, // Bright yellow
  sageGreen: (text) => `\x1b[38;2;138;154;91m${text}\x1b[0m`, // Muted green
  buffaloOrange: (text) => `\x1b[38;2;204;85;0m${text}\x1b[0m`, // Deep orange
  dreamcatcherPurple: (text) => `\x1b[38;2;155;89;182m${text}\x1b[0m`, // Soft purple
  thunderbirdRed: (text) => `\x1b[38;2;217;0;0m${text}\x1b[0m`, // Bright red
  desertSage: (text) => `\x1b[38;2;173;185;170m${text}\x1b[0m`, // Grayish green
  canyonOrange: (text) => `\x1b[38;2;255;103;0m${text}\x1b[0m`, // Bright orange
  prairieSky: (text) => `\x1b[38;2;135;206;235m${text}\x1b[0m`, // Light blue

  // European
  royalPurple: (text) => `\x1b[38;2;120;81;169m${text}\x1b[0m`,
  celticGreen: (text) => `\x1b[38;2;0;128;0m${text}\x1b[0m`,
  mediterraneanBlue: (text) => `\x1b[38;2;30;144;255m${text}\x1b[0m`, // Bright blue
  tuscanSun: (text) => `\x1b[38;2;255;203;164m${text}\x1b[0m`, // Warm, peachy color
  vikingRed: (text) => `\x1b[38;2;200;16;46m${text}\x1b[0m`, // Deep red
  alpineWhite: (text) => `\x1b[38;2;255;255;255m${text}\x1b[0m`, // Pure white
  renaissanceGold: (text) => `\x1b[38;2;255;215;0m${text}\x1b[0m`, // Rich gold
  lavenderFields: (text) => `\x1b[38;2;230;230;250m${text}\x1b[0m`, // Light lavender
  nordicBlue: (text) => `\x1b[38;2;73;102;141m${text}\x1b[0m`, // Deep blue
  emeraldIsle: (text) => `\x1b[38;2;0;158;96m${text}\x1b[0m`, // Bright green
  venetianRed: (text) => `\x1b[38;2;200;8;21m${text}\x1b[0m`, // Deep red
  saxonyYellow: (text) => `\x1b[38;2;255;219;88m${text}\x1b[0m`, // Bright yellow
  balticAmber: (text) => `\x1b[38;2;227;168;87m${text}\x1b[0m`, // Amber
  alpineSnow: (text) => `\x1b[38;2;255;250;250m${text}\x1b[0m`, // Snow white

  // South Asian
  saffron: (text) => `\x1b[38;2;244;196;48m${text}\x1b[0m`,
  mehndiGreen: (text) => `\x1b[38;2;116;143;93m${text}\x1b[0m`,
  peacockBlue: (text) => `\x1b[38;2;0;128;128m${text}\x1b[0m`, // Deep teal
  kumkumRed: (text) => `\x1b[38;2;255;51;51m${text}\x1b[0m`, // Bright vermilion
  turmericYellow: (text) => `\x1b[38;2;255;199;44m${text}\x1b[0m`, // Deep yellow
  banyanGreen: (text) => `\x1b[38;2;50;205;50m${text}\x1b[0m`, // Lush green
  rangoliBorder: (text) => `\x1b[38;2;255;165;0m${text}\x1b[0m`, // Bright orange
  kathakaliBlue: (text) => `\x1b[38;2;0;71;171m${text}\x1b[0m`, // Deep blue
  gulabJamun: (text) => `\x1b[38;2;128;0;128m${text}\x1b[0m`, // Deep purple
  bandhaniPink: (text) => `\x1b[38;2;255;105;180m${text}\x1b[0m`, // Hot pink
  madhubaniRed: (text) => `\x1b[38;2;204;0;0m${text}\x1b[0m`, // Bright red
  nilgiriTeal: (text) => `\x1b[38;2;0;128;128m${text}\x1b[0m`, // Teal
  kashmirSaffron: (text) => `\x1b[38;2;244;196;48m${text}\x1b[0m`, // Saffron
  sundarbansGreen: (text) => `\x1b[38;2;0;100;0m${text}\x1b[0m`, // Dark green

  // East Asian
  imperialRed: (text) => `\x1b[38;2;237;41;57m${text}\x1b[0m`,
  chrysanthemumYellow: (text) => `\x1b[38;2;255;200;0m${text}\x1b[0m`,
  celadonGreen: (text) => `\x1b[38;2;172;225;175m${text}\x1b[0m`, // Pale green
  peonyPink: (text) => `\x1b[38;2;255;192;203m${text}\x1b[0m`, // Soft pink
  dragonGold: (text) => `\x1b[38;2;255;215;0m${text}\x1b[0m`, // Rich gold
  inkBlack: (text) => `\x1b[38;2;0;0;0m${text}\x1b[0m`, // Deep black
  bambooGreen: (text) => `\x1b[38;2;0;128;0m${text}\x1b[0m`, // Vibrant green
  cherryBlossom: (text) => `\x1b[38;2;255;183;197m${text}\x1b[0m`, // Light pink
  azureBlue: (text) => `\x1b[38;2;0;127;255m${text}\x1b[0m`, // Bright blue
  cinnabarRed: (text) => `\x1b[38;2;227;66;52m${text}\x1b[0m`, // Vermilion red
  jadeGreen: (text) => `\x1b[38;2;0;168;107m${text}\x1b[0m`, // Jade green
  plumBlossom: (text) => `\x1b[38;2;221;160;221m${text}\x1b[0m`, // Light purple
  teaGreen: (text) => `\x1b[38;2;208;240;192m${text}\x1b[0m`, // Pale green
  lacquerRed: (text) => `\x1b[38;2;190;0;50m${text}\x1b[0m`, // Deep red

  // Oceanian
  aboriginalRed: (text) => `\x1b[38;2;204;51;51m${text}\x1b[0m`,
  pacificBlue: (text) => `\x1b[38;2;0;157;196m${text}\x1b[0m`,
  kangarooPaw: (text) => `\x1b[38;2;255;99;71m${text}\x1b[0m`, // Reddish-orange
  eucalyptusGreen: (text) => `\x1b[38;2;44;176;55m${text}\x1b[0m`, // Bright green
  coralSeaPink: (text) => `\x1b[38;2;248;131;121m${text}\x1b[0m`, // Coral pink
  uluru: (text) => `\x1b[38;2;204;85;0m${text}\x1b[0m`, // Ochre
  kiwiBrown: (text) => `\x1b[38;2;111;78;55m${text}\x1b[0m`, // Brown
  greatBarrierReef: (text) => `\x1b[38;2;127;255;212m${text}\x1b[0m`, // Aquamarine
  tasmanian: (text) => `\x1b[38;2;0;100;0m${text}\x1b[0m`, // Dark green
  goldenWattle: (text) => `\x1b[38;2;252;215;102m${text}\x1b[0m`, // Golden yellow
  maoriTattoo: (text) => `\x1b[38;2;0;0;0m${text}\x1b[0m`, // Black
  southernCross: (text) => `\x1b[38;2;255;255;255m${text}\x1b[0m`, // White
  papuaOrchid: (text) => `\x1b[38;2;218;112;214m${text}\x1b[0m`, // Orchid
  fijiTeal: (text) => `\x1b[38;2;0;128;128m${text}\x1b[0m`, // Teal

  // Nordic
  vikingBlue: (text) => `\x1b[38;2;0;87;183m${text}\x1b[0m`,
  nordicGold: (text) => `\x1b[38;2;218;165;32m${text}\x1b[0m`,
  midnightSun: (text) => `\x1b[38;2;255;165;0m${text}\x1b[0m`, // Bright orange
  fjordGreen: (text) => `\x1b[38;2;0;100;0m${text}\x1b[0m`, // Dark green
  auroraGreen: (text) => `\x1b[38;2;120;214;75m${text}\x1b[0m`, // Bright green
  glacierBlue: (text) => `\x1b[38;2;220;237;255m${text}\x1b[0m`, // Pale blue
  trollRed: (text) => `\x1b[38;2;255;0;0m${text}\x1b[0m`, // Bright red
  birchBark: (text) => `\x1b[38;2;255;253;208m${text}\x1b[0m`, // Off-white
  vikingShield: (text) => `\x1b[38;2;165;42;42m${text}\x1b[0m`, // Brown
  nordicNight: (text) => `\x1b[38;2;25;25;112m${text}\x1b[0m`, // Midnight blue
  scandinavianPine: (text) => `\x1b[38;2;1;121;111m${text}\x1b[0m`, // Dark teal
  trollSilver: (text) => `\x1b[38;2;192;192;192m${text}\x1b[0m`, // Silver
  valhallaGold: (text) => `\x1b[38;2;255;215;0m${text}\x1b[0m`, // Gold
  icebergWhite: (text) => `\x1b[38;2;240;255;255m${text}\x1b[0m`, // Ice white

  // Caribbean
  rastaRed: (text) => `\x1b[38;2;239;51;64m${text}\x1b[0m`,
  rastaPurple: (text) => `\x1b[38;2;102;51;153m${text}\x1b[0m`,
  tropicalTurquoise: (text) => `\x1b[38;2;0;255;255m${text}\x1b[0m`, // Bright turquoise
  islandGreen: (text) => `\x1b[38;2;0;255;127m${text}\x1b[0m`, // Spring green
  sunsetOrange: (text) => `\x1b[38;2;253;94;83m${text}\x1b[0m`, // Coral orange
  caribbeanSea: (text) => `\x1b[38;2;0;204;204m${text}\x1b[0m`, // Bright cyan
  palmLeaf: (text) => `\x1b[38;2;0;128;0m${text}\x1b[0m`, // Green
  sandsOfTime: (text) => `\x1b[38;2;194;178;128m${text}\x1b[0m`, // Sand color
  hibiscusPink: (text) => `\x1b[38;2;255;105;180m${text}\x1b[0m`, // Hot pink
  steelDrum: (text) => `\x1b[38;2;192;192;192m${text}\x1b[0m`, // Silver
  reggaeGold: (text) => `\x1b[38;2;255;215;0m${text}\x1b[0m`, // Gold
  jungleGreen: (text) => `\x1b[38;2;41;171;135m${text}\x1b[0m`, // Jungle green
  flamingoRed: (text) => `\x1b[38;2;252;142;172m${text}\x1b[0m`, // Pink-red
  bananaPeel: (text) => `\x1b[38;2;255;255;0m${text}\x1b[0m`, // Bright yellow

  // Slavic
  russianRed: (text) => `\x1b[38;2;225;25;0m${text}\x1b[0m`,
  balticAmber: (text) => `\x1b[38;2;255;191;0m${text}\x1b[0m`,
  cossackBlue: (text) => `\x1b[38;2;0;71;171m${text}\x1b[0m`, // Deep blue
  folkloreGreen: (text) => `\x1b[38;2;34;139;34m${text}\x1b[0m`, // Forest green
  imperialPurple: (text) => `\x1b[38;2;102;2;60m${text}\x1b[0m`, // Deep purple
  steppeGold: (text) => `\x1b[38;2;218;165;32m${text}\x1b[0m`, // Goldenrod
  carpathianBrown: (text) => `\x1b[38;2;101;67;33m${text}\x1b[0m`, // Dark brown
  balkanRed: (text) => `\x1b[38;2;200;0;0m${text}\x1b[0m`, // Bright red
  orthodoxBlue: (text) => `\x1b[38;2;0;0;139m${text}\x1b[0m`, // Dark blue
  birchWhite: (text) => `\x1b[38;2;253;253;253m${text}\x1b[0m`, // Off-white
  cossackGreen: (text) => `\x1b[38;2;0;100;0m${text}\x1b[0m`, // Dark green
  balticSea: (text) => `\x1b[38;2;0;51;102m${text}\x1b[0m`, // Navy blue
  firebird: (text) => `\x1b[38;2;255;69;0m${text}\x1b[0m`, // Red-orange
  winterFrost: (text) => `\x1b[38;2;224;255;255m${text}\x1b[0m`, // Ice blue
  // American
  starSpangledRed: (text) => `\x1b[38;2;187;19;62m${text}\x1b[0m`, // Red from the flag
  oldGloryBlue: (text) => `\x1b[38;2;0;38;100m${text}\x1b[0m`, // Blue from the flag
  americanGold: (text) => `\x1b[38;2;255;215;0m${text}\x1b[0m`, // Golden yellow
  libertyGreen: (text) => `\x1b[38;2;0;128;0m${text}\x1b[0m`, // Green like the Statue of Liberty
  denimBlue: (text) => `\x1b[38;2;21;96;189m${text}\x1b[0m`, // Classic American denim color
  applepieRed: (text) => `\x1b[38;2;184;15;10m${text}\x1b[0m`, // Deep red like apple pie filling
  baseballWhite: (text) => `\x1b[38;2;255;255;240m${text}\x1b[0m`, // Off-white like a baseball

  // British
  royalBlue: (text) => `\x1b[38;2;0;35;102m${text}\x1b[0m`, // Deep blue associated with royalty
  unionJackRed: (text) => `\x1b[38;2;200;16;46m${text}\x1b[0m`, // Red from the Union Jack
  britishRacingGreen: (text) => `\x1b[38;2;0;66;37m${text}\x1b[0m`, // Classic British racing color
  londonBusRed: (text) => `\x1b[38;2;220;36;31m${text}\x1b[0m`, // Bright red like London buses
  telephoneBoxRed: (text) => `\x1b[38;2;196;2;51m${text}\x1b[0m`, // Red of the iconic telephone boxes
  buckinghamPurple: (text) => `\x1b[38;2;89;0;128m${text}\x1b[0m`, // Royal purple
  cotswoldStone: (text) => `\x1b[38;2;219;211;173m${text}\x1b[0m`, // Beige like Cotswold stone

  // Canadian
  mapleLeafRed: (text) => `\x1b[38;2;255;0;0m${text}\x1b[0m`, // Bright red from the flag
  canadianSkyBlue: (text) => `\x1b[38;2;135;206;235m${text}\x1b[0m`, // Light blue like clear skies
  mountieRed: (text) => `\x1b[38;2;255;0;0m${text}\x1b[0m`, // Red of the Royal Canadian Mounted Police uniform
  peaceToweWhite: (text) => `\x1b[38;2;255;255;255m${text}\x1b[0m`, // Pure white like snow
  torontoBlue: (text) => `\x1b[38;2;0;83;155m${text}\x1b[0m`, // Blue associated with Toronto
  quebecBlue: (text) => `\x1b[38;2;0;82;165m${text}\x1b[0m`, // Blue from Quebec's flag
  prairieGold: (text) => `\x1b[38;2;218;165;32m${text}\x1b[0m`, // Golden like wheat fields

  // Australian
  aussieGold: (text) => `\x1b[38;2;252;209;22m${text}\x1b[0m`, // Golden yellow from the flag
  eucalyptusGreen: (text) => `\x1b[38;2;44;134;54m${text}\x1b[0m`, // Green like eucalyptus leaves
  outbackRed: (text) => `\x1b[38;2;187;51;0m${text}\x1b[0m`, // Red-orange like the Outback soil
  greatBarrierBlue: (text) => `\x1b[38;2;0;154;205m${text}\x1b[0m`, // Blue like the Great Barrier Reef
  kangarooBrown: (text) => `\x1b[38;2;139;69;19m${text}\x1b[0m`, // Brown like a kangaroo
  sydneyOperaWhite: (text) => `\x1b[38;2;245;245;245m${text}\x1b[0m`, // Off-white like the Sydney Opera House
  tasmanianLavender: (text) => `\x1b[38;2;230;230;250m${text}\x1b[0m`, // Light purple like Tasmanian lavender
};

module.exports = culturalColors;
