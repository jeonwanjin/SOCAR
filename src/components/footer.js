
import './footer.css';

function Myfooter() {

  return (
    <div className="footer">
       <footer>
                <div className="footer_wrap">
                    <div className="footer_top"> 
                        <div className="logo-f">SOCAR</div>
                        <div className="icon_box">
                            <div className='icon_box_bg'>
                                <img src="img/instagram.813fc6b3.svg"></img>
                            </div>    
                            <div className='icon_box_bg'>
                                <img src="img/facebook.b7383cd7.svg"></img>
                            </div>    
                            <div className='icon_box_bg'>
                                <img src="img/youtube.468e7f75.svg"></img>
                            </div>    
                            <div className='icon_box_bg'>
                                <img src="img/blog.e15e4213.svg"></img>
                            </div>                  
                        </div>
                    </div>
             
                    <div className="txt2">
                        <ul>
                            <li>문의하기</li>
                            <li>오시는 길</li>
                            <li>개인정보처리방침</li>          
                            <li>쏘카 윤리강령</li>          
                            <li>기업윤리 신고·제보</li>          
                        </ul>
                        <div className="btn">관련사이트  <img src="img/arrow_down..svg"></img></div>
                    </div>
                    <pc className="copy">©2023 SOCAR All rights reserved.</pc>
                </div>
        </footer>
    </div>
  );
}

export default Myfooter;
