<template>
  <div>
    <svg></svg>
  </div>
</template>

<script>
import * as d3 from "d3"
import _ from "lodash"

// import yearsJson from "../../public/yearlyClimbData.json"


export default {
  name: 'Chart',
  props: {
    data: Array
  //   name: String,
  //   id: null,
  //   year: String,
  //   climbs: null
  },
  data() {
    return {
      // yearsData: yearsJson,
      chart: null
    }
  },
  // watch: {
  //   data(val) {
  //     if (this.chart != null) this.chart.remove();
  //     this.renderChart(val);
  //   }
  // },
  methods: {
    renderChart(data) {
      // console.log(data)

      const margin = 60;
      const svg_width = 1000;
      const svg_height = 600;
      const chart_width = 1000 - 2 * margin;
      const chart_height = 600 - 2 * margin;

      const svg = d3
        .select("svg")
        .attr("width", svg_width)
        .attr("height", svg_height);

        this.chart = svg
          .append("g")
          .attr("transform", `tranlate(${margin}, ${margin})`);

        const yScale = d3
          .scaleLinear()
          .range([chart_height, 0])
          .domain([0, _.maxBy(data, "climbs")]) // possible issues

        this.chart
          .append("g")
          .call(d3.axisLeft(yScale).ticks(_.maxBy(data, "climbs"))); 

        const xScale = d3
          .scaleBand()
          .range([0, chart_width])
          .domain(data.map(el => el.id)) // possible issues?
          .padding(0.2)

        this.chart
          .append("g")
          .attr("transform", `translate(0, ${chart_height})`)
          .call(d3.axisBottom(xScale));
    }
  },
  // mounted: this.renderChart(data)
}
</script>


<style scoped>

</style>
