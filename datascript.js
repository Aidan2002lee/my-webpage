// Select the SVG Container
const svg = d3.select("#barcahrtwithlabels");
const width = 500;
const height = 200;

svg.attr("viewbox", '0.0 ${width} ${height}');

fetch('Dog Breeds Around The World.csv')
  .then(response => response.text())
  .then(data => {

