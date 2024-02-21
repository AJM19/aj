import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';
import { colors } from '../../styles/styledcomps';

const BarChart = ({
  data,
  height = 800,
  width = 600,
  barColor,
  minValue,
  tick,
  maxValue,
  title,
  caption,
}) => {
  const svgRef = useRef();
  const margin = { top: 20, left: 60, bottom: 50, right: 60 };
  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const fontSize = '4rem';
    const axisFontSize = '1.5rem';

    // Set up scales
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.x))
      .range([0, width - margin.right])
      .padding(0.2);

    const yScale = d3
      .scaleLinear()
      .domain([minValue, maxValue])
      .range([height - margin.bottom, margin.bottom]);

    // Draw grid background
    svg
      .selectAll('.grid')
      .data(yScale.ticks(tick))
      .enter()
      .append('line')
      .attr('transform', `translate(${margin.right}, 0)`)
      .attr('class', 'grid')
      .attr('x1', 0)
      .attr('x2', width - margin.right)
      .attr('y1', (d) => yScale(d) - margin.top)
      .attr('y2', (d) => yScale(d) - margin.top)
      .style('stroke', 'lightgray')
      .style('stroke-opacity', 0.9)
      .style('stroke-dasharray', '2,2');

    const gradient = svg
      .append('defs')
      .append('linearGradient')
      .attr('id', 'gradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '100%')
      .attr('y2', '0%');

    gradient
      .append('stop')
      .attr('offset', '0%')
      .attr('stop-color', `${colors.mainBlue}`);

    gradient
      .append('stop')
      .attr('offset', '100%')
      .attr('stop-color', `${colors.darkBlue}`);

    //Draw Bar
    svg
      .selectAll('rect')
      .data(data)
      .join('rect')
      .attr('transform', `translate(${margin.left}, 0)`)
      .attr('x', (d) => xScale(d.x))
      .attr('y', (d) => yScale(d.y) - margin.top)
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => height - yScale(d.y) - margin.bottom)
      .attr('fill', 'url(#gradient)');

    //Value label
    svg
      .selectAll('text')
      .data(data)
      .join('text')
      .attr('transform', `translate(${margin.left}, 0)`)
      .attr('x', (d) => xScale(d.x) + xScale.bandwidth() / 2)
      .attr('y', (d) => yScale(d.y) - 75)
      .text((d) => d.y + caption)
      .attr('text-anchor', 'middle')
      .attr('font-size', fontSize)
      .attr('font-weight', '600')
      .style('font-family', 'Barlow')
      .attr('fill', `${colors.mainBlue}`);

    //Title
    svg
      .append('text')
      .attr('x', width / 2)
      .attr('y', margin.top / 2)
      .text(title)
      .style('text-anchor', 'middle')
      .style('font-size', '70px')
      .style('font-weight', '900')
      .style('font-family', 'Barlow')
      .attr('fill', `${colors.darkBlue}`);

    // Draw x-axis
    svg
      .append('g')
      .attr(
        'transform',
        `translate(${margin.right}, ${height - margin.bottom - 20})`
      )
      .call(d3.axisBottom(xScale))
      .selectAll('text')
      .style('font-size', '2rem')
      .attr('font-weight', '800')
      .style('font-family', 'Barlow');

    // Draw y-axis
    svg
      .append('g')
      .attr('transform', `translate(${margin.left}, -${margin.top})`)
      .call(d3.axisLeft(yScale).ticks(tick))
      .selectAll('text')
      .style('font-size', axisFontSize)
      .style('font-family', 'Barlow');
    ////
  }, [
    data,
    height,
    width,
    barColor,
    minValue,
    tick,
    margin.bottom,
    margin.left,
    margin.right,
    margin.top,
    title,
    maxValue,
    caption,
  ]);

  return (
    <StyledSvg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
      ref={svgRef}
    />
  );
};

const StyledSvg = styled.svg`
  overflow: visible;
  height: 100%;
  width: 100%;
`;

export default BarChart;
