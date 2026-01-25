import fs from "node:fs";

const input = process.argv[2] ?? "html.html";
const output = process.argv[3] ?? "jsx.jsx";

const html = fs.readFileSync(input, "utf8");

const lineRegex = /<div class="cm-line[^\"]*">([\s\S]*?)<\/div>/g;
const lines = [];
let match;
while ((match = lineRegex.exec(html)) !== null) {
  let line = match[1];
  if (/<br\s*\/?>/i.test(line)) {
    lines.push("");
    continue;
  }
  line = line.replace(/<[^>]+>/g, "");
  line = decodeEntities(line);
  line = line.replace(/\s+/g, " ").trim();
  lines.push(line);
}

let result = lines.join("\n");
result = result.replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";

fs.writeFileSync(output, result, "utf8");
console.log(`Wrote ${output} (${result.split(/\r?\n/).length} lines)`);

function decodeEntities(text) {
  const named = {
    lt: "<",
    gt: ">",
    amp: "&",
    quot: '"',
    apos: "'",
    nbsp: " ",
  };

  return text.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z]+);/g, (full, entity) => {
    if (entity[0] === "#") {
      const isHex = entity[1].toLowerCase() === "x";
      const num = parseInt(entity.slice(isHex ? 2 : 1), isHex ? 16 : 10);
      if (Number.isNaN(num)) return full;
      return String.fromCodePoint(num);
    }

    return Object.prototype.hasOwnProperty.call(named, entity) ? named[entity] : full;
  });
}
