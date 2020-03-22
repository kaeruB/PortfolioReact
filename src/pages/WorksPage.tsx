import React, { Component} from 'react';
import {WORKS_DATA} from '../assets/data/WorksData';
import * as d3 from 'd3';
import {BubbleModel} from "../model/BubbleModel";

type WorksPageState = {
    bubblesData: BubbleModel[],
    bubblesRefs: any[],
    openedBubbleIndex: number
}

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
            const bubble: any = bubblesSvg
                .append('circle')
                .attr('cx', this.state.bubblesData[i].cx)
                .attr('cy', this.state.bubblesData[i].cy)
                .attr('r', this.state.bubblesData[i].r);


            bubble.on('click', () => this.onBubbleClick(bubble, i));

            bubbleRefsArray.push(bubble);
        }

        this.setState({bubblesRefs: bubbleRefsArray});
    }

    private onBubbleClick(bubble: any, bubbleIndex: number): void {
        this.closeOpenedBubble();
        this.openClickedBubble(bubble, bubbleIndex);
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

    render() {
        return (
            <div className='works'/>
        );
    }
}

export default WorksPage;
