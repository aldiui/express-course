"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Kelas", [
            {
                id_kategori: 1,
                nama_Kelas: "Pemasaran Sosial Media",
                deskripsi: "Pelajari prinsip-prinsip dasar manajemen keuangan. Dari perencanaan anggaran hingga analisis laporan keuangan",
                harga: 90000,
                gambar: "gambar",
                video: "video",
                nama_pengajar: "Bambang Pamungkas",
                detail_pengajar:
                    "Bambang Pamungkas adalah seorang profesional di bidang pemasaran digital yang telah mengakumulasi pengalaman berharga selama bertahun-tahun. Sebagai seorang Direktur Strategi Pemasaran Digital, Andy telah memimpin banyak kampanye pemasaran sukses dan membantu berbagai perusahaan untuk mencapai tujuan mereka dalam dunia digital",
                durasi: "02:30:00",
                rating: 0,
            },
            {
                id_kategori: 1,
                nama_Kelas: "Strategi Pemasaran Digital",
                deskripsi: "Pahami strategi pemasaran digital yang efektif meningkatkan visibilitas bisnis online. Dari SEO hingga pemasaran media sosial",
                harga: 100000,
                gambar: "gambar",
                video: "video",
                nama_pengajar: "Joko Tingkir",
                detail_pengajar:
                    "Joko Tingkir adalah seorang profesional berpengalaman dalam bidang manajemen keuangan. Dengan latar belakang yang kaya dalam industri keuangan, ia telah memimpin banyak perusahaan dalam mengelola keuangan mereka dengan efisien.",
                durasi: "02:30:00",
                rating: 0,
            },
            {
                id_kategori: 2,
                nama_Kelas: "Fundamentals Desain Produk",
                deskripsi: "Pelajari dasar desain produk, dari konsepsi ide hingga prototipe, untuk menciptakan produk yang menarik dan fungsional",
                harga: 100000,
                gambar: "gambar",
                video: "video",
                nama_pengajar: "Andy",
                detail_pengajar:
                    "Andy adalah seorang profesional berpengalaman dalam bidang manajemen keuangan. Dengan latar belakang yang kaya dalam industri keuangan, ia telah memimpin banyak perusahaan dalam mengelola keuangan mereka dengan efisien.",
                durasi: "02:30:00",
                rating: 0,
            },
            {
                id_kategori: 2,
                nama_Kelas: "Membangun Brand yang Kuat",
                deskripsi: "Pahami tren pemasaran digital, termasuk penggunaan iklan online, email marketing, dan pemanfaatan influencer",
                harga: 70000,
                gambar: "gambar",
                video: "video",
                nama_pengajar: "Bangkit",
                detail_pengajar:
                    "Bangkit adalah seorang profesional berpengalaman dalam bidang manajemen keuangan. Dengan latar belakang yang kaya dalam industri keuangan, ia telah memimpin banyak perusahaan dalam mengelola keuangan mereka dengan efisien.",
                durasi: "02:30:00",
                rating: 0,
            },
            {
                id_kategori: 2,
                nama_Kelas: "Desain Produk Pemula",
                deskripsi: "Pelajari langkah-langkah praktis untuk menciptakan produk dengan daya tarik visual yang membangun citra merk di pasaran",
                harga: 80000,
                gambar: "gambar",
                video: "video",
                nama_pengajar: "Rangga",
                detail_pengajar:
                    "Rangga adalah seorang ahli di bidang desain produk dan pengembangan produk. Dengan latar belakang yang kaya dalam industri desain, Rama telah berhasil menciptakan produk-produk inovatif yang menggabungkan fungsionalitas dan estetika yang menakjubkan.",
                durasi: "02:30:00",
                rating: 0,
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("Kelas", null, {});
    },
};
