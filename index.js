var nam = prompt("Assalom aleykum iltimos ismingizni kiriting");

var mablag = Number(prompt(`${nam} sizda qancha pulingiz bor?`));

if (mablag >= 11100.61 * 500 + 11100.61 * 250 + 12247.79 * 120) {
  alert(`Oq yo'l ${nam}!`);

} else {
  alert(`${nam} sizda hozircha mablag' yetarli emas.Harakatdan to'xtamang`);
}