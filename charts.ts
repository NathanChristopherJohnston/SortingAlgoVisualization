declare const d3: any;

function drawChart(data: BubbleSortStep[]) {
    const lastStep = data[data.length - 1];
    const svg = d3.select('#chart');
    svg.selectAll('*').remove();
    const width = +svg.attr('width');
    const height = +svg.attr('height');
    const barWidth = width / lastStep.arr.length; 
    const yScale = d3.scaleLinear()
        .domain([0, d3.max(lastStep.arr)!])
        .range([0, height - 20]);
    let x = (d: number, i: number) => i * barWidth;
    let y = (d: number) => height - yScale(d);
    console.log('X: ', x);
    console.log('Y: ', y);
    svg.selectAll('rect')
        .data(lastStep.arr)
        .enter()
        .append('rect')
        .attr('x', (d: number, i: number) => i * barWidth)
        .attr('y', (d: number) => height - yScale(d))
        .attr('width', barWidth - 4)
        .attr('height', (d: number) => yScale(d))
        .attr('fill', (unused: number, i: number) => {
            if (i === lastStep.compare1) return 'red';
            if (i === lastStep.compare2) return 'blue';
            return 'green';
        });
    svg.selectAll('text')
        .data(data[data.length -1].arr)
        .enter()
        .append('text')
        .attr('x', (d: number, i: number) => i * barWidth + barWidth / 2)
        .attr('y', (d: number) => height - yScale(d) - 5)
        .attr('text-anchor', 'middle')
        .attr('font-size', '12px')
        .text((d: number) => d.toString());
}

// Make drawChart available globally
window.drawChart = drawChart;