let params = new URL(document.location).searchParams;
let id = params.get("id");
let konten = document.getElementById("konten");

let getDetailData = async () => {
  let url = `https://634cc795acb391d34a8bd674.mockapi.io/psikolog?id=${id}`;
  let response = await fetch(url);
  let detail = await response.json();
  konten.innerHTML = `
<div class="container">
    <div class="col-12 my-1">
      <img src="psikolog.jpg" alt="" />
    </div>
    <div class="col-12 my-1">
      <span class="h5">${detail[0].nama}</span>
    </div>
    <div class="col-12 my-1">
      <span class="h6"><i class="fa-solid fa-clock"></i> ${detail[0].pengalaman} tahun</span>
    </div>
    <div class="col-12 my-1">
    <span class="h6"><b>KONTAK : ${detail[0].kontak}</b></span>
  </div>
    <div class="col-12 my-1">
      <p>
       ${detail[0].deskripsi}
      </p>
    </div>
  </div>
`;
};
getDetailData();
