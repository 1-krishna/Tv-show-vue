export const getTopFiveShows = (showList) => {

    let result = [];

    showList.sort((a, b) => {
        if (a.rating.average && b.rating.average) {
            return b.rating.average - a.rating.average;
        }
        return 1;
    });

    result.push(showList[0]);
    result.push(showList[1]);
    result.push(showList[2]);
    result.push(showList[3]);
    result.push(showList[4]);

    return result;
};