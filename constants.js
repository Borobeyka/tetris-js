// COLORS
const backgroundColor = "#E3E3DB";
const strokeColor = "#7B7B70";
const figureColors = [
    "#e4e677",
    "#89f6fe",
    "#ed5b32",
    "#69c45f",
    "#ee82d3",
    "#e09893"
];

// SETTINGS
// main
const updatePerMillis = 10;
const points = [
    10, // points per each figure
    30  // points for complete a line
];

// block stats
const blockWidth = 30;
const strokeWidth = 1;
const velocity = 2;

// field
const blocksPerWidth = 12;
const blocksPerHeight = 15;
const canvasWidth = blocksPerWidth * blockWidth;
const canvasHeight = blocksPerHeight * blockWidth;