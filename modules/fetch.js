import axios from 'axios'

const api_url = "https://api.themoviedb.org/3";
const api_key = "4d8aa15e2551b4d3a51bf0064361cfa8";

const getUrl = ($url,$parms = []) => {
    let $parms_text = "";
    Object.entries($parms).forEach(([$key, $item])=>{
        $parms_text = $parms_text+("&"+$key+"="+$item);
    });
    
    return api_url+$url+"?api_key="+api_key+"&language=zh-TW&region=tw"+$parms_text;
}

const getTopRateMovie = async() => {
    return await axios.get(getUrl("/movie/popular"))
}


const getMovieGenre = async() => {
    return await axios.get(getUrl("/genre/movie/list"))
}

const getDiscoverMovie = async($genre_ids,$year = 0) => {
    const $parms = Array();
    $parms['with_genres'] = $genre_ids;
    if($year > 0){
        $parms['year'] = $year;
    }
    
    return await axios.get(getUrl("/discover/movie",$parms))
}

export {
    getTopRateMovie,
    getMovieGenre,
    getDiscoverMovie
}