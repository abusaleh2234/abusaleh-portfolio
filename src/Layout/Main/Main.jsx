import Home from "../../Page/Home/Home";
import About from "../../Section/About/About";
import Education from "../../Section/Education/Education";
import HaveProjects from "../../Section/HaveProjects/HaveProjects";
import Skills from "../../Section/Skills/Skills";
import Container from "../../component/Container/Container";
import bg from "../../assets/bg1.png"
import cotuctbg from "../../assets/contact-background.png"
import Projects from "../../Section/Projects/Projects";
import Contuct from "../../Section/Contuct/Contuct";
import Footer from "../../Section/Footer/Footer";


const Main = () => {
    return (
        <div className="px-3 xl:px-0">
            <Home></Home>
            <Container>
                <About></About>
                <Skills></Skills>
                <Education></Education>
            </Container>
            <div className="relative bg-fixed bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${bg})` }}>
                <div className="absolute bg-black h-full w-full bg-opacity-50 top-0 left-0"></div>
                <div className="relative z-50">
                    <Container>
                        <HaveProjects></HaveProjects>
                    </Container>
                </div>
            </div>
            <Container>
                <Projects></Projects>
            </Container>
            <div className="bg-fixed bg-no-repeat bg-center bg-cover py-8" style={{ backgroundImage: `url(${cotuctbg})` }}>
            <Container>
                <Contuct></Contuct>
            </Container>
            </div>
            <Container>
                <Footer></Footer>
            </Container>
        </div>
    );
};

export default Main;