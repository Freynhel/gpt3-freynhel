import React from 'react';
import { Feature } from './../../components/index';
import './whatGPT3.css';

const WhatGPT3 = () => {
	return (
		<div id="wgpt3" className="gpt3__whatgpt3 section__margin">
			<div className="gpt3__whatgpt3-feature">
				<Feature />
			</div>

			<div className="gpt3__whatgpt3-heading">
				<h1 className="gradient__text"> The possibilities are beyond your imagination </h1>
				<p> Explore The Library </p>
			</div>

			<div className="gtp3__whatgtp3-container">
				<Feature />
				<Feature />
				<Feature />
			</div>
		</div>
	)
}

export default WhatGPT3