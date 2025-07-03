/**
 * This file contains constants used throughout the application.
 *
 */

import { Label } from "recharts";

//Countries list with ISO 3166-1 numeric codes
// Source: https://www.iban.com/country-codes
export const COUNTRIES = [
  {
    Text: "AALAND ISLANDS",
    Value: "248",
  },
  {
    Text: "AFGHANISTAN",
    Value: "4",
  },
  {
    Text: "ALBANIA",
    Value: "8",
  },
  {
    Text: "ALGERIA",
    Value: "12",
  },
  {
    Text: "AMERICAN SAMOA",
    Value: "16",
  },
  {
    Text: "ANDORRA",
    Value: "20",
  },
  {
    Text: "ANGOLA",
    Value: "24",
  },
  {
    Text: "ANGUILLA",
    Value: "660",
  },
  {
    Text: "ANTARCTICA",
    Value: "10",
  },
  {
    Text: "ANTIGUA AND BARBUDA",
    Value: "28",
  },
  {
    Text: "ARGENTINA",
    Value: "32",
  },
  {
    Text: "ARMENIA",
    Value: "51",
  },
  {
    Text: "ARUBA",
    Value: "533",
  },
  {
    Text: "ASCENSION ISLAND BRITISH",
    Value: "252",
  },
  {
    Text: "AUSTRALIA",
    Value: "36",
  },
  {
    Text: "AUSTRIA",
    Value: "40",
  },
  {
    Text: "AZERBAIJAN",
    Value: "31",
  },
  {
    Text: "BAHAMAS",
    Value: "44",
  },
  {
    Text: "BAHRAIN",
    Value: "48",
  },
  {
    Text: "BANGLADESH",
    Value: "50",
  },
  {
    Text: "BARBADOS",
    Value: "52",
  },
  {
    Text: "BELARUS",
    Value: "112",
  },
  {
    Text: "BELGIUM",
    Value: "56",
  },
  {
    Text: "BELIZE",
    Value: "84",
  },
  {
    Text: "BENIN",
    Value: "204",
  },
  {
    Text: "BERMUDA",
    Value: "60",
  },
  {
    Text: "BHUTAN",
    Value: "64",
  },
  {
    Text: "BOLIVIA",
    Value: "68",
  },
  {
    Text: "BONAIRE, SINT EUSTATIUS AND SABA",
    Value: "535",
  },
  {
    Text: "BOSNIA AND HERZEGOVINA",
    Value: "70",
  },
  {
    Text: "BOTSWANA",
    Value: "72",
  },
  {
    Text: "BOUVET ISLAND",
    Value: "74",
  },
  {
    Text: "BRAZIL",
    Value: "76",
  },
  {
    Text: "BRITISH INDIAN OCEAN TERRITORY",
    Value: "86",
  },
  {
    Text: "BRUNEI DARUSSALAM",
    Value: "96",
  },
  {
    Text: "BULGARIA",
    Value: "100",
  },
  {
    Text: "BURKINA FASO",
    Value: "854",
  },
  {
    Text: "BURUNDI",
    Value: "108",
  },
  {
    Text: "CAMBODIA",
    Value: "116",
  },
  {
    Text: "CAMEROON",
    Value: "120",
  },
  {
    Text: "CANADA",
    Value: "124",
  },
  {
    Text: "CANARY ISLANDS",
    Value: "251",
  },
  {
    Text: "CAPE VERDE",
    Value: "132",
  },
  {
    Text: "CAYMAN ISLANDS",
    Value: "136",
  },
  {
    Text: "CENTRAL AFRICAN REPUBLIC",
    Value: "140",
  },
  {
    Text: "CHAD",
    Value: "148",
  },
  {
    Text: "CHILE",
    Value: "152",
  },
  {
    Text: "CHINA",
    Value: "156",
  },
  {
    Text: "CHRISTMAS ISLAND",
    Value: "162",
  },
  {
    Text: "Cocos Islands",
    Value: "166",
  },
  {
    Text: "COLOMBIA",
    Value: "170",
  },
  {
    Text: "COMOROS",
    Value: "174",
  },
  {
    Text: "CONGO",
    Value: "178",
  },
  {
    Text: "COOK ISLANDS",
    Value: "184",
  },
  {
    Text: "COSTA RICA",
    Value: "188",
  },
  {
    Text: "COTE D'IVOIRE",
    Value: "384",
  },
  {
    Text: "CROATIA",
    Value: "191",
  },
  {
    Text: "CUBA",
    Value: "192",
  },
  {
    Text: "CURACAO",
    Value: "531",
  },
  {
    Text: "CYPRUS",
    Value: "196",
  },
  {
    Text: "CZECH REPUBLIC",
    Value: "203",
  },
  {
    Text: "DEMOCRATIC REPUBLIC OF CONGO",
    Value: "180",
  },
  {
    Text: "DENMARK",
    Value: "208",
  },
  {
    Text: "DJIBOUTI",
    Value: "262",
  },
  {
    Text: "DOMINICA",
    Value: "212",
  },
  {
    Text: "DOMINICAN REPUBLIC",
    Value: "214",
  },
  {
    Text: "EAST TIMOR",
    Value: "626",
  },
  {
    Text: "ECUADOR",
    Value: "218",
  },
  {
    Text: "EGYPT",
    Value: "818",
  },
  {
    Text: "EL SALVADOR",
    Value: "222",
  },
  {
    Text: "EQUATORIAL GUINEA",
    Value: "226",
  },
  {
    Text: "ERITREA",
    Value: "232",
  },
  {
    Text: "ESTONIA",
    Value: "233",
  },
  {
    Text: "ETHIOPIA",
    Value: "231",
  },
  {
    Text: "FALKLAND ISLANDS",
    Value: "238",
  },
  {
    Text: "FAROE ISLANDS",
    Value: "234",
  },
  {
    Text: "FIJI",
    Value: "242",
  },
  {
    Text: "FINLAND",
    Value: "246",
  },
  {
    Text: "FRANCE, METROPOLITAN",
    Value: "250",
  },
  {
    Text: "FRENCH GUIANA",
    Value: "254",
  },
  {
    Text: "FRENCH POLYNESIA",
    Value: "258",
  },
  {
    Text: "FRENCH SOUTHERN TERRITORIES",
    Value: "260",
  },
  {
    Text: "GABON",
    Value: "266",
  },
  {
    Text: "GAMBIA",
    Value: "270",
  },
  {
    Text: "GEORGIA",
    Value: "268",
  },
  {
    Text: "GERMANY",
    Value: "276",
  },
  {
    Text: "GHANA",
    Value: "288",
  },
  {
    Text: "GIBRALTAR",
    Value: "292",
  },
  {
    Text: "GREECE",
    Value: "300",
  },
  {
    Text: "GREENLAND",
    Value: "304",
  },
  {
    Text: "GRENADA",
    Value: "308",
  },
  {
    Text: "GUADELOUPE",
    Value: "312",
  },
  {
    Text: "GUAM",
    Value: "316",
  },
  {
    Text: "GUATEMALA",
    Value: "320",
  },
  {
    Text: "GUERNSEY",
    Value: "831",
  },
  {
    Text: "GUINEA",
    Value: "324",
  },
  {
    Text: "GUINEA-BISSAU",
    Value: "624",
  },
  {
    Text: "GUYANA",
    Value: "328",
  },
  {
    Text: "HAITI",
    Value: "332",
  },
  {
    Text: "Heard and Mc Donald Islands",
    Value: "334",
  },
  {
    Text: "HONDURAS",
    Value: "340",
  },
  {
    Text: "HONG KONG",
    Value: "344",
  },
  {
    Text: "HUNGARY",
    Value: "348",
  },
  {
    Text: "ICELAND",
    Value: "352",
  },
  {
    Text: "INDIA",
    Value: "356",
  },
  {
    Text: "INDONESIA",
    Value: "360",
  },
  {
    Text: "IRAN ISLAMIC REPUBLIC OF",
    Value: "364",
  },
  {
    Text: "IRAQ",
    Value: "368",
  },
  {
    Text: "IRELAND",
    Value: "372",
  },
  {
    Text: "ISLE OF MAN",
    Value: "833",
  },
  {
    Text: "ISRAEL",
    Value: "376",
  },
  {
    Text: "ITALY",
    Value: "380",
  },
  {
    Text: "JAMAICA",
    Value: "388",
  },
  {
    Text: "JAPAN",
    Value: "392",
  },
  {
    Text: "JERSEY",
    Value: "832",
  },
  {
    Text: "JORDAN",
    Value: "400",
  },
  {
    Text: "KAZAKHSTAN",
    Value: "398",
  },
  {
    Text: "KENYA",
    Value: "404",
  },
  {
    Text: "KIRIBATI",
    Value: "296",
  },
  {
    Text: "KOSOVO, REPUBLIC OF",
    Value: "253",
  },
  {
    Text: "KUWAIT",
    Value: "414",
  },
  {
    Text: "KYRGYZSTAN",
    Value: "417",
  },
  {
    Text: "LAO PEOPLE'S DEMOCRATIC REPUBLIC",
    Value: "418",
  },
  {
    Text: "LATVIA",
    Value: "428",
  },
  {
    Text: "LEBANON",
    Value: "422",
  },
  {
    Text: "LESOTHO",
    Value: "426",
  },
  {
    Text: "LIBERIA",
    Value: "430",
  },
  {
    Text: "LIBYAN ARAB JAMAHIRIYA",
    Value: "434",
  },
  {
    Text: "LIECHTENSTEIN",
    Value: "438",
  },
  {
    Text: "LITHUANIA",
    Value: "440",
  },
  {
    Text: "LUXEMBOURG",
    Value: "442",
  },
  {
    Text: "MACAU",
    Value: "446",
  },
  {
    Text: "MADAGASCAR",
    Value: "450",
  },
  {
    Text: "MALAWI",
    Value: "454",
  },
  {
    Text: "MALAYSIA",
    Value: "458",
  },
  {
    Text: "MALDIVES",
    Value: "462",
  },
  {
    Text: "MALI",
    Value: "466",
  },
  {
    Text: "MALTA",
    Value: "470",
  },
  {
    Text: "MARSHALL ISLANDS",
    Value: "584",
  },
  {
    Text: "MARTINIQUE",
    Value: "474",
  },
  {
    Text: "MAURITANIA",
    Value: "478",
  },
  {
    Text: "MAURITIUS",
    Value: "480",
  },
  {
    Text: "MAYOTTE",
    Value: "175",
  },
  {
    Text: "MEXICO",
    Value: "484",
  },
  {
    Text: "MICRONESIA, FEDERATED STATES OF",
    Value: "583",
  },
  {
    Text: "MOLDOVA, REPUBLIC OF",
    Value: "498",
  },
  {
    Text: "MONACO",
    Value: "492",
  },
  {
    Text: "MONGOLIA",
    Value: "496",
  },
  {
    Text: "MONTENEGRO",
    Value: "499",
  },
  {
    Text: "MONTSERRAT",
    Value: "500",
  },
  {
    Text: "MOROCCO",
    Value: "504",
  },
  {
    Text: "MOZAMBIQUE",
    Value: "508",
  },
  {
    Text: "MYANMAR",
    Value: "104",
  },
  {
    Text: "NAMIBIA",
    Value: "516",
  },
  {
    Text: "NAURU",
    Value: "520",
  },
  {
    Text: "NEPAL",
    Value: "524",
  },
  {
    Text: "NETHERLANDS",
    Value: "528",
  },
  {
    Text: "NETHERLANDS ANTILLES",
    Value: "151",
  },
  {
    Text: "NEW CALEDONIA",
    Value: "540",
  },
  {
    Text: "NEW ZEALAND",
    Value: "554",
  },
  {
    Text: "NICARAGUA",
    Value: "558",
  },
  {
    Text: "NIGER",
    Value: "562",
  },
  {
    Text: "NIGERIA",
    Value: "566",
  },
  {
    Text: "NIUE",
    Value: "570",
  },
  {
    Text: "NORFOLK ISLAND",
    Value: "574",
  },
  {
    Text: "NORTH KOREA",
    Value: "408",
  },
  {
    Text: "NORTHERN MARIANA ISLANDS",
    Value: "580",
  },
  {
    Text: "NORWAY",
    Value: "578",
  },
  {
    Text: "OMAN",
    Value: "512",
  },
  {
    Text: "PAKISTAN",
    Value: "586",
  },
  {
    Text: "PALAU",
    Value: "585",
  },
  {
    Text: "PALESTINIAN TERRITORY, OCCUPIED",
    Value: "275",
  },
  {
    Text: "PANAMA",
    Value: "591",
  },
  {
    Text: "PAPUA NEW GUINEA",
    Value: "598",
  },
  {
    Text: "PARAGUAY",
    Value: "600",
  },
  {
    Text: "PERU",
    Value: "604",
  },
  {
    Text: "PHILIPPINES",
    Value: "608",
  },
  {
    Text: "PITCAIRN",
    Value: "612",
  },
  {
    Text: "POLAND",
    Value: "616",
  },
  {
    Text: "PORTUGAL",
    Value: "620",
  },
  {
    Text: "PUERTO RICO",
    Value: "630",
  },
  {
    Text: "QATAR",
    Value: "634",
  },
  {
    Text: "REPUBLIC OF MACEDONIA",
    Value: "807",
  },
  {
    Text: "REUNION",
    Value: "638",
  },
  {
    Text: "ROMANIA",
    Value: "642",
  },
  {
    Text: "RUSSIAN FEDERATION",
    Value: "643",
  },
  {
    Text: "RWANDA",
    Value: "646",
  },
  {
    Text: "SAINT KITTS AND NEVIS",
    Value: "659",
  },
  {
    Text: "SAINT LUCIA",
    Value: "662",
  },
  {
    Text: "SAINT VINCENT AND THE GRENADINES",
    Value: "670",
  },
  {
    Text: "SAMOA",
    Value: "882",
  },
  {
    Text: "SAN MARINO",
    Value: "674",
  },
  {
    Text: "SAO TOME AND PRINCIPE",
    Value: "678",
  },
  {
    Text: "SAUDI ARABIA",
    Value: "682",
  },
  {
    Text: "SENEGAL",
    Value: "686",
  },
  {
    Text: "SERBIA",
    Value: "688",
  },
  {
    Text: "SEYCHELLES",
    Value: "690",
  },
  {
    Text: "SIERRA LEONE",
    Value: "694",
  },
  {
    Text: "SINGAPORE",
    Value: "702",
  },
  {
    Text: "SINT MAARTEN (DUTCH PART)",
    Value: "534",
  },
  {
    Text: "SLOVAK REPUBLIC",
    Value: "703",
  },
  {
    Text: "SLOVENIA",
    Value: "705",
  },
  {
    Text: "SOLOMON ISLANDS",
    Value: "90",
  },
  {
    Text: "SOMALIA",
    Value: "706",
  },
  {
    Text: "SOUTH AFRICA",
    Value: "710",
  },
  {
    Text: "SOUTH GEORGIA AND SOUTH SANDWICH ISLANDS",
    Value: "239",
  },
  {
    Text: "SOUTH KOREA",
    Value: "410",
  },
  {
    Text: "SOUTH SUDAN",
    Value: "728",
  },
  {
    Text: "SPAIN",
    Value: "724",
  },
  {
    Text: "SRI LANKA",
    Value: "144",
  },
  {
    Text: "ST. BARTHELEMY",
    Value: "652",
  },
  {
    Text: "ST. HELENA",
    Value: "654",
  },
  {
    Text: "ST. MARTIN FRENCH PART",
    Value: "663",
  },
  {
    Text: "ST. PIERRE AND MIQUELON",
    Value: "666",
  },
  {
    Text: "SUDAN",
    Value: "729",
  },
  {
    Text: "SURINAME",
    Value: "740",
  },
  {
    Text: "SVALBARD AND JAN MAYEN ISLANDS",
    Value: "744",
  },
  {
    Text: "SWAZILAND",
    Value: "748",
  },
  {
    Text: "SWEDEN",
    Value: "752",
  },
  {
    Text: "SWITZERLAND",
    Value: "756",
  },
  {
    Text: "SYRIAN ARAB REPUBLIC",
    Value: "760",
  },
  {
    Text: "TAIWAN",
    Value: "158",
  },
  {
    Text: "TAJIKISTAN",
    Value: "762",
  },
  {
    Text: "TANZANIA, UNITED REPUBLIC OF",
    Value: "834",
  },
  {
    Text: "THAILAND",
    Value: "764",
  },
  {
    Text: "TOGO",
    Value: "768",
  },
  {
    Text: "TOKELAU",
    Value: "772",
  },
  {
    Text: "TONGA",
    Value: "776",
  },
  {
    Text: "TRINIDAD AND TOBAGO",
    Value: "780",
  },
  {
    Text: "TRISTAN DA CUNHA",
    Value: "255",
  },
  {
    Text: "TUNISIA",
    Value: "788",
  },
  {
    Text: "TURKEY",
    Value: "792",
  },
  {
    Text: "TURKMENISTAN",
    Value: "795",
  },
  {
    Text: "TURKS AND CAICOS ISLANDS",
    Value: "796",
  },
  {
    Text: "TUVALU",
    Value: "798",
  },
  {
    Text: "UGANDA",
    Value: "800",
  },
  {
    Text: "UKRAINE",
    Value: "804",
  },
  {
    Text: "UNITED ARAB EMIRATES",
    Value: "784",
  },
  {
    Text: "UNITED KINGDOM",
    Value: "826",
  },
  {
    Text: "UNITED STATES",
    Value: "840",
  },
  {
    Text: "UNITED STATES MINOR OUTLYING ISLANDS",
    Value: "581",
  },
  {
    Text: "URUGUAY",
    Value: "858",
  },
  {
    Text: "UZBEKISTAN",
    Value: "860",
  },
  {
    Text: "VANUATU",
    Value: "548",
  },
  {
    Text: "VATICAN CITY STATE HOLY SEE",
    Value: "336",
  },
  {
    Text: "VENEZUELA",
    Value: "862",
  },
  {
    Text: "VIET NAM",
    Value: "704",
  },
  {
    Text: "VIRGIN ISLANDS BRITISH",
    Value: "92",
  },
  {
    Text: "VIRGIN ISLANDS U.S.",
    Value: "850",
  },
  {
    Text: "WALLIS AND FUTUNA ISLANDS",
    Value: "876",
  },
  {
    Text: "WESTERN SAHARA",
    Value: "732",
  },
  {
    Text: "YEMEN",
    Value: "887",
  },
  {
    Text: "ZAMBIA",
    Value: "894",
  },
  {
    Text: "ZIMBABWE",
    Value: "716",
  },
];

// Province List for Sri Lanka
export const PROVINCES = [
  { value: "1", label: "WESTERN" },
  { value: "2", label: "CENTRAL" },
  { value: "3", label: "SOUTHERN" },
  { value: "4", label: "NORTHERN" },
  { value: "5", label: "EASTERN" },
  { value: "6", label: "NORTH WESTERN" },
  { value: "7", label: "NORTH CENTRAL" },
  { value: "8", label: "UVA" },
  { value: "9", label: "SABARAGAMUWA" },
];

// District List for Sri Lanka
export const DISTRICTS_BY_PROVINCE = {
  "1": [
    { value: "5", label: "COLOMBO" },
    { value: "7", label: "GAMPAHA" },
    { value: "10", label: "KALUTARA" },
  ],
  "2": [
    { value: "11", label: "KANDY" },
    { value: "16", label: "MATALE" },
    { value: "20", label: "NUWARA ELIYA" },
  ],
  "3": [
    { value: "6", label: "GALLE" },
    { value: "8", label: "HAMBANTOTA" },
    { value: "17", label: "MATARA" },
  ],
  "4": [
    { value: "9", label: "JAFFNA" },
    { value: "13", label: "KILINOCHCHI" },
    { value: "15", label: "MANNAR" },
    { value: "19", label: "MULLAITIVU" },
    { value: "25", label: "VAVUNIYA" },
  ],
  "5": [
    { value: "1", label: "AMPARA" },
    { value: "4", label: "BATTICALOA" },
    { value: "24", label: "TRINCOMALEE" },
  ],
  "6": [
    { value: "14", label: "KURUNEGALA" },
    { value: "22", label: "PUTTALAM" },
  ],
  "7": [
    { value: "2", label: "ANURADHAPURA" },
    { value: "21", label: "POLONNARUWA" },
  ],
  "8": [
    { value: "3", label: "BADULLA" },
    { value: "18", label: "MONARAGALA" },
  ],
  "9": [
    { value: "12", label: "KEGALLE" },
    { value: "23", label: "RATNAPURA" },
  ],
};

// Divisional Secretariats for Sri Lanka
export const DIVISIONAL_SECRETARIATS_BY_DISTRICTS = {
  "5": [
    {
      label: "COLOMBO",
      value: 43,
    },
    {
      label: "DEHIWALA",
      value: 49,
    },
    {
      label: "HOMAGAMA",
      value: 94,
    },
    {
      label: "KADUWELA",
      value: 106,
    },
    {
      label: "KESBEWA",
      value: 131,
    },
    {
      label: "KOLONNAWA",
      value: 137,
    },
    {
      label: "MAHARAGAMA",
      value: 164,
    },
    {
      label: "MORATUWA",
      value: 196,
    },
    {
      label: "PADUKKA",
      value: 228,
    },
    {
      label: "RATMALANA",
      value: 257,
    },
    {
      label: "SEETHAWAKA",
      value: 265,
    },
    {
      label: "THIMBIRIGASYAYA",
      value: 280,
    },
    {
      label: "SRI JAYAWARDANAPURA KOTTE",
      value: 345,
    },
  ],
  "7": [
    {
      Label: "ATTANAGALLA",
      value: 21,
    },
    {
      Label: "BIYAGAMA",
      value: 37,
    },
    {
      Label: "DIVULAPITIYA",
      value: 56,
    },
    {
      Label: "DOMPE",
      value: 59,
    },
    {
      Label: "GAMPAHA",
      value: 76,
    },
    {
      Label: "JA-ELA",
      value: 104,
    },
    {
      Label: "KATANA",
      value: 122,
    },
    {
      Label: "KELANIYA",
      value: 130,
    },
    {
      Label: "MAHARA",
      value: 163,
    },
    {
      Label: "MINUWANGODA",
      value: 193,
    },
    {
      Label: "MIRIGAMA",
      value: 194,
    },
    {
      Label: "NEGOMBO",
      value: 211,
    },
    {
      Label: "WATTALA",
      value: 313,
    },
  ],
  "10": [
    { label: "AGALAWATTA", value: 2 },
    { label: "BANDARAGAMA", value: 29 },
    { label: "BERUWALA", value: 34 },
    { label: "BULATHSINHALA", value: 40 },
    { label: "DODANGODA", value: 57 },
    { label: "HORANA", value: 95 },
    { label: "INGIRIYA", value: 100 },
    { label: "KALUTARA", value: 112 },
    { label: "MATHUGAMA", value: 182 },
    { label: "MILLANIYA", value: 191 },
    { label: "PALINDANUWARA", value: 230 },
    { label: "PANADURA", value: 234 },
    { label: "WALALLAVITA", value: 308 },
    { label: "MADURAWALA", value: 359 },
  ],
  "11": [
    { label: "AKURANA", value: 5 },
    { label: "DELTHOTA", value: 51 },
    { label: "DOLUWA", value: 58 },
    { label: "GANGA IHALA KORALE", value: 78 },
    { label: "HARISPATTUWA", value: 90 },
    { label: "HATHARALIYADDA", value: 91 },
    { label: "KUNDASALE", value: 149 },
    { label: "MEDADUMBARA", value: 185 },
    { label: "MINIPE", value: 192 },
    { label: "PANVILA", value: 237 },
    { label: "PASBAGE KORALE", value: 238 },
    { label: "PATHADUMBARA", value: 241 },
    { label: "PATHAHEWAHETA", value: 242 },
    { label: "THUMPANE", value: 284 },
    { label: "UDADUMBARA", value: 287 },
    { label: "UDAPALATHA", value: 288 },
    { label: "UDUNUWARA", value: 290 },
    { label: "YATINUWARA", value: 328 },
    {
      label: "KANDY FOUR GRAVETS GANGAWATA KORALE",
      value: 360,
    },
    { label: "PUJAPITIYA", value: 361 },
  ],
  "16": [
    { label: "AMBANGANGA KORALE", value: 12 },
    { label: "DAMBULLA", value: 45 },
    { label: "GALEWELA", value: 71 },
    { label: "LAGGALA-PALLEGAMA", value: 152 },
    { label: "MATALE", value: 180 },
    { label: "NAULA", value: 208 },
    { label: "PALLEPOLA", value: 232 },
    { label: "RATTOTA", value: 259 },
    { label: "UKUWELA", value: 292 },
    { label: "WILGAMUWA", value: 325 },
    { label: "YATAWATTA", value: 327 },
  ],
  "20": [
    { label: "AMBAGAMUWA", value: 9 },
    { label: "HANGURANKETHA", value: 88 },
    { label: "KOTHMALE", value: 144 },
    { label: "NUWARA ELIYA", value: 218 },
    { label: "WALAPANE", value: 309 },
  ],
  "6": [
    { label: "AKMEEMANA", value: 4 },
    { label: "AMBALANGODA", value: 10 },
    { label: "BADDEGAMA", value: 24 },
    { label: "BALAPITIYA", value: 27 },
    { label: "BENTHOTA", value: 33 },
    { label: "BOPE-PODDALA", value: 38 },
    { label: "ELPITIYA", value: 65 },
    { label: "HABARADUWA", value: 83 },
    { label: "HIKKADUWA", value: 92 },
    { label: "IMADUWA", value: 98 },
    { label: "KARANDENIYA", value: 119 },
    { label: "NAGODA", value: 203 },
    { label: "NELUWA", value: 212 },
    { label: "NIYAGAMA", value: 216 },
    { label: "THAWALAMA", value: 277 },
    { label: "WELIVITIYA-DIVITHURA", value: 322 },
    { label: "YAKKALAMULLA", value: 326 },
    { label: "GALLE FOUR GRAVETS", value: 346 },
    { label: "GONAPEENUWALA", value: 347 },
  ],
  "8": [
    { label: "AMBALANTOTA", value: 11 },
    { label: "ANGUNAKOLAPELESSA", value: 16 },
    { label: "BELIATTA", value: 32 },
    { label: "HAMBANTOTA", value: 87 },
    { label: "KATUWANA", value: 126 },
    { label: "LUNUGAMVEHERA", value: 156 },
    { label: "OKEWELA", value: 222 },
    { label: "SOORIYAWEWA", value: 269 },
    { label: "TANGALLE", value: 271 },
    { label: "THISSAMAHARAMA", value: 283 },
    { label: "WALASMULLA", value: 310 },
    { label: "WEERAKETIYA", value: 314 },
  ],
  "17": [
    { label: "AKURESSA", value: 6 },
    { label: "ATHURALIYA", value: 20 },
    { label: "DEVINUWARA", value: 53 },
    { label: "DICKWELLA", value: 54 },
    { label: "HAKMANA", value: 84 },
    { label: "KAMBURUPITIYA", value: 113 },
    { label: "KIRINDA PUHULWELLA", value: 134 },
    { label: "KOTAPOLA", value: 142 },
    { label: "MALIMBADA", value: 169 },
    { label: "MULATIYANA", value: 198 },
    { label: "PASGODA", value: 239 },
    { label: "PITABEDDARA", value: 244 },
    { label: "THIHAGODA", value: 279 },
    { label: "WELIGAMA", value: 316 },
    { label: "WELIPITIYA", value: 321 },
    { label: "MATARA FOUR GRAVETS", value: 368 },
  ],
  "9": [
    { label: "DELFT", value: 50 },
    { label: "JAFFNA", value: 105 },
    { label: "NALLUR", value: 204 },
    { label: "VALIKAMAM NORTH", value: 298 },
    { label: "ISLAND NORTH (KAYTS)", value: 348 },
    { label: "ISLAND SOUTH (VELANAI)", value: 349 },
    { label: "KARAINAGAR", value: 350 },
    { label: "THENMARACHCHY (CHAVAKACHCHERI)", value: 351 },
    { label: "VADAMARACHCHY EAST", value: 352 },
    { label: "VADAMARACHCHY NORTH (POINTPEDRO)", value: 353 },
    { label: "VADAMARACHCHY SOUTH-WEST ( KARAVEDDY )", value: 354 },
    { label: "VALIKAMAM EAST (KOPAY)", value: 355 },
    { label: "VALIKAMAM SOUTH (UDUVIL)", value: 356 },
    { label: "VALIKAMAM SOUTH -WEST (SANDILIPAY)", value: 357 },
    { label: "VALIKAMAM WEST (CHANKANAI)", value: 358 },
  ],
  "13": [
    { label: "KANDAVALAI", value: 115 },
    { label: "KARACHCHI", value: 118 },
    { label: "PACHCHILAIPALLI", value: 224 },
    { label: "POONAKARY", value: 248 },
  ],
  "15": [
    { label: "MADHU", value: 158 },
    { label: "MANTHAI WEST", value: 177 },
    { label: "MANNAR TOWN", value: 365 },
    { label: "MUSALI", value: 366 },
    { label: "NANATTAN", value: 367 },
  ],
  "19": [
    { label: "MANTHAI EAST", value: 176 },
    { label: "MARITIMEPATTU", value: 178 },
    { label: "ODDUSUDDAN", value: 221 },
    { label: "THUNUKKAI", value: 285 },
    { label: "WELIOYA", value: 320 },
    { label: "PUTHUKKUDIYIRUPPU", value: 369 },
  ],
  "25": [
    { label: "VAVUNIYA", value: 303 },
    { label: "VAVUNIYA NORTH", value: 304 },
    { label: "VAVUNIYA SOUTH", value: 305 },
    { label: "VENGALACHEDDIKULAM", value: 306 },
  ],
  "1": [
    { label: "MADHU", value: 158 },
    { label: "MANTHAI WEST", value: 177 },
    { label: "MANNAR TOWN", value: 365 },
    { label: "MUSALI", value: 366 },
    { label: "NANATTAN", value: 367 },
  ],
  "4": [
    { label: "ERAVUR PATTU", value: 68 },
    { label: "ERAVUR TOWN", value: 69 },
    { label: "KATTANKUDY", value: 124 },
    { label: "MANMUNAI NORTH", value: 171 },
    { label: "MANMUNAI SOUTH \u0026 ERUVIL PATTU", value: 173 },
    { label: "MANMUNAI WEST", value: 174 },
    { label: "KORALAI PATTU (VALACHCHENAI)", value: 337 },
    { label: "KORALAI PATTU CENTRAL", value: 338 },
    { label: "KORALAI PATTU NORTH (VAHARAI)", value: 339 },
    { label: "KORALAI PATTU SOUTH (KIRAN)", value: 340 },
    { label: "KORALAI PATTU WEST (ODDAMAVADI)", value: 341 },
    { label: "MANMUNAI PATTU (ARAIPATTAI)", value: 342 },
    { label: "MANMUNAI SOUTH-WEST", value: 343 },
    { label: "PORATHEEVU PATTU", value: 344 },
  ],
  "24": [
    { label: "GOMARANKADAWALA", value: 81 },
    { label: "KINNIYA", value: 132 },
    { label: "KUCHCHAVELI", value: 146 },
    { label: "MORAWEWA", value: 197 },
    { label: "MUTTUR", value: 201 },
    { label: "PADAVI SRI PURA", value: 225 },
    { label: "SERUVILA", value: 266 },
    { label: "THAMBALAGAMUWA", value: 274 },
    { label: "KANTALE", value: 374 },
    { label: "TRINCOMALEE TOWN AND GRAVETS", value: 375 },
    { label: "VERUGAL (EACHCHILAMPATTU)", value: 376 },
  ],
  "14": [
    { label: "ALAWWA", value: 7 },
    { label: "AMBANPOLA", value: 13 },
    { label: "BAMUNAKOTUWA", value: 28 },
    { label: "BINGIRIYA", value: 36 },
    { label: "EHETUWEWA", value: 61 },
    { label: "GALGAMUWA", value: 72 },
    { label: "GANEWATTA", value: 77 },
    { label: "GIRIBAWA", value: 79 },
    { label: "IBBAGAMUWA", value: 97 },
    { label: "KOBEIGANE", value: 135 },
    { label: "KOTAVEHERA", value: 143 },
    { label: "KULIYAPITIYA EAST", value: 147 },
    { label: "KULIYAPITIYA WEST", value: 148 },
    { label: "KURUNEGALA", value: 150 },
    { label: "MALLAWAPITIYA", value: 170 },
    { label: "MASPOTHA", value: 179 },
    { label: "MAWATHAGAMA", value: 184 },
    { label: "NARAMMALA", value: 206 },
    { label: "NIKAWERATIYA", value: 213 },
    { label: "PANNALA", value: 236 },
    { label: "POLGAHAWELA", value: 245 },
    { label: "POLPITHIGAMA", value: 246 },
    { label: "RASNAYAKAPURA", value: 256 },
    { label: "RIDEEGAMA", value: 260 },
    { label: "UDUBADDAWA", value: 289 },
    { label: "WARIYAPOLA", value: 312 },
    { label: "WEERAMBUGEDARA", value: 315 },
    { label: "MAHO", value: 362 },
    { label: "PANDUWASNUWARA EAST", value: 363 },
    { label: "PANDUWASNUWARA WEST", value: 364 },
  ],
  "22": [
    { label: "ANAMADUWA", value: 15 },
    { label: "ARACHCHIKATTUWA", value: 18 },
    { label: "CHILAW", value: 42 },
    { label: "DANKOTUWA", value: 46 },
    { label: "KALPITIYA", value: 111 },
    { label: "KARUWALAGASWEWA", value: 121 },
    { label: "MADAMPE", value: 157 },
    { label: "MAHAKUMBUKKADAWALA", value: 161 },
    { label: "MAHAWEWA", value: 167 },
    { label: "NATTANDIYA", value: 207 },
    { label: "NAWAGATTEGAMA", value: 210 },
    { label: "PALLAMA", value: 231 },
    { label: "PUTTALAM", value: 252 },
    { label: "WENNAPPUWA", value: 324 },
    { label: "MUNDEL", value: 370 },
    { label: "VANATHAWILLUWA", value: 371 },
  ],
  "2": [
    { label: "GALENBINDUNUWEWA", value: 70 },
    { label: "GALNEWA", value: 75 },
    { label: "HOROWPOTHANA", value: 96 },
    { label: "IPALOGAMA", value: 101 },
    { label: "KAHATAGASDIGILIYA", value: 107 },
    { label: "KEBITHIGOLLEWA", value: 127 },
    { label: "KEKIRAWA", value: 129 },
    { label: "MEDAWACHCHIYA", value: 187 },
    { label: "MIHINTHALE", value: 190 },
    { label: "NOCHCHIYAGAMA", value: 217 },
    { label: "NUWARAGAM PALATHA CENTRAL", value: 219 },
    { label: "NUWARAGAM PALATHA EAST", value: 220 },
    { label: "PADAVIYA", value: 226 },
    { label: "PALAGALA", value: 229 },
    { label: "PALUGASWEWA", value: 233 },
    { label: "RAJANGANAYA", value: 253 },
    { label: "RAMBEWA", value: 254 },
    { label: "THALAWA", value: 272 },
    { label: "THAMBUTTEGAMA", value: 275 },
    { label: "THIRAPPANE", value: 281 },
    { label: "MAHAWILACHCHIYA", value: 335 },
    { label: "NACHCHADUWA", value: 377 },
  ],
  "21": [
    { label: "DIMBULAGALA", value: 55 },
    { label: "ELAHERA", value: 62 },
    { label: "HINGURAKGODA", value: 93 },
    { label: "LANKAPURA", value: 154 },
    { label: "MEDIRIGIRIYA", value: 188 },
    { label: "THAMANKADUWA", value: 273 },
    { label: "WELIKANDA", value: 318 },
  ],
  "3": [
    { label: "BADULLA", value: 25 },
    { label: "BANDARAWELA", value: 30 },
    { label: "ELLA", value: 64 },
    { label: "HALDUMMULLA", value: 85 },
    { label: "HALI-ELA", value: 86 },
    { label: "HAPUTALE", value: 89 },
    { label: "KANDAKETIYA", value: 114 },
    { label: "LUNUGALA", value: 155 },
    { label: "MAHIYANGANAYA", value: 168 },
    { label: "MEEGAHAKIVULA", value: 189 },
    { label: "PASSARA", value: 240 },
    { label: "RIDEEMALIYADDA", value: 261 },
    { label: "SORANATHOTA", value: 270 },
    { label: "WELIMADA", value: 319 },
    { label: "UVA PARANAGAMA", value: 336 },
  ],
  "18": [
    { label: "BADALKUMBURA", value: 23 },
    { label: "BIBILE", value: 35 },
    { label: "BUTTALA", value: 41 },
    { label: "KATHARAGAMA", value: 123 },
    { label: "MADULLA", value: 159 },
    { label: "MEDAGAMA", value: 186 },
    { label: "MONERAGALA", value: 195 },
    { label: "SEVANAGALA", value: 267 },
    { label: "SIYAMBALANDUWA", value: 268 },
    { label: "THANAMALVILA", value: 276 },
    { label: "WELLAWAYA", value: 323 },
  ],
  "12": [
    { label: "ARANAYAKA", value: 19 },
    { label: "BULATHKOHUPITIYA", value: 39 },
    { label: "DEHIOVITA", value: 48 },
    { label: "DERANIYAGALA", value: 52 },
    { label: "GALIGAMUWA", value: 73 },
    { label: "KEGALLE", value: 128 },
    { label: "MAWANELLA", value: 183 },
    { label: "RAMBUKKANA", value: 255 },
    { label: "RUWANWELLA", value: 262 },
    { label: "WARAKAPOLA", value: 311 },
    { label: "YATIYANTHOTA", value: 329 },
  ],
  "23": [
    { label: "AYAGAMA", value: 22 },
    { label: "BALANGODA", value: 26 },
    { label: "EHELIYAGODA", value: 60 },
    { label: "EMBILIPITIYA", value: 66 },
    { label: "GODAKAWELA", value: 80 },
    { label: "IMBULPE", value: 99 },
    { label: "KAHAWATTA", value: 108 },
    { label: "KALAWANA", value: 109 },
    { label: "KIRIELLA", value: 133 },
    { label: "KOLONNA", value: 136 },
    { label: "KURUVITA", value: 151 },
    { label: "NIVITHIGALA", value: 215 },
    { label: "PELMADULLA", value: 243 },
    { label: "RATNAPURA", value: 258 },
    { label: "WELIGEPOLA", value: 317 },
    { label: "ELAPATHA", value: 372 },
    { label: "OPANAYAKE", value: 373 },
  ],
};

// List of Grama niladhari divisions
export const GRAMA_NILADHARI_DIVISIONS_BY_DIVISIONAL_SECRETARIATS = {
  "2": [
    {
      label: "AGALAWATTA",
      value: 60,
    },
    {
      label: "BERAGAMA",
      value: 1050,
    },
    {
      label: "BODHIYAKANDA",
      value: 1120,
    },
    {
      label: "DAPILIGODA",
      value: 1549,
    },
    {
      label: "DIYAPATTUGAMA",
      value: 1941,
    },
    {
      label: "EVARIWATTA",
      value: 2436,
    },
    {
      label: "GIRIKOLA",
      value: 2826,
    },
    {
      label: "GOROKGODA",
      value: 2970,
    },
    {
      label: "HALOVITA",
      value: 3104,
    },
    {
      label: "HARANKAHAPATHA",
      value: 3220,
    },
    {
      label: "HELAMBA",
      value: 3319,
    },
    {
      label: "KALUPAHANA",
      value: 4358,
    },
    {
      label: "KEKULANDALA NORTH",
      value: 4963,
    },
    {
      label: "KEKULANDALA SOUTH",
      value: 4964,
    },
    {
      label: "KEVITIYAGALA",
      value: 5082,
    },
    {
      label: "KEVITIYAGALA NORTH",
      value: 5083,
    },
    {
      label: "KITHULGODA",
      value: 5248,
    },
    {
      label: "KITHULGODA SOUTH",
      value: 5249,
    },
    {
      label: "KUDA KALUPAHANA",
      value: 5671,
    },
    {
      label: "KURUPITA",
      value: 5906,
    },
    {
      label: "MULATIYANA",
      value: 7426,
    },
    {
      label: "OMATTA",
      value: 8150,
    },
    {
      label: "OMATTA EAST",
      value: 8151,
    },
    {
      label: "PIMBURA",
      value: 9090,
    },
    {
      label: "PINNAGODA",
      value: 9104,
    },
    {
      label: "POLGAMPALA",
      value: 9215,
    },
    {
      label: "POLGAMPALA EAST",
      value: 9216,
    },
    {
      label: "RATHMALE",
      value: 9717,
    },
    {
      label: "RATHMALE EAST",
      value: 9718,
    },
    {
      label: "RIDIREKHAGAMA",
      value: 9794,
    },
    {
      label: "UDAWELA",
      value: 10979,
    },
    {
      label: "WANDURABBA",
      value: 11667,
    },
    {
      label: "YATIYANA EAST",
      value: 12309,
    },
    {
      label: "YATIYANA WEST",
      value: 12310,
    },
  ],
  "4": [
    {
      label: "AKMEEMANA",
      value: 138,
    },
    {
      label: "AMALGAMA",
      value: 295,
    },
    {
      label: "AMBAGAHAVILA",
      value: 313,
    },
    {
      label: "AMBALANWATTA",
      value: 347,
    },
    {
      label: "AMUKOTUWA",
      value: 414,
    },
    {
      label: "ANANGODA",
      value: 447,
    },
    {
      label: "ANKOKKAWALA",
      value: 511,
    },
    {
      label: "ATTARAGODA",
      value: 688,
    },
    {
      label: "BADUNGODA",
      value: 741,
    },
    {
      label: "BADUNGODA COLONY",
      value: 742,
    },
    {
      label: "BAMBARAGODA",
      value: 815,
    },
    {
      label: "BATADOOWA",
      value: 902,
    },
    {
      label: "BATADOOWA WEST",
      value: 903,
    },
    {
      label: "DIVULANA COLONY",
      value: 1899,
    },
    {
      label: "ETAMBAGASMULLA",
      value: 2369,
    },
    {
      label: "ETTILIGODA NORTH",
      value: 2432,
    },
    {
      label: "GALGAMUWA",
      value: 2543,
    },
    {
      label: "GANEGODA",
      value: 2695,
    },
    {
      label: "GANEGODA WEST",
      value: 2698,
    },
    {
      label: "HALGASMULLA",
      value: 3079,
    },
    {
      label: "HALIWALA",
      value: 3082,
    },
    {
      label: "HANDUGODA",
      value: 3162,
    },
    {
      label: "HINIDUMGODA",
      value: 3456,
    },
    {
      label: "HIYARE EAST",
      value: 3496,
    },
    {
      label: "HIYARE NORTH",
      value: 3497,
    },
    {
      label: "HIYARE SOUTH",
      value: 3498,
    },
    {
      label: "IHALA HIYARE",
      value: 3706,
    },
    {
      label: "IHALAGODA COLONY",
      value: 3816,
    },
    {
      label: "IHALAGODA EAST",
      value: 3817,
    },
    {
      label: "IHALAGODA SOUTH",
      value: 3818,
    },
    {
      label: "IHALAGODA WEST",
      value: 3819,
    },
    {
      label: "JAMBUKETIYA",
      value: 4000,
    },
    {
      label: "KADURUDUWA",
      value: 4123,
    },
    {
      label: "KADURUGASHENA",
      value: 4125,
    },
    {
      label: "KALAHE",
      value: 4229,
    },
    {
      label: "KANDAHENA",
      value: 4453,
    },
    {
      label: "KERENVILA COLONY",
      value: 5036,
    },
    {
      label: "KETANDOLA",
      value: 5065,
    },
    {
      label: "KIRINDAGODA",
      value: 5190,
    },
    {
      label: "MANAVILA",
      value: 6631,
    },
    {
      label: "MEEGODA",
      value: 7044,
    },
    {
      label: "MELEGODA",
      value: 7102,
    },
    {
      label: "METARAMBA",
      value: 7130,
    },
    {
      label: "NAGAHAWATTA",
      value: 7569,
    },
    {
      label: "NIVITHIPITIGODA",
      value: 8035,
    },
    {
      label: "NIYAGAMA",
      value: 8041,
    },
    {
      label: "NUGADOOWA",
      value: 8061,
    },
    {
      label: "PANAGAMUWA",
      value: 8601,
    },
    {
      label: "PEDINNORUWA",
      value: 8905,
    },
    {
      label: "PILANA",
      value: 9075,
    },
    {
      label: "PINNADOOWA",
      value: 9102,
    },
    {
      label: "PINNADOOWA COLONY",
      value: 9103,
    },
    {
      label: "RATHKINDAGODA",
      value: 9710,
    },
    {
      label: "THALAHITIYAWA",
      value: 10358,
    },
    {
      label: "THALGASYAYA",
      value: 10430,
    },
    {
      label: "THALPE NORTH",
      value: 10442,
    },
    {
      label: "THALPEGODA",
      value: 10444,
    },
    {
      label: "WALAHANDUWA",
      value: 11569,
    },
    {
      label: "WANCHAWALA",
      value: 11665,
    },
    {
      label: "WELIHENA",
      value: 11961,
    },
    {
      label: "WELIKETIYA",
      value: 11977,
    },
    {
      label: "YAKGAHA",
      value: 12235,
    },
    {
      label: "YATAGAMA",
      value: 12269,
    },
  ],
  "5": [
    {
      label: "AKURANA",
      value: 143,
    },
    {
      label: "ALAWATHUGODA",
      value: 194,
    },
    {
      label: "ARAMBEPOLA",
      value: 567,
    },
    {
      label: "BALAKADUWA",
      value: 773,
    },
    {
      label: "BULUGOHOTHENNA",
      value: 1310,
    },
    {
      label: "DEEGALA",
      value: 1588,
    },
    {
      label: "DELGASGODA",
      value: 1678,
    },
    {
      label: "DELGASTHENNA",
      value: 1680,
    },
    {
      label: "DIPPITIYA",
      value: 1888,
    },
    {
      label: "DODANGOLLA",
      value: 1984,
    },
    {
      label: "DUNUVILA NORTH",
      value: 2092,
    },
    {
      label: "DUNUVILA SOUTH",
      value: 2093,
    },
    {
      label: "HUREEGOLLA",
      value: 3621,
    },
    {
      label: "KASAWATTA",
      value: 4760,
    },
    {
      label: "KONAKALAGALA",
      value: 5425,
    },
    {
      label: "KURUDUGAHAELA",
      value: 5861,
    },
    {
      label: "KURUGODA",
      value: 5864,
    },
    {
      label: "MALGAMANDENIYA",
      value: 6519,
    },
    {
      label: "MALWANAHINNA",
      value: 6582,
    },
    {
      label: "MARAHELA",
      value: 6733,
    },
    {
      label: "MAWATHUPOLA",
      value: 6886,
    },
    {
      label: "MELCHENA",
      value: 7099,
    },
    {
      label: "NEERELLA",
      value: 7868,
    },
    {
      label: "PALLE DEEGALA",
      value: 8485,
    },
    {
      label: "PALLEWELIKETIYA",
      value: 8528,
    },
    {
      label: "PANGOLLAMADA",
      value: 8675,
    },
    {
      label: "RAMBUKE ELA",
      value: 9602,
    },
    {
      label: "RATHUKOHO",
      value: 9742,
    },
    {
      label: "THELAMBUGAHAWATTA",
      value: 10564,
    },
    {
      label: "UDAWELIKETIYA",
      value: 10985,
    },
    {
      label: "UGGALA",
      value: 11084,
    },
    {
      label: "VILANA PALLEGAMA",
      value: 11438,
    },
    {
      label: "VILANA UDAGAMA",
      value: 11439,
    },
    {
      label: "WALAHENA",
      value: 11571,
    },
    {
      label: "WARAGASHINNA",
      value: 11701,
    },
  ],
  "6": [
    {
      label: "AKURESSA",
      value: 144,
    },
    {
      label: "ASMAGODA",
      value: 637,
    },
    {
      label: "BOPITIYA",
      value: 1204,
    },
    {
      label: "DEDIYAGALA",
      value: 1580,
    },
    {
      label: "DIGANAHENA",
      value: 1837,
    },
    {
      label: "DIYALAPE",
      value: 1938,
    },
    {
      label: "DOLAMAWATHA",
      value: 1989,
    },
    {
      label: "EHELAPE",
      value: 2149,
    },
    {
      label: "ELLEWELA",
      value: 2244,
    },
    {
      label: "ERAMUDUGODA",
      value: 2312,
    },
    {
      label: "GALABADAHENA",
      value: 2462,
    },
    {
      label: "GALLALA",
      value: 2573,
    },
    {
      label: "GANHELA",
      value: 2730,
    },
    {
      label: "HENEGAMA",
      value: 3350,
    },
    {
      label: "HENEGAMA WEST",
      value: 3352,
    },
    {
      label: "HIGGODA",
      value: 3411,
    },
    {
      label: "HULANDAWA",
      value: 3578,
    },
    {
      label: "IDIKATUDENIYA",
      value: 3655,
    },
    {
      label: "IHALA KIYANDUWA",
      value: 3726,
    },
    {
      label: "IHALA MALIDUWA",
      value: 3753,
    },
    {
      label: "ILUPPELLA",
      value: 3864,
    },
    {
      label: "IMBULGODA",
      value: 3881,
    },
    {
      label: "KETANVILA",
      value: 5067,
    },
    {
      label: "KOHUGODA",
      value: 5337,
    },
    {
      label: "LENAMA NORTH",
      value: 5985,
    },
    {
      label: "LENAMA SOUTH",
      value: 5986,
    },
    {
      label: "MANIKGODA",
      value: 6668,
    },
    {
      label: "MARAMBA NORTH",
      value: 6741,
    },
    {
      label: "MARAMBA SOUTH",
      value: 6742,
    },
    {
      label: "MELEWWA",
      value: 7103,
    },
    {
      label: "MINIPOGODA",
      value: 7200,
    },
    {
      label: "NAWALAGODA",
      value: 7804,
    },
    {
      label: "NIMALAWA",
      value: 7983,
    },
    {
      label: "NIMALAWA EAST",
      value: 7984,
    },
    {
      label: "PAHALA MALIDUWA",
      value: 8322,
    },
    {
      label: "PARADUWA EAST",
      value: 8732,
    },
    {
      label: "PARADUWA NORTH",
      value: 8733,
    },
    {
      label: "PARADUWA SOUTH",
      value: 8734,
    },
    {
      label: "PARAGAHAWATTA",
      value: 8741,
    },
    {
      label: "PEDDAPITIYA NORTH",
      value: 8901,
    },
    {
      label: "PEDDAPITIYA SOUTH",
      value: 8902,
    },
    {
      label: "PORAMBA",
      value: 9286,
    },
    {
      label: "UDUPITIYA",
      value: 11042,
    },
    {
      label: "VILAGAMA",
      value: 11435,
    },
    {
      label: "WELIKETIYA",
      value: 11977,
    },
    {
      label: "YAKABEDDA",
      value: 12225,
    },
  ],
  "7": [
    {
      label: "ABBOWA",
      value: 13,
    },
    {
      label: "ALAWWA NORTH",
      value: 201,
    },
    {
      label: "ALAWWA SOUTH",
      value: 202,
    },
    {
      label: "BOWALA",
      value: 1256,
    },
    {
      label: "BOYAWALANA",
      value: 1266,
    },
    {
      label: "BUJJOMUWA",
      value: 1290,
    },
    {
      label: "DAMUNUPOLA",
      value: 1505,
    },
    {
      label: "DEHELGAMUWA",
      value: 1617,
    },
    {
      label: "DIVULGAHAKOTUWA",
      value: 1904,
    },
    {
      label: "GALATHARAYA",
      value: 2515,
    },
    {
      label: "GALDENIYA",
      value: 2532,
    },
    {
      label: "GALGAMUWA NORTH",
      value: 2545,
    },
    {
      label: "GALGAMUWA SOUTH",
      value: 2546,
    },
    {
      label: "GALPOTTEPOLA",
      value: 2620,
    },
    {
      label: "HENDUWAWA",
      value: 3348,
    },
    {
      label: "HENDUWAWA COLONY",
      value: 3349,
    },
    {
      label: "HINNARAPOLA",
      value: 3458,
    },
    {
      label: "HUMBULUWA EAST",
      value: 3590,
    },
    {
      label: "HUMBULUWA WEST",
      value: 3591,
    },
    {
      label: "IHALA KALALPITIYA",
      value: 3711,
    },
    {
      label: "IHALA WALAKUMBURA",
      value: 3795,
    },
    {
      label: "IHALA WETTEWA",
      value: 3804,
    },
    {
      label: "IMBULGODA",
      value: 3881,
    },
    {
      label: "KANAMEEWALA",
      value: 4430,
    },
    {
      label: "KANDEGEDARA NORTH",
      value: 4493,
    },
    {
      label: "KANDEGEDARA SOUTH",
      value: 4494,
    },
    {
      label: "KEBELLAVITA",
      value: 4906,
    },
    {
      label: "KENDAGOLLA",
      value: 5001,
    },
    {
      label: "KENDAHENA",
      value: 5003,
    },
    {
      label: "KEPPITIWALANA",
      value: 5024,
    },
    {
      label: "KIRIWANAPOLA",
      value: 5214,
    },
    {
      label: "KOHOLANA",
      value: 5319,
    },
    {
      label: "LEWDENIYA",
      value: 5995,
    },
    {
      label: "MADAWALA",
      value: 6103,
    },
    {
      label: "MAHARACHCHIMULLA",
      value: 6349,
    },
    {
      label: "MALDENIYA",
      value: 6513,
    },
    {
      label: "MEDAGAMPOLA",
      value: 6942,
    },
    {
      label: "MIRIHELIYA",
      value: 7222,
    },
    {
      label: "NAWATHALWATTA",
      value: 7820,
    },
    {
      label: "NEBADAWATHURA",
      value: 7836,
    },
    {
      label: "NUGAWELA",
      value: 8071,
    },
    {
      label: "NUNGAMUWA IHALA",
      value: 8090,
    },
    {
      label: "NUNGAMUWA PAHALA",
      value: 8091,
    },
    {
      label: "OTHARA KIRUWAMPOLA",
      value: 8179,
    },
    {
      label: "PAHALA KALALPITIYA",
      value: 8287,
    },
    {
      label: "PAHALA WALAKUMBURA",
      value: 8364,
    },
    {
      label: "PALLEKEKULAWALA",
      value: 8508,
    },
    {
      label: "PALLEMORUGAMA",
      value: 8515,
    },
    {
      label: "PANGOLLA",
      value: 8674,
    },
    {
      label: "PANNALA",
      value: 8695,
    },
    {
      label: "PARAMAULLA",
      value: 8765,
    },
    {
      label: "PORAMADALA",
      value: 9284,
    },
    {
      label: "THUMBULLA",
      value: 10789,
    },
    {
      label: "UDAGANKANDA",
      value: 10897,
    },
    {
      label: "UDAKEKULAWALA",
      value: 10921,
    },
    {
      label: "VILGAMUWA",
      value: 11453,
    },
    {
      label: "VILGAMUWA WATTA",
      value: 11454,
    },
    {
      label: "WADAWA",
      value: 11500,
    },
    {
      label: "WADUWAWA",
      value: 11524,
    },
    {
      label: "WEDENIYA",
      value: 11832,
    },
    {
      label: "WELIKARE",
      value: 11974,
    },
    {
      label: "WENNORUWA EAST",
      value: 12066,
    },
    {
      label: "WENNORUWA WEST",
      value: 12067,
    },
    {
      label: "WEWALA",
      value: 12140,
    },
    {
      label: "YATIGALOLUWA",
      value: 12289,
    },
    {
      label: "YATTALGODA",
      value: 12312,
    },
  ],
  "9": [
    {
      label: "AMBAGAMUWA EAST",
      value: 319,
    },
    {
      label: "AMBAGAMUWA NORTH",
      value: 320,
    },
    {
      label: "AMBAGAMUWA SOUTH",
      value: 321,
    },
    {
      label: "ANNFIELD",
      value: 520,
    },
    {
      label: "AULTON WATTA",
      value: 702,
    },
    {
      label: "BAGAWANTHALAWA SOUTH",
      value: 746,
    },
    {
      label: "BOGAWANA",
      value: 1139,
    },
    {
      label: "BROWNLOW",
      value: 1273,
    },
    {
      label: "BROWNSWICK",
      value: 1274,
    },
    {
      label: "DAGAMPITIYA",
      value: 1410,
    },
    {
      label: "DEHIGASTHENNA",
      value: 1639,
    },
    {
      label: "DICKOYA",
      value: 1818,
    },
    {
      label: "DICKOYA SOUTH",
      value: 1819,
    },
    {
      label: "GAWARAWILA",
      value: 2764,
    },
    {
      label: "GINIGATHHENA",
      value: 2797,
    },
    {
      label: "GONAWALA",
      value: 2938,
    },
    {
      label: "HANGARAPITIYA",
      value: 3172,
    },
    {
      label: "HATTON EAST",
      value: 3257,
    },
    {
      label: "HATTON NORTH",
      value: 3258,
    },
    {
      label: "HATTON SOUTH",
      value: 3259,
    },
    {
      label: "HATTON WEST",
      value: 3260,
    },
    {
      label: "HEBBEKANDA",
      value: 3267,
    },
    {
      label: "HITIGEGAMA",
      value: 3489,
    },
    {
      label: "HOMAGAMA",
      value: 3510,
    },
    {
      label: "INJUSTRY",
      value: 3932,
    },
    {
      label: "JAMBUTHENNA",
      value: 4004,
    },
    {
      label: "KALAWELDENIYA",
      value: 4259,
    },
    {
      label: "KEHELWARAWA",
      value: 4947,
    },
    {
      label: "KIRIWANELIYA",
      value: 5218,
    },
    {
      label: "KIRKOSWALD",
      value: 5226,
    },
    {
      label: "KOTIYAGALA",
      value: 5608,
    },
    {
      label: "KOTTELLENA",
      value: 5626,
    },
    {
      label: "LAKSHAPANA",
      value: 5944,
    },
    {
      label: "LETHANT",
      value: 5990,
    },
    {
      label: "LOINON",
      value: 6034,
    },
    {
      label: "MAHANELU",
      value: 6335,
    },
    {
      label: "MASKELIYA",
      value: 6790,
    },
    {
      label: "MAUSSAKELE",
      value: 6844,
    },
    {
      label: "MILLAGAHAMULA",
      value: 7175,
    },
    {
      label: "MINUWANDENIYA",
      value: 7207,
    },
    {
      label: "MOCHA",
      value: 7248,
    },
    {
      label: "MORAHENAGAMA",
      value: 7327,
    },
    {
      label: "MORAY",
      value: 7361,
    },
    {
      label: "NEWVALLEYGAMA",
      value: 7937,
    },
    {
      label: "NORWOOD",
      value: 8059,
    },
    {
      label: "PANMUR",
      value: 8691,
    },
    {
      label: "POLPITIYA",
      value: 9238,
    },
    {
      label: "RAMPADENIYA",
      value: 9617,
    },
    {
      label: "ROSELLA",
      value: 9819,
    },
    {
      label: "RUWANPURA",
      value: 9846,
    },
    {
      label: "SAMANSIRIGAMA",
      value: 9894,
    },
    {
      label: "SEETHAGANGULA",
      value: 10011,
    },
    {
      label: "SELLIPIGAMA",
      value: 10026,
    },
    {
      label: "SHANON",
      value: 10086,
    },
    {
      label: "STRATHSPEY",
      value: 10273,
    },
    {
      label: "THEENIYAGALA",
      value: 10559,
    },
    {
      label: "TILLARY",
      value: 10836,
    },
    {
      label: "VENTURE",
      value: 11394,
    },
    {
      label: "VIDULIPURA NORTH",
      value: 11410,
    },
    {
      label: "VIDULIPURA SOUTH",
      value: 11411,
    },
    {
      label: "WAGGAMA",
      value: 11534,
    },
    {
      label: "WANARAJAH",
      value: 11658,
    },
    {
      label: "WATAWALA",
      value: 11762,
    },
    {
      label: "WELIOYA",
      value: 11986,
    },
  ],
  "10": [
    {
      label: "BATADOOWA",
      value: 902,
    },
    {
      label: "BATAPOLA CENTRAL",
      value: 927,
    },
    {
      label: "BATAPOLA EAST",
      value: 928,
    },
    {
      label: "BATAPOLA NORTH",
      value: 929,
    },
    {
      label: "BATAPOLA SOUTH",
      value: 930,
    },
    {
      label: "BATAPOLA WEST",
      value: 931,
    },
    {
      label: "DIDDELIYA",
      value: 1827,
    },
    {
      label: "DOMANVILA",
      value: 2000,
    },
    {
      label: "DORALA",
      value: 2029,
    },
    {
      label: "ERANAVILA",
      value: 2315,
    },
    {
      label: "GODAHENA",
      value: 2845,
    },
    {
      label: "HEPPUMULLA",
      value: 3365,
    },
    {
      label: "HIREWATTA",
      value: 3466,
    },
    {
      label: "KALUWADUMULLA",
      value: 4372,
    },
    {
      label: "KARITTAKANDA",
      value: 4732,
    },
    {
      label: "KERAMINIYA",
      value: 5031,
    },
    {
      label: "KOBEITHUDUWA",
      value: 5289,
    },
    {
      label: "KONDAGALA",
      value: 5430,
    },
    {
      label: "LEWDOOWA",
      value: 5996,
    },
    {
      label: "MAHA AMBALANGODA",
      value: 6217,
    },
    {
      label: "MEETIYAGODA",
      value: 7074,
    },
    {
      label: "METIWALA",
      value: 7143,
    },
    {
      label: "NAWAGAMA",
      value: 7794,
    },
    {
      label: "NINDANA",
      value: 7986,
    },
    {
      label: "OKANDA",
      value: 8117,
    },
    {
      label: "PANIYANDOOWA",
      value: 8684,
    },
    {
      label: "PATABENDIMULLA",
      value: 8828,
    },
    {
      label: "POLHUNNAWA",
      value: 9220,
    },
    {
      label: "POLWATTA",
      value: 9245,
    },
    {
      label: "PORAMBA",
      value: 9286,
    },
    {
      label: "THALGASGODA",
      value: 10421,
    },
    {
      label: "THANIPOLGAHALANGA",
      value: 10513,
    },
    {
      label: "THILAKAPURA",
      value: 10648,
    },
    {
      label: "UDAKEREWA",
      value: 10924,
    },
    {
      label: "VILEGODA",
      value: 11448,
    },
    {
      label: "WALAKADA",
      value: 11572,
    },
  ],
  "11": [
    {
      label: "AMBALANTHOTA NORTH",
      value: 345,
    },
    {
      label: "AMBALANTHOTA SOUTH",
      value: 346,
    },
    {
      label: "BARAWAKUMBUKA",
      value: 891,
    },
    {
      label: "BATAATHA NORTH",
      value: 898,
    },
    {
      label: "BATAATHA SOUTH",
      value: 899,
    },
    {
      label: "BEMINIYANVILA",
      value: 1038,
    },
    {
      label: "BOLANA NORTH",
      value: 1156,
    },
    {
      label: "BOLANA SOUTH",
      value: 1157,
    },
    {
      label: "DENIYA",
      value: 1754,
    },
    {
      label: "EKKASSA",
      value: 2167,
    },
    {
      label: "ELEGODA EAST",
      value: 2202,
    },
    {
      label: "ELEGODA WEST",
      value: 2203,
    },
    {
      label: "ERAMINIYAYA",
      value: 2310,
    },
    {
      label: "ETHBATUWA",
      value: 2393,
    },
    {
      label: "GODAKOGGALLA",
      value: 2848,
    },
    {
      label: "HANDUNKATUWA",
      value: 3165,
    },
    {
      label: "HATHAGALA",
      value: 3235,
    },
    {
      label: "HEDAVINNA",
      value: 3268,
    },
    {
      label: "HUNGAMA",
      value: 3595,
    },
    {
      label: "IHALAGAMA",
      value: 3810,
    },
    {
      label: "JANSAGAMA",
      value: 4015,
    },
    {
      label: "KIVULA NORTH",
      value: 5269,
    },
    {
      label: "KIVULA SOUTH",
      value: 5270,
    },
    {
      label: "KOGGALLA",
      value: 5316,
    },
    {
      label: "KUDABOLANA",
      value: 5694,
    },
    {
      label: "LIYANGASTHOTA",
      value: 6029,
    },
    {
      label: "LUNAMA NORTH",
      value: 6041,
    },
    {
      label: "LUNAMA SOUTH",
      value: 6042,
    },
    {
      label: "MAHAJANDURA",
      value: 6301,
    },
    {
      label: "MALPETTAWA",
      value: 6570,
    },
    {
      label: "MAMADALA NORTH",
      value: 6593,
    },
    {
      label: "MAMADALA SOUTH",
      value: 6594,
    },
    {
      label: "MINIETHILIYA",
      value: 7195,
    },
    {
      label: "MODARA PILIWALA",
      value: 7251,
    },
    {
      label: "MULANA",
      value: 7421,
    },
    {
      label: "MURAWESIHENA",
      value: 7483,
    },
    {
      label: "NONAGAMA",
      value: 8055,
    },
    {
      label: "PALLEGAMA",
      value: 8497,
    },
    {
      label: "PALUGAHA GODELLA",
      value: 8556,
    },
    {
      label: "PINGAMA",
      value: 9095,
    },
    {
      label: "POLIYARWATTA",
      value: 9224,
    },
    {
      label: "PUHULYAYA",
      value: 9361,
    },
    {
      label: "PUNCHIHENAYAGAMA",
      value: 9409,
    },
    {
      label: "RIDIYAGAMA",
      value: 9796,
    },
    {
      label: "ROTAWALA",
      value: 9821,
    },
    {
      label: "ROTE",
      value: 9823,
    },
    {
      label: "SIYAMBALAKOTE",
      value: 10202,
    },
    {
      label: "THALIGALA",
      value: 10432,
    },
    {
      label: "THAWALUVILA",
      value: 10556,
    },
    {
      label: "UHAPITAGODA",
      value: 11100,
    },
    {
      label: "WALAWEWATTA EAST",
      value: 11605,
    },
    {
      label: "WALAWEWATTA WEST",
      value: 11606,
    },
    {
      label: "WANDURUPPA",
      value: 11677,
    },
    {
      label: "WELIPATANVILA",
      value: 11987,
    },
    {
      label: "WETIYA",
      value: 12126,
    },
  ],
  "12": [
    {
      label: "ALUTHWELA",
      value: 278,
    },
    {
      label: "CLODA",
      value: 1388,
    },
    {
      label: "GAMMADUWA",
      value: 2653,
    },
    {
      label: "GURUBEBILA",
      value: 2997,
    },
    {
      label: "HUNUKETE",
      value: 3606,
    },
    {
      label: "IMBULGOLLA",
      value: 3883,
    },
    {
      label: "KALUGALTHENNA",
      value: 4341,
    },
    {
      label: "KAVUDAGAMMANA",
      value: 4883,
    },
    {
      label: "KOSGOLLA",
      value: 5531,
    },
    {
      label: "KUMBALOLUWA",
      value: 5787,
    },
    {
      label: "METIHAKKA",
      value: 7138,
    },
    {
      label: "NAGULIYADDA",
      value: 7588,
    },
    {
      label: "NARANGOLLA",
      value: 7711,
    },
    {
      label: "PALLE ESWEDDUMA",
      value: 8486,
    },
    {
      label: "PALLETHENNA",
      value: 8524,
    },
    {
      label: "PUSSELLA",
      value: 9456,
    },
    {
      label: "RAITHALAWA",
      value: 9547,
    },
    {
      label: "RANMUTHUGAMA",
      value: 9666,
    },
    {
      label: "SIRANGAHAWATTA",
      value: 10140,
    },
    {
      label: "THIBBATUKANATHA",
      value: 10629,
    },
  ],
  "13": [
    {
      label: "ABAKOLAWEWA NORTH",
      value: 9,
    },
    {
      label: "ABAKOLAWEWA SOUTH",
      value: 10,
    },
    {
      label: "AMBANPOLA NORTH",
      value: 363,
    },
    {
      label: "AMBANPOLA SOUTH",
      value: 364,
    },
    {
      label: "AMUNUGAMA",
      value: 418,
    },
    {
      label: "BAKMEEWEWA",
      value: 757,
    },
    {
      label: "BELUNGALA",
      value: 1035,
    },
    {
      label: "BORAWEWA",
      value: 1236,
    },
    {
      label: "DETHAWA",
      value: 1768,
    },
    {
      label: "ELLABADAGAMA",
      value: 2222,
    },
    {
      label: "KASIKOTE EAST",
      value: 4763,
    },
    {
      label: "KASIKOTE WEST",
      value: 4764,
    },
    {
      label: "KETTAPAHUWA",
      value: 5080,
    },
    {
      label: "KIRIMETIYAWA",
      value: 5182,
    },
    {
      label: "MAHA DIVULWEWA",
      value: 6226,
    },
    {
      label: "MEDIYAWA",
      value: 7003,
    },
    {
      label: "NEKATHI KUMBUKWEWA",
      value: 7876,
    },
    {
      label: "NELUMPATHWEWA",
      value: 7900,
    },
    {
      label: "PALAPATHWALA",
      value: 8435,
    },
    {
      label: "RANORUWA",
      value: 9672,
    },
    {
      label: "ROLAWA",
      value: 9815,
    },
    {
      label: "SERUGODA",
      value: 10069,
    },
    {
      label: "UDA DIVULWEWA",
      value: 10863,
    },
    {
      label: "UDAGAMA",
      value: 10891,
    },
    {
      label: "UDANGAWA",
      value: 10949,
    },
    {
      label: "WADURESSA",
      value: 11522,
    },
    {
      label: "WALALIYA",
      value: 11579,
    },
    {
      label: "WARAGAMMANA",
      value: 11700,
    },
  ],
  "15": [
    {
      label: "07 GAMMANAYA",
      value: 2,
    },
    {
      label: "ALANKULAMA",
      value: 178,
    },
    {
      label: "ANAMADUWA",
      value: 444,
    },
    {
      label: "BAMMANNEGAMA",
      value: 828,
    },
    {
      label: "DHARMAPALAYA",
      value: 1815,
    },
    {
      label: "DIVULWEWA",
      value: 1916,
    },
    {
      label: "GALLEWA",
      value: 2588,
    },
    {
      label: "KARAMBEWA",
      value: 4664,
    },
    {
      label: "KOILANDIGAMA",
      value: 5342,
    },
    {
      label: "KOTHALAKEMIYAWA",
      value: 5595,
    },
    {
      label: "KOTTUKACHCHIYA",
      value: 5629,
    },
    {
      label: "KOTTUKACHCHIYA COLONY 1",
      value: 5630,
    },
    {
      label: "KOTTUKACHCHIYA COLONY 2",
      value: 5631,
    },
    {
      label: "LABUGALA",
      value: 5928,
    },
    {
      label: "MAHA USWEWA NORTH",
      value: 6259,
    },
    {
      label: "MAHA USWEWA SOUTH",
      value: 6260,
    },
    {
      label: "MELLANKULAMA",
      value: 7107,
    },
    {
      label: "MERUNGODA",
      value: 7127,
    },
    {
      label: "MUDALAKKULIYA",
      value: 7384,
    },
    {
      label: "PALIYAGAMA",
      value: 8466,
    },
    {
      label: "PARAMAKANDAGAMA",
      value: 8763,
    },
    {
      label: "PERAMAKUTTUWA",
      value: 8979,
    },
    {
      label: "PERIYAKULAMA",
      value: 9013,
    },
    {
      label: "SANGATTIKULAMA",
      value: 9955,
    },
    {
      label: "SIYAMBALAGASHENA",
      value: 10188,
    },
    {
      label: "THALAKOLAWEWA",
      value: 10361,
    },
    {
      label: "THALGASWEWA",
      value: 10429,
    },
    {
      label: "THAMMENNAGAMA",
      value: 10490,
    },
    {
      label: "THATTEWA",
      value: 10542,
    },
    {
      label: "THONIGALA",
      value: 10735,
    },
    {
      label: "UPPALAWATTA",
      value: 11182,
    },
    {
      label: "URIYAWA",
      value: 11219,
    },
    {
      label: "VIHARAGAMA",
      value: 11423,
    },
    {
      label: "WADATTA",
      value: 11499,
    },
    {
      label: "WADIGAMANGAWA",
      value: 11509,
    },
  ],
  "16": [
    {
      label: "ABESEKARAGAMA",
      value: 14,
    },
    {
      label: "ACHARIYAGAMA",
      value: 20,
    },
    {
      label: "ALUTHWEWA",
      value: 279,
    },
    {
      label: "AMARATHUNGAMA",
      value: 303,
    },
    {
      label: "ANGUNAKOLAPELESSA",
      value: 494,
    },
    {
      label: "ATTANAYALA EAST",
      value: 682,
    },
    {
      label: "ATTANAYALA WEST",
      value: 683,
    },
    {
      label: "BINKAMA",
      value: 1089,
    },
    {
      label: "BOGAMUWA",
      value: 1136,
    },
    {
      label: "DABARELLA NORTH",
      value: 1398,
    },
    {
      label: "DABARELLA SOUTH",
      value: 1399,
    },
    {
      label: "DAHA AMUNA",
      value: 1414,
    },
    {
      label: "DANDENIGAMA",
      value: 1509,
    },
    {
      label: "DEBOKKAWA NORTH",
      value: 1571,
    },
    {
      label: "DEBOKKAWA SOUTH",
      value: 1572,
    },
    {
      label: "DIKWEWA",
      value: 1870,
    },
    {
      label: "DIMBULGODA",
      value: 1880,
    },
    {
      label: "GAJANAYAKAGAMA",
      value: 2454,
    },
    {
      label: "GURUNNEHEGE ARA",
      value: 3020,
    },
    {
      label: "GURUWALA",
      value: 3024,
    },
    {
      label: "HAKURUWELA",
      value: 3064,
    },
    {
      label: "HEENBUNNA",
      value: 3290,
    },
    {
      label: "HELEKADA",
      value: 3326,
    },
    {
      label: "INDIGETAWELA",
      value: 3896,
    },
    {
      label: "JANDURA",
      value: 4011,
    },
    {
      label: "JULAMULLA",
      value: 4052,
    },
    {
      label: "KAILAWELPOTAWA",
      value: 4201,
    },
    {
      label: "KALAWELWALA",
      value: 4260,
    },
    {
      label: "KANKANAMGAMA",
      value: 4528,
    },
    {
      label: "KARAGAHAWALA",
      value: 4610,
    },
    {
      label: "KARIYAMADITTA",
      value: 4736,
    },
    {
      label: "KENDAKETIYA",
      value: 5005,
    },
    {
      label: "KOHOMBAGASWEWA",
      value: 5327,
    },
    {
      label: "KOTAWAYA",
      value: 5591,
    },
    {
      label: "MAKULADENIYA",
      value: 6463,
    },
    {
      label: "MEDA ARA",
      value: 6901,
    },
    {
      label: "MEDAGODA",
      value: 6947,
    },
    {
      label: "MEDAYALA",
      value: 6975,
    },
    {
      label: "METIGATHWALA",
      value: 7137,
    },
    {
      label: "NETALAPORUWA",
      value: 7917,
    },
    {
      label: "PAHALAGAMA",
      value: 8378,
    },
    {
      label: "RATHMALWALA",
      value: 9730,
    },
    {
      label: "SOORIYAPOKUNA",
      value: 10239,
    },
    {
      label: "THALAMPORUWA",
      value: 10371,
    },
    {
      label: "THALAWA NORTH",
      value: 10396,
    },
    {
      label: "THALAWA SOUTH",
      value: 10397,
    },
    {
      label: "UDAYALA",
      value: 10992,
    },
    {
      label: "USWEWA",
      value: 11255,
    },
    {
      label: "WAKAMULLA",
      value: 11556,
    },
    {
      label: "WEERAGASWEWA",
      value: 11845,
    },
    {
      label: "YAKAGALA",
      value: 12227,
    },
  ],
  "18": [
    {
      label: "ADIPPALA",
      value: 55,
    },
    {
      label: "AMBAKELE",
      value: 333,
    },
    {
      label: "ANAVILUNDAWA",
      value: 450,
    },
    {
      label: "ANDANAN KATTUWA",
      value: 455,
    },
    {
      label: "ARACHCHIKATTUWA EAST",
      value: 534,
    },
    {
      label: "ARACHCHIKATTUWA WEST",
      value: 535,
    },
    {
      label: "BANDARAHENA",
      value: 853,
    },
    {
      label: "BANGADENIYA",
      value: 876,
    },
    {
      label: "BATTALUOYA",
      value: 949,
    },
    {
      label: "BURUTHAKELE",
      value: 1324,
    },
    {
      label: "DEMATAPITIYA",
      value: 1728,
    },
    {
      label: "DIGANWEWA",
      value: 1846,
    },
    {
      label: "ELIVITIYA",
      value: 2213,
    },
    {
      label: "IHALA ATTANGANAYA",
      value: 3670,
    },
    {
      label: "ILAKKATTUWA",
      value: 3831,
    },
    {
      label: "KARUKKULIYA",
      value: 4739,
    },
    {
      label: "KARUKUPANE",
      value: 4742,
    },
    {
      label: "KOTTAPITIYA",
      value: 5616,
    },
    {
      label: "KUMARAKATTUWA",
      value: 5772,
    },
    {
      label: "KUSALA",
      value: 5915,
    },
    {
      label: "MAHAMAELIYA",
      value: 6327,
    },
    {
      label: "MUKKANDALUWA",
      value: 7418,
    },
    {
      label: "NALLADARANKATTUWA",
      value: 7631,
    },
    {
      label: "PAHALA ATTANGANAYA",
      value: 8237,
    },
    {
      label: "PANKULAWA",
      value: 8689,
    },
    {
      label: "RAJAKADALUWA",
      value: 9562,
    },
    {
      label: "SENGALOYA",
      value: 10055,
    },
    {
      label: "SURUVILA",
      value: 10302,
    },
    {
      label: "WAIRANKATTUWA",
      value: 11555,
    },
    {
      label: "WEERAKUMANDALUWA",
      value: 11855,
    },
    {
      label: "WELIPELESSA",
      value: 11990,
    },
    {
      label: "WIJAYAKATUPATHA ELEN EGODA",
      value: 12181,
    },
    {
      label: "WIJAYAKATUPATHA ELEN MEGODA",
      value: 12182,
    },
  ],
  "19": [
    {
      label: "AMBALAKANDA",
      value: 339,
    },
    {
      label: "ARAMA",
      value: 560,
    },
    {
      label: "ARANAYAKA",
      value: 572,
    },
    {
      label: "ASMADALA",
      value: 636,
    },
    {
      label: "ATTAPITIYA",
      value: 684,
    },
    {
      label: "DAMPELGODA",
      value: 1493,
    },
    {
      label: "DEBATHGAMA PALLEBAGE",
      value: 1567,
    },
    {
      label: "DEBATHGAMA UDABAGE",
      value: 1568,
    },
    {
      label: "DEEWELA UDAGAMA",
      value: 1609,
    },
    {
      label: "DEIYANWALA",
      value: 1656,
    },
    {
      label: "DEVANAGALA",
      value: 1770,
    },
    {
      label: "DIPPITIYA",
      value: 1888,
    },
    {
      label: "DULDENIYA",
      value: 2054,
    },
    {
      label: "ELANGIPITIYA",
      value: 2190,
    },
    {
      label: "EPALAWA WATTA",
      value: 2303,
    },
    {
      label: "GAL ATHARA",
      value: 2456,
    },
    {
      label: "GALBOKKA",
      value: 2528,
    },
    {
      label: "GAMMANNAGODA",
      value: 2659,
    },
    {
      label: "GANTHUNA MEDAGAMA",
      value: 2745,
    },
    {
      label: "GANTHUNA UDAGAMA",
      value: 2748,
    },
    {
      label: "GETABERI KANDA",
      value: 2779,
    },
    {
      label: "GEVILIPITIYA GAMA",
      value: 2790,
    },
    {
      label: "GEVILIPITIYA TOWN",
      value: 2791,
    },
    {
      label: "GODIGAMUWA",
      value: 2877,
    },
    {
      label: "HABALAKKAWA",
      value: 3028,
    },
    {
      label: "HAKURUGAMMANA",
      value: 3061,
    },
    {
      label: "HATHGAMPALA",
      value: 3245,
    },
    {
      label: "JAMBUGASMADA",
      value: 3998,
    },
    {
      label: "KALUGALA",
      value: 4334,
    },
    {
      label: "KANDAMULLA",
      value: 4464,
    },
    {
      label: "KANDE WATTA",
      value: 4489,
    },
    {
      label: "KARIYAGAMA",
      value: 4734,
    },
    {
      label: "KATUGAHA",
      value: 4827,
    },
    {
      label: "KEERAPANA",
      value: 4924,
    },
    {
      label: "KEHELWATTA",
      value: 4949,
    },
    {
      label: "KUMARAPURA",
      value: 5774,
    },
    {
      label: "LAMBUTUWA",
      value: 5949,
    },
    {
      label: "MORAGAMMANA",
      value: 7314,
    },
    {
      label: "NARANGALA",
      value: 7697,
    },
    {
      label: "NARANGAMMANA",
      value: 7700,
    },
    {
      label: "NIKAPITIYA",
      value: 7952,
    },
    {
      label: "PANNALA",
      value: 8695,
    },
    {
      label: "PEHINIPEDDARA",
      value: 8913,
    },
    {
      label: "PODAPE",
      value: 9177,
    },
    {
      label: "RAHALA",
      value: 9535,
    },
    {
      label: "RANDILIGAMA",
      value: 9639,
    },
    {
      label: "RUWANDENIYA",
      value: 9844,
    },
    {
      label: "SELAWA EAST",
      value: 10020,
    },
    {
      label: "SELAWA WEST",
      value: 10021,
    },
    {
      label: "THALGAMUWA",
      value: 10420,
    },
    {
      label: "THALGASPITIYA",
      value: 10425,
    },
    {
      label: "THALGASPITIYA MUSLIMGAMA",
      value: 10426,
    },
    {
      label: "THELLEKA",
      value: 10583,
    },
    {
      label: "UDAGAMA",
      value: 10891,
    },
    {
      label: "UDUWEWELA",
      value: 11081,
    },
    {
      label: "USSAPITIYA",
      value: 11250,
    },
    {
      label: "VILPOLA",
      value: 11469,
    },
    {
      label: "WAHARAKGODA",
      value: 11547,
    },
    {
      label: "WAKIRIGALA",
      value: 11557,
    },
    {
      label: "WATTEGEDARA",
      value: 11802,
    },
    {
      label: "YODHAGAMA",
      value: 12320,
    },
  ],
  "20": [
    {
      label: "ATHURALIYA EAST",
      value: 664,
    },
    {
      label: "ATHURALIYA WEST",
      value: 665,
    },
    {
      label: "BALAKAWALA",
      value: 774,
    },
    {
      label: "DEMATAPASSA",
      value: 1727,
    },
    {
      label: "DIVITHURA",
      value: 1890,
    },
    {
      label: "GODAPITIYA",
      value: 2860,
    },
    {
      label: "HAWPE",
      value: 3264,
    },
    {
      label: "IHALA ATHURALIYA",
      value: 3669,
    },
    {
      label: "KANAHALAGAMA",
      value: 4426,
    },
    {
      label: "KEHELWALA",
      value: 4946,
    },
    {
      label: "MARAGODA",
      value: 6732,
    },
    {
      label: "NAMBURUKANDA",
      value: 7660,
    },
    {
      label: "PAHALA ATHURALIYA",
      value: 8236,
    },
    {
      label: "PANADUGAMA",
      value: 8600,
    },
    {
      label: "THALAHAGAMA EAST",
      value: 10350,
    },
    {
      label: "THALAHAGAMA WEST",
      value: 10351,
    },
    {
      label: "THIBBOTUWAWA",
      value: 10632,
    },
    {
      label: "THIBBOTUWAWA NORTH",
      value: 10633,
    },
    {
      label: "UGGASHENA",
      value: 11094,
    },
    {
      label: "URUMUTTA",
      value: 11236,
    },
    {
      label: "URUMUTTA SOUTH",
      value: 11237,
    },
    {
      label: "VILPITA EAST 1",
      value: 11466,
    },
    {
      label: "VILPITA EAST 11",
      value: 11467,
    },
    {
      label: "VILPITA WEST",
      value: 11468,
    },
    {
      label: "WALAGEPIYADDA",
      value: 11568,
    },
    {
      label: "WELIHENA",
      value: 11961,
    },
    {
      label: "WENAGAMA",
      value: 12052,
    },
    {
      label: "YAHAMULLA",
      value: 12221,
    },
  ],
  "21": [
    {
      label: "ALAWALA NORTH",
      value: 191,
    },
    {
      label: "ALAWALA SOUTH",
      value: 192,
    },
    {
      label: "ARUPPASSA",
      value: 617,
    },
    {
      label: "BANDARABATAWALA",
      value: 847,
    },
    {
      label: "BEMMULLA",
      value: 1039,
    },
    {
      label: "BOGAMUWA",
      value: 1136,
    },
    {
      label: "BOGODA",
      value: 1141,
    },
    {
      label: "BONEGALA",
      value: 1186,
    },
    {
      label: "BOPAGAMA",
      value: 1194,
    },
    {
      label: "BOPAGAMA EAST",
      value: 1195,
    },
    {
      label: "BOPETTA",
      value: 1200,
    },
    {
      label: "BOPETTA SOUTH",
      value: 1202,
    },
    {
      label: "DADAGAMUWA",
      value: 1402,
    },
    {
      label: "DADAGAMUWA EAST",
      value: 1403,
    },
    {
      label: "DANVILANA",
      value: 1546,
    },
    {
      label: "DARALUWA",
      value: 1552,
    },
    {
      label: "DEENAPAMUNUWA",
      value: 1601,
    },
    {
      label: "DEENAPAMUNUWA WEST",
      value: 1602,
    },
    {
      label: "DEMATALANDA",
      value: 1722,
    },
    {
      label: "DIYAKADE",
      value: 1933,
    },
    {
      label: "EGODA NITTAMBUWA",
      value: 2130,
    },
    {
      label: "ELLAKKALA",
      value: 2230,
    },
    {
      label: "ELLAKKALA WEST",
      value: 2231,
    },
    {
      label: "ELUWAPITIYA",
      value: 2261,
    },
    {
      label: "ELUWAPITIYA WEST",
      value: 2262,
    },
    {
      label: "ETHA UDAKANDA",
      value: 2383,
    },
    {
      label: "GALBODA",
      value: 2527,
    },
    {
      label: "GODAGAMA",
      value: 2838,
    },
    {
      label: "GODAGAMA WEST",
      value: 2841,
    },
    {
      label: "HAGGALLA",
      value: 3055,
    },
    {
      label: "HAGGALLA EAST",
      value: 3056,
    },
    {
      label: "HALGAMPITIYA",
      value: 3078,
    },
    {
      label: "HALPANDENIYA",
      value: 3106,
    },
    {
      label: "HAPPITIYA",
      value: 3188,
    },
    {
      label: "HEENDENIYA",
      value: 3291,
    },
    {
      label: "HIRIPITIYA CENTRAL",
      value: 3475,
    },
    {
      label: "HIRIPITIYA EAST",
      value: 3476,
    },
    {
      label: "HIRIPITIYA NORTH",
      value: 3478,
    },
    {
      label: "HIRIPITIYA PAHALA",
      value: 3479,
    },
    {
      label: "HIRIPITIYA SOUTH",
      value: 3480,
    },
    {
      label: "HIRIPITIYA WEST",
      value: 3481,
    },
    {
      label: "HORAGOLLAGAMA",
      value: 3540,
    },
    {
      label: "HUMBUTIYAWA",
      value: 3592,
    },
    {
      label: "HUMBUTIYAWA WEST",
      value: 3593,
    },
    {
      label: "HUNUPOLA",
      value: 3614,
    },
    {
      label: "KAHAMBILIHENA",
      value: 4153,
    },
    {
      label: "KAHATOVITA",
      value: 4185,
    },
    {
      label: "KAHATOVITA WEST",
      value: 4186,
    },
    {
      label: "KALAGEDIHENA",
      value: 4226,
    },
    {
      label: "KALALPITIYA",
      value: 4236,
    },
    {
      label: "KALOTUWAWA",
      value: 4315,
    },
    {
      label: "KAMBURAGALLA",
      value: 4399,
    },
    {
      label: "KANDAOLUWAWA",
      value: 4478,
    },
    {
      label: "KARASNAGALA",
      value: 4709,
    },
    {
      label: "KARASNAGALA SOUTH",
      value: 4710,
    },
    {
      label: "KATTOTA",
      value: 4820,
    },
    {
      label: "KATUWASGODA",
      value: 4870,
    },
    {
      label: "KATUWASGODA WEST",
      value: 4871,
    },
    {
      label: "KIRIKITTAMULLA",
      value: 5164,
    },
    {
      label: "KIRIKITTAMULLA SOUTH",
      value: 5165,
    },
    {
      label: "KITTAMMAHARA",
      value: 5263,
    },
    {
      label: "KOLAWATTA",
      value: 5386,
    },
    {
      label: "KONGASDENIYA",
      value: 5451,
    },
    {
      label: "KOSKANDAWALA",
      value: 5536,
    },
    {
      label: "KOSKANDAWALA NORTH",
      value: 5537,
    },
    {
      label: "KURAWALANA",
      value: 5849,
    },
    {
      label: "LAVULUPITIYA",
      value: 5966,
    },
    {
      label: "MADAKOTUWA",
      value: 6081,
    },
    {
      label: "MADAKOTUWA WEST",
      value: 6082,
    },
    {
      label: "MADUWEGEDARA",
      value: 6181,
    },
    {
      label: "MAGALEGODA",
      value: 6189,
    },
    {
      label: "MAGALEGODA SOUTH",
      value: 6190,
    },
    {
      label: "MAIMBULA",
      value: 6429,
    },
    {
      label: "MALWATTA",
      value: 6586,
    },
    {
      label: "MANGALATHIRIYA",
      value: 6663,
    },
    {
      label: "MATHALANA",
      value: 6802,
    },
    {
      label: "MATHALANA EAST",
      value: 6803,
    },
    {
      label: "MATHALANA NORTH",
      value: 6804,
    },
    {
      label: "MATHALANA WEST",
      value: 6805,
    },
    {
      label: "MATTAGODA",
      value: 6824,
    },
    {
      label: "MEEVITIGAMMANA",
      value: 7075,
    },
    {
      label: "MEEWALA",
      value: 7077,
    },
    {
      label: "MEEWALA WEST",
      value: 7078,
    },
    {
      label: "MUDAGAMUWA",
      value: 7383,
    },
    {
      label: "NAGODA",
      value: 7580,
    },
    {
      label: "NAMBADALUWA EAST",
      value: 7655,
    },
    {
      label: "NAMBADALUWA WEST",
      value: 7656,
    },
    {
      label: "NAPAGODA",
      value: 7681,
    },
    {
      label: "NAWAGAMUWA",
      value: 7796,
    },
    {
      label: "NIKAHETIKANDA",
      value: 7950,
    },
    {
      label: "NITTAMBUWA EAST",
      value: 8028,
    },
    {
      label: "NITTAMBUWA NORTH",
      value: 8029,
    },
    {
      label: "NITTAMBUWA SOUTH",
      value: 8030,
    },
    {
      label: "OGODAPOLA",
      value: 8113,
    },
    {
      label: "OGODAPOLA NORTH",
      value: 8114,
    },
    {
      label: "OPATHELLA",
      value: 8165,
    },
    {
      label: "ORCHARDWATTA NORTH",
      value: 8167,
    },
    {
      label: "ORCHARDWATTA SOUTH",
      value: 8168,
    },
    {
      label: "PAHALA THIHARIYA",
      value: 8354,
    },
    {
      label: "PALKUMBURA",
      value: 8467,
    },
    {
      label: "PANNILA",
      value: 8705,
    },
    {
      label: "PARANA VEYANGODA",
      value: 8776,
    },
    {
      label: "PARANAGAMA",
      value: 8778,
    },
    {
      label: "PARANAGAMA EAST",
      value: 8779,
    },
    {
      label: "PATTALAGEDARA",
      value: 8858,
    },
    {
      label: "PATTALAGEDARA EAST",
      value: 8859,
    },
    {
      label: "PATTIGODA",
      value: 8871,
    },
    {
      label: "PELPITA",
      value: 8952,
    },
    {
      label: "PILANKADA",
      value: 9076,
    },
    {
      label: "PINNAGOLLA",
      value: 9106,
    },
    {
      label: "PITIYEGEDARA",
      value: 9163,
    },
    {
      label: "RANISWALA",
      value: 9658,
    },
    {
      label: "RANPOKUNAGAMA",
      value: 9674,
    },
    {
      label: "RANPOKUNAGAMA A ZONE",
      value: 9675,
    },
    {
      label: "RANPOKUNAGAMA B ZONE",
      value: 9676,
    },
    {
      label: "RANPOKUNAGAMA C ZONE",
      value: 9677,
    },
    {
      label: "RANPOKUNAGAMA D ZONE",
      value: 9678,
    },
    {
      label: "RATHAMBALE",
      value: 9703,
    },
    {
      label: "RUWANPURA",
      value: 9846,
    },
    {
      label: "SAPUGASTHENNA",
      value: 9971,
    },
    {
      label: "THALGASMOTE",
      value: 10422,
    },
    {
      label: "THALGASMOTE EAST",
      value: 10423,
    },
    {
      label: "THALGASMOTE WEST",
      value: 10424,
    },
    {
      label: "THIHARIYA EAST",
      value: 10637,
    },
    {
      label: "THIHARIYA NORTH",
      value: 10638,
    },
    {
      label: "THIHARIYA SOUTH",
      value: 10639,
    },
    {
      label: "THIHARIYA WEST",
      value: 10640,
    },
    {
      label: "THIHARIYAGAMA",
      value: 10641,
    },
    {
      label: "THIRIWANEGAMA NORTH",
      value: 10672,
    },
    {
      label: "THIRIWANEGAMA SOUTH",
      value: 10673,
    },
    {
      label: "UDAMMITA",
      value: 10941,
    },
    {
      label: "UDATUTTIRIPITIYA",
      value: 10972,
    },
    {
      label: "UDUGODA",
      value: 11017,
    },
    {
      label: "UDUGODA WEST",
      value: 11018,
    },
    {
      label: "URAPOLA",
      value: 11205,
    },
    {
      label: "WALALIYADDA",
      value: 11580,
    },
    {
      label: "WALGAMMULLA",
      value: 11620,
    },
    {
      label: "WALPOLA",
      value: 11647,
    },
    {
      label: "WANDURAMULLA",
      value: 11671,
    },
    {
      label: "WATADDARA",
      value: 11739,
    },
    {
      label: "WATADDARA SOUTH",
      value: 11740,
    },
    {
      label: "WATADDARA WEST",
      value: 11741,
    },
    {
      label: "WATHUPITIWALA",
      value: 11777,
    },
    {
      label: "WEDAGAMA",
      value: 11825,
    },
    {
      label: "WEERANGULA",
      value: 11859,
    },
    {
      label: "WEERANGULA SOUTH",
      value: 11860,
    },
    {
      label: "WELAGEDARA",
      value: 11908,
    },
    {
      label: "WELIKADAMULLA",
      value: 11970,
    },
    {
      label: "YATAWAKA",
      value: 12279,
    },
    {
      label: "YATIYANA",
      value: 12307,
    },
  ],
  "22": [
    {
      label: "AYAGAMA",
      value: 713,
    },
    {
      label: "DETHABADAKANDA",
      value: 1767,
    },
    {
      label: "DUMBARA",
      value: 2057,
    },
    {
      label: "DUMBARA MANANA",
      value: 2058,
    },
    {
      label: "ELLAHENA",
      value: 2227,
    },
    {
      label: "GALATHURA",
      value: 2516,
    },
    {
      label: "GANGODAKANDA",
      value: 2720,
    },
    {
      label: "GAWARAGIRIYA",
      value: 2761,
    },
    {
      label: "KETEPOLA",
      value: 5074,
    },
    {
      label: "KOLAMBEWA",
      value: 5373,
    },
    {
      label: "MADABADDARA",
      value: 6072,
    },
    {
      label: "NIKAGODA",
      value: 7947,
    },
    {
      label: "PAHALA GALATHURA",
      value: 8262,
    },
    {
      label: "PALLEKADA",
      value: 8506,
    },
    {
      label: "PARAGALA",
      value: 8743,
    },
    {
      label: "PIMBURA",
      value: 9090,
    },
    {
      label: "PITAKANDA",
      value: 9129,
    },
    {
      label: "SINHALAGODA",
      value: 10115,
    },
    {
      label: "UDUGALA",
      value: 11005,
    },
    {
      label: "UDUGALA NORTH",
      value: 11006,
    },
    {
      label: "VITHANAGAMA",
      value: 11486,
    },
  ],
  "23": [
    {
      label: "ALUPOTHA",
      value: 240,
    },
    {
      label: "ANKADA",
      value: 508,
    },
    {
      label: "ATHALA",
      value: 655,
    },
    {
      label: "BADALKUMBURA",
      value: 721,
    },
    {
      label: "BOGAHAPELESSA",
      value: 1127,
    },
    {
      label: "DAMBAGAHAWELA",
      value: 1454,
    },
    {
      label: "DEWATHURA",
      value: 1810,
    },
    {
      label: "ELLA",
      value: 2219,
    },
    {
      label: "ETHPATTIYA",
      value: 2413,
    },
    {
      label: "ETTALAMULLA",
      value: 2430,
    },
    {
      label: "GEDAVILA",
      value: 2768,
    },
    {
      label: "HINGURUKADUWA",
      value: 3450,
    },
    {
      label: "KALAGAHAKIVULA",
      value: 4223,
    },
    {
      label: "KARANDAGAMA",
      value: 4681,
    },
    {
      label: "KARAVILA",
      value: 4722,
    },
    {
      label: "KATUGAHAGALGE",
      value: 4828,
    },
    {
      label: "KELIWESSA",
      value: 4991,
    },
    {
      label: "KOTAMUDUNA",
      value: 5580,
    },
    {
      label: "LUNUGALA COLONY",
      value: 6043,
    },
    {
      label: "MADAMAGAMA",
      value: 6087,
    },
    {
      label: "MADUGAHAPATTIYA",
      value: 6145,
    },
    {
      label: "MADUGASMULLA",
      value: 6150,
    },
    {
      label: "MADUKOTAN ARAWA",
      value: 6155,
    },
    {
      label: "MAILAGASTHENNA",
      value: 6419,
    },
    {
      label: "MAIYOKKA WATTA",
      value: 6433,
    },
    {
      label: "MALIGATHENNA",
      value: 6536,
    },
    {
      label: "MEEGAHAYAYA",
      value: 7033,
    },
    {
      label: "MIYANAKADURA",
      value: 7241,
    },
    {
      label: "MORATUWAGAMA",
      value: 7350,
    },
    {
      label: "MUTHUKELIYAWA",
      value: 7518,
    },
    {
      label: "NARANWATTA",
      value: 7723,
    },
    {
      label: "PALLEGAMA",
      value: 8497,
    },
    {
      label: "PUNSISIGAMA",
      value: 9434,
    },
    {
      label: "PUSSELLAWA",
      value: 9458,
    },
    {
      label: "RANUGALLA",
      value: 9686,
    },
    {
      label: "THALAWAGAMA",
      value: 10398,
    },
    {
      label: "THERAPPAHUWA",
      value: 10616,
    },
    {
      label: "WARADOLA",
      value: 11698,
    },
    {
      label: "WASIPAHA",
      value: 11737,
    },
    {
      label: "WEKUMBURA",
      value: 11902,
    },
    {
      label: "YAKURAWA",
      value: 12252,
    },
  ],
  "24": [
    {
      label: "ADURATHVILA",
      value: 58,
    },
    {
      label: "BADDEGAMA EAST",
      value: 723,
    },
    {
      label: "BADDEGAMA NORTH",
      value: 724,
    },
    {
      label: "BADDEGAMA SOUTH",
      value: 725,
    },
    {
      label: "BADDEGAMA TOWN",
      value: 726,
    },
    {
      label: "BALAGODA",
      value: 766,
    },
    {
      label: "BATAKETIYA",
      value: 918,
    },
    {
      label: "BORALUKADA",
      value: 1229,
    },
    {
      label: "DEIYANDARA",
      value: 1654,
    },
    {
      label: "DODANGODA",
      value: 1974,
    },
    {
      label: "ELLAKANDA WATHURAWA",
      value: 2229,
    },
    {
      label: "GANEGAMA EAST",
      value: 2691,
    },
    {
      label: "GANEGAMA NORTH",
      value: 2692,
    },
    {
      label: "GANEGAMA SOUTH",
      value: 2693,
    },
    {
      label: "GANEGAMA WEST",
      value: 2694,
    },
    {
      label: "GINIMELLAGAHA EAST",
      value: 2803,
    },
    {
      label: "GINIMELLAGAHA SOUTH",
      value: 2804,
    },
    {
      label: "GINIMELLAGAHA WEST",
      value: 2805,
    },
    {
      label: "GONAPURA",
      value: 2932,
    },
    {
      label: "GOTHATUWA",
      value: 2974,
    },
    {
      label: "GULUGAHAKANDA",
      value: 2992,
    },
    {
      label: "HALPATHOTA",
      value: 3109,
    },
    {
      label: "HALPATHOTA CENTRAL",
      value: 3110,
    },
    {
      label: "HEMMELIYA",
      value: 3333,
    },
    {
      label: "HORAGAMPITA",
      value: 3530,
    },
    {
      label: "HORAGAMPITA CENTRAL",
      value: 3531,
    },
    {
      label: "IHALA KEEMBIYA",
      value: 3723,
    },
    {
      label: "IHALA KEEMBIYA SOUTH",
      value: 3724,
    },
    {
      label: "IHALA LELWALA",
      value: 3743,
    },
    {
      label: "INDURUPATHVILA",
      value: 3917,
    },
    {
      label: "KASIDENIYA",
      value: 4762,
    },
    {
      label: "KEEMBIELA",
      value: 4918,
    },
    {
      label: "KERADEWALA",
      value: 5028,
    },
    {
      label: "KIRINDALAHENA",
      value: 5191,
    },
    {
      label: "KOHOMBANADENIYA",
      value: 5330,
    },
    {
      label: "KOKAWALA",
      value: 5344,
    },
    {
      label: "KOTAGODA",
      value: 5568,
    },
    {
      label: "KUMBALAMALAHENA",
      value: 5780,
    },
    {
      label: "LELKADA",
      value: 5975,
    },
    {
      label: "MABOTUWANA",
      value: 6071,
    },
    {
      label: "MADOLDOOWA",
      value: 6142,
    },
    {
      label: "MAHAHENGODA",
      value: 6296,
    },
    {
      label: "MAHALAPITIYA",
      value: 6322,
    },
    {
      label: "MAJUWANA",
      value: 6435,
    },
    {
      label: "MEDA KEEMBIYA",
      value: 6910,
    },
    {
      label: "MEDA KEEMBIYA EAST",
      value: 6911,
    },
    {
      label: "NATTEWELA",
      value: 7753,
    },
    {
      label: "NAYAPAMULA",
      value: 7831,
    },
    {
      label: "PAHALA KEEMBIYA",
      value: 8300,
    },
    {
      label: "PAHALA LELWALA",
      value: 8315,
    },
    {
      label: "PANVILA",
      value: 8719,
    },
    {
      label: "PILAGODA",
      value: 9073,
    },
    {
      label: "PITIHARAWA",
      value: 9149,
    },
    {
      label: "PITUWALGODA",
      value: 9170,
    },
    {
      label: "POLGAHAVILA",
      value: 9210,
    },
    {
      label: "SANDARAWALA",
      value: 9935,
    },
    {
      label: "THALAWA",
      value: 10395,
    },
    {
      label: "THELIKADA",
      value: 10575,
    },
    {
      label: "THELIKADA NAGARAYA",
      value: 10576,
    },
    {
      label: "THILAKA UDAGAMA",
      value: 10646,
    },
    {
      label: "THIRUWANAKETIYA",
      value: 10694,
    },
    {
      label: "WALPITA NORTH",
      value: 11643,
    },
    {
      label: "WALPITA SOUTH",
      value: 11644,
    },
    {
      label: "WANDURAMBA",
      value: 11669,
    },
    {
      label: "WANDURAMBA SOUTH",
      value: 11670,
    },
    {
      label: "WARAKAPITIKANDA",
      value: 11716,
    },
    {
      label: "WAVULAGALA",
      value: 11811,
    },
    {
      label: "WEIHENA",
      value: 11895,
    },
    {
      label: "WEWELDENIYA",
      value: 12155,
    },
    {
      label: "YAHALADOOWA",
      value: 12213,
    },
  ],
  "25": [
    {
      label: "ANDENIYA",
      value: 464,
    },
    {
      label: "BADULLA CENTRAL",
      value: 729,
    },
    {
      label: "BADULLA EAST",
      value: 730,
    },
    {
      label: "BADULLA NORTH",
      value: 731,
    },
    {
      label: "BADULLA SOUTH",
      value: 732,
    },
    {
      label: "BADULLA WEST",
      value: 733,
    },
    {
      label: "BADULUPITIYA",
      value: 738,
    },
    {
      label: "DAMANWARA",
      value: 1448,
    },
    {
      label: "GLEN ALPIN",
      value: 2832,
    },
    {
      label: "HEGODA",
      value: 3307,
    },
    {
      label: "HINDAGODA",
      value: 3432,
    },
    {
      label: "HINGURUGAMUWA",
      value: 3449,
    },
    {
      label: "HINNARANGOLLA",
      value: 3457,
    },
    {
      label: "ILUKTHENNA",
      value: 3859,
    },
    {
      label: "KAILAGODA",
      value: 4200,
    },
    {
      label: "KANUPELELLA",
      value: 4575,
    },
    {
      label: "KATUPELELLA",
      value: 4855,
    },
    {
      label: "KENDAGOLLA",
      value: 5001,
    },
    {
      label: "MALANGAMUWA",
      value: 6497,
    },
    {
      label: "MEDAPATHANA",
      value: 6961,
    },
    {
      label: "PITAWELAGAMA",
      value: 9143,
    },
    {
      label: "RAMBUKPOTHA",
      value: 9608,
    },
    {
      label: "SIRIMALGODA",
      value: 10147,
    },
    {
      label: "THELBEDDA",
      value: 10569,
    },
    {
      label: "UDAWELA",
      value: 10979,
    },
    {
      label: "VINEETHAGAMA",
      value: 11476,
    },
    {
      label: "VIYADIGUNA",
      value: 11493,
    },
    {
      label: "WELIBISSA",
      value: 11945,
    },
    {
      label: "WEWESSA",
      value: 12167,
    },
  ],
  "26": [
    {
      label: "ALDORA",
      value: 204,
    },
    {
      label: "AMPITIYAWATTA",
      value: 410,
    },
    {
      label: "BALANGODA",
      value: 781,
    },
    {
      label: "BALANGODA TOWN",
      value: 782,
    },
    {
      label: "BATUGAMMANA",
      value: 953,
    },
    {
      label: "BOWATTA",
      value: 1262,
    },
    {
      label: "BULATHGAMA",
      value: 1293,
    },
    {
      label: "DAMAHANA",
      value: 1443,
    },
    {
      label: "DEHIGASTHALAWA",
      value: 1638,
    },
    {
      label: "DIYAVINNA",
      value: 1949,
    },
    {
      label: "DURAKANDA",
      value: 2095,
    },
    {
      label: "EGODA WALEBODA",
      value: 2135,
    },
    {
      label: "ELLEPOLA",
      value: 2242,
    },
    {
      label: "ELLEWATTA",
      value: 2243,
    },
    {
      label: "GAWARANHENA",
      value: 2762,
    },
    {
      label: "GODAKUMBURA",
      value: 2850,
    },
    {
      label: "HORAKETIYA",
      value: 3542,
    },
    {
      label: "IMBULAMURA",
      value: 3872,
    },
    {
      label: "JAHINKANDA",
      value: 3994,
    },
    {
      label: "KALTHOTA",
      value: 4317,
    },
    {
      label: "KALUPEDIGAMA",
      value: 4360,
    },
    {
      label: "KIRIMETITHENNA",
      value: 5174,
    },
    {
      label: "KIRINDIGALA",
      value: 5194,
    },
    {
      label: "KONGAHAMANKADA",
      value: 5444,
    },
    {
      label: "KUMARA GAMA",
      value: 5768,
    },
    {
      label: "KURAGALA",
      value: 5838,
    },
    {
      label: "MAHAWALATHENNA",
      value: 6374,
    },
    {
      label: "MASSENNA",
      value: 6794,
    },
    {
      label: "MAWELA",
      value: 6889,
    },
    {
      label: "MEDABEDDA",
      value: 6929,
    },
    {
      label: "MEDDEKANDA",
      value: 6987,
    },
    {
      label: "MOLAMURA",
      value: 7264,
    },
    {
      label: "MULGAMA",
      value: 7428,
    },
    {
      label: "NELUYAYA",
      value: 7912,
    },
    {
      label: "PALLEKANDA",
      value: 8507,
    },
    {
      label: "PETTIGALA",
      value: 9060,
    },
    {
      label: "POLWATHUGODA",
      value: 9242,
    },
    {
      label: "RAJAWAKA",
      value: 9568,
    },
    {
      label: "RASSAGALA",
      value: 9696,
    },
    {
      label: "THALANGAMA",
      value: 10375,
    },
    {
      label: "THANJANTHENNA",
      value: 10515,
    },
    {
      label: "THELADIRIYA",
      value: 10562,
    },
    {
      label: "THOTUPALATHENNA",
      value: 10769,
    },
    {
      label: "THUMBAGODA",
      value: 10783,
    },
    {
      label: "UGGALKALTHOTA LEFT BANK LEFT",
      value: 11090,
    },
    {
      label: "UGGALKALTHOTA LEFT BANK SOUTH",
      value: 11091,
    },
    {
      label: "VIKILIYA",
      value: 11434,
    },
    {
      label: "WATAWALA",
      value: 11762,
    },
    {
      label: "WELAGE",
      value: 11907,
    },
    {
      label: "WELEKUMBURA",
      value: 11930,
    },
    {
      label: "WELIPATHAYAYA",
      value: 11989,
    },
    {
      label: "WIJANATHKUMBURA",
      value: 12174,
    },
    {
      label: "YAHALEWELA",
      value: 12219,
    },
  ],
  "27": [
    {
      label: "AHUNGALLA",
      value: 82,
    },
    {
      label: "ANDADOLA",
      value: 452,
    },
    {
      label: "BALAPITIYA",
      value: 785,
    },
    {
      label: "BERATHUDUWA",
      value: 1068,
    },
    {
      label: "BOGAHAPITIYA",
      value: 1128,
    },
    {
      label: "BOGAHAWATTA",
      value: 1129,
    },
    {
      label: "BORALUKETIYA",
      value: 1230,
    },
    {
      label: "BRAHMANAWATTA NORTH",
      value: 1268,
    },
    {
      label: "BRAHMANAWATTA SOUTH",
      value: 1269,
    },
    {
      label: "DOOWEMODARA",
      value: 2023,
    },
    {
      label: "ELATHOTA",
      value: 2193,
    },
    {
      label: "GALMANGODA",
      value: 2595,
    },
    {
      label: "GALVEHERA",
      value: 2632,
    },
    {
      label: "GODAPITIYA",
      value: 2860,
    },
    {
      label: "HEENATIYA NORTH",
      value: 3284,
    },
    {
      label: "HEENATIYA SOUTH",
      value: 3285,
    },
    {
      label: "HEGALLA-PIYAGAMA",
      value: 3304,
    },
    {
      label: "KADIRAGONNA",
      value: 4109,
    },
    {
      label: "KANDEGODA",
      value: 4496,
    },
    {
      label: "KATUVILA",
      value: 4861,
    },
    {
      label: "KOSGODA",
      value: 5530,
    },
    {
      label: "KUDAGODAGAMA",
      value: 5706,
    },
    {
      label: "KURUNDUWATTA",
      value: 5891,
    },
    {
      label: "MADOOWA",
      value: 6143,
    },
    {
      label: "MAHAKARAWA",
      value: 6313,
    },
    {
      label: "MAHALADOOWA",
      value: 6319,
    },
    {
      label: "MAHAPITIYA",
      value: 6342,
    },
    {
      label: "MAKUMBURA",
      value: 6476,
    },
    {
      label: "MIDDARAMULLA",
      value: 7155,
    },
    {
      label: "NANATHOTA PALATHA",
      value: 7667,
    },
    {
      label: "NAPE",
      value: 7686,
    },
    {
      label: "PARAGAHATHOTA",
      value: 8740,
    },
    {
      label: "PATHEGANGODA",
      value: 8847,
    },
    {
      label: "PATHIRAJA PEDESA",
      value: 8852,
    },
    {
      label: "PATHIRAJAGAMA",
      value: 8853,
    },
    {
      label: "PELEGAS PALATHA",
      value: 8927,
    },
    {
      label: "PETIWATTA",
      value: 9057,
    },
    {
      label: "POLATHU PALATHA",
      value: 9201,
    },
    {
      label: "RANDOMBE NORTH",
      value: 9642,
    },
    {
      label: "RANDOMBE SOUTH",
      value: 9643,
    },
    {
      label: "SEENIGODA",
      value: 9998,
    },
    {
      label: "VIHARAGODA",
      value: 11424,
    },
    {
      label: "WADUMULLA",
      value: 11519,
    },
    {
      label: "WALAGEDARA",
      value: 11565,
    },
    {
      label: "WANDADOOWA",
      value: 11666,
    },
    {
      label: "WATHUGEDARA",
      value: 11766,
    },
    {
      label: "WATHUGEDARA SOUTH",
      value: 11767,
    },
    {
      label: "WATHURAWELA",
      value: 11783,
    },
    {
      label: "WATHUREGAMA",
      value: 11784,
    },
    {
      label: "WELIWATHUGODA",
      value: 12009,
    },
    {
      label: "WELLABADA",
      value: 12021,
    },
  ],
  "28": [
    {
      label: "BAMUNAKOTUWA",
      value: 830,
    },
    {
      label: "BOGODA",
      value: 1141,
    },
    {
      label: "DAMPITIYA",
      value: 1496,
    },
    {
      label: "DEMATALUWA",
      value: 1723,
    },
    {
      label: "DIVULGASPITIYA",
      value: 1909,
    },
    {
      label: "ERIHABE",
      value: 2339,
    },
    {
      label: "ETHANAWATTA",
      value: 2390,
    },
    {
      label: "GANTHIRIYAWA",
      value: 2744,
    },
    {
      label: "HANHAMUNAWA",
      value: 3178,
    },
    {
      label: "HENEGEDARA",
      value: 3353,
    },
    {
      label: "HOMATHAGAMA",
      value: 3516,
    },
    {
      label: "KADIHARAYA",
      value: 4107,
    },
    {
      label: "KANOTUWA",
      value: 4551,
    },
    {
      label: "KEDAPATH VEHERA",
      value: 4915,
    },
    {
      label: "KELIMUNE",
      value: 4987,
    },
    {
      label: "MAHAKELIYA",
      value: 6315,
    },
    {
      label: "MIRIHAMPITIYA",
      value: 7217,
    },
    {
      label: "MOONAMALE",
      value: 7292,
    },
    {
      label: "NATHAGANE",
      value: 7739,
    },
    {
      label: "NAWAGATTA",
      value: 7798,
    },
    {
      label: "NELUNKANUWA",
      value: 7905,
    },
    {
      label: "PAHALA IMIYANGODA",
      value: 8283,
    },
    {
      label: "PAHALA KOLAMUNNA",
      value: 8304,
    },
    {
      label: "PALLAWA DAMPITIYA",
      value: 8481,
    },
    {
      label: "PANADARE",
      value: 8599,
    },
    {
      label: "PANAGAMUWA",
      value: 8601,
    },
    {
      label: "PANAKADUWA",
      value: 8608,
    },
    {
      label: "PANAWA",
      value: 8642,
    },
    {
      label: "RUKATTANE",
      value: 9833,
    },
    {
      label: "SIWALLAWAGEDARA",
      value: 10183,
    },
    {
      label: "THALGAHAGAMA",
      value: 10413,
    },
    {
      label: "WALALIYA",
      value: 11579,
    },
    {
      label: "WALPOLA",
      value: 11647,
    },
    {
      label: "WATHUKANA",
      value: 11768,
    },
    {
      label: "WEDANDA",
      value: 11827,
    },
    {
      label: "WEUDAGAMA",
      value: 12129,
    },
  ],
  "29": [
    {
      label: "ALOTHIYAWA",
      value: 229,
    },
    {
      label: "ALUBOMULLA EAST",
      value: 232,
    },
    {
      label: "ALUBOMULLA WEST",
      value: 233,
    },
    {
      label: "ALUTHGAMA",
      value: 259,
    },
    {
      label: "ATULUGAMA EAST",
      value: 698,
    },
    {
      label: "ATULUGAMA WEST",
      value: 699,
    },
    {
      label: "BAMUNUMULLA",
      value: 836,
    },
    {
      label: "BAMUNUMULLA (MUSLIM)",
      value: 837,
    },
    {
      label: "BANDARAGAMA",
      value: 850,
    },
    {
      label: "BANDARAGAMA EAST",
      value: 851,
    },
    {
      label: "BANDARAGAMA WEST",
      value: 852,
    },
    {
      label: "BATADOMBATHUDUWA",
      value: 901,
    },
    {
      label: "BOGAHAWATTA",
      value: 1129,
    },
    {
      label: "BOLGODA",
      value: 1161,
    },
    {
      label: "DIGANATHUDUWA",
      value: 1839,
    },
    {
      label: "EPITAMULLA",
      value: 2304,
    },
    {
      label: "GALGEMANDIYA",
      value: 2552,
    },
    {
      label: "GAMMANPILA",
      value: 2660,
    },
    {
      label: "GELANIGAMA",
      value: 2773,
    },
    {
      label: "IMBULLIHA",
      value: 3884,
    },
    {
      label: "KAMBURUGODA EAST",
      value: 4405,
    },
    {
      label: "KAMBURUGODA WEST",
      value: 4406,
    },
    {
      label: "KIDELPITIYA EAST",
      value: 5091,
    },
    {
      label: "KIDELPITIYA WEST",
      value: 5092,
    },
    {
      label: "KIMMANTHUDAWA",
      value: 5108,
    },
    {
      label: "KOLAMEDIRIYA NORTH",
      value: 5376,
    },
    {
      label: "KORAWALA",
      value: 5517,
    },
    {
      label: "KOTHALAWALA",
      value: 5596,
    },
    {
      label: "KUDA ARUGGODA EAST",
      value: 5662,
    },
    {
      label: "KUDA ARUGGODA WEST",
      value: 5663,
    },
    {
      label: "MADUPITIYA",
      value: 6166,
    },
    {
      label: "MAHA ARUGGODA",
      value: 6220,
    },
    {
      label: "MAHABELLANA",
      value: 6269,
    },
    {
      label: "MAHAVILA",
      value: 6368,
    },
    {
      label: "MAHAWATTA",
      value: 6378,
    },
    {
      label: "MEDAGAMA",
      value: 6933,
    },
    {
      label: "MIRISWATTA",
      value: 7232,
    },
    {
      label: "NEWDAWA",
      value: 7935,
    },
    {
      label: "PAMUNUGAMA",
      value: 8592,
    },
    {
      label: "PANAPE",
      value: 8636,
    },
    {
      label: "PINWALA EAST",
      value: 9116,
    },
    {
      label: "PINWALA WEST",
      value: 9117,
    },
    {
      label: "RAIGAMA EAST",
      value: 9542,
    },
    {
      label: "RAIGAMA NORTH",
      value: 9543,
    },
    {
      label: "RAIGAMA SOUTH",
      value: 9544,
    },
    {
      label: "RAIGAMA WEST",
      value: 9545,
    },
    {
      label: "RAMBUKKANA NORTH",
      value: 9604,
    },
    {
      label: "RAMBUKKANA SOUTH",
      value: 9605,
    },
    {
      label: "RERUKANA",
      value: 9783,
    },
    {
      label: "SAMARANAYAKAPURA",
      value: 9897,
    },
    {
      label: "SENAPURA",
      value: 10045,
    },
    {
      label: "VEEDAGAMA EAST",
      value: 11355,
    },
    {
      label: "VEEDAGAMA WEST",
      value: 11356,
    },
    {
      label: "WALGAMA NORTH",
      value: 11616,
    },
    {
      label: "WALGAMA SOUTH",
      value: 11617,
    },
    {
      label: "WANDURAMULLA EAST",
      value: 11672,
    },
    {
      label: "WANDURAMULLA WEST",
      value: 11673,
    },
    {
      label: "WEVITA",
      value: 12130,
    },
    {
      label: "YATIYANA",
      value: 12307,
    },
  ],
  "30": [
    {
      label: "AMBADANDEGAMA",
      value: 304,
    },
    {
      label: "AMBEGODA",
      value: 374,
    },
    {
      label: "BAMBARAGAMA",
      value: 810,
    },
    {
      label: "BANDARAWELA EAST",
      value: 864,
    },
    {
      label: "BANDARAWELA WEST",
      value: 865,
    },
    {
      label: "BEDDEARAWA",
      value: 984,
    },
    {
      label: "BEDDEKUMBURA",
      value: 987,
    },
    {
      label: "BINDUNUWEWA",
      value: 1085,
    },
    {
      label: "CREIG WATTA",
      value: 1394,
    },
    {
      label: "DARAHITAWANAGODA",
      value: 1551,
    },
    {
      label: "DIGANATHENNA",
      value: 1838,
    },
    {
      label: "DOOLGOLLA",
      value: 2017,
    },
    {
      label: "EGODAGAMA",
      value: 2137,
    },
    {
      label: "ETTALAPITIYA",
      value: 2431,
    },
    {
      label: "GEDIYARODA",
      value: 2771,
    },
    {
      label: "ICELAB WATTA",
      value: 3637,
    },
    {
      label: "INIKAMBEDDA",
      value: 3931,
    },
    {
      label: "KARAGAHAWELA",
      value: 4611,
    },
    {
      label: "KEBILLEWELA NORTH",
      value: 4911,
    },
    {
      label: "KEBILLEWELA SOUTH",
      value: 4912,
    },
    {
      label: "KINIGAMA",
      value: 5114,
    },
    {
      label: "KIRIORUWA",
      value: 5203,
    },
    {
      label: "KONTHAHELA",
      value: 5469,
    },
    {
      label: "LIYANGAHAWELA",
      value: 6027,
    },
    {
      label: "LIYANGAHAWELA WATTA",
      value: 6028,
    },
    {
      label: "MAHAULPATHA",
      value: 6367,
    },
    {
      label: "MAKULELLA",
      value: 6465,
    },
    {
      label: "MATHETILLA",
      value: 6812,
    },
    {
      label: "NAYABEDDA ESTATE",
      value: 7826,
    },
    {
      label: "OBADELLA",
      value: 8102,
    },
    {
      label: "THANTHIRIYA",
      value: 10527,
    },
    {
      label: "UDAPERUWA",
      value: 10952,
    },
    {
      label: "WATAGAMUWA",
      value: 11744,
    },
    {
      label: "WEHERAGALATHENNA",
      value: 11893,
    },
    {
      label: "WEWATHENNA",
      value: 12148,
    },
  ],
  "32": [
    {
      label: "AGULMADUWA",
      value: 70,
    },
    {
      label: "AMBAGASDENIYA",
      value: 323,
    },
    {
      label: "AMBALA NORTH",
      value: 336,
    },
    {
      label: "AMBALA WEST",
      value: 337,
    },
    {
      label: "ARANWELA NORTH",
      value: 580,
    },
    {
      label: "ARANWELA WEST",
      value: 581,
    },
    {
      label: "BELIATTA SOUTH",
      value: 1004,
    },
    {
      label: "BELIATTA TOWN",
      value: 1005,
    },
    {
      label: "BELIATTA WEST",
      value: 1006,
    },
    {
      label: "BELIGALLA NORTH",
      value: 1011,
    },
    {
      label: "BELIGALLA SOUTH",
      value: 1012,
    },
    {
      label: "DAMMULLA EAST",
      value: 1485,
    },
    {
      label: "DAMMULLA WEST",
      value: 1486,
    },
    {
      label: "DEDDUWAWALA",
      value: 1576,
    },
    {
      label: "DEDDUWAWALA EAST",
      value: 1577,
    },
    {
      label: "ELDENIYA",
      value: 2199,
    },
    {
      label: "GALAGAMA EAST",
      value: 2469,
    },
    {
      label: "GALAGAMA NORTH",
      value: 2470,
    },
    {
      label: "GALAGAMA SOUTH",
      value: 2471,
    },
    {
      label: "GALAGAMA WEST",
      value: 2472,
    },
    {
      label: "GALWEWA",
      value: 2644,
    },
    {
      label: "GETAMANNA EAST",
      value: 2782,
    },
    {
      label: "GETAMANNA NORTH",
      value: 2783,
    },
    {
      label: "GETAMANNA SOUTH",
      value: 2784,
    },
    {
      label: "GETAMANNA WEST",
      value: 2785,
    },
    {
      label: "GODAWELA",
      value: 2873,
    },
    {
      label: "IHALA BELIGALLA EAST",
      value: 3672,
    },
    {
      label: "IHALA BELIGALLA WEST",
      value: 3673,
    },
    {
      label: "INDIKETIYAGODA",
      value: 3898,
    },
    {
      label: "KAHAWATTA",
      value: 4192,
    },
    {
      label: "KAMBUSSAWALA EAST",
      value: 4408,
    },
    {
      label: "KAMBUSSAWALA WEST",
      value: 4409,
    },
    {
      label: "KARAMBAKETIYA",
      value: 4660,
    },
    {
      label: "KOSGAHAGODA",
      value: 5526,
    },
    {
      label: "KUDAHEELLA EAST",
      value: 5710,
    },
    {
      label: "KUDAHEELLA NORTH",
      value: 5711,
    },
    {
      label: "KUDAHEELLA SOUTH",
      value: 5712,
    },
    {
      label: "MAHAHEELLA EAST",
      value: 6292,
    },
    {
      label: "MAHAHEELLA NORTH",
      value: 6293,
    },
    {
      label: "MAHAHEELLA WEST",
      value: 6294,
    },
    {
      label: "MALIGATHENNA",
      value: 6536,
    },
    {
      label: "MEDAGODA",
      value: 6947,
    },
    {
      label: "MIHINDUPURA",
      value: 7169,
    },
    {
      label: "MIRISWATTA",
      value: 7232,
    },
    {
      label: "NAKULUGAMUWA NORTH",
      value: 7618,
    },
    {
      label: "NAKULUGAMUWA WEST",
      value: 7620,
    },
    {
      label: "NAYAKAWATTA",
      value: 7829,
    },
    {
      label: "NIHILUWA EAST",
      value: 7944,
    },
    {
      label: "NIHILUWA WEST",
      value: 7945,
    },
    {
      label: "NUGEWELA",
      value: 8084,
    },
    {
      label: "OVILANA",
      value: 8189,
    },
    {
      label: "PAHALAGODA",
      value: 8379,
    },
    {
      label: "PALAPOTHA EAST",
      value: 8437,
    },
    {
      label: "PALAPOTHA WEST",
      value: 8438,
    },
    {
      label: "PALLATTARA EAST",
      value: 8477,
    },
    {
      label: "PALLATTARA SOUTH",
      value: 8478,
    },
    {
      label: "PALLATTARA WEST",
      value: 8479,
    },
    {
      label: "PANAMULLA",
      value: 8621,
    },
    {
      label: "PATTIYAWELA",
      value: 8891,
    },
    {
      label: "PUWAKDANDAWA EAST",
      value: 9487,
    },
    {
      label: "PUWAKDANDAWA NORTH",
      value: 9488,
    },
    {
      label: "SITINAMALUWA EAST",
      value: 10168,
    },
    {
      label: "SITINAMALUWA NORTH",
      value: 10169,
    },
    {
      label: "SITINAMALUWA SOUTH",
      value: 10170,
    },
    {
      label: "SITINAMALUWA WEST",
      value: 10171,
    },
    {
      label: "THARAPERIYA",
      value: 10534,
    },
    {
      label: "UDUGALMOTEGAMA",
      value: 11008,
    },
    {
      label: "WADIYA",
      value: 11512,
    },
    {
      label: "WAHARAKGODA NORTH",
      value: 11548,
    },
    {
      label: "WAHARAKGODA SOUTH",
      value: 11549,
    },
    {
      label: "WEVUDATTA",
      value: 12131,
    },
  ],
  "33": [
    {
      label: "AKADEGODA",
      value: 87,
    },
    {
      label: "ANGAGODA",
      value: 479,
    },
    {
      label: "ATHURUWELLA",
      value: 671,
    },
    {
      label: "BODHIMALUWA",
      value: 1115,
    },
    {
      label: "DEDDUWA",
      value: 1575,
    },
    {
      label: "DELKABALAGODA",
      value: 1694,
    },
    {
      label: "DOMBAGAHAWATTA",
      value: 2001,
    },
    {
      label: "DOPE",
      value: 2024,
    },
    {
      label: "ELAKAKA",
      value: 2181,
    },
    {
      label: "ETAWALAWATTA EAST",
      value: 2378,
    },
    {
      label: "ETAWALAWATTA WEST",
      value: 2379,
    },
    {
      label: "ETHUNGAGODA",
      value: 2422,
    },
    {
      label: "GALAGAMA",
      value: 2468,
    },
    {
      label: "GALBADA",
      value: 2524,
    },
    {
      label: "GALTHUDUWA",
      value: 2629,
    },
    {
      label: "GONAGALAPURA",
      value: 2910,
    },
    {
      label: "HABAKKALA",
      value: 3027,
    },
    {
      label: "HABURUGALA",
      value: 3045,
    },
    {
      label: "HIPANWATTA",
      value: 3460,
    },
    {
      label: "HUNGANTHOTA WADUMULLA",
      value: 3597,
    },
    {
      label: "IHALA MALAWALA",
      value: 3752,
    },
    {
      label: "KAHAGALLA",
      value: 4147,
    },
    {
      label: "KAHAWEGAMMEDDA",
      value: 4195,
    },
    {
      label: "KAIKAWALA",
      value: 4199,
    },
    {
      label: "KANDEMULLA",
      value: 4501,
    },
    {
      label: "KOLANIYA",
      value: 5379,
    },
    {
      label: "KOMMALA",
      value: 5420,
    },
    {
      label: "KOTUWABENDAHENA",
      value: 5638,
    },
    {
      label: "KUDA URAGAHA",
      value: 5685,
    },
    {
      label: "MAHA URAGAHA",
      value: 6258,
    },
    {
      label: "MAHAGODA",
      value: 6290,
    },
    {
      label: "MAHAVILA EAST",
      value: 6369,
    },
    {
      label: "MAHAVILA WEST",
      value: 6370,
    },
    {
      label: "MALAWALA",
      value: 6504,
    },
    {
      label: "MIRISWATTA",
      value: 7232,
    },
    {
      label: "MORAGODA",
      value: 7318,
    },
    {
      label: "MULLEGODA",
      value: 7444,
    },
    {
      label: "OLAGANDUWA",
      value: 8125,
    },
    {
      label: "PAHURUMULLA",
      value: 8393,
    },
    {
      label: "PILEKUMBURA",
      value: 9080,
    },
    {
      label: "RANTHOTUVILA",
      value: 9685,
    },
    {
      label: "SINHAROOPAGAMA",
      value: 10122,
    },
    {
      label: "SOORIYAGAMA",
      value: 10234,
    },
    {
      label: "THOTAKANATTA",
      value: 10754,
    },
    {
      label: "THUNDUWA EAST",
      value: 10803,
    },
    {
      label: "THUNDUWA WEST",
      value: 10804,
    },
    {
      label: "VIYANDOOWA",
      value: 11495,
    },
    {
      label: "WARAHENA",
      value: 11704,
    },
    {
      label: "WARAKAMULLA",
      value: 11712,
    },
    {
      label: "YALEGAMA",
      value: 12257,
    },
    {
      label: "YATHRAMULLA",
      value: 12286,
    },
  ],
  "34": [
    {
      label: "ADIKARIGODA",
      value: 53,
    },
    {
      label: "AKKARA ASOOWA",
      value: 103,
    },
    {
      label: "AKKARAGODA",
      value: 106,
    },
    {
      label: "AKKARAMALE",
      value: 135,
    },
    {
      label: "ALAKADUPITIYA",
      value: 163,
    },
    {
      label: "ALUTHGAMA EAST",
      value: 262,
    },
    {
      label: "ALUTHGAMA WEST",
      value: 266,
    },
    {
      label: "AMBEPITIYA",
      value: 376,
    },
    {
      label: "BANDANAGODA",
      value: 844,
    },
    {
      label: "BUBULALANDA",
      value: 1278,
    },
    {
      label: "CHEENAKOTUWA",
      value: 1358,
    },
    {
      label: "DANWATTAGODA",
      value: 1547,
    },
    {
      label: "DHARGA TOWN",
      value: 1813,
    },
    {
      label: "DHARGA TOWN EAST",
      value: 1814,
    },
    {
      label: "DIYALAGODA",
      value: 1937,
    },
    {
      label: "DOOWEGODA",
      value: 2022,
    },
    {
      label: "GALHENA",
      value: 2556,
    },
    {
      label: "GAMMEDDA",
      value: 2663,
    },
    {
      label: "GANEGAMA",
      value: 2690,
    },
    {
      label: "GANGA ADDARA",
      value: 2707,
    },
    {
      label: "HALKANDAVILA",
      value: 3086,
    },
    {
      label: "HETTIMULLA",
      value: 3377,
    },
    {
      label: "HETTIYAKANDA",
      value: 3380,
    },
    {
      label: "HIRIGALGODELLA",
      value: 3467,
    },
    {
      label: "IDIRILIGODA",
      value: 3657,
    },
    {
      label: "KADIYAWATTA",
      value: 4117,
    },
    {
      label: "KADURUGASMULLA",
      value: 4126,
    },
    {
      label: "KALAVILA",
      value: 4253,
    },
    {
      label: "KALAVILAKANDA",
      value: 4254,
    },
    {
      label: "KALUWAMODARA EAST",
      value: 4375,
    },
    {
      label: "KALUWAMODARA NORTH",
      value: 4376,
    },
    {
      label: "KALUWAMODARA WEST",
      value: 4377,
    },
    {
      label: "KANKANAMGODA",
      value: 4529,
    },
    {
      label: "KAPUGODA",
      value: 4592,
    },
    {
      label: "KARANDAGODA",
      value: 4682,
    },
    {
      label: "KATUKURUNDUGAHALANDA EAST",
      value: 4848,
    },
    {
      label: "KATUKURUNDUGAHALANDA WEST",
      value: 4849,
    },
    {
      label: "KENDAGAHAVILA",
      value: 4999,
    },
    {
      label: "KOTAPITIYA",
      value: 5582,
    },
    {
      label: "KUDA MAGALKANDA",
      value: 5675,
    },
    {
      label: "KUDA PAYAGALA NORTH",
      value: 5681,
    },
    {
      label: "KUDA PAYAGALA SOUTH",
      value: 5682,
    },
    {
      label: "MAGALKANDA NORTH",
      value: 6191,
    },
    {
      label: "MAGALKANDA SOUTH",
      value: 6192,
    },
    {
      label: "MAGGONA EAST",
      value: 6206,
    },
    {
      label: "MAGGONA WEST",
      value: 6207,
    },
    {
      label: "MAHA PAYAGALA",
      value: 6254,
    },
    {
      label: "MAHAGAMMEDDA",
      value: 6288,
    },
    {
      label: "MAHAGODA",
      value: 6290,
    },
    {
      label: "MALEGODA",
      value: 6514,
    },
    {
      label: "MALEWANA",
      value: 6515,
    },
    {
      label: "MALEWANGODA",
      value: 6516,
    },
    {
      label: "MALIGAHENA",
      value: 6527,
    },
    {
      label: "MARADANA",
      value: 6719,
    },
    {
      label: "MARAKKALAHAWATTA",
      value: 6737,
    },
    {
      label: "MASSALGODA",
      value: 6793,
    },
    {
      label: "MEHIMULLA",
      value: 7095,
    },
    {
      label: "MORAGALLA",
      value: 7313,
    },
    {
      label: "MULLAPITIYA",
      value: 7440,
    },
    {
      label: "MUNASINGHAGODA",
      value: 7467,
    },
    {
      label: "MUNHENA",
      value: 7472,
    },
    {
      label: "NAKANDALAGODA",
      value: 7609,
    },
    {
      label: "PADAGODA",
      value: 8209,
    },
    {
      label: "PALAYANGODA",
      value: 8453,
    },
    {
      label: "PAMBE",
      value: 8587,
    },
    {
      label: "PANNILA",
      value: 8705,
    },
    {
      label: "PARANAKADE",
      value: 8782,
    },
    {
      label: "PATHIRAJAGODA",
      value: 8854,
    },
    {
      label: "PAYAGALA NORTH",
      value: 8899,
    },
    {
      label: "PINHENA",
      value: 9097,
    },
    {
      label: "PINHENA COLONY",
      value: 9098,
    },
    {
      label: "PINIDIYAMULLA",
      value: 9099,
    },
    {
      label: "POLKOTUWA",
      value: 9226,
    },
    {
      label: "POTHUVILA EAST",
      value: 9323,
    },
    {
      label: "POTHUVILA WEST",
      value: 9324,
    },
    {
      label: "SEENAWATTA",
      value: 9995,
    },
    {
      label: "VIHARAKANDA",
      value: 11426,
    },
    {
      label: "WALATHARA",
      value: 11599,
    },
    {
      label: "WARAPITIYA",
      value: 11726,
    },
    {
      label: "WELIPITIYA",
      value: 11996,
    },
    {
      label: "WERAGALA",
      value: 12074,
    },
    {
      label: "YOVUNGAMA",
      value: 12330,
    },
  ],
  "35": [
    {
      label: "AMBAGOLLA",
      value: 328,
    },
    {
      label: "AMBELANDA",
      value: 375,
    },
    {
      label: "BADULLAGAMMANA",
      value: 734,
    },
    {
      label: "BIBILA",
      value: 1076,
    },
    {
      label: "BOKAGONNA",
      value: 1147,
    },
    {
      label: "BULUPITIYA",
      value: 1312,
    },
    {
      label: "DEHIATTAWELA",
      value: 1626,
    },
    {
      label: "DODAMGOLLA",
      value: 1956,
    },
    {
      label: "EGODA KOTAGAMA",
      value: 2128,
    },
    {
      label: "ETHANAWATTA",
      value: 2390,
    },
    {
      label: "HAMAPOLA",
      value: 3136,
    },
    {
      label: "HEWELWELA",
      value: 3396,
    },
    {
      label: "KANAWEGALLA",
      value: 4446,
    },
    {
      label: "KANULWELA",
      value: 4569,
    },
    {
      label: "KARAGAHAWELA EAST",
      value: 4612,
    },
    {
      label: "KARAGAHAWELA WEST",
      value: 4613,
    },
    {
      label: "KARANDUGALA",
      value: 4693,
    },
    {
      label: "KAVUDELLA",
      value: 4886,
    },
    {
      label: "KEHEL ATTAWALA",
      value: 4936,
    },
    {
      label: "KOKUNNEWA",
      value: 5356,
    },
    {
      label: "KOTAGAMA",
      value: 5562,
    },
    {
      label: "KURUWAMBA",
      value: 5913,
    },
    {
      label: "LINDAKUMBURA",
      value: 6013,
    },
    {
      label: "MALLEHEWA",
      value: 6564,
    },
    {
      label: "MEDIPITIYA",
      value: 6997,
    },
    {
      label: "MORATTAMULLA",
      value: 7346,
    },
    {
      label: "MUDIYALA",
      value: 7395,
    },
    {
      label: "NAGALA",
      value: 7570,
    },
    {
      label: "NILGALA",
      value: 7974,
    },
    {
      label: "PITAKUMBURA",
      value: 9135,
    },
    {
      label: "RADALIYADDA",
      value: 9507,
    },
    {
      label: "RATHUPASKETIYA",
      value: 9744,
    },
    {
      label: "THANAYAMGAMA",
      value: 10505,
    },
    {
      label: "THOTILLAKETIYA",
      value: 10762,
    },
    {
      label: "UDAMALLEHEWA",
      value: 10938,
    },
    {
      label: "URAVULA",
      value: 11210,
    },
    {
      label: "USSAGALA",
      value: 11249,
    },
    {
      label: "WEGAMA",
      value: 11876,
    },
    {
      label: "WEGAMA SOUTH",
      value: 11877,
    },
    {
      label: "YALKUMBURA",
      value: 12260,
    },
  ],
  "36": [
    {
      label: "ALUTHGAMA",
      value: 259,
    },
    {
      label: "BAKMEERUPPA",
      value: 756,
    },
    {
      label: "BANDARIGALGODA",
      value: 866,
    },
    {
      label: "BINGIRIYA",
      value: 1088,
    },
    {
      label: "BOWATTA",
      value: 1262,
    },
    {
      label: "BRAHMANAYAGAMA",
      value: 1270,
    },
    {
      label: "GETULAWA",
      value: 2789,
    },
    {
      label: "HAMANNAPAHUWA",
      value: 3135,
    },
    {
      label: "HEENPANNAWA",
      value: 3293,
    },
    {
      label: "HENDIYAPOLA",
      value: 3347,
    },
    {
      label: "HIRUWALPOLA",
      value: 3486,
    },
    {
      label: "HORAGASAGARA",
      value: 3532,
    },
    {
      label: "IHALA GALWEWA",
      value: 3693,
    },
    {
      label: "IHALA KADIGAMUWA",
      value: 3709,
    },
    {
      label: "IHALA KALUGAMA",
      value: 3713,
    },
    {
      label: "IHALA KONKANDAWALA",
      value: 3730,
    },
    {
      label: "IHALA KOSWATTA",
      value: 3735,
    },
    {
      label: "KADURUWEWA",
      value: 4138,
    },
    {
      label: "KARANDANAYAGAMA",
      value: 4687,
    },
    {
      label: "KELEGEDARA",
      value: 4978,
    },
    {
      label: "KINIYAMA EAST",
      value: 5118,
    },
    {
      label: "KINIYAMA WEST",
      value: 5119,
    },
    {
      label: "KONKADAWALA",
      value: 5463,
    },
    {
      label: "KOSAGAMA",
      value: 5520,
    },
    {
      label: "KOSHENAGARA",
      value: 5535,
    },
    {
      label: "KUDAKALAWA",
      value: 5713,
    },
    {
      label: "KURUNDUPOTHA",
      value: 5890,
    },
    {
      label: "MADULUPITIYA",
      value: 6164,
    },
    {
      label: "MANELEMBUWA",
      value: 6655,
    },
    {
      label: "MAUNAWA",
      value: 6840,
    },
    {
      label: "MELADENIYA",
      value: 7098,
    },
    {
      label: "MOLAELIYA",
      value: 7260,
    },
    {
      label: "MOOKALANHENA",
      value: 7288,
    },
    {
      label: "MURUKANDIYA",
      value: 7487,
    },
    {
      label: "NITHALAWA",
      value: 8022,
    },
    {
      label: "PADIWELA",
      value: 8224,
    },
    {
      label: "PAHALA GALWEWA",
      value: 8265,
    },
    {
      label: "PAHALA KADIGAMUWA",
      value: 8284,
    },
    {
      label: "PAHALA KINIYAMA",
      value: 8301,
    },
    {
      label: "PAHALA KOSWATTA",
      value: 8309,
    },
    {
      label: "PAHALA MANDAKONDANA",
      value: 8323,
    },
    {
      label: "PAHALA THALAMPOLA",
      value: 8350,
    },
    {
      label: "PANAWEWA",
      value: 8645,
    },
    {
      label: "PUWAKGAHAKADAWALA",
      value: 9494,
    },
    {
      label: "THARANA",
      value: 10531,
    },
    {
      label: "THORABICHCHIYA",
      value: 10741,
    },
    {
      label: "UDAWELA",
      value: 10979,
    },
    {
      label: "URAPOTTA",
      value: 11208,
    },
    {
      label: "VILATTAWA PALATHA",
      value: 11443,
    },
    {
      label: "WANDURESSA",
      value: 11675,
    },
    {
      label: "WEERAPOKUNA",
      value: 11866,
    },
    {
      label: "WELLARAWA",
      value: 12031,
    },
  ],
  "37": [
    {
      label: "ATHURUMULLA",
      value: 668,
    },
    {
      label: "BIYAGAMA EAST",
      value: 1097,
    },
    {
      label: "BIYAGAMA NORTH",
      value: 1098,
    },
    {
      label: "BIYAGAMA SOUTH",
      value: 1099,
    },
    {
      label: "BIYAGAMA WEST",
      value: 1100,
    },
    {
      label: "BOLLEGALA",
      value: 1167,
    },
    {
      label: "DARANAGAMA",
      value: 1554,
    },
    {
      label: "DELGODA",
      value: 1682,
    },
    {
      label: "GALEDANDA",
      value: 2535,
    },
    {
      label: "GONAWALA CENTRAL",
      value: 2939,
    },
    {
      label: "GONAWALA EAST",
      value: 2940,
    },
    {
      label: "GONAWALA WEST",
      value: 2943,
    },
    {
      label: "HEIYANTHUDUWA EAST",
      value: 3308,
    },
    {
      label: "HEIYANTHUDUWA NORTH",
      value: 3309,
    },
    {
      label: "HEIYANTHUDUWA SOUTH",
      value: 3310,
    },
    {
      label: "HEIYANTHUDUWA WEST",
      value: 3311,
    },
    {
      label: "IHALA BIYANVILA CENTRAL",
      value: 3674,
    },
    {
      label: "IHALA BIYANVILA NORTH",
      value: 3675,
    },
    {
      label: "KAMMALWATTA",
      value: 4414,
    },
    {
      label: "KANDUBODA EAST",
      value: 4515,
    },
    {
      label: "KANDUBODA WEST",
      value: 4516,
    },
    {
      label: "MABIMA EAST",
      value: 6062,
    },
    {
      label: "MABIMA WEST",
      value: 6063,
    },
    {
      label: "MAKOLA NORTH CENTRAL",
      value: 6456,
    },
    {
      label: "MAKOLA NORTH IHALA",
      value: 6457,
    },
    {
      label: "MAKOLA NORTH PAHALA",
      value: 6458,
    },
    {
      label: "MAKOLA SOUTH IHALA",
      value: 6459,
    },
    {
      label: "MAKOLA SOUTH PAHALA",
      value: 6460,
    },
    {
      label: "MALWANA TOWN",
      value: 6581,
    },
    {
      label: "MAWARAMANDIYA",
      value: 6875,
    },
    {
      label: "MEEGAHAWATTA EAST",
      value: 7029,
    },
    {
      label: "MEEGAHAWATTA WEST",
      value: 7030,
    },
    {
      label: "PAHALA BIYANVILA CENTRAL",
      value: 8241,
    },
    {
      label: "PAHALA BIYANVILA EAST",
      value: 8242,
    },
    {
      label: "PAHALA BIYANVILA WEST",
      value: 8243,
    },
    {
      label: "PAMUNUVILA",
      value: 8593,
    },
    {
      label: "PATTIVILA NORTH",
      value: 8874,
    },
    {
      label: "PATTIVILA SOUTH",
      value: 8875,
    },
    {
      label: "SAPUGASKANDA",
      value: 9970,
    },
    {
      label: "SIYAMBALAPE NORTH",
      value: 10207,
    },
    {
      label: "SIYAMBALAPE SOUTH",
      value: 10208,
    },
    {
      label: "SIYAMBALAPE WATTA",
      value: 10209,
    },
    {
      label: "THALWATTA",
      value: 10452,
    },
    {
      label: "ULAHITIWALA",
      value: 11112,
    },
    {
      label: "WALGAMA EAST",
      value: 11614,
    },
    {
      label: "WALGAMA WEST",
      value: 11618,
    },
    {
      label: "YABARALUWA NORTH",
      value: 12201,
    },
    {
      label: "YABARALUWA SOUTH",
      value: 12202,
    },
    {
      label: "YATIHENA",
      value: 12294,
    },
  ],
  "38": [
    {
      label: "ABEYSUNDARAWATTA",
      value: 15,
    },
    {
      label: "ADDARAGODA",
      value: 49,
    },
    {
      label: "AMBAGAHAWATTA",
      value: 314,
    },
    {
      label: "BANGALAWATTA",
      value: 878,
    },
    {
      label: "BASWATTA",
      value: 897,
    },
    {
      label: "BERALIYADOLA",
      value: 1060,
    },
    {
      label: "BOKARAMULLAGODA",
      value: 1149,
    },
    {
      label: "GALKETIYA",
      value: 2567,
    },
    {
      label: "GODAKANDA",
      value: 2846,
    },
    {
      label: "HAPUGALA",
      value: 3193,
    },
    {
      label: "HIRIMBURAGAMA",
      value: 3472,
    },
    {
      label: "HOLUWAGODA",
      value: 3508,
    },
    {
      label: "KAHADOOWAWATTA",
      value: 4144,
    },
    {
      label: "KALEGANA NORTH",
      value: 4264,
    },
    {
      label: "KALEGANA SOUTH",
      value: 4265,
    },
    {
      label: "KAPUHEMPALA",
      value: 4594,
    },
    {
      label: "KARAPITIYA",
      value: 4705,
    },
    {
      label: "KERENVILA",
      value: 5035,
    },
    {
      label: "KITHULAMPITIYA",
      value: 5241,
    },
    {
      label: "KURUNDA",
      value: 5880,
    },
    {
      label: "KURUNDA KANDA",
      value: 5881,
    },
    {
      label: "LABUDOOWA",
      value: 5927,
    },
    {
      label: "MAGADENIYA",
      value: 6185,
    },
    {
      label: "MAMPITIYA",
      value: 6609,
    },
    {
      label: "MEEPAWALA",
      value: 7058,
    },
    {
      label: "MULANA EAST",
      value: 7422,
    },
    {
      label: "MULANA WEST",
      value: 7423,
    },
    {
      label: "NARAWALA",
      value: 7725,
    },
    {
      label: "NAVINNA",
      value: 7774,
    },
    {
      label: "NILADENIYA",
      value: 7967,
    },
    {
      label: "OPATHA",
      value: 8160,
    },
    {
      label: "PALIWATHUGODA",
      value: 8465,
    },
    {
      label: "PANNAMAGA",
      value: 8700,
    },
    {
      label: "PANVILA",
      value: 8719,
    },
    {
      label: "PELAWATTA",
      value: 8922,
    },
    {
      label: "PENIDENIYA",
      value: 8962,
    },
    {
      label: "PODDALA",
      value: 9178,
    },
    {
      label: "SILVAGEWATTA",
      value: 10104,
    },
    {
      label: "THOTAGODA",
      value: 10752,
    },
    {
      label: "THUNHIRIPANA",
      value: 10805,
    },
    {
      label: "ULUVITIKE",
      value: 11141,
    },
    {
      label: "WAKWELLA",
      value: 11559,
    },
    {
      label: "WALAWATTA",
      value: 11603,
    },
    {
      label: "WATAREKA EAST",
      value: 11759,
    },
  ],
  "39": [
    {
      label: "ALAWATHURA",
      value: 196,
    },
    {
      label: "AMBAMALLA",
      value: 355,
    },
    {
      label: "AMBUWAKKA",
      value: 383,
    },
    {
      label: "AMPAGALA",
      value: 392,
    },
    {
      label: "BULATHKOHUPITIYA",
      value: 1295,
    },
    {
      label: "DEDUGALA",
      value: 1582,
    },
    {
      label: "GETIYAMULLA",
      value: 2787,
    },
    {
      label: "HALOLUWA",
      value: 3102,
    },
    {
      label: "HIGGODA",
      value: 3411,
    },
    {
      label: "KABAGAMUWA",
      value: 4058,
    },
    {
      label: "KANANGAMUWA",
      value: 4436,
    },
    {
      label: "KENDAWA",
      value: 5015,
    },
    {
      label: "KIRIPORUWA",
      value: 5207,
    },
    {
      label: "LEWALA",
      value: 5992,
    },
    {
      label: "NARANGALA",
      value: 7697,
    },
    {
      label: "NELUWAKKANA",
      value: 7909,
    },
    {
      label: "NEVISMIYAR IHALA",
      value: 7924,
    },
    {
      label: "PANAPITIYA",
      value: 8637,
    },
    {
      label: "PELEMPITIYA",
      value: 8929,
    },
    {
      label: "PUNEHELA",
      value: 9415,
    },
    {
      label: "PUSPANE",
      value: 9448,
    },
    {
      label: "RANGALLA",
      value: 9649,
    },
    {
      label: "THELKUMUDUWALA",
      value: 10580,
    },
    {
      label: "UDAPOTHA",
      value: 10956,
    },
    {
      label: "UDUWA",
      value: 11055,
    },
    {
      label: "URUMEEWALA",
      value: 11231,
    },
    {
      label: "WEGALLA",
      value: 11875,
    },
  ],
  "40": [
    {
      label: "AMARAGEDARA NORTH",
      value: 301,
    },
    {
      label: "AMARAGEDARA SOUTH",
      value: 302,
    },
    {
      label: "BOGAHAWATTA",
      value: 1129,
    },
    {
      label: "BOTHALE",
      value: 1245,
    },
    {
      label: "BOTHALE GAMGODA",
      value: 1246,
    },
    {
      label: "BULATHSINHALA",
      value: 1296,
    },
    {
      label: "BULATHSINHALA CENTRAL",
      value: 1297,
    },
    {
      label: "BULATHSINHALA EAST",
      value: 1298,
    },
    {
      label: "BULATHSINHALA NORTH",
      value: 1299,
    },
    {
      label: "BULATHSINHALA SOUTH",
      value: 1300,
    },
    {
      label: "BULATHSINHALA WEST",
      value: 1301,
    },
    {
      label: "DAMPARADUGODA",
      value: 1489,
    },
    {
      label: "DELMELLA",
      value: 1700,
    },
    {
      label: "DEMODARAWATTA",
      value: 1740,
    },
    {
      label: "DEWAMULLA",
      value: 1805,
    },
    {
      label: "DIWALAKADA",
      value: 1920,
    },
    {
      label: "DIYAKADUWA EAST",
      value: 1934,
    },
    {
      label: "DIYAKADUWA WEST",
      value: 1935,
    },
    {
      label: "EGALOYA",
      value: 2124,
    },
    {
      label: "GALAHENA",
      value: 2488,
    },
    {
      label: "GALAHITIYA",
      value: 2490,
    },
    {
      label: "GAMAGEWATTA",
      value: 2646,
    },
    {
      label: "GOVINNA NORTH",
      value: 2979,
    },
    {
      label: "GOVINNA SOUTH",
      value: 2980,
    },
    {
      label: "HALWATHURA",
      value: 3127,
    },
    {
      label: "IHALA KUDALIGAMA",
      value: 3739,
    },
    {
      label: "IHALA NARAGALA",
      value: 3765,
    },
    {
      label: "IHALA NARAGALA SOUTH",
      value: 3766,
    },
    {
      label: "IHALA WELGAMA",
      value: 3802,
    },
    {
      label: "KARALDEKMA",
      value: 4653,
    },
    {
      label: "KOBAWAKA NORTH",
      value: 5282,
    },
    {
      label: "KOBAWAKA SOUTH",
      value: 5283,
    },
    {
      label: "KONGASTHENNA",
      value: 5452,
    },
    {
      label: "MAHAGAMA EAST",
      value: 6284,
    },
    {
      label: "MAHAGAMA NORTH",
      value: 6285,
    },
    {
      label: "MAHAGAMA SOUTH",
      value: 6286,
    },
    {
      label: "MAHAGAMA WEST",
      value: 6287,
    },
    {
      label: "MEEGAHAKUMBURA",
      value: 7023,
    },
    {
      label: "MOLKAWA",
      value: 7266,
    },
    {
      label: "MUDUNA",
      value: 7400,
    },
    {
      label: "NIGGAHA",
      value: 7943,
    },
    {
      label: "PAHALA KUDALIGAMA",
      value: 8311,
    },
    {
      label: "PAHALA NARAGALA",
      value: 8335,
    },
    {
      label: "PAHALA WELGAMA",
      value: 8371,
    },
    {
      label: "PARAGODA EAST",
      value: 8748,
    },
    {
      label: "PARAGODA WEST",
      value: 8751,
    },
    {
      label: "POLEGODA WEST",
      value: 9203,
    },
    {
      label: "RETIYALA",
      value: 9785,
    },
    {
      label: "THENNAHENA",
      value: 10599,
    },
    {
      label: "UDUGALAKANDA",
      value: 11007,
    },
    {
      label: "WEYANGALLA EAST",
      value: 12171,
    },
    {
      label: "WEYANGALLA WEST",
      value: 12172,
    },
    {
      label: "YAHALAWATTA",
      value: 12217,
    },
    {
      label: "YATAGAMPITIYA",
      value: 12270,
    },
  ],
  "41": [
    {
      label: "BURUTHAGOLLA",
      value: 1323,
    },
    {
      label: "DIKYAYA",
      value: 1872,
    },
    {
      label: "GALTEMMANDIYA",
      value: 2621,
    },
    {
      label: "GAMINIPURA",
      value: 2652,
    },
    {
      label: "GONAGAN ARA",
      value: 2914,
    },
    {
      label: "HORABOKKA",
      value: 3524,
    },
    {
      label: "KONKETIYA",
      value: 5466,
    },
    {
      label: "KUKURAMPOLA",
      value: 5755,
    },
    {
      label: "KUMARAGAMA",
      value: 5770,
    },
    {
      label: "KUMARAPURA",
      value: 5774,
    },
    {
      label: "MAHAGODAYAYA",
      value: 6291,
    },
    {
      label: "MAHASENPURA",
      value: 6365,
    },
    {
      label: "MALIGAVILA",
      value: 6539,
    },
    {
      label: "MEDAGAMA",
      value: 6933,
    },
    {
      label: "MINIPURAGAMA",
      value: 7202,
    },
    {
      label: "OKKAMPITIYA",
      value: 8120,
    },
    {
      label: "PAHALAGAMA",
      value: 8378,
    },
    {
      label: "PELWATTA",
      value: 8957,
    },
    {
      label: "PETTAGAMWELA",
      value: 9058,
    },
    {
      label: "PUHULKOTUWA",
      value: 9356,
    },
    {
      label: "RAHATHANGAMA",
      value: 9537,
    },
    {
      label: "UDA ARAWA",
      value: 10861,
    },
    {
      label: "UDAGAMA",
      value: 10891,
    },
    {
      label: "ULUGALA",
      value: 11138,
    },
    {
      label: "UNAWATUNA",
      value: 11161,
    },
    {
      label: "VEHERAGALA",
      value: 11366,
    },
    {
      label: "WAGURUWELA",
      value: 11536,
    },
    {
      label: "YATIYALLATHOTA",
      value: 12305,
    },
    {
      label: "YUDAGANAWA",
      value: 12331,
    },
  ],
  "42": [
    {
      label: "ALUTHWATTA",
      value: 277,
    },
    {
      label: "AMBAKANDAVILA",
      value: 332,
    },
    {
      label: "DAMBAKELE",
      value: 1460,
    },
    {
      label: "DEDURUOYA",
      value: 1586,
    },
    {
      label: "EGODAWATTA",
      value: 2143,
    },
    {
      label: "ICHCHAMPITIYA",
      value: 3638,
    },
    {
      label: "IHALA OLIDALUWA",
      value: 3769,
    },
    {
      label: "ILIPPADENIYA",
      value: 3841,
    },
    {
      label: "INIGODAWELA",
      value: 3930,
    },
    {
      label: "KAKKAPALLIYA",
      value: 4215,
    },
    {
      label: "KANATTAWA",
      value: 4443,
    },
    {
      label: "KARAVITA",
      value: 4726,
    },
    {
      label: "KARAVITAGARA EAST",
      value: 4727,
    },
    {
      label: "KARAVITAGARA WEST",
      value: 4728,
    },
    {
      label: "KOKKAVILA",
      value: 5348,
    },
    {
      label: "KURUSAPADUWA",
      value: 5909,
    },
    {
      label: "MAHA VILATTAWA",
      value: 6263,
    },
    {
      label: "MAIKKULAMA",
      value: 6418,
    },
    {
      label: "MANUWANGAMA EAST",
      value: 6702,
    },
    {
      label: "MANUWANGAMA WEST",
      value: 6703,
    },
    {
      label: "MARADANKULAMA",
      value: 6723,
    },
    {
      label: "MELPURA",
      value: 7113,
    },
    {
      label: "MERAWALA",
      value: 7125,
    },
    {
      label: "MUGUNUWATAWANA",
      value: 7414,
    },
    {
      label: "MUNGANDALUWA EAST",
      value: 7470,
    },
    {
      label: "MUNGANDALUWA WEST",
      value: 7471,
    },
    {
      label: "MUNNESHWARAMA",
      value: 7475,
    },
    {
      label: "NARIYAGAMA NORTH",
      value: 7733,
    },
    {
      label: "NARIYAGAMA SOUTH",
      value: 7734,
    },
    {
      label: "OLIDALUWA",
      value: 8129,
    },
    {
      label: "PARAPPANMULLA",
      value: 8794,
    },
    {
      label: "PITIPANA EAST",
      value: 9152,
    },
    {
      label: "PITIPANA NORTH",
      value: 9153,
    },
    {
      label: "PITIPANA SOUTH",
      value: 9154,
    },
    {
      label: "PULIYANKADAWARA",
      value: 9374,
    },
    {
      label: "PUNCHI VILATTAWA",
      value: 9406,
    },
    {
      label: "SAWARANA",
      value: 9989,
    },
    {
      label: "THIMBILLA",
      value: 10651,
    },
    {
      label: "THISSOGAMA",
      value: 10707,
    },
    {
      label: "THITTAKADE",
      value: 10712,
    },
    {
      label: "URUDAYANDALUWA",
      value: 11221,
    },
    {
      label: "WATTAKKALIYA",
      value: 11793,
    },
    {
      label: "WEERAKELEWATTA",
      value: 11852,
    },
    {
      label: "WEERAPANDIYANA",
      value: 11865,
    },
    {
      label: "WELIHENA",
      value: 11961,
    },
    {
      label: "WERALABADA",
      value: 12089,
    },
    {
      label: "WERALABADA NORTH",
      value: 12090,
    },
    {
      label: "WERALABADA SOUTH",
      value: 12091,
    },
  ],
  "43": [
    {
      label: "ALUTHKADE EAST",
      value: 270,
    },
    {
      label: "ALUTHKADE WEST",
      value: 271,
    },
    {
      label: "ALUTHMAWATHA",
      value: 273,
    },
    {
      label: "BLOEMENDHAL",
      value: 1106,
    },
    {
      label: "FORT",
      value: 2441,
    },
    {
      label: "GALLE FACE",
      value: 2578,
    },
    {
      label: "GRANDPASS NORTH",
      value: 2984,
    },
    {
      label: "GRANDPASS SOUTH",
      value: 2985,
    },
    {
      label: "HUNUPITIYA",
      value: 3610,
    },
    {
      label: "IBBANWALA",
      value: 3635,
    },
    {
      label: "JINTHUPITIYA",
      value: 4048,
    },
    {
      label: "KESELWATTA",
      value: 5049,
    },
    {
      label: "KHETTARAMA",
      value: 5085,
    },
    {
      label: "KOCHCHIKADE NORTH",
      value: 5292,
    },
    {
      label: "KOCHCHIKADE SOUTH",
      value: 5293,
    },
    {
      label: "KOTAHENA EAST",
      value: 5569,
    },
    {
      label: "KOTAHENA WEST",
      value: 5570,
    },
    {
      label: "LUNUPOKUNA",
      value: 6050,
    },
    {
      label: "MADAMPITIYA",
      value: 6090,
    },
    {
      label: "MAHAWATTA",
      value: 6378,
    },
    {
      label: "MALIGAKANDA",
      value: 6533,
    },
    {
      label: "MALIGAWATTA EAST",
      value: 6541,
    },
    {
      label: "MALIGAWATTA WEST",
      value: 6542,
    },
    {
      label: "MARADANA",
      value: 6719,
    },
    {
      label: "MASANGASWEEDIYA",
      value: 6785,
    },
    {
      label: "MATTAKKULIYA",
      value: 6826,
    },
    {
      label: "MODARA",
      value: 7249,
    },
    {
      label: "NAWAGAMPURA",
      value: 7795,
    },
    {
      label: "NEW BAZAAR",
      value: 7927,
    },
    {
      label: "PANCHIKAWATTA",
      value: 8647,
    },
    {
      label: "PETTAH",
      value: 9059,
    },
    {
      label: "SAMMANTHRANAPURA",
      value: 9900,
    },
    {
      label: "SLAVE ISLAND",
      value: 10220,
    },
    {
      label: "SUDUWELLA",
      value: 10285,
    },
    {
      label: "WEKANDA",
      value: 11900,
    },
  ],
  "45": [
    {
      label: "ANGUNAWEL PELESSA",
      value: 499,
    },
    {
      label: "ATHUPARAYAYA",
      value: 663,
    },
    {
      label: "AVUDANGAWA",
      value: 707,
    },
    {
      label: "BELLANNEOYA",
      value: 1028,
    },
    {
      label: "BULAGALA",
      value: 1291,
    },
    {
      label: "DAMBULLA TOWN",
      value: 1476,
    },
    {
      label: "DAMBULUGAMA",
      value: 1478,
    },
    {
      label: "DIGAMPATHAHA",
      value: 1835,
    },
    {
      label: "EGODAWEWA",
      value: 2145,
    },
    {
      label: "EMBULAMBE",
      value: 2284,
    },
    {
      label: "ETAWARAHENA",
      value: 2380,
    },
    {
      label: "ETHA BENDIWEWA",
      value: 2382,
    },
    {
      label: "GEDIGASWALANA",
      value: 2770,
    },
    {
      label: "HALUAPULLANA WEWA",
      value: 3118,
    },
    {
      label: "IHALA EREULA",
      value: 3689,
    },
    {
      label: "INAMALUWA",
      value: 3890,
    },
    {
      label: "KALOGAHA ELA",
      value: 4314,
    },
    {
      label: "KALUNDEWA ALUTHGAMA",
      value: 4356,
    },
    {
      label: "KALUNDEWA PARANAGAMA",
      value: 4357,
    },
    {
      label: "KANDALAMA",
      value: 4460,
    },
    {
      label: "KAPUWATTA",
      value: 4601,
    },
    {
      label: "KIMBISSA",
      value: 5097,
    },
    {
      label: "KIRALAGOLLA",
      value: 5125,
    },
    {
      label: "KIRALESSA",
      value: 5126,
    },
    {
      label: "KUMBUKKANDANWALA",
      value: 5806,
    },
    {
      label: "LENADORA NORTH",
      value: 5981,
    },
    {
      label: "LENADORA SOUTH",
      value: 5982,
    },
    {
      label: "MAILATTAWA",
      value: 6422,
    },
    {
      label: "MORAGOLLEWA",
      value: 7324,
    },
    {
      label: "NAGALAWEWA",
      value: 7571,
    },
    {
      label: "NAYAKUMBURA",
      value: 7830,
    },
    {
      label: "NIKAWATAWANA",
      value: 7957,
    },
    {
      label: "PAHALA EREVULA",
      value: 8259,
    },
    {
      label: "PAHALA WEWA",
      value: 8372,
    },
    {
      label: "PALLEGAMA",
      value: 8497,
    },
    {
      label: "PALUTAWA",
      value: 8579,
    },
    {
      label: "PANNAMPITIYA",
      value: 8702,
    },
    {
      label: "PELVEHERA",
      value: 8956,
    },
    {
      label: "PIDURANGALA",
      value: 9064,
    },
    {
      label: "POHORANWEWA",
      value: 9190,
    },
    {
      label: "POL ATTAWA",
      value: 9199,
    },
    {
      label: "POTHANA",
      value: 9299,
    },
    {
      label: "PUWAK ATTAWALA",
      value: 9485,
    },
    {
      label: "RATHMALGAHA ELA",
      value: 9719,
    },
    {
      label: "RATHMALKATUWA",
      value: 9726,
    },
    {
      label: "SIGIRIYA",
      value: 10100,
    },
    {
      label: "SIYAMBALA WEWA",
      value: 10185,
    },
    {
      label: "THALKOTE",
      value: 10434,
    },
    {
      label: "THITTAWELGOLLA",
      value: 10718,
    },
    {
      label: "VILHATHA",
      value: 11456,
    },
    {
      label: "WALGAMWEWA",
      value: 11623,
    },
    {
      label: "WAVULAMBE",
      value: 11814,
    },
    {
      label: "WELAMITIYAWA",
      value: 11911,
    },
    {
      label: "WELANGOLLA",
      value: 11918,
    },
    {
      label: "WELIHENA",
      value: 11961,
    },
    {
      label: "WEWALA WEWA",
      value: 12144,
    },
    {
      label: "YAKKURAGALA NORTH",
      value: 12245,
    },
    {
      label: "YAKKURAGALA SOUTH",
      value: 12246,
    },
    {
      label: "YAPAGAMA",
      value: 12264,
    },
  ],
  "46": [
    {
      label: "BOTHALEGAMA",
      value: 1253,
    },
    {
      label: "DANKOTUWA EAST",
      value: 1539,
    },
    {
      label: "DANKOTUWA NORTH",
      value: 1540,
    },
    {
      label: "DANKOTUWA SOUTH",
      value: 1541,
    },
    {
      label: "DANKOTUWA WEST",
      value: 1542,
    },
    {
      label: "DIKWELA",
      value: 1869,
    },
    {
      label: "ETIYAWALA NORTH",
      value: 2427,
    },
    {
      label: "ETIYAWALA SOUTH",
      value: 2428,
    },
    {
      label: "GODELLA",
      value: 2876,
    },
    {
      label: "GONAVILA NORTH",
      value: 2935,
    },
    {
      label: "GONAVILA SOUTH",
      value: 2936,
    },
    {
      label: "HALDANDUWANA NORTH",
      value: 3071,
    },
    {
      label: "HALDANDUWANA SOUTH",
      value: 3072,
    },
    {
      label: "HALDANDUWANA WEST",
      value: 3073,
    },
    {
      label: "HUNDIRAPOLA",
      value: 3594,
    },
    {
      label: "IHALA BUJJAMPOLA",
      value: 3680,
    },
    {
      label: "IHALA DUMMALAKOTUWA",
      value: 3683,
    },
    {
      label: "IHALA MOHOTTIMULLA",
      value: 3760,
    },
    {
      label: "JANKURAWELA",
      value: 4013,
    },
    {
      label: "KAHATAVILA PART",
      value: 4177,
    },
    {
      label: "KAHATAVILA WEST",
      value: 4178,
    },
    {
      label: "KALUWACHCHIMULLA",
      value: 4371,
    },
    {
      label: "KATUKENDA EAST",
      value: 4841,
    },
    {
      label: "KATUKENDA WEST",
      value: 4842,
    },
    {
      label: "KIRIMETIYANA EAST",
      value: 5178,
    },
    {
      label: "KIRIMETIYANA NORTH",
      value: 5179,
    },
    {
      label: "KIRIMETIYANA SOUTH",
      value: 5180,
    },
    {
      label: "KIRIMETIYANA WEST",
      value: 5181,
    },
    {
      label: "LIHIRIYAGAMA",
      value: 6011,
    },
    {
      label: "MEDA GONAVILA",
      value: 6905,
    },
    {
      label: "MEDA HALDANDUWANA",
      value: 6906,
    },
    {
      label: "MEDA KATUKENDA",
      value: 6908,
    },
    {
      label: "MEDA KIRIMETIYANA",
      value: 6912,
    },
    {
      label: "MELLAWA",
      value: 7109,
    },
    {
      label: "METIKOTUWA",
      value: 7141,
    },
    {
      label: "MORUKKULIYA",
      value: 7371,
    },
    {
      label: "MOTEMULLA",
      value: 7373,
    },
    {
      label: "PAHALA BUJJAMPOLA",
      value: 8249,
    },
    {
      label: "PAHALA DUMMALAKOTUWA",
      value: 8255,
    },
    {
      label: "PAHALA MOHOTTIMULLA",
      value: 8332,
    },
    {
      label: "PANSAL HANDIYA",
      value: 8712,
    },
    {
      label: "POTHUWATAWANA",
      value: 9326,
    },
    {
      label: "SENDIRIYAMULLA",
      value: 10053,
    },
    {
      label: "SINGAKKULIYA",
      value: 10107,
    },
    {
      label: "THAMARAKULIYA",
      value: 10457,
    },
    {
      label: "THULAWALA",
      value: 10780,
    },
    {
      label: "YOGIYANA",
      value: 12327,
    },
  ],
  "48": [
    {
      label: "ALGODA",
      value: 208,
    },
    {
      label: "AMBALAMPITIYA",
      value: 341,
    },
    {
      label: "ATULUGAMA",
      value: 697,
    },
    {
      label: "ATULUGAMWELA",
      value: 700,
    },
    {
      label: "BATANGALA",
      value: 926,
    },
    {
      label: "BOMALUWA",
      value: 1171,
    },
    {
      label: "BORALANKADA",
      value: 1216,
    },
    {
      label: "DAIGALA",
      value: 1420,
    },
    {
      label: "DEBEGAMA",
      value: 1570,
    },
    {
      label: "DEHIOVITA",
      value: 1643,
    },
    {
      label: "DIKELLA",
      value: 1855,
    },
    {
      label: "ELAVULLA",
      value: 2195,
    },
    {
      label: "ELUWANA",
      value: 2260,
    },
    {
      label: "EPALAPITIYA",
      value: 2302,
    },
    {
      label: "GALABALANA KANDA",
      value: 2464,
    },
    {
      label: "GODAGAMPALA",
      value: 2842,
    },
    {
      label: "HINGURALAKANDA EAST",
      value: 3446,
    },
    {
      label: "HINGURALAKANDA WEST",
      value: 3447,
    },
    {
      label: "IHALA THALDOOWA",
      value: 3781,
    },
    {
      label: "IMBULPITIYA",
      value: 3888,
    },
    {
      label: "KAHANAVITA",
      value: 4155,
    },
    {
      label: "KANANGAMA",
      value: 4435,
    },
    {
      label: "KELEGAMA",
      value: 4977,
    },
    {
      label: "KURUPETTA",
      value: 5905,
    },
    {
      label: "MADAGAMMANA",
      value: 6078,
    },
    {
      label: "MADOLA",
      value: 6141,
    },
    {
      label: "MAGAMMANA",
      value: 6196,
    },
    {
      label: "MANIYANGAMA",
      value: 6680,
    },
    {
      label: "NAPAWALA",
      value: 7685,
    },
    {
      label: "PAHALA THALDOOWA",
      value: 8352,
    },
    {
      label: "PANAWALA",
      value: 8643,
    },
    {
      label: "PANNILA",
      value: 8705,
    },
    {
      label: "PUKUNUWALA",
      value: 9364,
    },
    {
      label: "RANGEGAMA",
      value: 9654,
    },
    {
      label: "THIMBIRIPOLA",
      value: 10658,
    },
    {
      label: "UDUVILA",
      value: 11053,
    },
    {
      label: "VIHARAKANDA",
      value: 11426,
    },
    {
      label: "WALPOLA",
      value: 11647,
    },
    {
      label: "WELANGALLA",
      value: 11917,
    },
  ],
  "49": [
    {
      label: "DEHIWALA EAST",
      value: 1649,
    },
    {
      label: "DEHIWALA WEST",
      value: 1650,
    },
    {
      label: "DUTUGEMUNU",
      value: 2098,
    },
    {
      label: "GALWALA",
      value: 2638,
    },
    {
      label: "HATHBODHIYA",
      value: 3244,
    },
    {
      label: "JAYATHILAKA",
      value: 4037,
    },
    {
      label: "KALUBOVILA",
      value: 4324,
    },
    {
      label: "KARAGAMPITIYA",
      value: 4617,
    },
    {
      label: "KAWDANA EAST",
      value: 4899,
    },
    {
      label: "KOHUWALA",
      value: 5341,
    },
    {
      label: "MALWATTA",
      value: 6586,
    },
    {
      label: "NEDIMALA",
      value: 7843,
    },
    {
      label: "SRI SARANANKARA",
      value: 10257,
    },
    {
      label: "UDYANAYA",
      value: 11082,
    },
    {
      label: "VILAWALA",
      value: 11446,
    },
  ],
  "50": [
    {
      label: "DELFT CENTRE",
      value: 1667,
    },
    {
      label: "DELFT CENTRE EAST",
      value: 1668,
    },
    {
      label: "DELFT CENTRE WEST",
      value: 1669,
    },
    {
      label: "DELFT EAST",
      value: 1670,
    },
    {
      label: "DELFT SOUTH",
      value: 1671,
    },
    {
      label: "DELFT WEST",
      value: 1672,
    },
  ],
  "51": [
    {
      label: "BAWLANAWATTA JANAPADAYA",
      value: 976,
    },
    {
      label: "BOPITIYA NAGARAYA",
      value: 1206,
    },
    {
      label: "GALAHA",
      value: 2486,
    },
    {
      label: "GONANGODA",
      value: 2926,
    },
    {
      label: "GREATWELIYA",
      value: 2987,
    },
    {
      label: "KANDEGAMA",
      value: 4491,
    },
    {
      label: "KARAGASKADA NORTH",
      value: 4618,
    },
    {
      label: "KARAGASKADA SOUTH",
      value: 4619,
    },
    {
      label: "KIRIWANAKETIYA",
      value: 5213,
    },
    {
      label: "KOLAMBISSA EAST",
      value: 5374,
    },
    {
      label: "KOLAMBISSA WEST",
      value: 5375,
    },
    {
      label: "KOTAGEPITIYA",
      value: 5565,
    },
    {
      label: "MAUSSAWA",
      value: 6845,
    },
    {
      label: "MEDAKEKILA",
      value: 6953,
    },
    {
      label: "MURAPOLA EAST",
      value: 7480,
    },
    {
      label: "MURAPOLA WEST",
      value: 7481,
    },
    {
      label: "NAWANELIYA",
      value: 7815,
    },
    {
      label: "PALUGAMA",
      value: 8558,
    },
    {
      label: "PATTIYAGAMA GABADAGAMA NORTH",
      value: 8883,
    },
    {
      label: "PATTIYAGAMA GABADAGAMA SOUTH",
      value: 8884,
    },
    {
      label: "PATTIYAGAMA PALLEGAMA",
      value: 8885,
    },
    {
      label: "PATTIYAGAMA UDAGAMA",
      value: 8886,
    },
    {
      label: "PERAWATTA EAST",
      value: 8986,
    },
    {
      label: "PERAWATTA WEST",
      value: 8987,
    },
    {
      label: "SUDUWELLA",
      value: 10285,
    },
    {
      label: "UDADELTHOTA",
      value: 10884,
    },
    {
      label: "WADIYAGODA",
      value: 11513,
    },
    {
      label: "WANAHAPUWA",
      value: 11654,
    },
    {
      label: "WETAKEPOTHA",
      value: 12117,
    },
  ],
  "52": [
    {
      label: "ANHETTIGAMA",
      value: 503,
    },
    {
      label: "BALLAHELA",
      value: 796,
    },
    {
      label: "BASNAGALA",
      value: 896,
    },
    {
      label: "BEHENELLA",
      value: 998,
    },
    {
      label: "DEMEDA",
      value: 1738,
    },
    {
      label: "DERANIYAGALA",
      value: 1762,
    },
    {
      label: "DERANIYAGALA SOUTH",
      value: 1763,
    },
    {
      label: "DIKELLAKANDA",
      value: 1856,
    },
    {
      label: "DODAWATTA",
      value: 1986,
    },
    {
      label: "KEERIHENA",
      value: 4926,
    },
    {
      label: "KOSGAHAKANDA",
      value: 5528,
    },
    {
      label: "LASSEGAMA",
      value: 5962,
    },
    {
      label: "MAGALA",
      value: 6186,
    },
    {
      label: "MALIBODA",
      value: 6524,
    },
    {
      label: "MIYANAVITA",
      value: 7243,
    },
    {
      label: "NAKKAVITA",
      value: 7615,
    },
    {
      label: "NILWALA",
      value: 7981,
    },
    {
      label: "PANAKOORA",
      value: 8613,
    },
    {
      label: "PANDAHA",
      value: 8648,
    },
    {
      label: "PODDENIKANDA",
      value: 9181,
    },
    {
      label: "POLGASWATTA",
      value: 9217,
    },
    {
      label: "RASNAKKANDA",
      value: 9694,
    },
    {
      label: "UDABAGE",
      value: 10881,
    },
    {
      label: "UDAPOLA",
      value: 10955,
    },
    {
      label: "WATTEGEDARA",
      value: 11802,
    },
    {
      label: "YATIWALA",
      value: 12300,
    },
  ],
  "53": [
    {
      label: "AGARAWALA",
      value: 65,
    },
    {
      label: "APAREKKA NORTH",
      value: 528,
    },
    {
      label: "BEDDEGAMMEDDA",
      value: 986,
    },
    {
      label: "DELGALLA",
      value: 1676,
    },
    {
      label: "DEVINUWARA",
      value: 1773,
    },
    {
      label: "DEVINUWARA CENTRAL",
      value: 1774,
    },
    {
      label: "DEVINUWARA EAST",
      value: 1775,
    },
    {
      label: "DEVINUWARA NORTH",
      value: 1776,
    },
    {
      label: "DEVINUWARA NUGEGODA",
      value: 1777,
    },
    {
      label: "DEVINUWARA PRADEEPAGARA PEDESA",
      value: 1778,
    },
    {
      label: "DEVINUWARA SINHASANA PEDESA",
      value: 1779,
    },
    {
      label: "DEVINUWARA SOUTH",
      value: 1780,
    },
    {
      label: "DEVINUWARA WAWWA",
      value: 1781,
    },
    {
      label: "DEVINUWARA WELEGODA",
      value: 1782,
    },
    {
      label: "DEVINUWARA WEST",
      value: 1783,
    },
    {
      label: "GANDARA CENTRAL",
      value: 2681,
    },
    {
      label: "GANDARA EAST",
      value: 2682,
    },
    {
      label: "GANDARA SOUTH",
      value: 2683,
    },
    {
      label: "GANDARA WEST",
      value: 2684,
    },
    {
      label: "GANDARAWATTA SOUTH",
      value: 2686,
    },
    {
      label: "KADAWEDDUWA EAST",
      value: 4086,
    },
    {
      label: "KADAWEDDUWA WEST",
      value: 4087,
    },
    {
      label: "KAPUGAMA CENTRAL",
      value: 4587,
    },
    {
      label: "KAPUGAMA EAST",
      value: 4588,
    },
    {
      label: "KAPUGAMA NORTH",
      value: 4589,
    },
    {
      label: "KAPUGAMA WEST",
      value: 4590,
    },
    {
      label: "NAOTUNNA",
      value: 7677,
    },
    {
      label: "NAOTUNNA CENTRAL",
      value: 7678,
    },
    {
      label: "NAOTUNNA NORTH",
      value: 7679,
    },
    {
      label: "NAOTUNNA SOUTH",
      value: 7680,
    },
    {
      label: "PALLE APAREKKA",
      value: 8484,
    },
    {
      label: "PATHEGAMA EAST",
      value: 8844,
    },
    {
      label: "PATHEGAMA NORTH",
      value: 8845,
    },
    {
      label: "THALALLA",
      value: 10363,
    },
    {
      label: "THALALLA CENTRAL",
      value: 10364,
    },
    {
      label: "THALALLA EAST",
      value: 10365,
    },
    {
      label: "THALALLA NORTH",
      value: 10366,
    },
    {
      label: "THALALLA SOUTH",
      value: 10367,
    },
    {
      label: "UDA APAREKKA",
      value: 10859,
    },
    {
      label: "UDA APAREKKA EAST",
      value: 10860,
    },
    {
      label: "WALBULUGAHAHENA",
      value: 11610,
    },
  ],
  "54": [
    {
      label: "BAMBARENDA CENTRAL",
      value: 821,
    },
    {
      label: "BAMBARENDA EAST",
      value: 822,
    },
    {
      label: "BAMBARENDA NORTH",
      value: 823,
    },
    {
      label: "BAMBARENDA SOUTH",
      value: 824,
    },
    {
      label: "BAMBARENDA WEST",
      value: 825,
    },
    {
      label: "BATHEEGAMA CENTRAL",
      value: 943,
    },
    {
      label: "BATHEEGAMA EAST",
      value: 944,
    },
    {
      label: "BATHEEGAMA WEST",
      value: 945,
    },
    {
      label: "BELIDENIYA",
      value: 1009,
    },
    {
      label: "BELIWATTA",
      value: 1020,
    },
    {
      label: "BODARAKANDA",
      value: 1111,
    },
    {
      label: "DANDENIYA NORTH",
      value: 1511,
    },
    {
      label: "DANDENIYA SOUTH",
      value: 1512,
    },
    {
      label: "DICKWELLA CENTRAL",
      value: 1821,
    },
    {
      label: "DICKWELLA EAST",
      value: 1822,
    },
    {
      label: "DICKWELLA MUSLIM YONAKAPURA EAST",
      value: 1823,
    },
    {
      label: "DICKWELLA MUSLIM YONAKAPURA WEST",
      value: 1824,
    },
    {
      label: "DICKWELLA NORTH",
      value: 1825,
    },
    {
      label: "DICKWELLA SOUTH",
      value: 1826,
    },
    {
      label: "DODAMPAHALA CENTRAL",
      value: 1961,
    },
    {
      label: "DODAMPAHALA EAST",
      value: 1962,
    },
    {
      label: "DODAMPAHALA NORTH",
      value: 1963,
    },
    {
      label: "DODAMPAHALA SOUTH",
      value: 1964,
    },
    {
      label: "DODAMPAHALA WEST",
      value: 1965,
    },
    {
      label: "GODAUDA",
      value: 2866,
    },
    {
      label: "KOTTAGODA",
      value: 5611,
    },
    {
      label: "LUNUKALAPUWA",
      value: 6047,
    },
    {
      label: "PATHEGAMA CENTRAL",
      value: 8843,
    },
    {
      label: "PATHEGAMA SOUTH",
      value: 8846,
    },
    {
      label: "POHOSATHUGODA",
      value: 9192,
    },
    {
      label: "RANNAWALA",
      value: 9669,
    },
    {
      label: "RATHMALE",
      value: 9717,
    },
    {
      label: "SUDUWELLA",
      value: 10285,
    },
    {
      label: "URUGAMUWA",
      value: 11224,
    },
    {
      label: "URUGAMUWA CENTRAL",
      value: 11225,
    },
    {
      label: "URUGAMUWA EAST",
      value: 11226,
    },
    {
      label: "URUGAMUWA NORTH",
      value: 11227,
    },
    {
      label: "URUGAMUWA SOUTH",
      value: 11228,
    },
    {
      label: "URUGAMUWA WEST",
      value: 11229,
    },
    {
      label: "WALASGALA EAST",
      value: 11592,
    },
    {
      label: "WALASGALA WEST",
      value: 11593,
    },
    {
      label: "WATTEGAMA",
      value: 11799,
    },
    {
      label: "WATTEGAMA NORTH",
      value: 11800,
    },
    {
      label: "WATTEGAMA SOUTH",
      value: 11801,
    },
    {
      label: "WEHELLA",
      value: 11888,
    },
    {
      label: "WEHELLA NORTH",
      value: 11889,
    },
    {
      label: "WEHELLA SOUTH",
      value: 11890,
    },
    {
      label: "WEVURUKANNALA",
      value: 12132,
    },
  ],
  "55": [
    {
      label: "ALAWAKUMBURA",
      value: 189,
    },
    {
      label: "ALUTHOYA",
      value: 275,
    },
    {
      label: "ARALAGANVILA",
      value: 551,
    },
    {
      label: "ARALAGANVILA WEST",
      value: 552,
    },
    {
      label: "ARUNAPURA",
      value: 614,
    },
    {
      label: "BANDANAGALA",
      value: 843,
    },
    {
      label: "BIMPOKUNA",
      value: 1084,
    },
    {
      label: "BOGASWEWA",
      value: 1138,
    },
    {
      label: "DALUKANA",
      value: 1427,
    },
    {
      label: "DAMANEWEWA",
      value: 1447,
    },
    {
      label: "DIMBULAGALA",
      value: 1874,
    },
    {
      label: "DIVULDAMANA",
      value: 1903,
    },
    {
      label: "ELLEWEWA",
      value: 2247,
    },
    {
      label: "GAL ELIYA",
      value: 2458,
    },
    {
      label: "GOMATHIYAYA",
      value: 2896,
    },
    {
      label: "IHALA ELLEWEWA",
      value: 3685,
    },
    {
      label: "IHALAWEWA",
      value: 3822,
    },
    {
      label: "JAYAPURA",
      value: 4029,
    },
    {
      label: "KALUKELE",
      value: 4348,
    },
    {
      label: "KANDEGAMA",
      value: 4491,
    },
    {
      label: "KANICHCHAGALA",
      value: 4527,
    },
    {
      label: "KEKULAWELA",
      value: 4966,
    },
    {
      label: "KUDAWEWA",
      value: 5736,
    },
    {
      label: "MAGULDAMANA",
      value: 6210,
    },
    {
      label: "MAHADAMANA",
      value: 6270,
    },
    {
      label: "MAHAULPATHA",
      value: 6367,
    },
    {
      label: "MALDENIYA",
      value: 6513,
    },
    {
      label: "MANAMPITIYA",
      value: 6624,
    },
    {
      label: "MANAMPITIYA EAST",
      value: 6625,
    },
    {
      label: "MEDAGAMA",
      value: 6933,
    },
    {
      label: "MEWATHPURA",
      value: 7150,
    },
    {
      label: "MILLANA",
      value: 7181,
    },
    {
      label: "MUDUNGAMA",
      value: 7402,
    },
    {
      label: "NAVAGAHA ELA",
      value: 7755,
    },
    {
      label: "NIDANWALA",
      value: 7941,
    },
    {
      label: "NUWARAGALA",
      value: 8096,
    },
    {
      label: "PAHALA ELLEWEWA",
      value: 8257,
    },
    {
      label: "PAHALA YAKKURE",
      value: 8375,
    },
    {
      label: "PELATIYAWA",
      value: 8918,
    },
    {
      label: "PIHITIWEWA",
      value: 9072,
    },
    {
      label: "PIMBURATTEWA EAST",
      value: 9091,
    },
    {
      label: "PIMBURATTEWA WEST",
      value: 9092,
    },
    {
      label: "RANKETHGAMA",
      value: 9661,
    },
    {
      label: "RATHMALTHENNA",
      value: 9729,
    },
    {
      label: "SANDAGALATHENNA",
      value: 9927,
    },
    {
      label: "SELASUMGAMA",
      value: 10019,
    },
    {
      label: "SIRIPURA",
      value: 10155,
    },
    {
      label: "TRACK 05 ARALAGANVILA",
      value: 10846,
    },
    {
      label: "ULPATHWEWA",
      value: 11136,
    },
    {
      label: "VEHERAGALA",
      value: 11366,
    },
    {
      label: "VEHERAGAMA",
      value: 11367,
    },
    {
      label: "WARAPITIYA",
      value: 11726,
    },
    {
      label: "WEERALANDA",
      value: 11856,
    },
    {
      label: "WEERANA",
      value: 11858,
    },
    {
      label: "WIJAYABAPURA",
      value: 12179,
    },
    {
      label: "YAKKURE",
      value: 12247,
    },
  ],
  "56": [
    {
      label: "AGALEGEDARA",
      value: 61,
    },
    {
      label: "AKARAGAMA EAST",
      value: 88,
    },
    {
      label: "AKARAGAMA NORTH",
      value: 89,
    },
    {
      label: "AKARAGAMA WEST",
      value: 90,
    },
    {
      label: "AKARANGAHA",
      value: 94,
    },
    {
      label: "ALUGOLLA",
      value: 237,
    },
    {
      label: "ALUTHEPOLA EAST",
      value: 257,
    },
    {
      label: "ALUTHEPOLA WEST",
      value: 258,
    },
    {
      label: "AMBALAYAYA",
      value: 350,
    },
    {
      label: "ANDIMULLA",
      value: 470,
    },
    {
      label: "ASSENNAWATTA EAST",
      value: 640,
    },
    {
      label: "ASSENNAWATTA WEST",
      value: 641,
    },
    {
      label: "BADALGAMA",
      value: 720,
    },
    {
      label: "BALAGALLA EAST",
      value: 764,
    },
    {
      label: "BALAGALLA WEST",
      value: 765,
    },
    {
      label: "BALAWALA",
      value: 791,
    },
    {
      label: "BARAWAVILA",
      value: 892,
    },
    {
      label: "BATEPOLA",
      value: 936,
    },
    {
      label: "BOLAGALA",
      value: 1153,
    },
    {
      label: "BOMUGAMMANA NORTH",
      value: 1180,
    },
    {
      label: "BOMUGAMMANA SOUTH",
      value: 1181,
    },
    {
      label: "DAGONNA EAST",
      value: 1411,
    },
    {
      label: "DAGONNA NORTH",
      value: 1412,
    },
    {
      label: "DAGONNA SOUTH",
      value: 1413,
    },
    {
      label: "DELPAKADAWARA",
      value: 1703,
    },
    {
      label: "DELWAGURA",
      value: 1711,
    },
    {
      label: "DIKLANDA",
      value: 1866,
    },
    {
      label: "DIMBULDENIYA",
      value: 1877,
    },
    {
      label: "DIVULAPITIYA",
      value: 1902,
    },
    {
      label: "DIYAGAMPALA",
      value: 1932,
    },
    {
      label: "DOONAGAHA",
      value: 2019,
    },
    {
      label: "DOONAGAHA SOUTH",
      value: 2020,
    },
    {
      label: "ERABADDA",
      value: 2308,
    },
    {
      label: "GODIGAMUWA EAST",
      value: 2878,
    },
    {
      label: "GODIGAMUWA WEST",
      value: 2882,
    },
    {
      label: "GURULLAGAMA",
      value: 3012,
    },
    {
      label: "HALGAHAWELAWATTA",
      value: 3076,
    },
    {
      label: "HALOLUWA",
      value: 3102,
    },
    {
      label: "HALPE",
      value: 3112,
    },
    {
      label: "HANGAWATTA",
      value: 3173,
    },
    {
      label: "HAPUGAHAGAMA",
      value: 3190,
    },
    {
      label: "HAPUWALANA",
      value: 3214,
    },
    {
      label: "HAPUWALANA NORTH",
      value: 3215,
    },
    {
      label: "HAPUWALANA SOUTH",
      value: 3216,
    },
    {
      label: "HEERALUGEDARA",
      value: 3300,
    },
    {
      label: "HENPITAGEDARA",
      value: 3361,
    },
    {
      label: "HETTIMULLA",
      value: 3377,
    },
    {
      label: "HORAGASMULLA",
      value: 3533,
    },
    {
      label: "HUNUMULLA",
      value: 3609,
    },
    {
      label: "IHALA MADAMPELLA EAST",
      value: 3746,
    },
    {
      label: "IHALA MADAMPELLA NORTH",
      value: 3747,
    },
    {
      label: "IHALA MADAMPELLA WEST",
      value: 3748,
    },
    {
      label: "IHALA MADITHIYAWALA",
      value: 3750,
    },
    {
      label: "IHALAGAMA",
      value: 3810,
    },
    {
      label: "INDURAGARA NORTH",
      value: 3912,
    },
    {
      label: "INDURAGARA SOUTH",
      value: 3913,
    },
    {
      label: "KADAWALA",
      value: 4077,
    },
    {
      label: "KADAWALA NORTH",
      value: 4078,
    },
    {
      label: "KADAWALA SOUTH",
      value: 4079,
    },
    {
      label: "KALUAGGALA",
      value: 4319,
    },
    {
      label: "KALUAGGALA PAHALAGAMA",
      value: 4320,
    },
    {
      label: "KALUMADA",
      value: 4353,
    },
    {
      label: "KALUWARIPPUWA EAST - DAKUNA",
      value: 4386,
    },
    {
      label: "KALUWARIPPUWA EAST - UTHURA",
      value: 4387,
    },
    {
      label: "KATUKENDA",
      value: 4840,
    },
    {
      label: "KATUWELLEGAMA NORTH",
      value: 4877,
    },
    {
      label: "KATUWELLEGAMA SOUTH",
      value: 4878,
    },
    {
      label: "KEHELELLA NORTH",
      value: 4939,
    },
    {
      label: "KEHELELLA SOUTH",
      value: 4940,
    },
    {
      label: "KEHELELLA WEST",
      value: 4941,
    },
    {
      label: "KELEGEDARA",
      value: 4978,
    },
    {
      label: "KELEPITIMULLA",
      value: 4981,
    },
    {
      label: "KITHULWALA IHALA",
      value: 5257,
    },
    {
      label: "KITHULWALA NORTH",
      value: 5258,
    },
    {
      label: "KITHULWALA PAHALA",
      value: 5259,
    },
    {
      label: "KONGODAMULLA EAST",
      value: 5457,
    },
    {
      label: "KONGODAMULLA NORTH",
      value: 5458,
    },
    {
      label: "KONGODAMULLA SOUTH",
      value: 5459,
    },
    {
      label: "KONGODAMULLA WEST",
      value: 5460,
    },
    {
      label: "KORADAMINNA",
      value: 5495,
    },
    {
      label: "KOTADENIYAWA",
      value: 5559,
    },
    {
      label: "KUDAGAMMANA",
      value: 5702,
    },
    {
      label: "KULEEGEDARA",
      value: 5757,
    },
    {
      label: "LIHINIYAGAMMANA",
      value: 6008,
    },
    {
      label: "MELLAWAGEDARA",
      value: 7111,
    },
    {
      label: "MIRISWATTA",
      value: 7232,
    },
    {
      label: "MORAGALKANDA",
      value: 7312,
    },
    {
      label: "NARIYAMULLA",
      value: 7735,
    },
    {
      label: "NAWANA EAST",
      value: 7812,
    },
    {
      label: "NAWANA WEST",
      value: 7813,
    },
    {
      label: "OTHARAWADIYA",
      value: 8180,
    },
    {
      label: "PAHALA MADAMPELLA",
      value: 8318,
    },
    {
      label: "PAHALA MADITHIYAWALA",
      value: 8320,
    },
    {
      label: "PALLIYAPITIYA EAST",
      value: 8546,
    },
    {
      label: "PALLIYAPITIYA WEST",
      value: 8547,
    },
    {
      label: "PALUGAHAWELA",
      value: 8557,
    },
    {
      label: "PARAGODA NORTH",
      value: 8749,
    },
    {
      label: "PARAGODA SOUTH",
      value: 8750,
    },
    {
      label: "PARANA HALPE EAST",
      value: 8768,
    },
    {
      label: "PARANA HALPE WEST",
      value: 8769,
    },
    {
      label: "PARANA HANDIYA",
      value: 8770,
    },
    {
      label: "PETHIGODA",
      value: 9047,
    },
    {
      label: "PINNAKELE",
      value: 9107,
    },
    {
      label: "PINNAKELE SOUTH",
      value: 9108,
    },
    {
      label: "PINNALANDA",
      value: 9109,
    },
    {
      label: "POLHENA",
      value: 9219,
    },
    {
      label: "POLWATTA",
      value: 9245,
    },
    {
      label: "RASSAPANA",
      value: 9698,
    },
    {
      label: "SAYAKKARAMULLA",
      value: 9990,
    },
    {
      label: "SIRINGAPATHAWATTA",
      value: 10153,
    },
    {
      label: "THAMMITA",
      value: 10496,
    },
    {
      label: "THOTILLAGAHAWATTA",
      value: 10760,
    },
    {
      label: "ULLALAPOLA EAST",
      value: 11129,
    },
    {
      label: "ULLALAPOLA WEST",
      value: 11130,
    },
    {
      label: "URAPANA",
      value: 11204,
    },
    {
      label: "WALPITA",
      value: 11642,
    },
    {
      label: "WARADALA",
      value: 11695,
    },
    {
      label: "WATTEMULLA",
      value: 11806,
    },
    {
      label: "WEKADA",
      value: 11896,
    },
    {
      label: "WELAGANA",
      value: 11906,
    },
    {
      label: "WERAGODAMULLA",
      value: 12080,
    },
    {
      label: "WEWAGEDARA",
      value: 12136,
    },
  ],
  "57": [
    {
      label: "ADHIKARIGODA",
      value: 50,
    },
    {
      label: "BOLOSSAGAMA",
      value: 1169,
    },
    {
      label: "BOMBUWALA NORTH - CENTRAL",
      value: 1172,
    },
    {
      label: "BOMBUWALA NORTH - EAST",
      value: 1173,
    },
    {
      label: "BOMBUWALA NORTH - WEST",
      value: 1174,
    },
    {
      label: "BOMBUWALA SOUTH - CENTRAL",
      value: 1175,
    },
    {
      label: "BOMBUWALA SOUTH - EAST",
      value: 1176,
    },
    {
      label: "BOMBUWALA SOUTH - WEST",
      value: 1177,
    },
    {
      label: "DODANGODA EAST",
      value: 1975,
    },
    {
      label: "DODANGODA EAST - CENTRAL",
      value: 1976,
    },
    {
      label: "DODANGODA EAST - NORTH",
      value: 1977,
    },
    {
      label: "DODANGODA EAST - SOUTH",
      value: 1978,
    },
    {
      label: "DODANGODA WEST",
      value: 1979,
    },
    {
      label: "DODANGODA WEST - CENTRAL",
      value: 1980,
    },
    {
      label: "DODANGODA WEST - NORTH",
      value: 1981,
    },
    {
      label: "DODANGODA WEST - NORTH WEST",
      value: 1982,
    },
    {
      label: "DODANGODA WEST - SOUTH",
      value: 1983,
    },
    {
      label: "ELADOOWA",
      value: 2177,
    },
    {
      label: "GALPOTTAVILA",
      value: 2617,
    },
    {
      label: "GAMAGODA EAST",
      value: 2647,
    },
    {
      label: "GAMAGODA WEST",
      value: 2648,
    },
    {
      label: "IHALA NEBADA",
      value: 3768,
    },
    {
      label: "KOHOLANA NORTH",
      value: 5320,
    },
    {
      label: "KOHOLANA SOUTH",
      value: 5321,
    },
    {
      label: "NEBADA",
      value: 7833,
    },
    {
      label: "NEBADA WEST",
      value: 7834,
    },
    {
      label: "NEHINNA",
      value: 7874,
    },
    {
      label: "PAHALA NEBADA",
      value: 8337,
    },
    {
      label: "PELAPITIYAGODA",
      value: 8916,
    },
    {
      label: "PELAPITIYAGODA NORTH",
      value: 8917,
    },
    {
      label: "PUHAMBUGODA EAST",
      value: 9349,
    },
    {
      label: "PUHAMBUGODA WEST",
      value: 9350,
    },
    {
      label: "REMUNAGODA NORTH",
      value: 9779,
    },
    {
      label: "REMUNAGODA SOUTH",
      value: 9780,
    },
    {
      label: "SAPUGAHAWATTA",
      value: 9968,
    },
    {
      label: "SERUPITA EAST",
      value: 10072,
    },
    {
      label: "SERUPITA WEST",
      value: 10073,
    },
    {
      label: "THEBUWANA EAST",
      value: 10557,
    },
    {
      label: "THEBUWANA WEST",
      value: 10558,
    },
    {
      label: "THUDUGALA EAST",
      value: 10777,
    },
    {
      label: "THUDUGALA WEST",
      value: 10778,
    },
    {
      label: "UKWATTA",
      value: 11109,
    },
    {
      label: "WADUGAMA",
      value: 11515,
    },
    {
      label: "WATTAHENA",
      value: 11792,
    },
    {
      label: "WELLATHA",
      value: 12032,
    },
  ],
  "58": [
    {
      label: "ATUWEWATTA",
      value: 701,
    },
    {
      label: "DOLUWA",
      value: 1997,
    },
    {
      label: "GALOYA",
      value: 2604,
    },
    {
      label: "GAMPOLAWATTA",
      value: 2676,
    },
    {
      label: "GANEGODA",
      value: 2695,
    },
    {
      label: "GODAWELA",
      value: 2873,
    },
    {
      label: "GOTHATUWELA",
      value: 2976,
    },
    {
      label: "GURUKELE",
      value: 3007,
    },
    {
      label: "HALOYA",
      value: 3105,
    },
    {
      label: "HUNUGALA",
      value: 3600,
    },
    {
      label: "INGURUWATTA",
      value: 3928,
    },
    {
      label: "KAHAWATTA",
      value: 4192,
    },
    {
      label: "LEGUMDENIYA",
      value: 5973,
    },
    {
      label: "MASGOLLA",
      value: 6787,
    },
    {
      label: "MEGODA KALUGAMUWA",
      value: 7089,
    },
    {
      label: "MILLAGAHAMULA",
      value: 7175,
    },
    {
      label: "MULGAMA",
      value: 7428,
    },
    {
      label: "NARANVITA",
      value: 7720,
    },
    {
      label: "NAWA GURUKELE",
      value: 7782,
    },
    {
      label: "NAWA NILLAMBA",
      value: 7787,
    },
    {
      label: "NILLAMBA",
      value: 7976,
    },
    {
      label: "ORAYANWATTA",
      value: 8166,
    },
    {
      label: "PABADENIYA",
      value: 8208,
    },
    {
      label: "PALLEDELTHOTA",
      value: 8495,
    },
    {
      label: "PANVILATHENNA",
      value: 8721,
    },
    {
      label: "PITAWALA",
      value: 9139,
    },
    {
      label: "PUPURESSA",
      value: 9438,
    },
    {
      label: "RAJATHALAWA",
      value: 9567,
    },
    {
      label: "THUMPELAWAKA",
      value: 10798,
    },
    {
      label: "THUNDENIYA",
      value: 10801,
    },
    {
      label: "UDUDENIYA",
      value: 11003,
    },
    {
      label: "WARIYAGALA",
      value: 11731,
    },
    {
      label: "WEWATHENNA",
      value: 12148,
    },
  ],
  "59": [
    {
      label: "ALLIYAWATTA",
      value: 227,
    },
    {
      label: "ANURAGODA",
      value: 526,
    },
    {
      label: "ANURAGODA SOUTH",
      value: 527,
    },
    {
      label: "BADUWATTA",
      value: 745,
    },
    {
      label: "BANDARANAYAKAPURA EAST",
      value: 856,
    },
    {
      label: "BANDARANAYAKAPURA WEST",
      value: 857,
    },
    {
      label: "BANGALAWATTA",
      value: 878,
    },
    {
      label: "BOGAHAWATTA",
      value: 1129,
    },
    {
      label: "DANGALLA",
      value: 1526,
    },
    {
      label: "DANGALLA NORTH",
      value: 1527,
    },
    {
      label: "DEGAWATTA",
      value: 1616,
    },
    {
      label: "DEKATANA",
      value: 1658,
    },
    {
      label: "DEMALAGAMA",
      value: 1715,
    },
    {
      label: "DETHEMULLA",
      value: 1769,
    },
    {
      label: "DIYAWALA",
      value: 1950,
    },
    {
      label: "DIYAWALA NORTH",
      value: 1951,
    },
    {
      label: "DOMPE",
      value: 2016,
    },
    {
      label: "EGODA GURUWALA",
      value: 2126,
    },
    {
      label: "EGODA PELAHELA",
      value: 2131,
    },
    {
      label: "ETAMBAGAHAWATTA",
      value: 2368,
    },
    {
      label: "GALPOTHUGODA",
      value: 2615,
    },
    {
      label: "GALWALAGODA",
      value: 2639,
    },
    {
      label: "GANEGODA",
      value: 2695,
    },
    {
      label: "GANIHIGAMA NORTH",
      value: 2731,
    },
    {
      label: "GANIHIGAMA SOUTH",
      value: 2732,
    },
    {
      label: "GIRIDARA",
      value: 2824,
    },
    {
      label: "GIRIDARA WEST",
      value: 2825,
    },
    {
      label: "GURUWALA",
      value: 3024,
    },
    {
      label: "HELUMMAHARA",
      value: 3331,
    },
    {
      label: "HISWELLA",
      value: 3487,
    },
    {
      label: "IDDAMALDENIYA",
      value: 3651,
    },
    {
      label: "IHALA LUNUGAMA",
      value: 3745,
    },
    {
      label: "INDOLAMULLA",
      value: 3907,
    },
    {
      label: "INDURUGALLA",
      value: 3916,
    },
    {
      label: "KAJUGASWATTA",
      value: 4213,
    },
    {
      label: "KALUKONDAYAWA EAST",
      value: 4350,
    },
    {
      label: "KALUKONDAYAWA WEST",
      value: 4351,
    },
    {
      label: "KANNIMAHARA",
      value: 4548,
    },
    {
      label: "KAPUGODA",
      value: 4592,
    },
    {
      label: "KENDAGOLLA",
      value: 5001,
    },
    {
      label: "KERAGALA",
      value: 5029,
    },
    {
      label: "KIMBULVILAWATTA",
      value: 5106,
    },
    {
      label: "KIRIMETIYAWATTA",
      value: 5183,
    },
    {
      label: "KIRINDIWELA",
      value: 5198,
    },
    {
      label: "KIRIWANA",
      value: 5211,
    },
    {
      label: "KITHULAKANDA",
      value: 5240,
    },
    {
      label: "KUMARIMULLA",
      value: 5778,
    },
    {
      label: "KURUNDUHENA",
      value: 5888,
    },
    {
      label: "KUTTIVILA",
      value: 5924,
    },
    {
      label: "LANSIYAHENA",
      value: 5957,
    },
    {
      label: "MADURAWA",
      value: 6170,
    },
    {
      label: "MAHAL LOLUWA",
      value: 6318,
    },
    {
      label: "MAHAWALAWATTA",
      value: 6375,
    },
    {
      label: "MAILAWALANA",
      value: 6424,
    },
    {
      label: "MAILAWALANA SOUTH",
      value: 6425,
    },
    {
      label: "MALINDA",
      value: 6547,
    },
    {
      label: "MALINDA EAST",
      value: 6548,
    },
    {
      label: "MALWANA",
      value: 6580,
    },
    {
      label: "MANDAWALA NORTH",
      value: 6646,
    },
    {
      label: "MANDAWALA SOUTH",
      value: 6647,
    },
    {
      label: "MARYLAND COLONY",
      value: 6784,
    },
    {
      label: "MAWATHA",
      value: 6876,
    },
    {
      label: "MEDDEGAMA",
      value: 6980,
    },
    {
      label: "MEDDEGAMA NORTH",
      value: 6982,
    },
    {
      label: "MEDDEGAMA SOUTH",
      value: 6983,
    },
    {
      label: "MEEGAHAWATTA",
      value: 7028,
    },
    {
      label: "MEETHIRIGALA",
      value: 7072,
    },
    {
      label: "MENIKLANDA",
      value: 7122,
    },
    {
      label: "MILLATHE",
      value: 7184,
    },
    {
      label: "MILLATHE IHALA",
      value: 7185,
    },
    {
      label: "MORAHENA",
      value: 7326,
    },
    {
      label: "NAKANDAPOLA",
      value: 7610,
    },
    {
      label: "NAMALUWA",
      value: 7650,
    },
    {
      label: "NANDARAMA PEDESA",
      value: 7669,
    },
    {
      label: "NARAMPOLA",
      value: 7692,
    },
    {
      label: "NEDUNGOLLA",
      value: 7847,
    },
    {
      label: "NEDUNGOLLA SOUTH",
      value: 7848,
    },
    {
      label: "NIKAWALA",
      value: 7956,
    },
    {
      label: "OVITIGAMA",
      value: 8195,
    },
    {
      label: "PAHALA DOMPE",
      value: 8253,
    },
    {
      label: "PAHALA LUNUGAMA",
      value: 8317,
    },
    {
      label: "PAHALA MAPITIGAMA",
      value: 8324,
    },
    {
      label: "PAHALA MILLATHE",
      value: 8328,
    },
    {
      label: "PALLEGAMA",
      value: 8497,
    },
    {
      label: "PALLEGAMA SOUTH",
      value: 8500,
    },
    {
      label: "PALUGAMA",
      value: 8558,
    },
    {
      label: "PALUGAMA WEST",
      value: 8561,
    },
    {
      label: "PALUPELPITA",
      value: 8577,
    },
    {
      label: "PANANWALA",
      value: 8633,
    },
    {
      label: "PARAKADAMULLA",
      value: 8752,
    },
    {
      label: "PARANGODA",
      value: 8785,
    },
    {
      label: "PARATHAPAKANDA",
      value: 8799,
    },
    {
      label: "PATTIYAGAMA",
      value: 8882,
    },
    {
      label: "PELAHELA",
      value: 8914,
    },
    {
      label: "PELPITA",
      value: 8952,
    },
    {
      label: "PEPILIYAWALA",
      value: 8971,
    },
    {
      label: "PINGAMUWA",
      value: 9096,
    },
    {
      label: "POLHENA",
      value: 9219,
    },
    {
      label: "POOGODA",
      value: 9261,
    },
    {
      label: "PUNCHI MANDAWALA",
      value: 9405,
    },
    {
      label: "PUTUPAGALA",
      value: 9484,
    },
    {
      label: "RADAWANA NORTH",
      value: 9513,
    },
    {
      label: "RADAWANA SOUTH",
      value: 9514,
    },
    {
      label: "RAMBUTANWATTA",
      value: 9613,
    },
    {
      label: "RANWALA",
      value: 9687,
    },
    {
      label: "SAMANABEDDA",
      value: 9888,
    },
    {
      label: "SAMANABEDDA NORTH",
      value: 9889,
    },
    {
      label: "SENASUNGODA",
      value: 10052,
    },
    {
      label: "THALGASWATTA",
      value: 10428,
    },
    {
      label: "THELKEKUNA",
      value: 10579,
    },
    {
      label: "THIMBIRIGAMA",
      value: 10653,
    },
    {
      label: "THITTAPATTARA",
      value: 10716,
    },
    {
      label: "UDAGAMA",
      value: 10891,
    },
    {
      label: "UDAKANAMPELLA",
      value: 10917,
    },
    {
      label: "UDAKANAMPELLA SOUTH",
      value: 10918,
    },
    {
      label: "UDAMAPITIGAMA",
      value: 10939,
    },
    {
      label: "UDAMAPITIGAMA SOUTH",
      value: 10940,
    },
    {
      label: "UDAWELA",
      value: 10979,
    },
    {
      label: "UDUGAMA",
      value: 11009,
    },
    {
      label: "VIHARA KUMBURA",
      value: 11419,
    },
    {
      label: "WAHARAKA",
      value: 11546,
    },
    {
      label: "WALARAMBA",
      value: 11591,
    },
    {
      label: "WALPOLA",
      value: 11647,
    },
    {
      label: "WANALUWAWA NORTH",
      value: 11655,
    },
    {
      label: "WANALUWAWA SOUTH",
      value: 11656,
    },
    {
      label: "WATAWALA",
      value: 11762,
    },
    {
      label: "WATHURUGAMA",
      value: 11785,
    },
    {
      label: "WEDAGAMA",
      value: 11825,
    },
    {
      label: "WELGAMA",
      value: 11938,
    },
    {
      label: "WELIKETIYAWATTA",
      value: 11978,
    },
    {
      label: "WERAHERA",
      value: 12083,
    },
    {
      label: "WERALUGAMPALA",
      value: 12094,
    },
    {
      label: "YAKAMBE",
      value: 12229,
    },
  ],
  "60": [
    {
      label: "ASGANGULA NORTH",
      value: 620,
    },
    {
      label: "ASGANGULA SOUTH",
      value: 621,
    },
    {
      label: "BOPETTA DIDDA",
      value: 1201,
    },
    {
      label: "BULUGAHAPITIYA",
      value: 1308,
    },
    {
      label: "DIVURUMPITIYA",
      value: 1918,
    },
    {
      label: "EHELIYAGODA WATTA",
      value: 2152,
    },
    {
      label: "EREPOLA",
      value: 2333,
    },
    {
      label: "GANEGODA",
      value: 2695,
    },
    {
      label: "GETAHETTA",
      value: 2780,
    },
    {
      label: "HEWAINNA",
      value: 3388,
    },
    {
      label: "HINDURANGALA",
      value: 3435,
    },
    {
      label: "HULADDUWA",
      value: 3577,
    },
    {
      label: "IDDAMALGODA",
      value: 3652,
    },
    {
      label: "KALATUWAWA EAST",
      value: 4251,
    },
    {
      label: "KALATUWAWA WEST",
      value: 4252,
    },
    {
      label: "KARANDANA NORTH",
      value: 4684,
    },
    {
      label: "KARANDANA SOUTH",
      value: 4685,
    },
    {
      label: "KARANDANA WEST",
      value: 4686,
    },
    {
      label: "KENDANGAMUWA",
      value: 5011,
    },
    {
      label: "KENDANGAMUWA IHALAGAMA",
      value: 5012,
    },
    {
      label: "KENDANGAMUWA PAHALAGAMA",
      value: 5013,
    },
    {
      label: "KIRIPORUWA",
      value: 5207,
    },
    {
      label: "MAHARA",
      value: 6344,
    },
    {
      label: "MAHINGODA",
      value: 6414,
    },
    {
      label: "MAPOTA",
      value: 6717,
    },
    {
      label: "MEENNANA",
      value: 7054,
    },
    {
      label: "MITIPOLA",
      value: 7238,
    },
    {
      label: "MIYANAKOLATHENNA",
      value: 7242,
    },
    {
      label: "MORAGALA",
      value: 7311,
    },
    {
      label: "NAKANDALA",
      value: 7608,
    },
    {
      label: "NAPAWALA",
      value: 7685,
    },
    {
      label: "NEDURANA",
      value: 7853,
    },
    {
      label: "NUGADANDA",
      value: 8060,
    },
    {
      label: "PALEEGALA",
      value: 8456,
    },
    {
      label: "PELPITIYA",
      value: 8954,
    },
    {
      label: "SIRISAMANPURA",
      value: 10157,
    },
    {
      label: "THORANAKADA",
      value: 10743,
    },
    {
      label: "UDUMATTA",
      value: 11027,
    },
    {
      label: "UDUWAKA",
      value: 11060,
    },
    {
      label: "VILEGODA",
      value: 11448,
    },
    {
      label: "VILEGODA EAST",
      value: 11449,
    },
    {
      label: "VIYALAGODA",
      value: 11494,
    },
    {
      label: "WALAVITA",
      value: 11601,
    },
    {
      label: "YAKUDAGODA",
      value: 12249,
    },
  ],
  "61": [
    {
      label: "ANDARAWEWA",
      value: 460,
    },
    {
      label: "ATHARAGALLA",
      value: 658,
    },
    {
      label: "BONGAMA",
      value: 1187,
    },
    {
      label: "DIVULGANE",
      value: 1905,
    },
    {
      label: "EHETUWEWA",
      value: 2156,
    },
    {
      label: "ERIYAWA",
      value: 2346,
    },
    {
      label: "ETHINIMOLE",
      value: 2404,
    },
    {
      label: "GALAPITADIGANA",
      value: 2506,
    },
    {
      label: "GURUGODA",
      value: 3005,
    },
    {
      label: "HIDDEWA",
      value: 3407,
    },
    {
      label: "HUNUGALLEWA",
      value: 3602,
    },
    {
      label: "IHALA DIGANA",
      value: 3681,
    },
    {
      label: "IHALA EMBOGAMA",
      value: 3687,
    },
    {
      label: "KADURUWEWA",
      value: 4138,
    },
    {
      label: "KATHNORUWA",
      value: 4782,
    },
    {
      label: "KATUGAMPALAGAMA",
      value: 4830,
    },
    {
      label: "MAHA EMBOGAMA",
      value: 6229,
    },
    {
      label: "MAHA KATHNORUWA",
      value: 6239,
    },
    {
      label: "MAHAWELI THENNA",
      value: 6388,
    },
    {
      label: "MAKULEWA",
      value: 6467,
    },
    {
      label: "MEDINNORUWA",
      value: 6996,
    },
    {
      label: "MUDIYANNEGAMA",
      value: 7396,
    },
    {
      label: "NABADEWA",
      value: 7551,
    },
    {
      label: "NAKOLAGANE",
      value: 7617,
    },
    {
      label: "NITHALAWA",
      value: 8022,
    },
    {
      label: "NITHOGAMA",
      value: 8023,
    },
    {
      label: "POTHANEGAMA",
      value: 9300,
    },
    {
      label: "RATHNADIVULWEWA",
      value: 9734,
    },
    {
      label: "THIMBIRIYAWA",
      value: 10661,
    },
    {
      label: "VEHERAGODAYAYA",
      value: 11371,
    },
    {
      label: "VIKADENIGAMA",
      value: 11433,
    },
    {
      label: "WALATHWEWA",
      value: 11600,
    },
    {
      label: "WEDINIGAMA",
      value: 11835,
    },
    {
      label: "WELIYAWA",
      value: 12018,
    },
    {
      label: "YADDESSAWA",
      value: 12204,
    },
  ],
  "62": [
    {
      label: "ATHARAGALLEWA",
      value: 659,
    },
    {
      label: "ATTANAKADAWALA NORTH",
      value: 678,
    },
    {
      label: "ATTANAKADAWALA SOUTH",
      value: 679,
    },
    {
      label: "ATTANAKADAWALA WEST",
      value: 680,
    },
    {
      label: "BAKAMOONA",
      value: 749,
    },
    {
      label: "DAMANAYAYA",
      value: 1446,
    },
    {
      label: "DIYABEDUMA",
      value: 1923,
    },
    {
      label: "ELAHERA",
      value: 2180,
    },
    {
      label: "GANGEYAYA",
      value: 2714,
    },
    {
      label: "HEERATIYA",
      value: 3301,
    },
    {
      label: "IHAKULUWEWA",
      value: 3664,
    },
    {
      label: "IKIRIWEWA",
      value: 3828,
    },
    {
      label: "KAHATAGAHAPITIYA",
      value: 4166,
    },
    {
      label: "KATUKELIYAWA",
      value: 4839,
    },
    {
      label: "KIRIOYA",
      value: 5204,
    },
    {
      label: "KONDURUWAWA",
      value: 5440,
    },
    {
      label: "KOTTAPITIYA NORTH",
      value: 5617,
    },
    {
      label: "KOTTAPITIYA SOUTH",
      value: 5618,
    },
    {
      label: "KUMARA ELLA",
      value: 5767,
    },
    {
      label: "MADUDAMANA",
      value: 6144,
    },
    {
      label: "MALUWEYAYA",
      value: 6577,
    },
    {
      label: "NIKAPITIYA",
      value: 7952,
    },
    {
      label: "ORUBENDI SIYAMBALAWA",
      value: 8170,
    },
    {
      label: "RADAVIGEOYA",
      value: 9509,
    },
    {
      label: "SARUBIMA",
      value: 9983,
    },
    {
      label: "SEGALA",
      value: 10015,
    },
    {
      label: "SIRIKANDURUYAYA",
      value: 10145,
    },
    {
      label: "SOMILS",
      value: 10226,
    },
  ],
  "64": [
    {
      label: "BALLAKETUWA",
      value: 797,
    },
    {
      label: "BEDDEWELA",
      value: 988,
    },
    {
      label: "DEMODARA",
      value: 1739,
    },
    {
      label: "DODAMGOLLA",
      value: 1956,
    },
    {
      label: "DOWA",
      value: 2048,
    },
    {
      label: "ELLA",
      value: 2219,
    },
    {
      label: "GALTENHENA",
      value: 2622,
    },
    {
      label: "GAWARAWELA",
      value: 2763,
    },
    {
      label: "GOVUSSA",
      value: 2982,
    },
    {
      label: "HALPE",
      value: 3112,
    },
    {
      label: "HEELOYA",
      value: 3278,
    },
    {
      label: "HETTIPOLA",
      value: 3378,
    },
    {
      label: "IDAMEGAMA",
      value: 3641,
    },
    {
      label: "ILUKPELESSA",
      value: 3857,
    },
    {
      label: "KARANDAGOLLA",
      value: 4683,
    },
    {
      label: "KIRINDA",
      value: 5184,
    },
    {
      label: "KITHALELLA",
      value: 5237,
    },
    {
      label: "MADHURAGAMA",
      value: 6128,
    },
    {
      label: "MEDAWELA WEST",
      value: 6971,
    },
    {
      label: "MILLAGAMA",
      value: 7177,
    },
    {
      label: "NAMUNUKULA",
      value: 7665,
    },
    {
      label: "NAVULLA",
      value: 7778,
    },
    {
      label: "NAWELA EAST",
      value: 7824,
    },
    {
      label: "NAWELA WEST",
      value: 7825,
    },
    {
      label: "NEWBERG",
      value: 7934,
    },
    {
      label: "PALLEPERUWA",
      value: 8518,
    },
    {
      label: "PIYARAPANDOWA",
      value: 9175,
    },
    {
      label: "PUPULA",
      value: 9435,
    },
    {
      label: "PUPULA WEST",
      value: 9436,
    },
    {
      label: "RAWANAELLA",
      value: 9757,
    },
    {
      label: "UDUKUMBALWELA",
      value: 11024,
    },
    {
      label: "YAHALEWELA",
      value: 12219,
    },
  ],
  "65": [
    {
      label: "AMBANA",
      value: 357,
    },
    {
      label: "AMBANA NORTH",
      value: 358,
    },
    {
      label: "AMUGODA",
      value: 411,
    },
    {
      label: "ATAKOHOTA",
      value: 646,
    },
    {
      label: "AVITTAWA",
      value: 706,
    },
    {
      label: "BATUWANHENA",
      value: 970,
    },
    {
      label: "DELPONA",
      value: 1705,
    },
    {
      label: "DIGALA NAGAHATHENNA",
      value: 1834,
    },
    {
      label: "DIKHENA",
      value: 1857,
    },
    {
      label: "ELLA",
      value: 2219,
    },
    {
      label: "ELLA THANABADDEGAMA",
      value: 2221,
    },
    {
      label: "ELPITIYA CENTRAL",
      value: 2250,
    },
    {
      label: "ELPITIYA EAST",
      value: 2251,
    },
    {
      label: "ELPITIYA NORTH",
      value: 2252,
    },
    {
      label: "ELPITIYA SOUTH",
      value: 2253,
    },
    {
      label: "ERAMULLA",
      value: 2314,
    },
    {
      label: "GOLUWAMULLA",
      value: 2889,
    },
    {
      label: "GOLUWAMULLA NORTH",
      value: 2890,
    },
    {
      label: "GOLUWAMULLA WEST",
      value: 2891,
    },
    {
      label: "HIMBUTUGODA",
      value: 3425,
    },
    {
      label: "IGALA",
      value: 3658,
    },
    {
      label: "IGALA EAST",
      value: 3659,
    },
    {
      label: "IGALA THALAWA",
      value: 3660,
    },
    {
      label: "IGALA THALAWA EAST",
      value: 3661,
    },
    {
      label: "IHALA OMATTA",
      value: 3770,
    },
    {
      label: "INDIPALEGODA",
      value: 3901,
    },
    {
      label: "KAHADOOWA",
      value: 4142,
    },
    {
      label: "KAHADOOWA SOUTH",
      value: 4143,
    },
    {
      label: "KELLAPATHA",
      value: 4994,
    },
    {
      label: "KETANDOLA UDOVITA",
      value: 5066,
    },
    {
      label: "KUDAGALA KADIRANDOLA",
      value: 5696,
    },
    {
      label: "MAHAWELA ABHAYAPURA",
      value: 6385,
    },
    {
      label: "METIVILIYA",
      value: 7142,
    },
    {
      label: "NAWADAGALA",
      value: 7790,
    },
    {
      label: "OMATTA",
      value: 8150,
    },
    {
      label: "OPATHA",
      value: 8160,
    },
    {
      label: "PAHALA OMATTA",
      value: 8339,
    },
    {
      label: "PELENDAGODA",
      value: 8937,
    },
    {
      label: "PINIKAHANA",
      value: 9100,
    },
    {
      label: "PITUWALA NORTH",
      value: 9166,
    },
    {
      label: "PITUWALA SOUTH",
      value: 9167,
    },
    {
      label: "PITUWALA WEST",
      value: 9168,
    },
    {
      label: "POOJAGALLENA",
      value: 9262,
    },
    {
      label: "REKADAHENA",
      value: 9771,
    },
    {
      label: "SITTARAGODA",
      value: 10176,
    },
    {
      label: "THALAGASPE",
      value: 10345,
    },
    {
      label: "THALAGASPE WEST",
      value: 10346,
    },
    {
      label: "THIBBOTUWAWA",
      value: 10632,
    },
    {
      label: "WALLAMBAGALA",
      value: 11629,
    },
    {
      label: "WALLAMBAGALA NORTH",
      value: 11630,
    },
    {
      label: "WATHURUVILA",
      value: 11786,
    },
  ],
  "66": [
    {
      label: "SUDUGALA",
      value: 10280,
    },
    {
      label: "THIMBOLKETIYA",
      value: 10662,
    },
    {
      label: "THITTAWELPOTHA",
      value: 10720,
    },
    {
      label: "THORAKOLAYAYA",
      value: 10742,
    },
    {
      label: "THUNKAMA",
      value: 10809,
    },
    {
      label: "UDAWALAWA",
      value: 10973,
    },
    {
      label: "UDAWALAWA TRACK 2",
      value: 10974,
    },
    {
      label: "WALALGODA",
      value: 11578,
    },
    {
      label: "YODHAGAMA",
      value: 12320,
    },
    {
      label: "ADALUWA",
      value: 25,
    },
    {
      label: "DIYAPOTA",
      value: 1943,
    },
    {
      label: "EMBILIPITIYA NEW TOWN",
      value: 2276,
    },
    {
      label: "EMBILIPITIYA PALLEGAMA",
      value: 2277,
    },
    {
      label: "EMBILIPITIYA UDAGAMA",
      value: 2278,
    },
    {
      label: "GANGEYAYA",
      value: 2714,
    },
    {
      label: "HAGALA",
      value: 3053,
    },
    {
      label: "HALMILLAKETIYA",
      value: 3093,
    },
    {
      label: "HINGURA",
      value: 3438,
    },
    {
      label: "HINGURA ARA",
      value: 3439,
    },
    {
      label: "JADURA",
      value: 3989,
    },
    {
      label: "JULANGETE",
      value: 4053,
    },
    {
      label: "KALAGEDI ARA",
      value: 4225,
    },
    {
      label: "KETAGAL ARA",
      value: 5051,
    },
    {
      label: "KOLAMBAGE ARA",
      value: 5371,
    },
    {
      label: "KONKATUWA",
      value: 5465,
    },
    {
      label: "KUMBUGODA ARA",
      value: 5793,
    },
    {
      label: "KUTTIGALA",
      value: 5922,
    },
    {
      label: "MADUWANWELA",
      value: 6178,
    },
    {
      label: "MIRISWELPATHA",
      value: 7233,
    },
    {
      label: "MODARAWANA",
      value: 7252,
    },
    {
      label: "MORAKETIYA",
      value: 7333,
    },
    {
      label: "MULENDIYAWALA",
      value: 7427,
    },
    {
      label: "NINDAGAM PELESSA",
      value: 7985,
    },
    {
      label: "PADALANGALA",
      value: 8210,
    },
    {
      label: "PALLEBEDDA",
      value: 8493,
    },
    {
      label: "PANAHADUWA",
      value: 8606,
    },
    {
      label: "PANAMURA",
      value: 8622,
    },
    {
      label: "RANCHAMADAMA",
      value: 9635,
    },
    {
      label: "RATHKARAWWA",
      value: 9708,
    },
    {
      label: "SANKHAPALA",
      value: 9963,
    },
  ],
  "68": [
    {
      label: "ARUMUGATHAN KUDIYIRUPPU 1",
      value: 610,
    },
    {
      label: "ARUMUGATHAN KUDIYIRUPPU 2",
      value: 611,
    },
    {
      label: "CHENKALADY - 2",
      value: 1369,
    },
    {
      label: "CHENKALADY 1",
      value: 1370,
    },
    {
      label: "GEMUNUPURA",
      value: 2776,
    },
    {
      label: "IRALKULAM",
      value: 3955,
    },
    {
      label: "IYANKERNY MUSLIM",
      value: 3987,
    },
    {
      label: "IYANKERNY TAMIL",
      value: 3988,
    },
    {
      label: "KALUWANKERNY 1",
      value: 4384,
    },
    {
      label: "KALUWANKERNY 2",
      value: 4385,
    },
    {
      label: "KARADIYANNARU",
      value: 4606,
    },
    {
      label: "KITHULWEWA",
      value: 5262,
    },
    {
      label: "KODUWAMADU",
      value: 5312,
    },
    {
      label: "KOMMATHURAI EAST",
      value: 5421,
    },
    {
      label: "KOMMATHURAI NORTH",
      value: 5422,
    },
    {
      label: "KOMMATHURAI WEST",
      value: 5423,
    },
    {
      label: "KOPPAVELY",
      value: 5494,
    },
    {
      label: "KUMARAVELIAR KIRAMAM",
      value: 5776,
    },
    {
      label: "MARAPPALAM",
      value: 6750,
    },
    {
      label: "MAVADIVEMBU 1",
      value: 6850,
    },
    {
      label: "MAVADIVEMBU 2",
      value: 6851,
    },
    {
      label: "MAYILAVADDAVAN",
      value: 6900,
    },
    {
      label: "MEERAKERNY",
      value: 7061,
    },
    {
      label: "MICH NAGAR",
      value: 7152,
    },
    {
      label: "MYLAMPAVELY",
      value: 7542,
    },
    {
      label: "PALACHCHOLAI",
      value: 8399,
    },
    {
      label: "PANKUDAHVELY",
      value: 8687,
    },
    {
      label: "PERIYAPULLUMALAI",
      value: 9033,
    },
    {
      label: "RUGAM",
      value: 9828,
    },
    {
      label: "SAVUKKADY",
      value: 9988,
    },
    {
      label: "SITTANDY 1",
      value: 10172,
    },
    {
      label: "SITTANDY 2",
      value: 10173,
    },
    {
      label: "SITTANDY 3",
      value: 10174,
    },
    {
      label: "SITTANDY 4",
      value: 10175,
    },
    {
      label: "THALAVAI",
      value: 10391,
    },
    {
      label: "THANNAMUNAI",
      value: 10516,
    },
    {
      label: "VANTHARUMOOLAI EAST",
      value: 11327,
    },
    {
      label: "VANTHARUMOOLAI WEST",
      value: 11328,
    },
    {
      label: "VEPAVEDDUWAN",
      value: 11395,
    },
  ],
  "69": [
    {
      label: "ELLAINAGAR",
      value: 2228,
    },
    {
      label: "ERAVUR 01",
      value: 2318,
    },
    {
      label: "ERAVUR 01A",
      value: 2319,
    },
    {
      label: "ERAVUR 01B",
      value: 2320,
    },
    {
      label: "ERAVUR 02",
      value: 2321,
    },
    {
      label: "ERAVUR 02A",
      value: 2322,
    },
    {
      label: "ERAVUR 02B",
      value: 2323,
    },
    {
      label: "ERAVUR 02C",
      value: 2324,
    },
    {
      label: "ERAVUR 03",
      value: 2325,
    },
    {
      label: "ERAVUR 03A",
      value: 2326,
    },
    {
      label: "ERAVUR 04",
      value: 2327,
    },
    {
      label: "ERAVUR 05",
      value: 2328,
    },
    {
      label: "ERAVUR 06",
      value: 2329,
    },
    {
      label: "ERAVUR 06A",
      value: 2330,
    },
    {
      label: "ERAVUR 06D",
      value: 2331,
    },
  ],
  "70": [
    {
      label: "21 COLONY EAST",
      value: 6,
    },
    {
      label: "21 COLONY WEST",
      value: 7,
    },
    {
      label: "ALUTH DIVULWEWA",
      value: 244,
    },
    {
      label: "DUTUWEWA",
      value: 2100,
    },
    {
      label: "DUTUWEWA PARANAGAMA",
      value: 2101,
    },
    {
      label: "ELLAWEWA",
      value: 2239,
    },
    {
      label: "GALENBINDUNUWEWA",
      value: 2537,
    },
    {
      label: "GALWADUWAGAMA",
      value: 2637,
    },
    {
      label: "GETALAWA",
      value: 2781,
    },
    {
      label: "GOMARANKALLA",
      value: 2894,
    },
    {
      label: "HIMBUTUGOLLEWA",
      value: 3426,
    },
    {
      label: "HURULU JAYAPURA",
      value: 3629,
    },
    {
      label: "HURULUMEEGAHAPATTIYA",
      value: 3630,
    },
    {
      label: "HURULUNIKAWEWA",
      value: 3631,
    },
    {
      label: "IHALA GALKULAMA",
      value: 3691,
    },
    {
      label: "IHALAGAMA",
      value: 3810,
    },
    {
      label: "ILUKBADAYAGAMA",
      value: 3848,
    },
    {
      label: "JANASIRIGAMA",
      value: 4007,
    },
    {
      label: "KARUWALAGASWEWA",
      value: 4756,
    },
    {
      label: "KATARANPURAYA",
      value: 4771,
    },
    {
      label: "KOKAWEWA",
      value: 5345,
    },
    {
      label: "KONWEWA",
      value: 5471,
    },
    {
      label: "KUDA GALENBINDUNUWEWA",
      value: 5668,
    },
    {
      label: "KUMBUKWEWA",
      value: 5813,
    },
    {
      label: "KURUNEGALA COLONY",
      value: 5893,
    },
    {
      label: "MAILAGASWEWA",
      value: 6420,
    },
    {
      label: "MANANKATTIYA",
      value: 6626,
    },
    {
      label: "MURIYAKADAWALA",
      value: 7484,
    },
    {
      label: "NUWARAELI COLONY",
      value: 8095,
    },
    {
      label: "NUWARAGAM COLONY",
      value: 8097,
    },
    {
      label: "PALUGOLLAGAMA",
      value: 8574,
    },
    {
      label: "PANDIKARAMADUWA",
      value: 8656,
    },
    {
      label: "PERETTUPALA GAMA",
      value: 8991,
    },
    {
      label: "SIVALAKULAMA",
      value: 10178,
    },
    {
      label: "SUNANDA MAWATHA",
      value: 10296,
    },
    {
      label: "THAMMENNAGAMA",
      value: 10490,
    },
    {
      label: "ULPATHGAMA",
      value: 11135,
    },
    {
      label: "UPULDENIYA",
      value: 11189,
    },
    {
      label: "WANNAMKULAMA",
      value: 11682,
    },
    {
      label: "YAKALLA",
      value: 12228,
    },
  ],
  "71": [
    {
      label: "ALUTHWEWA",
      value: 279,
    },
    {
      label: "BAMBARAGASWEWA",
      value: 814,
    },
    {
      label: "BELIGAMUWA",
      value: 1014,
    },
    {
      label: "BELIYAKANDA",
      value: 1022,
    },
    {
      label: "BULANAWEWA",
      value: 1292,
    },
    {
      label: "DAMBAGOLLA",
      value: 1458,
    },
    {
      label: "DAMUNUMULLA",
      value: 1504,
    },
    {
      label: "DANDUBENDIRUPPA",
      value: 1514,
    },
    {
      label: "DANDUYAYA",
      value: 1519,
    },
    {
      label: "DEMBAWA",
      value: 1735,
    },
    {
      label: "DEWAHOOWA COLONY 1",
      value: 1792,
    },
    {
      label: "DEWAHOOWA COLONY 2",
      value: 1793,
    },
    {
      label: "DIVULGASKOTUWA",
      value: 1907,
    },
    {
      label: "ELAMALPOTHA",
      value: 2187,
    },
    {
      label: "GALAPAMULA",
      value: 2504,
    },
    {
      label: "GALEWELA TOWN",
      value: 2540,
    },
    {
      label: "GALGODAYAYA",
      value: 2555,
    },
    {
      label: "HATHADUKKUWA",
      value: 3234,
    },
    {
      label: "HEWANWELA",
      value: 3392,
    },
    {
      label: "HOMBAWA",
      value: 3517,
    },
    {
      label: "IBBANKATUWA",
      value: 3634,
    },
    {
      label: "IHALA BAMBAWA",
      value: 3671,
    },
    {
      label: "KENDANGAMUWA",
      value: 5011,
    },
    {
      label: "KOSGAHAHINNA",
      value: 5527,
    },
    {
      label: "KOSPOTHA",
      value: 5545,
    },
    {
      label: "KUMBUKGOLLA",
      value: 5802,
    },
    {
      label: "LENAWALA",
      value: 5988,
    },
    {
      label: "MADIPOLA",
      value: 6137,
    },
    {
      label: "MAKULUGASWEWA",
      value: 6473,
    },
    {
      label: "MEDABEDDA NORTH",
      value: 6930,
    },
    {
      label: "MEDABEDDA SOUTH",
      value: 6931,
    },
    {
      label: "MEEWALAPATHAHA",
      value: 7080,
    },
    {
      label: "MORAGOLLA",
      value: 7321,
    },
    {
      label: "NABADAGAHAWATTA",
      value: 7547,
    },
    {
      label: "NILAGAMA",
      value: 7968,
    },
    {
      label: "PAHALA BAMBAWA",
      value: 8239,
    },
    {
      label: "PAHALA DIGGALA",
      value: 8250,
    },
    {
      label: "PAHALA WEWA",
      value: 8372,
    },
    {
      label: "PALAPATHWALA",
      value: 8435,
    },
    {
      label: "PATHKOLAGOLLA",
      value: 8856,
    },
    {
      label: "PATTIWELA",
      value: 8876,
    },
    {
      label: "PIBIDUNUGAMA",
      value: 9062,
    },
    {
      label: "PIHILYAYA",
      value: 9068,
    },
    {
      label: "RALALEROTAWEWA",
      value: 9582,
    },
    {
      label: "RANWEDIYAWA",
      value: 9690,
    },
    {
      label: "SILWATHGAMA",
      value: 10105,
    },
    {
      label: "SIYAMBALAGAHAWELA",
      value: 10187,
    },
    {
      label: "THALAKIRIYAGAMA",
      value: 10359,
    },
    {
      label: "THENNAKONPURA",
      value: 10602,
    },
    {
      label: "WAHAKOTTE",
      value: 11537,
    },
    {
      label: "WALASWEWA",
      value: 11598,
    },
    {
      label: "WEGODAPOLA",
      value: 11884,
    },
    {
      label: "WETAKOLUWEWA",
      value: 12119,
    },
    {
      label: "YATIGALPOTTA",
      value: 12290,
    },
    {
      label: "YATIWEHERA",
      value: 12303,
    },
  ],
  "72": [
    {
      label: "ALUTHHERATHGAMA",
      value: 269,
    },
    {
      label: "BANDARAGAMA",
      value: 850,
    },
    {
      label: "BUDURUWAKANDA",
      value: 1289,
    },
    {
      label: "BULNEWA",
      value: 1304,
    },
    {
      label: "DIVULLEWA",
      value: 1913,
    },
    {
      label: "ETHINIWETUNUGALA",
      value: 2405,
    },
    {
      label: "GALGAMUWA TOWN",
      value: 2547,
    },
    {
      label: "GANANGAMUWA",
      value: 2679,
    },
    {
      label: "GANEDIVULWEWA",
      value: 2688,
    },
    {
      label: "GEMUNUPURA",
      value: 2776,
    },
    {
      label: "IHALA NANNERIYA",
      value: 3764,
    },
    {
      label: "IHALA PALUKANDEWA",
      value: 3772,
    },
    {
      label: "IHALAGAMA",
      value: 3810,
    },
    {
      label: "JAYABIMA",
      value: 4018,
    },
    {
      label: "JAYALANDA",
      value: 4021,
    },
    {
      label: "KALLANCHIYA",
      value: 4275,
    },
    {
      label: "KARUWALAGASWEWA",
      value: 4756,
    },
    {
      label: "KATTAKADUWA",
      value: 4797,
    },
    {
      label: "KATUWEWA",
      value: 4879,
    },
    {
      label: "KELEGAMA",
      value: 4977,
    },
    {
      label: "KEPELA",
      value: 5020,
    },
    {
      label: "KOHOMBANKULAMA",
      value: 5331,
    },
    {
      label: "KOKWEWA",
      value: 5368,
    },
    {
      label: "KONWEWA",
      value: 5471,
    },
    {
      label: "KUMBUKWEWA",
      value: 5813,
    },
    {
      label: "KURUNDANKULAMA",
      value: 5882,
    },
    {
      label: "KURUNDEWA",
      value: 5883,
    },
    {
      label: "LASSANAGAMA",
      value: 5961,
    },
    {
      label: "MADADOMBE",
      value: 6076,
    },
    {
      label: "MADAWACHCHIYA",
      value: 6101,
    },
    {
      label: "MAHAGALGAMUWA",
      value: 6280,
    },
    {
      label: "MAHAGALKADAWALA",
      value: 6281,
    },
    {
      label: "MAHANANNERIYA NORTH",
      value: 6333,
    },
    {
      label: "MAHANANNERIYA SOUTH",
      value: 6334,
    },
    {
      label: "MEDAGAMA",
      value: 6933,
    },
    {
      label: "MEDAGAMA EAST",
      value: 6934,
    },
    {
      label: "MEEGALEWA",
      value: 7034,
    },
    {
      label: "MOLEWA",
      value: 7265,
    },
    {
      label: "MONNANKULAMA",
      value: 7281,
    },
    {
      label: "MOTTAPETTEWA",
      value: 7374,
    },
    {
      label: "NAHETTIKULAMA",
      value: 7592,
    },
    {
      label: "NALLACHCHIYA",
      value: 7630,
    },
    {
      label: "NOCHCHIYA",
      value: 8053,
    },
    {
      label: "PADAVIGAMA",
      value: 8211,
    },
    {
      label: "PADIPANCHAWA",
      value: 8223,
    },
    {
      label: "PAHALA PALUKANDEWA",
      value: 8342,
    },
    {
      label: "PALUGOLLA",
      value: 8571,
    },
    {
      label: "PALUKADAWALA",
      value: 8575,
    },
    {
      label: "PEDDOGAMA",
      value: 8904,
    },
    {
      label: "POROTTUKADAWALA",
      value: 9295,
    },
    {
      label: "SENARATHGAMA",
      value: 10047,
    },
    {
      label: "SIYAMBALEWA",
      value: 10216,
    },
    {
      label: "THISSAPURA",
      value: 10704,
    },
    {
      label: "THORAWA",
      value: 10747,
    },
    {
      label: "TRACK 4 USGALA",
      value: 10855,
    },
    {
      label: "ULPATHAGAMA",
      value: 11132,
    },
    {
      label: "USGALA SIYAMBALANGAMUWA",
      value: 11246,
    },
    {
      label: "WADUGAMA",
      value: 11515,
    },
    {
      label: "WALAGAMBAPURA",
      value: 11562,
    },
    {
      label: "WALASWEWA",
      value: 11598,
    },
    {
      label: "WEGEDARA",
      value: 11880,
    },
    {
      label: "WEWARANAWETIYA",
      value: 12147,
    },
  ],
  "73": [
    {
      label: "ALAWALA",
      value: 190,
    },
    {
      label: "AMPE",
      value: 398,
    },
    {
      label: "ARANDARA",
      value: 573,
    },
    {
      label: "ARUGGAMMANA",
      value: 606,
    },
    {
      label: "ASIDENIYA",
      value: 632,
    },
    {
      label: "ATALA",
      value: 647,
    },
    {
      label: "ATUGODA",
      value: 696,
    },
    {
      label: "BALLAPANA PATHABAGE",
      value: 798,
    },
    {
      label: "BALLAPANA UDABAGE",
      value: 799,
    },
    {
      label: "BAMBARAGAMA",
      value: 810,
    },
    {
      label: "BATUWATTA",
      value: 971,
    },
    {
      label: "BISOWELA",
      value: 1096,
    },
    {
      label: "BOYAGODA",
      value: 1265,
    },
    {
      label: "DAMUNUPOLA",
      value: 1505,
    },
    {
      label: "DEMATANPITIYA",
      value: 1726,
    },
    {
      label: "DEWALEGAMA",
      value: 1799,
    },
    {
      label: "EDURAPOTHA EAST",
      value: 2120,
    },
    {
      label: "EDURAPOTHA WEST",
      value: 2121,
    },
    {
      label: "GALIGAMUWA",
      value: 2558,
    },
    {
      label: "GODAPOLA",
      value: 2861,
    },
    {
      label: "HAPUDENIYA",
      value: 3189,
    },
    {
      label: "HATHNAGODA",
      value: 3250,
    },
    {
      label: "HATHNAPITIYA",
      value: 3251,
    },
    {
      label: "HELAMADA",
      value: 3318,
    },
    {
      label: "HOLOMBUWA",
      value: 3507,
    },
    {
      label: "IMBULGALA",
      value: 3878,
    },
    {
      label: "JEEWANA",
      value: 4044,
    },
    {
      label: "KANDEGEDARA",
      value: 4492,
    },
    {
      label: "KARAGALA",
      value: 4616,
    },
    {
      label: "KINIGAMA",
      value: 5114,
    },
    {
      label: "KIRIDANA",
      value: 5151,
    },
    {
      label: "KOBBEWALA",
      value: 5287,
    },
    {
      label: "KURUNEGODA",
      value: 5901,
    },
    {
      label: "LAHUPANA",
      value: 5940,
    },
    {
      label: "MAKUDDALA",
      value: 6462,
    },
    {
      label: "MAYFIELD",
      value: 6899,
    },
    {
      label: "NABERIYAWA",
      value: 7552,
    },
    {
      label: "NADENIYA",
      value: 7560,
    },
    {
      label: "NARANGODA",
      value: 7706,
    },
    {
      label: "NAWAGAMUWA",
      value: 7796,
    },
    {
      label: "PALAPOLUWA",
      value: 8436,
    },
    {
      label: "PANAKAWA",
      value: 8612,
    },
    {
      label: "PEHERAMBE",
      value: 8912,
    },
    {
      label: "PINDENIYA",
      value: 9094,
    },
    {
      label: "POTHUKOLADENIYA",
      value: 9310,
    },
    {
      label: "RENAPANA",
      value: 9781,
    },
    {
      label: "RUGGAHATHENNA",
      value: 9829,
    },
    {
      label: "UDUGAMA",
      value: 11009,
    },
    {
      label: "WALAGAMA",
      value: 11560,
    },
    {
      label: "WERAGODA",
      value: 12078,
    },
    {
      label: "YATTOGODA",
      value: 12314,
    },
  ],
  "75": [
    {
      label: "BULNEWA",
      value: 1304,
    },
    {
      label: "GALNEWA GAMA",
      value: 2601,
    },
    {
      label: "GALNEWA TOWN",
      value: 2602,
    },
    {
      label: "HADUNGAMA",
      value: 3050,
    },
    {
      label: "HELABODU GAMA",
      value: 3314,
    },
    {
      label: "IHALA KALANKUTTIYA",
      value: 3712,
    },
    {
      label: "KALA - MEDAWACHCHIYA",
      value: 4220,
    },
    {
      label: "KALLANCHIYA",
      value: 4275,
    },
    {
      label: "KANDE GAMA",
      value: 4488,
    },
    {
      label: "KANDULE GAMA",
      value: 4518,
    },
    {
      label: "KANDULUGAMUWA",
      value: 4519,
    },
    {
      label: "KARUWALAGASWEWA",
      value: 4756,
    },
    {
      label: "KATTARAGAMA",
      value: 4818,
    },
    {
      label: "KUMBUKWEWA",
      value: 5813,
    },
    {
      label: "LOLUGASWEWA",
      value: 6036,
    },
    {
      label: "MALBALIGALA",
      value: 6510,
    },
    {
      label: "MIDELLEWA",
      value: 7163,
    },
    {
      label: "MUSNAWA",
      value: 7507,
    },
    {
      label: "NAMALGAMUWA",
      value: 7646,
    },
    {
      label: "NEGAMA",
      value: 7872,
    },
    {
      label: "OBADAYAGAMA",
      value: 8101,
    },
    {
      label: "OTUNUPELANDIGAMA",
      value: 8188,
    },
    {
      label: "PAHALA KALANKUTTIYA",
      value: 8288,
    },
    {
      label: "PITIYE YAYA",
      value: 9161,
    },
    {
      label: "SIYAMBALANGAMUWA SOUTH",
      value: 10206,
    },
    {
      label: "SIYAMBALEWA",
      value: 10216,
    },
    {
      label: "THORANE GAMA",
      value: 10744,
    },
    {
      label: "USGALA HALMILLAWEWA",
      value: 11245,
    },
    {
      label: "VERUNKULAMA",
      value: 11400,
    },
    {
      label: "WALASWEWA",
      value: 11598,
    },
  ],
  "76": [
    {
      label: "AKARAVITA",
      value: 95,
    },
    {
      label: "ALUTHGAMA BOGAMUWA NORTH",
      value: 260,
    },
    {
      label: "ALUTHGAMA BOGAMUWA SOUTH",
      value: 261,
    },
    {
      label: "AMBANVITA",
      value: 365,
    },
    {
      label: "AMUNUGODA NORTH",
      value: 421,
    },
    {
      label: "AMUNUGODA SOUTH",
      value: 422,
    },
    {
      label: "BADUWATHUGODA",
      value: 744,
    },
    {
      label: "BELUMMAHARA",
      value: 1034,
    },
    {
      label: "BENDIYAMULLA EAST",
      value: 1041,
    },
    {
      label: "BENDIYAMULLA NORTH",
      value: 1042,
    },
    {
      label: "BENDIYAMULLA WEST",
      value: 1043,
    },
    {
      label: "BOLLATHA NORTH",
      value: 1163,
    },
    {
      label: "BOLLATHA SOUTH",
      value: 1164,
    },
    {
      label: "BOLLATHA WEST",
      value: 1165,
    },
    {
      label: "BORALIYAWATHA",
      value: 1227,
    },
    {
      label: "BULUGAHAGODA EAST",
      value: 1306,
    },
    {
      label: "BULUGAHAGODA WEST",
      value: 1307,
    },
    {
      label: "EMBARALUWA NORTH 1",
      value: 2270,
    },
    {
      label: "EMBARALUWA NORTH 2",
      value: 2271,
    },
    {
      label: "EMBARALUWA SOUTH 1",
      value: 2272,
    },
    {
      label: "EMBARALUWA SOUTH 2",
      value: 2273,
    },
    {
      label: "GALAHITIYAWA EAST",
      value: 2497,
    },
    {
      label: "GALAHITIYAWA NORTH",
      value: 2498,
    },
    {
      label: "GALAHITIYAWA SOUTH",
      value: 2499,
    },
    {
      label: "GALLOLUWA",
      value: 2591,
    },
    {
      label: "GALTHOTAMULLA",
      value: 2626,
    },
    {
      label: "GAMPAHA ALUTHGAMA EAST",
      value: 2670,
    },
    {
      label: "GAMPAHA ALUTHGAMA NORTH",
      value: 2671,
    },
    {
      label: "GAMPAHA ALUTHGAMA WEST",
      value: 2672,
    },
    {
      label: "GANEMULLA NORTH",
      value: 2699,
    },
    {
      label: "GANEMULLA SOUTH",
      value: 2700,
    },
    {
      label: "GODAGEDARA",
      value: 2844,
    },
    {
      label: "GONAGAHA I",
      value: 2904,
    },
    {
      label: "GONAGAHA II",
      value: 2905,
    },
    {
      label: "HENARATHGODA",
      value: 3338,
    },
    {
      label: "HORAGOLLA NORTH",
      value: 3538,
    },
    {
      label: "HORAGOLLA SOUTH",
      value: 3539,
    },
    {
      label: "IHALA IMBULGODA NORTH",
      value: 3707,
    },
    {
      label: "IHALA IMBULGODA SOUTH",
      value: 3708,
    },
    {
      label: "IHALA YAGODA NORTH",
      value: 3806,
    },
    {
      label: "IHALA YAGODA SOUTH",
      value: 3807,
    },
    {
      label: "IHALAGAMA EAST",
      value: 3811,
    },
    {
      label: "IHALAGAMA WEST",
      value: 3814,
    },
    {
      label: "INDIGOLLA",
      value: 3897,
    },
    {
      label: "KARANEKAMULLA",
      value: 4698,
    },
    {
      label: "KATUWALAMULLA NORTH",
      value: 4862,
    },
    {
      label: "KATUWALAMULLA SOUTH",
      value: 4863,
    },
    {
      label: "KESELWATHUGODA NORTH",
      value: 5047,
    },
    {
      label: "KESELWATHUGODA SOUTH",
      value: 5048,
    },
    {
      label: "KIDAGAMMULLA",
      value: 5087,
    },
    {
      label: "KIRINDIVITA",
      value: 5196,
    },
    {
      label: "KOSOVITA",
      value: 5543,
    },
    {
      label: "KOSSINNA EAST",
      value: 5547,
    },
    {
      label: "KOSSINNA WEST 1",
      value: 5548,
    },
    {
      label: "KOSSINNA WEST 2",
      value: 5549,
    },
    {
      label: "KUDABOLLATHA",
      value: 5695,
    },
    {
      label: "MABIMA",
      value: 6061,
    },
    {
      label: "MAHENA",
      value: 6398,
    },
    {
      label: "MAHIPALAGODA",
      value: 6415,
    },
    {
      label: "MAKEVITA NORTH",
      value: 6451,
    },
    {
      label: "MAKEVITA SOUTH",
      value: 6452,
    },
    {
      label: "MAKILANGAMUWA",
      value: 6453,
    },
    {
      label: "MEDAGAMA I",
      value: 6935,
    },
    {
      label: "MEDAGAMA II",
      value: 6936,
    },
    {
      label: "MEDAGAMA III",
      value: 6937,
    },
    {
      label: "MEDAGAMA IV",
      value: 6938,
    },
    {
      label: "MIDELLAVITA",
      value: 7160,
    },
    {
      label: "MORAGODA 1",
      value: 7319,
    },
    {
      label: "MORAGODA 2",
      value: 7320,
    },
    {
      label: "MORENNA",
      value: 7364,
    },
    {
      label: "MUDUNGODA NORTH",
      value: 7404,
    },
    {
      label: "MUDUNGODA SOUTH",
      value: 7405,
    },
    {
      label: "MUDUNGODA WEST",
      value: 7406,
    },
    {
      label: "NEDUNA",
      value: 7845,
    },
    {
      label: "NEDUNGAMUWA",
      value: 7846,
    },
    {
      label: "ORUTHOTA NORTH",
      value: 8175,
    },
    {
      label: "ORUTHOTA SOUTH",
      value: 8176,
    },
    {
      label: "PAHALA IMBULGODA EAST",
      value: 8280,
    },
    {
      label: "PAHALA IMBULGODA SOUTH",
      value: 8281,
    },
    {
      label: "PAHALA IMBULGODA WEST",
      value: 8282,
    },
    {
      label: "PAHALA YAGODA",
      value: 8374,
    },
    {
      label: "PAHALAGAMA",
      value: 8378,
    },
    {
      label: "PARAKANDENIYA",
      value: 8754,
    },
    {
      label: "PARAKANDENIYA NORTH 1",
      value: 8755,
    },
    {
      label: "PARAKANDENIYA NORTH 2",
      value: 8756,
    },
    {
      label: "PEPOLGASDENIYA",
      value: 8973,
    },
    {
      label: "RATHMALAVITA",
      value: 9715,
    },
    {
      label: "RATHUPASWALA",
      value: 9745,
    },
    {
      label: "THIBBOTUGODA",
      value: 10631,
    },
    {
      label: "THITTALAPITIGODA",
      value: 10713,
    },
    {
      label: "WEEDIYAWATTA",
      value: 11838,
    },
    {
      label: "WELIKADA",
      value: 11965,
    },
    {
      label: "WELIWERIYA EAST",
      value: 12012,
    },
    {
      label: "WELIWERIYA NORTH",
      value: 12013,
    },
    {
      label: "WELIWERIYA SOUTH",
      value: 12014,
    },
    {
      label: "WELIWERIYA WEST",
      value: 12015,
    },
    {
      label: "WEWEL AGARA",
      value: 12154,
    },
    {
      label: "YAKKALA EAST",
      value: 12238,
    },
    {
      label: "YAKKALA NORTH",
      value: 12239,
    },
    {
      label: "YAKKALA SOUTH",
      value: 12240,
    },
    {
      label: "YAKKALA WEST",
      value: 12241,
    },
  ],
  "77": [
    {
      label: "ALUTHGAMA",
      value: 259,
    },
    {
      label: "ARANKELE",
      value: 578,
    },
    {
      label: "BORALUWA",
      value: 1231,
    },
    {
      label: "DIGANKONWEWA",
      value: 1842,
    },
    {
      label: "DIVULWEWA",
      value: 1916,
    },
    {
      label: "HETTIGAMA",
      value: 3373,
    },
    {
      label: "HIDAWEWA",
      value: 3401,
    },
    {
      label: "HIRIPITIYA",
      value: 3474,
    },
    {
      label: "HUNUPOLA",
      value: 3614,
    },
    {
      label: "JAHAPAGAMA",
      value: 3993,
    },
    {
      label: "KALATUWAGAMA",
      value: 4249,
    },
    {
      label: "KANAWA",
      value: 4445,
    },
    {
      label: "KEKULAWALA",
      value: 4965,
    },
    {
      label: "KIRINDIWELMADA/ GALAGEDARA",
      value: 5199,
    },
    {
      label: "KUDA UYANGALLA",
      value: 5686,
    },
    {
      label: "KUMBUKGETE",
      value: 5801,
    },
    {
      label: "MAKULMADE",
      value: 6470,
    },
    {
      label: "MAKULWEWA",
      value: 6475,
    },
    {
      label: "MALAGAMUWA",
      value: 6486,
    },
    {
      label: "MORAGOLLA",
      value: 7321,
    },
    {
      label: "NEERAVIYA",
      value: 7866,
    },
    {
      label: "NELAWA",
      value: 7880,
    },
    {
      label: "NELUMPATHGAMA",
      value: 7899,
    },
    {
      label: "NERIYAWA",
      value: 7916,
    },
    {
      label: "NIKADALUPOTHA",
      value: 7946,
    },
    {
      label: "NIKAGOLLA",
      value: 7948,
    },
    {
      label: "OTHUWELA",
      value: 8185,
    },
    {
      label: "PANNAWA",
      value: 8704,
    },
    {
      label: "POTHUVILA",
      value: 9322,
    },
    {
      label: "POTHUWAGONNA",
      value: 9325,
    },
    {
      label: "SANTHANAGAMA",
      value: 9966,
    },
    {
      label: "SEERADUNNA",
      value: 10008,
    },
    {
      label: "SEERANGODA",
      value: 10009,
    },
    {
      label: "THAMBAGALLA",
      value: 10459,
    },
    {
      label: "THANTHIRIGAMA",
      value: 10523,
    },
    {
      label: "THIMBIRIWEWA",
      value: 10659,
    },
    {
      label: "THITTAWELGALA",
      value: 10717,
    },
    {
      label: "THITTAWELLA",
      value: 10719,
    },
    {
      label: "UYANGALLA",
      value: 11275,
    },
    {
      label: "WADUWAWA",
      value: 11524,
    },
    {
      label: "WEGOLLA",
      value: 11885,
    },
    {
      label: "WERAGALA",
      value: 12074,
    },
  ],
  "78": [
    {
      label: "ALUGOLLA",
      value: 237,
    },
    {
      label: "ETHGALA EAST",
      value: 2396,
    },
    {
      label: "ETHGALA NORTH",
      value: 2397,
    },
    {
      label: "ETHGALA WEST",
      value: 2399,
    },
    {
      label: "GALPAYA",
      value: 2611,
    },
    {
      label: "GAMPOLAWELA",
      value: 2677,
    },
    {
      label: "GEMUNUPURA",
      value: 2776,
    },
    {
      label: "GIRAULLA",
      value: 2823,
    },
    {
      label: "HERAKOLA",
      value: 3366,
    },
    {
      label: "KARAGALA",
      value: 4616,
    },
    {
      label: "KELLY GORUP",
      value: 4995,
    },
    {
      label: "KOHOWALA",
      value: 5336,
    },
    {
      label: "MALIGAPURANA",
      value: 6534,
    },
    {
      label: "MALWATTAGAMA",
      value: 6587,
    },
    {
      label: "MIYANAGOLLA",
      value: 7240,
    },
    {
      label: "PATITHALAWA",
      value: 8857,
    },
    {
      label: "PELLAPITIYA NORTH",
      value: 8948,
    },
    {
      label: "PELLAPITIYA SOUTH",
      value: 8949,
    },
    {
      label: "PITAKANDA",
      value: 9129,
    },
    {
      label: "POLMALAGAMA",
      value: 9229,
    },
    {
      label: "RAKSHAWA",
      value: 9578,
    },
    {
      label: "SINHAPURA",
      value: 10118,
    },
    {
      label: "THEMBILIGALA",
      value: 10589,
    },
    {
      label: "UDAGAMA",
      value: 10891,
    },
    {
      label: "UDAHENTHENNA",
      value: 10911,
    },
    {
      label: "UDUWELLA",
      value: 11078,
    },
    {
      label: "ULAPANE NORTH",
      value: 11116,
    },
    {
      label: "ULAPANE SOUTH",
      value: 11117,
    },
    {
      label: "WALLAHAGODA",
      value: 11627,
    },
    {
      label: "WETAKEDENIYA",
      value: 12115,
    },
    {
      label: "YATAPANA",
      value: 12277,
    },
  ],
  "79": [
    {
      label: "ABHAYAPURA",
      value: 16,
    },
    {
      label: "ALIYAWETUNAWEWA",
      value: 220,
    },
    {
      label: "BAMBARE",
      value: 820,
    },
    {
      label: "DAMSOPURA",
      value: 1498,
    },
    {
      label: "GAMPOLA",
      value: 2673,
    },
    {
      label: "GURULUPITIGAMA",
      value: 3014,
    },
    {
      label: "HALMILLAGALA",
      value: 3092,
    },
    {
      label: "HASTHIRAJAPURA",
      value: 3232,
    },
    {
      label: "HETTIARACHCHIGAMA",
      value: 3372,
    },
    {
      label: "IHALA GIRIBAWA",
      value: 3695,
    },
    {
      label: "IHALA MARADANKADAWALA",
      value: 3754,
    },
    {
      label: "JAYANTHIPURA",
      value: 4026,
    },
    {
      label: "KOKMADUWA",
      value: 5353,
    },
    {
      label: "MADIGE",
      value: 6129,
    },
    {
      label: "MAHASENPURA",
      value: 6365,
    },
    {
      label: "MAILEWA",
      value: 6427,
    },
    {
      label: "ORUGALA",
      value: 8172,
    },
    {
      label: "PAHALA GIRIBAWA",
      value: 8268,
    },
    {
      label: "PATHANE WEWA",
      value: 8834,
    },
    {
      label: "PERAKUMPURA",
      value: 8977,
    },
    {
      label: "POTHANA",
      value: 9299,
    },
    {
      label: "SANDAGALA PALATHA",
      value: 9925,
    },
    {
      label: "SANGABOPURA",
      value: 9945,
    },
    {
      label: "SANGAPPALAYA",
      value: 9949,
    },
    {
      label: "SERASUMGALA",
      value: 10065,
    },
    {
      label: "SOLEPURA",
      value: 10223,
    },
    {
      label: "SOLEWEWA",
      value: 10224,
    },
    {
      label: "THAMBUTTA",
      value: 10486,
    },
    {
      label: "THAMMENNAWA",
      value: 10493,
    },
    {
      label: "THAMMITAGAMA",
      value: 10498,
    },
    {
      label: "THIMBIRIPOKUNA",
      value: 10657,
    },
    {
      label: "WANNIKUDAWEWA",
      value: 11686,
    },
    {
      label: "WARAWEWA",
      value: 11728,
    },
    {
      label: "WEERAPOKUNA",
      value: 11866,
    },
    {
      label: "WERAGALA",
      value: 12074,
    },
  ],
  "80": [
    {
      label: "ALPITIYA",
      value: 230,
    },
    {
      label: "BALAVINNA EAST",
      value: 788,
    },
    {
      label: "BALAVINNA NORTH",
      value: 789,
    },
    {
      label: "BALAVINNA WEST",
      value: 790,
    },
    {
      label: "BAMBARAGASTHENNA",
      value: 813,
    },
    {
      label: "BIBILEGAMA EAST",
      value: 1079,
    },
    {
      label: "BIBILEGAMA WEST",
      value: 1080,
    },
    {
      label: "BULUWANA",
      value: 1317,
    },
    {
      label: "DAMBAVINNA",
      value: 1465,
    },
    {
      label: "DIMBULWALA",
      value: 1882,
    },
    {
      label: "EMATIYAGODA",
      value: 2265,
    },
    {
      label: "GALAHITIYA",
      value: 2490,
    },
    {
      label: "GODAKAWELA",
      value: 2847,
    },
    {
      label: "HAPURUDENIYA",
      value: 3205,
    },
    {
      label: "HIRAMADAGAMA",
      value: 3463,
    },
    {
      label: "HORAMULA",
      value: 3545,
    },
    {
      label: "KAPUHENTHENNA",
      value: 4596,
    },
    {
      label: "KAVUDUWAWA",
      value: 4893,
    },
    {
      label: "KOMPITIYA",
      value: 5424,
    },
    {
      label: "KOTAKETHANA",
      value: 5572,
    },
    {
      label: "KOTTALA",
      value: 5612,
    },
    {
      label: "MADAMPE NORTH",
      value: 6088,
    },
    {
      label: "MADAMPE SOUTH",
      value: 6089,
    },
    {
      label: "MAHAGAMA EAST",
      value: 6284,
    },
    {
      label: "MAHAGAMA WEST",
      value: 6287,
    },
    {
      label: "MAKANDURA",
      value: 6442,
    },
    {
      label: "MALWATTA",
      value: 6586,
    },
    {
      label: "MARAGALA",
      value: 6727,
    },
    {
      label: "MASIMBULA",
      value: 6789,
    },
    {
      label: "MAWATHALANDA",
      value: 6883,
    },
    {
      label: "MEDDEGAMA",
      value: 6980,
    },
    {
      label: "NIYANGAMA",
      value: 8048,
    },
    {
      label: "PANAWALA",
      value: 8643,
    },
    {
      label: "RAKWANA NORTH",
      value: 9579,
    },
    {
      label: "RAKWANA SOUTH",
      value: 9580,
    },
    {
      label: "RAKWANA TOWN",
      value: 9581,
    },
    {
      label: "RIDIVITA",
      value: 9795,
    },
    {
      label: "THAMBAGAMUWA EAST",
      value: 10462,
    },
    {
      label: "THAMBAGAMUWA WEST",
      value: 10463,
    },
    {
      label: "WARAYAYA",
      value: 11729,
    },
    {
      label: "WERAHERA EAST",
      value: 12084,
    },
    {
      label: "WERAHERA WEST",
      value: 12087,
    },
    {
      label: "WERALUGAHAMULA",
      value: 12092,
    },
    {
      label: "YAHALAWELA",
      value: 12218,
    },
  ],
  "81": [
    {
      label: "BAKMEEGAMA",
      value: 754,
    },
    {
      label: "GALKADAWALA",
      value: 2560,
    },
    {
      label: "GOMARANKADAWALA",
      value: 2893,
    },
    {
      label: "KALYANAPURA",
      value: 4394,
    },
    {
      label: "KANDAMALAWA",
      value: 4463,
    },
    {
      label: "KIVULAKADAWALA",
      value: 5273,
    },
    {
      label: "MADAWACHCHIYA",
      value: 6101,
    },
    {
      label: "MAILAWEWA",
      value: 6426,
    },
    {
      label: "PAMBURUGASWEWA",
      value: 8589,
    },
    {
      label: "PULIKANDIKULAMA",
      value: 9371,
    },
  ],
  "83": [
    {
      label: "AHANGAMA CENTRAL",
      value: 71,
    },
    {
      label: "AHANGAMA EAST",
      value: 72,
    },
    {
      label: "AHANGAMA NAKANDA",
      value: 73,
    },
    {
      label: "AHANGAMGODA",
      value: 74,
    },
    {
      label: "ALAWATHUTHISGODA",
      value: 197,
    },
    {
      label: "ANNASIWATHUGODA",
      value: 519,
    },
    {
      label: "ATADAHEWATHUGODA",
      value: 644,
    },
    {
      label: "ATTARAGODA",
      value: 688,
    },
    {
      label: "BOGAHAMULUGODA",
      value: 1126,
    },
    {
      label: "BONAVISTAWA",
      value: 1184,
    },
    {
      label: "DALAWELLA",
      value: 1423,
    },
    {
      label: "DANDUHELA",
      value: 1516,
    },
    {
      label: "DIGAREDDA",
      value: 1847,
    },
    {
      label: "DODAMPE",
      value: 1966,
    },
    {
      label: "DOMMANNEGODA",
      value: 2015,
    },
    {
      label: "GODAWATTA",
      value: 2871,
    },
    {
      label: "GOVIYAPANA",
      value: 2981,
    },
    {
      label: "HALLOLUWAGODA",
      value: 3091,
    },
    {
      label: "HANDUGODA",
      value: 3162,
    },
    {
      label: "HAPPAWANA",
      value: 3186,
    },
    {
      label: "HARUMALGODA CENTRAL",
      value: 3227,
    },
    {
      label: "HARUMALGODA EAST",
      value: 3228,
    },
    {
      label: "HARUMALGODA WEST",
      value: 3229,
    },
    {
      label: "HEENATIGALA SOUTH",
      value: 3281,
    },
    {
      label: "KAHAWATHUGODA",
      value: 4191,
    },
    {
      label: "KAHAWENNAGAMA",
      value: 4196,
    },
    {
      label: "KALAHEGODA",
      value: 4230,
    },
    {
      label: "KALAPUWA",
      value: 4247,
    },
    {
      label: "KARANDUGODA",
      value: 4694,
    },
    {
      label: "KATHALUWA CENTRAL",
      value: 4775,
    },
    {
      label: "KATHALUWA EAST",
      value: 4776,
    },
    {
      label: "KATHALUWA WEST",
      value: 4777,
    },
    {
      label: "KATUKURUNDA",
      value: 4845,
    },
    {
      label: "KOGGALA",
      value: 5313,
    },
    {
      label: "KOGGALA ATHIREKA I",
      value: 5314,
    },
    {
      label: "KOGGALA ATHIREKA II",
      value: 5315,
    },
    {
      label: "KORAHEDIGODA",
      value: 5498,
    },
    {
      label: "LANUMODARA",
      value: 5959,
    },
    {
      label: "LIYANAGODA",
      value: 6025,
    },
    {
      label: "MAHARAMBA",
      value: 6354,
    },
    {
      label: "MEEGAHAGODA",
      value: 7018,
    },
    {
      label: "MEEPE",
      value: 7059,
    },
    {
      label: "MELIYAGODA",
      value: 7104,
    },
    {
      label: "MORAMPITIGODA",
      value: 7336,
    },
    {
      label: "PELESSA",
      value: 8942,
    },
    {
      label: "PITIDOOWA",
      value: 9144,
    },
    {
      label: "PIYADIGAMA EAST",
      value: 9172,
    },
    {
      label: "PIYADIGAMA WEST",
      value: 9173,
    },
    {
      label: "THALDOOWA",
      value: 10410,
    },
    {
      label: "THALPE EAST",
      value: 10441,
    },
    {
      label: "THALPE SOUTH",
      value: 10443,
    },
    {
      label: "UNAWATUNA CENTRAL",
      value: 11162,
    },
    {
      label: "UNAWATUNA EAST",
      value: 11163,
    },
    {
      label: "UNAWATUNA WEST",
      value: 11164,
    },
    {
      label: "URAGASGODA",
      value: 11190,
    },
    {
      label: "WADUGEGODA",
      value: 11517,
    },
    {
      label: "WELHENGODA",
      value: 11942,
    },
    {
      label: "WELLETHOTA",
      value: 12041,
    },
    {
      label: "YADDEHIMULLA",
      value: 12203,
    },
  ],
  "84": [
    {
      label: "BADABADDA",
      value: 717,
    },
    {
      label: "BERUWELA",
      value: 1071,
    },
    {
      label: "DENAGAMA EAST",
      value: 1742,
    },
    {
      label: "DENAGAMA NORTH",
      value: 1743,
    },
    {
      label: "DENAGAMA WEST",
      value: 1744,
    },
    {
      label: "ELLEWELA EAST",
      value: 2245,
    },
    {
      label: "ELLEWELA WEST",
      value: 2246,
    },
    {
      label: "GAMMEDAPITIYA",
      value: 2662,
    },
    {
      label: "GANGODAGAMA",
      value: 2719,
    },
    {
      label: "KANDEGODA",
      value: 4496,
    },
    {
      label: "KEBILIYAPOLA NORTH",
      value: 4909,
    },
    {
      label: "KEBILIYAPOLA SOUTH",
      value: 4910,
    },
    {
      label: "KOHULIYADDA",
      value: 5339,
    },
    {
      label: "KONGALA CENTRAL",
      value: 5446,
    },
    {
      label: "KONGALA EAST",
      value: 5447,
    },
    {
      label: "KONGALA SOUTH",
      value: 5448,
    },
    {
      label: "KONGALA WEST",
      value: 5449,
    },
    {
      label: "LALPE",
      value: 5948,
    },
    {
      label: "MEEELLA",
      value: 7015,
    },
    {
      label: "MURUTHAMURAYA",
      value: 7495,
    },
    {
      label: "MURUTHAMURAYA EAST",
      value: 7496,
    },
    {
      label: "MURUTHAMURAYA WEST",
      value: 7497,
    },
    {
      label: "NARAWELPITA EAST",
      value: 7726,
    },
    {
      label: "NARAWELPITA NORTH",
      value: 7727,
    },
    {
      label: "NARAWELPITA SOUTH",
      value: 7728,
    },
    {
      label: "NARAWELPITA WEST",
      value: 7729,
    },
    {
      label: "PANANWELA EAST",
      value: 8634,
    },
    {
      label: "PANANWELA WEST",
      value: 8635,
    },
    {
      label: "POTTEWELA",
      value: 9333,
    },
    {
      label: "UDUPEELLEGODA EAST",
      value: 11033,
    },
    {
      label: "UDUPEELLEGODA WEST",
      value: 11034,
    },
    {
      label: "WEPATHAIRA NORTH",
      value: 12069,
    },
    {
      label: "WEPATHAIRA SOUTH",
      value: 12070,
    },
    {
      label: "WEPATHAIRA WEST",
      value: 12071,
    },
  ],
  "85": [
    {
      label: "AKKARA SEEYA",
      value: 105,
    },
    {
      label: "AMILAGAMA",
      value: 385,
    },
    {
      label: "AMPITITHENNA",
      value: 404,
    },
    {
      label: "BAMBARA POKUNA",
      value: 801,
    },
    {
      label: "BERAGALA",
      value: 1049,
    },
    {
      label: "DIVULGASMULLA",
      value: 1908,
    },
    {
      label: "GAMPAHA",
      value: 2669,
    },
    {
      label: "HALDUMMULLA",
      value: 3075,
    },
    {
      label: "HARANKAHAWA",
      value: 3221,
    },
    {
      label: "KALUPAHANA",
      value: 4358,
    },
    {
      label: "KELIPANAWELA",
      value: 4990,
    },
    {
      label: "KIRAWANAGAMA",
      value: 5138,
    },
    {
      label: "KITHULGAHAARAWA",
      value: 5245,
    },
    {
      label: "KOLONGASTHENNA",
      value: 5404,
    },
    {
      label: "KOSGAMA",
      value: 5529,
    },
    {
      label: "KOSLANDA",
      value: 5539,
    },
    {
      label: "KOTABAKMA",
      value: 5555,
    },
    {
      label: "LEMASTHOTA",
      value: 5979,
    },
    {
      label: "MAHAKANDA",
      value: 6309,
    },
    {
      label: "MAHALANDA",
      value: 6321,
    },
    {
      label: "MANTHENNA",
      value: 6695,
    },
    {
      label: "MARANGAHAWELA",
      value: 6746,
    },
    {
      label: "MEDAWELA",
      value: 6970,
    },
    {
      label: "MORAKETIYA",
      value: 7333,
    },
    {
      label: "NIKAPOTHA EAST",
      value: 7953,
    },
    {
      label: "NIKAPOTHA WEST",
      value: 7954,
    },
    {
      label: "POONAGALA",
      value: 9273,
    },
    {
      label: "RANASINGHEGAMA",
      value: 9624,
    },
    {
      label: "RANWANGUHAWA",
      value: 9688,
    },
    {
      label: "SEELATHENNA",
      value: 9993,
    },
    {
      label: "SORAGUNE",
      value: 10243,
    },
    {
      label: "UVATHENNA",
      value: 11271,
    },
    {
      label: "VIHARAGALA",
      value: 11422,
    },
    {
      label: "WALHAPUTHENNA",
      value: 11625,
    },
    {
      label: "WATAGAMUWA",
      value: 11744,
    },
    {
      label: "WE ELIYA",
      value: 11819,
    },
    {
      label: "WEERAKONGAMA",
      value: 11854,
    },
    {
      label: "WELANVITA",
      value: 11920,
    },
    {
      label: "WELIBISSA",
      value: 11945,
    },
  ],
  "86": [
    {
      label: "ANTHUDUWAWELA",
      value: 523,
    },
    {
      label: "BEDDEGAMA",
      value: 985,
    },
    {
      label: "BOGAHAMADITTA",
      value: 1125,
    },
    {
      label: "BOGODA",
      value: 1141,
    },
    {
      label: "BULATHWATTA",
      value: 1302,
    },
    {
      label: "DEEGALLA",
      value: 1590,
    },
    {
      label: "DEHIVINNA",
      value: 1648,
    },
    {
      label: "DEMATAWELHINNA",
      value: 1730,
    },
    {
      label: "DICKWELLA",
      value: 1820,
    },
    {
      label: "ETAMPITIYA",
      value: 2373,
    },
    {
      label: "GAWELA",
      value: 2765,
    },
    {
      label: "GODEGAMA",
      value: 2875,
    },
    {
      label: "HALI-ELA",
      value: 3081,
    },
    {
      label: "HAPUWALAKUMBURA",
      value: 3213,
    },
    {
      label: "HETHEKMA",
      value: 3370,
    },
    {
      label: "HINNARANGOLLA",
      value: 3457,
    },
    {
      label: "IMBULGODA",
      value: 3881,
    },
    {
      label: "JANGULLA",
      value: 4012,
    },
    {
      label: "KANDANA",
      value: 4465,
    },
    {
      label: "KATUGAHA",
      value: 4827,
    },
    {
      label: "KETAWALA",
      value: 5069,
    },
    {
      label: "KIRINDA",
      value: 5184,
    },
    {
      label: "KOKATIYAMALUWA",
      value: 5343,
    },
    {
      label: "KUDUMAHUWELA",
      value: 5743,
    },
    {
      label: "KURUKUDE",
      value: 5870,
    },
    {
      label: "LANDEWELA",
      value: 5951,
    },
    {
      label: "MAHATHENNA",
      value: 6366,
    },
    {
      label: "MAHAWATTAGAMA",
      value: 6383,
    },
    {
      label: "MALIGATHENNA",
      value: 6536,
    },
    {
      label: "MALITTA",
      value: 6550,
    },
    {
      label: "MEDAGAMA",
      value: 6933,
    },
    {
      label: "MEDAPITIGAMA",
      value: 6963,
    },
    {
      label: "MORETHOTA",
      value: 7365,
    },
    {
      label: "MUGUNUMATHA EAST",
      value: 7411,
    },
    {
      label: "MUGUNUMATHA WEST",
      value: 7412,
    },
    {
      label: "NELUDANDA",
      value: 7894,
    },
    {
      label: "NELUWA",
      value: 7906,
    },
    {
      label: "NILIATHUGODA",
      value: 7975,
    },
    {
      label: "PAHAMUNUTHOTA",
      value: 8389,
    },
    {
      label: "PALLEGAMA",
      value: 8497,
    },
    {
      label: "PANAKANNIYA",
      value: 8611,
    },
    {
      label: "PATTIPOLA",
      value: 8872,
    },
    {
      label: "PERAHETTIYA",
      value: 8974,
    },
    {
      label: "SAMAGIPURA",
      value: 9885,
    },
    {
      label: "SPRINGVALLEY",
      value: 10253,
    },
    {
      label: "SPRINGVALLEY ESTATE",
      value: 10254,
    },
    {
      label: "UDAGAMA",
      value: 10891,
    },
    {
      label: "UDAKOHOVILA",
      value: 10926,
    },
    {
      label: "UDUWARA",
      value: 11062,
    },
    {
      label: "UNAGOLLA",
      value: 11151,
    },
    {
      label: "UVA MAHAWELA",
      value: 11268,
    },
    {
      label: "WARAKADANDA",
      value: 11705,
    },
    {
      label: "WEGAMA",
      value: 11876,
    },
    {
      label: "WELIKEMULLA",
      value: 11975,
    },
    {
      label: "WEPASSAWELA",
      value: 12068,
    },
    {
      label: "WEWELHINNA",
      value: 12161,
    },
  ],
  "87": [
    {
      label: "ARAWANAMULLA",
      value: 591,
    },
    {
      label: "BADAGIRIYA",
      value: 719,
    },
    {
      label: "BELLAGASWEWA",
      value: 1023,
    },
    {
      label: "BUNDALA",
      value: 1318,
    },
    {
      label: "DEHIGAHALANDA",
      value: 1632,
    },
    {
      label: "ELALLA",
      value: 2183,
    },
    {
      label: "GALWEWA",
      value: 2644,
    },
    {
      label: "GODAWAYA",
      value: 2872,
    },
    {
      label: "GONNORUWA",
      value: 2953,
    },
    {
      label: "HAMBANTOTA EAST",
      value: 3137,
    },
    {
      label: "HAMBANTOTA WEST",
      value: 3138,
    },
    {
      label: "JOOLGAMUWA",
      value: 4049,
    },
    {
      label: "KELIYAPURA",
      value: 4992,
    },
    {
      label: "KETENWEWA",
      value: 5073,
    },
    {
      label: "KOHOLANKALA",
      value: 5322,
    },
    {
      label: "MANAJJAWA",
      value: 6616,
    },
    {
      label: "MIRIJJAVILA",
      value: 7223,
    },
    {
      label: "PAHALA BERAGAMA",
      value: 8240,
    },
    {
      label: "PALLEMALALA",
      value: 8513,
    },
    {
      label: "SAMODAGAMA",
      value: 9917,
    },
    {
      label: "SIRIBOPURA",
      value: 10141,
    },
    {
      label: "SIRIYAGAMA",
      value: 10161,
    },
    {
      label: "SISILASAGAMA",
      value: 10166,
    },
    {
      label: "SIYAMBALAGASVILA NORTH",
      value: 10193,
    },
    {
      label: "SIYAMBALAGASVILA SOUTH",
      value: 10194,
    },
    {
      label: "THAMMENNAWA",
      value: 10493,
    },
    {
      label: "UDABERAGAMA",
      value: 10882,
    },
    {
      label: "WALAWA",
      value: 11602,
    },
    {
      label: "YAHANGALA EAST",
      value: 12222,
    },
    {
      label: "YAHANGALA WEST",
      value: 12223,
    },
  ],
  "88": [
    {
      label: "ADIKARIGAMA",
      value: 52,
    },
    {
      label: "AGAPPALA",
      value: 63,
    },
    {
      label: "ALAWATTEGAMA",
      value: 200,
    },
    {
      label: "AMBALIYADDA",
      value: 352,
    },
    {
      label: "AMBEWELA",
      value: 378,
    },
    {
      label: "AMPITIGODA",
      value: 403,
    },
    {
      label: "ARATTANA",
      value: 586,
    },
    {
      label: "BAMBARAGAMA",
      value: 810,
    },
    {
      label: "BAMBARAGAMA EAST",
      value: 811,
    },
    {
      label: "BAMBARAGAMA WEST",
      value: 812,
    },
    {
      label: "BODHIMALKADA",
      value: 1114,
    },
    {
      label: "BODHIWELA",
      value: 1119,
    },
    {
      label: "BOGAHALANDA",
      value: 1124,
    },
    {
      label: "BOGAMUWA",
      value: 1136,
    },
    {
      label: "BOMELLAGODA",
      value: 1178,
    },
    {
      label: "BOWALA",
      value: 1256,
    },
    {
      label: "BULUGAHAPITIYA",
      value: 1308,
    },
    {
      label: "DAMPOLA",
      value: 1497,
    },
    {
      label: "DAMUNUMEYA",
      value: 1502,
    },
    {
      label: "DAMUNUMEYA NORTH",
      value: 1503,
    },
    {
      label: "DARAOYA",
      value: 1555,
    },
    {
      label: "DEEGALAHINNA",
      value: 1589,
    },
    {
      label: "DEHIPE",
      value: 1646,
    },
    {
      label: "DELGAHAPITIYA",
      value: 1675,
    },
    {
      label: "DELIWALA",
      value: 1690,
    },
    {
      label: "DENIKE",
      value: 1750,
    },
    {
      label: "DENIYAGAMA",
      value: 1755,
    },
    {
      label: "DIGGALPOTTA",
      value: 1851,
    },
    {
      label: "DIMBULKUMBURA",
      value: 1881,
    },
    {
      label: "DIYA UDAGAMA",
      value: 1922,
    },
    {
      label: "DODAMKUMBURA",
      value: 1959,
    },
    {
      label: "DOLUGALA",
      value: 1996,
    },
    {
      label: "DUNUKEBEDDA",
      value: 2082,
    },
    {
      label: "EHELAMALPE",
      value: 2148,
    },
    {
      label: "EKIRIYA",
      value: 2164,
    },
    {
      label: "ELAMULLA",
      value: 2189,
    },
    {
      label: "ENASAL ARAWA",
      value: 2290,
    },
    {
      label: "ENDIRIBEDDA",
      value: 2298,
    },
    {
      label: "GALAUDA NORTH",
      value: 2518,
    },
    {
      label: "GALAUDA SOUTH",
      value: 2519,
    },
    {
      label: "GANGA UDAGAMA",
      value: 2709,
    },
    {
      label: "GANNEWA UDAGAMA",
      value: 2735,
    },
    {
      label: "GEDEREIYAWA",
      value: 2769,
    },
    {
      label: "GODIGAMUWA",
      value: 2877,
    },
    {
      label: "GONAKELE",
      value: 2921,
    },
    {
      label: "GONAPITIYA",
      value: 2931,
    },
    {
      label: "GOODWOOD",
      value: 2958,
    },
    {
      label: "HAKURUTHALE",
      value: 3063,
    },
    {
      label: "HANDAWALAPITIYA",
      value: 3159,
    },
    {
      label: "HANGURANKETHA",
      value: 3177,
    },
    {
      label: "HAPPAWARA",
      value: 3187,
    },
    {
      label: "HAPUGASDENIYA",
      value: 3194,
    },
    {
      label: "HAPUWALA",
      value: 3212,
    },
    {
      label: "HILPENKANDURA",
      value: 3420,
    },
    {
      label: "HINGURUKADUWA",
      value: 3450,
    },
    {
      label: "HOPE",
      value: 3522,
    },
    {
      label: "HUNUKOTUWA",
      value: 3608,
    },
    {
      label: "IDAMALANDA",
      value: 3640,
    },
    {
      label: "IDAMPITIYA",
      value: 3643,
    },
    {
      label: "ILLAGOLLA",
      value: 3843,
    },
    {
      label: "KALUATTANAGOLLA",
      value: 4323,
    },
    {
      label: "KARALLIYADDA",
      value: 4655,
    },
    {
      label: "KARAMIDULA",
      value: 4666,
    },
    {
      label: "KAWATAYAMANA",
      value: 4896,
    },
    {
      label: "KETAHIRA",
      value: 5056,
    },
    {
      label: "KETAYAPATHANA",
      value: 5072,
    },
    {
      label: "KIRIMETIYA",
      value: 5175,
    },
    {
      label: "KITHULPE",
      value: 5254,
    },
    {
      label: "KOSGAHA DEBALA",
      value: 5523,
    },
    {
      label: "KOTTALA",
      value: 5612,
    },
    {
      label: "LABUHENA",
      value: 5930,
    },
    {
      label: "LABUHENWALA",
      value: 5932,
    },
    {
      label: "MADANWALA",
      value: 6092,
    },
    {
      label: "MADUMANA",
      value: 6165,
    },
    {
      label: "MAKEMPE",
      value: 6450,
    },
    {
      label: "MALANWATTA",
      value: 6498,
    },
    {
      label: "MALIYADDA",
      value: 6551,
    },
    {
      label: "MALSARA NUWARA",
      value: 6573,
    },
    {
      label: "MALULLA",
      value: 6574,
    },
    {
      label: "MANAKOLA",
      value: 6619,
    },
    {
      label: "MANDARAM NUWARA",
      value: 6645,
    },
    {
      label: "MARTHUWELA",
      value: 6768,
    },
    {
      label: "MATHURATA",
      value: 6822,
    },
    {
      label: "MEDAGAMA",
      value: 6933,
    },
    {
      label: "MEDAWELA",
      value: 6970,
    },
    {
      label: "MERRYGOLL",
      value: 7126,
    },
    {
      label: "METIBEMBIYA",
      value: 7133,
    },
    {
      label: "MIRAHAMPE",
      value: 7215,
    },
    {
      label: "MORAGOLLA",
      value: 7321,
    },
    {
      label: "MUDUNAPITA",
      value: 7401,
    },
    {
      label: "MULOYA",
      value: 7457,
    },
    {
      label: "OKANDAGALA",
      value: 8118,
    },
    {
      label: "PALLE MAKURUPPA",
      value: 8489,
    },
    {
      label: "PALLEMALUWA",
      value: 8514,
    },
    {
      label: "PALLEWELA",
      value: 8527,
    },
    {
      label: "PORAMADULLA",
      value: 9285,
    },
    {
      label: "PURANAGAMA",
      value: 9440,
    },
    {
      label: "PUSSALAMANKADA",
      value: 9449,
    },
    {
      label: "RAHATHUNGODA",
      value: 9538,
    },
    {
      label: "RAMMALAKANDURA",
      value: 9615,
    },
    {
      label: "RATHMETIYA",
      value: 9732,
    },
    {
      label: "RATHUKURUSA JANAPADAYA",
      value: 9743,
    },
    {
      label: "RATHYAYA",
      value: 9748,
    },
    {
      label: "REKITIPE",
      value: 9776,
    },
    {
      label: "RIKILLAGASKADA",
      value: 9799,
    },
    {
      label: "ROOKWOOD ESTATE",
      value: 9816,
    },
    {
      label: "SANGARAJA GAMA",
      value: 9950,
    },
    {
      label: "UDA GALAUDA",
      value: 10866,
    },
    {
      label: "UDA MAKURUPPA",
      value: 10875,
    },
    {
      label: "UDA PADIYAPELELLA",
      value: 10876,
    },
    {
      label: "UDAGAMA",
      value: 10891,
    },
    {
      label: "UDAKANDA",
      value: 10919,
    },
    {
      label: "UDALUMADA",
      value: 10933,
    },
    {
      label: "UDAWATTA EAST",
      value: 10976,
    },
    {
      label: "UDAWATTA KUMBURA",
      value: 10977,
    },
    {
      label: "UDAWATTA WEST",
      value: 10978,
    },
    {
      label: "UDAWELA",
      value: 10979,
    },
    {
      label: "UDAWELA PATHANA",
      value: 10983,
    },
    {
      label: "UNANTHENNA",
      value: 11157,
    },
    {
      label: "WADAWALA",
      value: 11501,
    },
    {
      label: "WALALAWELA",
      value: 11577,
    },
    {
      label: "WARAPITIYA",
      value: 11726,
    },
    {
      label: "WEGAMA",
      value: 11876,
    },
    {
      label: "WELAMPAGODA",
      value: 11912,
    },
    {
      label: "WELAPAHALA",
      value: 11922,
    },
    {
      label: "WELIKADA",
      value: 11965,
    },
    {
      label: "WELLAGIRIYA",
      value: 12023,
    },
    {
      label: "WETESTHENNA",
      value: 12123,
    },
    {
      label: "WEWATHENNA",
      value: 12148,
    },
    {
      label: "WILWALA",
      value: 12199,
    },
    {
      label: "YATI HANGURANKETHA",
      value: 12287,
    },
  ],
  "89": [
    {
      label: "ALUTHWELA",
      value: 278,
    },
    {
      label: "BINGETHENNA",
      value: 1087,
    },
    {
      label: "DAMBETHENNA",
      value: 1470,
    },
    {
      label: "DIYATHALAWA",
      value: 1946,
    },
    {
      label: "DODAMWATTA",
      value: 1969,
    },
    {
      label: "ELLAGAMA",
      value: 2224,
    },
    {
      label: "ERANAWELA",
      value: 2316,
    },
    {
      label: "GALKANDA",
      value: 2562,
    },
    {
      label: "GLENANORE",
      value: 2833,
    },
    {
      label: "HAPUTHALE TOWN",
      value: 3208,
    },
    {
      label: "HAPUTHALEGAMA",
      value: 3210,
    },
    {
      label: "HELA KADURUGAMUWA",
      value: 3313,
    },
    {
      label: "HORADOROWWA",
      value: 3525,
    },
    {
      label: "JAYAMINIPURA",
      value: 4023,
    },
    {
      label: "KAHAGOLLA",
      value: 4148,
    },
    {
      label: "KAHATTEWELA",
      value: 4187,
    },
    {
      label: "KOLATHENNA",
      value: 5382,
    },
    {
      label: "MAGIRIPURA",
      value: 6208,
    },
    {
      label: "PAHALA KADURUGAMUWA",
      value: 8286,
    },
    {
      label: "PANKETIYA",
      value: 8686,
    },
    {
      label: "PITARATHMALE",
      value: 9138,
    },
    {
      label: "RANJALLAWA",
      value: 9659,
    },
    {
      label: "THOTALAGALA",
      value: 10755,
    },
    {
      label: "UMANKANDURA",
      value: 11145,
    },
    {
      label: "VIHARAKELE",
      value: 11427,
    },
    {
      label: "WELANHINNA",
      value: 11919,
    },
  ],
  "90": [
    {
      label: "ALADENIYA",
      value: 152,
    },
    {
      label: "AMUWATHDENIYA",
      value: 434,
    },
    {
      label: "ANGODA",
      value: 488,
    },
    {
      label: "ARAMBEGAMA",
      value: 564,
    },
    {
      label: "ATTARAGAMA",
      value: 685,
    },
    {
      label: "ATTARAGAMA EAST",
      value: 686,
    },
    {
      label: "ATTARAGAMA SOUTH",
      value: 687,
    },
    {
      label: "BANWELGOLLA",
      value: 881,
    },
    {
      label: "BATUAMBE",
      value: 952,
    },
    {
      label: "BOGAHAKANDA",
      value: 1121,
    },
    {
      label: "BOTHOTA",
      value: 1254,
    },
    {
      label: "BULATHGOLLA",
      value: 1294,
    },
    {
      label: "DADAHOGAMA",
      value: 1404,
    },
    {
      label: "DEMBARALAWA",
      value: 1732,
    },
    {
      label: "DORANEGAMA",
      value: 2036,
    },
    {
      label: "EMBULPURAYA",
      value: 2288,
    },
    {
      label: "ENDARUTHENNA",
      value: 2294,
    },
    {
      label: "ETAMURUNGAGODA",
      value: 2375,
    },
    {
      label: "GOHAGODA",
      value: 2885,
    },
    {
      label: "GONIGODA",
      value: 2950,
    },
    {
      label: "GONIGODA-PALKUMBURA",
      value: 2951,
    },
    {
      label: "HALOLUWA",
      value: 3102,
    },
    {
      label: "HALOLUWA PALLEGAMA",
      value: 3103,
    },
    {
      label: "HAMANGODA NORTH",
      value: 3133,
    },
    {
      label: "HAMANGODA SOUTH",
      value: 3134,
    },
    {
      label: "HAPUGODA",
      value: 3199,
    },
    {
      label: "HEDENIYA",
      value: 3269,
    },
    {
      label: "HIRIYALAGAMMANA",
      value: 3484,
    },
    {
      label: "IHAGAMA",
      value: 3662,
    },
    {
      label: "INIGALA",
      value: 3929,
    },
    {
      label: "KARANDUWAWALA IHALA",
      value: 4696,
    },
    {
      label: "KARANDUWAWALA PAHALA",
      value: 4697,
    },
    {
      label: "KATUGASTHOTA",
      value: 4832,
    },
    {
      label: "KONDADENIYA",
      value: 5429,
    },
    {
      label: "KULUGAMMANA",
      value: 5763,
    },
    {
      label: "KUMBUREGEDARA",
      value: 5815,
    },
    {
      label: "KURUNDUGAHAMADA",
      value: 5886,
    },
    {
      label: "KURUNDUGOLLA",
      value: 5887,
    },
    {
      label: "KURUNDUWATTA",
      value: 5891,
    },
    {
      label: "MADAPATHAGAMA",
      value: 6094,
    },
    {
      label: "MAHATHENNA",
      value: 6366,
    },
    {
      label: "MALAGAMMANA",
      value: 6485,
    },
    {
      label: "MAPAMADULLA",
      value: 6712,
    },
    {
      label: "MEDAWALA",
      value: 6968,
    },
    {
      label: "NARANGASKUMBURA",
      value: 7702,
    },
    {
      label: "NARANGODA",
      value: 7706,
    },
    {
      label: "NUGAWELA",
      value: 8071,
    },
    {
      label: "OWATHENNA",
      value: 8201,
    },
    {
      label: "PAHALA DOOLWALA",
      value: 8254,
    },
    {
      label: "PALKUMBURA",
      value: 8467,
    },
    {
      label: "PALLEBOKALAWELA",
      value: 8494,
    },
    {
      label: "PALLEMULLA",
      value: 8516,
    },
    {
      label: "POLWATTA",
      value: 9245,
    },
    {
      label: "RAJAPIHILLA",
      value: 9564,
    },
    {
      label: "RAJASINGHAGAMA",
      value: 9566,
    },
    {
      label: "RANAWANA EAST",
      value: 9630,
    },
    {
      label: "RANAWANA WEST",
      value: 9631,
    },
    {
      label: "RATHMALE",
      value: 9717,
    },
    {
      label: "RUWANPURAYA",
      value: 9847,
    },
    {
      label: "SEEWALEEKANDA",
      value: 10013,
    },
    {
      label: "SENARATHGAMA NORTH",
      value: 10048,
    },
    {
      label: "SENARATHGAMA SOUTH",
      value: 10049,
    },
    {
      label: "THITTAPAJJALA",
      value: 10714,
    },
    {
      label: "THITTAPAJJALA NORTH",
      value: 10715,
    },
    {
      label: "UDABOKALAWELA",
      value: 10883,
    },
    {
      label: "UDADOOLWALA",
      value: 10887,
    },
    {
      label: "UDAMULLA",
      value: 10944,
    },
    {
      label: "UDUWAWALA EAST",
      value: 11069,
    },
    {
      label: "UDUWAWALA NORTH",
      value: 11070,
    },
    {
      label: "UDUWAWALA WEST",
      value: 11071,
    },
    {
      label: "UGGALLA",
      value: 11092,
    },
    {
      label: "UGURESSAPITIYA",
      value: 11095,
    },
    {
      label: "ULLADUPITIYA EAST",
      value: 11123,
    },
    {
      label: "ULLADUPITIYA WEST",
      value: 11124,
    },
    {
      label: "UYANWATTA",
      value: 11277,
    },
    {
      label: "VIGUHUMPOLA",
      value: 11416,
    },
    {
      label: "WARATHENNA",
      value: 11727,
    },
    {
      label: "WATHUWALA",
      value: 11787,
    },
    {
      label: "WEGIRIYA",
      value: 11881,
    },
    {
      label: "YAHALATHENNA KANDA",
      value: 12215,
    },
    {
      label: "YAHALATHENNA WEST",
      value: 12216,
    },
    {
      label: "YATIHALAGALA PALLEGAMA",
      value: 12292,
    },
    {
      label: "YATIHALAGALA UDAGAMA",
      value: 12293,
    },
    {
      label: "YATIWAWALA",
      value: 12302,
    },
  ],
  "91": [
    {
      label: "ALAGALLA IHALA",
      value: 154,
    },
    {
      label: "ALAGALLA PAHALAGAMA",
      value: 155,
    },
    {
      label: "ALAKOLAMADITTA",
      value: 168,
    },
    {
      label: "ALUDENIYA NORTH",
      value: 234,
    },
    {
      label: "ALUDENIYA SOUTH",
      value: 235,
    },
    {
      label: "ALUTHGAMA IHALA",
      value: 263,
    },
    {
      label: "ALUTHGAMA PAHALA",
      value: 265,
    },
    {
      label: "AMBAWA",
      value: 373,
    },
    {
      label: "AMBORUWA",
      value: 381,
    },
    {
      label: "ANDIYATHENNA",
      value: 474,
    },
    {
      label: "AVULBODALE",
      value: 708,
    },
    {
      label: "DAMUNUPOLA",
      value: 1505,
    },
    {
      label: "DEDUNUPITIYA IHALAGAMA",
      value: 1583,
    },
    {
      label: "DEDUNUPITIYA PAHALAGAMA",
      value: 1584,
    },
    {
      label: "DEHIDENIYA MADIGE",
      value: 1629,
    },
    {
      label: "DUNKUMBURA",
      value: 2077,
    },
    {
      label: "ERAMUDULIYADDA",
      value: 2313,
    },
    {
      label: "GALDOLA",
      value: 2533,
    },
    {
      label: "GODATHALE",
      value: 2865,
    },
    {
      label: "HANDABOWA",
      value: 3147,
    },
    {
      label: "HATHARALIYADDA",
      value: 3243,
    },
    {
      label: "ILPEMADA",
      value: 3847,
    },
    {
      label: "IMBULETHENNA",
      value: 3877,
    },
    {
      label: "KALOTUWAWA",
      value: 4315,
    },
    {
      label: "KANAKKARAPOLA NORTH",
      value: 4428,
    },
    {
      label: "KANAKKARAPOLA SOUTH",
      value: 4429,
    },
    {
      label: "KANDEMEEYA",
      value: 4500,
    },
    {
      label: "KITHULDORA",
      value: 5244,
    },
    {
      label: "KOLUGALA",
      value: 5409,
    },
    {
      label: "KOLUGALA PAHALAGAMA",
      value: 5410,
    },
    {
      label: "LECHCHIMIMENILA",
      value: 5967,
    },
    {
      label: "MAWATHAGAMA",
      value: 6877,
    },
    {
      label: "MEEGASTHENNA",
      value: 7042,
    },
    {
      label: "MUDAGAMMANA",
      value: 7382,
    },
    {
      label: "MURUDDENIYA",
      value: 7485,
    },
    {
      label: "NARANGASPITIYA",
      value: 7703,
    },
    {
      label: "NIKATHENNA",
      value: 7955,
    },
    {
      label: "PALLEPOLA",
      value: 8519,
    },
    {
      label: "PARAGODA",
      value: 8747,
    },
    {
      label: "PATTAPOLA IHALA",
      value: 8867,
    },
    {
      label: "PATTAPOLA PAHALAGAMA",
      value: 8868,
    },
    {
      label: "PELENA",
      value: 8930,
    },
    {
      label: "PELENA PAHALAGAMA",
      value: 8932,
    },
    {
      label: "POLWATTA",
      value: 9245,
    },
    {
      label: "POLWATTA IHALAGAMA",
      value: 9247,
    },
    {
      label: "RANGAMUWA",
      value: 9653,
    },
    {
      label: "SIVURUPITIYA",
      value: 10182,
    },
    {
      label: "WALPALAGOLLA EAST",
      value: 11638,
    },
    {
      label: "WALPALAGOLLA NORTH",
      value: 11639,
    },
    {
      label: "WALPALAGOLLA SOUTH",
      value: 11640,
    },
    {
      label: "WELAGAMA",
      value: 11905,
    },
    {
      label: "WELIGODAPOLA",
      value: 11957,
    },
    {
      label: "WELIVITA IHALA NORTH",
      value: 12003,
    },
    {
      label: "WELIVITA IHALAGAMA",
      value: 12004,
    },
    {
      label: "WELIVITA PAHALAGAMA",
      value: 12005,
    },
    {
      label: "WELIVITA PAHALAGAMA SOUTH",
      value: 12006,
    },
    {
      label: "YAGGALA",
      value: 12206,
    },
  ],
  "92": [
    {
      label: "AKURALA",
      value: 139,
    },
    {
      label: "AKURALA NORTH",
      value: 140,
    },
    {
      label: "AKURALA SOUTH",
      value: 141,
    },
    {
      label: "ANDURANGODA",
      value: 477,
    },
    {
      label: "BOOSSA",
      value: 1190,
    },
    {
      label: "BOPAGODA",
      value: 1196,
    },
    {
      label: "DALUWATHUMULLA",
      value: 1440,
    },
    {
      label: "DELDOOWA",
      value: 1665,
    },
    {
      label: "DELGAHADOOWA",
      value: 1673,
    },
    {
      label: "DELMAR COLONY",
      value: 1699,
    },
    {
      label: "DEVINIGODA",
      value: 1771,
    },
    {
      label: "DEWAGODA EAST",
      value: 1788,
    },
    {
      label: "DEWAGODA WEST",
      value: 1789,
    },
    {
      label: "DIMBULDOOWA",
      value: 1878,
    },
    {
      label: "DODANDOOWA",
      value: 1970,
    },
    {
      label: "DODANDUGODA",
      value: 1971,
    },
    {
      label: "DOLIKANDA",
      value: 1993,
    },
    {
      label: "GALAGODA EAST",
      value: 2484,
    },
    {
      label: "GALAGODA WEST",
      value: 2485,
    },
    {
      label: "GALDOOWA",
      value: 2534,
    },
    {
      label: "GAMMADUWATTA",
      value: 2654,
    },
    {
      label: "GAMMEDDEGODA",
      value: 2664,
    },
    {
      label: "GAMMEDDEGODA EAST",
      value: 2665,
    },
    {
      label: "GAMMEDDEGODA-RAJGAMA",
      value: 2667,
    },
    {
      label: "GANEGODA",
      value: 2695,
    },
    {
      label: "GODAGAMA NORTH",
      value: 2839,
    },
    {
      label: "GODAGAMA SOUTH",
      value: 2840,
    },
    {
      label: "HANDAUDUMULLA",
      value: 3158,
    },
    {
      label: "HARANNAGALA",
      value: 3222,
    },
    {
      label: "HEGODA",
      value: 3307,
    },
    {
      label: "HENNATHOTA",
      value: 3359,
    },
    {
      label: "HIKKADUWA CENTRAL",
      value: 3416,
    },
    {
      label: "HIKKADUWA NAGARIKAYA",
      value: 3418,
    },
    {
      label: "HIKKADUWA WEST",
      value: 3419,
    },
    {
      label: "IDANTHOTA",
      value: 3646,
    },
    {
      label: "IMBULA",
      value: 3870,
    },
    {
      label: "KADURUPE",
      value: 4128,
    },
    {
      label: "KAHAWA",
      value: 4188,
    },
    {
      label: "KALUPE",
      value: 4359,
    },
    {
      label: "KANDEGODA",
      value: 4496,
    },
    {
      label: "KAPUMULUGODA",
      value: 4600,
    },
    {
      label: "KARAWEGODA",
      value: 4729,
    },
    {
      label: "KATUDAMPE",
      value: 4824,
    },
    {
      label: "KATUKOLIHA",
      value: 4844,
    },
    {
      label: "KEDALA",
      value: 4914,
    },
    {
      label: "KUDA WEWALA",
      value: 5693,
    },
    {
      label: "KULEEGODA EAST",
      value: 5758,
    },
    {
      label: "KULEEGODA WEST",
      value: 5759,
    },
    {
      label: "MAHAHEGODA",
      value: 6295,
    },
    {
      label: "MALAWENNA",
      value: 6505,
    },
    {
      label: "MALIDUWA",
      value: 6525,
    },
    {
      label: "MAWADAVILA",
      value: 6866,
    },
    {
      label: "MEDAGODA",
      value: 6947,
    },
    {
      label: "MEDAWALA",
      value: 6968,
    },
    {
      label: "MILLAGODA",
      value: 7180,
    },
    {
      label: "MODARA PATUWATHA",
      value: 7250,
    },
    {
      label: "NAKANDA",
      value: 7607,
    },
    {
      label: "NALAGASDENIYA",
      value: 7624,
    },
    {
      label: "NARIGAMA",
      value: 7730,
    },
    {
      label: "NARIGAMA WELLABADA",
      value: 7731,
    },
    {
      label: "OWAKANDA",
      value: 8199,
    },
    {
      label: "PALANTHRIYAGODA",
      value: 8434,
    },
    {
      label: "PALLIYAPITIYA",
      value: 8545,
    },
    {
      label: "PANNAMGODA",
      value: 8701,
    },
    {
      label: "PANVILA PAHALAGODA",
      value: 8720,
    },
    {
      label: "PATUWATHA",
      value: 8893,
    },
    {
      label: "PERELIYA NORTH",
      value: 8989,
    },
    {
      label: "PERELIYA SOUTH",
      value: 8990,
    },
    {
      label: "PINKANDA",
      value: 9101,
    },
    {
      label: "PITIWELLA NORTH",
      value: 9158,
    },
    {
      label: "PITIWELLA SOUTH",
      value: 9159,
    },
    {
      label: "RANAPANADENIYA",
      value: 9622,
    },
    {
      label: "RATHGAMA HEGODA",
      value: 9706,
    },
    {
      label: "RATHNA UDAGAMA",
      value: 9733,
    },
    {
      label: "REJJIPURA",
      value: 9770,
    },
    {
      label: "RUPEEWALA",
      value: 9839,
    },
    {
      label: "SEENIGAMA",
      value: 9996,
    },
    {
      label: "SEENIGAMA EAST",
      value: 9997,
    },
    {
      label: "THELWATTA",
      value: 10586,
    },
    {
      label: "THIRANAGAMA",
      value: 10667,
    },
    {
      label: "THOTAGAMUWA",
      value: 10751,
    },
    {
      label: "THOTAVILA",
      value: 10758,
    },
    {
      label: "UDUHALPITIYA",
      value: 11019,
    },
    {
      label: "UDUMULLA",
      value: 11028,
    },
    {
      label: "UDUWARAGODA NORTH",
      value: 11067,
    },
    {
      label: "UDUWARAGODA SOUTH",
      value: 11068,
    },
    {
      label: "URAWATTA",
      value: 11212,
    },
    {
      label: "USMUDULAWA",
      value: 11248,
    },
    {
      label: "WAVULAGODA EAST",
      value: 11812,
    },
    {
      label: "WAVULAGODA WEST",
      value: 11813,
    },
    {
      label: "WELLABADA",
      value: 12021,
    },
    {
      label: "WELLABADA - THIRANAGAMA",
      value: 12022,
    },
    {
      label: "WELLAWATTA",
      value: 12034,
    },
    {
      label: "WENAMULLA",
      value: 12053,
    },
    {
      label: "WERAGODA",
      value: 12078,
    },
    {
      label: "WERELLANA",
      value: 12109,
    },
    {
      label: "WEWALA",
      value: 12140,
    },
  ],
  "93": [
    {
      label: "AGBOPURA",
      value: 67,
    },
    {
      label: "AKKARA 70",
      value: 102,
    },
    {
      label: "BATHGAMPATTUWA",
      value: 947,
    },
    {
      label: "BOPURA",
      value: 1209,
    },
    {
      label: "BUBULA",
      value: 1277,
    },
    {
      label: "C.P. PURA",
      value: 1329,
    },
    {
      label: "CHANDANA POKUNA",
      value: 1343,
    },
    {
      label: "CHETHIYAGIRIGAMA",
      value: 1371,
    },
    {
      label: "GALOYA",
      value: 2604,
    },
    {
      label: "GIRITHALE",
      value: 2828,
    },
    {
      label: "GIRITHALE COLONY",
      value: 2829,
    },
    {
      label: "GIRITHALE PURANAGAMA",
      value: 2830,
    },
    {
      label: "HATHAMUNA",
      value: 3239,
    },
    {
      label: "HENKOLAWELA",
      value: 3358,
    },
    {
      label: "HINGURAKA",
      value: 3440,
    },
    {
      label: "HINGURAKA BANDARAGAMA",
      value: 3441,
    },
    {
      label: "HINGURAKGODA",
      value: 3444,
    },
    {
      label: "JAYANTHIPURA",
      value: 4026,
    },
    {
      label: "JAYAPURA",
      value: 4029,
    },
    {
      label: "KATUKELIYAWA",
      value: 4839,
    },
    {
      label: "KIMBULAWALA",
      value: 5103,
    },
    {
      label: "KUMARAGAMA",
      value: 5770,
    },
    {
      label: "MAHASENGAMA",
      value: 6364,
    },
    {
      label: "MINIHIRIGAMA",
      value: 7198,
    },
    {
      label: "MINNERIYA",
      value: 7205,
    },
    {
      label: "MORAGASWEWA",
      value: 7317,
    },
    {
      label: "MUWANPELESSA",
      value: 7538,
    },
    {
      label: "NAGAPOKUNA",
      value: 7572,
    },
    {
      label: "PALUWADDANA",
      value: 8580,
    },
    {
      label: "PASIYAWEWA",
      value: 8817,
    },
    {
      label: "PULATHISIGAMA",
      value: 9368,
    },
    {
      label: "R.B. 01",
      value: 9502,
    },
    {
      label: "RAJA ELA",
      value: 9549,
    },
    {
      label: "RAJA ELA GAMA",
      value: 9550,
    },
    {
      label: "RANKOTHGAMA",
      value: 9663,
    },
    {
      label: "RATHMALE",
      value: 9717,
    },
    {
      label: "ROTAWEWA",
      value: 9822,
    },
    {
      label: "SAMAGIPURA",
      value: 9885,
    },
    {
      label: "SAMAPURA",
      value: 9895,
    },
    {
      label: "SINHAGAMA",
      value: 10112,
    },
    {
      label: "SIRIKETHA",
      value: 10146,
    },
    {
      label: "SUDUKANDA - NIKAWEWA",
      value: 10283,
    },
    {
      label: "THAMBALAWEWA",
      value: 10470,
    },
    {
      label: "TRACK 05 PEDESA",
      value: 10847,
    },
    {
      label: "TRACK 12 PEDESA",
      value: 10851,
    },
    {
      label: "ULKATUPOTHA",
      value: 11122,
    },
    {
      label: "ULPATHWEWA",
      value: 11136,
    },
    {
      label: "UNAGALAVEHERA EAST",
      value: 11146,
    },
    {
      label: "UNAGALAVEHERA WEST",
      value: 11148,
    },
    {
      label: "WEERAGAMA",
      value: 11844,
    },
    {
      label: "WIJAYARAJA WEWA",
      value: 12187,
    },
    {
      label: "YATIYALPATHANA",
      value: 12306,
    },
    {
      label: "YODHA ELA",
      value: 12319,
    },
  ],
  "94": [
    {
      label: "AMBALANGODA",
      value: 343,
    },
    {
      label: "ATIGALA EAST",
      value: 674,
    },
    {
      label: "ATIGALA WEST",
      value: 675,
    },
    {
      label: "BATAWALA",
      value: 934,
    },
    {
      label: "BRAHMANAGAMA",
      value: 1267,
    },
    {
      label: "DEEPANGODA",
      value: 1603,
    },
    {
      label: "DIYAGAMA EAST",
      value: 1930,
    },
    {
      label: "DIYAGAMA WEST",
      value: 1931,
    },
    {
      label: "DOLAHENA",
      value: 1988,
    },
    {
      label: "GALAVILAWATTA NORTH",
      value: 2521,
    },
    {
      label: "GALAVILAWATTA SOUTH",
      value: 2522,
    },
    {
      label: "GEHENUWALA",
      value: 2772,
    },
    {
      label: "GODAGAMA NORTH",
      value: 2839,
    },
    {
      label: "GODAGAMA SOUTH",
      value: 2840,
    },
    {
      label: "HABARAKADA NORTH",
      value: 3031,
    },
    {
      label: "HABARAKADA SOUTH",
      value: 3032,
    },
    {
      label: "HABARAKADA WATTA",
      value: 3033,
    },
    {
      label: "HENAWATTA",
      value: 3340,
    },
    {
      label: "HENPITA",
      value: 3360,
    },
    {
      label: "HERALIYAWALA",
      value: 3367,
    },
    {
      label: "HIRIPITIYA",
      value: 3474,
    },
    {
      label: "HOMAGAMA EAST",
      value: 3511,
    },
    {
      label: "HOMAGAMA NORTH",
      value: 3512,
    },
    {
      label: "HOMAGAMA SOUTH",
      value: 3513,
    },
    {
      label: "HOMAGAMA TOWN",
      value: 3514,
    },
    {
      label: "HOMAGAMA WEST",
      value: 3515,
    },
    {
      label: "JALTHARA",
      value: 3997,
    },
    {
      label: "KAHATHUDUWA EAST",
      value: 4181,
    },
    {
      label: "KAHATHUDUWA NORTH",
      value: 4182,
    },
    {
      label: "KAHATHUDUWA SOUTH",
      value: 4183,
    },
    {
      label: "KAHATHUDUWA WEST",
      value: 4184,
    },
    {
      label: "KANDANAWATTA",
      value: 4471,
    },
    {
      label: "KATUWANA",
      value: 4864,
    },
    {
      label: "KIRIBERIYAKELE",
      value: 5150,
    },
    {
      label: "KIRIGAMPAMUNUWA",
      value: 5157,
    },
    {
      label: "KIRIWATTUDUWA NORTH",
      value: 5219,
    },
    {
      label: "KIRIWATTUDUWA SOUTH",
      value: 5220,
    },
    {
      label: "KITHULAVILA",
      value: 5242,
    },
    {
      label: "KITHULHENA",
      value: 5251,
    },
    {
      label: "KUDAMADUWA",
      value: 5716,
    },
    {
      label: "KURUNDUWATTA",
      value: 5891,
    },
    {
      label: "MAGAMMANA EAST",
      value: 6197,
    },
    {
      label: "MAGAMMANA WEST",
      value: 6198,
    },
    {
      label: "MAMBULGODA",
      value: 6600,
    },
    {
      label: "MATTEGODA CENTRAL 'A'",
      value: 6832,
    },
    {
      label: "MATTEGODA CENTRAL 'B'",
      value: 6833,
    },
    {
      label: "MATTEGODA EAST",
      value: 6834,
    },
    {
      label: "MATTEGODA WEST",
      value: 6835,
    },
    {
      label: "MAWATHGAMA",
      value: 6885,
    },
    {
      label: "MEEGASMULLA",
      value: 7039,
    },
    {
      label: "MEEGODA NORTH",
      value: 7045,
    },
    {
      label: "MEEGODA SOUTH",
      value: 7046,
    },
    {
      label: "MOONAMALE - YAKAHALUWA",
      value: 7293,
    },
    {
      label: "MULLEGAMA NORTH",
      value: 7442,
    },
    {
      label: "MULLEGAMA SOUTH",
      value: 7443,
    },
    {
      label: "NAWALAMULLA",
      value: 7806,
    },
    {
      label: "NIYANDAGALA",
      value: 8046,
    },
    {
      label: "OVITIGAMA",
      value: 8195,
    },
    {
      label: "PALAGAMA",
      value: 8400,
    },
    {
      label: "PANAGODA EAST",
      value: 8603,
    },
    {
      label: "PANAGODA TOWN",
      value: 8604,
    },
    {
      label: "PANAGODA WEST",
      value: 8605,
    },
    {
      label: "PANALUWA",
      value: 8616,
    },
    {
      label: "PITIPANA NORTH",
      value: 9153,
    },
    {
      label: "PITIPANA SOUTH",
      value: 9154,
    },
    {
      label: "PITIPANA TOWN",
      value: 9157,
    },
    {
      label: "PRASANNAPURA",
      value: 9337,
    },
    {
      label: "RILAWALA",
      value: 9801,
    },
    {
      label: "SANGHARAMA",
      value: 9958,
    },
    {
      label: "SIDDAMULLA NORTH",
      value: 10097,
    },
    {
      label: "SIDDAMULLA SOUTH",
      value: 10098,
    },
    {
      label: "SIYAMBALAGODA NORTH",
      value: 10198,
    },
    {
      label: "SIYAMBALAGODA SOUTH",
      value: 10199,
    },
    {
      label: "SUWAPUBUDUGAMA",
      value: 10307,
    },
    {
      label: "UDUWANA",
      value: 11061,
    },
    {
      label: "UNDURUGODA",
      value: 11169,
    },
    {
      label: "WALPITA",
      value: 11642,
    },
    {
      label: "WATAREKA NORTH",
      value: 11760,
    },
    {
      label: "WATAREKA SOUTH",
      value: 11761,
    },
    {
      label: "WENIWELKOLA",
      value: 12058,
    },
    {
      label: "WETHARA",
      value: 12125,
    },
  ],
  "95": [
    {
      label: "ARAMANAGOLLA",
      value: 561,
    },
    {
      label: "BATUVITA NORTH",
      value: 964,
    },
    {
      label: "BATUVITA SOUTH",
      value: 965,
    },
    {
      label: "DAMBARA",
      value: 1463,
    },
    {
      label: "DIKHENAGAMA",
      value: 1858,
    },
    {
      label: "GAL EDANDUGODA",
      value: 2457,
    },
    {
      label: "GODIGAMUWA EAST",
      value: 2878,
    },
    {
      label: "GODIGAMUWA WEST",
      value: 2882,
    },
    {
      label: "GOROKGODA",
      value: 2970,
    },
    {
      label: "GURUGODA",
      value: 3005,
    },
    {
      label: "HALAPITIYA",
      value: 3070,
    },
    {
      label: "HALTHOTIYAWATTA",
      value: 3117,
    },
    {
      label: "HANDUPELPOLA",
      value: 3166,
    },
    {
      label: "HENEGAMA",
      value: 3350,
    },
    {
      label: "HORANA EAST",
      value: 3546,
    },
    {
      label: "HORANA NORTH",
      value: 3547,
    },
    {
      label: "HORANA SOUTH",
      value: 3548,
    },
    {
      label: "IHALA MILLEWA NORTH",
      value: 3758,
    },
    {
      label: "IHALA MILLEWA SOUTH",
      value: 3759,
    },
    {
      label: "KAHATAPITIYA",
      value: 4174,
    },
    {
      label: "KANANVILA NORTH",
      value: 4438,
    },
    {
      label: "KANANVILA SOUTH",
      value: 4439,
    },
    {
      label: "KANEWALA",
      value: 4524,
    },
    {
      label: "KIDELPITIYA",
      value: 5090,
    },
    {
      label: "KIRIGALAHENA",
      value: 5153,
    },
    {
      label: "KORALAIMA",
      value: 5502,
    },
    {
      label: "KOTIGAMGODA",
      value: 5602,
    },
    {
      label: "KUDA UDUWA",
      value: 5684,
    },
    {
      label: "KULUPANA",
      value: 5764,
    },
    {
      label: "KUMBUKA EAST",
      value: 5794,
    },
    {
      label: "KUMBUKA NORTH",
      value: 5795,
    },
    {
      label: "KUMBUKA SOUTH",
      value: 5796,
    },
    {
      label: "KUMBUKA WEST",
      value: 5797,
    },
    {
      label: "MAHA UDUWA",
      value: 6257,
    },
    {
      label: "MAHENA",
      value: 6398,
    },
    {
      label: "MEEMANA",
      value: 7051,
    },
    {
      label: "MEEWANAPALANA EAST",
      value: 7081,
    },
    {
      label: "MEEWANAPALANA WEST",
      value: 7082,
    },
    {
      label: "MIDELLAMULAHENA",
      value: 7159,
    },
    {
      label: "MUNAGAMA EAST",
      value: 7459,
    },
    {
      label: "MUNAGAMA WEST",
      value: 7460,
    },
    {
      label: "NARTHANAGALA",
      value: 7736,
    },
    {
      label: "OLABODUWA EAST",
      value: 8121,
    },
    {
      label: "OLABODUWA NORTH",
      value: 8122,
    },
    {
      label: "OLABODUWA SOUTH",
      value: 8123,
    },
    {
      label: "OVITIYAGALA",
      value: 8198,
    },
    {
      label: "PAHALA MILLEWA NORTH",
      value: 8330,
    },
    {
      label: "PAHALA MILLEWA SOUTH",
      value: 8331,
    },
    {
      label: "PALANNORUWA",
      value: 8433,
    },
    {
      label: "PANNILA",
      value: 8705,
    },
    {
      label: "POKUNUVITA",
      value: 9198,
    },
    {
      label: "THALAGALA EAST",
      value: 10337,
    },
    {
      label: "THALAGALA NORTH",
      value: 10338,
    },
    {
      label: "THALAGALA SOUTH",
      value: 10339,
    },
    {
      label: "THALAGALA WEST",
      value: 10340,
    },
    {
      label: "UDUWA NORTH",
      value: 11057,
    },
    {
      label: "UDUWA SOUTH",
      value: 11058,
    },
    {
      label: "WELMILLA",
      value: 12046,
    },
    {
      label: "WERULLAHENA",
      value: 12112,
    },
    {
      label: "WEWALA EAST",
      value: 12141,
    },
    {
      label: "WEWALA WEST",
      value: 12143,
    },
  ],
  "96": [
    {
      label: "ANAOLONDEWA",
      value: 448,
    },
    {
      label: "DEKETHIPOTHANA",
      value: 1659,
    },
    {
      label: "DEMATAWEWA",
      value: 1731,
    },
    {
      label: "DIYATITTAWEWA",
      value: 1948,
    },
    {
      label: "DUTUWEWA",
      value: 2100,
    },
    {
      label: "GAMMAHEGEWEWA",
      value: 2655,
    },
    {
      label: "HOROWPOTHANA",
      value: 3575,
    },
    {
      label: "IHALA ANGUNACHCHIYA",
      value: 3668,
    },
    {
      label: "KALPE",
      value: 4316,
    },
    {
      label: "KAPUGOLLEWA",
      value: 4593,
    },
    {
      label: "KIVULEKADA",
      value: 5278,
    },
    {
      label: "MARADANKADAWALA",
      value: 6720,
    },
    {
      label: "MARADANMADUWA",
      value: 6724,
    },
    {
      label: "MEDAWACHCHIYA HANDIYA",
      value: 6966,
    },
    {
      label: "MORAKEWA",
      value: 7334,
    },
    {
      label: "MORAWEWA",
      value: 7358,
    },
    {
      label: "MUKKARAWEWA",
      value: 7419,
    },
    {
      label: "NABADAWEWA",
      value: 7550,
    },
    {
      label: "NANUMILLAWEWA",
      value: 7676,
    },
    {
      label: "NIKAWEWA",
      value: 7962,
    },
    {
      label: "PAHALA DIVULWEWA",
      value: 8251,
    },
    {
      label: "PARANGIYAWADIYA",
      value: 8784,
    },
    {
      label: "PUHULEWEWA",
      value: 9354,
    },
    {
      label: "PULIYANKADAWALA",
      value: 9373,
    },
    {
      label: "RASNAKA WEWA",
      value: 9693,
    },
    {
      label: "RATHMALE",
      value: 9717,
    },
    {
      label: "THAWALANHALMILLEWA",
      value: 10552,
    },
    {
      label: "THIMBIRIETTAWALA",
      value: 10652,
    },
    {
      label: "THIRAPPANKADAWALA",
      value: 10670,
    },
    {
      label: "VILEWEWA",
      value: 11452,
    },
    {
      label: "WADIGAWEWA",
      value: 11510,
    },
    {
      label: "WAGOLLAKADA",
      value: 11535,
    },
    {
      label: "WAHALKADA D 1",
      value: 11541,
    },
    {
      label: "WAHALKADA D 2",
      value: 11542,
    },
    {
      label: "WALAHAVIDDAWEWA",
      value: 11570,
    },
    {
      label: "WEERASOLE",
      value: 11869,
    },
    {
      label: "WELANGAHAULPATHA",
      value: 11915,
    },
    {
      label: "WELIMUWAPOTHANA",
      value: 11985,
    },
  ],
  "97": [
    {
      label: "AMBANPOLA",
      value: 362,
    },
    {
      label: "ARAGAMA",
      value: 538,
    },
    {
      label: "BAKMEEGOLLA",
      value: 755,
    },
    {
      label: "BANDIPOLA",
      value: 871,
    },
    {
      label: "BOGAMUWA",
      value: 1136,
    },
    {
      label: "DARAMITIPOLA",
      value: 1553,
    },
    {
      label: "DEEYAWA",
      value: 1612,
    },
    {
      label: "DEHELGAMUWA",
      value: 1617,
    },
    {
      label: "DEWAGIRIYA",
      value: 1786,
    },
    {
      label: "DIDDENIYA",
      value: 1831,
    },
    {
      label: "DIGGALAWATTA",
      value: 1850,
    },
    {
      label: "DIYATHURE",
      value: 1947,
    },
    {
      label: "DOLUWA",
      value: 1997,
    },
    {
      label: "GALKETIGAMA",
      value: 2564,
    },
    {
      label: "GANEGODA",
      value: 2695,
    },
    {
      label: "GODAGAMA",
      value: 2838,
    },
    {
      label: "GODARATHMALE",
      value: 2864,
    },
    {
      label: "GURUSSA",
      value: 3022,
    },
    {
      label: "HANGAMUWA",
      value: 3168,
    },
    {
      label: "HENEGEDARA",
      value: 3353,
    },
    {
      label: "HIDDANA",
      value: 3404,
    },
    {
      label: "HIPAWWA",
      value: 3461,
    },
    {
      label: "IBBAGAMUWA",
      value: 3633,
    },
    {
      label: "IHALA GOKARELLA",
      value: 3696,
    },
    {
      label: "IPALAWA",
      value: 3938,
    },
    {
      label: "KAHATAWELA",
      value: 4179,
    },
    {
      label: "KANDEGEDARA",
      value: 4492,
    },
    {
      label: "KANDULAWA",
      value: 4517,
    },
    {
      label: "KARANDAGOLLA",
      value: 4683,
    },
    {
      label: "KATUPOTHA",
      value: 4859,
    },
    {
      label: "KENDAWALA",
      value: 5016,
    },
    {
      label: "KIMBULWANA OYA",
      value: 5107,
    },
    {
      label: "KIRIBAMUNA",
      value: 5141,
    },
    {
      label: "KIRINDIGALLA",
      value: 5195,
    },
    {
      label: "KUMBALANGA",
      value: 5781,
    },
    {
      label: "LENAWA",
      value: 5987,
    },
    {
      label: "MADIGEDETHILIANGA",
      value: 6131,
    },
    {
      label: "MAHAGAMA",
      value: 6283,
    },
    {
      label: "MAHAMOOKALANYAYA",
      value: 6330,
    },
    {
      label: "MANAPAYA",
      value: 6628,
    },
    {
      label: "MEDAGAMPOLA",
      value: 6942,
    },
    {
      label: "MEDAGEDARA",
      value: 6944,
    },
    {
      label: "MEDAMULLA",
      value: 6960,
    },
    {
      label: "MEDDEKETIYA",
      value: 6988,
    },
    {
      label: "MEGODADIYATHURE",
      value: 7091,
    },
    {
      label: "MURUTHAWA",
      value: 7500,
    },
    {
      label: "NABETA",
      value: 7553,
    },
    {
      label: "NEERAMMULLA",
      value: 7863,
    },
    {
      label: "NEKETTA",
      value: 7877,
    },
    {
      label: "NELLIYA",
      value: 7891,
    },
    {
      label: "NEMBILIKUMBURA",
      value: 7913,
    },
    {
      label: "NINDAPELLA",
      value: 7987,
    },
    {
      label: "OMARAGOLLA",
      value: 8149,
    },
    {
      label: "PANLIYADDA",
      value: 8690,
    },
    {
      label: "PANNALA",
      value: 8695,
    },
    {
      label: "PEDDAWA",
      value: 8903,
    },
    {
      label: "PERIYAKADU NELAWA",
      value: 9003,
    },
    {
      label: "PITIPAHAMUNA",
      value: 9150,
    },
    {
      label: "POLGOLLA",
      value: 9218,
    },
    {
      label: "POLKATUWA",
      value: 9225,
    },
    {
      label: "PUDUKKULAMA",
      value: 9345,
    },
    {
      label: "PUSWELLEGAMA",
      value: 9461,
    },
    {
      label: "RAGEDARA",
      value: 9533,
    },
    {
      label: "SIYAMBALAWEHERA",
      value: 10214,
    },
    {
      label: "THALGODAPITIYA",
      value: 10431,
    },
    {
      label: "THAMMITA",
      value: 10496,
    },
    {
      label: "THIHAWA",
      value: 10642,
    },
    {
      label: "UDATHAMMITA",
      value: 10966,
    },
    {
      label: "UDAWELA",
      value: 10979,
    },
    {
      label: "UNIT 3",
      value: 11173,
    },
    {
      label: "USSAWA",
      value: 11252,
    },
    {
      label: "WADUPOLA",
      value: 11521,
    },
    {
      label: "WELGALA",
      value: 11937,
    },
    {
      label: "WEWALAGAMA",
      value: 12146,
    },
  ],
  "98": [
    {
      label: "AMPAVILA",
      value: 397,
    },
    {
      label: "ANDUGODA",
      value: 475,
    },
    {
      label: "ANGULUGAHA",
      value: 492,
    },
    {
      label: "ATANIKITHA",
      value: 648,
    },
    {
      label: "BEDIPITA",
      value: 995,
    },
    {
      label: "DANDUWANA",
      value: 1517,
    },
    {
      label: "DEEGODA",
      value: 1596,
    },
    {
      label: "DEEGODA ATHIREKA 01",
      value: 1597,
    },
    {
      label: "DIKKUMBURA",
      value: 1864,
    },
    {
      label: "DORAPE",
      value: 2040,
    },
    {
      label: "ELLALAGODA",
      value: 2233,
    },
    {
      label: "GODAUDAMANDIYA",
      value: 2867,
    },
    {
      label: "HATANGALA",
      value: 3233,
    },
    {
      label: "HAWPE",
      value: 3264,
    },
    {
      label: "HAWPE NORTH",
      value: 3265,
    },
    {
      label: "HETTIGODA",
      value: 3375,
    },
    {
      label: "HORADUGODA",
      value: 3526,
    },
    {
      label: "IHALA KOMBALA",
      value: 3729,
    },
    {
      label: "IHALA MAWELLA",
      value: 3756,
    },
    {
      label: "IMADUWA",
      value: 3866,
    },
    {
      label: "IMADUWA ATHIREKA",
      value: 3867,
    },
    {
      label: "INDURANNAVILA",
      value: 3915,
    },
    {
      label: "KABARAGALA",
      value: 4060,
    },
    {
      label: "KAHANDA",
      value: 4156,
    },
    {
      label: "KAHANDA ATHIREKA 1",
      value: 4157,
    },
    {
      label: "KALUGALAGODA",
      value: 4335,
    },
    {
      label: "KODAGODA EAST",
      value: 5294,
    },
    {
      label: "KODAGODA SOUTH",
      value: 5295,
    },
    {
      label: "KOMBALA",
      value: 5418,
    },
    {
      label: "MALALGODAPITIYA",
      value: 6488,
    },
    {
      label: "MAWELLA",
      value: 6893,
    },
    {
      label: "MAYAKADUWA",
      value: 6897,
    },
    {
      label: "PANUGALGODA",
      value: 8718,
    },
    {
      label: "PARAGODA",
      value: 8747,
    },
    {
      label: "PELAWATTA",
      value: 8922,
    },
    {
      label: "PITUWALAHENA",
      value: 9169,
    },
    {
      label: "POLHENA",
      value: 9219,
    },
    {
      label: "PUSWELKADA",
      value: 9460,
    },
    {
      label: "RANGODA",
      value: 9655,
    },
    {
      label: "THITTAGALLA EAST",
      value: 10709,
    },
    {
      label: "THITTAGALLA WEST",
      value: 10710,
    },
    {
      label: "WATHAWANA",
      value: 11764,
    },
    {
      label: "WELIKONDA",
      value: 11979,
    },
  ],
  "99": [
    {
      label: "ALAKOLAELLA",
      value: 165,
    },
    {
      label: "ALUTHNUWARA",
      value: 274,
    },
    {
      label: "AMUPITIYA",
      value: 431,
    },
    {
      label: "AMUWATHUGODA",
      value: 435,
    },
    {
      label: "ATAWAKWELA",
      value: 649,
    },
    {
      label: "BELIHULOYA",
      value: 1017,
    },
    {
      label: "BELLANKANDA",
      value: 1027,
    },
    {
      label: "BOLTHUMBE",
      value: 1170,
    },
    {
      label: "BUDUNWELA",
      value: 1287,
    },
    {
      label: "GALLENAKANDA",
      value: 2585,
    },
    {
      label: "GURUBEVILA",
      value: 2998,
    },
    {
      label: "HALPE",
      value: 3112,
    },
    {
      label: "HATHARABAGE",
      value: 3242,
    },
    {
      label: "IHALAGALAGAMA",
      value: 3809,
    },
    {
      label: "IMBULPE",
      value: 3887,
    },
    {
      label: "KANATHIRIYANWALA",
      value: 4441,
    },
    {
      label: "KARADIYAMULLA",
      value: 4605,
    },
    {
      label: "KARAGASTHALAWA",
      value: 4620,
    },
    {
      label: "KATTADIKANDA",
      value: 4795,
    },
    {
      label: "KINCHIGUNE",
      value: 5109,
    },
    {
      label: "KUMBALGAMA",
      value: 5783,
    },
    {
      label: "KUMBURUTHENIWELA",
      value: 5822,
    },
    {
      label: "MADDEGAMA",
      value: 6114,
    },
    {
      label: "MADDETHALAWA",
      value: 6116,
    },
    {
      label: "MAMALGAHA",
      value: 6597,
    },
    {
      label: "MEDAGEDARAGODA",
      value: 6946,
    },
    {
      label: "MORAHELA",
      value: 7325,
    },
    {
      label: "MUTTETTUWEGAMA",
      value: 7529,
    },
    {
      label: "NALUWELA",
      value: 7642,
    },
    {
      label: "NITTAMALUWA",
      value: 8027,
    },
    {
      label: "OLUGANTHOTA",
      value: 8133,
    },
    {
      label: "PAGALOVITA",
      value: 8229,
    },
    {
      label: "PALLEWELA",
      value: 8527,
    },
    {
      label: "PANDENIYA",
      value: 8655,
    },
    {
      label: "PASSARAMULLA",
      value: 8824,
    },
    {
      label: "PIDALIGANNAWELA",
      value: 9063,
    },
    {
      label: "PINNAWALA",
      value: 9113,
    },
    {
      label: "PUWAKGAHAWELA",
      value: 9495,
    },
    {
      label: "RATHMALAVINNA",
      value: 9714,
    },
    {
      label: "RAWANAKANDA",
      value: 9761,
    },
    {
      label: "SEELOGAMA",
      value: 9994,
    },
    {
      label: "THOTAPALLA",
      value: 10757,
    },
    {
      label: "THUNKINDA",
      value: 10810,
    },
    {
      label: "UDAGAMA",
      value: 10891,
    },
    {
      label: "ULUPITIYA",
      value: 11140,
    },
    {
      label: "VIHARAWELA",
      value: 11430,
    },
    {
      label: "WALEBODA NORTH",
      value: 11612,
    },
    {
      label: "WEGAPITIYA",
      value: 11879,
    },
    {
      label: "WELANHINNA",
      value: 11919,
    },
    {
      label: "YAKDEHIWELA",
      value: 12233,
    },
  ],
  "100": [
    {
      label: "ARAKAVILA",
      value: 549,
    },
    {
      label: "BATUGAMPALA",
      value: 954,
    },
    {
      label: "DOMBAGASKANDA",
      value: 2005,
    },
    {
      label: "EDURAGALA",
      value: 2119,
    },
    {
      label: "HANDAPANGODA EAST",
      value: 3155,
    },
    {
      label: "HANDAPANGODA SOUTH",
      value: 3156,
    },
    {
      label: "HANDAPANGODA WEST",
      value: 3157,
    },
    {
      label: "INGIRIYA EAST",
      value: 3922,
    },
    {
      label: "INGIRIYA NORTH",
      value: 3923,
    },
    {
      label: "INGIRIYA WEST",
      value: 3924,
    },
    {
      label: "KANDANAPITIYA",
      value: 4470,
    },
    {
      label: "KEKULADOLA",
      value: 4960,
    },
    {
      label: "KEKULALIYA",
      value: 4961,
    },
    {
      label: "KOTIGALA",
      value: 5601,
    },
    {
      label: "KOTTIYAWATTA",
      value: 5628,
    },
    {
      label: "KURANA NORTH",
      value: 5846,
    },
    {
      label: "KURANA SOUTH",
      value: 5847,
    },
    {
      label: "MAHA INGIRIYA",
      value: 6237,
    },
    {
      label: "MAPUTUGALA",
      value: 6718,
    },
    {
      label: "MENERIGAMA",
      value: 7116,
    },
    {
      label: "NAMBAPANA",
      value: 7657,
    },
    {
      label: "NIMALAGAMA",
      value: 7982,
    },
    {
      label: "PELPITIGODA",
      value: 8953,
    },
    {
      label: "PORUWADANDA EAST",
      value: 9297,
    },
    {
      label: "PORUWADANDA WEST",
      value: 9298,
    },
    {
      label: "RAIGAM WATTA",
      value: 9541,
    },
    {
      label: "RATHMALGODA EAST",
      value: 9723,
    },
    {
      label: "RATHMALGODA WEST",
      value: 9724,
    },
    {
      label: "URUGALA EAST",
      value: 11222,
    },
    {
      label: "URUGALA WEST",
      value: 11223,
    },
    {
      label: "WAGAWATTA",
      value: 11532,
    },
  ],
  "101": [
    {
      label: "2 ELA - KAGAMA",
      value: 5,
    },
    {
      label: "AKKARA 500",
      value: 101,
    },
    {
      label: "ALUTH DAMBEWATANA",
      value: 243,
    },
    {
      label: "AMANAKKATTUWA",
      value: 296,
    },
    {
      label: "AMUNUWETIYA",
      value: 429,
    },
    {
      label: "ASWEDDUMA",
      value: 643,
    },
    {
      label: "DAMPELESSA GAMA",
      value: 1492,
    },
    {
      label: "DIKWEWA - SENAPURA",
      value: 1871,
    },
    {
      label: "GALAGEDARA GAMA",
      value: 2475,
    },
    {
      label: "GALWANGUWA",
      value: 2640,
    },
    {
      label: "GANTHIRIYA GAMA",
      value: 2743,
    },
    {
      label: "GONAPATHIRAWA",
      value: 2927,
    },
    {
      label: "HEENUKWE GAMA",
      value: 3296,
    },
    {
      label: "HIRIPITIYA GAMA",
      value: 3477,
    },
    {
      label: "IHALA KAGAMA",
      value: 3710,
    },
    {
      label: "IPALOGAMA",
      value: 3939,
    },
    {
      label: "KADIYANGALLA",
      value: 4115,
    },
    {
      label: "KAGAMA 5 ELA",
      value: 4140,
    },
    {
      label: "KALAWEWA",
      value: 4261,
    },
    {
      label: "KALLANCHIYA GAMA",
      value: 4276,
    },
    {
      label: "KUNCHIKULAMA",
      value: 5828,
    },
    {
      label: "KUSALANA GAMA",
      value: 5916,
    },
    {
      label: "MAHAILUPPALLAMA",
      value: 6299,
    },
    {
      label: "MANEWA",
      value: 6659,
    },
    {
      label: "NARANGALLE GAMA",
      value: 7699,
    },
    {
      label: "PALUGASWEWA FARM",
      value: 8570,
    },
    {
      label: "PULIYANKULAMA",
      value: 9379,
    },
    {
      label: "SANGATTEWA",
      value: 9954,
    },
    {
      label: "SENAPURA GAMA",
      value: 10046,
    },
    {
      label: "VIJITHAPURA",
      value: 11432,
    },
    {
      label: "WALAWWEGAMA",
      value: 11608,
    },
    {
      label: "WEDINIGAMA",
      value: 11835,
    },
  ],
  "104": [
    {
      label: "ALEXENDRAWATTA",
      value: 205,
    },
    {
      label: "BANDIGODA",
      value: 870,
    },
    {
      label: "BATAGAMA NORTH",
      value: 908,
    },
    {
      label: "BATAGAMA SOUTH",
      value: 909,
    },
    {
      label: "BATUWATTA EAST",
      value: 972,
    },
    {
      label: "BATUWATTA WEST",
      value: 973,
    },
    {
      label: "DAMBUWA",
      value: 1481,
    },
    {
      label: "DANDUGAMA",
      value: 1515,
    },
    {
      label: "DEHIYAGATHA NORTH",
      value: 1652,
    },
    {
      label: "DEHIYAGATHA SOUTH",
      value: 1653,
    },
    {
      label: "DOLAHENA",
      value: 1988,
    },
    {
      label: "EKALA",
      value: 2158,
    },
    {
      label: "EKALA KURUNDUWATTA",
      value: 2159,
    },
    {
      label: "GALLAWATTA",
      value: 2577,
    },
    {
      label: "HAPUGODA CENTRAL",
      value: 3200,
    },
    {
      label: "HAPUGODA EAST",
      value: 3201,
    },
    {
      label: "HAPUGODA WEST",
      value: 3202,
    },
    {
      label: "INDIMINNA",
      value: 3900,
    },
    {
      label: "INDIVITIYA",
      value: 3906,
    },
    {
      label: "JA-ELA",
      value: 3990,
    },
    {
      label: "JAYASAMARUGAMA",
      value: 4033,
    },
    {
      label: "JAYASRIGAMA",
      value: 4036,
    },
    {
      label: "KALAELIYA",
      value: 4222,
    },
    {
      label: "KANDANA EAST",
      value: 4466,
    },
    {
      label: "KANDANA WEST",
      value: 4469,
    },
    {
      label: "KANUWANA",
      value: 4576,
    },
    {
      label: "KAPUWATTA",
      value: 4601,
    },
    {
      label: "KETAGEWATTA",
      value: 5052,
    },
    {
      label: "KUDAHAKAPOLA NORTH",
      value: 5707,
    },
    {
      label: "KUDAHAKAPOLA SOUTH",
      value: 5708,
    },
    {
      label: "MAELIYA",
      value: 6182,
    },
    {
      label: "MAHAWATTA",
      value: 6378,
    },
    {
      label: "NAGODA",
      value: 7580,
    },
    {
      label: "NARANGODAPALUWA EAST",
      value: 7709,
    },
    {
      label: "NARANGODAPALUWA WEST",
      value: 7710,
    },
    {
      label: "NEDURUPITIYA",
      value: 7854,
    },
    {
      label: "NIVANDAMA NORTH",
      value: 8032,
    },
    {
      label: "NIVANDAMA SOUTH",
      value: 8033,
    },
    {
      label: "PERALANDA",
      value: 8978,
    },
    {
      label: "PODIVEEKUMBURA",
      value: 9184,
    },
    {
      label: "POLPITIMOOKALANA",
      value: 9237,
    },
    {
      label: "RAGAMA",
      value: 9532,
    },
    {
      label: "RAMPITIYA",
      value: 9618,
    },
    {
      label: "RILAVULLA",
      value: 9800,
    },
    {
      label: "THEWATTA",
      value: 10626,
    },
    {
      label: "THUDELLA NORTH",
      value: 10774,
    },
    {
      label: "THUDELLA SOUTH",
      value: 10775,
    },
    {
      label: "THUDELLA WEST",
      value: 10776,
    },
    {
      label: "THUMPELIYA",
      value: 10799,
    },
    {
      label: "USWATTA",
      value: 11253,
    },
    {
      label: "VISHAKAWATTA",
      value: 11481,
    },
    {
      label: "WALPOLA EAST",
      value: 11648,
    },
    {
      label: "WALPOLA WEST",
      value: 11649,
    },
    {
      label: "WELIGAMPITIYA NORTH",
      value: 11949,
    },
    {
      label: "WELIGAMPITIYA SOUTH",
      value: 11950,
    },
    {
      label: "WEWALA",
      value: 12140,
    },
    {
      label: "YAKKADUWA",
      value: 12237,
    },
  ],
  "105": [
    {
      label: "ATTIADDY",
      value: 691,
    },
    {
      label: "CHUNDIKULI NORTH",
      value: 1380,
    },
    {
      label: "CHUNDIKULI SOUTH",
      value: 1381,
    },
    {
      label: "COLUMBUTHURAI EAST",
      value: 1390,
    },
    {
      label: "COLUMBUTHURAI WEST",
      value: 1391,
    },
    {
      label: "EACHCHAMODDAI",
      value: 2103,
    },
    {
      label: "FORT",
      value: 2441,
    },
    {
      label: "GRAND BAZAAR",
      value: 2983,
    },
    {
      label: "GURUNAGAR EAST",
      value: 3018,
    },
    {
      label: "GURUNAGAR WEST",
      value: 3019,
    },
    {
      label: "JAFFNA TOWN EAST",
      value: 3991,
    },
    {
      label: "JAFFNA TOWN WEST",
      value: 3992,
    },
    {
      label: "KODDADY",
      value: 5299,
    },
    {
      label: "MARUTHADY",
      value: 6772,
    },
    {
      label: "MOOR STREET NORTH",
      value: 7300,
    },
    {
      label: "MOOR STREET SOUTH",
      value: 7301,
    },
    {
      label: "NAVANTHURAI NORTH",
      value: 7762,
    },
    {
      label: "NAVANTHURAI SOUTH",
      value: 7763,
    },
    {
      label: "NEDUNKULAM",
      value: 7852,
    },
    {
      label: "NEW MOOR STREET",
      value: 7932,
    },
    {
      label: "PASSAIYOOR EAST",
      value: 8819,
    },
    {
      label: "PASSAIYOOR WEST",
      value: 8820,
    },
    {
      label: "RECLAMATION EAST",
      value: 9766,
    },
    {
      label: "RECLAMATION WEST",
      value: 9767,
    },
    {
      label: "SIRAMBIADY",
      value: 10139,
    },
    {
      label: "SMALL BAZAAR",
      value: 10221,
    },
    {
      label: "THIRUNAGAR",
      value: 10683,
    },
    {
      label: "VANNARPANNAI",
      value: 11320,
    },
  ],
  "106": [
    {
      label: "ARANGALA",
      value: 574,
    },
    {
      label: "ARUPPITIYA",
      value: 618,
    },
    {
      label: "ASIRI UYANA",
      value: 634,
    },
    {
      label: "ATHURUGIRIYA",
      value: 666,
    },
    {
      label: "ATHURUGIRIYA SOUTH",
      value: 667,
    },
    {
      label: "BATAPOTHA",
      value: 932,
    },
    {
      label: "BATEWELA",
      value: 938,
    },
    {
      label: "BATTARAMULLA NORTH",
      value: 950,
    },
    {
      label: "BATTARAMULLA SOUTH",
      value: 951,
    },
    {
      label: "BORALUGODA",
      value: 1228,
    },
    {
      label: "DEDIGAMUWA",
      value: 1579,
    },
    {
      label: "EMBILLADENIYA",
      value: 2279,
    },
    {
      label: "EVARIHENA",
      value: 2435,
    },
    {
      label: "HEWAGAMA",
      value: 3387,
    },
    {
      label: "HOKANDARA EAST",
      value: 3500,
    },
    {
      label: "HOKANDARA NORTH",
      value: 3501,
    },
    {
      label: "HOKANDARA SOUTH",
      value: 3502,
    },
    {
      label: "IHALA BOMIRIYA",
      value: 3677,
    },
    {
      label: "JAYAWADANAGAMA",
      value: 4040,
    },
    {
      label: "KADUWELA",
      value: 4139,
    },
    {
      label: "KALAPALUWAWA",
      value: 4240,
    },
    {
      label: "KORATHOTA",
      value: 5515,
    },
    {
      label: "KOTHALAWALA",
      value: 5596,
    },
    {
      label: "KOTUWEGODA",
      value: 5641,
    },
    {
      label: "KUMARAGEWATTA",
      value: 5771,
    },
    {
      label: "MAHADENIYA",
      value: 6271,
    },
    {
      label: "MALABE EAST",
      value: 6480,
    },
    {
      label: "MALABE NORTH",
      value: 6481,
    },
    {
      label: "MALABE WEST",
      value: 6482,
    },
    {
      label: "MUTTETTUGODA",
      value: 7526,
    },
    {
      label: "NAWAGAMUWA",
      value: 7796,
    },
    {
      label: "NAWAGAMUWA SOUTH",
      value: 7797,
    },
    {
      label: "ORUWALA",
      value: 8177,
    },
    {
      label: "PAHALA BOMIRIYA",
      value: 8245,
    },
    {
      label: "PAHALA BOMIRIYA B",
      value: 8246,
    },
    {
      label: "PAHALAWELA",
      value: 8383,
    },
    {
      label: "PORE",
      value: 9291,
    },
    {
      label: "POTHUARAWA",
      value: 9304,
    },
    {
      label: "RAGGAHAWATTA",
      value: 9534,
    },
    {
      label: "RAJAMALWATTA",
      value: 9563,
    },
    {
      label: "RANALA",
      value: 9620,
    },
    {
      label: "SHANTHALOKAGAMA",
      value: 10087,
    },
    {
      label: "SUBHOOTHIPURA",
      value: 10275,
    },
    {
      label: "THALAHENA NORTH",
      value: 10355,
    },
    {
      label: "THALAHENA SOUTH",
      value: 10356,
    },
    {
      label: "THALANGAMA NORTH A",
      value: 10376,
    },
    {
      label: "THALANGAMA NORTH B",
      value: 10377,
    },
    {
      label: "THALDIYAWALA",
      value: 10409,
    },
    {
      label: "THUNADAHENA",
      value: 10800,
    },
    {
      label: "UDUMULLA",
      value: 11028,
    },
    {
      label: "WALPOLA",
      value: 11647,
    },
    {
      label: "WEKEWATTA",
      value: 11901,
    },
    {
      label: "WELIHINDA",
      value: 11964,
    },
    {
      label: "WELIPILLEWA",
      value: 11994,
    },
    {
      label: "WELIVITA",
      value: 12002,
    },
    {
      label: "WELLANGIRIYA",
      value: 12029,
    },
    {
      label: "WICKRAMASINGHAPURA",
      value: 12173,
    },
  ],
  "107": [
    {
      label: "AMBAGAHAWEWA",
      value: 316,
    },
    {
      label: "BETHKEWA - THULANA",
      value: 1072,
    },
    {
      label: "DACHCHIHALMILLAWEWA",
      value: 1401,
    },
    {
      label: "DIGANHALMILLAWEWA",
      value: 1841,
    },
    {
      label: "DIVULWEWA",
      value: 1916,
    },
    {
      label: "ELLAWEWA",
      value: 2239,
    },
    {
      label: "GONUMERU WEWA",
      value: 2957,
    },
    {
      label: "KAHATAGASDIGILIYA EAST",
      value: 4167,
    },
    {
      label: "KAHATAGASDIGILIYA WEST",
      value: 4168,
    },
    {
      label: "KANADARA - RATHMALE",
      value: 4416,
    },
    {
      label: "KELENIKAWEWA",
      value: 4980,
    },
    {
      label: "KIRIGALLEWA",
      value: 5154,
    },
    {
      label: "KOHOMBAGASKADA",
      value: 5326,
    },
    {
      label: "KOKMADUWA",
      value: 5353,
    },
    {
      label: "KONWEWA",
      value: 5471,
    },
    {
      label: "KUDAPATTIYA",
      value: 5725,
    },
    {
      label: "KUMBUKGOLLEWA",
      value: 5803,
    },
    {
      label: "MAHA GALKANDEGAMA",
      value: 6232,
    },
    {
      label: "MAHA HAMMILLAWEWA",
      value: 6234,
    },
    {
      label: "MAHA KIRIBBEWA",
      value: 6241,
    },
    {
      label: "MAHA KUMBUKWEWA",
      value: 6247,
    },
    {
      label: "MAHA MESSALEWA",
      value: 6249,
    },
    {
      label: "MAHAWEWA",
      value: 6392,
    },
    {
      label: "MEE - KUMBUKWEWA",
      value: 7004,
    },
    {
      label: "MEKICHCHAWA",
      value: 7096,
    },
    {
      label: "MORAGAHAWELA",
      value: 7309,
    },
    {
      label: "NEKUTUNU WEWA",
      value: 7878,
    },
    {
      label: "NELUGOLLAKADA",
      value: 7895,
    },
    {
      label: "PALIPPOTHANA",
      value: 8464,
    },
    {
      label: "PANDARELLEWA",
      value: 8651,
    },
    {
      label: "PANWELLA",
      value: 8724,
    },
    {
      label: "PUNCHI HALMILLEWA",
      value: 9404,
    },
    {
      label: "RANPATHVILA",
      value: 9673,
    },
    {
      label: "RATHMALGAHAWEWA",
      value: 9720,
    },
    {
      label: "SAMADHIGAMA",
      value: 9884,
    },
    {
      label: "SAMPATHGAMA",
      value: 9919,
    },
    {
      label: "THALLATTEWA",
      value: 10436,
    },
    {
      label: "THURUKKURAGAMA",
      value: 10828,
    },
    {
      label: "TIKKAMPOTHANA",
      value: 10835,
    },
    {
      label: "WELIGOLLEWA",
      value: 11959,
    },
  ],
  "108": [
    {
      label: "ATAKALANPANNA",
      value: 645,
    },
    {
      label: "BUNGIRIYA",
      value: 1319,
    },
    {
      label: "ENDANA",
      value: 2293,
    },
    {
      label: "GABBELA",
      value: 2448,
    },
    {
      label: "KALALELLA",
      value: 4233,
    },
    {
      label: "KIRANODAGAMA",
      value: 5136,
    },
    {
      label: "MADALAGAMA",
      value: 6085,
    },
    {
      label: "MADALAGAMA COLONY",
      value: 6086,
    },
    {
      label: "MIYANAVITA EAST",
      value: 7244,
    },
    {
      label: "MIYANAVITA WEST",
      value: 7245,
    },
    {
      label: "NAMBULUWA",
      value: 7659,
    },
    {
      label: "NUGAWELA EAST",
      value: 8072,
    },
    {
      label: "NUGAWELA WEST",
      value: 8073,
    },
    {
      label: "PAHAMUNUPANNA",
      value: 8388,
    },
    {
      label: "PANAPITIYA NORTH",
      value: 8638,
    },
    {
      label: "PANAPITIYA SOUTH",
      value: 8639,
    },
    {
      label: "PANNILA",
      value: 8705,
    },
    {
      label: "UDA HAWPE",
      value: 10868,
    },
    {
      label: "WELADURA",
      value: 11904,
    },
    {
      label: "YAINNA",
      value: 12224,
    },
    {
      label: "YATAGARE",
      value: 12271,
    },
  ],
  "109": [
    {
      label: "DAVUGALAGAMA",
      value: 1559,
    },
    {
      label: "DELGODA EAST",
      value: 1683,
    },
    {
      label: "DELGODA WEST",
      value: 1684,
    },
    {
      label: "DOLEKANDA",
      value: 1992,
    },
    {
      label: "GANGALAGAMUWA",
      value: 2710,
    },
    {
      label: "HANGARANGALA",
      value: 3169,
    },
    {
      label: "HAPUGODA",
      value: 3199,
    },
    {
      label: "ILUMBAKANDA",
      value: 3862,
    },
    {
      label: "JATHUWANGODA",
      value: 4016,
    },
    {
      label: "KALAWANA EAST",
      value: 4257,
    },
    {
      label: "KALAWANA WEST",
      value: 4258,
    },
    {
      label: "KATHLANA",
      value: 4781,
    },
    {
      label: "KODIPPILIKANDA",
      value: 5311,
    },
    {
      label: "KOSWATTA",
      value: 5552,
    },
    {
      label: "KUDAWA",
      value: 5730,
    },
    {
      label: "KUDUMEERIYA",
      value: 5745,
    },
    {
      label: "KUKULEGAMA NORTH",
      value: 5750,
    },
    {
      label: "KUKULEGAMA SOUTH",
      value: 5751,
    },
    {
      label: "MEEPAGAMA",
      value: 7055,
    },
    {
      label: "PANAPOLA",
      value: 8640,
    },
    {
      label: "PITIGALAKANDA",
      value: 9147,
    },
    {
      label: "POTHUPITIYA NORTH",
      value: 9313,
    },
    {
      label: "POTHUPITIYA SOUTH",
      value: 9314,
    },
    {
      label: "RAMBUKA",
      value: 9597,
    },
    {
      label: "SAMANPURA",
      value: 9893,
    },
    {
      label: "THANABELA",
      value: 10503,
    },
    {
      label: "THAPASSARAKANDA",
      value: 10528,
    },
    {
      label: "WATHURAWA",
      value: 11782,
    },
    {
      label: "WEDDAGALA EAST",
      value: 11829,
    },
    {
      label: "WEDDAGALA WEST",
      value: 11830,
    },
    {
      label: "WEMBIYAGODA",
      value: 12051,
    },
    {
      label: "WEWAGAMA",
      value: 12135,
    },
    {
      label: "WEWELKANDURA",
      value: 12162,
    },
  ],
  "111": [
    {
      label: "ALANKUDAWA",
      value: 176,
    },
    {
      label: "ANAWASALA",
      value: 451,
    },
    {
      label: "ANDANKANNIYA",
      value: 456,
    },
    {
      label: "DALUWA",
      value: 1435,
    },
    {
      label: "DUECHBAY",
      value: 2052,
    },
    {
      label: "ETTALA",
      value: 2429,
    },
    {
      label: "KANDAKULIYA",
      value: 4458,
    },
    {
      label: "KANDAKULIYA KUDAWA",
      value: 4459,
    },
    {
      label: "KARAMBA",
      value: 4658,
    },
    {
      label: "KURINJIPITIYA NORTH",
      value: 5856,
    },
    {
      label: "KURINJIPITIYA SOUTH",
      value: 5857,
    },
    {
      label: "MAMPURIYA",
      value: 6610,
    },
    {
      label: "MANDALAKUDAWA",
      value: 6641,
    },
    {
      label: "MUDALAPPALIYA",
      value: 7385,
    },
    {
      label: "MUSALPITIYA",
      value: 7505,
    },
    {
      label: "NARAKKALLIYA",
      value: 7689,
    },
    {
      label: "NAWAKKADUWA",
      value: 7800,
    },
    {
      label: "NIRMALAPURA",
      value: 8018,
    },
    {
      label: "NOROCHCHOLA",
      value: 8058,
    },
    {
      label: "PALAKUDAWA",
      value: 8409,
    },
    {
      label: "PALLIWASALTHURE",
      value: 8542,
    },
    {
      label: "PALLIYAWATTA",
      value: 8548,
    },
    {
      label: "PANIYADIYA",
      value: 8683,
    },
    {
      label: "PERIYAKUDIRIPPU",
      value: 9011,
    },
    {
      label: "PUDUKUDIRIPPUWA",
      value: 9346,
    },
    {
      label: "SINNAKUDIRIPPU",
      value: 10130,
    },
    {
      label: "THALAVILA EAST",
      value: 10392,
    },
    {
      label: "THALAVILA WEST",
      value: 10393,
    },
    {
      label: "THETHAPOLA",
      value: 10620,
    },
    {
      label: "THIGALI",
      value: 10634,
    },
    {
      label: "WANNI MUNDALAMA",
      value: 11684,
    },
  ],
  "112": [
    {
      label: "AKKARAGODA",
      value: 106,
    },
    {
      label: "ALUBOGAHALANDA",
      value: 231,
    },
    {
      label: "ALWISWATTA",
      value: 293,
    },
    {
      label: "ARIYAGAMA",
      value: 596,
    },
    {
      label: "BOTNIKWATTA",
      value: 1255,
    },
    {
      label: "DEDIYAWALA",
      value: 1581,
    },
    {
      label: "DELDOOWA",
      value: 1665,
    },
    {
      label: "DESHASTHRA KALUTARA",
      value: 1764,
    },
    {
      label: "DESHASTHRA KALUTARA WEST",
      value: 1765,
    },
    {
      label: "DIYAGAMA",
      value: 1929,
    },
    {
      label: "DODAMMULLA",
      value: 1960,
    },
    {
      label: "ETAVILA",
      value: 2377,
    },
    {
      label: "ETHAGAMA EAST",
      value: 2384,
    },
    {
      label: "ETHAGAMA WEST",
      value: 2385,
    },
    {
      label: "ETHANAMADALA",
      value: 2389,
    },
    {
      label: "GALLASSA",
      value: 2575,
    },
    {
      label: "GODAPARAGAHAHENA",
      value: 2859,
    },
    {
      label: "HABARALAGAHALANDA",
      value: 3035,
    },
    {
      label: "ILUKWATTA",
      value: 3860,
    },
    {
      label: "JAWATTA",
      value: 4017,
    },
    {
      label: "KAJUDOOWAWATTA",
      value: 4211,
    },
    {
      label: "KALAMULLA EAST",
      value: 4237,
    },
    {
      label: "KALAMULLA NORTH",
      value: 4238,
    },
    {
      label: "KALAMULLA SOUTH",
      value: 4239,
    },
    {
      label: "KALAPUGAMA",
      value: 4244,
    },
    {
      label: "KALAPUGAMA WEST",
      value: 4245,
    },
    {
      label: "KALAPUWA",
      value: 4247,
    },
    {
      label: "KALUTARA NORTH",
      value: 4361,
    },
    {
      label: "KALUTARA SOUTH",
      value: 4362,
    },
    {
      label: "KALUTARA SOUTH A",
      value: 4363,
    },
    {
      label: "KAPUHENA",
      value: 4595,
    },
    {
      label: "KATUKURUNDA",
      value: 4845,
    },
    {
      label: "KITHULAWA",
      value: 5243,
    },
    {
      label: "KUDA GONADOOWA",
      value: 5669,
    },
    {
      label: "KUDA HEENATIYANGALA",
      value: 5670,
    },
    {
      label: "KUDA WASKADUWA EAST",
      value: 5689,
    },
    {
      label: "KUDA WASKADUWA NORTH",
      value: 5690,
    },
    {
      label: "KUDA WASKADUWA SOUTH",
      value: 5691,
    },
    {
      label: "KUDA WASKADUWA WEST",
      value: 5692,
    },
    {
      label: "KURUNDUWATTA",
      value: 5891,
    },
    {
      label: "MAHA GONADOOWA",
      value: 6233,
    },
    {
      label: "MAHA HEENATIYANGALA",
      value: 6236,
    },
    {
      label: "MAHAREKMA",
      value: 6359,
    },
    {
      label: "MAHAWASKADUWA NORTH",
      value: 6376,
    },
    {
      label: "MAHAWASKADUWA SOUTH",
      value: 6377,
    },
    {
      label: "MAHAWATTA",
      value: 6378,
    },
    {
      label: "MALWATTA",
      value: 6586,
    },
    {
      label: "MAWALA",
      value: 6867,
    },
    {
      label: "MAWALA SOUTH",
      value: 6868,
    },
    {
      label: "MEDA POTHUPITIYA",
      value: 6922,
    },
    {
      label: "MELEGAMA NORTH",
      value: 7100,
    },
    {
      label: "MELEGAMA SOUTH",
      value: 7101,
    },
    {
      label: "MESTIYA",
      value: 7129,
    },
    {
      label: "MORONTHUDUWA NORTH",
      value: 7366,
    },
    {
      label: "MORONTHUDUWA SOUTH",
      value: 7367,
    },
    {
      label: "NAGODA SOUTH",
      value: 7582,
    },
    {
      label: "NAGODA WEST",
      value: 7583,
    },
    {
      label: "NANDOOWA",
      value: 7671,
    },
    {
      label: "NUGAGODA",
      value: 8064,
    },
    {
      label: "PALATHOTA",
      value: 8442,
    },
    {
      label: "PANAPITIYA NORTH",
      value: 8638,
    },
    {
      label: "PANAPITIYA SOUTH",
      value: 8639,
    },
    {
      label: "PARADUWA",
      value: 8731,
    },
    {
      label: "POHODDARAMULLA EAST",
      value: 9185,
    },
    {
      label: "POHODDARAMULLA WEST",
      value: 9186,
    },
    {
      label: "POTHUPITIYA EAST",
      value: 9312,
    },
    {
      label: "POTHUPITIYA NORTH",
      value: 9313,
    },
    {
      label: "POTHUPITIYA SOUTH",
      value: 9314,
    },
    {
      label: "POTHUPITIYA WEST",
      value: 9315,
    },
    {
      label: "PULARTAN",
      value: 9365,
    },
    {
      label: "RAJAWATTA ALUTH KOTASA",
      value: 9569,
    },
    {
      label: "RAJAWATTA PARANA KOTASA",
      value: 9570,
    },
    {
      label: "RANNUNGALA",
      value: 9670,
    },
    {
      label: "THEKKAWATTA",
      value: 10561,
    },
    {
      label: "THOTUPALA",
      value: 10768,
    },
    {
      label: "UGGALBADA EAST",
      value: 11086,
    },
    {
      label: "UGGALBADA WEST",
      value: 11087,
    },
    {
      label: "USGODELLA",
      value: 11247,
    },
    {
      label: "USWATTA",
      value: 11253,
    },
    {
      label: "VIDYASARA",
      value: 11413,
    },
    {
      label: "VILEGODA NORTH",
      value: 11450,
    },
    {
      label: "VILEGODA SOUTH",
      value: 11451,
    },
    {
      label: "WATTAMULLA",
      value: 11796,
    },
    {
      label: "WELAPURA",
      value: 11923,
    },
    {
      label: "WENIWELKETIYA",
      value: 12057,
    },
    {
      label: "WETTUMAKADA",
      value: 12128,
    },
    {
      label: "WIJERATHNAWATTA",
      value: 12191,
    },
  ],
  "113": [
    {
      label: "AKURUGODA",
      value: 145,
    },
    {
      label: "BERAGAMMULLA",
      value: 1055,
    },
    {
      label: "BIBULEWELA",
      value: 1082,
    },
    {
      label: "ERIYATHOTA",
      value: 2345,
    },
    {
      label: "GANEGAMA",
      value: 2690,
    },
    {
      label: "GATHARA EAST",
      value: 2757,
    },
    {
      label: "GATHARA NORTH",
      value: 2758,
    },
    {
      label: "GATHARA WEST",
      value: 2759,
    },
    {
      label: "GODAWA",
      value: 2869,
    },
    {
      label: "IHALA VITIYALA EAST",
      value: 3790,
    },
    {
      label: "IHALA VITIYALA NORTH",
      value: 3791,
    },
    {
      label: "IHALA VITIYALA SOUTH",
      value: 3792,
    },
    {
      label: "IHALA VITIYALA WEST",
      value: 3793,
    },
    {
      label: "KAHAGALA",
      value: 4145,
    },
    {
      label: "KAHAGALA SOUTH",
      value: 4146,
    },
    {
      label: "KAMBURUPITIYA",
      value: 4407,
    },
    {
      label: "KARAGODA UYANGODA 1 ATHA EAST",
      value: 4624,
    },
    {
      label: "KARAGODA UYANGODA 1 ATHA WEST",
      value: 4625,
    },
    {
      label: "KARAGODA UYANGODA 2 EAST",
      value: 4626,
    },
    {
      label: "KARAGODA UYANGODA 2 WEST",
      value: 4627,
    },
    {
      label: "KARAPUTUGALA NORTH",
      value: 4707,
    },
    {
      label: "KARAPUTUGALA SOUTH",
      value: 4708,
    },
    {
      label: "LENABATUWA",
      value: 5980,
    },
    {
      label: "MAGAMURE",
      value: 6199,
    },
    {
      label: "MALANA",
      value: 6494,
    },
    {
      label: "MAPALANA MANGIN IHALA",
      value: 6710,
    },
    {
      label: "MAPALANA MANGIN PAHALA",
      value: 6711,
    },
    {
      label: "NARANDENIYA EAST",
      value: 7695,
    },
    {
      label: "NARANDENIYA WEST",
      value: 7696,
    },
    {
      label: "PALOLPITIYA",
      value: 8552,
    },
    {
      label: "PITAKATUWANA",
      value: 9131,
    },
    {
      label: "SAPUGODA",
      value: 9972,
    },
    {
      label: "SEEWELGAMA",
      value: 10014,
    },
    {
      label: "THUMBE",
      value: 10785,
    },
    {
      label: "ULLALA EAST",
      value: 11125,
    },
    {
      label: "ULLALA MASMULLA",
      value: 11126,
    },
    {
      label: "ULLALA WEST",
      value: 11127,
    },
    {
      label: "URAPOLA EAST",
      value: 11206,
    },
    {
      label: "URAPOLA WEST",
      value: 11207,
    },
  ],
  "114": [
    {
      label: "BADULUOYA EAST",
      value: 736,
    },
    {
      label: "BADULUOYA WEST",
      value: 737,
    },
    {
      label: "BERAMADA",
      value: 1062,
    },
    {
      label: "BOGAHAKUMBURA",
      value: 1123,
    },
    {
      label: "BOKANORUWA",
      value: 1148,
    },
    {
      label: "BOPITIYA",
      value: 1204,
    },
    {
      label: "DIKKUMBURA",
      value: 1864,
    },
    {
      label: "GALAUDA",
      value: 2517,
    },
    {
      label: "GODUNNA",
      value: 2884,
    },
    {
      label: "HAPATHGAMUWA",
      value: 3184,
    },
    {
      label: "HEVANDANA",
      value: 3385,
    },
    {
      label: "KANDAKEPOO ULPOTHA",
      value: 4456,
    },
    {
      label: "KANDAKETIYA",
      value: 4457,
    },
    {
      label: "KIRIVEHERA",
      value: 5209,
    },
    {
      label: "KIVULEGEDARA",
      value: 5277,
    },
    {
      label: "MAHAKELE",
      value: 6314,
    },
    {
      label: "MAHATHENNA",
      value: 6366,
    },
    {
      label: "MALIYADDA",
      value: 6551,
    },
    {
      label: "MUDAGAMUWA",
      value: 7383,
    },
    {
      label: "NARANGALA",
      value: 7697,
    },
    {
      label: "PALLEWELA",
      value: 8527,
    },
    {
      label: "THALAKUMBURA",
      value: 10362,
    },
    {
      label: "THETILLA",
      value: 10621,
    },
    {
      label: "WASANAGAMA",
      value: 11736,
    },
    {
      label: "WELAOYA",
      value: 11921,
    },
    {
      label: "WEWATHENNA",
      value: 12148,
    },
  ],
  "115": [
    {
      label: "ELEPHANT PASS",
      value: 2205,
    },
    {
      label: "KALMADUNAGAR",
      value: 4287,
    },
    {
      label: "KANDAWALAI",
      value: 4486,
    },
    {
      label: "KORAKKANKADDU",
      value: 5501,
    },
    {
      label: "KUMARAPURAM",
      value: 5775,
    },
    {
      label: "MURASUMODDAI",
      value: 7482,
    },
    {
      label: "PARANTHAN TOWN",
      value: 8787,
    },
    {
      label: "PERIYAKULAM",
      value: 9012,
    },
    {
      label: "PIRAMANTHALARU",
      value: 9121,
    },
    {
      label: "PULIYAMPOKKANAI",
      value: 9372,
    },
    {
      label: "PUNNAINEERAVI",
      value: 9429,
    },
    {
      label: "THADDUVANKODDY",
      value: 10328,
    },
    {
      label: "THARMAPURAM EAST",
      value: 10540,
    },
    {
      label: "THARMAPURAM WEST",
      value: 10541,
    },
    {
      label: "UMAIYALPURAM",
      value: 11143,
    },
    {
      label: "URIYAN",
      value: 11218,
    },
  ],
  "118": [
    {
      label: "AKKARAYANKULAM",
      value: 137,
    },
    {
      label: "AMBALKULAM",
      value: 353,
    },
    {
      label: "AMBALNAGAR",
      value: 354,
    },
    {
      label: "ANAIVILUNTHANKULAM",
      value: 440,
    },
    {
      label: "ANANDAPURAM",
      value: 445,
    },
    {
      label: "BARATHYPURAM",
      value: 889,
    },
    {
      label: "CIVIC CENTRE",
      value: 1387,
    },
    {
      label: "JEYANTHINAGAR",
      value: 4045,
    },
    {
      label: "KANAGAMBIGAIKULAM",
      value: 4419,
    },
    {
      label: "KANAGAPURAM",
      value: 4420,
    },
    {
      label: "KANESHAPURAM",
      value: 4523,
    },
    {
      label: "KANNAGAIPURAM",
      value: 4539,
    },
    {
      label: "KILINOCHCHI TOWN",
      value: 5095,
    },
    {
      label: "KONAVIL",
      value: 5427,
    },
    {
      label: "KRISHNAPURAM",
      value: 5660,
    },
    {
      label: "MALAIYALAPURAM",
      value: 6487,
    },
    {
      label: "MARUTHANAGAR",
      value: 6780,
    },
    {
      label: "MAVADYAMMAN",
      value: 6852,
    },
    {
      label: "MAYAVANOOR",
      value: 6898,
    },
    {
      label: "PANNAKANDY",
      value: 8694,
    },
    {
      label: "PERIYA PARANTHAN",
      value: 8996,
    },
    {
      label: "PONNAGAR",
      value: 9252,
    },
    {
      label: "PUTHUMURIPPU",
      value: 9473,
    },
    {
      label: "RAMANATHAPURAM",
      value: 9587,
    },
    {
      label: "RATHINAPURAM",
      value: 9707,
    },
    {
      label: "SELVANAGAR",
      value: 10027,
    },
    {
      label: "SIVANAGAR",
      value: 10179,
    },
    {
      label: "SKANDAPURAM",
      value: 10219,
    },
    {
      label: "",
      value: 10684,
    },
    {
      label: "",
      value: 10685,
    },
    {
      label: "",
      value: 10692,
    },
    {
      label: "THIRUVAIARU WEST",
      value: 10693,
    },
    {
      label: "THONDAMANNAGAR",
      value: 10734,
    },
    {
      label: "URITHIRAPURAM EAST",
      value: 11215,
    },
    {
      label: "URITHIRAPURAM NORTH",
      value: 11216,
    },
    {
      label: "URITHIRAPURAM WEST",
      value: 11217,
    },
    {
      label: "UTHAYANAGAR EAST",
      value: 11256,
    },
    {
      label: "UTHAYANAGAR WEST",
      value: 11257,
    },
    {
      label: "UTTUPULAM",
      value: 11265,
    },
    {
      label: "VADDAKACHCHI",
      value: 11285,
    },
    {
      label: "VANNERIKULAM",
      value: 11324,
    },
    {
      label: "VIVEKANANDANAGAR",
      value: 11491,
    },
  ],
  "119": [
    {
      label: "ANGANAKETIYA",
      value: 487,
    },
    {
      label: "ANGULUGALLA",
      value: 493,
    },
    {
      label: "BELIGASWELLA",
      value: 1015,
    },
    {
      label: "BORAKANDA",
      value: 1213,
    },
    {
      label: "DANGAHAVILA",
      value: 1520,
    },
    {
      label: "DIVIYAGAHAWELA",
      value: 1893,
    },
    {
      label: "DIYAPITAGALLANA",
      value: 1942,
    },
    {
      label: "EGODAWELA",
      value: 2144,
    },
    {
      label: "GALAGODA ATTA",
      value: 2483,
    },
    {
      label: "GALPOTTAWALA",
      value: 2618,
    },
    {
      label: "HALGAHAWELLA",
      value: 3077,
    },
    {
      label: "HIPANKANDA",
      value: 3459,
    },
    {
      label: "IHALA KIRIPEDDA",
      value: 3725,
    },
    {
      label: "JAYABIMA",
      value: 4018,
    },
    {
      label: "KALUWALAGODA",
      value: 4374,
    },
    {
      label: "KARANDENIYA NORTH",
      value: 4691,
    },
    {
      label: "KARANDENIYA SOUTH",
      value: 4692,
    },
    {
      label: "KIRINUGE",
      value: 5202,
    },
    {
      label: "KIRIPEDDA",
      value: 5206,
    },
    {
      label: "KURUNDUGAHA HETHEKMA",
      value: 5885,
    },
    {
      label: "LENAGAL PALATHA",
      value: 5983,
    },
    {
      label: "MABINGODA",
      value: 6064,
    },
    {
      label: "MADAKUMBURA",
      value: 6083,
    },
    {
      label: "MAGALA NORTH",
      value: 6187,
    },
    {
      label: "MAGALA SOUTH",
      value: 6188,
    },
    {
      label: "MAHAEDANDA",
      value: 6278,
    },
    {
      label: "MAHAGODA",
      value: 6290,
    },
    {
      label: "MANDAKANDA",
      value: 6639,
    },
    {
      label: "MEEGASPITIYA",
      value: 7040,
    },
    {
      label: "MENDORAWALA",
      value: 7115,
    },
    {
      label: "PEHEMBIYAKANDA",
      value: 8911,
    },
    {
      label: "RANDENIGAMA",
      value: 9636,
    },
    {
      label: "SIRIPURA",
      value: 10155,
    },
    {
      label: "THALGAHAWATTA",
      value: 10415,
    },
    {
      label: "UNAGASWELA",
      value: 11149,
    },
    {
      label: "URAGASMANHANDIYA EAST",
      value: 11191,
    },
    {
      label: "URAGASMANHANDIYA NORTH",
      value: 11192,
    },
    {
      label: "URAGASMANHANDIYA SOUTH",
      value: 11193,
    },
    {
      label: "WALINGURUKETIYA",
      value: 11626,
    },
    {
      label: "YATAGALA",
      value: 12268,
    },
  ],
  "121": [
    {
      label: "ALUTHGAMA",
      value: 259,
    },
    {
      label: "DANGASWEWA",
      value: 1531,
    },
    {
      label: "EGODAPITIYA",
      value: 2142,
    },
    {
      label: "IHALA PULIYANKULAMA",
      value: 3776,
    },
    {
      label: "IPALOGAMA",
      value: 3939,
    },
    {
      label: "KARUWALAGASWEWA",
      value: 4756,
    },
    {
      label: "KUDA MEDAWACHCHIYA",
      value: 5677,
    },
    {
      label: "KUMBUKWEWA",
      value: 5813,
    },
    {
      label: "MEDAGAMA",
      value: 6933,
    },
    {
      label: "MOONAMALGASWEWA",
      value: 7295,
    },
    {
      label: "MURUKKUWATAWANA",
      value: 7488,
    },
    {
      label: "PAHALA PULIYANKULAMA",
      value: 8344,
    },
    {
      label: "PAHARIYA",
      value: 8390,
    },
    {
      label: "PALEEGAMA",
      value: 8457,
    },
    {
      label: "PALUGASSEGAMA",
      value: 8568,
    },
    {
      label: "PAWATTAMADUWA",
      value: 8898,
    },
    {
      label: "RAMBAWEWA",
      value: 9592,
    },
    {
      label: "RANAWARAPITIYA",
      value: 9632,
    },
    {
      label: "SALIYAWEWA",
      value: 9880,
    },
    {
      label: "SALIYAWEWA - B",
      value: 9881,
    },
    {
      label: "SALIYAWEWA - C",
      value: 9882,
    },
    {
      label: "THABBOWA NORTH",
      value: 10324,
    },
    {
      label: "THABBOWA SOUTH",
      value: 10325,
    },
    {
      label: "THAMBAPANNIYA",
      value: 10472,
    },
    {
      label: "THEWANUWARA",
      value: 10625,
    },
    {
      label: "WEERAPURA",
      value: 11867,
    },
  ],
  "122": [
    {
      label: "ADIKKANDIYA",
      value: 54,
    },
    {
      label: "AIR FORCE CAMP",
      value: 83,
    },
    {
      label: "AKKARA 50",
      value: 100,
    },
    {
      label: "ALAWATHUPITIYA",
      value: 195,
    },
    {
      label: "AMANDOLUWA",
      value: 298,
    },
    {
      label: "AMBALAMMULLA",
      value: 340,
    },
    {
      label: "ANDIAMBALAMA EAST",
      value: 465,
    },
    {
      label: "ANDIAMBALAMA WEST",
      value: 466,
    },
    {
      label: "BAMBUKULIYA",
      value: 826,
    },
    {
      label: "BANDARAWATTA EAST",
      value: 862,
    },
    {
      label: "BANDARAWATTA WEST",
      value: 863,
    },
    {
      label: "DAMBADURAYA",
      value: 1452,
    },
    {
      label: "DEWAMOTTAWA",
      value: 1804,
    },
    {
      label: "ETHGALA",
      value: 2395,
    },
    {
      label: "ETHGALA SOUTH",
      value: 2398,
    },
    {
      label: "EVARIWATTA",
      value: 2436,
    },
    {
      label: "GANEPOLA",
      value: 2702,
    },
    {
      label: "HEENATIYANA EAST",
      value: 3286,
    },
    {
      label: "HEENATIYANA SOUTH",
      value: 3287,
    },
    {
      label: "HEENATIYANA WEST",
      value: 3288,
    },
    {
      label: "IHALA KANDAWALA",
      value: 3715,
    },
    {
      label: "K.C. DE SILVA PURAYA",
      value: 4054,
    },
    {
      label: "KADIRANA",
      value: 4110,
    },
    {
      label: "KADIRANA NORTH",
      value: 4111,
    },
    {
      label: "KADIRANA SOUTH",
      value: 4112,
    },
    {
      label: "KALAHAPITIYA",
      value: 4228,
    },
    {
      label: "KALUWARIPPUWA WEST",
      value: 4388,
    },
    {
      label: "KASAGAHAWATTA",
      value: 4758,
    },
    {
      label: "KATANA EAST",
      value: 4767,
    },
    {
      label: "KATANA NORTH",
      value: 4768,
    },
    {
      label: "KATANA WEST",
      value: 4769,
    },
    {
      label: "KATIYALA",
      value: 4784,
    },
    {
      label: "KATUNAYAKA NORTH",
      value: 4852,
    },
    {
      label: "KATUNAYAKA SOUTH",
      value: 4853,
    },
    {
      label: "KATUWAPITIYA",
      value: 4869,
    },
    {
      label: "KIMBULAPITIYA CENTRAL",
      value: 5099,
    },
    {
      label: "KIMBULAPITIYA NORTH",
      value: 5100,
    },
    {
      label: "KIMBULAPITIYA SOUTH",
      value: 5101,
    },
    {
      label: "KIMBULAPITIYA WEST",
      value: 5102,
    },
    {
      label: "KONDAGAMMULLA",
      value: 5431,
    },
    {
      label: "KOTUGODA",
      value: 5633,
    },
    {
      label: "KOVINNA",
      value: 5656,
    },
    {
      label: "KURANA KATUNAYAKA NORTH",
      value: 5843,
    },
    {
      label: "KURANA KATUNAYAKA SOUTH",
      value: 5844,
    },
    {
      label: "KURANA KATUNAYAKA WEST",
      value: 5845,
    },
    {
      label: "KUSWALA",
      value: 5919,
    },
    {
      label: "LANSIYAWADIYA",
      value: 5958,
    },
    {
      label: "LIYANAGEMULLA NORTH",
      value: 6023,
    },
    {
      label: "LIYANAGEMULLA SOUTH",
      value: 6024,
    },
    {
      label: "MADAWALA",
      value: 6103,
    },
    {
      label: "MAHA ETHGALA",
      value: 6231,
    },
    {
      label: "MAHAHUNUPITIYA EAST",
      value: 6297,
    },
    {
      label: "MAHAHUNUPITIYA WEST",
      value: 6298,
    },
    {
      label: "MANAVERIYA",
      value: 6630,
    },
    {
      label: "MOOKALANGAMUWA EAST",
      value: 7286,
    },
    {
      label: "MOOKALANGAMUWA WEST",
      value: 7287,
    },
    {
      label: "MURUTHANA",
      value: 7498,
    },
    {
      label: "MUTHUWADIYA",
      value: 7521,
    },
    {
      label: "PAHALA KADIRANA",
      value: 8285,
    },
    {
      label: "PAHALA KANDAWALA",
      value: 8290,
    },
    {
      label: "RADDOLUGAMA NORTH",
      value: 9521,
    },
    {
      label: "RADDOLUGAMA NORTH A",
      value: 9522,
    },
    {
      label: "RADDOLUGAMA SOUTH",
      value: 9523,
    },
    {
      label: "RADDOLUGAMA SOUTH A",
      value: 9524,
    },
    {
      label: "RADDOLUWA NORTH",
      value: 9525,
    },
    {
      label: "RADDOLUWA SOUTH",
      value: 9526,
    },
    {
      label: "RADDOLUWA WEST",
      value: 9527,
    },
    {
      label: "SEEDUWA",
      value: 9992,
    },
    {
      label: "SELLAKANDA",
      value: 10025,
    },
    {
      label: "THEMPALA",
      value: 10590,
    },
    {
      label: "THIMBIRIGASKATUWA",
      value: 10654,
    },
    {
      label: "THOPPUWA",
      value: 10740,
    },
    {
      label: "UDAMMITA NORTH",
      value: 10942,
    },
    {
      label: "UDAMMITA SOUTH",
      value: 10943,
    },
    {
      label: "UDANGAWA",
      value: 10949,
    },
    {
      label: "WALANAGODA",
      value: 11586,
    },
    {
      label: "WALPOLA",
      value: 11647,
    },
    {
      label: "WELIHENA NORTH",
      value: 11962,
    },
    {
      label: "WELIHENA SOUTH",
      value: 11963,
    },
  ],
  "123": [
    {
      label: "DETAGAMUWA",
      value: 1766,
    },
    {
      label: "KANDASURINDUGAMA",
      value: 4482,
    },
    {
      label: "KARAVILE",
      value: 4725,
    },
    {
      label: "KATHARAGAMA",
      value: 4778,
    },
    {
      label: "SELLA KATHARAGAMA",
      value: 10024,
    },
  ],
  "124": [
    {
      label: "KATTANKUDY DIVISION 1",
      value: 4803,
    },
    {
      label: "KATTANKUDY DIVISION 1 SOUTH",
      value: 4804,
    },
    {
      label: "KATTANKUDY DIVISION 2",
      value: 4805,
    },
    {
      label: "KATTANKUDY DIVISION 2 NORTH",
      value: 4806,
    },
    {
      label: "KATTANKUDY DIVISION 3",
      value: 4807,
    },
    {
      label: "KATTANKUDY DIVISION 3 EAST",
      value: 4808,
    },
    {
      label: "KATTANKUDY DIVISION 3 WEST",
      value: 4809,
    },
    {
      label: "KATTANKUDY DIVISION 4",
      value: 4810,
    },
    {
      label: "KATTANKUDY DIVISION 4 WEST",
      value: 4811,
    },
    {
      label: "KATTANKUDY DIVISION 5",
      value: 4812,
    },
    {
      label: "KATTANKUDY DIVISION 5 SOUTH",
      value: 4813,
    },
    {
      label: "KATTANKUDY DIVISION 6",
      value: 4814,
    },
    {
      label: "KATTANKUDY DIVISION 6 SOUTH",
      value: 4815,
    },
    {
      label: "KATTANKUDY DIVISION 6 WEST",
      value: 4816,
    },
    {
      label: "NEW KATTANKUDY DIVISION EAST",
      value: 7928,
    },
    {
      label: "NEW KATTANKUDY DIVISION NORTH",
      value: 7929,
    },
    {
      label: "NEW KATTANKUDY DIVISION SOUTH",
      value: 7930,
    },
    {
      label: "NEW KATTANKUDY DIVISION WEST",
      value: 7931,
    },
  ],
  "126": [
    {
      label: "ADALUGODA",
      value: 24,
    },
    {
      label: "ALUPOTHDENIYA PAHALA",
      value: 241,
    },
    {
      label: "AMBAGAHAHENA",
      value: 307,
    },
    {
      label: "AMBAGAS ARA",
      value: 322,
    },
    {
      label: "ARABODA",
      value: 532,
    },
    {
      label: "BENGAMUKANDA",
      value: 1045,
    },
    {
      label: "BINTHENNA",
      value: 1090,
    },
    {
      label: "BOOKENDAYAYA",
      value: 1188,
    },
    {
      label: "DAMBETHALAWA",
      value: 1469,
    },
    {
      label: "DANGALAKANDA",
      value: 1525,
    },
    {
      label: "GALLINDAMULLA",
      value: 2589,
    },
    {
      label: "GALPOTHUKANDA",
      value: 2616,
    },
    {
      label: "GANGULANDENIYA",
      value: 2726,
    },
    {
      label: "HEDIWATTA",
      value: 3273,
    },
    {
      label: "HELLALA",
      value: 3328,
    },
    {
      label: "HINGURAKANDA",
      value: 3442,
    },
    {
      label: "HORAVINNA",
      value: 3561,
    },
    {
      label: "KARAMETIYA",
      value: 4665,
    },
    {
      label: "KARIVILAKANDA",
      value: 4733,
    },
    {
      label: "KATUWANA",
      value: 4864,
    },
    {
      label: "KEHELWATTA",
      value: 4949,
    },
    {
      label: "KOHOMPORUWA",
      value: 5334,
    },
    {
      label: "KONGASTHENNA",
      value: 5452,
    },
    {
      label: "KUDAGODA EAST",
      value: 5704,
    },
    {
      label: "KUDAGODA WEST",
      value: 5705,
    },
    {
      label: "LABUHENGODA",
      value: 5931,
    },
    {
      label: "MEDAKANDA",
      value: 6951,
    },
    {
      label: "MEEMANAKOLADENIYA",
      value: 7052,
    },
    {
      label: "MELLAKETIGODA",
      value: 7106,
    },
    {
      label: "MIDDENIYA EAST",
      value: 7156,
    },
    {
      label: "MIDDENIYA NORTH",
      value: 7157,
    },
    {
      label: "MIDDENIYA WEST",
      value: 7158,
    },
    {
      label: "MURUNGASYAYA EAST",
      value: 7490,
    },
    {
      label: "MURUNGASYAYA WEST",
      value: 7491,
    },
    {
      label: "OBADAGAHADENIYA",
      value: 8100,
    },
    {
      label: "PANGAMVILAYAYA",
      value: 8672,
    },
    {
      label: "PUWAKGAS ARA",
      value: 9496,
    },
    {
      label: "RANASINGODA",
      value: 9625,
    },
    {
      label: "RITIGAHA YAYA",
      value: 9805,
    },
    {
      label: "RUKMALPITIYA",
      value: 9837,
    },
    {
      label: "SAPUGAHAYAYA",
      value: 9969,
    },
    {
      label: "SIYAMBALAMURAYA",
      value: 10203,
    },
    {
      label: "SIYARAPITIYA",
      value: 10218,
    },
    {
      label: "THALWATTA",
      value: 10452,
    },
    {
      label: "UDA ALUPOTHDENIYA",
      value: 10858,
    },
    {
      label: "UDAGOMADIYA",
      value: 10901,
    },
    {
      label: "UDAWELMULLA",
      value: 10990,
    },
    {
      label: "ULAHITIYAWA",
      value: 11113,
    },
    {
      label: "ULAHITIYAWA EAST",
      value: 11114,
    },
    {
      label: "ULAHITIYAWA WEST",
      value: 11115,
    },
    {
      label: "WALGAMMULLA",
      value: 11620,
    },
    {
      label: "WATHUKANDA",
      value: 11769,
    },
    {
      label: "WEERAKKUTTIGODA",
      value: 11853,
    },
    {
      label: "WELIPITIYA",
      value: 11996,
    },
    {
      label: "WELIPITIYA EAST",
      value: 11997,
    },
    {
      label: "WELIPITIYA WEST",
      value: 11998,
    },
  ],
  "127": [
    {
      label: "AIYATHIGEWEWA",
      value: 85,
    },
    {
      label: "BANDARAULPATHA",
      value: 860,
    },
    {
      label: "BELLANKADAWALA",
      value: 1026,
    },
    {
      label: "D 04 WAHALKADA",
      value: 1395,
    },
    {
      label: "D 05 WAHALKADA",
      value: 1396,
    },
    {
      label: "D 06 WAHALKADA",
      value: 1397,
    },
    {
      label: "ETHALVIDDA WEWA",
      value: 2387,
    },
    {
      label: "GALAWEWA",
      value: 2523,
    },
    {
      label: "GONAHATHDENAWA",
      value: 2916,
    },
    {
      label: "GONUMERIYAWA",
      value: 2956,
    },
    {
      label: "HALMILLAWETIYA",
      value: 3097,
    },
    {
      label: "HANDAGALA KIRIMETIYAWA",
      value: 3148,
    },
    {
      label: "HERATHHALMILLEWA",
      value: 3369,
    },
    {
      label: "IHALA USGOLLEWA",
      value: 3788,
    },
    {
      label: "KAHATAGOLLEWA",
      value: 4172,
    },
    {
      label: "KANUGAHAWEWA",
      value: 4563,
    },
    {
      label: "KEBITHIGOLLEWA",
      value: 4913,
    },
    {
      label: "KIRIKETUWEWA",
      value: 5160,
    },
    {
      label: "KUNCHUTTUWA",
      value: 5829,
    },
    {
      label: "KURULUGAMA",
      value: 5873,
    },
    {
      label: "PUNCHIMUDAGAMA",
      value: 9410,
    },
    {
      label: "SINHALAETAWEERAWEWA",
      value: 10114,
    },
    {
      label: "THAMMENNAWA",
      value: 10493,
    },
    {
      label: "THIMBIRIWEWA",
      value: 10659,
    },
    {
      label: "THITTAGONEWA",
      value: 10711,
    },
    {
      label: "WATTEWEWA",
      value: 11807,
    },
  ],
  "128": [
    {
      label: "ALAPALAWALA",
      value: 181,
    },
    {
      label: "AMBANPITIYA",
      value: 361,
    },
    {
      label: "ATHURUPANA",
      value: 669,
    },
    {
      label: "BELIHULWANA",
      value: 1018,
    },
    {
      label: "BERAGALA",
      value: 1049,
    },
    {
      label: "BOGALA",
      value: 1133,
    },
    {
      label: "BOSSELLA",
      value: 1242,
    },
    {
      label: "BULUGAHADENIYA",
      value: 1305,
    },
    {
      label: "BULURUPPA",
      value: 1313,
    },
    {
      label: "DEEWELA MEDAGAMA",
      value: 1607,
    },
    {
      label: "DEEWELA PALLEGAMA",
      value: 1608,
    },
    {
      label: "DIKELLA",
      value: 1855,
    },
    {
      label: "DIKKOHUPITIYA",
      value: 1863,
    },
    {
      label: "DIMBULGAMUWA",
      value: 1879,
    },
    {
      label: "DIYAGAMA",
      value: 1929,
    },
    {
      label: "EKIRIYAGALA",
      value: 2165,
    },
    {
      label: "EREGAMA",
      value: 2332,
    },
    {
      label: "EWUNUGALLA",
      value: 2438,
    },
    {
      label: "GANTHUNA PALLEGAMA NORTH",
      value: 2746,
    },
    {
      label: "GANTHUNA PALLEGAMA SOUTH",
      value: 2747,
    },
    {
      label: "GODIGAMUWA",
      value: 2877,
    },
    {
      label: "GOLAHELA",
      value: 2887,
    },
    {
      label: "GURULLAWALA",
      value: 3013,
    },
    {
      label: "HAPUVITA PALLEGAMA",
      value: 3211,
    },
    {
      label: "HETTIMULLA",
      value: 3377,
    },
    {
      label: "HIGGODA",
      value: 3411,
    },
    {
      label: "HUNGAMPOLA",
      value: 3596,
    },
    {
      label: "KALUGALLA",
      value: 4339,
    },
    {
      label: "KARANDUPOTHA",
      value: 4695,
    },
    {
      label: "KAVUDUGAMA",
      value: 4887,
    },
    {
      label: "KEGALLE TOWN",
      value: 4934,
    },
    {
      label: "KOLONGALLA",
      value: 5403,
    },
    {
      label: "MABOPITIYA",
      value: 6070,
    },
    {
      label: "MAKOORA",
      value: 6461,
    },
    {
      label: "MALAVITA",
      value: 6502,
    },
    {
      label: "MEEDENIYA NORTH",
      value: 7011,
    },
    {
      label: "MEEDENIYA SOUTH",
      value: 7012,
    },
    {
      label: "MEEPITIYA",
      value: 7060,
    },
    {
      label: "MINUWANGAMUWA",
      value: 7208,
    },
    {
      label: "MORADANA",
      value: 7303,
    },
    {
      label: "NILAPALAGAMMANA",
      value: 7971,
    },
    {
      label: "NILMALGODA",
      value: 7977,
    },
    {
      label: "OLAGANKANDA",
      value: 8126,
    },
    {
      label: "PALLEWELA",
      value: 8527,
    },
    {
      label: "PARAGAMMANA",
      value: 8744,
    },
    {
      label: "PARANAGAMPOLA",
      value: 8780,
    },
    {
      label: "PUSSELLA",
      value: 9456,
    },
    {
      label: "PUWAKDENIYA",
      value: 9489,
    },
    {
      label: "RANWALA",
      value: 9687,
    },
    {
      label: "ROTUWA",
      value: 9826,
    },
    {
      label: "SIYAMBALAPITIYA",
      value: 10210,
    },
    {
      label: "THALEWALA",
      value: 10411,
    },
    {
      label: "THIYAMBARAHENA",
      value: 10722,
    },
    {
      label: "UDA KARADUPANA",
      value: 10871,
    },
    {
      label: "UDUMAGAMA",
      value: 11025,
    },
    {
      label: "UNDUGODA",
      value: 11167,
    },
    {
      label: "URAULLA",
      value: 11209,
    },
    {
      label: "WADUPOLA",
      value: 11521,
    },
    {
      label: "WALDENIYA",
      value: 11611,
    },
    {
      label: "WATHURA",
      value: 11780,
    },
    {
      label: "WEWALADENIYA",
      value: 12145,
    },
  ],
  "129": [
    {
      label: "BANDARAPOTHANA",
      value: 859,
    },
    {
      label: "BARAVILA",
      value: 890,
    },
    {
      label: "DAMBEWATANA",
      value: 1471,
    },
    {
      label: "DUNUMADALAWA",
      value: 2087,
    },
    {
      label: "EMBULGASWEWA",
      value: 2287,
    },
    {
      label: "GANEWALPOLA",
      value: 2706,
    },
    {
      label: "HEENUKKIRIYAWA",
      value: 3295,
    },
    {
      label: "HORAPOLA",
      value: 3558,
    },
    {
      label: "IHALA PULIYANKULAMA",
      value: 3776,
    },
    {
      label: "IHALAGAMA",
      value: 3810,
    },
    {
      label: "KANDALAMA EAST",
      value: 4461,
    },
    {
      label: "KANDALAMA WEST",
      value: 4462,
    },
    {
      label: "KARUKKANKULAMA",
      value: 4738,
    },
    {
      label: "KEERIYAGASWEWA",
      value: 4932,
    },
    {
      label: "KEKIRAWA TOWN",
      value: 4956,
    },
    {
      label: "KELEPULIYANKULAMA",
      value: 4982,
    },
    {
      label: "KITHULHITIYAWA",
      value: 5252,
    },
    {
      label: "KOLLANKUTTIGAMA",
      value: 5398,
    },
    {
      label: "KORASAGALLA",
      value: 5511,
    },
    {
      label: "KOTAGALA",
      value: 5560,
    },
    {
      label: "KUDA KEKIRAWA",
      value: 5672,
    },
    {
      label: "KUMBUKWEWA",
      value: 5813,
    },
    {
      label: "MADATUGAMA",
      value: 6098,
    },
    {
      label: "MAHA ELAGAMUWA",
      value: 6228,
    },
    {
      label: "MAHA KEKIRAWA",
      value: 6240,
    },
    {
      label: "MAHADIVULWEWA",
      value: 6272,
    },
    {
      label: "MAILAGASWEWA",
      value: 6420,
    },
    {
      label: "MALAWA",
      value: 6503,
    },
    {
      label: "MALDENIPURA",
      value: 6512,
    },
    {
      label: "MAMINEEYAWA",
      value: 6601,
    },
    {
      label: "MAMINIYA RAMBEWA",
      value: 6602,
    },
    {
      label: "MANKADAWALA",
      value: 6683,
    },
    {
      label: "MARADANKADAWALA",
      value: 6720,
    },
    {
      label: "MARADANKADAWALA ROAD",
      value: 6721,
    },
    {
      label: "MEDAGAMA",
      value: 6933,
    },
    {
      label: "MEDAWEWA",
      value: 6974,
    },
    {
      label: "MORAGODA",
      value: 7318,
    },
    {
      label: "MUDAPERUMAGAMA",
      value: 7389,
    },
    {
      label: "MURUNGAHITIKANDA",
      value: 7489,
    },
    {
      label: "NAVAKKULAMA",
      value: 7757,
    },
    {
      label: "NEEKINIYAWA",
      value: 7855,
    },
    {
      label: "NELBEGAMA",
      value: 7882,
    },
    {
      label: "NIDIGAMA",
      value: 7942,
    },
    {
      label: "OLOMBEWA",
      value: 8131,
    },
    {
      label: "OLUKARADA",
      value: 8134,
    },
    {
      label: "PALLEHINGURA",
      value: 8504,
    },
    {
      label: "POTHANEGAMA",
      value: 9300,
    },
    {
      label: "RAILWAY TOWN",
      value: 9546,
    },
    {
      label: "RATHMALLEWA",
      value: 9728,
    },
    {
      label: "SHASTHRAWELLIYA",
      value: 10091,
    },
    {
      label: "THORUWEWA",
      value: 10750,
    },
    {
      label: "UDURUWA",
      value: 11045,
    },
    {
      label: "UNAGOLLEWA",
      value: 11152,
    },
  ],
  "130": [
    {
      label: "DALUGAMA",
      value: 1424,
    },
    {
      label: "DALUGAMGODA",
      value: 1425,
    },
    {
      label: "DIPPITIGODA",
      value: 1887,
    },
    {
      label: "EGODA ERIYAWETIYA",
      value: 2125,
    },
    {
      label: "ERIYAWETIYA",
      value: 2347,
    },
    {
      label: "GALBORELLA",
      value: 2531,
    },
    {
      label: "HIMBUTUWELGODA",
      value: 3428,
    },
    {
      label: "HUNUPITIYA EAST",
      value: 3611,
    },
    {
      label: "HUNUPITIYA NORTH",
      value: 3612,
    },
    {
      label: "HUNUPITIYA SOUTH",
      value: 3613,
    },
    {
      label: "KELANIYA",
      value: 4973,
    },
    {
      label: "KENDAHENA",
      value: 5003,
    },
    {
      label: "KIRIBATHGODA",
      value: 5145,
    },
    {
      label: "KOHOLVILA",
      value: 5324,
    },
    {
      label: "MEEGAHAWATTA",
      value: 7028,
    },
    {
      label: "MEWELLA",
      value: 7151,
    },
    {
      label: "NAHENA",
      value: 7591,
    },
    {
      label: "NUNGAMUGODA",
      value: 8088,
    },
    {
      label: "PATTIYA EAST",
      value: 8878,
    },
    {
      label: "PATTIYA NORTH",
      value: 8879,
    },
    {
      label: "PATTIYA WEST",
      value: 8881,
    },
    {
      label: "PELIYAGODA GANGABADA",
      value: 8944,
    },
    {
      label: "PELIYAGODA GANGABADA EAST",
      value: 8945,
    },
    {
      label: "PELIYAGODAWATTA",
      value: 8946,
    },
    {
      label: "PETHIYAGODA",
      value: 9051,
    },
    {
      label: "PILAPITIYA",
      value: 9077,
    },
    {
      label: "POLHENA",
      value: 9219,
    },
    {
      label: "SINHARAMULLA",
      value: 10120,
    },
    {
      label: "SINHARAMULLA NORTH",
      value: 10121,
    },
    {
      label: "THALAWATHUHENPITA NORTH",
      value: 10402,
    },
    {
      label: "THALAWATHUHENPITA SOUTH",
      value: 10403,
    },
    {
      label: "WANAWASALA EAST",
      value: 11663,
    },
    {
      label: "WANAWASALA WEST",
      value: 11664,
    },
    {
      label: "WARAKANATTA",
      value: 11714,
    },
    {
      label: "WEDAMULLA",
      value: 11826,
    },
    {
      label: "WELEGODA",
      value: 11927,
    },
    {
      label: "WEWELDOOWA",
      value: 12160,
    },
  ],
  "131": [
    {
      label: "BANGALAWATTA",
      value: 878,
    },
    {
      label: "BATAKETTARA NORTH",
      value: 919,
    },
    {
      label: "BATAKETTARA SOUTH",
      value: 920,
    },
    {
      label: "BATUWANDARA NORTH",
      value: 966,
    },
    {
      label: "BATUWANDARA SOUTH",
      value: 967,
    },
    {
      label: "BELLANVILA",
      value: 1030,
    },
    {
      label: "BODHIRAJAPURA",
      value: 1118,
    },
    {
      label: "BOKUNDARA",
      value: 1152,
    },
    {
      label: "BORALESGAMUWA EAST A",
      value: 1217,
    },
    {
      label: "BORALESGAMUWA EAST B",
      value: 1218,
    },
    {
      label: "BORALESGAMUWA WEST A",
      value: 1219,
    },
    {
      label: "BORALESGAMUWA WEST B",
      value: 1220,
    },
    {
      label: "BORALESGAMUWA WEST C",
      value: 1221,
    },
    {
      label: "DAMPE",
      value: 1490,
    },
    {
      label: "DELTHARA EAST",
      value: 1707,
    },
    {
      label: "DELTHARA WEST",
      value: 1708,
    },
    {
      label: "DIVULPITIYA EAST",
      value: 1914,
    },
    {
      label: "DIVULPITIYA WEST",
      value: 1915,
    },
    {
      label: "EGODAWATTA",
      value: 2143,
    },
    {
      label: "EREWWALA EAST",
      value: 2336,
    },
    {
      label: "EREWWALA NORTH",
      value: 2337,
    },
    {
      label: "EREWWALA WEST",
      value: 2338,
    },
    {
      label: "GORAKAPITIYA",
      value: 2966,
    },
    {
      label: "HALPITA",
      value: 3113,
    },
    {
      label: "HEDIGAMA",
      value: 3272,
    },
    {
      label: "HONNANTHARA NORTH",
      value: 3520,
    },
    {
      label: "HONNANTHARA SOUTH",
      value: 3521,
    },
    {
      label: "HORATHUDUWA",
      value: 3560,
    },
    {
      label: "JAMBURALIYA",
      value: 4001,
    },
    {
      label: "KAHAPOLA",
      value: 4165,
    },
    {
      label: "KALIYAMMAHARA",
      value: 4268,
    },
    {
      label: "KATUWAWALA NORTH",
      value: 4873,
    },
    {
      label: "KATUWAWALA SOUTH",
      value: 4874,
    },
    {
      label: "KESBEWA EAST",
      value: 5041,
    },
    {
      label: "KESBEWA NORTH",
      value: 5042,
    },
    {
      label: "KESBEWA SOUTH",
      value: 5043,
    },
    {
      label: "KOLAMUNNA",
      value: 5377,
    },
    {
      label: "MADAPATHA",
      value: 6093,
    },
    {
      label: "MAHALWARAWA",
      value: 6326,
    },
    {
      label: "MAKANDANA EAST",
      value: 6440,
    },
    {
      label: "MAKANDANA WEST",
      value: 6441,
    },
    {
      label: "MAKULUDOOWA",
      value: 6472,
    },
    {
      label: "MAMPE EAST",
      value: 6604,
    },
    {
      label: "MAMPE NORTH",
      value: 6605,
    },
    {
      label: "MAMPE SOUTH",
      value: 6606,
    },
    {
      label: "MAMPE WEST",
      value: 6607,
    },
    {
      label: "MAVITTARA NORTH",
      value: 6864,
    },
    {
      label: "MAVITTARA SOUTH",
      value: 6865,
    },
    {
      label: "MORENDA",
      value: 7363,
    },
    {
      label: "NAMPAMUNUWA",
      value: 7664,
    },
    {
      label: "NEELAMMAHARA",
      value: 7858,
    },
    {
      label: "NIVUNGAMA",
      value: 8037,
    },
    {
      label: "NIWANTHIDIYA",
      value: 8039,
    },
    {
      label: "PALIGEDARA",
      value: 8461,
    },
    {
      label: "PELENWATTA EAST",
      value: 8939,
    },
    {
      label: "PELENWATTA NORTH",
      value: 8940,
    },
    {
      label: "PELENWATTA WEST",
      value: 8941,
    },
    {
      label: "PEPILIYANA EAST",
      value: 8969,
    },
    {
      label: "PEPILIYANA WEST",
      value: 8970,
    },
    {
      label: "POLHENA",
      value: 9219,
    },
    {
      label: "RATHMALDENIYA",
      value: 9716,
    },
    {
      label: "RATTANAPITIYA",
      value: 9753,
    },
    {
      label: "REGIDEL WATTA",
      value: 9769,
    },
    {
      label: "SUWARAPOLA EAST",
      value: 10308,
    },
    {
      label: "SUWARAPOLA WEST",
      value: 10309,
    },
    {
      label: "THUMBOVILA NORTH",
      value: 10786,
    },
    {
      label: "THUMBOVILA SOUTH",
      value: 10787,
    },
    {
      label: "THUMBOVILA WEST",
      value: 10788,
    },
    {
      label: "VISHWAKALAWA",
      value: 11482,
    },
    {
      label: "WERAHERA NORTH",
      value: 12085,
    },
    {
      label: "WERAHERA SOUTH",
      value: 12086,
    },
    {
      label: "WEWALA EAST",
      value: 12141,
    },
    {
      label: "WEWALA WEST",
      value: 12143,
    },
  ],
  "132": [
    {
      label: "ALANKERNY",
      value: 175,
    },
    {
      label: "ANNAL NAGAR",
      value: 515,
    },
    {
      label: "AYILIYADY",
      value: 714,
    },
    {
      label: "ECHCHANTHIVU",
      value: 2112,
    },
    {
      label: "EHUTHAR NAGAR",
      value: 2157,
    },
    {
      label: "FAIZAL NAGAR",
      value: 2439,
    },
    {
      label: "IDIMAN",
      value: 3656,
    },
    {
      label: "KACHCHAKODITHIVU",
      value: 4066,
    },
    {
      label: "KAKAMUNAI",
      value: 4214,
    },
    {
      label: "KATTAIARU",
      value: 4796,
    },
    {
      label: "KINNIYA",
      value: 5122,
    },
    {
      label: "KUDDIKARACHCHI",
      value: 5739,
    },
    {
      label: "KURINCHAKERNY",
      value: 5855,
    },
    {
      label: "MAHAROOF GRAMAM",
      value: 6360,
    },
    {
      label: "MAHARUF NAGAR",
      value: 6361,
    },
    {
      label: "MAJEED NAGAR",
      value: 6434,
    },
    {
      label: "MALINTHURAI",
      value: 6549,
    },
    {
      label: "MANCHOLAI",
      value: 6633,
    },
    {
      label: "MANCHOLAICHENAI",
      value: 6634,
    },
    {
      label: "MANIARASANKULAM",
      value: 6667,
    },
    {
      label: "MUNAICHENAI",
      value: 7461,
    },
    {
      label: "NADOOTTU",
      value: 7561,
    },
    {
      label: "NADUTHIVU",
      value: 7565,
    },
    {
      label: "PERIYA KINNIYA",
      value: 8994,
    },
    {
      label: "PERIYATHTHUMUNAI",
      value: 9035,
    },
    {
      label: "POOVARASANTHIVU",
      value: 9281,
    },
    {
      label: "RAHUMANIYA NAGAR",
      value: 9539,
    },
    {
      label: "SAMAVECHCHATIVU",
      value: 9898,
    },
    {
      label: "SINNA KINNIYA",
      value: 10123,
    },
    {
      label: "SOORANGAL",
      value: 10230,
    },
    {
      label: "UPPARU",
      value: 11183,
    },
  ],
  "133": [
    {
      label: "AKURANA",
      value: 143,
    },
    {
      label: "DEHERAGODA",
      value: 1622,
    },
    {
      label: "DODAMPE",
      value: 1966,
    },
    {
      label: "DODAMPE WEST",
      value: 1967,
    },
    {
      label: "ELLAGAWA",
      value: 2225,
    },
    {
      label: "ELLAWALA",
      value: 2237,
    },
    {
      label: "ELLAWALA PAHALAGAMA",
      value: 2238,
    },
    {
      label: "EPITAWALA",
      value: 2305,
    },
    {
      label: "HANDUKANDA",
      value: 3163,
    },
    {
      label: "HOLEEPITIYA",
      value: 3504,
    },
    {
      label: "IDANGODA",
      value: 3645,
    },
    {
      label: "KANUGGALLA",
      value: 4564,
    },
    {
      label: "KIRIELLA",
      value: 5152,
    },
    {
      label: "MATUWAGALA",
      value: 6837,
    },
    {
      label: "MUDUNKOTUWA",
      value: 7407,
    },
    {
      label: "MUNASINHAPURA",
      value: 7468,
    },
    {
      label: "YATIPAWWA",
      value: 12298,
    },
  ],
  "134": [
    {
      label: "BORALUKETIYA",
      value: 1230,
    },
    {
      label: "GALKANDA",
      value: 2562,
    },
    {
      label: "HETTIYAWALA EAST",
      value: 3381,
    },
    {
      label: "HETTIYAWALA NORTH",
      value: 3382,
    },
    {
      label: "HETTIYAWALA SOUTH",
      value: 3383,
    },
    {
      label: "HETTIYAWALA WEST",
      value: 3384,
    },
    {
      label: "KARATHOTA",
      value: 4714,
    },
    {
      label: "KIRINDA MANGIN IHALA CENTRAL",
      value: 5185,
    },
    {
      label: "KIRINDA MANGIN IHALA EAST",
      value: 5186,
    },
    {
      label: "KIRINDA MANGIN IHALA NORTH",
      value: 5187,
    },
    {
      label: "KIRINDA MANGIN IHALA SOUTH",
      value: 5188,
    },
    {
      label: "KIRINDA MANGIN PAHALA",
      value: 5189,
    },
    {
      label: "KUMBALGODA",
      value: 5786,
    },
    {
      label: "MALWATHUGODA",
      value: 6584,
    },
    {
      label: "NARADDA",
      value: 7687,
    },
    {
      label: "OVITIGAMUWA NORTH",
      value: 8196,
    },
    {
      label: "OVITIGAMUWA SOUTH",
      value: 8197,
    },
    {
      label: "PUHULWELLA EAST",
      value: 9359,
    },
    {
      label: "PUHULWELLA WEST",
      value: 9360,
    },
    {
      label: "WALAKANDA EAST",
      value: 11573,
    },
    {
      label: "WALAKANDA SOUTH",
      value: 11574,
    },
    {
      label: "WALAKANDA WEST",
      value: 11575,
    },
    {
      label: "WATHUKOLAKANDA EAST",
      value: 11770,
    },
    {
      label: "WATHUKOLAKANDA NORTH",
      value: 11771,
    },
    {
      label: "WAVULANBOKKA",
      value: 11815,
    },
  ],
  "135": [
    {
      label: "ALAHENEGAMA",
      value: 161,
    },
    {
      label: "AMUNAKOLE",
      value: 415,
    },
    {
      label: "ARALUGASWEWA",
      value: 558,
    },
    {
      label: "ASSEDDUMA",
      value: 639,
    },
    {
      label: "BAKUNAWALA",
      value: 759,
    },
    {
      label: "BALADORA",
      value: 762,
    },
    {
      label: "BAMUNUGAMA",
      value: 832,
    },
    {
      label: "BEDDEGAMA",
      value: 985,
    },
    {
      label: "BELIWEWA",
      value: 1021,
    },
    {
      label: "BORALUWEWA",
      value: 1234,
    },
    {
      label: "GALATABENDIWEWA",
      value: 2513,
    },
    {
      label: "HALMILLAKOTUWA",
      value: 3094,
    },
    {
      label: "HATHALAWA",
      value: 3236,
    },
    {
      label: "HENGAMUWA",
      value: 3356,
    },
    {
      label: "HINDAGAHAWEWA",
      value: 3430,
    },
    {
      label: "HIRIGOLLA",
      value: 3468,
    },
    {
      label: "HOLAMBALEWA",
      value: 3503,
    },
    {
      label: "KAHATAGASWEWA",
      value: 4170,
    },
    {
      label: "KANDATTAWA",
      value: 4484,
    },
    {
      label: "KATTAPITIYA",
      value: 4817,
    },
    {
      label: "KITHAGAMA",
      value: 5230,
    },
    {
      label: "KOBEIGANE",
      value: 5288,
    },
    {
      label: "LEEKOLAWEWA",
      value: 5971,
    },
    {
      label: "MAKELIYAWA",
      value: 6449,
    },
    {
      label: "MAULLA",
      value: 6839,
    },
    {
      label: "MAWATHAGAMA",
      value: 6877,
    },
    {
      label: "MIDELLAWA",
      value: 7161,
    },
    {
      label: "PANNAWA",
      value: 8704,
    },
    {
      label: "PUBBILIYA",
      value: 9339,
    },
    {
      label: "THELAHERA",
      value: 10563,
    },
    {
      label: "VITHIKULIYA",
      value: 11489,
    },
    {
      label: "WADURESSA",
      value: 11522,
    },
    {
      label: "WALASWEWA",
      value: 11598,
    },
    {
      label: "WANNIGAMA",
      value: 11685,
    },
    {
      label: "WELPOTHUWEWA",
      value: 12048,
    },
  ],
  "136": [
    {
      label: "AMBAGAHAYAYA",
      value: 317,
    },
    {
      label: "BORALUWAGEAINA",
      value: 1232,
    },
    {
      label: "BULUTHOTA",
      value: 1314,
    },
    {
      label: "BUTHKANDA",
      value: 1326,
    },
    {
      label: "DAMBEMADA",
      value: 1467,
    },
    {
      label: "DAPANE",
      value: 1548,
    },
    {
      label: "DORAPANE",
      value: 2039,
    },
    {
      label: "EREPORUWA",
      value: 2335,
    },
    {
      label: "HABBELIARA",
      value: 3043,
    },
    {
      label: "HELAUDAKANDA",
      value: 3324,
    },
    {
      label: "HENEGGEGODA",
      value: 3354,
    },
    {
      label: "ITTAKANDA",
      value: 3976,
    },
    {
      label: "KELLA",
      value: 4993,
    },
    {
      label: "KEMPANE",
      value: 4997,
    },
    {
      label: "KOLONNA",
      value: 5405,
    },
    {
      label: "KOPPAKANDA",
      value: 5493,
    },
    {
      label: "KUMBURUGAMUWA",
      value: 5817,
    },
    {
      label: "MADUWANWELA PERANIGAMA",
      value: 6179,
    },
    {
      label: "MORAWADIYA",
      value: 7355,
    },
    {
      label: "NANDANAGAMA",
      value: 7668,
    },
    {
      label: "OMALPE",
      value: 8145,
    },
    {
      label: "PODDANA",
      value: 9180,
    },
    {
      label: "PUPULAKETIYA",
      value: 9437,
    },
    {
      label: "RANHOTIKANDA",
      value: 9657,
    },
    {
      label: "ULLINDUWAWA",
      value: 11131,
    },
    {
      label: "WALAKADA",
      value: 11572,
    },
    {
      label: "WELEWATHUGODA",
      value: 11932,
    },
    {
      label: "WIJERIYA",
      value: 12192,
    },
    {
      label: "YAKMADITTA",
      value: 12248,
    },
  ],
  "137": [
    {
      label: "AMBATHALE",
      value: 370,
    },
    {
      label: "BATALANDAHENA",
      value: 921,
    },
    {
      label: "BELAGAMA",
      value: 1000,
    },
    {
      label: "BOPETTA",
      value: 1200,
    },
    {
      label: "DAHAMPURA",
      value: 1417,
    },
    {
      label: "DODAMGAHAHENA",
      value: 1954,
    },
    {
      label: "ELHENA",
      value: 2208,
    },
    {
      label: "GAJABAPURA",
      value: 2453,
    },
    {
      label: "GOTHATUWA",
      value: 2974,
    },
    {
      label: "GOTHATUWA NEW TOWN",
      value: 2975,
    },
    {
      label: "HALMULLA",
      value: 3101,
    },
    {
      label: "HIMBUTANA EAST",
      value: 3423,
    },
    {
      label: "HIMBUTANA WEST",
      value: 3424,
    },
    {
      label: "KAJUGAHAWATTA",
      value: 4212,
    },
    {
      label: "KELANIMULLA",
      value: 4972,
    },
    {
      label: "KITTAMPAHUWA",
      value: 5264,
    },
    {
      label: "KOLONNAWA",
      value: 5406,
    },
    {
      label: "KOTIKAWATTA EAST",
      value: 5606,
    },
    {
      label: "KOTIKAWATTA WEST",
      value: 5607,
    },
    {
      label: "KOTUVILA",
      value: 5637,
    },
    {
      label: "KUDA BUTHGAMUWA",
      value: 5667,
    },
    {
      label: "KURUNIYAWATTA",
      value: 5902,
    },
    {
      label: "MADINNAGODA",
      value: 6136,
    },
    {
      label: "MAHA BUTHGAMUWA A",
      value: 6223,
    },
    {
      label: "MAHA BUTHGAMUWA B",
      value: 6224,
    },
    {
      label: "MAHA BUTHGAMUWA C",
      value: 6225,
    },
    {
      label: "MALGAMA",
      value: 6518,
    },
    {
      label: "MALIGAGODELLA",
      value: 6526,
    },
    {
      label: "MALPURA",
      value: 6572,
    },
    {
      label: "MEETHOTAMULLA",
      value: 7073,
    },
    {
      label: "MEGODA KOLONNAWA",
      value: 7090,
    },
    {
      label: "MULLERIYAWA NORTH",
      value: 7445,
    },
    {
      label: "MULLERIYAWA SOUTH",
      value: 7446,
    },
    {
      label: "ORUGODAWATTA",
      value: 8173,
    },
    {
      label: "RAJASINGHAGAMA",
      value: 9566,
    },
    {
      label: "SALAMULLA",
      value: 9874,
    },
    {
      label: "SEDAWATTA",
      value: 9991,
    },
    {
      label: "SINGHAPURA",
      value: 10108,
    },
    {
      label: "UDUMULLA NORTH",
      value: 11029,
    },
    {
      label: "UDUMULLA SOUTH",
      value: 11030,
    },
    {
      label: "VEHERAGODA",
      value: 11370,
    },
    {
      label: "WADULLA",
      value: 11518,
    },
    {
      label: "WELEWATTA",
      value: 11933,
    },
    {
      label: "WELLAMPITIYA",
      value: 12026,
    },
    {
      label: "WENNAWATTA",
      value: 12065,
    },
    {
      label: "WIJAYAPURA",
      value: 12183,
    },
  ],
  "142": [
    {
      label: "ADARADENIYA",
      value: 30,
    },
    {
      label: "BATEYAYA",
      value: 939,
    },
    {
      label: "BELIATTAKUMBURA",
      value: 1007,
    },
    {
      label: "DENIYAYA",
      value: 1756,
    },
    {
      label: "DENIYAYA WEST",
      value: 1757,
    },
    {
      label: "HORAGALA EAST",
      value: 3528,
    },
    {
      label: "HORAGALA WEST",
      value: 3529,
    },
    {
      label: "IHALAGAMA",
      value: 3810,
    },
    {
      label: "ILUKPITIYA",
      value: 3858,
    },
    {
      label: "KALUGALAHENA",
      value: 4336,
    },
    {
      label: "KANDILPANA",
      value: 4510,
    },
    {
      label: "KEERIWALAGAMA",
      value: 4931,
    },
    {
      label: "KIRIWELDOLA",
      value: 5223,
    },
    {
      label: "KOLAWENIGAMA",
      value: 5387,
    },
    {
      label: "KOODALUDENIYA",
      value: 5472,
    },
    {
      label: "KOSMODARA",
      value: 5540,
    },
    {
      label: "KOTAPOLA NORTH",
      value: 5583,
    },
    {
      label: "KOTAPOLA SOUTH",
      value: 5584,
    },
    {
      label: "LINDAGAWAHENA",
      value: 6012,
    },
    {
      label: "MEDERIPITIYA",
      value: 6994,
    },
    {
      label: "MORAWAKA",
      value: 7356,
    },
    {
      label: "MUGUNUMULLA",
      value: 7413,
    },
    {
      label: "NAWALAHENA",
      value: 7805,
    },
    {
      label: "NISHSHANKAPURA",
      value: 8021,
    },
    {
      label: "PALLEGAMA NORTH",
      value: 8498,
    },
    {
      label: "PALLEGAMA SOUTH",
      value: 8500,
    },
    {
      label: "PARAGALA",
      value: 8743,
    },
    {
      label: "PATHAWALA NADAKANDA",
      value: 8837,
    },
    {
      label: "PELAWATTA",
      value: 8922,
    },
    {
      label: "PODDANA",
      value: 9180,
    },
    {
      label: "PORUPITIYA",
      value: 9296,
    },
    {
      label: "PUSSAWELA",
      value: 9453,
    },
    {
      label: "THENIPITA",
      value: 10595,
    },
    {
      label: "USAMALAGODA",
      value: 11241,
    },
    {
      label: "UVARAGALA",
      value: 11270,
    },
    {
      label: "VIHARAHENA",
      value: 11425,
    },
    {
      label: "WARALLA",
      value: 11724,
    },
  ],
  "143": [
    {
      label: "DEHENNEGAMA",
      value: 1621,
    },
    {
      label: "DIGANNEWA",
      value: 1844,
    },
    {
      label: "DIGANNEWATTA",
      value: 1845,
    },
    {
      label: "DIVULLEPITIYA",
      value: 1912,
    },
    {
      label: "DODAMGOLLEGAMA",
      value: 1957,
    },
    {
      label: "ELAGAMMILLAWA",
      value: 2178,
    },
    {
      label: "GALKADAWALA",
      value: 2560,
    },
    {
      label: "GIRILLA",
      value: 2827,
    },
    {
      label: "HIDOGAMA",
      value: 3410,
    },
    {
      label: "HULAWA",
      value: 3587,
    },
    {
      label: "IHALA WEERADADANA",
      value: 3799,
    },
    {
      label: "ITHEWA",
      value: 3975,
    },
    {
      label: "KELEGAMA",
      value: 4977,
    },
    {
      label: "KOTAVEHERA",
      value: 5586,
    },
    {
      label: "KUDA MITHAWA",
      value: 5678,
    },
    {
      label: "KUDARAWALIYA",
      value: 5727,
    },
    {
      label: "KUMBUKWEWA",
      value: 5813,
    },
    {
      label: "MAHA KIRINDA A",
      value: 6243,
    },
    {
      label: "MAHA KIRINDA B",
      value: 6244,
    },
    {
      label: "MAHA MITHAWA",
      value: 6250,
    },
    {
      label: "MEEWELLEWA",
      value: 7085,
    },
    {
      label: "MONNEKULAMA",
      value: 7282,
    },
    {
      label: "MORAGOLLA",
      value: 7321,
    },
    {
      label: "NAGALA",
      value: 7570,
    },
    {
      label: "NAWANA",
      value: 7811,
    },
    {
      label: "PALU USWEWA",
      value: 8553,
    },
    {
      label: "PALUGOLLA TRACK 10 A",
      value: 8572,
    },
    {
      label: "PALUGOLLA TRACK 10 B",
      value: 8573,
    },
    {
      label: "SIRISETHAGAMA",
      value: 10159,
    },
    {
      label: "YAKADAPATHA",
      value: 12226,
    },
    {
      label: "ALUTHGAMA",
      value: 259,
    },
  ],
  "144": [
    {
      label: "AMBATHALAWA",
      value: 369,
    },
    {
      label: "BERAMANA",
      value: 1063,
    },
    {
      label: "BERAMANA NORTH",
      value: 1064,
    },
    {
      label: "BERAMANA SOUTH",
      value: 1065,
    },
    {
      label: "BOGAHAWELA",
      value: 1130,
    },
    {
      label: "DAMBAGOLLA",
      value: 1458,
    },
    {
      label: "DELTAGEMUNUPURA",
      value: 1706,
    },
    {
      label: "DELUNTHALAMADA",
      value: 1709,
    },
    {
      label: "DOMBAGASTHALAWA",
      value: 2006,
    },
    {
      label: "DORUWADENIYA",
      value: 2046,
    },
    {
      label: "DUNSINANE",
      value: 2078,
    },
    {
      label: "DUNUKEDENIYA",
      value: 2083,
    },
    {
      label: "EGODAWELA",
      value: 2144,
    },
    {
      label: "FROTOFT",
      value: 2442,
    },
    {
      label: "GODAMADITTA",
      value: 2852,
    },
    {
      label: "GOMBURUOYA",
      value: 2899,
    },
    {
      label: "HALGOLLA",
      value: 3080,
    },
    {
      label: "HALPOLA",
      value: 3115,
    },
    {
      label: "HAPUGASTHALAWA",
      value: 3196,
    },
    {
      label: "HARANGALA",
      value: 3218,
    },
    {
      label: "HARANGALA SOUTH",
      value: 3219,
    },
    {
      label: "HEDUNUWEWA",
      value: 3274,
    },
    {
      label: "HELLBODA",
      value: 3329,
    },
    {
      label: "HELSIRIGAMA",
      value: 3330,
    },
    {
      label: "HUNUGALOYA",
      value: 3603,
    },
    {
      label: "IHALA GORAKAOYA",
      value: 3699,
    },
    {
      label: "KADADORA",
      value: 4070,
    },
    {
      label: "KADADORAPITIYA",
      value: 4071,
    },
    {
      label: "KALAPITIYA EAST",
      value: 4241,
    },
    {
      label: "KALAPITIYA WEST",
      value: 4242,
    },
    {
      label: "KALUDEMADA",
      value: 4327,
    },
    {
      label: "KARAGAHAYATATHENNA",
      value: 4615,
    },
    {
      label: "KARAGASTHALAWA",
      value: 4620,
    },
    {
      label: "KATARANDANA",
      value: 4770,
    },
    {
      label: "KATUGOLLA",
      value: 4834,
    },
    {
      label: "KATUKITHULA",
      value: 4843,
    },
    {
      label: "KETABULAWA",
      value: 5050,
    },
    {
      label: "KIKILIYAMANA",
      value: 5093,
    },
    {
      label: "KIRIMETIYAWA",
      value: 5182,
    },
    {
      label: "KIRINDIWELA",
      value: 5198,
    },
    {
      label: "KOLAPATHANA",
      value: 5380,
    },
    {
      label: "KOSGAHA PATHANA",
      value: 5525,
    },
    {
      label: "KOTAGEPITIYA NORTH",
      value: 5566,
    },
    {
      label: "KOTAGEPITIYA SOUTH",
      value: 5567,
    },
    {
      label: "KOTHMALGAMA",
      value: 5599,
    },
    {
      label: "KOTTUNUGODA",
      value: 5632,
    },
    {
      label: "KUDAOYA",
      value: 5719,
    },
    {
      label: "KUMBALOLUWA",
      value: 5787,
    },
    {
      label: "LABUKELE",
      value: 5933,
    },
    {
      label: "MADAKUMBURA",
      value: 6083,
    },
    {
      label: "MALDENIYA",
      value: 6513,
    },
    {
      label: "MALHEWA",
      value: 6523,
    },
    {
      label: "MALLANDA",
      value: 6560,
    },
    {
      label: "MASWELA",
      value: 6795,
    },
    {
      label: "MAWELA EAST",
      value: 6890,
    },
    {
      label: "MAWELA KANDA",
      value: 6891,
    },
    {
      label: "MAWELA WEST",
      value: 6892,
    },
    {
      label: "MEDAKANDA",
      value: 6951,
    },
    {
      label: "MEDAKUMBURA NORTH",
      value: 6955,
    },
    {
      label: "METHAGAMA",
      value: 7131,
    },
    {
      label: "NAWA KADADORA",
      value: 7784,
    },
    {
      label: "NAWA MORAPE",
      value: 7786,
    },
    {
      label: "NAWANGAMA",
      value: 7816,
    },
    {
      label: "NAYAPANA",
      value: 7832,
    },
    {
      label: "NIYAMGAMDORA",
      value: 8045,
    },
    {
      label: "PAHALA GORAKAOYA",
      value: 8270,
    },
    {
      label: "PALAGOLLA",
      value: 8401,
    },
    {
      label: "PANANGAMMANA",
      value: 8627,
    },
    {
      label: "POLWATHURA",
      value: 9244,
    },
    {
      label: "PUNDALUOYA NORTH",
      value: 9413,
    },
    {
      label: "PUNDALUOYA SOUTH",
      value: 9414,
    },
    {
      label: "QUEENSBERRY",
      value: 9501,
    },
    {
      label: "RAJAELA",
      value: 9552,
    },
    {
      label: "RAMBODA",
      value: 9595,
    },
    {
      label: "RAMBODAGAMA",
      value: 9596,
    },
    {
      label: "RANWANTHALAWA",
      value: 9689,
    },
    {
      label: "RAWANAGODA EAST",
      value: 9759,
    },
    {
      label: "RAWANAGODA WEST",
      value: 9760,
    },
    {
      label: "ROJERSANGAMA NORTH",
      value: 9812,
    },
    {
      label: "ROJERSANGAMA SOUTH",
      value: 9813,
    },
    {
      label: "RUWANPURA",
      value: 9846,
    },
    {
      label: "SAMANELIYA",
      value: 9891,
    },
    {
      label: "SANGILIPALAMA",
      value: 9960,
    },
    {
      label: "SHEEN",
      value: 10092,
    },
    {
      label: "SHEENGAMA",
      value: 10093,
    },
    {
      label: "THELISSAGALA",
      value: 10577,
    },
    {
      label: "THISPANE KANDA",
      value: 10700,
    },
    {
      label: "UDAGAMA",
      value: 10891,
    },
    {
      label: "WATADDARA",
      value: 11739,
    },
    {
      label: "WEDAMULLA",
      value: 11826,
    },
    {
      label: "WEERAPURA",
      value: 11867,
    },
    {
      label: "WEERASEKARAPURA",
      value: 11868,
    },
    {
      label: "WERELLA PATHANA",
      value: 12107,
    },
    {
      label: "WETHALAWA",
      value: 12124,
    },
    {
      label: "WEWAHINNA",
      value: 12138,
    },
    {
      label: "WIJAYABAHU KANDA",
      value: 12177,
    },
  ],
  "146": [
    {
      label: "CASSIMNAGAR",
      value: 1330,
    },
    {
      label: "GOPALAPURAM",
      value: 2959,
    },
    {
      label: "IQBALNAGAR",
      value: 3942,
    },
    {
      label: "IRAKKANDY",
      value: 3954,
    },
    {
      label: "IRANAIKERNI",
      value: 3957,
    },
    {
      label: "JAYANAGAR",
      value: 4024,
    },
    {
      label: "KADDUKULAMKADDUKULAM",
      value: 4093,
    },
    {
      label: "KALLAMPATTAI",
      value: 4274,
    },
    {
      label: "KUCHCHAVELI",
      value: 5661,
    },
    {
      label: "KUMBURUPIDDY EAST",
      value: 5819,
    },
    {
      label: "KUMBURUPIDDY NORTH",
      value: 5820,
    },
    {
      label: "KUMBURUPIDDY SOUTH",
      value: 5821,
    },
    {
      label: "NILAVELI",
      value: 7972,
    },
    {
      label: "PERIYAKULAM",
      value: 9012,
    },
    {
      label: "PULMODDAI DIVISION NO. 1",
      value: 9385,
    },
    {
      label: "PULMODDAI DIVISION NO. 2",
      value: 9386,
    },
    {
      label: "PULMODDAI DIVISION NO. 3",
      value: 9387,
    },
    {
      label: "PULMODDAI DIVISION NO. 4",
      value: 9388,
    },
    {
      label: "SENTHOOR",
      value: 10060,
    },
    {
      label: "THENNAIMARAVADY",
      value: 10600,
    },
    {
      label: "THIRIYAI",
      value: 10675,
    },
    {
      label: "VALAYOOTHU",
      value: 11299,
    },
    {
      label: "VEERANCHOLAI",
      value: 11364,
    },
    {
      label: "VELOOR",
      value: 11389,
    },
  ],
  "147": [
    {
      label: "ALAHITIYAWA",
      value: 162,
    },
    {
      label: "AMBAHENWEWA",
      value: 329,
    },
    {
      label: "ANDIGEDARA",
      value: 469,
    },
    {
      label: "ARAKYALA",
      value: 550,
    },
    {
      label: "BARIGODA",
      value: 894,
    },
    {
      label: "BIHALPOLA",
      value: 1083,
    },
    {
      label: "BOGAHAPITIYA",
      value: 1128,
    },
    {
      label: "BOGAMULLA",
      value: 1135,
    },
    {
      label: "DALUPOTHAGAMA",
      value: 1434,
    },
    {
      label: "DEEKIRIKEWA",
      value: 1599,
    },
    {
      label: "DEHIGAMA",
      value: 1633,
    },
    {
      label: "DETHAWA",
      value: 1768,
    },
    {
      label: "ETAMPOLA",
      value: 2374,
    },
    {
      label: "GALGAMMULLA",
      value: 2542,
    },
    {
      label: "GANANGAMUWA",
      value: 2679,
    },
    {
      label: "GODAGAMA",
      value: 2838,
    },
    {
      label: "HEWANELLAGARAYA",
      value: 3391,
    },
    {
      label: "HOROMBAWA",
      value: 3573,
    },
    {
      label: "IHALA MURUTHENGE",
      value: 3762,
    },
    {
      label: "KARAGAHAGEDARA",
      value: 4607,
    },
    {
      label: "KARANGAMUWA",
      value: 4699,
    },
    {
      label: "KEKUNAGOLLA",
      value: 4967,
    },
    {
      label: "KONDURUWAPOLA",
      value: 5439,
    },
    {
      label: "KOSGOLLA",
      value: 5531,
    },
    {
      label: "KOTADENIYAWA",
      value: 5559,
    },
    {
      label: "KUREEKOTUWA",
      value: 5850,
    },
    {
      label: "MAHAGAMA",
      value: 6283,
    },
    {
      label: "MEDELPOLA",
      value: 6991,
    },
    {
      label: "MOLLIGODA",
      value: 7267,
    },
    {
      label: "NAKKAWATTA",
      value: 7616,
    },
    {
      label: "NETTIPOLAGEDARA",
      value: 7923,
    },
    {
      label: "PAHALA MURUTHENGE",
      value: 8334,
    },
    {
      label: "PANAVITIYA",
      value: 8641,
    },
    {
      label: "POLPITIYA",
      value: 9238,
    },
    {
      label: "POTHUHERA",
      value: 9307,
    },
    {
      label: "POTHUWEWA",
      value: 9327,
    },
    {
      label: "RANASGALLA",
      value: 9623,
    },
    {
      label: "RATHNEHERUWA",
      value: 9738,
    },
    {
      label: "SALIYALA",
      value: 9878,
    },
    {
      label: "SIYAMBALAGASKOTUWA",
      value: 10189,
    },
    {
      label: "THALLIYADDA",
      value: 10437,
    },
    {
      label: "THELAHERA",
      value: 10563,
    },
    {
      label: "THORANEGEDARA",
      value: 10745,
    },
    {
      label: "UDAGEDARA",
      value: 10898,
    },
    {
      label: "WAKKUNUWALA",
      value: 11558,
    },
  ],
  "148": [
    {
      label: "ANUKKANE",
      value: 524,
    },
    {
      label: "BEMINIGALLA",
      value: 1037,
    },
    {
      label: "BOHINGAMUWA",
      value: 1145,
    },
    {
      label: "DANDAGAMUWA EAST",
      value: 1507,
    },
    {
      label: "DANDAGAMUWA WEST",
      value: 1508,
    },
    {
      label: "DEEGALLA",
      value: 1590,
    },
    {
      label: "DEEYAWALA",
      value: 1613,
    },
    {
      label: "DEGAMMEDA",
      value: 1615,
    },
    {
      label: "DELANA",
      value: 1661,
    },
    {
      label: "DIKHERA",
      value: 1859,
    },
    {
      label: "DIYADORA",
      value: 1926,
    },
    {
      label: "DIYADORA IHALA WATTA",
      value: 1927,
    },
    {
      label: "EDANDEWELA",
      value: 2113,
    },
    {
      label: "ELUWAPOLA",
      value: 2263,
    },
    {
      label: "EMBAWA",
      value: 2274,
    },
    {
      label: "ESSEDDUMA",
      value: 2363,
    },
    {
      label: "GALAGEDARA",
      value: 2473,
    },
    {
      label: "GALAHITIYAWA",
      value: 2496,
    },
    {
      label: "HAGGAMUWA",
      value: 3057,
    },
    {
      label: "HAMMALAWA",
      value: 3143,
    },
    {
      label: "HENEGEDARA",
      value: 3353,
    },
    {
      label: "IHALA ELATHALAWA",
      value: 3684,
    },
    {
      label: "IHALA EMBAWA",
      value: 3686,
    },
    {
      label: "IHALA ENNARUWA",
      value: 3688,
    },
    {
      label: "IHALA GALPOLA",
      value: 3692,
    },
    {
      label: "IHALA KALUGAMUWA",
      value: 3714,
    },
    {
      label: "IHALA PIDUMA",
      value: 3775,
    },
    {
      label: "IHALA WEERAMBUWA",
      value: 3801,
    },
    {
      label: "ILUKHENA",
      value: 3851,
    },
    {
      label: "INGURUWATTA",
      value: 3928,
    },
    {
      label: "KABALEWA",
      value: 4059,
    },
    {
      label: "KANDEGEDARA",
      value: 4492,
    },
    {
      label: "KATUWATTEWELA",
      value: 4872,
    },
    {
      label: "KATUWELLA",
      value: 4876,
    },
    {
      label: "KETAWALEGEDARA",
      value: 5070,
    },
    {
      label: "KIRINDAWA",
      value: 5192,
    },
    {
      label: "KITHALAWA",
      value: 5236,
    },
    {
      label: "KONGAHAGEDARA",
      value: 5443,
    },
    {
      label: "KONGOLLA",
      value: 5461,
    },
    {
      label: "KOSHENA",
      value: 5534,
    },
    {
      label: "KULIYAPITIYA TOWN",
      value: 5762,
    },
    {
      label: "KUMBALWALA",
      value: 5790,
    },
    {
      label: "KUMBUKKOTUWA",
      value: 5809,
    },
    {
      label: "KURUDELPOTHA",
      value: 5859,
    },
    {
      label: "MADAKUMBURUMULLA",
      value: 6084,
    },
    {
      label: "MAHIMPITIYA",
      value: 6409,
    },
    {
      label: "MAWELA",
      value: 6889,
    },
    {
      label: "MEEGAHAKOTUWA",
      value: 7022,
    },
    {
      label: "MOOKALANYAYA",
      value: 7289,
    },
    {
      label: "NARANGALLA",
      value: 7698,
    },
    {
      label: "PAHALA ELATHALAWA",
      value: 8256,
    },
    {
      label: "PAHALA EMBAWA",
      value: 8258,
    },
    {
      label: "PAHALA GALPOLA",
      value: 8264,
    },
    {
      label: "PAHALA KALUGAMUWA",
      value: 8289,
    },
    {
      label: "PAHALA PIDUMA",
      value: 8343,
    },
    {
      label: "PAHALA WEERAMBUWA",
      value: 8369,
    },
    {
      label: "PALLEWELA",
      value: 8527,
    },
    {
      label: "PITADENIYA",
      value: 9128,
    },
    {
      label: "THABBOMULLA",
      value: 10323,
    },
    {
      label: "THALAHITIMULLA",
      value: 10357,
    },
    {
      label: "THUMMODARA",
      value: 10791,
    },
    {
      label: "UDIHITIMULLA",
      value: 10998,
    },
    {
      label: "UNALEEYA",
      value: 11155,
    },
    {
      label: "WADUGEDARA",
      value: 11516,
    },
    {
      label: "WAHUMUWA",
      value: 11552,
    },
    {
      label: "WERALUGAMA",
      value: 12093,
    },
    {
      label: "WEWAGAMA",
      value: 12135,
    },
    {
      label: "YAKARAWATTA",
      value: 12230,
    },
  ],
  "149": [
    {
      label: "AHASPOKUNA NORTH",
      value: 75,
    },
    {
      label: "AHASPOKUNA SOUTH",
      value: 76,
    },
    {
      label: "ALAWATHUGIRIGAMA",
      value: 193,
    },
    {
      label: "ALUTH PALLEKELE",
      value: 248,
    },
    {
      label: "AMBAKOTAYAWATTA",
      value: 334,
    },
    {
      label: "AMUNUGAMA NORTH",
      value: 419,
    },
    {
      label: "AMUNUGAMA SOUTH",
      value: 420,
    },
    {
      label: "ARANGALA NORTH",
      value: 575,
    },
    {
      label: "ARANGALA SOUTH",
      value: 576,
    },
    {
      label: "ASWALAPITIYA",
      value: 642,
    },
    {
      label: "BALAGOLLA EAST",
      value: 768,
    },
    {
      label: "BALAGOLLA WEST",
      value: 769,
    },
    {
      label: "BOGASKUMBURA",
      value: 1137,
    },
    {
      label: "DAMBARAWA",
      value: 1464,
    },
    {
      label: "DEEKIRIMADAWALA",
      value: 1600,
    },
    {
      label: "DEGALDORUWA",
      value: 1614,
    },
    {
      label: "DELGASLANDA",
      value: 1679,
    },
    {
      label: "DELIWALATHENNA",
      value: 1692,
    },
    {
      label: "DIYABUBULA",
      value: 1924,
    },
    {
      label: "DODAMGOLLA",
      value: 1956,
    },
    {
      label: "DUNUHAPPAWA",
      value: 2081,
    },
    {
      label: "GABADAGAMA NORTH",
      value: 2444,
    },
    {
      label: "GABADAGAMA SOUTH",
      value: 2445,
    },
    {
      label: "GALAMUNA",
      value: 2503,
    },
    {
      label: "GALAPITAAMBE",
      value: 2505,
    },
    {
      label: "GALMADUWA",
      value: 2594,
    },
    {
      label: "GALPIHILLA",
      value: 2612,
    },
    {
      label: "GONAWALA NORTH",
      value: 2941,
    },
    {
      label: "GONAWALA SOUTH",
      value: 2942,
    },
    {
      label: "HAPUWALA",
      value: 3212,
    },
    {
      label: "HATHAMUNA",
      value: 3239,
    },
    {
      label: "HEEPITIYA",
      value: 3298,
    },
    {
      label: "HURIKADUWA EAST",
      value: 3622,
    },
    {
      label: "HURIKADUWA MADIGE",
      value: 3623,
    },
    {
      label: "HURIKADUWA NORTH",
      value: 3624,
    },
    {
      label: "HURIKADUWA SOUTH",
      value: 3625,
    },
    {
      label: "HURIKADUWA WEST",
      value: 3626,
    },
    {
      label: "IHALA GONAGAMA",
      value: 3698,
    },
    {
      label: "IHALAWELA",
      value: 3821,
    },
    {
      label: "KANDEKUMBURA",
      value: 4498,
    },
    {
      label: "KARATTAMADA",
      value: 4715,
    },
    {
      label: "KENGALLA",
      value: 5018,
    },
    {
      label: "KUMBUKKANDURA NORTH",
      value: 5807,
    },
    {
      label: "KUMBUKKANDURA SOUTH",
      value: 5808,
    },
    {
      label: "KUNDASALE NORTH",
      value: 5830,
    },
    {
      label: "KUNDASALE SOUTH",
      value: 5831,
    },
    {
      label: "KURUAMBEMUDUNA",
      value: 5858,
    },
    {
      label: "LEWELLAGAMA",
      value: 5998,
    },
    {
      label: "LUNUKETIYAMADITTA",
      value: 6048,
    },
    {
      label: "MAHARATHENNA EAST",
      value: 6356,
    },
    {
      label: "MAHARATHENNA WEST",
      value: 6357,
    },
    {
      label: "MAHAWATTA EAST",
      value: 6379,
    },
    {
      label: "MAHAWATTA NORTH",
      value: 6380,
    },
    {
      label: "MAHAWATTA SOUTH",
      value: 6381,
    },
    {
      label: "MAHAWATTA WEST",
      value: 6382,
    },
    {
      label: "MAKKANIGAMA",
      value: 6454,
    },
    {
      label: "MALPANA",
      value: 6568,
    },
    {
      label: "MALUWEGAMA",
      value: 6576,
    },
    {
      label: "MENIKHINNA",
      value: 7120,
    },
    {
      label: "NARANPANAWA EAST",
      value: 7713,
    },
    {
      label: "NARANPANAWA WEST",
      value: 7714,
    },
    {
      label: "NATTARAMPOTHA",
      value: 7752,
    },
    {
      label: "NITHULETHENNA",
      value: 8025,
    },
    {
      label: "PALLEGAMA",
      value: 8497,
    },
    {
      label: "PALLEGUNNEPANA NORTH",
      value: 8502,
    },
    {
      label: "PALLEGUNNEPANA SOUTH",
      value: 8503,
    },
    {
      label: "PILAWALA NORTH",
      value: 9078,
    },
    {
      label: "PILAWALA SOUTH",
      value: 9079,
    },
    {
      label: "RAJAWELLA NORTH",
      value: 9572,
    },
    {
      label: "RAJAWELLA SOUTH",
      value: 9573,
    },
    {
      label: "SIRIMALWATTA EAST",
      value: 10148,
    },
    {
      label: "SIRIMALWATTA PALLEGAMA",
      value: 10149,
    },
    {
      label: "SIRIMALWATTA WEST",
      value: 10150,
    },
    {
      label: "UDAGAMA NORTH",
      value: 10892,
    },
    {
      label: "UDAGAMA SOUTH",
      value: 10893,
    },
    {
      label: "UDAGUNNEPANA NORTH",
      value: 10902,
    },
    {
      label: "UDAGUNNEPANA SOUTH",
      value: 10903,
    },
    {
      label: "WAVINNA",
      value: 11808,
    },
    {
      label: "WEPATHANA",
      value: 12072,
    },
    {
      label: "WIJAYA SRI GAMA",
      value: 12175,
    },
  ],
  "150": [
    {
      label: "AKARAGANA NORTH",
      value: 91,
    },
    {
      label: "AKARAGANA SOUTH",
      value: 92,
    },
    {
      label: "ALAKOLADENIYA",
      value: 164,
    },
    {
      label: "ATTANAPITIYA",
      value: 681,
    },
    {
      label: "BAMUNAWALA",
      value: 831,
    },
    {
      label: "BAMUNUGEDARA",
      value: 835,
    },
    {
      label: "BOYAGANE",
      value: 1264,
    },
    {
      label: "BUDANAPITIYA",
      value: 1279,
    },
    {
      label: "DEMATAGOLLA",
      value: 1720,
    },
    {
      label: "GANGODA",
      value: 2715,
    },
    {
      label: "GETTUWANA",
      value: 2788,
    },
    {
      label: "GINIKARAWA",
      value: 2802,
    },
    {
      label: "HADIRAWALANA IHALA",
      value: 3049,
    },
    {
      label: "HENAMULLA",
      value: 3336,
    },
    {
      label: "HERALIYAWALA",
      value: 3367,
    },
    {
      label: "ILUPPUGEDARA",
      value: 3865,
    },
    {
      label: "KALATUWA PELESSA",
      value: 4248,
    },
    {
      label: "KUDUMBUWA",
      value: 5744,
    },
    {
      label: "KURUNEGALA TOWN - BAZAAR",
      value: 5894,
    },
    {
      label: "KURUNEGALA TOWN - CENTRAL",
      value: 5895,
    },
    {
      label: "KURUNEGALA TOWN - EAST",
      value: 5896,
    },
    {
      label: "KURUNEGALA TOWN - NORTH",
      value: 5897,
    },
    {
      label: "KURUNEGALA TOWN - NORTH EAST",
      value: 5898,
    },
    {
      label: "KURUNEGALA TOWN - SOUTH",
      value: 5899,
    },
    {
      label: "KURUNEGALA TOWN - WEST",
      value: 5900,
    },
    {
      label: "MADITHIYAWALA",
      value: 6139,
    },
    {
      label: "MAHAKANDEGAMA",
      value: 6310,
    },
    {
      label: "MALKADUWAWA",
      value: 6552,
    },
    {
      label: "MALKADUWAWA NORTH",
      value: 6553,
    },
    {
      label: "MALKADUWAWA SOUTH",
      value: 6554,
    },
    {
      label: "MATHAWA",
      value: 6811,
    },
    {
      label: "NAILIYA",
      value: 7594,
    },
    {
      label: "PAHALA HADIRAWALANA",
      value: 8271,
    },
    {
      label: "PAHALA THALAMPITIYA",
      value: 8349,
    },
    {
      label: "PAHALA WARADDANA",
      value: 8367,
    },
    {
      label: "PUBBOWA",
      value: 9340,
    },
    {
      label: "RANGAMA",
      value: 9651,
    },
    {
      label: "RATHGALLA",
      value: 9704,
    },
    {
      label: "RIKILLAGAMUWA",
      value: 9798,
    },
    {
      label: "SEERADUNNA",
      value: 10008,
    },
    {
      label: "SERUWAWA",
      value: 10076,
    },
    {
      label: "THALATUWA",
      value: 10390,
    },
    {
      label: "THALVITA",
      value: 10450,
    },
    {
      label: "THELIYAGONNA",
      value: 10578,
    },
    {
      label: "THORAWATHURA",
      value: 10748,
    },
    {
      label: "UDAWALPOLA",
      value: 10975,
    },
    {
      label: "VEHERABENDA",
      value: 11365,
    },
    {
      label: "VILBAWA",
      value: 11447,
    },
    {
      label: "VILGODA",
      value: 11455,
    },
    {
      label: "WANDURAGALA",
      value: 11668,
    },
    {
      label: "WARADDANA",
      value: 11696,
    },
    {
      label: "WEHERA EAST",
      value: 11891,
    },
    {
      label: "WEHERA WEST",
      value: 11892,
    },
    {
      label: "WELLAWA",
      value: 12033,
    },
  ],
  "151": [
    {
      label: "ADAVIKANDA",
      value: 31,
    },
    {
      label: "AMUHENKANDA",
      value: 413,
    },
    {
      label: "BODHIMALUWA",
      value: 1115,
    },
    {
      label: "DELGAMUWA",
      value: 1677,
    },
    {
      label: "DEVIPAHALA",
      value: 1784,
    },
    {
      label: "EKNELIGODA",
      value: 2168,
    },
    {
      label: "EKNELIGODA NORTH",
      value: 2169,
    },
    {
      label: "ENDIRIYANWALA",
      value: 2299,
    },
    {
      label: "ERATHNA",
      value: 2317,
    },
    {
      label: "GALUKAGAMA",
      value: 2631,
    },
    {
      label: "KAHENGAMA",
      value: 4197,
    },
    {
      label: "KAHENGAMA WEST",
      value: 4198,
    },
    {
      label: "KANDANGODA",
      value: 4475,
    },
    {
      label: "KANDANGODA SOUTH",
      value: 4476,
    },
    {
      label: "KIRAGALA",
      value: 5123,
    },
    {
      label: "KITHULPE",
      value: 5254,
    },
    {
      label: "KOSGODA",
      value: 5530,
    },
    {
      label: "KURUVITA",
      value: 5911,
    },
    {
      label: "LASSAKANDA",
      value: 5960,
    },
    {
      label: "MENERIPITIYA",
      value: 7117,
    },
    {
      label: "MILLAVITIYA",
      value: 7187,
    },
    {
      label: "MIYANADENIYA",
      value: 7239,
    },
    {
      label: "NADUKARADENIYA",
      value: 7564,
    },
    {
      label: "OVITIGAMA",
      value: 8195,
    },
    {
      label: "PAHALA KURUVITA",
      value: 8313,
    },
    {
      label: "PARAKADUWA",
      value: 8753,
    },
    {
      label: "PATHAGAMA",
      value: 8829,
    },
    {
      label: "PATHBERIYA",
      value: 8840,
    },
    {
      label: "PATHBERIYA WEST",
      value: 8841,
    },
    {
      label: "POHORABAWA",
      value: 9189,
    },
    {
      label: "PUSSELLA",
      value: 9456,
    },
    {
      label: "SUDAGALA",
      value: 10277,
    },
    {
      label: "THALAVITIYA",
      value: 10394,
    },
    {
      label: "THEPPANAWA",
      value: 10611,
    },
    {
      label: "THEPPANAWA IHALAGAMA",
      value: 10612,
    },
    {
      label: "THEPPANAWA PAHALAGAMA",
      value: 10613,
    },
    {
      label: "UDAKADA",
      value: 10916,
    },
    {
      label: "WALANDURA",
      value: 11587,
    },
    {
      label: "WATHUYAYA",
      value: 11789,
    },
  ],
  "152": [
    {
      label: "AKARAHEDIYA",
      value: 93,
    },
    {
      label: "DAMMANTHENNA",
      value: 1484,
    },
    {
      label: "DASGIRIYA",
      value: 1556,
    },
    {
      label: "DEWALADENIYA",
      value: 1795,
    },
    {
      label: "DIVULGAS PATHANA",
      value: 1906,
    },
    {
      label: "ETANWALA",
      value: 2376,
    },
    {
      label: "GALGEDAWALA",
      value: 2550,
    },
    {
      label: "GANGA HENWALA",
      value: 2708,
    },
    {
      label: "GANGALAPUWAKPITIYA",
      value: 2711,
    },
    {
      label: "GONAWALA",
      value: 2938,
    },
    {
      label: "GURUWELA",
      value: 3025,
    },
    {
      label: "HALMINIYA",
      value: 3100,
    },
    {
      label: "HATTOTA AMUNA",
      value: 3261,
    },
    {
      label: "ILUKKUMBURA",
      value: 3852,
    },
    {
      label: "IMADUWA",
      value: 3866,
    },
    {
      label: "KAHAGALA",
      value: 4145,
    },
    {
      label: "KALUGANGA",
      value: 4343,
    },
    {
      label: "KANDEPITAWALA",
      value: 4504,
    },
    {
      label: "KARADAMULLA",
      value: 4602,
    },
    {
      label: "KIVULAWADIYA",
      value: 5274,
    },
    {
      label: "LAGGALA PALLEGAMA",
      value: 5937,
    },
    {
      label: "LAKEGALA",
      value: 5941,
    },
    {
      label: "LELOYA",
      value: 5977,
    },
    {
      label: "MAHALAKOTUWA",
      value: 6320,
    },
    {
      label: "MAOYA",
      value: 6704,
    },
    {
      label: "MEDA ELA",
      value: 6903,
    },
    {
      label: "MINIRANKETIYA",
      value: 7204,
    },
    {
      label: "MORATHENNA",
      value: 7343,
    },
    {
      label: "NARANGAMUWA",
      value: 7701,
    },
    {
      label: "PITAWALA",
      value: 9139,
    },
    {
      label: "POTTATAWELA",
      value: 9330,
    },
    {
      label: "RAMBUKOLUWA",
      value: 9607,
    },
    {
      label: "RANAMUREGAMA",
      value: 9621,
    },
    {
      label: "RATHNINDA",
      value: 9741,
    },
    {
      label: "RAWANAGAMA",
      value: 9758,
    },
    {
      label: "WELIWARANAGOLLA",
      value: 12008,
    },
    {
      label: "WELLEWALA",
      value: 12045,
    },
  ],
  "154": [
    {
      label: "ABHAYAPURA",
      value: 16,
    },
    {
      label: "ALHILALPURA",
      value: 209,
    },
    {
      label: "BAUDDHARTHA GAMA",
      value: 974,
    },
    {
      label: "BUDDHAYAYA",
      value: 1283,
    },
    {
      label: "DEBARELLA",
      value: 1566,
    },
    {
      label: "GALAMUNA",
      value: 2503,
    },
    {
      label: "GEMUNUPURA",
      value: 2776,
    },
    {
      label: "HINGURAKDAMANA",
      value: 3443,
    },
    {
      label: "JAYABIMA",
      value: 4018,
    },
    {
      label: "JAYAPURA",
      value: 4029,
    },
    {
      label: "KEGALUGAMA",
      value: 4935,
    },
    {
      label: "LANKAPURA",
      value: 5955,
    },
    {
      label: "MAHA KIRIMETIYA",
      value: 6242,
    },
    {
      label: "MUNISIRIGAMA",
      value: 7474,
    },
    {
      label: "NELUMPURA",
      value: 7902,
    },
    {
      label: "ONEGAMA MUSLIMGAMA",
      value: 8153,
    },
    {
      label: "PANSALGODELLA",
      value: 8714,
    },
    {
      label: "PATUNUGAMA",
      value: 8892,
    },
    {
      label: "PULASTHIGAMA",
      value: 9366,
    },
    {
      label: "RIFAIPURA",
      value: 9797,
    },
    {
      label: "SANGHABODHI GAMA",
      value: 9956,
    },
    {
      label: "SENANAYAKAPURA",
      value: 10041,
    },
    {
      label: "SOMAPURA",
      value: 10225,
    },
    {
      label: "SUNGAVILA",
      value: 10298,
    },
    {
      label: "THALPOTHA",
      value: 10447,
    },
    {
      label: "THAMBALA",
      value: 10465,
    },
    {
      label: "WEERAPURA",
      value: 11867,
    },
    {
      label: "WELI ELA",
      value: 11943,
    },
  ],
  "155": [
    {
      label: "ALAKOLAGALA",
      value: 166,
    },
    {
      label: "ARAWAKUMBURA",
      value: 590,
    },
    {
      label: "ATTANAGOLLA",
      value: 677,
    },
    {
      label: "BATAWATTA",
      value: 935,
    },
    {
      label: "EKIRIYA",
      value: 2164,
    },
    {
      label: "GALLULLA",
      value: 2593,
    },
    {
      label: "GALWELAGAMA",
      value: 2642,
    },
    {
      label: "HOPTON",
      value: 3523,
    },
    {
      label: "JANATHAPURA",
      value: 4008,
    },
    {
      label: "JANATHAPURA NORTH",
      value: 4009,
    },
    {
      label: "JANATHAPURA SOUTH",
      value: 4010,
    },
    {
      label: "KOTTALBEDDA",
      value: 5613,
    },
    {
      label: "LUNUGALA TOWN",
      value: 6044,
    },
    {
      label: "MADULSIMA",
      value: 6163,
    },
    {
      label: "MADUWATTA",
      value: 6180,
    },
    {
      label: "MAHADOWA",
      value: 6276,
    },
    {
      label: "METIGAHATHENNA",
      value: 7136,
    },
    {
      label: "MILLABEDDA",
      value: 7174,
    },
    {
      label: "PALLEKIRUWA",
      value: 8510,
    },
    {
      label: "PEESSAGAMA",
      value: 8910,
    },
    {
      label: "RENDAPOLA",
      value: 9782,
    },
    {
      label: "SOORIYAGODA",
      value: 10235,
    },
    {
      label: "SUMUDUGAMA",
      value: 10295,
    },
    {
      label: "UDAKIRUWA",
      value: 10925,
    },
    {
      label: "UDAPANGUWA",
      value: 10951,
    },
    {
      label: "WERAGODA",
      value: 12078,
    },
    {
      label: "WEWABEDDA",
      value: 12134,
    },
    {
      label: "YAPAMMA",
      value: 12265,
    },
  ],
  "156": [
    {
      label: "ABHAYAPURA",
      value: 16,
    },
    {
      label: "AGBOPURA",
      value: 67,
    },
    {
      label: "ANGUNAKOLAWEWA",
      value: 495,
    },
    {
      label: "BERALIHELA",
      value: 1059,
    },
    {
      label: "BOGAHAWEWA",
      value: 1131,
    },
    {
      label: "DEWRAMVEHERA",
      value: 1811,
    },
    {
      label: "DUTUGEMUNUPURA",
      value: 2099,
    },
    {
      label: "ITTANWEKADA",
      value: 3977,
    },
    {
      label: "JAYAGAMA",
      value: 4019,
    },
    {
      label: "KARAMBAWEWA",
      value: 4662,
    },
    {
      label: "KEERTHIPURA",
      value: 4933,
    },
    {
      label: "KENDAGASMANKADA",
      value: 5000,
    },
    {
      label: "LUNUGAMVEHERA NEW TOWN",
      value: 6046,
    },
    {
      label: "MAHA ALUTH GAM ARA",
      value: 6216,
    },
    {
      label: "MAHANAGAPURA",
      value: 6332,
    },
    {
      label: "MATTALA",
      value: 6829,
    },
    {
      label: "MIHINDUPURA",
      value: 7169,
    },
    {
      label: "MUWANWEWA",
      value: 7540,
    },
    {
      label: "PADAVIGAMA",
      value: 8211,
    },
    {
      label: "PAHALA MATTALA",
      value: 8326,
    },
    {
      label: "PARAKRAMAPURA",
      value: 8760,
    },
    {
      label: "PUNCHIAPPUJANDURA",
      value: 9407,
    },
    {
      label: "RAMBUKWEWA",
      value: 9612,
    },
    {
      label: "RANASIRIPURA",
      value: 9626,
    },
    {
      label: "RANAWARNAWA",
      value: 9633,
    },
    {
      label: "SADDHATHISSAPURA",
      value: 9850,
    },
    {
      label: "SADDHATHISSAPURA NEW TOWN",
      value: 9851,
    },
    {
      label: "SALIYAPURA",
      value: 9879,
    },
    {
      label: "SAMANPURA",
      value: 9893,
    },
    {
      label: "SEENIMUNNA",
      value: 10001,
    },
    {
      label: "SENAPURA",
      value: 10045,
    },
    {
      label: "SINGHAPURA",
      value: 10108,
    },
    {
      label: "VEHERAGALA",
      value: 11366,
    },
    {
      label: "WEERAVIL ARA",
      value: 11871,
    },
    {
      label: "WEERAVILA",
      value: 11872,
    },
    {
      label: "WELIGATTA",
      value: 11954,
    },
  ],
  "157": [
    {
      label: "ATHUWANA",
      value: 672,
    },
    {
      label: "DEMATAPITIYA",
      value: 1728,
    },
    {
      label: "EGODAYAGAMA",
      value: 2146,
    },
    {
      label: "ERUNVILA",
      value: 2359,
    },
    {
      label: "GALAHITIYAWA",
      value: 2496,
    },
    {
      label: "GALMURUWA NORTH",
      value: 2599,
    },
    {
      label: "GALMURUWA SOUTH",
      value: 2600,
    },
    {
      label: "HAREENDRAGAMA",
      value: 3226,
    },
    {
      label: "HEEN AGARA",
      value: 3279,
    },
    {
      label: "HENAPOLA",
      value: 3337,
    },
    {
      label: "IHALAGAMA",
      value: 3810,
    },
    {
      label: "INDIGASVILA",
      value: 3895,
    },
    {
      label: "IRATTAKULAMA NORTH",
      value: 3962,
    },
    {
      label: "IRATTAKULAMA SOUTH",
      value: 3963,
    },
    {
      label: "KACHCHAKADUWA",
      value: 4064,
    },
    {
      label: "KARUKKUWA",
      value: 4740,
    },
    {
      label: "KARUKKUWATAWANA",
      value: 4741,
    },
    {
      label: "KONGASYAYA",
      value: 5455,
    },
    {
      label: "KUDA BINGIRIYA",
      value: 5666,
    },
    {
      label: "KUDIRIPPUWA",
      value: 5740,
    },
    {
      label: "MAHABADDEGAMA",
      value: 6267,
    },
    {
      label: "MAHAGAMA NORTH",
      value: 6285,
    },
    {
      label: "MAHAGAMA SOUTH",
      value: 6286,
    },
    {
      label: "MANAKKULAMA",
      value: 6618,
    },
    {
      label: "MARAGGALAGAMA",
      value: 6730,
    },
    {
      label: "MEDAGAMA",
      value: 6933,
    },
    {
      label: "MELLAWAGARA",
      value: 7110,
    },
    {
      label: "MUGUNUWATAWANA",
      value: 7414,
    },
    {
      label: "NANKADAWARA",
      value: 7673,
    },
    {
      label: "NELUMPOKUNA",
      value: 7901,
    },
    {
      label: "PALLAKELE",
      value: 8469,
    },
    {
      label: "PAMBALA",
      value: 8585,
    },
    {
      label: "PAMBALA SOUTH",
      value: 8586,
    },
    {
      label: "PANIRENDAWA",
      value: 8682,
    },
    {
      label: "PATTIYAGAMA",
      value: 8882,
    },
    {
      label: "PONNANKANNIYA",
      value: 9255,
    },
    {
      label: "POOKULAMA",
      value: 9265,
    },
    {
      label: "POTHUVILA",
      value: 9322,
    },
    {
      label: "RATHMAL AGARA",
      value: 9711,
    },
    {
      label: "RATHNAGIRIYA",
      value: 9735,
    },
    {
      label: "SEMBUKATTIYA",
      value: 10032,
    },
    {
      label: "SUDUWELLA",
      value: 10285,
    },
    {
      label: "THAMBAGALLA",
      value: 10459,
    },
    {
      label: "THAMBAGALLA WATTA",
      value: 10460,
    },
    {
      label: "THAMBAGALLA WEST",
      value: 10461,
    },
    {
      label: "THANIWELLAGAMA",
      value: 10514,
    },
    {
      label: "URALIYA",
      value: 11201,
    },
    {
      label: "URALIYAGARA",
      value: 11202,
    },
    {
      label: "WALAHENA",
      value: 11571,
    },
  ],
  "158": [
    {
      label: "IRANAI-ILUPAIKULAM",
      value: 3956,
    },
    {
      label: "KAKKAYANKULAM EAST",
      value: 4216,
    },
    {
      label: "KAKKAYANKULAM WEST",
      value: 4217,
    },
    {
      label: "KALMADU",
      value: 4286,
    },
    {
      label: "KEERISUDDAN",
      value: 4930,
    },
    {
      label: "MADHU",
      value: 6127,
    },
    {
      label: "MALUVARAYARKADDAYADAMPAN",
      value: 6575,
    },
    {
      label: "MATHA KIRAMAM",
      value: 6798,
    },
    {
      label: "PALAMPIDDY",
      value: 8421,
    },
    {
      label: "PANNAVEDDUVAN",
      value: 8703,
    },
    {
      label: "PARASANKULAM",
      value: 8798,
    },
    {
      label: "PERIYAMURIPPU",
      value: 9018,
    },
    {
      label: "PERIYA-PANDIVIRICHCHAN EAST",
      value: 9028,
    },
    {
      label: "PERIYA-PANDIVIRICHCHAN WEST",
      value: 9029,
    },
    {
      label: "POOMALARNTHAN",
      value: 9270,
    },
    {
      label: "THEKKAM",
      value: 10560,
    },
    {
      label: "VILATHIKULAM",
      value: 11442,
    },
  ],
  "159": [
    {
      label: "ALPITIYA",
      value: 230,
    },
    {
      label: "ALUGALGE",
      value: 236,
    },
    {
      label: "ARATUGASWELA",
      value: 587,
    },
    {
      label: "BADULUWELA",
      value: 739,
    },
    {
      label: "BANDARAWADIYA",
      value: 861,
    },
    {
      label: "DAMBAGALLA",
      value: 1455,
    },
    {
      label: "DELIWA",
      value: 1689,
    },
    {
      label: "ELLEKONA",
      value: 2241,
    },
    {
      label: "GALBOKKA",
      value: 2528,
    },
    {
      label: "GALGAMUWA",
      value: 2543,
    },
    {
      label: "GANGODA ARAWA",
      value: 2716,
    },
    {
      label: "GANGODAGAMA",
      value: 2719,
    },
    {
      label: "GONATHALAWA",
      value: 2934,
    },
    {
      label: "IHAWA",
      value: 3823,
    },
    {
      label: "ILUKLANDA",
      value: 3853,
    },
    {
      label: "INGINIYAGALA",
      value: 3921,
    },
    {
      label: "KAHAGOLLA",
      value: 4148,
    },
    {
      label: "KOLLADENIYA",
      value: 5394,
    },
    {
      label: "KOTTAGALA",
      value: 5610,
    },
    {
      label: "MAGANDANA",
      value: 6200,
    },
    {
      label: "MAGANDAOYA COLONY",
      value: 6202,
    },
    {
      label: "MAKULLA",
      value: 6469,
    },
    {
      label: "MARIARAWA",
      value: 6764,
    },
    {
      label: "MULLEGAMA",
      value: 7441,
    },
    {
      label: "NAMALOYA COLONY",
      value: 7647,
    },
    {
      label: "NEELAWA BEDDA",
      value: 7861,
    },
    {
      label: "NELLIYADDA",
      value: 7892,
    },
    {
      label: "OBBEGODA",
      value: 8103,
    },
    {
      label: "PAGURA",
      value: 8233,
    },
    {
      label: "PANGUWA",
      value: 8676,
    },
    {
      label: "POLGAHAGAMA",
      value: 9207,
    },
    {
      label: "RITIGAHAWATTA",
      value: 9807,
    },
    {
      label: "RUWALWELA",
      value: 9842,
    },
    {
      label: "THALKOTAYAYA",
      value: 10433,
    },
    {
      label: "THAMPALAWELA",
      value: 10501,
    },
    {
      label: "THERELA",
      value: 10618,
    },
    {
      label: "UDUMULLA",
      value: 11028,
    },
    {
      label: "WATAWANAGAMA",
      value: 11763,
    },
  ],
  "161": [
    {
      label: "ANDIGAMA",
      value: 468,
    },
    {
      label: "BARANANKATTUWA",
      value: 884,
    },
    {
      label: "DALUWEGAMA",
      value: 1441,
    },
    {
      label: "DANGAHAWALA",
      value: 1521,
    },
    {
      label: "DANGASWEWA",
      value: 1531,
    },
    {
      label: "GALKULIYA EAST",
      value: 2571,
    },
    {
      label: "GALKULIYA WEST",
      value: 2572,
    },
    {
      label: "GARAYAKGAMA",
      value: 2752,
    },
    {
      label: "JAYARAJAPURA",
      value: 4032,
    },
    {
      label: "KAKUPANDIYAWA",
      value: 4218,
    },
    {
      label: "KARUNGALICHOLE",
      value: 4745,
    },
    {
      label: "KARUWALABEDDA",
      value: 4754,
    },
    {
      label: "KAWAYANKULAMA",
      value: 4898,
    },
    {
      label: "KIVULA NO. 1",
      value: 5266,
    },
    {
      label: "KIVULA NO. 4-1",
      value: 5267,
    },
    {
      label: "KIVULA NO. 4-2",
      value: 5268,
    },
    {
      label: "KIVULA YOUTH PROJECT",
      value: 5271,
    },
    {
      label: "KIVULAGODA GOVI JANAPADAYA",
      value: 5272,
    },
    {
      label: "MAHA KUMBUKKADAWALA",
      value: 6246,
    },
    {
      label: "MAHASEMBUKULIYA",
      value: 6362,
    },
    {
      label: "MOHORIYA",
      value: 7257,
    },
    {
      label: "PUNAVITIYA",
      value: 9403,
    },
    {
      label: "RATHMALGASWEWA",
      value: 9721,
    },
    {
      label: "SEMBUKULIYA",
      value: 10034,
    },
    {
      label: "WALPALUWA",
      value: 11641,
    },
  ],
  "163": [
    {
      label: "AHUGAMMANA",
      value: 78,
    },
    {
      label: "AKBAR TOWN",
      value: 98,
    },
    {
      label: "AMBAGASPITIYA",
      value: 325,
    },
    {
      label: "AMUNUKUMBURA",
      value: 424,
    },
    {
      label: "AMUNUKUMBURA SOUTH",
      value: 425,
    },
    {
      label: "APPUGEWATTA",
      value: 531,
    },
    {
      label: "ARAMANGODA",
      value: 562,
    },
    {
      label: "ARAMANGODA NORTH",
      value: 563,
    },
    {
      label: "BALIVILA",
      value: 795,
    },
    {
      label: "BATEPOLA",
      value: 936,
    },
    {
      label: "BATEPOLA NORTH",
      value: 937,
    },
    {
      label: "BUTHPITIYA NORTH",
      value: 1327,
    },
    {
      label: "BUTHPITIYA SOUTH",
      value: 1328,
    },
    {
      label: "DALUPITIYA EAST",
      value: 1431,
    },
    {
      label: "DALUPITIYA SOUTH",
      value: 1432,
    },
    {
      label: "DALUPITIYA WEST",
      value: 1433,
    },
    {
      label: "DANGAHAWELA",
      value: 1522,
    },
    {
      label: "ELDENIYA EAST",
      value: 2200,
    },
    {
      label: "ELDENIYA WEST",
      value: 2201,
    },
    {
      label: "ENDERAMULLA EAST",
      value: 2295,
    },
    {
      label: "ENDERAMULLA SOUTH",
      value: 2296,
    },
    {
      label: "ENDERAMULLA WEST",
      value: 2297,
    },
    {
      label: "ETIKEHELGALLA EAST",
      value: 2425,
    },
    {
      label: "ETIKEHELGALLA WEST",
      value: 2426,
    },
    {
      label: "GONAHENA EAST",
      value: 2917,
    },
    {
      label: "GONAHENA NORTH",
      value: 2918,
    },
    {
      label: "GONAHENA SOUTH",
      value: 2919,
    },
    {
      label: "GONAHENA WEST",
      value: 2920,
    },
    {
      label: "GONGITHOTA",
      value: 2948,
    },
    {
      label: "GONGITHOTA WEST",
      value: 2949,
    },
    {
      label: "HENEGAMA",
      value: 3350,
    },
    {
      label: "IHALA KARAGAHAMUNA EAST",
      value: 3716,
    },
    {
      label: "IHALA KARAGAHAMUNA NORTH",
      value: 3717,
    },
    {
      label: "IHALA KARAGAHAMUNA SOUTH",
      value: 3718,
    },
    {
      label: "KAHATANA",
      value: 4173,
    },
    {
      label: "KANDUMULLA",
      value: 4520,
    },
    {
      label: "KENDALIYEDDAPALUWA EAST",
      value: 5008,
    },
    {
      label: "KENDALIYEDDAPALUWA NORTH",
      value: 5009,
    },
    {
      label: "KENDALIYEDDAPALUWA WEST",
      value: 5010,
    },
    {
      label: "KIMBULGODA",
      value: 5105,
    },
    {
      label: "KINIGAMA",
      value: 5114,
    },
    {
      label: "KIRIKITTA EAST",
      value: 5161,
    },
    {
      label: "KIRIKITTA NORTH",
      value: 5162,
    },
    {
      label: "KIRIKITTA WEST",
      value: 5163,
    },
    {
      label: "KIRILLAWALA",
      value: 5168,
    },
    {
      label: "KIRILLAWALA NORTH",
      value: 5169,
    },
    {
      label: "KIRILLAWALA SOUTH",
      value: 5170,
    },
    {
      label: "KIRILLAWALA WEST",
      value: 5171,
    },
    {
      label: "KIRIMETIYAGARA",
      value: 5177,
    },
    {
      label: "KOPIWATTA",
      value: 5492,
    },
    {
      label: "MAHARA NUGEGODA EAST",
      value: 6345,
    },
    {
      label: "MAHARA NUGEGODA NORTH",
      value: 6346,
    },
    {
      label: "MAHARA NUGEGODA SOUTH",
      value: 6347,
    },
    {
      label: "MAHARA NUGEGODA WEST",
      value: 6348,
    },
    {
      label: "MAHARAGAMA",
      value: 6350,
    },
    {
      label: "MALIGATHENNA",
      value: 6536,
    },
    {
      label: "MALWATHUHIRIPITIYA",
      value: 6585,
    },
    {
      label: "NARANWALA",
      value: 7721,
    },
    {
      label: "NARANWALA SOUTH",
      value: 7722,
    },
    {
      label: "NATHUDUWA",
      value: 7740,
    },
    {
      label: "NATHUDUWA WEST",
      value: 7741,
    },
    {
      label: "NEELAMAHARA NORTH",
      value: 7856,
    },
    {
      label: "NEELAMAHARA SOUTH",
      value: 7857,
    },
    {
      label: "NELIGAMA",
      value: 7884,
    },
    {
      label: "PAHALA KARAGAHAMUNA EAST",
      value: 8291,
    },
    {
      label: "PAHALA KARAGAHAMUNA NORTH",
      value: 8292,
    },
    {
      label: "PAHALA KARAGAHAMUNA WEST",
      value: 8293,
    },
    {
      label: "PASGAMMANA",
      value: 8815,
    },
    {
      label: "PILIKUTTUWA",
      value: 9087,
    },
    {
      label: "PINNAMEDA",
      value: 9110,
    },
    {
      label: "PINNAMEDA WEST",
      value: 9111,
    },
    {
      label: "PITUWALGODA",
      value: 9170,
    },
    {
      label: "PUWAKPITIYA",
      value: 9498,
    },
    {
      label: "PUWAKWETIYA",
      value: 9500,
    },
    {
      label: "RAMMUTHUGALA",
      value: 9616,
    },
    {
      label: "SIWRALUMULLA",
      value: 10184,
    },
    {
      label: "SOORIYAPALUWA EAST",
      value: 10236,
    },
    {
      label: "SOORIYAPALUWA NORTH",
      value: 10237,
    },
    {
      label: "SOORIYAPALUWA SOUTH",
      value: 10238,
    },
    {
      label: "UDUPILA EAST",
      value: 11039,
    },
    {
      label: "UDUPILA NORTH",
      value: 11040,
    },
    {
      label: "UDUPILA SOUTH",
      value: 11041,
    },
    {
      label: "URUWALA EAST",
      value: 11239,
    },
    {
      label: "URUWALA WEST",
      value: 11240,
    },
    {
      label: "VILIMBULA NORTH",
      value: 11457,
    },
    {
      label: "VILIMBULA SOUTH",
      value: 11458,
    },
    {
      label: "WARAPALANA",
      value: 11725,
    },
    {
      label: "WEBADA EAST",
      value: 11820,
    },
    {
      label: "WEBADA NORTH",
      value: 11821,
    },
    {
      label: "WEBADA SOUTH",
      value: 11822,
    },
    {
      label: "WEBADA WEST",
      value: 11823,
    },
    {
      label: "YONGAMMULLA",
      value: 12329,
    },
  ],
  "164": [
    {
      label: "DAMBAHENA",
      value: 1459,
    },
    {
      label: "DEPANAMA",
      value: 1760,
    },
    {
      label: "GANGODAVILA SOUTH B",
      value: 2725,
    },
    {
      label: "GODIGAMUWA NORTH",
      value: 2879,
    },
    {
      label: "GODIGAMUWA SOUTH",
      value: 2880,
    },
    {
      label: "GODIGAMUWA SOUTH B",
      value: 2881,
    },
    {
      label: "JAMBUGASMULLA",
      value: 3999,
    },
    {
      label: "KALALGODA",
      value: 4235,
    },
    {
      label: "KOTTAWA EAST",
      value: 5620,
    },
    {
      label: "KOTTAWA NORTH",
      value: 5621,
    },
    {
      label: "KOTTAWA SOUTH",
      value: 5622,
    },
    {
      label: "KOTTAWA TOWN",
      value: 5623,
    },
    {
      label: "KOTTAWA WEST",
      value: 5624,
    },
    {
      label: "LIYANAGODA",
      value: 6025,
    },
    {
      label: "MADIWELA",
      value: 6140,
    },
    {
      label: "MAHARAGAMA EAST",
      value: 6351,
    },
    {
      label: "MAHARAGAMA TOWN",
      value: 6352,
    },
    {
      label: "MAHARAGAMA WEST",
      value: 6353,
    },
    {
      label: "MAKUMBURA NORTH",
      value: 6477,
    },
    {
      label: "MAKUMBURA SOUTH",
      value: 6478,
    },
    {
      label: "MALAPALLA EAST",
      value: 6499,
    },
    {
      label: "MALAPALLA WEST",
      value: 6500,
    },
    {
      label: "MIRIHANA NORTH",
      value: 7218,
    },
    {
      label: "MIRIHANA SOUTH",
      value: 7219,
    },
    {
      label: "NAVINNA",
      value: 7774,
    },
    {
      label: "PAMUNUWA",
      value: 8594,
    },
    {
      label: "PANNIPITIYA NORTH",
      value: 8709,
    },
    {
      label: "PANNIPITIYA SOUTH",
      value: 8710,
    },
    {
      label: "PATHIRAGODA",
      value: 8851,
    },
    {
      label: "POLWATTA",
      value: 9245,
    },
    {
      label: "PRAGATHIPURA",
      value: 9336,
    },
    {
      label: "RUKMALE EAST A",
      value: 9834,
    },
    {
      label: "RUKMALE EAST B",
      value: 9835,
    },
    {
      label: "RUKMALE WEST",
      value: 9836,
    },
    {
      label: "THALAPATHPITIYA",
      value: 10382,
    },
    {
      label: "THALAWATHUGODA EAST",
      value: 10400,
    },
    {
      label: "THALAWATHUGODA WEST",
      value: 10401,
    },
    {
      label: "UDAHAMULLA EAST",
      value: 10906,
    },
    {
      label: "UDAHAMULLA WEST",
      value: 10907,
    },
    {
      label: "WATTEGEDARA",
      value: 11802,
    },
    {
      label: "WIJERAMA",
      value: 12190,
    },
  ],
  "167": [
    {
      label: "ADAPPARAGAMA",
      value: 29,
    },
    {
      label: "BARUDELPOLA",
      value: 895,
    },
    {
      label: "EGODAGODA",
      value: 2138,
    },
    {
      label: "GALAMUNA",
      value: 2503,
    },
    {
      label: "HALPANVILA EAST",
      value: 3107,
    },
    {
      label: "HALPANVILA WEST",
      value: 3108,
    },
    {
      label: "HEWANA",
      value: 3389,
    },
    {
      label: "HORAGOLLA NORTH",
      value: 3538,
    },
    {
      label: "HORAGOLLA SOUTH",
      value: 3539,
    },
    {
      label: "IHALA HATTINIYA",
      value: 3704,
    },
    {
      label: "IHALA KOSWADIYA",
      value: 3734,
    },
    {
      label: "IHALA KUDAWEWA",
      value: 3740,
    },
    {
      label: "IHALA MAHAWEWA",
      value: 3751,
    },
    {
      label: "IHALA WALAHAPITIYA",
      value: 3794,
    },
    {
      label: "IRANAVILA EAST",
      value: 3960,
    },
    {
      label: "IRANAVILA WEST",
      value: 3961,
    },
    {
      label: "MALIGAWATTA",
      value: 6540,
    },
    {
      label: "MARANDA NORTH",
      value: 6743,
    },
    {
      label: "MARANDA SOUTH",
      value: 6744,
    },
    {
      label: "MARAVILA NORTH",
      value: 6755,
    },
    {
      label: "MARAVILA SOUTH",
      value: 6756,
    },
    {
      label: "MARAVILA TOWN",
      value: 6757,
    },
    {
      label: "MARAVILA WELLA",
      value: 6758,
    },
    {
      label: "MATTAKOTUWA",
      value: 6827,
    },
    {
      label: "MATTAKOTUWELLA",
      value: 6828,
    },
    {
      label: "MEDA HATTINIYA",
      value: 6907,
    },
    {
      label: "MEDA KOSWADIYA",
      value: 6913,
    },
    {
      label: "MEDA MAHAWEWA",
      value: 6916,
    },
    {
      label: "MEDA THODUWAWA",
      value: 6924,
    },
    {
      label: "MEDA WALAHAPITIYA",
      value: 6926,
    },
    {
      label: "MEDAGODA",
      value: 6947,
    },
    {
      label: "MODARAWELLA",
      value: 7255,
    },
    {
      label: "MUTTIBENDIVILA",
      value: 7530,
    },
    {
      label: "PAHALA HATTINIYA",
      value: 8276,
    },
    {
      label: "PAHALA KOSWADIYA",
      value: 8308,
    },
    {
      label: "PAHALA KUDAWEWA",
      value: 8312,
    },
    {
      label: "PAHALA MAHAWEWA",
      value: 8321,
    },
    {
      label: "PAHALA WALAHAPITIYA",
      value: 8363,
    },
    {
      label: "PANANGODA",
      value: 8628,
    },
    {
      label: "PUHULHENA",
      value: 9355,
    },
    {
      label: "PURUDUWELLA",
      value: 9445,
    },
    {
      label: "SAGARAGAMA",
      value: 9854,
    },
    {
      label: "THALVILA",
      value: 10449,
    },
    {
      label: "THODUWAWA NORTH",
      value: 10725,
    },
    {
      label: "THODUWAWA SOUTH",
      value: 10726,
    },
    {
      label: "VEEHENA",
      value: 11358,
    },
    {
      label: "YATAKALANA",
      value: 12272,
    },
  ],
  "168": [
    {
      label: "ALUTTARAMA",
      value: 280,
    },
    {
      label: "ALUYATAWELA",
      value: 284,
    },
    {
      label: "BATHALAYAYA",
      value: 941,
    },
    {
      label: "BELAGANWEWA",
      value: 1001,
    },
    {
      label: "BELIGALLA",
      value: 1010,
    },
    {
      label: "DAMBAGOLLA",
      value: 1458,
    },
    {
      label: "DAMBANA",
      value: 1462,
    },
    {
      label: "DAMBARAWA",
      value: 1464,
    },
    {
      label: "DEHIGOLLA",
      value: 1640,
    },
    {
      label: "DIVULAPELESSA",
      value: 1901,
    },
    {
      label: "ELEWELA",
      value: 2206,
    },
    {
      label: "GALPORUYAYA",
      value: 2614,
    },
    {
      label: "GINNORUWA",
      value: 2813,
    },
    {
      label: "GIRANDURUKOTTE",
      value: 2820,
    },
    {
      label: "HADDATTAWA",
      value: 3047,
    },
    {
      label: "HEBARAWA",
      value: 3266,
    },
    {
      label: "HOBARIYAWA",
      value: 3499,
    },
    {
      label: "KUKULAPOLA",
      value: 5749,
    },
    {
      label: "MAHIYANGANAYA TOWN",
      value: 6416,
    },
    {
      label: "MAPAKADAWEWA",
      value: 6705,
    },
    {
      label: "MEDAYAYA",
      value: 6976,
    },
    {
      label: "MEEGAHAHENA",
      value: 7019,
    },
    {
      label: "MILLATTAWA",
      value: 7186,
    },
    {
      label: "PAHALA RATHKINDA",
      value: 8346,
    },
    {
      label: "PANGARAGAMMANA",
      value: 8673,
    },
    {
      label: "POOJANAGARAYA",
      value: 9263,
    },
    {
      label: "ROTALAWELA",
      value: 9820,
    },
    {
      label: "SENANIGAMA",
      value: 10043,
    },
    {
      label: "SORABORA",
      value: 10242,
    },
    {
      label: "THALANGAMUWA",
      value: 10378,
    },
    {
      label: "THELDENIYAYA",
      value: 10570,
    },
    {
      label: "ULHITIYA",
      value: 11118,
    },
    {
      label: "VIRANEGAMA",
      value: 11479,
    },
    {
      label: "WEWATTA",
      value: 12149,
    },
    {
      label: "WEWGAMPAHA",
      value: 12169,
    },
  ],
  "169": [
    {
      label: "AKURUGODA EAST",
      value: 146,
    },
    {
      label: "AKURUGODA NORTH",
      value: 147,
    },
    {
      label: "AKURUGODA SOUTH",
      value: 148,
    },
    {
      label: "AKURUGODA WEST",
      value: 149,
    },
    {
      label: "DAMPELLA",
      value: 1494,
    },
    {
      label: "ELGIRIYA",
      value: 2207,
    },
    {
      label: "GALPAMUNA",
      value: 2606,
    },
    {
      label: "HORAGODA EAST",
      value: 3534,
    },
    {
      label: "HORAGODA SOUTH",
      value: 3535,
    },
    {
      label: "HORAGODA WEST",
      value: 3536,
    },
    {
      label: "KADDUWA",
      value: 4097,
    },
    {
      label: "KADUKANNA",
      value: 4121,
    },
    {
      label: "KATUWANGODA",
      value: 4865,
    },
    {
      label: "KEKUNAWELA",
      value: 4970,
    },
    {
      label: "KIRIMETIMULLA NORTH",
      value: 5172,
    },
    {
      label: "KIRIMETIMULLA SOUTH",
      value: 5173,
    },
    {
      label: "MALIMBADA EAST",
      value: 6543,
    },
    {
      label: "MALIMBADA NORTH",
      value: 6544,
    },
    {
      label: "MALIMBADA SOUTH",
      value: 6545,
    },
    {
      label: "MALIMBADA WEST",
      value: 6546,
    },
    {
      label: "MARAGODA",
      value: 6732,
    },
    {
      label: "NAPE",
      value: 7686,
    },
    {
      label: "PAHALA KIYADUWA",
      value: 8303,
    },
    {
      label: "SULTHANAGODA EAST",
      value: 10289,
    },
    {
      label: "SULTHANAGODA SOUTH",
      value: 10290,
    },
    {
      label: "SULTHANAGODA WEST",
      value: 10291,
    },
    {
      label: "THELIJJAVILA",
      value: 10574,
    },
    {
      label: "UNINDUWELA",
      value: 11171,
    },
    {
      label: "WELANDAGODA",
      value: 11914,
    },
  ],
  "170": [
    {
      label: "BELGODA",
      value: 1002,
    },
    {
      label: "BELGODA KANDA",
      value: 1003,
    },
    {
      label: "BODHIGAMA",
      value: 1112,
    },
    {
      label: "BOGAMUWA",
      value: 1136,
    },
    {
      label: "DEMBEPOLA",
      value: 1737,
    },
    {
      label: "DENAGAMUWA",
      value: 1745,
    },
    {
      label: "DORATIYAWA",
      value: 2042,
    },
    {
      label: "HENGAWA",
      value: 3357,
    },
    {
      label: "HEWANA",
      value: 3389,
    },
    {
      label: "HEWAPOLA",
      value: 3393,
    },
    {
      label: "IHALA THALAMPITIYA",
      value: 3779,
    },
    {
      label: "INDULGODA",
      value: 3909,
    },
    {
      label: "INDULGODAKANDA",
      value: 3910,
    },
    {
      label: "KAHATAPITIYA",
      value: 4174,
    },
    {
      label: "KATUPITIYA NORTH",
      value: 4857,
    },
    {
      label: "KATUPITIYA SOUTH",
      value: 4858,
    },
    {
      label: "KOLAPELALIKANDA",
      value: 5381,
    },
    {
      label: "KONPALA",
      value: 5468,
    },
    {
      label: "KORALEGEDARA",
      value: 5509,
    },
    {
      label: "KOWANA",
      value: 5658,
    },
    {
      label: "KUDA KOWANA",
      value: 5673,
    },
    {
      label: "MAHAGAMA",
      value: 6283,
    },
    {
      label: "MALLAWAPITIYA",
      value: 6563,
    },
    {
      label: "MANEL OLUWA",
      value: 6654,
    },
    {
      label: "MARALUWAWA",
      value: 6740,
    },
    {
      label: "MEDDEGAMA EAST",
      value: 6981,
    },
    {
      label: "MEDDEGAMA WEST",
      value: 6984,
    },
    {
      label: "MEHIELLA NORTH",
      value: 7093,
    },
    {
      label: "MEHIELLA SOUTH",
      value: 7094,
    },
    {
      label: "MESSAGAMMANA",
      value: 7128,
    },
    {
      label: "MILLAWA",
      value: 7188,
    },
    {
      label: "MORATHENNA",
      value: 7343,
    },
    {
      label: "NARAMPOLA",
      value: 7692,
    },
    {
      label: "PAHALA GETTUWANA",
      value: 8266,
    },
    {
      label: "PILLAWA",
      value: 9089,
    },
    {
      label: "RANAWANA",
      value: 9629,
    },
    {
      label: "THIRAGAMA",
      value: 10665,
    },
    {
      label: "THORAYAYA",
      value: 10749,
    },
    {
      label: "UDAGAMA",
      value: 10891,
    },
    {
      label: "UYANDANA",
      value: 11274,
    },
    {
      label: "WALPOLAKANDA NORTH",
      value: 11650,
    },
    {
      label: "WALPOLAKANDA SOUTH",
      value: 11651,
    },
    {
      label: "WATTEGEDARA",
      value: 11802,
    },
    {
      label: "WERAWELLA",
      value: 12105,
    },
    {
      label: "YAGGAPITIYA",
      value: 12207,
    },
  ],
  "171": [
    {
      label: "AMIRTHAKALI",
      value: 386,
    },
    {
      label: "ARASADI",
      value: 582,
    },
    {
      label: "BARATHIPURAM",
      value: 888,
    },
    {
      label: "DUTCH BAR",
      value: 2097,
    },
    {
      label: "GNASOORIYAM SATHUKAM",
      value: 2837,
    },
    {
      label: "IRUTHAYAPURAM CENTRAL",
      value: 3967,
    },
    {
      label: "IRUTHAYAPURAM EAST",
      value: 3968,
    },
    {
      label: "IRUTHAYAPURAM WEST",
      value: 3969,
    },
    {
      label: "JAYANTHIPURAM",
      value: 4027,
    },
    {
      label: "KALLADY",
      value: 4270,
    },
    {
      label: "KALLADY MUGATHUVARAM",
      value: 4271,
    },
    {
      label: "KALLADY UPPODAI",
      value: 4272,
    },
    {
      label: "KALLADY VELOOR",
      value: 4273,
    },
    {
      label: "KARUVAPPANKERNY",
      value: 4748,
    },
    {
      label: "KODDAMUNAI",
      value: 5305,
    },
    {
      label: "KOKKUVIL",
      value: 5352,
    },
    {
      label: "KOOLAVADI",
      value: 5477,
    },
    {
      label: "KOOLAVADI EAST",
      value: 5478,
    },
    {
      label: "MAMANGAM",
      value: 6598,
    },
    {
      label: "MANJANTHODUVAI NORTH",
      value: 6681,
    },
    {
      label: "MANJANTHODUVAI SOUTH",
      value: 6682,
    },
    {
      label: "NAVALADY",
      value: 7758,
    },
    {
      label: "NAVATKUDAH",
      value: 7767,
    },
    {
      label: "NAVATKUDAH EAST",
      value: 7768,
    },
    {
      label: "NAVATKUDAH SOUTH",
      value: 7769,
    },
    {
      label: "NOCHCHIMUNAI",
      value: 8052,
    },
    {
      label: "PALAMEEN MADU",
      value: 8418,
    },
    {
      label: "PANICHALADY",
      value: 8677,
    },
    {
      label: "PERIYA OORANI",
      value: 8995,
    },
    {
      label: "PERIYA UPPODAI",
      value: 8998,
    },
    {
      label: "PULIYANTHIVU CENTRAL",
      value: 9380,
    },
    {
      label: "PULIYANTHIVU EAST",
      value: 9381,
    },
    {
      label: "PULIYANTHIVU SOUTH",
      value: 9382,
    },
    {
      label: "PULIYANTHIVU WEST",
      value: 9383,
    },
    {
      label: "PUNNACHCHOLAI",
      value: 9428,
    },
    {
      label: "PUTHUNAGAR",
      value: 9474,
    },
    {
      label: "SATHTHURUKONDAN",
      value: 9986,
    },
    {
      label: "SETHTHUKUDAH",
      value: 10077,
    },
    {
      label: "SINNA OORANI",
      value: 10124,
    },
    {
      label: "THAMARAIKERNY",
      value: 10455,
    },
    {
      label: "THANDAVANVELI",
      value: 10506,
    },
    {
      label: "THIMILATHIVU",
      value: 10663,
    },
    {
      label: "THIRAIMADU",
      value: 10666,
    },
    {
      label: "THIRUCHENDHOOR",
      value: 10676,
    },
    {
      label: "THIRUPERUNTHURAI",
      value: 10691,
    },
    {
      label: "THISSAVEERASINGAM SATHUKAM",
      value: 10705,
    },
    {
      label: "VEECHIKALMUNAI",
      value: 11354,
    },
    {
      label: "VETTUKKADU",
      value: 11402,
    },
  ],
  "173": [
    {
      label: "CHEDDIPALAYAM NORTH",
      value: 1354,
    },
    {
      label: "CHEDDIPALAYAM SOUTH",
      value: 1355,
    },
    {
      label: "ERUVIL EAST",
      value: 2360,
    },
    {
      label: "ERUVIL NORTH",
      value: 2361,
    },
    {
      label: "ERUVIL SOUTH",
      value: 2362,
    },
    {
      label: "KALUTHAWALAI 1",
      value: 4364,
    },
    {
      label: "KALUTHAWALAI 2",
      value: 4365,
    },
    {
      label: "KALUTHAWALAI 3",
      value: 4366,
    },
    {
      label: "KALUTHAWALAI 4",
      value: 4367,
    },
    {
      label: "KALUTHAWALAI 4 SANTHIPURAM",
      value: 4368,
    },
    {
      label: "KALUTHAWALAI CENTRAL",
      value: 4369,
    },
    {
      label: "KALUWANCHIKUDY NORTH",
      value: 4381,
    },
    {
      label: "KALUWANCHIKUDY NORTH 1",
      value: 4382,
    },
    {
      label: "KALUWANCHIKUDY SOUTH",
      value: 4383,
    },
    {
      label: "KODDAIKALLAR EAST",
      value: 5301,
    },
    {
      label: "KODDAIKALLAR NORTH",
      value: 5302,
    },
    {
      label: "KODDAIKALLAR SOUTH",
      value: 5303,
    },
    {
      label: "KODDAIKALLAR WEST",
      value: 5304,
    },
    {
      label: "KURUKKALMADAM NORTH",
      value: 5866,
    },
    {
      label: "KURUKKALMADAM SOUTH",
      value: 5867,
    },
    {
      label: "KURUMANVELY 11 EAST",
      value: 5875,
    },
    {
      label: "KURUMANVELY 11 WEST",
      value: 5876,
    },
    {
      label: "KURUMANVELY 12",
      value: 5877,
    },
    {
      label: "MAHILOOR EAST",
      value: 6405,
    },
    {
      label: "MAHILOOR MUNAI",
      value: 6406,
    },
    {
      label: "MAHILOOR SOUTH WEST",
      value: 6407,
    },
    {
      label: "MAHILOOR WEST",
      value: 6408,
    },
    {
      label: "MANKADU",
      value: 6684,
    },
    {
      label: "ONTHACHIMADAM NORTH",
      value: 8154,
    },
    {
      label: "ONTHACHIMADAM SOUTH",
      value: 8155,
    },
    {
      label: "PADDIRUPPU",
      value: 8218,
    },
    {
      label: "PERIYAKALLAR 1",
      value: 9004,
    },
    {
      label: "PERIYAKALLAR 1 SOUTH",
      value: 9005,
    },
    {
      label: "PERIYAKALLAR 2",
      value: 9006,
    },
    {
      label: "PERIYAKALLAR 2 WEST",
      value: 9007,
    },
    {
      label: "PERIYAKALLAR 3",
      value: 9008,
    },
    {
      label: "PERIYAKALLAR 3 SOUTH",
      value: 9009,
    },
    {
      label: "THOTTATHIVU NORTH",
      value: 10764,
    },
    {
      label: "THOTTATHIVU SOUTH",
      value: 10765,
    },
    {
      label: "THOTTATHIVU SOUTH 1",
      value: 10766,
    },
    {
      label: "THOTTATHIVU SOUTH 2",
      value: 10767,
    },
    {
      label: "THURAINEELAVANAI NORTH",
      value: 10823,
    },
    {
      label: "THURAINEELAVANAI NORTH 1",
      value: 10824,
    },
    {
      label: "THURAINEELAVANAI SOUTH",
      value: 10825,
    },
    {
      label: "THURAINEELAVANAI SOUTH 1",
      value: 10826,
    },
  ],
  "174": [
    {
      label: "AYITHIYAMALAI NORTH",
      value: 715,
    },
    {
      label: "AYITHIYAMALAI SOUTH",
      value: 716,
    },
    {
      label: "EACHCHANTIVU",
      value: 2104,
    },
    {
      label: "ILUPPADICHENAI",
      value: 3863,
    },
    {
      label: "KAANCHIRANKUDAH",
      value: 4056,
    },
    {
      label: "KAANTHINAGAR",
      value: 4057,
    },
    {
      label: "KANNANKUDAH",
      value: 4543,
    },
    {
      label: "KARAIYAKKANTIVU",
      value: 4650,
    },
    {
      label: "KARAVEDDI",
      value: 4716,
    },
    {
      label: "KOTHTHIYAPULAI",
      value: 5600,
    },
    {
      label: "KURINCHAAMUNAI",
      value: 5854,
    },
    {
      label: "MAHILAVEDDUVAAN",
      value: 6404,
    },
    {
      label: "MANDAPATHADI",
      value: 6643,
    },
    {
      label: "MANKIKADDU",
      value: 6688,
    },
    {
      label: "NAAVATKAADU",
      value: 7546,
    },
    {
      label: "NARIPPULTHODDAM",
      value: 7732,
    },
    {
      label: "NEDIYAMADU",
      value: 7844,
    },
    {
      label: "PANCHENAI",
      value: 8646,
    },
    {
      label: "PARUTHTHICHENAI",
      value: 8813,
    },
    {
      label: "PAVATKODICHENAI",
      value: 8895,
    },
    {
      label: "PUTHUMANDAPATHTHADI",
      value: 9472,
    },
    {
      label: "UNNICHCHI",
      value: 11178,
    },
    {
      label: "VAVUNATIVU",
      value: 11341,
    },
    {
      label: "VILAVEDDUWAN",
      value: 11444,
    },
  ],
  "176": [
    {
      label: "AMPALPURAM",
      value: 395,
    },
    {
      label: "KARUMPULLIYAN",
      value: 4743,
    },
    {
      label: "KOLLAVILANKULAM",
      value: 5399,
    },
    {
      label: "MOONRUMURIPPU",
      value: 7298,
    },
    {
      label: "NADDANKANDAL",
      value: 7559,
    },
    {
      label: "ODDARUTHTHAKULAM",
      value: 8109,
    },
    {
      label: "PALINAGAR",
      value: 8463,
    },
    {
      label: "PANDIYANKULAM",
      value: 8668,
    },
    {
      label: "PONNAGAR/KUTTYMULAI",
      value: 9253,
    },
    {
      label: "POOVARASANKULAM",
      value: 9280,
    },
    {
      label: "SELVAPURAM",
      value: 10030,
    },
    {
      label: "SIRADDIKULAM",
      value: 10136,
    },
    {
      label: "SIVAPURAM",
      value: 10180,
    },
    {
      label: "VANNIVILANKULAM",
      value: 11326,
    },
    {
      label: "VINAYAGAPURAM",
      value: 11471,
    },
  ],
  "177": [
    {
      label: "ADAMPAN",
      value: 26,
    },
    {
      label: "ALKADDIVELI",
      value: 221,
    },
    {
      label: "ANDANKULAM",
      value: 457,
    },
    {
      label: "ANTHONIYARPURAM",
      value: 522,
    },
    {
      label: "ATHTHIMODDAI",
      value: 662,
    },
    {
      label: "ILLUPAIKADAVAI",
      value: 3846,
    },
    {
      label: "KALLIYADI",
      value: 4285,
    },
    {
      label: "KANNADY",
      value: 4538,
    },
    {
      label: "KARUNKANDAL",
      value: 4746,
    },
    {
      label: "KARUNKANDAL VANNAKULAM",
      value: 4747,
    },
    {
      label: "KATHTHANKULAM",
      value: 4783,
    },
    {
      label: "KAYANAGAR",
      value: 4902,
    },
    {
      label: "KOORAI",
      value: 5486,
    },
    {
      label: "KOVILKULAM",
      value: 5651,
    },
    {
      label: "MALIGAITHIDAL",
      value: 6532,
    },
    {
      label: "MINNUKKAN",
      value: 7206,
    },
    {
      label: "NEDUNKANDAL",
      value: 7849,
    },
    {
      label: "PALAIPERUMALKADDU",
      value: 8405,
    },
    {
      label: "PALAIYADIPUTHUKULAM",
      value: 8406,
    },
    {
      label: "PALI ARU",
      value: 8459,
    },
    {
      label: "PALIKULI",
      value: 8462,
    },
    {
      label: "PALLAMADHU",
      value: 8471,
    },
    {
      label: "PAPAMODDAI",
      value: 8726,
    },
    {
      label: "PARAPUKADANTHAN EAST",
      value: 8795,
    },
    {
      label: "PARAPUKADANTHAN WEST",
      value: 8796,
    },
    {
      label: "PERIYAMADHU EAST",
      value: 9014,
    },
    {
      label: "PERIYAMADHU WEST",
      value: 9015,
    },
    {
      label: "SORNAPURI",
      value: 10249,
    },
    {
      label: "THEVANPIDDY",
      value: 10622,
    },
    {
      label: "VADDAKANDAL",
      value: 11286,
    },
    {
      label: "VEDDAYARMURRIPPU",
      value: 11347,
    },
    {
      label: "VELLANKULAM",
      value: 11387,
    },
    {
      label: "VIDATHALTHEEVU CENTRE",
      value: 11405,
    },
    {
      label: "VIDATHALTHEEVU EAST",
      value: 11406,
    },
    {
      label: "VIDATHALTHEEVU NORTH",
      value: 11407,
    },
    {
      label: "VIDATHALTHEEVU WEST",
      value: 11408,
    },
  ],
  "178": [
    {
      label: "ALAMPIL NORTH",
      value: 170,
    },
    {
      label: "ALAMPIL SOUTH",
      value: 171,
    },
    {
      label: "AMPALAVANPOKKANAI",
      value: 394,
    },
    {
      label: "CHEMMALAI",
      value: 1359,
    },
    {
      label: "CHEMMALAI EAST",
      value: 1360,
    },
    {
      label: "CHILAWATTAI",
      value: 1373,
    },
    {
      label: "CHILAWATTAI SOUTH",
      value: 1374,
    },
    {
      label: "KALLAPPADU NORTH",
      value: 4277,
    },
    {
      label: "KALLAPPADU SOUTH",
      value: 4278,
    },
    {
      label: "KANUKERNY EAST",
      value: 4566,
    },
    {
      label: "KANUKERNY WEST",
      value: 4567,
    },
    {
      label: "KARUNADDUKERNY",
      value: 4744,
    },
    {
      label: "KEEKKIRAPURAM",
      value: 4917,
    },
    {
      label: "KEPPAPULAVU",
      value: 5021,
    },
    {
      label: "KOKKILAI EAST",
      value: 5349,
    },
    {
      label: "KOKKILAI WEST",
      value: 5350,
    },
    {
      label: "KOKUTHODUVAI CENTRE",
      value: 5357,
    },
    {
      label: "KOKUTHODUVAI NORTH",
      value: 5358,
    },
    {
      label: "KOKUTHODUVAI SOUTH",
      value: 5359,
    },
    {
      label: "KOVILKUDIYIRUPPU",
      value: 5649,
    },
    {
      label: "KUMARAPURAM",
      value: 5775,
    },
    {
      label: "KUMULAMUNAI CENTRE",
      value: 5825,
    },
    {
      label: "KUMULAMUNAI EAST",
      value: 5826,
    },
    {
      label: "KUMULAMUNAI WEST",
      value: 5827,
    },
    {
      label: "MAMOOLAI",
      value: 6603,
    },
    {
      label: "MANALKUDIYIRUPPU",
      value: 6621,
    },
    {
      label: "MATHAVALASINGANKULAM",
      value: 6810,
    },
    {
      label: "MULLAITIVU SOUTH",
      value: 7436,
    },
    {
      label: "MULLAITIVU TOWN",
      value: 7437,
    },
    {
      label: "MULLIVAIKKAL EAST",
      value: 7449,
    },
    {
      label: "MULLIVAIKKAL WEST",
      value: 7450,
    },
    {
      label: "MULLIYAWALAI CENTRE",
      value: 7452,
    },
    {
      label: "MULLIYAWALAI EAST",
      value: 7453,
    },
    {
      label: "MULLIYAWALAI NORTH",
      value: 7454,
    },
    {
      label: "MULLIYAWALAI SOUTH",
      value: 7455,
    },
    {
      label: "MULLIYAWALAI WEST",
      value: 7456,
    },
    {
      label: "NEERAVIPPIDDY EAST",
      value: 7864,
    },
    {
      label: "NEERAVIPPIDDY WEST",
      value: 7865,
    },
    {
      label: "PUTHARIKUDA",
      value: 9462,
    },
    {
      label: "SELVAPURAM",
      value: 10030,
    },
    {
      label: "THANNEERUDRU EAST",
      value: 10518,
    },
    {
      label: "THANNEERUDRU WEST",
      value: 10519,
    },
    {
      label: "THANNIMURIPPU",
      value: 10520,
    },
    {
      label: "UPPUMAVELI",
      value: 11187,
    },
    {
      label: "VANNANKULAM",
      value: 11319,
    },
    {
      label: "VATTAPPALAI",
      value: 11339,
    },
  ],
  "179": [
    {
      label: "ASWEDDUMA",
      value: 643,
    },
    {
      label: "DAHIGAMUWA",
      value: 1419,
    },
    {
      label: "DEMALUSSA",
      value: 1716,
    },
    {
      label: "DEMATAGAHAPELESSA",
      value: 1718,
    },
    {
      label: "GALAGEDARA",
      value: 2473,
    },
    {
      label: "GANE KOLANIYA",
      value: 2687,
    },
    {
      label: "GONAGAMA",
      value: 2912,
    },
    {
      label: "GURULEPOLA",
      value: 3011,
    },
    {
      label: "HANWELLA",
      value: 3182,
    },
    {
      label: "HETTIGEDARA",
      value: 3374,
    },
    {
      label: "KALAHOGEDARA",
      value: 4231,
    },
    {
      label: "KAVUDAWATTA",
      value: 4885,
    },
    {
      label: "KIDAPOLA",
      value: 5088,
    },
    {
      label: "KUDAGALGAMUWA",
      value: 5698,
    },
    {
      label: "MAPEGAMUWA",
      value: 6714,
    },
    {
      label: "MARAGAMA",
      value: 6728,
    },
    {
      label: "MASPOTHA",
      value: 6792,
    },
    {
      label: "MAVEEDALUPOTHA",
      value: 6853,
    },
    {
      label: "MINHETTIYA",
      value: 7194,
    },
    {
      label: "OGGAMUWA",
      value: 8112,
    },
    {
      label: "PELLANDENIYA",
      value: 8947,
    },
    {
      label: "PIMBURUWELLEGAMA",
      value: 9093,
    },
    {
      label: "RATHKARAWWA",
      value: 9708,
    },
    {
      label: "REKAWA",
      value: 9772,
    },
    {
      label: "SIYAMBALANGAMUWA",
      value: 10205,
    },
    {
      label: "THISNAMPOLA",
      value: 10699,
    },
    {
      label: "THITHTHAWELLA",
      value: 10708,
    },
    {
      label: "UDABADALAWA",
      value: 10880,
    },
    {
      label: "UDADIGANA",
      value: 10886,
    },
    {
      label: "WAWAGEDARA",
      value: 11816,
    },
    {
      label: "WEGOLLA",
      value: 11885,
    },
    {
      label: "WILGAMDEMATAWA",
      value: 12195,
    },
    {
      label: "YANTHAMPALAWA",
      value: 12262,
    },
  ],
  "180": [
    {
      label: "ALUVIHARE",
      value: 282,
    },
    {
      label: "ANKANDA",
      value: 509,
    },
    {
      label: "BIRIDEWALA",
      value: 1091,
    },
    {
      label: "BOGAHAKOTUWA",
      value: 1122,
    },
    {
      label: "DIKKIRIYA",
      value: 1862,
    },
    {
      label: "DIYABUBULA",
      value: 1924,
    },
    {
      label: "DODAMDENIYA",
      value: 1953,
    },
    {
      label: "DOMBAWELA",
      value: 2011,
    },
    {
      label: "DORAKUMBURA",
      value: 2028,
    },
    {
      label: "DUNKALAWATTA",
      value: 2075,
    },
    {
      label: "ELLEPOLA",
      value: 2242,
    },
    {
      label: "ERIYAGOLLA",
      value: 2344,
    },
    {
      label: "GALWADUKUMBURA",
      value: 2636,
    },
    {
      label: "GOLAHENWATTA",
      value: 2888,
    },
    {
      label: "GONGAWELA",
      value: 2947,
    },
    {
      label: "HARASGAMA",
      value: 3225,
    },
    {
      label: "HATHAMUNAGALA",
      value: 3240,
    },
    {
      label: "HULANGAMUWA NORTH",
      value: 3581,
    },
    {
      label: "HULANGAMUWA SOUTH",
      value: 3582,
    },
    {
      label: "IMBULANDANDA",
      value: 3874,
    },
    {
      label: "KALUDEWALA",
      value: 4328,
    },
    {
      label: "KANDEGEDARA",
      value: 4492,
    },
    {
      label: "KAWATAYAMUNA",
      value: 4897,
    },
    {
      label: "KIRIGALPOTTA",
      value: 5155,
    },
    {
      label: "KOOMBIYANGODA",
      value: 5481,
    },
    {
      label: "KOTTAGODA",
      value: 5611,
    },
    {
      label: "KOTUWEGEDARA NORTH",
      value: 5639,
    },
    {
      label: "KOTUWEGEDARA SOUTH",
      value: 5640,
    },
    {
      label: "MADAWALA",
      value: 6103,
    },
    {
      label: "MADAWALA ULPATHA",
      value: 6107,
    },
    {
      label: "MAKULGAHARUPPA",
      value: 6468,
    },
    {
      label: "MALIGATHENNA",
      value: 6536,
    },
    {
      label: "MALWATTA",
      value: 6586,
    },
    {
      label: "MANDANDAWELA",
      value: 6642,
    },
    {
      label: "MORAGAHAMADA",
      value: 7306,
    },
    {
      label: "MUSLIM TOWN",
      value: 7506,
    },
    {
      label: "NAGOLLA",
      value: 7584,
    },
    {
      label: "NARANGAMUWA",
      value: 7701,
    },
    {
      label: "OWALA POLWATTA",
      value: 8200,
    },
    {
      label: "OYA PAHALA",
      value: 8203,
    },
    {
      label: "PALAPATHWALA",
      value: 8435,
    },
    {
      label: "PANDIVITA",
      value: 8666,
    },
    {
      label: "PANDIVITA WELAGAMA",
      value: 8667,
    },
    {
      label: "PARANA DOMBAWELA",
      value: 8766,
    },
    {
      label: "PARAWATTA",
      value: 8806,
    },
    {
      label: "PUWAKPITIYA",
      value: 9498,
    },
    {
      label: "RAJJAMMANA",
      value: 9577,
    },
    {
      label: "SINHALA TOWN",
      value: 10113,
    },
    {
      label: "THALAGASYAYA",
      value: 10347,
    },
    {
      label: "UDUGAMA",
      value: 11009,
    },
    {
      label: "VIHARA ROAD",
      value: 11421,
    },
    {
      label: "WALLIWELA",
      value: 11634,
    },
  ],
  "182": [
    {
      label: "ALUTHGAMGODA",
      value: 267,
    },
    {
      label: "ANDAWALA",
      value: 462,
    },
    {
      label: "BADUGAMA",
      value: 727,
    },
    {
      label: "BADUGAMA NEW COLONY",
      value: 728,
    },
    {
      label: "BONDUPITIYA",
      value: 1185,
    },
    {
      label: "BOPITIYA EAST",
      value: 1205,
    },
    {
      label: "BOPITIYA WEST",
      value: 1207,
    },
    {
      label: "DEWAGODA",
      value: 1787,
    },
    {
      label: "DIPPITA",
      value: 1885,
    },
    {
      label: "DIYAGALA",
      value: 1928,
    },
    {
      label: "GALMATTA",
      value: 2596,
    },
    {
      label: "GURUDOLA",
      value: 3003,
    },
    {
      label: "HENEGAMA",
      value: 3350,
    },
    {
      label: "HENPITA",
      value: 3360,
    },
    {
      label: "HIRIKETIYA",
      value: 3470,
    },
    {
      label: "HORAWALA",
      value: 3563,
    },
    {
      label: "HORAWALA EAST",
      value: 3564,
    },
    {
      label: "HORAWALA NORTH",
      value: 3565,
    },
    {
      label: "HORAWALA WEST",
      value: 3566,
    },
    {
      label: "IDDAGODA EAST",
      value: 3647,
    },
    {
      label: "IDDAGODA WEST",
      value: 3648,
    },
    {
      label: "INDIGASTHUDUWA",
      value: 3894,
    },
    {
      label: "KEERANTHIDIYA",
      value: 4923,
    },
    {
      label: "KEPPETIYAGAHALANDA",
      value: 5023,
    },
    {
      label: "KOLEHEKADA",
      value: 5388,
    },
    {
      label: "KOTAGEDARA",
      value: 5564,
    },
    {
      label: "KURUDIPPITA",
      value: 5860,
    },
    {
      label: "LADDUWA",
      value: 5935,
    },
    {
      label: "LEWWANDUWA EAST",
      value: 6001,
    },
    {
      label: "LEWWANDUWA NORTH",
      value: 6002,
    },
    {
      label: "LEWWANDUWA WEST",
      value: 6003,
    },
    {
      label: "MADAWALA",
      value: 6103,
    },
    {
      label: "MATHUGAMA EAST",
      value: 6817,
    },
    {
      label: "MATHUGAMA NORTH",
      value: 6818,
    },
    {
      label: "MATHUGAMA SOUTH",
      value: 6819,
    },
    {
      label: "MATHUGAMA WEST",
      value: 6820,
    },
    {
      label: "MEEGAMA",
      value: 7035,
    },
    {
      label: "NARAVILA",
      value: 7724,
    },
    {
      label: "NAVUTTUDUWA",
      value: 7779,
    },
    {
      label: "NUGAGAHALANDA",
      value: 8063,
    },
    {
      label: "OVITIGALA",
      value: 8194,
    },
    {
      label: "PANTHIYA",
      value: 8716,
    },
    {
      label: "PUSSALAMULLA",
      value: 9450,
    },
    {
      label: "SANDASIRIGAMA",
      value: 9937,
    },
    {
      label: "THALGASGODA",
      value: 10421,
    },
    {
      label: "THAMBARETIYA",
      value: 10475,
    },
    {
      label: "WALAGEDARA NORTH",
      value: 11566,
    },
    {
      label: "WALAGEDARA SOUTH",
      value: 11567,
    },
    {
      label: "WARAKATHOLLA",
      value: 11721,
    },
    {
      label: "WELIMANANA",
      value: 11984,
    },
    {
      label: "WELIPENNA EAST - NORTH",
      value: 11991,
    },
    {
      label: "WELIPENNA EAST - SOUTH",
      value: 11992,
    },
    {
      label: "WELIPENNA WEST",
      value: 11993,
    },
    {
      label: "WETTEWA",
      value: 12127,
    },
    {
      label: "YATADOLAWATTA EAST",
      value: 12266,
    },
    {
      label: "YATADOLAWATTA WEST",
      value: 12267,
    },
    {
      label: "YATTOVITA",
      value: 12315,
    },
  ],
  "183": [
    {
      label: "ALUTHNUWARA",
      value: 274,
    },
    {
      label: "AMBADENIYA",
      value: 305,
    },
    {
      label: "AMBALAWA",
      value: 349,
    },
    {
      label: "AMBARUPPA",
      value: 368,
    },
    {
      label: "AMBULUGALA",
      value: 382,
    },
    {
      label: "ATTANAGODA",
      value: 676,
    },
    {
      label: "BALATHGAMUWA",
      value: 787,
    },
    {
      label: "BALAWATHGAMA",
      value: 792,
    },
    {
      label: "BATAWALA",
      value: 934,
    },
    {
      label: "BELIGAMMANA",
      value: 1013,
    },
    {
      label: "DASWATTA",
      value: 1558,
    },
    {
      label: "DEHIMADUWA",
      value: 1642,
    },
    {
      label: "DODANTHALE",
      value: 1985,
    },
    {
      label: "DUMBULUWAWA",
      value: 2061,
    },
    {
      label: "DUNUGAMA MALIYADDA",
      value: 2080,
    },
    {
      label: "EDANDUWAWA",
      value: 2116,
    },
    {
      label: "EMBILMEEWALA",
      value: 2282,
    },
    {
      label: "ERAMINIGAMMANA",
      value: 2309,
    },
    {
      label: "GANETHENNA",
      value: 2705,
    },
    {
      label: "GINIHAPPITIYA EAST",
      value: 2799,
    },
    {
      label: "GINIHAPPITIYA WEST",
      value: 2800,
    },
    {
      label: "GONDIWALA",
      value: 2945,
    },
    {
      label: "HABBUNKADUWA",
      value: 3044,
    },
    {
      label: "HEENATIPANA",
      value: 3283,
    },
    {
      label: "HEMMATHAGAMA",
      value: 3332,
    },
    {
      label: "HINGULA",
      value: 3436,
    },
    {
      label: "HINGULOYA",
      value: 3437,
    },
    {
      label: "IDAMPITIYA",
      value: 3643,
    },
    {
      label: "IHALA KOTTE",
      value: 3737,
    },
    {
      label: "KAHAWANDALA",
      value: 4190,
    },
    {
      label: "KAPPAGODA",
      value: 4578,
    },
    {
      label: "KARAPANE",
      value: 4704,
    },
    {
      label: "KEHELPANNALA EAST",
      value: 4943,
    },
    {
      label: "KEHELPANNALA WEST",
      value: 4944,
    },
    {
      label: "KEKIRIGODA",
      value: 4957,
    },
    {
      label: "KEPPETIPOLA",
      value: 5022,
    },
    {
      label: "KIRINGADENIYA",
      value: 5201,
    },
    {
      label: "KONDENIYA",
      value: 5438,
    },
    {
      label: "KONGAMUWA",
      value: 5450,
    },
    {
      label: "KOORAGALA",
      value: 5484,
    },
    {
      label: "KUMBALGAMA",
      value: 5783,
    },
    {
      label: "LEWKE",
      value: 5999,
    },
    {
      label: "MADULBOWA",
      value: 6158,
    },
    {
      label: "MAHANTHEGAMA",
      value: 6336,
    },
    {
      label: "MAHAWATTA",
      value: 6378,
    },
    {
      label: "MAKADAWARA",
      value: 6436,
    },
    {
      label: "MAKEHELWALA",
      value: 6448,
    },
    {
      label: "MAWANA",
      value: 6870,
    },
    {
      label: "MAWANELLA",
      value: 6873,
    },
    {
      label: "MAWELA",
      value: 6889,
    },
    {
      label: "MOLLIGODA",
      value: 7267,
    },
    {
      label: "MURUTHAWALA",
      value: 7501,
    },
    {
      label: "NANKURUGAMA",
      value: 7674,
    },
    {
      label: "OWATTA",
      value: 8202,
    },
    {
      label: "PALLIPORUWA",
      value: 8540,
    },
    {
      label: "PANAGAMUWA",
      value: 8601,
    },
    {
      label: "RANDIWALA",
      value: 9640,
    },
    {
      label: "RANKOTHDIWALA",
      value: 9662,
    },
    {
      label: "RUKULAGAMA",
      value: 9838,
    },
    {
      label: "THAMBAVITA",
      value: 10476,
    },
    {
      label: "UDA MAKADAWARA",
      value: 10874,
    },
    {
      label: "UTHUWANKANDA",
      value: 11262,
    },
    {
      label: "UYANWATTA",
      value: 11277,
    },
    {
      label: "WADIYATHENNA",
      value: 11514,
    },
    {
      label: "WADUWAWALA",
      value: 11525,
    },
    {
      label: "WARAKAPANA",
      value: 11715,
    },
    {
      label: "WEGANTHALE",
      value: 11878,
    },
    {
      label: "WELIGALLA",
      value: 11948,
    },
    {
      label: "WERAGODA",
      value: 12078,
    },
    {
      label: "WERAKE",
      value: 12088,
    },
    {
      label: "YATIMAHANA",
      value: 12297,
    },
  ],
  "184": [
    {
      label: "AKADE",
      value: 86,
    },
    {
      label: "ARAMPOLA",
      value: 569,
    },
    {
      label: "ARAMPOLA WATTA NORTH",
      value: 570,
    },
    {
      label: "ARAMPOLA WATTA SOUTH",
      value: 571,
    },
    {
      label: "BANDARAGALA",
      value: 849,
    },
    {
      label: "BARANDANA",
      value: 885,
    },
    {
      label: "BOYAGODA",
      value: 1265,
    },
    {
      label: "BULATHWATTA",
      value: 1302,
    },
    {
      label: "DELGOLLA WATTA NORTH",
      value: 1686,
    },
    {
      label: "DELGOLLA WATTA SOUTH",
      value: 1687,
    },
    {
      label: "DELPADDANA",
      value: 1702,
    },
    {
      label: "DUNUKEWATTA",
      value: 2086,
    },
    {
      label: "ELLAGONNA",
      value: 2226,
    },
    {
      label: "ERIMINNA",
      value: 2340,
    },
    {
      label: "ETAGAHAWELA",
      value: 2367,
    },
    {
      label: "GALAPITAMULLA",
      value: 2511,
    },
    {
      label: "GONAGALA",
      value: 2906,
    },
    {
      label: "GONAGALDENIYA",
      value: 2911,
    },
    {
      label: "HALWAHALA",
      value: 3124,
    },
    {
      label: "HENEPOLA",
      value: 3355,
    },
    {
      label: "HETTIPOLA",
      value: 3378,
    },
    {
      label: "HIDAGOLLA",
      value: 3400,
    },
    {
      label: "IHALA WELIGEPOLA",
      value: 3803,
    },
    {
      label: "ILUKEWELA NORTH",
      value: 3849,
    },
    {
      label: "ILUKEWELA SOUTH",
      value: 3850,
    },
    {
      label: "KAHANDAWELIPOTHA",
      value: 4160,
    },
    {
      label: "KAHAPATHWALA",
      value: 4163,
    },
    {
      label: "KAHAPATHWALA NORTH",
      value: 4164,
    },
    {
      label: "KALUGAMUWA",
      value: 4342,
    },
    {
      label: "KANDEHENA",
      value: 4497,
    },
    {
      label: "KANDUBODA",
      value: 4514,
    },
    {
      label: "KATUGAMPALAGEDARA",
      value: 4831,
    },
    {
      label: "KONGASWALA",
      value: 5453,
    },
    {
      label: "KOSSINNA",
      value: 5546,
    },
    {
      label: "KOTIKAPALA",
      value: 5604,
    },
    {
      label: "KOTIKAPOLA IHALAGAMA",
      value: 5605,
    },
    {
      label: "MADAWA",
      value: 6100,
    },
    {
      label: "MALANDENIYA",
      value: 6495,
    },
    {
      label: "MARALANDA",
      value: 6739,
    },
    {
      label: "MASWEWA",
      value: 6796,
    },
    {
      label: "MAWATHAGAMA",
      value: 6877,
    },
    {
      label: "MAWATHAGAMA NORTH",
      value: 6879,
    },
    {
      label: "MAWATHAGAMA SOUTH",
      value: 6880,
    },
    {
      label: "MAWATHAGAMA WEST",
      value: 6881,
    },
    {
      label: "MEDDEGAMGODA",
      value: 6985,
    },
    {
      label: "MEE/ MEDAGAMGODA",
      value: 7005,
    },
    {
      label: "MEE/ PALLEGAMA EAST",
      value: 7006,
    },
    {
      label: "MEE/ PALLEGAMA WEST",
      value: 7007,
    },
    {
      label: "MEE/ UDAGAMA",
      value: 7008,
    },
    {
      label: "MEE/ WAMBUGAMGODA",
      value: 7009,
    },
    {
      label: "METIBOKKA",
      value: 7134,
    },
    {
      label: "NAWA POTHUBOWA",
      value: 7789,
    },
    {
      label: "PARAGAHADENIYA",
      value: 8736,
    },
    {
      label: "PILESSA IHALAGAMA",
      value: 9081,
    },
    {
      label: "PILESSA PAHALAGAMA",
      value: 9082,
    },
    {
      label: "POTHUBOWA",
      value: 9306,
    },
    {
      label: "RATHNEGGAMA",
      value: 9737,
    },
    {
      label: "SAMODAGAMA",
      value: 9917,
    },
    {
      label: "SINGHAPURA",
      value: 10108,
    },
    {
      label: "THARAPOTHA",
      value: 10535,
    },
    {
      label: "TIGOLA",
      value: 10834,
    },
    {
      label: "UDA IGURUWATTA",
      value: 10869,
    },
    {
      label: "UDAKOTTAMULLA",
      value: 10927,
    },
    {
      label: "UDANAGAMA",
      value: 10945,
    },
    {
      label: "UGGALPAYA",
      value: 11093,
    },
    {
      label: "WADIYAGODA",
      value: 11513,
    },
    {
      label: "WARADDANA",
      value: 11696,
    },
    {
      label: "WATAREKA",
      value: 11758,
    },
    {
      label: "WELIKUMBURA",
      value: 11980,
    },
    {
      label: "WEWAGEDARA",
      value: 12136,
    },
    {
      label: "YATIWALA",
      value: 12300,
    },
  ],
  "185": [
    {
      label: "AMBAGAHALANDA",
      value: 309,
    },
    {
      label: "AMBALAGALA",
      value: 338,
    },
    {
      label: "AMBALE",
      value: 351,
    },
    {
      label: "AMUPITIYA",
      value: 431,
    },
    {
      label: "BAMBARAGAHADENIYA",
      value: 806,
    },
    {
      label: "BOBEBILA",
      value: 1108,
    },
    {
      label: "BOMURE",
      value: 1182,
    },
    {
      label: "BULATHWATTA",
      value: 1302,
    },
    {
      label: "BURNSIDE",
      value: 1321,
    },
    {
      label: "DORALIYADDA SOUTH",
      value: 2030,
    },
    {
      label: "DUCKWARIYA",
      value: 2051,
    },
    {
      label: "DUNHINNA",
      value: 2074,
    },
    {
      label: "ELLEPOLA",
      value: 2242,
    },
    {
      label: "ELLIYADDA",
      value: 2248,
    },
    {
      label: "EMBALAGAMA",
      value: 2266,
    },
    {
      label: "FERNDAIL",
      value: 2440,
    },
    {
      label: "GABBELA",
      value: 2448,
    },
    {
      label: "GALABADAWATTA",
      value: 2463,
    },
    {
      label: "GALAMBALAMA",
      value: 2501,
    },
    {
      label: "GALKOTUWA",
      value: 2569,
    },
    {
      label: "GANGASIRIGAMA",
      value: 2712,
    },
    {
      label: "GIDDAWA",
      value: 2792,
    },
    {
      label: "GIDDAWA-WARADIWELA",
      value: 2793,
    },
    {
      label: "GODAMUNNA",
      value: 2855,
    },
    {
      label: "GONAWALA",
      value: 2938,
    },
    {
      label: "HAKMANA",
      value: 3060,
    },
    {
      label: "HATHIYALWELA",
      value: 3248,
    },
    {
      label: "HEELOYA",
      value: 3278,
    },
    {
      label: "HIJRAPURA",
      value: 3414,
    },
    {
      label: "KANDEGAMA",
      value: 4491,
    },
    {
      label: "KANDEKUMBURA",
      value: 4498,
    },
    {
      label: "KARALLIYADDA",
      value: 4655,
    },
    {
      label: "KATUGODA",
      value: 4833,
    },
    {
      label: "KIRIBATTALAWA",
      value: 5148,
    },
    {
      label: "KOTAGANGA",
      value: 5563,
    },
    {
      label: "KURUKOHOGAMA",
      value: 5869,
    },
    {
      label: "MABERIYATHENNA",
      value: 6060,
    },
    {
      label: "MADAPOLA",
      value: 6096,
    },
    {
      label: "MADENIYAWAKA",
      value: 6126,
    },
    {
      label: "MAHADORALIYADDA",
      value: 6275,
    },
    {
      label: "MAHARAWELA",
      value: 6358,
    },
    {
      label: "MAKULDENIYA",
      value: 6464,
    },
    {
      label: "MANELUWA",
      value: 6656,
    },
    {
      label: "MANGODA",
      value: 6665,
    },
    {
      label: "MEDA GAMMEDDA",
      value: 6904,
    },
    {
      label: "MEDAMAHANUWARA",
      value: 6958,
    },
    {
      label: "MEEGAHALANDA",
      value: 7024,
    },
    {
      label: "MEEGAHAMADITTA",
      value: 7025,
    },
    {
      label: "MEERIYAGOLLA",
      value: 7068,
    },
    {
      label: "METIDENIYA",
      value: 7135,
    },
    {
      label: "MORAGAHAMULA",
      value: 7307,
    },
    {
      label: "NAGOLLA",
      value: 7584,
    },
    {
      label: "NAMANDAGALA",
      value: 7653,
    },
    {
      label: "NILGALA",
      value: 7974,
    },
    {
      label: "NITHULEMADA",
      value: 8024,
    },
    {
      label: "NUGEPATHANA",
      value: 8080,
    },
    {
      label: "PALLEBAGE",
      value: 8492,
    },
    {
      label: "PODDALGODA",
      value: 9179,
    },
    {
      label: "PUTUHAPUWA",
      value: 9483,
    },
    {
      label: "PUWAKGAHADIWELA",
      value: 9492,
    },
    {
      label: "RAJAGALA",
      value: 9556,
    },
    {
      label: "RAMBUKPOTHA",
      value: 9608,
    },
    {
      label: "RAMBUKWELLA",
      value: 9609,
    },
    {
      label: "RAMBUKWELLA EAST",
      value: 9610,
    },
    {
      label: "RANDENIYA",
      value: 9638,
    },
    {
      label: "RANDIWELA",
      value: 9641,
    },
    {
      label: "RANGALA",
      value: 9647,
    },
    {
      label: "RANGALA ALUTHWATTA",
      value: 9648,
    },
    {
      label: "RANMULLA",
      value: 9665,
    },
    {
      label: "RETIYAGAMA",
      value: 9784,
    },
    {
      label: "SANDASIRI DUNUVILA",
      value: 9936,
    },
    {
      label: "SENARATHWELA",
      value: 10051,
    },
    {
      label: "SIRIDIGANA",
      value: 10142,
    },
    {
      label: "THANGAPPUWA",
      value: 10511,
    },
    {
      label: "THENNALANDA",
      value: 10605,
    },
    {
      label: "THUNISGALA",
      value: 10808,
    },
    {
      label: "UDABAGE",
      value: 10881,
    },
    {
      label: "UDAGAMMEDDA",
      value: 10895,
    },
    {
      label: "UDATHENNA",
      value: 10967,
    },
    {
      label: "UDAWELA",
      value: 10979,
    },
    {
      label: "UDISPATTUWA",
      value: 10999,
    },
    {
      label: "VILAMUNA",
      value: 11437,
    },
    {
      label: "WARADIWELA",
      value: 11697,
    },
    {
      label: "WATAPANA",
      value: 11752,
    },
    {
      label: "WATHULIYADDA",
      value: 11774,
    },
    {
      label: "WEGALA",
      value: 11874,
    },
    {
      label: "WELADARAMBA",
      value: 11903,
    },
    {
      label: "WELAPAHALA",
      value: 11922,
    },
    {
      label: "WELIKETIYA",
      value: 11977,
    },
    {
      label: "WELLETHOTA",
      value: 12041,
    },
    {
      label: "WERAPITIYA",
      value: 12099,
    },
    {
      label: "WERATHENNA",
      value: 12101,
    },
    {
      label: "WEWEGAMA",
      value: 12151,
    },
  ],
  "186": [
    {
      label: "AIWELA",
      value: 84,
    },
    {
      label: "ALANA",
      value: 172,
    },
    {
      label: "AMUNEKANDURA",
      value: 416,
    },
    {
      label: "BAKINIGAHAWELA",
      value: 750,
    },
    {
      label: "BENDIYAWA",
      value: 1044,
    },
    {
      label: "BIBILAMULLA",
      value: 1078,
    },
    {
      label: "DAHAGONIYA",
      value: 1415,
    },
    {
      label: "DAHAMGAMA",
      value: 1416,
    },
    {
      label: "DIVIYAPOLA",
      value: 1895,
    },
    {
      label: "ELHENA",
      value: 2208,
    },
    {
      label: "ELLEKONA",
      value: 2241,
    },
    {
      label: "GODIGAMUWA",
      value: 2877,
    },
    {
      label: "ILUKKUMBURA",
      value: 3852,
    },
    {
      label: "KALUGAHAWADIYA",
      value: 4333,
    },
    {
      label: "KEENAGODA",
      value: 4920,
    },
    {
      label: "KENDAVINNA",
      value: 5014,
    },
    {
      label: "KINNARABOWA",
      value: 5120,
    },
    {
      label: "KOHUKUMBURA",
      value: 5338,
    },
    {
      label: "KONGOLLA",
      value: 5461,
    },
    {
      label: "KOTABOWA",
      value: 5557,
    },
    {
      label: "MEDAGAMA",
      value: 6933,
    },
    {
      label: "MELLAGAMA",
      value: 7105,
    },
    {
      label: "MONARAWANA",
      value: 7279,
    },
    {
      label: "NANNAPURAWA",
      value: 7675,
    },
    {
      label: "NUGAMURA",
      value: 8068,
    },
    {
      label: "PITADENIYA",
      value: 9128,
    },
    {
      label: "POLGAHAPITIYA",
      value: 9209,
    },
    {
      label: "POTHUBANDHANA",
      value: 9305,
    },
    {
      label: "PUBBARA",
      value: 9338,
    },
    {
      label: "RATTANADENIYA",
      value: 9752,
    },
    {
      label: "SENAPATHIYA",
      value: 10044,
    },
    {
      label: "SENPATHIGAMA",
      value: 10059,
    },
    {
      label: "THAMBANA",
      value: 10471,
    },
    {
      label: "THIMBIRIYA",
      value: 10660,
    },
    {
      label: "YAKUNNAWA",
      value: 12250,
    },
  ],
  "187": [
    {
      label: "ANEKATTIYA",
      value: 478,
    },
    {
      label: "ANGUNOCHCHIYA",
      value: 500,
    },
    {
      label: "EKIRIKANDA",
      value: 2163,
    },
    {
      label: "ETAWEERAGOLLEWA",
      value: 2381,
    },
    {
      label: "ETHAKADA",
      value: 2386,
    },
    {
      label: "HEERALLUGAMA",
      value: 3299,
    },
    {
      label: "HELAMBAGASWEWA",
      value: 3321,
    },
    {
      label: "ISINBESSAGAMA",
      value: 3971,
    },
    {
      label: "KADAWATH RAMBEWA",
      value: 4082,
    },
    {
      label: "KADAWATHGAMA",
      value: 4084,
    },
    {
      label: "KANADARA DIVULWEWA",
      value: 4417,
    },
    {
      label: "KARAMBANKULAMA",
      value: 4661,
    },
    {
      label: "KATUWELA",
      value: 4875,
    },
    {
      label: "KIDAGALEGAMA",
      value: 5086,
    },
    {
      label: "KIDAWARANKULAMA",
      value: 5089,
    },
    {
      label: "KIRIGALWEWA",
      value: 5156,
    },
    {
      label: "KUDA KUMBUKGOLLEWA",
      value: 5674,
    },
    {
      label: "LINDAWEWA",
      value: 6017,
    },
    {
      label: "LOLUGASWEWA",
      value: 6036,
    },
    {
      label: "MAHA DIVULWEWA",
      value: 6226,
    },
    {
      label: "MAHA KUMBUKGOLLEWA",
      value: 6245,
    },
    {
      label: "MEDAWACHCHIYA EAST",
      value: 6965,
    },
    {
      label: "MEDAWACHCHIYA WEST",
      value: 6967,
    },
    {
      label: "MORAGODA",
      value: 7318,
    },
    {
      label: "PARANAHALMILLEWA",
      value: 8781,
    },
    {
      label: "PERIYAKULAMA",
      value: 9013,
    },
    {
      label: "POONEWA",
      value: 9276,
    },
    {
      label: "PRABODHAGAMA",
      value: 9335,
    },
    {
      label: "PUHUDIVULA",
      value: 9351,
    },
    {
      label: "PULELIYA",
      value: 9369,
    },
    {
      label: "RAILWAY TOWN",
      value: 9546,
    },
    {
      label: "SANGILIKANADARAWA",
      value: 9959,
    },
    {
      label: "THAMMENNE ELAWAKA",
      value: 10495,
    },
    {
      label: "UNAGASWEWA",
      value: 11150,
    },
    {
      label: "VIRALMURIPPUWA",
      value: 11478,
    },
    {
      label: "WALPOLA",
      value: 11647,
    },
    {
      label: "YAKAWEWA",
      value: 12231,
    },
  ],
  "188": [
    {
      label: "ABHAYAPURAGAMA",
      value: 17,
    },
    {
      label: "AKBARPURA",
      value: 99,
    },
    {
      label: "ALUTHWEWA",
      value: 279,
    },
    {
      label: "AMBAGASWEWA",
      value: 327,
    },
    {
      label: "BISOBANDARA",
      value: 1092,
    },
    {
      label: "BISOBANDARA GAMA",
      value: 1093,
    },
    {
      label: "BISOUYANA",
      value: 1095,
    },
    {
      label: "DAMSOPURA",
      value: 1498,
    },
    {
      label: "DIGGALPURA",
      value: 1852,
    },
    {
      label: "DIVULANKADAWALA",
      value: 1900,
    },
    {
      label: "DIYASENPURA",
      value: 1944,
    },
    {
      label: "EKAMUTHUGAMA",
      value: 2160,
    },
    {
      label: "ETAMBAOYA",
      value: 2371,
    },
    {
      label: "GAJABAPURA",
      value: 2453,
    },
    {
      label: "IHALAGAMA",
      value: 3810,
    },
    {
      label: "JAYAGAMPURA",
      value: 4020,
    },
    {
      label: "JAYATHUGAMA",
      value: 4038,
    },
    {
      label: "KAHAMBILIYAWA",
      value: 4154,
    },
    {
      label: "KAVUDULUGAMA",
      value: 4888,
    },
    {
      label: "KAVUDULUWEWA (RALAPANAWA)",
      value: 4889,
    },
    {
      label: "KUMUDUPURA",
      value: 5824,
    },
    {
      label: "KUSUMPOKUNA",
      value: 5917,
    },
    {
      label: "MAHASENPURA",
      value: 6365,
    },
    {
      label: "MANDALAGIRIYA",
      value: 6640,
    },
    {
      label: "MEDIRIGIRIYA",
      value: 6999,
    },
    {
      label: "MEEGASWEWA",
      value: 7043,
    },
    {
      label: "MENIKSOROWWA",
      value: 7123,
    },
    {
      label: "NAGARAPURA",
      value: 7573,
    },
    {
      label: "NELUMPOKUNA",
      value: 7901,
    },
    {
      label: "NEW TOWN",
      value: 7933,
    },
    {
      label: "PALLIYAGODELLA",
      value: 8544,
    },
    {
      label: "PERAKUMPURA",
      value: 8977,
    },
    {
      label: "SANSUNGAMA",
      value: 9965,
    },
    {
      label: "SENARATHPURA",
      value: 10050,
    },
    {
      label: "THALAKOLAWEWA",
      value: 10361,
    },
    {
      label: "THISSA AMUNA",
      value: 10702,
    },
    {
      label: "THISSAPURA",
      value: 10704,
    },
    {
      label: "VEHERAGALA",
      value: 11366,
    },
    {
      label: "VIHARAGAMA",
      value: 11423,
    },
    {
      label: "WADIGAWEWA",
      value: 11510,
    },
    {
      label: "WEDEHAPURA",
      value: 11831,
    },
    {
      label: "WEDIKACHCHIYA",
      value: 11833,
    },
    {
      label: "WIJAYAPURA",
      value: 12183,
    },
    {
      label: "WIJAYARAJAPURA",
      value: 12188,
    },
    {
      label: "YUDHAGANAWA",
      value: 12332,
    },
  ],
  "189": [
    {
      label: "AGGALAULPATHA",
      value: 68,
    },
    {
      label: "AKURUKADUWA",
      value: 150,
    },
    {
      label: "BALAGOLLA",
      value: 767,
    },
    {
      label: "ELLANDA",
      value: 2235,
    },
    {
      label: "HUNUKETAPITIYA",
      value: 3604,
    },
    {
      label: "KALUGAHAKANDURA",
      value: 4331,
    },
    {
      label: "KARAMETIYA",
      value: 4665,
    },
    {
      label: "KARANDAGAHAMADA",
      value: 4680,
    },
    {
      label: "KETAWATTA",
      value: 5071,
    },
    {
      label: "KOHANA",
      value: 5317,
    },
    {
      label: "KOMARIKA",
      value: 5416,
    },
    {
      label: "MEEGAHAKIVULA",
      value: 7021,
    },
    {
      label: "MORAHELA",
      value: 7325,
    },
    {
      label: "PITAMARUWA",
      value: 9136,
    },
    {
      label: "POLGAHA ARAWA",
      value: 9205,
    },
    {
      label: "POLWATTA",
      value: 9245,
    },
    {
      label: "ROBERIYA",
      value: 9810,
    },
    {
      label: "THALDENA",
      value: 10407,
    },
    {
      label: "WATAGOMMANA",
      value: 11749,
    },
    {
      label: "WEWATHENNA",
      value: 12148,
    },
  ],
  "190": [
    {
      label: "BOGAHAYAYA",
      value: 1132,
    },
    {
      label: "DORAMADALAWA",
      value: 2031,
    },
    {
      label: "HENA WATTA",
      value: 3334,
    },
    {
      label: "IHALAGAMA",
      value: 3810,
    },
    {
      label: "KAHAPATHVILAGAMA",
      value: 4162,
    },
    {
      label: "KANNATTIYA",
      value: 4546,
    },
    {
      label: "KASAMADUWA",
      value: 4759,
    },
    {
      label: "KATTABUWAGAMA",
      value: 4794,
    },
    {
      label: "KATUKELIYAWA",
      value: 4839,
    },
    {
      label: "KUNCHIKULAMA",
      value: 5828,
    },
    {
      label: "KURUNDANKULAMA",
      value: 5882,
    },
    {
      label: "MAHAKANADARAWA TRACK 01",
      value: 6306,
    },
    {
      label: "MAHAKANADARAWA TRACK 02",
      value: 6307,
    },
    {
      label: "MAHAKANADARAWA TRACK 03",
      value: 6308,
    },
    {
      label: "MARADANKALLA",
      value: 6722,
    },
    {
      label: "MARADANKULAMA",
      value: 6723,
    },
    {
      label: "MIHINTHALE",
      value: 7170,
    },
    {
      label: "NAMALWEWA",
      value: 7652,
    },
    {
      label: "NUWARAWEWA",
      value: 8098,
    },
    {
      label: "POTHANA",
      value: 9299,
    },
    {
      label: "RUWANGAMA",
      value: 9845,
    },
    {
      label: "SEEPPUKULAMA",
      value: 10007,
    },
    {
      label: "THAMMENNAWA",
      value: 10493,
    },
    {
      label: "UKKULANKULAMA",
      value: 11102,
    },
    {
      label: "WELLARAGAMA",
      value: 12030,
    },
  ],
  "191": [
    {
      label: "ADHIKARIGODA",
      value: 50,
    },
    {
      label: "ARAKAGODA",
      value: 548,
    },
    {
      label: "BATAGODA",
      value: 912,
    },
    {
      label: "BEGAMUWA THALAHITIYA",
      value: 997,
    },
    {
      label: "BELLANTHUDAWA",
      value: 1029,
    },
    {
      label: "BORALESSA",
      value: 1222,
    },
    {
      label: "DELDORAWATTA",
      value: 1666,
    },
    {
      label: "DELGODA",
      value: 1682,
    },
    {
      label: "DELKADA",
      value: 1695,
    },
    {
      label: "DIKHENA",
      value: 1857,
    },
    {
      label: "DOMBAGODA",
      value: 2008,
    },
    {
      label: "GALPATHA EAST",
      value: 2609,
    },
    {
      label: "GALPATHA WEST",
      value: 2610,
    },
    {
      label: "GUNGAMUWA",
      value: 2995,
    },
    {
      label: "HALTHOTA",
      value: 3116,
    },
    {
      label: "IMBULAHENA",
      value: 3871,
    },
    {
      label: "KELESGAMUWA",
      value: 4983,
    },
    {
      label: "KENNANTHUDAWA",
      value: 5019,
    },
    {
      label: "LABUGAMA",
      value: 5929,
    },
    {
      label: "LANGANA",
      value: 5953,
    },
    {
      label: "LENAWARA",
      value: 5989,
    },
    {
      label: "MAHADURUPITIYA",
      value: 6277,
    },
    {
      label: "MAWATHGAMA",
      value: 6885,
    },
    {
      label: "MILLAGASPOLA",
      value: 7179,
    },
    {
      label: "MILLANIYA",
      value: 7183,
    },
    {
      label: "MULKADAKANDA",
      value: 7435,
    },
    {
      label: "PANAGODA",
      value: 8602,
    },
    {
      label: "PARAGASTHOTA",
      value: 8745,
    },
    {
      label: "PATHAKADA",
      value: 8830,
    },
    {
      label: "PELPOLA",
      value: 8955,
    },
    {
      label: "PETHIGAMUWA NORTH",
      value: 9044,
    },
    {
      label: "PETHIGAMUWA SOUTH",
      value: 9045,
    },
    {
      label: "PUNSIRIPURA",
      value: 9433,
    },
    {
      label: "RADDEGODA",
      value: 9519,
    },
    {
      label: "THIBBOTUGODA",
      value: 10631,
    },
    {
      label: "UDUWARA EAST",
      value: 11063,
    },
    {
      label: "UDUWARA NORTH",
      value: 11064,
    },
    {
      label: "UDUWARA SOUTH",
      value: 11065,
    },
    {
      label: "UDUWARA WEST",
      value: 11066,
    },
    {
      label: "WELIKALA",
      value: 11971,
    },
    {
      label: "WENIWELPITIYA",
      value: 12060,
    },
    {
      label: "YALAGALA",
      value: 12254,
    },
    {
      label: "YATAWARA NORTH",
      value: 12282,
    },
    {
      label: "YATAWARA SOUTH",
      value: 12283,
    },
  ],
  "192": [
    {
      label: "08 ELA",
      value: 3,
    },
    {
      label: "AMBAGAHAPELESSA",
      value: 310,
    },
    {
      label: "AMBAGOLLA",
      value: 328,
    },
    {
      label: "ASAMODAGAMYAYA",
      value: 619,
    },
    {
      label: "BATUMULLA",
      value: 959,
    },
    {
      label: "BEMBIYA",
      value: 1036,
    },
    {
      label: "BULATHWELKANDURA",
      value: 1303,
    },
    {
      label: "DAMBAGAHAWELA",
      value: 1454,
    },
    {
      label: "DAMBEPITIYA",
      value: 1468,
    },
    {
      label: "DEHEMIGAMA",
      value: 1618,
    },
    {
      label: "DIYABUBULA",
      value: 1924,
    },
    {
      label: "DUNGOLLA",
      value: 2073,
    },
    {
      label: "GALAMUDUNA",
      value: 2502,
    },
    {
      label: "GURULUPOTHA",
      value: 3015,
    },
    {
      label: "HANDAGANAWA",
      value: 3149,
    },
    {
      label: "HASALAKA",
      value: 3230,
    },
    {
      label: "HASALAKA NAGARAYA",
      value: 3231,
    },
    {
      label: "HIMBUTUWA",
      value: 3427,
    },
    {
      label: "KEENAPELESSA",
      value: 4921,
    },
    {
      label: "KINDIGODA NORTH",
      value: 5111,
    },
    {
      label: "KINDIGODA SOUTH",
      value: 5112,
    },
    {
      label: "KOLONYAYA",
      value: 5408,
    },
    {
      label: "LUNUMADALAKETIYA",
      value: 6049,
    },
    {
      label: "MAHA ESWEDDUMA",
      value: 6230,
    },
    {
      label: "MAHAGALAHEENNA",
      value: 6279,
    },
    {
      label: "MAHAYAYA NORTH",
      value: 6395,
    },
    {
      label: "MAHAYAYA SOUTH",
      value: 6396,
    },
    {
      label: "MINIPE",
      value: 7199,
    },
    {
      label: "MORAYAYA",
      value: 7362,
    },
    {
      label: "MUTTETTUTHENNA",
      value: 7528,
    },
    {
      label: "PALLEGALADEBOKKA",
      value: 8496,
    },
    {
      label: "PALLEWATTA",
      value: 8525,
    },
    {
      label: "PALUGOLLA",
      value: 8571,
    },
    {
      label: "RATHNELLA",
      value: 9739,
    },
    {
      label: "THORAPITIYA",
      value: 10746,
    },
    {
      label: "THOTILLAGAS ELLA",
      value: 10761,
    },
    {
      label: "UDAGALADEBOKKA",
      value: 10889,
    },
    {
      label: "UDATTAWA",
      value: 10970,
    },
    {
      label: "UDATTAWA NORTH",
      value: 10971,
    },
    {
      label: "UDAWELA",
      value: 10979,
    },
    {
      label: "UDAYAGALA",
      value: 10991,
    },
    {
      label: "ULPATHAGAMA",
      value: 11132,
    },
    {
      label: "WARAGOLLA",
      value: 11703,
    },
    {
      label: "WELGAHAWADIYA",
      value: 11936,
    },
    {
      label: "WELGALA",
      value: 11937,
    },
    {
      label: "WERAGAMA",
      value: 12075,
    },
    {
      label: "WERAGANTHOTA",
      value: 12077,
    },
    {
      label: "WEWERE",
      value: 12166,
    },
  ],
  "193": [
    {
      label: "AMBAGAHAWATTA",
      value: 314,
    },
    {
      label: "ARACHCHIWATTA",
      value: 536,
    },
    {
      label: "ARANGAWA",
      value: 577,
    },
    {
      label: "ASGIRIWALPOLA NORTH",
      value: 624,
    },
    {
      label: "ASGIRIWALPOLA SOUTH",
      value: 625,
    },
    {
      label: "ASGIRIWALPOLA WEST",
      value: 626,
    },
    {
      label: "ASGIRIYA",
      value: 627,
    },
    {
      label: "ASGIRIYA NORTH",
      value: 628,
    },
    {
      label: "ASGIRIYA SOUTH",
      value: 629,
    },
    {
      label: "ASGIRIYA WEST",
      value: 630,
    },
    {
      label: "BALABOWA",
      value: 760,
    },
    {
      label: "BALABOWA WEST",
      value: 761,
    },
    {
      label: "BATAPOTHA",
      value: 932,
    },
    {
      label: "BODHIPIHITUWALA",
      value: 1117,
    },
    {
      label: "BORAGODAWATTA NORTH",
      value: 1211,
    },
    {
      label: "BORAGODAWATTA SOUTH",
      value: 1212,
    },
    {
      label: "BURULLAPITIYA",
      value: 1322,
    },
    {
      label: "DEWALAPOLA",
      value: 1798,
    },
    {
      label: "DOMBAWALA",
      value: 2009,
    },
    {
      label: "DORANAGODA EAST",
      value: 2032,
    },
    {
      label: "DORANAGODA NORTH",
      value: 2033,
    },
    {
      label: "DORANAGODA SOUTH",
      value: 2034,
    },
    {
      label: "DORANAGODA WEST",
      value: 2035,
    },
    {
      label: "ELLANGALA",
      value: 2236,
    },
    {
      label: "ESSELLA",
      value: 2364,
    },
    {
      label: "GALKANDA",
      value: 2562,
    },
    {
      label: "GALLEGEDARA",
      value: 2579,
    },
    {
      label: "GALLOLUWA",
      value: 2591,
    },
    {
      label: "GALLOLUWA EAST",
      value: 2592,
    },
    {
      label: "GANIHIMULLA",
      value: 2733,
    },
    {
      label: "GOIGAMA",
      value: 2886,
    },
    {
      label: "HELAKANDANA",
      value: 3317,
    },
    {
      label: "HENDIMAHARA",
      value: 3345,
    },
    {
      label: "HORAMPELLA NORTH",
      value: 3543,
    },
    {
      label: "HORAMPELLA SOUTH",
      value: 3544,
    },
    {
      label: "IHALA UDUGAMPALA",
      value: 3787,
    },
    {
      label: "IHALA VITHANAMULLA",
      value: 3789,
    },
    {
      label: "KALAHUGODA",
      value: 4232,
    },
    {
      label: "KALAWANA",
      value: 4256,
    },
    {
      label: "KAMARAGODA",
      value: 4395,
    },
    {
      label: "KEHELBADDARA EAST",
      value: 4937,
    },
    {
      label: "KEHELBADDARA WEST",
      value: 4938,
    },
    {
      label: "KOPIWATTA",
      value: 5492,
    },
    {
      label: "KORASE",
      value: 5512,
    },
    {
      label: "KORASE EAST",
      value: 5513,
    },
    {
      label: "KORASE MEDA",
      value: 5514,
    },
    {
      label: "KOTUGODA 1",
      value: 5634,
    },
    {
      label: "KOTUGODA 2",
      value: 5635,
    },
    {
      label: "KUDAGODA",
      value: 5703,
    },
    {
      label: "MABODALA EAST",
      value: 6065,
    },
    {
      label: "MABODALA NORTH",
      value: 6066,
    },
    {
      label: "MABODALA SOUTH",
      value: 6067,
    },
    {
      label: "MABODALA WEST",
      value: 6068,
    },
    {
      label: "MADELGAMUWA EAST",
      value: 6124,
    },
    {
      label: "MADELGAMUWA WEST",
      value: 6125,
    },
    {
      label: "MADURUVITA",
      value: 6176,
    },
    {
      label: "MAHAGAMA",
      value: 6283,
    },
    {
      label: "MARAPOLA",
      value: 6749,
    },
    {
      label: "MATHAMMANA",
      value: 6809,
    },
    {
      label: "MEDA MINUWANGODA",
      value: 6918,
    },
    {
      label: "MEDEMULLA NORTH",
      value: 6992,
    },
    {
      label: "MEDEMULLA SOUTH",
      value: 6993,
    },
    {
      label: "METIKOTUMULLA",
      value: 7140,
    },
    {
      label: "MINUWANGODA EAST",
      value: 7211,
    },
    {
      label: "MINUWANGODA NORTH",
      value: 7212,
    },
    {
      label: "MINUWANGODA WEST",
      value: 7213,
    },
    {
      label: "NAIWALA EAST",
      value: 7603,
    },
    {
      label: "NAIWALA NORTH",
      value: 7604,
    },
    {
      label: "NAIWALA WEST",
      value: 7605,
    },
    {
      label: "NALAPAHA",
      value: 7626,
    },
    {
      label: "NEDAGAMUWA NORTH",
      value: 7837,
    },
    {
      label: "NEDAGAMUWA SOUTH",
      value: 7838,
    },
    {
      label: "NEDAGAMUWA WEST",
      value: 7839,
    },
    {
      label: "NILPANAGODA",
      value: 7978,
    },
    {
      label: "NILPANAGODA EAST",
      value: 7979,
    },
    {
      label: "NILPANAGODA WEST",
      value: 7980,
    },
    {
      label: "OPATHA",
      value: 8160,
    },
    {
      label: "PAHALA UDUGAMPOLA EAST",
      value: 8355,
    },
    {
      label: "PAHALA UDUGAMPOLA NORTH",
      value: 8356,
    },
    {
      label: "PAHALA UDUGAMPOLA SOUTH",
      value: 8357,
    },
    {
      label: "PAHALA UDUGAMPOLA WEST",
      value: 8358,
    },
    {
      label: "PAHALA VITHANAMULLA",
      value: 8359,
    },
    {
      label: "PANSILGODA",
      value: 8715,
    },
    {
      label: "PATTANDUWANA",
      value: 8863,
    },
    {
      label: "PATTANDUWANA NORTH",
      value: 8864,
    },
    {
      label: "PATTANDUWANA WEST",
      value: 8865,
    },
    {
      label: "PEDIPOLA",
      value: 8906,
    },
    {
      label: "PEELLAWATTA",
      value: 8908,
    },
    {
      label: "PERALANDA",
      value: 8978,
    },
    {
      label: "PETHIYAGODA NORTH",
      value: 9053,
    },
    {
      label: "PETHIYAGODA SOUTH",
      value: 9054,
    },
    {
      label: "POLWATTA EAST",
      value: 9246,
    },
    {
      label: "POLWATTA WEST",
      value: 9248,
    },
    {
      label: "SAMURDHIGAMA",
      value: 9923,
    },
    {
      label: "SIYAMBALAPITIYA",
      value: 10210,
    },
    {
      label: "THAMMITA",
      value: 10496,
    },
    {
      label: "THAMMITA WEST",
      value: 10497,
    },
    {
      label: "UGGALBODA",
      value: 11088,
    },
    {
      label: "UGGALBODA WEST",
      value: 11089,
    },
    {
      label: "UNNARUWA",
      value: 11177,
    },
    {
      label: "VIGODA",
      value: 11415,
    },
    {
      label: "WADUMULLA",
      value: 11519,
    },
    {
      label: "WALPITAMULLA",
      value: 11646,
    },
    {
      label: "WANKEPUMULLA",
      value: 11681,
    },
    {
      label: "WATHUMULLA",
      value: 11776,
    },
    {
      label: "WATINAPAHA",
      value: 11790,
    },
    {
      label: "WATINAPAHA SOUTH",
      value: 11791,
    },
    {
      label: "WATTEGEDARA",
      value: 11802,
    },
    {
      label: "WEEDIYAWATTA EAST",
      value: 11839,
    },
    {
      label: "WEEDIYAWATTA WEST",
      value: 11840,
    },
    {
      label: "WEGOWWA EAST",
      value: 11886,
    },
    {
      label: "WEGOWWA SOUTH",
      value: 11887,
    },
    {
      label: "WELHENA",
      value: 11941,
    },
    {
      label: "WELIYA",
      value: 12017,
    },
    {
      label: "YAGODAMULLA",
      value: 12209,
    },
    {
      label: "YAGODAMULLA NORTH",
      value: 12210,
    },
    {
      label: "YAGODAMULLA SOUTH",
      value: 12211,
    },
    {
      label: "YATAGAMA",
      value: 12269,
    },
    {
      label: "YATIYANA",
      value: 12307,
    },
    {
      label: "YATIYANA CENTRAL",
      value: 12308,
    },
    {
      label: "YATIYANA EAST",
      value: 12309,
    },
  ],
  "194": [
    {
      label: "ANDAGALAKANDA",
      value: 453,
    },
    {
      label: "ARUKGODA",
      value: 607,
    },
    {
      label: "BALATHAWA",
      value: 786,
    },
    {
      label: "BANDURAGODA",
      value: 875,
    },
    {
      label: "BATALEEYA",
      value: 922,
    },
    {
      label: "BATALEEYA SOUTH",
      value: 923,
    },
    {
      label: "BOLANA",
      value: 1155,
    },
    {
      label: "BORUKGAMUWA",
      value: 1239,
    },
    {
      label: "BORUKGAMUWA WEST",
      value: 1240,
    },
    {
      label: "BOTHALE IHALAGAMA",
      value: 1247,
    },
    {
      label: "BOTHALE MEDAGAMA",
      value: 1248,
    },
    {
      label: "BOTHALE PAHALAGAMA",
      value: 1249,
    },
    {
      label: "BOTHALE PAHALAGAMA EAST",
      value: 1250,
    },
    {
      label: "BOTHALE PAHALAGAMA NORTH",
      value: 1251,
    },
    {
      label: "BOTHALE PAHALAGAMA WEST",
      value: 1252,
    },
    {
      label: "DAMBUTUWA",
      value: 1480,
    },
    {
      label: "DANOVITA",
      value: 1544,
    },
    {
      label: "DEBAHERA",
      value: 1563,
    },
    {
      label: "DELGAHAMEDILLA",
      value: 1674,
    },
    {
      label: "DELWALA",
      value: 1712,
    },
    {
      label: "DELWALA SOUTH",
      value: 1713,
    },
    {
      label: "DUMUNNEGEDARA",
      value: 2068,
    },
    {
      label: "DUMUNNEGEDARA SOUTH",
      value: 2069,
    },
    {
      label: "ELHENA",
      value: 2208,
    },
    {
      label: "ELLALAMULLA",
      value: 2234,
    },
    {
      label: "GALGAMUWA EAST",
      value: 2544,
    },
    {
      label: "GALGAMUWA WEST",
      value: 2548,
    },
    {
      label: "GALGANA",
      value: 2549,
    },
    {
      label: "GANEGODA",
      value: 2695,
    },
    {
      label: "GASPE",
      value: 2754,
    },
    {
      label: "GASPE PAHALAGAMA",
      value: 2755,
    },
    {
      label: "GASPE SOUTH",
      value: 2756,
    },
    {
      label: "GIRIULLAGAMA",
      value: 2831,
    },
    {
      label: "HAKURUKUMBURA",
      value: 3062,
    },
    {
      label: "HAKWADUNNA",
      value: 3065,
    },
    {
      label: "HALUGAMA",
      value: 3119,
    },
    {
      label: "HALUGAMA IHALA",
      value: 3120,
    },
    {
      label: "HALUGAMA PAHALA",
      value: 3121,
    },
    {
      label: "HANCHAPOLA",
      value: 3146,
    },
    {
      label: "HANDURUMULLA",
      value: 3167,
    },
    {
      label: "HANSAGIRIYA",
      value: 3179,
    },
    {
      label: "HAPITIGAMA",
      value: 3185,
    },
    {
      label: "HAPUGAHAGEDARA",
      value: 3191,
    },
    {
      label: "HEDIDENIKANDA",
      value: 3270,
    },
    {
      label: "HENEGAMA",
      value: 3350,
    },
    {
      label: "HENEPOLA",
      value: 3355,
    },
    {
      label: "HIRIKULUWA",
      value: 3471,
    },
    {
      label: "HIRIWALA",
      value: 3483,
    },
    {
      label: "IHALA BOKALAGAMA",
      value: 3676,
    },
    {
      label: "ILUKPATHA/ WERAGODA",
      value: 3856,
    },
    {
      label: "IMBULANWALA",
      value: 3875,
    },
    {
      label: "IMBULGASOVITA",
      value: 3880,
    },
    {
      label: "INDIPARAPE",
      value: 3902,
    },
    {
      label: "KAHANDAWA",
      value: 4159,
    },
    {
      label: "KAL/ PALLEWELA",
      value: 4219,
    },
    {
      label: "KAMARANGAWA",
      value: 4396,
    },
    {
      label: "KAMMALPITIYA",
      value: 4412,
    },
    {
      label: "KANDALAMA",
      value: 4460,
    },
    {
      label: "KANDANGAMUWA",
      value: 4474,
    },
    {
      label: "KEENADENIYA",
      value: 4919,
    },
    {
      label: "KENDALANDA",
      value: 5006,
    },
    {
      label: "KEPPITIWALANA",
      value: 5024,
    },
    {
      label: "KETAKALAPITIYA",
      value: 5058,
    },
    {
      label: "KINDIWALA",
      value: 5113,
    },
    {
      label: "KITHANAWATTA",
      value: 5238,
    },
    {
      label: "KOSETADENIYA",
      value: 5522,
    },
    {
      label: "KOTADENIYA",
      value: 5558,
    },
    {
      label: "KUKULNAPE",
      value: 5753,
    },
    {
      label: "KUMBALOLUWA",
      value: 5787,
    },
    {
      label: "KUMBALOLUWA IHALA",
      value: 5788,
    },
    {
      label: "KUMBALOLUWA PAHALA",
      value: 5789,
    },
    {
      label: "KUREEKOTUWA",
      value: 5850,
    },
    {
      label: "KUREEKOTUWA PAHALA",
      value: 5851,
    },
    {
      label: "KURUNDUWATTA",
      value: 5891,
    },
    {
      label: "LINDARA",
      value: 6014,
    },
    {
      label: "LINDARA IHALA",
      value: 6015,
    },
    {
      label: "LINDARA PAHALA",
      value: 6016,
    },
    {
      label: "LOLUWAGODA",
      value: 6037,
    },
    {
      label: "LOLUWAGODA SOUTH",
      value: 6038,
    },
    {
      label: "MADABAVITA",
      value: 6073,
    },
    {
      label: "MADABAVITA IHALAGAMA",
      value: 6074,
    },
    {
      label: "MADURUPITIYA",
      value: 6175,
    },
    {
      label: "MAKKANIGODA NORTH",
      value: 6455,
    },
    {
      label: "MAKOORA",
      value: 6461,
    },
    {
      label: "MALADENIYA",
      value: 6483,
    },
    {
      label: "MALIGATHENNA",
      value: 6536,
    },
    {
      label: "MALIGATHENNA CENTRAL",
      value: 6537,
    },
    {
      label: "MALIGATHENNA PAHALA",
      value: 6538,
    },
    {
      label: "MALLEHEWA",
      value: 6564,
    },
    {
      label: "MAVEEHENA",
      value: 6854,
    },
    {
      label: "MAWATHAHENA",
      value: 6882,
    },
    {
      label: "MEERIGAMA",
      value: 7066,
    },
    {
      label: "MEEVITIYA",
      value: 7076,
    },
    {
      label: "MIDELLAWALA",
      value: 7162,
    },
    {
      label: "MILLAWALA",
      value: 7190,
    },
    {
      label: "MOTTUNNA",
      value: 7376,
    },
    {
      label: "MOTTUNNA WEST",
      value: 7377,
    },
    {
      label: "MUDDARAGAMA",
      value: 7391,
    },
    {
      label: "MUGURUGAMPALA",
      value: 7415,
    },
    {
      label: "MURUTHAWALA",
      value: 7501,
    },
    {
      label: "NALLA",
      value: 7629,
    },
    {
      label: "NELIGAMA",
      value: 7884,
    },
    {
      label: "NELIGAMA CENTRAL",
      value: 7885,
    },
    {
      label: "NELIGAMA IHALA",
      value: 7886,
    },
    {
      label: "NEWGALA",
      value: 7936,
    },
    {
      label: "NUNGAMUWA",
      value: 8089,
    },
    {
      label: "PAHALA BOKALAGAMA",
      value: 8244,
    },
    {
      label: "PAHALAWELA",
      value: 8383,
    },
    {
      label: "PALLEWELA",
      value: 8527,
    },
    {
      label: "PALMADA",
      value: 8551,
    },
    {
      label: "PAMUNUWATTA",
      value: 8597,
    },
    {
      label: "PANAWALA",
      value: 8643,
    },
    {
      label: "PASYALA",
      value: 8825,
    },
    {
      label: "PASYALA EAST",
      value: 8826,
    },
    {
      label: "PASYALA WEST",
      value: 8827,
    },
    {
      label: "PATHAGAMA",
      value: 8829,
    },
    {
      label: "PELAPITIGAMA",
      value: 8915,
    },
    {
      label: "PIRISYALA",
      value: 9124,
    },
    {
      label: "POHONNARUWA",
      value: 9188,
    },
    {
      label: "POTTEKANDA",
      value: 9331,
    },
    {
      label: "PURANA MEERIGAMA",
      value: 9439,
    },
    {
      label: "RADAWADUNNA",
      value: 9510,
    },
    {
      label: "RADAWADUNNA CENTRAL",
      value: 9511,
    },
    {
      label: "RADAWADUNNA PAHALA",
      value: 9512,
    },
    {
      label: "RADDALGODA",
      value: 9518,
    },
    {
      label: "SIYAMBALAGODA",
      value: 10196,
    },
    {
      label: "THALAGAMA",
      value: 10342,
    },
    {
      label: "THALAGAMA EAST",
      value: 10343,
    },
    {
      label: "THAWALAMPITIYA",
      value: 10550,
    },
    {
      label: "THILINAGAMA",
      value: 10649,
    },
    {
      label: "UDAWELA",
      value: 10979,
    },
    {
      label: "UDUGAMA",
      value: 11009,
    },
    {
      label: "UDUULLA",
      value: 11047,
    },
    {
      label: "UTHUWANBOGAHAWATTA",
      value: 11261,
    },
    {
      label: "VIJAYARAJADAHANA",
      value: 11431,
    },
    {
      label: "VILWATTA",
      value: 11470,
    },
    {
      label: "WALAWWATTA",
      value: 11607,
    },
    {
      label: "WALBOTHALE",
      value: 11609,
    },
    {
      label: "WANDURAWA",
      value: 11674,
    },
    {
      label: "WEBADAMULLA",
      value: 11824,
    },
    {
      label: "WEERASOORIYAKANDA",
      value: 11870,
    },
    {
      label: "WELLEVILAMULLA",
      value: 12042,
    },
    {
      label: "WELLEVILAMULLA NORTH",
      value: 12043,
    },
    {
      label: "WERAGODA",
      value: 12078,
    },
    {
      label: "WERAGODA/ KAKKELE",
      value: 12079,
    },
    {
      label: "WEWELDENIYA IHALAGAMA",
      value: 12156,
    },
    {
      label: "WEWELDENIYA IHALAGAMA WEST",
      value: 12157,
    },
    {
      label: "WEWELDENIYA PAHALAGAMA",
      value: 12158,
    },
    {
      label: "WEWELDENIYA PAHALAGAMA WEST",
      value: 12159,
    },
  ],
  "195": [
    {
      label: "ALIYAWATTA",
      value: 219,
    },
    {
      label: "BATUGAMMANA",
      value: 953,
    },
    {
      label: "BOHITIYA",
      value: 1146,
    },
    {
      label: "DEBEDDEKIVULA",
      value: 1569,
    },
    {
      label: "GURUHELA",
      value: 3006,
    },
    {
      label: "HIDIKIVULA",
      value: 3408,
    },
    {
      label: "HOROMBUWA",
      value: 3574,
    },
    {
      label: "HULANDAWA",
      value: 3578,
    },
    {
      label: "HULANDAWA LEFT",
      value: 3579,
    },
    {
      label: "HULANDAWA SOUTH",
      value: 3580,
    },
    {
      label: "KAHAMBANA",
      value: 4152,
    },
    {
      label: "KAWDAWA",
      value: 4901,
    },
    {
      label: "KOLONVINNA",
      value: 5407,
    },
    {
      label: "KUMBUKKANA",
      value: 5805,
    },
    {
      label: "MADURUKETIYA",
      value: 6174,
    },
    {
      label: "MAGANDANAMULLA",
      value: 6201,
    },
    {
      label: "MARAWA",
      value: 6760,
    },
    {
      label: "MONERAGALA",
      value: 7280,
    },
    {
      label: "MUPPANE",
      value: 7478,
    },
    {
      label: "NAKKALA",
      value: 7614,
    },
    {
      label: "RATTANAPITIYA",
      value: 9753,
    },
    {
      label: "TENWATTA",
      value: 10322,
    },
    {
      label: "THENAGALLANDA",
      value: 10591,
    },
    {
      label: "VEHERAGALA",
      value: 11366,
    },
    {
      label: "VIHARAMULLA",
      value: 11429,
    },
    {
      label: "WELIYAYA",
      value: 12019,
    },
  ],
  "196": [
    {
      label: "ANGULANA NORTH",
      value: 489,
    },
    {
      label: "ANGULANA SOUTH",
      value: 490,
    },
    {
      label: "BORUPANA",
      value: 1241,
    },
    {
      label: "DAHAMPURA",
      value: 1417,
    },
    {
      label: "EGODA UYANA CENTRAL",
      value: 2132,
    },
    {
      label: "EGODA UYANA NORTH",
      value: 2133,
    },
    {
      label: "EGODA UYANA SOUTH",
      value: 2134,
    },
    {
      label: "IDAMA",
      value: 3639,
    },
    {
      label: "INDIBEDDA EAST",
      value: 3891,
    },
    {
      label: "INDIBEDDA WEST",
      value: 3892,
    },
    {
      label: "KADALANA",
      value: 4074,
    },
    {
      label: "KALDEMULLA",
      value: 4263,
    },
    {
      label: "KATUBEDDA",
      value: 4823,
    },
    {
      label: "KATUKURUNDA NORTH",
      value: 4846,
    },
    {
      label: "KATUKURUNDA SOUTH",
      value: 4847,
    },
    {
      label: "KORALAWELLA EAST",
      value: 5503,
    },
    {
      label: "KORALAWELLA NORTH",
      value: 5504,
    },
    {
      label: "KORALAWELLA SOUTH",
      value: 5505,
    },
    {
      label: "KORALAWELLA WEST",
      value: 5506,
    },
    {
      label: "KUDUWAMULLA",
      value: 5748,
    },
    {
      label: "LAKSHAPATHIYA CENTRAL",
      value: 5945,
    },
    {
      label: "LAKSHAPATHIYA NORTH",
      value: 5946,
    },
    {
      label: "LAKSHAPATHIYA SOUTH",
      value: 5947,
    },
    {
      label: "MOLPE",
      value: 7275,
    },
    {
      label: "MORATUMULLA EAST",
      value: 7347,
    },
    {
      label: "MORATUMULLA NORTH",
      value: 7348,
    },
    {
      label: "MORATUMULLA WEST",
      value: 7349,
    },
    {
      label: "MORATUWELLA NORTH",
      value: 7351,
    },
    {
      label: "MORATUWELLA SOUTH",
      value: 7352,
    },
    {
      label: "MORATUWELLA WEST",
      value: 7353,
    },
    {
      label: "RAWATHAWATTA EAST",
      value: 9762,
    },
    {
      label: "RAWATHAWATTA SOUTH",
      value: 9763,
    },
    {
      label: "RAWATHAWATTA WEST",
      value: 9764,
    },
    {
      label: "SOYSAPURA NORTH",
      value: 10251,
    },
    {
      label: "SOYSAPURA SOUTH",
      value: 10252,
    },
    {
      label: "THELAWALA NORTH",
      value: 10567,
    },
    {
      label: "THELAWALA SOUTH",
      value: 10568,
    },
    {
      label: "USWATTA",
      value: 11253,
    },
    {
      label: "UYANA NORTH",
      value: 11272,
    },
    {
      label: "UYANA SOUTH",
      value: 11273,
    },
    {
      label: "VILLORAWATTA EAST",
      value: 11463,
    },
    {
      label: "VILLORAWATTA WEST",
      value: 11464,
    },
  ],
  "197": [
    {
      label: "AWVAINAGAR",
      value: 712,
    },
    {
      label: "KITHULUTHUWA",
      value: 5255,
    },
    {
      label: "MAHADIVULWEWA STAGE I",
      value: 6273,
    },
    {
      label: "MAHADIVULWEWA STAGE II",
      value: 6274,
    },
    {
      label: "MORAWEWA NORTH",
      value: 7359,
    },
    {
      label: "MORAWEWA SOUTH",
      value: 7360,
    },
    {
      label: "NAMALWATTA",
      value: 7651,
    },
    {
      label: "NOCHCHIKULAMA",
      value: 8050,
    },
    {
      label: "PANKULAMA",
      value: 8688,
    },
    {
      label: "PENIKETIYAWA",
      value: 8965,
    },
  ],
  "198": [
    {
      label: "ATHAPATTUKANDA",
      value: 657,
    },
    {
      label: "BAMUNUGAMA EAST",
      value: 833,
    },
    {
      label: "BAMUNUGAMA WEST",
      value: 834,
    },
    {
      label: "BATADOLA",
      value: 900,
    },
    {
      label: "BELPAMULLA",
      value: 1033,
    },
    {
      label: "BERAGAMA EAST",
      value: 1051,
    },
    {
      label: "BERAGAMA NORTH",
      value: 1052,
    },
    {
      label: "BERAGAMA SOUTH",
      value: 1053,
    },
    {
      label: "BERAGAMA WEST",
      value: 1054,
    },
    {
      label: "DEIYANDARA",
      value: 1654,
    },
    {
      label: "DEWALEGAMA EAST",
      value: 1800,
    },
    {
      label: "DEWALEGAMA WEST",
      value: 1801,
    },
    {
      label: "DIDDENIPOTHA EAST",
      value: 1828,
    },
    {
      label: "DIDDENIPOTHA NORTH",
      value: 1829,
    },
    {
      label: "DIDDENIPOTHA SOUTH",
      value: 1830,
    },
    {
      label: "GALETUMBA",
      value: 2538,
    },
    {
      label: "GAMMEDAGAMA",
      value: 2661,
    },
    {
      label: "GOMBADDALA NORTH",
      value: 2897,
    },
    {
      label: "GOMBADDALA SOUTH",
      value: 2898,
    },
    {
      label: "HORAPAVITA NORTH",
      value: 3554,
    },
    {
      label: "HORAPAVITA SOUTH",
      value: 3555,
    },
    {
      label: "KETAPALAKANDA",
      value: 5068,
    },
    {
      label: "KETIYAPE NORTH",
      value: 5077,
    },
    {
      label: "KETIYAPE SOUTH",
      value: 5078,
    },
    {
      label: "KITHSIRIPURA",
      value: 5239,
    },
    {
      label: "KORAMBURUWANA",
      value: 5510,
    },
    {
      label: "KUDAPANA",
      value: 5724,
    },
    {
      label: "MADUWALA",
      value: 6177,
    },
    {
      label: "MAKANDURA EAST",
      value: 6443,
    },
    {
      label: "MAKANDURA WEST",
      value: 6446,
    },
    {
      label: "MEEPAVITA",
      value: 7057,
    },
    {
      label: "MUDALIGEDARA",
      value: 7386,
    },
    {
      label: "MULATIYANA",
      value: 7426,
    },
    {
      label: "NERALAMPITIYA",
      value: 7914,
    },
    {
      label: "PALLAWELA",
      value: 8482,
    },
    {
      label: "PARAPAMULLA EAST",
      value: 8788,
    },
    {
      label: "PARAPAMULLA SOUTH",
      value: 8789,
    },
    {
      label: "PARAPAMULLA WEST",
      value: 8790,
    },
    {
      label: "PITAWALGAMUWA",
      value: 9142,
    },
    {
      label: "RADAWELA EAST",
      value: 9515,
    },
    {
      label: "RADAWELA WEST",
      value: 9516,
    },
    {
      label: "RANSEGODA EAST",
      value: 9679,
    },
    {
      label: "RANSEGODA NORTH",
      value: 9680,
    },
    {
      label: "RANSEGODA SOUTH",
      value: 9681,
    },
    {
      label: "RANSEGODA WEST",
      value: 9682,
    },
    {
      label: "RATHKEKULAWA",
      value: 9709,
    },
    {
      label: "SEENIPELLA EAST",
      value: 10002,
    },
    {
      label: "SEENIPELLA WEST",
      value: 10003,
    },
  ],
  "201": [
    {
      label: "ALIMNAGAR",
      value: 212,
    },
    {
      label: "ALLAINAGAR EAST",
      value: 222,
    },
    {
      label: "ALLAINAGAR WEST",
      value: 223,
    },
    {
      label: "ANAICHENAI",
      value: 436,
    },
    {
      label: "ASSATHNAGAR",
      value: 638,
    },
    {
      label: "BARATHIPURAM",
      value: 888,
    },
    {
      label: "CHENAIYOOR",
      value: 1368,
    },
    {
      label: "IQBAL NAGAR",
      value: 3941,
    },
    {
      label: "IRUTHAYAPURAM",
      value: 3966,
    },
    {
      label: "JAYANAGAR",
      value: 4024,
    },
    {
      label: "JINNA NAGAR",
      value: 4046,
    },
    {
      label: "KADARKARAICHENAI",
      value: 4076,
    },
    {
      label: "KADDAIPARICHCHAN NORTH",
      value: 4089,
    },
    {
      label: "KADDAIPARICHCHAN SOUTH",
      value: 4090,
    },
    {
      label: "KANGUVELY",
      value: 4526,
    },
    {
      label: "KILIVEDDI",
      value: 5096,
    },
    {
      label: "KOONITIVU",
      value: 5482,
    },
    {
      label: "MALLIKAITHIVU",
      value: 6565,
    },
    {
      label: "MENGAMAM",
      value: 7118,
    },
    {
      label: "MUTTUR CENTRAL",
      value: 7531,
    },
    {
      label: "MUTTUR EAST",
      value: 7532,
    },
    {
      label: "MUTTUR WEST",
      value: 7533,
    },
    {
      label: "NADUTHIVU",
      value: 7565,
    },
    {
      label: "NALLOOR",
      value: 7634,
    },
    {
      label: "NAVARATHNAPURAM",
      value: 7764,
    },
    {
      label: "NEITHAL NAGAR",
      value: 7875,
    },
    {
      label: "PADDALIPURAM",
      value: 8215,
    },
    {
      label: "PADDITHIDAL",
      value: 8219,
    },
    {
      label: "PALANAGAR",
      value: 8431,
    },
    {
      label: "PALATHADICHENAI",
      value: 8440,
    },
    {
      label: "PALATHOPPUR",
      value: 8441,
    },
    {
      label: "PALLIKKUDIYIRUPPU",
      value: 8532,
    },
    {
      label: "PERIYAPALAM",
      value: 9026,
    },
    {
      label: "PERUVELI",
      value: 9039,
    },
    {
      label: "RALKULLY",
      value: 9585,
    },
    {
      label: "SAMPOOR EAST",
      value: 9920,
    },
    {
      label: "SAMPOOR WEST",
      value: 9921,
    },
    {
      label: "SHAFFI NAGAR",
      value: 10085,
    },
    {
      label: "THAHA NAGAR",
      value: 10329,
    },
    {
      label: "THAQWA NAGAR",
      value: 10529,
    },
    {
      label: "THOPPUR",
      value: 10738,
    },
  ],
  "203": [
    {
      label: "ALUTH THANAYAMGODA IHALA",
      value: 250,
    },
    {
      label: "ALUTH THANAYAMGODA IHALA SOUTH",
      value: 251,
    },
    {
      label: "ALUTH THANAYAMGODA PAHALA",
      value: 252,
    },
    {
      label: "ALUTH THANAYAMGODA PAHALA WEST",
      value: 253,
    },
    {
      label: "ALUTHWATTA",
      value: 277,
    },
    {
      label: "BUDAPANAGAMA",
      value: 1280,
    },
    {
      label: "GAMMEDDEGODA",
      value: 2664,
    },
    {
      label: "GAMMEDDEGODA SOUTH",
      value: 2666,
    },
    {
      label: "GONADENIYA",
      value: 2901,
    },
    {
      label: "GONADENIYA SOUTH",
      value: 2902,
    },
    {
      label: "GONALAGODA",
      value: 2923,
    },
    {
      label: "GONALAGODA EAST",
      value: 2924,
    },
    {
      label: "HANGARANWALA",
      value: 3171,
    },
    {
      label: "HOMADOLA",
      value: 3509,
    },
    {
      label: "KEPPITIYAGODA",
      value: 5025,
    },
    {
      label: "KEPPITIYAGODA NORTH",
      value: 5026,
    },
    {
      label: "KETAGODA NORTH",
      value: 5054,
    },
    {
      label: "KETAGODA SOUTH",
      value: 5055,
    },
    {
      label: "KURUPANAWA",
      value: 5903,
    },
    {
      label: "MALAMURA",
      value: 6493,
    },
    {
      label: "MAPALAGAMA",
      value: 6708,
    },
    {
      label: "MARAKANDA",
      value: 6736,
    },
    {
      label: "NAGODA",
      value: 7580,
    },
    {
      label: "NAGODA IHALA",
      value: 7581,
    },
    {
      label: "PARANA THANAYAMGODA",
      value: 8773,
    },
    {
      label: "PARANA THANAYAMGODA CENTRAL",
      value: 8774,
    },
    {
      label: "PARANA THANAYAMGODA PAHALA",
      value: 8775,
    },
    {
      label: "THALGASWALA",
      value: 10427,
    },
    {
      label: "UDALAMATTA EAST",
      value: 10930,
    },
    {
      label: "UDALAMATTA NORTH",
      value: 10931,
    },
    {
      label: "UDALAMATTA SOUTH",
      value: 10932,
    },
    {
      label: "UDAWELIVITITHALAWA",
      value: 10986,
    },
    {
      label: "UDAWELIVITITHALAWA EAST",
      value: 10987,
    },
    {
      label: "UDAWELIVITIYA",
      value: 10988,
    },
    {
      label: "UDAWELIVITIYA WEST",
      value: 10989,
    },
    {
      label: "UDUGAMA",
      value: 11009,
    },
    {
      label: "UDUGAMA CENTRAL",
      value: 11010,
    },
    {
      label: "UDUGAMA EAST",
      value: 11011,
    },
    {
      label: "UDUGAMA NORTH",
      value: 11013,
    },
    {
      label: "UDUGAMA SOUTH",
      value: 11014,
    },
    {
      label: "UDUGAMA WEST",
      value: 11015,
    },
    {
      label: "UKOVITA",
      value: 11103,
    },
    {
      label: "UKOVITA NORTH",
      value: 11104,
    },
    {
      label: "UNANVITIYA",
      value: 11158,
    },
    {
      label: "UNANVITIYA EAST",
      value: 11159,
    },
    {
      label: "URALA CENTRAL",
      value: 11196,
    },
    {
      label: "URALA EAST",
      value: 11197,
    },
    {
      label: "URALA NORTH",
      value: 11198,
    },
    {
      label: "URALA PAHALA",
      value: 11199,
    },
    {
      label: "URALA SOUTH",
      value: 11200,
    },
    {
      label: "YATALAMATTA",
      value: 12273,
    },
    {
      label: "YATALAMATTA EAST",
      value: 12274,
    },
    {
      label: "YATALAMATTA WEST",
      value: 12275,
    },
  ],
  "204": [
    {
      label: "ARIYALAI CENTRE",
      value: 597,
    },
    {
      label: "ARIYALAI CENTRE NORTH",
      value: 598,
    },
    {
      label: "ARIYALAI CENTRE SOUTH",
      value: 599,
    },
    {
      label: "ARIYALAI EAST",
      value: 600,
    },
    {
      label: "ARIYALAI NORTH WEST",
      value: 601,
    },
    {
      label: "ARIYALAI S. W. (EAST)",
      value: 602,
    },
    {
      label: "ARIYALAI SOUTH WEST",
      value: 603,
    },
    {
      label: "ARIYALAI WEST (CENTRE)",
      value: 604,
    },
    {
      label: "IYANAR KOVILADY",
      value: 3985,
    },
    {
      label: "KANTHARMADAM NORTH EAST",
      value: 4556,
    },
    {
      label: "KANTHARMADAM NORTH WEST",
      value: 4557,
    },
    {
      label: "KANTHARMADAM SOUTH EAST",
      value: 4558,
    },
    {
      label: "KANTHARMADAM SOUTH WEST",
      value: 4559,
    },
    {
      label: "KOKUVIL CENTRE (WEST)",
      value: 5360,
    },
    {
      label: "KOKUVIL CENTRE EAST",
      value: 5361,
    },
    {
      label: "KOKUVIL EAST",
      value: 5362,
    },
    {
      label: "KOKUVIL NORTH EAST",
      value: 5363,
    },
    {
      label: "KOKUVIL NORTH WEST",
      value: 5364,
    },
    {
      label: "KOKUVIL SOUTH EAST",
      value: 5365,
    },
    {
      label: "KOKUVIL SOUTH WEST",
      value: 5366,
    },
    {
      label: "KOKUVIL WEST",
      value: 5367,
    },
    {
      label: "KONDAVIL CENTRE EAST",
      value: 5432,
    },
    {
      label: "KONDAVIL CENTRE WEST",
      value: 5433,
    },
    {
      label: "KONDAVIL NORTH EAST",
      value: 5434,
    },
    {
      label: "KONDAVIL NORTH WEST",
      value: 5435,
    },
    {
      label: "KONDAVIL SOUTH EAST",
      value: 5436,
    },
    {
      label: "KONDAVIL SOUTH WEST",
      value: 5437,
    },
    {
      label: "NALLUR IRAJATHANI",
      value: 7638,
    },
    {
      label: "NALLUR NORTH",
      value: 7639,
    },
    {
      label: "NALLUR SOUTH",
      value: 7640,
    },
    {
      label: "NEERAVIYADY",
      value: 7867,
    },
    {
      label: "SANGILIYAN THOPPU",
      value: 9961,
    },
    {
      label: "THIRUNELVELY CENTRE NORTH",
      value: 10686,
    },
    {
      label: "THIRUNELVELY CENTRE SOUTH",
      value: 10687,
    },
    {
      label: "THIRUNELVELY NORTH EAST",
      value: 10688,
    },
    {
      label: "THIRUNELVELY SOUTH EAST",
      value: 10689,
    },
    {
      label: "THIRUNELVELY WEST",
      value: 10690,
    },
    {
      label: "VANNARPONNAI N.E. (NORTH)",
      value: 11321,
    },
    {
      label: "VANNARPONNAI N.W. (NORTH)",
      value: 11322,
    },
    {
      label: "VANNARPONNAI N.W. (WEST)",
      value: 11323,
    },
  ],
  "206": [
    {
      label: "AMBAGAMMANA",
      value: 318,
    },
    {
      label: "ATHURUWALA",
      value: 670,
    },
    {
      label: "DAMBADENIYA NORTH",
      value: 1450,
    },
    {
      label: "DAMBADENIYA SOUTH",
      value: 1451,
    },
    {
      label: "DAMBAGIRIGAMA EAST",
      value: 1456,
    },
    {
      label: "DAMBAGIRIGAMA WEST",
      value: 1457,
    },
    {
      label: "DAMPELESSA",
      value: 1491,
    },
    {
      label: "DANGOLLA",
      value: 1534,
    },
    {
      label: "DELIKANU ANGA",
      value: 1688,
    },
    {
      label: "EMBALAPOLA",
      value: 2267,
    },
    {
      label: "EPALADENIYA",
      value: 2301,
    },
    {
      label: "ERIYAGOLLA",
      value: 2344,
    },
    {
      label: "GANEGODA",
      value: 2695,
    },
    {
      label: "GINIGATHPITIYA",
      value: 2798,
    },
    {
      label: "GODAKOORUWA",
      value: 2849,
    },
    {
      label: "HALWELLA",
      value: 3129,
    },
    {
      label: "HANDAPANGALA",
      value: 3153,
    },
    {
      label: "KADAHAPOLA",
      value: 4073,
    },
    {
      label: "KARALAPPALA",
      value: 4652,
    },
    {
      label: "KASUNGAMA",
      value: 4765,
    },
    {
      label: "KIVULEGEDARA",
      value: 5277,
    },
    {
      label: "KIVULGALLA",
      value: 5280,
    },
    {
      label: "KOTTAPITIYA",
      value: 5616,
    },
    {
      label: "KUDAGAMMANA",
      value: 5702,
    },
    {
      label: "MARANDAGOLLA",
      value: 6745,
    },
    {
      label: "MARAVITA",
      value: 6759,
    },
    {
      label: "MEDAGODA",
      value: 6947,
    },
    {
      label: "MEEWEWA",
      value: 7086,
    },
    {
      label: "MEEWEWA/ BEMMULLEGEDARA",
      value: 7087,
    },
    {
      label: "METIYAGANE EAST",
      value: 7146,
    },
    {
      label: "METIYAGANE WEST",
      value: 7147,
    },
    {
      label: "MUTHUGALA EAST",
      value: 7514,
    },
    {
      label: "MUTHUGALA WEST",
      value: 7515,
    },
    {
      label: "NAKALAGAMUWA",
      value: 7606,
    },
    {
      label: "NARAMMALA",
      value: 7690,
    },
    {
      label: "PAHAMUNE",
      value: 8386,
    },
    {
      label: "PARANAGAMA",
      value: 8778,
    },
    {
      label: "PELAWATTA",
      value: 8922,
    },
    {
      label: "PENTHENIGODA",
      value: 8968,
    },
    {
      label: "POLGAHAYAYA",
      value: 9214,
    },
    {
      label: "POLWATTEGEDARA",
      value: 9251,
    },
    {
      label: "POTHUPITIYA",
      value: 9311,
    },
    {
      label: "PUSKOLADENIYA",
      value: 9447,
    },
    {
      label: "PUWAKGAHA KOTUWA",
      value: 9490,
    },
    {
      label: "RAMMUTHUGALA",
      value: 9616,
    },
    {
      label: "RANAWATTA",
      value: 9634,
    },
    {
      label: "RANGALLEPOLA",
      value: 9650,
    },
    {
      label: "RILIGALA",
      value: 9803,
    },
    {
      label: "RILOLUWA",
      value: 9804,
    },
    {
      label: "SENANAYAKA COLONY",
      value: 10040,
    },
    {
      label: "UDAWELAWATTA",
      value: 10984,
    },
    {
      label: "WELIKUMBURA",
      value: 11980,
    },
    {
      label: "WERAGALA",
      value: 12074,
    },
    {
      label: "YAKKAVITA",
      value: 12244,
    },
  ],
  "207": [
    {
      label: "BULUGAHAWEWA",
      value: 1309,
    },
    {
      label: "DEMATAPITIYA",
      value: 1728,
    },
    {
      label: "DHAMMIKAGAMA",
      value: 1812,
    },
    {
      label: "DUNKANNAWA",
      value: 2076,
    },
    {
      label: "IHALA KATUNERIYA",
      value: 3722,
    },
    {
      label: "IHALA KOTTARAMULLA",
      value: 3736,
    },
    {
      label: "IHALA MAVILA",
      value: 3755,
    },
    {
      label: "IHALA NATTANDIYA",
      value: 3767,
    },
    {
      label: "IHALA THABBOWA",
      value: 3778,
    },
    {
      label: "KACHCHIRAWA",
      value: 4069,
    },
    {
      label: "KOSWATTA NORTH",
      value: 5553,
    },
    {
      label: "KOSWATTA SOUTH",
      value: 5554,
    },
    {
      label: "KUDDETIYAWA",
      value: 5738,
    },
    {
      label: "LANSIGAMA",
      value: 5956,
    },
    {
      label: "MAILAWA",
      value: 6423,
    },
    {
      label: "MANINGALA",
      value: 6672,
    },
    {
      label: "MEDA KATUNERIYA",
      value: 6909,
    },
    {
      label: "MEDA KOTTARAMULLA",
      value: 6914,
    },
    {
      label: "MEDA MAVILA",
      value: 6917,
    },
    {
      label: "MEDA NATTANDIYA",
      value: 6920,
    },
    {
      label: "MEDA PAHALA KATUNERIYA",
      value: 6921,
    },
    {
      label: "MEDA THABBOWA",
      value: 6923,
    },
    {
      label: "MEEGAHAWELA",
      value: 7031,
    },
    {
      label: "MEEGAHAWEWA",
      value: 7032,
    },
    {
      label: "MORAKELE NORTH",
      value: 7329,
    },
    {
      label: "MORAKELE SOUTH",
      value: 7330,
    },
    {
      label: "MUDUKATUWA EAST",
      value: 7397,
    },
    {
      label: "MUDUKATUWA NORTH",
      value: 7398,
    },
    {
      label: "MUDUKATUWA SOUTH",
      value: 7399,
    },
    {
      label: "NAKELE",
      value: 7611,
    },
    {
      label: "NARAVILA",
      value: 7724,
    },
    {
      label: "NEBADAGAHAYAYA",
      value: 7835,
    },
    {
      label: "PAHALA KATUNERIYA NORTH",
      value: 8297,
    },
    {
      label: "PAHALA KATUNERIYA SOUTH",
      value: 8298,
    },
    {
      label: "PAHALA KOTTARAMULLA",
      value: 8310,
    },
    {
      label: "PAHALA MAVILA",
      value: 8327,
    },
    {
      label: "PAHALA NATTANDIYA",
      value: 8336,
    },
    {
      label: "PAHALA THABBOWA",
      value: 8348,
    },
    {
      label: "PALUWELGALA NORTH",
      value: 8581,
    },
    {
      label: "PALUWELGALA SOUTH",
      value: 8582,
    },
    {
      label: "PILAKATUMULLA",
      value: 9074,
    },
    {
      label: "SANDANANGAMA",
      value: 9933,
    },
    {
      label: "THUMMODARA EAST",
      value: 10792,
    },
    {
      label: "THUMMODARA WEST",
      value: 10793,
    },
    {
      label: "WEERAHENA EAST",
      value: 11849,
    },
    {
      label: "WEERAHENA WEST",
      value: 11850,
    },
    {
      label: "YAKDESSAWA",
      value: 12234,
    },
  ],
  "208": [
    {
      label: "ALUGOLLA",
      value: 237,
    },
    {
      label: "AMBANA",
      value: 357,
    },
    {
      label: "ANDAWALA",
      value: 462,
    },
    {
      label: "ARANGALA",
      value: 574,
    },
    {
      label: "BAMBARAGAHAWATTA",
      value: 808,
    },
    {
      label: "BIBILA",
      value: 1076,
    },
    {
      label: "BOBELLA",
      value: 1109,
    },
    {
      label: "BOWATHENNA WATTA",
      value: 1261,
    },
    {
      label: "DAMBAGOLLA",
      value: 1458,
    },
    {
      label: "DIYANKADUWA",
      value: 1939,
    },
    {
      label: "DODAMATTAWELA",
      value: 1952,
    },
    {
      label: "ELAGAMUWA",
      value: 2179,
    },
    {
      label: "ELHENA",
      value: 2208,
    },
    {
      label: "GALBODA",
      value: 2527,
    },
    {
      label: "GALPORUGOLLA",
      value: 2613,
    },
    {
      label: "GAN IMAYAYA",
      value: 2678,
    },
    {
      label: "HABARAGAHAMADA",
      value: 3029,
    },
    {
      label: "HADUWA",
      value: 3051,
    },
    {
      label: "HADUWELA",
      value: 3052,
    },
    {
      label: "HAPUGASYAYA",
      value: 3198,
    },
    {
      label: "HELAMBAGAHAWATTA",
      value: 3320,
    },
    {
      label: "KADAWATHA",
      value: 4083,
    },
    {
      label: "KAMBARAWA",
      value: 4397,
    },
    {
      label: "KARAVILAHENA",
      value: 4724,
    },
    {
      label: "KONGAHAWELA",
      value: 5445,
    },
    {
      label: "KOOMBIYANGAHAELA",
      value: 5480,
    },
    {
      label: "LIHINIPITIYA",
      value: 6005,
    },
    {
      label: "MAILPITIYA",
      value: 6428,
    },
    {
      label: "MARAGAMUWA",
      value: 6729,
    },
    {
      label: "MEDAPIHILLA",
      value: 6962,
    },
    {
      label: "MEEGAHA ELA",
      value: 7016,
    },
    {
      label: "MEEGOLLA",
      value: 7047,
    },
    {
      label: "MILLAGAHAMULA THENNA",
      value: 7176,
    },
    {
      label: "MORAGAHAMADA",
      value: 7306,
    },
    {
      label: "MORAGOLLA",
      value: 7321,
    },
    {
      label: "MURUTHOLUWA",
      value: 7504,
    },
    {
      label: "NALANDA",
      value: 7625,
    },
    {
      label: "NAULA",
      value: 7754,
    },
    {
      label: "NIKULA",
      value: 7966,
    },
    {
      label: "OPALGALA",
      value: 8157,
    },
    {
      label: "PENALABODA",
      value: 8959,
    },
    {
      label: "PILIHUDUGOLLA IHALAGAMA",
      value: 9085,
    },
    {
      label: "PILIHUDUGOLLA PAHALAGAMA",
      value: 9086,
    },
    {
      label: "PUBBILIYA",
      value: 9339,
    },
    {
      label: "RAJAWELA",
      value: 9571,
    },
    {
      label: "SENAGAMA",
      value: 10036,
    },
    {
      label: "SERUDANDAPOLA",
      value: 10067,
    },
    {
      label: "THALAGODA",
      value: 10348,
    },
    {
      label: "UDUDENIYA",
      value: 11003,
    },
    {
      label: "USSATTAWA",
      value: 11251,
    },
    {
      label: "WAMBATUYAYA",
      value: 11653,
    },
    {
      label: "WEWATTAWA",
      value: 12150,
    },
  ],
  "210": [
    {
      label: "AMUNUWEWA",
      value: 430,
    },
    {
      label: "GEDARAWEWA",
      value: 2767,
    },
    {
      label: "INGINIMITIYA EAST",
      value: 3919,
    },
    {
      label: "INGINIMITIYA WEST",
      value: 3920,
    },
    {
      label: "KELEWEWA",
      value: 4986,
    },
    {
      label: "KIRIMETIYAWA",
      value: 5182,
    },
    {
      label: "KONKADAWALA",
      value: 5463,
    },
    {
      label: "KURULUWEWA",
      value: 5874,
    },
    {
      label: "MAHA ANDARAWEWA",
      value: 6218,
    },
    {
      label: "MAHAMEDDEWA",
      value: 6328,
    },
    {
      label: "MIYELLEWA",
      value: 7247,
    },
    {
      label: "MORAGAHAWEWA",
      value: 7310,
    },
    {
      label: "MULLEGAMA",
      value: 7441,
    },
    {
      label: "RAMBAKANAYAGAMA",
      value: 9591,
    },
    {
      label: "SAMURDHIGAMA",
      value: 9923,
    },
    {
      label: "THAMMENNAWETIYA",
      value: 10494,
    },
    {
      label: "THARANAGAHAWEWA",
      value: 10532,
    },
    {
      label: "WELEWEWA NORTH",
      value: 11934,
    },
    {
      label: "WELEWEWA SOUTH",
      value: 11935,
    },
  ],
  "211": [
    {
      label: "ANGURUKARAMULLA",
      value: 501,
    },
    {
      label: "BOLAWALANA",
      value: 1158,
    },
    {
      label: "DALUPATHA",
      value: 1429,
    },
    {
      label: "DALUPATHA EAST",
      value: 1430,
    },
    {
      label: "DALUWAKOTUWA",
      value: 1437,
    },
    {
      label: "DALUWAKOTUWA EAST",
      value: 1438,
    },
    {
      label: "DOOWA",
      value: 2021,
    },
    {
      label: "DUNGALPITIYA",
      value: 2072,
    },
    {
      label: "ETTUKALA",
      value: 2434,
    },
    {
      label: "HUNUPITIYA",
      value: 3610,
    },
    {
      label: "KAMMALTHURA",
      value: 4413,
    },
    {
      label: "KATTUWA",
      value: 4821,
    },
    {
      label: "KEPUNGODA",
      value: 5027,
    },
    {
      label: "KOCHCHIKADE",
      value: 5291,
    },
    {
      label: "KUDAPADUWA",
      value: 5720,
    },
    {
      label: "KUDAPADUWA NORTH",
      value: 5721,
    },
    {
      label: "KUDAPADUWA SOUTH",
      value: 5722,
    },
    {
      label: "KURANA EAST",
      value: 5842,
    },
    {
      label: "KURANA WEST",
      value: 5848,
    },
    {
      label: "MUTTAKKARAI",
      value: 7523,
    },
    {
      label: "MUTTAKKARAI EAST",
      value: 7524,
    },
    {
      label: "MUTTAKKARAI NORTH",
      value: 7525,
    },
    {
      label: "PALANGATHURE",
      value: 8432,
    },
    {
      label: "PALLANSENA NORTH",
      value: 8475,
    },
    {
      label: "PALLANSENA SOUTH",
      value: 8476,
    },
    {
      label: "PERIYAMULLA",
      value: 9017,
    },
    {
      label: "PITIPANA CENTRAL",
      value: 9151,
    },
    {
      label: "PITIPANA NORTH",
      value: 9153,
    },
    {
      label: "PITIPANA SOUTH - EAST",
      value: 9155,
    },
    {
      label: "PITIPANA SOUTH - WEST",
      value: 9156,
    },
    {
      label: "SETTAPPADUWA",
      value: 10078,
    },
    {
      label: "SIRIWARDANA PEDESA",
      value: 10160,
    },
    {
      label: "THALADOOWA",
      value: 10335,
    },
    {
      label: "THALAHENA",
      value: 10354,
    },
    {
      label: "UDAYARTHOPPUWA",
      value: 10995,
    },
    {
      label: "UDAYARTHOPPUWA SOUTH",
      value: 10996,
    },
    {
      label: "WELLAWEEDIYA",
      value: 12038,
    },
    {
      label: "WELLAWEEDIYA EAST",
      value: 12039,
    },
    {
      label: "WELLAWEEDIYA SOUTH",
      value: 12040,
    },
  ],
  "212": [
    {
      label: "BATUWANGALA",
      value: 968,
    },
    {
      label: "BATUWANGALA WEST",
      value: 969,
    },
    {
      label: "DANAWALA",
      value: 1506,
    },
    {
      label: "DELLAWA",
      value: 1697,
    },
    {
      label: "DEWALEGAMA EAST",
      value: 1800,
    },
    {
      label: "DEWALEGAMA WEST",
      value: 1801,
    },
    {
      label: "EBALAGEDARA NORTH",
      value: 2107,
    },
    {
      label: "EHELAPITIYA",
      value: 2150,
    },
    {
      label: "EMBALEGEDARA SOUTH",
      value: 2269,
    },
    {
      label: "HAPPITIYA",
      value: 3188,
    },
    {
      label: "IHALA GIGUMMADUWA",
      value: 3694,
    },
    {
      label: "IHALA LELWALA",
      value: 3743,
    },
    {
      label: "IHALA MADDEGAMA",
      value: 3749,
    },
    {
      label: "IHALA MILLAWA",
      value: 3757,
    },
    {
      label: "KOSMULLA",
      value: 5541,
    },
    {
      label: "KOSWATTA",
      value: 5552,
    },
    {
      label: "LANKAGAMA",
      value: 5954,
    },
    {
      label: "LELWALA",
      value: 5978,
    },
    {
      label: "MADDEGAMA EAST",
      value: 6115,
    },
    {
      label: "MADUGETA",
      value: 6153,
    },
    {
      label: "MAVITA EAST",
      value: 6861,
    },
    {
      label: "MAVITA WEST",
      value: 6862,
    },
    {
      label: "MAWANANA",
      value: 6872,
    },
    {
      label: "MEDAGAMA",
      value: 6933,
    },
    {
      label: "MILLAWA WEST",
      value: 7189,
    },
    {
      label: "MIYANAWATHURA",
      value: 7246,
    },
    {
      label: "NELUWA",
      value: 7906,
    },
    {
      label: "PAHALA GIGUMMADUWA",
      value: 8267,
    },
    {
      label: "PAHALA MADDEGAMA",
      value: 8319,
    },
    {
      label: "PAHALA MILLAWA",
      value: 8329,
    },
    {
      label: "PANAGODA",
      value: 8602,
    },
    {
      label: "PANNIMULLA",
      value: 8708,
    },
    {
      label: "THAMBALAGAMA",
      value: 10467,
    },
    {
      label: "WARUKANDENIYA",
      value: 11734,
    },
  ],
  "213": [
    {
      label: "BOGOLLAGAMA",
      value: 1144,
    },
    {
      label: "BUDUMUTTAWA",
      value: 1286,
    },
    {
      label: "DALUKGOLLA",
      value: 1428,
    },
    {
      label: "DANDUWAWA",
      value: 1518,
    },
    {
      label: "DIVULLEGODA",
      value: 1911,
    },
    {
      label: "DIYAGAMA",
      value: 1929,
    },
    {
      label: "ELAWAKA",
      value: 2196,
    },
    {
      label: "GALAGEDARA",
      value: 2473,
    },
    {
      label: "GALAPITIYAGAMA",
      value: 2512,
    },
    {
      label: "HALMILLEWA",
      value: 3099,
    },
    {
      label: "HATHIGAMMANA",
      value: 3246,
    },
    {
      label: "HEELOGAMA",
      value: 3277,
    },
    {
      label: "HEWENPELESSA",
      value: 3397,
    },
    {
      label: "HULOGEDARA",
      value: 3588,
    },
    {
      label: "HULUGALLA",
      value: 3589,
    },
    {
      label: "IHAKOLAGAMA",
      value: 3663,
    },
    {
      label: "KALUWENNEWA",
      value: 4390,
    },
    {
      label: "KANDEGEDARA",
      value: 4492,
    },
    {
      label: "KARAKOLE",
      value: 4651,
    },
    {
      label: "KATAGAMUWA",
      value: 4766,
    },
    {
      label: "KEBELLEWA",
      value: 4907,
    },
    {
      label: "KIRINDIGALLA",
      value: 5195,
    },
    {
      label: "KIVULEGAMA",
      value: 5276,
    },
    {
      label: "KUMBUKWEWA",
      value: 5813,
    },
    {
      label: "MAGALLEGAMA",
      value: 6194,
    },
    {
      label: "MAWATHAGAMA",
      value: 6877,
    },
    {
      label: "MILLAGODA",
      value: 7180,
    },
    {
      label: "NABADEWA",
      value: 7551,
    },
    {
      label: "NIKAWERATIYA NORTH",
      value: 7960,
    },
    {
      label: "NIKAWERATIYA SOUTH",
      value: 7961,
    },
    {
      label: "OLUPELIYAWA",
      value: 8136,
    },
    {
      label: "OTHOTA DIVULLEWA",
      value: 8184,
    },
    {
      label: "PAHALA GALAPITIYAGAMA",
      value: 8261,
    },
    {
      label: "PINNAPOLEGAMA",
      value: 9112,
    },
    {
      label: "RANDENIGAMA",
      value: 9636,
    },
    {
      label: "SIYAMBALEWA",
      value: 10216,
    },
    {
      label: "THARANAGOLLA",
      value: 10533,
    },
    {
      label: "THIMBIRIYAWA",
      value: 10661,
    },
    {
      label: "THUMBULLA",
      value: 10789,
    },
    {
      label: "VIHARAGAMA",
      value: 11423,
    },
    {
      label: "WADURESSA",
      value: 11522,
    },
    {
      label: "WASIWEWA",
      value: 11738,
    },
  ],
  "215": [
    {
      label: "DELWALA",
      value: 1712,
    },
    {
      label: "DOLOSWALA",
      value: 1994,
    },
    {
      label: "DOLOSWALAKANDA",
      value: 1995,
    },
    {
      label: "DOMBAGAMMANA",
      value: 2003,
    },
    {
      label: "ERABADDA",
      value: 2308,
    },
    {
      label: "HALKANDALIYA",
      value: 3085,
    },
    {
      label: "HORANEKARAKANDA",
      value: 3549,
    },
    {
      label: "HORANGALA",
      value: 3550,
    },
    {
      label: "KIRIBATHGALA",
      value: 5143,
    },
    {
      label: "KOLOMBUGAMA",
      value: 5402,
    },
    {
      label: "NIVITHIGALA",
      value: 8034,
    },
    {
      label: "NORAGALLA",
      value: 8057,
    },
    {
      label: "PAHALA KARAVITA",
      value: 8296,
    },
    {
      label: "PANAHETAGALA",
      value: 8607,
    },
    {
      label: "PATHAKADA",
      value: 8830,
    },
    {
      label: "PEBOTUWA",
      value: 8900,
    },
    {
      label: "PINKANDA",
      value: 9101,
    },
    {
      label: "SIDURUPITIYA",
      value: 10099,
    },
    {
      label: "THUTTIRIPITIYA",
      value: 10830,
    },
    {
      label: "UDA KARAVITA",
      value: 10872,
    },
    {
      label: "WANNIYAWATTA",
      value: 11694,
    },
    {
      label: "WATAPOTHA",
      value: 11753,
    },
    {
      label: "WATHUPITIYA",
      value: 11778,
    },
    {
      label: "YAKDEHIWATTA",
      value: 12232,
    },
  ],
  "216": [
    {
      label: "AMARAGAMA",
      value: 300,
    },
    {
      label: "BAMBARAWANA",
      value: 819,
    },
    {
      label: "BANGAMUKANDA",
      value: 879,
    },
    {
      label: "BORALUWAHENA",
      value: 1233,
    },
    {
      label: "DUWEGODA",
      value: 2102,
    },
    {
      label: "GODAMUNA NORTH",
      value: 2853,
    },
    {
      label: "GODAMUNA SOUTH",
      value: 2854,
    },
    {
      label: "HATTAKA",
      value: 3254,
    },
    {
      label: "HORANGALLA (AKULAVILA)",
      value: 3551,
    },
    {
      label: "HORANGALLA THALAWA",
      value: 3552,
    },
    {
      label: "HORANGALLA WEST",
      value: 3553,
    },
    {
      label: "KALUARACHCHIGODA",
      value: 4321,
    },
    {
      label: "KARAWWA",
      value: 4731,
    },
    {
      label: "KIMBULAWALA",
      value: 5103,
    },
    {
      label: "LIYANAGAMAKANDA",
      value: 6022,
    },
    {
      label: "MANAMPITA",
      value: 6623,
    },
    {
      label: "MARAGGODA",
      value: 6731,
    },
    {
      label: "MARTHUPITIYA",
      value: 6767,
    },
    {
      label: "MATTAKA",
      value: 6825,
    },
    {
      label: "NARANOVITA",
      value: 7712,
    },
    {
      label: "NIYAGAMA",
      value: 8041,
    },
    {
      label: "NIYAGAMA SOUTH",
      value: 8042,
    },
    {
      label: "NIYAGAMA WEST",
      value: 8043,
    },
    {
      label: "PITIGALA",
      value: 9145,
    },
    {
      label: "PITIGALA NORTH",
      value: 9146,
    },
    {
      label: "PODDIWALA EAST",
      value: 9182,
    },
    {
      label: "PODDIWALA WEST",
      value: 9183,
    },
    {
      label: "POLPELAKETIYA",
      value: 9235,
    },
    {
      label: "PORAWAGAMA",
      value: 9289,
    },
    {
      label: "PORAWAGAMA SOUTH",
      value: 9290,
    },
    {
      label: "UHANOVITA",
      value: 11099,
    },
    {
      label: "USBIM COLONY",
      value: 11243,
    },
    {
      label: "WATTEHENA",
      value: 11803,
    },
    {
      label: "WEIHENA",
      value: 11895,
    },
  ],
  "217": [
    {
      label: "ADAMPANE",
      value: 27,
    },
    {
      label: "AMBAGAHAWEWA",
      value: 316,
    },
    {
      label: "AMUNUKOLE",
      value: 423,
    },
    {
      label: "ANDARAWEWA",
      value: 460,
    },
    {
      label: "BOGAHAWEWA",
      value: 1131,
    },
    {
      label: "DOMBAWALAGAMA",
      value: 2010,
    },
    {
      label: "DUNUDAMBUWEWA",
      value: 2079,
    },
    {
      label: "DUNUPOTHAGAMA",
      value: 2091,
    },
    {
      label: "EHETUWAGAMA",
      value: 2155,
    },
    {
      label: "GALADIVULWEWA",
      value: 2467,
    },
    {
      label: "HALMILLAKULAMA",
      value: 3095,
    },
    {
      label: "HORUVILA",
      value: 3576,
    },
    {
      label: "HUNUVILAGAMA",
      value: 3617,
    },
    {
      label: "ITTIKULAMA",
      value: 3983,
    },
    {
      label: "JAYAGAMA",
      value: 4019,
    },
    {
      label: "KATUPATHWEWA",
      value: 4854,
    },
    {
      label: "KUKULKATUWA",
      value: 5752,
    },
    {
      label: "KUSUMPURA",
      value: 5918,
    },
    {
      label: "LINDAWEWA",
      value: 6017,
    },
    {
      label: "MAHALINDAWEWA",
      value: 6323,
    },
    {
      label: "MIHIRIPURA",
      value: 7171,
    },
    {
      label: "MUDITHAGAMA",
      value: 7394,
    },
    {
      label: "NAVAKKULAMA",
      value: 7757,
    },
    {
      label: "NELAWAGAMA",
      value: 7881,
    },
    {
      label: "NOCHCHIYAGAMA",
      value: 8054,
    },
    {
      label: "OTTAPPUWA",
      value: 8186,
    },
    {
      label: "PAHALA HALMILLEWA",
      value: 8273,
    },
    {
      label: "PAHALA KEDITHOKKUWA",
      value: 8299,
    },
    {
      label: "PAHALA MARAGAHAWEWA",
      value: 8325,
    },
    {
      label: "PAHAMUNEGAMA",
      value: 8387,
    },
    {
      label: "RALAPANAWA COLONY",
      value: 9583,
    },
    {
      label: "RALAPANAWAGAMA",
      value: 9584,
    },
    {
      label: "RANKETHGAMA",
      value: 9661,
    },
    {
      label: "RANORAWA",
      value: 9671,
    },
    {
      label: "THALGASWEWA",
      value: 10429,
    },
    {
      label: "THIMBIRIWEWA",
      value: 10659,
    },
  ],
  "218": [
    {
      label: "BAMBARAKELE",
      value: 816,
    },
    {
      label: "BANGALAHATHA",
      value: 877,
    },
    {
      label: "BEARWELL",
      value: 982,
    },
    {
      label: "BOGAHAWATTA",
      value: 1129,
    },
    {
      label: "CONCORDIA",
      value: 1392,
    },
    {
      label: "COOMBEWOOD",
      value: 1393,
    },
    {
      label: "DEVON",
      value: 1785,
    },
    {
      label: "DIMBULA",
      value: 1873,
    },
    {
      label: "DRAYTON",
      value: 2050,
    },
    {
      label: "GREAT WESTERN",
      value: 2986,
    },
    {
      label: "HAWAELIYA EAST",
      value: 3263,
    },
    {
      label: "HOLLYROOD",
      value: 3506,
    },
    {
      label: "KALAPURA",
      value: 4246,
    },
    {
      label: "KANDAPOLA",
      value: 4479,
    },
    {
      label: "KANDAPOLA CENTRAL",
      value: 4480,
    },
    {
      label: "KOTAGALA",
      value: 5560,
    },
    {
      label: "KUDUOYA",
      value: 5747,
    },
    {
      label: "LINDULA",
      value: 6018,
    },
    {
      label: "MOUNT VERNON",
      value: 7381,
    },
    {
      label: "NUWARA ELIYA WEST",
      value: 8093,
    },
    {
      label: "PARK",
      value: 8810,
    },
    {
      label: "RATHNAGIRIYA",
      value: 9735,
    },
    {
      label: "SHANTHIPURA",
      value: 10089,
    },
    {
      label: "STONYCLIFF",
      value: 10272,
    },
    {
      label: "THALAWAKELE",
      value: 10399,
    },
    {
      label: "TOPPASS",
      value: 10837,
    },
    {
      label: "WATAGODA",
      value: 11748,
    },
    {
      label: "YULEFIELD",
      value: 12333,
    },
  ],
  "219": [
    {
      label: "ABHAYAWEWA",
      value: 18,
    },
    {
      label: "ALUTHGAMA",
      value: 259,
    },
    {
      label: "ASHOKARAMAYA",
      value: 631,
    },
    {
      label: "ASIRIKGAMA",
      value: 635,
    },
    {
      label: "BANDARA PULIYANKULAMA",
      value: 846,
    },
    {
      label: "DEWANAMPIYATHISSA PURA",
      value: 1806,
    },
    {
      label: "DIGANEGAMA",
      value: 1840,
    },
    {
      label: "ELAYAPATTUWA",
      value: 2198,
    },
    {
      label: "GALKADAWALA",
      value: 2560,
    },
    {
      label: "GALPOTTEGAMA",
      value: 2619,
    },
    {
      label: "GAMBIRIGASWEWA",
      value: 2651,
    },
    {
      label: "HELAMBAGASWEWA",
      value: 3321,
    },
    {
      label: "ILANDAGAHAWEWA",
      value: 3833,
    },
    {
      label: "ISURUMUNIYA",
      value: 3974,
    },
    {
      label: "JAYANTHI GRAMAYA",
      value: 4025,
    },
    {
      label: "KARAMBEWA",
      value: 4664,
    },
    {
      label: "KATUKELIYAWA",
      value: 4839,
    },
    {
      label: "MAHA BULANKULAMA",
      value: 6222,
    },
    {
      label: "MAHA EHETUWEWA",
      value: 6227,
    },
    {
      label: "MAHA MANKADAWALA",
      value: 6248,
    },
    {
      label: "MANINGAMUWA",
      value: 6673,
    },
    {
      label: "MANKADAWALA",
      value: 6683,
    },
    {
      label: "PAHALAGAMA",
      value: 8378,
    },
    {
      label: "PANDULAGAMA",
      value: 8670,
    },
    {
      label: "PANIYANKADAWALA",
      value: 8685,
    },
    {
      label: "PARASANGAHAWEWA",
      value: 8797,
    },
    {
      label: "PERIMIYANKULAMA",
      value: 8993,
    },
    {
      label: "PETHISPURA",
      value: 9050,
    },
    {
      label: "POOWARSANKULAMA",
      value: 9282,
    },
    {
      label: "PUSIYANKULAMA",
      value: 9446,
    },
    {
      label: "SALIYA MAWATHA",
      value: 9876,
    },
    {
      label: "SALIYAPURA",
      value: 9879,
    },
    {
      label: "SHUDDHA NAGARAYA",
      value: 10096,
    },
    {
      label: "THANNAYAMKULAMA",
      value: 10517,
    },
    {
      label: "THEPPANKULAMA",
      value: 10614,
    },
    {
      label: "THISAWEWA",
      value: 10695,
    },
    {
      label: "ULUKKULAMA",
      value: 11139,
    },
    {
      label: "VIHARA KALLANCHIYA",
      value: 11418,
    },
    {
      label: "VIHARA PALUGAMA",
      value: 11420,
    },
    {
      label: "WESSAGIRIYA",
      value: 12113,
    },
  ],
  "220": [
    {
      label: "GNANIKULAMA",
      value: 2835,
    },
    {
      label: "KAWARAKKULAMA",
      value: 4895,
    },
    {
      label: "KEERIKKULAMA",
      value: 4927,
    },
    {
      label: "KUDA NELUMKULAMA",
      value: 5680,
    },
    {
      label: "MAHAKALATTEWA",
      value: 6303,
    },
    {
      label: "MAHAPALADIKULAMA",
      value: 6339,
    },
    {
      label: "NELUM KANNIYA",
      value: 7897,
    },
    {
      label: "NUWARA WEWA",
      value: 8094,
    },
    {
      label: "POTHANEGAMA",
      value: 9300,
    },
    {
      label: "STEP 1 PART I",
      value: 10263,
    },
    {
      label: "STEP 1 PART II",
      value: 10264,
    },
    {
      label: "STEP 2 PART I",
      value: 10265,
    },
    {
      label: "STEP 2 PART II",
      value: 10266,
    },
    {
      label: "STEP 2 PART III",
      value: 10267,
    },
    {
      label: "STEP 2 PART IV",
      value: 10268,
    },
    {
      label: "STEP 3 PART I",
      value: 10269,
    },
    {
      label: "STEP 3 PART II",
      value: 10270,
    },
    {
      label: "STEP 3 PART III",
      value: 10271,
    },
    {
      label: "SUCHARITHAGAMA",
      value: 10276,
    },
    {
      label: "THAMMENNAKULAMA",
      value: 10491,
    },
    {
      label: "THAMMENNAPURA",
      value: 10492,
    },
    {
      label: "THARIYANKULAMA",
      value: 10538,
    },
    {
      label: "WANNITHAMMENNAWA",
      value: 11687,
    },
    {
      label: "WANNIYANKULAMA KOTASA 1",
      value: 11688,
    },
    {
      label: "WANNIYANKULAMA KOTASA 2",
      value: 11689,
    },
    {
      label: "WANNIYANKULAMA KOTASA 3",
      value: 11690,
    },
    {
      label: "WANNIYANKULAMA KOTASA 4",
      value: 11691,
    },
    {
      label: "WANNIYANKULAMA KOTASA 5",
      value: 11692,
    },
    {
      label: "WANNIYANKULAMA KOTASA 6",
      value: 11693,
    },
  ],
  "221": [
    {
      label: "AMPAKAMAM",
      value: 393,
    },
    {
      label: "GANESHAPURAM",
      value: 2703,
    },
    {
      label: "INDUPURAM",
      value: 3911,
    },
    {
      label: "KANAGARATHINAPURAM",
      value: 4421,
    },
    {
      label: "KARUVELANKANDAL",
      value: 4749,
    },
    {
      label: "KATCHILAIMADU",
      value: 4773,
    },
    {
      label: "KATHALIYARSAMLANKULAM",
      value: 4774,
    },
    {
      label: "KOOLAMURIPPU",
      value: 5476,
    },
    {
      label: "MANAVALANPADDAMURIPPU",
      value: 6629,
    },
    {
      label: "MANKULAM",
      value: 6689,
    },
    {
      label: "MUTHTHUIYANKADDUKULAM",
      value: 7511,
    },
    {
      label: "MUTHUVINAYAGA PURAM",
      value: 7520,
    },
    {
      label: "ODDUSUDDAN",
      value: 8110,
    },
    {
      label: "OLUMADU",
      value: 8135,
    },
    {
      label: "OTHIYAMALAI",
      value: 8182,
    },
    {
      label: "PALAMPASI",
      value: 8420,
    },
    {
      label: "PANDARAVANNI",
      value: 8649,
    },
    {
      label: "PANIKKANKULAM",
      value: 8681,
    },
    {
      label: "PERARU",
      value: 8982,
    },
    {
      label: "PERIYAITHIMADU",
      value: 8999,
    },
    {
      label: "PERIYAKULAM",
      value: 9012,
    },
    {
      label: "PULIYANKULAM",
      value: 9376,
    },
    {
      label: "THACHCHADAMPAN",
      value: 10326,
    },
    {
      label: "THADDAYARMALAI",
      value: 10327,
    },
    {
      label: "THANDUVAN",
      value: 10509,
    },
    {
      label: "THIRUMURUKANDI",
      value: 10682,
    },
    {
      label: "VITHYAPURAM",
      value: 11490,
    },
  ],
  "222": [
    {
      label: "GODAWENNA",
      value: 2874,
    },
    {
      label: "HEENATIHATHAMUNA",
      value: 3282,
    },
    {
      label: "KADIGAMUWA EAST",
      value: 4102,
    },
    {
      label: "KADIGAMUWA WEST",
      value: 4103,
    },
    {
      label: "KAHATELLAGODA",
      value: 4180,
    },
    {
      label: "KANDEBEDDA",
      value: 4490,
    },
    {
      label: "KANUMULDENIYA EAST",
      value: 4571,
    },
    {
      label: "KANUMULDENIYA NORTH",
      value: 4572,
    },
    {
      label: "KANUMULDENIYA SOUTH",
      value: 4573,
    },
    {
      label: "KANUMULDENIYA WEST",
      value: 4574,
    },
    {
      label: "KURUNDUWATTA",
      value: 5891,
    },
    {
      label: "MODARAWANA NORTH",
      value: 7253,
    },
    {
      label: "MODARAWANA SOUTH",
      value: 7254,
    },
    {
      label: "MORAKANDEGODA",
      value: 7328,
    },
    {
      label: "NATHUWALA",
      value: 7742,
    },
    {
      label: "OKEWELA",
      value: 8119,
    },
    {
      label: "OLU ARA",
      value: 8132,
    },
    {
      label: "PAHALA YATIGALA",
      value: 8376,
    },
    {
      label: "PALLEWAWWA",
      value: 8526,
    },
    {
      label: "RAJAPURAGODA",
      value: 9565,
    },
    {
      label: "SUMIHIRIGAMA",
      value: 10294,
    },
    {
      label: "THALAHAGAMWADUWA IHALA",
      value: 10352,
    },
    {
      label: "THALAHAGAMWADUWA PAHALA",
      value: 10353,
    },
    {
      label: "UDADENIYA",
      value: 10885,
    },
    {
      label: "WAWWA",
      value: 11817,
    },
    {
      label: "WIJAYASIRIPURA",
      value: 12189,
    },
    {
      label: "YATIGALA IHALA",
      value: 12288,
    },
  ],
  "224": [
    {
      label: "ALLIPALLAI",
      value: 226,
    },
    {
      label: "ARASARKERNI",
      value: 585,
    },
    {
      label: "ITTAVIL",
      value: 3982,
    },
    {
      label: "IYAKKACHCHI",
      value: 3984,
    },
    {
      label: "KACHCHARVELI",
      value: 4067,
    },
    {
      label: "KILALY",
      value: 5094,
    },
    {
      label: "KOVILVAYAL",
      value: 5655,
    },
    {
      label: "MASAR",
      value: 6786,
    },
    {
      label: "MUHAMALAI",
      value: 7416,
    },
    {
      label: "MUHAVIL",
      value: 7417,
    },
    {
      label: "MULLAIYADI",
      value: 7438,
    },
    {
      label: "PALLAI TOWN",
      value: 8468,
    },
    {
      label: "PULOPALLAI",
      value: 9397,
    },
    {
      label: "PULOPALLAI WEST",
      value: 9398,
    },
    {
      label: "SORANPATTU",
      value: 10245,
    },
    {
      label: "THAMPAKAMAM",
      value: 10499,
    },
    {
      label: "THARMAKERNY",
      value: 10539,
    },
    {
      label: "VEMPODUKERNY",
      value: 11390,
    },
  ],
  "225": [
    {
      label: "GEMUNUPURA",
      value: 2776,
    },
    {
      label: "JAYANTHIWEWA",
      value: 4028,
    },
    {
      label: "KAVANTHISSAPURA",
      value: 4881,
    },
    {
      label: "LASSANAGAMA",
      value: 5961,
    },
    {
      label: "PARANA MEDAWACHCHIYA",
      value: 8772,
    },
    {
      label: "SAMANPURA",
      value: 9893,
    },
    {
      label: "SEVA JANAPADAYA",
      value: 10079,
    },
    {
      label: "SINGHAPURA",
      value: 10108,
    },
    {
      label: "SRI PURA",
      value: 10256,
    },
    {
      label: "SRI THISSAPURA",
      value: 10258,
    },
  ],
  "226": [
    {
      label: "ABHAYAPURA",
      value: 16,
    },
    {
      label: "BALAYAWEWA",
      value: 794,
    },
    {
      label: "BISOKOTUWA",
      value: 1094,
    },
    {
      label: "BOGAHAWEWA",
      value: 1131,
    },
    {
      label: "BUDDHANGALA",
      value: 1282,
    },
    {
      label: "ELIKIMBULAGALA",
      value: 2211,
    },
    {
      label: "KUMBUKWEWA",
      value: 5813,
    },
    {
      label: "MAHASENPURA",
      value: 6365,
    },
    {
      label: "MAITHREEPURA",
      value: 6430,
    },
    {
      label: "PADAVIYA",
      value: 8213,
    },
    {
      label: "PARAKRAMAPURA",
      value: 8760,
    },
    {
      label: "RUWANPURA",
      value: 9846,
    },
    {
      label: "SUDARSHANAGAMA",
      value: 10278,
    },
    {
      label: "TRACK B",
      value: 10856,
    },
    {
      label: "UREWA",
      value: 11214,
    },
  ],
  "228": [
    {
      label: "ANGAMPITIYA",
      value: 483,
    },
    {
      label: "ANGAMUWA",
      value: 486,
    },
    {
      label: "ARUKWATTA NORTH",
      value: 608,
    },
    {
      label: "ARUKWATTA SOUTH",
      value: 609,
    },
    {
      label: "BELIATTAVILA",
      value: 1008,
    },
    {
      label: "BERUKETIYA",
      value: 1070,
    },
    {
      label: "DAMBORA",
      value: 1474,
    },
    {
      label: "DAMPE",
      value: 1490,
    },
    {
      label: "GALAGEDARA EAST",
      value: 2474,
    },
    {
      label: "GALAGEDARA NORTH",
      value: 2478,
    },
    {
      label: "GALAGEDARA SOUTH",
      value: 2479,
    },
    {
      label: "GANEGODA",
      value: 2695,
    },
    {
      label: "GURULANA",
      value: 3008,
    },
    {
      label: "HALPE",
      value: 3112,
    },
    {
      label: "HORAGALA EAST",
      value: 3528,
    },
    {
      label: "HORAGALA WEST",
      value: 3529,
    },
    {
      label: "HORAKANDAWALA",
      value: 3541,
    },
    {
      label: "IHALA BOPE",
      value: 3678,
    },
    {
      label: "KAHAWALA",
      value: 4189,
    },
    {
      label: "KURUGALA",
      value: 5862,
    },
    {
      label: "LIYANWALA",
      value: 6031,
    },
    {
      label: "MADULAWA NORTH",
      value: 6156,
    },
    {
      label: "MADULAWA SOUTH",
      value: 6157,
    },
    {
      label: "MAHINGALA",
      value: 6412,
    },
    {
      label: "MALAGALA",
      value: 6484,
    },
    {
      label: "MIRIYAGALLA",
      value: 7234,
    },
    {
      label: "PADUKKA",
      value: 8227,
    },
    {
      label: "PAHALA BOPE",
      value: 8247,
    },
    {
      label: "PAHALA PADUKKA",
      value: 8341,
    },
    {
      label: "PINNAWALA NORTH",
      value: 9114,
    },
    {
      label: "PINNAWALA SOUTH",
      value: 9115,
    },
    {
      label: "PITUMPE NORTH",
      value: 9164,
    },
    {
      label: "PITUMPE SOUTH",
      value: 9165,
    },
    {
      label: "POREGEDARA",
      value: 9292,
    },
    {
      label: "SIYAMBALAWA",
      value: 10211,
    },
    {
      label: "THUMMODARA",
      value: 10791,
    },
    {
      label: "UDAGAMA",
      value: 10891,
    },
    {
      label: "UDUMULLA",
      value: 11028,
    },
    {
      label: "UGGALLA",
      value: 11092,
    },
    {
      label: "WAGA EAST",
      value: 11528,
    },
    {
      label: "WAGA NORTH",
      value: 11529,
    },
    {
      label: "WAGA SOUTH",
      value: 11530,
    },
    {
      label: "WAGA WEST",
      value: 11531,
    },
    {
      label: "WERAGALA",
      value: 12074,
    },
    {
      label: "WEWELPANAWA",
      value: 12164,
    },
    {
      label: "YATAWATHURA",
      value: 12284,
    },
  ],
  "229": [
    {
      label: "ALUTH GALKIRIYAGAMA",
      value: 246,
    },
    {
      label: "ALUTH KADADUGAMA",
      value: 247,
    },
    {
      label: "AMBAGASWEWA",
      value: 327,
    },
    {
      label: "ANAKATAWEWA",
      value: 441,
    },
    {
      label: "ANDIYAGALA",
      value: 472,
    },
    {
      label: "BALALUWEWA",
      value: 777,
    },
    {
      label: "BALALUWEWA 2",
      value: 778,
    },
    {
      label: "BUDUGEHINNA",
      value: 1284,
    },
    {
      label: "DAMBULU HALMILLA WEWA",
      value: 1477,
    },
    {
      label: "DANIYAGAMA",
      value: 1535,
    },
    {
      label: "DEMBATAGOLLA GAMA",
      value: 1734,
    },
    {
      label: "ELLAWEWA",
      value: 2239,
    },
    {
      label: "GAM SABHA HALMILLA WEWA",
      value: 2645,
    },
    {
      label: "GAMBIRIGASWEWA",
      value: 2651,
    },
    {
      label: "GIRANEGAMA",
      value: 2821,
    },
    {
      label: "GONADENIYAGAMA",
      value: 2903,
    },
    {
      label: "HINGURUWELPITIYA",
      value: 3451,
    },
    {
      label: "HINGURUWEWA",
      value: 3452,
    },
    {
      label: "IPULWEHERA",
      value: 3940,
    },
    {
      label: "KALUGALA",
      value: 4334,
    },
    {
      label: "KARAVILAGALA",
      value: 4723,
    },
    {
      label: "KATUKELIYAWA",
      value: 4839,
    },
    {
      label: "KIRINDIWATTA",
      value: 5197,
    },
    {
      label: "MANERUWA",
      value: 6658,
    },
    {
      label: "MEEWEWA",
      value: 7086,
    },
    {
      label: "MOROTTE GAMA",
      value: 7369,
    },
    {
      label: "NARANGASWEWA",
      value: 7705,
    },
    {
      label: "NELLIYAGAMA",
      value: 7893,
    },
    {
      label: "PAHALAGAMA",
      value: 8378,
    },
    {
      label: "PARAWAHAGAMA",
      value: 8802,
    },
    {
      label: "PELBENDIYAWA",
      value: 8926,
    },
    {
      label: "RANAWA",
      value: 9627,
    },
    {
      label: "ULPATHAGAMA",
      value: 11132,
    },
    {
      label: "UNDURAWA HALMILLA WEWA",
      value: 11168,
    },
    {
      label: "WAMBATUWEWA",
      value: 11652,
    },
  ],
  "230": [
    {
      label: "ADDARAGODA",
      value: 49,
    },
    {
      label: "AMBEGODA",
      value: 374,
    },
    {
      label: "ATHALE",
      value: 656,
    },
    {
      label: "ATHWELTHOTA",
      value: 673,
    },
    {
      label: "BADURALIYA",
      value: 743,
    },
    {
      label: "BAMPARA",
      value: 829,
    },
    {
      label: "BATAGODAVILA",
      value: 913,
    },
    {
      label: "BATAHENA",
      value: 916,
    },
    {
      label: "BELLANA",
      value: 1024,
    },
    {
      label: "BELLANA EAST",
      value: 1025,
    },
    {
      label: "BOLLUNNA",
      value: 1168,
    },
    {
      label: "BORALUGODA",
      value: 1228,
    },
    {
      label: "DIGANNA",
      value: 1843,
    },
    {
      label: "DIGGODA",
      value: 1853,
    },
    {
      label: "GALAHITIYA",
      value: 2490,
    },
    {
      label: "HEDIGALLA",
      value: 3271,
    },
    {
      label: "ILUKPATHA",
      value: 3855,
    },
    {
      label: "INGURUDALUWA",
      value: 3925,
    },
    {
      label: "KALUGALA",
      value: 4334,
    },
    {
      label: "KALUKANDAWA",
      value: 4347,
    },
    {
      label: "KAMBURAWALA",
      value: 4401,
    },
    {
      label: "KAPUGAMA",
      value: 4586,
    },
    {
      label: "KAPUGEDARA",
      value: 4591,
    },
    {
      label: "KELINKANDA",
      value: 4988,
    },
    {
      label: "KELINKANDA COLONY",
      value: 4989,
    },
    {
      label: "KOSGULANA",
      value: 5533,
    },
    {
      label: "LATHPANDURA",
      value: 5963,
    },
    {
      label: "LATHPANDURA EAST",
      value: 5964,
    },
    {
      label: "MAGURA EAST",
      value: 6211,
    },
    {
      label: "MAGURA WEST",
      value: 6212,
    },
    {
      label: "MARAGAHADENIYA",
      value: 6726,
    },
    {
      label: "MIDALANA",
      value: 7153,
    },
    {
      label: "MIDALANA WEST",
      value: 7154,
    },
    {
      label: "MORAPITIYA",
      value: 7340,
    },
    {
      label: "MORAPITIYA NORTH",
      value: 7341,
    },
    {
      label: "MORAPITIYA SOUTH",
      value: 7342,
    },
    {
      label: "PELENDA",
      value: 8935,
    },
    {
      label: "PELENDA WEST",
      value: 8936,
    },
    {
      label: "PENIGALA",
      value: 8963,
    },
    {
      label: "THINIYAWALA",
      value: 10664,
    },
    {
      label: "VIHARAGAMA",
      value: 11423,
    },
    {
      label: "WALAKADA",
      value: 11572,
    },
    {
      label: "YAKUPITIYA",
      value: 12251,
    },
  ],
  "231": [
    {
      label: "DEWALA HANDIYA",
      value: 1794,
    },
    {
      label: "KAMMANDALUWA",
      value: 4415,
    },
    {
      label: "KATUPOTHA",
      value: 4859,
    },
    {
      label: "MADAWAKKULAMA",
      value: 6102,
    },
    {
      label: "NAGAVILA",
      value: 7579,
    },
    {
      label: "NANDIMITHRAPURA",
      value: 7670,
    },
    {
      label: "PALLAMA",
      value: 8470,
    },
    {
      label: "PERIYAMADUWA",
      value: 9016,
    },
    {
      label: "PULIYANKULAMA",
      value: 9379,
    },
    {
      label: "SERUKELE",
      value: 10070,
    },
    {
      label: "SIYAMBALAGASWEWA",
      value: 10195,
    },
    {
      label: "THAMARAKKULAMA",
      value: 10456,
    },
    {
      label: "THAMMANA",
      value: 10489,
    },
    {
      label: "WATHUPOLA",
      value: 11779,
    },
    {
      label: "WENDAKADUWA",
      value: 12054,
    },
    {
      label: "WETIYA",
      value: 12126,
    },
    {
      label: "WILPATHA EAST",
      value: 12197,
    },
    {
      label: "WILPATHA WEST",
      value: 12198,
    },
  ],
  "232": [
    {
      label: "AKURAMBODA",
      value: 142,
    },
    {
      label: "ALUTHGAMA",
      value: 259,
    },
    {
      label: "AMBOKKA",
      value: 379,
    },
    {
      label: "AMBOKUDENA",
      value: 380,
    },
    {
      label: "ARIYAGAMA",
      value: 596,
    },
    {
      label: "BOMERUWA",
      value: 1179,
    },
    {
      label: "DEMADA OYA",
      value: 1714,
    },
    {
      label: "DEWARAMMULLA",
      value: 1807,
    },
    {
      label: "DIMBULGAMUWA",
      value: 1879,
    },
    {
      label: "DODAMGASYAYA",
      value: 1955,
    },
    {
      label: "EHELEPOLA",
      value: 2151,
    },
    {
      label: "EKAMUTHUGAMA",
      value: 2160,
    },
    {
      label: "GALAHITIYAGAMA",
      value: 2494,
    },
    {
      label: "JANAKAGAMA",
      value: 4005,
    },
    {
      label: "KANDEWATTA",
      value: 4507,
    },
    {
      label: "KINIGAMA",
      value: 5114,
    },
    {
      label: "KIRIORUWA",
      value: 5203,
    },
    {
      label: "KOBBEVEHERA",
      value: 5286,
    },
    {
      label: "KOHOLANWALA",
      value: 5323,
    },
    {
      label: "KOSGOLLA",
      value: 5531,
    },
    {
      label: "KOSWATTA",
      value: 5552,
    },
    {
      label: "MAHAYAYAWATTA",
      value: 6397,
    },
    {
      label: "MANANWATTA",
      value: 6627,
    },
    {
      label: "MANINGAMUWA EAST",
      value: 6674,
    },
    {
      label: "MANINGAMUWA WEST",
      value: 6675,
    },
    {
      label: "MEDALANDA",
      value: 6956,
    },
    {
      label: "MILLAWANA IHALAGAMA",
      value: 7191,
    },
    {
      label: "MILLAWANA MEDAGAMA",
      value: 7192,
    },
    {
      label: "MILLAWANA PAHALAGAMA",
      value: 7193,
    },
    {
      label: "MONARAVILA",
      value: 7278,
    },
    {
      label: "MORAGASPITIYA",
      value: 7316,
    },
    {
      label: "NAGAHAPOLA",
      value: 7567,
    },
    {
      label: "NILANNORUWA",
      value: 7969,
    },
    {
      label: "NILANNORUWA COLONY",
      value: 7970,
    },
    {
      label: "PALDENIYA",
      value: 8455,
    },
    {
      label: "PALLEPOLA NORTH",
      value: 8520,
    },
    {
      label: "PALLEPOLA SOUTH",
      value: 8521,
    },
    {
      label: "POLWATTA",
      value: 9245,
    },
    {
      label: "RUSIGAMA IHALAGAMA",
      value: 9840,
    },
    {
      label: "RUSIGAMA PAHALAGAMA",
      value: 9841,
    },
    {
      label: "THALAKIRIYAWA",
      value: 10360,
    },
    {
      label: "THEMBILIDENIYA NORTH",
      value: 10588,
    },
    {
      label: "UDURAMPELESSA",
      value: 11043,
    },
    {
      label: "WALMORUWA",
      value: 11635,
    },
  ],
  "233": [
    {
      label: "DEMUTHTHEWA",
      value: 1741,
    },
    {
      label: "EPPAWALA",
      value: 2307,
    },
    {
      label: "GALAPITAGALA",
      value: 2507,
    },
    {
      label: "HABARANA",
      value: 3037,
    },
    {
      label: "HIRIWADUNNA",
      value: 3482,
    },
    {
      label: "HORIVILA",
      value: 3572,
    },
    {
      label: "KASHYAPAGAMA",
      value: 4761,
    },
    {
      label: "KELEWA",
      value: 4985,
    },
    {
      label: "KUDA RAMBAWEWA",
      value: 5683,
    },
    {
      label: "KUMBUKWEWA",
      value: 5813,
    },
    {
      label: "MADAWALA",
      value: 6103,
    },
    {
      label: "MAHA RAMBAWEWA",
      value: 6255,
    },
    {
      label: "MAITHRIGAMA",
      value: 6431,
    },
    {
      label: "PALUGASWEWA",
      value: 8569,
    },
    {
      label: "SENADHIRIYAGAMA",
      value: 10035,
    },
    {
      label: "WAYAULPATHA",
      value: 11818,
    },
  ],
  "234": [
    {
      label: "AMBALANDUWA",
      value: 342,
    },
    {
      label: "BAZAAR",
      value: 979,
    },
    {
      label: "BAZAAR NORTH",
      value: 980,
    },
    {
      label: "BAZAAR WEST",
      value: 981,
    },
    {
      label: "BEKKEGAMA",
      value: 999,
    },
    {
      label: "DIBBEDDA",
      value: 1816,
    },
    {
      label: "DIBBEDDA NORTH",
      value: 1817,
    },
    {
      label: "DIGGALA",
      value: 1848,
    },
    {
      label: "ELUVILA",
      value: 2259,
    },
    {
      label: "ETAMBAGODA",
      value: 2370,
    },
    {
      label: "GALTHUDE",
      value: 2627,
    },
    {
      label: "GALTHUDE NORTH",
      value: 2628,
    },
    {
      label: "GORAKANA",
      value: 2964,
    },
    {
      label: "GORAKANA SOUTH",
      value: 2965,
    },
    {
      label: "GORAKAPOLA",
      value: 2967,
    },
    {
      label: "HENAMULLA",
      value: 3336,
    },
    {
      label: "HIRANA",
      value: 3464,
    },
    {
      label: "HIRANA WEST",
      value: 3465,
    },
    {
      label: "HORETHUDUWA",
      value: 3567,
    },
    {
      label: "HORETHUDUWA CENTRAL",
      value: 3568,
    },
    {
      label: "HORETHUDUWA NORTH",
      value: 3569,
    },
    {
      label: "HORETHUDUWA SOUTH",
      value: 3570,
    },
    {
      label: "KALUDEWALA",
      value: 4328,
    },
    {
      label: "KALUDEWALA EAST",
      value: 4329,
    },
    {
      label: "KESELWATTA",
      value: 5049,
    },
    {
      label: "KIRIBERIYA",
      value: 5149,
    },
    {
      label: "KUDA WADDUWA",
      value: 5688,
    },
    {
      label: "KURUPPUMULLA",
      value: 5908,
    },
    {
      label: "MAHA WADDUWA",
      value: 6264,
    },
    {
      label: "MALAMULLA",
      value: 6491,
    },
    {
      label: "MALAMULLA WEST",
      value: 6492,
    },
    {
      label: "MIRIYAWATTA",
      value: 7235,
    },
    {
      label: "MOLLIGODA",
      value: 7267,
    },
    {
      label: "MOLLIGODA NORTH",
      value: 7268,
    },
    {
      label: "MOLLIGODA SOUTH",
      value: 7269,
    },
    {
      label: "MORAVINNA",
      value: 7354,
    },
    {
      label: "NALLOORUWA",
      value: 7635,
    },
    {
      label: "NALLOORUWA NORTH",
      value: 7636,
    },
    {
      label: "NARAMPITIYA",
      value: 7691,
    },
    {
      label: "PALLIMANKADA",
      value: 8536,
    },
    {
      label: "PALLIMULLA",
      value: 8537,
    },
    {
      label: "PARATTA",
      value: 8800,
    },
    {
      label: "PARATTA WEST",
      value: 8801,
    },
    {
      label: "PATTIELIYA",
      value: 8869,
    },
    {
      label: "PATTIYA",
      value: 8877,
    },
    {
      label: "PATTIYA NORTH",
      value: 8879,
    },
    {
      label: "PATTIYA SOUTH",
      value: 8880,
    },
    {
      label: "PINWATTA",
      value: 9118,
    },
    {
      label: "PINWATTA WEST",
      value: 9119,
    },
    {
      label: "PUNCHIDENIYA",
      value: 9408,
    },
    {
      label: "SAGARA PLACE",
      value: 9853,
    },
    {
      label: "SARIKKAMULLA",
      value: 9982,
    },
    {
      label: "THALPITIYA NORTH",
      value: 10445,
    },
    {
      label: "THALPITIYA SOUTH",
      value: 10446,
    },
    {
      label: "THANTHIRIMULLA",
      value: 10525,
    },
    {
      label: "THANTHIRIMULLA EAST",
      value: 10526,
    },
    {
      label: "THOTAWATTA",
      value: 10759,
    },
    {
      label: "UDAHAMULLA",
      value: 10905,
    },
    {
      label: "UYANKELE",
      value: 11276,
    },
    {
      label: "WADDUWA EAST",
      value: 11504,
    },
    {
      label: "WADDUWA SOUTH",
      value: 11505,
    },
    {
      label: "WADDUWA WEST",
      value: 11506,
    },
    {
      label: "WALANA",
      value: 11583,
    },
    {
      label: "WALANA NORTH",
      value: 11584,
    },
    {
      label: "WALANA SOUTH",
      value: 11585,
    },
    {
      label: "WALAPALA",
      value: 11588,
    },
    {
      label: "WALAPALA PATTIYA",
      value: 11589,
    },
    {
      label: "WATTALPOLA",
      value: 11795,
    },
    {
      label: "WEKADA EAST",
      value: 11897,
    },
    {
      label: "WEKADA NORTH",
      value: 11898,
    },
    {
      label: "WEKADA WEST",
      value: 11899,
    },
    {
      label: "WERAWATTA",
      value: 12104,
    },
  ],
  "236": [
    {
      label: "BADABEDDA",
      value: 718,
    },
    {
      label: "BALAWALA",
      value: 791,
    },
    {
      label: "BAMMANNA",
      value: 827,
    },
    {
      label: "BATAPOTHA ELA",
      value: 933,
    },
    {
      label: "BOPITIYA",
      value: 1204,
    },
    {
      label: "BOWATTA",
      value: 1262,
    },
    {
      label: "DARALUWA",
      value: 1552,
    },
    {
      label: "DODAMPOTTA",
      value: 1968,
    },
    {
      label: "ELABADAGAMA EAST",
      value: 2172,
    },
    {
      label: "ELABADAGAMA NORTH",
      value: 2173,
    },
    {
      label: "ELABADAGAMA WEST",
      value: 2174,
    },
    {
      label: "ELIBICHCHIYA",
      value: 2209,
    },
    {
      label: "ELIVILA",
      value: 2212,
    },
    {
      label: "EREPOLA",
      value: 2333,
    },
    {
      label: "ERIYAGOLLA",
      value: 2344,
    },
    {
      label: "GALLEHEMULLA",
      value: 2580,
    },
    {
      label: "GONULLA EAST",
      value: 2954,
    },
    {
      label: "GONULLA WEST",
      value: 2955,
    },
    {
      label: "HAMANAGODA",
      value: 3131,
    },
    {
      label: "HAMANGALLA",
      value: 3132,
    },
    {
      label: "HENDIYAGALA",
      value: 3346,
    },
    {
      label: "HENGAWA",
      value: 3357,
    },
    {
      label: "HETTIRIPPUWA",
      value: 3379,
    },
    {
      label: "HORAWADUNNA",
      value: 3562,
    },
    {
      label: "HUNDIRAPOLA",
      value: 3594,
    },
    {
      label: "HUNUVILA",
      value: 3616,
    },
    {
      label: "IHALA GALAYAYA",
      value: 3690,
    },
    {
      label: "IHALA KOTUWELLA",
      value: 3738,
    },
    {
      label: "IHALA LABBALA",
      value: 3742,
    },
    {
      label: "INDIVINNA",
      value: 3905,
    },
    {
      label: "INGARADAVULA",
      value: 3918,
    },
    {
      label: "IRABADAGAMA",
      value: 3943,
    },
    {
      label: "KADIRAPOLA",
      value: 4113,
    },
    {
      label: "KANDEPOLA",
      value: 4505,
    },
    {
      label: "KATUGAMPALA",
      value: 4829,
    },
    {
      label: "KAVUDUMUNNA",
      value: 4890,
    },
    {
      label: "KEKILLAPITIYA",
      value: 4955,
    },
    {
      label: "KOHOMBAPOLA",
      value: 5332,
    },
    {
      label: "KONDURUWAWELA",
      value: 5441,
    },
    {
      label: "KONGODA",
      value: 5456,
    },
    {
      label: "KOODALUPOTTA",
      value: 5473,
    },
    {
      label: "MADIGEPOLA",
      value: 6132,
    },
    {
      label: "MAHARAGAMA",
      value: 6350,
    },
    {
      label: "MAHINGAMUWA",
      value: 6413,
    },
    {
      label: "MAHOLAWA",
      value: 6417,
    },
    {
      label: "MAKANDURA IHALA",
      value: 6444,
    },
    {
      label: "MAKANDURA PAHALA",
      value: 6445,
    },
    {
      label: "MALGAMUWA",
      value: 6521,
    },
    {
      label: "MATTEGAMA",
      value: 6831,
    },
    {
      label: "MEDDEPOLA IHALA",
      value: 6989,
    },
    {
      label: "MEDDEPOLA PAHALA",
      value: 6990,
    },
    {
      label: "MEDIRIVILA",
      value: 7000,
    },
    {
      label: "MELLAWALANA",
      value: 7112,
    },
    {
      label: "MOHOTTAWA",
      value: 7258,
    },
    {
      label: "MOOKALANA",
      value: 7285,
    },
    {
      label: "MUMMANA",
      value: 7458,
    },
    {
      label: "MUTHUGALAYAGAMA",
      value: 7516,
    },
    {
      label: "NABIRITTANKADAWARA",
      value: 7554,
    },
    {
      label: "NALAWALANA",
      value: 7627,
    },
    {
      label: "NARANGAMUWA",
      value: 7701,
    },
    {
      label: "NARANGODA NORTH",
      value: 7707,
    },
    {
      label: "NARANGODA SOUTH",
      value: 7708,
    },
    {
      label: "NEDALAGAMUWA NORTH",
      value: 7840,
    },
    {
      label: "NEDALAGAMUWA SOUTH",
      value: 7841,
    },
    {
      label: "PAHALA GALAYAYA",
      value: 8263,
    },
    {
      label: "PAHALA LABBALA",
      value: 8314,
    },
    {
      label: "PANNALA",
      value: 8695,
    },
    {
      label: "PANWALAKUMBURA",
      value: 8722,
    },
    {
      label: "PARAGAMMANA",
      value: 8744,
    },
    {
      label: "PETHIGODAGEDARA",
      value: 9048,
    },
    {
      label: "RADDALANA",
      value: 9517,
    },
    {
      label: "SANDALANKAWA",
      value: 9929,
    },
    {
      label: "SIYAMBALAWALANA",
      value: 10213,
    },
    {
      label: "THALAMMEHERA",
      value: 10370,
    },
    {
      label: "THAMBAKANDA",
      value: 10464,
    },
    {
      label: "THELAMBUGAMMANA",
      value: 10566,
    },
    {
      label: "UDUGAMA",
      value: 11009,
    },
    {
      label: "VILLIYAGAMA",
      value: 11462,
    },
    {
      label: "WAGURUWELA",
      value: 11536,
    },
    {
      label: "WATTEGEDARA",
      value: 11802,
    },
    {
      label: "WELLEWA",
      value: 12044,
    },
    {
      label: "WELPALLA",
      value: 12047,
    },
    {
      label: "WERAHERA",
      value: 12083,
    },
    {
      label: "WETAKEYAWA",
      value: 12118,
    },
    {
      label: "WETTEWA",
      value: 12127,
    },
    {
      label: "YATATTAWALA",
      value: 12278,
    },
    {
      label: "YAYAMULLA",
      value: 12317,
    },
  ],
  "237": [
    {
      label: "ANGAMMANA",
      value: 480,
    },
    {
      label: "ARATTANA",
      value: 586,
    },
    {
      label: "BEDDEGAMA",
      value: 985,
    },
    {
      label: "GOMARAYA",
      value: 2895,
    },
    {
      label: "HATHALE",
      value: 3237,
    },
    {
      label: "KELEBOKKA",
      value: 4975,
    },
    {
      label: "KOSGAMA",
      value: 5529,
    },
    {
      label: "MADULKELE",
      value: 6159,
    },
    {
      label: "MAHAPATHANA",
      value: 6340,
    },
    {
      label: "PANVILA",
      value: 8719,
    },
    {
      label: "PITAWALA",
      value: 9139,
    },
    {
      label: "THAWALANTHENNA",
      value: 10554,
    },
    {
      label: "UDUGODA",
      value: 11017,
    },
    {
      label: "WATAKELE",
      value: 11750,
    },
  ],
  "238": [
    {
      label: "ALUTHGAMA",
      value: 259,
    },
    {
      label: "BALANTHOTA NORTH",
      value: 783,
    },
    {
      label: "BALANTHOTA SOUTH",
      value: 784,
    },
    {
      label: "BAWWAGAMA",
      value: 977,
    },
    {
      label: "DANDUBEDIRUPPA",
      value: 1513,
    },
    {
      label: "DEKINDA",
      value: 1660,
    },
    {
      label: "GREENWOOD",
      value: 2988,
    },
    {
      label: "HYDREE",
      value: 3632,
    },
    {
      label: "IMBULPITIYA",
      value: 3888,
    },
    {
      label: "INGURUOYA NORTH",
      value: 3926,
    },
    {
      label: "INGURUOYA SOUTH",
      value: 3927,
    },
    {
      label: "KADIYANLENA",
      value: 4116,
    },
    {
      label: "KARAHANDUNGALA",
      value: 4628,
    },
    {
      label: "KENDOPITIYA",
      value: 5017,
    },
    {
      label: "MAPAKANDA NORTH",
      value: 6706,
    },
    {
      label: "MAPAKANDA SOUTH",
      value: 6707,
    },
    {
      label: "NAWALAPITIYA EAST",
      value: 7807,
    },
    {
      label: "NAWALAPITIYA NORTH",
      value: 7808,
    },
    {
      label: "NAWALAPITIYA SOUTH",
      value: 7809,
    },
    {
      label: "NAWALAPITIYA WEST",
      value: 7810,
    },
    {
      label: "PAHALA RAMBUKPITIYA",
      value: 8345,
    },
    {
      label: "PALLEGAMA",
      value: 8497,
    },
    {
      label: "PENITHUDUWA",
      value: 8966,
    },
    {
      label: "UDA RAMBUKPITIYA",
      value: 10878,
    },
    {
      label: "WARAKAWA",
      value: 11722,
    },
    {
      label: "WELIGAMPOLA",
      value: 11951,
    },
    {
      label: "WELIGODAWATTA",
      value: 11958,
    },
    {
      label: "WESTHOLE",
      value: 12114,
    },
    {
      label: "WEWEGAMA",
      value: 12151,
    },
  ],
  "239": [
    {
      label: "ANDALUWA",
      value: 454,
    },
    {
      label: "BATANDURA NORTH",
      value: 924,
    },
    {
      label: "BATANDURA SOUTH",
      value: 925,
    },
    {
      label: "BENGAMUWA EAST",
      value: 1046,
    },
    {
      label: "BENGAMUWA SOUTH",
      value: 1047,
    },
    {
      label: "BENGAMUWA WEST",
      value: 1048,
    },
    {
      label: "BERALAPANATHARA NORTH",
      value: 1056,
    },
    {
      label: "BERALAPANATHARA SOUTH",
      value: 1057,
    },
    {
      label: "DAMPAHALA EAST",
      value: 1487,
    },
    {
      label: "DAMPAHALA WEST",
      value: 1488,
    },
    {
      label: "DENKANDALIYA",
      value: 1758,
    },
    {
      label: "EHELAKANDA",
      value: 2147,
    },
    {
      label: "GALKETIKANDA",
      value: 2565,
    },
    {
      label: "GINNALIYA EAST",
      value: 2808,
    },
    {
      label: "GINNALIYA NORTH",
      value: 2809,
    },
    {
      label: "GINNALIYA SOUTH",
      value: 2810,
    },
    {
      label: "GINNALIYA WEST",
      value: 2811,
    },
    {
      label: "GOMILA",
      value: 2900,
    },
    {
      label: "HEEGODA",
      value: 3275,
    },
    {
      label: "HULANKANDA",
      value: 3583,
    },
    {
      label: "KEERIPITIYA EAST",
      value: 4928,
    },
    {
      label: "KEERIPITIYA WEST",
      value: 4929,
    },
    {
      label: "KEKUNDENIYA",
      value: 4971,
    },
    {
      label: "KETAWALA",
      value: 5069,
    },
    {
      label: "KIRILIPANA",
      value: 5167,
    },
    {
      label: "MAWARALA",
      value: 6874,
    },
    {
      label: "MEKILIYATHENNA",
      value: 7097,
    },
    {
      label: "MOLOGGAMUWA NORTH",
      value: 7273,
    },
    {
      label: "MOLOGGAMUWA SOUTH",
      value: 7274,
    },
    {
      label: "MORAGALA",
      value: 7311,
    },
    {
      label: "NAPATHELLA",
      value: 7684,
    },
    {
      label: "PANAKADUWA EAST",
      value: 8609,
    },
    {
      label: "PANAKADUWA WEST",
      value: 8610,
    },
    {
      label: "PASGODA",
      value: 8816,
    },
    {
      label: "PATHAVITA",
      value: 8836,
    },
    {
      label: "PATTIGALA",
      value: 8870,
    },
    {
      label: "POTHDENIYA",
      value: 9301,
    },
    {
      label: "PUWAKGAHAHENA",
      value: 9493,
    },
    {
      label: "ROTUMBA EAST",
      value: 9824,
    },
    {
      label: "ROTUMBA WEST",
      value: 9825,
    },
    {
      label: "THALAPALAKANDA",
      value: 10380,
    },
    {
      label: "URUBOKKA",
      value: 11220,
    },
    {
      label: "WIJAYAGAMA",
      value: 12180,
    },
  ],
  "240": [
    {
      label: "AMBATHENNA",
      value: 371,
    },
    {
      label: "AMBATHENNA WEST",
      value: 372,
    },
    {
      label: "BIBILEGAMA EAST",
      value: 1079,
    },
    {
      label: "BIBILEGAMA WEST",
      value: 1080,
    },
    {
      label: "DAMBAKOTE",
      value: 1461,
    },
    {
      label: "DAMBEWELA",
      value: 1472,
    },
    {
      label: "DEMODARA",
      value: 1739,
    },
    {
      label: "GERANDIELLA",
      value: 2777,
    },
    {
      label: "GONAGALA EAST",
      value: 2907,
    },
    {
      label: "GONAGALA WEST",
      value: 2909,
    },
    {
      label: "KAHATARUPPA",
      value: 4175,
    },
    {
      label: "KANAHELA",
      value: 4427,
    },
    {
      label: "KANAWERELLA",
      value: 4447,
    },
    {
      label: "KANAWERELLA EAST",
      value: 4448,
    },
    {
      label: "KANAWERELLA WEST",
      value: 4449,
    },
    {
      label: "KUDUGALA PATHANA",
      value: 5741,
    },
    {
      label: "MADUGASTHALAWA NORTH",
      value: 6151,
    },
    {
      label: "MADUGASTHALAWA SOUTH",
      value: 6152,
    },
    {
      label: "MALIGATHENNA",
      value: 6536,
    },
    {
      label: "MAUSSAGOLLA EAST",
      value: 6842,
    },
    {
      label: "MAUSSAGOLLA WEST",
      value: 6843,
    },
    {
      label: "MEDAWELAGAMA",
      value: 6972,
    },
    {
      label: "MEEDUMPITIYA",
      value: 7014,
    },
    {
      label: "MEERIYABEDDA",
      value: 7067,
    },
    {
      label: "NIKEBEDDA",
      value: 7965,
    },
    {
      label: "PALAGOLLA",
      value: 8401,
    },
    {
      label: "PALAWATTA",
      value: 8449,
    },
    {
      label: "PALLEGAMA",
      value: 8497,
    },
    {
      label: "PARAMAHANKADA",
      value: 8762,
    },
    {
      label: "PASSARA TOWN EAST",
      value: 8821,
    },
    {
      label: "PASSARA TOWN NORTH",
      value: 8822,
    },
    {
      label: "PASSARA TOWN SOUTH",
      value: 8823,
    },
    {
      label: "PELGAHATHENNA",
      value: 8943,
    },
    {
      label: "PUHULWATTA",
      value: 9358,
    },
    {
      label: "SAPURODA",
      value: 9974,
    },
    {
      label: "THALAGAHAGEDARA",
      value: 10336,
    },
    {
      label: "THENNUGE",
      value: 10609,
    },
    {
      label: "THOLABOWATTA",
      value: 10727,
    },
    {
      label: "UDAGAMA",
      value: 10891,
    },
    {
      label: "WELGOLLA",
      value: 11939,
    },
    {
      label: "WEWEKELE",
      value: 12153,
    },
  ],
  "241": [
    {
      label: "ABASINGAMA",
      value: 11,
    },
    {
      label: "ALUTHGAMA",
      value: 259,
    },
    {
      label: "AMBATHENNA",
      value: 371,
    },
    {
      label: "BALANAGALA",
      value: 780,
    },
    {
      label: "BOGAHAKUMBURA",
      value: 1123,
    },
    {
      label: "DEEGAHAWATHURA",
      value: 1587,
    },
    {
      label: "DORAGAMUWA",
      value: 2027,
    },
    {
      label: "EGODAGAMA",
      value: 2137,
    },
    {
      label: "ERIYAGASTHENNA",
      value: 2343,
    },
    {
      label: "GALADENIYA",
      value: 2466,
    },
    {
      label: "GALEWATTA",
      value: 2539,
    },
    {
      label: "GIRAKADUWA",
      value: 2818,
    },
    {
      label: "GUNEMBILL",
      value: 2994,
    },
    {
      label: "GUNNEPANA MADIGE",
      value: 2996,
    },
    {
      label: "HAMINDAGODA",
      value: 3141,
    },
    {
      label: "IHALA YATAWARA",
      value: 3808,
    },
    {
      label: "KAHALLA",
      value: 4151,
    },
    {
      label: "KALUGALAWATTA",
      value: 4337,
    },
    {
      label: "KENDALIYADDA",
      value: 5007,
    },
    {
      label: "KETAKAHALA",
      value: 5057,
    },
    {
      label: "LEEMAGAHADENIYA",
      value: 5972,
    },
    {
      label: "MADAWALA",
      value: 6103,
    },
    {
      label: "MADAWALA MADIGE",
      value: 6104,
    },
    {
      label: "MAHAKUMBURA",
      value: 6317,
    },
    {
      label: "MANDANDAWELA",
      value: 6642,
    },
    {
      label: "MEEGAMAWATTA",
      value: 7036,
    },
    {
      label: "MEEGAMMANA",
      value: 7037,
    },
    {
      label: "MEEGAMMANA WEST",
      value: 7038,
    },
    {
      label: "MEGODAGAMA",
      value: 7092,
    },
    {
      label: "MILLANGA",
      value: 7182,
    },
    {
      label: "MOLAGODAYAWATTA",
      value: 7262,
    },
    {
      label: "MOONAMALE",
      value: 7292,
    },
    {
      label: "NAPANA",
      value: 7682,
    },
    {
      label: "NAWAYALATHENNA",
      value: 7822,
    },
    {
      label: "PALLETHALAVINNA",
      value: 8522,
    },
    {
      label: "PALLETHALAVINNA IHALA",
      value: 8523,
    },
    {
      label: "PARANAGAMA",
      value: 8778,
    },
    {
      label: "PIHILLADENIYA",
      value: 9067,
    },
    {
      label: "PITIYEGEDARA",
      value: 9163,
    },
    {
      label: "POLGOLLA",
      value: 9218,
    },
    {
      label: "PUWAKGAHADENIYA",
      value: 9491,
    },
    {
      label: "THALKOTUWA",
      value: 10435,
    },
    {
      label: "UDATHALAVINNA",
      value: 10964,
    },
    {
      label: "UDATHALAVINNA MADIGE",
      value: 10965,
    },
    {
      label: "UDURAWANA",
      value: 11044,
    },
    {
      label: "WALALA",
      value: 11576,
    },
    {
      label: "WALPALADENIYA",
      value: 11637,
    },
    {
      label: "WATTEGAMA",
      value: 11799,
    },
    {
      label: "WATTEGAMA NORTH",
      value: 11800,
    },
    {
      label: "YATAWARA",
      value: 12280,
    },
    {
      label: "YATAWARA KANDAGAMA",
      value: 12281,
    },
    {
      label: "YATIRAWANA",
      value: 12299,
    },
  ],
  "242": [
    {
      label: "ANKELIPITIYA",
      value: 510,
    },
    {
      label: "BATAGALLA",
      value: 905,
    },
    {
      label: "BAWLANA",
      value: 975,
    },
    {
      label: "BOLEPA",
      value: 1160,
    },
    {
      label: "BOOTAWATTA NORTH",
      value: 1191,
    },
    {
      label: "BOOTAWATTA SOUTH",
      value: 1192,
    },
    {
      label: "BOPITIYA",
      value: 1204,
    },
    {
      label: "DAMUNUGOLLA",
      value: 1501,
    },
    {
      label: "DOOLMURE",
      value: 2018,
    },
    {
      label: "ELIKEWELA",
      value: 2210,
    },
    {
      label: "ETHULGAMA EAST",
      value: 2415,
    },
    {
      label: "ETHULGAMA NORTH",
      value: 2416,
    },
    {
      label: "ETHULGAMA SOUTH",
      value: 2417,
    },
    {
      label: "ETHULGAMA WEST",
      value: 2418,
    },
    {
      label: "GALAGODA",
      value: 2482,
    },
    {
      label: "GALTHENNA",
      value: 2625,
    },
    {
      label: "GODALAWELA",
      value: 2851,
    },
    {
      label: "GODAMUNNA EAST",
      value: 2856,
    },
    {
      label: "GODAMUNNA WEST",
      value: 2857,
    },
    {
      label: "GODOMPITIYA",
      value: 2883,
    },
    {
      label: "HAPUTHALE EGODAGAMA",
      value: 3206,
    },
    {
      label: "HAPUTHALE PALLEGAMA",
      value: 3207,
    },
    {
      label: "HAPUTHALE UDAGAMA",
      value: 3209,
    },
    {
      label: "HARAGAMA",
      value: 3217,
    },
    {
      label: "HEWAVISSA EAST",
      value: 3394,
    },
    {
      label: "HEWAVISSA WEST",
      value: 3395,
    },
    {
      label: "HIPPOLA",
      value: 3462,
    },
    {
      label: "KAHAMBILIYAWA",
      value: 4154,
    },
    {
      label: "KANDEWELA",
      value: 4508,
    },
    {
      label: "KAPULIYADDA EAST",
      value: 4598,
    },
    {
      label: "KAPULIYADDA WEST",
      value: 4599,
    },
    {
      label: "KETHIGANNAWELA",
      value: 5075,
    },
    {
      label: "KIRIWANAGODA",
      value: 5212,
    },
    {
      label: "KOSSINNA",
      value: 5546,
    },
    {
      label: "LETIYAGOLLA",
      value: 5991,
    },
    {
      label: "MADADENIYA",
      value: 6075,
    },
    {
      label: "MARASSANA",
      value: 6751,
    },
    {
      label: "MEDAGAMA PALLEGAMA",
      value: 6939,
    },
    {
      label: "MEDAGAMA UDAGAMA",
      value: 6940,
    },
    {
      label: "MEERUPPA",
      value: 7069,
    },
    {
      label: "MONARANGALA",
      value: 7276,
    },
    {
      label: "MORAGOLLA",
      value: 7321,
    },
    {
      label: "NARANGASTHENNA",
      value: 7704,
    },
    {
      label: "NEELAWALA",
      value: 7862,
    },
    {
      label: "NEHINIWELA",
      value: 7873,
    },
    {
      label: "NUGALIYADDA IHALA",
      value: 8066,
    },
    {
      label: "NUGALIYADDA PAHALA",
      value: 8067,
    },
    {
      label: "OLUWAWATTA",
      value: 8144,
    },
    {
      label: "PATHAMAILAPITIYA NORTH",
      value: 8831,
    },
    {
      label: "PATHAMAILAPITIYA SOUTH",
      value: 8832,
    },
    {
      label: "PINNAGOLLA",
      value: 9106,
    },
    {
      label: "POOLIYADDA",
      value: 9268,
    },
    {
      label: "POTHGODA",
      value: 9302,
    },
    {
      label: "PUSSATHENNA",
      value: 9451,
    },
    {
      label: "RATEMULLA",
      value: 9699,
    },
    {
      label: "SINGHARAGAMA",
      value: 10109,
    },
    {
      label: "SRIYAGAMA",
      value: 10260,
    },
    {
      label: "THALATHUOYA EAST",
      value: 10388,
    },
    {
      label: "THALATHUOYA WEST",
      value: 10389,
    },
    {
      label: "UDAMAILAPITIYA NORTH",
      value: 10936,
    },
    {
      label: "UDAMAILAPITIYA SOUTH",
      value: 10937,
    },
    {
      label: "UDUDENIYA",
      value: 11003,
    },
    {
      label: "UDUDENIYA MADIGE",
      value: 11004,
    },
    {
      label: "UDUWELA PALLEGAMA EAST",
      value: 11072,
    },
    {
      label: "UDUWELA PALLEGAMA SOUTH",
      value: 11073,
    },
    {
      label: "UDUWELA PALLEGAMA WEST",
      value: 11074,
    },
    {
      label: "UDUWELA UDAGAMA EAST",
      value: 11075,
    },
    {
      label: "UDUWELA UDAGAMA WEST",
      value: 11076,
    },
    {
      label: "UDUWELAWATTA COLONY",
      value: 11077,
    },
    {
      label: "UNUVINNA EAST",
      value: 11179,
    },
    {
      label: "UNUVINNA WEST",
      value: 11180,
    },
    {
      label: "WATHULIYEDDA",
      value: 11775,
    },
    {
      label: "WELEGAMA",
      value: 11926,
    },
  ],
  "243": [
    {
      label: "ALUPOTHA",
      value: 240,
    },
    {
      label: "BERENDUWA",
      value: 1069,
    },
    {
      label: "BOPETTA",
      value: 1200,
    },
    {
      label: "BORALA",
      value: 1214,
    },
    {
      label: "DENAWAKA PATHAKADA",
      value: 1748,
    },
    {
      label: "DENAWAKA UDAKADA",
      value: 1749,
    },
    {
      label: "DEWALEGAMA",
      value: 1799,
    },
    {
      label: "DIPPITIGALA",
      value: 1886,
    },
    {
      label: "DOMBAGASVINNA",
      value: 2007,
    },
    {
      label: "GALLINNA",
      value: 2590,
    },
    {
      label: "GANEGAMA",
      value: 2690,
    },
    {
      label: "GODAGAMA",
      value: 2838,
    },
    {
      label: "GONAKUMBURA",
      value: 2922,
    },
    {
      label: "HALPAWALA",
      value: 3111,
    },
    {
      label: "IHALA BOPITIYA",
      value: 3679,
    },
    {
      label: "IHALA HAKAMUWA",
      value: 3700,
    },
    {
      label: "KAPUHENTHOTA",
      value: 4597,
    },
    {
      label: "KATTANGE",
      value: 4802,
    },
    {
      label: "KUTTAPITIYA",
      value: 5921,
    },
    {
      label: "LELLOPITIYA",
      value: 5976,
    },
    {
      label: "MARAPANA",
      value: 6748,
    },
    {
      label: "MAUDELLA",
      value: 6838,
    },
    {
      label: "MORATHOTA",
      value: 7345,
    },
    {
      label: "NARANGODA",
      value: 7706,
    },
    {
      label: "NIRALGAMA",
      value: 8014,
    },
    {
      label: "PAHALA BOPITIYA",
      value: 8248,
    },
    {
      label: "PAHALA HAKAMUWA",
      value: 8272,
    },
    {
      label: "PANAWENNA",
      value: 8644,
    },
    {
      label: "PELMADULLA TOWN",
      value: 8950,
    },
    {
      label: "PELMADULLAGAMA",
      value: 8951,
    },
    {
      label: "PORONUWA",
      value: 9294,
    },
    {
      label: "POTTAKANDA",
      value: 9329,
    },
    {
      label: "RILHENA",
      value: 9802,
    },
    {
      label: "SANNASGAMA",
      value: 9964,
    },
    {
      label: "UDATHULA",
      value: 10968,
    },
    {
      label: "WARIGAMA",
      value: 11730,
    },
    {
      label: "WELIMALUWA",
      value: 11983,
    },
  ],
  "244": [
    {
      label: "ALAPALADENIYA NORTH",
      value: 179,
    },
    {
      label: "ALAPALADENIYA SOUTH",
      value: 180,
    },
    {
      label: "ALUWANA",
      value: 283,
    },
    {
      label: "AMBEWELA",
      value: 378,
    },
    {
      label: "BANAGALA EAST",
      value: 840,
    },
    {
      label: "BANAGALA WEST",
      value: 841,
    },
    {
      label: "DANGALA EAST",
      value: 1523,
    },
    {
      label: "DANGALA WEST",
      value: 1524,
    },
    {
      label: "DANKOLUWA",
      value: 1538,
    },
    {
      label: "DEHIGASPA",
      value: 1637,
    },
    {
      label: "DERANGALA",
      value: 1761,
    },
    {
      label: "DIYADAWA",
      value: 1925,
    },
    {
      label: "EDANDUKITHA EAST",
      value: 2114,
    },
    {
      label: "EDANDUKITHA WEST",
      value: 2115,
    },
    {
      label: "ELAMALDENIYA",
      value: 2185,
    },
    {
      label: "GALABADA",
      value: 2460,
    },
    {
      label: "GORAKAWELA",
      value: 2968,
    },
    {
      label: "IHALA AINAGAMA",
      value: 3665,
    },
    {
      label: "KADURUWANA",
      value: 4133,
    },
    {
      label: "KALUBOVITIYANA",
      value: 4325,
    },
    {
      label: "KIRIWELKELE NORTH",
      value: 5224,
    },
    {
      label: "KIRIWELKELE SOUTH",
      value: 5225,
    },
    {
      label: "KODIKARAGODA EAST",
      value: 5309,
    },
    {
      label: "KODIKARAGODA WEST",
      value: 5310,
    },
    {
      label: "KOSNILGODA",
      value: 5542,
    },
    {
      label: "KOTAGALA",
      value: 5560,
    },
    {
      label: "KUDAGALAHENA",
      value: 5697,
    },
    {
      label: "MAHAPOTHUVILA",
      value: 6343,
    },
    {
      label: "PARADUPALLA",
      value: 8730,
    },
    {
      label: "PITABEDDARA",
      value: 9127,
    },
    {
      label: "PUWAKBADOVITA",
      value: 9486,
    },
    {
      label: "RAMBUKANA EAST",
      value: 9598,
    },
    {
      label: "RAMBUKANA WEST",
      value: 9599,
    },
    {
      label: "SIYAMBALAGODA EAST",
      value: 10197,
    },
    {
      label: "SIYAMBALAGODA WEST",
      value: 10200,
    },
    {
      label: "THALAPEKUMBURA",
      value: 10383,
    },
    {
      label: "THENNAHENA",
      value: 10599,
    },
    {
      label: "WANASINKANDA",
      value: 11661,
    },
    {
      label: "WATHURAKUMBURA",
      value: 11781,
    },
    {
      label: "WELIWA",
      value: 12007,
    },
  ],
  "245": [
    {
      label: "AHUGODA EAST",
      value: 79,
    },
    {
      label: "AHUGODA MEDA",
      value: 80,
    },
    {
      label: "AHUGODA WEST",
      value: 81,
    },
    {
      label: "AMUNUGAMA",
      value: 418,
    },
    {
      label: "ARAGODA",
      value: 539,
    },
    {
      label: "ARAMBEPOLA",
      value: 567,
    },
    {
      label: "BANDAWA",
      value: 869,
    },
    {
      label: "BARAHELAGAMUWA",
      value: 882,
    },
    {
      label: "BEVILGAMUWA EAST",
      value: 1073,
    },
    {
      label: "BEVILGAMUWA WEST",
      value: 1074,
    },
    {
      label: "DELGOLLA",
      value: 1685,
    },
    {
      label: "DEMBEGODA",
      value: 1736,
    },
    {
      label: "DENAGAMUWA",
      value: 1745,
    },
    {
      label: "DEWALEPOLA",
      value: 1803,
    },
    {
      label: "DEWATE GEDARA",
      value: 1809,
    },
    {
      label: "DIVULKUMBURA",
      value: 1910,
    },
    {
      label: "EGALLA",
      value: 2123,
    },
    {
      label: "EMBALAWATTA",
      value: 2268,
    },
    {
      label: "EPAKANDA",
      value: 2300,
    },
    {
      label: "GALBADAGAMA",
      value: 2525,
    },
    {
      label: "GALLENAMULLA",
      value: 2586,
    },
    {
      label: "GAMMANA",
      value: 2656,
    },
    {
      label: "GANEGODA NORTH",
      value: 2696,
    },
    {
      label: "GANEGODA SOUTH",
      value: 2697,
    },
    {
      label: "GINNERIYA",
      value: 2812,
    },
    {
      label: "GODAWELA",
      value: 2873,
    },
    {
      label: "GODIGAMUWA",
      value: 2877,
    },
    {
      label: "GOROKGAHAPOTTA",
      value: 2969,
    },
    {
      label: "HABARAWA",
      value: 3040,
    },
    {
      label: "HANDUGALA",
      value: 3161,
    },
    {
      label: "HATHALISPAHUWA",
      value: 3238,
    },
    {
      label: "HIRIPATHWELLA",
      value: 3473,
    },
    {
      label: "HONDELLA",
      value: 3518,
    },
    {
      label: "IHALA UDAPOLA",
      value: 3785,
    },
    {
      label: "IMBULANA",
      value: 3873,
    },
    {
      label: "IMBULGODA",
      value: 3881,
    },
    {
      label: "KALUHENDIWALA",
      value: 4346,
    },
    {
      label: "KEBILITTAWALA",
      value: 4908,
    },
    {
      label: "KENDAHENA",
      value: 5003,
    },
    {
      label: "KOLAMBALAMULLA",
      value: 5372,
    },
    {
      label: "KOLLURA",
      value: 5401,
    },
    {
      label: "KORADOLUWA",
      value: 5497,
    },
    {
      label: "KOTAMBULE",
      value: 5579,
    },
    {
      label: "KULEEPITIYA NORTH",
      value: 5760,
    },
    {
      label: "KULEEPITIYA SOUTH",
      value: 5761,
    },
    {
      label: "KUREEPOTTA",
      value: 5852,
    },
    {
      label: "LIHINIGIRIYA",
      value: 6004,
    },
    {
      label: "MADALAGAMA",
      value: 6085,
    },
    {
      label: "MAHAPITIYA",
      value: 6342,
    },
    {
      label: "MANDAWELA",
      value: 6648,
    },
    {
      label: "MANINGAMUWA",
      value: 6673,
    },
    {
      label: "MAWATHAGAMA",
      value: 6877,
    },
    {
      label: "MAWATTA",
      value: 6888,
    },
    {
      label: "MEDALASSA KALUGAMUWA",
      value: 6957,
    },
    {
      label: "MEDDALANDA",
      value: 6977,
    },
    {
      label: "MORUGAMA",
      value: 7370,
    },
    {
      label: "NAHAKOTAMADA",
      value: 7589,
    },
    {
      label: "ORULIYADDA",
      value: 8174,
    },
    {
      label: "PANALIYA NORTH",
      value: 8614,
    },
    {
      label: "PANALIYA SOUTH",
      value: 8615,
    },
    {
      label: "PARABEVILA",
      value: 8728,
    },
    {
      label: "POLAMBE",
      value: 9200,
    },
    {
      label: "POLGAHAWELA NORTH",
      value: 9211,
    },
    {
      label: "POLGAHAWELA SOUTH",
      value: 9212,
    },
    {
      label: "POLPITIYA NORTH",
      value: 9239,
    },
    {
      label: "POLPITIYA SOUTH",
      value: 9240,
    },
    {
      label: "POOJAPITIYA",
      value: 9264,
    },
    {
      label: "POTHUHERA EAST",
      value: 9308,
    },
    {
      label: "POTHUHERA WEST",
      value: 9309,
    },
    {
      label: "RATHMALGODA",
      value: 9722,
    },
    {
      label: "SERAPEES WATTA",
      value: 10064,
    },
    {
      label: "SUNILAGAMA",
      value: 10299,
    },
    {
      label: "TENPANA",
      value: 10321,
    },
    {
      label: "THALAWATTEGEDARA",
      value: 10406,
    },
    {
      label: "THIYADOR WATTA",
      value: 10721,
    },
    {
      label: "UDAPOLA",
      value: 10955,
    },
    {
      label: "UDUKEDENIYA",
      value: 11023,
    },
    {
      label: "WADAKADA",
      value: 11498,
    },
    {
      label: "WALAGAMMULLA",
      value: 11563,
    },
    {
      label: "WEERAGALA",
      value: 11842,
    },
    {
      label: "WELIGODAPITIYA",
      value: 11956,
    },
    {
      label: "WELLEWA",
      value: 12044,
    },
    {
      label: "YATIHENA",
      value: 12294,
    },
    {
      label: "YOGAMUWAKANDA",
      value: 12323,
    },
  ],
  "246": [
    {
      label: "AGARE",
      value: 66,
    },
    {
      label: "AMBAGASWEWA",
      value: 327,
    },
    {
      label: "AMUNAKOLE",
      value: 415,
    },
    {
      label: "ANGULGAMUWA",
      value: 491,
    },
    {
      label: "BADDEGAMA",
      value: 722,
    },
    {
      label: "BAKMEEWEWA",
      value: 757,
    },
    {
      label: "BALAGOLLA",
      value: 767,
    },
    {
      label: "BOGOLLA",
      value: 1143,
    },
    {
      label: "BULNEWA",
      value: 1304,
    },
    {
      label: "DAGAMA",
      value: 1409,
    },
    {
      label: "DAMBE",
      value: 1466,
    },
    {
      label: "DEEGAMA",
      value: 1591,
    },
    {
      label: "DEKADUWALA",
      value: 1657,
    },
    {
      label: "DEMBATAGALA",
      value: 1733,
    },
    {
      label: "DORAWERUWA",
      value: 2045,
    },
    {
      label: "ELAGAMUWA",
      value: 2179,
    },
    {
      label: "GALAGEDARAGAMA",
      value: 2481,
    },
    {
      label: "GALAHITIYAGAMA",
      value: 2494,
    },
    {
      label: "GALGIRIYAWA",
      value: 2553,
    },
    {
      label: "GALKETIYAGAMA",
      value: 2568,
    },
    {
      label: "GALTENWEWA",
      value: 2623,
    },
    {
      label: "HAKWATUNAWA",
      value: 3066,
    },
    {
      label: "HALMILLAWEWA",
      value: 3098,
    },
    {
      label: "HANGAMUWA",
      value: 3168,
    },
    {
      label: "HATHIGAMUWA",
      value: 3247,
    },
    {
      label: "HATHPOKUNA",
      value: 3252,
    },
    {
      label: "HENAWA",
      value: 3339,
    },
    {
      label: "HERATHGAMA",
      value: 3368,
    },
    {
      label: "IHALA THELAMBIYAWA",
      value: 3782,
    },
    {
      label: "IHALA THIMBIRIYAWA",
      value: 3784,
    },
    {
      label: "IMIHAMINEGAMA",
      value: 3889,
    },
    {
      label: "INDIGOLLA",
      value: 3897,
    },
    {
      label: "KALAWANA",
      value: 4256,
    },
    {
      label: "KALUGALLA",
      value: 4339,
    },
    {
      label: "KAMBUWATAWANA",
      value: 4410,
    },
    {
      label: "KERALANKADAWALA",
      value: 5030,
    },
    {
      label: "KIRIBAMUNEGAMA",
      value: 5142,
    },
    {
      label: "KORUWAWA",
      value: 5519,
    },
    {
      label: "KOSGAHA ELA",
      value: 5524,
    },
    {
      label: "KUMBUKKADAWALA",
      value: 5804,
    },
    {
      label: "KUMBUKULAWA",
      value: 5811,
    },
    {
      label: "MADAGALLA",
      value: 6077,
    },
    {
      label: "MADAHAPOLA",
      value: 6079,
    },
    {
      label: "MAELIYA NORTH",
      value: 6183,
    },
    {
      label: "MAELIYA SOUTH",
      value: 6184,
    },
    {
      label: "MAKULPOTHA",
      value: 6471,
    },
    {
      label: "MAL ASNA",
      value: 6479,
    },
    {
      label: "MAMUNUGAMA",
      value: 6612,
    },
    {
      label: "MEDAKANDA",
      value: 6951,
    },
    {
      label: "MEEGASWEWA",
      value: 7043,
    },
    {
      label: "MORAGOLLAGAMA",
      value: 7323,
    },
    {
      label: "MOROTTA",
      value: 7368,
    },
    {
      label: "NIKAWEHERA",
      value: 7958,
    },
    {
      label: "NIKAWEWA",
      value: 7962,
    },
    {
      label: "NIYANDAWANAYA",
      value: 8047,
    },
    {
      label: "PALLEKELE",
      value: 8509,
    },
    {
      label: "PARAGAHA ELA",
      value: 8735,
    },
    {
      label: "PATHIRENNEGAMA",
      value: 8855,
    },
    {
      label: "POHORAWATTA",
      value: 9191,
    },
    {
      label: "POLGAHANGODA",
      value: 9208,
    },
    {
      label: "POLPITHIGAMA",
      value: 9236,
    },
    {
      label: "PONNILAWA",
      value: 9258,
    },
    {
      label: "POTHUVILA",
      value: 9322,
    },
    {
      label: "RAMBE",
      value: 9593,
    },
    {
      label: "RAWA ELA",
      value: 9756,
    },
    {
      label: "REKEVULA",
      value: 9775,
    },
    {
      label: "SALIYAGAMA",
      value: 9877,
    },
    {
      label: "SERUGASYAYA",
      value: 10068,
    },
    {
      label: "SIYAMBALANGAMUWA",
      value: 10205,
    },
    {
      label: "SIYAMBALAWEWA",
      value: 10215,
    },
    {
      label: "THALADAPITIYA",
      value: 10334,
    },
    {
      label: "THALAKOLAWEWA",
      value: 10361,
    },
    {
      label: "THALAMALGAMA",
      value: 10368,
    },
    {
      label: "THALAWA",
      value: 10395,
    },
    {
      label: "THALPATHWEWA",
      value: 10438,
    },
    {
      label: "THALWEHERA",
      value: 10453,
    },
    {
      label: "THAMBUWA",
      value: 10488,
    },
    {
      label: "UTHURUWELLA",
      value: 11260,
    },
    {
      label: "WANDURESSA",
      value: 11675,
    },
    {
      label: "WELANGOLLA",
      value: 11918,
    },
    {
      label: "WELIDALLA",
      value: 11946,
    },
    {
      label: "WELIPITIYA",
      value: 11996,
    },
  ],
  "248": [
    {
      label: "ALANKERNI",
      value: 174,
    },
    {
      label: "CHEDDIAKURICHCHI",
      value: 1352,
    },
    {
      label: "GNANIMADAM",
      value: 2836,
    },
    {
      label: "IRANAITIVU",
      value: 3959,
    },
    {
      label: "JAYAPURAM NORTH",
      value: 4030,
    },
    {
      label: "JAYAPURAM SOUTH",
      value: 4031,
    },
    {
      label: "KARIYALAINAGAPADUVAN",
      value: 4735,
    },
    {
      label: "KIRANCHI",
      value: 5131,
    },
    {
      label: "KOLLAKURUCHCHI",
      value: 5395,
    },
    {
      label: "KOWTHARIMUNAI",
      value: 5659,
    },
    {
      label: "MADDUVILNADU EAST",
      value: 6122,
    },
    {
      label: "MADDUVILNADU WEST",
      value: 6123,
    },
    {
      label: "MULANKAVIL",
      value: 7424,
    },
    {
      label: "NACHCHIKKUDA",
      value: 7557,
    },
    {
      label: "NALLUR",
      value: 7637,
    },
    {
      label: "PALLAVARAYANKADDU",
      value: 8480,
    },
    {
      label: "PALLIKUDA",
      value: 8533,
    },
    {
      label: "PARAMANKIRAI",
      value: 8764,
    },
    {
      label: "PONNAVELI",
      value: 9256,
    },
  ],
  "252": [
    {
      label: "ATTAVILLUWA",
      value: 689,
    },
    {
      label: "ATTAVILLUWA CENTRAL",
      value: 690,
    },
    {
      label: "BODHIRAJAPURA",
      value: 1118,
    },
    {
      label: "KALADIYA",
      value: 4221,
    },
    {
      label: "MANALTHIVU",
      value: 6622,
    },
    {
      label: "MARIKKAR STREET",
      value: 6766,
    },
    {
      label: "MULLIPURAM",
      value: 7448,
    },
    {
      label: "NELUMWEWA",
      value: 7904,
    },
    {
      label: "PALAVIYA",
      value: 8448,
    },
    {
      label: "PARANA JUMMA PALLI",
      value: 8771,
    },
    {
      label: "PERIYAPALLI KUDIYIRUPPUWA",
      value: 9027,
    },
    {
      label: "POTTUVILLUWA",
      value: 9334,
    },
    {
      label: "PUDUKUDIRIPPUWA",
      value: 9346,
    },
    {
      label: "PUTTALAM EAST",
      value: 9476,
    },
    {
      label: "PUTTALAM NORTH",
      value: 9477,
    },
    {
      label: "PUTTALAM SOUTH",
      value: 9478,
    },
    {
      label: "RATHMALYAYA",
      value: 9731,
    },
    {
      label: "SELLA KANDAL",
      value: 10023,
    },
    {
      label: "SENAKUDIRIPPUWA",
      value: 10039,
    },
    {
      label: "SIRAMBIADIYA",
      value: 10138,
    },
    {
      label: "THAMMENNAGAMA",
      value: 10490,
    },
    {
      label: "THILADIYA",
      value: 10645,
    },
  ],
  "253": [
    {
      label: "04 1/2 KANUWA",
      value: 1,
    },
    {
      label: "ANGAMUWA",
      value: 486,
    },
    {
      label: "GEMUNUPURA",
      value: 2776,
    },
    {
      label: "KALUNDEGAMA",
      value: 4355,
    },
    {
      label: "MAHA THIMBIRIKALLA",
      value: 6256,
    },
    {
      label: "NAIGALA",
      value: 7593,
    },
    {
      label: "PANTHIYAWA",
      value: 8717,
    },
    {
      label: "RANDENIGAMA",
      value: 9636,
    },
    {
      label: "SIRIMAPURA",
      value: 10152,
    },
    {
      label: "THISSAPURA",
      value: 10704,
    },
    {
      label: "THUMBULLEGAMA",
      value: 10790,
    },
    {
      label: "TRACK 03",
      value: 10844,
    },
    {
      label: "TRACK 04",
      value: 10845,
    },
    {
      label: "TRACK 07",
      value: 10848,
    },
    {
      label: "TRACK 09 - 10",
      value: 10849,
    },
    {
      label: "TRACK 11",
      value: 10850,
    },
    {
      label: "TRACK 13,18",
      value: 10852,
    },
    {
      label: "TRACK 15",
      value: 10853,
    },
    {
      label: "TRACK 16,17",
      value: 10854,
    },
    {
      label: "VEHERAGALA",
      value: 11366,
    },
    {
      label: "YAYA 12",
      value: 12316,
    },
  ],
  "254": [
    {
      label: "AMBAGAHAWEWA",
      value: 316,
    },
    {
      label: "BALAHONDAWEWA",
      value: 772,
    },
    {
      label: "DIVIYAUDABENDAWEWA",
      value: 1896,
    },
    {
      label: "GALKANDEGAMA",
      value: 2563,
    },
    {
      label: "GALWEERAGOLLEWA",
      value: 2641,
    },
    {
      label: "GONEWA",
      value: 2946,
    },
    {
      label: "IHALA KOLONGASWEWA",
      value: 3728,
    },
    {
      label: "IKIRIGOLLEWA",
      value: 3826,
    },
    {
      label: "KADURUGASDAMANA",
      value: 4124,
    },
    {
      label: "KALLANCHIYA",
      value: 4275,
    },
    {
      label: "KAPIRIGGAMA",
      value: 4577,
    },
    {
      label: "KATUKELIYAWA",
      value: 4839,
    },
    {
      label: "KATUPULIYANKULAMA",
      value: 4860,
    },
    {
      label: "KEDEWA",
      value: 4916,
    },
    {
      label: "KOLIBENDAWEWA",
      value: 5389,
    },
    {
      label: "KONAKUMBUKWEWA",
      value: 5426,
    },
    {
      label: "KUDAGAMA",
      value: 5699,
    },
    {
      label: "MAHAKANADARAWA R. B. TRACK 01",
      value: 6304,
    },
    {
      label: "MAHAKANADARAWA R. B. TRACK 02",
      value: 6305,
    },
    {
      label: "MAHAWEWA",
      value: 6392,
    },
    {
      label: "MEDAGAMA",
      value: 6933,
    },
    {
      label: "MEEMALWEWA",
      value: 7050,
    },
    {
      label: "NABADAGASWEWA",
      value: 7548,
    },
    {
      label: "PALLANKULAMA",
      value: 8473,
    },
    {
      label: "PANDUKABHAYAPURA",
      value: 8669,
    },
    {
      label: "PEENAGAMA",
      value: 8909,
    },
    {
      label: "PIHIMBIYAGOLLEWA",
      value: 9070,
    },
    {
      label: "RAMBEWA",
      value: 9594,
    },
    {
      label: "ROTAWEWA",
      value: 9822,
    },
    {
      label: "SANDAMALGAMA",
      value: 9931,
    },
    {
      label: "SANGILIKANADARAWA",
      value: 9959,
    },
    {
      label: "SIYAMBALAGASWEWA",
      value: 10195,
    },
    {
      label: "THALGAHAWEWA",
      value: 10416,
    },
    {
      label: "THAMARAHALMILLEWA",
      value: 10454,
    },
    {
      label: "WAHAMALGOLLEWA",
      value: 11543,
    },
    {
      label: "WAHAMALGOLLEWA TRACK 03",
      value: 11544,
    },
    {
      label: "WAHAMALGOLLEWA TRACK 05",
      value: 11545,
    },
    {
      label: "WEWELKETIYA",
      value: 12163,
    },
  ],
  "255": [
    {
      label: "ALUGOLLA",
      value: 237,
    },
    {
      label: "AMBUWANGALA",
      value: 384,
    },
    {
      label: "BATHAMBURE",
      value: 942,
    },
    {
      label: "BEDDAWALA",
      value: 983,
    },
    {
      label: "BELIGODAPITIYA",
      value: 1016,
    },
    {
      label: "DALUGGALA",
      value: 1426,
    },
    {
      label: "DAMBULLA",
      value: 1475,
    },
    {
      label: "DEEGANA KANDA",
      value: 1592,
    },
    {
      label: "DELDENIYA",
      value: 1664,
    },
    {
      label: "DELIWALA",
      value: 1690,
    },
    {
      label: "DIYASUNNATHA",
      value: 1945,
    },
    {
      label: "DOMBEMADA EAST",
      value: 2012,
    },
    {
      label: "DOMBEMADA WEST",
      value: 2013,
    },
    {
      label: "DUNUKEWALA",
      value: 2085,
    },
    {
      label: "ERIYAGOLLA",
      value: 2344,
    },
    {
      label: "ERIYAWA",
      value: 2346,
    },
    {
      label: "GABBALA NORTH",
      value: 2446,
    },
    {
      label: "GABBALA SOUTH",
      value: 2447,
    },
    {
      label: "GALPALA",
      value: 2605,
    },
    {
      label: "GANGODA",
      value: 2715,
    },
    {
      label: "GODAGANDENIYA",
      value: 2843,
    },
    {
      label: "HALAGIRIYA",
      value: 3067,
    },
    {
      label: "HALPITIYA",
      value: 3114,
    },
    {
      label: "HALWATTA",
      value: 3128,
    },
    {
      label: "HANGAWELA",
      value: 3174,
    },
    {
      label: "HEENABOWA",
      value: 3280,
    },
    {
      label: "HENEPOLA",
      value: 3355,
    },
    {
      label: "HEWADIWELA",
      value: 3386,
    },
    {
      label: "HIRIWADUNNA",
      value: 3482,
    },
    {
      label: "HURIMALUWA",
      value: 3627,
    },
    {
      label: "IHALA WALPOLA",
      value: 3798,
    },
    {
      label: "IMBULGASDENIYA",
      value: 3879,
    },
    {
      label: "KADIGAMUWA",
      value: 4101,
    },
    {
      label: "KANSALAGAMUWA",
      value: 4553,
    },
    {
      label: "KANUGOLLA",
      value: 4565,
    },
    {
      label: "KAVUDAULLA",
      value: 4884,
    },
    {
      label: "KEHELWATHUGODA",
      value: 4948,
    },
    {
      label: "KEMPITIYA",
      value: 4998,
    },
    {
      label: "KIRIWALLAPITIYA",
      value: 5210,
    },
    {
      label: "KIRIWANDENIYA",
      value: 5217,
    },
    {
      label: "KIVULPANA",
      value: 5281,
    },
    {
      label: "KOOREMPOLA",
      value: 5487,
    },
    {
      label: "KOSSINNA",
      value: 5546,
    },
    {
      label: "KOTAGAMA",
      value: 5562,
    },
    {
      label: "KOTAWELLA",
      value: 5592,
    },
    {
      label: "KOTTANA WATTA",
      value: 5614,
    },
    {
      label: "KUDAGAMA NORTH",
      value: 5700,
    },
    {
      label: "KUDAGAMA SOUTH",
      value: 5701,
    },
    {
      label: "KUMBALDIWELA",
      value: 5782,
    },
    {
      label: "KUMBALOLUWA",
      value: 5787,
    },
    {
      label: "MADAWALA",
      value: 6103,
    },
    {
      label: "MAHAGAMA",
      value: 6283,
    },
    {
      label: "MALIGATHENNA",
      value: 6536,
    },
    {
      label: "MANGALAGAMA",
      value: 6662,
    },
    {
      label: "MARUKWATHURA",
      value: 6771,
    },
    {
      label: "MEDAGALADENIYA",
      value: 6932,
    },
    {
      label: "MEEDUMA",
      value: 7013,
    },
    {
      label: "MINWANA",
      value: 7214,
    },
    {
      label: "MOLAGODA",
      value: 7261,
    },
    {
      label: "MOTTAPPULIYA",
      value: 7375,
    },
    {
      label: "MUWAPITIYA",
      value: 7541,
    },
    {
      label: "NARANBEDDA EAST",
      value: 7693,
    },
    {
      label: "NARANBEDDA WEST",
      value: 7694,
    },
    {
      label: "NATTAMBURA",
      value: 7751,
    },
    {
      label: "NETIYAPANA",
      value: 7919,
    },
    {
      label: "PADAVIGAMPALA",
      value: 8212,
    },
    {
      label: "PARAPE NOTH",
      value: 8791,
    },
    {
      label: "PARAPE SOUTH",
      value: 8792,
    },
    {
      label: "PATTAMPITIYA",
      value: 8861,
    },
    {
      label: "PINNAWALA",
      value: 9113,
    },
    {
      label: "PITIYEGAMA",
      value: 9162,
    },
    {
      label: "PUWAKMOTE",
      value: 9497,
    },
    {
      label: "RAMBUKKANA TOWN",
      value: 9606,
    },
    {
      label: "THALDEWA",
      value: 10408,
    },
    {
      label: "THISMALPOLA",
      value: 10697,
    },
    {
      label: "UDAGALADENIYA",
      value: 10890,
    },
    {
      label: "UDANVITA",
      value: 10950,
    },
    {
      label: "UDUGAMA",
      value: 11009,
    },
    {
      label: "UDUGAMA GONDEWALA",
      value: 11012,
    },
    {
      label: "WADUWADENIYA",
      value: 11523,
    },
    {
      label: "WAHAWA",
      value: 11550,
    },
    {
      label: "WALALGODA",
      value: 11578,
    },
    {
      label: "WALGAMA",
      value: 11613,
    },
    {
      label: "WARAGODA",
      value: 11702,
    },
    {
      label: "WELIGAMUWA",
      value: 11952,
    },
    {
      label: "WERELLAPATHA",
      value: 12110,
    },
    {
      label: "YATAGAMA",
      value: 12269,
    },
    {
      label: "YATIWALDENIYA",
      value: 12301,
    },
    {
      label: "YODHAGAMA",
      value: 12320,
    },
  ],
  "256": [
    {
      label: "ABOKKAGAMA",
      value: 19,
    },
    {
      label: "AGARA UDA",
      value: 64,
    },
    {
      label: "AMBAGAMMANA",
      value: 318,
    },
    {
      label: "AMBALE",
      value: 351,
    },
    {
      label: "DIVULLEWA",
      value: 1913,
    },
    {
      label: "GALPANAWA",
      value: 2607,
    },
    {
      label: "HALAMBE",
      value: 3068,
    },
    {
      label: "KADIGAWA TRACK 1",
      value: 4105,
    },
    {
      label: "KADIGAWA TRACK 3",
      value: 4106,
    },
    {
      label: "KALLANCHIYA",
      value: 4275,
    },
    {
      label: "KANAGULLEWA",
      value: 4425,
    },
    {
      label: "KANUKETIYA",
      value: 4568,
    },
    {
      label: "KONGASWALAYAGAMA",
      value: 5454,
    },
    {
      label: "KORALAYAGAMA",
      value: 5507,
    },
    {
      label: "KURUVIKULAMA",
      value: 5910,
    },
    {
      label: "LEEKOLAPITIYA",
      value: 5970,
    },
    {
      label: "MAGURANKADAWALA",
      value: 6213,
    },
    {
      label: "MALPANAWA",
      value: 6569,
    },
    {
      label: "NAMMUWAWA",
      value: 7663,
    },
    {
      label: "NIRALIYADDA",
      value: 8015,
    },
    {
      label: "OTTUKULAMA",
      value: 8187,
    },
    {
      label: "RAMBEWA",
      value: 9594,
    },
    {
      label: "RASNAYAKAPURA",
      value: 9695,
    },
    {
      label: "SUBHASINGHAPURA",
      value: 10274,
    },
    {
      label: "THALAKOLAWEWA",
      value: 10361,
    },
    {
      label: "UDAHENEGAMA",
      value: 10909,
    },
    {
      label: "UDUNOWA",
      value: 11031,
    },
    {
      label: "UNAGOLLA",
      value: 11151,
    },
  ],
  "257": [
    {
      label: "ATTIDIYA NORTH",
      value: 692,
    },
    {
      label: "ATTIDIYA SOUTH",
      value: 693,
    },
    {
      label: "KANDAWALA",
      value: 4485,
    },
    {
      label: "KATUKURUNDUWATTA",
      value: 4850,
    },
    {
      label: "KAWDANA WEST",
      value: 4900,
    },
    {
      label: "MOUNT LAVINIA",
      value: 7379,
    },
    {
      label: "PIRIWENA",
      value: 9125,
    },
    {
      label: "RATHMALANA EAST",
      value: 9712,
    },
    {
      label: "RATHMALANA WEST",
      value: 9713,
    },
    {
      label: "VIHARA",
      value: 11417,
    },
    {
      label: "WATARAPPALA",
      value: 11757,
    },
    {
      label: "WATHUMULLA",
      value: 11776,
    },
    {
      label: "WEDIKANDA",
      value: 11834,
    },
  ],
  "258": [
    {
      label: "ALUPOLA",
      value: 239,
    },
    {
      label: "AMUNUTHENNA",
      value: 428,
    },
    {
      label: "AMUTHAGODA",
      value: 432,
    },
    {
      label: "ANGAMMANA",
      value: 480,
    },
    {
      label: "BALAKOTUNNA",
      value: 775,
    },
    {
      label: "BAMBARABOTUWA",
      value: 804,
    },
    {
      label: "BANAGODA",
      value: 842,
    },
    {
      label: "BATEWELA",
      value: 938,
    },
    {
      label: "BATUGEDARA",
      value: 955,
    },
    {
      label: "DEHENAKANDA",
      value: 1619,
    },
    {
      label: "DEWALEGAWA",
      value: 1802,
    },
    {
      label: "DUREKKANDA",
      value: 2096,
    },
    {
      label: "EGODA MALWALA",
      value: 2129,
    },
    {
      label: "ELLEGEDARA",
      value: 2240,
    },
    {
      label: "EMBULDENIYA",
      value: 2286,
    },
    {
      label: "ETHOYA",
      value: 2412,
    },
    {
      label: "GALABADA",
      value: 2460,
    },
    {
      label: "GALLELLA",
      value: 2583,
    },
    {
      label: "GILEEMALE NORTH",
      value: 2794,
    },
    {
      label: "GILEEMALE SOUTH",
      value: 2795,
    },
    {
      label: "GODIGAMUWA",
      value: 2877,
    },
    {
      label: "GURUBEVILAGAMA",
      value: 2999,
    },
    {
      label: "GURULUWANA",
      value: 3016,
    },
    {
      label: "HAPUGASTHENNA",
      value: 3197,
    },
    {
      label: "HEENBERENDUWA",
      value: 3289,
    },
    {
      label: "HETTIKANDA",
      value: 3376,
    },
    {
      label: "KAHANGAMA",
      value: 4161,
    },
    {
      label: "KEMPANAWATTA",
      value: 4996,
    },
    {
      label: "KETALIYAMPALLA",
      value: 5064,
    },
    {
      label: "KETAWALA",
      value: 5069,
    },
    {
      label: "KOLANDAGALA",
      value: 5378,
    },
    {
      label: "KOSPELAVINNA",
      value: 5544,
    },
    {
      label: "KUDAWA",
      value: 5730,
    },
    {
      label: "MAHAWALA",
      value: 6373,
    },
    {
      label: "MALANGAMA",
      value: 6496,
    },
    {
      label: "MALWALA",
      value: 6579,
    },
    {
      label: "MAPALANA",
      value: 6709,
    },
    {
      label: "MEEHITIYA",
      value: 7048,
    },
    {
      label: "MIHINDUGAMA",
      value: 7168,
    },
    {
      label: "MUDDUWA",
      value: 7392,
    },
    {
      label: "MUDDUWA EAST",
      value: 7393,
    },
    {
      label: "MUWAGAMA",
      value: 7535,
    },
    {
      label: "NEW TOWN",
      value: 7933,
    },
    {
      label: "PAGODA",
      value: 8231,
    },
    {
      label: "RATHGAMA",
      value: 9705,
    },
    {
      label: "RATNAPURA TOWN",
      value: 9749,
    },
    {
      label: "RATNAPURA TOWN NORTH",
      value: 9750,
    },
    {
      label: "RATNAPURA TOWN WEST",
      value: 9751,
    },
    {
      label: "SAMAGIPURA",
      value: 9885,
    },
    {
      label: "SIRIPAGAMA",
      value: 10154,
    },
    {
      label: "SRI PALABADDALA",
      value: 10255,
    },
    {
      label: "THIRIWANKETIYA",
      value: 10674,
    },
    {
      label: "WERALUPE",
      value: 12097,
    },
  ],
  "259": [
    {
      label: "ALAKOLAMADA",
      value: 167,
    },
    {
      label: "ALWATTA",
      value: 292,
    },
    {
      label: "BAMBARAKIRIELLA",
      value: 817,
    },
    {
      label: "BANDARAPOLA",
      value: 858,
    },
    {
      label: "BODHIKOTUWA",
      value: 1113,
    },
    {
      label: "BOGAMBARA",
      value: 1134,
    },
    {
      label: "DAMBAGOLLA",
      value: 1458,
    },
    {
      label: "DANKANDA",
      value: 1536,
    },
    {
      label: "DOMBAGODA",
      value: 2008,
    },
    {
      label: "EPITAMULLA",
      value: 2304,
    },
    {
      label: "GALEKOLUWA",
      value: 2536,
    },
    {
      label: "GANSARAPOLA",
      value: 2739,
    },
    {
      label: "GODAPALA",
      value: 2858,
    },
    {
      label: "HANGARANKANDA",
      value: 3170,
    },
    {
      label: "HORAGOLLA",
      value: 3537,
    },
    {
      label: "IHALA OWALA",
      value: 3771,
    },
    {
      label: "IKIRIGOLLA",
      value: 3825,
    },
    {
      label: "KAIKAWALA",
      value: 4199,
    },
    {
      label: "KAINEKA",
      value: 4202,
    },
    {
      label: "KANDENUWARA EAST",
      value: 4502,
    },
    {
      label: "KANDENUWARA WEST",
      value: 4503,
    },
    {
      label: "KIRIMETIYA",
      value: 5175,
    },
    {
      label: "KOSWANA NORTH",
      value: 5550,
    },
    {
      label: "KOSWANA SOUTH",
      value: 5551,
    },
    {
      label: "KURUWAWA",
      value: 5914,
    },
    {
      label: "LONVIL",
      value: 6039,
    },
    {
      label: "MADAKUMBURA",
      value: 6083,
    },
    {
      label: "MARADURAWALA",
      value: 6725,
    },
    {
      label: "MAUSSAGOLLA",
      value: 6841,
    },
    {
      label: "MEDA WERAGAMA",
      value: 6928,
    },
    {
      label: "MEDAWATTA",
      value: 6969,
    },
    {
      label: "MUWANDENIYA",
      value: 7536,
    },
    {
      label: "NELUWAKANDA",
      value: 7908,
    },
    {
      label: "NIKAWELLA",
      value: 7959,
    },
    {
      label: "PAHALA HAPUVIDA",
      value: 8275,
    },
    {
      label: "PAHALA OWALA",
      value: 8340,
    },
    {
      label: "PALLE WERAGAMA",
      value: 8491,
    },
    {
      label: "PALLEGAMA",
      value: 8497,
    },
    {
      label: "PALLEYAYA",
      value: 8529,
    },
    {
      label: "PITAKANDA",
      value: 9129,
    },
    {
      label: "POLWATTAKANDA",
      value: 9250,
    },
    {
      label: "PUNCHISELUWAKANDA",
      value: 9411,
    },
    {
      label: "RATTOTA",
      value: 9754,
    },
    {
      label: "THAMBALAGALA",
      value: 10466,
    },
    {
      label: "UDA HAPUVIDA",
      value: 10867,
    },
    {
      label: "UDA WERAGAMA",
      value: 10879,
    },
    {
      label: "UDAGAMA",
      value: 10891,
    },
    {
      label: "ULPOTHAPITIYA",
      value: 11137,
    },
    {
      label: "VIHARAGAMA",
      value: 11423,
    },
    {
      label: "WANARANIYA",
      value: 11659,
    },
    {
      label: "WARAPITIYA",
      value: 11726,
    },
    {
      label: "WELANGAHAWATTA",
      value: 11916,
    },
    {
      label: "WERALUGASTHENNA",
      value: 12095,
    },
    {
      label: "WETASYAYA",
      value: 12120,
    },
  ],
  "260": [
    {
      label: "ADAPOLA",
      value: 28,
    },
    {
      label: "AKKARA PANAHA",
      value: 104,
    },
    {
      label: "ALAKOLAMADA",
      value: 167,
    },
    {
      label: "AMBAKOTE",
      value: 335,
    },
    {
      label: "BALAGALA",
      value: 763,
    },
    {
      label: "BALAWATTALA",
      value: 793,
    },
    {
      label: "BAMBARAGAHAKANDA",
      value: 807,
    },
    {
      label: "BOGAMUWA",
      value: 1136,
    },
    {
      label: "BULUWALA",
      value: 1315,
    },
    {
      label: "BULUWALAKANDA",
      value: 1316,
    },
    {
      label: "DEDURUNADEEGAMA",
      value: 1585,
    },
    {
      label: "DELVITA",
      value: 1710,
    },
    {
      label: "DINIMINIYATHENNA",
      value: 1884,
    },
    {
      label: "DODANGAHAKOTUWA",
      value: 1972,
    },
    {
      label: "DODANGASLANDA",
      value: 1973,
    },
    {
      label: "DORANEPOLA",
      value: 2037,
    },
    {
      label: "DUNUMAWA",
      value: 2089,
    },
    {
      label: "EREPOLAKANDA",
      value: 2334,
    },
    {
      label: "ERIYAGOLLA",
      value: 2344,
    },
    {
      label: "GABADAGAMA",
      value: 2443,
    },
    {
      label: "GALBINDINAELA",
      value: 2526,
    },
    {
      label: "GALLAWA",
      value: 2576,
    },
    {
      label: "GANEGODA",
      value: 2695,
    },
    {
      label: "GINIHIRIYA",
      value: 2801,
    },
    {
      label: "GONADENIYA",
      value: 2901,
    },
    {
      label: "GONAMADA",
      value: 2925,
    },
    {
      label: "GONIGODA",
      value: 2950,
    },
    {
      label: "GOPALLAWA",
      value: 2960,
    },
    {
      label: "GORAKA ELA",
      value: 2962,
    },
    {
      label: "GURUMADA",
      value: 3017,
    },
    {
      label: "HADIRAMULLA",
      value: 3048,
    },
    {
      label: "HALIYAMULLA",
      value: 3084,
    },
    {
      label: "HEWENPOLA",
      value: 3398,
    },
    {
      label: "HUNUGALKADULLA",
      value: 3601,
    },
    {
      label: "HUNUPOLAGEDARA",
      value: 3615,
    },
    {
      label: "IHALA UDATTAPOLA",
      value: 3786,
    },
    {
      label: "IKIRIWATTA",
      value: 3827,
    },
    {
      label: "JAKADUWA",
      value: 3995,
    },
    {
      label: "JANKURE",
      value: 4014,
    },
    {
      label: "KAHAHENA",
      value: 4149,
    },
    {
      label: "KALUGAHATHENNA",
      value: 4332,
    },
    {
      label: "KANADENIYAWALA",
      value: 4418,
    },
    {
      label: "KANDEGEDARA",
      value: 4492,
    },
    {
      label: "KANDEPOLA",
      value: 4505,
    },
    {
      label: "KANDUPALATHA",
      value: 4522,
    },
    {
      label: "KANUGOLLA",
      value: 4565,
    },
    {
      label: "KARANDAGOLLA",
      value: 4683,
    },
    {
      label: "KATIYAWA",
      value: 4785,
    },
    {
      label: "KAVISIGAMUWA",
      value: 4882,
    },
    {
      label: "KELEMULLA",
      value: 4979,
    },
    {
      label: "KIRIBATHGALLA",
      value: 5144,
    },
    {
      label: "KITHULGOLLA",
      value: 5250,
    },
    {
      label: "KITHULWALA",
      value: 5256,
    },
    {
      label: "KONGODA",
      value: 5456,
    },
    {
      label: "KOROSSA",
      value: 5518,
    },
    {
      label: "KOSGOLLA",
      value: 5531,
    },
    {
      label: "KOSGOLLEPOLA",
      value: 5532,
    },
    {
      label: "KOSWATTA",
      value: 5552,
    },
    {
      label: "KOTHALAWALAGAMA",
      value: 5597,
    },
    {
      label: "KOTUHENA",
      value: 5636,
    },
    {
      label: "KURUKEPPITIYA",
      value: 5865,
    },
    {
      label: "KUTHURUMAHANA",
      value: 5920,
    },
    {
      label: "LIHINIWEHERA",
      value: 6006,
    },
    {
      label: "MADITHIYAWA",
      value: 6138,
    },
    {
      label: "MAHAWELA",
      value: 6384,
    },
    {
      label: "MALBE",
      value: 6511,
    },
    {
      label: "MASPOTHA",
      value: 6792,
    },
    {
      label: "MEDAGAMA",
      value: 6933,
    },
    {
      label: "MEDAKANDA",
      value: 6951,
    },
    {
      label: "MEELIYADDA",
      value: 7049,
    },
    {
      label: "MEEPITIYA",
      value: 7060,
    },
    {
      label: "METIYAMPOTHA",
      value: 7149,
    },
    {
      label: "MINIRANGAMA",
      value: 7203,
    },
    {
      label: "MIRISSALA",
      value: 7229,
    },
    {
      label: "MORATHIHA",
      value: 7344,
    },
    {
      label: "NAHALLA",
      value: 7590,
    },
    {
      label: "NELAULLA",
      value: 7879,
    },
    {
      label: "NITHULPITIYA",
      value: 8026,
    },
    {
      label: "NIYANGAMA",
      value: 8048,
    },
    {
      label: "NUWARAYAYA",
      value: 8099,
    },
    {
      label: "OGODAPOLA",
      value: 8113,
    },
    {
      label: "OLAGAMA",
      value: 8124,
    },
    {
      label: "PALIELLA",
      value: 8460,
    },
    {
      label: "PALLEHOROMBUWA",
      value: 8505,
    },
    {
      label: "PALLEKANDA",
      value: 8507,
    },
    {
      label: "PALLEYAYA",
      value: 8529,
    },
    {
      label: "PANAGAMUWA",
      value: 8601,
    },
    {
      label: "PARAGASWEWA",
      value: 8746,
    },
    {
      label: "PARAGODA",
      value: 8747,
    },
    {
      label: "PIHIMBUWA",
      value: 9071,
    },
    {
      label: "PITIYEGEDARA",
      value: 9163,
    },
    {
      label: "POLWATTA",
      value: 9245,
    },
    {
      label: "PUSSELIKANDA",
      value: 9455,
    },
    {
      label: "PUSSELLA",
      value: 9456,
    },
    {
      label: "RAMBADAGALLA",
      value: 9589,
    },
    {
      label: "RAMBUKANDANA",
      value: 9600,
    },
    {
      label: "RANTHETIKANDA",
      value: 9684,
    },
    {
      label: "RATHVITA",
      value: 9746,
    },
    {
      label: "REDDAGODA",
      value: 9768,
    },
    {
      label: "RIDEEGAMA",
      value: 9787,
    },
    {
      label: "SIYAMBALANGAMUWA",
      value: 10205,
    },
    {
      label: "THALGASPITIYA",
      value: 10425,
    },
    {
      label: "THELAMBUGALLA",
      value: 10565,
    },
    {
      label: "UDAHENA",
      value: 10908,
    },
    {
      label: "UDAHOROMBUWA",
      value: 10913,
    },
    {
      label: "UDAKENDAWALA",
      value: 10923,
    },
    {
      label: "UDATTAPOLA PAHALA",
      value: 10969,
    },
    {
      label: "WANDURESSA",
      value: 11675,
    },
    {
      label: "WARAKAWEHERA",
      value: 11723,
    },
    {
      label: "WEGAMA",
      value: 11876,
    },
    {
      label: "WELAGEDARA",
      value: 11908,
    },
    {
      label: "WELIKANDA",
      value: 11972,
    },
    {
      label: "WEWEGEDARA",
      value: 12152,
    },
  ],
  "261": [
    {
      label: "ABHAYAPURA",
      value: 16,
    },
    {
      label: "ALUKETIYAWA",
      value: 238,
    },
    {
      label: "ANDAULPATHA",
      value: 461,
    },
    {
      label: "ARALUPITIYA",
      value: 559,
    },
    {
      label: "ARAWA",
      value: 589,
    },
    {
      label: "ARAWATTA",
      value: 592,
    },
    {
      label: "BUBULA",
      value: 1277,
    },
    {
      label: "DEEKIRIGOLLA",
      value: 1598,
    },
    {
      label: "DEHIGAMA",
      value: 1633,
    },
    {
      label: "DIKKENDAYAYA",
      value: 1861,
    },
    {
      label: "DIKYAYA",
      value: 1872,
    },
    {
      label: "DIYAKOMBALA",
      value: 1936,
    },
    {
      label: "EKIRIYANKUMBURA",
      value: 2166,
    },
    {
      label: "GAMAKUMBURA NORTH",
      value: 2649,
    },
    {
      label: "GAMAKUMBURA SOUTH",
      value: 2650,
    },
    {
      label: "IKIRIYAGODA",
      value: 3829,
    },
    {
      label: "KANDEGAMA",
      value: 4491,
    },
    {
      label: "KANDUBEDDA",
      value: 4513,
    },
    {
      label: "KESELPOTHA NORTH",
      value: 5045,
    },
    {
      label: "KESELPOTHA SOUTH",
      value: 5046,
    },
    {
      label: "KOTATHALAWA",
      value: 5585,
    },
    {
      label: "KUDALUNUKA",
      value: 5715,
    },
    {
      label: "KURALEWELA",
      value: 5841,
    },
    {
      label: "KURUVITHENNA",
      value: 5912,
    },
    {
      label: "MAHAGAMA",
      value: 6283,
    },
    {
      label: "MAHALUNUKA",
      value: 6325,
    },
    {
      label: "MORANA",
      value: 7337,
    },
    {
      label: "NAGADEEPA",
      value: 7566,
    },
    {
      label: "ORUBENDIWEWA",
      value: 8171,
    },
    {
      label: "PAHALAOYAGAMA",
      value: 8381,
    },
    {
      label: "PETHIYAGODA",
      value: 9051,
    },
    {
      label: "PINNAGOLLA",
      value: 9106,
    },
    {
      label: "RIDEEMALIYADDA NORTH",
      value: 9790,
    },
    {
      label: "RIDEEMALIYADDA SOUTH",
      value: 9791,
    },
    {
      label: "RITIGAHAARAWA",
      value: 9806,
    },
    {
      label: "SANGABOPURA",
      value: 9945,
    },
    {
      label: "SENEVIGAMA",
      value: 10054,
    },
    {
      label: "SERANA",
      value: 10062,
    },
    {
      label: "URANIYA",
      value: 11203,
    },
    {
      label: "UVA GEMUNUPURA",
      value: 11266,
    },
    {
      label: "UVA THISSAPURA",
      value: 11269,
    },
    {
      label: "WELAMPELE",
      value: 11913,
    },
  ],
  "262": [
    {
      label: "AMITHIRIGALA NORTH",
      value: 387,
    },
    {
      label: "AMITHIRIGALA SOUTH",
      value: 388,
    },
    {
      label: "BATUVITA",
      value: 961,
    },
    {
      label: "BOPETTA",
      value: 1200,
    },
    {
      label: "DALUWALANA",
      value: 1439,
    },
    {
      label: "DANNORUWA",
      value: 1543,
    },
    {
      label: "DORANUWA",
      value: 2038,
    },
    {
      label: "DUNUMALA",
      value: 2088,
    },
    {
      label: "GALAPITAMADA",
      value: 2510,
    },
    {
      label: "GONAGALA NORTH",
      value: 2908,
    },
    {
      label: "GONAGALA WEST",
      value: 2909,
    },
    {
      label: "GONARAMBA",
      value: 2933,
    },
    {
      label: "IMBULANA",
      value: 3873,
    },
    {
      label: "INDURANA",
      value: 3914,
    },
    {
      label: "KADIGAMUWA",
      value: 4101,
    },
    {
      label: "KANNATTOTA",
      value: 4547,
    },
    {
      label: "LENAGALA",
      value: 5984,
    },
    {
      label: "LEWANGAMA NORTH",
      value: 5993,
    },
    {
      label: "LEWANGAMA SOUTH",
      value: 5994,
    },
    {
      label: "MAHADENIYA",
      value: 6271,
    },
    {
      label: "MAHAKANDA",
      value: 6309,
    },
    {
      label: "MAHALLA",
      value: 6324,
    },
    {
      label: "MAPITIGAMA",
      value: 6716,
    },
    {
      label: "MEDAGODA",
      value: 6947,
    },
    {
      label: "MORALIYA",
      value: 7335,
    },
    {
      label: "MORATHOTA",
      value: 7345,
    },
    {
      label: "MORAWATTA",
      value: 7357,
    },
    {
      label: "NIVUNHELLA",
      value: 8038,
    },
    {
      label: "PALLE KANUGALA",
      value: 8488,
    },
    {
      label: "PETHANGODA",
      value: 9043,
    },
    {
      label: "PURANPOTTA",
      value: 9442,
    },
    {
      label: "RUWANWELLA",
      value: 9848,
    },
    {
      label: "SIYAMBALAWALA",
      value: 10212,
    },
    {
      label: "UDAKANUGALA",
      value: 10920,
    },
    {
      label: "WAHAKULA",
      value: 11538,
    },
    {
      label: "WAHARAKA",
      value: 11546,
    },
    {
      label: "WALGAMPATHA",
      value: 11621,
    },
    {
      label: "WENDALA",
      value: 12055,
    },
  ],
  "265": [
    {
      label: "AGRA PEDESA",
      value: 69,
    },
    {
      label: "AKARAVITA",
      value: 95,
    },
    {
      label: "ALUTH AMBALAMA",
      value: 242,
    },
    {
      label: "ARADHANA KANDA",
      value: 537,
    },
    {
      label: "AVISSAWELLA",
      value: 705,
    },
    {
      label: "BOLLATHAWA",
      value: 1166,
    },
    {
      label: "BRANDIGAMPALA",
      value: 1271,
    },
    {
      label: "DIDDENIYA NORTH",
      value: 1832,
    },
    {
      label: "DIDDENIYA SOUTH",
      value: 1833,
    },
    {
      label: "DIGANA",
      value: 1836,
    },
    {
      label: "EGODAGAMA",
      value: 2137,
    },
    {
      label: "ELAMALAWALA",
      value: 2184,
    },
    {
      label: "ESWATTA NORTH",
      value: 2365,
    },
    {
      label: "ESWATTA SOUTH",
      value: 2366,
    },
    {
      label: "GIRA IMBULA",
      value: 2816,
    },
    {
      label: "HANWELLA TOWN",
      value: 3183,
    },
    {
      label: "HINGURALA",
      value: 3445,
    },
    {
      label: "IHALA HANWELLA NORTH",
      value: 3702,
    },
    {
      label: "IHALA HANWELLA SOUTH",
      value: 3703,
    },
    {
      label: "IHALA KOSGAMA NORTH",
      value: 3732,
    },
    {
      label: "IHALA KOSGAMA SOUTH",
      value: 3733,
    },
    {
      label: "ILUKOVITA",
      value: 3854,
    },
    {
      label: "JAYAWEERAGODA",
      value: 4042,
    },
    {
      label: "KADUGODA NORTH",
      value: 4119,
    },
    {
      label: "KADUGODA SOUTH",
      value: 4120,
    },
    {
      label: "KAHAHENA",
      value: 4149,
    },
    {
      label: "KAHATAPITIYA",
      value: 4174,
    },
    {
      label: "KALU AGGALA",
      value: 4318,
    },
    {
      label: "KANAMPELLA EAST",
      value: 4431,
    },
    {
      label: "KANAMPELLA WEST",
      value: 4432,
    },
    {
      label: "KIRIWANDALA NORTH",
      value: 5215,
    },
    {
      label: "KIRIWANDALA SOUTH",
      value: 5216,
    },
    {
      label: "KOODALUVILA",
      value: 5474,
    },
    {
      label: "KOSWATTA",
      value: 5552,
    },
    {
      label: "KOTAHERA",
      value: 5571,
    },
    {
      label: "KUDAGAMA",
      value: 5699,
    },
    {
      label: "KUDAKANDA",
      value: 5714,
    },
    {
      label: "LAHIRUGAMA",
      value: 5938,
    },
    {
      label: "MAMBULA",
      value: 6599,
    },
    {
      label: "MANAKADA",
      value: 6617,
    },
    {
      label: "MAWALGAMA",
      value: 6869,
    },
    {
      label: "MAWATHAGAMA EAST",
      value: 6878,
    },
    {
      label: "MAWATHAGAMA WEST",
      value: 6881,
    },
    {
      label: "MIRISWATTA",
      value: 7232,
    },
    {
      label: "MURUTHAGAMA",
      value: 7494,
    },
    {
      label: "NELUWATTUDUWA",
      value: 7911,
    },
    {
      label: "NIRIPOLA",
      value: 8017,
    },
    {
      label: "PAGNGNAGULA",
      value: 8230,
    },
    {
      label: "PAHALA HANWELLA",
      value: 8274,
    },
    {
      label: "PAHALA KOSGAMA EAST",
      value: 8306,
    },
    {
      label: "PAHALA KOSGAMA WEST",
      value: 8307,
    },
    {
      label: "PAHATHGAMA",
      value: 8392,
    },
    {
      label: "PELPOLA",
      value: 8955,
    },
    {
      label: "PUWAKPITIYA",
      value: 9498,
    },
    {
      label: "PUWAKPITIYA SOUTH",
      value: 9499,
    },
    {
      label: "SALAWA",
      value: 9875,
    },
    {
      label: "SEETHAGAMA",
      value: 10010,
    },
    {
      label: "SEETHAWAKA",
      value: 10012,
    },
    {
      label: "SUDUWELLA",
      value: 10285,
    },
    {
      label: "THAWALGODA",
      value: 10555,
    },
    {
      label: "THUNNANA EAST",
      value: 10817,
    },
    {
      label: "THUNNANA WEST",
      value: 10818,
    },
    {
      label: "UKWATTA",
      value: 11109,
    },
    {
      label: "WALAWWATTA",
      value: 11607,
    },
    {
      label: "WELIKANNA",
      value: 11973,
    },
    {
      label: "WERAGOLLA NORTH",
      value: 12081,
    },
    {
      label: "WERAGOLLA SOUTH",
      value: 12082,
    },
    {
      label: "WERALUPITIYA",
      value: 12098,
    },
  ],
  "266": [
    {
      label: "ARIYAMANKERNI",
      value: 605,
    },
    {
      label: "DEHIWATTA",
      value: 1651,
    },
    {
      label: "KAVANTHISSAPURA",
      value: 4881,
    },
    {
      label: "LINGAPURAM",
      value: 6020,
    },
    {
      label: "MAHAWELIGAMA",
      value: 6390,
    },
    {
      label: "MAHINDAPURA",
      value: 6411,
    },
    {
      label: "NAVATKERNIKADU",
      value: 7766,
    },
    {
      label: "NEELAPOLA",
      value: 7859,
    },
    {
      label: "SAMAGIPURA",
      value: 9885,
    },
    {
      label: "SERUNUWARA",
      value: 10071,
    },
    {
      label: "SERUVILA",
      value: 10075,
    },
    {
      label: "SIRIMANGALAPURA",
      value: 10151,
    },
    {
      label: "SIVAPURAM",
      value: 10180,
    },
    {
      label: "SOMAPURA",
      value: 10225,
    },
    {
      label: "SUMEDHANKARAPURA",
      value: 10293,
    },
    {
      label: "THANGANAGAR",
      value: 10510,
    },
  ],
  "267": [
    {
      label: "BAHIRAWA",
      value: 747,
    },
    {
      label: "HABARALUWEWA",
      value: 3036,
    },
    {
      label: "HABARATTAWELA",
      value: 3039,
    },
    {
      label: "HABARUGALA",
      value: 3042,
    },
    {
      label: "INDIKOLAPELESSA",
      value: 3899,
    },
    {
      label: "KATUPILAGAMA",
      value: 4856,
    },
    {
      label: "KIRI IBBANWEWA",
      value: 5139,
    },
    {
      label: "MAHAGAMA",
      value: 6283,
    },
    {
      label: "MUTHUMINIGAMA",
      value: 7519,
    },
    {
      label: "NUGEGALAYAYA",
      value: 8075,
    },
    {
      label: "PUNCHIWEWA",
      value: 9412,
    },
    {
      label: "SAMAGIPURA",
      value: 9885,
    },
    {
      label: "SEVANAGALA",
      value: 10081,
    },
    {
      label: "WELIARA",
      value: 11944,
    },
  ],
  "268": [
    {
      label: "AMBAGAHAPITIYA",
      value: 311,
    },
    {
      label: "BARAWAYA",
      value: 893,
    },
    {
      label: "BERALIYAPOLA",
      value: 1061,
    },
    {
      label: "BUDDAMA",
      value: 1281,
    },
    {
      label: "DOMBAGAHAWELA",
      value: 2002,
    },
    {
      label: "ETHIMALE",
      value: 2402,
    },
    {
      label: "ETHIMALE COLONY",
      value: 2403,
    },
    {
      label: "GALAMUNA",
      value: 2503,
    },
    {
      label: "GEMUNUPURA",
      value: 2776,
    },
    {
      label: "GOVINDUPURA",
      value: 2978,
    },
    {
      label: "GURUHELA",
      value: 3006,
    },
    {
      label: "HELAMULLA",
      value: 3323,
    },
    {
      label: "INDIGASELLA",
      value: 3893,
    },
    {
      label: "KALUGOLLAYAYA",
      value: 4345,
    },
    {
      label: "KARAMBAGODA",
      value: 4659,
    },
    {
      label: "KIMBULAWELA",
      value: 5104,
    },
    {
      label: "KIVULEYAYA",
      value: 5279,
    },
    {
      label: "KODAYANA",
      value: 5298,
    },
    {
      label: "KOORAGAMMANA",
      value: 5485,
    },
    {
      label: "KOTAGODA",
      value: 5568,
    },
    {
      label: "KOTIYAGALA",
      value: 5608,
    },
    {
      label: "KOTIYAGODA",
      value: 5609,
    },
    {
      label: "LIYANGOLLA",
      value: 6030,
    },
    {
      label: "MADUGAMA",
      value: 6149,
    },
    {
      label: "MAHA KALUGOLLA",
      value: 6238,
    },
    {
      label: "MANABHARANA",
      value: 6614,
    },
    {
      label: "MEEYAGALA",
      value: 7088,
    },
    {
      label: "MINIPURA",
      value: 7201,
    },
    {
      label: "MUTHUKANDIYA",
      value: 7517,
    },
    {
      label: "NAPE",
      value: 7686,
    },
    {
      label: "NEWGALA",
      value: 7936,
    },
    {
      label: "NUGAGAHA KIVULA",
      value: 8062,
    },
    {
      label: "PAHATHA ARAWA",
      value: 8391,
    },
    {
      label: "PALLEGAMA",
      value: 8497,
    },
    {
      label: "PALLEWELA",
      value: 8527,
    },
    {
      label: "PERAKUMPURA",
      value: 8977,
    },
    {
      label: "RUHUNU DANAWWA",
      value: 9830,
    },
    {
      label: "SAMANALA BEDDA",
      value: 9890,
    },
    {
      label: "SIRIPURA",
      value: 10155,
    },
    {
      label: "SIYAMBALANDUWA",
      value: 10204,
    },
    {
      label: "SRI WIJITHAPURA",
      value: 10259,
    },
    {
      label: "THISSAPURA",
      value: 10704,
    },
    {
      label: "VILAOYA",
      value: 11441,
    },
    {
      label: "WARAGAMA",
      value: 11699,
    },
    {
      label: "WATTEGAMA",
      value: 11799,
    },
    {
      label: "WERAGODA",
      value: 12078,
    },
    {
      label: "WIJAYAPURA",
      value: 12183,
    },
    {
      label: "YAKKADURAWA",
      value: 12236,
    },
  ],
  "269": [
    {
      label: "ALIOLU ARA",
      value: 214,
    },
    {
      label: "ANDARAWEWA",
      value: 460,
    },
    {
      label: "BEDDEWEWA",
      value: 989,
    },
    {
      label: "BEDIGANTHOTA",
      value: 994,
    },
    {
      label: "HABARATTAWALA",
      value: 3038,
    },
    {
      label: "HATHPORUWA",
      value: 3253,
    },
    {
      label: "IHALA KUMBUKWEWA",
      value: 3741,
    },
    {
      label: "MAHAGALWEWA",
      value: 6282,
    },
    {
      label: "MAHAPELESSA",
      value: 6341,
    },
    {
      label: "MAHAWELIKADA ARA",
      value: 6391,
    },
    {
      label: "MEEGAHA JADURA",
      value: 7017,
    },
    {
      label: "NAMADAGASWEWA",
      value: 7643,
    },
    {
      label: "RANMUDUWEWA",
      value: 9664,
    },
    {
      label: "SAMAJASEWAPURA",
      value: 9886,
    },
    {
      label: "SOORIYAWEWA TOWN",
      value: 10241,
    },
    {
      label: "SURAVIRUGAMA",
      value: 10300,
    },
    {
      label: "VIHARAGALA",
      value: 11422,
    },
    {
      label: "WEDIWEWA",
      value: 11836,
    },
    {
      label: "WEERIYAGAMA",
      value: 11873,
    },
    {
      label: "WELIWEWA",
      value: 12016,
    },
    {
      label: "WENIWEL ARA",
      value: 12056,
    },
  ],
  "270": [
    {
      label: "AMBAGASDOWA",
      value: 324,
    },
    {
      label: "ANGODA",
      value: 488,
    },
    {
      label: "BOLIYADDA",
      value: 1162,
    },
    {
      label: "BUDUGEKANDA",
      value: 1285,
    },
    {
      label: "DIKPITIYA",
      value: 1868,
    },
    {
      label: "EGODAWELA",
      value: 2144,
    },
    {
      label: "IDAMEGAMA",
      value: 3641,
    },
    {
      label: "IDAMEPANGUWA",
      value: 3642,
    },
    {
      label: "KANDEGEDARA TOWN",
      value: 4495,
    },
    {
      label: "KETAKELLAGAMA",
      value: 5062,
    },
    {
      label: "KIRIORUWA",
      value: 5203,
    },
    {
      label: "KITHULWATTAGAMA",
      value: 5260,
    },
    {
      label: "KOHOVILA",
      value: 5335,
    },
    {
      label: "KOSGOLLA",
      value: 5531,
    },
    {
      label: "KUTTIYAGOLLA",
      value: 5925,
    },
    {
      label: "LEDGERWATTA",
      value: 5968,
    },
    {
      label: "MORAGOLLA",
      value: 7321,
    },
    {
      label: "PALLEKANDA",
      value: 8507,
    },
    {
      label: "PATHANEGEDARA",
      value: 8835,
    },
    {
      label: "PUSSELLAKANDA",
      value: 9457,
    },
    {
      label: "PUSSELLAWA",
      value: 9458,
    },
    {
      label: "RIDEEPANA",
      value: 9792,
    },
    {
      label: "SORANATHOTA",
      value: 10244,
    },
    {
      label: "WATTEKELE",
      value: 11805,
    },
    {
      label: "YATILELLAGAMA",
      value: 12295,
    },
  ],
  "271": [
    {
      label: "ALUTHGODA",
      value: 268,
    },
    {
      label: "ANDUPELENA",
      value: 476,
    },
    {
      label: "DANKETIYA",
      value: 1537,
    },
    {
      label: "ETHGALMULLA",
      value: 2400,
    },
    {
      label: "GODAWANAGODA",
      value: 2870,
    },
    {
      label: "GOTAIMBARAGAMA",
      value: 2972,
    },
    {
      label: "GURUPOKUNA",
      value: 3021,
    },
    {
      label: "IHALAGODA",
      value: 3815,
    },
    {
      label: "INDIPOKUNAGODA NORTH",
      value: 3903,
    },
    {
      label: "INDIPOKUNAGODA SOUTH",
      value: 3904,
    },
    {
      label: "KADIRAGODA",
      value: 4108,
    },
    {
      label: "KADURUPOKUNA EAST",
      value: 4129,
    },
    {
      label: "KADURUPOKUNA NORTH",
      value: 4130,
    },
    {
      label: "KADURUPOKUNA SOUTH",
      value: 4131,
    },
    {
      label: "KADURUPOKUNA WEST",
      value: 4132,
    },
    {
      label: "KAHANDAMODARA",
      value: 4158,
    },
    {
      label: "KAHANDAWA",
      value: 4159,
    },
    {
      label: "KATTAKADUWA NORTH",
      value: 4798,
    },
    {
      label: "KATTAKADUWA SOUTH",
      value: 4799,
    },
    {
      label: "KOTUWEGODA",
      value: 5641,
    },
    {
      label: "KUDAWELLA CENTRAL",
      value: 5731,
    },
    {
      label: "KUDAWELLA EAST",
      value: 5732,
    },
    {
      label: "KUDAWELLA NORTH",
      value: 5733,
    },
    {
      label: "KUDAWELLA SOUTH",
      value: 5734,
    },
    {
      label: "KUDAWELLA WEST",
      value: 5735,
    },
    {
      label: "MAHAWELA",
      value: 6384,
    },
    {
      label: "MARAKOLLIYA",
      value: 6738,
    },
    {
      label: "MAWELLA NORTH",
      value: 6894,
    },
    {
      label: "MAWELLA SOUTH",
      value: 6895,
    },
    {
      label: "MEDAGAMA",
      value: 6933,
    },
    {
      label: "MEDAKETIYA",
      value: 6954,
    },
    {
      label: "MEDILLA",
      value: 6995,
    },
    {
      label: "MORAKETI ARA EAST",
      value: 7331,
    },
    {
      label: "MORAKETI ARA WEST",
      value: 7332,
    },
    {
      label: "NAKULUGAMUWA SOUTH",
      value: 7619,
    },
    {
      label: "NALAGAMA EAST",
      value: 7622,
    },
    {
      label: "NALAGAMA WEST",
      value: 7623,
    },
    {
      label: "NETOLPITIYA NORTH",
      value: 7920,
    },
    {
      label: "NETOLPITIYA SOUTH",
      value: 7921,
    },
    {
      label: "NIDAHASGAMA EAST",
      value: 7938,
    },
    {
      label: "NIDAHASGAMA WEST",
      value: 7939,
    },
    {
      label: "PAHAJJAWA",
      value: 8234,
    },
    {
      label: "PALATHUDUWA",
      value: 8443,
    },
    {
      label: "PALLIKKUDAWA RURAL",
      value: 8530,
    },
    {
      label: "PALLIKKUDAWA URBAN",
      value: 8531,
    },
    {
      label: "PATTIYAPOLA EAST",
      value: 8887,
    },
    {
      label: "PATTIYAPOLA SOUTH",
      value: 8888,
    },
    {
      label: "PATTIYAPOLA WEST",
      value: 8889,
    },
    {
      label: "POLOMMARUWA NORTH",
      value: 9230,
    },
    {
      label: "POLOMMARUWA SOUTH",
      value: 9231,
    },
    {
      label: "RANNA EAST",
      value: 9667,
    },
    {
      label: "RANNA WEST",
      value: 9668,
    },
    {
      label: "REKAWA EAST",
      value: 9773,
    },
    {
      label: "REKAWA WEST",
      value: 9774,
    },
    {
      label: "SEENIMODARA EAST",
      value: 9999,
    },
    {
      label: "SEENIMODARA WEST",
      value: 10000,
    },
    {
      label: "SIYAMBALAGODA",
      value: 10196,
    },
    {
      label: "SUDARSHANAGAMA",
      value: 10278,
    },
    {
      label: "THALAPITIYAGAMA",
      value: 10387,
    },
    {
      label: "THALUNNA",
      value: 10448,
    },
    {
      label: "THENAGAMA NORTH",
      value: 10592,
    },
    {
      label: "THENAGAMA SOUTH",
      value: 10593,
    },
    {
      label: "UDUVILAGODA",
      value: 11054,
    },
    {
      label: "UNAKOORUWA EAST",
      value: 11153,
    },
    {
      label: "UNAKOORUWA WEST",
      value: 11154,
    },
    {
      label: "VIGAMUWA",
      value: 11414,
    },
    {
      label: "VITHARANDENIYA NORTH",
      value: 11487,
    },
    {
      label: "VITHARANDENIYA SOUTH",
      value: 11488,
    },
    {
      label: "WADIGALA",
      value: 11508,
    },
    {
      label: "WAGEGODA",
      value: 11533,
    },
    {
      label: "WALGAMELIYA",
      value: 11619,
    },
    {
      label: "WELLA ODAYA",
      value: 12020,
    },
  ],
  "272": [
    {
      label: "ADHIRANIGAMA",
      value: 51,
    },
    {
      label: "DALADAPURA",
      value: 1422,
    },
    {
      label: "ELIYADIVULWEWA",
      value: 2214,
    },
    {
      label: "ENDAGALA",
      value: 2292,
    },
    {
      label: "EPPAWALA",
      value: 2307,
    },
    {
      label: "GALMADUWA",
      value: 2594,
    },
    {
      label: "GALWADUWAGAMA",
      value: 2637,
    },
    {
      label: "HINGURUWEWA",
      value: 3452,
    },
    {
      label: "HIRIGOLLEGAMA",
      value: 3469,
    },
    {
      label: "IHALA HALMILLEWA",
      value: 3701,
    },
    {
      label: "IHALA SIYAMBALEWA",
      value: 3777,
    },
    {
      label: "IHALA THALAWA",
      value: 3780,
    },
    {
      label: "IHALAGAMA",
      value: 3810,
    },
    {
      label: "KADIGAWA",
      value: 4104,
    },
    {
      label: "KADURUGASWEWA",
      value: 4127,
    },
    {
      label: "KARAGAHAWEWA",
      value: 4614,
    },
    {
      label: "KATIYAWA TRACK 01",
      value: 4786,
    },
    {
      label: "KATIYAWA TRACK 02",
      value: 4787,
    },
    {
      label: "KATIYAWA TRACK 06",
      value: 4788,
    },
    {
      label: "KATIYAWA TRACK 09",
      value: 4789,
    },
    {
      label: "KATIYAWA TRACK 10",
      value: 4790,
    },
    {
      label: "KELEDIVULWEWA",
      value: 4976,
    },
    {
      label: "KELESIYAMBALEWA",
      value: 4984,
    },
    {
      label: "KETAKALE",
      value: 5059,
    },
    {
      label: "KIRALOGAMA",
      value: 5127,
    },
    {
      label: "KIRIAMUNUKOLE",
      value: 5140,
    },
    {
      label: "KORAKAHAWEWA",
      value: 5499,
    },
    {
      label: "KUMBUKGAHAWEWA",
      value: 5800,
    },
    {
      label: "KURUNDUWEWA",
      value: 5892,
    },
    {
      label: "MAWATHAWEWA",
      value: 6884,
    },
    {
      label: "MEDAGAMA",
      value: 6933,
    },
    {
      label: "MEDIYAWA",
      value: 7003,
    },
    {
      label: "MEEGASSEGAMA",
      value: 7041,
    },
    {
      label: "MORAGODA",
      value: 7318,
    },
    {
      label: "NALLAMUDAWA",
      value: 7632,
    },
    {
      label: "NAWA HANGURANKETHA",
      value: 7783,
    },
    {
      label: "PAHALA THALAWA",
      value: 8351,
    },
    {
      label: "PALUGASWEWA",
      value: 8569,
    },
    {
      label: "RAJJALLEGAMA",
      value: 9576,
    },
  ],
  "273": [
    {
      label: "ALUTH WEWA EAST",
      value: 255,
    },
    {
      label: "ALUTH WEWA WEST",
      value: 256,
    },
    {
      label: "AMBANGANGA",
      value: 360,
    },
    {
      label: "BENDIWEWA",
      value: 1040,
    },
    {
      label: "DAMANA GEMUNUPURA",
      value: 1445,
    },
    {
      label: "DIVULANA",
      value: 1898,
    },
    {
      label: "ETHUMALPITIYA",
      value: 2421,
    },
    {
      label: "GALLELLA",
      value: 2583,
    },
    {
      label: "GALLELLA WEST",
      value: 2584,
    },
    {
      label: "GALTHAMBARAWA",
      value: 2624,
    },
    {
      label: "GANANGOLLA",
      value: 2680,
    },
    {
      label: "KADAWALA WEWA",
      value: 4080,
    },
    {
      label: "KADURUWELA EAST",
      value: 4134,
    },
    {
      label: "KADURUWELA SOUTH",
      value: 4135,
    },
    {
      label: "KADURUWELA WEST",
      value: 4136,
    },
    {
      label: "KALAHAGALA",
      value: 4227,
    },
    {
      label: "KALINGA ELA",
      value: 4267,
    },
    {
      label: "KOTALEEYA",
      value: 5574,
    },
    {
      label: "KURUPPU JUNCTION",
      value: 5907,
    },
    {
      label: "LAKSHA UYANA",
      value: 5942,
    },
    {
      label: "MAHASEN PEDESA",
      value: 6363,
    },
    {
      label: "MAHAWELI PEDESA",
      value: 6387,
    },
    {
      label: "MANIKKAMPATTIYA",
      value: 6669,
    },
    {
      label: "MEDAMALUWA",
      value: 6959,
    },
    {
      label: "MONARATHENNA",
      value: 7277,
    },
    {
      label: "NELUMVILA",
      value: 7903,
    },
    {
      label: "NIKAWEWA",
      value: 7962,
    },
    {
      label: "NISHSHANKAMALLA PEDESA",
      value: 8019,
    },
    {
      label: "NISHSHANKAMALLAPURA",
      value: 8020,
    },
    {
      label: "ONEGAMA",
      value: 8152,
    },
    {
      label: "PALUGASDAMANA 01 ELA",
      value: 8563,
    },
    {
      label: "PALUGASDAMANA 02 ELA",
      value: 8564,
    },
    {
      label: "PALUGASDAMANA 03 ELA",
      value: 8565,
    },
    {
      label: "PALUGASDAMANA NORTH",
      value: 8566,
    },
    {
      label: "PALUGASDAMANA SOUTH",
      value: 8567,
    },
    {
      label: "PARAKRAMA SAMUDRAYA",
      value: 8758,
    },
    {
      label: "PERAKUM PEDESA",
      value: 8976,
    },
    {
      label: "POLONNARUWA TOWN",
      value: 9232,
    },
    {
      label: "POTHGUL PEDESA",
      value: 9303,
    },
    {
      label: "PUDUR",
      value: 9347,
    },
    {
      label: "PULATHISI PEDESA",
      value: 9367,
    },
    {
      label: "SAMUDRAGAMA",
      value: 9922,
    },
    {
      label: "SEVAGAMA",
      value: 10080,
    },
    {
      label: "SHANTHI PURA",
      value: 10088,
    },
    {
      label: "SINHA PURA",
      value: 10110,
    },
    {
      label: "SINHA UDAGAMA",
      value: 10111,
    },
    {
      label: "SINHARAJAPURA",
      value: 10119,
    },
    {
      label: "SIRISANGABO PEDESA",
      value: 10158,
    },
    {
      label: "THOPAWEWA",
      value: 10737,
    },
    {
      label: "UDAWELA",
      value: 10979,
    },
    {
      label: "UNAGALAVEHERA SOUTH",
      value: 11147,
    },
    {
      label: "WEERA PEDESA",
      value: 11841,
    },
    {
      label: "WEWETHENNA",
      value: 12168,
    },
    {
      label: "WIJAYABAHU PURA",
      value: 12178,
    },
    {
      label: "WIJAYARAJA PURA",
      value: 12186,
    },
  ],
  "274": [
    {
      label: "GALMETIYAWA NORTH",
      value: 2597,
    },
    {
      label: "GALMETIYAWA SOUTH",
      value: 2598,
    },
    {
      label: "KOVIL KUDIYIRUPPU",
      value: 5644,
    },
    {
      label: "MEERANAGAR",
      value: 7062,
    },
    {
      label: "MOLLIPOTHANA",
      value: 7270,
    },
    {
      label: "MOLLIPOTHANA EAST",
      value: 7271,
    },
    {
      label: "MOLLIPOTHANA NORTH",
      value: 7272,
    },
    {
      label: "PALAMPODDARU",
      value: 8422,
    },
    {
      label: "PORKURUNI",
      value: 9293,
    },
    {
      label: "PUTHUKUDIYIRIPPU",
      value: 9468,
    },
    {
      label: "SIRAJ NAGAR",
      value: 10137,
    },
    {
      label: "THAMBALAGAMUWA",
      value: 10468,
    },
  ],
  "275": [
    {
      label: "DELNEGAMA",
      value: 1701,
    },
    {
      label: "ERIYAGAMA",
      value: 2342,
    },
    {
      label: "GALVIHARAWEWA",
      value: 2633,
    },
    {
      label: "HELAMBAWEWA",
      value: 3322,
    },
    {
      label: "HUREEGASWEWA",
      value: 3620,
    },
    {
      label: "IKIRIWEWA",
      value: 3828,
    },
    {
      label: "JAYASIRIGAMA",
      value: 4034,
    },
    {
      label: "KELEGAMA",
      value: 4977,
    },
    {
      label: "KONGOLLEWA",
      value: 5462,
    },
    {
      label: "KONWEWA",
      value: 5471,
    },
    {
      label: "KUDA BELLANKADAWALA",
      value: 5665,
    },
    {
      label: "LUNUWEWA",
      value: 6055,
    },
    {
      label: "MAHA BELLANKADAWALA",
      value: 6221,
    },
    {
      label: "MAKULEWA",
      value: 6467,
    },
    {
      label: "MUDUNGODA",
      value: 7403,
    },
    {
      label: "MUSALPITIYA",
      value: 7505,
    },
    {
      label: "NALLACHCHIYA",
      value: 7630,
    },
    {
      label: "PAHALAGAMA",
      value: 8378,
    },
    {
      label: "SOLAMA",
      value: 10222,
    },
    {
      label: "THAMBUTTEGAMA",
      value: 10487,
    },
    {
      label: "THAMMENNAGAMA",
      value: 10490,
    },
    {
      label: "THAMMENNAWA",
      value: 10493,
    },
    {
      label: "THELHIRIYAWA",
      value: 10572,
    },
    {
      label: "THISPANEPURA",
      value: 10701,
    },
    {
      label: "VEHERAGALA",
      value: 11366,
    },
    {
      label: "WELIYAWA",
      value: 12018,
    },
  ],
  "276": [
    {
      label: "ALUTHWEWA",
      value: 279,
    },
    {
      label: "BODAGAMA",
      value: 1110,
    },
    {
      label: "HAMBEGAMUWA",
      value: 3139,
    },
    {
      label: "HAMBEGAMUWA COLONY",
      value: 3140,
    },
    {
      label: "KAHAKURULLAN PELESSA",
      value: 4150,
    },
    {
      label: "KANDIYAPITAWEWA",
      value: 4511,
    },
    {
      label: "KIVUL ARA",
      value: 5265,
    },
    {
      label: "KOTAVEHERA MANKADA",
      value: 5587,
    },
    {
      label: "MAHAWEWA",
      value: 6392,
    },
    {
      label: "NIKAWEWA",
      value: 7962,
    },
    {
      label: "SEENUKKUWA",
      value: 10005,
    },
    {
      label: "SITTARAMA",
      value: 10177,
    },
    {
      label: "SOORIYAARA",
      value: 10231,
    },
    {
      label: "USGALA",
      value: 11244,
    },
  ],
  "277": [
    {
      label: "BATAHENA",
      value: 916,
    },
    {
      label: "DAMMALA",
      value: 1482,
    },
    {
      label: "DAMMALA COLONY",
      value: 1483,
    },
    {
      label: "ELA IHALA",
      value: 2170,
    },
    {
      label: "ELA IHALA NORTH",
      value: 2171,
    },
    {
      label: "EPPALA",
      value: 2306,
    },
    {
      label: "GALLANDALA",
      value: 2574,
    },
    {
      label: "HABARAKADA EAST",
      value: 3030,
    },
    {
      label: "HABARAKADA WEST",
      value: 3034,
    },
    {
      label: "HALVITIGALA COLONY STEP 1",
      value: 3122,
    },
    {
      label: "HALVITIGALA STEP 2",
      value: 3123,
    },
    {
      label: "HINIDUMA NORTH",
      value: 3453,
    },
    {
      label: "HINIDUMA SOUTH",
      value: 3454,
    },
    {
      label: "HINIDUMA WEST",
      value: 3455,
    },
    {
      label: "KORALEGAMA",
      value: 5508,
    },
    {
      label: "KUDUGALPALA",
      value: 5742,
    },
    {
      label: "KUMBUREGODA",
      value: 5816,
    },
    {
      label: "MALGALLA",
      value: 6517,
    },
    {
      label: "MALHATHAWA",
      value: 6522,
    },
    {
      label: "OPATHA EAST",
      value: 8161,
    },
    {
      label: "OPATHA NORTH",
      value: 8162,
    },
    {
      label: "OPATHA SOUTH",
      value: 8163,
    },
    {
      label: "OPATHA WEST",
      value: 8164,
    },
    {
      label: "PANANGALA EAST",
      value: 8624,
    },
    {
      label: "PANANGALA NORTH",
      value: 8625,
    },
    {
      label: "PANANGALA WEST",
      value: 8626,
    },
    {
      label: "THALANGALLA",
      value: 10372,
    },
    {
      label: "THALANGALLA EAST",
      value: 10373,
    },
    {
      label: "THALANGALLA WEST",
      value: 10374,
    },
    {
      label: "THAWALAMA MOOKALANA",
      value: 10547,
    },
    {
      label: "THAWALAMA NORTH",
      value: 10548,
    },
    {
      label: "THAWALAMA SOUTH",
      value: 10549,
    },
    {
      label: "WEERAPANA EAST",
      value: 11861,
    },
    {
      label: "WEERAPANA NORTH",
      value: 11862,
    },
    {
      label: "WEERAPANA SOUTH",
      value: 11863,
    },
    {
      label: "WEERAPANA WEST",
      value: 11864,
    },
  ],
  "279": [
    {
      label: "AKKARA PANAHA",
      value: 104,
    },
    {
      label: "ATTUDAWA",
      value: 694,
    },
    {
      label: "ATTUDAWA WEST",
      value: 695,
    },
    {
      label: "BANDATTARA 1",
      value: 867,
    },
    {
      label: "BANDATTARA 2",
      value: 868,
    },
    {
      label: "BATUVITA 1",
      value: 962,
    },
    {
      label: "BATUVITA 2",
      value: 963,
    },
    {
      label: "DEMATAHETTIGODA",
      value: 1721,
    },
    {
      label: "ELAMBATHALAGODA",
      value: 2188,
    },
    {
      label: "GALBADA",
      value: 2524,
    },
    {
      label: "KAPUDOOWA",
      value: 4584,
    },
    {
      label: "KAPUDOOWA EAST",
      value: 4585,
    },
    {
      label: "KITHALAGAMA CENTRAL",
      value: 5231,
    },
    {
      label: "KITHALAGAMA EAST 1",
      value: 5232,
    },
    {
      label: "KITHALAGAMA EAST 2",
      value: 5233,
    },
    {
      label: "KITHALAGAMA EAST 3",
      value: 5234,
    },
    {
      label: "KITHALAGAMA WEST",
      value: 5235,
    },
    {
      label: "KOMANGODA 1",
      value: 5412,
    },
    {
      label: "KOMANGODA 2",
      value: 5413,
    },
    {
      label: "KOTTAWATTA",
      value: 5625,
    },
    {
      label: "MEDAUYANGODA",
      value: 6964,
    },
    {
      label: "NADUGALA 1",
      value: 7562,
    },
    {
      label: "NADUGALA 2",
      value: 7563,
    },
    {
      label: "NAIMBALA 1",
      value: 7595,
    },
    {
      label: "NAIMBALA 2",
      value: 7596,
    },
    {
      label: "NARANGALA",
      value: 7697,
    },
    {
      label: "PAHALA VITIYALA CENTRAL",
      value: 8360,
    },
    {
      label: "PAHALA VITIYALA EAST",
      value: 8361,
    },
    {
      label: "PAHALA VITIYALA WEST",
      value: 8362,
    },
    {
      label: "PALATUWA",
      value: 8445,
    },
    {
      label: "POLATHUGODA",
      value: 9202,
    },
    {
      label: "THIHAGODA",
      value: 10635,
    },
    {
      label: "THIHAGODA EAST",
      value: 10636,
    },
    {
      label: "UDUWA EAST",
      value: 11056,
    },
    {
      label: "UDUWA WEST",
      value: 11059,
    },
    {
      label: "UNELLA",
      value: 11170,
    },
    {
      label: "WATAGEDARA",
      value: 11745,
    },
    {
      label: "WATAGEDARA EAST",
      value: 11746,
    },
    {
      label: "WELLETHOTA",
      value: 12041,
    },
    {
      label: "YATIYANA",
      value: 12307,
    },
  ],
  "280": [
    {
      label: "BAMBALAPITIYA",
      value: 800,
    },
    {
      label: "BORELLA NORTH",
      value: 1237,
    },
    {
      label: "BORELLA SOUTH",
      value: 1238,
    },
    {
      label: "DEMATAGODA",
      value: 1719,
    },
    {
      label: "GOTHAMIPURA",
      value: 2973,
    },
    {
      label: "HAVELOCK TOWN",
      value: 3262,
    },
    {
      label: "KIRULA",
      value: 5228,
    },
    {
      label: "KIRULAPONE",
      value: 5229,
    },
    {
      label: "KOLLUPITIYA",
      value: 5400,
    },
    {
      label: "KUPPIYAWATTA EAST",
      value: 5836,
    },
    {
      label: "KUPPIYAWATTA WEST",
      value: 5837,
    },
    {
      label: "KURUNDUWATTA",
      value: 5891,
    },
    {
      label: "MILAGIRIYA",
      value: 7172,
    },
    {
      label: "NARAHENPITA",
      value: 7688,
    },
    {
      label: "PAMANKADA EAST",
      value: 8583,
    },
    {
      label: "PAMANKADA WEST",
      value: 8584,
    },
    {
      label: "THIMBIRIGASYAYA",
      value: 10655,
    },
    {
      label: "WANATHAMULLA",
      value: 11662,
    },
    {
      label: "WELLAWATTA NORTH",
      value: 12035,
    },
    {
      label: "WELLAWATTA SOUTH",
      value: 12036,
    },
  ],
  "281": [
    {
      label: "ALAGOLLEWA",
      value: 159,
    },
    {
      label: "ALISTHANA",
      value: 215,
    },
    {
      label: "ALUTH PUNCHIKULAMA",
      value: 249,
    },
    {
      label: "AMUNICHCHIYA",
      value: 417,
    },
    {
      label: "DAYAGAMA",
      value: 1561,
    },
    {
      label: "DEMATAWEWA",
      value: 1731,
    },
    {
      label: "ETHUNGAMA NORTH",
      value: 2423,
    },
    {
      label: "ETHUNGAMA SOUTH",
      value: 2424,
    },
    {
      label: "GALKULAMA",
      value: 2570,
    },
    {
      label: "GNANIKKULAMA",
      value: 2834,
    },
    {
      label: "IDIGAHAWEWA",
      value: 3654,
    },
    {
      label: "IHALA AMBATHALE",
      value: 3667,
    },
    {
      label: "KANDUPAGAMA",
      value: 4521,
    },
    {
      label: "KARUWALAGASWEWA",
      value: 4756,
    },
    {
      label: "KATTAMURICHCHANA",
      value: 4801,
    },
    {
      label: "KUTTIKULAMA",
      value: 5923,
    },
    {
      label: "LABUNORUWA",
      value: 5934,
    },
    {
      label: "MAHAKANUMULLA",
      value: 6312,
    },
    {
      label: "MANAKKULAMA",
      value: 6618,
    },
    {
      label: "MAWATHAWEWA",
      value: 6884,
    },
    {
      label: "MEEWELLEWA",
      value: 7085,
    },
    {
      label: "MURIYAKADAWALA",
      value: 7484,
    },
    {
      label: "PAHALA AMBATHALE",
      value: 8235,
    },
    {
      label: "PAINDIKULAMA",
      value: 8395,
    },
    {
      label: "PAIRIMADUWA",
      value: 8396,
    },
    {
      label: "PERIMIYANKULAMA",
      value: 8993,
    },
    {
      label: "PERIYAKULAMA",
      value: 9013,
    },
    {
      label: "PETHIS RAMBEWA",
      value: 9049,
    },
    {
      label: "PULIYANKULAMA",
      value: 9379,
    },
    {
      label: "SANDAPAGAMA",
      value: 9934,
    },
    {
      label: "SELESTHIMADUWA",
      value: 10022,
    },
    {
      label: "SEMBUKULAMA",
      value: 10033,
    },
    {
      label: "THIRAPPANE KADAWEEDIYA",
      value: 10668,
    },
    {
      label: "THIRAPPANEGAMA",
      value: 10669,
    },
    {
      label: "UTTIMADUWA",
      value: 11263,
    },
    {
      label: "UTTUPITIYA",
      value: 11264,
    },
    {
      label: "WALAGAMBAHUWA",
      value: 11561,
    },
    {
      label: "WANAMAL UYANA",
      value: 11657,
    },
    {
      label: "WANNAMKULAMA",
      value: 11682,
    },
    {
      label: "WANNAMMADUWA",
      value: 11683,
    },
    {
      label: "WELLAMUDAWA",
      value: 12027,
    },
  ],
  "283": [
    {
      label: "ANDARAGASYAYA",
      value: 459,
    },
    {
      label: "ANJALIGALA",
      value: 507,
    },
    {
      label: "DAMBEWELENA",
      value: 1473,
    },
    {
      label: "DEBARAWEWA",
      value: 1565,
    },
    {
      label: "EKAMUTHUGAMA",
      value: 2160,
    },
    {
      label: "ELLAGALA",
      value: 2223,
    },
    {
      label: "GANGASIRIPURA",
      value: 2713,
    },
    {
      label: "GEMUNUPURA",
      value: 2776,
    },
    {
      label: "GONAGAMUWA",
      value: 2913,
    },
    {
      label: "GOTABHAYAPURA",
      value: 2971,
    },
    {
      label: "HALMILLAWA",
      value: 3096,
    },
    {
      label: "JOOLPALLAMA",
      value: 4050,
    },
    {
      label: "KACHCHERIYAGAMA",
      value: 4068,
    },
    {
      label: "KAWANTHISSAPURA",
      value: 4894,
    },
    {
      label: "KIRINDA",
      value: 5184,
    },
    {
      label: "KONWELENA",
      value: 5470,
    },
    {
      label: "MAGAMA",
      value: 6195,
    },
    {
      label: "MAHASENPURA",
      value: 6365,
    },
    {
      label: "MAHINDAPURA",
      value: 6411,
    },
    {
      label: "MEDAWELENA",
      value: 6973,
    },
    {
      label: "MOLAKEPOOPATHANA",
      value: 7263,
    },
    {
      label: "NEDIGAMVILA",
      value: 7842,
    },
    {
      label: "PANNAGAMUWA",
      value: 8692,
    },
    {
      label: "POLGAHAWELENA",
      value: 9213,
    },
    {
      label: "RANA KELIYA",
      value: 9619,
    },
    {
      label: "RANDUNU WATTA",
      value: 9645,
    },
    {
      label: "RATHNELUMWALAYAYA",
      value: 9740,
    },
    {
      label: "ROHANAPURA",
      value: 9811,
    },
    {
      label: "RUBBERWATTA",
      value: 9827,
    },
    {
      label: "SALIYAPURA",
      value: 9879,
    },
    {
      label: "SANDAGIRIPURA",
      value: 9928,
    },
    {
      label: "SANDUNGAMA",
      value: 9941,
    },
    {
      label: "SENAPURA",
      value: 10045,
    },
    {
      label: "SHUDDHA NAGARAYA",
      value: 10096,
    },
    {
      label: "THISSAMAHARAMA",
      value: 10703,
    },
    {
      label: "THISSAPURA",
      value: 10704,
    },
    {
      label: "UDDHAKANDARA",
      value: 10997,
    },
    {
      label: "UDUVILA",
      value: 11053,
    },
    {
      label: "VIHARAMAHADEVIPURA",
      value: 11428,
    },
    {
      label: "VIJITHAPURA",
      value: 11432,
    },
    {
      label: "WEERAHELA",
      value: 11848,
    },
    {
      label: "WELIPOTHEWALA",
      value: 11999,
    },
    {
      label: "WIJAYAPURA",
      value: 12183,
    },
    {
      label: "YODHAKANDIYA",
      value: 12321,
    },
  ],
  "284": [
    {
      label: "ADUNGAMA PALKUMBURA",
      value: 57,
    },
    {
      label: "AKKARAWATTA",
      value: 136,
    },
    {
      label: "ALAWATTEGAMA",
      value: 200,
    },
    {
      label: "AMBAGAHAHENA",
      value: 307,
    },
    {
      label: "BAN ANGA",
      value: 839,
    },
    {
      label: "BARANDARA",
      value: 886,
    },
    {
      label: "BONAKOT",
      value: 1183,
    },
    {
      label: "DAMUNUGASTHENNA",
      value: 1500,
    },
    {
      label: "DEHIDENIYA",
      value: 1627,
    },
    {
      label: "DELGASYAYA",
      value: 1681,
    },
    {
      label: "DIYAPALAGODA",
      value: 1940,
    },
    {
      label: "ETAMBEGODA",
      value: 2372,
    },
    {
      label: "ETHAMULLA",
      value: 2388,
    },
    {
      label: "GALABAWA",
      value: 2465,
    },
    {
      label: "GALAGEDARA",
      value: 2473,
    },
    {
      label: "GALAGEDARA MADIGE",
      value: 2476,
    },
    {
      label: "GALAGEDARA MADIGE SOUTH",
      value: 2477,
    },
    {
      label: "GALAGEDARA WEST",
      value: 2480,
    },
    {
      label: "GALLENAWATTA",
      value: 2587,
    },
    {
      label: "GANGODAPITIYA",
      value: 2721,
    },
    {
      label: "GUNADAHA",
      value: 2993,
    },
    {
      label: "HADDAPITIYA",
      value: 3046,
    },
    {
      label: "HENEGAMA PALKUMBURA",
      value: 3351,
    },
    {
      label: "HIKGODAWALPOLA",
      value: 3415,
    },
    {
      label: "HIYADALA",
      value: 3493,
    },
    {
      label: "HIYADALA WALPOLA",
      value: 3494,
    },
    {
      label: "IDAMEGAMA",
      value: 3641,
    },
    {
      label: "KALUWANA",
      value: 4378,
    },
    {
      label: "KANDANHENA EAST",
      value: 4477,
    },
    {
      label: "KANDEKUMBURA",
      value: 4498,
    },
    {
      label: "KANNADENIYA",
      value: 4537,
    },
    {
      label: "KINIGAMA EAST",
      value: 5115,
    },
    {
      label: "KINIGAMA WEST",
      value: 5116,
    },
    {
      label: "KIRINDIWELPOLA",
      value: 5200,
    },
    {
      label: "KOBBEGALA",
      value: 5284,
    },
    {
      label: "KUMBUREGAMA",
      value: 5814,
    },
    {
      label: "KURAGAMA",
      value: 5839,
    },
    {
      label: "KURAGAMA NORTH",
      value: 5840,
    },
    {
      label: "MARAWANAGODA",
      value: 6761,
    },
    {
      label: "MEDAGODA IHALA",
      value: 6948,
    },
    {
      label: "MEDAGODA PAHALA",
      value: 6949,
    },
    {
      label: "MEEGAHAHENA",
      value: 7019,
    },
    {
      label: "MEEGAHAHENA SOUTH",
      value: 7020,
    },
    {
      label: "MINIGAMUWA",
      value: 7196,
    },
    {
      label: "MINIGAMUWA IHALA",
      value: 7197,
    },
    {
      label: "NAMALTENNA",
      value: 7648,
    },
    {
      label: "NARANWALA",
      value: 7721,
    },
    {
      label: "NIKATHENNA",
      value: 7955,
    },
    {
      label: "NIYAMBEPOLA",
      value: 8044,
    },
    {
      label: "NIYANGODA",
      value: 8049,
    },
    {
      label: "OPALLA",
      value: 8158,
    },
    {
      label: "PALLEKOTUWA",
      value: 8511,
    },
    {
      label: "PALUKOPI WATTA",
      value: 8576,
    },
    {
      label: "PARANAGAMA",
      value: 8778,
    },
    {
      label: "PAVULPAWA",
      value: 8896,
    },
    {
      label: "PETHIGEWELA",
      value: 9046,
    },
    {
      label: "POHOLIYADDA",
      value: 9187,
    },
    {
      label: "PONNILA",
      value: 9257,
    },
    {
      label: "PUBBILIYA",
      value: 9339,
    },
    {
      label: "ROKHILL",
      value: 9814,
    },
    {
      label: "THAHALPITIYA",
      value: 10330,
    },
    {
      label: "THENNEWELA",
      value: 10607,
    },
    {
      label: "UDAHENEPOLA",
      value: 10910,
    },
    {
      label: "UDALAGAMA",
      value: 10929,
    },
    {
      label: "UDAPITIYA",
      value: 10954,
    },
    {
      label: "UDUWA",
      value: 11055,
    },
    {
      label: "WETTEWA",
      value: 12127,
    },
  ],
  "285": [
    {
      label: "ALANKULAM",
      value: 177,
    },
    {
      label: "AMAITHIPURAM",
      value: 294,
    },
    {
      label: "AMBALAPERUMALKULAM",
      value: 348,
    },
    {
      label: "ANINCHIYANKULAM",
      value: 504,
    },
    {
      label: "BARATHINAGAR",
      value: 887,
    },
    {
      label: "IYANKANKULAM",
      value: 3986,
    },
    {
      label: "KALVILAN",
      value: 4392,
    },
    {
      label: "KODDAIKADDIYAKULAM",
      value: 5300,
    },
    {
      label: "MALLAVI",
      value: 6561,
    },
    {
      label: "PALAYAMURIKANDY",
      value: 8452,
    },
    {
      label: "PUGALENTHINAGAR",
      value: 9348,
    },
    {
      label: "PUTHTHUVEDDUVAN",
      value: 9463,
    },
    {
      label: "THENNIYANKULAM",
      value: 10608,
    },
    {
      label: "THERANKANDAL",
      value: 10615,
    },
    {
      label: "THIRUNAGAR",
      value: 10683,
    },
    {
      label: "THUNUKKAI",
      value: 10820,
    },
    {
      label: "UYILANKULAM",
      value: 11280,
    },
    {
      label: "YOGAPURAM CENTRE",
      value: 12324,
    },
    {
      label: "YOGAPURAM EAST",
      value: 12325,
    },
    {
      label: "YOGAPURAM WEST",
      value: 12326,
    },
  ],
  "287": [
    {
      label: "ANDIDENIYA",
      value: 467,
    },
    {
      label: "BAMBARABEDDA EAST",
      value: 802,
    },
    {
      label: "BAMBARABEDDA WEST",
      value: 803,
    },
    {
      label: "DAMBAGAHAPITIYA",
      value: 1453,
    },
    {
      label: "DENAPITIYA",
      value: 1747,
    },
    {
      label: "DEVINNEGAMA",
      value: 1772,
    },
    {
      label: "DEWAHANDIYA EAST",
      value: 1790,
    },
    {
      label: "DEWAHANDIYA WEST",
      value: 1791,
    },
    {
      label: "DUMBARAGAMA",
      value: 2059,
    },
    {
      label: "GANEGALA",
      value: 2689,
    },
    {
      label: "GANGODA",
      value: 2715,
    },
    {
      label: "GEDARAMADA",
      value: 2766,
    },
    {
      label: "GERANDIGALA",
      value: 2778,
    },
    {
      label: "GODAKUMBURA",
      value: 2850,
    },
    {
      label: "HALYALA",
      value: 3130,
    },
    {
      label: "HANWELLA",
      value: 3182,
    },
    {
      label: "HAPUKANDA EAST",
      value: 3203,
    },
    {
      label: "HAPUKANDA WEST",
      value: 3204,
    },
    {
      label: "HUNNASGIRIYA",
      value: 3598,
    },
    {
      label: "KAIKAWALA",
      value: 4199,
    },
    {
      label: "KALALGAMUWA",
      value: 4234,
    },
    {
      label: "KALAWALA",
      value: 4255,
    },
    {
      label: "KALUGALA",
      value: 4334,
    },
    {
      label: "KALUGALOYA",
      value: 4340,
    },
    {
      label: "KANDEGAMA",
      value: 4491,
    },
    {
      label: "KARAMBAKETIYA",
      value: 4660,
    },
    {
      label: "KARANDAGOLLA",
      value: 4683,
    },
    {
      label: "KEVULGAMA",
      value: 5084,
    },
    {
      label: "KIRIGANKUMBURA",
      value: 5158,
    },
    {
      label: "KIRIPATTIYA",
      value: 5205,
    },
    {
      label: "KOBONILLA",
      value: 5290,
    },
    {
      label: "KUMBUKGOLLA",
      value: 5802,
    },
    {
      label: "MADUGALLA NORTH",
      value: 6146,
    },
    {
      label: "MADUGALLA SOUTH",
      value: 6147,
    },
    {
      label: "MADUGALLA UDAGAMMEDDA",
      value: 6148,
    },
    {
      label: "MAHAWALA",
      value: 6373,
    },
    {
      label: "MEDIWAKA",
      value: 7001,
    },
    {
      label: "MEEMURE",
      value: 7053,
    },
    {
      label: "MENDIRIYA",
      value: 7114,
    },
    {
      label: "MINUWANGAMUWA",
      value: 7208,
    },
    {
      label: "MOONAMALPELESSA",
      value: 7297,
    },
    {
      label: "NAWANAGALA",
      value: 7814,
    },
    {
      label: "NUGETHENNA EAST",
      value: 8081,
    },
    {
      label: "NUGETHENNA WEST",
      value: 8082,
    },
    {
      label: "OYATHENNA",
      value: 8205,
    },
    {
      label: "PADUPOLA",
      value: 8228,
    },
    {
      label: "PALLEKANDA",
      value: 8507,
    },
    {
      label: "PALLEWELA",
      value: 8527,
    },
    {
      label: "PAMUNETHENNA",
      value: 8591,
    },
    {
      label: "PITAWALA",
      value: 9139,
    },
    {
      label: "PITAWALA UDAGAMMEDDA",
      value: 9140,
    },
    {
      label: "PITIGODA",
      value: 9148,
    },
    {
      label: "POPPITIYA",
      value: 9283,
    },
    {
      label: "PUSSEELA",
      value: 9454,
    },
    {
      label: "RAMBUKWELLA EAST",
      value: 9610,
    },
    {
      label: "RAMBUKWELLA WEST",
      value: 9611,
    },
    {
      label: "THALAGUNE",
      value: 10349,
    },
    {
      label: "UDADUMBARA",
      value: 10888,
    },
    {
      label: "UDAILUKA",
      value: 10914,
    },
    {
      label: "UDAKUMBURA",
      value: 10928,
    },
    {
      label: "UDAPITAWALA",
      value: 10953,
    },
    {
      label: "UDAWELA",
      value: 10979,
    },
    {
      label: "WADAWALAKANDA",
      value: 11502,
    },
  ],
  "288": [
    {
      label: "AMUHENA",
      value: 412,
    },
    {
      label: "AMUNUPURAYA",
      value: 427,
    },
    {
      label: "ANGAMMANA EAST",
      value: 481,
    },
    {
      label: "ANGAMMANA WEST",
      value: 482,
    },
    {
      label: "AREGODA",
      value: 593,
    },
    {
      label: "BOTHALAPITIYA",
      value: 1243,
    },
    {
      label: "BOWALA",
      value: 1256,
    },
    {
      label: "DELPITIYA",
      value: 1704,
    },
    {
      label: "DORAGALA",
      value: 2026,
    },
    {
      label: "DUNUKEULLA",
      value: 2084,
    },
    {
      label: "EGODA KALUGAMUWA",
      value: 2127,
    },
    {
      label: "GALATHA",
      value: 2514,
    },
    {
      label: "GALGEDIYAWA",
      value: 2551,
    },
    {
      label: "GAMPOLA EAST",
      value: 2674,
    },
    {
      label: "GAMPOLA WEST",
      value: 2675,
    },
    {
      label: "GODAGAMA",
      value: 2838,
    },
    {
      label: "HAPUGASPITIYA",
      value: 3195,
    },
    {
      label: "HUNUKOTUGAMA",
      value: 3607,
    },
    {
      label: "IHALAGAMA",
      value: 3810,
    },
    {
      label: "ILANGAWATTA",
      value: 3836,
    },
    {
      label: "ILLAWATHURA",
      value: 3845,
    },
    {
      label: "JAYAMALAPURA",
      value: 4022,
    },
    {
      label: "KAHATAPITIYA",
      value: 4174,
    },
    {
      label: "KALUGALHINNA",
      value: 4338,
    },
    {
      label: "KEERAPANE",
      value: 4925,
    },
    {
      label: "KEKULANDA",
      value: 4962,
    },
    {
      label: "KIRINDA",
      value: 5184,
    },
    {
      label: "KUDAMAKE",
      value: 5717,
    },
    {
      label: "KURUKUDE",
      value: 5870,
    },
    {
      label: "MAWATHURA",
      value: 6887,
    },
    {
      label: "MILLAGASPITIYA",
      value: 7178,
    },
    {
      label: "MOUNT TEMPLE",
      value: 7380,
    },
    {
      label: "NAWADEVITA",
      value: 7792,
    },
    {
      label: "PALLEGAMA",
      value: 8497,
    },
    {
      label: "PARADEKA",
      value: 8729,
    },
    {
      label: "POLKUMBURA",
      value: 9227,
    },
    {
      label: "PUSSELLAWA",
      value: 9458,
    },
    {
      label: "PUSSELLAWAGAMA",
      value: 9459,
    },
    {
      label: "RANAWALA",
      value: 9628,
    },
    {
      label: "RATHMALKADUWA",
      value: 9725,
    },
    {
      label: "SINHAPITIYA NORTH",
      value: 10116,
    },
    {
      label: "SINHAPITIYA SOUTH",
      value: 10117,
    },
    {
      label: "UDAGAMA",
      value: 10891,
    },
    {
      label: "UDOVITA",
      value: 11000,
    },
    {
      label: "UNAMBUWA",
      value: 11156,
    },
    {
      label: "WAHUGAPITIYA",
      value: 11551,
    },
    {
      label: "WANAHAPUWA",
      value: 11654,
    },
    {
      label: "WATTEHENA",
      value: 11803,
    },
    {
      label: "WELIGANGA",
      value: 11953,
    },
  ],
  "289": [
    {
      label: "AMMANAMULLA",
      value: 390,
    },
    {
      label: "BIBILADENIYA",
      value: 1077,
    },
    {
      label: "BUNNEHEPOLA",
      value: 1320,
    },
    {
      label: "DIVURUMPOLA",
      value: 1919,
    },
    {
      label: "DUMMALASOORIYA",
      value: 2067,
    },
    {
      label: "DUNAKADENIYA NORTH",
      value: 2070,
    },
    {
      label: "DUNAKADENIYA SOUTH",
      value: 2071,
    },
    {
      label: "GAHALAGASWALA",
      value: 2451,
    },
    {
      label: "HABARAWEWA",
      value: 3041,
    },
    {
      label: "HENEGEDARA",
      value: 3353,
    },
    {
      label: "HORATHEPOLA",
      value: 3559,
    },
    {
      label: "IHALA WEERAKODIYANA",
      value: 3800,
    },
    {
      label: "IHALA YAGAMWELA",
      value: 3805,
    },
    {
      label: "IHALAGAMA NORTH",
      value: 3812,
    },
    {
      label: "IHALAGAMA SOUTH",
      value: 3813,
    },
    {
      label: "ILIPPUGAMUWA",
      value: 3842,
    },
    {
      label: "KAHADENIGAMA",
      value: 4141,
    },
    {
      label: "KANDAYAYA",
      value: 4487,
    },
    {
      label: "KANUBICHCHIYA",
      value: 4562,
    },
    {
      label: "KAPPANGAMUWA",
      value: 4580,
    },
    {
      label: "KARANDAVILA",
      value: 4688,
    },
    {
      label: "KATTIMAHANA",
      value: 4819,
    },
    {
      label: "KEKUNAWALA",
      value: 4969,
    },
    {
      label: "KOOTHARIPPUWA",
      value: 5488,
    },
    {
      label: "KOVULWEWA",
      value: 5657,
    },
    {
      label: "KUMARA UDAWELA",
      value: 5769,
    },
    {
      label: "KUMBUKGAHAMULLA",
      value: 5799,
    },
    {
      label: "MAHAAGARA",
      value: 6266,
    },
    {
      label: "MEEGAHAPELESSA",
      value: 7026,
    },
    {
      label: "NAWASIGAHAWATTA",
      value: 7818,
    },
    {
      label: "PAHALA WEERAKODIYANA",
      value: 8368,
    },
    {
      label: "PAHALA YAGAMWELA",
      value: 8373,
    },
    {
      label: "PAHALAGAMA",
      value: 8378,
    },
    {
      label: "PALUGAMUWA",
      value: 8562,
    },
    {
      label: "PARANAGAMA",
      value: 8778,
    },
    {
      label: "POLGAHA AGARA",
      value: 9204,
    },
    {
      label: "RANTETIYAWA",
      value: 9683,
    },
    {
      label: "SIYAMBALAGASRUPPA EAST",
      value: 10190,
    },
    {
      label: "SIYAMBALAGASRUPPA WEST",
      value: 10191,
    },
    {
      label: "THUNTHOTA",
      value: 10819,
    },
    {
      label: "UDADENIYA",
      value: 10885,
    },
    {
      label: "WALPITAGAMA",
      value: 11645,
    },
    {
      label: "WATHUWATTA",
      value: 11788,
    },
  ],
  "290": [
    {
      label: "ALANDUWAKA",
      value: 173,
    },
    {
      label: "ALAPALAWALA EAST",
      value: 182,
    },
    {
      label: "ALAPALAWALA WEST",
      value: 183,
    },
    {
      label: "ALUTHKANDA",
      value: 272,
    },
    {
      label: "AMBAGASTHENNA",
      value: 326,
    },
    {
      label: "AMBANWALA",
      value: 366,
    },
    {
      label: "AMBARAPOLA",
      value: 367,
    },
    {
      label: "ANGUNAWALA EAST",
      value: 497,
    },
    {
      label: "ANGUNAWALA WEST",
      value: 498,
    },
    {
      label: "APPALLAGODA EAST",
      value: 529,
    },
    {
      label: "APPALLAGODA WEST",
      value: 530,
    },
    {
      label: "ARATTANA",
      value: 586,
    },
    {
      label: "ARAVUWAWALA",
      value: 588,
    },
    {
      label: "BAMBARADENIYA",
      value: 805,
    },
    {
      label: "BATUPITIYA",
      value: 960,
    },
    {
      label: "BELUNGALA",
      value: 1035,
    },
    {
      label: "BOOWELIKADA",
      value: 1193,
    },
    {
      label: "BOYAGAMA",
      value: 1263,
    },
    {
      label: "DASKARA",
      value: 1557,
    },
    {
      label: "DAVULAGALA",
      value: 1560,
    },
    {
      label: "DEHIPAGODA EAST",
      value: 1644,
    },
    {
      label: "DEHIPAGODA WEST",
      value: 1645,
    },
    {
      label: "DELDENIYA",
      value: 1664,
    },
    {
      label: "DELGAHAPITIYA",
      value: 1675,
    },
    {
      label: "DELIWALA",
      value: 1690,
    },
    {
      label: "DIHITIDENIYA",
      value: 1854,
    },
    {
      label: "DODAMDENIYA",
      value: 1953,
    },
    {
      label: "ELADETTA EAST",
      value: 2175,
    },
    {
      label: "ELADETTA WEST",
      value: 2176,
    },
    {
      label: "ELPITIKANDA",
      value: 2249,
    },
    {
      label: "EMBEKKA",
      value: 2275,
    },
    {
      label: "GADALADENIYA NORTH",
      value: 2449,
    },
    {
      label: "GADALADENIYA SOUTH",
      value: 2450,
    },
    {
      label: "GANGODA",
      value: 2715,
    },
    {
      label: "GANGODA NORTH",
      value: 2717,
    },
    {
      label: "GANGODA SOUTH",
      value: 2718,
    },
    {
      label: "GANGULDENIYA",
      value: 2727,
    },
    {
      label: "GANHATHA",
      value: 2729,
    },
    {
      label: "GELIOYA",
      value: 2774,
    },
    {
      label: "GODAPOLA EAST",
      value: 2862,
    },
    {
      label: "GODAPOLA WEST",
      value: 2863,
    },
    {
      label: "HANDESSA",
      value: 3160,
    },
    {
      label: "HATHNAGODA",
      value: 3250,
    },
    {
      label: "HEEYAWALA",
      value: 3303,
    },
    {
      label: "HENDENIYA EAST",
      value: 3343,
    },
    {
      label: "HENDENIYA WEST",
      value: 3344,
    },
    {
      label: "HEPANA",
      value: 3364,
    },
    {
      label: "HIDDAVULLA EAST",
      value: 3405,
    },
    {
      label: "HIDDAVULLA WEST",
      value: 3406,
    },
    {
      label: "HIYARAPITIYA",
      value: 3495,
    },
    {
      label: "HONDIYADENIYA",
      value: 3519,
    },
    {
      label: "IHALA KOORUKUTTALA",
      value: 3731,
    },
    {
      label: "IHALA PETHIYAGODA",
      value: 3774,
    },
    {
      label: "IMBULDENIYA",
      value: 3876,
    },
    {
      label: "KAMBURADENIYA",
      value: 4398,
    },
    {
      label: "KARAMADA NORTH",
      value: 4656,
    },
    {
      label: "KARAMADA SOUTH",
      value: 4657,
    },
    {
      label: "KETAKUMBURA",
      value: 5063,
    },
    {
      label: "KIRIWAVULA EAST",
      value: 5221,
    },
    {
      label: "KIRIWAVULA WEST",
      value: 5222,
    },
    {
      label: "KOORADENIYA",
      value: 5483,
    },
    {
      label: "KOTAGALOLUWA",
      value: 5561,
    },
    {
      label: "KOVILAKANDA",
      value: 5646,
    },
    {
      label: "LAGAMUWA",
      value: 5936,
    },
    {
      label: "LIYANGAHA WATTA",
      value: 6026,
    },
    {
      label: "LUNUGAMA",
      value: 6045,
    },
    {
      label: "MAMPITIYA",
      value: 6609,
    },
    {
      label: "MANIKKAWA",
      value: 6671,
    },
    {
      label: "MATHGAMUWA",
      value: 6813,
    },
    {
      label: "MAVEEKUMBURA NORTH",
      value: 6855,
    },
    {
      label: "MAVEEKUMBURA SOUTH",
      value: 6856,
    },
    {
      label: "MEDDEGODA",
      value: 6986,
    },
    {
      label: "MEEWALADENIYA",
      value: 7079,
    },
    {
      label: "MEEWATHURA",
      value: 7084,
    },
    {
      label: "MURUTHAGAHAMULA",
      value: 7493,
    },
    {
      label: "NARANWALA",
      value: 7721,
    },
    {
      label: "NAWA  ELPITIYA NORTH",
      value: 7780,
    },
    {
      label: "NAWA ELPITIYA SOUTH",
      value: 7781,
    },
    {
      label: "NAWA PERADENIYA",
      value: 7788,
    },
    {
      label: "NIKAHETIYA",
      value: 7951,
    },
    {
      label: "PAHALA KOORUKUTTALA",
      value: 8305,
    },
    {
      label: "PALKUMBURA",
      value: 8467,
    },
    {
      label: "PALLE ALUDENIYA",
      value: 8483,
    },
    {
      label: "PAMUNUWA EAST",
      value: 8595,
    },
    {
      label: "PAMUNUWA WEST",
      value: 8596,
    },
    {
      label: "PANABOKKA",
      value: 8598,
    },
    {
      label: "PENIDENIYA",
      value: 8962,
    },
    {
      label: "PETHIYAGODA EAST",
      value: 9052,
    },
    {
      label: "PETHIYAGODA WEST",
      value: 9055,
    },
    {
      label: "PILAPITIYA",
      value: 9077,
    },
    {
      label: "PILIGALLA EAST",
      value: 9083,
    },
    {
      label: "PILIGALLA WEST",
      value: 9084,
    },
    {
      label: "PITAWALAWATTA",
      value: 9141,
    },
    {
      label: "POLGAHAANGA",
      value: 9206,
    },
    {
      label: "RABBEGAMUWA NORTH",
      value: 9504,
    },
    {
      label: "RABBEGAMUWA SOUTH",
      value: 9505,
    },
    {
      label: "RAJAGIRIYA",
      value: 9561,
    },
    {
      label: "RANGAMA",
      value: 9651,
    },
    {
      label: "RANGODA",
      value: 9655,
    },
    {
      label: "SADIKKAWATTA",
      value: 9852,
    },
    {
      label: "SANGABOGAMA",
      value: 9944,
    },
    {
      label: "SIYAMBALAGODA",
      value: 10196,
    },
    {
      label: "THALAWATHURA",
      value: 10404,
    },
    {
      label: "THALAWATTA",
      value: 10405,
    },
    {
      label: "UDA ALUDENIYA",
      value: 10857,
    },
    {
      label: "UDAGAMA",
      value: 10891,
    },
    {
      label: "URULEWATTA",
      value: 11230,
    },
    {
      label: "VIHARAGAMA",
      value: 11423,
    },
    {
      label: "WALAGEDARA NORTH",
      value: 11566,
    },
    {
      label: "WALAGEDARA SOUTH",
      value: 11567,
    },
    {
      label: "WALGAMA",
      value: 11613,
    },
    {
      label: "WARAKAGODA",
      value: 11707,
    },
    {
      label: "WATADENIYA",
      value: 11742,
    },
    {
      label: "WATHUPOLA",
      value: 11779,
    },
    {
      label: "WATTAPPOLA",
      value: 11797,
    },
    {
      label: "WEGIRIYA EAST",
      value: 11882,
    },
    {
      label: "WEGIRIYA WEST",
      value: 11883,
    },
    {
      label: "WELAMBODA",
      value: 11909,
    },
    {
      label: "WELIGALLA",
      value: 11948,
    },
    {
      label: "WERAWALA EAST",
      value: 12102,
    },
    {
      label: "WERAWALA WEST",
      value: 12103,
    },
    {
      label: "WERELLAMANA",
      value: 12108,
    },
    {
      label: "YALEGODA EAST",
      value: 12258,
    },
    {
      label: "YALEGODA WEST",
      value: 12259,
    },
  ],
  "292": [
    {
      label: "ALAWATHUWALA",
      value: 198,
    },
    {
      label: "BALAKADUWA",
      value: 773,
    },
    {
      label: "BOWATTA",
      value: 1262,
    },
    {
      label: "DEHIPITIYA",
      value: 1647,
    },
    {
      label: "DOMBAGASDENIYA",
      value: 2004,
    },
    {
      label: "DUMBUKOLA",
      value: 2060,
    },
    {
      label: "ELKADUWA",
      value: 2217,
    },
    {
      label: "ELKADUWA WATTA",
      value: 2218,
    },
    {
      label: "ELWALA",
      value: 2264,
    },
    {
      label: "ENASALMADA",
      value: 2291,
    },
    {
      label: "ERIYAGOLLA",
      value: 2344,
    },
    {
      label: "GALAUDAHENA",
      value: 2520,
    },
    {
      label: "GURULAWELA NORTH",
      value: 3009,
    },
    {
      label: "GURULAWELA SOUTH",
      value: 3010,
    },
    {
      label: "HALANGODA",
      value: 3069,
    },
    {
      label: "HORAGAHAPITIYA",
      value: 3527,
    },
    {
      label: "HUNNASGIRIYAWATTA",
      value: 3599,
    },
    {
      label: "HUNUKETAWALA",
      value: 3605,
    },
    {
      label: "IMBULPITIYA",
      value: 3888,
    },
    {
      label: "KADUWELA",
      value: 4139,
    },
    {
      label: "KALALPITIYA",
      value: 4236,
    },
    {
      label: "KANDEMADA",
      value: 4499,
    },
    {
      label: "KARAGAHAHINNA",
      value: 4608,
    },
    {
      label: "KATUATTAMADA",
      value: 4822,
    },
    {
      label: "KATUDENIYA",
      value: 4825,
    },
    {
      label: "KENDAGOLLA",
      value: 5001,
    },
    {
      label: "KENDAGOLLAMADA",
      value: 5002,
    },
    {
      label: "KIRIMETIYAWA",
      value: 5182,
    },
    {
      label: "KOHOMBILIWELA",
      value: 5333,
    },
    {
      label: "KUREEWELA",
      value: 5853,
    },
    {
      label: "LELIAMBE",
      value: 5974,
    },
    {
      label: "MABERIYA",
      value: 6059,
    },
    {
      label: "MAKULEMADA",
      value: 6466,
    },
    {
      label: "MANABODA",
      value: 6615,
    },
    {
      label: "MARUKONA",
      value: 6770,
    },
    {
      label: "MEEDENIYA",
      value: 7010,
    },
    {
      label: "MUWAGALA",
      value: 7534,
    },
    {
      label: "NAGAHATHENNA",
      value: 7568,
    },
    {
      label: "NAGOLLA",
      value: 7584,
    },
    {
      label: "NAWARATHNAGODA",
      value: 7817,
    },
    {
      label: "NUGAPITIYA",
      value: 8070,
    },
    {
      label: "OVILIKANDA",
      value: 8190,
    },
    {
      label: "OVILLA",
      value: 8191,
    },
    {
      label: "PAHALA WEHIGALA",
      value: 8370,
    },
    {
      label: "PAHALAWELA",
      value: 8383,
    },
    {
      label: "PALLEKUMBURA",
      value: 8512,
    },
    {
      label: "PANANTHADIYA",
      value: 8632,
    },
    {
      label: "PANWATTA",
      value: 8723,
    },
    {
      label: "PARAGAHAWELA",
      value: 8742,
    },
    {
      label: "PATHINGOLLA",
      value: 8848,
    },
    {
      label: "PUJAGODA",
      value: 9362,
    },
    {
      label: "PURIJJALA",
      value: 9444,
    },
    {
      label: "RAITHALAWELA",
      value: 9548,
    },
    {
      label: "RANGAMA",
      value: 9651,
    },
    {
      label: "RATHWATTA",
      value: 9747,
    },
    {
      label: "TALINGAMADA",
      value: 10315,
    },
    {
      label: "THAWALANKOYA",
      value: 10553,
    },
    {
      label: "THENNA",
      value: 10598,
    },
    {
      label: "THIBBATUWAWA",
      value: 10630,
    },
    {
      label: "UDANGAMUWA",
      value: 10948,
    },
    {
      label: "UDATHENNA",
      value: 10967,
    },
    {
      label: "UDUPIHILLA",
      value: 11038,
    },
    {
      label: "UDUPITIYA",
      value: 11042,
    },
    {
      label: "UKUWELA",
      value: 11108,
    },
    {
      label: "ULPATHAPITIYA",
      value: 11134,
    },
    {
      label: "WADEMADA",
      value: 11507,
    },
    {
      label: "WARAKAMURA",
      value: 11713,
    },
    {
      label: "WARIYAPOLA",
      value: 11732,
    },
    {
      label: "WARIYAPOLA WATTA",
      value: 11733,
    },
    {
      label: "WATAGODA",
      value: 11748,
    },
    {
      label: "WATTEGEDARA",
      value: 11802,
    },
    {
      label: "WEHIGALA",
      value: 11894,
    },
    {
      label: "WELIGALA",
      value: 11947,
    },
  ],
  "298": [
    {
      label: "ALAVEDDY CENTRE",
      value: 184,
    },
    {
      label: "ALAVEDDY EAST",
      value: 185,
    },
    {
      label: "ALAVEDDY NORTH",
      value: 186,
    },
    {
      label: "ALAVEDDY SOUTH",
      value: 187,
    },
    {
      label: "ALAVEDDY WEST",
      value: 188,
    },
    {
      label: "GANESWARAM",
      value: 2704,
    },
    {
      label: "ILAVALAI NORTH",
      value: 3838,
    },
    {
      label: "ILAVALAI NORTH WEST",
      value: 3839,
    },
    {
      label: "KADDUVAN",
      value: 4095,
    },
    {
      label: "KADDUVAN WEST",
      value: 4096,
    },
    {
      label: "KANKESANTHURAI CENTRE",
      value: 4530,
    },
    {
      label: "KANKESANTHURAI SOUTH",
      value: 4531,
    },
    {
      label: "KANKESANTHURAI WEST",
      value: 4532,
    },
    {
      label: "KOLLANKALADY",
      value: 5396,
    },
    {
      label: "KURUMPASIDDY",
      value: 5878,
    },
    {
      label: "KURUMPASIDDY EAST",
      value: 5879,
    },
    {
      label: "MALLAKAM CENTRE",
      value: 6557,
    },
    {
      label: "MALLAKAM NORTH",
      value: 6558,
    },
    {
      label: "MALLAKAM SOUTH",
      value: 6559,
    },
    {
      label: "MAVIDDAPURAM",
      value: 6857,
    },
    {
      label: "MAVIDDAPURAM SOUTH",
      value: 6858,
    },
    {
      label: "MYLIDDY NORTH",
      value: 7543,
    },
    {
      label: "MYLIDDYTHTHURAI NORTH",
      value: 7544,
    },
    {
      label: "MYLIDDYTHTHURAI SOUTH",
      value: 7545,
    },
    {
      label: "NAGULESWARAM",
      value: 7587,
    },
    {
      label: "PALAI VEEMANKAMAM NORTH",
      value: 8402,
    },
    {
      label: "PALAI VEEMANKAMAM SOUTH",
      value: 8403,
    },
    {
      label: "PALALY EAST",
      value: 8412,
    },
    {
      label: "PALALY NORTH",
      value: 8413,
    },
    {
      label: "PALALY NORTH WEST",
      value: 8414,
    },
    {
      label: "PALALY SOUTH",
      value: 8415,
    },
    {
      label: "PALALY WEST",
      value: 8416,
    },
    {
      label: "PANNALAI",
      value: 8697,
    },
    {
      label: "TELLIPPALAI",
      value: 10318,
    },
    {
      label: "TELLIPPALAI EAST",
      value: 10319,
    },
    {
      label: "THANTHAI CHELVAPURAM",
      value: 10521,
    },
    {
      label: "THENMYLAI",
      value: 10597,
    },
    {
      label: "THURKKAPURAM",
      value: 10827,
    },
    {
      label: "THYIDDY EAST",
      value: 10831,
    },
    {
      label: "THYIDDY NORTH",
      value: 10832,
    },
    {
      label: "THYIDDY SOUTH",
      value: 10833,
    },
    {
      label: "VARUTHALAIVILAN",
      value: 11335,
    },
    {
      label: "VAYAVILAN EAST",
      value: 11344,
    },
    {
      label: "VAYAVILAN WEST",
      value: 11345,
    },
    {
      label: "VITHAHAPURAM",
      value: 11485,
    },
  ],
  "303": [
    {
      label: "ARUMUHATHANPUTHUKULAM",
      value: 612,
    },
    {
      label: "ASIKULAM",
      value: 633,
    },
    {
      label: "ECHCHANKULAM",
      value: 2111,
    },
    {
      label: "ILAMARUTHANKULAM",
      value: 3832,
    },
    {
      label: "KALLIKULAM",
      value: 4284,
    },
    {
      label: "KALMADU",
      value: 4286,
    },
    {
      label: "KANDAPURAM",
      value: 4481,
    },
    {
      label: "KATHARSINNAKULAM",
      value: 4779,
    },
    {
      label: "KOOMANKULAM",
      value: 5479,
    },
    {
      label: "KOVILKULAM",
      value: 5651,
    },
    {
      label: "MAHARAMBAIKULAM",
      value: 6355,
    },
    {
      label: "MAHILANKULAM",
      value: 6403,
    },
    {
      label: "MALIGAI",
      value: 6528,
    },
    {
      label: "MAREKKARAMPALAI",
      value: 6763,
    },
    {
      label: "MARUTHAMADHU",
      value: 6773,
    },
    {
      label: "MARUTHANKULAM",
      value: 6782,
    },
    {
      label: "MOONRUMURIPPU",
      value: 7298,
    },
    {
      label: "NELUKKULAM",
      value: 7896,
    },
    {
      label: "NOCHCHIMODDAI",
      value: 8051,
    },
    {
      label: "OMANTHAI",
      value: 8146,
    },
    {
      label: "PALAMODDAI",
      value: 8419,
    },
    {
      label: "PAMPAIMADU",
      value: 8590,
    },
    {
      label: "PANDARIKKULAM",
      value: 8652,
    },
    {
      label: "PANRIKKEITHAKULAM",
      value: 8711,
    },
    {
      label: "PARANADDAKAL",
      value: 8777,
    },
    {
      label: "PATTANICHCHI PULIYANKULAM",
      value: 8866,
    },
    {
      label: "POOVARASANKULAM",
      value: 9280,
    },
    {
      label: "PUTHUKKULAM",
      value: 9467,
    },
    {
      label: "RAJENDRANKULAM",
      value: 9575,
    },
    {
      label: "RAMBAIKULAM",
      value: 9590,
    },
    {
      label: "SALAMBAIKKULAM",
      value: 9873,
    },
    {
      label: "SAMALANKULAM",
      value: 9887,
    },
    {
      label: "SASTHIRIKOOLANKULAM",
      value: 9985,
    },
    {
      label: "SEKKADIPULAVU",
      value: 10016,
    },
    {
      label: "SEMAMADHU",
      value: 10031,
    },
    {
      label: "THANDIKULAM",
      value: 10507,
    },
    {
      label: "THONIKAL",
      value: 10736,
    },
    {
      label: "VAIRAVAPULIYANKULAM",
      value: 11289,
    },
    {
      label: "VAVUNIYA TOWN",
      value: 11342,
    },
    {
      label: "VAVUNIYA TOWN NORTH",
      value: 11343,
    },
    {
      label: "VELANKULAM",
      value: 11383,
    },
    {
      label: "VELIKULAM",
      value: 11385,
    },
  ],
  "304": [
    {
      label: "ANANDAR PULLIYANKULAM",
      value: 446,
    },
    {
      label: "KANAGARAYANKULAM NORTH",
      value: 4422,
    },
    {
      label: "KANAGARAYANKULAM SOUTH",
      value: 4423,
    },
    {
      label: "KATKULAM",
      value: 4793,
    },
    {
      label: "KULAVISUDDAN",
      value: 5756,
    },
    {
      label: "MAMADU",
      value: 6595,
    },
    {
      label: "MANNAKULAM",
      value: 6693,
    },
    {
      label: "MARAILUPPAI",
      value: 6734,
    },
    {
      label: "MARUTHODDAI",
      value: 6783,
    },
    {
      label: "NAINAMADU",
      value: 7599,
    },
    {
      label: "NEDUNKERNY NORTH",
      value: 7850,
    },
    {
      label: "NEDUNKERNY SOUTH",
      value: 7851,
    },
    {
      label: "OLUMADU",
      value: 8135,
    },
    {
      label: "PADDIKUDIYIRUPPU",
      value: 8216,
    },
    {
      label: "PARANTHAN",
      value: 8786,
    },
    {
      label: "PULIYANKULAM NORTH",
      value: 9377,
    },
    {
      label: "PULIYANKULAM SOUTH",
      value: 9378,
    },
    {
      label: "SINNADAMPAN",
      value: 10128,
    },
    {
      label: "UNCHALKADDY",
      value: 11166,
    },
    {
      label: "VEDIVAITHAKALLU",
      value: 11353,
    },
  ],
  "305": [
    {
      label: "ACRES 20,40,60",
      value: 22,
    },
    {
      label: "ACRES 400",
      value: 23,
    },
    {
      label: "AGBOPURA",
      value: 67,
    },
    {
      label: "ALAGALLA",
      value: 153,
    },
    {
      label: "AVUSATHAPITIYA",
      value: 710,
    },
    {
      label: "AWARANTHULAWA",
      value: 711,
    },
    {
      label: "ERAMPERIYAKULAMA",
      value: 2311,
    },
    {
      label: "KALUKUNNAMMADUWA",
      value: 4352,
    },
    {
      label: "MADUKANDA",
      value: 6154,
    },
    {
      label: "MAHAKACHCHIKODIYA",
      value: 6302,
    },
    {
      label: "MAHAMYLANKULAMA",
      value: 6331,
    },
    {
      label: "MAMADUWA",
      value: 6596,
    },
    {
      label: "MARADANMADUWA",
      value: 6724,
    },
    {
      label: "NEDUNKULAM",
      value: 7852,
    },
    {
      label: "PAVAKKULAM SOUTH BANK, TRACK 07",
      value: 8894,
    },
    {
      label: "PERIYA ULUKKULAMA",
      value: 8997,
    },
    {
      label: "PIRAPPANMADUWA",
      value: 9123,
    },
    {
      label: "POOMADUWA",
      value: 9269,
    },
    {
      label: "PUDUBULANKULAMA",
      value: 9344,
    },
    {
      label: "RANKETHGAMA",
      value: 9661,
    },
  ],
  "306": [
    {
      label: "ANDIYAPULIYANKULAM",
      value: 473,
    },
    {
      label: "CHEDDIKULAM",
      value: 1353,
    },
    {
      label: "KANGANKULAM",
      value: 4525,
    },
    {
      label: "KANNADDY",
      value: 4536,
    },
    {
      label: "KANTHASAMY NAGAR",
      value: 4561,
    },
    {
      label: "KIRISTHAVAKULAM",
      value: 5208,
    },
    {
      label: "KURUKKALPUTHUKKULAM",
      value: 5868,
    },
    {
      label: "MUGATHTHANKULAM",
      value: 7410,
    },
    {
      label: "MUTHALIYARKULAM",
      value: 7510,
    },
    {
      label: "NERIYAKULAM",
      value: 7915,
    },
    {
      label: "PERIYAKADDU",
      value: 9002,
    },
    {
      label: "PERIYAPULIYALANKULAM",
      value: 9031,
    },
    {
      label: "PERIYATHAMPANAI",
      value: 9034,
    },
    {
      label: "PIRAMANALANKULAM",
      value: 9120,
    },
    {
      label: "SINNASIPPIKULAM",
      value: 10134,
    },
    {
      label: "SOODUVENTHAPULAVU",
      value: 10229,
    },
    {
      label: "UNIT 2. PAVATKULAM",
      value: 11172,
    },
    {
      label: "UNIT 4. PAVATKULAM",
      value: 11174,
    },
    {
      label: "UNIT 5. & 6 PAVATKULAM",
      value: 11175,
    },
    {
      label: "UNIT 9. & 10 PAVATKULAM",
      value: 11176,
    },
  ],
  "308": [
    {
      label: "BOGODAKANDA",
      value: 1142,
    },
    {
      label: "BOTHALAWA",
      value: 1244,
    },
    {
      label: "GAMMANA EAST",
      value: 2657,
    },
    {
      label: "GAMMANA WEST",
      value: 2658,
    },
    {
      label: "GORAKADOOWA",
      value: 2963,
    },
    {
      label: "GULANAWATTA",
      value: 2989,
    },
    {
      label: "GULAVITA NORTH",
      value: 2990,
    },
    {
      label: "GULAVITA SOUTH",
      value: 2991,
    },
    {
      label: "HALWALA",
      value: 3125,
    },
    {
      label: "HALWALAKELE MALWATHUKANDA",
      value: 3126,
    },
    {
      label: "IHALA HEWESSA",
      value: 3705,
    },
    {
      label: "ITTAPANA EAST",
      value: 3978,
    },
    {
      label: "ITTAPANA NORTH",
      value: 3979,
    },
    {
      label: "ITTAPANA SOUTH",
      value: 3980,
    },
    {
      label: "ITTAPANA WEST",
      value: 3981,
    },
    {
      label: "KANKOTAWATTA",
      value: 4535,
    },
    {
      label: "KARAPAGALA",
      value: 4703,
    },
    {
      label: "KATUDORA",
      value: 4826,
    },
    {
      label: "KATUKELE WELMEEGODA",
      value: 4837,
    },
    {
      label: "KUDA MATHUGAMA",
      value: 5676,
    },
    {
      label: "KUMBADOOWA",
      value: 5779,
    },
    {
      label: "LIHINIYAWA EAST",
      value: 6009,
    },
    {
      label: "LIHINIYAWA WEST",
      value: 6010,
    },
    {
      label: "LOOLBADDUWA",
      value: 6040,
    },
    {
      label: "MADDEGAMA",
      value: 6114,
    },
    {
      label: "MAGURUMASVILA",
      value: 6215,
    },
    {
      label: "MAKALANDAWA",
      value: 6438,
    },
    {
      label: "MAKALANDAWA SOUTH",
      value: 6439,
    },
    {
      label: "MALAMBEHENA",
      value: 6490,
    },
    {
      label: "MALLAWACHCHIGODA GANGABADA",
      value: 6562,
    },
    {
      label: "MANDAGALA",
      value: 6635,
    },
    {
      label: "MEEGAHATHENNA",
      value: 7027,
    },
    {
      label: "MIRISWATTA",
      value: 7232,
    },
    {
      label: "MORAGALA",
      value: 7311,
    },
    {
      label: "PAHALA HEWESSA NORTH",
      value: 8277,
    },
    {
      label: "PAHALA HEWESSA SOUTH",
      value: 8278,
    },
    {
      label: "PANNILA",
      value: 8705,
    },
    {
      label: "PANNILA EAST",
      value: 8706,
    },
    {
      label: "PANNILA SOUTH",
      value: 8707,
    },
    {
      label: "PAREIGAMA NORTH",
      value: 8807,
    },
    {
      label: "PAREIGAMA SOUTH",
      value: 8808,
    },
    {
      label: "PELAWATTA",
      value: 8922,
    },
    {
      label: "PELAWATTA EAST",
      value: 8923,
    },
    {
      label: "PELAWATTA WEST NORTH",
      value: 8924,
    },
    {
      label: "PELAWATTA WEST SOUTH",
      value: 8925,
    },
    {
      label: "RANEPURAGODA",
      value: 9646,
    },
    {
      label: "THOTAHA",
      value: 10753,
    },
    {
      label: "THUNDOLA",
      value: 10802,
    },
    {
      label: "UDUGAMA",
      value: 11009,
    },
    {
      label: "URAGODA EAST",
      value: 11194,
    },
    {
      label: "URAGODA WEST",
      value: 11195,
    },
    {
      label: "UTHUMGAMA",
      value: 11259,
    },
    {
      label: "WALALLAVITA EAST",
      value: 11581,
    },
    {
      label: "WALALLAVITA SOUTH",
      value: 11582,
    },
    {
      label: "WEDAWATTA",
      value: 11828,
    },
    {
      label: "WEERAKANDA",
      value: 11851,
    },
    {
      label: "YAGIRALA",
      value: 12208,
    },
    {
      label: "YATTAPATHA",
      value: 12313,
    },
  ],
  "309": [
    {
      label: "ALAKOLAWEWA",
      value: 169,
    },
    {
      label: "AMBAGAHATHENNA",
      value: 312,
    },
    {
      label: "AMBAGASPITIYA",
      value: 325,
    },
    {
      label: "AMBALIYADDA",
      value: 352,
    },
    {
      label: "AMBANELLA",
      value: 359,
    },
    {
      label: "ANDAWALA",
      value: 462,
    },
    {
      label: "ARAMPITIYA",
      value: 568,
    },
    {
      label: "BATAGOLLA",
      value: 914,
    },
    {
      label: "BINGANTHALAWA",
      value: 1086,
    },
    {
      label: "BOLAGANDAWELA",
      value: 1154,
    },
    {
      label: "BROOKSIDE",
      value: 1272,
    },
    {
      label: "DABBARE",
      value: 1400,
    },
    {
      label: "DAMBAGOLLA",
      value: 1458,
    },
    {
      label: "DELIWALA NORTH",
      value: 1691,
    },
    {
      label: "DELIWELA SOUTH",
      value: 1693,
    },
    {
      label: "DELMAR",
      value: 1698,
    },
    {
      label: "DEMATAARAWA",
      value: 1717,
    },
    {
      label: "DENAMBURE",
      value: 1746,
    },
    {
      label: "DULANA",
      value: 2053,
    },
    {
      label: "EGODAKANDA",
      value: 2139,
    },
    {
      label: "EKANGAPURA",
      value: 2161,
    },
    {
      label: "ELLAKUMBURA",
      value: 2232,
    },
    {
      label: "EMBULAMPAHA",
      value: 2285,
    },
    {
      label: "GALABADA",
      value: 2460,
    },
    {
      label: "GALKADAPATHANA",
      value: 2559,
    },
    {
      label: "GALKADAWELA",
      value: 2561,
    },
    {
      label: "GALKETIWELA",
      value: 2566,
    },
    {
      label: "GORADIYAGOLLA",
      value: 2961,
    },
    {
      label: "HAPUGAHAPITIYA",
      value: 3192,
    },
    {
      label: "HARASBEDDA NORTH",
      value: 3223,
    },
    {
      label: "HARASBEDDA SOUTH",
      value: 3224,
    },
    {
      label: "HEGAMA",
      value: 3305,
    },
    {
      label: "HEGASULLA",
      value: 3306,
    },
    {
      label: "HELAGAMA",
      value: 3315,
    },
    {
      label: "HIGH FOREST",
      value: 3412,
    },
    {
      label: "IHALA PANNALA",
      value: 3773,
    },
    {
      label: "ILUKPELESSA",
      value: 3857,
    },
    {
      label: "KALAGANWATTA",
      value: 4224,
    },
    {
      label: "KANDEGAMA",
      value: 4491,
    },
    {
      label: "KANDEYAYA",
      value: 4509,
    },
    {
      label: "KARANDAGOLLA",
      value: 4683,
    },
    {
      label: "KENDAGOLLA",
      value: 5001,
    },
    {
      label: "KETAKANDURA",
      value: 5060,
    },
    {
      label: "KOSGOLLA",
      value: 5531,
    },
    {
      label: "KOTAMBE",
      value: 5578,
    },
    {
      label: "KUMBALGAMUWA",
      value: 5784,
    },
    {
      label: "KUMBALGAMUWA EAST",
      value: 5785,
    },
    {
      label: "KUMBUKWELA",
      value: 5812,
    },
    {
      label: "KURUNDUOYA",
      value: 5889,
    },
    {
      label: "KURUPANAWELA",
      value: 5904,
    },
    {
      label: "LANDUPITA",
      value: 5952,
    },
    {
      label: "LIYANWELA IHALAGAMA",
      value: 6032,
    },
    {
      label: "LIYANWELA PAHALAGAMA",
      value: 6033,
    },
    {
      label: "MADULLA NORTH",
      value: 6161,
    },
    {
      label: "MADULLA SOUTH",
      value: 6162,
    },
    {
      label: "MADUMANA",
      value: 6165,
    },
    {
      label: "MAHA UVA",
      value: 6261,
    },
    {
      label: "MAHAKUDUGALA",
      value: 6316,
    },
    {
      label: "MAHAPATHANA",
      value: 6340,
    },
    {
      label: "MAILAGASTHENNA",
      value: 6419,
    },
    {
      label: "MALIYADDA",
      value: 6551,
    },
    {
      label: "MALLAGAMA",
      value: 6556,
    },
    {
      label: "MANELWALA",
      value: 6657,
    },
    {
      label: "MANTHREETHENNA",
      value: 6697,
    },
    {
      label: "MATHETILLA",
      value: 6812,
    },
    {
      label: "MEDAKANDURA",
      value: 6952,
    },
    {
      label: "MEEPANAWA",
      value: 7056,
    },
    {
      label: "MORABEDDA",
      value: 7302,
    },
    {
      label: "MORAHELA",
      value: 7325,
    },
    {
      label: "MORANGATHENNA",
      value: 7338,
    },
    {
      label: "MUGANAGAHAPITIYA",
      value: 7409,
    },
    {
      label: "MULHALKELE",
      value: 7434,
    },
    {
      label: "MUNWATTA",
      value: 7477,
    },
    {
      label: "NAPATAWELA",
      value: 7683,
    },
    {
      label: "NARANTHALAWA",
      value: 7715,
    },
    {
      label: "NILDANDAHEENNA",
      value: 7973,
    },
    {
      label: "PADIYAPELELLA",
      value: 8225,
    },
    {
      label: "PALALPATHANA",
      value: 8411,
    },
    {
      label: "PALLEWELA",
      value: 8527,
    },
    {
      label: "PALUGAMA",
      value: 8558,
    },
    {
      label: "PANDITHAYA KUMBURA",
      value: 8665,
    },
    {
      label: "PANNALA",
      value: 8695,
    },
    {
      label: "PURANKUMBURA",
      value: 9441,
    },
    {
      label: "RAGALA",
      value: 9529,
    },
    {
      label: "RAGALA WATTA",
      value: 9530,
    },
    {
      label: "RAMBUKE",
      value: 9601,
    },
    {
      label: "RATHNAYAKAPURA",
      value: 9736,
    },
    {
      label: "ROOPAHA",
      value: 9817,
    },
    {
      label: "ROOPAHA EAST",
      value: 9818,
    },
    {
      label: "SAMAGIPURA",
      value: 9885,
    },
    {
      label: "SENARATHPURA",
      value: 10050,
    },
    {
      label: "SERASUNTHENNA",
      value: 10066,
    },
    {
      label: "SERUPITIYA",
      value: 10074,
    },
    {
      label: "SOORIYAGAHAPATHANA IHALA",
      value: 10232,
    },
    {
      label: "SOORIYAGAHAPATHANA PAHALA",
      value: 10233,
    },
    {
      label: "ST. LEONARD",
      value: 10261,
    },
    {
      label: "ST. MAGRET",
      value: 10262,
    },
    {
      label: "THENNEHENWALA",
      value: 10606,
    },
    {
      label: "THERIPEHE",
      value: 10619,
    },
    {
      label: "THIBBATUGODA",
      value: 10627,
    },
    {
      label: "THIBBATUGODA SOUTH",
      value: 10628,
    },
    {
      label: "THUNHITIYAWA",
      value: 10807,
    },
    {
      label: "UDAGAMA",
      value: 10891,
    },
    {
      label: "UDAMADURA",
      value: 10934,
    },
    {
      label: "UDAMADURA NORTH",
      value: 10935,
    },
    {
      label: "UDAPUSSELLAWA NORTH",
      value: 10958,
    },
    {
      label: "UDAPUSSELLAWA SOUTH",
      value: 10959,
    },
    {
      label: "UDAWELA",
      value: 10979,
    },
    {
      label: "UKUTHULE",
      value: 11106,
    },
    {
      label: "UKUTHULE EAST",
      value: 11107,
    },
    {
      label: "UNAGOLLA",
      value: 11151,
    },
    {
      label: "WALAPANE",
      value: 11590,
    },
    {
      label: "WATAMBE",
      value: 11751,
    },
    {
      label: "WATHULANDA EAST",
      value: 11772,
    },
    {
      label: "WATHULANDA WEST",
      value: 11773,
    },
    {
      label: "WATHUMULLA",
      value: 11776,
    },
    {
      label: "WERELLAPATHANA",
      value: 12111,
    },
    {
      label: "WETAKEPATHA",
      value: 12116,
    },
    {
      label: "WETEKEGAMA",
      value: 12122,
    },
    {
      label: "WEWAKELE",
      value: 12139,
    },
    {
      label: "WEWATHENNA",
      value: 12148,
    },
    {
      label: "YATIMADURA",
      value: 12296,
    },
    {
      label: "YATIWELLA",
      value: 12304,
    },
    {
      label: "YOMBUWELTHENNA",
      value: 12328,
    },
  ],
  "310": [
    {
      label: "AGALABADA",
      value: 59,
    },
    {
      label: "BATAGASSA",
      value: 911,
    },
    {
      label: "BOWALA NORTH",
      value: 1257,
    },
    {
      label: "BOWALA SOUTH",
      value: 1258,
    },
    {
      label: "BOWALA WEST",
      value: 1259,
    },
    {
      label: "DALUWAKGODA",
      value: 1436,
    },
    {
      label: "DEHIGAHAHENA",
      value: 1631,
    },
    {
      label: "EGODABEDDA",
      value: 2136,
    },
    {
      label: "ETHPITIYA",
      value: 2414,
    },
    {
      label: "GALAHITIYA EAST",
      value: 2491,
    },
    {
      label: "GALAHITIYA NORTH",
      value: 2492,
    },
    {
      label: "GALAHITIYA SOUTH",
      value: 2493,
    },
    {
      label: "GALWADIYA",
      value: 2634,
    },
    {
      label: "HAGGITHA KANDA NORTH",
      value: 3058,
    },
    {
      label: "HANDUGALA",
      value: 3161,
    },
    {
      label: "HOREWELA",
      value: 3571,
    },
    {
      label: "IHALA MURUTHAWELA",
      value: 3761,
    },
    {
      label: "IHALA WALASMULLA",
      value: 3796,
    },
    {
      label: "JULAMPITIYA",
      value: 4051,
    },
    {
      label: "KEBELLAKETIYA",
      value: 4905,
    },
    {
      label: "KEKIRIOBADA",
      value: 4959,
    },
    {
      label: "KEREDENIYA",
      value: 5034,
    },
    {
      label: "KOHOLANA",
      value: 5319,
    },
    {
      label: "KONKARAHENA",
      value: 5464,
    },
    {
      label: "MAPITAKANDA",
      value: 6715,
    },
    {
      label: "MATHUWAKANDA",
      value: 6823,
    },
    {
      label: "MEDAGAMGODA",
      value: 6941,
    },
    {
      label: "MURUTHAWELA PAHALA",
      value: 7503,
    },
    {
      label: "NAMANELIYA",
      value: 7654,
    },
    {
      label: "OMARA EAST",
      value: 8147,
    },
    {
      label: "OMARA WEST",
      value: 8148,
    },
    {
      label: "PAHALA OBADA",
      value: 8338,
    },
    {
      label: "PAHALA WALASMULLA",
      value: 8365,
    },
    {
      label: "PAHALAWATTA",
      value: 8382,
    },
    {
      label: "PALLE JULAMPITIYA",
      value: 8487,
    },
    {
      label: "PATHEGAMA",
      value: 8842,
    },
    {
      label: "PISSUBEDDA",
      value: 9126,
    },
    {
      label: "RADANI ARA",
      value: 9508,
    },
    {
      label: "RAMMALA",
      value: 9614,
    },
    {
      label: "SAPUTHANTHIRIKANDA",
      value: 9975,
    },
    {
      label: "THALAPATHKANDA",
      value: 10381,
    },
    {
      label: "UDA JULAMPITIYA",
      value: 10870,
    },
    {
      label: "UDAHAGODA",
      value: 10904,
    },
    {
      label: "VEEDAPOLA",
      value: 11357,
    },
    {
      label: "WALASMULLA EAST",
      value: 11594,
    },
    {
      label: "WALASMULLA NORTH",
      value: 11595,
    },
    {
      label: "WALASMULLA SOUTH",
      value: 11596,
    },
    {
      label: "WALASMULLA WEST",
      value: 11597,
    },
    {
      label: "WARAPITIYA",
      value: 11726,
    },
    {
      label: "WATTEHENGODA",
      value: 11804,
    },
    {
      label: "WEEDIKANDA",
      value: 11837,
    },
    {
      label: "WELANDAGODA",
      value: 11914,
    },
    {
      label: "YAHALMULLA",
      value: 12220,
    },
  ],
  "311": [
    {
      label: "AKWATTA",
      value: 151,
    },
    {
      label: "ALGAMA",
      value: 206,
    },
    {
      label: "ALGAMA IHALAGAMA",
      value: 207,
    },
    {
      label: "ALPITIYA",
      value: 230,
    },
    {
      label: "AMBEPUSSA",
      value: 377,
    },
    {
      label: "BOORUNNAWA",
      value: 1189,
    },
    {
      label: "BOPITIYA",
      value: 1204,
    },
    {
      label: "DEDIGAMA",
      value: 1578,
    },
    {
      label: "DELGAMUWA",
      value: 1677,
    },
    {
      label: "DORAWAKA PALLEBAGE",
      value: 2043,
    },
    {
      label: "DORAWAKA UDABAGE",
      value: 2044,
    },
    {
      label: "DUMMALADENIYA",
      value: 2062,
    },
    {
      label: "EBIDIGALA",
      value: 2109,
    },
    {
      label: "EGALLA",
      value: 2123,
    },
    {
      label: "ELAMALDENIYA",
      value: 2185,
    },
    {
      label: "ETHNAWALA",
      value: 2411,
    },
    {
      label: "GANITHAPURA",
      value: 2734,
    },
    {
      label: "GASNAWA",
      value: 2753,
    },
    {
      label: "GODAWELA",
      value: 2873,
    },
    {
      label: "HALLAWA",
      value: 3089,
    },
    {
      label: "HAPUGODA",
      value: 3199,
    },
    {
      label: "HELIYAGODA",
      value: 3327,
    },
    {
      label: "IHALA LENAGALA",
      value: 3744,
    },
    {
      label: "IIIPANGAMUWA",
      value: 3824,
    },
    {
      label: "IMBULOVITA",
      value: 3886,
    },
    {
      label: "KALUGALA",
      value: 4334,
    },
    {
      label: "KANDEGAMA",
      value: 4491,
    },
    {
      label: "KINIVITA",
      value: 5117,
    },
    {
      label: "KIVULDENIYA",
      value: 5275,
    },
    {
      label: "KODAPALUWA",
      value: 5297,
    },
    {
      label: "KOHOMBADENIYA",
      value: 5325,
    },
    {
      label: "KUDAPALLEGAMA",
      value: 5723,
    },
    {
      label: "KUKULPANE",
      value: 5754,
    },
    {
      label: "KUMBALGAMA",
      value: 5783,
    },
    {
      label: "MADURUPITIYA",
      value: 6175,
    },
    {
      label: "MAHA PALLEGAMA",
      value: 6252,
    },
    {
      label: "MAHENA",
      value: 6398,
    },
    {
      label: "MAHENA COLONY",
      value: 6399,
    },
    {
      label: "MALMADUWA",
      value: 6566,
    },
    {
      label: "MAMPITA",
      value: 6608,
    },
    {
      label: "MANGEDARA",
      value: 6664,
    },
    {
      label: "MENIKKADAWARA",
      value: 7121,
    },
    {
      label: "METIYAGANE",
      value: 7145,
    },
    {
      label: "MORAWAKA",
      value: 7356,
    },
    {
      label: "NANGALLA",
      value: 7672,
    },
    {
      label: "NAPE",
      value: 7686,
    },
    {
      label: "NELUMDENIYA",
      value: 7898,
    },
    {
      label: "NIWATUWA",
      value: 8040,
    },
    {
      label: "OPATHA",
      value: 8160,
    },
    {
      label: "OTHNAPITIYA",
      value: 8183,
    },
    {
      label: "PAHALA LENAGALA",
      value: 8316,
    },
    {
      label: "PALAMURE",
      value: 8430,
    },
    {
      label: "PALLEPELPITA",
      value: 8517,
    },
    {
      label: "PARAKRAMAGAMA",
      value: 8759,
    },
    {
      label: "PASPOLAKANDA",
      value: 8818,
    },
    {
      label: "PENIHELA",
      value: 8964,
    },
    {
      label: "PINNAGODA KANDA",
      value: 9105,
    },
    {
      label: "PITADENIYA",
      value: 9128,
    },
    {
      label: "POLGAMPALA",
      value: 9215,
    },
    {
      label: "PUHULEGAMA",
      value: 9353,
    },
    {
      label: "RAGALKANDA",
      value: 9531,
    },
    {
      label: "THALGAHADENIYA",
      value: 10412,
    },
    {
      label: "THALGAMA",
      value: 10417,
    },
    {
      label: "THALLIYADDA",
      value: 10437,
    },
    {
      label: "THAMBADIYA",
      value: 10458,
    },
    {
      label: "THAMBUGALA",
      value: 10485,
    },
    {
      label: "THOLANGAMUWA",
      value: 10728,
    },
    {
      label: "THULHIRIYA",
      value: 10781,
    },
    {
      label: "THUMBALIYADDA",
      value: 10784,
    },
    {
      label: "THUNTHOTA",
      value: 10819,
    },
    {
      label: "UDUWAKA",
      value: 11060,
    },
    {
      label: "WADDENIYA",
      value: 11503,
    },
    {
      label: "WARAKAPOLA",
      value: 11720,
    },
    {
      label: "WELHELLA",
      value: 11940,
    },
    {
      label: "WENIWELLAKADUWA",
      value: 12059,
    },
    {
      label: "WERAGALA",
      value: 12074,
    },
    {
      label: "WERAGODA",
      value: 12078,
    },
    {
      label: "YADDEHIMULLA",
      value: 12203,
    },
  ],
  "312": [
    {
      label: "AMBAKADAWARA",
      value: 331,
    },
    {
      label: "AMUNUGAMA",
      value: 418,
    },
    {
      label: "AVULEGAMA",
      value: 709,
    },
    {
      label: "BAYAWA",
      value: 978,
    },
    {
      label: "DEEGITHAWA",
      value: 1595,
    },
    {
      label: "DIVULAKELE",
      value: 1897,
    },
    {
      label: "EBAWALAPITIYA",
      value: 2108,
    },
    {
      label: "ELAVITIGAMA",
      value: 2194,
    },
    {
      label: "EMBAWA",
      value: 2274,
    },
    {
      label: "ETHAWA",
      value: 2391,
    },
    {
      label: "GINIPENDEGAMA",
      value: 2807,
    },
    {
      label: "GOLUWAWA",
      value: 2892,
    },
    {
      label: "HABARAWA",
      value: 3040,
    },
    {
      label: "HALMILLEWA",
      value: 3099,
    },
    {
      label: "HETTIGEDARA",
      value: 3374,
    },
    {
      label: "HOROMBUWA",
      value: 3574,
    },
    {
      label: "IPALAWA",
      value: 3938,
    },
    {
      label: "KAHAGOLLA",
      value: 4148,
    },
    {
      label: "KARAGASWEWA",
      value: 4622,
    },
    {
      label: "KARANDAWETIYA",
      value: 4690,
    },
    {
      label: "KELEGAMA",
      value: 4977,
    },
    {
      label: "KITHULWEHERA",
      value: 5261,
    },
    {
      label: "KONOTTA",
      value: 5467,
    },
    {
      label: "MADATUWA",
      value: 6099,
    },
    {
      label: "MAGULAGAMA",
      value: 6209,
    },
    {
      label: "MALWANA",
      value: 6580,
    },
    {
      label: "MAMUNUWA",
      value: 6613,
    },
    {
      label: "MEDAGAMA",
      value: 6933,
    },
    {
      label: "MELLAPOTTA",
      value: 7108,
    },
    {
      label: "MINUWANGETE",
      value: 7209,
    },
    {
      label: "MIRIHANEGAMA",
      value: 7220,
    },
    {
      label: "MUWANWELLEGEDARA",
      value: 7539,
    },
    {
      label: "NABADAWEWA",
      value: 7550,
    },
    {
      label: "NELLIYA",
      value: 7891,
    },
    {
      label: "NETIYA",
      value: 7918,
    },
    {
      label: "PADENIYA",
      value: 8221,
    },
    {
      label: "PATTALEGEDARA",
      value: 8860,
    },
    {
      label: "PENNITHAWA",
      value: 8967,
    },
    {
      label: "PIYUMGALLA",
      value: 9176,
    },
    {
      label: "POTHUWEWA",
      value: 9327,
    },
    {
      label: "RABUKANA",
      value: 9506,
    },
    {
      label: "RANDENIYA",
      value: 9638,
    },
    {
      label: "RATHMALE",
      value: 9717,
    },
    {
      label: "THENNAKONGAMA",
      value: 10601,
    },
    {
      label: "THISSAWA",
      value: 10706,
    },
    {
      label: "VILAKATUPOTHA",
      value: 11436,
    },
    {
      label: "WALPALUWA",
      value: 11641,
    },
    {
      label: "WANDURESSA",
      value: 11675,
    },
    {
      label: "WANDURESSA WELGALA",
      value: 11676,
    },
    {
      label: "WARIYAPOLA",
      value: 11732,
    },
    {
      label: "WELAWA",
      value: 11925,
    },
    {
      label: "WERAPOLA",
      value: 12100,
    },
    {
      label: "WERELLA",
      value: 12106,
    },
    {
      label: "WEWAGEDARA",
      value: 12136,
    },
  ],
  "313": [
    {
      label: "BALAGALA",
      value: 763,
    },
    {
      label: "BOPITIYA",
      value: 1204,
    },
    {
      label: "BOPITIYATHUDUWA",
      value: 1208,
    },
    {
      label: "DELATHURA EAST",
      value: 1662,
    },
    {
      label: "DELATHURA WEST",
      value: 1663,
    },
    {
      label: "DIKOVITA",
      value: 1867,
    },
    {
      label: "ELAKANDA",
      value: 2182,
    },
    {
      label: "ELAPITIWALA",
      value: 2192,
    },
    {
      label: "ELEHIWATTA",
      value: 2204,
    },
    {
      label: "EVARIWATTA",
      value: 2436,
    },
    {
      label: "GALUDUPITA",
      value: 2630,
    },
    {
      label: "GALWETIYA",
      value: 2643,
    },
    {
      label: "HEENKENDA",
      value: 3292,
    },
    {
      label: "HEKITTA",
      value: 3312,
    },
    {
      label: "HENDALA NORTH",
      value: 3341,
    },
    {
      label: "HENDALA SOUTH",
      value: 3342,
    },
    {
      label: "HORAPE",
      value: 3556,
    },
    {
      label: "HORAPETHUDUWA",
      value: 3557,
    },
    {
      label: "KERANGAPOKUNA",
      value: 5032,
    },
    {
      label: "KERAWALAPITIYA",
      value: 5033,
    },
    {
      label: "KUNJAWATTA",
      value: 5833,
    },
    {
      label: "KURUKULAWA NORTH",
      value: 5871,
    },
    {
      label: "KURUKULAWA SOUTH",
      value: 5872,
    },
    {
      label: "KURUNDUHENA",
      value: 5888,
    },
    {
      label: "MABOLA",
      value: 6069,
    },
    {
      label: "MAHA PAMUNUGAMA",
      value: 6253,
    },
    {
      label: "MAHABAGE",
      value: 6268,
    },
    {
      label: "MANGULPOKUNA",
      value: 6666,
    },
    {
      label: "MATAGODA",
      value: 6797,
    },
    {
      label: "MATTUMAGALA",
      value: 6836,
    },
    {
      label: "NAYAKAKANDA NORTH",
      value: 7827,
    },
    {
      label: "NAYAKAKANDA SOUTH",
      value: 7828,
    },
    {
      label: "NUGAPE",
      value: 8069,
    },
    {
      label: "PALLIYAWATTA NORTH",
      value: 8549,
    },
    {
      label: "PALLIYAWATTA SOUTH",
      value: 8550,
    },
    {
      label: "PAMUNUGAMA",
      value: 8592,
    },
    {
      label: "PARANAMBALAMA",
      value: 8783,
    },
    {
      label: "PATTIYAWALA",
      value: 8890,
    },
    {
      label: "PULLUHENA",
      value: 9384,
    },
    {
      label: "TELANGAPATHA",
      value: 10317,
    },
    {
      label: "THIMBIRIGASYAYA",
      value: 10655,
    },
    {
      label: "THUDUWEGEDARA",
      value: 10779,
    },
    {
      label: "USWETAKEIYAWA",
      value: 11254,
    },
    {
      label: "WATTALA",
      value: 11794,
    },
    {
      label: "WELIKADAMULLA",
      value: 11970,
    },
    {
      label: "WELISARA",
      value: 12000,
    },
  ],
  "314": [
    {
      label: "BEDIGAMA EAST",
      value: 990,
    },
    {
      label: "BEDIGAMA NORTH",
      value: 991,
    },
    {
      label: "BEDIGAMA SOUTH",
      value: 992,
    },
    {
      label: "BEDIGAMA WEST",
      value: 993,
    },
    {
      label: "HANDAPANGALA AYNA",
      value: 3154,
    },
    {
      label: "HEELLAGE AYNA",
      value: 3276,
    },
    {
      label: "KUDA BEDIGAMA",
      value: 5664,
    },
    {
      label: "MEDAGODA",
      value: 6947,
    },
    {
      label: "MULANYAYA",
      value: 7425,
    },
    {
      label: "MULGIRIGALA EAST",
      value: 7430,
    },
    {
      label: "MULGIRIGALA NORTH",
      value: 7431,
    },
    {
      label: "MULGIRIGALA SOUTH",
      value: 7432,
    },
    {
      label: "MULGIRIGALA WEST",
      value: 7433,
    },
  ],
  "315": [
    {
      label: "ALGAMA",
      value: 206,
    },
    {
      label: "AMBAHERA",
      value: 330,
    },
    {
      label: "BAMUNUGEDARA",
      value: 835,
    },
    {
      label: "BULUPITIYA",
      value: 1312,
    },
    {
      label: "CLOVIS WATTA",
      value: 1389,
    },
    {
      label: "DAMUNUGALA",
      value: 1499,
    },
    {
      label: "DEHIKUMBURA",
      value: 1641,
    },
    {
      label: "GALABADAGAMA",
      value: 2461,
    },
    {
      label: "GALLEHERA",
      value: 2582,
    },
    {
      label: "GINIPENDA",
      value: 2806,
    },
    {
      label: "GODAVITA",
      value: 2868,
    },
    {
      label: "GONAWA",
      value: 2937,
    },
    {
      label: "HANWELLA",
      value: 3182,
    },
    {
      label: "HURUGGAMUWA",
      value: 3628,
    },
    {
      label: "KADADUNNA",
      value: 4072,
    },
    {
      label: "KADURUWELLA",
      value: 4137,
    },
    {
      label: "KALUGAMUWA",
      value: 4342,
    },
    {
      label: "KANUMALE",
      value: 4570,
    },
    {
      label: "LOKAHETTIYA",
      value: 6035,
    },
    {
      label: "MADAWALA NORTH",
      value: 6105,
    },
    {
      label: "MADAWALA SOUTH",
      value: 6106,
    },
    {
      label: "MEDAGAMA",
      value: 6933,
    },
    {
      label: "MUDUNNA",
      value: 7408,
    },
    {
      label: "PARAKUMBURA",
      value: 8761,
    },
    {
      label: "PATHINWATTA",
      value: 8849,
    },
    {
      label: "PIDURUWELLA",
      value: 9066,
    },
    {
      label: "POOGALLA",
      value: 9260,
    },
    {
      label: "RANJANAGAMA",
      value: 9660,
    },
    {
      label: "SANDAGALA NORTH",
      value: 9924,
    },
    {
      label: "SANDAGALA SOUTH",
      value: 9926,
    },
    {
      label: "SEVENDANA",
      value: 10083,
    },
    {
      label: "THAMMITA",
      value: 10496,
    },
    {
      label: "UDUGAMA",
      value: 11009,
    },
    {
      label: "UHUMEEYA",
      value: 11101,
    },
    {
      label: "WEERAMBUGEDARA",
      value: 11857,
    },
    {
      label: "WEWELPOLA",
      value: 12165,
    },
    {
      label: "YALAWA",
      value: 12256,
    },
    {
      label: "YANTHAMPOLA",
      value: 12263,
    },
  ],
  "316": [
    {
      label: "ALUTH WEEDIYA",
      value: 254,
    },
    {
      label: "BANDARAMULLA",
      value: 854,
    },
    {
      label: "DENUWALA",
      value: 1759,
    },
    {
      label: "GALBOKKA EAST",
      value: 2529,
    },
    {
      label: "GALBOKKA WEST",
      value: 2530,
    },
    {
      label: "GARANDUWA",
      value: 2751,
    },
    {
      label: "GURUBEBILA",
      value: 2997,
    },
    {
      label: "HENWALA EAST",
      value: 3362,
    },
    {
      label: "HENWALA WEST",
      value: 3363,
    },
    {
      label: "HETTI WEEDIYA",
      value: 3371,
    },
    {
      label: "KAMBURUGAMUWA NORTH",
      value: 4402,
    },
    {
      label: "KAMBURUGAMUWA SOUTH",
      value: 4403,
    },
    {
      label: "KAMBURUGAMUWA WEST",
      value: 4404,
    },
    {
      label: "KAPPARATHOTA NORTH",
      value: 4581,
    },
    {
      label: "KAPPARATHOTA SOUTH",
      value: 4582,
    },
    {
      label: "KOHUNUGAMUWA",
      value: 5340,
    },
    {
      label: "KOTAVILA NORTH",
      value: 5588,
    },
    {
      label: "KOTAVILA SOUTH",
      value: 5589,
    },
    {
      label: "KOTAVILA WEST",
      value: 5590,
    },
    {
      label: "MAHA WEEDIYA",
      value: 6265,
    },
    {
      label: "MIDIGAMA EAST",
      value: 7164,
    },
    {
      label: "MIDIGAMA NORTH",
      value: 7165,
    },
    {
      label: "MIDIGAMA WEST",
      value: 7166,
    },
    {
      label: "MIRISSA NORTH",
      value: 7224,
    },
    {
      label: "MIRISSA SOUTH 1",
      value: 7225,
    },
    {
      label: "MIRISSA SOUTH 2",
      value: 7226,
    },
    {
      label: "MIRISSA UDUMULLA",
      value: 7227,
    },
    {
      label: "MIRISSA UDUPILA",
      value: 7228,
    },
    {
      label: "MOODUGAMUWA EAST",
      value: 7283,
    },
    {
      label: "MOODUGAMUWA WEST",
      value: 7284,
    },
    {
      label: "NIDANGALA",
      value: 7940,
    },
    {
      label: "PARANAKADE",
      value: 8782,
    },
    {
      label: "PATHEGAMA",
      value: 8842,
    },
    {
      label: "PELENA NORTH",
      value: 8931,
    },
    {
      label: "PELENA SOUTH",
      value: 8933,
    },
    {
      label: "PELENA WEST",
      value: 8934,
    },
    {
      label: "PITIDOOWA",
      value: 9144,
    },
    {
      label: "POLWATHUMODARA",
      value: 9243,
    },
    {
      label: "POLWATTA",
      value: 9245,
    },
    {
      label: "THAL ARAMBA EAST",
      value: 10331,
    },
    {
      label: "THAL ARAMBA NORTH",
      value: 10332,
    },
    {
      label: "THAL ARAMBA SOUTH",
      value: 10333,
    },
    {
      label: "THUDELLA",
      value: 10773,
    },
    {
      label: "WALANA",
      value: 11583,
    },
    {
      label: "WALLIWALA EAST",
      value: 11631,
    },
    {
      label: "WALLIWALA SOUTH",
      value: 11632,
    },
    {
      label: "WALLIWALA WEST",
      value: 11633,
    },
    {
      label: "WEKADA",
      value: 11896,
    },
  ],
  "317": [
    {
      label: "AMMADUWA",
      value: 389,
    },
    {
      label: "BADULLEGAMA",
      value: 735,
    },
    {
      label: "BAMBARAGALA",
      value: 809,
    },
    {
      label: "BELIMALIYADDA",
      value: 1019,
    },
    {
      label: "BOPITIGODA",
      value: 1203,
    },
    {
      label: "ELAMALPE",
      value: 2186,
    },
    {
      label: "GALGODAGAMA",
      value: 2554,
    },
    {
      label: "GALPAYA",
      value: 2611,
    },
    {
      label: "GANGODAGAMA",
      value: 2719,
    },
    {
      label: "HANDAGIRIGODA",
      value: 3150,
    },
    {
      label: "HANDAGIRIYA",
      value: 3151,
    },
    {
      label: "HATANGALA",
      value: 3233,
    },
    {
      label: "ILUKKUMBURA",
      value: 3852,
    },
    {
      label: "KALATUWAKANDA",
      value: 4250,
    },
    {
      label: "KONGASTHENNA",
      value: 5452,
    },
    {
      label: "KOTTIMBULWALA",
      value: 5627,
    },
    {
      label: "MADAWALALANDA",
      value: 6109,
    },
    {
      label: "MEDAGANOYA",
      value: 6943,
    },
    {
      label: "MUTTETTUPOLA",
      value: 7527,
    },
    {
      label: "PALUGAHAWELA",
      value: 8557,
    },
    {
      label: "PANANA",
      value: 8623,
    },
    {
      label: "PARAGAHAMADITTA",
      value: 8739,
    },
    {
      label: "PUSSATHOTA",
      value: 9452,
    },
    {
      label: "RANWALA",
      value: 9687,
    },
    {
      label: "THALAGASKANDA",
      value: 10344,
    },
    {
      label: "THENNAHENA",
      value: 10599,
    },
    {
      label: "UDAGANGODA",
      value: 10896,
    },
    {
      label: "UDARANWALA",
      value: 10960,
    },
    {
      label: "URAWALA",
      value: 11211,
    },
    {
      label: "WELIGEPOLA",
      value: 11955,
    },
  ],
  "318": [
    {
      label: "ALINCHIPOTHANA",
      value: 213,
    },
    {
      label: "ALUTHWEWA",
      value: 279,
    },
    {
      label: "BO-ATTA",
      value: 1107,
    },
    {
      label: "BORAWEWA",
      value: 1236,
    },
    {
      label: "GINIDAMANA",
      value: 2796,
    },
    {
      label: "KADAWATHMADUWA",
      value: 4085,
    },
    {
      label: "KANDAKADUWA",
      value: 4455,
    },
    {
      label: "KARAPOLA",
      value: 4706,
    },
    {
      label: "KATUWANVILA EAST",
      value: 4867,
    },
    {
      label: "KATUWANVILA WEST",
      value: 4868,
    },
    {
      label: "KUDAPOKUNA",
      value: 5726,
    },
    {
      label: "MADURANGALA",
      value: 6168,
    },
    {
      label: "MAHAWEWA",
      value: 6392,
    },
    {
      label: "MAHINDAGAMA",
      value: 6410,
    },
    {
      label: "MALINDA",
      value: 6547,
    },
    {
      label: "MALVILA",
      value: 6578,
    },
    {
      label: "MANGULPOKUNA",
      value: 6666,
    },
    {
      label: "MENIKWELA",
      value: 7124,
    },
    {
      label: "MONARATHENNA",
      value: 7277,
    },
    {
      label: "MUTHUGALA",
      value: 7513,
    },
    {
      label: "MUTHUWELLA",
      value: 7522,
    },
    {
      label: "NELUMWEWA",
      value: 7904,
    },
    {
      label: "RIDEEPOKUNA",
      value: 9793,
    },
    {
      label: "RUHUNUKETHA",
      value: 9832,
    },
    {
      label: "SANDUNPITIYA",
      value: 9942,
    },
    {
      label: "SENAPURA",
      value: 10045,
    },
    {
      label: "SEVANAPITIYA",
      value: 10082,
    },
    {
      label: "SINHAPURA",
      value: 10118,
    },
    {
      label: "SUSIRIGAMA",
      value: 10303,
    },
    {
      label: "WELIKANDA",
      value: 11972,
    },
  ],
  "319": [
    {
      label: "ALAKOLAGALA",
      value: 166,
    },
    {
      label: "ALAWATHUGODA",
      value: 194,
    },
    {
      label: "ALUGOLLA",
      value: 237,
    },
    {
      label: "AMBAGAHAKUMBURA",
      value: 308,
    },
    {
      label: "AMBEWELA",
      value: 378,
    },
    {
      label: "BIBILIGAMUWA",
      value: 1081,
    },
    {
      label: "BOGAHAKUMBURA",
      value: 1123,
    },
    {
      label: "BORAGAS",
      value: 1210,
    },
    {
      label: "BORALANDA",
      value: 1215,
    },
    {
      label: "DAMBAVINNA",
      value: 1465,
    },
    {
      label: "DAYARABA WATTA",
      value: 1562,
    },
    {
      label: "DIKKAPITIYA",
      value: 1860,
    },
    {
      label: "DIMUTHUGAMA",
      value: 1883,
    },
    {
      label: "DIVITHOTAWELA",
      value: 1889,
    },
    {
      label: "DIVURUMGAMA",
      value: 1917,
    },
    {
      label: "ERABADDA",
      value: 2308,
    },
    {
      label: "GALEDANDA",
      value: 2535,
    },
    {
      label: "GAVARAMMANA",
      value: 2760,
    },
    {
      label: "GIRAMBE",
      value: 2819,
    },
    {
      label: "GURUTHALAWA",
      value: 3023,
    },
    {
      label: "HELAYALKUMBURA",
      value: 3325,
    },
    {
      label: "HEWANAKUMBURA",
      value: 3390,
    },
    {
      label: "HIMBILIYAGOLLA",
      value: 3421,
    },
    {
      label: "HINGURUGAMUWA",
      value: 3449,
    },
    {
      label: "HINNARANGOLLA",
      value: 3457,
    },
    {
      label: "HULANKAPOLLA",
      value: 3584,
    },
    {
      label: "IDAMEGAMA",
      value: 3641,
    },
    {
      label: "KABILLEGAMA",
      value: 4061,
    },
    {
      label: "KALUBULULANDA",
      value: 4326,
    },
    {
      label: "KANDEPUHULPOLA",
      value: 4506,
    },
    {
      label: "KARAGASTHENNA",
      value: 4621,
    },
    {
      label: "KEPPETIPOLA",
      value: 5022,
    },
    {
      label: "KETAKELLA",
      value: 5061,
    },
    {
      label: "KOSKANUWEGAMA",
      value: 5538,
    },
    {
      label: "KOTAKITHULA",
      value: 5573,
    },
    {
      label: "LANDEGAMA",
      value: 5950,
    },
    {
      label: "MAHATHENNA",
      value: 6366,
    },
    {
      label: "MALIGATHENNA",
      value: 6536,
    },
    {
      label: "MALPOTHA",
      value: 6571,
    },
    {
      label: "MAVITHIKUMBURA",
      value: 6863,
    },
    {
      label: "MEDAGEDARAGAMA",
      value: 6945,
    },
    {
      label: "MIRAHAWATTA",
      value: 7216,
    },
    {
      label: "NAWELA",
      value: 7823,
    },
    {
      label: "NEDUNGAMUWA",
      value: 7846,
    },
    {
      label: "OHIYA",
      value: 8115,
    },
    {
      label: "OHIYA ESTATE",
      value: 8116,
    },
    {
      label: "PAHALAYALKUMBURA",
      value: 8385,
    },
    {
      label: "PALUGAMA ELLA",
      value: 8559,
    },
    {
      label: "PALUGAMA TOWN",
      value: 8560,
    },
    {
      label: "PITAPOLA",
      value: 9137,
    },
    {
      label: "PUHULPOLA",
      value: 9357,
    },
    {
      label: "PURANWELA",
      value: 9443,
    },
    {
      label: "RAHANGALA",
      value: 9536,
    },
    {
      label: "RATHKARAWWA",
      value: 9708,
    },
    {
      label: "SILMIYAPURA",
      value: 10103,
    },
    {
      label: "THENNAKONWELA",
      value: 10603,
    },
    {
      label: "UDAKENDAGOLLA",
      value: 10922,
    },
    {
      label: "UDUPEELLA",
      value: 11032,
    },
    {
      label: "VIDURUPOLA",
      value: 11412,
    },
    {
      label: "WANGIYAKUMBURA",
      value: 11680,
    },
    {
      label: "WELIKADAGAMA",
      value: 11969,
    },
    {
      label: "WELIMADA TOWN",
      value: 11981,
    },
    {
      label: "WELIMADA WATTA",
      value: 11982,
    },
    {
      label: "YALPATHWELA",
      value: 12261,
    },
  ],
  "320": [
    {
      label: "EHETUGASWEWA",
      value: 2153,
    },
    {
      label: "ETHAWETUNAWEWA",
      value: 2392,
    },
    {
      label: "GAJABAPURA",
      value: 2453,
    },
    {
      label: "JANAKAPURA",
      value: 4006,
    },
    {
      label: "KALAYANAPURA",
      value: 4262,
    },
    {
      label: "KIRIIBBANWEWA",
      value: 5159,
    },
    {
      label: "NAWAGAJABAPURA",
      value: 7793,
    },
    {
      label: "NIKAWEWA LEFT",
      value: 7963,
    },
    {
      label: "NIKAWEWA SOUTH",
      value: 7964,
    },
  ],
  "321": [
    {
      label: "BATHALAHENA",
      value: 940,
    },
    {
      label: "BERALELIYA",
      value: 1058,
    },
    {
      label: "BORALA",
      value: 1214,
    },
    {
      label: "DENIPITIYA CENTRAL",
      value: 1751,
    },
    {
      label: "DENIPITIYA EAST",
      value: 1752,
    },
    {
      label: "DENIPITIYA WEST",
      value: 1753,
    },
    {
      label: "HALLALA",
      value: 3087,
    },
    {
      label: "IBBAWALA",
      value: 3636,
    },
    {
      label: "JAMBUREGODA EAST",
      value: 4002,
    },
    {
      label: "JAMBUREGODA WEST",
      value: 4003,
    },
    {
      label: "JAYAWICKRAMAPURA",
      value: 4043,
    },
    {
      label: "KAPUWATTA",
      value: 4601,
    },
    {
      label: "KOKMADUWA NORTH",
      value: 5354,
    },
    {
      label: "MADURAGODA",
      value: 6167,
    },
    {
      label: "MEERUPPA",
      value: 7069,
    },
    {
      label: "MOONAMALPE",
      value: 7296,
    },
    {
      label: "NALAWANA",
      value: 7628,
    },
    {
      label: "NIVITHIWELBOKKA",
      value: 8036,
    },
    {
      label: "PADILI KOKMADUWA",
      value: 8222,
    },
    {
      label: "PALALLA",
      value: 8410,
    },
    {
      label: "PENETIYANA EAST",
      value: 8960,
    },
    {
      label: "PENETIYANA WEST",
      value: 8961,
    },
    {
      label: "PORAMBA KANANKE NORTH",
      value: 9287,
    },
    {
      label: "PORAMBA KANANKE SOUTH",
      value: 9288,
    },
    {
      label: "PUHULAHENA",
      value: 9352,
    },
    {
      label: "SAHABANDU KOKMADUWA",
      value: 9855,
    },
    {
      label: "UDUKAWA NORTH",
      value: 11021,
    },
    {
      label: "UDUKAWA SOUTH",
      value: 11022,
    },
    {
      label: "URUVITIYA",
      value: 11238,
    },
    {
      label: "VILEGODA",
      value: 11448,
    },
    {
      label: "WAHALA KANANKE NORTH",
      value: 11539,
    },
    {
      label: "WAHALA KANANKE SOUTH",
      value: 11540,
    },
    {
      label: "WARAKAPITIYA EAST",
      value: 11717,
    },
    {
      label: "WARAKAPITIYA NORTH",
      value: 11718,
    },
    {
      label: "WARAKAPITIYA SOUTH",
      value: 11719,
    },
    {
      label: "WATAGEDARAMULLA",
      value: 11747,
    },
    {
      label: "WELIPITIYA",
      value: 11996,
    },
    {
      label: "WELLANA",
      value: 12028,
    },
  ],
  "322": [
    {
      label: "AGALIYA",
      value: 62,
    },
    {
      label: "AMPEGAMA",
      value: 399,
    },
    {
      label: "DIVITHURA",
      value: 1890,
    },
    {
      label: "DIVITHURA EAST",
      value: 1891,
    },
    {
      label: "DIVITHURA SOUTH",
      value: 1892,
    },
    {
      label: "ETHKANDURA",
      value: 2410,
    },
    {
      label: "GALAHENKANDA",
      value: 2489,
    },
    {
      label: "HAMINGALA",
      value: 3142,
    },
    {
      label: "KUTTIYAWATTA",
      value: 5926,
    },
    {
      label: "MADDEVILA",
      value: 6117,
    },
    {
      label: "MIRISWATTA",
      value: 7232,
    },
    {
      label: "NAMBARA ATTA",
      value: 7658,
    },
    {
      label: "NUGETHOTA",
      value: 8083,
    },
    {
      label: "OLD COLONY",
      value: 8128,
    },
    {
      label: "PATHAWELIVITIYA",
      value: 8838,
    },
    {
      label: "PATHAWELIVITIYA NORTH",
      value: 8839,
    },
    {
      label: "POLGAHAVILA",
      value: 9210,
    },
    {
      label: "THANABADDEGAMA",
      value: 10502,
    },
    {
      label: "WADUWELIVITIYA",
      value: 11526,
    },
    {
      label: "WADUWELIVITIYA NORTH",
      value: 11527,
    },
  ],
  "323": [
    {
      label: "ANAPALLAMA",
      value: 449,
    },
    {
      label: "ANDAWELAYAYA",
      value: 463,
    },
    {
      label: "BALAHARUWA",
      value: 771,
    },
    {
      label: "BUDURUWAGALA",
      value: 1288,
    },
    {
      label: "DEBARA ARA",
      value: 1564,
    },
    {
      label: "DIMBULAMURAYA",
      value: 1875,
    },
    {
      label: "ETHILIWEWA",
      value: 2401,
    },
    {
      label: "GALBOKKA",
      value: 2528,
    },
    {
      label: "HANDAPANAGALA",
      value: 3152,
    },
    {
      label: "KITHULKOTE",
      value: 5253,
    },
    {
      label: "KOTIKAMBOKKA",
      value: 5603,
    },
    {
      label: "KURUGAMA",
      value: 5863,
    },
    {
      label: "MAHA ARAGAMA",
      value: 6219,
    },
    {
      label: "NELUWAGALA",
      value: 7907,
    },
    {
      label: "NUGAYAYA",
      value: 8074,
    },
    {
      label: "PUBUDUWEWA",
      value: 9342,
    },
    {
      label: "RANDENIGODAYAYA",
      value: 9637,
    },
    {
      label: "RANDENIYA",
      value: 9638,
    },
    {
      label: "SIRIPURAGAMA",
      value: 10156,
    },
    {
      label: "SIYAMBALAGUNAYA",
      value: 10201,
    },
    {
      label: "SUDUPANAWELA",
      value: 10284,
    },
    {
      label: "THELULLA",
      value: 10584,
    },
    {
      label: "THELULLA COLONY",
      value: 10585,
    },
    {
      label: "UVA KUDAOYA",
      value: 11267,
    },
    {
      label: "VEHERAYAYA",
      value: 11373,
    },
    {
      label: "VEHERAYAYA COLONY",
      value: 11374,
    },
    {
      label: "WARUNAGAMA",
      value: 11735,
    },
    {
      label: "WELLAWAYA",
      value: 12037,
    },
    {
      label: "YALABOWA",
      value: 12253,
    },
  ],
  "324": [
    {
      label: "ALUTTOTA",
      value: 281,
    },
    {
      label: "ANGAMPITIYA EAST",
      value: 484,
    },
    {
      label: "ANGAMPITIYA WEST",
      value: 485,
    },
    {
      label: "BANDIRIPPUWA EAST",
      value: 872,
    },
    {
      label: "BANDIRIPPUWA NORTH",
      value: 873,
    },
    {
      label: "BANDIRIPPUWA WEST",
      value: 874,
    },
    {
      label: "BOLANA",
      value: 1155,
    },
    {
      label: "BOLAWATTA",
      value: 1159,
    },
    {
      label: "BORALESSA EAST",
      value: 1223,
    },
    {
      label: "BORALESSA NORTH",
      value: 1224,
    },
    {
      label: "BORALESSA SOUTH",
      value: 1225,
    },
    {
      label: "BORALESSA WEST",
      value: 1226,
    },
    {
      label: "DUMMALADENIYA EAST",
      value: 2063,
    },
    {
      label: "DUMMALADENIYA NORTH",
      value: 2064,
    },
    {
      label: "DUMMALADENIYA SOUTH",
      value: 2065,
    },
    {
      label: "DUMMALADENIYA WEST",
      value: 2066,
    },
    {
      label: "HANATHOTUPOLA",
      value: 3145,
    },
    {
      label: "KADAWATHA",
      value: 4083,
    },
    {
      label: "KAMMALA",
      value: 4411,
    },
    {
      label: "KOLINJADIYA EAST",
      value: 5390,
    },
    {
      label: "KOLINJADIYA NORTH",
      value: 5391,
    },
    {
      label: "KOLINJADIYA SOUTH",
      value: 5392,
    },
    {
      label: "KOLINJADIYA WEST",
      value: 5393,
    },
    {
      label: "LUNUVILA EAST",
      value: 6051,
    },
    {
      label: "LUNUVILA SOUTH",
      value: 6052,
    },
    {
      label: "LUNUVILA WEST",
      value: 6053,
    },
    {
      label: "MEDA DUMMALADENIYA",
      value: 6902,
    },
    {
      label: "MEDA LUNUVILA",
      value: 6915,
    },
    {
      label: "MEDA NAINAMADAMA",
      value: 6919,
    },
    {
      label: "MEDA ULHITIYAWA",
      value: 6925,
    },
    {
      label: "MEDA WENNAPPUWA",
      value: 6927,
    },
    {
      label: "MIRISSANKOTUWA NORTH",
      value: 7230,
    },
    {
      label: "MIRISSANKOTUWA SOUTH",
      value: 7231,
    },
    {
      label: "NAINAMADAMA EAST",
      value: 7597,
    },
    {
      label: "NAINAMADAMA WEST",
      value: 7598,
    },
    {
      label: "RANGAMMULLA",
      value: 9652,
    },
    {
      label: "SINDATHRIYA",
      value: 10106,
    },
    {
      label: "SIRIGAMPALA NORTH",
      value: 10143,
    },
    {
      label: "SIRIGAMPALA SOUTH",
      value: 10144,
    },
    {
      label: "THAMBARAVILA",
      value: 10473,
    },
    {
      label: "THOPPUTHOTA",
      value: 10739,
    },
    {
      label: "UDASIRIGAMA",
      value: 10963,
    },
    {
      label: "ULHITIYAWA NORTH",
      value: 11119,
    },
    {
      label: "ULHITIYAWA SOUTH",
      value: 11120,
    },
    {
      label: "ULHITIYAWA WEST",
      value: 11121,
    },
    {
      label: "WAIKKALA NORTH",
      value: 11553,
    },
    {
      label: "WAIKKALA SOUTH",
      value: 11554,
    },
    {
      label: "WELLAMANKARAYA",
      value: 12025,
    },
    {
      label: "WENNAPPUWA EAST",
      value: 12061,
    },
    {
      label: "WENNAPPUWA NORTH",
      value: 12062,
    },
    {
      label: "WENNAPPUWA SOUTH",
      value: 12063,
    },
    {
      label: "WENNAPPUWA WEST",
      value: 12064,
    },
  ],
  "325": [
    {
      label: "80 YAYA",
      value: 8,
    },
    {
      label: "ALIWANGUWA",
      value: 216,
    },
    {
      label: "ALIYAWALA",
      value: 218,
    },
    {
      label: "BATHGAMPALA",
      value: 946,
    },
    {
      label: "BOGAHAWEWA",
      value: 1131,
    },
    {
      label: "DEWAGIRIYA",
      value: 1786,
    },
    {
      label: "DUNUVILAPITIYA",
      value: 2094,
    },
    {
      label: "GEMBURUOYA",
      value: 2775,
    },
    {
      label: "GURUWELAYAYA",
      value: 3026,
    },
    {
      label: "HANDUNGAMUWA",
      value: 3164,
    },
    {
      label: "HETTIPOLA",
      value: 3378,
    },
    {
      label: "HIMBILIYAKADA",
      value: 3422,
    },
    {
      label: "KARAWGAHAWEWA",
      value: 4730,
    },
    {
      label: "KUMBUKANDANA",
      value: 5798,
    },
    {
      label: "KUMBUKOYA",
      value: 5810,
    },
    {
      label: "LEDIYANGALA",
      value: 5969,
    },
    {
      label: "MALGAMMANA",
      value: 6520,
    },
    {
      label: "MARAKA",
      value: 6735,
    },
    {
      label: "MEDAKANDA",
      value: 6951,
    },
    {
      label: "MEEWAOBE",
      value: 7083,
    },
    {
      label: "MORAGAHA ULPATHA",
      value: 7305,
    },
    {
      label: "NAGOLLA",
      value: 7584,
    },
    {
      label: "NAMINIGAMA",
      value: 7661,
    },
    {
      label: "NAMINIOYA",
      value: 7662,
    },
    {
      label: "NUGAGOLLA",
      value: 8065,
    },
    {
      label: "PALUPITIYA",
      value: 8578,
    },
    {
      label: "PERAKANATTA",
      value: 8975,
    },
    {
      label: "PIDURUELLA",
      value: 9065,
    },
    {
      label: "RADUNNEWEWA",
      value: 9528,
    },
    {
      label: "RATTOTAYAYA",
      value: 9755,
    },
    {
      label: "SONUTTA",
      value: 10228,
    },
    {
      label: "SULUGUNE",
      value: 10292,
    },
    {
      label: "THUNHIRIYAWEWA",
      value: 10806,
    },
    {
      label: "TOPWALAPITIYA",
      value: 10838,
    },
    {
      label: "UDUWELWALA",
      value: 11079,
    },
    {
      label: "VEHERAGALA",
      value: 11366,
    },
    {
      label: "VIHARAGAMA",
      value: 11423,
    },
    {
      label: "WANARAWA",
      value: 11660,
    },
    {
      label: "WILGAMUWA",
      value: 12196,
    },
  ],
  "326": [
    {
      label: "BADUNGALA",
      value: 740,
    },
    {
      label: "BERANAGODA",
      value: 1066,
    },
    {
      label: "ELLA IHALA",
      value: 2220,
    },
    {
      label: "GAHALAKOLADENIYA",
      value: 2452,
    },
    {
      label: "HIRIYAMALKUMBURA",
      value: 3485,
    },
    {
      label: "IHALA KARAGODA",
      value: 3719,
    },
    {
      label: "IHALA NAKIYADENIYA",
      value: 3763,
    },
    {
      label: "IHALA THELLAMBURA",
      value: 3783,
    },
    {
      label: "IHALA WALPALA",
      value: 3797,
    },
    {
      label: "KALUDIYAWALA",
      value: 4330,
    },
    {
      label: "KARAGODA",
      value: 4623,
    },
    {
      label: "KOTTAWA",
      value: 5619,
    },
    {
      label: "KOTTAWA EAST",
      value: 5620,
    },
    {
      label: "KOTTAWA WEST",
      value: 5624,
    },
    {
      label: "MAGEDARA",
      value: 6203,
    },
    {
      label: "MAGEDARA EAST",
      value: 6204,
    },
    {
      label: "MAGEDARA NORTH",
      value: 6205,
    },
    {
      label: "MORAKETIYA",
      value: 7333,
    },
    {
      label: "NABADAWA",
      value: 7549,
    },
    {
      label: "NAKIYADENIYA",
      value: 7612,
    },
    {
      label: "NAKIYADENIYA NORTH",
      value: 7613,
    },
    {
      label: "NAWALA",
      value: 7801,
    },
    {
      label: "NEVUNGALA",
      value: 7925,
    },
    {
      label: "NEVUNGALA SOUTH",
      value: 7926,
    },
    {
      label: "PAHALA KARAGODA",
      value: 8294,
    },
    {
      label: "PAHALA THELLAMBURA",
      value: 8353,
    },
    {
      label: "PAHALA WALPOLA",
      value: 8366,
    },
    {
      label: "POLPAGODA",
      value: 9233,
    },
    {
      label: "POLPAGODA WEST",
      value: 9234,
    },
    {
      label: "RATHAMALAKETIYA",
      value: 9701,
    },
    {
      label: "THALGAMPALA",
      value: 10418,
    },
    {
      label: "THALGAMPALA NORTH",
      value: 10419,
    },
    {
      label: "THELLAMBURA NORTH",
      value: 10581,
    },
    {
      label: "THELLAMBURA SOUTH",
      value: 10582,
    },
    {
      label: "UDUBETTAWA",
      value: 11001,
    },
    {
      label: "UDUBETTAWA WEST",
      value: 11002,
    },
    {
      label: "UDUMALAGALA",
      value: 11026,
    },
    {
      label: "UDUWELLA",
      value: 11078,
    },
    {
      label: "WATHOGALA",
      value: 11765,
    },
    {
      label: "WATTEHENA",
      value: 11803,
    },
    {
      label: "WELENDAWA",
      value: 11931,
    },
    {
      label: "YAKKALAMULLA",
      value: 12242,
    },
    {
      label: "YAKKALAMULLA EAST",
      value: 12243,
    },
    {
      label: "YATAMALAGALA",
      value: 12276,
    },
  ],
  "327": [
    {
      label: "ALOKAGAMA",
      value: 228,
    },
    {
      label: "ALUTHGAMA",
      value: 259,
    },
    {
      label: "ALUTHGAMA NORTH",
      value: 264,
    },
    {
      label: "ALUTHWATTA",
      value: 277,
    },
    {
      label: "AMBANPOLA",
      value: 362,
    },
    {
      label: "ASGIRI DORAKUMBURA",
      value: 622,
    },
    {
      label: "ASGIRI DORAKUMBURA EAST",
      value: 623,
    },
    {
      label: "DALUWELA",
      value: 1442,
    },
    {
      label: "DANGAN PLACE",
      value: 1529,
    },
    {
      label: "DEEVILLA",
      value: 1604,
    },
    {
      label: "DEEVILLA NORTH",
      value: 1605,
    },
    {
      label: "DEEVILLA SOUTH",
      value: 1606,
    },
    {
      label: "DELGOLLA",
      value: 1685,
    },
    {
      label: "DIKKUMBURA",
      value: 1864,
    },
    {
      label: "DIKKUMBURA WEST",
      value: 1865,
    },
    {
      label: "DULLEWA",
      value: 2055,
    },
    {
      label: "DULLEWA EAST",
      value: 2056,
    },
    {
      label: "ETHIPALLAWALA",
      value: 2406,
    },
    {
      label: "ETHIPOLA",
      value: 2407,
    },
    {
      label: "ETHIPOLA WEST",
      value: 2408,
    },
    {
      label: "GALAGAMA",
      value: 2468,
    },
    {
      label: "GALALIYADDA",
      value: 2500,
    },
    {
      label: "GAMMULLA",
      value: 2668,
    },
    {
      label: "IDANGAMA",
      value: 3644,
    },
    {
      label: "KAVUDUPELELLA",
      value: 4892,
    },
    {
      label: "LAKSHAHENA",
      value: 5943,
    },
    {
      label: "MADADENIYA",
      value: 6075,
    },
    {
      label: "MAHAWELA",
      value: 6384,
    },
    {
      label: "MAHAWELA WEST",
      value: 6386,
    },
    {
      label: "MALIGATHENNA",
      value: 6536,
    },
    {
      label: "MATHALAPITIYA",
      value: 6806,
    },
    {
      label: "MATHALAPITIYA SOUTH",
      value: 6807,
    },
    {
      label: "MATHALE NORTH",
      value: 6808,
    },
    {
      label: "MEDIYAPOLA",
      value: 7002,
    },
    {
      label: "MOTTUWELA",
      value: 7378,
    },
    {
      label: "MURUTHAWATTA",
      value: 7502,
    },
    {
      label: "NAGOLLA",
      value: 7584,
    },
    {
      label: "NIKAGOLLA",
      value: 7948,
    },
    {
      label: "NIKAGOLLA NORTH",
      value: 7949,
    },
    {
      label: "PAMUNUWA",
      value: 8594,
    },
    {
      label: "POLWATTA",
      value: 9245,
    },
    {
      label: "RATHALAWEWA",
      value: 9700,
    },
    {
      label: "RATHNINDA",
      value: 9741,
    },
    {
      label: "SELAGAMA",
      value: 10017,
    },
    {
      label: "SELAGAMA EAST",
      value: 10018,
    },
    {
      label: "THALGAHAGODA",
      value: 10414,
    },
    {
      label: "THEMBILIDENIYA",
      value: 10587,
    },
    {
      label: "UDAGAMA",
      value: 10891,
    },
    {
      label: "UDAGAMA WEST",
      value: 10894,
    },
    {
      label: "UDASGIRIYA",
      value: 10962,
    },
    {
      label: "UNAWERUWA",
      value: 11165,
    },
    {
      label: "URULEWATTA",
      value: 11230,
    },
    {
      label: "WALAWELA",
      value: 11604,
    },
    {
      label: "WALPOLA",
      value: 11647,
    },
    {
      label: "WATTEGEDARA",
      value: 11802,
    },
    {
      label: "YATAWATTA",
      value: 12285,
    },
  ],
  "328": [
    {
      label: "ALAGALLA WATTA",
      value: 156,
    },
    {
      label: "AMUNUPURA",
      value: 426,
    },
    {
      label: "ARAMBEGAMA EAST",
      value: 565,
    },
    {
      label: "ARAMBEGAMA WEST",
      value: 566,
    },
    {
      label: "BALANA",
      value: 779,
    },
    {
      label: "BATHGODA",
      value: 948,
    },
    {
      label: "BULUMULLA",
      value: 1311,
    },
    {
      label: "DANTHURE",
      value: 1545,
    },
    {
      label: "DEHIANGA NORTH",
      value: 1623,
    },
    {
      label: "DEHIANGA SOUTH",
      value: 1624,
    },
    {
      label: "DEHIDENIYA EAST",
      value: 1628,
    },
    {
      label: "DEHIDENIYA WEST",
      value: 1630,
    },
    {
      label: "DEHIGAMA EAST",
      value: 1634,
    },
    {
      label: "DEHIGAMA NORTH",
      value: 1635,
    },
    {
      label: "DEHIGAMA SOUTH",
      value: 1636,
    },
    {
      label: "DELDENIYA",
      value: 1664,
    },
    {
      label: "DIYAPALAGODA",
      value: 1940,
    },
    {
      label: "DOLUWA EAST",
      value: 1998,
    },
    {
      label: "DOLUWA WEST",
      value: 1999,
    },
    {
      label: "EDANDUWAWA EAST",
      value: 2117,
    },
    {
      label: "EDANDUWAWA WEST",
      value: 2118,
    },
    {
      label: "EMBILMEEGAMA NORTH",
      value: 2280,
    },
    {
      label: "EMBILMEEGAMA SOUTH",
      value: 2281,
    },
    {
      label: "GANNORUWA CENTRAL",
      value: 2736,
    },
    {
      label: "GANNORUWA EAST",
      value: 2737,
    },
    {
      label: "GANNORUWA WEST",
      value: 2738,
    },
    {
      label: "GIRAGAMA",
      value: 2817,
    },
    {
      label: "GODIGAMUWA",
      value: 2877,
    },
    {
      label: "GONDENIYA",
      value: 2944,
    },
    {
      label: "GOVINDALA",
      value: 2977,
    },
    {
      label: "GURUGAMA",
      value: 3004,
    },
    {
      label: "HALIYADDA",
      value: 3083,
    },
    {
      label: "IHALA ALAGALLA",
      value: 3666,
    },
    {
      label: "IHALA DODAMWALA",
      value: 3682,
    },
    {
      label: "IHALA KOBBEKADUWA",
      value: 3727,
    },
    {
      label: "ILUKWATTA",
      value: 3860,
    },
    {
      label: "IMBULMALGAMA",
      value: 3885,
    },
    {
      label: "KADAWATHGAMA",
      value: 4084,
    },
    {
      label: "KADUGANNAWA TOWN",
      value: 4118,
    },
    {
      label: "KANDANGAMA NORTH",
      value: 4472,
    },
    {
      label: "KANDANGAMA SOUTH",
      value: 4473,
    },
    {
      label: "KARUWALAWATTA",
      value: 4757,
    },
    {
      label: "KAVUDUPANA",
      value: 4891,
    },
    {
      label: "KENDAKADUWA",
      value: 5004,
    },
    {
      label: "KETAKUMBURA",
      value: 5063,
    },
    {
      label: "KIRIBATHKUMBURA EAST",
      value: 5146,
    },
    {
      label: "KIRIBATHKUMBURA WEST",
      value: 5147,
    },
    {
      label: "KIRIMETIYA WATTA",
      value: 5176,
    },
    {
      label: "KOBBEKADUWA",
      value: 5285,
    },
    {
      label: "KOTABOGODA",
      value: 5556,
    },
    {
      label: "KOTALIGODA NORTH",
      value: 5575,
    },
    {
      label: "KOTALIGODA SOUTH",
      value: 5576,
    },
    {
      label: "KUDAOYA",
      value: 5719,
    },
    {
      label: "KURUNDUWATTA",
      value: 5891,
    },
    {
      label: "MADARANGODA",
      value: 6097,
    },
    {
      label: "MADILIGAMA",
      value: 6135,
    },
    {
      label: "MALGAMMANA",
      value: 6520,
    },
    {
      label: "MALIGATHENNA",
      value: 6536,
    },
    {
      label: "MAMUDAWALA",
      value: 6611,
    },
    {
      label: "MANGALAGAMA",
      value: 6662,
    },
    {
      label: "MENIKDIWELA",
      value: 7119,
    },
    {
      label: "MOLADANDA",
      value: 7259,
    },
    {
      label: "MORAGOLLA MAHAKANDA",
      value: 7322,
    },
    {
      label: "MOTANA DEKINDA",
      value: 7372,
    },
    {
      label: "MUDALIWATTA",
      value: 7387,
    },
    {
      label: "MUNWATHUGODA",
      value: 7476,
    },
    {
      label: "PAHALA DODAMWALA",
      value: 8252,
    },
    {
      label: "PAHALA MUDALIWATTA",
      value: 8333,
    },
    {
      label: "PAHALA RATHMEEWALA",
      value: 8347,
    },
    {
      label: "PAHALA YATIGAMMANA",
      value: 8377,
    },
    {
      label: "PANABOKKA",
      value: 8598,
    },
    {
      label: "PARAKATAWELLA",
      value: 8757,
    },
    {
      label: "PELAWA IHALA MEDA",
      value: 8919,
    },
    {
      label: "PELAWA IHALAGAMA",
      value: 8920,
    },
    {
      label: "PELAWA PAHALAGAMA",
      value: 8921,
    },
    {
      label: "PILAPITIYA",
      value: 9077,
    },
    {
      label: "PILIMATHALAWA",
      value: 9088,
    },
    {
      label: "POTTEPITIYA",
      value: 9332,
    },
    {
      label: "RANAWANA",
      value: 9629,
    },
    {
      label: "SIYAMBALAGODA",
      value: 10196,
    },
    {
      label: "SOORIYAGODA",
      value: 10235,
    },
    {
      label: "THISMADA",
      value: 10696,
    },
    {
      label: "UDA ERIYAGAMA EAST",
      value: 10864,
    },
    {
      label: "UDA ERIYAGAMA WEST",
      value: 10865,
    },
    {
      label: "UDARATHMEEWALA",
      value: 10961,
    },
    {
      label: "UDAWELA NADITHALAWA",
      value: 10980,
    },
    {
      label: "UDAWELA PAHALAGAMA",
      value: 10981,
    },
    {
      label: "UDAWELA PALLEMADITTA",
      value: 10982,
    },
    {
      label: "URAPOLA",
      value: 11205,
    },
    {
      label: "WALGAMPAYA",
      value: 11622,
    },
    {
      label: "WALGOWWAGODA",
      value: 11624,
    },
    {
      label: "WATHURAKUMBURA",
      value: 11781,
    },
    {
      label: "WERALUGOLLA",
      value: 12096,
    },
    {
      label: "YAHALATHENNA",
      value: 12214,
    },
    {
      label: "YATIGAMMANA",
      value: 12291,
    },
  ],
  "329": [
    {
      label: "AMANAWALA",
      value: 297,
    },
    {
      label: "BERANNAWA",
      value: 1067,
    },
    {
      label: "DOMBEPOLA",
      value: 2014,
    },
    {
      label: "DUNUKEDENIYA",
      value: 2083,
    },
    {
      label: "GALPATHA",
      value: 2608,
    },
    {
      label: "GANEPALLA",
      value: 2701,
    },
    {
      label: "GARAGODA IHALA",
      value: 2749,
    },
    {
      label: "GARAGODA PAHALA",
      value: 2750,
    },
    {
      label: "GONAGAMUWA",
      value: 2913,
    },
    {
      label: "HAKBELLAWAKA",
      value: 3059,
    },
    {
      label: "JAYAVINDA GAMA",
      value: 4039,
    },
    {
      label: "KABULUMULLA",
      value: 4062,
    },
    {
      label: "KALUKOHUTHENNA",
      value: 4349,
    },
    {
      label: "KIRIKOHUTHENNA",
      value: 5166,
    },
    {
      label: "KITHULGALA NORTH",
      value: 5246,
    },
    {
      label: "KITHULGALA SOUTH",
      value: 5247,
    },
    {
      label: "MAHABAGE",
      value: 6268,
    },
    {
      label: "MAHAVILA",
      value: 6368,
    },
    {
      label: "MALALPOLA",
      value: 6489,
    },
    {
      label: "MALWATTA",
      value: 6586,
    },
    {
      label: "MATTAMAGODA",
      value: 6830,
    },
    {
      label: "MEEGASTHENNA",
      value: 7042,
    },
    {
      label: "NAWATA",
      value: 7819,
    },
    {
      label: "NELUWATHUKANDA",
      value: 7910,
    },
    {
      label: "PARUSSELLA",
      value: 8811,
    },
    {
      label: "PELELLEGAMA",
      value: 8928,
    },
    {
      label: "POLPITIYA",
      value: 9238,
    },
    {
      label: "SEEPOTH",
      value: 10006,
    },
    {
      label: "THELIGAMA",
      value: 10573,
    },
    {
      label: "WEERAGALLA",
      value: 11843,
    },
    {
      label: "WELIHELATHENNA",
      value: 11960,
    },
    {
      label: "YATIYANTHOTA",
      value: 12311,
    },
  ],
  "335": [
    {
      label: "DEMATAMALGAMA",
      value: 1724,
    },
    {
      label: "DUNUMADALAWA",
      value: 2087,
    },
    {
      label: "ETHDATHKALLA",
      value: 2394,
    },
    {
      label: "HELAMBAWEWA",
      value: 3322,
    },
    {
      label: "KIRALPETIYAWA",
      value: 5128,
    },
    {
      label: "KUDA VILACHCHIYA",
      value: 5687,
    },
    {
      label: "MAHA VILACHCHIYA",
      value: 6262,
    },
    {
      label: "MANNARAM JUNCTION",
      value: 6694,
    },
    {
      label: "NAVODAGAMA",
      value: 7777,
    },
    {
      label: "NELUMVILA",
      value: 7903,
    },
    {
      label: "OYAMADUWA",
      value: 8204,
    },
    {
      label: "PALUGASWEWA",
      value: 8569,
    },
    {
      label: "PEMADUWA",
      value: 8958,
    },
    {
      label: "RANDOOWA",
      value: 9644,
    },
    {
      label: "SANDAMALELIYA",
      value: 9930,
    },
    {
      label: "THANTHIRIMALE",
      value: 10524,
    },
    {
      label: "THUPPITIYAWA",
      value: 10822,
    },
  ],
  "336": [
    {
      label: "ALAGOLLA",
      value: 158,
    },
    {
      label: "AMBAGASDOWA",
      value: 324,
    },
    {
      label: "BALAGALA",
      value: 763,
    },
    {
      label: "BAMBARAPANA",
      value: 818,
    },
    {
      label: "BERALIYAPOLA",
      value: 1061,
    },
    {
      label: "BUSDULLA",
      value: 1325,
    },
    {
      label: "DANGAMUWA",
      value: 1528,
    },
    {
      label: "DARAGALA",
      value: 1550,
    },
    {
      label: "DIMBULANA",
      value: 1876,
    },
    {
      label: "DOWNSIDE",
      value: 2049,
    },
    {
      label: "ELLANDA",
      value: 2235,
    },
    {
      label: "ETHKANDAWAKA",
      value: 2409,
    },
    {
      label: "GALAHAGAMA",
      value: 2487,
    },
    {
      label: "GAMPAHA",
      value: 2669,
    },
    {
      label: "HANGILIELLA",
      value: 3175,
    },
    {
      label: "HANGUNNAWA",
      value: 3176,
    },
    {
      label: "HATHKINDA",
      value: 3249,
    },
    {
      label: "IDAMEGAMA",
      value: 3641,
    },
    {
      label: "ILUKWELA",
      value: 3861,
    },
    {
      label: "KARAGAHAULPATHA",
      value: 4609,
    },
    {
      label: "KENDAGOLLA",
      value: 5001,
    },
    {
      label: "KERKLIS",
      value: 5037,
    },
    {
      label: "KETAGODA",
      value: 5053,
    },
    {
      label: "KINDIGODA",
      value: 5110,
    },
    {
      label: "KIRAWANAGAMA",
      value: 5138,
    },
    {
      label: "KODAKUMBURA",
      value: 5296,
    },
    {
      label: "KOHILEGAMA",
      value: 5318,
    },
    {
      label: "KORADEKUMBURA",
      value: 5496,
    },
    {
      label: "KOTAWERA PAHALAGAMA",
      value: 5593,
    },
    {
      label: "KOTAWERA UDAGAMA",
      value: 5594,
    },
    {
      label: "KUMARAPATTIYA",
      value: 5773,
    },
    {
      label: "KURUNDUGOLLA",
      value: 5887,
    },
    {
      label: "LUNUWATTA",
      value: 6054,
    },
    {
      label: "MALAPOLAGAMA",
      value: 6501,
    },
    {
      label: "MALWATTEGAMA",
      value: 6592,
    },
    {
      label: "MASPANNA",
      value: 6791,
    },
    {
      label: "MEDAGODAGAMA",
      value: 6950,
    },
    {
      label: "MEDAWELA",
      value: 6970,
    },
    {
      label: "MEDIPOKUNA",
      value: 6998,
    },
    {
      label: "METIWALALANDA",
      value: 7144,
    },
    {
      label: "MUDANAWA",
      value: 7388,
    },
    {
      label: "PALLEWELA",
      value: 8527,
    },
    {
      label: "PANAGODA",
      value: 8602,
    },
    {
      label: "PANNALAGAMA",
      value: 8696,
    },
    {
      label: "PANNALAWELA",
      value: 8698,
    },
    {
      label: "PARANAGAMA",
      value: 8778,
    },
    {
      label: "PERAWELLA",
      value: 8988,
    },
    {
      label: "PITIYAKUMBURA",
      value: 9160,
    },
    {
      label: "RAHUPOLA",
      value: 9540,
    },
    {
      label: "RANHAWADIGAMA",
      value: 9656,
    },
    {
      label: "RATHAMBA",
      value: 9702,
    },
    {
      label: "RITIKUMBURA",
      value: 9808,
    },
    {
      label: "SAPUGOLLA",
      value: 9973,
    },
    {
      label: "THAWALAMPOLA",
      value: 10551,
    },
    {
      label: "THELHAWADIGAMA",
      value: 10571,
    },
    {
      label: "THUPPITIYA",
      value: 10821,
    },
    {
      label: "UDAPERUWA",
      value: 10952,
    },
    {
      label: "UDUHAWARA",
      value: 11020,
    },
    {
      label: "ULUGALA",
      value: 11138,
    },
    {
      label: "UMA ELA",
      value: 11142,
    },
    {
      label: "UNAPANA",
      value: 11160,
    },
    {
      label: "VOLDEMAR",
      value: 11497,
    },
    {
      label: "WELAMEDAGAMA",
      value: 11910,
    },
    {
      label: "WELIULLA",
      value: 12001,
    },
    {
      label: "WETHALAWA",
      value: 12124,
    },
    {
      label: "WEWEGAMA",
      value: 12151,
    },
    {
      label: "YAHALA ARAWA",
      value: 12212,
    },
    {
      label: "YALAGAMUWA",
      value: 12255,
    },
  ],
  "337": [
    {
      label: "KALKUDA",
      value: 4269,
    },
    {
      label: "KALMADU",
      value: 4286,
    },
    {
      label: "KANNAGIPURAM",
      value: 4540,
    },
    {
      label: "KARUWAKERNI",
      value: 4753,
    },
    {
      label: "KINNAYADI",
      value: 5121,
    },
    {
      label: "KUMBURUMULAI",
      value: 5818,
    },
    {
      label: "MEERAVODAI TAMIL",
      value: 7065,
    },
    {
      label: "NASIVANTHIVU",
      value: 7738,
    },
    {
      label: "PETHTHALAI",
      value: 9056,
    },
    {
      label: "PUTHUKUDIYIRUPPU",
      value: 9469,
    },
    {
      label: "SUNGANKERNY",
      value: 10297,
    },
    {
      label: "VALACHCHENAI TAMIL",
      value: 11292,
    },
  ],
  "338": [
    {
      label: "BRYNTHURAICHENAI NORTH",
      value: 1275,
    },
    {
      label: "BRYNTHURAICHENAI SOUTH",
      value: 1276,
    },
    {
      label: "CHEMMANN ODAI",
      value: 1361,
    },
    {
      label: "MAVADICHENAI",
      value: 6846,
    },
    {
      label: "PUNANAI EAST",
      value: 9401,
    },
    {
      label: "THIYAVATTAVAN",
      value: 10723,
    },
    {
      label: "VALAICHCHENAI 4 MUSLIM",
      value: 11293,
    },
    {
      label: "VALAICHCHENAI 5 MUSLIM",
      value: 11294,
    },
    {
      label: "VALAICHCHENAI 5MUSLIM SOUTH",
      value: 11295,
    },
  ],
  "339": [
    {
      label: "AMMANTHANAAVELI",
      value: 391,
    },
    {
      label: "KADDUMURIVU",
      value: 4094,
    },
    {
      label: "KATHIRAVELI",
      value: 4780,
    },
    {
      label: "KAYANKERNY",
      value: 4903,
    },
    {
      label: "KIRMICHAI",
      value: 5227,
    },
    {
      label: "MANKERNY CENTRAL",
      value: 6686,
    },
    {
      label: "MANKERNY SOUTH",
      value: 6687,
    },
    {
      label: "MATHURANKERNIKULAM",
      value: 6821,
    },
    {
      label: "OORIYANKATTU",
      value: 8156,
    },
    {
      label: "PALCHENAI",
      value: 8454,
    },
    {
      label: "PANICHCHANKERNI",
      value: 8678,
    },
    {
      label: "PUCHCHAKKERNI",
      value: 9343,
    },
    {
      label: "PUNANAI EAST",
      value: 9401,
    },
    {
      label: "VAKARAI CENTREL",
      value: 11290,
    },
    {
      label: "VAKARAI NORTH",
      value: 11291,
    },
    {
      label: "VATTAVAN",
      value: 11340,
    },
  ],
  "340": [
    {
      label: "KALLICHCHAI",
      value: 4282,
    },
    {
      label: "KIRAN EAST",
      value: 5129,
    },
    {
      label: "KIRAN WEST",
      value: 5130,
    },
    {
      label: "KORAKALLIMADU",
      value: 5500,
    },
    {
      label: "KORAVELI",
      value: 5516,
    },
    {
      label: "KUDUMPIMALAI",
      value: 5746,
    },
    {
      label: "MURAKKOTTANCHENAI",
      value: 7479,
    },
    {
      label: "MURUTHANAI",
      value: 7499,
    },
    {
      label: "PALAIYADITHONA",
      value: 8407,
    },
    {
      label: "PERILLAVELI",
      value: 8992,
    },
    {
      label: "POOLAKADU",
      value: 9266,
    },
    {
      label: "PUNANAI WEST",
      value: 9402,
    },
    {
      label: "SANTHIVELI",
      value: 9967,
    },
    {
      label: "THEVAPURAM",
      value: 10623,
    },
    {
      label: "THIHILIVADDAI",
      value: 10643,
    },
    {
      label: "UTHUCHCHENAI",
      value: 11258,
    },
    {
      label: "VADAMUNAI",
      value: 11284,
    },
    {
      label: "VAHANERI",
      value: 11288,
    },
  ],
  "341": [
    {
      label: "MANCHOLAI",
      value: 6633,
    },
    {
      label: "MEERAVODAI MUSLIM EAST",
      value: 7063,
    },
    {
      label: "MEERAVODAI MUSLIM WEST",
      value: 7064,
    },
    {
      label: "ODDAMAVADI 01 NORTH",
      value: 8105,
    },
    {
      label: "ODDAMAVADI 01 SOUTH",
      value: 8106,
    },
    {
      label: "ODDAMAVADI 02",
      value: 8107,
    },
    {
      label: "ODDAMAVADI 03",
      value: 8108,
    },
    {
      label: "PAPER TOWN",
      value: 8727,
    },
  ],
  "342": [
    {
      label: "ARAIPATTAI 01",
      value: 540,
    },
    {
      label: "ARAIPATTAI 02",
      value: 541,
    },
    {
      label: "ARAIPATTAI 03",
      value: 542,
    },
    {
      label: "ARAIPATTAI CENTRAL",
      value: 543,
    },
    {
      label: "ARAIPATTAI EAST",
      value: 544,
    },
    {
      label: "ARAIPATTAI NORTH",
      value: 545,
    },
    {
      label: "ARAIPATTAI SOUTH",
      value: 546,
    },
    {
      label: "ARAIPATTAI WEST",
      value: 547,
    },
    {
      label: "KANKEYANODAI",
      value: 4533,
    },
    {
      label: "KANKEYANODAI SOUTH",
      value: 4534,
    },
    {
      label: "KIRANKULAM",
      value: 5132,
    },
    {
      label: "KIRANKULAM CENTRAL",
      value: 5133,
    },
    {
      label: "KIRANKULAM NORTH",
      value: 5134,
    },
    {
      label: "KIRANKULAM SOUTH",
      value: 5135,
    },
    {
      label: "KOVILKULAM",
      value: 5651,
    },
    {
      label: "MANMUNAI",
      value: 6691,
    },
    {
      label: "MAVILANKANTHURAI",
      value: 6859,
    },
    {
      label: "OLLIKULAM",
      value: 8130,
    },
    {
      label: "PALAMUNAI",
      value: 8429,
    },
    {
      label: "PUTHUKUDIYIRUPPU",
      value: 9469,
    },
    {
      label: "PUTHUKUDIYIRUPPU NORTH",
      value: 9470,
    },
    {
      label: "PUTHUKUDIYIRUPPU SOUTH",
      value: 9471,
    },
    {
      label: "RAJADURAI KIRAMAM",
      value: 9551,
    },
    {
      label: "SELVANAGAR",
      value: 10027,
    },
    {
      label: "SELVANAGAR EAST",
      value: 10028,
    },
    {
      label: "THALANKUDAH",
      value: 10379,
    },
    {
      label: "VEDARKUDIYIRUPPU",
      value: 11346,
    },
  ],
  "343": [
    {
      label: "AMPILANTHURAI",
      value: 400,
    },
    {
      label: "AMPILANTHURAI NORTH",
      value: 401,
    },
    {
      label: "AMPILANTHURAI WEST",
      value: 402,
    },
    {
      label: "ARASADITIVU",
      value: 583,
    },
    {
      label: "ARASADITIVU NORTH",
      value: 584,
    },
    {
      label: "KACHCHAKODI",
      value: 4065,
    },
    {
      label: "KADUKKAMUNAI",
      value: 4122,
    },
    {
      label: "KATCHENAI",
      value: 4772,
    },
    {
      label: "KOKKADICHCHOLAI",
      value: 5346,
    },
    {
      label: "KOKKADICHCHOLAI SOUTH",
      value: 5347,
    },
    {
      label: "KULUVINAMADU",
      value: 5765,
    },
    {
      label: "MAHILADITIVU",
      value: 6401,
    },
    {
      label: "MAHILADITIVU SOUTH",
      value: 6402,
    },
    {
      label: "MAVADIMUNMAARI",
      value: 6847,
    },
    {
      label: "MUNAIKKADU EAST",
      value: 7462,
    },
    {
      label: "MUNAIKKADU NORTH",
      value: 7463,
    },
    {
      label: "MUNAIKKADU SOUTH",
      value: 7464,
    },
    {
      label: "MUNAIKKADU WEST",
      value: 7465,
    },
    {
      label: "MUTHALAIKKUDAH",
      value: 7508,
    },
    {
      label: "MUTHALAIKKUDAH WEST",
      value: 7509,
    },
    {
      label: "PADDIPPALAI",
      value: 8217,
    },
    {
      label: "PANDARIYAVELI",
      value: 8653,
    },
    {
      label: "PANICHCHIYADIMUNMARI",
      value: 8679,
    },
    {
      label: "THANTHAMALAI",
      value: 10522,
    },
  ],
  "344": [
    {
      label: "ANAIKADDIYAVELI",
      value: 437,
    },
    {
      label: "GANESHAPURAM",
      value: 2703,
    },
    {
      label: "GANTHIPURAM",
      value: 2742,
    },
    {
      label: "KAAKKACHCHIVADDAI",
      value: 4055,
    },
    {
      label: "KALUMUNTHANVELI",
      value: 4354,
    },
    {
      label: "KANNAPURAM",
      value: 4544,
    },
    {
      label: "KANNAPURAM EAST",
      value: 4545,
    },
    {
      label: "KOVILPORATIVU",
      value: 5652,
    },
    {
      label: "KOVILPORATIVU SOUTH",
      value: 5653,
    },
    {
      label: "KOVILPORATIVU WEST",
      value: 5654,
    },
    {
      label: "MAALAIYARKADDU",
      value: 6056,
    },
    {
      label: "MAAVELKUDAH",
      value: 6058,
    },
    {
      label: "MANDUR 1 AND 2 NORTH",
      value: 6649,
    },
    {
      label: "MANDUR 1 AND 2 SOUTH",
      value: 6650,
    },
    {
      label: "MANDUR 3",
      value: 6651,
    },
    {
      label: "MANDUR KODDAIMUNAI",
      value: 6652,
    },
    {
      label: "MUNAITIVU",
      value: 7466,
    },
    {
      label: "NAVAKIRINAGAR",
      value: 7756,
    },
    {
      label: "NELLIKKADU",
      value: 7890,
    },
    {
      label: "PAALAIYADIVADDAI",
      value: 8206,
    },
    {
      label: "PAALAMUNAI",
      value: 8207,
    },
    {
      label: "PADDAAPURAM",
      value: 8214,
    },
    {
      label: "PALACHCHOLAI",
      value: 8399,
    },
    {
      label: "PALUGAAMAM I",
      value: 8554,
    },
    {
      label: "PALUGAAMAM II",
      value: 8555,
    },
    {
      label: "PERIYAPORATIVU",
      value: 9030,
    },
    {
      label: "PUNNAKKULAM",
      value: 9430,
    },
    {
      label: "RAANAMADU",
      value: 9503,
    },
    {
      label: "SANGARPURAM",
      value: 9952,
    },
    {
      label: "SARAVANAYADIYOOTTU",
      value: 9981,
    },
    {
      label: "SELVAPURAM",
      value: 10030,
    },
    {
      label: "SINNAWATTAI",
      value: 10135,
    },
    {
      label: "THAMBALAWATTA",
      value: 10469,
    },
    {
      label: "THIKKODAI",
      value: 10644,
    },
    {
      label: "THUMPANKERNI",
      value: 10796,
    },
    {
      label: "THUMPANKERNI (Y.F.S.)",
      value: 10797,
    },
    {
      label: "VAMMIYADIYOOTTU",
      value: 11311,
    },
    {
      label: "VANNINAGAR",
      value: 11325,
    },
    {
      label: "VEERANCHENAI",
      value: 11363,
    },
    {
      label: "VELLAVELI",
      value: 11388,
    },
    {
      label: "VILANTHODDAM",
      value: 11440,
    },
    {
      label: "VIPULANANTHAPURAM",
      value: 11477,
    },
    {
      label: "VIVEKANANTHAPURAM",
      value: 11492,
    },
  ],
  "345": [
    {
      label: "ETHULKOTTE",
      value: 2419,
    },
    {
      label: "ETHULKOTTE WEST",
      value: 2420,
    },
    {
      label: "GANGODAVILA EAST",
      value: 2722,
    },
    {
      label: "GANGODAVILA NORTH",
      value: 2723,
    },
    {
      label: "GANGODAVILA SOUTH",
      value: 2724,
    },
    {
      label: "KOSWATTA",
      value: 5552,
    },
    {
      label: "NAWALA EAST",
      value: 7802,
    },
    {
      label: "NAWALA WEST",
      value: 7803,
    },
    {
      label: "NUGEGODA",
      value: 8076,
    },
    {
      label: "NUGEGODA WEST",
      value: 8077,
    },
    {
      label: "OBSEKARAPURA",
      value: 8104,
    },
    {
      label: "PAGODA",
      value: 8231,
    },
    {
      label: "PAGODA EAST",
      value: 8232,
    },
    {
      label: "PITAKOTTE",
      value: 9132,
    },
    {
      label: "PITAKOTTE EAST",
      value: 9133,
    },
    {
      label: "PITAKOTTE WEST",
      value: 9134,
    },
    {
      label: "RAJAGIRIYA",
      value: 9561,
    },
    {
      label: "WELIKADA EAST",
      value: 11966,
    },
    {
      label: "WELIKADA NORTH",
      value: 11967,
    },
    {
      label: "WELIKADA WEST",
      value: 11968,
    },
  ],
  "346": [
    {
      label: "BATAGANVILA",
      value: 910,
    },
    {
      label: "BOPE EAST",
      value: 1197,
    },
    {
      label: "BOPE NORTH",
      value: 1198,
    },
    {
      label: "BOPE WEST",
      value: 1199,
    },
    {
      label: "CHEENA KORATUWA",
      value: 1357,
    },
    {
      label: "DADALLA EAST",
      value: 1405,
    },
    {
      label: "DADALLA WEST",
      value: 1406,
    },
    {
      label: "DANGEDARA EAST",
      value: 1532,
    },
    {
      label: "DANGEDARA WEST",
      value: 1533,
    },
    {
      label: "DEDDUGODA NORTH",
      value: 1573,
    },
    {
      label: "DEDDUGODA SOUTH",
      value: 1574,
    },
    {
      label: "DEWATA",
      value: 1808,
    },
    {
      label: "DEWATHURA",
      value: 1810,
    },
    {
      label: "ETTILIGODA SOUTH",
      value: 2433,
    },
    {
      label: "FORT",
      value: 2441,
    },
    {
      label: "GALWADUGODA",
      value: 2635,
    },
    {
      label: "GINTHOTA EAST",
      value: 2814,
    },
    {
      label: "GINTHOTA WEST",
      value: 2815,
    },
    {
      label: "KALUWELLA",
      value: 4389,
    },
    {
      label: "KANDEWATTA",
      value: 4507,
    },
    {
      label: "KATUGODA",
      value: 4833,
    },
    {
      label: "KONGAHA",
      value: 5442,
    },
    {
      label: "KUMBALWELLA NORTH",
      value: 5791,
    },
    {
      label: "KUMBALWELLA SOUTH",
      value: 5792,
    },
    {
      label: "KURUNDUWATTA",
      value: 5891,
    },
    {
      label: "MADAPATHALA",
      value: 6095,
    },
    {
      label: "MADAWALAMULLA NORTH",
      value: 6110,
    },
    {
      label: "MADAWALAMULLA SOUTH",
      value: 6111,
    },
    {
      label: "MAGALLA",
      value: 6193,
    },
    {
      label: "MAHA HAPUGALA",
      value: 6235,
    },
    {
      label: "MAHAMODARA",
      value: 6329,
    },
    {
      label: "MAITIPE",
      value: 6432,
    },
    {
      label: "MAKULUWA",
      value: 6474,
    },
    {
      label: "MALIGASPE",
      value: 6535,
    },
    {
      label: "MILIDDUWA",
      value: 7173,
    },
    {
      label: "MINUWANGODA",
      value: 7210,
    },
    {
      label: "OSANAGODA",
      value: 8178,
    },
    {
      label: "PETTIGALAWATTA",
      value: 9061,
    },
    {
      label: "PIYADIGAMA",
      value: 9171,
    },
    {
      label: "POKUNAWATTA",
      value: 9197,
    },
    {
      label: "RICHMOND KANDA",
      value: 9786,
    },
    {
      label: "SANGHAMITTAPURA",
      value: 9957,
    },
    {
      label: "SIYAMBALAGAHAWATTA",
      value: 10186,
    },
    {
      label: "THALAPITIYA",
      value: 10386,
    },
    {
      label: "UKWATTA EAST",
      value: 11110,
    },
    {
      label: "UKWATTA WEST",
      value: 11111,
    },
    {
      label: "WALAWWATTA",
      value: 11607,
    },
    {
      label: "WELIPATHA",
      value: 11988,
    },
    {
      label: "WELIPITIMODARA",
      value: 11995,
    },
    {
      label: "WELIWATTA",
      value: 12010,
    },
  ],
  "347": [
    {
      label: "ALUTHWALA",
      value: 276,
    },
    {
      label: "ARACHCHIKANDA",
      value: 533,
    },
    {
      label: "BANWELGODELLA",
      value: 880,
    },
    {
      label: "BERATHUDUWA",
      value: 1068,
    },
    {
      label: "DANGARAGAHA UDUMULLA",
      value: 1530,
    },
    {
      label: "DODAMKAHAVILA",
      value: 1958,
    },
    {
      label: "ERIYAGAHAMULLA",
      value: 2341,
    },
    {
      label: "GONAPEENUWALA CENTRAL",
      value: 2928,
    },
    {
      label: "GONAPEENUWALA EAST",
      value: 2929,
    },
    {
      label: "GONAPEENUWALA WEST",
      value: 2930,
    },
    {
      label: "HENAGODA",
      value: 3335,
    },
    {
      label: "HIKKADUWA EAST",
      value: 3417,
    },
    {
      label: "KALUWAGAHA COLONY",
      value: 4373,
    },
    {
      label: "KARUWALABEDDA",
      value: 4754,
    },
    {
      label: "KIRINDIELA",
      value: 5193,
    },
    {
      label: "MAHAGANGODA",
      value: 6289,
    },
    {
      label: "MANAMPITA",
      value: 6623,
    },
    {
      label: "THILAKAGAMA",
      value: 10647,
    },
    {
      label: "WOODLAND WATTA",
      value: 12200,
    },
  ],
  "348": [
    {
      label: "ANALAITIVU NORTH",
      value: 442,
    },
    {
      label: "ANALAITIVU SOUTH",
      value: 443,
    },
    {
      label: "ELUVAITIVU",
      value: 2258,
    },
    {
      label: "KARAMPON",
      value: 4669,
    },
    {
      label: "KARAMPON EAST",
      value: 4670,
    },
    {
      label: "KARAMPON SOUTH EAST",
      value: 4671,
    },
    {
      label: "KARAMPON WEST",
      value: 4672,
    },
    {
      label: "KAYTS",
      value: 4904,
    },
    {
      label: "NARANTHANAI",
      value: 7716,
    },
    {
      label: "NARANTHANAI NORTH",
      value: 7717,
    },
    {
      label: "NARANTHANAI NORTH WEST",
      value: 7718,
    },
    {
      label: "NARANTHANAI SOUTH",
      value: 7719,
    },
    {
      label: "PARUTHIYADAIPPU",
      value: 8812,
    },
    {
      label: "PULIYANKOODAL",
      value: 9375,
    },
    {
      label: "SURUVIL",
      value: 10301,
    },
  ],
  "349": [
    {
      label: "ALLAIPIDDY",
      value: 224,
    },
    {
      label: "MANDAITIVU EAST",
      value: 6636,
    },
    {
      label: "MANDAITIVU SOUTH",
      value: 6637,
    },
    {
      label: "MANDAITIVU WEST",
      value: 6638,
    },
    {
      label: "MANKUMBAN",
      value: 6690,
    },
    {
      label: "NAINATIVU CENTRE",
      value: 7600,
    },
    {
      label: "NAINATIVU NORTH",
      value: 7601,
    },
    {
      label: "NAINATIVU SOUTH",
      value: 7602,
    },
    {
      label: "PUNGUDUTIVU CENTRE EAST",
      value: 9416,
    },
    {
      label: "PUNGUDUTIVU CENTRE NORTH",
      value: 9417,
    },
    {
      label: "PUNGUDUTIVU CENTRE WEST",
      value: 9418,
    },
    {
      label: "PUNGUDUTIVU EAST",
      value: 9419,
    },
    {
      label: "PUNGUDUTIVU EAST SOUTH",
      value: 9420,
    },
    {
      label: "PUNGUDUTIVU NORTH",
      value: 9421,
    },
    {
      label: "PUNGUDUTIVU NORTH EAST",
      value: 9422,
    },
    {
      label: "PUNGUDUTIVU NORTH WEST",
      value: 9423,
    },
    {
      label: "PUNGUDUTIVU SOUTH",
      value: 9424,
    },
    {
      label: "PUNGUDUTIVU SOUTH EAST",
      value: 9425,
    },
    {
      label: "PUNGUDUTIVU SOUTH WEST",
      value: 9426,
    },
    {
      label: "PUNGUDUTIVU WEST",
      value: 9427,
    },
    {
      label: "SARAVANAI EAST",
      value: 9979,
    },
    {
      label: "SARAVANAI WEST",
      value: 9980,
    },
    {
      label: "VELANAI EAST",
      value: 11375,
    },
    {
      label: "VELANAI EAST CENTRE",
      value: 11376,
    },
    {
      label: "VELANAI NORTH",
      value: 11377,
    },
    {
      label: "VELANAI NORTH EAST",
      value: 11378,
    },
    {
      label: "VELANAI SOUTH",
      value: 11379,
    },
    {
      label: "VELANAI SOUTH EAST",
      value: 11380,
    },
    {
      label: "VELANAI WEST",
      value: 11381,
    },
    {
      label: "VELANAI WEST CENTRE",
      value: 11382,
    },
  ],
  "350": [
    {
      label: "KARAINAGAR CENTRE",
      value: 4629,
    },
    {
      label: "KARAINAGAR EAST",
      value: 4630,
    },
    {
      label: "KARAINAGAR NORTH",
      value: 4631,
    },
    {
      label: "KARAINAGAR NORTH EAST",
      value: 4632,
    },
    {
      label: "KARAINAGAR NORTH WEST",
      value: 4633,
    },
    {
      label: "KARAINAGAR SOUTH",
      value: 4634,
    },
    {
      label: "KARAINAGAR SOUTH EAST",
      value: 4635,
    },
    {
      label: "KARAINAGAR SOUTH WEST",
      value: 4636,
    },
    {
      label: "KARAINAGAR WEST",
      value: 4637,
    },
  ],
  "351": [
    {
      label: "ALLARAI",
      value: 225,
    },
    {
      label: "CHANDRAPURAM",
      value: 1344,
    },
    {
      label: "CHAVAKACHCHERI NORTH",
      value: 1349,
    },
    {
      label: "CHAVAKACHCHERI TOWN",
      value: 1350,
    },
    {
      label: "ELUTHUMADDUVAL NORTH",
      value: 2255,
    },
    {
      label: "ELUTHUMADDUVAL SOUTH",
      value: 2256,
    },
    {
      label: "IDDAIKURICHCHI",
      value: 3650,
    },
    {
      label: "KACHCHAI",
      value: 4063,
    },
    {
      label: "KAITHADY CENTRE",
      value: 4203,
    },
    {
      label: "KAITHADY EAST",
      value: 4204,
    },
    {
      label: "KAITHADY NAVATKULI",
      value: 4205,
    },
    {
      label: "KAITHADY NORTH",
      value: 4206,
    },
    {
      label: "KAITHADY NUNAVIL",
      value: 4207,
    },
    {
      label: "KAITHADY SOUTH",
      value: 4208,
    },
    {
      label: "KAITHADY SOUTH EAST",
      value: 4209,
    },
    {
      label: "KAITHADY WEST",
      value: 4210,
    },
    {
      label: "KALVAYAL",
      value: 4391,
    },
    {
      label: "KARAMPAHAM",
      value: 4667,
    },
    {
      label: "KARAMPAIKURICHCHI",
      value: 4668,
    },
    {
      label: "KETPELI",
      value: 5079,
    },
    {
      label: "KODIKAMAM CENTRE",
      value: 5306,
    },
    {
      label: "KODIKAMAM NORTH",
      value: 5307,
    },
    {
      label: "KODIKAMAM SOUTH",
      value: 5308,
    },
    {
      label: "KOVILAKANDY",
      value: 5647,
    },
    {
      label: "KOVILKUDYIRUPPU",
      value: 5650,
    },
    {
      label: "KUDAMIYAN",
      value: 5718,
    },
    {
      label: "MAASERI",
      value: 6057,
    },
    {
      label: "MADDUVIL CENTRE",
      value: 6118,
    },
    {
      label: "MADDUVIL EAST",
      value: 6119,
    },
    {
      label: "MADDUVIL NORTH",
      value: 6120,
    },
    {
      label: "MADDUVIL NUNAVIL",
      value: 6121,
    },
    {
      label: "MANDUVIL",
      value: 6653,
    },
    {
      label: "MANTHUVIL EAST",
      value: 6699,
    },
    {
      label: "MANTHUVIL NORTH",
      value: 6700,
    },
    {
      label: "MANTHUVIL WEST",
      value: 6701,
    },
    {
      label: "MARAVANPULO",
      value: 6754,
    },
    {
      label: "MEESALAI NORTH",
      value: 7070,
    },
    {
      label: "MEESALAI WEST",
      value: 7071,
    },
    {
      label: "MIRUSUVIL NORTH",
      value: 7236,
    },
    {
      label: "MIRUSUVIL SOUTH",
      value: 7237,
    },
    {
      label: "NAVATKADU",
      value: 7765,
    },
    {
      label: "NAVATKULI EAST",
      value: 7770,
    },
    {
      label: "NAVATKULI WEST",
      value: 7771,
    },
    {
      label: "NUNAVIL CENTRE",
      value: 8085,
    },
    {
      label: "NUNAVIL EAST",
      value: 8086,
    },
    {
      label: "NUNAVIL WEST",
      value: 8087,
    },
    {
      label: "PALAVI",
      value: 8446,
    },
    {
      label: "RAMAVIL",
      value: 9588,
    },
    {
      label: "SANGATHANAI",
      value: 9953,
    },
    {
      label: "SARASALAI NORTH",
      value: 9977,
    },
    {
      label: "SARASALAI SOUTH",
      value: 9978,
    },
    {
      label: "THANANKILAPPU",
      value: 10504,
    },
    {
      label: "THAVALAI- IYATTALAI",
      value: 10546,
    },
    {
      label: "THENMADDUVIL",
      value: 10596,
    },
    {
      label: "USAN",
      value: 11242,
    },
    {
      label: "VARANI NORTH",
      value: 11329,
    },
    {
      label: "VARANI-IYATTALAI",
      value: 11330,
    },
    {
      label: "VELLAMPOKKADY",
      value: 11386,
    },
    {
      label: "VIDATHTHALPALAI",
      value: 11409,
    },
  ],
  "352": [
    {
      label: "ALIYAVALAI",
      value: 217,
    },
    {
      label: "AMPAN",
      value: 396,
    },
    {
      label: "CHEMPIYANPATTU NORTH",
      value: 1363,
    },
    {
      label: "CHEMPIYANPATTU SOUTH",
      value: 1364,
    },
    {
      label: "CHUNDIKULAM",
      value: 1379,
    },
    {
      label: "KUDATHANAI",
      value: 5728,
    },
    {
      label: "KUDATHANAI KARAIYOOR",
      value: 5729,
    },
    {
      label: "MANALKADU",
      value: 6620,
    },
    {
      label: "MARUTHANKARNY",
      value: 6781,
    },
    {
      label: "MULLIYAN",
      value: 7451,
    },
    {
      label: "NAGARKOVIL EAST",
      value: 7574,
    },
    {
      label: "NAGARKOVIL SOUTH",
      value: 7575,
    },
    {
      label: "NAGARKOVIL WEST",
      value: 7576,
    },
    {
      label: "POKKARUPPU",
      value: 9196,
    },
    {
      label: "POTPATHI",
      value: 9328,
    },
    {
      label: "UDUTHURAI",
      value: 11046,
    },
    {
      label: "VATHIRAYAN",
      value: 11337,
    },
    {
      label: "VETILAIKERNY",
      value: 11401,
    },
  ],
  "353": [
    {
      label: "ALVAI NORTH",
      value: 287,
    },
    {
      label: "ALVAI NORTH CENTRE",
      value: 288,
    },
    {
      label: "ALVAI NORTH WEST",
      value: 289,
    },
    {
      label: "ALVAI WEST",
      value: 291,
    },
    {
      label: "KATKOVALAM",
      value: 4792,
    },
    {
      label: "KERUDAVIL EAST",
      value: 5038,
    },
    {
      label: "KERUDAVIL NORTH",
      value: 5039,
    },
    {
      label: "KERUDAVIL SOUTH",
      value: 5040,
    },
    {
      label: "MANTHIKAI",
      value: 6696,
    },
    {
      label: "POINT PEDRO",
      value: 9193,
    },
    {
      label: "POINT PEDRO EAST",
      value: 9194,
    },
    {
      label: "POINT PEDRO SOUTH",
      value: 9195,
    },
    {
      label: "POLIKANDY EAST",
      value: 9221,
    },
    {
      label: "POLIKANDY SOUTH",
      value: 9222,
    },
    {
      label: "POLIKANDY WEST",
      value: 9223,
    },
    {
      label: "PULOLY CENTRE",
      value: 9389,
    },
    {
      label: "PULOLY EAST",
      value: 9390,
    },
    {
      label: "PULOLY NORTH",
      value: 9391,
    },
    {
      label: "PULOLY NORTH EAST",
      value: 9392,
    },
    {
      label: "PULOLY NORTH WEST",
      value: 9393,
    },
    {
      label: "PULOLY SOUTH",
      value: 9394,
    },
    {
      label: "PULOLY SOUTH WEST",
      value: 9395,
    },
    {
      label: "PULOLY WEST",
      value: 9396,
    },
    {
      label: "THONDAMANARU NORTH",
      value: 10732,
    },
    {
      label: "THONDAMANARU SOUTH",
      value: 10733,
    },
    {
      label: "THUMPALAI",
      value: 10794,
    },
    {
      label: "THUMPALAI EAST",
      value: 10795,
    },
    {
      label: "THUNNALAI NORTH",
      value: 10814,
    },
    {
      label: "VALLIPURAM",
      value: 11302,
    },
    {
      label: "VALVETTITHURAI NORTH CENTRE",
      value: 11304,
    },
    {
      label: "VALVETTITHURAI NORTH EAST",
      value: 11305,
    },
    {
      label: "VALVETTITHURAI NORTH WEST",
      value: 11306,
    },
    {
      label: "VALVETTITHURAI SOUTH EAST",
      value: 11307,
    },
    {
      label: "VALVETTITHURAI SOUTH WEST",
      value: 11308,
    },
    {
      label: "VIYAPARIMOOLAI",
      value: 11496,
    },
  ],
  "354": [
    {
      label: "ALVAI",
      value: 285,
    },
    {
      label: "ALVAI EAST",
      value: 286,
    },
    {
      label: "ALVAI SOUTH",
      value: 290,
    },
    {
      label: "ATHTHAI",
      value: 660,
    },
    {
      label: "IMAYANAN",
      value: 3868,
    },
    {
      label: "IMAYANAN EAST",
      value: 3869,
    },
    {
      label: "KADDAIVELY",
      value: 4091,
    },
    {
      label: "KAPPUTHU",
      value: 4583,
    },
    {
      label: "KARANAVAI",
      value: 4673,
    },
    {
      label: "KARANAVAI CENTRE",
      value: 4674,
    },
    {
      label: "KARANAVAI EAST",
      value: 4675,
    },
    {
      label: "KARANAVAI NORTH",
      value: 4676,
    },
    {
      label: "KARANAVAI NORTH WEST",
      value: 4677,
    },
    {
      label: "KARANAVAI SOUTH",
      value: 4678,
    },
    {
      label: "KARANAVAI WEST",
      value: 4679,
    },
    {
      label: "KARAVEDDY CENTRE",
      value: 4717,
    },
    {
      label: "KARAVEDDY EAST",
      value: 4718,
    },
    {
      label: "KARAVEDDY NORTH",
      value: 4719,
    },
    {
      label: "KARAVEDDY SOUTH",
      value: 4720,
    },
    {
      label: "KARAVEDDY WEST",
      value: 4721,
    },
    {
      label: "MATHTHONI",
      value: 6816,
    },
    {
      label: "NELLIADDY",
      value: 7887,
    },
    {
      label: "NELLIADDY EAST",
      value: 7888,
    },
    {
      label: "NELLIADDY NORTH",
      value: 7889,
    },
    {
      label: "SAMARABAHU",
      value: 9896,
    },
    {
      label: "THUNNALAI",
      value: 10811,
    },
    {
      label: "THUNNALAI CENTRE",
      value: 10812,
    },
    {
      label: "THUNNALAI EAST",
      value: 10813,
    },
    {
      label: "THUNNALAI SOUTH",
      value: 10815,
    },
    {
      label: "THUNNALAI WEST",
      value: 10816,
    },
    {
      label: "UDUPIDDY",
      value: 11035,
    },
    {
      label: "UDUPIDDY NORTH",
      value: 11036,
    },
    {
      label: "UDUPIDDY SOUTH",
      value: 11037,
    },
    {
      label: "VALVETTY",
      value: 11309,
    },
    {
      label: "VALVETTY CENTRE",
      value: 11310,
    },
  ],
  "355": [
    {
      label: "ATCHELU",
      value: 651,
    },
    {
      label: "ATCHUVELY NORTH",
      value: 652,
    },
    {
      label: "ATCHUVELY SOUTH",
      value: 653,
    },
    {
      label: "ATCHUVELY WEST",
      value: 654,
    },
    {
      label: "AVARANGAL EAST",
      value: 703,
    },
    {
      label: "AVARANGAL WEST",
      value: 704,
    },
    {
      label: "IDDAIKKADU",
      value: 3649,
    },
    {
      label: "IRUPALAI EAST",
      value: 3964,
    },
    {
      label: "IRUPALAI SOUTH",
      value: 3965,
    },
    {
      label: "KALVIYANKADU",
      value: 4393,
    },
    {
      label: "KOPAY CENTRE",
      value: 5489,
    },
    {
      label: "KOPAY NORTH",
      value: 5490,
    },
    {
      label: "KOPAY SOUTH",
      value: 5491,
    },
    {
      label: "NAWATKIRI",
      value: 7821,
    },
    {
      label: "NEERVELY NORTH",
      value: 7869,
    },
    {
      label: "NEERVELY SOUTH",
      value: 7870,
    },
    {
      label: "NEERVELY WEST",
      value: 7871,
    },
    {
      label: "PATHAMENY",
      value: 8833,
    },
    {
      label: "PUTTUR EAST",
      value: 9480,
    },
    {
      label: "PUTTUR NORTH",
      value: 9481,
    },
    {
      label: "PUTTUR WEST",
      value: 9482,
    },
    {
      label: "SIRUPIDDY EAST",
      value: 10163,
    },
    {
      label: "SIRUPIDDY WEST",
      value: 10164,
    },
    {
      label: "THAMPALAI-KATHIRIPAY",
      value: 10500,
    },
    {
      label: "URELU",
      value: 11213,
    },
    {
      label: "URUMPIRAI EAST",
      value: 11232,
    },
    {
      label: "URUMPIRAI NORTH",
      value: 11233,
    },
    {
      label: "URUMPIRAI SOUTH",
      value: 11234,
    },
    {
      label: "URUMPIRAI WEST",
      value: 11235,
    },
    {
      label: "VALALAI",
      value: 11296,
    },
    {
      label: "VATHARAVATTAI",
      value: 11336,
    },
  ],
  "356": [
    {
      label: "CHUNNAKAM TOWN CENTRE",
      value: 1382,
    },
    {
      label: "CHUNNAKAM TOWN EAST",
      value: 1383,
    },
    {
      label: "CHUNNAKAM TOWN NORTH",
      value: 1384,
    },
    {
      label: "CHUNNAKAM TOWN SOUTH",
      value: 1385,
    },
    {
      label: "CHUNNAKAM TOWN WEST",
      value: 1386,
    },
    {
      label: "ERLALAI CENTRE",
      value: 2348,
    },
    {
      label: "ERLALAI EAST",
      value: 2349,
    },
    {
      label: "ERLALAI NORTH",
      value: 2350,
    },
    {
      label: "ERLALAI SOUTH",
      value: 2351,
    },
    {
      label: "ERLALAI SOUTH WEST",
      value: 2352,
    },
    {
      label: "ERLALAI WEST",
      value: 2353,
    },
    {
      label: "EVENAI",
      value: 2437,
    },
    {
      label: "INUVIL EAST",
      value: 3934,
    },
    {
      label: "INUVIL NORTH EAST",
      value: 3935,
    },
    {
      label: "INUVIL SOUTH WEST",
      value: 3936,
    },
    {
      label: "INUVIL WEST",
      value: 3937,
    },
    {
      label: "KANTHARODAI",
      value: 4560,
    },
    {
      label: "KUPPILAN NORTH",
      value: 5834,
    },
    {
      label: "KUPPILAN SOUTH",
      value: 5835,
    },
    {
      label: "PUNNALAIKADDUVAN NORTH",
      value: 9431,
    },
    {
      label: "PUNNALAIKADDUVAN SOUTH",
      value: 9432,
    },
    {
      label: "SANGUVELY",
      value: 9962,
    },
    {
      label: "THAVADY EAST",
      value: 10543,
    },
    {
      label: "THAVADY NORTH",
      value: 10544,
    },
    {
      label: "THAVADY SOUTH",
      value: 10545,
    },
    {
      label: "UDUVIL CENTRE",
      value: 11048,
    },
    {
      label: "UDUVIL CENTRE NORTH",
      value: 11049,
    },
    {
      label: "UDUVIL NORTH",
      value: 11050,
    },
    {
      label: "UDUVIL SOUTH EAST",
      value: 11051,
    },
    {
      label: "UDUVIL SOUTH WEST",
      value: 11052,
    },
  ],
  "357": [
    {
      label: "ANAIKODDAI",
      value: 438,
    },
    {
      label: "ILLAVALAI",
      value: 3844,
    },
    {
      label: "MANIPAY EAST",
      value: 6676,
    },
    {
      label: "MANIPAY NORTH",
      value: 6677,
    },
    {
      label: "MANIPAY SOUTH",
      value: 6678,
    },
    {
      label: "MANIPAY WEST",
      value: 6679,
    },
    {
      label: "MAREESANKOODAL",
      value: 6762,
    },
    {
      label: "MASIAPIDDY",
      value: 6788,
    },
    {
      label: "MATHAGAL EAST",
      value: 6799,
    },
    {
      label: "MATHAGAL SOUTH",
      value: 6800,
    },
    {
      label: "MATHAGAL WEST",
      value: 6801,
    },
    {
      label: "MULLANAI",
      value: 7439,
    },
    {
      label: "NAVALI EAST",
      value: 7759,
    },
    {
      label: "NAVALI NORTH",
      value: 7760,
    },
    {
      label: "NAVALI SOUTH",
      value: 7761,
    },
    {
      label: "PANDATHERUPPU",
      value: 8654,
    },
    {
      label: "PERIYAVILLAN",
      value: 9036,
    },
    {
      label: "PIRANPATTAI",
      value: 9122,
    },
    {
      label: "SANDILIPAY CENTRE",
      value: 9938,
    },
    {
      label: "SANDILIPAY NORTH",
      value: 9939,
    },
    {
      label: "SANDILIPAY WEST",
      value: 9940,
    },
    {
      label: "SAVATKADDU",
      value: 9987,
    },
    {
      label: "SILLALAI NORTH",
      value: 10101,
    },
    {
      label: "SILLALAI SOUTH",
      value: 10102,
    },
    {
      label: "SUTHUMALAI NORTH",
      value: 10305,
    },
    {
      label: "SUTHUMALAI SOUTH",
      value: 10306,
    },
    {
      label: "UYARAPPULAM",
      value: 11279,
    },
    {
      label: "VADALIADAIPPU",
      value: 11283,
    },
  ],
  "358": [
    {
      label: "ARALI CENTRE",
      value: 553,
    },
    {
      label: "ARALI EAST",
      value: 554,
    },
    {
      label: "ARALI NORTH",
      value: 555,
    },
    {
      label: "ARALI SOUTH",
      value: 556,
    },
    {
      label: "ARALI WEST",
      value: 557,
    },
    {
      label: "CHANKANAI CENTRE",
      value: 1345,
    },
    {
      label: "CHANKANAI EAST",
      value: 1346,
    },
    {
      label: "CHANKANAI SOUTH",
      value: 1347,
    },
    {
      label: "CHANKANAI WEST",
      value: 1348,
    },
    {
      label: "CHULIPURAM CENTRE",
      value: 1375,
    },
    {
      label: "CHULIPURAM EAST",
      value: 1376,
    },
    {
      label: "CHULIPURAM WEST",
      value: 1377,
    },
    {
      label: "MOOLAI",
      value: 7290,
    },
    {
      label: "PANÍIPPULAM",
      value: 8680,
    },
    {
      label: "PANNAKAM",
      value: 8693,
    },
    {
      label: "PONNALAI",
      value: 9254,
    },
    {
      label: "SANGARATHAI",
      value: 9951,
    },
    {
      label: "SITHTHANKERNI",
      value: 10167,
    },
    {
      label: "THOLPURAM EAST",
      value: 10729,
    },
    {
      label: "THOLPURAM WEST",
      value: 10730,
    },
    {
      label: "VEDDUCODDAI EAST",
      value: 11348,
    },
    {
      label: "VEDDUCODDAI NORTH",
      value: 11349,
    },
    {
      label: "VEDDUCODDAI SOUTH",
      value: 11350,
    },
    {
      label: "VEDDUCODDAI SOUTH WEST (NORTH)",
      value: 11351,
    },
    {
      label: "VEDDUCODDAI WEST",
      value: 11352,
    },
  ],
  "359": [
    {
      label: "ANGURUWATHOTA",
      value: 502,
    },
    {
      label: "BELLAPITIYA EAST",
      value: 1031,
    },
    {
      label: "BELLAPITIYA WEST",
      value: 1032,
    },
    {
      label: "ELAWELLA",
      value: 2197,
    },
    {
      label: "HALLANKANDA",
      value: 3088,
    },
    {
      label: "IHALA KARANNAGODA",
      value: 3720,
    },
    {
      label: "IHALAGODA",
      value: 3815,
    },
    {
      label: "ILIMBA",
      value: 3840,
    },
    {
      label: "KANANVILA",
      value: 4437,
    },
    {
      label: "KANDANA NORTH",
      value: 4467,
    },
    {
      label: "KANDANA SOUTH",
      value: 4468,
    },
    {
      label: "KARANNAGODA",
      value: 4702,
    },
    {
      label: "KATUHENA",
      value: 4835,
    },
    {
      label: "KESELHENAWA",
      value: 5044,
    },
    {
      label: "KOODELLA",
      value: 5475,
    },
    {
      label: "KUDAYALA",
      value: 5737,
    },
    {
      label: "MADURAWALA EAST",
      value: 6171,
    },
    {
      label: "MADURAWALA WEST",
      value: 6172,
    },
    {
      label: "MAHAYALA EAST",
      value: 6393,
    },
    {
      label: "MAHAYALA WEST",
      value: 6394,
    },
    {
      label: "MAHENA SOUTH",
      value: 6400,
    },
    {
      label: "NAHALLA",
      value: 7590,
    },
    {
      label: "PAHALA KARANNAGODA",
      value: 8295,
    },
    {
      label: "PAHALAGODA",
      value: 8379,
    },
    {
      label: "PERAMUNAGAMA",
      value: 8980,
    },
    {
      label: "REMUNA",
      value: 9778,
    },
    {
      label: "WALPITA",
      value: 11642,
    },
    {
      label: "WARAKAGODA EAST",
      value: 11708,
    },
    {
      label: "WARAKAGODA NORTH",
      value: 11709,
    },
    {
      label: "WARAKAGODA SOUTH",
      value: 11710,
    },
    {
      label: "WARAKAGODA WEST",
      value: 11711,
    },
    {
      label: "WELIKETELLA",
      value: 11976,
    },
    {
      label: "WERAWATTA",
      value: 12104,
    },
  ],
  "360": [
    {
      label: "AMPITIYA NORTH",
      value: 405,
    },
    {
      label: "AMPITIYA PALLEGAMA",
      value: 406,
    },
    {
      label: "AMPITIYA SOUTH",
      value: 407,
    },
    {
      label: "AMPITIYA UDAGAMA NORTH",
      value: 408,
    },
    {
      label: "AMPITIYA UDAGAMA SOUTH",
      value: 409,
    },
    {
      label: "ANIWATTA EAST",
      value: 505,
    },
    {
      label: "ANIWATTA WEST",
      value: 506,
    },
    {
      label: "ARUPPALA EAST",
      value: 615,
    },
    {
      label: "ARUPPALA WEST",
      value: 616,
    },
    {
      label: "ASGIRIYA",
      value: 627,
    },
    {
      label: "BAHIRAWA KANDA",
      value: 748,
    },
    {
      label: "BOGAMBARA",
      value: 1134,
    },
    {
      label: "BOOWELIKADA",
      value: 1193,
    },
    {
      label: "BOWALA",
      value: 1256,
    },
    {
      label: "BOWALAWATTA",
      value: 1260,
    },
    {
      label: "DEIYANNEWELA",
      value: 1655,
    },
    {
      label: "GETAMBE",
      value: 2786,
    },
    {
      label: "GODAGANDENIYA",
      value: 2843,
    },
    {
      label: "GURUDENIYA DAMBAWELA",
      value: 3000,
    },
    {
      label: "GURUDENIYA EAST",
      value: 3001,
    },
    {
      label: "GURUDENIYA WEST",
      value: 3002,
    },
    {
      label: "HANTHANA PEDESA",
      value: 3180,
    },
    {
      label: "HEERESSAGALA",
      value: 3302,
    },
    {
      label: "HINDAGALA",
      value: 3431,
    },
    {
      label: "IHALA KATUKELE",
      value: 3721,
    },
    {
      label: "KATUKELE",
      value: 4836,
    },
    {
      label: "KATUKELE WEST",
      value: 4838,
    },
    {
      label: "KETAWALA",
      value: 5069,
    },
    {
      label: "LEWELLA",
      value: 5997,
    },
    {
      label: "LEWLA",
      value: 6000,
    },
    {
      label: "MAHAIYAWA",
      value: 6300,
    },
    {
      label: "MAHAKANDA",
      value: 6309,
    },
    {
      label: "MAHANUWARA",
      value: 6337,
    },
    {
      label: "MAHAWELI UYANA",
      value: 6389,
    },
    {
      label: "MALIGATHENNA",
      value: 6536,
    },
    {
      label: "MALWATTA",
      value: 6586,
    },
    {
      label: "MAPANAWATHURA",
      value: 6713,
    },
    {
      label: "MAVILMADA",
      value: 6860,
    },
    {
      label: "MEDDEGAMA",
      value: 6980,
    },
    {
      label: "MULGAMPALA",
      value: 7429,
    },
    {
      label: "NAGASTHENNA",
      value: 7577,
    },
    {
      label: "NITTAWELA",
      value: 8031,
    },
    {
      label: "NUWARA DODAMWALA",
      value: 8092,
    },
    {
      label: "OGASTAWATTA",
      value: 8111,
    },
    {
      label: "PAHALA ERIYAGAMA",
      value: 8260,
    },
    {
      label: "PALLE PERADENIYA",
      value: 8490,
    },
    {
      label: "PITAKANDA GAMA",
      value: 9130,
    },
    {
      label: "POORNA WATTA EAST",
      value: 9278,
    },
    {
      label: "POORNA WATTA WEST",
      value: 9279,
    },
    {
      label: "SENKADAGALA",
      value: 10056,
    },
    {
      label: "SIYAMBALAGASTHENNA",
      value: 10192,
    },
    {
      label: "SUDUHUMPALA EAST",
      value: 10281,
    },
    {
      label: "SUDUHUMPALA WEST",
      value: 10282,
    },
    {
      label: "THALWATTA",
      value: 10452,
    },
    {
      label: "THENNAKUMBURA",
      value: 10604,
    },
    {
      label: "UDA BOWALA",
      value: 10862,
    },
    {
      label: "UDA PERADENIYA",
      value: 10877,
    },
    {
      label: "ULPATHAKUMBURA",
      value: 11133,
    },
    {
      label: "WATAPULUWA",
      value: 11754,
    },
    {
      label: "WATAPULUWA SOUTH",
      value: 11755,
    },
    {
      label: "WATAPULUWA WEST",
      value: 11756,
    },
    {
      label: "WATTARANTHENNA",
      value: 11798,
    },
    {
      label: "WELATA",
      value: 11924,
    },
    {
      label: "WEWATHENNA",
      value: 12148,
    },
  ],
  "361": [
    {
      label: "ALAGODA",
      value: 157,
    },
    {
      label: "ALAWATTA",
      value: 199,
    },
    {
      label: "AMBARUPPA",
      value: 368,
    },
    {
      label: "ANKUMBURA NORTH",
      value: 512,
    },
    {
      label: "ANKUMBURA SOUTH",
      value: 513,
    },
    {
      label: "ANKUMBURA UDAGAMA",
      value: 514,
    },
    {
      label: "BAMUNUPOLA",
      value: 838,
    },
    {
      label: "BATAGALLA NORTH",
      value: 906,
    },
    {
      label: "BATAGALLA SOUTH",
      value: 907,
    },
    {
      label: "BATAGOLLADENIYA",
      value: 915,
    },
    {
      label: "BATUGODA NORTH",
      value: 956,
    },
    {
      label: "BATUGODA SOUTH",
      value: 957,
    },
    {
      label: "BOKKAWALA",
      value: 1151,
    },
    {
      label: "DEHIWATTA",
      value: 1651,
    },
    {
      label: "DIDDENIYA",
      value: 1831,
    },
    {
      label: "DIWANAWATTA",
      value: 1921,
    },
    {
      label: "DOLAPIHILLA NORTH",
      value: 1990,
    },
    {
      label: "DOLAPIHILLA SOUTH",
      value: 1991,
    },
    {
      label: "DOMBAGAMMANA",
      value: 2003,
    },
    {
      label: "EGODAMULLA NORTH",
      value: 2140,
    },
    {
      label: "EGODAMULLA SOUTH",
      value: 2141,
    },
    {
      label: "GALHINNA",
      value: 2557,
    },
    {
      label: "GALKANDA",
      value: 2562,
    },
    {
      label: "GALLELLA",
      value: 2583,
    },
    {
      label: "GODAHENA",
      value: 2845,
    },
    {
      label: "HARANKAHAWA",
      value: 3221,
    },
    {
      label: "HENEGAMA",
      value: 3350,
    },
    {
      label: "IHALAMULLA",
      value: 3820,
    },
    {
      label: "KAHATAGASTHENNA",
      value: 4169,
    },
    {
      label: "KAHAWATTA NORTH",
      value: 4193,
    },
    {
      label: "KAHAWATTA SOUTH",
      value: 4194,
    },
    {
      label: "KALUWANA NORTH",
      value: 4379,
    },
    {
      label: "KALUWANA SOUTH",
      value: 4380,
    },
    {
      label: "KIRALAGAMA",
      value: 5124,
    },
    {
      label: "KOVILAMUDUNA",
      value: 5648,
    },
    {
      label: "MADADENIYA",
      value: 6075,
    },
    {
      label: "MARATHUGODA NORTH",
      value: 6752,
    },
    {
      label: "MARATHUGODA SOUTH",
      value: 6753,
    },
    {
      label: "MARUDDANA",
      value: 6769,
    },
    {
      label: "MEDAGODA",
      value: 6947,
    },
    {
      label: "MOLAGODA",
      value: 7261,
    },
    {
      label: "MORANKANDA",
      value: 7339,
    },
    {
      label: "MULLEGAMA NORTH",
      value: 7442,
    },
    {
      label: "MULLEGAMA SOUTH",
      value: 7443,
    },
    {
      label: "OVISSA NORTH",
      value: 8192,
    },
    {
      label: "OVISSA SOUTH",
      value: 8193,
    },
    {
      label: "PAHALA HINGULWALA",
      value: 8279,
    },
    {
      label: "PAHALA KITHULGOLLA",
      value: 8302,
    },
    {
      label: "PALEEPANA",
      value: 8458,
    },
    {
      label: "PALLEGAMA PAHALA",
      value: 8499,
    },
    {
      label: "PALLIYA KOTUWA",
      value: 8543,
    },
    {
      label: "PATHIRADA",
      value: 8850,
    },
    {
      label: "RAMBUKEWELA",
      value: 9603,
    },
    {
      label: "SIYAPATHGAMA",
      value: 10217,
    },
    {
      label: "UDA KITHULGOLLA",
      value: 10873,
    },
    {
      label: "UDAHENA",
      value: 10908,
    },
    {
      label: "UDAHINGULWALA",
      value: 10912,
    },
    {
      label: "UGGAHAKUMBURA",
      value: 11083,
    },
    {
      label: "UGGALA JANAPADAYA",
      value: 11085,
    },
    {
      label: "WALDENIYA",
      value: 11611,
    },
    {
      label: "WARAKADENIYA",
      value: 11706,
    },
    {
      label: "WATAGALATHENNA",
      value: 11743,
    },
    {
      label: "WATAGODA",
      value: 11748,
    },
    {
      label: "WELGALA",
      value: 11937,
    },
    {
      label: "WELIGALLA",
      value: 11948,
    },
    {
      label: "WEWALA",
      value: 12140,
    },
    {
      label: "WEWALA NORTH",
      value: 12142,
    },
  ],
  "362": [
    {
      label: "AMBAGASWEWA",
      value: 327,
    },
    {
      label: "ATAWARALA",
      value: 650,
    },
    {
      label: "BAKMEEGAHAWATTA",
      value: 753,
    },
    {
      label: "BALAGOLLAGAMA",
      value: 770,
    },
    {
      label: "BALALLA",
      value: 776,
    },
    {
      label: "BAMUNUGAMA",
      value: 832,
    },
    {
      label: "DALADAGAMA",
      value: 1421,
    },
    {
      label: "DAMPITIGAMA",
      value: 1495,
    },
    {
      label: "DEHENEGGAMA",
      value: 1620,
    },
    {
      label: "DIGANA",
      value: 1836,
    },
    {
      label: "DIVULLEWA",
      value: 1913,
    },
    {
      label: "EMBOGAMA",
      value: 2283,
    },
    {
      label: "GAJANEGGAMA",
      value: 2455,
    },
    {
      label: "GALA AMBAGASWEWA",
      value: 2459,
    },
    {
      label: "GALEWEWA",
      value: 2541,
    },
    {
      label: "GALLEWA",
      value: 2588,
    },
    {
      label: "HEENUGGALA",
      value: 3294,
    },
    {
      label: "HEENUKWEWA",
      value: 3297,
    },
    {
      label: "HITHOKADAWALA",
      value: 3488,
    },
    {
      label: "IHALAGAMA",
      value: 3810,
    },
    {
      label: "IMBULGODAYAGAMA",
      value: 3882,
    },
    {
      label: "IPALOGAMA",
      value: 3939,
    },
    {
      label: "KADAMBAWA",
      value: 4075,
    },
    {
      label: "KANDUBADAGAMA",
      value: 4512,
    },
    {
      label: "KARAMBE",
      value: 4663,
    },
    {
      label: "KARUWALAGAHAWATTA",
      value: 4755,
    },
    {
      label: "KATTAMBUWAWA",
      value: 4800,
    },
    {
      label: "KATUWANNAWA",
      value: 4866,
    },
    {
      label: "KEKUNAWA",
      value: 4968,
    },
    {
      label: "KIRIMETIYAWA",
      value: 5182,
    },
    {
      label: "KOHOMBAKADAWALA",
      value: 5328,
    },
    {
      label: "KONWEWA",
      value: 5471,
    },
    {
      label: "KUMBUKWEWA",
      value: 5813,
    },
    {
      label: "LIYANAGAMA",
      value: 6021,
    },
    {
      label: "MADURUGAMA",
      value: 6173,
    },
    {
      label: "MAHAWA EAST",
      value: 6371,
    },
    {
      label: "MAHAWA WEST",
      value: 6372,
    },
    {
      label: "MAKADUWAWA",
      value: 6437,
    },
    {
      label: "MANINGAMUWA",
      value: 6673,
    },
    {
      label: "MEDAGAMA",
      value: 6933,
    },
    {
      label: "METIYAKGAMA",
      value: 7148,
    },
    {
      label: "MIRIHANPITIGAMA",
      value: 7221,
    },
    {
      label: "MOONAMALEGAMA",
      value: 7294,
    },
    {
      label: "MORAGASWEWA",
      value: 7317,
    },
    {
      label: "NAGOLLAGAMA",
      value: 7585,
    },
    {
      label: "NETTIPALAGAMA",
      value: 7922,
    },
    {
      label: "PAHALA BALALLA",
      value: 8238,
    },
    {
      label: "PAHALAGAMA",
      value: 8378,
    },
    {
      label: "PAILIGAMA",
      value: 8394,
    },
    {
      label: "PALUGASWEWA",
      value: 8569,
    },
    {
      label: "PANWEWA",
      value: 8725,
    },
    {
      label: "POTHUWEWA",
      value: 9327,
    },
    {
      label: "RATHMALE",
      value: 9717,
    },
    {
      label: "REKOGAMA",
      value: 9777,
    },
    {
      label: "THALAGALLA",
      value: 10341,
    },
    {
      label: "THALAMBUWA",
      value: 10369,
    },
    {
      label: "THAMBARE",
      value: 10474,
    },
    {
      label: "THAMMITAGAMA",
      value: 10498,
    },
    {
      label: "THISNAMPALAGAMA",
      value: 10698,
    },
    {
      label: "THUMBULLEGAMA",
      value: 10790,
    },
    {
      label: "UDUWERIYA",
      value: 11080,
    },
    {
      label: "ULLALAPOLA",
      value: 11128,
    },
    {
      label: "VILAWA",
      value: 11445,
    },
    {
      label: "WALPALUWA",
      value: 11641,
    },
    {
      label: "YADDIGAMA",
      value: 12205,
    },
  ],
  "363": [
    {
      label: "ADUKKANE",
      value: 56,
    },
    {
      label: "ANGAMUWA",
      value: 486,
    },
    {
      label: "ANUKKANHENA",
      value: 525,
    },
    {
      label: "BEDDEGAMA",
      value: 985,
    },
    {
      label: "BODHIMULLA",
      value: 1116,
    },
    {
      label: "DEMATAWA",
      value: 1729,
    },
    {
      label: "DUNUPOTHA",
      value: 2090,
    },
    {
      label: "GALAGEDARA",
      value: 2473,
    },
    {
      label: "GALLEHEPITIYA",
      value: 2581,
    },
    {
      label: "GONNAWA",
      value: 2952,
    },
    {
      label: "HANWELLA",
      value: 3182,
    },
    {
      label: "HENEGEDARA",
      value: 3353,
    },
    {
      label: "HINDAWA",
      value: 3434,
    },
    {
      label: "KANAPOTHUHERA",
      value: 4440,
    },
    {
      label: "KANDEGEDARA",
      value: 4492,
    },
    {
      label: "KANDUBODA",
      value: 4514,
    },
    {
      label: "KANOGAMA",
      value: 4550,
    },
    {
      label: "KANOYAYA",
      value: 4552,
    },
    {
      label: "KATUMULUWA",
      value: 4851,
    },
    {
      label: "KOLAMBAGAMA",
      value: 5370,
    },
    {
      label: "KOSDENIYA",
      value: 5521,
    },
    {
      label: "MAGULAGAMA",
      value: 6209,
    },
    {
      label: "MAVEEHENA",
      value: 6854,
    },
    {
      label: "MEDAGAMA",
      value: 6933,
    },
    {
      label: "MORAGANE",
      value: 7315,
    },
    {
      label: "NELIBEWA",
      value: 7883,
    },
    {
      label: "NINDAWELA",
      value: 7988,
    },
    {
      label: "PALAVITIYA",
      value: 8447,
    },
    {
      label: "RANORAWA",
      value: 9671,
    },
    {
      label: "RATHMALLA",
      value: 9727,
    },
    {
      label: "THISSAWA",
      value: 10706,
    },
    {
      label: "UDUGAMPALAGEDARA",
      value: 11016,
    },
    {
      label: "WELIWEHERA",
      value: 12011,
    },
    {
      label: "WETEHEPITIYA",
      value: 12121,
    },
    {
      label: "WIJAYA UDAGAMA",
      value: 12176,
    },
    {
      label: "WILBAGEDARA",
      value: 12193,
    },
  ],
  "364": [
    {
      label: "AKARAWATTA",
      value: 96,
    },
    {
      label: "AKURANA",
      value: 143,
    },
    {
      label: "AMBAGAHAGEDARA",
      value: 306,
    },
    {
      label: "BAMUNUMULLA",
      value: 836,
    },
    {
      label: "BANDARA KOSWATTA",
      value: 845,
    },
    {
      label: "BARAMPOLA",
      value: 883,
    },
    {
      label: "BOGOLLA",
      value: 1143,
    },
    {
      label: "DAHANEKGEDARA",
      value: 1418,
    },
    {
      label: "DIGGALAGEDARA",
      value: 1849,
    },
    {
      label: "DIVULWEWA",
      value: 1916,
    },
    {
      label: "DOLAHAMUNA",
      value: 1987,
    },
    {
      label: "DORABAVILA",
      value: 2025,
    },
    {
      label: "DORATIYAGEDARA",
      value: 2041,
    },
    {
      label: "DOTHELLA",
      value: 2047,
    },
    {
      label: "EBOGEDARA",
      value: 2110,
    },
    {
      label: "EHETUMULLA",
      value: 2154,
    },
    {
      label: "EPALADENIYA",
      value: 2301,
    },
    {
      label: "GANEGAMA",
      value: 2690,
    },
    {
      label: "GIRATHALANA",
      value: 2822,
    },
    {
      label: "HAMMALIYA",
      value: 3144,
    },
    {
      label: "HANTHIHAWA",
      value: 3181,
    },
    {
      label: "HATHAPOLA",
      value: 3241,
    },
    {
      label: "HETTIGAMA",
      value: 3373,
    },
    {
      label: "HETTIPOLA",
      value: 3378,
    },
    {
      label: "HIDAGAHAWEWA",
      value: 3399,
    },
    {
      label: "HIDIYAMULLA",
      value: 3409,
    },
    {
      label: "IHALA GOMUGOMUWA",
      value: 3697,
    },
    {
      label: "JAYASIRIPURA",
      value: 4035,
    },
    {
      label: "KADAWALAGEDARA",
      value: 4081,
    },
    {
      label: "KAHATAVILA",
      value: 4176,
    },
    {
      label: "KAMBURAPOLA",
      value: 4400,
    },
    {
      label: "KARAGAHAGEDARA",
      value: 4607,
    },
    {
      label: "KARANDAWA",
      value: 4689,
    },
    {
      label: "KEVITIYA",
      value: 5081,
    },
    {
      label: "KONWEWA",
      value: 5471,
    },
    {
      label: "KOTAMBAPITIYA",
      value: 5577,
    },
    {
      label: "KURUNDU KUMBURA",
      value: 5884,
    },
    {
      label: "MADAINA",
      value: 6080,
    },
    {
      label: "MADIGE MIDIYALA",
      value: 6130,
    },
    {
      label: "MADULLA",
      value: 6160,
    },
    {
      label: "MALWANEGEDARA",
      value: 6583,
    },
    {
      label: "MANDAPOLA",
      value: 6644,
    },
    {
      label: "MEEGASPITIYA",
      value: 7040,
    },
    {
      label: "MIDIYALA",
      value: 7167,
    },
    {
      label: "MOONAMALDENIYA",
      value: 7291,
    },
    {
      label: "MORAGOLLA",
      value: 7321,
    },
    {
      label: "MUNIHIRIGAMA",
      value: 7473,
    },
    {
      label: "NAGOLLAGODA",
      value: 7586,
    },
    {
      label: "NALLURA",
      value: 7641,
    },
    {
      label: "NIKAPITIYA",
      value: 7952,
    },
    {
      label: "OTHEGAMA",
      value: 8181,
    },
    {
      label: "PAHALA GOMUGOMUWA",
      value: 8269,
    },
    {
      label: "PALLEGAMA",
      value: 8497,
    },
    {
      label: "PALUGASWEWA",
      value: 8569,
    },
    {
      label: "PANDUWASNUWARA",
      value: 8671,
    },
    {
      label: "PEPOLEGAMA",
      value: 8972,
    },
    {
      label: "PIHIMBIYA",
      value: 9069,
    },
    {
      label: "RAMBEWA",
      value: 9594,
    },
    {
      label: "RATHMALE",
      value: 9717,
    },
    {
      label: "RIDEEKANDA",
      value: 9788,
    },
    {
      label: "RITTADENIYA",
      value: 9809,
    },
    {
      label: "TEKEWA",
      value: 10316,
    },
    {
      label: "THENGODAGEDARA",
      value: 10594,
    },
    {
      label: "UDAGAMA",
      value: 10891,
    },
    {
      label: "WADUMUNNA",
      value: 11520,
    },
    {
      label: "YAYEGEDARA",
      value: 12318,
    },
    {
      label: "YODHAYAKANDA",
      value: 12322,
    },
  ],
  "365": [
    {
      label: "ELUTHUR",
      value: 2257,
    },
    {
      label: "EMIL NAGAR",
      value: 2289,
    },
    {
      label: "ERUKKALAMPIDDY CENTRE",
      value: 2354,
    },
    {
      label: "ERUKKALAMPIDDY EAST",
      value: 2355,
    },
    {
      label: "ERUKKALAMPIDDY NORTH",
      value: 2356,
    },
    {
      label: "ERUKKALAMPIDDY SOUTH",
      value: 2357,
    },
    {
      label: "ERUKKALAMPIDDY WEST",
      value: 2358,
    },
    {
      label: "KADDUKARANKUDIYIRUPPU",
      value: 4092,
    },
    {
      label: "KALLIKADDAIKKADU",
      value: 4283,
    },
    {
      label: "MATHODDAM",
      value: 6814,
    },
    {
      label: "MOOR STREET",
      value: 7299,
    },
    {
      label: "NAGATHALVU",
      value: 7578,
    },
    {
      label: "NEELASENAI",
      value: 7860,
    },
    {
      label: "OLAITHODUWAI",
      value: 8127,
    },
    {
      label: "PALLIMUNAI EAST",
      value: 8538,
    },
    {
      label: "PALLIMUNAI WEST",
      value: 8539,
    },
    {
      label: "PANANKADDUKODDU EAST",
      value: 8629,
    },
    {
      label: "PANANKADDUKODDU WEST",
      value: 8630,
    },
    {
      label: "PARAPPANKANDAL",
      value: 8793,
    },
    {
      label: "PATTITHODDAM",
      value: 8873,
    },
    {
      label: "PERIYAKADAI",
      value: 9000,
    },
    {
      label: "PERIYAKARISAL",
      value: 9010,
    },
    {
      label: "PERIYANAVATKULAM",
      value: 9019,
    },
    {
      label: "PESALAI NORTH",
      value: 9040,
    },
    {
      label: "PESALAI SOUTH",
      value: 9041,
    },
    {
      label: "PESALAI WEST",
      value: 9042,
    },
    {
      label: "PETTAH",
      value: 9059,
    },
    {
      label: "PUTHUKKAMAM",
      value: 9464,
    },
    {
      label: "PUTHUKUDIYIRUPPU",
      value: 9469,
    },
    {
      label: "SAVATKADDU",
      value: 9987,
    },
    {
      label: "SINNAKADAI",
      value: 10129,
    },
    {
      label: "SIRUTHOPPU",
      value: 10165,
    },
    {
      label: "SOUTH BAR",
      value: 10250,
    },
    {
      label: "TALAIMANNAR",
      value: 10310,
    },
    {
      label: "TALAIMANNAR NORTH",
      value: 10311,
    },
    {
      label: "TALAIMANNAR PIER EAST",
      value: 10312,
    },
    {
      label: "TALAIMANNAR PIER WEST",
      value: 10313,
    },
    {
      label: "TALAIMANNAR SOUTH",
      value: 10314,
    },
    {
      label: "THALVUPADU",
      value: 10451,
    },
    {
      label: "THARAPURAM EAST",
      value: 10536,
    },
    {
      label: "THARAPURAM WEST",
      value: 10537,
    },
    {
      label: "THIRIKETHEESWARAM",
      value: 10671,
    },
    {
      label: "THODDAVELI",
      value: 10724,
    },
    {
      label: "THULLUKUDIYIRUPPU",
      value: 10782,
    },
    {
      label: "UPPUKKULAM NORTH",
      value: 11185,
    },
    {
      label: "UPPUKKULAM SOUTH",
      value: 11186,
    },
    {
      label: "UYILANKULAM",
      value: 11280,
    },
    {
      label: "UYIRTHARAYANKULAM",
      value: 11281,
    },
    {
      label: "VANNAMODDAI",
      value: 11318,
    },
  ],
  "366": [
    {
      label: "AHATHIMURIPPU",
      value: 77,
    },
    {
      label: "ARIPPU EAST",
      value: 594,
    },
    {
      label: "ARIPPU WEST",
      value: 595,
    },
    {
      label: "CHILAVATHURAI",
      value: 1372,
    },
    {
      label: "KARADIKKULI",
      value: 4603,
    },
    {
      label: "KOKKUPADAYAN",
      value: 5351,
    },
    {
      label: "KOLLANKULAM",
      value: 5397,
    },
    {
      label: "KONDACHCHI",
      value: 5428,
    },
    {
      label: "MARICHCHUKKADDI",
      value: 6765,
    },
    {
      label: "MARUTHAMADHU",
      value: 6773,
    },
    {
      label: "METHANVELI",
      value: 7132,
    },
    {
      label: "MULLIKKULAM",
      value: 7447,
    },
    {
      label: "PALAIKULI",
      value: 8404,
    },
    {
      label: "PANDARAVELI",
      value: 8650,
    },
    {
      label: "PERIYAPULLACHCHI POTKERNI",
      value: 9032,
    },
    {
      label: "POONOCHCHIKULAM",
      value: 9277,
    },
    {
      label: "PUTHUVELI",
      value: 9475,
    },
    {
      label: "SEVERIYARPURAM",
      value: 10084,
    },
    {
      label: "SINNAPULLACHCHI POTKERNI",
      value: 10133,
    },
    {
      label: "VEPPANKULAM",
      value: 11396,
    },
  ],
  "367": [
    {
      label: "ACHCHANKULAM",
      value: 21,
    },
    {
      label: "ATHTHIKKULI",
      value: 661,
    },
    {
      label: "CHEDDIYAR MAHANKADDAI ADAMPAN",
      value: 1356,
    },
    {
      label: "CHEMMANTHEEVU",
      value: 1362,
    },
    {
      label: "CHUNDIKKULI",
      value: 1378,
    },
    {
      label: "ILAHADIPIDDY",
      value: 3830,
    },
    {
      label: "ILANTHAMODDAI",
      value: 3837,
    },
    {
      label: "IRADDAIKKULAM",
      value: 3944,
    },
    {
      label: "ISSAIMALAITHALVU",
      value: 3973,
    },
    {
      label: "KALIMODDAI PULIYANKULAM",
      value: 4266,
    },
    {
      label: "KANCHITHALVU",
      value: 4452,
    },
    {
      label: "KATKIDANTHAKULAM",
      value: 4791,
    },
    {
      label: "MODDAIKADAI",
      value: 7256,
    },
    {
      label: "MURUNKAN",
      value: 7492,
    },
    {
      label: "NANADDAN",
      value: 7666,
    },
    {
      label: "NARUVILIKKULAM",
      value: 7737,
    },
    {
      label: "PALLANKODDAI",
      value: 8472,
    },
    {
      label: "PARIHARIKANDAL",
      value: 8809,
    },
    {
      label: "PERIYAKADDAIKADU",
      value: 9001,
    },
    {
      label: "PONTHEEVUKANDAL",
      value: 9259,
    },
    {
      label: "PUTTIRARKANDAN",
      value: 9479,
    },
    {
      label: "RASAMADHU",
      value: 9692,
    },
    {
      label: "RAZOOLPUTHUVELI",
      value: 9765,
    },
    {
      label: "SIRUKKANDAL",
      value: 10162,
    },
    {
      label: "THOMASPURI",
      value: 10731,
    },
    {
      label: "UMANAGARI",
      value: 11144,
    },
    {
      label: "VALKAIPATTANKANDAL",
      value: 11300,
    },
    {
      label: "VANCHIANKULAM",
      value: 11314,
    },
    {
      label: "VANKALAI EAST",
      value: 11315,
    },
    {
      label: "VANKALAI NORTH",
      value: 11316,
    },
    {
      label: "VANKALAI WEST",
      value: 11317,
    },
  ],
  "368": [
    {
      label: "DEEYAGAHA EAST",
      value: 1610,
    },
    {
      label: "DEEYAGAHA WEST",
      value: 1611,
    },
    {
      label: "EDUWA - MADURUDOOWA",
      value: 2122,
    },
    {
      label: "ELIYAKANDA NORTH",
      value: 2215,
    },
    {
      label: "ELIYAKANDA SOUTH",
      value: 2216,
    },
    {
      label: "FORT",
      value: 2441,
    },
    {
      label: "GANDARAWATTA",
      value: 2685,
    },
    {
      label: "GODAGAMA",
      value: 2838,
    },
    {
      label: "HITTETIYA EAST",
      value: 3490,
    },
    {
      label: "HITTETIYA MEDA",
      value: 3491,
    },
    {
      label: "HITTETIYA WEST",
      value: 3492,
    },
    {
      label: "ISADEEN TOWN",
      value: 3970,
    },
    {
      label: "KADEWEEDIYA EAST",
      value: 4098,
    },
    {
      label: "KADEWEEDIYA SOUTH",
      value: 4099,
    },
    {
      label: "KADEWEEDIYA WEST",
      value: 4100,
    },
    {
      label: "KANATTAGODA NORTH",
      value: 4442,
    },
    {
      label: "KANATTEGODA SOUTH",
      value: 4444,
    },
    {
      label: "KEKANADURA CENTRAL",
      value: 4950,
    },
    {
      label: "KEKANADURA EAST",
      value: 4951,
    },
    {
      label: "KEKANADURA NORTH",
      value: 4952,
    },
    {
      label: "KEKANADURA SOUTH",
      value: 4953,
    },
    {
      label: "KEKANADURA WEST",
      value: 4954,
    },
    {
      label: "KOKAWALA",
      value: 5344,
    },
    {
      label: "KOTUWEGODA NORTH",
      value: 5642,
    },
    {
      label: "KOTUWEGODA SOUTH",
      value: 5643,
    },
    {
      label: "MADIHA EAST",
      value: 6133,
    },
    {
      label: "MADIHA WEST",
      value: 6134,
    },
    {
      label: "MAKAVITA",
      value: 6447,
    },
    {
      label: "MATHOTAGAMA",
      value: 6815,
    },
    {
      label: "MEDDAWATTA",
      value: 6978,
    },
    {
      label: "MEDDAWATTA SOUTH",
      value: 6979,
    },
    {
      label: "NAKUTTIYA",
      value: 7621,
    },
    {
      label: "NAVIMANA NORTH",
      value: 7772,
    },
    {
      label: "NAVIMANA SOUTH",
      value: 7773,
    },
    {
      label: "NOOPE",
      value: 8056,
    },
    {
      label: "PAHALAGODA",
      value: 8379,
    },
    {
      label: "PAMBURANA",
      value: 8588,
    },
    {
      label: "PARAWAHERA EAST",
      value: 8803,
    },
    {
      label: "PARAWAHERA NORTH",
      value: 8804,
    },
    {
      label: "PARAWAHERA SOUTH",
      value: 8805,
    },
    {
      label: "POLHENA",
      value: 9219,
    },
    {
      label: "RASSANDENIYA",
      value: 9697,
    },
    {
      label: "RUWAN ELLA",
      value: 9843,
    },
    {
      label: "SUDARSHI PLACE",
      value: 10279,
    },
    {
      label: "THALPAVILA NORTH",
      value: 10439,
    },
    {
      label: "THALPAVILA SOUTH",
      value: 10440,
    },
    {
      label: "THOTAMUNA",
      value: 10756,
    },
    {
      label: "THUDAWA EAST",
      value: 10770,
    },
    {
      label: "THUDAWA NORTH",
      value: 10771,
    },
    {
      label: "THUDAWA SOUTH",
      value: 10772,
    },
    {
      label: "UYANWATTA",
      value: 11277,
    },
    {
      label: "UYANWATTA NORTH",
      value: 11278,
    },
    {
      label: "VEHERAHENA",
      value: 11372,
    },
    {
      label: "WALGAMA",
      value: 11613,
    },
    {
      label: "WALGAMA MEDA",
      value: 11615,
    },
    {
      label: "WALGAMA NORTH",
      value: 11616,
    },
    {
      label: "WALGAMA SOUTH",
      value: 11617,
    },
    {
      label: "WALPALA",
      value: 11636,
    },
    {
      label: "WELEGODA EAST",
      value: 11928,
    },
    {
      label: "WELEGODA WEST",
      value: 11929,
    },
    {
      label: "WELIWERIYA EAST",
      value: 12012,
    },
    {
      label: "WELIWERIYA WEST",
      value: 12015,
    },
    {
      label: "WERADOOWA",
      value: 12073,
    },
    {
      label: "WERAGAMPITA",
      value: 12076,
    },
    {
      label: "WEWA IHALAGODA",
      value: 12133,
    },
    {
      label: "WEWAHAMANDOOWA",
      value: 12137,
    },
  ],
  "369": [
    {
      label: "ANANDAPURAM",
      value: 445,
    },
    {
      label: "IRANAIPPALAI",
      value: 3958,
    },
    {
      label: "KOMBAVIL",
      value: 5419,
    },
    {
      label: "MALLIKAITHIVU",
      value: 6565,
    },
    {
      label: "MANIKKAPURAM",
      value: 6670,
    },
    {
      label: "MANNAKANDAL",
      value: 6692,
    },
    {
      label: "MANTHUVIL",
      value: 6698,
    },
    {
      label: "PUTHUKKUDIYIRUPPU EAST",
      value: 9465,
    },
    {
      label: "PUTHUKKUDIYIRUPPU WEST",
      value: 9466,
    },
    {
      label: "SIVANAGAR",
      value: 10179,
    },
    {
      label: "SUTHANTHIRAPURAM",
      value: 10304,
    },
    {
      label: "THERAVIL",
      value: 10617,
    },
    {
      label: "THEVIPURAM",
      value: 10624,
    },
    {
      label: "UDAIYARKADDU NORTH",
      value: 10915,
    },
    {
      label: "UDAYARKADDU SOUTH",
      value: 10994,
    },
    {
      label: "VALLIPUNAM",
      value: 11301,
    },
    {
      label: "VALLUVARPURAM",
      value: 11303,
    },
    {
      label: "VISUVAMADU EAST",
      value: 11483,
    },
    {
      label: "VISUVAMADU WEST",
      value: 11484,
    },
  ],
  "370": [
    {
      label: "ANDIMUNAI",
      value: 471,
    },
    {
      label: "ANGUNAVILA",
      value: 496,
    },
    {
      label: "KADAYAMOTTE",
      value: 4088,
    },
    {
      label: "KANAMULLA NORTH",
      value: 4433,
    },
    {
      label: "KANAMULLA SOUTH",
      value: 4434,
    },
    {
      label: "KANDATHODUWAWA",
      value: 4483,
    },
    {
      label: "KARATHANVILLUWA",
      value: 4711,
    },
    {
      label: "KATTAKADUWA",
      value: 4797,
    },
    {
      label: "KOTTANTHIEVU",
      value: 5615,
    },
    {
      label: "KUDIRIPPUWA",
      value: 5740,
    },
    {
      label: "MADURANKULIYA",
      value: 6169,
    },
    {
      label: "MANGALAELIYA",
      value: 6661,
    },
    {
      label: "MUKKUTHODUWAWA",
      value: 7420,
    },
    {
      label: "MUNDALAMA",
      value: 7469,
    },
    {
      label: "NALLANDALUWA",
      value: 7633,
    },
    {
      label: "NAWADANKULAMA",
      value: 7791,
    },
    {
      label: "PALASOLA",
      value: 8439,
    },
    {
      label: "PALLIWASALPADUWA",
      value: 8541,
    },
    {
      label: "PERUKKUVATTAN",
      value: 9037,
    },
    {
      label: "POONAPITIYA",
      value: 9275,
    },
    {
      label: "PUBUDUGAMA",
      value: 9341,
    },
    {
      label: "PULICHCHAKULAMA",
      value: 9370,
    },
    {
      label: "PULUDIVIYAL",
      value: 9399,
    },
    {
      label: "SAMEERAGAMA",
      value: 9899,
    },
    {
      label: "SINNAPADUWA",
      value: 10132,
    },
    {
      label: "THARAKUDIVILLUWA",
      value: 10530,
    },
    {
      label: "UDAPPUWA",
      value: 10957,
    },
    {
      label: "VIRUTHODAI",
      value: 11480,
    },
    {
      label: "WEERAPURA",
      value: 11867,
    },
    {
      label: "WELUSUMANAPURA",
      value: 12049,
    },
  ],
  "371": [
    {
      label: "ALUTH ELUWANKULAMA",
      value: 245,
    },
    {
      label: "BANDARANAYAKAPURA",
      value: 855,
    },
    {
      label: "KARADIPUWAL",
      value: 4604,
    },
    {
      label: "KARATHIVU NORTH",
      value: 4712,
    },
    {
      label: "KARATHIVU SOUTH",
      value: 4713,
    },
    {
      label: "MAILANKULAMA",
      value: 6421,
    },
    {
      label: "MANGALA PURA",
      value: 6660,
    },
    {
      label: "PARANA ELUWANKULAMA",
      value: 8767,
    },
    {
      label: "PUKKULAMA",
      value: 9363,
    },
    {
      label: "RALMADUWA",
      value: 9586,
    },
    {
      label: "SAMAGIPURA",
      value: 9885,
    },
    {
      label: "SERAKKULIYA",
      value: 10061,
    },
    {
      label: "VANATHAVILLUWA NORTH",
      value: 11312,
    },
    {
      label: "VANATHAVILLUWA SOUTH",
      value: 11313,
    },
    {
      label: "VATTAKANDAL",
      value: 11338,
    },
    {
      label: "WIJAYAPURA EAST",
      value: 12184,
    },
    {
      label: "WIJAYAPURA WEST",
      value: 12185,
    },
  ],
  "372": [
    {
      label: "AMUWALA",
      value: 433,
    },
    {
      label: "BATAKADA",
      value: 917,
    },
    {
      label: "DAMBULUWANA",
      value: 1479,
    },
    {
      label: "DELLABADA",
      value: 1696,
    },
    {
      label: "DIGANA",
      value: 1836,
    },
    {
      label: "ELAPATHA",
      value: 2191,
    },
    {
      label: "GANGULVITIYA",
      value: 2728,
    },
    {
      label: "HALDOLA",
      value: 3074,
    },
    {
      label: "HANGAMUWA",
      value: 3168,
    },
    {
      label: "KAHAWATTA",
      value: 4192,
    },
    {
      label: "KARANGODA",
      value: 4701,
    },
    {
      label: "KEHELOVITIGAMA",
      value: 4942,
    },
    {
      label: "KOTAMULLA",
      value: 5581,
    },
    {
      label: "MAGURUGODA",
      value: 6214,
    },
    {
      label: "NIRIELLA",
      value: 8016,
    },
    {
      label: "PALAWELA",
      value: 8450,
    },
    {
      label: "PALLEGEDARA",
      value: 8501,
    },
    {
      label: "RADDELLA",
      value: 9520,
    },
    {
      label: "SAMANGAMA",
      value: 9892,
    },
    {
      label: "WERAGAMA",
      value: 12075,
    },
  ],
  "373": [
    {
      label: "AKARELLA",
      value: 97,
    },
    {
      label: "BATADURA",
      value: 904,
    },
    {
      label: "DANDENIYA",
      value: 1510,
    },
    {
      label: "GALKANDA",
      value: 2562,
    },
    {
      label: "HALLINNA",
      value: 3090,
    },
    {
      label: "HATTELLA",
      value: 3255,
    },
    {
      label: "HATTELLA EGODA",
      value: 3256,
    },
    {
      label: "HUNUWALA NORTH",
      value: 3618,
    },
    {
      label: "HUNUWALA SOUTH",
      value: 3619,
    },
    {
      label: "KENDAKETIYA",
      value: 5005,
    },
    {
      label: "LIYANAGODA",
      value: 6025,
    },
    {
      label: "MADOLA",
      value: 6141,
    },
    {
      label: "MALMEEKANDA",
      value: 6567,
    },
    {
      label: "MEEGAHAWELA",
      value: 7031,
    },
    {
      label: "METIHAKWALA",
      value: 7139,
    },
    {
      label: "OPANAYAKA",
      value: 8159,
    },
    {
      label: "PELENDAKANDA",
      value: 8938,
    },
    {
      label: "POLWATTAHENA",
      value: 9249,
    },
    {
      label: "UDAWELA",
      value: 10979,
    },
    {
      label: "WALLAKETIYA",
      value: 11628,
    },
  ],
  "374": [
    {
      label: "AGBOPURA",
      value: 67,
    },
    {
      label: "BATUKACHCHIYA",
      value: 958,
    },
    {
      label: "BHATHIYAGAMA",
      value: 1075,
    },
    {
      label: "GANTHALAWA UNIT 11",
      value: 2740,
    },
    {
      label: "GANTHALAWA UNIT 12",
      value: 2741,
    },
    {
      label: "JAYANTHIPURA",
      value: 4026,
    },
    {
      label: "KANTALE TOWN",
      value: 4554,
    },
    {
      label: "KANTALE TOWN SOUTH",
      value: 4555,
    },
    {
      label: "PANSALGODELLA",
      value: 8714,
    },
    {
      label: "PERARU EAST",
      value: 8983,
    },
    {
      label: "PERARU UNIT 02",
      value: 8984,
    },
    {
      label: "PERARU WEST",
      value: 8985,
    },
    {
      label: "RAJAELA UNIT 03",
      value: 9553,
    },
    {
      label: "RAJAELA UNIT 04",
      value: 9554,
    },
    {
      label: "RAJAELA UNIT 05",
      value: 9555,
    },
    {
      label: "RAJAWEWA",
      value: 9574,
    },
    {
      label: "SEENIPURA",
      value: 10004,
    },
    {
      label: "SOORIYAPURA",
      value: 10240,
    },
    {
      label: "VENDRASANPURA UNIT 14",
      value: 11391,
    },
    {
      label: "VENDRASANPURA UNIT 15",
      value: 11392,
    },
    {
      label: "VENDRASANPURA UNIT 16",
      value: 11393,
    },
    {
      label: "WANELA EAST",
      value: 11678,
    },
    {
      label: "WANELA WEST",
      value: 11679,
    },
  ],
  "375": [
    {
      label: "ABAYAPURA",
      value: 12,
    },
    {
      label: "ANDANKULAMA",
      value: 458,
    },
    {
      label: "ANPUVALIPURAM",
      value: 521,
    },
    {
      label: "ARASADI",
      value: 582,
    },
    {
      label: "ARUNAGIRINAGAR",
      value: 613,
    },
    {
      label: "CHAINA BAY",
      value: 1337,
    },
    {
      label: "ELUPPAIKULAM",
      value: 2254,
    },
    {
      label: "JINNANAGAR",
      value: 4047,
    },
    {
      label: "KANNIYA",
      value: 4549,
    },
    {
      label: "KAPPALTHURAI",
      value: 4579,
    },
    {
      label: "KAVADDIKUDA",
      value: 4880,
    },
    {
      label: "KOVILADY",
      value: 5645,
    },
    {
      label: "LINGANAGAR",
      value: 6019,
    },
    {
      label: "MANAYAVELI",
      value: 6632,
    },
    {
      label: "MANKAIYOOTTU",
      value: 6685,
    },
    {
      label: "MIHINDUPURA",
      value: 7169,
    },
    {
      label: "MUDCOVE",
      value: 7390,
    },
    {
      label: "MURUGAPURI",
      value: 7486,
    },
    {
      label: "MUTHTHUNAGAR",
      value: 7512,
    },
    {
      label: "NACHCHIKUDA",
      value: 7558,
    },
    {
      label: "ORR'S HILL",
      value: 8169,
    },
    {
      label: "PALAIYOOTTU",
      value: 8408,
    },
    {
      label: "PATTANATHERU",
      value: 8862,
    },
    {
      label: "PEELIYADY",
      value: 8907,
    },
    {
      label: "PERUNTHERU",
      value: 9038,
    },
    {
      label: "POOMPUHAR",
      value: 9272,
    },
    {
      label: "PULIYANKULAM",
      value: 9376,
    },
    {
      label: "SALLI",
      value: 9883,
    },
    {
      label: "SAMPALTHIVU",
      value: 9918,
    },
    {
      label: "SELVANAYAHAPURAM",
      value: 10029,
    },
    {
      label: "SINGHAPURA",
      value: 10108,
    },
    {
      label: "SIVAPURI",
      value: 10181,
    },
    {
      label: "SONAGAVADI",
      value: 10227,
    },
    {
      label: "SUMEDHANKARAPURA",
      value: 10293,
    },
    {
      label: "THILLAINAGAR",
      value: 10650,
    },
    {
      label: "THIRUKADALOOR",
      value: 10677,
    },
    {
      label: "UPPUVELI",
      value: 11188,
    },
    {
      label: "VAROTHAYANAGAR",
      value: 11334,
    },
    {
      label: "VILLUNDY",
      value: 11465,
    },
    {
      label: "WELLAIMANAL",
      value: 12024,
    },
    {
      label: "WELVERI",
      value: 12050,
    },
    {
      label: "WILGAMA",
      value: 12194,
    },
  ],
  "376": [
    {
      label: "ANAITHEEVU",
      value: 439,
    },
    {
      label: "EACHCHILAMPATHAI",
      value: 2105,
    },
    {
      label: "ILANGAITHURAI",
      value: 3834,
    },
    {
      label: "ILANGAITHURAI MUGATHUVARAM",
      value: 3835,
    },
    {
      label: "KARUKKAMUNAI",
      value: 4737,
    },
    {
      label: "POOMARATHADICHENAI",
      value: 9271,
    },
    {
      label: "POONAGAR",
      value: 9274,
    },
    {
      label: "UPPOORAL",
      value: 11184,
    },
    {
      label: "VERUGAL",
      value: 11398,
    },
    {
      label: "VERUGAL MUGATHUVARAM",
      value: 11399,
    },
  ],
  "377": [
    {
      label: "ALUTHWEWA",
      value: 279,
    },
    {
      label: "AMANE",
      value: 299,
    },
    {
      label: "DIVULWEWA",
      value: 1916,
    },
    {
      label: "HIDOGAMA",
      value: 3410,
    },
    {
      label: "KALUARACHCHIYAGAMA",
      value: 4322,
    },
    {
      label: "KALUVILA NORTH",
      value: 4370,
    },
    {
      label: "KIMBULAKADA",
      value: 5098,
    },
    {
      label: "KUDA NELUBEWA",
      value: 5679,
    },
    {
      label: "MADAWALAGAMA",
      value: 6108,
    },
    {
      label: "MAHA NELUBEWA",
      value: 6251,
    },
    {
      label: "NACHCHADOOWA",
      value: 7555,
    },
    {
      label: "NACHCHADOOWA NEW TOWN",
      value: 7556,
    },
    {
      label: "PAHALAWEWA",
      value: 8384,
    },
    {
      label: "PALAYAKULAMA",
      value: 8451,
    },
    {
      label: "PAWAKKULAMA",
      value: 8897,
    },
    {
      label: "SHRAWASTHIPURA",
      value: 10094,
    },
    {
      label: "SHRAWASTHIWATTA",
      value: 10095,
    },
    {
      label: "SUHADAGAMA",
      value: 10286,
    },
    {
      label: "THURUVILA",
      value: 10829,
    },
  ],
};
