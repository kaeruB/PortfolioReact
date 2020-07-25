import React, { Component} from 'react';
import {WORKS_DATA} from '../assets/data/WorksData';
import * as d3 from 'd3';
import {BubbleModel} from "../model/BubbleModel";
import {PackLayout} from "d3";



type WorksPageState = {
    bubblesData: BubbleModel[],
    bubblesRefs: any[],
    openedBubbleIndex: number
}

type d3Node = {
    id: string,
    group: number
};

type d3Link = {
    source: string,
    target: string,
    value: number
};

type Graph = {
    nodes: d3Node[],
    links: d3Link[]
};

const BUBBLE = 'circle';

export class WorksPage extends Component<{}, WorksPageState> {

    constructor(props: any) {
        super(props);

        this.state = {
            bubblesData: WORKS_DATA,
            bubblesRefs: [],
            openedBubbleIndex: -1
        };
    }

    componentDidMount(): void {
        this.setBubblesContainer();
        this.drawBubbles();
    }

    private setBubblesContainer(): void {
        const bubblesContainer = d3.select('div.works');
        const bubblesContainerRect = (bubblesContainer.node() as Element).getBoundingClientRect();

        const bubblesContainerWidth = bubblesContainerRect.width;
        const bubblesContainerHeight = bubblesContainerRect.height;

        bubblesContainer
            .append('svg')
            .attr('width', bubblesContainerWidth)
            .attr('height', bubblesContainerHeight);
    }

    private drawBubbles(): void {
        const bubblesSvg = d3.select('div.works svg');
        const bubbleRefsArray = [];

        for (let i = 0; i < this.state.bubblesData.length; i++) {
            const gElement = bubblesSvg
                // .enter()
                .append('g');
                // .attr('width', 2 * this.state.bubblesData[i].r)
                // .attr('height', 2 * this.state.bubblesData[i].r);
               // .attr('transform', 'translate(' + this.state.bubblesData[i].cx + ',' + this.state.bubblesData[i].cy + ')');

            const bubble: any = gElement.append('circle')
                .attr('cx', this.state.bubblesData[i].cx)
                .attr('cy', this.state.bubblesData[i].cy)
                .attr('r', this.state.bubblesData[i].r)
                .attr('id', BUBBLE + i)
                .style("fill", "pink");

            gElement
                .append('text')
                // .attr('dx', this.state.bubblesData[i].cx)
                .attr('y', this.state.bubblesData[i].cy)
                .attr('x', this.state.bubblesData[i].cx)
                .text('unko');

            gElement
                .append("foreignObject")
                .attr("x",  this.state.bubblesData[i].cx)
                .attr("y",  this.state.bubblesData[i].cy)
                .attr("width", 100)
                .attr("height", 100)
                .html('<div class="works-bubble__container">NYAN</div>');
                // .append('html')
                // .html('<div class="works-bubble__container">NYAN</div>')
                // .style('color', 'red');

            gElement
                .append("image")
                .attr("xlink:href", "https://github.com/favicon.ico")
                .attr("x", this.state.bubblesData[i].cx)
                .attr("y",  this.state.bubblesData[i].cy)
                .attr("width", 16)
                .attr("height", 16);
                // .style("fill", "white");

            // const bubble: any = bubblesSvg
            //     .append('circle')
            //     .attr('cx', this.state.bubblesData[i].cx)
            //     .attr('cy', this.state.bubblesData[i].cy)
            //     .attr('r', this.state.bubblesData[i].r)
            //     .attr('id', BUBBLE + i)
            //     .style("fill", "pink");
            //
            // bubble
                // .append("image")
                // .attr("xlink:href", "https://github.com/favicon.ico")
                // .attr("x", -8)
                // .attr("y", -8)
                // .attr("width", 16)
                // .attr("height", 16);
                // .insert('p').text('NYAN');
                // .style("opacity", 1)
                //.html('<div class="works-bubble__container">NYAN</div>').style('color', 'red');


            bubble.on('mouseover', () => this.onBubbleHover(bubble, i));

            bubbleRefsArray.push(bubble);
        }

        this.setState({bubblesRefs: bubbleRefsArray});
    }

    private onBubbleHover(bubble: any, bubbleIndex: number): void {
        this.closeOpenedBubble();
        this.openClickedBubble(bubble, bubbleIndex);
        this.insertDataIntoClickedBubble(bubble, bubbleIndex);
    }

    private closeOpenedBubble(): void {
        const bubbleToCloseIndex = this.state.openedBubbleIndex;

        if (bubbleToCloseIndex !== -1)
            this.state.bubblesRefs[bubbleToCloseIndex]
                .transition()
                .duration(1000)
                .attr('r', 20);
    }

    private openClickedBubble(bubble: any, bubbleIndex: number): void {
        this.setState({openedBubbleIndex: bubbleIndex});
        bubble.transition().duration(1000).attr('r', 50);
    }

    private insertDataIntoClickedBubble(bubble: any, bubbleIndex: number): void {
        // const selectedBubble: any = d3.select('#' + BUBBLE + bubbleIndex);
        // selectedBubble.append('div').html('<div>testetset</div>');

        // bubble.appendHTML('<span>neko neko</span>');
        // const tmp = this.getBubbleContent();
        // console.log(tmp);
    }

    private getBubbleContent() {
        return (<div>Nekoneko</div>);
    }


    // onMouseOver = (bubbleId: string) => {
    //     console.log(bubbleId);
    // };

    render() {
        return (
            <div className='works'>
                {/*<div className='works__circle' id={BUBBLE + 1} onMouseOver={() => this.onMouseOver(BUBBLE + 1)}>&nbsp;</div>*/}
                {/*<div className='works__circle' id={BUBBLE + 2}>&nbsp;</div>*/}
                {/*<div className='works__circle' id={BUBBLE + 3}>&nbsp;</div>*/}
            </div>
        );
    }
}

export default WorksPage;
