fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) ); 


function fiveHeads() {
    let counter = 0;
    
    let coinFlip = 0;

    let i = 0;

    while(counter != 5){
        
        coinFlip = Math.floor(Math.random() * 2);
        
        console.log(coinFlip);

        if (coinFlip == 1){
            counter = 0;
        }
        else if (coinFlip == 0){
            counter++;
        }

        i++;
    }
    return new Promise( (resolve, reject) => {
        if (i > 100){
            reject(`The coin has been flipped more than 100 times without getting 5 heads in a row. It took ${i} flips.`);
        }
        else if (counter == 5){
            resolve(`flipped heads five time in a row after ${i} coin flips!`);
        }
    });
}


