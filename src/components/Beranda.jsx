import React from "react";

function Beranda({ bookList }) {
    return (
        <div className="container mt-3 w-75">
            <h1 className="text-center">Halaman Beranda</h1>

            <div id="katalogBuku" className="mt-5">
                {/* <h2>Katalog Buku</h2>
                <hr />
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th className="text-center">#</th>
                            <th>Judul Buku</th>
                            <th>Pengarang</th>
                            <th>Harga</th>
                            <th className="text-center">Stok</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookList.map((book, index) => (
                            <tr key={index._id}>
                                <td>{index + 1}</td>
                                <td>{index.judul}</td>
                                <td>{index.pengarang}</td>
                                <td>{index.harga}</td>
                                <td>{index.stok}</td>
                            </tr>
                        ))}
                    </tbody>
                </table> */}
            </div>
        </div>
    );
}

export default Beranda;

// ini merupakan script jsx untuk halaman beranda.