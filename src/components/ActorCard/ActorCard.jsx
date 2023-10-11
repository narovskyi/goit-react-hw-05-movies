export default function ActorCard({ name, character, photoPath }) {
    return (
        <>
            <p>{name}</p>
            <p>{character}</p>
            <img src={`https://image.tmdb.org/t/p/w200${photoPath}`} alt="" />
        </>
    );
}