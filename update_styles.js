const fs = require('fs');
const path = require('path');

const files = [
  'src/App.js',
  'src/components/About.js',
  'src/components/Projects.js',
  'src/components/MyWork.js',
  'src/components/NavBar.js',
  'src/components/Footer.js',
  'src/index.css'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');

  // App.js theme updates
  if (file === 'src/App.js') {
    content = content.replace(/default: "#0a0a0a"/, 'default: "#000000"'); // Pure black bg
    content = content.replace(/paper: "#121212"/, 'paper: "#0a0a0a"');     // Dark grey paper
    content = content.replace(/main: "#00e5ff"/, 'main: "#ededed"');       // White primary
    content = content.replace(/main: "#8354f8"/, 'main: "#a1a1aa"');       // Gray secondary
  }
  
  // Footer.js and NavBar.js color adjustments
  if (file === 'src/components/Footer.js' || file === 'src/components/NavBar.js') {
    content = content.replace(/color: "#00e5ff"/g, 'color: "#ededed"');
    content = content.replace(/borderColor: "#00e5ff"/g, 'borderColor: "#ededed"');
    content = content.replace(/backgroundColor: "\w+\(0, 229, 255, 0\.1\)"/g, 'backgroundColor: "rgba(255,255,255,0.1)"');
  }

  // Remove whileHover on non-clickable cards
  content = content.replace(/\s*whileHover=\{\{\s*y:\s*-5\s*\}\}\s*(transition=\{\{.*\}\})?/g, '');
  content = content.replace(/\s*whileHover=\{\{\s*scale:\s*1\.02\s*\}\}\s*transition=\{\{\s*duration:\s*0\.3\s*\}\}/g, '');

  // Update vibrant custom chips to sleek glass/monochrome
  // Blue ones -> white
  content = content.replace(/backgroundColor:\s*"rgba\(0, 229, 255, 0\.1\)"/g, 'backgroundColor: "rgba(255, 255, 255, 0.05)"');
  content = content.replace(/color:\s*"#00e5ff"/g, 'color: "#ededed"');
  content = content.replace(/border:\s*"1px solid rgba\(0, 229, 255, 0\.2\)"/g, 'border: "1px solid rgba(255, 255, 255, 0.1)"');
  
  // Purple ones -> gray
  content = content.replace(/backgroundColor:\s*"rgba\(131, 84, 248, 0\.1\)"/g, 'backgroundColor: "rgba(255, 255, 255, 0.05)"');
  content = content.replace(/color:\s*"#8354f8"/g, 'color: "#a1a1aa"');
  content = content.replace(/border:\s*"1px solid rgba\(131, 84, 248, 0\.2\)"/g, 'border: "1px solid rgba(255, 255, 255, 0.1)"');

  // Any remaining generic reference to old colors
  content = content.replace(/color: "#8354f8"/g, 'color: "#a1a1aa"');
  content = content.replace(/color: "#00e5ff"/g, 'color: "#ededed"');
  
  // Update hover interaction for buttons to pure white instead of blue
  content = content.replace(/backgroundColor: "rgba\(0, 229, 255, 0\.1\)"/g, 'backgroundColor: "rgba(255, 255, 255, 0.1)"');
  content = content.replace(/borderColor: "#00e5ff"/g, 'borderColor: "#ededed"');

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Styles updated.');
