import React from "react";
import logo from "../../assets/images/Group 137.png";
import instagram from "../../assets/images/line-md_instagram.png";
import facebook from "../../assets/images/akar-icons_facebook-fill.png";
import youtube from "../../assets/images/akar-icons_youtube-fill.png";
import c from '../../assets/images/ant-design_copyright-circle-outlined.png';

const index = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="row">
              <div className="col-2">
                <img src={logo} alt="" />
              </div>
              <div className="col-10 my-3">
                <h3>Pojok Baca Probolinggo</h3>
              </div>
            </div>
          </div>
          <div className="col-2">
            <h3 className="my-3">Kontak</h3>
          </div>
          <div className="col-2">
            <h3 className="my-3">Tentang Kami</h3>
          </div>
          <div className="col-3">
            <h3 className="my-3">Galery</h3>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-5 text-center my-5">
            <div className="row">
              <div className="col-3">
                <img src={instagram} alt="" />
              </div>
              <div className="col-3">
                <img src={facebook} alt="" />
              </div>
              <div className="col-3">
                <img src={youtube} alt="" />
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="link">
                <p style={{'color':'#949494'}}>Email</p>
            </div>
            <div className="link">
                <p style={{'color':'#949494'}}>Alamat</p>
            </div>
            <div className="link">
                <p style={{'color':'#949494'}}>No. Rekening</p>
            </div>
          </div>
          <div className="col-2">
          <div className="link">
                <p style={{'color':'#949494'}}>Umum</p>
            </div>
          </div>
          <div className="col-3">
          <div className="link">
                <p style={{'color':'#949494'}}>Kegiatan 2018</p>
            </div>
            <div className="link">
                <p style={{'color':'#949494'}}>Kegiatan 2019</p>
            </div>
            <div className="link">
                <p style={{'color':'#949494'}}>Kegiatan 2020</p>
            </div>
            <div className="link">
                <p style={{'color':'#949494'}}>Kegiatan 2021</p>
            </div>
          </div>
        </div>

        <div className="row bg-success p-3">
            <div className="col-12 text-center text-light">
                <h3> <img src={c} alt="" /> Pojok Baca Probolinggo 2022</h3>
            </div>
        </div>
      </div>
    </>
  );
};

export default index;
