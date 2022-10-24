let pertanyaan = document.getElementById("pertanyaan");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let konten = document.getElementById("konten");
let finish = document.getElementById("finish");
let radio1 = document.getElementById("btnradio1");
let radio2 = document.getElementById("btnradio2");
let radio3 = document.getElementById("btnradio3");
let radio4 = document.getElementById("btnradio4");
let dataPertanyaan = [];
let dataJawaban = [];
previous.disabled = true;
let id = 0;
let poin = 0;

let getKuisData = async () => {
  let next = document.getElementById("next");

  let url = "https://6350b1aa3e9fa1244e4b0b89.mockapi.io/kuesioner";
  let response = await fetch(url);
  let data = await response.json();
  dataPertanyaan = [...data];
  pertanyaan.innerHTML = `${data[id].pertanyaan}`;
};

previous.addEventListener("click", function () {
  id--;
  pertanyaan.innerHTML = `${dataPertanyaan[id].pertanyaan}`;
  if (id == 0) {
    previous.disabled = true;
  } else if (id > 0 && id < 9) {
    previous.disabled = false;
    next.style.display = "block";
    finish.style.display = "none";
    radio1.checked = false;
    radio2.checked = false;
    radio3.checked = false;
    radio4.checked = false;
  } else if (id == 9) {
    next.style.display = "none";
    finish.style.display = "block";
    radio1.checked = false;
    radio2.checked = false;
    radio3.checked = false;
    radio4.checked = false;
  }
});

next.addEventListener("click", function () {
  id++;
  pertanyaan.innerHTML = `${dataPertanyaan[id].pertanyaan}`;
  if (id == 0) {
    previous.disabled = true;
  } else if (id > 0 && id < 9) {
    previous.disabled = false;
    next.style.display = "block";
    finish.style.display = "none";
    radio1.checked = false;
    radio2.checked = false;
    radio3.checked = false;
    radio4.checked = false;
  } else if (id == 9) {
    next.style.display = "none";
    finish.style.display = "block";
    radio1.checked = false;
    radio2.checked = false;
    radio3.checked = false;
    radio4.checked = false;
  }
});

radio1.addEventListener("click", function () {
  dataJawaban[id] = radio1.value;
});

radio2.addEventListener("click", function () {
  dataJawaban[id] = radio2.value;
});

radio3.addEventListener("click", function () {
  dataJawaban[id] = radio3.value;
});

radio4.addEventListener("click", function () {
  dataJawaban[id] = radio4.value;
});

function hitungPoin() {
  for (let i = 0; i <= 9; i++) {
    poin += dataPertanyaan[i].jawaban[`${dataJawaban[i]}`];
  }
  console.log(poin);

  if (poin >= 0 && poin <= 10) {
    konten.innerHTML = `
    <div class="row">
      <div class="col-12 mb-3">
        <div class="card text-center" style="height: 40vh">
          <div class="my-auto px-5">Tingkat stress kamu rendah. Kondisi ini artinya kamu dapat mengatasi masalah dengan cara yang sehat. Pertahankan ya kesehatanmu</div>
        </div
      </div>
      <div class="col-12 d-flex justify-content-between">
        <button class="btn btn-success" onclick="window.location.href='index.html'">Home</button>
        <button class="btn btn-success" onclick="window.location.href='list.html'">List Psikolog</button>
      </div>
    </div>
    
    `;
  } else if (poin > 10 && poin <= 20) {
    konten.innerHTML = `
    <div class="row">
      <div class="col-12 mb-3">
        <div class="card text-center" style="height: 40vh">
          <div class="my-auto px-5">Sepertinya kamu sudah menangani masalah dengan baik. Namun, jika kamu kewalahan dan ingin berbicara. Carilah ahli untuk membicarakannya dan membantumu menemukan solusi</div>
        </div>
      </div>
      <div class="col-12 d-flex justify-content-between">
        <button class="btn btn-success" onclick="window.location.href='index.html'">Home</button>
        <button class="btn btn-success" onclick="window.location.href='list.html'">List Psikolog</button>
      </div>
    </div>
    
    `;
  } else if (poin > 20 && poin <= 30) {
    konten.innerHTML = `
    <div class="row">
      <div class="col-12 mb-3">
        <div class="card text-center" style="height: 40vh">
          <div class="my-auto px-5">Sepertinya kamu butuh teman berbicara. Jangan biarkan semua masalah membuatmu menyerah. Kami punya rekomendasi psikolog untuk membantumu mengatasi masalahmu</div>
        </div      
      </div>
      <div class="col-12 d-flex justify-content-between">
        <button class="btn btn-success" onclick="window.location.href='index.html'">Home</button>
        <button class="btn btn-success" onclick="window.location.href='list.html'">List Psikolog</button>
      </div>
    </div>
    `;
  }
}

getKuisData();
