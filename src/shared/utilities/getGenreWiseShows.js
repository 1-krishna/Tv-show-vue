export const getGenreWiseShows = (showList) => {
    let genreWiseShows = {};
    showList.forEach(element => {
        element.genres.forEach(genre => {
            if (genre in genreWiseShows) {
                genreWiseShows[genre] = [...genreWiseShows[genre], { ...element }]
            } else {
                genreWiseShows[genre] = [{ ...element }]
            }
        });
    });

    Object.keys(genreWiseShows).forEach(key => {
        if (genreWiseShows[key].length < 5)
            delete genreWiseShows[key];
    });

    //console.log(genreWiseShows);
    return genreWiseShows;
}