"use strict";
function drawChart(data) {
    const lastStep = data[data.length - 1];
    const svg = d3.select('#chart');
    svg.selectAll('*').remove();
    const width = +svg.attr('width');
    const height = +svg.attr('height');
    const barWidth = width / lastStep.arr.length;
    const yScale = d3.scaleLinear()
        .domain([0, d3.max(lastStep.arr)])
        .range([0, height - 20]);
    let x = (d, i) => i * barWidth;
    let y = (d) => height - yScale(d);
    console.log('X: ', x);
    console.log('Y: ', y);
    svg.selectAll('rect')
        .data(lastStep.arr)
        .enter()
        .append('rect')
        .attr('x', (d, i) => i * barWidth)
        .attr('y', (d) => height - yScale(d))
        .attr('width', barWidth - 4)
        .attr('height', (d) => yScale(d))
        .attr('fill', (unused, i) => {
        if (i === lastStep.compare1)
            return 'red';
        if (i === lastStep.compare2)
            return 'blue';
        return 'green';
    });
    svg.selectAll('text')
        .data(data[data.length - 1].arr)
        .enter()
        .append('text')
        .attr('x', (d, i) => i * barWidth + barWidth / 2)
        .attr('y', (d) => height - yScale(d) - 5)
        .attr('text-anchor', 'middle')
        .attr('font-size', '12px')
        .text((d) => d.toString());
}
// Make drawChart available globally
window.drawChart = drawChart;
