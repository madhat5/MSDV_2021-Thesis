<template>
  <div>
    <!-- <svg></svg> -->
    <!-- <h4>Are climbers getting stronger or are there more strong climbers?</h4> -->
    <h4>How many hard climbs are achieved per year?</h4>
    <div class="flex-container">
      <div class="bar-chart flex-child"></div>
      <div class="chart-details flex-child">In this chart, we're displaying the number of elite level climbs (> V15 | 8C) accomplished per year. We organized the data according to the number of send dates recorded per climb, per year. </div>
    </div>
  </div>
</template>

<script>
import * as d3 from "d3"
// import _ from "lodash"

import yearsJson from "../../public/yearlyClimbData.json"


export default {
  name: 'Chart',
  props: {
  },
  data() {
    return {
      x: null,
      yearsData: yearsJson,
    }
  },
  mounted() {
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
        .attr("width", 800)
        .attr("height", 500);

      // create margins & dimensions
      const margin = { top: 20, right: 20, bottom: 100, left: 100 };
      const graphWidth = 800 - margin.left - margin.right;
      const graphHeight = 500 - margin.top - margin.bottom;

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
        .attr("fill", "#c90e0c")
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
    }
  }
}
</script>


<style scoped>
.flex-container {
    display: flex;
    /* height: 34em; */
}

.flex-child {
    flex: 1;
}  

/* .chart-details {
  display: flex;
} */

.bar-chart {
  flex-grow: 3;
}

</style>
