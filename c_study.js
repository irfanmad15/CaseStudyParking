const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: `What is your vehicle type? (car = 1, bike = 2)`
});


var pcar = new Array ();
var pbike = new Array ();
var datenow = Date();


console.log(pcar.length);
console.log(pbike.length);




rl.prompt();

rl.on('line', (line) => {
  switch (line.trim()) {
    case '1':
      console.log('CAR');
      for(var i=0;i<45;i++){
        console.log(pcar[i])
        }
      rl.question('What is your vehicle ID? ', (answer2) => {
              pcar.push(answer2);
        rl.question('How long you want to park your vehicle (hour)? ', (answer3) => {

            if(answer3<=5){
                        var result = (3)*(answer3);
                }else {
                        var result = 50;
                }
          console.log(`Details:
   
      
      Vehicle        : CAR
      Vehicle ID     : ${answer2}
      Duration (Hour): ${answer3}
      Total payment  : RM${result}
      Date           : ${datenow}
      `);
 
    });
  });
      break;

      case '2':
      console.log('BIKE')
      for(var i=0;i<15;i++){
        console.log(pbike[i])
      }
      rl.question('What is your vehicle ID? ', (answer2) => {
        pbike.push(answer2);

        rl.question('How long you want to park your vehicle (hour)? ', (answer3) => {
                if(answer3<=5){
                        var result = (1.5)*(answer3);
                }else {
                        var result = 50;
                }
          
          console.log(`Details:
   
      Vehicle        : BIKE
      Vehicle ID     : ${answer2}
      Duration (Hour): ${answer3}
      Total payment  : RM${result}
      Date           : ${datenow}
      `);
   
     
    });
  });

      break;

default:
      console.log(`Wrong Input'${line.trim()}'`);
      break;
  }

  console.log(pcar, pbike);
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
