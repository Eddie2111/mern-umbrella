import SimpleNav from "../components/Simplenav";
export default function NotFound(){
    const message = "bhau, page nai toh, koi jao?";
    return(
        <>
        <SimpleNav/>
        <div className="container is-max-desktop">
        <div className="tile is-ancestor">
            <div className="tile is-parent">
                <article className="tile is-child notification is-info">
                    <p className="title">{message}</p>
                </article>
            </div>
        </div>
        </div>
        </>
    )
}