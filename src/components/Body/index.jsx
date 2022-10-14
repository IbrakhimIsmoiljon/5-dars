import React from "react";
import "./style.css";
import img1 from "../../assets/images/akar-icons_search.png";
import img2 from "../../assets/images/Group 140.png";
import icon2 from "../../assets/images/iconoir_donate.png";
import img3 from "../../assets/images/Ellipse 24.png";
import img4 from "../../assets/images/Ellipse 25.png";
import circle from "../../assets/images/Group 112.png";
import img5 from "../../assets/images/Ellipse 26.png";
import img6 from "../../assets/images/Ellipse 27.png";
import frame1 from '../../assets/images/Frame 128.png';
import frame2 from '../../assets/images/Frame 129.png';
import frame3 from '../../assets/images/Frame 130.png';
import icon3 from '../../assets/images/Group (1).png';
import icon4 from '../../assets/images/logos_whatsapp.png';

const index = () => {
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12">
            <p
              className="text1"
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                marginLeft: "40%",
                marginTop: "100px",
              }}
            >
              <span style={{ color: "green" }}>Pojok Baca</span> Probolinggo
            </p>
            <h1 style={{ marginLeft: "15%" }}>
              Pinjam Buku Secara <span style={{ color: "green" }}>Gratis</span>{" "}
              untuk Masyarakat
            </h1>
          </div>
        </div>
        <div className="row mt-5">
          <div
            className="col-6"
            style={{ paddingLeft: "400px", borderRadius: "20px" }}
          >
            <button className="btn btn-success">
              Cari Judul Buku
              <img src={img1} alt="" />
            </button>
          </div>
          <div className="col-6">
            <button className="btn btn-outline-success">
              Donasi dengan Kami <img src={icon2} alt="" />
            </button>
          </div>
          <img src={img2} alt="" />
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h3 className="text-dark mt-5 pt-5" style={{ marginLeft: "30%" }}>
              Kenapa Kita <span className="text-success">Harus</span> Membaca
              Buku?
            </h3>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-6">
            <div
              className="card bg-light mt-5"
              style={{
                width: "30rem",
                boxShadow: " 5px 5px 5px 0 gray",
                border: "1px solid white",
              }}
            >
              <div className="card-body">
                <h6 className="card-title" style={{ color: "gray" }}>
                  “Aku rela dipenjara asalkan{" "}
                  <span style={{ color: "black" }}>bersama buku</span>, karena
                  dengan buku <span style={{ color: "black" }}>aku bebas</span>{" "}
                  ”
                </h6>
                <p className="card-text mt-4">
                  <div className="row">
                    <div className="col-4">
                      <img src={img3} alt="" />
                    </div>
                    <div className="col-8">
                      <div className="row">
                        <div className="col-12">
                          <h4>Mohammad Hatta</h4>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <p style={{ color: "grey", fontSize: "15px" }}>
                            Wakil Presiden Indonesia Pertama
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div
              className="card bg-light mt-5"
              style={{
                width: "30rem",
                boxShadow: " 5px 5px 5px 0 gray",
                border: "1px solid white",
              }}
            >
              <div className="card-body">
                <h6 className="card-title" style={{ color: "gray" }}>
                  “Cuma perlu <span style={{ color: "black" }}>satu buku</span>{" "}
                  untuk jatuh cinta pada membaca, Cari Buku itu!{" "}
                  <span style={{ color: "black" }}>Mari jatuh cinta!</span> ”
                </h6>
                <p className="card-text mt-4">
                  <div className="row">
                    <div className="col-4">
                      <img src={img4} alt="" />
                    </div>
                    <div className="col-8">
                      <div className="row">
                        <div className="col-12">
                          <h4>Najwa Shihab</h4>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <p style={{ color: "grey", fontSize: "15px" }}>
                            Duta Membaca
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="row align-items-center">
              <div className="col-3">
                <div className="my-5">
                  <img src={circle} alt="" />
                </div>
              </div>
              <div className="col-9">
                <h2>500+</h2>
                <p>Judul Buku</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="row align-items-center">
              <div className="col-3">
                <div className="my-5">
                  <img src={circle} alt="" />
                </div>
              </div>
              <div className="col-9">
                <h2>$0</h2>
                <p>Gratis Peminjaman</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="row align-items-center">
              <div className="col-3">
                <div className="my-5">
                  <img src={circle} alt="" />
                </div>
              </div>
              <div className="col-9">
                <h2>5</h2>
                <p>Kegiatan Rutin</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-9 my-5">
            <h1>Apa Kata Mereka?</h1>
          </div>
          <div className="col-3 my-5" style={{ color: "#949494" }}>
            <h6>Selengkapnya</h6>
          </div>
          <div className="col-12">
            <h6 style={{ color: "#949494" }}>
              Mereka yang telah menjadi pengunjung tetap kami
            </h6>
          </div>
        </div>

        <div className="row my-5">
          <div className="col-6">
            <div className="card bg-light">
              <div className="card-body">
                <div className="card-title">
                  <h6 style={{ color: "#949494" }}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </h6>
                  <div className="row">
                    <div className="col-4 text-center">
                      <img src={img5} alt="" />
                    </div>
                    <div className="col-8">
                      <h3>Guy Hawkins</h3>
                      <h5 style={{ color: "#949494" }}>32 Tahun, Karyawan</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card bg-light">
              <div className="card-body">
                <div className="card-title">
                  <h6 style={{ color: "#949494" }}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </h6>
                  <div className="row">
                    <div className="col-4 text-center">
                      <img src={img6} alt="" />
                    </div>
                    <div className="col-8">
                      <h3>Brooklyn Simmons</h3>
                      <h5 style={{ color: "#949494" }}>20 Tahun, Mahasiswa</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row my-5">
          <div className="col-9">
            <h2 className="my-5">Kegiatan Pojok Baca Probolinggo</h2>
            <h6 style={{ color: "#949494" }}>
              Intip kegiatan yang telah kami selenggarakan{" "}
            </h6>
          </div>
          <div className="col-3">
            <h6 className="my-5" style={{ color: "#949494" }}>Selengkapnya</h6>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <img src={frame1} alt="" />
          </div>
          <div className="col-4">
          <img src={frame2} alt="" />
          </div>
          <div className="col-4">
          <img src={frame3} alt="" />
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row text-center">
          <div className="col-12">
            <h2>Ingin <span style={{'color':'green'}}>Membantu</span> Meningkatkan Literasi Anak-Anak Sekitar Kita?</h2>
            <h5 className="my-3" style={{'color':'#949494'}}>Percayakan melalui kegiatan kita</h5>
            <button className="btn btn-success">Donasi dengan Kami <img src={icon3} alt="" /></button>
            <h6 className="my-3" style={{'color':'#949494'}}>Atau</h6>
            <button className="btn btn-outline-success">Hubungi Kami <img src={icon4} alt="" /></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
