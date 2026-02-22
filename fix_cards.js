const fs = require('fs');
const path = require('path');

const files = [
  'src/components/MyWork.js',
  'src/components/Card.js'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');

  // Remove CardActionArea start and end tags
  content = content.replace(/<CardActionArea[^>]*>/g, '<div style={{ display: "flex", flexDirection: "column", height: "100%" }}>');
  content = content.replace(/<\/CardActionArea>/g, '</div>');

  // Also remove the import if present
  content = content.replace(/import CardActionArea from "@mui\/material\/CardActionArea";\n/g, '');
  content = content.replace(/import { CardActionArea } from "@mui\/material";\n/g, '');

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Cards fixed.');
