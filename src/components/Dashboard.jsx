import "./Dashboard.css";
import logo1 from "../assets/logo1.png";
// import logo2 from "../assets/logo2.png";
import bgImage from "../assets/bgc.png";
import I from "../assets/I.png";
import II from "../assetS/Group 444.png";
import III from "../assets/Group 445.png";
import IV from "../assets/Group 446.png";
import V from "../assets/v.png";
import poolImg from "../assets/poolImg.png";
import poolOverImg from "../assets/poolOverImg.png";
import Rooms from "../assets/Variant34.png";
import Pool from "../assets/Variant32.png";
import Dining from "../assets/Variant31.png";
import Frame52 from "../assets/Frame 52.png";
import forCompanies from "../assets/Frame 160.png";
import goldlogo from "../assets/goldlogo.png";

export default function Home() {
    return (
        <div className="screen">

            <div className="dashboard"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>

                <div className="Header">
                    <div className="logo">
                        <div><button className="btn">MENU</button></div>
                        <div className="image-stack">
                            <img src={logo1} alt="Logo 1" className="logo-img1" />
                            {/* <img src={logo2} alt="Logo 2" className="logo-img2" /> */}
                        </div>
                        <div>
                            <button className="btn">Bookings</button>
                        </div>
                    </div>
                    <nav >
                        <hr />

                        <ul className="nav">
                            <p>Wellness</p>
                            <p>Gastro</p>
                            <p>Hotel</p>
                            <p>Events</p>
                            <p>Contact</p>
                        </ul>
                        <hr />

                    </nav>
                </div>
                <div className="hero-section">

                    <h1>Hotel Royal Phoenicia</h1>
                    <h3>Your favourite place. Our family story</h3>
                </div>

            </div>


            <div className="intro">
                <div className="custom-image-1" >
                    <img src={I} alt="1" />
                </div>
                <h3 className="custom-quote-1">
                    The stay at Wellness & Pool Hotel
                </h3>
                <h3 className="custom-quote-1">
                    Royal Phoenicia means enjoying every moment.</h3>
                <h3 className="custom-quote-1">
                    Relax. Find inspiration. Be fascinated.
                </h3>
            </div>

            <section className="features">
                <h3 className="poolHotelText">Hotel</h3>
                <div className="poolImageWrapper">
                    <img src={poolImg} alt="Pool Image" className="poolImg" />
                    <img src={poolOverImg} alt="Pool Image Overlay" className="poolOverImg" />
                </div>
            </section>

            <div className="II">
                <div className="custom-image-2" >
                    <img src={II} alt="2" />
                </div>
                <div className="RoomCards">
                    <div><img src={Rooms} alt="" /></div>
                    <div><img src={Dining} alt="" /></div>
                    <div><img src={Pool} alt="" /></div>
                </div>
            </div>

            <div className="accomodation">
                <h3 className="accomodationText">Accomodation</h3>
                <h2 className="StayPackages">Stay Packages</h2>
                <div className="RoomCards">
                    <div><img src={Rooms} alt="" /></div>
                    <div><img src={Dining} alt="" /></div>
                    <div><img src={Pool} alt="" /></div>
                </div>
            </div>

            <div className="III">
                <div className="custom-image-2" >
                    <img src={III} alt="3" />
                </div>
                <div className="RoomCards">
                    <div><img src={Rooms} alt="" /></div>
                    <div><img src={Dining} alt="" /></div>
                    <div><img src={Pool} alt="" /></div>
                </div>
            </div>


            <div className="IV">
                <div className="custom-image-2" >
                    <img src={IV} alt="4" />

                </div>
                <h3 className="custom-quote-1">
                    Exceptional gastronomy served in elegant spaces.
                </h3>
                <div className="RoomCards">
                    <div><img src={Frame52} alt="" /></div>
                    <div> <h3>
                        About Us
                    </h3>
                        <p>
                            Royal Phoenicia Hotel offers an array of top-tier <br />
                            facilities designed to enhance the comfort and <br />
                            convenience of every guest. The hotel features a luxurious <br />
                            spa and wellness center, where guests can indulge in soothing<br />
                            treatments and rejuvenating massages. For those seeking to <br />
                            maintain their fitness routine, the fully equipped gym provides <br />
                            a space for exercise, while the outdoor pool offers a relaxing<br />
                            environment to unwind. Dining at the hotel is a pleasure, with an <br />
                            on-site restaurant offering a diverse selection of cuisines in an <br />
                            elegant atmosphere. Additionally, the hotel provides business facilities, <br />
                            including meeting rooms and event spaces, ideal for corporate travelers.<br />
                            With its comprehensive range of services.</p></div>
                </div>
            </div>

            <section className="features">
                <div className="custom-image-2" ><img src={V} alt="5" /></div>
                <div className="poolImageWrapper">
                    <img src={poolImg} alt="Pool Image" className="poolImg" />
                    <img src={poolOverImg} alt="Pool Image Overlay" className="poolOverImg" />
                </div>
            </section>

            <div>
                <div className="footer">
                    <div className="footer1">
                        <h4>Rooms</h4>
                        <h4>Wellness</h4>
                        <h4>Gastro</h4>
                        <h4>Hotel</h4>
                        <h4>Events</h4>
                    </div>
                    <div className="footer2">
                        <h4>More About Rooms</h4>
                        <p>120 comfortable rooms</p>
                        <p>Dinings</p>
                        <p>Packages </p>
                        <p>Pools</p>
                    </div>

                    <div className="footer3">
                        <img src={goldlogo} />
                        <h3>Wellness & Pools Hotel <br/> Royal Phoenicia </h3>
                        <p>Building 1288</p>
                        <p>Road 3931, Block 339</p>
                        <p>Umm Al Hasam – Manama</p>
                        <p>+973 1730 7307</p>
                        <p>info@royalphoeniciahotel.com </p>
                        <p>Contacts →</p>
                    </div>
                </div>
            </div>
        </div>
    );
}