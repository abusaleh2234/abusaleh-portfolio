
import Banner from "../../Section/Banner/Banner";
import Navbar from "../../Section/Navbar/Navbar";
import Container from "../../component/Container/Container";


const Home = () => {
    return (
        <div id="home">
            <Container>
                <div className="relative">
                    <div className="absolute w-full p-5">
                        <Navbar></Navbar>
                    </div>
                    <Banner></Banner>
                </div>
                
            </Container>
        </div>
    );
};

export default Home;