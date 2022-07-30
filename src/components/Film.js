
export default function Film ({imgFilm, titleFilm}) {
    return (
        <div className="filmeCard" onClick={() => <TimePage />}>
            <img src={imgFilm} alt={titleFilm}></img> 
        </div> 
    )
}