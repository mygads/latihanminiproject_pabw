window.onload = function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var tokoBuku = JSON.parse(this.responseText);
            document.getElementById("infoToko").innerHTML = 
                "Nama Toko: " + tokoBuku.nama + "<br>" +
                "Pengarang: " + tokoBuku.pengarang + "<br>" +
                "Alamat: " + tokoBuku.alamat;
            var tabel = document.getElementById("koleksiBuku");
            tokoBuku.koleksi.forEach(function(buku) {
                var row = tabel.insertRow(-1);
                row.insertCell(0).innerHTML = buku.judul;
                row.insertCell(1).innerHTML = buku.pengarang;
                row.insertCell(2).innerHTML = buku.tahunTerbit;
            });
        }
    };
    xhr.open("GET", "toko_buku.json", true);
    xhr.send();
}
