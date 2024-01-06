import vg from "../assets/2.webp"
import { AiFillYoutube, AiFillAmazonCircle, AiFillGoogleCircle, AiFillInstagram } from "react-icons/ai";

const Home = () => {
    return (

        <>
            <div className="home" id="home">
                <main>
                    <h1>WebStar</h1>
                    <p>Solutions to all your problems</p>
                </main>
            </div>
            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        We are your one and only solution to the tech problems you face every day. We are leading tech company whose aim is to increase the problem solving ability in children.
                    </p>
                </div>
            </div>
            <div className="home3" id="about">
                <div>
                    <h1>Who we are?</h1>
                    <p>Webstar is an excellent choice for your software development needs. The company’s focus on customized solutions, quality and reliability, customer support, competitive pricing, timely delivery, and innovation makes it a reliable partner for your software development projects.</p>
                </div>
            </div>
            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{animationDelay:"0.3s"}}>
                            <AiFillGoogleCircle/>
                            <p>Google</p>
                        </div>
                        <div style={{animationDelay:"0.5s"}}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{animationDelay:"0.7s"}}>
                            <AiFillYoutube/>
                            <p>Youtube</p>
                        </div>
                        <div style={{animationDelay:"0.7s"}}>
                            <AiFillInstagram/>
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>

    )
}
export default Home;