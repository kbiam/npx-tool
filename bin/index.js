#!/usr/bin/env node
const readline = require('readline');
const nodemailer= require('nodemailer')
require('dotenv').config()


const transporter = nodemailer.createTransport({
  service:"gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "bangk1922@gmail.com",
    pass: "zjnc vdhk jzre nitz",
  },
});

async function sendmail(mail,message){
  const mailOptions = {
    from: "bangk1922@gmail.com",
    to: 'kushbang123@gmail.com',
    subject: "Message from npx",
    html: `${message} from ${mail}`
  }
  await transporter.sendMail(mailOptions)
}


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to log your details in the terminal
function logDetails() {
  
    const boxTop = "+-----------------------------------------------------------------------------------------------------------------------+";
    const boxBottom = "+-----------------------------------------------------------------------------------------------------------------------+";
  
    const lines = [
      "|                      ____...                                                                                          |",
      "|             .-\"--\"\"\"\". __    `.                                                                                       |",
      "|            |            `    |                                                                                        |",
      "|  (         `._....------.._.:                        Name: Kush Bang                                                  |",
      "|   )         .()''        ``().                       About: Normal guy who loves to build                             |",
      "|  '          () .=='  `===  `-.                       Website: https://portfolio-website-wyej.vercel.app/              |",
      "|   . )       (         g)                             GitHub: https://github.com/kbiam                                 |",
      "|    )         )     /        J                        Twitter: https://twitter.com/KushBang1                           |",
      "|   (          |.   /      . (                         Email: kushbang123@gmail.com                                     |",
      "|   $$         (.  (_'.   , )|`                        LinkedIn: https://www.linkedin.com/in/kush-bang-b6512b263/       |",
      "|   ||         |\`-....--'/  ' \                         Languages: 🟨 JavaScript 🟦 C 🐍 Python 🔵 Java                  |",
      "|  /||.         \\\\ | | | /  /   \\.                     Frameworks: 🔗 LangChainJS 🚂 ExpressJs 🍃 TailwindCss 🌐 ReactJs|",
      "| //||(\\         \`-===-'  '     \o.                     Others:  🍃 MongoDB 🐘 SQL 🐙 Git 🐧 Linux                       |",
      "|.//7' |)         \`. --   / (     OObaaaad888b.                                                                         |",
      "|(<<. / |     .a888b\`.__.'d\\     OO888888888888a.                                                                       |",
      "| \\  Y' |    .8888888aaaa88POOOOOO888888888888888.                                                                      |",
      "|  \\  \\ |   .888888888888888888888888888888888888b                                                                      |",
      "|   |   |  .d88888P88888888888888888888888b8888888.                                                                     |",
      "|   b.--d .d88888P8888888888888888a:f888888|888888b                                                                     |",
      "|   88888b 888888|8888888888888888888888888\\8888888                                                                     |",
      "|                                                                                                                       |",

    ];
  
    // Create a colorful box using ANSI escape codes
    const colorfulBox = [
      `\x1b[38;5;51m${boxTop}\x1b[0m`,
      ...lines.map(line => `\x1b[38;5;51m${line}\x1b[0m`),
      `\x1b[38;5;51m${boxBottom}\x1b[0m`
    ].join('\n');
  
    // Log the colorful box in the terminal
    console.log(colorfulBox);
    var mail, message
    rl.question('Do you want to send a mail?\n (Y/N) to proceed ', (answer) => {
      if (answer.toUpperCase() === 'Y') {
        rl.question("Your Mail Id : ",(answer2)=>{
          mail = answer2;
          if(mail){
            rl.question("Your Message : ",(answer3)=>{
              message = answer3;
              if(message){
                sendmail(mail,message)
                console.log("Message sent successfully")
                rl.close();

              }
            })
          }
        })

      }
      else {
        process.exit(0);
      }
      
      // Close the readline interface
    });
  }
  


  // Call the function to log your details
  logDetails();
  