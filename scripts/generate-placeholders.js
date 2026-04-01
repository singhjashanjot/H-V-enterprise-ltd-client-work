const fs = require('fs');
const path = require('path');

const basePath = 'd:/H-V-enterprise-ltd-client-work/apps/web/public/images';

function createSvg(text, bgColor, textColor) {
  bgColor = bgColor || '#D3D1CC';
  textColor = textColor || '#737972';
  return '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800">' +
    '<rect width="1200" height="800" fill="' + bgColor + '"/>' +
    '<text x="600" y="400" text-anchor="middle" dominant-baseline="middle" font-family="system-ui" font-size="28" fill="' + textColor + '">' + text + '</text>' +
    '</svg>';
}

const images = {
  'hero-fence.svg': createSvg('Cedar Fence Installation', '#C4B6A0', '#5C4B3A'),
  'about-team.svg': createSvg('H&V Enterprise Team', '#B8C4B0', '#3C5B41'),
  'team-work.svg': createSvg('Team at Work', '#B8C4B0', '#3C5B41'),
  'services/cedar.svg': createSvg('Cedar Fencing', '#C4B6A0', '#5C4B3A'),
  'services/vinyl.svg': createSvg('Vinyl Fencing', '#D3D1CC', '#555'),
  'services/metal-wood.svg': createSvg('Metal & Wood', '#A0A8A0', '#333'),
  'services/full-metal.svg': createSvg('Full Metal Fencing', '#9B9B9B', '#333'),
  'services/ornamental.svg': createSvg('Ornamental Iron', '#B0A090', '#444'),
  'services/chain-link.svg': createSvg('Chain Link', '#C0C0C0', '#555'),
  'services/aluminum.svg': createSvg('Aluminum Fencing', '#B8C4D0', '#444'),
  'services/composite.svg': createSvg('Composite Fencing', '#A8B0A0', '#444'),
  'services/custom-cedar.svg': createSvg('Custom Cedar', '#C4B6A0', '#5C4B3A'),
  'gallery/cedar-premium.svg': createSvg('Premium Cedar Project', '#C4B6A0', '#5C4B3A'),
  'gallery/aluminum-arch.svg': createSvg('Aluminum Architecture', '#B8C4D0', '#444'),
  'gallery/lattice-detail.svg': createSvg('Lattice Detail', '#B0A8A0', '#555'),
  'gallery/vinyl-privacy.svg': createSvg('Vinyl Privacy Fence', '#D3D1CC', '#555'),
  'gallery/industrial-security.svg': createSvg('Industrial Security', '#9B9B9B', '#333'),
  'gallery/estate-gate.svg': createSvg('Estate Gate', '#B0A090', '#444'),
  'gallery/composite.svg': createSvg('Composite Build', '#A8B0A0', '#444'),
  'gallery/post-rail.svg': createSvg('Post & Rail Fence', '#C4B6A0', '#5C4B3A'),
  'gallery/minimalist-wall.svg': createSvg('Minimalist Wall', '#D0D0D0', '#555'),
  'cedar/privacy.svg': createSvg('Cedar Privacy Style', '#C4B6A0', '#5C4B3A'),
  'cedar/board-on-board.svg': createSvg('Board on Board', '#C4B6A0', '#5C4B3A'),
  'cedar/picket.svg': createSvg('Cedar Picket', '#C4B6A0', '#5C4B3A'),
  'cedar/custom.svg': createSvg('Custom Design', '#C4B6A0', '#5C4B3A'),
  'cedar/hero-1.svg': createSvg('Modern Horizontal Privacy', '#B8C4B0', '#3C5B41'),
  'cedar/hero-2.svg': createSvg('Custom Estate Entry', '#B0A090', '#444'),
  'cedar/hero-3.svg': createSvg('Classic Picket Design', '#C4B6A0', '#5C4B3A'),
  'placeholder.svg': createSvg('Image Coming Soon', '#E9E8E4', '#737972'),
};

for (const [relPath, content] of Object.entries(images)) {
  const fullPath = path.join(basePath, relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content);
}

console.log('Created ' + Object.keys(images).length + ' SVG image files');
