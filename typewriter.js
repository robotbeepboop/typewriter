const sentence = "hello there from lighthouse labs \n";
let typingSpeed = 50;

function typewriter() {
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, typingSpeed)
  }
  typingSpeed += 50;
}
typewriter();
