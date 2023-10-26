import "./style.css";

console.log("working with javascript");
for (let i = 0; i < 10; i++) {
  console.log(`${i}`);
}

function formatTailwind() {
  return `
            <h1 class=" text-3xl py-4 text-center text-slate-800  px-5  "> Heading </h1>
            <p> Paragraph </p>
        `;
}
