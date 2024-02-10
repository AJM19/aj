import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';

export type PieDataItem = {
  name: string;
  total: number;
  color: string;
};

type Props = {
  data: PieDataItem[];
};

const PieChart: React.FC<Props> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current || !data.length) return;

    const width = 250;
    const height = 250;

    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const pie = d3.pie<PieDataItem>().value((d) => d.total);

    const arc = d3
      .arc<any>()
      .innerRadius(0)
      .outerRadius(Math.min(width, height) / 2 - 1);

    const handleMouseover = (event, d) => {
      const centroid = arc.centroid(d);
      const x = centroid[0];
      const y = centroid[1];
      const percentage = (
        ((d.endAngle - d.startAngle) / (2 * Math.PI)) *
        100
      ).toFixed(2);
      const sliceColor = d.data.color;

      svg
        .append('text')
        .attr('id', 'hover-name')
        .attr('text-anchor', 'middle')
        .attr('font-size', '12px')
        .attr('font-weight', 'bold')
        .style('fill', 'white')
        .style('stroke-width', '2px')
        .text(d.data.name)
        .attr('transform', `translate(${x}, ${y - 30})`);

      svg
        .insert('rect', '#hover-name')
        .attr('fill', sliceColor)
        .attr('stroke', 'white')
        .attr('stroke-width', 1)
        .attr('width', 60)
        .attr('height', 35)
        .attr('rx', 5)
        .attr('ry', 5)
        .attr('transform', `translate(${x - 30}, ${y - 45})`);

      svg
        .append('text')
        .attr('id', 'hover-percent')
        .attr('text-anchor', 'middle')
        .attr('font-size', '12px')
        .attr('font-weight', 'bold')
        .style('fill', 'white')
        .style('stroke-width', '2px')
        .text(`${percentage}%`)
        .attr('transform', `translate(${x}, ${y - 15})`);
    };

    const handleClick = () => {
      svg.selectAll('#hover-name').remove();
      svg.selectAll('#hover-percent').remove();
      svg.selectAll('rect').remove();
    };

    const handleTouchStart = (event, d) => {
      handleMouseover(event, d);
    };

    const arcs = svg
      .selectAll('arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc');

    arcs
      .append('path')
      .attr('d', arc)
      .attr('fill', (d: any) => d.data.color)
      .on('mouseover', handleMouseover)
      .on('click', handleClick)
      .on('touchstart', handleTouchStart)
      .on('touchend', handleClick)
      .on('mouseout', () => {
        svg.selectAll('#hover-name').remove();
        svg.selectAll('#hover-percent').remove();
        svg.selectAll('rect').remove();
      });
  }, [data]);

  return <StyledSVG ref={svgRef} />;
};

export default PieChart;

const StyledSVG = styled.svg`
  margin: 15px 0;

  text {
    font-family: Quicksand;
    fill: white;
    font-weight: bold;
    font-size: 14px;
  }
`;
