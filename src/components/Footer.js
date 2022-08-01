export default function Footer ({footerImg, footerTitle}) {
    return (
        <div className="footer">
            <div className="imgFooter">
                <img src={footerImg} alt={footerTitle}></img>
            </div>
            <h3>{footerTitle}</h3>
        </div>
    )
}