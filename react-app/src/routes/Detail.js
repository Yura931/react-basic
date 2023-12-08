import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const [loading, setLoading] = useState(true);
    const {id} = useParams(); // 라우터에 넘겨준 파라미터 가져올 수 있음
    const [movie, setMovie] = useState({});
    const getMovieDetail = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
                )
            ).json();
        console.log(json);
        setMovie(json.data.movie);
        setLoading(false);
    }

    useEffect(() => {
        getMovieDetail();
    }, []);

    return (
        <div>
        {
            loading ? "Loding..." : 
            <div>
            <img src={movie.medium_cover_image} alt={movie.title} />
            <h1>{movie.title}</h1>
            <p>{movie.description_full}</p>
            </div>
        }
        </div>
    )
}

export default Detail;