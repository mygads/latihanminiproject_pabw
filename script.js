$(document).ready(function() {
    $.ajax({
        url: 'toko_buku.json',
        type: 'GET',
        dataType: 'json',
        success: function(tokoBuku) {
            $("#infoToko").html(
                "Nama Toko: " + tokoBuku.nama + "<br>" +
                "Pengarang: " + tokoBuku.pengarang + "<br>" +
                "Alamat: " + tokoBuku.alamat
            );
            $.each(tokoBuku.koleksi, function(i, buku) {
                var row = $("<tr>");
                row.append($("<td>").text(buku.judul));
                row.append($("<td>").text(buku.pengarang));
                row.append($("<td>").text(buku.tahunTerbit));
                $("#koleksiBuku").append(row);
            });
        },
        error: function(error) {
            console.log("Error: ", error);
        }
    });
});
