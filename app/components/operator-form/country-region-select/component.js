import Ember from 'ember';
import _ from 'npm:lodash';

/*
the country and region lists below come from the Who's on First project
more info at: http://whosonfirst.mapzen.com/
to "bake" these arrays:

1. install dependencies:
  brew install jq curl
  npm install -g csvtojson
2. build country list:
  curl https://raw.githubusercontent.com/whosonfirst/whosonfirst-data/master/meta/wof-country-latest.csv | csvtojson | jq 'map(.|= with_entries(select(.key == ("iso", "name")))) | sort_by(.name)' | pbcopy
3. build region list:
  curl https://raw.githubusercontent.com/whosonfirst/whosonfirst-data/master/meta/wof-region-latest.csv | csvtojson | jq 'map(.|= with_entries(select(.key == ("iso", "name")))) | sort_by(.name)' | pbcopy
4. manually edit French overseas departments: https://en.wikipedia.org/wiki/ISO_3166-2:FR#Overseas_departments

TODO: In the future, we may want to split apart the regions into separate JSON
files to be fetched asynchronously, like: http://discuss.emberjs.com/t/how-to-parse-a-local-json-file/9225/2
 That would decrease the initial payload that needs to be loaded by clients.
*/

export default Ember.Component.extend({
  setCountryAndRegionFromExistingValues: function() {
    let currentCountryName = this.get('operator.country');
    let currentRegionName = this.get('operator.state');
    if (currentCountryName !== null) {
      this.set('selectedCountry', _.find(this.countries, function(country) {
        return country.name === currentCountryName;
      }));
    }
    if (currentRegionName !== null) {
      this.set('selectedRegion', _.find(this.regions, function(region) {
        return region.name === currentRegionName;
      }));
    }
  }.on('init'),
  selectedRegions: [],
  actions: {
    handleFocus(select) {
      select.actions.open();
    },
    setCountry(selectedCountry) {
      this.set('selectedCountry', selectedCountry);
      this.set('operator.country', selectedCountry.name);
      this.set('selectedRegions', _.filter(this.regions, function(region) {
        return region.iso === selectedCountry.iso;
      }));
    },
    setRegion(selectedRegion) {
      this.set('selectedRegion', selectedRegion);
      this.set('operator.state', selectedRegion.name);
    }
  },
  countries: [{
    "iso": "AF",
    "name": "Afghanistan"
  }, {
    "iso": "AL",
    "name": "Albania"
  }, {
    "iso": "DZ",
    "name": "Algeria"
  }, {
    "iso": "AD",
    "name": "Andorra"
  }, {
    "iso": "AO",
    "name": "Angola"
  }, {
    "iso": "AQ",
    "name": "Antarctica"
  }, {
    "iso": "AG",
    "name": "Antigua and Barbuda"
  }, {
    "iso": "AR",
    "name": "Argentina"
  }, {
    "iso": "AM",
    "name": "Armenia"
  }, {
    "iso": "AW",
    "name": "Aruba"
  }, {
    "iso": "AU",
    "name": "Australia"
  }, {
    "iso": "AT",
    "name": "Austria"
  }, {
    "iso": "AZ",
    "name": "Azerbaijan"
  }, {
    "iso": "BH",
    "name": "Bahrain"
  }, {
    "iso": "BD",
    "name": "Bangladesh"
  }, {
    "iso": "BB",
    "name": "Barbados"
  }, {
    "iso": "BY",
    "name": "Belarus"
  }, {
    "iso": "BE",
    "name": "Belgium"
  }, {
    "iso": "BZ",
    "name": "Belize"
  }, {
    "iso": "BJ",
    "name": "Benin"
  }, {
    "iso": "BT",
    "name": "Bhutan"
  }, {
    "iso": "BO",
    "name": "Bolivia"
  }, {
    "iso": "BA",
    "name": "Bosnia and Herzegovina"
  }, {
    "iso": "BW",
    "name": "Botswana"
  }, {
    "iso": "BR",
    "name": "Brazil"
  }, {
    "iso": "BN",
    "name": "Brunei"
  }, {
    "iso": "BG",
    "name": "Bulgaria"
  }, {
    "iso": "BF",
    "name": "Burkina Faso"
  }, {
    "iso": "BI",
    "name": "Burundi"
  }, {
    "iso": "KH",
    "name": "Cambodia"
  }, {
    "iso": "CM",
    "name": "Cameroon"
  }, {
    "iso": "CA",
    "name": "Canada"
  }, {
    "iso": "CV",
    "name": "Cape Verde"
  }, {
    "iso": "CF",
    "name": "Central African Republic"
  }, {
    "iso": "TD",
    "name": "Chad"
  }, {
    "iso": "CL",
    "name": "Chile"
  }, {
    "iso": "CN",
    "name": "China"
  }, {
    "iso": "CO",
    "name": "Colombia"
  }, {
    "iso": "KM",
    "name": "Comoros"
  }, {
    "iso": "CR",
    "name": "Costa Rica"
  }, {
    "iso": "HR",
    "name": "Croatia"
  }, {
    "iso": "CU",
    "name": "Cuba"
  }, {
    "iso": "CW",
    "name": "Curacao"
  }, {
    "iso": "CY",
    "name": "Cyprus"
  }, {
    "iso": "CZ",
    "name": "Czech Republic"
  }, {
    "iso": "CD",
    "name": "Democratic Republic of the Congo"
  }, {
    "iso": "DK",
    "name": "Denmark"
  }, {
    "iso": "DJ",
    "name": "Djibouti"
  }, {
    "iso": "DM",
    "name": "Dominica"
  }, {
    "iso": "DO",
    "name": "Dominican Republic"
  }, {
    "iso": "TL",
    "name": "East Timor"
  }, {
    "iso": "EC",
    "name": "Ecuador"
  }, {
    "iso": "EG",
    "name": "Egypt"
  }, {
    "iso": "SV",
    "name": "El Salvador"
  }, {
    "iso": "GQ",
    "name": "Equatorial Guinea"
  }, {
    "iso": "ER",
    "name": "Eritrea"
  }, {
    "iso": "EE",
    "name": "Estonia"
  }, {
    "iso": "ET",
    "name": "Ethiopia"
  }, {
    "iso": "FM",
    "name": "Federated States of Micronesia"
  }, {
    "iso": "FJ",
    "name": "Fiji"
  }, {
    "iso": "FI",
    "name": "Finland"
  }, {
    "iso": "FR",
    "name": "France"
  }, {
    "iso": "GP",
    "name": "France (Guadeloupe)"
  }, {
    "iso": "GF",
    "name": "France (Guyane)"
  }, {
    "iso": "RE",
    "name": "France (La Réunion)"
  }, {
    "iso": "MQ",
    "name": "France (Martinique)"
  }, {
    "iso": "YT",
    "name": "France (Mayotte)"
  }, {
    "iso": "GA",
    "name": "Gabon"
  }, {
    "iso": "GM",
    "name": "Gambia"
  }, {
    "iso": "GE",
    "name": "Georgia"
  }, {
    "iso": "DE",
    "name": "Germany"
  }, {
    "iso": "GH",
    "name": "Ghana"
  }, {
    "iso": "GR",
    "name": "Greece"
  }, {
    "iso": "GL",
    "name": "Greenland"
  }, {
    "iso": "GD",
    "name": "Grenada"
  }, {
    "iso": "GT",
    "name": "Guatemala"
  }, {
    "iso": "GG",
    "name": "Guernsey"
  }, {
    "iso": "GN",
    "name": "Guinea"
  }, {
    "iso": "GW",
    "name": "Guinea Bissau"
  }, {
    "iso": "GY",
    "name": "Guyana"
  }, {
    "iso": "HT",
    "name": "Haiti"
  }, {
    "iso": "HN",
    "name": "Honduras"
  }, {
    "iso": "HK",
    "name": "Hong Kong S.A.R."
  }, {
    "iso": "HU",
    "name": "Hungary"
  }, {
    "iso": "IS",
    "name": "Iceland"
  }, {
    "iso": "IN",
    "name": "India"
  }, {
    "iso": "CC",
    "name": "Indian Ocean Territories"
  }, {
    "iso": "ID",
    "name": "Indonesia"
  }, {
    "iso": "IR",
    "name": "Iran"
  }, {
    "iso": "IQ",
    "name": "Iraq"
  }, {
    "iso": "IE",
    "name": "Ireland"
  }, {
    "iso": "IM",
    "name": "Isle of Man"
  }, {
    "iso": "IL",
    "name": "Israel"
  }, {
    "iso": "IT",
    "name": "Italy"
  }, {
    "iso": "CI",
    "name": "Ivory Coast"
  }, {
    "iso": "JM",
    "name": "Jamaica"
  }, {
    "iso": "JP",
    "name": "Japan"
  }, {
    "iso": "JE",
    "name": "Jersey"
  }, {
    "iso": "JO",
    "name": "Jordan"
  }, {
    "iso": "KZ",
    "name": "Kazakhstan"
  }, {
    "iso": "KE",
    "name": "Kenya"
  }, {
    "iso": "KI",
    "name": "Kiribati"
  }, {
    "iso": "XK",
    "name": "Kosovo"
  }, {
    "iso": "KW",
    "name": "Kuwait"
  }, {
    "iso": "KG",
    "name": "Kyrgyzstan"
  }, {
    "iso": "LA",
    "name": "Laos"
  }, {
    "iso": "LV",
    "name": "Latvia"
  }, {
    "iso": "LB",
    "name": "Lebanon"
  }, {
    "iso": "LS",
    "name": "Lesotho"
  }, {
    "iso": "LR",
    "name": "Liberia"
  }, {
    "iso": "LY",
    "name": "Libya"
  }, {
    "iso": "LI",
    "name": "Liechtenstein"
  }, {
    "iso": "LT",
    "name": "Lithuania"
  }, {
    "iso": "LU",
    "name": "Luxembourg"
  }, {
    "iso": "MO",
    "name": "Macao S.A.R"
  }, {
    "iso": "MK",
    "name": "Macedonia"
  }, {
    "iso": "MG",
    "name": "Madagascar"
  }, {
    "iso": "MW",
    "name": "Malawi"
  }, {
    "iso": "MY",
    "name": "Malaysia"
  }, {
    "iso": "MV",
    "name": "Maldives"
  }, {
    "iso": "ML",
    "name": "Mali"
  }, {
    "iso": "MT",
    "name": "Malta"
  }, {
    "iso": "MH",
    "name": "Marshall Islands"
  }, {
    "iso": "MR",
    "name": "Mauritania"
  }, {
    "iso": "MU",
    "name": "Mauritius"
  }, {
    "iso": "MX",
    "name": "Mexico"
  }, {
    "iso": "MD",
    "name": "Moldova"
  }, {
    "iso": "MC",
    "name": "Monaco"
  }, {
    "iso": "MN",
    "name": "Mongolia"
  }, {
    "iso": "ME",
    "name": "Montenegro"
  }, {
    "iso": "MA",
    "name": "Morocco"
  }, {
    "iso": "MZ",
    "name": "Mozambique"
  }, {
    "iso": "MM",
    "name": "Myanmar"
  }, {
    "iso": "NA",
    "name": "Namibia"
  }, {
    "iso": "NR",
    "name": "Nauru"
  }, {
    "iso": "NP",
    "name": "Nepal"
  }, {
    "iso": "AN",
    "name": "Netherlands"
  }, {
    "iso": "NL",
    "name": "Netherlands"
  }, {
    "iso": "NZ",
    "name": "New Zealand"
  }, {
    "iso": "NI",
    "name": "Nicaragua"
  }, {
    "iso": "NE",
    "name": "Niger"
  }, {
    "iso": "NG",
    "name": "Nigeria"
  }, {
    "iso": "KP",
    "name": "North Korea"
  }, {
    "iso": "NO",
    "name": "Norway"
  }, {
    "iso": "XN",
    "name": "Null Island"
  }, {
    "iso": "OM",
    "name": "Oman"
  }, {
    "iso": "PK",
    "name": "Pakistan"
  }, {
    "iso": "PW",
    "name": "Palau"
  }, {
    "iso": "PS",
    "name": "Palestine"
  }, {
    "iso": "PA",
    "name": "Panama"
  }, {
    "iso": "PG",
    "name": "Papua New Guinea"
  }, {
    "iso": "PY",
    "name": "Paraguay"
  }, {
    "iso": "PE",
    "name": "Peru"
  }, {
    "iso": "PH",
    "name": "Philippines"
  }, {
    "iso": "PL",
    "name": "Poland"
  }, {
    "iso": "PT",
    "name": "Portugal"
  }, {
    "iso": "QA",
    "name": "Qatar"
  }, {
    "iso": "CG",
    "name": "Republic of Congo"
  }, {
    "iso": "RO",
    "name": "Romania"
  }, {
    "iso": "RU",
    "name": "Russia"
  }, {
    "iso": "RW",
    "name": "Rwanda"
  }, {
    "iso": "KN",
    "name": "Saint Kitts and Nevis"
  }, {
    "iso": "LC",
    "name": "Saint Lucia"
  }, {
    "iso": "PM",
    "name": "Saint Pierre and Miquelon"
  }, {
    "iso": "VC",
    "name": "Saint Vincent and the Grenadines"
  }, {
    "iso": "WS",
    "name": "Samoa"
  }, {
    "iso": "SM",
    "name": "San Marino"
  }, {
    "iso": "ST",
    "name": "Sao Tome and Principe"
  }, {
    "iso": "SA",
    "name": "Saudi Arabia"
  }, {
    "iso": "SN",
    "name": "Senegal"
  }, {
    "iso": "RS",
    "name": "Serbia"
  }, {
    "iso": "SC",
    "name": "Seychelles"
  }, {
    "iso": "SL",
    "name": "Sierra Leone"
  }, {
    "iso": "SG",
    "name": "Singapore"
  }, {
    "iso": "SX",
    "name": "Sint Maarten"
  }, {
    "iso": "SK",
    "name": "Slovakia"
  }, {
    "iso": "SI",
    "name": "Slovenia"
  }, {
    "iso": "SB",
    "name": "Solomon Islands"
  }, {
    "iso": "SO",
    "name": "Somalia"
  }, {
    "iso": "XS",
    "name": "Somaliland"
  }, {
    "iso": "ZA",
    "name": "South Africa"
  }, {
    "iso": "KR",
    "name": "South Korea"
  }, {
    "iso": "SS",
    "name": "South Sudan"
  }, {
    "iso": "ES",
    "name": "Spain"
  }, {
    "iso": "LK",
    "name": "Sri Lanka"
  }, {
    "iso": "SD",
    "name": "Sudan"
  }, {
    "iso": "SR",
    "name": "Suriname"
  }, {
    "iso": "SZ",
    "name": "Swaziland"
  }, {
    "iso": "SE",
    "name": "Sweden"
  }, {
    "iso": "CH",
    "name": "Switzerland"
  }, {
    "iso": "SY",
    "name": "Syria"
  }, {
    "iso": "TW",
    "name": "Taiwan"
  }, {
    "iso": "TJ",
    "name": "Tajikistan"
  }, {
    "iso": "TH",
    "name": "Thailand"
  }, {
    "iso": "BS",
    "name": "The Bahamas"
  }, {
    "iso": "TG",
    "name": "Togo"
  }, {
    "iso": "TO",
    "name": "Tonga"
  }, {
    "iso": "TT",
    "name": "Trinidad and Tobago"
  }, {
    "iso": "TN",
    "name": "Tunisia"
  }, {
    "iso": "TR",
    "name": "Turkey"
  }, {
    "iso": "TM",
    "name": "Turkmenistan"
  }, {
    "iso": "TV",
    "name": "Tuvalu"
  }, {
    "iso": "UG",
    "name": "Uganda"
  }, {
    "iso": "UA",
    "name": "Ukraine"
  }, {
    "iso": "AE",
    "name": "United Arab Emirates"
  }, {
    "iso": "GB",
    "name": "United Kingdom"
  }, {
    "iso": "UN",
    "name": "United Nations"
  }, {
    "iso": "TZ",
    "name": "United Republic of Tanzania"
  }, {
    "iso": "US",
    "name": "United States"
  }, {
    "iso": "UY",
    "name": "Uruguay"
  }, {
    "iso": "UZ",
    "name": "Uzbekistan"
  }, {
    "iso": "VU",
    "name": "Vanuatu"
  }, {
    "iso": "VA",
    "name": "Vatican"
  }, {
    "iso": "VE",
    "name": "Venezuela"
  }, {
    "iso": "VN",
    "name": "Vietnam"
  }, {
    "iso": "EH",
    "name": "Western Sahara"
  }, {
    "iso": "YE",
    "name": "Yemen"
  }, {
    "iso": "ZM",
    "name": "Zambia"
  }, {
    "iso": "ZW",
    "name": "Zimbabwe"
  }],
  regions: [{
    "iso": "ES",
    "name": "A Coruña"
  }, {
    "iso": "WS",
    "name": "A'ana"
  }, {
    "iso": "BR",
    "name": "AMAPÁ"
  }, {
    "iso": "CH",
    "name": "Aargau"
  }, {
    "iso": "GB",
    "name": "Aberdeen City"
  }, {
    "iso": "GB",
    "name": "Aberdeenshire"
  }, {
    "iso": "NG",
    "name": "Abia"
  }, {
    "iso": "UG",
    "name": "Abim"
  }, {
    "iso": "GE",
    "name": "Abkhazia"
  }, {
    "iso": "PH",
    "name": "Abra"
  }, {
    "iso": "AE",
    "name": "Abu Dhabi"
  }, {
    "iso": "YE",
    "name": "Abyan"
  }, {
    "iso": "AZ",
    "name": "Abşeron"
  }, {
    "iso": "ID",
    "name": "Aceh"
  }, {
    "iso": "BS",
    "name": "Acklins"
  }, {
    "iso": "SM",
    "name": "Acquaviva"
  }, {
    "iso": "BR",
    "name": "Acre"
  }, {
    "iso": "OM",
    "name": "Ad Dakhliyah"
  }, {
    "iso": "EG",
    "name": "Ad Daqahliyah"
  }, {
    "iso": "QA",
    "name": "Ad Dawhah"
  }, {
    "iso": "CM",
    "name": "Adamaoua"
  }, {
    "iso": "NG",
    "name": "Adamawa"
  }, {
    "iso": "TR",
    "name": "Adana"
  }, {
    "iso": "LV",
    "name": "Adažu novads"
  }, {
    "iso": "ET",
    "name": "Addis Ababa"
  }, {
    "iso": "MV",
    "name": "Addu"
  }, {
    "iso": "TR",
    "name": "Adiyaman"
  }, {
    "iso": "UG",
    "name": "Adjumani"
  }, {
    "iso": "DZ",
    "name": "Adrar"
  }, {
    "iso": "MR",
    "name": "Adrar"
  }, {
    "iso": "MK",
    "name": "Aerodrom"
  }, {
    "iso": "ET",
    "name": "Afar"
  }, {
    "iso": "TR",
    "name": "Afyonkarahisar"
  }, {
    "iso": "NE",
    "name": "Agadez"
  }, {
    "iso": "UG",
    "name": "Agago"
  }, {
    "iso": "MU",
    "name": "Agaléga"
  }, {
    "iso": "LV",
    "name": "Aglonas novads"
  }, {
    "iso": "CI",
    "name": "Agnéby"
  }, {
    "iso": "TR",
    "name": "Agri"
  }, {
    "iso": "IT",
    "name": "Agrigento"
  }, {
    "iso": "MX",
    "name": "Aguascalientes"
  }, {
    "iso": "PH",
    "name": "Agusan del Norte"
  }, {
    "iso": "PH",
    "name": "Agusan del Sur"
  }, {
    "iso": "TM",
    "name": "Ahal"
  }, {
    "iso": "SV",
    "name": "Ahuachapán"
  }, {
    "iso": "JP",
    "name": "Aichi"
  }, {
    "iso": "WS",
    "name": "Aiga-i-le-Tai"
  }, {
    "iso": "TL",
    "name": "Aileu"
  }, {
    "iso": "PW",
    "name": "Aimeliik"
  }, {
    "iso": "FR",
    "name": "Ain"
  }, {
    "iso": "TL",
    "name": "Ainaro"
  }, {
    "iso": "PW",
    "name": "Airai"
  }, {
    "iso": "FR",
    "name": "Aisne"
  }, {
    "iso": "CK",
    "name": "Aitutaki"
  }, {
    "iso": "NR",
    "name": "Aiwo"
  }, {
    "iso": "LV",
    "name": "Aizkraukles novads"
  }, {
    "iso": "LV",
    "name": "Aizputes novads"
  }, {
    "iso": "GE",
    "name": "Ajaria"
  }, {
    "iso": "LY",
    "name": "Ajdabiya"
  }, {
    "iso": "SI",
    "name": "Ajdovščina"
  }, {
    "iso": "JO",
    "name": "Ajlun"
  }, {
    "iso": "AE",
    "name": "Ajman"
  }, {
    "iso": "NO",
    "name": "Akershus"
  }, {
    "iso": "JP",
    "name": "Akita"
  }, {
    "iso": "PH",
    "name": "Aklan"
  }, {
    "iso": "LV",
    "name": "Aknistes novads"
  }, {
    "iso": "XY",
    "name": "Akrotiri"
  }, {
    "iso": "TR",
    "name": "Aksaray"
  }, {
    "iso": "NG",
    "name": "Akwa Ibom"
  }, {
    "iso": "KW",
    "name": "Al Ahmadi"
  }, {
    "iso": "KW",
    "name": "Al Asimah"
  }, {
    "iso": "SA",
    "name": "Al Bahah"
  }, {
    "iso": "EG",
    "name": "Al Bahr al Ahmar"
  }, {
    "iso": "OM",
    "name": "Al Batnah North"
  }, {
    "iso": "OM",
    "name": "Al Batnah South"
  }, {
    "iso": "YE",
    "name": "Al Bayda'"
  }, {
    "iso": "EG",
    "name": "Al Buhayrah"
  }, {
    "iso": "OM",
    "name": "Al Buraymi"
  }, {
    "iso": "LY",
    "name": "Al Butnan"
  }, {
    "iso": "QA",
    "name": "Al Daayen"
  }, {
    "iso": "YE",
    "name": "Al Dali'"
  }, {
    "iso": "OM",
    "name": "Al Dhahira"
  }, {
    "iso": "KW",
    "name": "Al Farwaniyah"
  }, {
    "iso": "EG",
    "name": "Al Fayyum"
  }, {
    "iso": "EG",
    "name": "Al Gharbiyah"
  }, {
    "iso": "YE",
    "name": "Al Hudaydah"
  }, {
    "iso": "SA",
    "name": "Al Hudud ash Shamaliyah"
  }, {
    "iso": "EG",
    "name": "Al Iskandariyah"
  }, {
    "iso": "EG",
    "name": "Al Isma`iliyah"
  }, {
    "iso": "LY",
    "name": "Al Jabal al Akhdar"
  }, {
    "iso": "KW",
    "name": "Al Jahrah"
  }, {
    "iso": "BH",
    "name": "Al Janūbīyah"
  }, {
    "iso": "SA",
    "name": "Al Jawf"
  }, {
    "iso": "YE",
    "name": "Al Jawf"
  }, {
    "iso": "LY",
    "name": "Al Jifarah"
  }, {
    "iso": "EG",
    "name": "Al Jizah"
  }, {
    "iso": "LY",
    "name": "Al Jufrah"
  }, {
    "iso": "QA",
    "name": "Al Khawr"
  }, {
    "iso": "LY",
    "name": "Al Kufrah"
  }, {
    "iso": "SA",
    "name": "Al Madinah"
  }, {
    "iso": "YE",
    "name": "Al Mahrah"
  }, {
    "iso": "YE",
    "name": "Al Mahwit"
  }, {
    "iso": "BH",
    "name": "Al Manāmah"
  }, {
    "iso": "LY",
    "name": "Al Marj"
  }, {
    "iso": "LY",
    "name": "Al Marqab"
  }, {
    "iso": "EG",
    "name": "Al Minufiyah"
  }, {
    "iso": "EG",
    "name": "Al Minya"
  }, {
    "iso": "BH",
    "name": "Al Muḩarraq"
  }, {
    "iso": "EG",
    "name": "Al Qahirah"
  }, {
    "iso": "EG",
    "name": "Al Qalyubiyah"
  }, {
    "iso": "SA",
    "name": "Al Quassim"
  }, {
    "iso": "LY",
    "name": "Al Qubbah"
  }, {
    "iso": "EG",
    "name": "Al Wadi at Jadid"
  }, {
    "iso": "QA",
    "name": "Al Wakrah"
  }, {
    "iso": "OM",
    "name": "Al Wusta"
  }, {
    "iso": "BH",
    "name": "Al Wusţá"
  }, {
    "iso": "IQ",
    "name": "Al-Anbar"
  }, {
    "iso": "IQ",
    "name": "Al-Basrah"
  }, {
    "iso": "IQ",
    "name": "Al-Muthannia"
  }, {
    "iso": "IQ",
    "name": "Al-Qadisiyah"
  }, {
    "iso": "US",
    "name": "Alabama"
  }, {
    "iso": "BR",
    "name": "Alagoas"
  }, {
    "iso": "CR",
    "name": "Alajuela"
  }, {
    "iso": "MG",
    "name": "Alaotra-Mangoro"
  }, {
    "iso": "US",
    "name": "Alaska"
  }, {
    "iso": "RO",
    "name": "Alba"
  }, {
    "iso": "ES",
    "name": "Albacete"
  }, {
    "iso": "PH",
    "name": "Albay"
  }, {
    "iso": "CA",
    "name": "Alberta"
  }, {
    "iso": "IR",
    "name": "Alborz"
  }, {
    "iso": "UG",
    "name": "Alebtong"
  }, {
    "iso": "SY",
    "name": "Aleppo"
  }, {
    "iso": "IT",
    "name": "Alessandria"
  }, {
    "iso": "DZ",
    "name": "Alger"
  }, {
    "iso": "DJ",
    "name": "Ali Sabieh"
  }, {
    "iso": "BJ",
    "name": "Alibori"
  }, {
    "iso": "ES",
    "name": "Alicante/Alacant"
  }, {
    "iso": "MV",
    "name": "Alifu Alifu"
  }, {
    "iso": "MV",
    "name": "Alifu Dhaalu"
  }, {
    "iso": "FR",
    "name": "Allier"
  }, {
    "iso": "KZ",
    "name": "Almaty"
  }, {
    "iso": "KZ",
    "name": "Almaty City"
  }, {
    "iso": "ES",
    "name": "Almería"
  }, {
    "iso": "WF",
    "name": "Alo"
  }, {
    "iso": "LV",
    "name": "Alojas novads"
  }, {
    "iso": "FR",
    "name": "Alpes-Maritimes"
  }, {
    "iso": "FR",
    "name": "Alpes-de-Haute-Provence"
  }, {
    "iso": "LV",
    "name": "Alsungas novads"
  }, {
    "iso": "GT",
    "name": "Alta Verapaz"
  }, {
    "iso": "PY",
    "name": "Alto Paraguay"
  }, {
    "iso": "PY",
    "name": "Alto Paraná"
  }, {
    "iso": "LV",
    "name": "Aluksnes novads"
  }, {
    "iso": "LT",
    "name": "Alytus"
  }, {
    "iso": "PY",
    "name": "Amambay"
  }, {
    "iso": "YE",
    "name": "Amanat Al Asimah"
  }, {
    "iso": "TR",
    "name": "Amasya"
  }, {
    "iso": "LV",
    "name": "Amatas novads"
  }, {
    "iso": "BR",
    "name": "Amazonas"
  }, {
    "iso": "PE",
    "name": "Amazonas"
  }, {
    "iso": "CO",
    "name": "Amazonas"
  }, {
    "iso": "VE",
    "name": "Amazonas"
  }, {
    "iso": "TL",
    "name": "Ambeno"
  }, {
    "iso": "ET",
    "name": "Amhara"
  }, {
    "iso": "JO",
    "name": "Amman"
  }, {
    "iso": "TH",
    "name": "Amnat Charoen"
  }, {
    "iso": "UG",
    "name": "Amolatar"
  }, {
    "iso": "MG",
    "name": "Amoron'i Mania"
  }, {
    "iso": "LK",
    "name": "Ampāra"
  }, {
    "iso": "YE",
    "name": "Amran"
  }, {
    "iso": "UG",
    "name": "Amudat"
  }, {
    "iso": "UG",
    "name": "Amuria"
  }, {
    "iso": "UG",
    "name": "Amuru"
  }, {
    "iso": "VN",
    "name": "An Giang"
  }, {
    "iso": "LB",
    "name": "An Nabatiyah"
  }, {
    "iso": "LY",
    "name": "An Nuqat al Khams"
  }, {
    "iso": "IQ",
    "name": "An-Najaf"
  }, {
    "iso": "NR",
    "name": "Anabar"
  }, {
    "iso": "MG",
    "name": "Analamanga"
  }, {
    "iso": "MG",
    "name": "Analanjirofo"
  }, {
    "iso": "NG",
    "name": "Anambra"
  }, {
    "iso": "PE",
    "name": "Ancash"
  }, {
    "iso": "IT",
    "name": "Ancona"
  }, {
    "iso": "IN",
    "name": "Andaman and Nicobar"
  }, {
    "iso": "IN",
    "name": "Andhra Pradesh"
  }, {
    "iso": "UZ",
    "name": "Andijon"
  }, {
    "iso": "KM",
    "name": "Andjazîdja"
  }, {
    "iso": "KM",
    "name": "Andjouân"
  }, {
    "iso": "AD",
    "name": "Andorra la Vella"
  }, {
    "iso": "ME",
    "name": "Andrijevica"
  }, {
    "iso": "MG",
    "name": "Androy"
  }, {
    "iso": "MD",
    "name": "Anenii Noi"
  }, {
    "iso": "NR",
    "name": "Anetan"
  }, {
    "iso": "TH",
    "name": "Ang Thong"
  }, {
    "iso": "PW",
    "name": "Angaur"
  }, {
    "iso": "PH",
    "name": "Angeles"
  }, {
    "iso": "GB",
    "name": "Angus"
  }, {
    "iso": "CN",
    "name": "Anhui"
  }, {
    "iso": "NR",
    "name": "Anibare"
  }, {
    "iso": "TR",
    "name": "Ankara"
  }, {
    "iso": "DZ",
    "name": "Annaba"
  }, {
    "iso": "GQ",
    "name": "Annobón"
  }, {
    "iso": "MG",
    "name": "Anosy"
  }, {
    "iso": "SC",
    "name": "Anse Boileau"
  }, {
    "iso": "SC",
    "name": "Anse Etoile"
  }, {
    "iso": "SC",
    "name": "Anse Royale"
  }, {
    "iso": "SC",
    "name": "Anse aux Pins"
  }, {
    "iso": "LC",
    "name": "Anse-la-Raye"
  }, {
    "iso": "ER",
    "name": "Anseba"
  }, {
    "iso": "TR",
    "name": "Antalya"
  }, {
    "iso": "AQ",
    "name": "Antarctica"
  }, {
    "iso": "CO",
    "name": "Antioquia"
  }, {
    "iso": "PH",
    "name": "Antique"
  }, {
    "iso": "GB",
    "name": "Antrim"
  }, {
    "iso": "BE",
    "name": "Antwerpen"
  }, {
    "iso": "LK",
    "name": "Anurādhapura"
  }, {
    "iso": "VE",
    "name": "Anzoátegui"
  }, {
    "iso": "JP",
    "name": "Aomori"
  }, {
    "iso": "UG",
    "name": "Apac"
  }, {
    "iso": "SI",
    "name": "Apace"
  }, {
    "iso": "PH",
    "name": "Apayao"
  }, {
    "iso": "LV",
    "name": "Apes novads"
  }, {
    "iso": "CH",
    "name": "Appenzell Ausserrhoden"
  }, {
    "iso": "CH",
    "name": "Appenzell Innerrhoden"
  }, {
    "iso": "VE",
    "name": "Apure"
  }, {
    "iso": "PE",
    "name": "Apurímac"
  }, {
    "iso": "JO",
    "name": "Aqaba"
  }, {
    "iso": "KZ",
    "name": "Aqmola"
  }, {
    "iso": "KZ",
    "name": "Aqtöbe"
  }, {
    "iso": "SY",
    "name": "Ar Raqqah"
  }, {
    "iso": "QA",
    "name": "Ar Rayyān"
  }, {
    "iso": "SA",
    "name": "Ar Riyad"
  }, {
    "iso": "ES",
    "name": "Araba/Álava"
  }, {
    "iso": "MK",
    "name": "Aracinovo"
  }, {
    "iso": "RO",
    "name": "Arad"
  }, {
    "iso": "AM",
    "name": "Aragatsotn"
  }, {
    "iso": "VE",
    "name": "Aragua"
  }, {
    "iso": "AM",
    "name": "Ararat"
  }, {
    "iso": "CO",
    "name": "Arauca"
  }, {
    "iso": "IQ",
    "name": "Arbil"
  }, {
    "iso": "TF",
    "name": "Archipel des Crozet"
  }, {
    "iso": "TF",
    "name": "Archipel des Kerguelen"
  }, {
    "iso": "TR",
    "name": "Ardahan"
  }, {
    "iso": "IR",
    "name": "Ardebil"
  }, {
    "iso": "FR",
    "name": "Ardennes"
  }, {
    "iso": "GB",
    "name": "Ards"
  }, {
    "iso": "FR",
    "name": "Ardèche"
  }, {
    "iso": "NZ",
    "name": "Area Outside Region"
  }, {
    "iso": "PE",
    "name": "Arequipa"
  }, {
    "iso": "IT",
    "name": "Arezzo"
  }, {
    "iso": "RO",
    "name": "Argeş"
  }, {
    "iso": "GB",
    "name": "Argyll and Bute"
  }, {
    "iso": "MN",
    "name": "Arhangay"
  }, {
    "iso": "TT",
    "name": "Arima"
  }, {
    "iso": "US",
    "name": "Arizona"
  }, {
    "iso": "FR",
    "name": "Ariège"
  }, {
    "iso": "US",
    "name": "Arkansas"
  }, {
    "iso": "GB",
    "name": "Armagh City and District"
  }, {
    "iso": "AM",
    "name": "Armavir"
  }, {
    "iso": "DJ",
    "name": "Arta"
  }, {
    "iso": "CU",
    "name": "Artemisa"
  }, {
    "iso": "UY",
    "name": "Artigas"
  }, {
    "iso": "TR",
    "name": "Artvin"
  }, {
    "iso": "UG",
    "name": "Arua"
  }, {
    "iso": "AW",
    "name": "Aruba"
  }, {
    "iso": "IN",
    "name": "Arunachal Pradesh"
  }, {
    "iso": "TZ",
    "name": "Arusha"
  }, {
    "iso": "SY",
    "name": "As Suwayda'"
  }, {
    "iso": "EG",
    "name": "As Suways"
  }, {
    "iso": "IQ",
    "name": "As-Sulaymaniyah"
  }, {
    "iso": "SH",
    "name": "Ascension"
  }, {
    "iso": "IT",
    "name": "Ascoli Piceno"
  }, {
    "iso": "BH",
    "name": "Ash Shamālīyah"
  }, {
    "iso": "SA",
    "name": "Ash Sharqiyah"
  }, {
    "iso": "EG",
    "name": "Ash Sharqiyah"
  }, {
    "iso": "OM",
    "name": "Ash Sharqiyah North"
  }, {
    "iso": "OM",
    "name": "Ash Sharqiyah South"
  }, {
    "iso": "LY",
    "name": "Ash Shati'"
  }, {
    "iso": "GH",
    "name": "Ashanti"
  }, {
    "iso": "AU",
    "name": "Ashmore and Cartier Islands"
  }, {
    "iso": "MR",
    "name": "Assaba"
  }, {
    "iso": "IN",
    "name": "Assam"
  }, {
    "iso": "KZ",
    "name": "Astana"
  }, {
    "iso": "AZ",
    "name": "Astara"
  }, {
    "iso": "IT",
    "name": "Asti"
  }, {
    "iso": "ES",
    "name": "Asturias"
  }, {
    "iso": "PY",
    "name": "Asunción"
  }, {
    "iso": "EG",
    "name": "Aswan"
  }, {
    "iso": "EG",
    "name": "Asyut"
  }, {
    "iso": "IQ",
    "name": "At-Ta'mim"
  }, {
    "iso": "BJ",
    "name": "Atakora"
  }, {
    "iso": "CK",
    "name": "Atiu"
  }, {
    "iso": "BJ",
    "name": "Atlantique"
  }, {
    "iso": "CO",
    "name": "Atlántico"
  }, {
    "iso": "NI",
    "name": "Atlántico Norte"
  }, {
    "iso": "NI",
    "name": "Atlántico Sur"
  }, {
    "iso": "HN",
    "name": "Atlántida"
  }, {
    "iso": "MG",
    "name": "Atsimo-Andrefana"
  }, {
    "iso": "MG",
    "name": "Atsimo-Atsinanana"
  }, {
    "iso": "MG",
    "name": "Atsinanana"
  }, {
    "iso": "LA",
    "name": "Attapu"
  }, {
    "iso": "MT",
    "name": "Attard"
  }, {
    "iso": "WS",
    "name": "Atua"
  }, {
    "iso": "KZ",
    "name": "Atyrau"
  }, {
    "iso": "SC",
    "name": "Au Cap"
  }, {
    "iso": "FR",
    "name": "Aube"
  }, {
    "iso": "LV",
    "name": "Auces novads"
  }, {
    "iso": "NZ",
    "name": "Auckland Region"
  }, {
    "iso": "FR",
    "name": "Aude"
  }, {
    "iso": "PH",
    "name": "Aurora"
  }, {
    "iso": "NO",
    "name": "Aust-Agder"
  }, {
    "iso": "PF",
    "name": "Austral Islands"
  }, {
    "iso": "AU",
    "name": "Australian Capital Territory"
  }, {
    "iso": "IS",
    "name": "Austurland"
  }, {
    "iso": "PT",
    "name": "Aveiro"
  }, {
    "iso": "IT",
    "name": "Avellino"
  }, {
    "iso": "FR",
    "name": "Aveyron"
  }, {
    "iso": "PE",
    "name": "Ayacucho"
  }, {
    "iso": "TR",
    "name": "Aydin"
  }, {
    "iso": "MM",
    "name": "Ayeyarwady"
  }, {
    "iso": "LY",
    "name": "Az Zawiyah"
  }, {
    "iso": "PK",
    "name": "Azad Kashmir"
  }, {
    "iso": "DO",
    "name": "Azua"
  }, {
    "iso": "EC",
    "name": "Azuay"
  }, {
    "iso": "DZ",
    "name": "Aïn Defla"
  }, {
    "iso": "DZ",
    "name": "Aïn Témouchent"
  }, {
    "iso": "AZ",
    "name": "Ağcabədi"
  }, {
    "iso": "AZ",
    "name": "Ağdam"
  }, {
    "iso": "AZ",
    "name": "Ağdaş"
  }, {
    "iso": "AZ",
    "name": "Ağstafa"
  }, {
    "iso": "AZ",
    "name": "Ağsu"
  }, {
    "iso": "MV",
    "name": "Baa"
  }, {
    "iso": "IQ",
    "name": "Babil"
  }, {
    "iso": "LV",
    "name": "Babites novads"
  }, {
    "iso": "AZ",
    "name": "Babək"
  }, {
    "iso": "PH",
    "name": "Bacolod"
  }, {
    "iso": "RO",
    "name": "Bacău"
  }, {
    "iso": "ES",
    "name": "Badajoz"
  }, {
    "iso": "AF",
    "name": "Badakhshan"
  }, {
    "iso": "DE",
    "name": "Baden-Württemberg"
  }, {
    "iso": "AF",
    "name": "Badghis"
  }, {
    "iso": "LK",
    "name": "Badulla"
  }, {
    "iso": "GW",
    "name": "Bafatá"
  }, {
    "iso": "CI",
    "name": "Bafing"
  }, {
    "iso": "IQ",
    "name": "Baghdad"
  }, {
    "iso": "AF",
    "name": "Baghlan"
  }, {
    "iso": "NP",
    "name": "Bagmati"
  }, {
    "iso": "MM",
    "name": "Bago"
  }, {
    "iso": "PH",
    "name": "Baguio"
  }, {
    "iso": "BR",
    "name": "Bahia"
  }, {
    "iso": "DO",
    "name": "Bahoruco"
  }, {
    "iso": "SC",
    "name": "Baie Lazare"
  }, {
    "iso": "SC",
    "name": "Baie Sainte Anne"
  }, {
    "iso": "NR",
    "name": "Baiti"
  }, {
    "iso": "MX",
    "name": "Baja California"
  }, {
    "iso": "MX",
    "name": "Baja California Sur"
  }, {
    "iso": "GT",
    "name": "Baja Verapaz"
  }, {
    "iso": "XX",
    "name": "Bajo Nuevo Bank (Petrel Is.)"
  }, {
    "iso": "UM",
    "name": "Baker Island"
  }, {
    "iso": "SO",
    "name": "Bakool"
  }, {
    "iso": "AZ",
    "name": "Bakı"
  }, {
    "iso": "MW",
    "name": "Balaka"
  }, {
    "iso": "AZ",
    "name": "Balakən"
  }, {
    "iso": "LV",
    "name": "Baldones novads"
  }, {
    "iso": "ID",
    "name": "Bali"
  }, {
    "iso": "TR",
    "name": "Balikesir"
  }, {
    "iso": "TM",
    "name": "Balkan"
  }, {
    "iso": "AF",
    "name": "Balkh"
  }, {
    "iso": "GB",
    "name": "Ballymena"
  }, {
    "iso": "GB",
    "name": "Ballymoney"
  }, {
    "iso": "JO",
    "name": "Balqa"
  }, {
    "iso": "LV",
    "name": "Baltinavas novads"
  }, {
    "iso": "PK",
    "name": "Baluchistan"
  }, {
    "iso": "LV",
    "name": "Balvu novads"
  }, {
    "iso": "MT",
    "name": "Balzan"
  }, {
    "iso": "BF",
    "name": "Balé"
  }, {
    "iso": "BF",
    "name": "Bam"
  }, {
    "iso": "ML",
    "name": "Bamako"
  }, {
    "iso": "CF",
    "name": "Bamingui-Bangoran"
  }, {
    "iso": "AF",
    "name": "Bamyan"
  }, {
    "iso": "SO",
    "name": "Banaadir"
  }, {
    "iso": "GB",
    "name": "Banbridge"
  }, {
    "iso": "CD",
    "name": "Bandundu"
  }, {
    "iso": "ID",
    "name": "Bangka-Belitung"
  }, {
    "iso": "TH",
    "name": "Bangkok Metropolis"
  }, {
    "iso": "CF",
    "name": "Bangui"
  }, {
    "iso": "EG",
    "name": "Bani Suwayf"
  }, {
    "iso": "BA",
    "name": "Banja Luka"
  }, {
    "iso": "GM",
    "name": "Banjul"
  }, {
    "iso": "SK",
    "name": "Banskobystrický kraj"
  }, {
    "iso": "ID",
    "name": "Banten"
  }, {
    "iso": "BF",
    "name": "Banwa"
  }, {
    "iso": "ME",
    "name": "Bar"
  }, {
    "iso": "DO",
    "name": "Barahona"
  }, {
    "iso": "HU",
    "name": "Baranya"
  }, {
    "iso": "AG",
    "name": "Barbuda"
  }, {
    "iso": "ES",
    "name": "Barcelona"
  }, {
    "iso": "TD",
    "name": "Barh El Gazel"
  }, {
    "iso": "IT",
    "name": "Bari"
  }, {
    "iso": "SO",
    "name": "Bari"
  }, {
    "iso": "GY",
    "name": "Barima-Waini"
  }, {
    "iso": "VE",
    "name": "Barinas"
  }, {
    "iso": "BD",
    "name": "Barisal"
  }, {
    "iso": "GB",
    "name": "Barking and Dagenham"
  }, {
    "iso": "IT",
    "name": "Barletta-Andria-Trani"
  }, {
    "iso": "GB",
    "name": "Barnet"
  }, {
    "iso": "GB",
    "name": "Barnsley"
  }, {
    "iso": "TR",
    "name": "Bartın"
  }, {
    "iso": "CD",
    "name": "Bas-Congo"
  }, {
    "iso": "FR",
    "name": "Bas-Rhin"
  }, {
    "iso": "CI",
    "name": "Bas-Sassandra"
  }, {
    "iso": "MD",
    "name": "Basarabeasca"
  }, {
    "iso": "CH",
    "name": "Basel-Landschaft"
  }, {
    "iso": "CH",
    "name": "Basel-Stadt"
  }, {
    "iso": "PH",
    "name": "Basilan"
  }, {
    "iso": "CF",
    "name": "Basse-Kotto"
  }, {
    "iso": "PH",
    "name": "Bataan"
  }, {
    "iso": "PH",
    "name": "Batanes"
  }, {
    "iso": "PH",
    "name": "Batangas"
  }, {
    "iso": "KH",
    "name": "Batdâmbâng"
  }, {
    "iso": "GB",
    "name": "Bath and North East Somerset"
  }, {
    "iso": "TD",
    "name": "Batha"
  }, {
    "iso": "KG",
    "name": "Batken"
  }, {
    "iso": "TR",
    "name": "Batman"
  }, {
    "iso": "DZ",
    "name": "Batna"
  }, {
    "iso": "TL",
    "name": "Baucau"
  }, {
    "iso": "NG",
    "name": "Bauchi"
  }, {
    "iso": "LV",
    "name": "Bauskas novads"
  }, {
    "iso": "SO",
    "name": "Bay"
  }, {
    "iso": "NZ",
    "name": "Bay of Plenty Region"
  }, {
    "iso": "MN",
    "name": "Bayan-Ölgiy"
  }, {
    "iso": "MN",
    "name": "Bayanhongor"
  }, {
    "iso": "TR",
    "name": "Bayburt"
  }, {
    "iso": "NG",
    "name": "Bayelsa"
  }, {
    "iso": "DE",
    "name": "Bayern"
  }, {
    "iso": -1,
    "name": "Baykonur lease in Qyzylorda"
  }, {
    "iso": "BF",
    "name": "Bazéga"
  }, {
    "iso": "MU",
    "name": "Beau Bassin-Rose Hill"
  }, {
    "iso": "SC",
    "name": "Beau Vallon"
  }, {
    "iso": "GB",
    "name": "Bedford"
  }, {
    "iso": "CN",
    "name": "Beijing"
  }, {
    "iso": "LB",
    "name": "Beirut"
  }, {
    "iso": "PT",
    "name": "Beja"
  }, {
    "iso": "SC",
    "name": "Bel Air"
  }, {
    "iso": "SC",
    "name": "Bel Ombre"
  }, {
    "iso": "BN",
    "name": "Belait"
  }, {
    "iso": "GB",
    "name": "Belfast"
  }, {
    "iso": "BZ",
    "name": "Belize"
  }, {
    "iso": "IT",
    "name": "Belluno"
  }, {
    "iso": "SI",
    "name": "Beltinci"
  }, {
    "iso": "TN",
    "name": "Ben Arous (Tunis Sud)"
  }, {
    "iso": "SI",
    "name": "Benedikt"
  }, {
    "iso": "IT",
    "name": "Benevento"
  }, {
    "iso": "LY",
    "name": "Benghazi"
  }, {
    "iso": "ID",
    "name": "Bengkulu"
  }, {
    "iso": "AO",
    "name": "Bengo"
  }, {
    "iso": "AO",
    "name": "Benguela"
  }, {
    "iso": "PH",
    "name": "Benguet"
  }, {
    "iso": "ET",
    "name": "Benshangul-Gumaz"
  }, {
    "iso": "NG",
    "name": "Benue"
  }, {
    "iso": "LB",
    "name": "Beqaa"
  }, {
    "iso": "ME",
    "name": "Berane"
  }, {
    "iso": "AL",
    "name": "Berat"
  }, {
    "iso": "LS",
    "name": "Berea"
  }, {
    "iso": "IT",
    "name": "Bergamo"
  }, {
    "iso": "DE",
    "name": "Berlin"
  }, {
    "iso": "CH",
    "name": "Bern"
  }, {
    "iso": "MK",
    "name": "Berovo"
  }, {
    "iso": "BS",
    "name": "Berry Islands"
  }, {
    "iso": "PS",
    "name": "Bethlahem"
  }, {
    "iso": "MG",
    "name": "Betsiboka"
  }, {
    "iso": "LV",
    "name": "Beverinas novads"
  }, {
    "iso": "GB",
    "name": "Bexley"
  }, {
    "iso": "GN",
    "name": "Beyla"
  }, {
    "iso": "AZ",
    "name": "Beyləqan"
  }, {
    "iso": "NP",
    "name": "Bheri"
  }, {
    "iso": "NP",
    "name": "Bhojpur"
  }, {
    "iso": "IT",
    "name": "Biella"
  }, {
    "iso": "IN",
    "name": "Bihar"
  }, {
    "iso": "RO",
    "name": "Bihor"
  }, {
    "iso": "BA",
    "name": "Bijeljina"
  }, {
    "iso": "ME",
    "name": "Bijelo Polje"
  }, {
    "iso": "TR",
    "name": "Bilecik"
  }, {
    "iso": "PH",
    "name": "Biliran"
  }, {
    "iso": "AZ",
    "name": "Biləsuvar"
  }, {
    "iso": "BS",
    "name": "Bimini"
  }, {
    "iso": "TR",
    "name": "Bingöl"
  }, {
    "iso": "GQ",
    "name": "Bioko Norte"
  }, {
    "iso": "GQ",
    "name": "Bioko Sur"
  }, {
    "iso": "GW",
    "name": "Biombo"
  }, {
    "iso": "MT",
    "name": "Birgu (Citta' Vittoriosa)"
  }, {
    "iso": "MT",
    "name": "Birkirkara"
  }, {
    "iso": "GB",
    "name": "Birmingham"
  }, {
    "iso": "MT",
    "name": "Birzebbugia"
  }, {
    "iso": "KG",
    "name": "Bishkek"
  }, {
    "iso": "DZ",
    "name": "Biskra"
  }, {
    "iso": "GW",
    "name": "Bissau"
  }, {
    "iso": "SI",
    "name": "Bistrica ob Sotli"
  }, {
    "iso": "RO",
    "name": "Bistriţa-Năsaud"
  }, {
    "iso": "TR",
    "name": "Bitlis"
  }, {
    "iso": "MK",
    "name": "Bitola"
  }, {
    "iso": "TN",
    "name": "Bizerte"
  }, {
    "iso": "ES",
    "name": "Bizkaia"
  }, {
    "iso": "AO",
    "name": "Bié"
  }, {
    "iso": "HR",
    "name": "Bjelovarsko-bilogorska županija"
  }, {
    "iso": "BS",
    "name": "Black Point"
  }, {
    "iso": "GB",
    "name": "Blackburn with Darwen"
  }, {
    "iso": "GB",
    "name": "Blackpool"
  }, {
    "iso": "GB",
    "name": "Blaenau Gwent"
  }, {
    "iso": "MW",
    "name": "Blantyre"
  }, {
    "iso": "SI",
    "name": "Bled"
  }, {
    "iso": "SE",
    "name": "Blekinge"
  }, {
    "iso": "DZ",
    "name": "Blida"
  }, {
    "iso": "SI",
    "name": "Bloke"
  }, {
    "iso": "AI",
    "name": "Blowing Point"
  }, {
    "iso": "SD",
    "name": "Blue Nile"
  }, {
    "iso": "CV",
    "name": "Boa Vista"
  }, {
    "iso": "NI",
    "name": "Boaco"
  }, {
    "iso": "TL",
    "name": "Bobonaro"
  }, {
    "iso": "PA",
    "name": "Bocas del Toro"
  }, {
    "iso": "NR",
    "name": "Boe"
  }, {
    "iso": "MG",
    "name": "Boeny"
  }, {
    "iso": "GN",
    "name": "Boffa"
  }, {
    "iso": "MK",
    "name": "Bogdanci"
  }, {
    "iso": "CO",
    "name": "Bogota"
  }, {
    "iso": "MK",
    "name": "Bogovinje"
  }, {
    "iso": "SI",
    "name": "Bohinj"
  }, {
    "iso": "PH",
    "name": "Bohol"
  }, {
    "iso": "GN",
    "name": "Boke"
  }, {
    "iso": "LA",
    "name": "Bokeo"
  }, {
    "iso": "GW",
    "name": "Bolama"
  }, {
    "iso": "LA",
    "name": "Bolikhamxai"
  }, {
    "iso": "EC",
    "name": "Bolivar"
  }, {
    "iso": "IT",
    "name": "Bologna"
  }, {
    "iso": "GB",
    "name": "Bolton"
  }, {
    "iso": "TR",
    "name": "Bolu"
  }, {
    "iso": "IT",
    "name": "Bolzano/Bozen"
  }, {
    "iso": "VE",
    "name": "Bolívar"
  }, {
    "iso": "CO",
    "name": "Bolívar"
  }, {
    "iso": "LR",
    "name": "Bomi"
  }, {
    "iso": "NL",
    "name": "Bonaire"
  }, {
    "iso": "LR",
    "name": "Bong"
  }, {
    "iso": "MG",
    "name": "Bongolava"
  }, {
    "iso": "PY",
    "name": "Boquerón"
  }, {
    "iso": "DZ",
    "name": "Bordj Bou Arréridj"
  }, {
    "iso": "SM",
    "name": "Borgo Maggiore"
  }, {
    "iso": "BJ",
    "name": "Borgou"
  }, {
    "iso": "TD",
    "name": "Borkou"
  }, {
    "iso": "MT",
    "name": "Bormla (Citta'  Cospicua)"
  }, {
    "iso": "MT",
    "name": "Bormla (Citta'  Cospicua)"
  }, {
    "iso": "NG",
    "name": "Borno"
  }, {
    "iso": "SI",
    "name": "Borovnica"
  }, {
    "iso": "RS",
    "name": "Borski upravni okrug"
  }, {
    "iso": "HU",
    "name": "Borsod-Abaúj-Zemplén"
  }, {
    "iso": "MK",
    "name": "Bosilovo"
  }, {
    "iso": "BA",
    "name": "Bosnian Podrinje"
  }, {
    "iso": "RO",
    "name": "Botoşani"
  }, {
    "iso": "FR",
    "name": "Bouches-du-Rhône"
  }, {
    "iso": "CG",
    "name": "Bouenza"
  }, {
    "iso": "BF",
    "name": "Bougouriba"
  }, {
    "iso": "DZ",
    "name": "Bouira"
  }, {
    "iso": "BF",
    "name": "Boulgou"
  }, {
    "iso": "BF",
    "name": "Boulkiemdé"
  }, {
    "iso": "DZ",
    "name": "Boumerdès"
  }, {
    "iso": "GB",
    "name": "Bournemouth"
  }, {
    "iso": "SI",
    "name": "Bovec"
  }, {
    "iso": "CO",
    "name": "Boyacá"
  }, {
    "iso": "BE",
    "name": "Brabant wallon"
  }, {
    "iso": "GB",
    "name": "Bracknell Forest"
  }, {
    "iso": "GB",
    "name": "Bradford"
  }, {
    "iso": "PT",
    "name": "Braga"
  }, {
    "iso": "PT",
    "name": "Bragança"
  }, {
    "iso": "MR",
    "name": "Brakna"
  }, {
    "iso": "DE",
    "name": "Brandenburg"
  }, {
    "iso": "RS",
    "name": "Braničevski upravni okrug"
  }, {
    "iso": "SI",
    "name": "Braslovce"
  }, {
    "iso": "SK",
    "name": "Bratislavský kraj"
  }, {
    "iso": "CV",
    "name": "Brava"
  }, {
    "iso": "CG",
    "name": "Brazzaville"
  }, {
    "iso": "RO",
    "name": "Braşov"
  }, {
    "iso": "BA",
    "name": "Brcko Distrikt"
  }, {
    "iso": "SI",
    "name": "Brda"
  }, {
    "iso": "DE",
    "name": "Bremen"
  }, {
    "iso": "GB",
    "name": "Brent"
  }, {
    "iso": "IT",
    "name": "Brescia"
  }, {
    "iso": "BY",
    "name": "Brest"
  }, {
    "iso": "SI",
    "name": "Brezovica"
  }, {
    "iso": "SI",
    "name": "Brežice"
  }, {
    "iso": "MD",
    "name": "Briceni"
  }, {
    "iso": "GB",
    "name": "Bridgend"
  }, {
    "iso": "IT",
    "name": "Brindisi"
  }, {
    "iso": "CA",
    "name": "British Columbia"
  }, {
    "iso": "IO",
    "name": "British Indian Ocean Territory"
  }, {
    "iso": "VG",
    "name": "British Virgin Islands"
  }, {
    "iso": "LV",
    "name": "Brocenu novads"
  }, {
    "iso": "MK",
    "name": "Brod"
  }, {
    "iso": "HR",
    "name": "Brodsko-posavska županija"
  }, {
    "iso": "SR",
    "name": "Brokopondo"
  }, {
    "iso": "GB",
    "name": "Bromley"
  }, {
    "iso": "GH",
    "name": "Brong Ahafo"
  }, {
    "iso": "BN",
    "name": "Brunei and Muara"
  }, {
    "iso": "BE",
    "name": "Brussels-Capital Region"
  }, {
    "iso": "MK",
    "name": "Brvenica"
  }, {
    "iso": "AX",
    "name": "Brändö"
  }, {
    "iso": "RO",
    "name": "Brăila"
  }, {
    "iso": "BA",
    "name": "Brčko Distrikt"
  }, {
    "iso": "NR",
    "name": "Buada"
  }, {
    "iso": "BI",
    "name": "Bubanza"
  }, {
    "iso": "GB",
    "name": "Buckinghamshire"
  }, {
    "iso": "RO",
    "name": "Bucureşti"
  }, {
    "iso": "UG",
    "name": "Budaka"
  }, {
    "iso": "HU",
    "name": "Budapest"
  }, {
    "iso": "UG",
    "name": "Bududa"
  }, {
    "iso": "ME",
    "name": "Budva"
  }, {
    "iso": "TH",
    "name": "Bueng Kan"
  }, {
    "iso": "AR",
    "name": "Buenos Aires"
  }, {
    "iso": "UG",
    "name": "Bugiri"
  }, {
    "iso": "UG",
    "name": "Buhweju"
  }, {
    "iso": "UG",
    "name": "Buikwe"
  }, {
    "iso": "BI",
    "name": "Bujumbura Mairie"
  }, {
    "iso": "BI",
    "name": "Bujumbura Rural"
  }, {
    "iso": "UG",
    "name": "Bukedea"
  }, {
    "iso": "UZ",
    "name": "Bukhoro"
  }, {
    "iso": "PH",
    "name": "Bukidnon"
  }, {
    "iso": "UG",
    "name": "Bukomansimbi"
  }, {
    "iso": "UG",
    "name": "Bukwa"
  }, {
    "iso": "PH",
    "name": "Bulacan"
  }, {
    "iso": "UG",
    "name": "Bulambuli"
  }, {
    "iso": "ZW",
    "name": "Bulawayo"
  }, {
    "iso": "MN",
    "name": "Bulgan"
  }, {
    "iso": "UG",
    "name": "Buliisa"
  }, {
    "iso": "BT",
    "name": "Bumthang"
  }, {
    "iso": "UG",
    "name": "Bundibugyo"
  }, {
    "iso": "EG",
    "name": "Bur Sa`id"
  }, {
    "iso": "TR",
    "name": "Burdur"
  }, {
    "iso": "AT",
    "name": "Burgenland"
  }, {
    "iso": "ES",
    "name": "Burgos"
  }, {
    "iso": "TH",
    "name": "Buri Ram"
  }, {
    "iso": "TR",
    "name": "Bursa"
  }, {
    "iso": "LV",
    "name": "Burtnieku novads"
  }, {
    "iso": "BI",
    "name": "Bururi"
  }, {
    "iso": "GB",
    "name": "Bury"
  }, {
    "iso": "KR",
    "name": "Busan"
  }, {
    "iso": "IR",
    "name": "Bushehr"
  }, {
    "iso": "UG",
    "name": "Bushenyi"
  }, {
    "iso": "UG",
    "name": "Busia"
  }, {
    "iso": "NO",
    "name": "Buskerud"
  }, {
    "iso": "UG",
    "name": "Butaleja"
  }, {
    "iso": "UG",
    "name": "Butambala"
  }, {
    "iso": "MK",
    "name": "Butel"
  }, {
    "iso": "LS",
    "name": "Butha-Buthe"
  }, {
    "iso": "PH",
    "name": "Butuan"
  }, {
    "iso": "UG",
    "name": "Buvuma"
  }, {
    "iso": "UG",
    "name": "Buyende"
  }, {
    "iso": "RO",
    "name": "Buzău"
  }, {
    "iso": "VN",
    "name": "Bà Rịa - Vũng Tàu"
  }, {
    "iso": "HU",
    "name": "Bács-Kiskun"
  }, {
    "iso": "KH",
    "name": "Bântéay Méanchey"
  }, {
    "iso": "DZ",
    "name": "Béchar"
  }, {
    "iso": "TN",
    "name": "Béja"
  }, {
    "iso": "DZ",
    "name": "Béjaïa"
  }, {
    "iso": "HU",
    "name": "Békés"
  }, {
    "iso": "VN",
    "name": "Bình Dương"
  }, {
    "iso": "VN",
    "name": "Bình Phước"
  }, {
    "iso": "VN",
    "name": "Bình Thuận"
  }, {
    "iso": "VN",
    "name": "Bình Định"
  }, {
    "iso": "AZ",
    "name": "Bərdə"
  }, {
    "iso": "VN",
    "name": "Bạc Liêu"
  }, {
    "iso": "VN",
    "name": "Bắc Giang"
  }, {
    "iso": "VN",
    "name": "Bắc Ninh"
  }, {
    "iso": "VN",
    "name": "Bến Tre"
  }, {
    "iso": "BR",
    "name": "CEARÁ"
  }, {
    "iso": "PY",
    "name": "Caaguazú"
  }, {
    "iso": "PY",
    "name": "Caazapá"
  }, {
    "iso": "SV",
    "name": "Cabañas"
  }, {
    "iso": "AO",
    "name": "Cabinda"
  }, {
    "iso": "MZ",
    "name": "Cabo Delgado"
  }, {
    "iso": "GW",
    "name": "Cacheu"
  }, {
    "iso": "GB",
    "name": "Caerphilly"
  }, {
    "iso": "PH",
    "name": "Cagayan"
  }, {
    "iso": "PH",
    "name": "Cagayan de Oro"
  }, {
    "iso": "IT",
    "name": "Cagliari"
  }, {
    "iso": "MD",
    "name": "Cahul"
  }, {
    "iso": "MD",
    "name": "Cahul"
  }, {
    "iso": "MK",
    "name": "Cair"
  }, {
    "iso": "PE",
    "name": "Cajamarca"
  }, {
    "iso": "CO",
    "name": "Caldas"
  }, {
    "iso": "GB",
    "name": "Calderdale"
  }, {
    "iso": "US",
    "name": "California"
  }, {
    "iso": "PE",
    "name": "Callao"
  }, {
    "iso": "PE",
    "name": "Callao"
  }, {
    "iso": "PH",
    "name": "Caloocan"
  }, {
    "iso": "IT",
    "name": "Caltanissetta"
  }, {
    "iso": "FR",
    "name": "Calvados"
  }, {
    "iso": "CU",
    "name": "Camagüey"
  }, {
    "iso": "PH",
    "name": "Camarines Norte"
  }, {
    "iso": "PH",
    "name": "Camarines Sur"
  }, {
    "iso": "GB",
    "name": "Cambridgeshire"
  }, {
    "iso": "GB",
    "name": "Camden"
  }, {
    "iso": "PH",
    "name": "Camiguin"
  }, {
    "iso": "MX",
    "name": "Campeche"
  }, {
    "iso": "IT",
    "name": "Campobasso"
  }, {
    "iso": "VN",
    "name": "Can Tho"
  }, {
    "iso": "UY",
    "name": "Canelones"
  }, {
    "iso": "AD",
    "name": "Canillo"
  }, {
    "iso": "PY",
    "name": "Canindeyú"
  }, {
    "iso": "SI",
    "name": "Cankova"
  }, {
    "iso": "BI",
    "name": "Cankuzo"
  }, {
    "iso": "ES",
    "name": "Cantabria"
  }, {
    "iso": "FR",
    "name": "Cantal"
  }, {
    "iso": "MD",
    "name": "Cantemir"
  }, {
    "iso": "NZ",
    "name": "Canterbury Region"
  }, {
    "iso": "VN",
    "name": "Cao Bằng"
  }, {
    "iso": "SB",
    "name": "Capital Territory (Honiara)"
  }, {
    "iso": "PH",
    "name": "Capiz"
  }, {
    "iso": "NA",
    "name": "Caprivi"
  }, {
    "iso": "CO",
    "name": "Caquetá"
  }, {
    "iso": "VE",
    "name": "Carabobo"
  }, {
    "iso": "NI",
    "name": "Carazo"
  }, {
    "iso": "RO",
    "name": "Caraş-Severin"
  }, {
    "iso": "IT",
    "name": "Carbonia-Iglesias"
  }, {
    "iso": "EC",
    "name": "Carchi"
  }, {
    "iso": "GB",
    "name": "Cardiff"
  }, {
    "iso": "MU",
    "name": "Cargados Carajos Shoals"
  }, {
    "iso": "IE",
    "name": "Carlow"
  }, {
    "iso": "GB",
    "name": "Carmarthenshire"
  }, {
    "iso": "LV",
    "name": "Carnikavas novads"
  }, {
    "iso": "GD",
    "name": "Carriacou and Petite Martinique"
  }, {
    "iso": "GB",
    "name": "Carrickfergus"
  }, {
    "iso": "CR",
    "name": "Cartago"
  }, {
    "iso": "CO",
    "name": "Casanare"
  }, {
    "iso": "SC",
    "name": "Cascade"
  }, {
    "iso": "IT",
    "name": "Caserta"
  }, {
    "iso": "ES",
    "name": "Castellón/Castelló"
  }, {
    "iso": "PT",
    "name": "Castelo Branco"
  }, {
    "iso": "GB",
    "name": "Castlereagh"
  }, {
    "iso": "LC",
    "name": "Castries"
  }, {
    "iso": "BS",
    "name": "Cat Island"
  }, {
    "iso": "AR",
    "name": "Catamarca"
  }, {
    "iso": "PH",
    "name": "Catanduanes"
  }, {
    "iso": "IT",
    "name": "Catania"
  }, {
    "iso": "IT",
    "name": "Catanzaro"
  }, {
    "iso": "CO",
    "name": "Cauca"
  }, {
    "iso": "IE",
    "name": "Cavan"
  }, {
    "iso": "PH",
    "name": "Cavite"
  }, {
    "iso": "KY",
    "name": "Cayman Islands"
  }, {
    "iso": "BZ",
    "name": "Cayo"
  }, {
    "iso": "EC",
    "name": "Cañar"
  }, {
    "iso": "MK",
    "name": "Caška"
  }, {
    "iso": "PH",
    "name": "Cebu"
  }, {
    "iso": "PH",
    "name": "Cebu"
  }, {
    "iso": "SI",
    "name": "Celje"
  }, {
    "iso": "MK",
    "name": "Centar"
  }, {
    "iso": "MK",
    "name": "Centar župa"
  }, {
    "iso": "PG",
    "name": "Central"
  }, {
    "iso": "KE",
    "name": "Central"
  }, {
    "iso": "BW",
    "name": "Central"
  }, {
    "iso": "ZM",
    "name": "Central"
  }, {
    "iso": "SB",
    "name": "Central"
  }, {
    "iso": "GH",
    "name": "Central"
  }, {
    "iso": "PY",
    "name": "Central"
  }, {
    "iso": "FJ",
    "name": "Central"
  }, {
    "iso": "BS",
    "name": "Central Abaco"
  }, {
    "iso": "BS",
    "name": "Central Andros"
  }, {
    "iso": "GB",
    "name": "Central Bedfordshire"
  }, {
    "iso": "BA",
    "name": "Central Bosnia"
  }, {
    "iso": "SD",
    "name": "Central Darfur"
  }, {
    "iso": "BS",
    "name": "Central Eleuthera"
  }, {
    "iso": "SS",
    "name": "Central Equatoria"
  }, {
    "iso": "FI",
    "name": "Central Finland"
  }, {
    "iso": "FI",
    "name": "Central Ostrobothnia"
  }, {
    "iso": "GM",
    "name": "Central River"
  }, {
    "iso": "SG",
    "name": "Central Singapore"
  }, {
    "iso": "HK",
    "name": "Central and Western"
  }, {
    "iso": "CM",
    "name": "Centre"
  }, {
    "iso": "HT",
    "name": "Centre"
  }, {
    "iso": "TG",
    "name": "Centre"
  }, {
    "iso": "GQ",
    "name": "Centro Sur"
  }, {
    "iso": "GB",
    "name": "Ceredigion"
  }, {
    "iso": "SI",
    "name": "Cerklje na Gorenjskem"
  }, {
    "iso": "SI",
    "name": "Cerknica"
  }, {
    "iso": "SI",
    "name": "Cerkno"
  }, {
    "iso": "SI",
    "name": "Cerkvenjak"
  }, {
    "iso": "UY",
    "name": "Cerro Largo"
  }, {
    "iso": "CO",
    "name": "Cesar"
  }, {
    "iso": "LV",
    "name": "Cesu novads"
  }, {
    "iso": "LV",
    "name": "Cesvaines novads"
  }, {
    "iso": "ME",
    "name": "Cetinje"
  }, {
    "iso": "ES",
    "name": "Ceuta"
  }, {
    "iso": "MK",
    "name": "Cešinovo-Obleševo"
  }, {
    "iso": "TH",
    "name": "Chachoengsao"
  }, {
    "iso": "AR",
    "name": "Chaco"
  }, {
    "iso": "KP",
    "name": "Chagang-do"
  }, {
    "iso": "TT",
    "name": "Chaguanas"
  }, {
    "iso": "IR",
    "name": "Chahar Mahall and Bakhtiari"
  }, {
    "iso": "TH",
    "name": "Chai Nat"
  }, {
    "iso": "TH",
    "name": "Chaiyaphum"
  }, {
    "iso": "SV",
    "name": "Chalatenango"
  }, {
    "iso": "LA",
    "name": "Champasak"
  }, {
    "iso": "IN",
    "name": "Chandigarh"
  }, {
    "iso": "TW",
    "name": "Changhua"
  }, {
    "iso": "TH",
    "name": "Chanthaburi"
  }, {
    "iso": "MA",
    "name": "Chaouia - Ouardigha"
  }, {
    "iso": "TM",
    "name": "Chardzhou"
  }, {
    "iso": "FR",
    "name": "Charente"
  }, {
    "iso": "FR",
    "name": "Charente-Maritime"
  }, {
    "iso": "TD",
    "name": "Chari-Baguirmi"
  }, {
    "iso": "VC",
    "name": "Charlotte"
  }, {
    "iso": "NZ",
    "name": "Chatham Islands"
  }, {
    "iso": "FR",
    "name": "Cher"
  }, {
    "iso": "GB",
    "name": "Cheshire East"
  }, {
    "iso": "GB",
    "name": "Cheshire West and Chester"
  }, {
    "iso": "IN",
    "name": "Chhattisgarh"
  }, {
    "iso": "BT",
    "name": "Chhukha"
  }, {
    "iso": "TH",
    "name": "Chiang Mai"
  }, {
    "iso": "TH",
    "name": "Chiang Rai"
  }, {
    "iso": "MX",
    "name": "Chiapas"
  }, {
    "iso": "TW",
    "name": "Chiayi"
  }, {
    "iso": "TW",
    "name": "Chiayi City"
  }, {
    "iso": "JP",
    "name": "Chiba"
  }, {
    "iso": "SM",
    "name": "Chiesanuova"
  }, {
    "iso": "IT",
    "name": "Chieti"
  }, {
    "iso": "MX",
    "name": "Chihuahua"
  }, {
    "iso": "MW",
    "name": "Chikwawa"
  }, {
    "iso": "GT",
    "name": "Chimaltenango"
  }, {
    "iso": "EC",
    "name": "Chimborazo"
  }, {
    "iso": "PG",
    "name": "Chimbu"
  }, {
    "iso": "MM",
    "name": "Chin"
  }, {
    "iso": "NI",
    "name": "Chinandega"
  }, {
    "iso": "GT",
    "name": "Chiquimula"
  }, {
    "iso": "MW",
    "name": "Chiradzulu"
  }, {
    "iso": "BT",
    "name": "Chirang"
  }, {
    "iso": "PA",
    "name": "Chiriquí"
  }, {
    "iso": "MW",
    "name": "Chitipa"
  }, {
    "iso": "MW",
    "name": "Chitipa"
  }, {
    "iso": "BD",
    "name": "Chittagong"
  }, {
    "iso": "DZ",
    "name": "Chlef"
  }, {
    "iso": "CO",
    "name": "Chocó"
  }, {
    "iso": "SB",
    "name": "Choiseul"
  }, {
    "iso": "LC",
    "name": "Choiseul"
  }, {
    "iso": "HN",
    "name": "Choluteca"
  }, {
    "iso": "TH",
    "name": "Chon Buri"
  }, {
    "iso": "CN",
    "name": "Chongqing"
  }, {
    "iso": "NI",
    "name": "Chontales"
  }, {
    "iso": "BB",
    "name": "Christ Church"
  }, {
    "iso": "KN",
    "name": "Christ Church Nichola Town"
  }, {
    "iso": "CX",
    "name": "Christmas Island"
  }, {
    "iso": "AR",
    "name": "Chubut"
  }, {
    "iso": "TH",
    "name": "Chumphon"
  }, {
    "iso": "BO",
    "name": "Chuquisaca"
  }, {
    "iso": "FM",
    "name": "Chuuk"
  }, {
    "iso": "KG",
    "name": "Chuy"
  }, {
    "iso": "BI",
    "name": "Cibitoke"
  }, {
    "iso": "LV",
    "name": "Ciblas novads"
  }, {
    "iso": "CU",
    "name": "Ciego de Ávila"
  }, {
    "iso": "CU",
    "name": "Cienfuegos"
  }, {
    "iso": "MD",
    "name": "Cimişlia"
  }, {
    "iso": "GB",
    "name": "City and County of the City of London"
  }, {
    "iso": "GB",
    "name": "City of Bristol"
  }, {
    "iso": "GB",
    "name": "City of Derby"
  }, {
    "iso": "GB",
    "name": "City of Edinburgh"
  }, {
    "iso": "BS",
    "name": "City of Freeport"
  }, {
    "iso": "BM",
    "name": "City of Hamilton"
  }, {
    "iso": "GB",
    "name": "City of Kingston upon Hull"
  }, {
    "iso": "GB",
    "name": "City of Leicester"
  }, {
    "iso": "BY",
    "name": "City of Minsk"
  }, {
    "iso": "GB",
    "name": "City of Nottingham"
  }, {
    "iso": "GB",
    "name": "City of Peterborough"
  }, {
    "iso": "GB",
    "name": "City of Plymouth"
  }, {
    "iso": "GB",
    "name": "City of Portsmouth"
  }, {
    "iso": "BM",
    "name": "City of Saint George"
  }, {
    "iso": "GB",
    "name": "City of Southampton"
  }, {
    "iso": "GB",
    "name": "City of Stoke-on-Trent"
  }, {
    "iso": "GB",
    "name": "City of Westminster"
  }, {
    "iso": "GB",
    "name": "City of Wolverhampton"
  }, {
    "iso": "ES",
    "name": "Ciudad Real"
  }, {
    "iso": "AR",
    "name": "Ciudad de Buenos Aires"
  }, {
    "iso": "CU",
    "name": "Ciudad de la Habana"
  }, {
    "iso": "GB",
    "name": "Clackmannanshire"
  }, {
    "iso": "IE",
    "name": "Clare"
  }, {
    "iso": "JM",
    "name": "Clarendon"
  }, {
    "iso": "XY",
    "name": "Clipperton Island"
  }, {
    "iso": "RO",
    "name": "Cluj"
  }, {
    "iso": "MX",
    "name": "Coahuila de Zaragoza"
  }, {
    "iso": "KE",
    "name": "Coast"
  }, {
    "iso": "BO",
    "name": "Cochabamba"
  }, {
    "iso": "PA",
    "name": "Coclé"
  }, {
    "iso": "XZ",
    "name": "Cocos (Keeling) Islands"
  }, {
    "iso": "PT",
    "name": "Coimbra"
  }, {
    "iso": "VE",
    "name": "Cojedes"
  }, {
    "iso": "GB",
    "name": "Coleraine"
  }, {
    "iso": "MX",
    "name": "Colima"
  }, {
    "iso": "BJ",
    "name": "Collines"
  }, {
    "iso": "UY",
    "name": "Colonia"
  }, {
    "iso": "US",
    "name": "Colorado"
  }, {
    "iso": "PA",
    "name": "Colón"
  }, {
    "iso": "HN",
    "name": "Colón"
  }, {
    "iso": "HN",
    "name": "Comayagua"
  }, {
    "iso": "SR",
    "name": "Commewijne"
  }, {
    "iso": "IT",
    "name": "Como"
  }, {
    "iso": "PH",
    "name": "Compostela Valley"
  }, {
    "iso": "GN",
    "name": "Conakry"
  }, {
    "iso": "PY",
    "name": "Concepción"
  }, {
    "iso": "ES",
    "name": "Conjurisdicciones interprovinciales"
  }, {
    "iso": "ES",
    "name": "Conjurisdicciones interprovinciales"
  }, {
    "iso": "ES",
    "name": "Conjurisdicciones interprovinciales"
  }, {
    "iso": "ES",
    "name": "Conjurisdicciones interprovinciales"
  }, {
    "iso": "US",
    "name": "Connecticut"
  }, {
    "iso": "DZ",
    "name": "Constantine"
  }, {
    "iso": "RO",
    "name": "Constanţa"
  }, {
    "iso": "GB",
    "name": "Conwy"
  }, {
    "iso": "GB",
    "name": "Cookstown"
  }, {
    "iso": "ZM",
    "name": "Copperbelt"
  }, {
    "iso": "HN",
    "name": "Copán"
  }, {
    "iso": "XZ",
    "name": "Coral Sea Islands"
  }, {
    "iso": "PY",
    "name": "Cordillera"
  }, {
    "iso": "IE",
    "name": "Cork"
  }, {
    "iso": "IE",
    "name": "Cork"
  }, {
    "iso": "IE",
    "name": "Cork"
  }, {
    "iso": "IE",
    "name": "Cork"
  }, {
    "iso": "IE",
    "name": "Cork"
  }, {
    "iso": "IE",
    "name": "Cork"
  }, {
    "iso": "IE",
    "name": "Cork"
  }, {
    "iso": "IE",
    "name": "Cork City"
  }, {
    "iso": "GB",
    "name": "Cornwall"
  }, {
    "iso": "SR",
    "name": "Coronie"
  }, {
    "iso": "BZ",
    "name": "Corozal"
  }, {
    "iso": "AR",
    "name": "Corrientes"
  }, {
    "iso": "FR",
    "name": "Corrèze"
  }, {
    "iso": "FR",
    "name": "Corse-du-Sud"
  }, {
    "iso": "HN",
    "name": "Cortés"
  }, {
    "iso": "IT",
    "name": "Cosenza"
  }, {
    "iso": "PH",
    "name": "Cotabato"
  }, {
    "iso": "PH",
    "name": "Cotabato"
  }, {
    "iso": "EC",
    "name": "Cotopaxi"
  }, {
    "iso": "GB",
    "name": "County Durham"
  }, {
    "iso": "GB",
    "name": "County of Herefordshire"
  }, {
    "iso": "TT",
    "name": "Couva-Tabaquite-Talparo"
  }, {
    "iso": "TL",
    "name": "Cova Lima"
  }, {
    "iso": "RO",
    "name": "Covasna"
  }, {
    "iso": "GB",
    "name": "Coventry"
  }, {
    "iso": "GN",
    "name": "Coyah"
  }, {
    "iso": "GB",
    "name": "Craigavon"
  }, {
    "iso": "IT",
    "name": "Cremona"
  }, {
    "iso": "FR",
    "name": "Creuse"
  }, {
    "iso": "MD",
    "name": "Criuleni"
  }, {
    "iso": "MD",
    "name": "Criuleni"
  }, {
    "iso": "SI",
    "name": "Crnomelj"
  }, {
    "iso": "BS",
    "name": "Crooked Island and Long Cay"
  }, {
    "iso": "NG",
    "name": "Cross River"
  }, {
    "iso": "IT",
    "name": "Crotone"
  }, {
    "iso": "GB",
    "name": "Croydon"
  }, {
    "iso": "HU",
    "name": "Csongrád"
  }, {
    "iso": "AO",
    "name": "Cuando Cubango"
  }, {
    "iso": "AO",
    "name": "Cuanza Norte"
  }, {
    "iso": "AO",
    "name": "Cuanza Sul"
  }, {
    "iso": "MK",
    "name": "Cucer Sandevo"
  }, {
    "iso": "ES",
    "name": "Cuenca"
  }, {
    "iso": "AZ",
    "name": "Culfa"
  }, {
    "iso": "GB",
    "name": "Cumbria"
  }, {
    "iso": "CO",
    "name": "Cundinamarca"
  }, {
    "iso": "AO",
    "name": "Cunene"
  }, {
    "iso": "IT",
    "name": "Cuneo"
  }, {
    "iso": "CW",
    "name": "Curaçao"
  }, {
    "iso": "MU",
    "name": "Curepipe"
  }, {
    "iso": "SV",
    "name": "Cuscatlán"
  }, {
    "iso": "PE",
    "name": "Cusco"
  }, {
    "iso": "CG",
    "name": "Cuvette"
  }, {
    "iso": "CG",
    "name": "Cuvette-Ouest"
  }, {
    "iso": "GY",
    "name": "Cuyuni-Mazaruni"
  }, {
    "iso": "VN",
    "name": "Cà Mau"
  }, {
    "iso": "ES",
    "name": "Cáceres"
  }, {
    "iso": "ES",
    "name": "Cádiz"
  }, {
    "iso": "CO",
    "name": "Córdoba"
  }, {
    "iso": "AR",
    "name": "Córdoba"
  }, {
    "iso": "ES",
    "name": "Córdoba"
  }, {
    "iso": "FR",
    "name": "Côte-d'Or"
  }, {
    "iso": "FR",
    "name": "Côtes-d'Armor"
  }, {
    "iso": "MD",
    "name": "Călăraşi"
  }, {
    "iso": "RO",
    "name": "Călăraşi"
  }, {
    "iso": "MD",
    "name": "Căuşeni"
  }, {
    "iso": "AZ",
    "name": "Cəbrayıl"
  }, {
    "iso": "AZ",
    "name": "Cəlilabad"
  }, {
    "iso": "CL",
    "name": "DE MAGALLANES y ANTARTICA CHILENA"
  }, {
    "iso": "GN",
    "name": "Dabola"
  }, {
    "iso": "IN",
    "name": "Dadra and Nagar Haveli"
  }, {
    "iso": "KR",
    "name": "Daegu"
  }, {
    "iso": "KR",
    "name": "Daejeon"
  }, {
    "iso": "BT",
    "name": "Daga"
  }, {
    "iso": "LV",
    "name": "Dagdas novads"
  }, {
    "iso": "PH",
    "name": "Dagupan"
  }, {
    "iso": "DO",
    "name": "Dajabón"
  }, {
    "iso": "VN",
    "name": "Dak Lak"
  }, {
    "iso": "SN",
    "name": "Dakar"
  }, {
    "iso": "MR",
    "name": "Dakhlet Nouadhibou"
  }, {
    "iso": "GN",
    "name": "Dalaba"
  }, {
    "iso": "SE",
    "name": "Dalarna"
  }, {
    "iso": "IN",
    "name": "Daman and Diu"
  }, {
    "iso": "SY",
    "name": "Damascus"
  }, {
    "iso": "ME",
    "name": "Danilovgrad"
  }, {
    "iso": "TZ",
    "name": "Dar-Es-Salaam"
  }, {
    "iso": "SY",
    "name": "Dar`a"
  }, {
    "iso": "MN",
    "name": "Darhan-Uul"
  }, {
    "iso": "PA",
    "name": "Darién"
  }, {
    "iso": "GB",
    "name": "Darlington"
  }, {
    "iso": "LV",
    "name": "Daugavpils"
  }, {
    "iso": "LV",
    "name": "Daugavpils novads"
  }, {
    "iso": "LC",
    "name": "Dauphin"
  }, {
    "iso": "PH",
    "name": "Davao"
  }, {
    "iso": "PH",
    "name": "Davao Oriental"
  }, {
    "iso": "PH",
    "name": "Davao del Norte"
  }, {
    "iso": "PH",
    "name": "Davao del Sur"
  }, {
    "iso": "SY",
    "name": "Dayr Az Zawr"
  }, {
    "iso": "AZ",
    "name": "Daşkəsən"
  }, {
    "iso": "CL",
    "name": "De Aisen"
  }, {
    "iso": "CL",
    "name": "De Antofagasta"
  }, {
    "iso": "CL",
    "name": "De Atacama"
  }, {
    "iso": "CL",
    "name": "De Coquimbo"
  }, {
    "iso": "CL",
    "name": "De La Araucania"
  }, {
    "iso": "CL",
    "name": "De Los Lagos"
  }, {
    "iso": "CL",
    "name": "De Los Rios"
  }, {
    "iso": "CL",
    "name": "De Tarapaca"
  }, {
    "iso": "CL",
    "name": "De Valparaiso"
  }, {
    "iso": "MK",
    "name": "Debar"
  }, {
    "iso": "MK",
    "name": "Debarca"
  }, {
    "iso": "ER",
    "name": "Debub"
  }, {
    "iso": "ER",
    "name": "Debubawi Keyih Bahri"
  }, {
    "iso": "MW",
    "name": "Dedza"
  }, {
    "iso": "PS",
    "name": "Deir Al-Balah"
  }, {
    "iso": "CL",
    "name": "Del Bio-Bio"
  }, {
    "iso": "CL",
    "name": "Del Libertador B Ohiggins"
  }, {
    "iso": "CL",
    "name": "Del Maule"
  }, {
    "iso": "US",
    "name": "Delaware"
  }, {
    "iso": "MK",
    "name": "Delcevo"
  }, {
    "iso": "IN",
    "name": "Delhi"
  }, {
    "iso": "NG",
    "name": "Delta"
  }, {
    "iso": "VE",
    "name": "Delta Amacuro"
  }, {
    "iso": "GY",
    "name": "Demerara-Mahaica"
  }, {
    "iso": "MK",
    "name": "Demir Hisar"
  }, {
    "iso": "MK",
    "name": "Demir Kapija"
  }, {
    "iso": "GB",
    "name": "Denbighshire"
  }, {
    "iso": "CI",
    "name": "Denguélé"
  }, {
    "iso": "NR",
    "name": "Denigomodu"
  }, {
    "iso": "TR",
    "name": "Denizli"
  }, {
    "iso": "LC",
    "name": "Dennery"
  }, {
    "iso": "VE",
    "name": "Dependencias Federales"
  }, {
    "iso": "GB",
    "name": "Derbyshire"
  }, {
    "iso": "GB",
    "name": "Derry"
  }, {
    "iso": "SI",
    "name": "Destrnik"
  }, {
    "iso": "FR",
    "name": "Deux-Sèvres"
  }, {
    "iso": "GB",
    "name": "Devon"
  }, {
    "iso": "BM",
    "name": "Devonshire"
  }, {
    "iso": "XK",
    "name": "Dečani"
  }, {
    "iso": "MV",
    "name": "Dhaalu"
  }, {
    "iso": "BD",
    "name": "Dhaka"
  }, {
    "iso": "YE",
    "name": "Dhamar"
  }, {
    "iso": "NP",
    "name": "Dhawalagiri"
  }, {
    "iso": "XY",
    "name": "Dhekelia"
  }, {
    "iso": "IQ",
    "name": "Dhi-Qar"
  }, {
    "iso": "OM",
    "name": "Dhofar"
  }, {
    "iso": "MG",
    "name": "Diana"
  }, {
    "iso": "AL",
    "name": "Dibër"
  }, {
    "iso": "TT",
    "name": "Diego Martin"
  }, {
    "iso": "LU",
    "name": "Diekirch"
  }, {
    "iso": "NE",
    "name": "Diffa"
  }, {
    "iso": "IQ",
    "name": "Dihok"
  }, {
    "iso": "DJ",
    "name": "Dikhil"
  }, {
    "iso": "TL",
    "name": "Dili"
  }, {
    "iso": "MT",
    "name": "Dingli"
  }, {
    "iso": "GN",
    "name": "Dinguiraye"
  }, {
    "iso": "SN",
    "name": "Diourbel"
  }, {
    "iso": "ET",
    "name": "Dire Dawa"
  }, {
    "iso": "HR",
    "name": "Disputed areas of Croatia"
  }, {
    "iso": "CL",
    "name": "Disputed border area with Argentina"
  }, {
    "iso": "US",
    "name": "District of Columbia"
  }, {
    "iso": "VE",
    "name": "Distrito Capital"
  }, {
    "iso": "BR",
    "name": "Distrito Federal"
  }, {
    "iso": "MX",
    "name": "Distrito Federal"
  }, {
    "iso": "DO",
    "name": "Distrito Nacional"
  }, {
    "iso": "SI",
    "name": "Divaca"
  }, {
    "iso": "CI",
    "name": "Dix-Huit Montagnes"
  }, {
    "iso": "IQ",
    "name": "Diyala"
  }, {
    "iso": "TR",
    "name": "Diyarbakir"
  }, {
    "iso": "DZ",
    "name": "Djelfa"
  }, {
    "iso": "DJ",
    "name": "Djibouti"
  }, {
    "iso": "LV",
    "name": "Dobeles novads"
  }, {
    "iso": "SI",
    "name": "Dobje"
  }, {
    "iso": "BA",
    "name": "Doboj"
  }, {
    "iso": "SI",
    "name": "Dobrepolje"
  }, {
    "iso": "SI",
    "name": "Dobrna"
  }, {
    "iso": "SI",
    "name": "Dobrova-Polhov Gradec"
  }, {
    "iso": "SI",
    "name": "Dobrovnik"
  }, {
    "iso": "TZ",
    "name": "Dodoma"
  }, {
    "iso": "MK",
    "name": "Dojran"
  }, {
    "iso": "UG",
    "name": "Dokolo"
  }, {
    "iso": "SI",
    "name": "Dol pri Ljubljani"
  }, {
    "iso": "SI",
    "name": "Dolenjske Toplice"
  }, {
    "iso": "RO",
    "name": "Dolj"
  }, {
    "iso": "MK",
    "name": "Dolneni"
  }, {
    "iso": "PL",
    "name": "Dolnośląskie"
  }, {
    "iso": "SM",
    "name": "Domagnano"
  }, {
    "iso": "SI",
    "name": "Domžale"
  }, {
    "iso": "GB",
    "name": "Doncaster"
  }, {
    "iso": "MD",
    "name": "Donduşeni"
  }, {
    "iso": "IE",
    "name": "Donegal"
  }, {
    "iso": "IE",
    "name": "Donegal"
  }, {
    "iso": "BJ",
    "name": "Donga"
  }, {
    "iso": "FR",
    "name": "Dordogne"
  }, {
    "iso": "SI",
    "name": "Dornava"
  }, {
    "iso": "MN",
    "name": "Dornod"
  }, {
    "iso": "MN",
    "name": "Dornogovi"
  }, {
    "iso": "GB",
    "name": "Dorset"
  }, {
    "iso": "NE",
    "name": "Dosso"
  }, {
    "iso": "FR",
    "name": "Doubs"
  }, {
    "iso": "MA",
    "name": "Doukkala - Abda"
  }, {
    "iso": "MW",
    "name": "Dowa"
  }, {
    "iso": "GB",
    "name": "Down"
  }, {
    "iso": "XK",
    "name": "Dragaš"
  }, {
    "iso": "SI",
    "name": "Dravograd"
  }, {
    "iso": "NL",
    "name": "Drenthe"
  }, {
    "iso": "MD",
    "name": "Drocia"
  }, {
    "iso": "MK",
    "name": "Drugovo"
  }, {
    "iso": "FR",
    "name": "Drôme"
  }, {
    "iso": "DO",
    "name": "Duarte"
  }, {
    "iso": "AE",
    "name": "Dubay"
  }, {
    "iso": "IE",
    "name": "Dublin City"
  }, {
    "iso": "HR",
    "name": "Dubrovacko-neretvanska županija"
  }, {
    "iso": "GN",
    "name": "Dubréka"
  }, {
    "iso": "MD",
    "name": "Dubăsari"
  }, {
    "iso": "MD",
    "name": "Dubăsari"
  }, {
    "iso": "GB",
    "name": "Dudley"
  }, {
    "iso": "GB",
    "name": "Dumfries and Galloway"
  }, {
    "iso": "EG",
    "name": "Dumyat"
  }, {
    "iso": "LV",
    "name": "Dundagas novads"
  }, {
    "iso": "GB",
    "name": "Dundee City"
  }, {
    "iso": "MN",
    "name": "Dundgovi"
  }, {
    "iso": "GB",
    "name": "Dungannon"
  }, {
    "iso": "IE",
    "name": "Dunlaoghaire-Rathdown"
  }, {
    "iso": "SI",
    "name": "Duplek"
  }, {
    "iso": "MX",
    "name": "Durango"
  }, {
    "iso": "UY",
    "name": "Durazno"
  }, {
    "iso": "LV",
    "name": "Durbes novads"
  }, {
    "iso": "AL",
    "name": "Durrës"
  }, {
    "iso": "AL",
    "name": "Durrës"
  }, {
    "iso": "TJ",
    "name": "Dushanbe"
  }, {
    "iso": "MN",
    "name": "Dzavhan"
  }, {
    "iso": "RO",
    "name": "Dâmboviţa"
  }, {
    "iso": "TR",
    "name": "Düzce"
  }, {
    "iso": "AZ",
    "name": "Dəvəçi"
  }, {
    "iso": "GB",
    "name": "Ealing"
  }, {
    "iso": "GB",
    "name": "East Ayrshire"
  }, {
    "iso": "IR",
    "name": "East Azarbaijan"
  }, {
    "iso": "GY",
    "name": "East Berbice-Corentyne"
  }, {
    "iso": "GB",
    "name": "East Dunbartonshire"
  }, {
    "iso": "AI",
    "name": "East End"
  }, {
    "iso": "SS",
    "name": "East Equatoria"
  }, {
    "iso": "BS",
    "name": "East Grand Bahama"
  }, {
    "iso": "KZ",
    "name": "East Kazakhstan"
  }, {
    "iso": "GB",
    "name": "East Lothian"
  }, {
    "iso": "PG",
    "name": "East New Britain"
  }, {
    "iso": "GB",
    "name": "East Renfrewshire"
  }, {
    "iso": "GB",
    "name": "East Riding of Yorkshire"
  }, {
    "iso": "PG",
    "name": "East Sepik"
  }, {
    "iso": "GB",
    "name": "East Sussex"
  }, {
    "iso": "AS",
    "name": "Eastern"
  }, {
    "iso": "HK",
    "name": "Eastern"
  }, {
    "iso": "GH",
    "name": "Eastern"
  }, {
    "iso": "RW",
    "name": "Eastern"
  }, {
    "iso": "SL",
    "name": "Eastern"
  }, {
    "iso": "KE",
    "name": "Eastern"
  }, {
    "iso": "FJ",
    "name": "Eastern"
  }, {
    "iso": "ZM",
    "name": "Eastern"
  }, {
    "iso": "ZA",
    "name": "Eastern Cape"
  }, {
    "iso": "SD",
    "name": "Eastern Darfur"
  }, {
    "iso": "PG",
    "name": "Eastern Highlands"
  }, {
    "iso": "PH",
    "name": "Eastern Samar"
  }, {
    "iso": "TT",
    "name": "Eastern Tobago"
  }, {
    "iso": "NG",
    "name": "Ebonyi"
  }, {
    "iso": "AX",
    "name": "Eckerö"
  }, {
    "iso": "MD",
    "name": "Edineţ"
  }, {
    "iso": "TR",
    "name": "Edirne"
  }, {
    "iso": "NG",
    "name": "Edo"
  }, {
    "iso": "JP",
    "name": "Ehime"
  }, {
    "iso": "NG",
    "name": "Ekiti"
  }, {
    "iso": "DZ",
    "name": "El Bayadh"
  }, {
    "iso": "BO",
    "name": "El Beni"
  }, {
    "iso": "EC",
    "name": "El Oro"
  }, {
    "iso": "DZ",
    "name": "El Oued"
  }, {
    "iso": "HN",
    "name": "El Paraíso"
  }, {
    "iso": "GT",
    "name": "El Progreso"
  }, {
    "iso": "DO",
    "name": "El Seybo"
  }, {
    "iso": "DZ",
    "name": "El Tarf"
  }, {
    "iso": "TR",
    "name": "Elazig"
  }, {
    "iso": "AL",
    "name": "Elbasan"
  }, {
    "iso": "PA",
    "name": "Emberá"
  }, {
    "iso": "AD",
    "name": "Encamp"
  }, {
    "iso": "GB",
    "name": "Enfield"
  }, {
    "iso": "PG",
    "name": "Enga"
  }, {
    "iso": "SC",
    "name": "English River"
  }, {
    "iso": "LV",
    "name": "Engures novads"
  }, {
    "iso": "IT",
    "name": "Enna"
  }, {
    "iso": "TD",
    "name": "Ennedi"
  }, {
    "iso": "AR",
    "name": "Entre Ríos"
  }, {
    "iso": "NG",
    "name": "Enugu"
  }, {
    "iso": "AM",
    "name": "Erevan"
  }, {
    "iso": "LV",
    "name": "Erglu novads"
  }, {
    "iso": "TL",
    "name": "Ermera"
  }, {
    "iso": "NA",
    "name": "Erongo"
  }, {
    "iso": "TR",
    "name": "Erzincan"
  }, {
    "iso": "TR",
    "name": "Erzurum"
  }, {
    "iso": "AD",
    "name": "Escaldes-Engordany"
  }, {
    "iso": "GT",
    "name": "Escuintla"
  }, {
    "iso": "IR",
    "name": "Esfahan"
  }, {
    "iso": "TR",
    "name": "Eskisehir"
  }, {
    "iso": "EC",
    "name": "Esmeraldas"
  }, {
    "iso": "DO",
    "name": "Espaillat"
  }, {
    "iso": "BR",
    "name": "Espirito Santo"
  }, {
    "iso": "GY",
    "name": "Essequibo Islands-West Demerara"
  }, {
    "iso": "GB",
    "name": "Essex"
  }, {
    "iso": "FR",
    "name": "Essonne"
  }, {
    "iso": "CM",
    "name": "Est"
  }, {
    "iso": "NI",
    "name": "Estelí"
  }, {
    "iso": "EE",
    "name": "Estonia"
  }, {
    "iso": "EE",
    "name": "Estonia"
  }, {
    "iso": "GA",
    "name": "Estuaire"
  }, {
    "iso": "TO",
    "name": "Eua"
  }, {
    "iso": "FR",
    "name": "Eure"
  }, {
    "iso": "FR",
    "name": "Eure-et-Loir"
  }, {
    "iso": "NR",
    "name": "Ewa"
  }, {
    "iso": "CM",
    "name": "Extrême-Nord"
  }, {
    "iso": "BS",
    "name": "Exuma"
  }, {
    "iso": "FO",
    "name": "Eysturoyar"
  }, {
    "iso": "WS",
    "name": "Fa'asaleleaga"
  }, {
    "iso": "MV",
    "name": "Faafu"
  }, {
    "iso": "SM",
    "name": "Faetano"
  }, {
    "iso": "VE",
    "name": "Falcón"
  }, {
    "iso": "GB",
    "name": "Falkirk"
  }, {
    "iso": "FK",
    "name": "Falkland Islands"
  }, {
    "iso": "AF",
    "name": "Farah"
  }, {
    "iso": "GN",
    "name": "Faranah"
  }, {
    "iso": "PT",
    "name": "Faro"
  }, {
    "iso": "IR",
    "name": "Fars"
  }, {
    "iso": "AF",
    "name": "Faryab"
  }, {
    "iso": "SN",
    "name": "Fatick"
  }, {
    "iso": "NG",
    "name": "Federal Capital Territory"
  }, {
    "iso": "PK",
    "name": "Federal Capital Territory"
  }, {
    "iso": "PK",
    "name": "Federally Administered Tribal Areas"
  }, {
    "iso": "HU",
    "name": "Fejér"
  }, {
    "iso": "UZ",
    "name": "Ferghana"
  }, {
    "iso": "GB",
    "name": "Fermanagh"
  }, {
    "iso": "IT",
    "name": "Fermo"
  }, {
    "iso": "IT",
    "name": "Ferrara"
  }, {
    "iso": "MT",
    "name": "Fgura"
  }, {
    "iso": "AL",
    "name": "Fier"
  }, {
    "iso": "GB",
    "name": "Fife"
  }, {
    "iso": "IE",
    "name": "Fingal"
  }, {
    "iso": "FR",
    "name": "Finistère"
  }, {
    "iso": "NO",
    "name": "Finnmark"
  }, {
    "iso": "AX",
    "name": "Finström"
  }, {
    "iso": "SM",
    "name": "Fiorentino"
  }, {
    "iso": "IT",
    "name": "Firenze"
  }, {
    "iso": "MU",
    "name": "Flacq"
  }, {
    "iso": "NL",
    "name": "Flevoland"
  }, {
    "iso": "GB",
    "name": "Flintshire"
  }, {
    "iso": "UY",
    "name": "Flores"
  }, {
    "iso": "MD",
    "name": "Floreşti"
  }, {
    "iso": "MT",
    "name": "Floriana"
  }, {
    "iso": "US",
    "name": "Florida"
  }, {
    "iso": "UY",
    "name": "Florida"
  }, {
    "iso": "IT",
    "name": "Foggia"
  }, {
    "iso": "MT",
    "name": "Fontana"
  }, {
    "iso": "IT",
    "name": "Forli'-Cesena"
  }, {
    "iso": "AR",
    "name": "Formosa"
  }, {
    "iso": "GN",
    "name": "Forécariah"
  }, {
    "iso": "BA",
    "name": "Foča"
  }, {
    "iso": "HN",
    "name": "Francisco Morazán"
  }, {
    "iso": "BW",
    "name": "Francistown"
  }, {
    "iso": "ZA",
    "name": "Free State"
  }, {
    "iso": "GN",
    "name": "Fria"
  }, {
    "iso": "CH",
    "name": "Fribourg"
  }, {
    "iso": "NL",
    "name": "Friesland"
  }, {
    "iso": "CI",
    "name": "Fromager"
  }, {
    "iso": "IT",
    "name": "Frosinone"
  }, {
    "iso": "AE",
    "name": "Fujayrah"
  }, {
    "iso": "CN",
    "name": "Fujian"
  }, {
    "iso": "JP",
    "name": "Fukui"
  }, {
    "iso": "JP",
    "name": "Fukuoka"
  }, {
    "iso": "JP",
    "name": "Fukushima"
  }, {
    "iso": "MA",
    "name": "Fès - Boulemane"
  }, {
    "iso": "AX",
    "name": "Föglö"
  }, {
    "iso": "AZ",
    "name": "Füzuli"
  }, {
    "iso": "MD",
    "name": "Făleşti"
  }, {
    "iso": "BR",
    "name": "GOIÁS"
  }, {
    "iso": "MV",
    "name": "Gaafu Alifu"
  }, {
    "iso": "MV",
    "name": "Gaafu Dhaalu"
  }, {
    "iso": "BW",
    "name": "Gaborone"
  }, {
    "iso": "TN",
    "name": "Gabès"
  }, {
    "iso": "GW",
    "name": "Gabú"
  }, {
    "iso": "TN",
    "name": "Gafsa"
  }, {
    "iso": "WS",
    "name": "Gaga'emauga"
  }, {
    "iso": "WS",
    "name": "Gaga'ifomauga"
  }, {
    "iso": "RO",
    "name": "Galaţi"
  }, {
    "iso": "SO",
    "name": "Galguduud"
  }, {
    "iso": "IE",
    "name": "Galway"
  }, {
    "iso": "IE",
    "name": "Galway"
  }, {
    "iso": "IE",
    "name": "Galway"
  }, {
    "iso": "IE",
    "name": "Galway"
  }, {
    "iso": "IE",
    "name": "Galway"
  }, {
    "iso": "IE",
    "name": "Galway"
  }, {
    "iso": "IE",
    "name": "Galway"
  }, {
    "iso": "IE",
    "name": "Galway"
  }, {
    "iso": "IE",
    "name": "Galway"
  }, {
    "iso": "IE",
    "name": "Galway City"
  }, {
    "iso": "EC",
    "name": "Galápagos"
  }, {
    "iso": "ET",
    "name": "Gambela Peoples"
  }, {
    "iso": "LK",
    "name": "Gampaha"
  }, {
    "iso": "NP",
    "name": "Gandaki"
  }, {
    "iso": "KR",
    "name": "Gangwon"
  }, {
    "iso": "CN",
    "name": "Gansu"
  }, {
    "iso": "BF",
    "name": "Ganzourgou"
  }, {
    "iso": "ML",
    "name": "Gao"
  }, {
    "iso": "GN",
    "name": "Gaoual"
  }, {
    "iso": "FR",
    "name": "Gard"
  }, {
    "iso": "LV",
    "name": "Garkalnes novads"
  }, {
    "iso": "BT",
    "name": "Gasa"
  }, {
    "iso": "ER",
    "name": "Gash Barka"
  }, {
    "iso": "GB",
    "name": "Gateshead"
  }, {
    "iso": "ZA",
    "name": "Gauteng"
  }, {
    "iso": "MZ",
    "name": "Gaza"
  }, {
    "iso": "PS",
    "name": "Gaza"
  }, {
    "iso": "PS",
    "name": "Gaza Strip"
  }, {
    "iso": "MK",
    "name": "Gazi Baba"
  }, {
    "iso": "TR",
    "name": "Gaziantep"
  }, {
    "iso": "LR",
    "name": "Gbapolu"
  }, {
    "iso": "SD",
    "name": "Gedarif"
  }, {
    "iso": "SO",
    "name": "Gedo"
  }, {
    "iso": "AM",
    "name": "Gegharkunik"
  }, {
    "iso": "TZ",
    "name": "Geita"
  }, {
    "iso": "NL",
    "name": "Gelderland"
  }, {
    "iso": "PH",
    "name": "General Santos"
  }, {
    "iso": "IT",
    "name": "Genova"
  }, {
    "iso": "CH",
    "name": "Genève"
  }, {
    "iso": "AI",
    "name": "George Hill"
  }, {
    "iso": "US",
    "name": "Georgia"
  }, {
    "iso": "FR",
    "name": "Gers"
  }, {
    "iso": "AX",
    "name": "Geta"
  }, {
    "iso": "BT",
    "name": "Geylegphug"
  }, {
    "iso": "SD",
    "name": "Gezira"
  }, {
    "iso": "LY",
    "name": "Ghadamis"
  }, {
    "iso": "MT",
    "name": "Ghajnsielem u Kemmuna"
  }, {
    "iso": "MT",
    "name": "Ghajnsielem u Kemmuna"
  }, {
    "iso": "MT",
    "name": "Ghajnsielem u Kemmuna"
  }, {
    "iso": "MT",
    "name": "Ghajnsielem u Kemmuna"
  }, {
    "iso": "BW",
    "name": "Ghanzi"
  }, {
    "iso": "MT",
    "name": "Gharb"
  }, {
    "iso": "MA",
    "name": "Gharb - Chrarda - Béni Hssen"
  }, {
    "iso": "DZ",
    "name": "Ghardaïa"
  }, {
    "iso": "MT",
    "name": "Gharghur"
  }, {
    "iso": "MT",
    "name": "Ghasri"
  }, {
    "iso": "LY",
    "name": "Ghat"
  }, {
    "iso": "MT",
    "name": "Ghaxaq"
  }, {
    "iso": "AF",
    "name": "Ghazni"
  }, {
    "iso": "AF",
    "name": "Ghor"
  }, {
    "iso": "VN",
    "name": "Gia Lai"
  }, {
    "iso": "GI",
    "name": "Gibraltar"
  }, {
    "iso": "JP",
    "name": "Gifu"
  }, {
    "iso": "IR",
    "name": "Gilan"
  }, {
    "iso": "ES",
    "name": "Gipuzkoa"
  }, {
    "iso": "TR",
    "name": "Giresun"
  }, {
    "iso": "ES",
    "name": "Girona"
  }, {
    "iso": "FR",
    "name": "Gironde"
  }, {
    "iso": "NZ",
    "name": "Gisborne Region"
  }, {
    "iso": "BI",
    "name": "Gitega"
  }, {
    "iso": "RO",
    "name": "Giurgiu"
  }, {
    "iso": "AL",
    "name": "Gjirokastër"
  }, {
    "iso": "MK",
    "name": "Gjorce Petrov"
  }, {
    "iso": "SC",
    "name": "Glacis"
  }, {
    "iso": "CH",
    "name": "Glarus"
  }, {
    "iso": "GB",
    "name": "Glasgow City"
  }, {
    "iso": "MD",
    "name": "Glodeni"
  }, {
    "iso": "XK",
    "name": "Glogovac"
  }, {
    "iso": "GB",
    "name": "Gloucestershire"
  }, {
    "iso": "BF",
    "name": "Gnagna"
  }, {
    "iso": "MV",
    "name": "Gnaviyani"
  }, {
    "iso": "XK",
    "name": "Gnjilane"
  }, {
    "iso": "IN",
    "name": "Goa"
  }, {
    "iso": "IR",
    "name": "Golestan"
  }, {
    "iso": "UG",
    "name": "Gomba"
  }, {
    "iso": "NG",
    "name": "Gombe"
  }, {
    "iso": "BY",
    "name": "Gomel"
  }, {
    "iso": "AZ",
    "name": "Goranboy"
  }, {
    "iso": "SI",
    "name": "Gorenja vas-Poljane"
  }, {
    "iso": "MR",
    "name": "Gorgol"
  }, {
    "iso": "IT",
    "name": "Gorizia"
  }, {
    "iso": "SI",
    "name": "Gorišnica"
  }, {
    "iso": "RO",
    "name": "Gorj"
  }, {
    "iso": "SI",
    "name": "Gornja Radgona"
  }, {
    "iso": "SI",
    "name": "Gornji Grad"
  }, {
    "iso": "SI",
    "name": "Gornji Petrovci"
  }, {
    "iso": "TJ",
    "name": "Gorno-Badakhshan"
  }, {
    "iso": "ID",
    "name": "Gorontalo"
  }, {
    "iso": "MK",
    "name": "Gostivar"
  }, {
    "iso": "SE",
    "name": "Gotland"
  }, {
    "iso": "BF",
    "name": "Gourma"
  }, {
    "iso": "MN",
    "name": "Govi-Altay"
  }, {
    "iso": "MN",
    "name": "Govĭ-Sümber"
  }, {
    "iso": "HN",
    "name": "Gracias a Dios"
  }, {
    "iso": "SI",
    "name": "Grad"
  }, {
    "iso": "RS",
    "name": "Grad Beograd"
  }, {
    "iso": "HR",
    "name": "Grad Zagreb"
  }, {
    "iso": "MK",
    "name": "Gradsko"
  }, {
    "iso": "ES",
    "name": "Granada"
  }, {
    "iso": "NI",
    "name": "Granada"
  }, {
    "iso": "LR",
    "name": "Grand Bassa"
  }, {
    "iso": "LR",
    "name": "Grand Cape Mount"
  }, {
    "iso": "MA",
    "name": "Grand Casablanca"
  }, {
    "iso": "BS",
    "name": "Grand Cay"
  }, {
    "iso": "LR",
    "name": "Grand Gedeh"
  }, {
    "iso": "LR",
    "name": "Grand Kru"
  }, {
    "iso": "MU",
    "name": "Grand Port"
  }, {
    "iso": "TC",
    "name": "Grand Turk"
  }, {
    "iso": "SC",
    "name": "Grand'Anse"
  }, {
    "iso": "HT",
    "name": "Grand'Anse"
  }, {
    "iso": "SC",
    "name": "Grand'Anse Praslin"
  }, {
    "iso": "CU",
    "name": "Granma"
  }, {
    "iso": "CH",
    "name": "Graubünden"
  }, {
    "iso": "GH",
    "name": "Greater Accra"
  }, {
    "iso": "GB",
    "name": "Greenwich"
  }, {
    "iso": "VC",
    "name": "Grenadines"
  }, {
    "iso": "LU",
    "name": "Grevenmacher"
  }, {
    "iso": "LV",
    "name": "Grobinas novads"
  }, {
    "iso": "BY",
    "name": "Grodno"
  }, {
    "iso": "NL",
    "name": "Groningen"
  }, {
    "iso": "LC",
    "name": "Gros Islet"
  }, {
    "iso": "IT",
    "name": "Grosseto"
  }, {
    "iso": "SI",
    "name": "Grosuplje"
  }, {
    "iso": "ES",
    "name": "Guadalajara"
  }, {
    "iso": "SB",
    "name": "Guadalcanal"
  }, {
    "iso": "FR",
    "name": "Guadeloupe"
  }, {
    "iso": "CO",
    "name": "Guainía"
  }, {
    "iso": "PY",
    "name": "Guairá"
  }, {
    "iso": "GU",
    "name": "Guam"
  }, {
    "iso": "CR",
    "name": "Guanacaste"
  }, {
    "iso": "MX",
    "name": "Guanajuato"
  }, {
    "iso": "CN",
    "name": "Guangdong"
  }, {
    "iso": "CN",
    "name": "Guangxi"
  }, {
    "iso": "XZ",
    "name": "Guantanamo Bay USNB"
  }, {
    "iso": "CU",
    "name": "Guantánamo"
  }, {
    "iso": "PT",
    "name": "Guarda"
  }, {
    "iso": "PT",
    "name": "Guarda"
  }, {
    "iso": "GT",
    "name": "Guatemala"
  }, {
    "iso": "CO",
    "name": "Guaviare"
  }, {
    "iso": "EC",
    "name": "Guayas"
  }, {
    "iso": "MT",
    "name": "Gudja"
  }, {
    "iso": "DZ",
    "name": "Guelma"
  }, {
    "iso": "MA",
    "name": "Guelmim - Es-Semara"
  }, {
    "iso": "MX",
    "name": "Guerrero"
  }, {
    "iso": "MR",
    "name": "Guidimaka"
  }, {
    "iso": "PH",
    "name": "Guimaras"
  }, {
    "iso": "CN",
    "name": "Guizhou"
  }, {
    "iso": "IN",
    "name": "Gujarat"
  }, {
    "iso": "LV",
    "name": "Gulbenes novads"
  }, {
    "iso": "PG",
    "name": "Gulf"
  }, {
    "iso": "UG",
    "name": "Gulu"
  }, {
    "iso": "JP",
    "name": "Gunma"
  }, {
    "iso": "GE",
    "name": "Guria"
  }, {
    "iso": "FR",
    "name": "Guyane française"
  }, {
    "iso": "VE",
    "name": "Guárico"
  }, {
    "iso": "GN",
    "name": "Guéckédou"
  }, {
    "iso": "TD",
    "name": "Guéra"
  }, {
    "iso": "KR",
    "name": "Gwangju"
  }, {
    "iso": "GB",
    "name": "Gwynedd"
  }, {
    "iso": "KR",
    "name": "Gyeonggi"
  }, {
    "iso": "HU",
    "name": "Gyor-Moson-Sopron"
  }, {
    "iso": "MT",
    "name": "Gzira"
  }, {
    "iso": "SE",
    "name": "Gävleborg"
  }, {
    "iso": "AZ",
    "name": "Göyçay"
  }, {
    "iso": "TR",
    "name": "Gümüshane"
  }, {
    "iso": "LK",
    "name": "Gālla"
  }, {
    "iso": "AZ",
    "name": "Gədəbəy"
  }, {
    "iso": "AZ",
    "name": "Gəncə"
  }, {
    "iso": "BT",
    "name": "Ha"
  }, {
    "iso": "VN",
    "name": "Ha Noi"
  }, {
    "iso": "VN",
    "name": "Ha Tinh"
  }, {
    "iso": "TO",
    "name": "Ha'apai"
  }, {
    "iso": "SA",
    "name": "Ha'il"
  }, {
    "iso": "IL",
    "name": "HaDarom"
  }, {
    "iso": "IL",
    "name": "HaMerkaz"
  }, {
    "iso": "IL",
    "name": "HaZafon"
  }, {
    "iso": "MV",
    "name": "Haa Alifu"
  }, {
    "iso": "MV",
    "name": "Haa Dhaalu"
  }, {
    "iso": "GB",
    "name": "Hackney"
  }, {
    "iso": "TD",
    "name": "Hadjer-Lamis"
  }, {
    "iso": "YE",
    "name": "Hadramawt"
  }, {
    "iso": "IL",
    "name": "Haifa"
  }, {
    "iso": "CN",
    "name": "Hainan"
  }, {
    "iso": "CN",
    "name": "Hainan"
  }, {
    "iso": "BE",
    "name": "Hainaut"
  }, {
    "iso": "SI",
    "name": "Hajdina"
  }, {
    "iso": "HU",
    "name": "Hajdú-Bihar"
  }, {
    "iso": "AZ",
    "name": "Hajigabul"
  }, {
    "iso": "YE",
    "name": "Hajjah"
  }, {
    "iso": "TR",
    "name": "Hakkari"
  }, {
    "iso": "SE",
    "name": "Halland"
  }, {
    "iso": "GB",
    "name": "Halton"
  }, {
    "iso": "IR",
    "name": "Hamadan"
  }, {
    "iso": "SY",
    "name": "Hamah"
  }, {
    "iso": "LK",
    "name": "Hambantŏṭa"
  }, {
    "iso": "DE",
    "name": "Hamburg"
  }, {
    "iso": "KP",
    "name": "Hamgyŏng-bukto"
  }, {
    "iso": "KP",
    "name": "Hamgyŏng-namdo"
  }, {
    "iso": "BM",
    "name": "Hamilton"
  }, {
    "iso": "AX",
    "name": "Hammarland"
  }, {
    "iso": "GB",
    "name": "Hammersmith and Fulham"
  }, {
    "iso": "GB",
    "name": "Hampshire"
  }, {
    "iso": "MT",
    "name": "Hamrun"
  }, {
    "iso": "JM",
    "name": "Hanover"
  }, {
    "iso": "ZW",
    "name": "Harare"
  }, {
    "iso": "ET",
    "name": "Harari People"
  }, {
    "iso": "BS",
    "name": "Harbour Island"
  }, {
    "iso": "NA",
    "name": "Hardap"
  }, {
    "iso": "RO",
    "name": "Harghita"
  }, {
    "iso": "GB",
    "name": "Haringey"
  }, {
    "iso": "EE",
    "name": "Harjumaa"
  }, {
    "iso": "EE",
    "name": "Harjumaa"
  }, {
    "iso": "EE",
    "name": "Harjumaa"
  }, {
    "iso": "EE",
    "name": "Harjumaa"
  }, {
    "iso": "EE",
    "name": "Harjumaa"
  }, {
    "iso": "EE",
    "name": "Harjumaa"
  }, {
    "iso": "GB",
    "name": "Harrow"
  }, {
    "iso": "GB",
    "name": "Hartlepool"
  }, {
    "iso": "IN",
    "name": "Haryana"
  }, {
    "iso": "SY",
    "name": "Hasaka (Al Haksa)"
  }, {
    "iso": "TR",
    "name": "Hatay"
  }, {
    "iso": "DO",
    "name": "Hato Mayor"
  }, {
    "iso": "PW",
    "name": "Hatobohei"
  }, {
    "iso": "VN",
    "name": "Hau Giang"
  }, {
    "iso": "CF",
    "name": "Haut-Mbomou"
  }, {
    "iso": "GA",
    "name": "Haut-Ogooué"
  }, {
    "iso": "FR",
    "name": "Haut-Rhin"
  }, {
    "iso": "CI",
    "name": "Haut-Sassandra"
  }, {
    "iso": "MG",
    "name": "Haute Matsiatra"
  }, {
    "iso": "FR",
    "name": "Haute-Corse"
  }, {
    "iso": "FR",
    "name": "Haute-Garonne"
  }, {
    "iso": "CF",
    "name": "Haute-Kotto"
  }, {
    "iso": "FR",
    "name": "Haute-Loire"
  }, {
    "iso": "FR",
    "name": "Haute-Marne"
  }, {
    "iso": "FR",
    "name": "Haute-Savoie"
  }, {
    "iso": "FR",
    "name": "Haute-Saône"
  }, {
    "iso": "FR",
    "name": "Haute-Vienne"
  }, {
    "iso": "FR",
    "name": "Hautes-Alpes"
  }, {
    "iso": "FR",
    "name": "Hautes-Pyrénées"
  }, {
    "iso": "FR",
    "name": "Hauts-de-Seine"
  }, {
    "iso": "GB",
    "name": "Havering"
  }, {
    "iso": "US",
    "name": "Hawaii"
  }, {
    "iso": "KW",
    "name": "Hawalli"
  }, {
    "iso": "NZ",
    "name": "Hawke's Bay Region"
  }, {
    "iso": "HM",
    "name": "Heard Island and McDonald Islands"
  }, {
    "iso": "CN",
    "name": "Hebei"
  }, {
    "iso": "PS",
    "name": "Hebron"
  }, {
    "iso": "PS",
    "name": "Hebron"
  }, {
    "iso": "NO",
    "name": "Hedmark"
  }, {
    "iso": "CN",
    "name": "Heilongjiang"
  }, {
    "iso": "CN",
    "name": "Henan"
  }, {
    "iso": "MN",
    "name": "Hentiy"
  }, {
    "iso": "ME",
    "name": "Herceg Novi"
  }, {
    "iso": "CR",
    "name": "Heredia"
  }, {
    "iso": "DO",
    "name": "Hermanas"
  }, {
    "iso": "PA",
    "name": "Herrera"
  }, {
    "iso": "GB",
    "name": "Hertfordshire"
  }, {
    "iso": "BA",
    "name": "Herzegovina-Neretva"
  }, {
    "iso": "DE",
    "name": "Hessen"
  }, {
    "iso": "HU",
    "name": "Heves"
  }, {
    "iso": "SZ",
    "name": "Hhohho"
  }, {
    "iso": "MX",
    "name": "Hidalgo"
  }, {
    "iso": "GB",
    "name": "Highland"
  }, {
    "iso": "SO",
    "name": "Hiiraan"
  }, {
    "iso": "EE",
    "name": "Hiiumaa"
  }, {
    "iso": "EE",
    "name": "Hiiumaa"
  }, {
    "iso": "GB",
    "name": "Hillingdon"
  }, {
    "iso": "AF",
    "name": "Hilmand"
  }, {
    "iso": "IN",
    "name": "Himachal Pradesh"
  }, {
    "iso": "AF",
    "name": "Hirat"
  }, {
    "iso": "JP",
    "name": "Hiroshima"
  }, {
    "iso": "CZ",
    "name": "Hlavní město Praha"
  }, {
    "iso": "SI",
    "name": "Hoce-Slivnica"
  }, {
    "iso": "MR",
    "name": "Hodh ech Chargui"
  }, {
    "iso": "MR",
    "name": "Hodh el Gharbi"
  }, {
    "iso": "SI",
    "name": "Hodoš"
  }, {
    "iso": "UG",
    "name": "Hoima"
  }, {
    "iso": "JP",
    "name": "Hokkaido"
  }, {
    "iso": "CU",
    "name": "Holguín"
  }, {
    "iso": "SY",
    "name": "Homs (Hims)"
  }, {
    "iso": "BS",
    "name": "Hope Town"
  }, {
    "iso": "NO",
    "name": "Hordaland"
  }, {
    "iso": "SI",
    "name": "Horjul"
  }, {
    "iso": "IR",
    "name": "Hormozgan"
  }, {
    "iso": "LA",
    "name": "Houaphan"
  }, {
    "iso": "BF",
    "name": "Houet"
  }, {
    "iso": "GB",
    "name": "Hounslow"
  }, {
    "iso": "MN",
    "name": "Hovd"
  }, {
    "iso": "DK",
    "name": "Hovedstaden"
  }, {
    "iso": "UM",
    "name": "Howland Island"
  }, {
    "iso": "SI",
    "name": "Hrastnik"
  }, {
    "iso": "SI",
    "name": "Hrpelje-Kozina"
  }, {
    "iso": "TW",
    "name": "Hsinchu"
  }, {
    "iso": "TW",
    "name": "Hsinchu City"
  }, {
    "iso": "TW",
    "name": "Hualien"
  }, {
    "iso": "AO",
    "name": "Huambo"
  }, {
    "iso": "PE",
    "name": "Huancavelica"
  }, {
    "iso": "CN",
    "name": "Hubei"
  }, {
    "iso": "GT",
    "name": "Huehuetenango"
  }, {
    "iso": "ES",
    "name": "Huelva"
  }, {
    "iso": "ES",
    "name": "Huesca"
  }, {
    "iso": "CO",
    "name": "Huila"
  }, {
    "iso": "CN",
    "name": "Hunan"
  }, {
    "iso": "RO",
    "name": "Hunedoara"
  }, {
    "iso": "PE",
    "name": "Huánuco"
  }, {
    "iso": "AO",
    "name": "Huíla"
  }, {
    "iso": "KP",
    "name": "Hwanghae-bukto"
  }, {
    "iso": "KP",
    "name": "Hwanghae-namdo"
  }, {
    "iso": "JP",
    "name": "Hyōgo"
  }, {
    "iso": "VN",
    "name": "Hà Giang"
  }, {
    "iso": "VN",
    "name": "Hà Nam"
  }, {
    "iso": "FR",
    "name": "Hérault"
  }, {
    "iso": "MD",
    "name": "Hînceşti"
  }, {
    "iso": "VN",
    "name": "Hòa Bình"
  }, {
    "iso": "IS",
    "name": "Höfuðborgarsvæði"
  }, {
    "iso": "MN",
    "name": "Hövsgöl"
  }, {
    "iso": "VN",
    "name": "Hải Dương"
  }, {
    "iso": "VN",
    "name": "Hải Phòng"
  }, {
    "iso": "VN",
    "name": "Hồ Chí Minh city"
  }, {
    "iso": "RO",
    "name": "Ialomiţa"
  }, {
    "iso": "MD",
    "name": "Ialoveni"
  }, {
    "iso": "RO",
    "name": "Iaşi"
  }, {
    "iso": "UG",
    "name": "Ibanda"
  }, {
    "iso": "JP",
    "name": "Ibaraki"
  }, {
    "iso": "YE",
    "name": "Ibb"
  }, {
    "iso": "PE",
    "name": "Ica"
  }, {
    "iso": "EE",
    "name": "Ida-Virumaa"
  }, {
    "iso": "US",
    "name": "Idaho"
  }, {
    "iso": "SY",
    "name": "Idlib"
  }, {
    "iso": "SI",
    "name": "Idrija"
  }, {
    "iso": "LV",
    "name": "Iecavas novads"
  }, {
    "iso": "PH",
    "name": "Ifugao"
  }, {
    "iso": "SI",
    "name": "Ig"
  }, {
    "iso": "UG",
    "name": "Iganga"
  }, {
    "iso": "MG",
    "name": "Ihorombe"
  }, {
    "iso": "NR",
    "name": "Ijuw"
  }, {
    "iso": "MT",
    "name": "Iklin"
  }, {
    "iso": "LV",
    "name": "Ikškiles novads"
  }, {
    "iso": "IR",
    "name": "Ilam"
  }, {
    "iso": "TF",
    "name": "Iles Eparses de l'ocean Indien"
  }, {
    "iso": "TF",
    "name": "Iles Saint-Paul et Nouvelle-Amsterdam"
  }, {
    "iso": "RO",
    "name": "Ilfov"
  }, {
    "iso": "PT",
    "name": "Ilha Terceira"
  }, {
    "iso": "PT",
    "name": "Ilha da Graciosa"
  }, {
    "iso": "PT",
    "name": "Ilha da Madeira"
  }, {
    "iso": "PT",
    "name": "Ilha da Madeira"
  }, {
    "iso": "PT",
    "name": "Ilha da Madeira"
  }, {
    "iso": "PT",
    "name": "Ilha da Madeira"
  }, {
    "iso": "PT",
    "name": "Ilha das Flores"
  }, {
    "iso": "PT",
    "name": "Ilha de Porto Santo"
  }, {
    "iso": "PT",
    "name": "Ilha de Santa Maria"
  }, {
    "iso": "PT",
    "name": "Ilha de São Jorge"
  }, {
    "iso": "PT",
    "name": "Ilha de São Miguel"
  }, {
    "iso": "PT",
    "name": "Ilha do Corvo"
  }, {
    "iso": "PT",
    "name": "Ilha do Faial"
  }, {
    "iso": "PT",
    "name": "Ilha do Pico"
  }, {
    "iso": "PH",
    "name": "Iligan"
  }, {
    "iso": "MK",
    "name": "Ilinden"
  }, {
    "iso": "SI",
    "name": "Ilirska Bistrica"
  }, {
    "iso": "FR",
    "name": "Ille-et-Vilaine"
  }, {
    "iso": "ES",
    "name": "Illes Balears"
  }, {
    "iso": "US",
    "name": "Illinois"
  }, {
    "iso": "DZ",
    "name": "Illizi"
  }, {
    "iso": "PH",
    "name": "Ilocos Norte"
  }, {
    "iso": "PH",
    "name": "Ilocos Sur"
  }, {
    "iso": "PH",
    "name": "Iloilo"
  }, {
    "iso": "PH",
    "name": "Iloilo"
  }, {
    "iso": "LV",
    "name": "Ilukstes novads"
  }, {
    "iso": "EC",
    "name": "Imbabura"
  }, {
    "iso": "GE",
    "name": "Imereti"
  }, {
    "iso": "NG",
    "name": "Imo"
  }, {
    "iso": "IT",
    "name": "Imperia"
  }, {
    "iso": "BS",
    "name": "Inagua"
  }, {
    "iso": "KR",
    "name": "Incheon"
  }, {
    "iso": "MR",
    "name": "Inchiri"
  }, {
    "iso": "LV",
    "name": "Incukalna novads"
  }, {
    "iso": "DO",
    "name": "Independencia"
  }, {
    "iso": "US",
    "name": "Indiana"
  }, {
    "iso": "FR",
    "name": "Indre"
  }, {
    "iso": "FR",
    "name": "Indre-et-Loire"
  }, {
    "iso": "MZ",
    "name": "Inhambane"
  }, {
    "iso": "HR",
    "name": "Inland waters of Croatia"
  }, {
    "iso": "CN",
    "name": "Inner Mongol"
  }, {
    "iso": "HN",
    "name": "Intibucá"
  }, {
    "iso": "GB",
    "name": "Inverclyde"
  }, {
    "iso": "BF",
    "name": "Ioba"
  }, {
    "iso": "US",
    "name": "Iowa"
  }, {
    "iso": "JO",
    "name": "Irbid"
  }, {
    "iso": "ID",
    "name": "Irian Jaya Barat"
  }, {
    "iso": "TZ",
    "name": "Iringa"
  }, {
    "iso": "SB",
    "name": "Isabel"
  }, {
    "iso": "PH",
    "name": "Isabela"
  }, {
    "iso": "PH",
    "name": "Isabela"
  }, {
    "iso": "IT",
    "name": "Isernia"
  }, {
    "iso": "JP",
    "name": "Ishikawa"
  }, {
    "iso": "UG",
    "name": "Isingiro"
  }, {
    "iso": "MT",
    "name": "Isla (Citta' Invicta)"
  }, {
    "iso": "CU",
    "name": "Isla de la Juventud"
  }, {
    "iso": "AI",
    "name": "Island Harbour"
  }, {
    "iso": "HK",
    "name": "Islands"
  }, {
    "iso": "HN",
    "name": "Islas de la Bahía"
  }, {
    "iso": "GB",
    "name": "Isle of Anglesey"
  }, {
    "iso": "IM",
    "name": "Isle of Man"
  }, {
    "iso": "GB",
    "name": "Isle of Wight"
  }, {
    "iso": "GB",
    "name": "Isles of Scilly"
  }, {
    "iso": "GB",
    "name": "Islington"
  }, {
    "iso": "TR",
    "name": "Isparta"
  }, {
    "iso": "TR",
    "name": "Istanbul"
  }, {
    "iso": "HR",
    "name": "Istarska županija"
  }, {
    "iso": "XK",
    "name": "Istok"
  }, {
    "iso": "FR",
    "name": "Isère"
  }, {
    "iso": "PY",
    "name": "Itapúa"
  }, {
    "iso": "MG",
    "name": "Itasy"
  }, {
    "iso": "SI",
    "name": "Ivancna Gorica"
  }, {
    "iso": "JP",
    "name": "Iwate"
  }, {
    "iso": "GT",
    "name": "Izabal"
  }, {
    "iso": "TR",
    "name": "Izmir"
  }, {
    "iso": "SI",
    "name": "Izola"
  }, {
    "iso": "TR",
    "name": "Iğdir"
  }, {
    "iso": "RS",
    "name": "Jablanički upravni okrug"
  }, {
    "iso": "ID",
    "name": "Jakarta Raya"
  }, {
    "iso": "KG",
    "name": "Jalal-Abad"
  }, {
    "iso": "GT",
    "name": "Jalapa"
  }, {
    "iso": "MX",
    "name": "Jalisco"
  }, {
    "iso": "ID",
    "name": "Jambi"
  }, {
    "iso": "IN",
    "name": "Jammu and Kashmir"
  }, {
    "iso": "NP",
    "name": "Janakpur"
  }, {
    "iso": "EG",
    "name": "Janub Sina'"
  }, {
    "iso": "JO",
    "name": "Jarash"
  }, {
    "iso": "UM",
    "name": "Jarvis Island"
  }, {
    "iso": "LV",
    "name": "Jaunjelgavas novads"
  }, {
    "iso": "LV",
    "name": "Jaunpiepalgas novads"
  }, {
    "iso": "LV",
    "name": "Jaunpils novads"
  }, {
    "iso": "ID",
    "name": "Jawa Barat"
  }, {
    "iso": "ID",
    "name": "Jawa Tengah"
  }, {
    "iso": "ID",
    "name": "Jawa Timur"
  }, {
    "iso": "AF",
    "name": "Jawzjan"
  }, {
    "iso": "ES",
    "name": "Jaén"
  }, {
    "iso": "MK",
    "name": "Jegunovce"
  }, {
    "iso": "KR",
    "name": "Jeju"
  }, {
    "iso": "LV",
    "name": "Jekabpils"
  }, {
    "iso": "LV",
    "name": "Jekabpils novads"
  }, {
    "iso": "LV",
    "name": "Jelgava"
  }, {
    "iso": "LV",
    "name": "Jelgavas novads"
  }, {
    "iso": "TN",
    "name": "Jendouba"
  }, {
    "iso": "PS",
    "name": "Jenin"
  }, {
    "iso": "PS",
    "name": "Jericho"
  }, {
    "iso": "JE",
    "name": "Jersey"
  }, {
    "iso": "IL",
    "name": "Jerusalem"
  }, {
    "iso": "PS",
    "name": "Jerusalem"
  }, {
    "iso": "SI",
    "name": "Jesenice"
  }, {
    "iso": "SI",
    "name": "Jezersko"
  }, {
    "iso": "IN",
    "name": "Jharkhand"
  }, {
    "iso": "CN",
    "name": "Jiangsu"
  }, {
    "iso": "CN",
    "name": "Jiangxi"
  }, {
    "iso": "NG",
    "name": "Jigawa"
  }, {
    "iso": "CZ",
    "name": "Jihomoravský"
  }, {
    "iso": "CZ",
    "name": "Jihočeský"
  }, {
    "iso": "DZ",
    "name": "Jijel"
  }, {
    "iso": "CN",
    "name": "Jilin"
  }, {
    "iso": "UG",
    "name": "Jinja"
  }, {
    "iso": "NI",
    "name": "Jinotega"
  }, {
    "iso": "SA",
    "name": "Jizan"
  }, {
    "iso": "UZ",
    "name": "Jizzakh"
  }, {
    "iso": "UM",
    "name": "Johnston Atoll"
  }, {
    "iso": "MY",
    "name": "Johor"
  }, {
    "iso": "AX",
    "name": "Jomala"
  }, {
    "iso": "SO",
    "name": "Jubbada Dhexe"
  }, {
    "iso": "SO",
    "name": "Jubbada Hoose"
  }, {
    "iso": "AR",
    "name": "Jujuy"
  }, {
    "iso": "SS",
    "name": "Jungoli"
  }, {
    "iso": "PE",
    "name": "Junín"
  }, {
    "iso": "FR",
    "name": "Jura"
  }, {
    "iso": "CH",
    "name": "Jura"
  }, {
    "iso": "LV",
    "name": "Jurmala"
  }, {
    "iso": "SI",
    "name": "Juršinci"
  }, {
    "iso": "GT",
    "name": "Jutiapa"
  }, {
    "iso": "RS",
    "name": "Južnobanatski upravni okrug"
  }, {
    "iso": "RS",
    "name": "Južnobački upravni okrug"
  }, {
    "iso": "BW",
    "name": "Jwaneng"
  }, {
    "iso": "HU",
    "name": "Jász-Nagykun-Szolnok"
  }, {
    "iso": "SE",
    "name": "Jämtland"
  }, {
    "iso": "SE",
    "name": "Jämtland"
  }, {
    "iso": "EE",
    "name": "Järvamaa"
  }, {
    "iso": "EE",
    "name": "Jõgevamaa"
  }, {
    "iso": "SE",
    "name": "Jönköping"
  }, {
    "iso": "TR",
    "name": "K. Maras"
  }, {
    "iso": "UG",
    "name": "Kaabong"
  }, {
    "iso": "MV",
    "name": "Kaafu"
  }, {
    "iso": "UG",
    "name": "Kabale"
  }, {
    "iso": "UG",
    "name": "Kabarole"
  }, {
    "iso": "UG",
    "name": "Kaberamaido"
  }, {
    "iso": "AF",
    "name": "Kabul"
  }, {
    "iso": "MM",
    "name": "Kachin"
  }, {
    "iso": "BF",
    "name": "Kadiogo"
  }, {
    "iso": "NG",
    "name": "Kaduna"
  }, {
    "iso": "SN",
    "name": "Kaffrine"
  }, {
    "iso": "EG",
    "name": "Kafr ash Shaykh"
  }, {
    "iso": "JP",
    "name": "Kagawa"
  }, {
    "iso": "TZ",
    "name": "Kagera"
  }, {
    "iso": "JP",
    "name": "Kagoshima"
  }, {
    "iso": "FI",
    "name": "Kainuu"
  }, {
    "iso": "TN",
    "name": "Kairouan"
  }, {
    "iso": "GE",
    "name": "Kakheti"
  }, {
    "iso": "UG",
    "name": "Kalangala"
  }, {
    "iso": "TH",
    "name": "Kalasin"
  }, {
    "iso": "ID",
    "name": "Kalimantan Barat"
  }, {
    "iso": "ID",
    "name": "Kalimantan Selatan"
  }, {
    "iso": "ID",
    "name": "Kalimantan Tengah"
  }, {
    "iso": "ID",
    "name": "Kalimantan Timur"
  }, {
    "iso": "PH",
    "name": "Kalinga"
  }, {
    "iso": "UG",
    "name": "Kaliro"
  }, {
    "iso": "MT",
    "name": "Kalkara"
  }, {
    "iso": "SE",
    "name": "Kalmar"
  }, {
    "iso": "UG",
    "name": "Kalungu"
  }, {
    "iso": "SI",
    "name": "Kamnik"
  }, {
    "iso": "UG",
    "name": "Kampala"
  }, {
    "iso": "TH",
    "name": "Kamphaeng Phet"
  }, {
    "iso": "UG",
    "name": "Kamuli"
  }, {
    "iso": "UG",
    "name": "Kamwenge"
  }, {
    "iso": "JP",
    "name": "Kanagawa"
  }, {
    "iso": "SI",
    "name": "Kanal"
  }, {
    "iso": "TH",
    "name": "Kanchanaburi"
  }, {
    "iso": "AF",
    "name": "Kandahar"
  }, {
    "iso": "LV",
    "name": "Kandavas novads"
  }, {
    "iso": "TD",
    "name": "Kanem"
  }, {
    "iso": "AZ",
    "name": "Kangarli"
  }, {
    "iso": "KP",
    "name": "Kangwŏn-do"
  }, {
    "iso": "GN",
    "name": "Kankan"
  }, {
    "iso": "NG",
    "name": "Kano"
  }, {
    "iso": "US",
    "name": "Kansas"
  }, {
    "iso": "UG",
    "name": "Kanungu"
  }, {
    "iso": "TW",
    "name": "Kaohsiung City"
  }, {
    "iso": "SN",
    "name": "Kaolack"
  }, {
    "iso": "UG",
    "name": "Kapchorwa"
  }, {
    "iso": "AF",
    "name": "Kapisa"
  }, {
    "iso": "TG",
    "name": "Kara"
  }, {
    "iso": "TR",
    "name": "Karabük"
  }, {
    "iso": "JO",
    "name": "Karak"
  }, {
    "iso": "UZ",
    "name": "Karakalpakstan"
  }, {
    "iso": "TR",
    "name": "Karaman"
  }, {
    "iso": "NA",
    "name": "Karas"
  }, {
    "iso": "IQ",
    "name": "Karbala'"
  }, {
    "iso": "MK",
    "name": "Karbinci"
  }, {
    "iso": "HR",
    "name": "Karlovacka županija"
  }, {
    "iso": "CZ",
    "name": "Karlovarský"
  }, {
    "iso": "NP",
    "name": "Karnali"
  }, {
    "iso": "IN",
    "name": "Karnataka"
  }, {
    "iso": "MK",
    "name": "Karpoš"
  }, {
    "iso": "TR",
    "name": "Kars"
  }, {
    "iso": "LV",
    "name": "Karsavas novads"
  }, {
    "iso": "BI",
    "name": "Karuzi"
  }, {
    "iso": "CD",
    "name": "Kasaï-Occidental"
  }, {
    "iso": "CD",
    "name": "Kasaï-Oriental"
  }, {
    "iso": "UG",
    "name": "Kasese"
  }, {
    "iso": "UZ",
    "name": "Kashkadarya"
  }, {
    "iso": "XX",
    "name": "Kashmir"
  }, {
    "iso": "TZ",
    "name": "Kaskazini-Pemba"
  }, {
    "iso": "TZ",
    "name": "Kaskazini-Unguja"
  }, {
    "iso": "SD",
    "name": "Kassala"
  }, {
    "iso": "TN",
    "name": "Kassérine"
  }, {
    "iso": "TR",
    "name": "Kastamonu"
  }, {
    "iso": "MW",
    "name": "Kasungu"
  }, {
    "iso": "UG",
    "name": "Katakwi"
  }, {
    "iso": "CD",
    "name": "Katanga"
  }, {
    "iso": "TZ",
    "name": "Katavi"
  }, {
    "iso": "NG",
    "name": "Katsina"
  }, {
    "iso": "LT",
    "name": "Kaunas"
  }, {
    "iso": "MK",
    "name": "Kavadartsi"
  }, {
    "iso": "NA",
    "name": "Kavango"
  }, {
    "iso": "MM",
    "name": "Kayah"
  }, {
    "iso": "PW",
    "name": "Kayangel"
  }, {
    "iso": "BI",
    "name": "Kayanza"
  }, {
    "iso": "ML",
    "name": "Kayes"
  }, {
    "iso": "MM",
    "name": "Kayin"
  }, {
    "iso": "TR",
    "name": "Kayseri"
  }, {
    "iso": "UG",
    "name": "Kayunga"
  }, {
    "iso": "KH",
    "name": "Kaôh Kong"
  }, {
    "iso": "XK",
    "name": "Kačanik"
  }, {
    "iso": "LK",
    "name": "Kaḷutara"
  }, {
    "iso": "NG",
    "name": "Kebbi"
  }, {
    "iso": "TN",
    "name": "Kebili"
  }, {
    "iso": "MY",
    "name": "Kedah"
  }, {
    "iso": "TW",
    "name": "Keelung City"
  }, {
    "iso": "LV",
    "name": "Keguma novads"
  }, {
    "iso": "LV",
    "name": "Kekavas novads"
  }, {
    "iso": "MY",
    "name": "Kelantan"
  }, {
    "iso": "GB",
    "name": "Kensington and Chelsea"
  }, {
    "iso": "GB",
    "name": "Kent"
  }, {
    "iso": "US",
    "name": "Kentucky"
  }, {
    "iso": "KH",
    "name": "Kep"
  }, {
    "iso": "ID",
    "name": "Kepulauan Riau"
  }, {
    "iso": "IN",
    "name": "Kerala"
  }, {
    "iso": "MT",
    "name": "Kercem"
  }, {
    "iso": "IR",
    "name": "Kerman"
  }, {
    "iso": "IR",
    "name": "Kermanshah"
  }, {
    "iso": "IE",
    "name": "Kerry"
  }, {
    "iso": "IE",
    "name": "Kerry"
  }, {
    "iso": "IE",
    "name": "Kerry"
  }, {
    "iso": "BW",
    "name": "Kgalagadi"
  }, {
    "iso": "BW",
    "name": "Kgatleng"
  }, {
    "iso": "LA",
    "name": "Khammouan"
  }, {
    "iso": "PS",
    "name": "Khan Younis"
  }, {
    "iso": "SD",
    "name": "Khartoum"
  }, {
    "iso": "TJ",
    "name": "Khatlon"
  }, {
    "iso": "DZ",
    "name": "Khenchela"
  }, {
    "iso": "NA",
    "name": "Khomas"
  }, {
    "iso": "TH",
    "name": "Khon Kaen"
  }, {
    "iso": "UZ",
    "name": "Khorezm"
  }, {
    "iso": "AF",
    "name": "Khost"
  }, {
    "iso": "BD",
    "name": "Khulna"
  }, {
    "iso": "IR",
    "name": "Khuzestan"
  }, {
    "iso": "VN",
    "name": "Khánh Hòa"
  }, {
    "iso": "UG",
    "name": "Kibale"
  }, {
    "iso": "UG",
    "name": "Kiboga"
  }, {
    "iso": "UG",
    "name": "Kibuku"
  }, {
    "iso": "MK",
    "name": "Kicevo"
  }, {
    "iso": "ML",
    "name": "Kidal"
  }, {
    "iso": "SI",
    "name": "Kidricevo"
  }, {
    "iso": "RW",
    "name": "Kigali City"
  }, {
    "iso": "TZ",
    "name": "Kigoma"
  }, {
    "iso": "IE",
    "name": "Kildare"
  }, {
    "iso": "TZ",
    "name": "Kilimanjaro"
  }, {
    "iso": "LK",
    "name": "Kilinŏchchi"
  }, {
    "iso": "TR",
    "name": "Kilis"
  }, {
    "iso": "IE",
    "name": "Kilkenny"
  }, {
    "iso": "GN",
    "name": "Kindia"
  }, {
    "iso": "UM",
    "name": "Kingman Reef"
  }, {
    "iso": "JM",
    "name": "Kingston"
  }, {
    "iso": "GB",
    "name": "Kingston upon Thames"
  }, {
    "iso": "TR",
    "name": "Kinkkale"
  }, {
    "iso": "TW",
    "name": "Kinmen"
  }, {
    "iso": "CD",
    "name": "Kinshasa City"
  }, {
    "iso": "KI",
    "name": "Kiribati"
  }, {
    "iso": "TR",
    "name": "Kirklareli"
  }, {
    "iso": "GB",
    "name": "Kirklees"
  }, {
    "iso": "MT",
    "name": "Kirkop"
  }, {
    "iso": "TR",
    "name": "Kirsehir"
  }, {
    "iso": "BI",
    "name": "Kirundo"
  }, {
    "iso": "UG",
    "name": "Kiryandongo"
  }, {
    "iso": "MK",
    "name": "Kisela Voda"
  }, {
    "iso": "UG",
    "name": "Kisoro"
  }, {
    "iso": "GN",
    "name": "Kissidougou"
  }, {
    "iso": "UG",
    "name": "Kitgum"
  }, {
    "iso": "GQ",
    "name": "Kié-Ntem"
  }, {
    "iso": "VN",
    "name": "Kiên Giang"
  }, {
    "iso": "LT",
    "name": "Klaipeda"
  }, {
    "iso": "XK",
    "name": "Klina"
  }, {
    "iso": "GB",
    "name": "Knowsley"
  }, {
    "iso": "SI",
    "name": "Kobarid"
  }, {
    "iso": "SI",
    "name": "Kobilje"
  }, {
    "iso": "UG",
    "name": "Koboko"
  }, {
    "iso": "TR",
    "name": "Kocaeli"
  }, {
    "iso": "MK",
    "name": "Kocani"
  }, {
    "iso": "LV",
    "name": "Kocenu novads"
  }, {
    "iso": "SI",
    "name": "Kocevje"
  }, {
    "iso": "JP",
    "name": "Kochi"
  }, {
    "iso": "NG",
    "name": "Kogi"
  }, {
    "iso": "IR",
    "name": "Kohgiluyeh and Buyer Ahmad"
  }, {
    "iso": "LV",
    "name": "Kokneses novads"
  }, {
    "iso": "ME",
    "name": "Kolašin"
  }, {
    "iso": "SN",
    "name": "Kolda"
  }, {
    "iso": "UG",
    "name": "Kole"
  }, {
    "iso": "RS",
    "name": "Kolubarski upravni okrug"
  }, {
    "iso": "SI",
    "name": "Komen"
  }, {
    "iso": "SI",
    "name": "Komenda"
  }, {
    "iso": "GL",
    "name": "Kommune Kujalleq"
  }, {
    "iso": "GL",
    "name": "Kommuneqarfik Sermersooq"
  }, {
    "iso": "BF",
    "name": "Komondjari"
  }, {
    "iso": "BF",
    "name": "Komoé"
  }, {
    "iso": "BF",
    "name": "Kompienga"
  }, {
    "iso": "HU",
    "name": "Komárom-Esztergom"
  }, {
    "iso": "VN",
    "name": "Kon Tum"
  }, {
    "iso": "MK",
    "name": "Konce"
  }, {
    "iso": "TR",
    "name": "Konya"
  }, {
    "iso": "SI",
    "name": "Koper"
  }, {
    "iso": "HR",
    "name": "Koprivnicko-križevacka županija"
  }, {
    "iso": "IR",
    "name": "Kordestan"
  }, {
    "iso": "PW",
    "name": "Koror"
  }, {
    "iso": "AL",
    "name": "Korçë"
  }, {
    "iso": "XK",
    "name": "Kosovo Polje"
  }, {
    "iso": "XK",
    "name": "Kosovska Kamenica"
  }, {
    "iso": "XK",
    "name": "Kosovska Mitrovica"
  }, {
    "iso": "FM",
    "name": "Kosrae"
  }, {
    "iso": "BF",
    "name": "Kossi"
  }, {
    "iso": "SI",
    "name": "Kostel"
  }, {
    "iso": "AM",
    "name": "Kotayk"
  }, {
    "iso": "UG",
    "name": "Kotido"
  }, {
    "iso": "ME",
    "name": "Kotor"
  }, {
    "iso": "GN",
    "name": "Koubia"
  }, {
    "iso": "BJ",
    "name": "Kouffo"
  }, {
    "iso": "CG",
    "name": "Kouilou"
  }, {
    "iso": "ML",
    "name": "Koulikoro"
  }, {
    "iso": "BF",
    "name": "Koulpélogo"
  }, {
    "iso": "GN",
    "name": "Koundara"
  }, {
    "iso": "BF",
    "name": "Kouritenga"
  }, {
    "iso": "GN",
    "name": "Kouroussa"
  }, {
    "iso": "BF",
    "name": "Kourwéogo"
  }, {
    "iso": "HK",
    "name": "Kowloon City"
  }, {
    "iso": "SI",
    "name": "Kozje"
  }, {
    "iso": "SK",
    "name": "Košický kraj"
  }, {
    "iso": "TH",
    "name": "Krabi"
  }, {
    "iso": "SI",
    "name": "Kranj"
  }, {
    "iso": "SI",
    "name": "Kranjska Gora"
  }, {
    "iso": "HR",
    "name": "Krapinsko-zagorska županija"
  }, {
    "iso": "LV",
    "name": "Kraslavas novads"
  }, {
    "iso": "MK",
    "name": "Kratovo"
  }, {
    "iso": "LV",
    "name": "Krimuldas novads"
  }, {
    "iso": "MK",
    "name": "Kriva Palanka"
  }, {
    "iso": "MK",
    "name": "Krivogaštani"
  }, {
    "iso": "SI",
    "name": "Križevci"
  }, {
    "iso": "KH",
    "name": "Krong Pailin"
  }, {
    "iso": "KH",
    "name": "Krong Preah Sihanouk"
  }, {
    "iso": "SE",
    "name": "Kronoberg"
  }, {
    "iso": "SI",
    "name": "Krsko"
  }, {
    "iso": "LV",
    "name": "Krustpils novads"
  }, {
    "iso": "MK",
    "name": "Kruševo"
  }, {
    "iso": "CZ",
    "name": "Královéhradecký"
  }, {
    "iso": "KH",
    "name": "Krâchéh"
  }, {
    "iso": "SI",
    "name": "Krško"
  }, {
    "iso": "MY",
    "name": "Kuala Lumpur"
  }, {
    "iso": "PL",
    "name": "Kujawsko-pomorskie"
  }, {
    "iso": "AL",
    "name": "Kukës"
  }, {
    "iso": "LV",
    "name": "Kuldigas novads"
  }, {
    "iso": "JP",
    "name": "Kumamoto"
  }, {
    "iso": "MK",
    "name": "Kumanovo"
  }, {
    "iso": "UG",
    "name": "Kumi"
  }, {
    "iso": "AX",
    "name": "Kumlinge"
  }, {
    "iso": "PA",
    "name": "Kuna Yala"
  }, {
    "iso": "AF",
    "name": "Kunar"
  }, {
    "iso": "AF",
    "name": "Kunduz"
  }, {
    "iso": "NA",
    "name": "Kunene"
  }, {
    "iso": "SI",
    "name": "Kungota"
  }, {
    "iso": "LK",
    "name": "Kuruṇægala"
  }, {
    "iso": "TZ",
    "name": "Kusini-Pemba"
  }, {
    "iso": "SI",
    "name": "Kuzma"
  }, {
    "iso": "GE",
    "name": "Kvemo Kartli"
  }, {
    "iso": "HK",
    "name": "Kwai Tsing"
  }, {
    "iso": "NG",
    "name": "Kwara"
  }, {
    "iso": "ZA",
    "name": "Kwazulu-Natal"
  }, {
    "iso": "UG",
    "name": "Kween"
  }, {
    "iso": "BW",
    "name": "Kweneng"
  }, {
    "iso": "HK",
    "name": "Kwun Tong"
  }, {
    "iso": "UG",
    "name": "Kyankwanzi"
  }, {
    "iso": "UG",
    "name": "Kyegegwa"
  }, {
    "iso": "UG",
    "name": "Kyenjojo"
  }, {
    "iso": "FI",
    "name": "Kymenlaakso"
  }, {
    "iso": "JP",
    "name": "Kyoto"
  }, {
    "iso": "KH",
    "name": "Kâmpóng Cham"
  }, {
    "iso": "KH",
    "name": "Kâmpóng Chhnang"
  }, {
    "iso": "KH",
    "name": "Kâmpóng Spœ"
  }, {
    "iso": "KH",
    "name": "Kâmpóng Thum"
  }, {
    "iso": "KH",
    "name": "Kâmpôt"
  }, {
    "iso": "KH",
    "name": "Kândal"
  }, {
    "iso": "AT",
    "name": "Kärnten"
  }, {
    "iso": "LK",
    "name": "Kægalla"
  }, {
    "iso": "SN",
    "name": "Kédougou"
  }, {
    "iso": "CF",
    "name": "Kémo"
  }, {
    "iso": "BF",
    "name": "Kénédougou"
  }, {
    "iso": "GN",
    "name": "Kérouané"
  }, {
    "iso": "AX",
    "name": "Kökar"
  }, {
    "iso": "AZ",
    "name": "Kürdəmir"
  }, {
    "iso": "TR",
    "name": "Kütahya"
  }, {
    "iso": "LK",
    "name": "Kŏḷamba"
  }, {
    "iso": "AZ",
    "name": "Kəlbəcər"
  }, {
    "iso": "IT",
    "name": "L'Aquila"
  }, {
    "iso": "HT",
    "name": "L'Artibonite"
  }, {
    "iso": "DO",
    "name": "La Altagracia"
  }, {
    "iso": "SC",
    "name": "La Digue and Inner Islands"
  }, {
    "iso": "DO",
    "name": "La Estrelleta"
  }, {
    "iso": "CO",
    "name": "La Guajira"
  }, {
    "iso": "SV",
    "name": "La Libertad"
  }, {
    "iso": "PE",
    "name": "La Libertad"
  }, {
    "iso": "AD",
    "name": "La Massana"
  }, {
    "iso": "AR",
    "name": "La Pampa"
  }, {
    "iso": "SV",
    "name": "La Paz"
  }, {
    "iso": "BO",
    "name": "La Paz"
  }, {
    "iso": "HN",
    "name": "La Paz"
  }, {
    "iso": "AR",
    "name": "La Rioja"
  }, {
    "iso": "ES",
    "name": "La Rioja"
  }, {
    "iso": "DO",
    "name": "La Romana"
  }, {
    "iso": "FR",
    "name": "La Réunion"
  }, {
    "iso": "IT",
    "name": "La Spezia"
  }, {
    "iso": "PH",
    "name": "La Union"
  }, {
    "iso": "SV",
    "name": "La Unión"
  }, {
    "iso": "DO",
    "name": "La Vega"
  }, {
    "iso": "MV",
    "name": "Laamu"
  }, {
    "iso": "LC",
    "name": "Laborie"
  }, {
    "iso": "MY",
    "name": "Labuan"
  }, {
    "iso": "GN",
    "name": "Labé"
  }, {
    "iso": "TD",
    "name": "Lac"
  }, {
    "iso": "CI",
    "name": "Lacs"
  }, {
    "iso": "AF",
    "name": "Laghman"
  }, {
    "iso": "DZ",
    "name": "Laghouat"
  }, {
    "iso": "NG",
    "name": "Lagos"
  }, {
    "iso": "PH",
    "name": "Laguna"
  }, {
    "iso": "CI",
    "name": "Lagunes"
  }, {
    "iso": "YE",
    "name": "Lahij"
  }, {
    "iso": "VN",
    "name": "Lai Chau"
  }, {
    "iso": "SS",
    "name": "Lakes"
  }, {
    "iso": "XX",
    "name": "Lakshadweep"
  }, {
    "iso": "IN",
    "name": "Lakshadweep"
  }, {
    "iso": "PE",
    "name": "Lambayeque"
  }, {
    "iso": "GB",
    "name": "Lambeth"
  }, {
    "iso": "TH",
    "name": "Lampang"
  }, {
    "iso": "TH",
    "name": "Lamphun"
  }, {
    "iso": "ID",
    "name": "Lampung"
  }, {
    "iso": "UG",
    "name": "Lamwo"
  }, {
    "iso": "PH",
    "name": "Lanao del Norte"
  }, {
    "iso": "PH",
    "name": "Lanao del Sur"
  }, {
    "iso": "GB",
    "name": "Lancashire"
  }, {
    "iso": "FR",
    "name": "Landes"
  }, {
    "iso": "AZ",
    "name": "Lankaran"
  }, {
    "iso": "AZ",
    "name": "Lankaran"
  }, {
    "iso": "AZ",
    "name": "Lankaran"
  }, {
    "iso": "IE",
    "name": "Laois"
  }, {
    "iso": "FI",
    "name": "Lapland"
  }, {
    "iso": "PH",
    "name": "Lapu-Lapu"
  }, {
    "iso": "VE",
    "name": "Lara"
  }, {
    "iso": "GB",
    "name": "Larne"
  }, {
    "iso": "ES",
    "name": "Las Palmas"
  }, {
    "iso": "PH",
    "name": "Las Pinas"
  }, {
    "iso": "CU",
    "name": "Las Tunas"
  }, {
    "iso": "IT",
    "name": "Latina"
  }, {
    "iso": "SY",
    "name": "Lattakia"
  }, {
    "iso": "TL",
    "name": "Lautem"
  }, {
    "iso": "UY",
    "name": "Lavalleja"
  }, {
    "iso": "MA",
    "name": "Laâyoune - Boujdour - Sakia El Hamra"
  }, {
    "iso": "SI",
    "name": "Laško"
  }, {
    "iso": "TN",
    "name": "Le Kef"
  }, {
    "iso": "IT",
    "name": "Lecce"
  }, {
    "iso": "IT",
    "name": "Lecco"
  }, {
    "iso": "GB",
    "name": "Leeds"
  }, {
    "iso": "PF",
    "name": "Leeward Islands"
  }, {
    "iso": "GB",
    "name": "Leicestershire"
  }, {
    "iso": "PT",
    "name": "Leiria"
  }, {
    "iso": "PT",
    "name": "Leiria"
  }, {
    "iso": "IE",
    "name": "Leitrim"
  }, {
    "iso": "AX",
    "name": "Lemland"
  }, {
    "iso": "HN",
    "name": "Lempira"
  }, {
    "iso": "SI",
    "name": "Lenart"
  }, {
    "iso": "SI",
    "name": "Lendava"
  }, {
    "iso": "TJ",
    "name": "Leninabad"
  }, {
    "iso": "MD",
    "name": "Leova"
  }, {
    "iso": "XK",
    "name": "Leposavić"
  }, {
    "iso": "LS",
    "name": "Leribe"
  }, {
    "iso": "AZ",
    "name": "Lerik"
  }, {
    "iso": "SC",
    "name": "Les Mamelles"
  }, {
    "iso": "GB",
    "name": "Lewisham"
  }, {
    "iso": "PH",
    "name": "Leyte"
  }, {
    "iso": "AL",
    "name": "Lezhë"
  }, {
    "iso": "NI",
    "name": "León"
  }, {
    "iso": "ES",
    "name": "León"
  }, {
    "iso": "MV",
    "name": "Lhaviyani"
  }, {
    "iso": "BT",
    "name": "Lhuntshi"
  }, {
    "iso": "CN",
    "name": "Liaoning"
  }, {
    "iso": "CZ",
    "name": "Liberecký"
  }, {
    "iso": "HR",
    "name": "Licko-senjska županija"
  }, {
    "iso": "LI",
    "name": "Liechtenstein"
  }, {
    "iso": "LV",
    "name": "Lielvardes novads"
  }, {
    "iso": "TW",
    "name": "Lienchiang"
  }, {
    "iso": "LV",
    "name": "Liepaja"
  }, {
    "iso": "LV",
    "name": "Ligatnes novads"
  }, {
    "iso": "MT",
    "name": "Lija"
  }, {
    "iso": "MW",
    "name": "Likoma"
  }, {
    "iso": "CG",
    "name": "Likouala"
  }, {
    "iso": "MW",
    "name": "Lilongwe"
  }, {
    "iso": "PE",
    "name": "Lima"
  }, {
    "iso": "PE",
    "name": "Lima Province"
  }, {
    "iso": "GB",
    "name": "Limavady"
  }, {
    "iso": "LV",
    "name": "Limbažu novads"
  }, {
    "iso": "BE",
    "name": "Limburg"
  }, {
    "iso": "NL",
    "name": "Limburg"
  }, {
    "iso": "IE",
    "name": "Limerick"
  }, {
    "iso": "IE",
    "name": "Limerick City"
  }, {
    "iso": "CR",
    "name": "Limón"
  }, {
    "iso": "GB",
    "name": "Lincolnshire"
  }, {
    "iso": "TZ",
    "name": "Lindi"
  }, {
    "iso": "MK",
    "name": "Lipkovo"
  }, {
    "iso": "XK",
    "name": "Lipljan"
  }, {
    "iso": "TL",
    "name": "Liquica"
  }, {
    "iso": "UG",
    "name": "Lira"
  }, {
    "iso": "PT",
    "name": "Lisboa"
  }, {
    "iso": "GB",
    "name": "Lisburn"
  }, {
    "iso": "SI",
    "name": "Litija"
  }, {
    "iso": "GQ",
    "name": "Litoral"
  }, {
    "iso": "CM",
    "name": "Littoral"
  }, {
    "iso": "BJ",
    "name": "Littoral"
  }, {
    "iso": "LV",
    "name": "Livanu novads"
  }, {
    "iso": "GB",
    "name": "Liverpool"
  }, {
    "iso": "IT",
    "name": "Livorno"
  }, {
    "iso": "BE",
    "name": "Liège"
  }, {
    "iso": "SI",
    "name": "Ljubljana"
  }, {
    "iso": "SI",
    "name": "Ljubno"
  }, {
    "iso": "SI",
    "name": "Ljutomer"
  }, {
    "iso": "ES",
    "name": "Lleida"
  }, {
    "iso": "BW",
    "name": "Lobatse"
  }, {
    "iso": "CF",
    "name": "Lobaye"
  }, {
    "iso": "IT",
    "name": "Lodi"
  }, {
    "iso": "TH",
    "name": "Loei"
  }, {
    "iso": "LR",
    "name": "Lofa"
  }, {
    "iso": "AF",
    "name": "Logar"
  }, {
    "iso": "SI",
    "name": "Logatec"
  }, {
    "iso": "TD",
    "name": "Logone Occidental"
  }, {
    "iso": "TD",
    "name": "Logone Oriental"
  }, {
    "iso": "FR",
    "name": "Loir-et-Cher"
  }, {
    "iso": "FR",
    "name": "Loire"
  }, {
    "iso": "FR",
    "name": "Loire-Atlantique"
  }, {
    "iso": "FR",
    "name": "Loiret"
  }, {
    "iso": "EC",
    "name": "Loja"
  }, {
    "iso": "GN",
    "name": "Lola"
  }, {
    "iso": "VN",
    "name": "Long An"
  }, {
    "iso": "BS",
    "name": "Long Island"
  }, {
    "iso": "IE",
    "name": "Longford"
  }, {
    "iso": "TH",
    "name": "Lop Buri"
  }, {
    "iso": "IR",
    "name": "Lorestan"
  }, {
    "iso": "PE",
    "name": "Loreto"
  }, {
    "iso": "AM",
    "name": "Lori"
  }, {
    "iso": "BF",
    "name": "Loroum"
  }, {
    "iso": "EC",
    "name": "Los Rios"
  }, {
    "iso": "PA",
    "name": "Los Santos"
  }, {
    "iso": "FR",
    "name": "Lot"
  }, {
    "iso": "FR",
    "name": "Lot-et-Garonne"
  }, {
    "iso": "LA",
    "name": "Louang Namtha"
  }, {
    "iso": "LA",
    "name": "Louangphrabang"
  }, {
    "iso": "SN",
    "name": "Louga"
  }, {
    "iso": "US",
    "name": "Louisiana"
  }, {
    "iso": "IE",
    "name": "Louth"
  }, {
    "iso": "SI",
    "name": "Lovrenc na Pohorju"
  }, {
    "iso": "GM",
    "name": "Lower River"
  }, {
    "iso": "MK",
    "name": "Lozovo"
  }, {
    "iso": "FR",
    "name": "Lozère"
  }, {
    "iso": "SI",
    "name": "Loška dolina"
  }, {
    "iso": "SI",
    "name": "Loški Potok"
  }, {
    "iso": "AO",
    "name": "Luanda"
  }, {
    "iso": "ZM",
    "name": "Luapula"
  }, {
    "iso": "LV",
    "name": "Lubanas novads"
  }, {
    "iso": "PL",
    "name": "Lubelskie"
  }, {
    "iso": "SZ",
    "name": "Lubombo"
  }, {
    "iso": "PL",
    "name": "Lubuskie"
  }, {
    "iso": "IT",
    "name": "Lucca"
  }, {
    "iso": "SI",
    "name": "Luce"
  }, {
    "iso": "PH",
    "name": "Lucena"
  }, {
    "iso": "CH",
    "name": "Lucerne"
  }, {
    "iso": "LV",
    "name": "Ludzas novads"
  }, {
    "iso": "ES",
    "name": "Lugo"
  }, {
    "iso": "SI",
    "name": "Lukovica"
  }, {
    "iso": "NP",
    "name": "Lumbini"
  }, {
    "iso": "AX",
    "name": "Lumparland"
  }, {
    "iso": "AO",
    "name": "Lunda Norte"
  }, {
    "iso": "AO",
    "name": "Lunda Sul"
  }, {
    "iso": "MT",
    "name": "Luqa"
  }, {
    "iso": "ZM",
    "name": "Lusaka"
  }, {
    "iso": "GB",
    "name": "Luton"
  }, {
    "iso": "UG",
    "name": "Luuka"
  }, {
    "iso": "UG",
    "name": "Luweero"
  }, {
    "iso": "BE",
    "name": "Luxembourg"
  }, {
    "iso": "LU",
    "name": "Luxembourg"
  }, {
    "iso": "EG",
    "name": "Luxor"
  }, {
    "iso": "UG",
    "name": "Lwengo"
  }, {
    "iso": "UG",
    "name": "Lyantonde"
  }, {
    "iso": "VN",
    "name": "Lào Cai"
  }, {
    "iso": "VN",
    "name": "Lâm Đồng"
  }, {
    "iso": "EE",
    "name": "Lääne-Virumaa"
  }, {
    "iso": "EE",
    "name": "Läänemaa"
  }, {
    "iso": "EE",
    "name": "Läänemaa"
  }, {
    "iso": "EE",
    "name": "Läänemaa"
  }, {
    "iso": "EE",
    "name": "Läänemaa"
  }, {
    "iso": "CG",
    "name": "Lékoumou"
  }, {
    "iso": "GN",
    "name": "Lélouma"
  }, {
    "iso": "BF",
    "name": "Léraba"
  }, {
    "iso": "PL",
    "name": "Lódzkie"
  }, {
    "iso": "VN",
    "name": "Lạng Sơn"
  }, {
    "iso": "DZ",
    "name": "M'Sila"
  }, {
    "iso": "BR",
    "name": "MARANHÃO"
  }, {
    "iso": "YE",
    "name": "Ma'rib"
  }, {
    "iso": "JO",
    "name": "Ma`an"
  }, {
    "iso": "MO",
    "name": "Macau"
  }, {
    "iso": "GN",
    "name": "Macenta"
  }, {
    "iso": "IT",
    "name": "Macerata"
  }, {
    "iso": "MW",
    "name": "Machinga"
  }, {
    "iso": "JO",
    "name": "Madaba"
  }, {
    "iso": "PG",
    "name": "Madang"
  }, {
    "iso": "IN",
    "name": "Madhya Pradesh"
  }, {
    "iso": "QA",
    "name": "Madinat ach Shamal"
  }, {
    "iso": "LV",
    "name": "Madonas novads"
  }, {
    "iso": "PE",
    "name": "Madre de Dios"
  }, {
    "iso": "ES",
    "name": "Madrid"
  }, {
    "iso": "NI",
    "name": "Madriz"
  }, {
    "iso": "TH",
    "name": "Mae Hong Son"
  }, {
    "iso": "ER",
    "name": "Maekel"
  }, {
    "iso": "LS",
    "name": "Mafeteng"
  }, {
    "iso": "JO",
    "name": "Mafraq"
  }, {
    "iso": "CO",
    "name": "Magdalena"
  }, {
    "iso": "GB",
    "name": "Magherafelt"
  }, {
    "iso": "PH",
    "name": "Maguindanao"
  }, {
    "iso": "MM",
    "name": "Magway"
  }, {
    "iso": "TH",
    "name": "Maha Sarakham"
  }, {
    "iso": "GY",
    "name": "Mahaica-Berbice"
  }, {
    "iso": "NP",
    "name": "Mahakali"
  }, {
    "iso": "LK",
    "name": "Mahanuvara"
  }, {
    "iso": "IN",
    "name": "Maharashtra"
  }, {
    "iso": "TN",
    "name": "Mahdia"
  }, {
    "iso": "US",
    "name": "Maine"
  }, {
    "iso": "FR",
    "name": "Maine-et-Loire"
  }, {
    "iso": "CV",
    "name": "Maio"
  }, {
    "iso": "SI",
    "name": "Majšperk"
  }, {
    "iso": "BI",
    "name": "Makamba"
  }, {
    "iso": "PH",
    "name": "Makati"
  }, {
    "iso": "MK",
    "name": "Makedonska Kamenica"
  }, {
    "iso": "SB",
    "name": "Makira"
  }, {
    "iso": "SA",
    "name": "Makkah"
  }, {
    "iso": "PH",
    "name": "Malabon"
  }, {
    "iso": "SB",
    "name": "Malaita"
  }, {
    "iso": "VU",
    "name": "Malampa"
  }, {
    "iso": "AO",
    "name": "Malanje"
  }, {
    "iso": "TR",
    "name": "Malatya"
  }, {
    "iso": "UY",
    "name": "Maldonado"
  }, {
    "iso": "GN",
    "name": "Mali"
  }, {
    "iso": "XK",
    "name": "Mališevo"
  }, {
    "iso": "LV",
    "name": "Malpils novads"
  }, {
    "iso": "ID",
    "name": "Maluku"
  }, {
    "iso": "ID",
    "name": "Maluku Utara"
  }, {
    "iso": "MV",
    "name": "Malé"
  }, {
    "iso": "CF",
    "name": "Mambéré-Kadéï"
  }, {
    "iso": "GN",
    "name": "Mamou"
  }, {
    "iso": "EC",
    "name": "Manabi"
  }, {
    "iso": "UG",
    "name": "Manafwa"
  }, {
    "iso": "NI",
    "name": "Managua"
  }, {
    "iso": "TL",
    "name": "Manatuto"
  }, {
    "iso": "NZ",
    "name": "Manawatu-Wanganui Region"
  }, {
    "iso": "FR",
    "name": "Manche"
  }, {
    "iso": "GB",
    "name": "Manchester"
  }, {
    "iso": "JM",
    "name": "Manchester"
  }, {
    "iso": "MM",
    "name": "Mandalay"
  }, {
    "iso": "PH",
    "name": "Mandaluyong City"
  }, {
    "iso": "PH",
    "name": "Mandaue"
  }, {
    "iso": "GN",
    "name": "Mandiana"
  }, {
    "iso": "TD",
    "name": "Mandoul"
  }, {
    "iso": "CK",
    "name": "Mangaia"
  }, {
    "iso": "KZ",
    "name": "Mangghystau"
  }, {
    "iso": "MW",
    "name": "Mangochi"
  }, {
    "iso": "BS",
    "name": "Mangrove Cay"
  }, {
    "iso": "MZ",
    "name": "Manica"
  }, {
    "iso": "ZW",
    "name": "Manicaland"
  }, {
    "iso": "CD",
    "name": "Maniema"
  }, {
    "iso": "CK",
    "name": "Manihiki"
  }, {
    "iso": "PH",
    "name": "Manila"
  }, {
    "iso": "IN",
    "name": "Manipur"
  }, {
    "iso": "TR",
    "name": "Manisa"
  }, {
    "iso": "CA",
    "name": "Manitoba"
  }, {
    "iso": "LK",
    "name": "Mannārama"
  }, {
    "iso": "IT",
    "name": "Mantova"
  }, {
    "iso": "AS",
    "name": "Manu's"
  }, {
    "iso": "TN",
    "name": "Manubah"
  }, {
    "iso": "TL",
    "name": "Manufahi"
  }, {
    "iso": "PG",
    "name": "Manus"
  }, {
    "iso": "TZ",
    "name": "Manyara"
  }, {
    "iso": "SZ",
    "name": "Manzini"
  }, {
    "iso": "MZ",
    "name": "Maputo"
  }, {
    "iso": "MZ",
    "name": "Maputo"
  }, {
    "iso": "TZ",
    "name": "Mara"
  }, {
    "iso": "UG",
    "name": "Maracha"
  }, {
    "iso": "NE",
    "name": "Maradi"
  }, {
    "iso": "CI",
    "name": "Marahoué"
  }, {
    "iso": "RO",
    "name": "Maramureş"
  }, {
    "iso": "TR",
    "name": "Mardin"
  }, {
    "iso": "LR",
    "name": "Margibi"
  }, {
    "iso": "SI",
    "name": "Maribor"
  }, {
    "iso": "AX",
    "name": "Mariehamn"
  }, {
    "iso": "LT",
    "name": "Marijampole"
  }, {
    "iso": "PH",
    "name": "Marikina"
  }, {
    "iso": "PH",
    "name": "Marinduque"
  }, {
    "iso": "TG",
    "name": "Maritime"
  }, {
    "iso": "IR",
    "name": "Markazi"
  }, {
    "iso": "SI",
    "name": "Markovci"
  }, {
    "iso": "NZ",
    "name": "Marlborough Region"
  }, {
    "iso": "FR",
    "name": "Marne"
  }, {
    "iso": "SR",
    "name": "Marowijne"
  }, {
    "iso": "PF",
    "name": "Marquesas Islands"
  }, {
    "iso": "MA",
    "name": "Marrakech - Tensift - Al Haouz"
  }, {
    "iso": "MT",
    "name": "Marsa"
  }, {
    "iso": "MT",
    "name": "Marsaskala"
  }, {
    "iso": "MT",
    "name": "Marsaxlokk"
  }, {
    "iso": "FR",
    "name": "Martinique"
  }, {
    "iso": "LV",
    "name": "Marupes novads"
  }, {
    "iso": "TM",
    "name": "Mary"
  }, {
    "iso": "LR",
    "name": "Maryland"
  }, {
    "iso": "US",
    "name": "Maryland"
  }, {
    "iso": "DO",
    "name": "María Trinidad Sánchez"
  }, {
    "iso": "UG",
    "name": "Masaka"
  }, {
    "iso": "AZ",
    "name": "Masallı"
  }, {
    "iso": "NI",
    "name": "Masaya"
  }, {
    "iso": "PH",
    "name": "Masbate"
  }, {
    "iso": "DZ",
    "name": "Mascara"
  }, {
    "iso": "LS",
    "name": "Maseru"
  }, {
    "iso": "ZW",
    "name": "Mashonaland Central"
  }, {
    "iso": "ZW",
    "name": "Mashonaland East"
  }, {
    "iso": "ZW",
    "name": "Mashonaland West"
  }, {
    "iso": "UG",
    "name": "Masindi"
  }, {
    "iso": "IT",
    "name": "Massa-Carrara"
  }, {
    "iso": "US",
    "name": "Massachusetts"
  }, {
    "iso": "ZW",
    "name": "Masvingo"
  }, {
    "iso": "ZW",
    "name": "Matabeleland North"
  }, {
    "iso": "ZW",
    "name": "Matabeleland South"
  }, {
    "iso": "NI",
    "name": "Matagalpa"
  }, {
    "iso": "SN",
    "name": "Matam"
  }, {
    "iso": "CU",
    "name": "Matanzas"
  }, {
    "iso": "IT",
    "name": "Matera"
  }, {
    "iso": "BR",
    "name": "Mato Grosso"
  }, {
    "iso": "BR",
    "name": "Mato Grosso Do Sul"
  }, {
    "iso": "EG",
    "name": "Matruh"
  }, {
    "iso": "CK",
    "name": "Mauke"
  }, {
    "iso": "MK",
    "name": "Mavrovo and Rostusa"
  }, {
    "iso": "CU",
    "name": "Mayabeque"
  }, {
    "iso": "BS",
    "name": "Mayaguana"
  }, {
    "iso": "FR",
    "name": "Mayenne"
  }, {
    "iso": "IE",
    "name": "Mayo"
  }, {
    "iso": "IE",
    "name": "Mayo"
  }, {
    "iso": "IE",
    "name": "Mayo"
  }, {
    "iso": "IE",
    "name": "Mayo"
  }, {
    "iso": "IE",
    "name": "Mayo"
  }, {
    "iso": "TD",
    "name": "Mayo-Kebbi Est"
  }, {
    "iso": "TD",
    "name": "Mayo-Kebbi Ouest"
  }, {
    "iso": "FR",
    "name": "Mayotte"
  }, {
    "iso": "IQ",
    "name": "Maysan"
  }, {
    "iso": "UG",
    "name": "Mayuge"
  }, {
    "iso": "IR",
    "name": "Mazandaran"
  }, {
    "iso": "PL",
    "name": "Mazowieckie"
  }, {
    "iso": "LV",
    "name": "Mazsalacas novads"
  }, {
    "iso": "RS",
    "name": "Mačvanski upravni okrug"
  }, {
    "iso": "PL",
    "name": "Małopolskie"
  }, {
    "iso": "LK",
    "name": "Maḍakalapuva"
  }, {
    "iso": "UG",
    "name": "Mbale"
  }, {
    "iso": "UG",
    "name": "Mbarara"
  }, {
    "iso": "UG",
    "name": "Mbarara"
  }, {
    "iso": "TZ",
    "name": "Mbeya"
  }, {
    "iso": "CF",
    "name": "Mbomou"
  }, {
    "iso": "MW",
    "name": "Mchinji"
  }, {
    "iso": "MT",
    "name": "Mdina (Citta' Notabile)"
  }, {
    "iso": "IE",
    "name": "Meath"
  }, {
    "iso": "NP",
    "name": "Mechi"
  }, {
    "iso": "DE",
    "name": "Mecklenburg-Vorpommern"
  }, {
    "iso": "HR",
    "name": "Medimurska županija"
  }, {
    "iso": "SI",
    "name": "Medvode"
  }, {
    "iso": "GB",
    "name": "Medway"
  }, {
    "iso": "MV",
    "name": "Meemu"
  }, {
    "iso": "IN",
    "name": "Meghalaya"
  }, {
    "iso": "RO",
    "name": "Mehedinţi"
  }, {
    "iso": "MA",
    "name": "Meknès - Tafilalet"
  }, {
    "iso": "MY",
    "name": "Melaka"
  }, {
    "iso": "MG",
    "name": "Melaky"
  }, {
    "iso": "PW",
    "name": "Melekeok"
  }, {
    "iso": "ES",
    "name": "Melilla"
  }, {
    "iso": "MT",
    "name": "Mellieha"
  }, {
    "iso": "MT",
    "name": "Mellieha"
  }, {
    "iso": "MG",
    "name": "Menabe"
  }, {
    "iso": "AR",
    "name": "Mendoza"
  }, {
    "iso": "NR",
    "name": "Meneng"
  }, {
    "iso": "SI",
    "name": "Mengeš"
  }, {
    "iso": "TR",
    "name": "Mersin"
  }, {
    "iso": "LV",
    "name": "Mersraga novads"
  }, {
    "iso": "GB",
    "name": "Merthyr Tydfil"
  }, {
    "iso": "GB",
    "name": "Merton"
  }, {
    "iso": "IT",
    "name": "Messina"
  }, {
    "iso": "CO",
    "name": "Meta"
  }, {
    "iso": "SI",
    "name": "Metlika"
  }, {
    "iso": "CL",
    "name": "Metropolitana"
  }, {
    "iso": "FR",
    "name": "Meurthe-et-Moselle"
  }, {
    "iso": "FR",
    "name": "Meuse"
  }, {
    "iso": "SI",
    "name": "Mežica"
  }, {
    "iso": "MT",
    "name": "Mgarr"
  }, {
    "iso": "TW",
    "name": "Miaoli"
  }, {
    "iso": "US",
    "name": "Michigan"
  }, {
    "iso": "MX",
    "name": "Michoacán de Ocampo"
  }, {
    "iso": "LC",
    "name": "Micoud"
  }, {
    "iso": "TC",
    "name": "Middle Caicos"
  }, {
    "iso": "GB",
    "name": "Middlesbrough"
  }, {
    "iso": "ZW",
    "name": "Midlands"
  }, {
    "iso": "GB",
    "name": "Midlothian"
  }, {
    "iso": "DK",
    "name": "Midtjylland"
  }, {
    "iso": "UM",
    "name": "Midway Islands"
  }, {
    "iso": "JP",
    "name": "Mie"
  }, {
    "iso": "SI",
    "name": "Miklavž na Dravskem polju"
  }, {
    "iso": "DZ",
    "name": "Mila"
  }, {
    "iso": "IT",
    "name": "Milano"
  }, {
    "iso": "PG",
    "name": "Milne Bay"
  }, {
    "iso": "GB",
    "name": "Milton Keynes"
  }, {
    "iso": "BR",
    "name": "Minas Gerais"
  }, {
    "iso": "PH",
    "name": "Mindoro Occidental"
  }, {
    "iso": "PH",
    "name": "Mindoro Oriental"
  }, {
    "iso": "AZ",
    "name": "Mingəçevir"
  }, {
    "iso": "US",
    "name": "Minnesota"
  }, {
    "iso": "YE",
    "name": "Minor island of Yemen"
  }, {
    "iso": "AI",
    "name": "Minor islands of Anguilla"
  }, {
    "iso": "AQ",
    "name": "Minor islands of Antarctica"
  }, {
    "iso": "BZ",
    "name": "Minor islands of Belize"
  }, {
    "iso": "VN",
    "name": "Minor islands of Cambodia"
  }, {
    "iso": "CO",
    "name": "Minor islands of Colombia"
  }, {
    "iso": "CU",
    "name": "Minor islands of Cuba"
  }, {
    "iso": "DK",
    "name": "Minor islands of Denmark"
  }, {
    "iso": "DK",
    "name": "Minor islands of Denmark"
  }, {
    "iso": "DK",
    "name": "Minor islands of Denmark"
  }, {
    "iso": "DJ",
    "name": "Minor islands of Djibouti"
  }, {
    "iso": "EG",
    "name": "Minor islands of Egypt"
  }, {
    "iso": "ER",
    "name": "Minor islands of Eritrea"
  }, {
    "iso": "FJ",
    "name": "Minor islands of Fiji"
  }, {
    "iso": "DE",
    "name": "Minor islands of Germany"
  }, {
    "iso": "DE",
    "name": "Minor islands of Germany"
  }, {
    "iso": "DE",
    "name": "Minor islands of Germany"
  }, {
    "iso": "DE",
    "name": "Minor islands of Germany"
  }, {
    "iso": "DE",
    "name": "Minor islands of Germany"
  }, {
    "iso": "GG",
    "name": "Minor islands of Guernsey"
  }, {
    "iso": "IN",
    "name": "Minor islands of India"
  }, {
    "iso": "ID",
    "name": "Minor islands of Indonesia"
  }, {
    "iso": "IR",
    "name": "Minor islands of Iran"
  }, {
    "iso": "JP",
    "name": "Minor islands of Japan"
  }, {
    "iso": "KZ",
    "name": "Minor islands of Kazakhstan"
  }, {
    "iso": "KI",
    "name": "Minor islands of Kiribati"
  }, {
    "iso": "MY",
    "name": "Minor islands of Malaysia"
  }, {
    "iso": "MR",
    "name": "Minor islands of Mauritania"
  }, {
    "iso": "MM",
    "name": "Minor islands of Myanmar"
  }, {
    "iso": "NC",
    "name": "Minor islands of New Caledonia"
  }, {
    "iso": "KP",
    "name": "Minor islands of North Korea"
  }, {
    "iso": "PG",
    "name": "Minor islands of Papua New Guinea"
  }, {
    "iso": "PH",
    "name": "Minor islands of Philippines"
  }, {
    "iso": "SA",
    "name": "Minor islands of Saudi Arabia"
  }, {
    "iso": "RS",
    "name": "Minor islands of Serbia"
  }, {
    "iso": "SB",
    "name": "Minor islands of Solomon Islands"
  }, {
    "iso": "XX",
    "name": "Minor islands of Somaliland"
  }, {
    "iso": "KR",
    "name": "Minor islands of South Korea"
  }, {
    "iso": "TH",
    "name": "Minor islands of Thailand"
  }, {
    "iso": "TN",
    "name": "Minor islands of Tunisia"
  }, {
    "iso": "TR",
    "name": "Minor islands of Turkey"
  }, {
    "iso": "TV",
    "name": "Minor islands of Tuvalu"
  }, {
    "iso": "VE",
    "name": "Minor islands of Venezuela"
  }, {
    "iso": "BY",
    "name": "Minsk"
  }, {
    "iso": "PM",
    "name": "Miquelon-Langlade"
  }, {
    "iso": "VE",
    "name": "Miranda"
  }, {
    "iso": "SI",
    "name": "Miren-Kostanjevica"
  }, {
    "iso": "SI",
    "name": "Mirna Pec"
  }, {
    "iso": "PH",
    "name": "Misamis Occidental"
  }, {
    "iso": "PH",
    "name": "Misamis Oriental"
  }, {
    "iso": "PY",
    "name": "Misiones"
  }, {
    "iso": "AR",
    "name": "Misiones"
  }, {
    "iso": "SI",
    "name": "Mislinja"
  }, {
    "iso": "LY",
    "name": "Misratah"
  }, {
    "iso": "US",
    "name": "Mississippi"
  }, {
    "iso": "US",
    "name": "Missouri"
  }, {
    "iso": "CK",
    "name": "Mitiaro"
  }, {
    "iso": "UG",
    "name": "Mitooma"
  }, {
    "iso": "UG",
    "name": "Mityana"
  }, {
    "iso": "JP",
    "name": "Miyagi"
  }, {
    "iso": "JP",
    "name": "Miyazaki"
  }, {
    "iso": "LY",
    "name": "Mizdah"
  }, {
    "iso": "IN",
    "name": "Mizoram"
  }, {
    "iso": "IT",
    "name": "Modena"
  }, {
    "iso": "BY",
    "name": "Mogilev"
  }, {
    "iso": "LS",
    "name": "Mohale's Hoek"
  }, {
    "iso": "ME",
    "name": "Mojkovac"
  }, {
    "iso": "MU",
    "name": "Moka"
  }, {
    "iso": "LS",
    "name": "Mokhotlong"
  }, {
    "iso": "MM",
    "name": "Mon"
  }, {
    "iso": "MC",
    "name": "Monaco"
  }, {
    "iso": "VE",
    "name": "Monagas"
  }, {
    "iso": "IE",
    "name": "Monaghan"
  }, {
    "iso": "TN",
    "name": "Monastir"
  }, {
    "iso": "BT",
    "name": "Mongar"
  }, {
    "iso": "GB",
    "name": "Monmouthshire"
  }, {
    "iso": "BJ",
    "name": "Mono"
  }, {
    "iso": "DO",
    "name": "Monseñor Nouel"
  }, {
    "iso": "SC",
    "name": "Mont Buxton"
  }, {
    "iso": "SC",
    "name": "Mont Fleuri"
  }, {
    "iso": "US",
    "name": "Montana"
  }, {
    "iso": "DO",
    "name": "Monte Cristi"
  }, {
    "iso": "DO",
    "name": "Monte Plata"
  }, {
    "iso": "SM",
    "name": "Montegiardino"
  }, {
    "iso": "UY",
    "name": "Montevideo"
  }, {
    "iso": "LR",
    "name": "Montserrado"
  }, {
    "iso": "IT",
    "name": "Monza E Della Brianza"
  }, {
    "iso": "BS",
    "name": "Moore's Island"
  }, {
    "iso": "ML",
    "name": "Mopti"
  }, {
    "iso": "PE",
    "name": "Moquegua"
  }, {
    "iso": "SI",
    "name": "Moravce"
  }, {
    "iso": "RS",
    "name": "Moravički upravni okrug"
  }, {
    "iso": "SI",
    "name": "Moravske Toplice"
  }, {
    "iso": "CZ",
    "name": "Moravskoslezský"
  }, {
    "iso": "GB",
    "name": "Moray"
  }, {
    "iso": "SV",
    "name": "Morazán"
  }, {
    "iso": "FR",
    "name": "Morbihan"
  }, {
    "iso": "MX",
    "name": "Morelos"
  }, {
    "iso": "PG",
    "name": "Morobe"
  }, {
    "iso": "TZ",
    "name": "Morogoro"
  }, {
    "iso": "EC",
    "name": "Morona Santiago"
  }, {
    "iso": "UG",
    "name": "Moroto"
  }, {
    "iso": "FR",
    "name": "Moselle"
  }, {
    "iso": "MT",
    "name": "Mosta"
  }, {
    "iso": "DZ",
    "name": "Mostaganem"
  }, {
    "iso": "CV",
    "name": "Mosteiros"
  }, {
    "iso": "BF",
    "name": "Mou Houn"
  }, {
    "iso": "LB",
    "name": "Mount Lebanon"
  }, {
    "iso": "PH",
    "name": "Mountain Province"
  }, {
    "iso": "AO",
    "name": "Moxico"
  }, {
    "iso": "CI",
    "name": "Moyen-Cavally"
  }, {
    "iso": "TD",
    "name": "Moyen-Chari"
  }, {
    "iso": "CI",
    "name": "Moyen-Comoe"
  }, {
    "iso": "GA",
    "name": "Moyen-Ogooué"
  }, {
    "iso": "GB",
    "name": "Moyle"
  }, {
    "iso": "UG",
    "name": "Moyo"
  }, {
    "iso": "SI",
    "name": "Mozirje"
  }, {
    "iso": "KM",
    "name": "Moûhîlî"
  }, {
    "iso": "UG",
    "name": "Mpigi"
  }, {
    "iso": "ZA",
    "name": "Mpumalanga"
  }, {
    "iso": "MT",
    "name": "Mqabba"
  }, {
    "iso": "MT",
    "name": "Msida"
  }, {
    "iso": "MT",
    "name": "Mtarfa"
  }, {
    "iso": "GE",
    "name": "Mtskheta-Mtianeti"
  }, {
    "iso": "TZ",
    "name": "Mtwara"
  }, {
    "iso": "KW",
    "name": "Mubarak Al-Kabeer"
  }, {
    "iso": "UG",
    "name": "Mubende"
  }, {
    "iso": "ZM",
    "name": "Muchinga"
  }, {
    "iso": "SO",
    "name": "Mudug"
  }, {
    "iso": "TR",
    "name": "Mugla"
  }, {
    "iso": "TH",
    "name": "Mukdahan"
  }, {
    "iso": "UG",
    "name": "Mukono"
  }, {
    "iso": "MW",
    "name": "Mulanje"
  }, {
    "iso": "LK",
    "name": "Mulativ"
  }, {
    "iso": "PH",
    "name": "Muntinlupa"
  }, {
    "iso": "MT",
    "name": "Munxar"
  }, {
    "iso": "BI",
    "name": "Muramvya"
  }, {
    "iso": "ES",
    "name": "Murcia"
  }, {
    "iso": "RO",
    "name": "Mureş"
  }, {
    "iso": "SI",
    "name": "Murska Sobota"
  }, {
    "iso": "LY",
    "name": "Murzuq"
  }, {
    "iso": "TR",
    "name": "Mus"
  }, {
    "iso": "OM",
    "name": "Musandam"
  }, {
    "iso": "OM",
    "name": "Muscat"
  }, {
    "iso": "SI",
    "name": "Muta"
  }, {
    "iso": "BI",
    "name": "Muyinga"
  }, {
    "iso": "MW",
    "name": "Mwanza"
  }, {
    "iso": "TZ",
    "name": "Mwanza"
  }, {
    "iso": "BI",
    "name": "Mwaro"
  }, {
    "iso": "MW",
    "name": "Mzimba"
  }, {
    "iso": "ES",
    "name": "Málaga"
  }, {
    "iso": "TN",
    "name": "Médenine"
  }, {
    "iso": "DZ",
    "name": "Médéa"
  }, {
    "iso": "VE",
    "name": "Mérida"
  }, {
    "iso": "MX",
    "name": "México"
  }, {
    "iso": "KH",
    "name": "Môndól Kiri"
  }, {
    "iso": "NO",
    "name": "Møre og Romsdal"
  }, {
    "iso": "LK",
    "name": "Mātale"
  }, {
    "iso": "LK",
    "name": "Mātara"
  }, {
    "iso": "LK",
    "name": "Mŏṇarāgala"
  }, {
    "iso": "CI",
    "name": "N'zi-Comoé"
  }, {
    "iso": "GB",
    "name": "Na h-Eileanan an Iar"
  }, {
    "iso": "TN",
    "name": "Nabeul"
  }, {
    "iso": "PS",
    "name": "Nablus"
  }, {
    "iso": "MT",
    "name": "Nadur"
  }, {
    "iso": "AZ",
    "name": "Naftalan"
  }, {
    "iso": "PH",
    "name": "Naga"
  }, {
    "iso": "IN",
    "name": "Nagaland"
  }, {
    "iso": "JP",
    "name": "Nagano"
  }, {
    "iso": "JP",
    "name": "Nagasaki"
  }, {
    "iso": "BF",
    "name": "Nahouri"
  }, {
    "iso": "KE",
    "name": "Nairobi"
  }, {
    "iso": "SA",
    "name": "Najran"
  }, {
    "iso": "UG",
    "name": "Nakapiripirit"
  }, {
    "iso": "UG",
    "name": "Nakaseke"
  }, {
    "iso": "UG",
    "name": "Nakasongola"
  }, {
    "iso": "TH",
    "name": "Nakhon Nayok"
  }, {
    "iso": "TH",
    "name": "Nakhon Pathom"
  }, {
    "iso": "TH",
    "name": "Nakhon Phanom"
  }, {
    "iso": "TH",
    "name": "Nakhon Ratchasima"
  }, {
    "iso": "TH",
    "name": "Nakhon Sawan"
  }, {
    "iso": "TH",
    "name": "Nakhon Si Thammarat"
  }, {
    "iso": "SI",
    "name": "Naklo"
  }, {
    "iso": "VN",
    "name": "Nam Định"
  }, {
    "iso": "UZ",
    "name": "Namangan"
  }, {
    "iso": "UG",
    "name": "Namayingo"
  }, {
    "iso": "BF",
    "name": "Namentenga"
  }, {
    "iso": "AO",
    "name": "Namibe"
  }, {
    "iso": "MZ",
    "name": "Nampula"
  }, {
    "iso": "BE",
    "name": "Namur"
  }, {
    "iso": "UG",
    "name": "Namutumba"
  }, {
    "iso": "TH",
    "name": "Nan"
  }, {
    "iso": "CF",
    "name": "Nana-Grébizi"
  }, {
    "iso": "CF",
    "name": "Nana-Mambéré"
  }, {
    "iso": "AF",
    "name": "Nangarhar"
  }, {
    "iso": "TW",
    "name": "Nantou"
  }, {
    "iso": "UG",
    "name": "Napak"
  }, {
    "iso": "EC",
    "name": "Napo"
  }, {
    "iso": "IT",
    "name": "Napoli"
  }, {
    "iso": "JP",
    "name": "Nara"
  }, {
    "iso": "TH",
    "name": "Narathiwat"
  }, {
    "iso": "NP",
    "name": "Narayani"
  }, {
    "iso": "CO",
    "name": "Nariño"
  }, {
    "iso": "KG",
    "name": "Naryn"
  }, {
    "iso": "NG",
    "name": "Nassarawa"
  }, {
    "iso": "PG",
    "name": "National Capital District"
  }, {
    "iso": "LV",
    "name": "Nauksenu novads"
  }, {
    "iso": "ES",
    "name": "Navarra"
  }, {
    "iso": "UM",
    "name": "Navassa Island"
  }, {
    "iso": "UZ",
    "name": "Navoi"
  }, {
    "iso": "PH",
    "name": "Navotas"
  }, {
    "iso": "MT",
    "name": "Naxxar"
  }, {
    "iso": "AZ",
    "name": "Naxçıvan"
  }, {
    "iso": "BF",
    "name": "Nayala"
  }, {
    "iso": "MX",
    "name": "Nayarit"
  }, {
    "iso": "SI",
    "name": "Nazarje"
  }, {
    "iso": "DZ",
    "name": "Naâma"
  }, {
    "iso": "RO",
    "name": "Neamţ"
  }, {
    "iso": "GB",
    "name": "Neath Port Talbot"
  }, {
    "iso": "UG",
    "name": "Nebbi"
  }, {
    "iso": "US",
    "name": "Nebraska"
  }, {
    "iso": "AZ",
    "name": "Neftçala"
  }, {
    "iso": "MY",
    "name": "Negeri Sembilan"
  }, {
    "iso": "MK",
    "name": "Negotino"
  }, {
    "iso": "PH",
    "name": "Negros Occidental"
  }, {
    "iso": "PH",
    "name": "Negros Oriental"
  }, {
    "iso": "NZ",
    "name": "Nelson Region"
  }, {
    "iso": "MW",
    "name": "Neno"
  }, {
    "iso": "LV",
    "name": "Neretas novads"
  }, {
    "iso": "CH",
    "name": "Neuchâtel"
  }, {
    "iso": "AR",
    "name": "Neuquén"
  }, {
    "iso": "AE",
    "name": "Neutral Zone"
  }, {
    "iso": "AE",
    "name": "Neutral Zone"
  }, {
    "iso": "US",
    "name": "Nevada"
  }, {
    "iso": "TR",
    "name": "Nevsehir"
  }, {
    "iso": "CA",
    "name": "New Brunswick"
  }, {
    "iso": "US",
    "name": "New Hampshire"
  }, {
    "iso": "PG",
    "name": "New Ireland"
  }, {
    "iso": "US",
    "name": "New Jersey"
  }, {
    "iso": "US",
    "name": "New Mexico"
  }, {
    "iso": "BS",
    "name": "New Providence"
  }, {
    "iso": "AU",
    "name": "New South Wales"
  }, {
    "iso": "TW",
    "name": "New Taipei City"
  }, {
    "iso": "US",
    "name": "New York"
  }, {
    "iso": "GB",
    "name": "Newcastle upon Tyne"
  }, {
    "iso": "CA",
    "name": "Newfoundland and Labrador"
  }, {
    "iso": "GB",
    "name": "Newham"
  }, {
    "iso": "GB",
    "name": "Newport"
  }, {
    "iso": "GB",
    "name": "Newry and Mourne"
  }, {
    "iso": "GB",
    "name": "Newtownabbey"
  }, {
    "iso": "PW",
    "name": "Ngaraard"
  }, {
    "iso": "PW",
    "name": "Ngarchelong"
  }, {
    "iso": "PW",
    "name": "Ngardmau"
  }, {
    "iso": "PW",
    "name": "Ngatpang"
  }, {
    "iso": "PW",
    "name": "Ngchesar"
  }, {
    "iso": "PW",
    "name": "Ngeremlengui"
  }, {
    "iso": "VN",
    "name": "Nghệ An"
  }, {
    "iso": "PW",
    "name": "Ngiwal"
  }, {
    "iso": "UG",
    "name": "Ngora"
  }, {
    "iso": "GA",
    "name": "Ngounié"
  }, {
    "iso": "BI",
    "name": "Ngozi"
  }, {
    "iso": "PA",
    "name": "Ngöbe Buglé"
  }, {
    "iso": "NE",
    "name": "Niamey"
  }, {
    "iso": "CG",
    "name": "Niari"
  }, {
    "iso": "MZ",
    "name": "Niassa"
  }, {
    "iso": "NR",
    "name": "Nibok"
  }, {
    "iso": "LV",
    "name": "Nicas novads"
  }, {
    "iso": "SR",
    "name": "Nickerie"
  }, {
    "iso": "XX",
    "name": "Nicobar Is."
  }, {
    "iso": "CH",
    "name": "Nidwalden"
  }, {
    "iso": "DE",
    "name": "Niedersachsen"
  }, {
    "iso": "AT",
    "name": "Niederösterreich"
  }, {
    "iso": "TR",
    "name": "Nigde"
  }, {
    "iso": "NG",
    "name": "Niger"
  }, {
    "iso": "JP",
    "name": "Niigata"
  }, {
    "iso": "ME",
    "name": "Nikšic"
  }, {
    "iso": "LR",
    "name": "Nimba"
  }, {
    "iso": "AF",
    "name": "Nimroz"
  }, {
    "iso": "IQ",
    "name": "Ninawa"
  }, {
    "iso": "CN",
    "name": "Ningxia"
  }, {
    "iso": "VN",
    "name": "Ninh Bình"
  }, {
    "iso": "VN",
    "name": "Ninh Thuận"
  }, {
    "iso": "HT",
    "name": "Nippes"
  }, {
    "iso": "MD",
    "name": "Nisporeni"
  }, {
    "iso": "SK",
    "name": "Nitriansky kraj"
  }, {
    "iso": "TO",
    "name": "Niuas"
  }, {
    "iso": "NU",
    "name": "Niue"
  }, {
    "iso": "FR",
    "name": "Nièvre"
  }, {
    "iso": "RS",
    "name": "Nišavski upravni okrug"
  }, {
    "iso": "TZ",
    "name": "Njombe"
  }, {
    "iso": "MW",
    "name": "Nkhata Bay"
  }, {
    "iso": "MW",
    "name": "Nkhotakota"
  }, {
    "iso": "TH",
    "name": "Nong Bua Lam Phu"
  }, {
    "iso": "TH",
    "name": "Nong Khai"
  }, {
    "iso": "TH",
    "name": "Nonthaburi"
  }, {
    "iso": "MV",
    "name": "Noonu"
  }, {
    "iso": "NL",
    "name": "Noord-Brabant"
  }, {
    "iso": "NL",
    "name": "Noord-Holland"
  }, {
    "iso": "HT",
    "name": "Nord"
  }, {
    "iso": "CM",
    "name": "Nord"
  }, {
    "iso": "NC",
    "name": "Nord"
  }, {
    "iso": "FR",
    "name": "Nord"
  }, {
    "iso": "HT",
    "name": "Nord-Est"
  }, {
    "iso": "CD",
    "name": "Nord-Kivu"
  }, {
    "iso": "CM",
    "name": "Nord-Ouest"
  }, {
    "iso": "HT",
    "name": "Nord-Ouest"
  }, {
    "iso": "NO",
    "name": "Nord-Trøndelag"
  }, {
    "iso": "DK",
    "name": "Nordjylland"
  }, {
    "iso": "NO",
    "name": "Nordland"
  }, {
    "iso": "DE",
    "name": "Nordrhein-Westfalen"
  }, {
    "iso": "GB",
    "name": "Norfolk"
  }, {
    "iso": "NF",
    "name": "Norfolk Island"
  }, {
    "iso": "SE",
    "name": "Norrbotten"
  }, {
    "iso": "CO",
    "name": "Norte de Santander"
  }, {
    "iso": "HK",
    "name": "North"
  }, {
    "iso": "PS",
    "name": "North"
  }, {
    "iso": "BS",
    "name": "North Abaco"
  }, {
    "iso": "BS",
    "name": "North Andros"
  }, {
    "iso": "GB",
    "name": "North Ayrshire"
  }, {
    "iso": "SS",
    "name": "North Bahr-al-Ghazal"
  }, {
    "iso": "GM",
    "name": "North Bank"
  }, {
    "iso": "TC",
    "name": "North Caicos"
  }, {
    "iso": "US",
    "name": "North Carolina"
  }, {
    "iso": "KR",
    "name": "North Chungcheong"
  }, {
    "iso": "US",
    "name": "North Dakota"
  }, {
    "iso": "SD",
    "name": "North Darfur"
  }, {
    "iso": "GB",
    "name": "North Down"
  }, {
    "iso": "SG",
    "name": "North East"
  }, {
    "iso": "GB",
    "name": "North East Lincolnshire"
  }, {
    "iso": "BS",
    "name": "North Eleuthera"
  }, {
    "iso": "KR",
    "name": "North Gyeongsang"
  }, {
    "iso": "AI",
    "name": "North Hill"
  }, {
    "iso": "KR",
    "name": "North Jeolla"
  }, {
    "iso": "FI",
    "name": "North Karelia"
  }, {
    "iso": "KZ",
    "name": "North Kazakhstan"
  }, {
    "iso": "IR",
    "name": "North Khorasan"
  }, {
    "iso": "SD",
    "name": "North Kordufan"
  }, {
    "iso": "GB",
    "name": "North Lanarkshire"
  }, {
    "iso": "LB",
    "name": "North Lebanon"
  }, {
    "iso": "GB",
    "name": "North Lincolnshire"
  }, {
    "iso": "AI",
    "name": "North Side"
  }, {
    "iso": "PG",
    "name": "North Solomons"
  }, {
    "iso": "GB",
    "name": "North Somerset"
  }, {
    "iso": "IE",
    "name": "North Tipperary"
  }, {
    "iso": "GB",
    "name": "North Tyneside"
  }, {
    "iso": "SG",
    "name": "North West"
  }, {
    "iso": "ZA",
    "name": "North West"
  }, {
    "iso": "GB",
    "name": "North Yorkshire"
  }, {
    "iso": "BW",
    "name": "North-East"
  }, {
    "iso": "KE",
    "name": "North-Eastern"
  }, {
    "iso": "BW",
    "name": "North-West"
  }, {
    "iso": "PK",
    "name": "North-West Frontier Province"
  }, {
    "iso": "ZM",
    "name": "North-Western"
  }, {
    "iso": "GB",
    "name": "Northamptonshire"
  }, {
    "iso": "MK",
    "name": "Northeastern"
  }, {
    "iso": "GH",
    "name": "Northern"
  }, {
    "iso": "ZM",
    "name": "Northern"
  }, {
    "iso": "FJ",
    "name": "Northern"
  }, {
    "iso": "PG",
    "name": "Northern"
  }, {
    "iso": "SD",
    "name": "Northern"
  }, {
    "iso": "RW",
    "name": "Northern"
  }, {
    "iso": "SL",
    "name": "Northern"
  }, {
    "iso": "PK",
    "name": "Northern Areas"
  }, {
    "iso": "ZA",
    "name": "Northern Cape"
  }, {
    "iso": "XX",
    "name": "Northern Cyprus"
  }, {
    "iso": "MP",
    "name": "Northern Islands"
  }, {
    "iso": "FI",
    "name": "Northern Ostrobothnia"
  }, {
    "iso": "ZA",
    "name": "Northern Province"
  }, {
    "iso": "PH",
    "name": "Northern Samar"
  }, {
    "iso": "FI",
    "name": "Northern Savonia"
  }, {
    "iso": "AU",
    "name": "Northern Territory"
  }, {
    "iso": "NZ",
    "name": "Northland Region"
  }, {
    "iso": "GB",
    "name": "Northumberland"
  }, {
    "iso": "CA",
    "name": "Northwest Territories"
  }, {
    "iso": "IS",
    "name": "Norðurland eystra"
  }, {
    "iso": "IS",
    "name": "Norðurland vestra"
  }, {
    "iso": "GB",
    "name": "Nottinghamshire"
  }, {
    "iso": "MR",
    "name": "Nouakchott"
  }, {
    "iso": "BF",
    "name": "Noumbiel"
  }, {
    "iso": "SI",
    "name": "Nova Goriška"
  }, {
    "iso": "CA",
    "name": "Nova Scotia"
  }, {
    "iso": "IT",
    "name": "Novara"
  }, {
    "iso": "MK",
    "name": "Novatsi"
  }, {
    "iso": "XK",
    "name": "Novo Brdo"
  }, {
    "iso": "SI",
    "name": "Novo Mesto"
  }, {
    "iso": "MK",
    "name": "Novo Selo"
  }, {
    "iso": "MW",
    "name": "Nsanje"
  }, {
    "iso": "MW",
    "name": "Ntcheu"
  }, {
    "iso": "MW",
    "name": "Ntchisi"
  }, {
    "iso": "UG",
    "name": "Ntoroko"
  }, {
    "iso": "UG",
    "name": "Ntungamo"
  }, {
    "iso": "PH",
    "name": "Nueva Ecija"
  }, {
    "iso": "VE",
    "name": "Nueva Esparta"
  }, {
    "iso": "NI",
    "name": "Nueva Segovia"
  }, {
    "iso": "PH",
    "name": "Nueva Vizcaya"
  }, {
    "iso": "MX",
    "name": "Nuevo León"
  }, {
    "iso": "SO",
    "name": "Nugaal"
  }, {
    "iso": "XZ",
    "name": "Null Island"
  }, {
    "iso": "GL",
    "name": "Nuna Allanngutsaaaliugaq"
  }, {
    "iso": "CA",
    "name": "Nunavut"
  }, {
    "iso": "IT",
    "name": "Nuoro"
  }, {
    "iso": "AF",
    "name": "Nuristan"
  }, {
    "iso": "ID",
    "name": "Nusa Tenggara Barat"
  }, {
    "iso": "ID",
    "name": "Nusa Tenggara Timur"
  }, {
    "iso": "LK",
    "name": "Nuvara Ĕliya"
  }, {
    "iso": "UG",
    "name": "Nwoya"
  }, {
    "iso": "GA",
    "name": "Nyanga"
  }, {
    "iso": "KE",
    "name": "Nyanza"
  }, {
    "iso": "GN",
    "name": "Nzérékoré"
  }, {
    "iso": "HU",
    "name": "Nógrád"
  }, {
    "iso": "MX",
    "name": "Oaxaca"
  }, {
    "iso": "AT",
    "name": "Oberösterreich"
  }, {
    "iso": "XK",
    "name": "Obilić"
  }, {
    "iso": "DJ",
    "name": "Obock"
  }, {
    "iso": "CH",
    "name": "Obwalden"
  }, {
    "iso": "MD",
    "name": "Ocniţa"
  }, {
    "iso": "HN",
    "name": "Ocotepeque"
  }, {
    "iso": "SI",
    "name": "Odranci"
  }, {
    "iso": "IE",
    "name": "Offaly"
  }, {
    "iso": "IT",
    "name": "Ogliastra"
  }, {
    "iso": "GA",
    "name": "Ogooué-Ivindo"
  }, {
    "iso": "GA",
    "name": "Ogooué-Lolo"
  }, {
    "iso": "GA",
    "name": "Ogooué-Maritime"
  }, {
    "iso": "LV",
    "name": "Ogres novads"
  }, {
    "iso": "NG",
    "name": "Ogun"
  }, {
    "iso": "NA",
    "name": "Ohangwena"
  }, {
    "iso": "US",
    "name": "Ohio"
  }, {
    "iso": "MK",
    "name": "Ohrid"
  }, {
    "iso": "GW",
    "name": "Oio"
  }, {
    "iso": "FR",
    "name": "Oise"
  }, {
    "iso": "JP",
    "name": "Oita"
  }, {
    "iso": "JP",
    "name": "Okayama"
  }, {
    "iso": "JP",
    "name": "Okinawa"
  }, {
    "iso": "US",
    "name": "Oklahoma"
  }, {
    "iso": "LV",
    "name": "Olaines novads"
  }, {
    "iso": "LV",
    "name": "Olaines novads"
  }, {
    "iso": "HN",
    "name": "Olancho"
  }, {
    "iso": "IT",
    "name": "Olbia-Tempio"
  }, {
    "iso": "GB",
    "name": "Oldham"
  }, {
    "iso": "CZ",
    "name": "Olomoucký"
  }, {
    "iso": "PH",
    "name": "Olongapo"
  }, {
    "iso": "RO",
    "name": "Olt"
  }, {
    "iso": "GB",
    "name": "Omagh"
  }, {
    "iso": "NA",
    "name": "Omaheke"
  }, {
    "iso": "CF",
    "name": "Ombella-M'Poko"
  }, {
    "iso": "NA",
    "name": "Omusati"
  }, {
    "iso": "NG",
    "name": "Ondo"
  }, {
    "iso": "CA",
    "name": "Ontario"
  }, {
    "iso": "BE",
    "name": "Oost-Vlanderen"
  }, {
    "iso": "SI",
    "name": "Oplotnica"
  }, {
    "iso": "PL",
    "name": "Opolskie"
  }, {
    "iso": "NO",
    "name": "Oppland"
  }, {
    "iso": "XK",
    "name": "Orahovac"
  }, {
    "iso": "DZ",
    "name": "Oran"
  }, {
    "iso": "BZ",
    "name": "Orange Walk"
  }, {
    "iso": "AD",
    "name": "Ordino"
  }, {
    "iso": "TR",
    "name": "Ordu"
  }, {
    "iso": "AZ",
    "name": "Ordubad"
  }, {
    "iso": "US",
    "name": "Oregon"
  }, {
    "iso": "EC",
    "name": "Orellana"
  }, {
    "iso": "MD",
    "name": "Orhei"
  }, {
    "iso": "MN",
    "name": "Orhon"
  }, {
    "iso": "MA",
    "name": "Oriental"
  }, {
    "iso": "CD",
    "name": "Orientale"
  }, {
    "iso": "IN",
    "name": "Orissa"
  }, {
    "iso": "IT",
    "name": "Oristano"
  }, {
    "iso": "GB",
    "name": "Orkney Islands"
  }, {
    "iso": "PH",
    "name": "Ormoc"
  }, {
    "iso": "SI",
    "name": "Ormož"
  }, {
    "iso": "FR",
    "name": "Orne"
  }, {
    "iso": "ET",
    "name": "Oromiya"
  }, {
    "iso": "BO",
    "name": "Oruro"
  }, {
    "iso": "JP",
    "name": "Osaka"
  }, {
    "iso": "KG",
    "name": "Osh"
  }, {
    "iso": "NA",
    "name": "Oshana"
  }, {
    "iso": "NA",
    "name": "Oshikoto"
  }, {
    "iso": "HR",
    "name": "Osjecko-baranjska županija"
  }, {
    "iso": "NO",
    "name": "Oslo"
  }, {
    "iso": "MK",
    "name": "Oslomej"
  }, {
    "iso": "TR",
    "name": "Osmaniye"
  }, {
    "iso": "FI",
    "name": "Ostrobothnia"
  }, {
    "iso": "NG",
    "name": "Osun"
  }, {
    "iso": "NZ",
    "name": "Otago Region"
  }, {
    "iso": "KH",
    "name": "Otdar Mean Chey"
  }, {
    "iso": "NA",
    "name": "Otjozondjupa"
  }, {
    "iso": "UG",
    "name": "Otuke"
  }, {
    "iso": "TD",
    "name": "Ouaddaï"
  }, {
    "iso": "CF",
    "name": "Ouaka"
  }, {
    "iso": "DZ",
    "name": "Ouargla"
  }, {
    "iso": "BF",
    "name": "Oubritenga"
  }, {
    "iso": "BF",
    "name": "Oudalan"
  }, {
    "iso": "LA",
    "name": "Oudômxai"
  }, {
    "iso": "MA",
    "name": "Oued el Dahab"
  }, {
    "iso": "HT",
    "name": "Ouest"
  }, {
    "iso": "CM",
    "name": "Ouest"
  }, {
    "iso": "CF",
    "name": "Ouham"
  }, {
    "iso": "CF",
    "name": "Ouham-Pendé"
  }, {
    "iso": "DZ",
    "name": "Oum el Bouaghi"
  }, {
    "iso": "ES",
    "name": "Ourense"
  }, {
    "iso": "SC",
    "name": "Outer Islands"
  }, {
    "iso": "BJ",
    "name": "Ouémé"
  }, {
    "iso": "NL",
    "name": "Overijssel"
  }, {
    "iso": "GB",
    "name": "Oxfordshire"
  }, {
    "iso": "UG",
    "name": "Oyam"
  }, {
    "iso": "NG",
    "name": "Oyo"
  }, {
    "iso": "LV",
    "name": "Ozolnieku novads"
  }, {
    "iso": "AZ",
    "name": "Oğuz"
  }, {
    "iso": "KP",
    "name": "P'yŏngan-bukto"
  }, {
    "iso": "KP",
    "name": "P'yŏngan-namdo"
  }, {
    "iso": "KP",
    "name": "P'yŏngyang"
  }, {
    "iso": "BR",
    "name": "PARANÁ"
  }, {
    "iso": "BR",
    "name": "PARAÍBA"
  }, {
    "iso": "BR",
    "name": "PARÁ"
  }, {
    "iso": "BR",
    "name": "PIAUÍ"
  }, {
    "iso": "UG",
    "name": "Pader"
  }, {
    "iso": "IT",
    "name": "Padova"
  }, {
    "iso": "BM",
    "name": "Paget"
  }, {
    "iso": "MY",
    "name": "Pahang"
  }, {
    "iso": "AF",
    "name": "Paktika"
  }, {
    "iso": "AF",
    "name": "Paktya"
  }, {
    "iso": "WS",
    "name": "Palauli"
  }, {
    "iso": "PH",
    "name": "Palawan"
  }, {
    "iso": "ES",
    "name": "Palencia"
  }, {
    "iso": "IT",
    "name": "Palermo"
  }, {
    "iso": "UG",
    "name": "Pallisa"
  }, {
    "iso": "CK",
    "name": "Palmerston"
  }, {
    "iso": "UM",
    "name": "Palmyra Atoll"
  }, {
    "iso": "PH",
    "name": "Pampanga"
  }, {
    "iso": "MU",
    "name": "Pamplemousses"
  }, {
    "iso": "PA",
    "name": "Panama"
  }, {
    "iso": "BO",
    "name": "Pando"
  }, {
    "iso": "LT",
    "name": "Panevežys"
  }, {
    "iso": "PH",
    "name": "Pangasinan"
  }, {
    "iso": "MT",
    "name": "Paola"
  }, {
    "iso": "ID",
    "name": "Papua"
  }, {
    "iso": "SR",
    "name": "Para"
  }, {
    "iso": "CN",
    "name": "Paracel Islands"
  }, {
    "iso": "PY",
    "name": "Paraguarí"
  }, {
    "iso": "SR",
    "name": "Paramaribo"
  }, {
    "iso": "PH",
    "name": "Paranaque"
  }, {
    "iso": "CZ",
    "name": "Pardubický"
  }, {
    "iso": "LV",
    "name": "Pargaujas novads"
  }, {
    "iso": "FR",
    "name": "Paris"
  }, {
    "iso": "IT",
    "name": "Parma"
  }, {
    "iso": "BT",
    "name": "Paro"
  }, {
    "iso": "AF",
    "name": "Parwan"
  }, {
    "iso": "AF",
    "name": "Parwan"
  }, {
    "iso": "FR",
    "name": "Pas-de-Calais"
  }, {
    "iso": "PH",
    "name": "Pasay"
  }, {
    "iso": "PE",
    "name": "Pasco"
  }, {
    "iso": "PH",
    "name": "Pasig"
  }, {
    "iso": "BF",
    "name": "Passoré"
  }, {
    "iso": "EC",
    "name": "Pastaza"
  }, {
    "iso": "PH",
    "name": "Pateros"
  }, {
    "iso": "TH",
    "name": "Pathum Thani"
  }, {
    "iso": "TH",
    "name": "Pattani"
  }, {
    "iso": "CV",
    "name": "Paul"
  }, {
    "iso": "IT",
    "name": "Pavia"
  }, {
    "iso": "LV",
    "name": "Pavilostas novads"
  }, {
    "iso": "KZ",
    "name": "Pavlodar"
  }, {
    "iso": "UY",
    "name": "Paysandú"
  }, {
    "iso": "DO",
    "name": "Pedernales"
  }, {
    "iso": "EE",
    "name": "Peipsi järv"
  }, {
    "iso": "MK",
    "name": "Pelagonia"
  }, {
    "iso": "PW",
    "name": "Peleliu"
  }, {
    "iso": "BT",
    "name": "Pemagatsel"
  }, {
    "iso": "BM",
    "name": "Pembroke"
  }, {
    "iso": "MT",
    "name": "Pembroke"
  }, {
    "iso": "GB",
    "name": "Pembrokeshire"
  }, {
    "iso": "TT",
    "name": "Penal-Debe"
  }, {
    "iso": "VU",
    "name": "Penama"
  }, {
    "iso": "TW",
    "name": "Penghu"
  }, {
    "iso": "US",
    "name": "Pennsylvania"
  }, {
    "iso": "CK",
    "name": "Penrhyn"
  }, {
    "iso": "MY",
    "name": "Perak"
  }, {
    "iso": "DO",
    "name": "Peravia"
  }, {
    "iso": "MY",
    "name": "Perlis"
  }, {
    "iso": "BR",
    "name": "Pernambuco"
  }, {
    "iso": "GB",
    "name": "Perth and Kinross"
  }, {
    "iso": "IT",
    "name": "Perugia"
  }, {
    "iso": "IT",
    "name": "Pesaro E Urbino"
  }, {
    "iso": "IT",
    "name": "Pescara"
  }, {
    "iso": "SI",
    "name": "Pesnica"
  }, {
    "iso": "HU",
    "name": "Pest"
  }, {
    "iso": "GT",
    "name": "Petén"
  }, {
    "iso": "XK",
    "name": "Peć"
  }, {
    "iso": "MW",
    "name": "Phalombe"
  }, {
    "iso": "TH",
    "name": "Phangnga"
  }, {
    "iso": "TH",
    "name": "Phatthalung"
  }, {
    "iso": "TH",
    "name": "Phayao"
  }, {
    "iso": "MK",
    "name": "Phecevo"
  }, {
    "iso": "TH",
    "name": "Phetchabun"
  }, {
    "iso": "TH",
    "name": "Phetchaburi"
  }, {
    "iso": "TH",
    "name": "Phichit"
  }, {
    "iso": "TH",
    "name": "Phitsanulok"
  }, {
    "iso": "KH",
    "name": "Phnom Penh"
  }, {
    "iso": "TH",
    "name": "Phra Nakhon Si Ayutthaya"
  }, {
    "iso": "TH",
    "name": "Phrae"
  }, {
    "iso": "TH",
    "name": "Phuket"
  }, {
    "iso": "LA",
    "name": "Phôngsali"
  }, {
    "iso": "VN",
    "name": "Phú Thọ"
  }, {
    "iso": "VN",
    "name": "Phú Yên"
  }, {
    "iso": "IT",
    "name": "Piacenza"
  }, {
    "iso": "EC",
    "name": "Pichincha"
  }, {
    "iso": "MT",
    "name": "Pieta'"
  }, {
    "iso": "CU",
    "name": "Pinar del Río"
  }, {
    "iso": "TW",
    "name": "Pingtung"
  }, {
    "iso": "SI",
    "name": "Piran"
  }, {
    "iso": "FI",
    "name": "Pirkanmaa"
  }, {
    "iso": "RS",
    "name": "Pirotski upravni okrug"
  }, {
    "iso": "IT",
    "name": "Pisa"
  }, {
    "iso": "IT",
    "name": "Pistoia"
  }, {
    "iso": "GN",
    "name": "Pita"
  }, {
    "iso": "PN",
    "name": "Pitcairn Islands"
  }, {
    "iso": "PE",
    "name": "Piura"
  }, {
    "iso": "SI",
    "name": "Pivka"
  }, {
    "iso": "MU",
    "name": "Plaines Wilhems"
  }, {
    "iso": "SC",
    "name": "Plaisance"
  }, {
    "iso": "MK",
    "name": "Plasnica"
  }, {
    "iso": "NG",
    "name": "Plateau"
  }, {
    "iso": "BJ",
    "name": "Plateau"
  }, {
    "iso": "TG",
    "name": "Plateaux"
  }, {
    "iso": "CG",
    "name": "Plateaux"
  }, {
    "iso": "ME",
    "name": "Plav"
  }, {
    "iso": "LV",
    "name": "Plavinu novads"
  }, {
    "iso": "ME",
    "name": "Pljevlja"
  }, {
    "iso": "ME",
    "name": "Plužine"
  }, {
    "iso": "CZ",
    "name": "Plzeňský"
  }, {
    "iso": "SI",
    "name": "Podcetrtek"
  }, {
    "iso": "ME",
    "name": "Podgorica"
  }, {
    "iso": "PL",
    "name": "Podkarpackie"
  }, {
    "iso": "PL",
    "name": "Podlaskie"
  }, {
    "iso": "SI",
    "name": "Podlehnik"
  }, {
    "iso": "XK",
    "name": "Podujevo"
  }, {
    "iso": "RS",
    "name": "Podunavski upravni okrug"
  }, {
    "iso": "SI",
    "name": "Podvelka"
  }, {
    "iso": "FM",
    "name": "Pohnpei"
  }, {
    "iso": "TT",
    "name": "Point Fortin"
  }, {
    "iso": "SC",
    "name": "Pointe La Rue"
  }, {
    "iso": "CG",
    "name": "Pointe Noire"
  }, {
    "iso": "MK",
    "name": "Polog"
  }, {
    "iso": "SI",
    "name": "Polzela"
  }, {
    "iso": "GY",
    "name": "Pomeroon-Supenaam"
  }, {
    "iso": "RS",
    "name": "Pomoravski upravni okrug"
  }, {
    "iso": "PL",
    "name": "Pomorskie"
  }, {
    "iso": "BF",
    "name": "Poni"
  }, {
    "iso": "ES",
    "name": "Pontevedra"
  }, {
    "iso": "CG",
    "name": "Pool"
  }, {
    "iso": "GB",
    "name": "Poole"
  }, {
    "iso": "IT",
    "name": "Pordenone"
  }, {
    "iso": "SC",
    "name": "Port Glaud"
  }, {
    "iso": "MU",
    "name": "Port Louis"
  }, {
    "iso": "MU",
    "name": "Port Louis city"
  }, {
    "iso": "TT",
    "name": "Port of Spain"
  }, {
    "iso": "PT",
    "name": "Portalegre"
  }, {
    "iso": "JM",
    "name": "Portland"
  }, {
    "iso": "PT",
    "name": "Porto"
  }, {
    "iso": "CV",
    "name": "Porto Novo"
  }, {
    "iso": "VE",
    "name": "Portuguesa"
  }, {
    "iso": "BA",
    "name": "Posavina"
  }, {
    "iso": "SI",
    "name": "Postojna"
  }, {
    "iso": "GY",
    "name": "Potaro-Siparuni"
  }, {
    "iso": "IT",
    "name": "Potenza"
  }, {
    "iso": "BO",
    "name": "Potosí"
  }, {
    "iso": "KH",
    "name": "Pouthisat"
  }, {
    "iso": "GB",
    "name": "Powys"
  }, {
    "iso": "HR",
    "name": "Požeško-slavonska županija"
  }, {
    "iso": "TH",
    "name": "Prachin Buri"
  }, {
    "iso": "TH",
    "name": "Prachuap Khiri Khan"
  }, {
    "iso": "RO",
    "name": "Prahova"
  }, {
    "iso": "CV",
    "name": "Praia"
  }, {
    "iso": "LC",
    "name": "Praslin"
  }, {
    "iso": "IT",
    "name": "Prato"
  }, {
    "iso": "KH",
    "name": "Preah Vihéar"
  }, {
    "iso": "SI",
    "name": "Prebold"
  }, {
    "iso": "SI",
    "name": "Preddvor"
  }, {
    "iso": "LV",
    "name": "Preilu novads"
  }, {
    "iso": "PY",
    "name": "Presidente Hayes"
  }, {
    "iso": "SI",
    "name": "Prevalje"
  }, {
    "iso": "KH",
    "name": "Prey Vêng"
  }, {
    "iso": "SK",
    "name": "Prešovský kraj"
  }, {
    "iso": "LV",
    "name": "Priekules novads"
  }, {
    "iso": "LV",
    "name": "Priekulu novads"
  }, {
    "iso": "MK",
    "name": "Prilep"
  }, {
    "iso": "HR",
    "name": "Primorsko-goranska županija"
  }, {
    "iso": "CA",
    "name": "Prince Edward Island"
  }, {
    "iso": "TT",
    "name": "Princes Town"
  }, {
    "iso": "XK",
    "name": "Prizren"
  }, {
    "iso": "XK",
    "name": "Priština"
  }, {
    "iso": "MK",
    "name": "Probistip"
  }, {
    "iso": "TC",
    "name": "Providenciales and West Caicos"
  }, {
    "iso": "ST",
    "name": "Príncipe"
  }, {
    "iso": "SI",
    "name": "Ptuj"
  }, {
    "iso": "SI",
    "name": "Puconci"
  }, {
    "iso": "IN",
    "name": "Puducherry"
  }, {
    "iso": "MX",
    "name": "Puebla"
  }, {
    "iso": "DO",
    "name": "Puerto Plata"
  }, {
    "iso": "PH",
    "name": "Puerto Princesa"
  }, {
    "iso": "PR",
    "name": "Puerto Rico"
  }, {
    "iso": "CK",
    "name": "Pukapuka"
  }, {
    "iso": "MY",
    "name": "Pulau Pinang"
  }, {
    "iso": "BT",
    "name": "Punakha"
  }, {
    "iso": "PK",
    "name": "Punjab"
  }, {
    "iso": "IN",
    "name": "Punjab"
  }, {
    "iso": "CR",
    "name": "Puntarenas"
  }, {
    "iso": "XX",
    "name": "Puntland"
  }, {
    "iso": "MY",
    "name": "Putrajaya"
  }, {
    "iso": "LK",
    "name": "Puttalama"
  }, {
    "iso": "CO",
    "name": "Putumayo"
  }, {
    "iso": "FR",
    "name": "Puy-de-Dôme"
  }, {
    "iso": "TZ",
    "name": "Pwani"
  }, {
    "iso": "FR",
    "name": "Pyrénées-Atlantiques"
  }, {
    "iso": "FR",
    "name": "Pyrénées-Orientales"
  }, {
    "iso": "FI",
    "name": "Päijänne-Tavastia"
  }, {
    "iso": "FI",
    "name": "Päijänne-Tavastia"
  }, {
    "iso": "EE",
    "name": "Pärnumaa"
  }, {
    "iso": "EE",
    "name": "Pärnumaa"
  }, {
    "iso": "EE",
    "name": "Põlvamaa"
  }, {
    "iso": "RS",
    "name": "Pčinjski upravni okrug"
  }, {
    "iso": "LK",
    "name": "Pŏḷŏnnaruva"
  }, {
    "iso": "GL",
    "name": "Qaasuitsup Kommunia"
  }, {
    "iso": "LS",
    "name": "Qacha's Nek"
  }, {
    "iso": "MT",
    "name": "Qala"
  }, {
    "iso": "PS",
    "name": "Qalqilya"
  }, {
    "iso": "PS",
    "name": "Qalqilya"
  }, {
    "iso": "KZ",
    "name": "Qaraghandy"
  }, {
    "iso": "AZ",
    "name": "Qax"
  }, {
    "iso": "AZ",
    "name": "Qazax"
  }, {
    "iso": "IR",
    "name": "Qazvin"
  }, {
    "iso": "GL",
    "name": "Qeqqata Kommunia"
  }, {
    "iso": "EG",
    "name": "Qina"
  }, {
    "iso": "CN",
    "name": "Qinghai"
  }, {
    "iso": "AZ",
    "name": "Qobustan"
  }, {
    "iso": "IR",
    "name": "Qom"
  }, {
    "iso": "MT",
    "name": "Qormi (Citta' Pinto)"
  }, {
    "iso": "KZ",
    "name": "Qostanay"
  }, {
    "iso": "MT",
    "name": "Qrendi"
  }, {
    "iso": "MU",
    "name": "Quatre Bornes"
  }, {
    "iso": "AZ",
    "name": "Quba"
  }, {
    "iso": "AZ",
    "name": "Qubadli"
  }, {
    "iso": "CA",
    "name": "Quebec"
  }, {
    "iso": "AU",
    "name": "Queensland"
  }, {
    "iso": "MX",
    "name": "Querétaro"
  }, {
    "iso": "GT",
    "name": "Quezaltenango"
  }, {
    "iso": "PH",
    "name": "Quezon"
  }, {
    "iso": "PH",
    "name": "Quezon City"
  }, {
    "iso": "GT",
    "name": "Quiché"
  }, {
    "iso": "GW",
    "name": "Quinara"
  }, {
    "iso": "CO",
    "name": "Quindío"
  }, {
    "iso": "MX",
    "name": "Quintana Roo"
  }, {
    "iso": "PH",
    "name": "Quirino"
  }, {
    "iso": "SY",
    "name": "Quneitra"
  }, {
    "iso": "AZ",
    "name": "Qusar"
  }, {
    "iso": "LS",
    "name": "Quthing"
  }, {
    "iso": "VN",
    "name": "Quàng Nam"
  }, {
    "iso": "VN",
    "name": "Quảng Bình"
  }, {
    "iso": "VN",
    "name": "Quảng Ngãi"
  }, {
    "iso": "VN",
    "name": "Quảng Ninh"
  }, {
    "iso": "VN",
    "name": "Quảng Trị"
  }, {
    "iso": "KZ",
    "name": "Qyzylorda"
  }, {
    "iso": "AZ",
    "name": "Qəbələ"
  }, {
    "iso": "BR",
    "name": "RONDÔNIA"
  }, {
    "iso": "MV",
    "name": "Raa"
  }, {
    "iso": "MT",
    "name": "Rabat (Ghawdex) (Citta' Vittoria)"
  }, {
    "iso": "MT",
    "name": "Rabat (Malta)"
  }, {
    "iso": "MA",
    "name": "Rabat - Salé - Zemmour - Zaer"
  }, {
    "iso": "SI",
    "name": "Race-Fram"
  }, {
    "iso": "GE",
    "name": "Racha-Lechkhumi-Kvemo Svaneti"
  }, {
    "iso": "SI",
    "name": "Radece"
  }, {
    "iso": "SI",
    "name": "Radenci"
  }, {
    "iso": "SI",
    "name": "Radlje ob Dravi"
  }, {
    "iso": "MK",
    "name": "Radovis"
  }, {
    "iso": "SI",
    "name": "Radovljica"
  }, {
    "iso": "PS",
    "name": "Rafah"
  }, {
    "iso": "BS",
    "name": "Ragged Island"
  }, {
    "iso": "IT",
    "name": "Ragusa"
  }, {
    "iso": "MH",
    "name": "Railik Chain"
  }, {
    "iso": "IN",
    "name": "Rajasthan"
  }, {
    "iso": "BD",
    "name": "Rajshahi"
  }, {
    "iso": "CK",
    "name": "Rakahanga"
  }, {
    "iso": "UG",
    "name": "Rakai"
  }, {
    "iso": "MM",
    "name": "Rakhine"
  }, {
    "iso": "PS",
    "name": "Ramallah"
  }, {
    "iso": "PS",
    "name": "Ramallah"
  }, {
    "iso": "PS",
    "name": "Ramallah"
  }, {
    "iso": "PS",
    "name": "Ramallah"
  }, {
    "iso": "BD",
    "name": "Rangpur"
  }, {
    "iso": "MK",
    "name": "Rankovce"
  }, {
    "iso": "TH",
    "name": "Ranong"
  }, {
    "iso": "EE",
    "name": "Raplamaa"
  }, {
    "iso": "NP",
    "name": "Rapti"
  }, {
    "iso": "CK",
    "name": "Rarotonga"
  }, {
    "iso": "AE",
    "name": "Ras Al Khaymah"
  }, {
    "iso": "RS",
    "name": "Rasinski upravni okrug"
  }, {
    "iso": "KP",
    "name": "Rasŏn"
  }, {
    "iso": "MH",
    "name": "Ratak Chain"
  }, {
    "iso": "TH",
    "name": "Ratchaburi"
  }, {
    "iso": "LK",
    "name": "Ratnapura"
  }, {
    "iso": "LV",
    "name": "Raunas novads"
  }, {
    "iso": "LV",
    "name": "Raunas novads"
  }, {
    "iso": "IT",
    "name": "Ravenna"
  }, {
    "iso": "SI",
    "name": "Ravne na Koroškem"
  }, {
    "iso": "YE",
    "name": "Raymah"
  }, {
    "iso": "TH",
    "name": "Rayong"
  }, {
    "iso": "IR",
    "name": "Razavi Khorasan"
  }, {
    "iso": "SI",
    "name": "Razkrižje"
  }, {
    "iso": "RS",
    "name": "Raški upravni okrug"
  }, {
    "iso": "GB",
    "name": "Reading"
  }, {
    "iso": "SD",
    "name": "Red Sea"
  }, {
    "iso": "GB",
    "name": "Redbridge"
  }, {
    "iso": "GB",
    "name": "Redcar and Cleveland"
  }, {
    "iso": "AG",
    "name": "Redonda"
  }, {
    "iso": "IT",
    "name": "Reggio Di Calabria"
  }, {
    "iso": "IT",
    "name": "Reggio Nell'Emilia"
  }, {
    "iso": "DZ",
    "name": "Relizane"
  }, {
    "iso": "GB",
    "name": "Renfrewshire"
  }, {
    "iso": "SB",
    "name": "Rennell and Bellona"
  }, {
    "iso": "BA",
    "name": "Rep. Srpska"
  }, {
    "iso": "MK",
    "name": "Resen"
  }, {
    "iso": "GT",
    "name": "Retalhuleu"
  }, {
    "iso": "IS",
    "name": "Reykjavík"
  }, {
    "iso": "LV",
    "name": "Rezekne"
  }, {
    "iso": "LV",
    "name": "Rezeknes novads"
  }, {
    "iso": "MD",
    "name": "Rezina"
  }, {
    "iso": "DE",
    "name": "Rheinland-Pfalz"
  }, {
    "iso": "US",
    "name": "Rhode Island"
  }, {
    "iso": "GB",
    "name": "Rhondda, Cynon, Taf"
  }, {
    "iso": "FR",
    "name": "Rhône"
  }, {
    "iso": "ID",
    "name": "Riau"
  }, {
    "iso": "CV",
    "name": "Ribeira Brava"
  }, {
    "iso": "CV",
    "name": "Ribeira Grande"
  }, {
    "iso": "CV",
    "name": "Ribeira Grande de Santiago"
  }, {
    "iso": "SI",
    "name": "Ribnica"
  }, {
    "iso": "SI",
    "name": "Ribnica na Pohorju"
  }, {
    "iso": "GB",
    "name": "Richmond upon Thames"
  }, {
    "iso": "LV",
    "name": "Riebinu novads"
  }, {
    "iso": "IT",
    "name": "Rieti"
  }, {
    "iso": "SY",
    "name": "Rif Dimashq"
  }, {
    "iso": "KE",
    "name": "Rift Valley"
  }, {
    "iso": "LV",
    "name": "Riga"
  }, {
    "iso": "IT",
    "name": "Rimini"
  }, {
    "iso": "TT",
    "name": "Rio Claro-Mayaro"
  }, {
    "iso": "BR",
    "name": "Rio De Janeiro"
  }, {
    "iso": "BR",
    "name": "Rio Grande Do Norte"
  }, {
    "iso": "BR",
    "name": "Rio Grande Do Sul"
  }, {
    "iso": "NI",
    "name": "Rio San Juan"
  }, {
    "iso": "CO",
    "name": "Risaralda"
  }, {
    "iso": "NI",
    "name": "Rivas"
  }, {
    "iso": "LR",
    "name": "River Cess"
  }, {
    "iso": "LR",
    "name": "River Gee"
  }, {
    "iso": "SD",
    "name": "River Nile"
  }, {
    "iso": "UY",
    "name": "Rivera"
  }, {
    "iso": "NG",
    "name": "Rivers"
  }, {
    "iso": "MU",
    "name": "Rivière Noire"
  }, {
    "iso": "MU",
    "name": "Rivière du Rempart"
  }, {
    "iso": "PH",
    "name": "Rizal"
  }, {
    "iso": "TR",
    "name": "Rize"
  }, {
    "iso": "UY",
    "name": "Rocha"
  }, {
    "iso": "GB",
    "name": "Rochdale"
  }, {
    "iso": "SC",
    "name": "Roche Caïman"
  }, {
    "iso": "MU",
    "name": "Rodrigues"
  }, {
    "iso": "NO",
    "name": "Rogaland"
  }, {
    "iso": "SI",
    "name": "Rogatec"
  }, {
    "iso": "SI",
    "name": "Rogaška Slatina"
  }, {
    "iso": "SI",
    "name": "Rogašovci"
  }, {
    "iso": "TH",
    "name": "Roi Et"
  }, {
    "iso": "LV",
    "name": "Rojas novads"
  }, {
    "iso": "IT",
    "name": "Roma"
  }, {
    "iso": "PH",
    "name": "Romblon"
  }, {
    "iso": "LV",
    "name": "Ropažu novads"
  }, {
    "iso": "BR",
    "name": "Roraima"
  }, {
    "iso": "IE",
    "name": "Roscommon"
  }, {
    "iso": "AS",
    "name": "Rose Atoll"
  }, {
    "iso": "MP",
    "name": "Rota"
  }, {
    "iso": "GB",
    "name": "Rotherham"
  }, {
    "iso": "FJ",
    "name": "Rotuma"
  }, {
    "iso": "IT",
    "name": "Rovigo"
  }, {
    "iso": "ME",
    "name": "Rožaje"
  }, {
    "iso": "UG",
    "name": "Rubirizi"
  }, {
    "iso": "LV",
    "name": "Rucavas novads"
  }, {
    "iso": "LV",
    "name": "Rugaju novads"
  }, {
    "iso": "LV",
    "name": "Rujienas novads"
  }, {
    "iso": "UG",
    "name": "Rukungiri"
  }, {
    "iso": "TZ",
    "name": "Rukwa"
  }, {
    "iso": "BS",
    "name": "Rum Cay"
  }, {
    "iso": "MW",
    "name": "Rumphi"
  }, {
    "iso": "LV",
    "name": "Rundales novads"
  }, {
    "iso": "BI",
    "name": "Rutana"
  }, {
    "iso": "GB",
    "name": "Rutland"
  }, {
    "iso": "TZ",
    "name": "Ruvuma"
  }, {
    "iso": "BI",
    "name": "Ruyigi"
  }, {
    "iso": "SI",
    "name": "Ruše"
  }, {
    "iso": "KP",
    "name": "Ryanggang"
  }, {
    "iso": "UY",
    "name": "Río Negro"
  }, {
    "iso": "AR",
    "name": "Río Negro"
  }, {
    "iso": "MD",
    "name": "Rîşcani"
  }, {
    "iso": "KH",
    "name": "Rôtânôkiri"
  }, {
    "iso": "TH",
    "name": "Sa Kaeo"
  }, {
    "iso": "YE",
    "name": "Sa`dah"
  }, {
    "iso": "EE",
    "name": "Saaremaa"
  }, {
    "iso": "EE",
    "name": "Saaremaa"
  }, {
    "iso": "EE",
    "name": "Saaremaa"
  }, {
    "iso": "EE",
    "name": "Saaremaa"
  }, {
    "iso": "EE",
    "name": "Saaremaa"
  }, {
    "iso": "DE",
    "name": "Saarland"
  }, {
    "iso": "AZ",
    "name": "Saatlı"
  }, {
    "iso": "MY",
    "name": "Sabah"
  }, {
    "iso": "LY",
    "name": "Sabha"
  }, {
    "iso": "AZ",
    "name": "Sabirabad"
  }, {
    "iso": "GT",
    "name": "Sacatepéquez"
  }, {
    "iso": "DE",
    "name": "Sachsen"
  }, {
    "iso": "DE",
    "name": "Sachsen-Anhalt"
  }, {
    "iso": "MT",
    "name": "Safi"
  }, {
    "iso": "JP",
    "name": "Saga"
  }, {
    "iso": "MM",
    "name": "Sagaing"
  }, {
    "iso": "NP",
    "name": "Sagarmatha"
  }, {
    "iso": "HK",
    "name": "Sai Kung"
  }, {
    "iso": "JM",
    "name": "Saint Andrew"
  }, {
    "iso": "VC",
    "name": "Saint Andrew"
  }, {
    "iso": "BB",
    "name": "Saint Andrew"
  }, {
    "iso": "GD",
    "name": "Saint Andrew"
  }, {
    "iso": "DM",
    "name": "Saint Andrew"
  }, {
    "iso": "JM",
    "name": "Saint Ann"
  }, {
    "iso": "KN",
    "name": "Saint Anne Sandy Point"
  }, {
    "iso": "MS",
    "name": "Saint Anthony"
  }, {
    "iso": "BL",
    "name": "Saint Barthélemy"
  }, {
    "iso": "JM",
    "name": "Saint Catherine"
  }, {
    "iso": "VI",
    "name": "Saint Croix"
  }, {
    "iso": "VC",
    "name": "Saint David"
  }, {
    "iso": "GD",
    "name": "Saint David"
  }, {
    "iso": "DM",
    "name": "Saint David"
  }, {
    "iso": "JM",
    "name": "Saint Elizabeth"
  }, {
    "iso": "AG",
    "name": "Saint George"
  }, {
    "iso": "VC",
    "name": "Saint George"
  }, {
    "iso": "BB",
    "name": "Saint George"
  }, {
    "iso": "GD",
    "name": "Saint George"
  }, {
    "iso": "DM",
    "name": "Saint George"
  }, {
    "iso": "KN",
    "name": "Saint George Basseterre"
  }, {
    "iso": "KN",
    "name": "Saint George Gingerland"
  }, {
    "iso": "BM",
    "name": "Saint George's"
  }, {
    "iso": "MS",
    "name": "Saint Georges"
  }, {
    "iso": "SH",
    "name": "Saint Helena"
  }, {
    "iso": "BB",
    "name": "Saint James"
  }, {
    "iso": "JM",
    "name": "Saint James"
  }, {
    "iso": "KN",
    "name": "Saint James Windward"
  }, {
    "iso": "BB",
    "name": "Saint John"
  }, {
    "iso": "GD",
    "name": "Saint John"
  }, {
    "iso": "VI",
    "name": "Saint John"
  }, {
    "iso": "DM",
    "name": "Saint John"
  }, {
    "iso": "AG",
    "name": "Saint John"
  }, {
    "iso": "KN",
    "name": "Saint John Capesterre"
  }, {
    "iso": "KN",
    "name": "Saint John Figtree"
  }, {
    "iso": "BB",
    "name": "Saint Joseph"
  }, {
    "iso": "DM",
    "name": "Saint Joseph"
  }, {
    "iso": "SC",
    "name": "Saint Louis"
  }, {
    "iso": "BB",
    "name": "Saint Lucy"
  }, {
    "iso": "DM",
    "name": "Saint Luke"
  }, {
    "iso": "GD",
    "name": "Saint Mark"
  }, {
    "iso": "DM",
    "name": "Saint Mark"
  }, {
    "iso": "MF",
    "name": "Saint Martin"
  }, {
    "iso": "JM",
    "name": "Saint Mary"
  }, {
    "iso": "AG",
    "name": "Saint Mary"
  }, {
    "iso": "KN",
    "name": "Saint Mary Cayon"
  }, {
    "iso": "BB",
    "name": "Saint Michael"
  }, {
    "iso": "VC",
    "name": "Saint Patrick"
  }, {
    "iso": "GD",
    "name": "Saint Patrick"
  }, {
    "iso": "DM",
    "name": "Saint Patrick"
  }, {
    "iso": "DM",
    "name": "Saint Paul"
  }, {
    "iso": "AG",
    "name": "Saint Paul"
  }, {
    "iso": "KN",
    "name": "Saint Paul Capesterre"
  }, {
    "iso": "KN",
    "name": "Saint Paul Charlestown"
  }, {
    "iso": "MS",
    "name": "Saint Peter"
  }, {
    "iso": "AG",
    "name": "Saint Peter"
  }, {
    "iso": "DM",
    "name": "Saint Peter"
  }, {
    "iso": "BB",
    "name": "Saint Peter"
  }, {
    "iso": "KN",
    "name": "Saint Peter Basseterre"
  }, {
    "iso": "AG",
    "name": "Saint Philip"
  }, {
    "iso": "BB",
    "name": "Saint Philip"
  }, {
    "iso": "VI",
    "name": "Saint Thomas"
  }, {
    "iso": "JM",
    "name": "Saint Thomas"
  }, {
    "iso": "BB",
    "name": "Saint Thomas"
  }, {
    "iso": "KN",
    "name": "Saint Thomas Lowland"
  }, {
    "iso": "KN",
    "name": "Saint Thomas Middle Island"
  }, {
    "iso": "SN",
    "name": "Saint-Louis"
  }, {
    "iso": "PM",
    "name": "Saint-Pierre"
  }, {
    "iso": "MP",
    "name": "Saipan"
  }, {
    "iso": "JP",
    "name": "Saitama"
  }, {
    "iso": "TR",
    "name": "Sakarya"
  }, {
    "iso": "TH",
    "name": "Sakon Nakhon"
  }, {
    "iso": "CV",
    "name": "Sal"
  }, {
    "iso": "IQ",
    "name": "Sala ad-Din"
  }, {
    "iso": "LV",
    "name": "Salacgrivas novads"
  }, {
    "iso": "ES",
    "name": "Salamanca"
  }, {
    "iso": "TD",
    "name": "Salamat"
  }, {
    "iso": "LV",
    "name": "Salas novads"
  }, {
    "iso": "LV",
    "name": "Salaspils novads"
  }, {
    "iso": "LV",
    "name": "Saldus novads"
  }, {
    "iso": "IT",
    "name": "Salerno"
  }, {
    "iso": "PS",
    "name": "Salfit"
  }, {
    "iso": "PS",
    "name": "Salfit"
  }, {
    "iso": "GB",
    "name": "Salford"
  }, {
    "iso": "MW",
    "name": "Salima"
  }, {
    "iso": "TC",
    "name": "Salt Cay"
  }, {
    "iso": "AR",
    "name": "Salta"
  }, {
    "iso": "UY",
    "name": "Salto"
  }, {
    "iso": "AX",
    "name": "Saltvik"
  }, {
    "iso": "AZ",
    "name": "Salyan"
  }, {
    "iso": "AT",
    "name": "Salzburg"
  }, {
    "iso": "AF",
    "name": "Samangan"
  }, {
    "iso": "DO",
    "name": "Samaná"
  }, {
    "iso": "PH",
    "name": "Samar"
  }, {
    "iso": "UZ",
    "name": "Samarkand"
  }, {
    "iso": "BT",
    "name": "Samchi"
  }, {
    "iso": "BT",
    "name": "Samdrup Jongkhar"
  }, {
    "iso": "GE",
    "name": "Samegrelo-Zemo Svaneti"
  }, {
    "iso": "TR",
    "name": "Samsun"
  }, {
    "iso": "GE",
    "name": "Samtskhe-Javakheti"
  }, {
    "iso": "TH",
    "name": "Samut Prakan"
  }, {
    "iso": "TH",
    "name": "Samut Sakhon"
  }, {
    "iso": "TH",
    "name": "Samut Songkhram"
  }, {
    "iso": "AZ",
    "name": "Samux"
  }, {
    "iso": "CO",
    "name": "San Andrés y Providencia"
  }, {
    "iso": "DO",
    "name": "San Cristóbal"
  }, {
    "iso": "TT",
    "name": "San Fernando"
  }, {
    "iso": "MT",
    "name": "San Giljan"
  }, {
    "iso": "MT",
    "name": "San Gwann"
  }, {
    "iso": "CR",
    "name": "San José"
  }, {
    "iso": "UY",
    "name": "San José"
  }, {
    "iso": "DO",
    "name": "San José de Ocoa"
  }, {
    "iso": "AR",
    "name": "San Juan"
  }, {
    "iso": "PH",
    "name": "San Juan"
  }, {
    "iso": "DO",
    "name": "San Juan"
  }, {
    "iso": "TT",
    "name": "San Juan-Laventille"
  }, {
    "iso": "MT",
    "name": "San Lawrenz"
  }, {
    "iso": "AR",
    "name": "San Luis"
  }, {
    "iso": "MX",
    "name": "San Luis Potosí"
  }, {
    "iso": "GT",
    "name": "San Marcos"
  }, {
    "iso": "SM",
    "name": "San Marino"
  }, {
    "iso": "PE",
    "name": "San Martín"
  }, {
    "iso": "SV",
    "name": "San Miguel"
  }, {
    "iso": "MT",
    "name": "San Pawl Il-Bahar"
  }, {
    "iso": "PY",
    "name": "San Pedro"
  }, {
    "iso": "DO",
    "name": "San Pedro de Macorís"
  }, {
    "iso": "BS",
    "name": "San Salvador"
  }, {
    "iso": "SV",
    "name": "San Salvador"
  }, {
    "iso": "SV",
    "name": "San Vicente"
  }, {
    "iso": "YE",
    "name": "Sana'a"
  }, {
    "iso": "CU",
    "name": "Sancti Spíritus"
  }, {
    "iso": "PG",
    "name": "Sandaun"
  }, {
    "iso": "GB",
    "name": "Sandwell"
  }, {
    "iso": "AI",
    "name": "Sandy Ground"
  }, {
    "iso": "AI",
    "name": "Sandy Hill"
  }, {
    "iso": "BM",
    "name": "Sandys"
  }, {
    "iso": "CG",
    "name": "Sangha"
  }, {
    "iso": "CF",
    "name": "Sangha-Mbaéré"
  }, {
    "iso": "TT",
    "name": "Sangre Grande"
  }, {
    "iso": "BF",
    "name": "Sanguié"
  }, {
    "iso": "CH",
    "name": "Sankt Gallen"
  }, {
    "iso": "TR",
    "name": "Sanliurfa"
  }, {
    "iso": "VU",
    "name": "Sanma"
  }, {
    "iso": "BF",
    "name": "Sanmatenga"
  }, {
    "iso": "MT",
    "name": "Sannat"
  }, {
    "iso": "AD",
    "name": "Sant Julià de Lòria"
  }, {
    "iso": "SV",
    "name": "Santa Ana"
  }, {
    "iso": "HN",
    "name": "Santa Bárbara"
  }, {
    "iso": "BR",
    "name": "Santa Catarina"
  }, {
    "iso": "CV",
    "name": "Santa Catarina"
  }, {
    "iso": "CV",
    "name": "Santa Catarina do Fogo"
  }, {
    "iso": "BO",
    "name": "Santa Cruz"
  }, {
    "iso": "CV",
    "name": "Santa Cruz"
  }, {
    "iso": "AR",
    "name": "Santa Cruz"
  }, {
    "iso": "ES",
    "name": "Santa Cruz de Tenerife"
  }, {
    "iso": "EC",
    "name": "Santa Elena"
  }, {
    "iso": "AR",
    "name": "Santa Fe"
  }, {
    "iso": "MT",
    "name": "Santa Lucija"
  }, {
    "iso": "GT",
    "name": "Santa Rosa"
  }, {
    "iso": "MT",
    "name": "Santa Venera"
  }, {
    "iso": "CO",
    "name": "Santander"
  }, {
    "iso": "PT",
    "name": "Santarém"
  }, {
    "iso": "DO",
    "name": "Santiago"
  }, {
    "iso": "PH",
    "name": "Santiago"
  }, {
    "iso": "DO",
    "name": "Santiago Rodríguez"
  }, {
    "iso": "CU",
    "name": "Santiago de Cuba"
  }, {
    "iso": "AR",
    "name": "Santiago del Estero"
  }, {
    "iso": "DO",
    "name": "Santo Domingo"
  }, {
    "iso": "EC",
    "name": "Santo Domingo de los Tsáchilas"
  }, {
    "iso": "TH",
    "name": "Saraburi"
  }, {
    "iso": "MK",
    "name": "Saraj"
  }, {
    "iso": "BA",
    "name": "Sarajevo"
  }, {
    "iso": "BA",
    "name": "Sarajevo-romanija"
  }, {
    "iso": "SR",
    "name": "Saramacca"
  }, {
    "iso": "PH",
    "name": "Sarangani"
  }, {
    "iso": "LA",
    "name": "Saravan"
  }, {
    "iso": "MY",
    "name": "Sarawak"
  }, {
    "iso": "AF",
    "name": "Sari Pul"
  }, {
    "iso": "GG",
    "name": "Sark"
  }, {
    "iso": "FR",
    "name": "Sarthe"
  }, {
    "iso": "CA",
    "name": "Saskatchewan"
  }, {
    "iso": "IT",
    "name": "Sassari"
  }, {
    "iso": "FI",
    "name": "Satakunta"
  }, {
    "iso": "RO",
    "name": "Satu Mare"
  }, {
    "iso": "TH",
    "name": "Satun"
  }, {
    "iso": "WS",
    "name": "Satupa'itea"
  }, {
    "iso": "LV",
    "name": "Saulkrastu novads"
  }, {
    "iso": "MG",
    "name": "Sava"
  }, {
    "iso": "CI",
    "name": "Savanes"
  }, {
    "iso": "TG",
    "name": "Savanes"
  }, {
    "iso": "LA",
    "name": "Savannakhét"
  }, {
    "iso": "MU",
    "name": "Savanne"
  }, {
    "iso": "FR",
    "name": "Savoie"
  }, {
    "iso": "IT",
    "name": "Savona"
  }, {
    "iso": "DZ",
    "name": "Saïda"
  }, {
    "iso": "FR",
    "name": "Saône-et-Loire"
  }, {
    "iso": "XZ",
    "name": "Scarborough Reef"
  }, {
    "iso": "CH",
    "name": "Schaffhausen"
  }, {
    "iso": "DE",
    "name": "Schleswig-Holstein"
  }, {
    "iso": "CH",
    "name": "Schwyz"
  }, {
    "iso": "GB",
    "name": "Scottish Borders"
  }, {
    "iso": "GB",
    "name": "Sefton"
  }, {
    "iso": "ES",
    "name": "Segovia"
  }, {
    "iso": "FR",
    "name": "Seine-Maritime"
  }, {
    "iso": "FR",
    "name": "Seine-Saint-Denis"
  }, {
    "iso": "FR",
    "name": "Seine-et-Marne"
  }, {
    "iso": "LV",
    "name": "Sejas novads"
  }, {
    "iso": "KR",
    "name": "Sejong"
  }, {
    "iso": "MY",
    "name": "Selangor"
  }, {
    "iso": "BW",
    "name": "Selebi-Phikwe"
  }, {
    "iso": "MN",
    "name": "Selenge"
  }, {
    "iso": "SI",
    "name": "Selnica ob Dravi"
  }, {
    "iso": "UG",
    "name": "Sembabule"
  }, {
    "iso": "ER",
    "name": "Semenawi Keyih Bahri"
  }, {
    "iso": "SI",
    "name": "Semic"
  }, {
    "iso": "IR",
    "name": "Semnan"
  }, {
    "iso": "SD",
    "name": "Sennar"
  }, {
    "iso": "KR",
    "name": "Seoul"
  }, {
    "iso": "UG",
    "name": "Serere"
  }, {
    "iso": "BR",
    "name": "Sergipe"
  }, {
    "iso": "XX",
    "name": "Serranilla Bank"
  }, {
    "iso": "SM",
    "name": "Serravalle"
  }, {
    "iso": "NP",
    "name": "Seti"
  }, {
    "iso": "PT",
    "name": "Setúbal"
  }, {
    "iso": "RS",
    "name": "Severnobanatski upravni okrug"
  }, {
    "iso": "RS",
    "name": "Severnobački upravni okrug"
  }, {
    "iso": "ES",
    "name": "Sevilla"
  }, {
    "iso": "SI",
    "name": "Sevnica"
  }, {
    "iso": "SI",
    "name": "Sežana"
  }, {
    "iso": "TN",
    "name": "Sfax"
  }, {
    "iso": "HK",
    "name": "Sha Tin"
  }, {
    "iso": "CN",
    "name": "Shaanxi"
  }, {
    "iso": "SO",
    "name": "Shabeellaha Dhexe"
  }, {
    "iso": "SO",
    "name": "Shabeellaha Hoose"
  }, {
    "iso": "YE",
    "name": "Shabwah"
  }, {
    "iso": "HK",
    "name": "Sham Shui Po"
  }, {
    "iso": "EG",
    "name": "Shamal Sina'"
  }, {
    "iso": "MM",
    "name": "Shan"
  }, {
    "iso": "CN",
    "name": "Shandong"
  }, {
    "iso": "CN",
    "name": "Shanghai"
  }, {
    "iso": "CN",
    "name": "Shanxi"
  }, {
    "iso": "AE",
    "name": "Sharjah"
  }, {
    "iso": "MV",
    "name": "Shaviyani"
  }, {
    "iso": "UG",
    "name": "Sheema"
  }, {
    "iso": "VU",
    "name": "Shefa"
  }, {
    "iso": "GB",
    "name": "Sheffield"
  }, {
    "iso": "BT",
    "name": "Shemgang"
  }, {
    "iso": "GB",
    "name": "Shetland Islands"
  }, {
    "iso": "GE",
    "name": "Shida Kartli"
  }, {
    "iso": "JP",
    "name": "Shiga"
  }, {
    "iso": "JP",
    "name": "Shimane"
  }, {
    "iso": "TZ",
    "name": "Shinyanga"
  }, {
    "iso": "AM",
    "name": "Shirak"
  }, {
    "iso": "AZ",
    "name": "Shirvan"
  }, {
    "iso": "SZ",
    "name": "Shiselweni"
  }, {
    "iso": "JP",
    "name": "Shizuoka"
  }, {
    "iso": "AL",
    "name": "Shkodër"
  }, {
    "iso": "GB",
    "name": "Shropshire"
  }, {
    "iso": "TH",
    "name": "Si Sa Ket"
  }, {
    "iso": "RO",
    "name": "Sibiu"
  }, {
    "iso": "CN",
    "name": "Sichuan"
  }, {
    "iso": "DZ",
    "name": "Sidi Bel Abbès"
  }, {
    "iso": "TN",
    "name": "Sidi Bou Zid"
  }, {
    "iso": "KH",
    "name": "Siemréab"
  }, {
    "iso": "IT",
    "name": "Siena"
  }, {
    "iso": "WF",
    "name": "Sigave"
  }, {
    "iso": "MT",
    "name": "Siggiewi (Citta' Ferdinand)"
  }, {
    "iso": "GN",
    "name": "Siguiri"
  }, {
    "iso": "LV",
    "name": "Siguldas novads"
  }, {
    "iso": "TR",
    "name": "Siirt"
  }, {
    "iso": "ML",
    "name": "Sikasso"
  }, {
    "iso": "IN",
    "name": "Sikkim"
  }, {
    "iso": "TD",
    "name": "Sila"
  }, {
    "iso": "TN",
    "name": "Siliana"
  }, {
    "iso": "TZ",
    "name": "Simiyu"
  }, {
    "iso": "MX",
    "name": "Sinaloa"
  }, {
    "iso": "PK",
    "name": "Sind"
  }, {
    "iso": "TH",
    "name": "Sing Buri"
  }, {
    "iso": "TZ",
    "name": "Singida"
  }, {
    "iso": "LR",
    "name": "Sinoe"
  }, {
    "iso": "TR",
    "name": "Sinop"
  }, {
    "iso": "SX",
    "name": "Sint Maarten"
  }, {
    "iso": "SR",
    "name": "Sipaliwini"
  }, {
    "iso": "TT",
    "name": "Siparia"
  }, {
    "iso": "PH",
    "name": "Siquijor"
  }, {
    "iso": "IT",
    "name": "Siracusa"
  }, {
    "iso": "UZ",
    "name": "Sirdaryo"
  }, {
    "iso": "TR",
    "name": "Sirnak"
  }, {
    "iso": "UG",
    "name": "Sironko"
  }, {
    "iso": "HR",
    "name": "Sisacko-moslavacka županija"
  }, {
    "iso": "BF",
    "name": "Sissili"
  }, {
    "iso": "IR",
    "name": "Sistan and Baluchestan"
  }, {
    "iso": "TR",
    "name": "Sivas"
  }, {
    "iso": "AZ",
    "name": "Siyəzən"
  }, {
    "iso": "DK",
    "name": "Sjælland"
  }, {
    "iso": "DZ",
    "name": "Skikda"
  }, {
    "iso": "MK",
    "name": "Skopje"
  }, {
    "iso": "LV",
    "name": "Skriveru novads"
  }, {
    "iso": "LV",
    "name": "Skrundas novads"
  }, {
    "iso": "SE",
    "name": "Skåne"
  }, {
    "iso": "MT",
    "name": "Sliema"
  }, {
    "iso": "IE",
    "name": "Sligo"
  }, {
    "iso": "GB",
    "name": "Slough"
  }, {
    "iso": "SI",
    "name": "Slovenj Gradec"
  }, {
    "iso": "SI",
    "name": "Slovenska Bistrica"
  }, {
    "iso": "SI",
    "name": "Slovenske Konjice"
  }, {
    "iso": "LV",
    "name": "Smiltenes novads"
  }, {
    "iso": "BM",
    "name": "Smith's"
  }, {
    "iso": "SI",
    "name": "Sodražica"
  }, {
    "iso": "MZ",
    "name": "Sofala"
  }, {
    "iso": "MG",
    "name": "Sofia"
  }, {
    "iso": "NO",
    "name": "Sogn og Fjordane"
  }, {
    "iso": "NG",
    "name": "Sokoto"
  }, {
    "iso": "SI",
    "name": "Solcava"
  }, {
    "iso": "MD",
    "name": "Soldăneşti"
  }, {
    "iso": "GB",
    "name": "Solihull"
  }, {
    "iso": "GT",
    "name": "Sololá"
  }, {
    "iso": "CH",
    "name": "Solothurn"
  }, {
    "iso": "ET",
    "name": "Somali"
  }, {
    "iso": "XX",
    "name": "Somaliland"
  }, {
    "iso": "GB",
    "name": "Somerset"
  }, {
    "iso": "FR",
    "name": "Somme"
  }, {
    "iso": "HU",
    "name": "Somogy"
  }, {
    "iso": "VN",
    "name": "Son La"
  }, {
    "iso": "IT",
    "name": "Sondrio"
  }, {
    "iso": "TH",
    "name": "Songkhla"
  }, {
    "iso": "MX",
    "name": "Sonora"
  }, {
    "iso": "SV",
    "name": "Sonsonate"
  }, {
    "iso": "PW",
    "name": "Sonsorol"
  }, {
    "iso": "MK",
    "name": "Sopiste"
  }, {
    "iso": "ES",
    "name": "Soria"
  }, {
    "iso": "UY",
    "name": "Soriano"
  }, {
    "iso": "MD",
    "name": "Soroca"
  }, {
    "iso": "UG",
    "name": "Soroti"
  }, {
    "iso": "PH",
    "name": "Sorsogon"
  }, {
    "iso": "AX",
    "name": "Sottunga"
  }, {
    "iso": "LC",
    "name": "Soufrière"
  }, {
    "iso": "DZ",
    "name": "Souk Ahras"
  }, {
    "iso": "BF",
    "name": "Soum"
  }, {
    "iso": "BF",
    "name": "Sourou"
  }, {
    "iso": "MA",
    "name": "Souss - Massa - Draâ"
  }, {
    "iso": "TN",
    "name": "Sousse"
  }, {
    "iso": "BS",
    "name": "South Abaco"
  }, {
    "iso": "BS",
    "name": "South Andros"
  }, {
    "iso": "AU",
    "name": "South Australia"
  }, {
    "iso": "GB",
    "name": "South Ayrshire"
  }, {
    "iso": "TC",
    "name": "South Caicos and East Caicos"
  }, {
    "iso": "US",
    "name": "South Carolina"
  }, {
    "iso": "KR",
    "name": "South Chungcheong"
  }, {
    "iso": "PH",
    "name": "South Cotabato"
  }, {
    "iso": "US",
    "name": "South Dakota"
  }, {
    "iso": "IE",
    "name": "South Dublin"
  }, {
    "iso": "SG",
    "name": "South East"
  }, {
    "iso": "BS",
    "name": "South Eleuthera"
  }, {
    "iso": "GS",
    "name": "South Georgia and the South Sandwich Islands"
  }, {
    "iso": "GB",
    "name": "South Gloucestershire"
  }, {
    "iso": "KR",
    "name": "South Gyeongsang"
  }, {
    "iso": "AI",
    "name": "South Hill"
  }, {
    "iso": "KR",
    "name": "South Jeolla"
  }, {
    "iso": "FI",
    "name": "South Karelia"
  }, {
    "iso": "KZ",
    "name": "South Kazakhstan"
  }, {
    "iso": "IR",
    "name": "South Khorasan"
  }, {
    "iso": "SD",
    "name": "South Kordufan"
  }, {
    "iso": "GB",
    "name": "South Lanarkshire"
  }, {
    "iso": "LB",
    "name": "South Lebanon"
  }, {
    "iso": "IE",
    "name": "South Tipperary"
  }, {
    "iso": "GB",
    "name": "South Tyneside"
  }, {
    "iso": "SG",
    "name": "South West"
  }, {
    "iso": "BW",
    "name": "South-East"
  }, {
    "iso": "BM",
    "name": "Southampton"
  }, {
    "iso": "MK",
    "name": "Southeastern"
  }, {
    "iso": "MK",
    "name": "Southeastern"
  }, {
    "iso": "GB",
    "name": "Southend-on-Sea"
  }, {
    "iso": "HK",
    "name": "Southern"
  }, {
    "iso": "BW",
    "name": "Southern"
  }, {
    "iso": "SL",
    "name": "Southern"
  }, {
    "iso": "RW",
    "name": "Southern"
  }, {
    "iso": "ZM",
    "name": "Southern"
  }, {
    "iso": "SD",
    "name": "Southern Darfur"
  }, {
    "iso": "PG",
    "name": "Southern Highlands"
  }, {
    "iso": "PH",
    "name": "Southern Leyte"
  }, {
    "iso": "ET",
    "name": "Southern Nations, Nationalities and Peoples"
  }, {
    "iso": "FI",
    "name": "Southern Ostrobothnia"
  }, {
    "iso": "FI",
    "name": "Southern Savonia"
  }, {
    "iso": "NZ",
    "name": "Southland Region"
  }, {
    "iso": "GB",
    "name": "Southwark"
  }, {
    "iso": "FI",
    "name": "Southwest Finland"
  }, {
    "iso": "BW",
    "name": "Sowa"
  }, {
    "iso": "BS",
    "name": "Spanish Wells"
  }, {
    "iso": "HR",
    "name": "Splitsko-dalmatinska županija"
  }, {
    "iso": "XZ",
    "name": "Spratly Islands"
  }, {
    "iso": "XK",
    "name": "Srbica"
  }, {
    "iso": "RS",
    "name": "Srednjobanatski upravni okrug"
  }, {
    "iso": "RS",
    "name": "Sremski upravni okrug"
  }, {
    "iso": "NL",
    "name": "St. Eustatius"
  }, {
    "iso": "GB",
    "name": "St. Helens"
  }, {
    "iso": "MF",
    "name": "St. Martin"
  }, {
    "iso": "GB",
    "name": "Staffordshire"
  }, {
    "iso": "BZ",
    "name": "Stann Creek"
  }, {
    "iso": "SI",
    "name": "Starše"
  }, {
    "iso": "AT",
    "name": "Steiermark"
  }, {
    "iso": "AZ",
    "name": "Stepanakert"
  }, {
    "iso": "GB",
    "name": "Stirling"
  }, {
    "iso": "SE",
    "name": "Stockholm"
  }, {
    "iso": "GB",
    "name": "Stockport"
  }, {
    "iso": "GB",
    "name": "Stockton-on-Tees"
  }, {
    "iso": "AI",
    "name": "Stoney Ground"
  }, {
    "iso": "LV",
    "name": "Stopinu novads"
  }, {
    "iso": "GB",
    "name": "Strabane"
  }, {
    "iso": "LV",
    "name": "Strencu novads"
  }, {
    "iso": "MK",
    "name": "Struga"
  }, {
    "iso": "MD",
    "name": "Străşeni"
  }, {
    "iso": "MK",
    "name": "Studenicani"
  }, {
    "iso": "KH",
    "name": "Stœng Trêng"
  }, {
    "iso": "CZ",
    "name": "Středočeský"
  }, {
    "iso": "RO",
    "name": "Suceava"
  }, {
    "iso": "GT",
    "name": "Suchitepéquez"
  }, {
    "iso": "CO",
    "name": "Sucre"
  }, {
    "iso": "VE",
    "name": "Sucre"
  }, {
    "iso": "EC",
    "name": "Sucumbios"
  }, {
    "iso": "NC",
    "name": "Sud"
  }, {
    "iso": "CM",
    "name": "Sud"
  }, {
    "iso": "HT",
    "name": "Sud"
  }, {
    "iso": "CI",
    "name": "Sud-Bandama"
  }, {
    "iso": "CI",
    "name": "Sud-Comoé"
  }, {
    "iso": "HT",
    "name": "Sud-Est"
  }, {
    "iso": "CD",
    "name": "Sud-Kivu"
  }, {
    "iso": "CM",
    "name": "Sud-Ouest"
  }, {
    "iso": "GB",
    "name": "Suffolk"
  }, {
    "iso": "EG",
    "name": "Suhaj"
  }, {
    "iso": "TH",
    "name": "Sukhothai"
  }, {
    "iso": "ID",
    "name": "Sulawesi Barat"
  }, {
    "iso": "ID",
    "name": "Sulawesi Selatan"
  }, {
    "iso": "ID",
    "name": "Sulawesi Tengah"
  }, {
    "iso": "ID",
    "name": "Sulawesi Tenggara"
  }, {
    "iso": "ID",
    "name": "Sulawesi Utara"
  }, {
    "iso": "PH",
    "name": "Sultan Kudarat"
  }, {
    "iso": "PH",
    "name": "Sulu"
  }, {
    "iso": "ID",
    "name": "Sumatera Barat"
  }, {
    "iso": "ID",
    "name": "Sumatera Selatan"
  }, {
    "iso": "ID",
    "name": "Sumatera Utara"
  }, {
    "iso": "AZ",
    "name": "Sumqayıt"
  }, {
    "iso": "AX",
    "name": "Sund"
  }, {
    "iso": "GB",
    "name": "Sunderland"
  }, {
    "iso": "TH",
    "name": "Suphan Buri"
  }, {
    "iso": "TH",
    "name": "Surat Thani"
  }, {
    "iso": "PH",
    "name": "Surigao del Norte"
  }, {
    "iso": "PH",
    "name": "Surigao del Sur"
  }, {
    "iso": "TH",
    "name": "Surin"
  }, {
    "iso": "UZ",
    "name": "Surkhandarya"
  }, {
    "iso": "GB",
    "name": "Surrey"
  }, {
    "iso": "LY",
    "name": "Surt"
  }, {
    "iso": "GB",
    "name": "Sutton"
  }, {
    "iso": "XK",
    "name": "Suva Reka"
  }, {
    "iso": "IS",
    "name": "Suðurland"
  }, {
    "iso": "IS",
    "name": "Suðurnes"
  }, {
    "iso": "NO",
    "name": "Svalbard"
  }, {
    "iso": "KH",
    "name": "Svay Rieng"
  }, {
    "iso": "SI",
    "name": "Sveta Ana"
  }, {
    "iso": "SI",
    "name": "Sveti Andraž v Slovenskih Goricah"
  }, {
    "iso": "SI",
    "name": "Sveti Jurij"
  }, {
    "iso": "MK",
    "name": "Sveti Nikole"
  }, {
    "iso": "AS",
    "name": "Swain's Island"
  }, {
    "iso": "GB",
    "name": "Swansea"
  }, {
    "iso": "MT",
    "name": "Swieqi"
  }, {
    "iso": "GB",
    "name": "Swindon"
  }, {
    "iso": "DK",
    "name": "Syddanmark"
  }, {
    "iso": "BD",
    "name": "Sylhet"
  }, {
    "iso": "AM",
    "name": "Syunik"
  }, {
    "iso": "HU",
    "name": "Szabolcs-Szatmár-Bereg"
  }, {
    "iso": "BR",
    "name": "SÃO PAULO"
  }, {
    "iso": "DO",
    "name": "Sánchez Ramírez"
  }, {
    "iso": "CV",
    "name": "São Domingos"
  }, {
    "iso": "CV",
    "name": "São Filipe"
  }, {
    "iso": "CV",
    "name": "São Lourenço dos Órgãos"
  }, {
    "iso": "CV",
    "name": "São Miguel"
  }, {
    "iso": "CV",
    "name": "São Salvador do Mundo"
  }, {
    "iso": "ST",
    "name": "São Tomé"
  }, {
    "iso": "CV",
    "name": "São Vicente"
  }, {
    "iso": "SN",
    "name": "Sédhiou"
  }, {
    "iso": "ML",
    "name": "Ségou"
  }, {
    "iso": "BF",
    "name": "Séno"
  }, {
    "iso": "DZ",
    "name": "Sétif"
  }, {
    "iso": "MD",
    "name": "Sîngerei"
  }, {
    "iso": "VN",
    "name": "Sóc Trăng"
  }, {
    "iso": "SE",
    "name": "Södermanland"
  }, {
    "iso": "NO",
    "name": "Sør-Trøndelag"
  }, {
    "iso": "MN",
    "name": "Sühbaatar"
  }, {
    "iso": "RO",
    "name": "Sălaj"
  }, {
    "iso": "AZ",
    "name": "Sədərək"
  }, {
    "iso": "MT",
    "name": "Ta'  Xbiex"
  }, {
    "iso": "YE",
    "name": "Ta`izz"
  }, {
    "iso": "MX",
    "name": "Tabasco"
  }, {
    "iso": "SI",
    "name": "Tabor"
  }, {
    "iso": "TZ",
    "name": "Tabora"
  }, {
    "iso": "SA",
    "name": "Tabuk"
  }, {
    "iso": "PH",
    "name": "Tacloban"
  }, {
    "iso": "PE",
    "name": "Tacna"
  }, {
    "iso": "UY",
    "name": "Tacuarembó"
  }, {
    "iso": "DJ",
    "name": "Tadjourah"
  }, {
    "iso": "MA",
    "name": "Tadla - Azilal"
  }, {
    "iso": "TJ",
    "name": "Tadzhikistan Territories"
  }, {
    "iso": "VU",
    "name": "Tafea"
  }, {
    "iso": "JO",
    "name": "Tafilah"
  }, {
    "iso": "MR",
    "name": "Tagant"
  }, {
    "iso": "PH",
    "name": "Taguig"
  }, {
    "iso": "NE",
    "name": "Tahoua"
  }, {
    "iso": "HK",
    "name": "Tai Po"
  }, {
    "iso": "TW",
    "name": "Taichung City"
  }, {
    "iso": "TW",
    "name": "Tainan City"
  }, {
    "iso": "TW",
    "name": "Taipei City"
  }, {
    "iso": "TW",
    "name": "Taitung"
  }, {
    "iso": "LY",
    "name": "Tajura' wa an Nawahi al Arba"
  }, {
    "iso": "TH",
    "name": "Tak"
  }, {
    "iso": "SC",
    "name": "Takamaka"
  }, {
    "iso": "AF",
    "name": "Takhar"
  }, {
    "iso": "KH",
    "name": "Takêv"
  }, {
    "iso": "KG",
    "name": "Talas"
  }, {
    "iso": "LV",
    "name": "Talsu novads"
  }, {
    "iso": "DZ",
    "name": "Tamanghasset"
  }, {
    "iso": "MX",
    "name": "Tamaulipas"
  }, {
    "iso": "SN",
    "name": "Tambacounda"
  }, {
    "iso": "GB",
    "name": "Tameside"
  }, {
    "iso": "IN",
    "name": "Tamil Nadu"
  }, {
    "iso": "TD",
    "name": "Tandjilé"
  }, {
    "iso": "TZ",
    "name": "Tanga"
  }, {
    "iso": "MA",
    "name": "Tanger - Tétouan"
  }, {
    "iso": "MM",
    "name": "Tanintharyi"
  }, {
    "iso": "TW",
    "name": "Taoyuan"
  }, {
    "iso": "BF",
    "name": "Tapoa"
  }, {
    "iso": "NG",
    "name": "Taraba"
  }, {
    "iso": "MD",
    "name": "Taraclia"
  }, {
    "iso": "MD",
    "name": "Taraclia"
  }, {
    "iso": "NZ",
    "name": "Taranaki Region"
  }, {
    "iso": "IT",
    "name": "Taranto"
  }, {
    "iso": "BO",
    "name": "Tarija"
  }, {
    "iso": "PH",
    "name": "Tarlac"
  }, {
    "iso": "FR",
    "name": "Tarn"
  }, {
    "iso": "FR",
    "name": "Tarn-et-Garonne"
  }, {
    "iso": "CV",
    "name": "Tarrafal"
  }, {
    "iso": "CV",
    "name": "Tarrafal de São Nicolau"
  }, {
    "iso": "ES",
    "name": "Tarragona"
  }, {
    "iso": "EE",
    "name": "Tartumaa"
  }, {
    "iso": "EE",
    "name": "Tartumaa"
  }, {
    "iso": "SY",
    "name": "Tartus"
  }, {
    "iso": "MT",
    "name": "Tarxien"
  }, {
    "iso": "TM",
    "name": "Tashauz"
  }, {
    "iso": "BT",
    "name": "Tashi Yangtse"
  }, {
    "iso": "BT",
    "name": "Tashigang"
  }, {
    "iso": "UZ",
    "name": "Tashkent"
  }, {
    "iso": "UZ",
    "name": "Tashkent"
  }, {
    "iso": "NZ",
    "name": "Tasman Region"
  }, {
    "iso": "AU",
    "name": "Tasmania"
  }, {
    "iso": "TN",
    "name": "Tataouine"
  }, {
    "iso": "LT",
    "name": "Taurage"
  }, {
    "iso": "FI",
    "name": "Tavastia Proper"
  }, {
    "iso": "AM",
    "name": "Tavush"
  }, {
    "iso": "PH",
    "name": "Tawi-Tawi"
  }, {
    "iso": "MA",
    "name": "Taza - Al Hoceima - Taounate"
  }, {
    "iso": "GE",
    "name": "Tbilisi"
  }, {
    "iso": "MK",
    "name": "Tearce"
  }, {
    "iso": "IR",
    "name": "Tehran"
  }, {
    "iso": "TR",
    "name": "Tekirdag"
  }, {
    "iso": "IL",
    "name": "Tel Aviv"
  }, {
    "iso": "NO",
    "name": "Telemark"
  }, {
    "iso": "MD",
    "name": "Teleneşti"
  }, {
    "iso": "RO",
    "name": "Teleorman"
  }, {
    "iso": "GB",
    "name": "Telford and Wrekin"
  }, {
    "iso": "LT",
    "name": "Telšiai"
  }, {
    "iso": "BN",
    "name": "Temburong"
  }, {
    "iso": "SB",
    "name": "Temotu"
  }, {
    "iso": "US",
    "name": "Tennessee"
  }, {
    "iso": "IT",
    "name": "Teramo"
  }, {
    "iso": "IT",
    "name": "Terni"
  }, {
    "iso": "FR",
    "name": "Territoire de Belfort"
  }, {
    "iso": "ES",
    "name": "Teruel"
  }, {
    "iso": "LV",
    "name": "Tervetes novads"
  }, {
    "iso": "MZ",
    "name": "Tete"
  }, {
    "iso": "MK",
    "name": "Tetovo"
  }, {
    "iso": "US",
    "name": "Texas"
  }, {
    "iso": "MV",
    "name": "Thaa"
  }, {
    "iso": "LS",
    "name": "Thaba-Tseka"
  }, {
    "iso": "VN",
    "name": "Thanh Hóa"
  }, {
    "iso": "GB",
    "name": "The City of Brighton and Hove"
  }, {
    "iso": "AI",
    "name": "The Farrington"
  }, {
    "iso": "AI",
    "name": "The Quarter"
  }, {
    "iso": "AI",
    "name": "The Valley"
  }, {
    "iso": "BT",
    "name": "Thimphu"
  }, {
    "iso": "SN",
    "name": "Thiès"
  }, {
    "iso": "CH",
    "name": "Thurgau"
  }, {
    "iso": "GB",
    "name": "Thurrock"
  }, {
    "iso": "MW",
    "name": "Thyolo"
  }, {
    "iso": "VN",
    "name": "Thái Bình"
  }, {
    "iso": "VN",
    "name": "Thái Nguyên"
  }, {
    "iso": "DE",
    "name": "Thüringen"
  }, {
    "iso": "VN",
    "name": "Thừa Thiên - Huế"
  }, {
    "iso": "CN",
    "name": "Tianjin"
  }, {
    "iso": "DZ",
    "name": "Tiaret"
  }, {
    "iso": "TD",
    "name": "Tibesti"
  }, {
    "iso": "CH",
    "name": "Ticino"
  }, {
    "iso": "AR",
    "name": "Tierra del Fuego"
  }, {
    "iso": "ET",
    "name": "Tigray"
  }, {
    "iso": "NE",
    "name": "Tillabéri"
  }, {
    "iso": "ML",
    "name": "Timbuktu"
  }, {
    "iso": "RO",
    "name": "Timiş"
  }, {
    "iso": "DZ",
    "name": "Tindouf"
  }, {
    "iso": "MP",
    "name": "Tinian"
  }, {
    "iso": "DZ",
    "name": "Tipaza"
  }, {
    "iso": "MR",
    "name": "Tiris Zemmour"
  }, {
    "iso": "AT",
    "name": "Tirol"
  }, {
    "iso": "DZ",
    "name": "Tissemsilt"
  }, {
    "iso": "ME",
    "name": "Tivat"
  }, {
    "iso": "DZ",
    "name": "Tizi Ouzou"
  }, {
    "iso": "VN",
    "name": "Tiền Giang"
  }, {
    "iso": "MX",
    "name": "Tlaxcala"
  }, {
    "iso": "DZ",
    "name": "Tlemcen"
  }, {
    "iso": "BR",
    "name": "Tocantins"
  }, {
    "iso": "JP",
    "name": "Tochigi"
  }, {
    "iso": "TR",
    "name": "Tokat"
  }, {
    "iso": "JP",
    "name": "Tokushima"
  }, {
    "iso": "JP",
    "name": "Tokyo"
  }, {
    "iso": "ES",
    "name": "Toledo"
  }, {
    "iso": "BZ",
    "name": "Toledo"
  }, {
    "iso": "CO",
    "name": "Tolima"
  }, {
    "iso": "SI",
    "name": "Tolmin"
  }, {
    "iso": "HU",
    "name": "Tolna"
  }, {
    "iso": "GW",
    "name": "Tombali"
  }, {
    "iso": "TO",
    "name": "Tongatapu"
  }, {
    "iso": "BT",
    "name": "Tongsa"
  }, {
    "iso": "RS",
    "name": "Toplički upravni okrug"
  }, {
    "iso": "VU",
    "name": "Torba"
  }, {
    "iso": "GB",
    "name": "Torbay"
  }, {
    "iso": "GB",
    "name": "Torfaen"
  }, {
    "iso": "IT",
    "name": "Torino"
  }, {
    "iso": "UG",
    "name": "Tororo"
  }, {
    "iso": "GT",
    "name": "Totonicapán"
  }, {
    "iso": "JP",
    "name": "Tottori"
  }, {
    "iso": "GN",
    "name": "Tougué"
  }, {
    "iso": "AZ",
    "name": "Tovuz"
  }, {
    "iso": "GB",
    "name": "Tower Hamlets"
  }, {
    "iso": "JP",
    "name": "Toyama"
  }, {
    "iso": "TN",
    "name": "Tozeur"
  }, {
    "iso": "TR",
    "name": "Trabzon"
  }, {
    "iso": "GB",
    "name": "Trafford"
  }, {
    "iso": "TH",
    "name": "Trang"
  }, {
    "iso": "IT",
    "name": "Trapani"
  }, {
    "iso": "MR",
    "name": "Trarza"
  }, {
    "iso": "TH",
    "name": "Trat"
  }, {
    "iso": "SI",
    "name": "Trbovlje"
  }, {
    "iso": "BA",
    "name": "Trebinje"
  }, {
    "iso": "SI",
    "name": "Trebnje"
  }, {
    "iso": "UY",
    "name": "Treinta y Tres"
  }, {
    "iso": "JM",
    "name": "Trelawny"
  }, {
    "iso": "SK",
    "name": "Trenciansky kraj"
  }, {
    "iso": "MY",
    "name": "Trengganu"
  }, {
    "iso": "IT",
    "name": "Trento"
  }, {
    "iso": "IT",
    "name": "Treviso"
  }, {
    "iso": "IT",
    "name": "Trieste"
  }, {
    "iso": "LK",
    "name": "Trikuṇāmalaya"
  }, {
    "iso": "KN",
    "name": "Trinity Palmetto Point"
  }, {
    "iso": "IN",
    "name": "Tripura"
  }, {
    "iso": "SH",
    "name": "Tristan da Cunha"
  }, {
    "iso": "SK",
    "name": "Trnavský kraj"
  }, {
    "iso": "SI",
    "name": "Trnovska vas"
  }, {
    "iso": "NO",
    "name": "Troms"
  }, {
    "iso": "VE",
    "name": "Trujillo"
  }, {
    "iso": "SI",
    "name": "Trzin"
  }, {
    "iso": "VN",
    "name": "Trà Vinh"
  }, {
    "iso": "SI",
    "name": "Tržič"
  }, {
    "iso": "HK",
    "name": "Tsuen Wan"
  }, {
    "iso": "WS",
    "name": "Tuamasaga"
  }, {
    "iso": "PF",
    "name": "Tuamotu-Gambier"
  }, {
    "iso": "PS",
    "name": "Tubas"
  }, {
    "iso": "AR",
    "name": "Tucumán"
  }, {
    "iso": "HK",
    "name": "Tuen Mun"
  }, {
    "iso": "LV",
    "name": "Tukuma novads"
  }, {
    "iso": "RO",
    "name": "Tulcea"
  }, {
    "iso": "RO",
    "name": "Tulcea"
  }, {
    "iso": "PS",
    "name": "Tulkarem"
  }, {
    "iso": "PE",
    "name": "Tumbes"
  }, {
    "iso": "TT",
    "name": "Tunapuna/Piarco"
  }, {
    "iso": "TR",
    "name": "Tunceli"
  }, {
    "iso": "EC",
    "name": "Tungurahua"
  }, {
    "iso": "TN",
    "name": "Tunis"
  }, {
    "iso": "SI",
    "name": "Turnišče"
  }, {
    "iso": "BN",
    "name": "Tutong"
  }, {
    "iso": "TV",
    "name": "Tuvalu"
  }, {
    "iso": "BF",
    "name": "Tuy"
  }, {
    "iso": "VN",
    "name": "Tuyên Quang"
  }, {
    "iso": "BA",
    "name": "Tuzla"
  }, {
    "iso": "VE",
    "name": "Táchira"
  }, {
    "iso": "VN",
    "name": "Tây Ninh"
  }, {
    "iso": "DZ",
    "name": "Tébessa"
  }, {
    "iso": "GN",
    "name": "Télimélé"
  }, {
    "iso": "MN",
    "name": "Töv"
  }, {
    "iso": "AZ",
    "name": "Tərtər"
  }, {
    "iso": "MD",
    "name": "UAT din Stînga Nistrului"
  }, {
    "iso": "MD",
    "name": "UAT din Stînga Nistrului"
  }, {
    "iso": "NR",
    "name": "Uaboe"
  }, {
    "iso": "TH",
    "name": "Ubon Ratchathani"
  }, {
    "iso": "AZ",
    "name": "Ucar"
  }, {
    "iso": "PE",
    "name": "Ucayali"
  }, {
    "iso": "IT",
    "name": "Udine"
  }, {
    "iso": "TH",
    "name": "Udon Thani"
  }, {
    "iso": "MN",
    "name": "Ulaanbaatar"
  }, {
    "iso": "ME",
    "name": "Ulcinj"
  }, {
    "iso": "KR",
    "name": "Ulsan"
  }, {
    "iso": "AE",
    "name": "Umm Al Qaywayn"
  }, {
    "iso": "QA",
    "name": "Umm Salal"
  }, {
    "iso": "BA",
    "name": "Una-Sana"
  }, {
    "iso": "MD",
    "name": "Ungheni"
  }, {
    "iso": "MD",
    "name": "Unitatea Teritotrială Autonomă Găgăuzia"
  }, {
    "iso": "MD",
    "name": "Unitatea Teritotrială Autonomă Găgăuzia"
  }, {
    "iso": "MD",
    "name": "Unitatea Teritotrială Autonomă Găgăuzia"
  }, {
    "iso": "MD",
    "name": "Unitatea Teritotrială Autonomă Găgăuzia"
  }, {
    "iso": "SY",
    "name": "United Nations Disengagement Observer Force"
  }, {
    "iso": "SS",
    "name": "Unity"
  }, {
    "iso": "GY",
    "name": "Upper Demerara-Berbice"
  }, {
    "iso": "GH",
    "name": "Upper East"
  }, {
    "iso": "SS",
    "name": "Upper Nile"
  }, {
    "iso": "GM",
    "name": "Upper River"
  }, {
    "iso": "GY",
    "name": "Upper Takutu-Upper Essequibo"
  }, {
    "iso": "GH",
    "name": "Upper West"
  }, {
    "iso": "SE",
    "name": "Uppsala"
  }, {
    "iso": "CH",
    "name": "Uri"
  }, {
    "iso": "XK",
    "name": "Uroševac"
  }, {
    "iso": "AF",
    "name": "Uruzgan"
  }, {
    "iso": "AF",
    "name": "Uruzgan"
  }, {
    "iso": "TR",
    "name": "Usak"
  }, {
    "iso": "SV",
    "name": "Usulután"
  }, {
    "iso": "US",
    "name": "Utah"
  }, {
    "iso": "LT",
    "name": "Utena"
  }, {
    "iso": "TH",
    "name": "Uthai Thani"
  }, {
    "iso": "NL",
    "name": "Utrecht"
  }, {
    "iso": "IN",
    "name": "Uttar Pradesh"
  }, {
    "iso": "TH",
    "name": "Uttaradit"
  }, {
    "iso": "IN",
    "name": "Uttaranchal"
  }, {
    "iso": "FI",
    "name": "Uusimaa"
  }, {
    "iso": "MN",
    "name": "Uvs"
  }, {
    "iso": "AO",
    "name": "Uíge"
  }, {
    "iso": "WS",
    "name": "Va'a-o-Fonoti"
  }, {
    "iso": "MV",
    "name": "Vaavu"
  }, {
    "iso": "MU",
    "name": "Vacoas-Phoenix"
  }, {
    "iso": "LV",
    "name": "Vainodes novads"
  }, {
    "iso": "WS",
    "name": "Vaisigano"
  }, {
    "iso": "CF",
    "name": "Vakaga"
  }, {
    "iso": "MG",
    "name": "Vakinankaratra"
  }, {
    "iso": "FR",
    "name": "Val-d'Oise"
  }, {
    "iso": "FR",
    "name": "Val-de-Marne"
  }, {
    "iso": "CH",
    "name": "Valais"
  }, {
    "iso": "MK",
    "name": "Valandovo"
  }, {
    "iso": "GB",
    "name": "Vale of Glamorgan"
  }, {
    "iso": "ES",
    "name": "Valencia/València"
  }, {
    "iso": "PH",
    "name": "Valenzuela"
  }, {
    "iso": "EE",
    "name": "Valgamaa"
  }, {
    "iso": "LV",
    "name": "Valkas novads"
  }, {
    "iso": "ES",
    "name": "Valladolid"
  }, {
    "iso": "HN",
    "name": "Valle"
  }, {
    "iso": "IT",
    "name": "Valle D'Aosta"
  }, {
    "iso": "CO",
    "name": "Valle del Cauca"
  }, {
    "iso": "MT",
    "name": "Valletta (Citta' Umilissima)"
  }, {
    "iso": "CI",
    "name": "Vallée du Bandama"
  }, {
    "iso": "LV",
    "name": "Valmiera"
  }, {
    "iso": "DO",
    "name": "Valverde"
  }, {
    "iso": "TR",
    "name": "Van"
  }, {
    "iso": "FR",
    "name": "Var"
  }, {
    "iso": "LV",
    "name": "Varaklanu novads"
  }, {
    "iso": "HR",
    "name": "Varaždinska županija"
  }, {
    "iso": "MK",
    "name": "Vardar"
  }, {
    "iso": "IT",
    "name": "Varese"
  }, {
    "iso": "VE",
    "name": "Vargas"
  }, {
    "iso": "LV",
    "name": "Varkavas novads"
  }, {
    "iso": "HU",
    "name": "Vas"
  }, {
    "iso": "MK",
    "name": "Vasilevo"
  }, {
    "iso": "RO",
    "name": "Vaslui"
  }, {
    "iso": "VA",
    "name": "Vatican"
  }, {
    "iso": "MG",
    "name": "Vatovavy-Fitovinany"
  }, {
    "iso": "FR",
    "name": "Vaucluse"
  }, {
    "iso": "CH",
    "name": "Vaud"
  }, {
    "iso": "CO",
    "name": "Vaupés"
  }, {
    "iso": "TO",
    "name": "Vava'u"
  }, {
    "iso": "LK",
    "name": "Vavuniyāva"
  }, {
    "iso": "AM",
    "name": "Vayots Dzor"
  }, {
    "iso": "LV",
    "name": "Vecpiebalgas novads"
  }, {
    "iso": "LV",
    "name": "Vecumnieku novads"
  }, {
    "iso": "SI",
    "name": "Velenje"
  }, {
    "iso": "MK",
    "name": "Veles"
  }, {
    "iso": "SI",
    "name": "Velika Polana"
  }, {
    "iso": "SI",
    "name": "Velike Lašče"
  }, {
    "iso": "FR",
    "name": "Vendée"
  }, {
    "iso": "IT",
    "name": "Venezia"
  }, {
    "iso": "LV",
    "name": "Ventspils"
  }, {
    "iso": "LV",
    "name": "Ventspils novads"
  }, {
    "iso": "MX",
    "name": "Veracruz de Ignacio de la Llave"
  }, {
    "iso": "PA",
    "name": "Veraguas"
  }, {
    "iso": "IT",
    "name": "Verbano-Cusio-Ossola"
  }, {
    "iso": "IT",
    "name": "Vercelli"
  }, {
    "iso": "US",
    "name": "Vermont"
  }, {
    "iso": "IT",
    "name": "Verona"
  }, {
    "iso": "SI",
    "name": "Veržej"
  }, {
    "iso": "NO",
    "name": "Vest-Agder"
  }, {
    "iso": "IS",
    "name": "Vestfirðir"
  }, {
    "iso": "NO",
    "name": "Vestfold"
  }, {
    "iso": "IS",
    "name": "Vesturland"
  }, {
    "iso": "HU",
    "name": "Veszprém"
  }, {
    "iso": "MK",
    "name": "Vevčani"
  }, {
    "iso": "PT",
    "name": "Viana do Castelo"
  }, {
    "iso": "IT",
    "name": "Vibo Valentia"
  }, {
    "iso": "IT",
    "name": "Vicenza"
  }, {
    "iso": "CO",
    "name": "Vichada"
  }, {
    "iso": "AU",
    "name": "Victoria"
  }, {
    "iso": "SI",
    "name": "Videm"
  }, {
    "iso": "FR",
    "name": "Vienne"
  }, {
    "iso": "LA",
    "name": "Vientiane"
  }, {
    "iso": "LA",
    "name": "Vientiane (prefecture)"
  }, {
    "iso": "LV",
    "name": "Viesites novads"
  }, {
    "iso": "LC",
    "name": "Vieux Fort"
  }, {
    "iso": "PT",
    "name": "Vila Real"
  }, {
    "iso": "LV",
    "name": "Vilakas novads"
  }, {
    "iso": "LV",
    "name": "Vilanu novads"
  }, {
    "iso": "EE",
    "name": "Viljandimaa"
  }, {
    "iso": "CU",
    "name": "Villa Clara"
  }, {
    "iso": "TD",
    "name": "Ville de N'Djamena"
  }, {
    "iso": "LT",
    "name": "Vilnius"
  }, {
    "iso": "MK",
    "name": "Vinitsa"
  }, {
    "iso": "SI",
    "name": "Vipava"
  }, {
    "iso": "TL",
    "name": "Viqueque"
  }, {
    "iso": "US",
    "name": "Virginia"
  }, {
    "iso": "HR",
    "name": "Viroviticko-podravska županija"
  }, {
    "iso": "PT",
    "name": "Viseu"
  }, {
    "iso": "SI",
    "name": "Vitanje"
  }, {
    "iso": "BY",
    "name": "Vitebsk"
  }, {
    "iso": "IT",
    "name": "Viterbo"
  }, {
    "iso": "XK",
    "name": "Vitina"
  }, {
    "iso": "BE",
    "name": "Vlaams Brabant"
  }, {
    "iso": "BA",
    "name": "Vlasenica"
  }, {
    "iso": "AL",
    "name": "Vlorë"
  }, {
    "iso": "SI",
    "name": "Vodice"
  }, {
    "iso": "SI",
    "name": "Vojnik"
  }, {
    "iso": "GH",
    "name": "Volta"
  }, {
    "iso": "AT",
    "name": "Vorarlberg"
  }, {
    "iso": "FR",
    "name": "Vosges"
  }, {
    "iso": "RO",
    "name": "Vrancea"
  }, {
    "iso": "MK",
    "name": "Vraneštica"
  }, {
    "iso": "SI",
    "name": "Vransko"
  }, {
    "iso": "SI",
    "name": "Vrhnika"
  }, {
    "iso": "HR",
    "name": "Vukovarsko-srijemska županija"
  }, {
    "iso": "SI",
    "name": "Vuzenica"
  }, {
    "iso": "XK",
    "name": "Vučitrn"
  }, {
    "iso": "CZ",
    "name": "Vysočina"
  }, {
    "iso": "RO",
    "name": "Vâlcea"
  }, {
    "iso": "SE",
    "name": "Värmland"
  }, {
    "iso": "SE",
    "name": "Västerbotten"
  }, {
    "iso": "SE",
    "name": "Västernorrland"
  }, {
    "iso": "SE",
    "name": "Västmanland"
  }, {
    "iso": "SE",
    "name": "Västra Götaland"
  }, {
    "iso": "AX",
    "name": "Vårdö"
  }, {
    "iso": "EE",
    "name": "Võrumaa"
  }, {
    "iso": "VN",
    "name": "Vĩnh Long"
  }, {
    "iso": "VN",
    "name": "Vĩnh Phúc"
  }, {
    "iso": "TD",
    "name": "Wadi Fira"
  }, {
    "iso": "LY",
    "name": "Wadi al Hayaa"
  }, {
    "iso": "NZ",
    "name": "Waikato Region"
  }, {
    "iso": "JP",
    "name": "Wakayama"
  }, {
    "iso": "UM",
    "name": "Wake Atoll"
  }, {
    "iso": "GB",
    "name": "Wakefield"
  }, {
    "iso": "UG",
    "name": "Wakiso"
  }, {
    "iso": "GB",
    "name": "Walsall"
  }, {
    "iso": "GB",
    "name": "Waltham Forest"
  }, {
    "iso": "HK",
    "name": "Wan Chai"
  }, {
    "iso": "GB",
    "name": "Wandsworth"
  }, {
    "iso": "BT",
    "name": "Wangdi Phodrang"
  }, {
    "iso": "SR",
    "name": "Wanica"
  }, {
    "iso": "SS",
    "name": "Warap"
  }, {
    "iso": "AF",
    "name": "Wardak"
  }, {
    "iso": "PL",
    "name": "Warmińsko-mazurskie"
  }, {
    "iso": "GB",
    "name": "Warrington"
  }, {
    "iso": "BM",
    "name": "Warwick"
  }, {
    "iso": "GB",
    "name": "Warwickshire"
  }, {
    "iso": "US",
    "name": "Washington"
  }, {
    "iso": "IQ",
    "name": "Wasit"
  }, {
    "iso": "IE",
    "name": "Waterford"
  }, {
    "iso": "IE",
    "name": "Waterford City"
  }, {
    "iso": "GQ",
    "name": "Wele-Nzás"
  }, {
    "iso": "NZ",
    "name": "Wellington Region"
  }, {
    "iso": "IR",
    "name": "West Azarbaijan"
  }, {
    "iso": "SS",
    "name": "West Bahr-al-Ghazal"
  }, {
    "iso": "PS",
    "name": "West Bank"
  }, {
    "iso": "IN",
    "name": "West Bengal"
  }, {
    "iso": "GB",
    "name": "West Berkshire"
  }, {
    "iso": "BA",
    "name": "West Bosnia"
  }, {
    "iso": "GM",
    "name": "West Coast"
  }, {
    "iso": "NZ",
    "name": "West Coast Region"
  }, {
    "iso": "GB",
    "name": "West Dunbartonshire"
  }, {
    "iso": "AI",
    "name": "West End"
  }, {
    "iso": "SS",
    "name": "West Equatoria"
  }, {
    "iso": "BS",
    "name": "West Grand Bahama"
  }, {
    "iso": "BA",
    "name": "West Herzegovina"
  }, {
    "iso": "KZ",
    "name": "West Kazakhstan"
  }, {
    "iso": "GB",
    "name": "West Lothian"
  }, {
    "iso": "PG",
    "name": "West New Britain"
  }, {
    "iso": "GB",
    "name": "West Sussex"
  }, {
    "iso": "US",
    "name": "West Virginia"
  }, {
    "iso": "BE",
    "name": "West-Vlanderen"
  }, {
    "iso": "FJ",
    "name": "Western"
  }, {
    "iso": "SB",
    "name": "Western"
  }, {
    "iso": "KE",
    "name": "Western"
  }, {
    "iso": "PG",
    "name": "Western"
  }, {
    "iso": "SL",
    "name": "Western"
  }, {
    "iso": "GH",
    "name": "Western"
  }, {
    "iso": "AS",
    "name": "Western"
  }, {
    "iso": "ZM",
    "name": "Western"
  }, {
    "iso": "RW",
    "name": "Western"
  }, {
    "iso": "AU",
    "name": "Western Australia"
  }, {
    "iso": "ZA",
    "name": "Western Cape"
  }, {
    "iso": "SD",
    "name": "Western Darfur"
  }, {
    "iso": "PG",
    "name": "Western Highlands"
  }, {
    "iso": "EH",
    "name": "Western Sahara"
  }, {
    "iso": "TT",
    "name": "Western Tobago"
  }, {
    "iso": "IE",
    "name": "Westmeath"
  }, {
    "iso": "JM",
    "name": "Westmoreland"
  }, {
    "iso": "IE",
    "name": "Wexford"
  }, {
    "iso": "SD",
    "name": "White Nile"
  }, {
    "iso": "IE",
    "name": "Wicklow"
  }, {
    "iso": "PL",
    "name": "Wielkopolskie"
  }, {
    "iso": "AT",
    "name": "Wien"
  }, {
    "iso": "GB",
    "name": "Wigan"
  }, {
    "iso": "GB",
    "name": "Wiltshire"
  }, {
    "iso": "GB",
    "name": "Windsor and Maidenhead"
  }, {
    "iso": "PF",
    "name": "Windward Islands"
  }, {
    "iso": "GB",
    "name": "Wirral"
  }, {
    "iso": "US",
    "name": "Wisconsin"
  }, {
    "iso": "GB",
    "name": "Wokingham"
  }, {
    "iso": "HK",
    "name": "Wong Tai Sin"
  }, {
    "iso": "GB",
    "name": "Worcestershire"
  }, {
    "iso": "CI",
    "name": "Worodougou"
  }, {
    "iso": "GA",
    "name": "Wouleu-Ntem"
  }, {
    "iso": "GB",
    "name": "Wrexham"
  }, {
    "iso": "US",
    "name": "Wyoming"
  }, {
    "iso": "MT",
    "name": "Xaghra"
  }, {
    "iso": "LA",
    "name": "Xaignabouri"
  }, {
    "iso": "AZ",
    "name": "Xanlar"
  }, {
    "iso": "AZ",
    "name": "Xaçmaz"
  }, {
    "iso": "MT",
    "name": "Xewkija"
  }, {
    "iso": "MT",
    "name": "Xghajra"
  }, {
    "iso": "LA",
    "name": "Xiangkhoang"
  }, {
    "iso": "CN",
    "name": "Xinjiang"
  }, {
    "iso": "CN",
    "name": "Xizang"
  }, {
    "iso": "AZ",
    "name": "Xizı"
  }, {
    "iso": "AZ",
    "name": "Xocalı"
  }, {
    "iso": "AZ",
    "name": "Xocavənd"
  }, {
    "iso": "LA",
    "name": "Xékong"
  }, {
    "iso": "BF",
    "name": "Yagha"
  }, {
    "iso": "TH",
    "name": "Yala"
  }, {
    "iso": "TR",
    "name": "Yalova"
  }, {
    "iso": "JP",
    "name": "Yamagata"
  }, {
    "iso": "JP",
    "name": "Yamaguchi"
  }, {
    "iso": "JP",
    "name": "Yamanashi"
  }, {
    "iso": "MM",
    "name": "Yangon"
  }, {
    "iso": "FM",
    "name": "Yap"
  }, {
    "iso": "VE",
    "name": "Yaracuy"
  }, {
    "iso": "AZ",
    "name": "Yardımlı"
  }, {
    "iso": "NR",
    "name": "Yaren"
  }, {
    "iso": "TH",
    "name": "Yasothon"
  }, {
    "iso": "BF",
    "name": "Yatenga"
  }, {
    "iso": "HK",
    "name": "Yau Tsim Mong"
  }, {
    "iso": "IR",
    "name": "Yazd"
  }, {
    "iso": "AZ",
    "name": "Yevlakh"
  }, {
    "iso": "AZ",
    "name": "Yevlakh Rayon"
  }, {
    "iso": "TW",
    "name": "Yilan"
  }, {
    "iso": "NG",
    "name": "Yobe"
  }, {
    "iso": "ID",
    "name": "Yogyakarta"
  }, {
    "iso": "GN",
    "name": "Yomou"
  }, {
    "iso": "FR",
    "name": "Yonne"
  }, {
    "iso": "GB",
    "name": "York"
  }, {
    "iso": "HN",
    "name": "Yoro"
  }, {
    "iso": "TR",
    "name": "Yozgat"
  }, {
    "iso": "KG",
    "name": "Ysyk-Köl"
  }, {
    "iso": "MX",
    "name": "Yucatán"
  }, {
    "iso": "HK",
    "name": "Yuen Long"
  }, {
    "iso": "CA",
    "name": "Yukon"
  }, {
    "iso": "UG",
    "name": "Yumbe"
  }, {
    "iso": "TW",
    "name": "Yunlin"
  }, {
    "iso": "CN",
    "name": "Yunnan"
  }, {
    "iso": "FR",
    "name": "Yvelines"
  }, {
    "iso": "VN",
    "name": "Yên Bái"
  }, {
    "iso": "LK",
    "name": "Yāpanaya"
  }, {
    "iso": "MT",
    "name": "Zabbar (Citta' Hompesch)"
  }, {
    "iso": "AF",
    "name": "Zabul"
  }, {
    "iso": "GT",
    "name": "Zacapa"
  }, {
    "iso": "MX",
    "name": "Zacatecas"
  }, {
    "iso": "PL",
    "name": "Zachodniopomorskie"
  }, {
    "iso": "HR",
    "name": "Zadarska županija"
  }, {
    "iso": "TN",
    "name": "Zaghouan"
  }, {
    "iso": "HR",
    "name": "Zagrebacka županija"
  }, {
    "iso": "AO",
    "name": "Zaire"
  }, {
    "iso": "MK",
    "name": "Zajas"
  }, {
    "iso": "RS",
    "name": "Zaječarski upravni okrug"
  }, {
    "iso": "HU",
    "name": "Zala"
  }, {
    "iso": "PH",
    "name": "Zambales"
  }, {
    "iso": "MZ",
    "name": "Zambezia"
  }, {
    "iso": "PH",
    "name": "Zamboanga"
  }, {
    "iso": "PH",
    "name": "Zamboanga Sibugay"
  }, {
    "iso": "PH",
    "name": "Zamboanga del Norte"
  }, {
    "iso": "PH",
    "name": "Zamboanga del Sur"
  }, {
    "iso": "NG",
    "name": "Zamfara"
  }, {
    "iso": "ES",
    "name": "Zamora"
  }, {
    "iso": "EC",
    "name": "Zamora Chinchipe"
  }, {
    "iso": "IR",
    "name": "Zanjan"
  }, {
    "iso": "CI",
    "name": "Zanzan"
  }, {
    "iso": "TZ",
    "name": "Zanzibar South and Central"
  }, {
    "iso": "TZ",
    "name": "Zanzibar West"
  }, {
    "iso": "RS",
    "name": "Zapadnobački upravni okrug"
  }, {
    "iso": "AZ",
    "name": "Zaqatala"
  }, {
    "iso": "ES",
    "name": "Zaragoza"
  }, {
    "iso": "JO",
    "name": "Zarqa"
  }, {
    "iso": "SI",
    "name": "Zasavska"
  }, {
    "iso": "SI",
    "name": "Zavrc"
  }, {
    "iso": "MT",
    "name": "Zebbug (Ghawdex)"
  }, {
    "iso": "MT",
    "name": "Zebbug (Malta) (Citta' Rohan)"
  }, {
    "iso": "NL",
    "name": "Zeeland"
  }, {
    "iso": "MT",
    "name": "Zejtun (Citta' Beland)"
  }, {
    "iso": "MK",
    "name": "Zelenikovo"
  }, {
    "iso": "BA",
    "name": "Zenica-Doboj"
  }, {
    "iso": "KZ",
    "name": "Zhambyl"
  }, {
    "iso": "CN",
    "name": "Zhejiang"
  }, {
    "iso": "SN",
    "name": "Ziguinchor"
  }, {
    "iso": "LV",
    "name": "Zilupes novads"
  }, {
    "iso": "NE",
    "name": "Zinder"
  }, {
    "iso": "TR",
    "name": "Zinguldak"
  }, {
    "iso": "BF",
    "name": "Ziro"
  }, {
    "iso": "RS",
    "name": "Zlatiborski upravni okrug"
  }, {
    "iso": "CZ",
    "name": "Zlínský"
  }, {
    "iso": "MW",
    "name": "Zomba"
  }, {
    "iso": "UG",
    "name": "Zombo"
  }, {
    "iso": "BF",
    "name": "Zondoma"
  }, {
    "iso": "BJ",
    "name": "Zou"
  }, {
    "iso": "BF",
    "name": "Zoundwéogo"
  }, {
    "iso": "SI",
    "name": "Zrece"
  }, {
    "iso": "MK",
    "name": "Zrnovci"
  }, {
    "iso": "XK",
    "name": "Zubin Potok"
  }, {
    "iso": "CH",
    "name": "Zug"
  }, {
    "iso": "NL",
    "name": "Zuid-Holland"
  }, {
    "iso": "VE",
    "name": "Zulia"
  }, {
    "iso": "MT",
    "name": "Zurrieq"
  }, {
    "iso": "XK",
    "name": "Zvečan"
  }, {
    "iso": "CH",
    "name": "Zürich"
  }, {
    "iso": "AZ",
    "name": "Zəngilan"
  }, {
    "iso": "AZ",
    "name": "Zərdab"
  }, {
    "iso": "YE",
    "name": "`Adan"
  }, {
    "iso": "SA",
    "name": "`Asir"
  }, {
    "iso": "WF",
    "name": "`Uvea"
  }, {
    "iso": "MD",
    "name": "mun.Bender"
  }, {
    "iso": "MD",
    "name": "mun.Bălţi"
  }, {
    "iso": "MD",
    "name": "mun.Chişinău"
  }, {
    "iso": "ES",
    "name": "Ávila"
  }, {
    "iso": "TR",
    "name": "Çanakkale"
  }, {
    "iso": "TR",
    "name": "Çankiri"
  }, {
    "iso": "TR",
    "name": "Çorum"
  }, {
    "iso": "CD",
    "name": "Équateur"
  }, {
    "iso": "PT",
    "name": "Évora"
  }, {
    "iso": "NC",
    "name": "Îles Loyauté"
  }, {
    "iso": "VN",
    "name": "Ð?ng Tháp"
  }, {
    "iso": "PY",
    "name": "Ñeembucú"
  }, {
    "iso": "MN",
    "name": "Ömnögovi"
  }, {
    "iso": "SE",
    "name": "Örebro"
  }, {
    "iso": "SE",
    "name": "Östergötland"
  }, {
    "iso": "MN",
    "name": "Övörhangay"
  }, {
    "iso": "NO",
    "name": "Østfold"
  }, {
    "iso": "CZ",
    "name": "Ústecký"
  }, {
    "iso": "SI",
    "name": "Črenšovci"
  }, {
    "iso": "SI",
    "name": "Črna na Koroškem"
  }, {
    "iso": "XK",
    "name": "Đakovica"
  }, {
    "iso": "VN",
    "name": "Điện Biên"
  }, {
    "iso": "VN",
    "name": "Đà Nẵng"
  }, {
    "iso": "VN",
    "name": "Đông Bắc"
  }, {
    "iso": "VN",
    "name": "Đông Nam Bộ"
  }, {
    "iso": "VN",
    "name": "Đắk Nông"
  }, {
    "iso": "VN",
    "name": "Đồng Bằng Sông Hồng"
  }, {
    "iso": "AZ",
    "name": "İmişli"
  }, {
    "iso": "AZ",
    "name": "İsmayıllı"
  }, {
    "iso": "PL",
    "name": "Śląskie"
  }, {
    "iso": "PL",
    "name": "Świętokrzyskie"
  }, {
    "iso": "AZ",
    "name": "Şahbuz"
  }, {
    "iso": "AZ",
    "name": "Şamaxı"
  }, {
    "iso": "MD",
    "name": "Ştefan Vodă"
  }, {
    "iso": "AZ",
    "name": "Şuşa"
  }, {
    "iso": "AZ",
    "name": "Şuşa"
  }, {
    "iso": "AZ",
    "name": "Şəki"
  }, {
    "iso": "AZ",
    "name": "Şəki"
  }, {
    "iso": "AZ",
    "name": "Şəmkir"
  }, {
    "iso": "AZ",
    "name": "Şərur"
  }, {
    "iso": "SI",
    "name": "Šalovci"
  }, {
    "iso": "ME",
    "name": "Šavnik"
  }, {
    "iso": "SI",
    "name": "Šempeter-Vrtojba"
  }, {
    "iso": "SI",
    "name": "Šentilj"
  }, {
    "iso": "SI",
    "name": "Šentjernej"
  }, {
    "iso": "SI",
    "name": "Šentjur pri Celju"
  }, {
    "iso": "SI",
    "name": "Šenčur"
  }, {
    "iso": "LT",
    "name": "Šiauliai"
  }, {
    "iso": "HR",
    "name": "Šibensko-kninska županija"
  }, {
    "iso": "SI",
    "name": "Škocjan"
  }, {
    "iso": "SI",
    "name": "Škofja Loka"
  }, {
    "iso": "SI",
    "name": "Škofljica"
  }, {
    "iso": "SI",
    "name": "Šmarje pri Jelšah"
  }, {
    "iso": "SI",
    "name": "Šmartno in Litiji"
  }, {
    "iso": "SI",
    "name": "Šmartno ob Paki"
  }, {
    "iso": "SI",
    "name": "Šoštanj"
  }, {
    "iso": "XK",
    "name": "Štimlje"
  }, {
    "iso": "MK",
    "name": "Štip"
  }, {
    "iso": "SI",
    "name": "Štore"
  }, {
    "iso": "XK",
    "name": "Štrpce"
  }, {
    "iso": "RS",
    "name": "Šumadijski upravni okrug"
  }, {
    "iso": "MK",
    "name": "Šuto Orizari"
  }, {
    "iso": "ME",
    "name": "Žabljak"
  }, {
    "iso": "SI",
    "name": "Žalec"
  }, {
    "iso": "SI",
    "name": "Železniki"
  }, {
    "iso": "MK",
    "name": "Želino"
  }, {
    "iso": "SI",
    "name": "Žetale"
  }, {
    "iso": "SK",
    "name": "Žilinský kraj"
  }, {
    "iso": "SI",
    "name": "Žiri"
  }, {
    "iso": "SI",
    "name": "Žirovnica"
  }, {
    "iso": "SI",
    "name": "Žužemberk"
  }, {
    "iso": "GR",
    "name": "ΑΝΑΤΟΛΙΚΗ ΜΑΚΕΔΟΝΙΑ ΚΑΙ ΘΡΑΚΗ"
  }, {
    "iso": "GR",
    "name": "ΑΤΤΙΚΗ"
  }, {
    "iso": "CY",
    "name": "Αμμόχωστος"
  }, {
    "iso": "GR",
    "name": "ΔΥΤΙΚΗ ΕΛΛΑΔΑ"
  }, {
    "iso": "GR",
    "name": "ΔΥΤΙΚΗ ΜΑΚΕΔΟΝΙΑ"
  }, {
    "iso": "GR",
    "name": "ΗΠΕΙΡΟΣ"
  }, {
    "iso": "GR",
    "name": "ΘΕΣΣΑΛΙΑ"
  }, {
    "iso": "GR",
    "name": "ΙΟΝΙΑ ΝΗΣΙΑ"
  }, {
    "iso": "GR",
    "name": "ΚΕΝΤΡΙΚΗ ΜΑΚΕΔΟΝΙΑ"
  }, {
    "iso": "GR",
    "name": "ΚΡΗΤΗ"
  }, {
    "iso": "CY",
    "name": "Κερύνεια"
  }, {
    "iso": "CY",
    "name": "Λάρνακα"
  }, {
    "iso": "CY",
    "name": "Λεμεσός"
  }, {
    "iso": "CY",
    "name": "Λευκωσία"
  }, {
    "iso": "GR",
    "name": "ΝΟΤΙΟ ΑΙΓΑΙΟ"
  }, {
    "iso": "GR",
    "name": "ΠΕΛΟΠΟΝΝΗΣΟΣ"
  }, {
    "iso": "CY",
    "name": "Πάφος"
  }, {
    "iso": "GR",
    "name": "ΣΤΕΡΕΑ ΕΛΛΑΔΑ"
  }, {
    "iso": "UA",
    "name": "Івано-Франківська"
  }, {
    "iso": "RU",
    "name": "Алтайский край"
  }, {
    "iso": "RU",
    "name": "Амурская область"
  }, {
    "iso": "RU",
    "name": "Архангельская область"
  }, {
    "iso": "RU",
    "name": "Астраханская область"
  }, {
    "iso": "RU",
    "name": "Белгородская область"
  }, {
    "iso": "BG",
    "name": "Благоевград"
  }, {
    "iso": "RU",
    "name": "Брянская область"
  }, {
    "iso": "BG",
    "name": "Бургас"
  }, {
    "iso": "RU",
    "name": "Бурятская республика"
  }, {
    "iso": "BG",
    "name": "Варна"
  }, {
    "iso": "BG",
    "name": "Велико Търново"
  }, {
    "iso": "BG",
    "name": "Видин"
  }, {
    "iso": "RU",
    "name": "Владимирская область"
  }, {
    "iso": "RU",
    "name": "Волгоградская область"
  }, {
    "iso": "UA",
    "name": "Волинська"
  }, {
    "iso": "RU",
    "name": "Вологодская область"
  }, {
    "iso": "RU",
    "name": "Воронежская область"
  }, {
    "iso": "BG",
    "name": "Враца"
  }, {
    "iso": "UA",
    "name": "Вінницька"
  }, {
    "iso": "BG",
    "name": "Габрово"
  }, {
    "iso": "RU",
    "name": "Город Москва"
  }, {
    "iso": "RU",
    "name": "Город Санкт-Петербург"
  }, {
    "iso": "UA",
    "name": "Дніпропетровська"
  }, {
    "iso": "BG",
    "name": "Добрич"
  }, {
    "iso": "UA",
    "name": "Донецька"
  }, {
    "iso": "RU",
    "name": "Еврейская автономная область"
  }, {
    "iso": "UA",
    "name": "Житомирська"
  }, {
    "iso": "RU",
    "name": "Забайкальский край"
  }, {
    "iso": "UA",
    "name": "Закарпатська"
  }, {
    "iso": "UA",
    "name": "Запорізька"
  }, {
    "iso": "RU",
    "name": "Ивановская область"
  }, {
    "iso": "RU",
    "name": "Иркутская область"
  }, {
    "iso": "RU",
    "name": "Кабардино-Балкарская республика"
  }, {
    "iso": "RU",
    "name": "Калининградская область"
  }, {
    "iso": "RU",
    "name": "Калужская область"
  }, {
    "iso": "RU",
    "name": "Камчатский край"
  }, {
    "iso": "RU",
    "name": "Карачаево-Черкесская республика"
  }, {
    "iso": "RU",
    "name": "Кемеровская область"
  }, {
    "iso": "RU",
    "name": "Кировская область"
  }, {
    "iso": "UA",
    "name": "Київська"
  }, {
    "iso": "RU",
    "name": "Костромская область"
  }, {
    "iso": "RU",
    "name": "Краснодарский край"
  }, {
    "iso": "RU",
    "name": "Красноярский край"
  }, {
    "iso": "UA",
    "name": "Крим"
  }, {
    "iso": "RU",
    "name": "Курганская область"
  }, {
    "iso": "RU",
    "name": "Курская область"
  }, {
    "iso": "BG",
    "name": "Кърджали"
  }, {
    "iso": "BG",
    "name": "Кюстендил"
  }, {
    "iso": "UA",
    "name": "Кіровоградська"
  }, {
    "iso": "RU",
    "name": "Ленинградская область"
  }, {
    "iso": "RU",
    "name": "Липецкая область"
  }, {
    "iso": "BG",
    "name": "Ловеч"
  }, {
    "iso": "UA",
    "name": "Луганська"
  }, {
    "iso": "UA",
    "name": "Львівська"
  }, {
    "iso": "RU",
    "name": "Магаданская область"
  }, {
    "iso": "UA",
    "name": "Миколаївська"
  }, {
    "iso": "BG",
    "name": "Монтана"
  }, {
    "iso": "RU",
    "name": "Мордовская республика"
  }, {
    "iso": "RU",
    "name": "Московская область"
  }, {
    "iso": "RU",
    "name": "Мурманская область"
  }, {
    "iso": "RU",
    "name": "Ненецкий автономный округ"
  }, {
    "iso": "RU",
    "name": "Нижегородская область"
  }, {
    "iso": "RU",
    "name": "Новгородская область"
  }, {
    "iso": "RU",
    "name": "Новосибирская область"
  }, {
    "iso": "UA",
    "name": "Одеська"
  }, {
    "iso": "RU",
    "name": "Омская область"
  }, {
    "iso": "RU",
    "name": "Оренбургская область"
  }, {
    "iso": "RU",
    "name": "Орловская область"
  }, {
    "iso": "BG",
    "name": "Пазарджик"
  }, {
    "iso": "RU",
    "name": "Пензенская область"
  }, {
    "iso": "RU",
    "name": "Пермский край"
  }, {
    "iso": "BG",
    "name": "Перник"
  }, {
    "iso": "BG",
    "name": "Плевен"
  }, {
    "iso": "BG",
    "name": "Пловдив"
  }, {
    "iso": "UA",
    "name": "Полтавська"
  }, {
    "iso": "RU",
    "name": "Приморский край"
  }, {
    "iso": "RU",
    "name": "Псковская область"
  }, {
    "iso": "BG",
    "name": "Разград"
  }, {
    "iso": "RU",
    "name": "Республика Адыгея"
  }, {
    "iso": "RU",
    "name": "Республика Алтай"
  }, {
    "iso": "RU",
    "name": "Республика Башкирия"
  }, {
    "iso": "RU",
    "name": "Республика Дагестан"
  }, {
    "iso": "RU",
    "name": "Республика Калмыкия"
  }, {
    "iso": "RU",
    "name": "Республика Карелия"
  }, {
    "iso": "RU",
    "name": "Республика Коми"
  }, {
    "iso": "RU",
    "name": "Республика Марий-Эл"
  }, {
    "iso": "RU",
    "name": "Республика Саха (Якутия)"
  }, {
    "iso": "RU",
    "name": "Республика Северная Осетия"
  }, {
    "iso": "RU",
    "name": "Республика Татарстан"
  }, {
    "iso": "RU",
    "name": "Республика Тува"
  }, {
    "iso": "RU",
    "name": "Республика Хакасия"
  }, {
    "iso": "RU",
    "name": "Ростовская область"
  }, {
    "iso": "BG",
    "name": "Русе"
  }, {
    "iso": "BG",
    "name": "Русе"
  }, {
    "iso": "RU",
    "name": "Рязанская область"
  }, {
    "iso": "UA",
    "name": "Рівненська"
  }, {
    "iso": "RU",
    "name": "Самарская область"
  }, {
    "iso": "RU",
    "name": "Саратовская область"
  }, {
    "iso": "RU",
    "name": "Сахалинская область"
  }, {
    "iso": "RU",
    "name": "Свердловская область"
  }, {
    "iso": "BG",
    "name": "Силистра"
  }, {
    "iso": "BG",
    "name": "Сливен"
  }, {
    "iso": "RU",
    "name": "Смоленская область"
  }, {
    "iso": "BG",
    "name": "Смолян"
  }, {
    "iso": "BG",
    "name": "София"
  }, {
    "iso": "BG",
    "name": "София (столица)"
  }, {
    "iso": "RU",
    "name": "Ставропольский край"
  }, {
    "iso": "BG",
    "name": "Стара Загора"
  }, {
    "iso": "UA",
    "name": "Сумська"
  }, {
    "iso": "RU",
    "name": "Тамбовская область"
  }, {
    "iso": "RU",
    "name": "Тверская область"
  }, {
    "iso": "UA",
    "name": "Тернопільська"
  }, {
    "iso": "RU",
    "name": "Томская область"
  }, {
    "iso": "RU",
    "name": "Тульская область"
  }, {
    "iso": "BG",
    "name": "Търговище"
  }, {
    "iso": "RU",
    "name": "Тюменская область"
  }, {
    "iso": "RU",
    "name": "Удмуртская республика"
  }, {
    "iso": "RU",
    "name": "Ульяновская область"
  }, {
    "iso": "RU",
    "name": "Хабаровский край"
  }, {
    "iso": "RU",
    "name": "Ханты-Мансийский АО"
  }, {
    "iso": "UA",
    "name": "Харківська"
  }, {
    "iso": "BG",
    "name": "Хасково"
  }, {
    "iso": "UA",
    "name": "Херсонська"
  }, {
    "iso": "UA",
    "name": "Хмельницька"
  }, {
    "iso": "RU",
    "name": "Челябинская область"
  }, {
    "iso": "UA",
    "name": "Черкаська"
  }, {
    "iso": "UA",
    "name": "Чернівецька"
  }, {
    "iso": "UA",
    "name": "Чернігівська"
  }, {
    "iso": "RU",
    "name": "Чеченская республика + Ингушская республика"
  }, {
    "iso": "RU",
    "name": "Чувашская республика"
  }, {
    "iso": "RU",
    "name": "Чукотский автономный округ"
  }, {
    "iso": "BG",
    "name": "Шумен"
  }, {
    "iso": "RU",
    "name": "Ямало-Ненецкий АО"
  }, {
    "iso": "BG",
    "name": "Ямбол"
  }, {
    "iso": "RU",
    "name": "Ярославская область"
  }]
});
