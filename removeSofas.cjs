const fs = require('fs');
const file = 'c:/Users/DELL/Desktop/websitecurtain/src/pages/Gallery.jsx';
let content = fs.readFileSync(file, 'utf8');

// The sofas are from `// SOFAS COLLECTION` down to `// BLIND CURTAINS`
const startIndex = content.indexOf('    // SOFAS COLLECTION');
const endIndex = content.indexOf('    // BLIND CURTAINS');

if (startIndex !== -1 && endIndex !== -1) {
    let newContent = content.substring(0, startIndex) + content.substring(endIndex);
    // Also remove the category
    newContent = newContent.replace("    { id: 'sofas', name: 'Sofas', icon: <Sofa className=\"w-5 h-5\" /> },\n", "");
    
    fs.writeFileSync(file, newContent);
    console.log('Successfully removed sofas from Gallery.jsx');
} else {
    console.log('Could not find markers', startIndex, endIndex);
}
