const fs = require('fs');
const path = 'src/pages/products/BedsCategory.jsx';

let content = fs.readFileSync(path, 'utf8');
let imageIndex = 1;

content = content.replace(/image: '🛏️',/g, () => {
    let replacement = `image: '/images/beds-collection/bed-${imageIndex}.jpg',`;
    imageIndex = imageIndex === 27 ? 1 : imageIndex + 1;
    return replacement;
});

fs.writeFileSync(path, content, 'utf8');
console.log('Replaced all emojis with real images');
