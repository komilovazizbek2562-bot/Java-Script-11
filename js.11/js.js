startApp()

function startApp() {
    NumberOfSeries = +prompt("Nechta seriallar ko'rgansiz?", '')

    while (
        NumberOfSeries == ''  NumberOfSeries == null  isNaN
        (NumberOfSeries)
    ) {
        NumberOfSeries = +prompt("Nechta seriallar ko'rgansiz?", '')
    }
}

seriesDB = {
    count: NumberOfSeries,
    series: [],
    actors: [],
    genres: [],
    privat: false
}

setFavSeries()
countingSeries()
writeGenres()

showDB(seriesDB.privat)

function setFavSeries() {
    for (let i=0; i<2; i++) {
    const a = prompt("So'nggi ko'rgan serialingiz?")
    const b = +prompt("Necha baho berasiz?")

    if(a !== null && a !== '' && b != null && b !==''){
        seriesDB.series[a] = b
    } else{
        i--
    }
}
}

function setFavActors(){
    for (let h=0; h<2; h++) {
        const c = prompt('Sizning sevimli aktyoringiz?')

        if (c !== null && c !== '') {
            seriesDB.actors[c] = c
        } else{
            h--
        }
    }

}

function setFavGenres(){    
    for (let j=0; j<2; j++) {
        const e = prompt('Sizning sevimli janrigiz?')

        if (e !== null && e !== ''){
            seriesDB.genres[e] = e
        } else{
            j--
        }
    }
    
}


function countingSeries(){
    if (seriesDB.count < 5){
        console.log("Siz kam serial ko'rgan ekansiz.");
    
    }else if (seriesDB.count > 5 && seriesDB.count <= 10){
        console.log("Siz classic tamoshabin ekansiz.");
    
    }else if (seriesDB.count > 10){
        console.log("Siz serialchi zvezda ekansiz.");
}
}

function writeGenres(){

}

function showDB(isPrivate){
    if (!isPrivate){
        console.log(seriesDB);
    } else{
        console.log("Ma'lumot privatlangan.");
        
    }
}