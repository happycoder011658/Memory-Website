const memories = [
  "Get yo money up, not yo funny up",
  "When you commented on the concerning amount of human sacrifices during world",
  "My confusion about how much ice i want in my boba at ding tea",
  "Your endless professional endevours",
  "You wearing sweatpants to a buisness casual event",
  "Our struggle planning hangouts",
  "Constantly bothering Mr.Mcombe",
  "Our begging for an icecream party",
  "my ability to teach you world, but not able to retain the information myself",
  "You arguing with Mirabel about Honkai star rail",
  "You playing video games in world",
  "You being concerningly good at that speed type thing",
  "You wearing that los angeles sweatshirt in New York",
  "Our morning walks at school together",
  "You being like a teenage boy with your video game addiction",
  "You being like a tiktok business person with your want of money books",
  "Tans cooking both of us",
  "Your cars funky engine",
  "Your love of BMWs"

];

document.getElementById("memoryButton").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * memories.length);
  document.getElementById("memoryDisplay").textContent = memories[randomIndex];
});