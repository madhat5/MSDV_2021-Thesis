<template>
  <div>
    <!-- <svg></svg> -->
    <div class="bar-chart"></div>
  </div>
</template>

<script>
import * as d3 from "d3"
// import _ from "lodash"

import yearsJson from "../../public/yearlyClimbData.json"


export default {
  name: 'Chart',
  props: {
    // data: Array
  //   name: String,
  //   id: null,
  //   year: String,
  //   climbs: null
  },
  data() {
    return {
      x: null,
      yearsData: yearsJson,
      // chart: null
    }
  },
  mounted() {
    // this.renderChart(data)
    this.drawBar();
  },
  methods: {
    updateChart(event) {
      var extent = event.selection;
      console.log("extent", extent[0]);
      const [x0, x1] = extent.map(this.y.invert);
      // console.log("invertt extent", extent[0]);
      console.log("invertt x0", x0);
      console.log("invertt x1", x1);

      // console.log(this.y.invert(extent[1]));
    },
    drawBar() {
      // select the svg container first
      const svg = d3
        .select(".bar-chart")
        .append("svg")
        .attr("width", 1000)
        .attr("height", 600);

      // create margins & dimensions
      const margin = { top: 20, right: 20, bottom: 100, left: 100 };
      const graphWidth = 1000 - margin.left - margin.right;
      const graphHeight = 600 - margin.top - margin.bottom;

      const graph = svg
        .append("g")
        .attr("width", graphWidth)
        .attr("height", graphHeight)
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

      // create axes groups
      const xAxisGroup = graph
        .append("g")
        .attr("transform", `translate(0, ${graphHeight})`);

      const yAxisGroup = graph.append("g");

      this.y = d3
        .scaleLinear()
        .domain([0, d3.max(this.yearsData, (d) => d.climbs)])
        .range([graphHeight, 0]);

      this.x = d3
        .scaleBand()
        .domain(this.yearsData.map((el) => el.year))
        .range([0, graphWidth])
        .paddingInner(0.2)
        .paddingOuter(0.2);

      // join the data to circs
      const rects = graph.selectAll("rect").data(this.yearsData);

      // add attrs to circs already in the DOM
      rects
        .attr("width", this.x.bandwidth)
        .attr("height", (d) => graphHeight - this.y(d.climbs))
        .attr("fill", "orange")
        .attr("x", (d) => this.x(d.year))
        .attr("y", (d) => this.y(d.climbs));

      // append the enter selection to the DOM
      rects
        .enter()
        .append("rect")
        .attr("width", this.x.bandwidth)
        .attr("height", (d) => graphHeight - this.y(d.climbs))
        .attr("fill", "orange")
        .attr("x", (d) => this.x(d.year))
        .attr("y", (d) => this.y(d.climbs));

      // console.log(this.x.invert(150));

      // create & call axesit
      const xAxis = d3.axisBottom(this.x);
      const yAxis = d3
        .axisLeft(this.y)
        .ticks(3)
        .tickFormat((d) => d + " climbs");

      xAxisGroup.call(xAxis);
      yAxisGroup.call(yAxis);

      xAxisGroup
        .selectAll("text")
        .attr("transform", "rotate(-40)")
        .attr("text-anchor", "end");
      // });

      svg.call(
        d3
          .brushY() // Add the brush feature using the d3.brush function
          .extent([
            [0, 0],
            [1000, 600],
          ]) // initialise the brush area: start at 0,0 and finishes at width,height: it means I select the whole graph area
          .on("start end", this.updateChart)
      );
    },
    renderChart() {
      // console.log(data)

      // const margin = 60;
      // const svg_width = 1000;
      // const svg_height = 600;
      // const chart_width = 1000 - 2 * margin;
      // const chart_height = 600 - 2 * margin;

      // const svg = d3
      //   .select("svg")
      //   .attr("width", svg_width)
      //   .attr("height", svg_height);

      //   this.chart = svg
      //     .append("g")
      //     .attr("transform", `tranlate(${margin}, ${margin})`);

      //   const yScale = d3
      //     .scaleLinear()
      //     .range([chart_height, 0])
      //     .domain([0, _.maxBy(data, "climbs")]) // possible issues

      //   this.chart
      //     .append("g")
      //     .call(d3.axisLeft(yScale).ticks(_.maxBy(data, "climbs"))); 

      //   const xScale = d3
      //     .scaleBand()
      //     .range([0, chart_width])
      //     .domain(data.map(el => el.id)) // possible issues?
      //     .padding(0.2)

      //   this.chart
      //     .append("g")
      //     .attr("transform", `translate(0, ${chart_height})`)
      //     .call(d3.axisBottom(xScale));
    }
  }
}
</script>


<style scoped>

</style>
