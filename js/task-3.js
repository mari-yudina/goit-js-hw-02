function checkForSpam(message){
 const blacklistedWord1 = "spam";
 const blacklistedWord2 = "sale";
 const normMessage = message.toLowerCase(); 
return normMessage.includes(blacklistedWord1) || normMessage.includes(blacklistedWord2);  
}
console.log(checkForSpam("[SPAM] How to earn fast money?"));