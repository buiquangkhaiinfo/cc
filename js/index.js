//////////////////////////////////////////////////////////////
// CHECK PROTECT
(function() {
  function VietKhanhProtect() {
    if (typeof jQuery === "undefined") {
      console.error("jQuery is not loaded");
      return;
    }
    if (typeof console === "undefined") {
      console = {};
      console.log = console.warn = console.error = function() {};
    }
    var VietKhanhContent = "-VietKhanh-";
    var VietKhanh = document.getElementById("Telegram_@Khanhsiucute");
    if (VietKhanh === null) {
      alert('Phát hiện source code đã bị chỉnh sửa - error 0x000001 !!!')
      window.location.replace("//facebook.com/100088911317039");
      return;
    } else if (VietKhanh.innerHTML !== VietKhanhContent){
      return;
    }
  }
  VietKhanhProtect();
})();
// ABOUT ME
document.getElementById("VietKhanhAbout_1").innerHTML = 'CheckScamDls.info is a free source code sharing blog with quality and diverse content, we want to become a trusted destination for the programming community.';
// FOOTER
const footerElement = document.createElement("footer");
footerElement.classList.add("Cuoi", "Trang");
const pElement = document.createElement("p");
pElement.classList.add("VietKhanhFtCopyright");
const spanElement = document.createElement("span");
spanElement.style.fontFamily = "Monomaniac One";
spanElement.classList.add("copyright");
const aElement = document.createElement("a");
aElement.style.textDecoration = "none";
aElement.href = "//facebook.com/VietKhanh.User";
const uElement = document.createElement("u");
uElement.style.color = "aliceblue";
uElement.textContent = "Quang Khải ♡";
const strongElement = document.createElement("strong");
strongElement.textContent = "All rights reserved - © 2023";
aElement.appendChild(uElement);
spanElement.appendChild(document.createTextNode("Created by "));
spanElement.appendChild(aElement);
spanElement.appendChild(document.createElement("br"));
spanElement.appendChild(strongElement);
pElement.appendChild(spanElement);
footerElement.appendChild(pElement);
document.body.appendChild(footerElement);
// NHÚNG LINK SCRIPT
var script = document.createElement("script");
script.src = "//cdn.jsdelivr.net/npm/sweetalert2@9";
//script.onload = function() {ThanhDieuAlert();};
document.head.appendChild(script);
// CODE CSS IN JS
/*var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "./VietKhanhft-data/css/index.css";
document.head.appendChild(link);*/
var style = document.createElement("style");
style.innerHTML = `
body {
  background-color: #000;
/*background-image: url('https://api.ipxi.cn/wp/api.php'); 
background-size: cover;
background-repeat: no-repeat;
background-position: center;*/
position: relative;
font-family: Concert One;
}
.Border {
    font-size: 12px;
    position: relative;
    min-height: 100%;
    box-sizing: border-box;
    padding-bottom: 80px;
  text-align: center;
  background-color: rgb(0, 0, 0);
  padding: 0px;
  margin: 8px;
  border-style: double;
  border-radius: 15px;
  border-color: rgb(236, 11, 11);
  border-width: 2px;
  animation-name: bodyborder;
  animation-iteration-count: infinite;
  animation-duration: 5s;
  animation-direction: right;
}
.BlurWebs {
  animation: blur 5s linear 1 0s forwards;
}
/*
✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼
          THANH BAR
✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼
*/
::-webkit-scrollbar {
  width: 8px;
  height: 15px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(106, 96, 255); 
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: rgb(0, 255, 98); 
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #00ffbc; 
}

/*
✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼
        HOME VIETKHANH
✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼
*/
.MangXaHoiFtVietKhanh div {
  border: 2px solid white;
  font-family: Righteous;
  border-radius: 5px; 
  color: white; 
  padding: 10px 24px; 
  cursor: pointer;  
  width: unset;
  margin: auto;
  transition: 0.5s;
  text-align: center;
  text-shadow: -1px 0 5px CYAN, 
               0 1px 5px RED, 
               1px 0 5px CYAN, 
               0 -1px 5px RED;
}
/* Phân giải trên mobile */
@media only screen and (max-width: 768px) {
  .MangXaHoiFtVietKhanh div {
    width: 65%;
  }
}
/* Phân giải trên PC */
@media only screen and (min-width: 769px) {
  .MangXaHoiFtVietKhanh div {
    width: 30%;
  }
}
.MangXaHoiFtVietKhanh:after {
  content: "";
  clear: both;
  display: table;
}
.MangXaHoiFtVietKhanh div:not(:last-child) {
  border-right: none; 
}
.MangXaHoiFtVietKhanh div:hover {
  transform: translateY(-3px);
  transition: 0.5s;
}
.Facebook { 
  position: relative;
  background: rgb(88,101,242); 
  background: linear-gradient(139deg, 
    rgb(73, 89, 255) 50%,
    rgba(0, 198, 255, 0.84) 100%);
  color: var(--accentColor);
  border: solid var(--accentColor) 2px;
  border-radius: 10px;
  font-size: 1rem;
  text-align: center;
  display: block;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px; /* 17px */
  text-decoration: none;
  /* transition: all .25s cubic-bezier(.08, .59, .29, .99); */
  -webkit-tap-highlight-color: transparent;
}
.Youtube {
  position: relative;
  background: rgb(221,105,105);
  background: linear-gradient(138deg, 
    rgba(221,105,105,1) 0%, 
    rgba(222,94,94,1) 21%, 
    rgba(223,86,86,1) 37%, 
    rgba(223,86,86,1) 46%, 
    rgba(235,49,43,1) 66%);
    color: var(--accentColor);
    border: solid var(--accentColor) 2px;
    border-radius: 10px;
    font-size: 1rem;
    text-align: center;
    display: block;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 10px; /* 17px */
    text-decoration: none;
    /* transition: all .25s cubic-bezier(.08, .59, .29, .99); */
    -webkit-tap-highlight-color: transparent;
}
.Discord {
  position: relative;
  background: rgb(88,101,242); 
  background: linear-gradient(139deg, 
    rgba(88,101,242,1) 41%, 
    rgba(152,100,241,1) 85%);
  color: var(--accentColor);
  border: solid var(--accentColor) 2px;
  border-radius: 10px;
  font-size: 1rem;
  text-align: center;
  display: block;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px; /* 17px */
  text-decoration: none;
  /* transition: all .25s cubic-bezier(.08, .59, .29, .99); */
  -webkit-tap-highlight-color: transparent;
}

.Instagram{
  position: relative;
  background: rgb(131,58,180); 
  background: linear-gradient(90deg, 
    rgba(131,58,180,1) 0%, 
    rgba(253,29,29,1) 50%, 
    rgba(252,176,69,1) 100%);
  color: var(--accentColor);
  border: solid var(--accentColor) 2px;
  border-radius: 10px;
  font-size: 1rem;
  text-align: center;
  display: block;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px; /* 17px */
  text-decoration: none;
  /* transition: all .25s cubic-bezier(.08, .59, .29, .99); */
  -webkit-tap-highlight-color: transparent;
}
/*
✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼
    THONG TIN THANH TOAN
✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼
*/
.ThongTinThanhToan {
  transition: .5s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #252525;
  padding: 14px;
  border-radius: 10px;
  box-shadow: 0 2px 2px 1px #555;
  color: #ffffff;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 2px;
  box-shadow: 0 0 7px 3px #33FFFF;
}
.ThongTinThanhToan:hover {
  background-color: #353535;
  box-shadow: 0 2px 2px 1px #555;
  transform: scale(0.95);
  border-radius: 2px;
  box-shadow: 0 0 7px 3px #33FFFF;
}
.ThongTinThanhToanTitle {
  padding: 0 0;
  margin: 0 0;
  font-size: 23px;
  font-weight: 700;
  color: #00FFFF;}
.ThongTinThanhToanText {
  padding: 0 0;
  margin: 5 0;
  font-size: 20px;
  font-weight: 500;
  color: #00CC33;
  margin-top: 5px;
}

/*
✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼
        BO TRÒN AVATAR
✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼
*/
.Blob {
  background: black;
  border-radius: 50%;
  margin: 10px;
  height: 150px;
  width: 150px; 
  box-shadow: 0 1px 13px lime;
  transform: scale(.5);
  animation: pulse 2s infinite;
  margin-top: 50px;
}

@keyframes pulse {
  0% {
    transform: scale(0.99);
    box-shadow: 0 1px 13px cyan;
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 1px 13px lime;
  }
  100% {
    transform: scale(0.99);
    box-shadow: 0 1px 13px magenta;
  }
}
.Cuoi {
  font-size: 15px;
  padding: 40px 0;
  color: #4b4c4d;
}
.Trang {
  color: white;
  -webkit-mask: linear-gradient(-60deg,
                                white 30%,
                                #0004,
                                white 70%) 
                                right/300% 100%;
  background-repeat: no-repeat;
  animation: shimmer 1s infinite;
}
.Footer .VietKhanhFtCopyright {
  text-align: center;
  color: #aaa;
  margin-bottom: 0;
}
`;
document.head.appendChild(style);
            // SKILL LANGUAGE
            $('.skill-per').each(function() {
              var $this = $(this);
              var per = $this.attr('per');
              $this.css("width", per + '%');
              $({
                animatedValue: 0
              }).animate({
                animatedValue: per
              }, {
                duration: 15000,
                step: function() {
                  $this.attr('per', Math.floor(this.animatedValue) + '%');
                },
                complete: function() {
                  $this.attr('per', Math.floor(this.animatedValue) + '%');
                }
              });
            });
// USER NAME + TÍCH XANH
document.getElementById("userName").innerHTML = 'Bùi Quang Khải <img src="https://i.imgur.com/rvH273O.gif" width="40" height="40" alt="Tích Xanh">';
// CHECK FPS
var fps = document.getElementById("fps");
var startTime = Date.now();
var frame = 0;
function CheckFps() {
  var time = Date.now();
  frame++;
  if (time - startTime > 1000) {
    fps.innerHTML = (frame / ((time - startTime) / 1000)).toFixed(1);
    startTime = time;
    frame = 0;
  }
  window.requestAnimationFrame(CheckFps);
}
// TIEU SU TYPE TEXT
let typed = new Typed(".GioiThieu", {
  strings: ["Hi my name is Quang Khai","Hello, I'm a designer and code.", "I like design photoshop or code website 🚀"],
  typeSpeed: 95,
  backSpeed: 75,
  loop: true
})
// MUSIC PLAY
const VietKhanh_List = [
"https://khaidzs1tg.000webhostapp.com/y2mate.com%20-%20%E1%BB%9E%20d%C6%B0%E1%BB%9Bi%20xu%C3%B4i%20ch%C3%BAng%20m%C3%ACnh%20g%E1%BB%8Di%20%C4%91%C3%A2y%20l%C3%A0%20view%20tri%E1%BB%87u%20%C4%91%C3%B4%20%20%20Ng%E1%BB%8Dchn%20.mp3",
"https://khaidzs1tg.000webhostapp.com/y2mate.com%20-%20%C4%90I%20V%E1%BB%80%20NH%C3%80%20%20%C4%90en%20%20Justatee%20LKT%20Remix%20Offical%20Music%20Wave.mp3",
"https://khaidzs1tg.000webhostapp.com/y2mate.com%20-%20H%E1%BA%B9n%20Em%20%E1%BB%9E%20L%E1%BA%A7n%20Y%C3%AAu%20Th%E1%BB%A9%202%20%20Nguyenn%20x%20%C4%90%E1%BA%B7ng%20Tu%E1%BA%A5n%20V%C5%A9%20Duzme%20Remix%20%20Audio%20Lyrics.mp3",
"https://khaidzs1tg.000webhostapp.com/y2mate.com%20-%20ANH%20T%E1%BB%B0%20DO%20NH%C6%AFNG%20C%C3%94%20%C4%90%C6%A0N%20%20TRUNG%20QU%C3%82N%20x%20%C4%90%E1%BA%A0T%20G%20%20Lofi%20by%20Nguyenn%20%20V%C3%AC%20anh%20l%C3%A0%20ai%20th%E1%BA%BF%20em%20em%20%C3%A0.mp3",
"https://khaidzcute.000webhostapp.com/y2mate.com%20-%20H%E1%BB%93i%20%E1%BB%A8c%20Ta%20%C4%90%C3%A3%20Y%C3%AAu%20%20Linh%20H%C6%B0%C6%A1ng%20Luz%20Duzme%20Remix%20%20Ch%E1%BA%B3ng%20bi%E1%BA%BFt%20anh%20%C4%91ang%20n%C6%A1i%20n%C3%A0oNh%E1%BA%A1c%20HOT%20Tik%20Tok.mp3",
"https://khaidzcute.000webhostapp.com/y2mate.com%20-%20Nothin%20On%20Me%20%20Leah%20Marie%20Perez%20Duzme%20Remix%20%20Nh%E1%BA%A1c%20HOT%20Trend%20Tik%20Tok%202023.mp3",
"https://khaidzcute.000webhostapp.com/y2mate.com%20-%201%20Ph%C3%BAt%20%20Andiez%20CAO%20MIX.mp3",
];
let index = parseInt(localStorage.getItem('currentAudioIndex')) || Math.floor(Math.random() * VietKhanh_List.length);
const audio = new Audio(VietKhanh_List[index]);
function VietKhanhAudio() {audio.play();}
document.addEventListener('click', VietKhanhAudio);
audio.addEventListener("ended", function() {
index = (index + 1) % VietKhanh_List.length;
localStorage.setItem('currentAudioIndex', index);
audio.src = VietKhanh_List[index];
audio.play();
});
function onCreate() {
  CheckFps();
  HomeVietKhanh();
  VietKhanhAudio();
  ShowToast();
}
// LOADER SCREEN ----------
let spin = document.querySelector('.LoaderCover');
window.addEventListener('load', () => {
  spin.classList.add('HideLoader');
  setTimeout(() => {
    spin.remove();
  }, 5000);
});
function ShowToast() {
	var x = document.getElementById("Toast");
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

function Youtube() {
  setTimeout(function() {
    window.open('https://www.youtube.com/channel/@quangkhaiofficial8500', '_blank')},
  100);
}
function Facebook() {
  setTimeout(function() {
    window.open('https://www.facebook.com/buiquangkhai.user4', '_blank')},
  100);
}
function Discord() {
  setTimeout(function() {
    window.open('https://dsc.bio/buiquangkhaiuser', '_blank')},
  100);
}
function Instagram() {
  setTimeout(function() {
    window.open('https://www.instagram.com/buiquangkhai.user4/', '_blank')},
  100);
}
function HomeVietKhanh() {
  Swal.fire({
    title: '𝙉𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣 !',
    text: '=>> 𝘾𝒂̉𝙢 𝙊̛𝒏 𝑩𝙖̣𝒏 Đ𝙖̃ 𝙂𝒉𝙚́ 𝙏𝒉𝙖̆𝒎 𝑾𝙚𝒃𝙨𝒊𝙩𝒆 𝑪𝙪̉𝒂 𝑻𝙤̂𝒊 🐬 <<=',
    showConfirmButton: false
  });
}
const toastDiv = document.createElement('div');
toastDiv.id = 'Toast';
toastDiv.textContent = '𝘿𝙚𝙨𝙞𝙜𝙣 𝙗𝙮 𝑸𝙪𝒂𝙣𝒈𝙆𝒉𝙖𝒊 🚀';
document.body.appendChild(toastDiv);var maxtheard;
var testurl;
var lsat_date = 0;
var CountryCode_VietKhanh = {
    US: "United States",
    CA: "California",
    HK: "HongKong (Trung Quốc)",
    TW: "Taiwan (Đài Loan)",
    SG: "Singapore",
    JP: "Japan",
    KR: "Korea",
    AU: "Australia",
    NZ: "New Zealand",
    AF: "Afghanistan",
    AL: "Albania",
    DZ: "Algeria",
    AS: "American Samoa (United States)",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguilla",
    AG: "Antigua and Barbuda",
    AR: "Argentina",
    AM: "Armenia",
    AW: "Aruba",
    AT: "Austria",
    AZ: "Azerbaijan",
    BS: "Bahamas",
    BH: "Bahrain",
    BD: "Bangladesh",
    BB: "Barbados",
    BY: "Belarus",
    BE: "Belgium",
    BZ: "Belize",
    BJ: "Benin",
    BM: "Bermuda",
    BT: "Bhutan",
    BO: "Bolivia",
    BA: "Bosnia and Herzegovina",
    BW: "Botswana",
    BR: "Brazil",
    VG: "British Virgin Islands (United Kingdom)",
    BN: "Brunei",
    BG: "Bulgaria",
    BF: "Burkina Faso",
    BI: "Burundi",
    KH: "Cambodia",
    CM: "Cameroon",
    CV: "Cape Verde",
    KY: "Cayman Islands (United Kingdom)",
    CF: "Central African Republic",
    TD: "Chad",
    CL: "Chile",
    CO: "Colombia",
    KM: "Comoros",
    CD: "Congo (Kinshasa)",
    CK: "Cook Islands (New Zealand)",
    CR: "Costa Rica",
    CI: "Ivory Coast",
    HR: "Croatia",
    CU: "Cuba",
    CY: "Cyprus",
    CZ: "Czech Republic",
    DK: "Denmark",
    DJ: "Djibouti",
    DM: "Dominique",
    DO: "Dominican Republic",
    EC: "Ecuador",
    EG: "Egypt",
    SV: "El Salvador",
    GQ: "Equatorial Guinea",
    ER: "Eritrea",
    EE: "Estonia",
    ET: "Ethiopia",
    FO: "Faroe Islands (Denmark)",
    FJ: "Fiji",
    FI: "Finland",
    FR: "France",
    GF: "French Guiana (France)",
    PF: "French Polynesia",
    GA: "Gabon",
    GM: "Gambia",
    GE: "Georgia",
    DE: "Germany",
    GH: "Ghana",
    GI: "Gibraltar (United Kingdom)",
    GR: "Greece",
    GL: "Greenland",
    GD: "Grenada",
    GP: "Guadeloupe",
    GU: "Guam (United States)",
    GT: "Guatemala",
    GN: "Guinea",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HT: "Haiti",
    HN: "Honduras",
    HU: "Hungary",
    IS: "Iceland",
    IN: "India",
    ID: "Indonesia",
    IR: "Iran",
    IQ: "Iraq",
    IE: "Republic of Ireland",
    IL: "Israel",
    IT: "Italy",
    JM: "Jamaica",
    JO: "Jordan",
    KZ: "Kazakhstan",
    KE: "Kenya",
    KI: "Kiribati",
    KP: "North Korea",
    KW: "Kuwait",
    KG: "Kyrgyzstan",
    LA: "Laos",
    LV: "Latvia",
    LB: "Lebanon",
    LS: "Lesotho",
    LR: "Liberia",
    LY: "Libya",
    LI: "Liechtenstein",
    LT: "Lithuania",
    LU: "Luxembourg",
    MO: "Macao (China)",
    MK: "Macedonia",
    MG: "Madagascar",
    MW: "Malawi",
    MY: "Malaysia",
    MV: "Maldives",
    ML: "Republic of Mali",
    MT: "Malta",
    MH: "Marshall Islands",
    MQ: "Martinique (France)",
    MR: "Mauritania",
    MU: "Mauritius",
    YT: "Mayotte",
    MX: "Mexico",
    FM: "Federated States of Micronesia",
    MD: "Moldova",
    MC: "Monaco",
    MN: "Mongolia",
    ME: "Montenegro",
    MS: "Montserrat (UK)",
    MA: "Morocco",
    MZ: "Mozambique",
    MM: "Myanmar",
    NA: "Namibia",
    NR: "Nauru",
    NP: "Nepal",
    NL: "Netherlands",
    NC: "New Caledonia (France)",
    NI: "Nicaragua",
    NE: "Niger",
    NG: "Nigeria",
    NU: "Niue",
    MP: "Northern Mariana Islands (USA)",
    NO: "Norway",
    OM: "Oman",
    PK: "Pakistan",
    PW: "Palau",
    PS: "Palestine",
    PA: "Panama",
    PG: "Papua New Guinea",
    PY: "Paraguay",
    CN: "China",
    PE: "Peru",
    PH: "Philippines",
    PL: "Poland",
    PT: "Portugal",
    PR: "Puerto Rico (United States)",
    QA: "Qatar",
    CG: "Republic of the Congo",
    ZW: "Zimbabwe",
    RE: "Reunion (France)",
    RO: "Romania",
    RU: "Russia",
    RW: "Rwanda",
    SH: "Saint Helena",
    KN: "Saint Kitts and Nevis",
    LC: "Saint Lucia",
    PM: "Saint Pierre and Miquelon (France)",
    VC: "Saint Vincent and the Grenadines",
    WS: "Samoa",
    SM: "San Marino",
    ST: "Sao Tome and Principe",
    SA: "Saudi Arabia",
    SN: "Senegal",
    RS: "Republic of Serbia",
    SC: "Seychelles",
    SL: "Sierra Leone",
    SK: "Slovakia",
    SI: "Slovenia",
    SB: "Solomon Islands",
    SO: "Somalia",
    ZA: "South Africa",
    SS: "South Sudan",
    ES: "Spain",
    LK: "Sri Lanka",
    SD: "Sudan",
    SR: "Suriname",
    SZ: "Swaziland",
    SE: "Sweden",
    CH: "Switzerland",
    SY: "Syria",
    TJ: "Tajikistan",
    TZ: "Tanzania",
    TH: "Thailand",
    TL: "East Timor",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trinidad and Tobago",
    TN: "Tunisia",
    TR: "Türkiye",
    TM: "Turkmenistan",
    TC: "Turks and Caicos Islands (United Kingdom)",
    TV: "Tuvalu",
    UG: "Uganda",
    UA: "Ukraine",
    AE: "United Arab Emirates",
    GB: "United Kingdom",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VU: "Vanuatu",
    VE: "Venezuela",
    VN: "Vietnam",
    WF: "Wallis and Futuna (France)",
    YE: "Yemen",
    ZM: "Zambia"
};
var all_down_sum = 0;
var run = false;
var checkIP = false;
var visibl = true;
var thread_down = [];
var lsat_all_down = 0;
var refresh_lay = 5e3;
async function start_thread(index) {
    try {
        const response = await fetch(testurl, {
            cache: "no-store",
            mode: "cors",
            referrerPolicy: "no-referrer"
        });
        const reader = response.body.getReader();
        while (true) {
            const {
                value,
                done
            } = await reader.read();
            if (done) {
                reader.cancel();
                start_thread(index);
                break;
            }
            if (!run) {
                reader.cancel();
                break;
            }
            thread_down[index] += value.length;
        }
    } catch (err) {
        console.log(err);
        if (run) start_thread(index);
    }
}
var gbip = ""; 
function checkip_address() {
    function ckip(ip_addr, tag) {
    }
    if (visibl) {
        fetch("https://api-ipv4.ip.sb/geoip", {
            referrerPolicy: "no-referrer"
        }).then(response => response.json()).then(data => {
            var tag = document.getElementById("checkip_address");
            tag.innerText = data.ip + " " + data.isp;
            if (data.ip !== gbip) {
                tag.style.color = "";
                ckip(data.ip, tag);
            }
            gbip = data.ip;
        });
    }
    setTimeout(checkip_address, 3000);
}
function noisong() {
    function ckip(ip_addr, tag) {
    }
    if (visibl) {
        fetch("https://api-ipv4.ip.sb/geoip", {
            referrerPolicy: "no-referrer"
        }).then(response => response.json()).then(data => {
            var tag = document.getElementById("checkip_address");
            tag.innerText = data.region + " " + data.country;
            if (data.ip !== gbip) {
                tag.style.color = "";
                ckip(data.ip, tag);
            }
            gbip = data.ip;
        });
    }
    setTimeout(noisong, 5000);
}
checkip_address();
noisong();

