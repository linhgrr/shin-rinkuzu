const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src/components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/font-\['Unbounded:[a-zA-Z]+',sans-serif\]/g, 'font-unbounded');
  content = content.replace(/font-\['Unbounded',sans-serif\]/g, 'font-unbounded');
  fs.writeFileSync(filePath, content);
}
console.log('Fonts replaced');
