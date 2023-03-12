function sumSeconds(input) {

    let timeFirst = Number(input[0]);
    let timeSecond = Number(input[1]);
    let timeThird = Number(input[2]);

    let totalTime = timeFirst + timeSecond + timeThird ;
    let minutes = Math.floor(totalTime/60);
    let seconds = ((totalTime % 60).toString()).padStart(2,0)

    console.log(`${minutes}:${seconds}`);

}

sumSeconds(["35", "45", "44"]);
sumSeconds(["22", "7", "34"]);
sumSeconds(["50", "50", "49"]);
sumSeconds(["14", "12", "10"]);