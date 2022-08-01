export default function Footer2 ({footerImg, footerTitle, footerWeek, footerHor}) {

    return (
        <div className="footer">
            <div className="imgFooter">
                <img src={footerImg} alt={footerTitle}></img>
            </div>
            <h3>{footerTitle} <br/> {footerWeek} - {footerHor}</h3>
        </div>
    )
}