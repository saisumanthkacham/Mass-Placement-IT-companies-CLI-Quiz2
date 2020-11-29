const rls = require('readline-sync');
const chalk=require('chalk');

name = rls.question("what is your name? ");
console.log(chalk.inverse.bold("\n Hello") +" "+ chalk.green.bold(name) + ",\n" +chalk.bgRed.bold("\n          welcome to the QUIZ          "));
console.log(chalk.green.bold("RULES:\n1.correct ans +1, no negatives\n2.There are two rounds in QUIZ\n3.If you can score min 2 answers you will be promoted to next round"));
console.log("--------------------------------------");

var score = 0;
function quest(question, ans) {
  userans = rls.question(question);
  if (ans === userans) {
    score += 1;
    console.log(chalk.green.bold("You are correct !!"));
  }
  else {

    console.log(chalk.red.bold("You are Wrong !!")+ " Answer is "+chalk.green.bold(ans));
  }
  console.log(" score is " + score);
  console.log("--------------------------------------");
}


questi = [{
  q: chalk.bgBlue.bold("1.Who is CEO of TCS??")+"\n a.Rajesh Gopinathan\n b.Sundar Pichai\n c.Indira Nooyi\n d. Shantanu Narayen \n",
  a: "a"
}, {
  q: chalk.bgRed.bold("2.Who is current CEO of Wipro??")+"\n a.Azeem Premji\n b.Rishad Premji\n c.Ahmed Premji\n d.Thierry Delaporte \n ",
  a: "d"
},{
  q: chalk.bgBlue.bold("3.Who is current CEO of Infosys??")+"\n a.Narayan Murthy\n b.Sudha Murthy\n c.Salil Parekh\n d.Vishal Sikka \n ",
  a: "c"
},{
  q: chalk.bgCyan.bold("4.Who is current CEO of Apple??")+"\n a.Steve Jobs\n b.Tim Cook\n c.Steve Wozniak\n d.Sundar Pichai \n ",
  a: "b"
},{
  q: chalk.bgBlue.bold("5.Who is current CEO of Cognizant India??")+"\n a.Kumar Mahadeva\n b.Rajesh Nambiar\n c.Rama Krishnan\n d.Thyagarajan \n ",
  a: "b"
}];

for (i = 0; i < questi.length; i++) {
  qn = questi[i];
  quest(qn.q, qn.a);
}




if(score>=2)
{
console.log(chalk.inverse.bold("*****YAYYYY!! You are into the 2nd LEVEL*****"));
console.log("--------------------------------------");
questi = [{
  q: chalk.bgBlue.bold("6.Where is the headquarters of TCS located??")+"\n a.Mumbai\n b.Pune\n c.Dellhi\n d.Hyderabad\n",
  a: "a"
}, {
  q: chalk.bgRed.bold("7.What is the Market Capitalisation of TCS??")+"\n a.2 Trillion\n b.10 Trillion\n c.15 Trillion\n d.5 Trillion \n ",
  a: "b"
},{
  q: chalk.bgBlue.bold("8.What is the revenue of TCS in INR??")+"\n a.1 Lakh crore\n b.15 Lakh crore\n c.10 Lakh crore\n d.1.5 Lakh crore \n ",
  a: "d"
},{
  q: chalk.bgCyan.bold("9.When is TCS established??")+"\n a.1968\n b.1978\n c.1988\n d.1998 \n ",
  a: "a"
},{
  q: chalk.bgBlue.bold("10.How many freshers does TCS hire this year??")+"\n a.20k\n b.10k\n c.30k\n d.50k \n ",
  a: "a"
}];

for (i = 0; i < questi.length; i++) {
  qn = questi[i];
  quest(qn.q, qn.a);
  
}
console.log(chalk.bgGreen.bold("YAYYYY!!! your total score is " + score));
  console.log("--------------------------------------");
}
else
{console.log("your total score is " + score);
console.log("OOPS!! Better luck next time :)");
console.log("--------------------------------------");}

var leaderboard=["sumanth=5/10\nRajesh=4/10\nBharadwaj=6/10"];
alert(chalk.inverse.bold("The leaderboard scores\n")+chalk.red.bold(leaderboard));
console.log(chalk.green.bold("if you have crossed the highest score, \ndo dm me the screenshot, I will put your name in the leaderboard!!"));

console.log(chalk.bgRed.bold("\n     THANKYOU!! for playing the quizz :)     "));