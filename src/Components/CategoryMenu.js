import React, { useEffect, useState } from 'react';
import Category from './Category';
import { data } from '../Data';
import '../Css/Category.css';

const CategoryMenu = () => {
	const [categories, setCategories] = useState(data);
	const [activeCat, setActiveCat] = useState(null);
	const [active, setActive] = useState([]);
	useEffect(() => {
		const getCategories = (arry, level) => {
			const data = arry.map((x) => {
				if (
					x.subCategory &&
					x.subCategory.length &&
					active.indexOf(x.categoryName) > -1
				) {
					return [
						<Category
							key={x.categoryName}
							name={x.categoryName}
							level={level}
							setActive={setActive}
							active={active}
						/>,
						getCategories(x.subCategory, level + 1),
					];
				}
				return (
					<Category
						key={x.categoryName}
						name={x.categoryName}
						level={level}
						setActive={setActive}
						active={active}
					/>
				);
			});
			return data;
		};
		setActiveCat(getCategories(categories, 0));
	}, [active, categories]);
	return (
		<div className='container'>
			<div className='header'>
				<h3>Category</h3>
				<span>
					<button>Add Category</button>
				</span>
			</div>
			<div className='details'>{activeCat}</div>
		</div>
	);
};

export default CategoryMenu;
