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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        id pulvinar velit. In ac massa arcu. Aenean congue, erat non
        rutrum cursus, tortor lorem malesuada risus, in pretium lorem
        ligula eu nulla. Integer sed vehicula nibh, eu malesuada magna.
        Sed eget aliquet justo. Donec vel felis sodales arcu vehicula
        mattis sed finibus quam. Mauris quis convallis nibh. Duis in mi
        vehicula odio fringilla fringilla. Pellentesque blandit in nisl
        non lobortis. Vivamus at rutrum massa, nec sollicitudin urna.
        Nulla sem tortor, faucibus vitae lectus et, hendrerit lobortis
        leo. Vestibulum finibus magna eros, id tristique magna vestibulum
        ut. Suspendisse semper, ligula nec consectetur pulviginar, ex
        lacus ultricies purus, quis tincidunt mauris ipsum et odio s.
      </p>
    </div>
  </div>
`;
};
getDetailData();
