let imgSources;
function game(choice) {
    let hc = choice.id;
    // botChoice();
    decideWinner(botChoice(),hc);

}
function botChoice() {
    // let choices = {
    //     0:"rock",
    //     1:"paper",
    //     2:"scissors"
    // }
    // let bc = Math.floor(Math.random() * 3);
    return  Math.floor(Math.random() * 3);
    // console.log(choices[bc])
    // return choices[bc];
    // return bc;

}
function decideWinner(bothoice,humanChoice) {
    const choices = {
        0:"rock",
        1:"paper",
        2:"scissor"
    }


}
