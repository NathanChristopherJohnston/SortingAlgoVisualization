

// Random array
let data = Array.from({length: 10}, () => Math.max(1, Math.floor(Math.random() * 100)));

function* eventGenerator(){
    let lastIndex = data.length - 1;
    for (let i = 0; i < lastIndex; i++) {
        for (let j = 0; j < lastIndex - i; j++) {
            let swapped = false;
            if (data[j] > data[j + 1]) {
                // Swap elements
                let temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
                swapped = true;
            }
            // sortSteps.push({ arr: [...workingArr], compare1: j, compare2: j + 1, swapped });
            yield{'compare1': j, 'compare2': j+1, 'swapped': swapped}
        }
    }
}

function updateVisualization(data, compare1, compare2) {
    d3.select('#canvas')
        .selectAll('rect')
        .data(data)
        .join('rect')
        .transition()
        .duration(800)
        .attr('x', (d, i) => i * 50)
        .attr('height', d => d * 5)
        .attr('y', d => 600 - d * 5)
        .style('fill', (d, i) => (i === compare1 || i === compare2) ? 'gold' : 'green');
}


async function runBubbleSort(){
    d3.select('#button').style("display", "none");

    d3.select('#canvas')
        .selectAll('rect')
        .data(data)
        .join(
            enter => {
                enter.append('rect')
                    .attr('x', (d, i) => i * 50)
                    .attr('width', 20)
                    .attr('height', d => d * 5)
                    .attr('y', d => 600 - d * 5)
                    .attr('id', (d, i) => 'rect' + i)
                    .style('fill', 'green')
            });
    
    for(let event of eventGenerator()){  
        updateVisualization(data, event.compare1, event.compare2);

        //await transition.end(); //wait for animation to finish
        await new Promise(resolve => setTimeout(resolve, 800));
        console.log("finished handling event: ", event);
    }

    d3.select('#canvas')
        .selectAll('rect')
        .data(data)
        .join('rect')
        .transition()
        .duration(800)
        .attr('x', (d, i) => i * 50)
        .attr('height', d => d * 5)
        .attr('y', d => 600 - d * 5)
        .style('fill', 'green');

    d3.select('#button').style("display", "block");
    data = Array.from({length: 10}, () => Math.floor(Math.random() * 100));
}
