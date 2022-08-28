let dataBarang = [];

function showItem() {
  let listBarang = document.getElementById("dataBarang");
  listBarang.innerHTML = "";

  for (i = 0; i < dataBarang.length; i++) {
    let editBtn = "<a class='button blueBG' href='#' onclick='editBarang(" + i + ")'><i class='fa-solid fa-pen-to-square'></i></a>";
    let deleteBtn = "<a class='button redBG' href='#' onclick='deleteBarang(" + i + ")'><i class='fa-solid fa-x'></i></a>";
    listBarang.innerHTML += `<li>${i + 1 + "."}<span>${dataBarang[i]}</span> ${editBtn} ${deleteBtn}</li>`;
  }
}

function tambahBarang() {
  let input = document.querySelector("input[name = barang]");
  let cekdata = dataBarang.includes(input.value);
  if (cekdata) {
    alert("Barang Sudah Ada!");
  } else if (input.value == "") {
    alert("Masukkan Nama Barang!");
  } else {
    dataBarang.push(input.value);
  }
  showItem();
}

function clearData() {
  let confirmation = confirm("Yakin Hapus Semua Data Barang?");
  if (confirmation == true) {
    dataBarang = [];
  }

  showItem();
}

function deleteBarang(i) {
  dataBarang.splice(i, 1);
  showItem();
}

showItem();
