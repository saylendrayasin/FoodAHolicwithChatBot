//function getTime
function getTime(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

//function getDate
function getDate(date) {
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var year = date.getFullYear();
  var strDate = month + "/" + day + "/" + year;
  return strDate;
}

//function getDay
function getDay(date) {
  let day = date.getDay();
  let daylist = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];
  return daylist[day];
}

//function getMonth
function getMonth(date) {
  let month = date.getMonth();
  let monthlist = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  return monthlist[month];
}

//random multiple response
function random_response(arr) {
  let rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

//rerandom multiple response
function rerandom_response(arr, last) {
  let rand = Math.floor(Math.random() * arr.length);
  if (arr[rand] == last) {
    rand = Math.floor(Math.random() * arr.length);
  }
  return arr[rand];
}

// data templates or responses
const templates = `{\
    "name": "${rerandom_response(
      [
        "Kamu nanya. Kamu bertanya-tanya. Call me, FoodBot.",
        "Saya Bot yang suka makan",
        "Bot yang tahu segalanya tentang makanan",
      ],
      "Saya Bot yang suka makan"
    )}", \

    "hobby":"Haha.. saya suka membaca pikiran kamu :).", \
    "human":"Saya adalah chatbot, dapat memberikan informasi.",\
    "okey":"Okey, kamu luar biasa. Salam sukses !!!",\
    "greetings":"hallo, semoga kamu baik-baik saja.",\
    "thanks":"Iya, sama-sama ya.",\
    "hi":"Hi juga. Semoga harimu menyenangkan.",\
    "condition":"Saya adalah chatbot. Pastinya saya sehat.",\
    "time":"Sekarang jam ${getTime(new Date())}",\
		"breakfast":"Awali harimu dengan yang manis-manis",\
    "lunch":"Makan apa saja yang kamu suka, jangan lupa olahraga",\
    "dinner":"Carilah makanan dengan gizi dan protein yang tinggi",\
    "dessert":"Contohnya snack",\
    "maincourse":"Coba cari menu dengan nasi atau daging",\
    "appatizer":"Ini makanan pembuka",\
    "cake":"Silahkan dicoba, kalau gak bisa tinggal beli aja",\
    "drink":"Rekomendasi minuman terbaik",\
    "diet":"Affah iya?",\
    "vegetarian":"Kontol",\
    "meat":"Tersedia berbagai pilihan daging, silahkan cari sendiri",\
    "seafood":"Makanan seafood",\
    "proteinTinggi":"Menu ini punya protein tinggi",\
    "proteinRendah":"Menu ini punya protein rendah",\
    "howtomake":"Tinggal ikut tutorial :v",\
    "howtocook":"Makanan bisa digoreng, direbus, dibakar, atau dipanggang",\
    "recipe":"Jangan malas, cari lah!!!",\
    "local":"Kamu bisa nasi goreng!",\
    "date":"Sekarang tanggal ${getDate(new Date())}",\
    "day":"Sekarang hari ${getDay(new Date())}",\
    "month":"Sekarang bulan ${getMonth(new Date())}",\
		"badword":"Jangan Toxic Bang"\
}`;

// parse to json object
const data_responses = JSON.parse(templates);
