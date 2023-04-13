import React from 'react';
import { Article } from './../../components';
import { blog01, blog02, blog03, blog04, blog05} from './imports'
import './blog.css';

const Blog = () => (
	<div id="blog" className="gpt3__blog section__heading">
		<div className="gpt__blog-heading">
			<h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
		</div>

		<div className="gpt3__blog-container">
			<div className="gpt3__blog-container_groupA">
				<Article imgUrl = {blog01} />
			</div>

			<div className="gpt3__blog-container_groupB">
				<Article imgUrl = {blog02} />
				<Article imgUrl = {blog03} />
				<Article imgUrl = {blog04} />
				<Article imgUrl = {blog05} />
			</div>
		</div>
	</div>
)


export default Blog