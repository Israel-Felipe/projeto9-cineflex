export default function Footer ({footerImg, footerTitle}) {
    return (
        <div className="footer">
            <div className="imgFooter">
                <img src={footerImg}></img>
            </div>
            <h3>{footerTitle}</h3>
        </div>
    )
}