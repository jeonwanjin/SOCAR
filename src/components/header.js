
import './header.css';
import Video from '../videos/main_video.mp4';
import scrollDown from '../img/scrollDown.76bc1872.svg';



function Myheader() {

    return (
    <div className="header">
        <header>
                <div className="header_wrap">   
                            <video muted autoPlay loop type="video/mp4" >
                                <source src={Video} type="video/mp4" />
                            </video>
                            <div className="nav">
                                <div className="logo">SOCAR</div>
                                <ul>
                                    <li>ABOUT</li>
                                    <li>SOCAR UNIVERSE</li>
                                    <li>MOBILITY TECH</li>
                                    <li>CAREERS</li>
                                    <li>IR</li>
                                    <li>NEWS</li>
                                </ul>
                            </div>
                            <div className='txt'>
                                <p>모든 사람이 자유롭고 행복하게
                                    <br></br>
                                    이동하는 세상을 만듭니다
                                </p>
                                <div className='scroll_btn'>
                                    <div className='sc_img'>
                                        <img src={scrollDown} alt='scrollDown'></img>
                                    </div>
                                    <span>scroll</span> 
                                </div>
                            </div>
                </div>
            </header>
        </div>
    );
}

export default Myheader;


   
   




