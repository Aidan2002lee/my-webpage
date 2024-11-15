// Select the SVG Container
const svg = d3.select("#barcahrtwithlabels");
const width = 500;
const height = 200;
const margin = { top, right, bottom, left };

svg.attr("viewbox", '0.0 ${width} ${height}');

fetch('Dog Breeds Around The World.csv')
  .then(response => response.text())
  .then(data => {
    const parsedData = d3.csvParse(data, d => ({
      category: d.Category,
      value: +d.Value
    }));

    // Scales
    const x = d3.scaleBand()
      .domain(parsedData.map(d => d.category))
      .range([margin.left, width - margin.right])
      .padding(0, 1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(parsedData, d => d.value)]).nice()
      .range([height - margin.bottom, margin.top]);

    //Add x-axis
    svg.append("g")
      .attr("transform", 'translate(0, ${height - margin.bottom})')
      .call(d3.axisBotom(x));

    //Add y-axis
    svg.append("g")
      .attr("transform", 'translate(${margin.eft},0)')
      .call(d3.axisLeft(y));

    

