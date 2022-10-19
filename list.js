let dataContainer = document.getElementById("konten");

let getData = async () => {
  let response = await fetch(
    "https://634cc795acb391d34a8bd674.mockapi.io/psikolog"
  );
  let respon = await response.json();

  respon.forEach((item) => {
    console.log(item);
    dataContainer.innerHTML += `        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
        <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <img src="psikolog.jpg" />
            </div>
            <div class="col-6">
              <div class="row">
                <div class="col-12">
                  <span class="card-title"> ${item.nama} </span>
                </div>
                <div class="col-12 mb-5">
                  <span class="">${item.pengalaman} Tahun</span>
                </div>
                <div class="col-12">
                  <button class="btn btn-success">Detail</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>`;
  });
};

getData();
