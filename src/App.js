import './App.css';
import Myheader from './components/header';
import Mysection from './components/section';
import Myfooter from './components/footer';
import pic1 from './img/main_second.png';
import pic2 from './img/main_third.png';
import pic3 from './img/main_fourth.png';

function App() {

  return (
    <div className="App">
      <Myheader />
      <Mysection
        title = "About Us"
        span1 ="기술과 데이터로"
        span2 ="이동의 문제를 해결합니다"
        btnSpan ="MOBILITY TECH"
        img1 = {pic1}
        spanstyle = "span_style"
        arrowstyle = "arrow_style"
      />
      <Mysection 
        title = "SOCAR UNIVERSE"
        span1 ="디지털 플랫폼을 중심으로"
        span2 ="새로운 모빌리티 생태계를 만듭니다"
        btnSpan ="SOCAR UNIVERSE"
        img1 = {pic2}
        spanstyle = "span_style2"
        arrowstyle = "arrow_style2"
      />
      <Mysection 
        title = "CAREERS"
        span1 ="쏘카다운 방식으로"
        span2 ="모빌리티를 혁신합니다"
        btnSpan ="CAREERS"
        img1 = {pic3}
        spanstyle = "span_style2"
        arrowstyle = "arrow_style2"
      />
      <Myfooter />
    </div>
  );
}












export default App;
