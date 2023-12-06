import './section.css';





function Mysection(props) {

    return (
        <section className="section box">
            <div>
                <div className="section_wrap">   
                    <img className={props.imgstyle} src={props.img1}></img>
                    <h2 className="sec_h2">{props.title}</h2>
                    <div className="sec_span">
                        <span className={props.spanstyle}>{props.span1}</span><br></br>
                        <span className={props.spanstyle}>{props.span2}</span>
                    </div>
                    <button className="sec_btn">
                        <span className={props.spanstyle}>{props.btnSpan}</span>
                        <div className={props.arrowstyle}></div>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Mysection;


   
   