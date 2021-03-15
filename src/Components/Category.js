import React from 'react';
const Category = ({ name, level, active, setActive }) => {
	const toggleMenuItem = (e, name) => {
		e.preventDefault();
		return active.indexOf(name) > -1
			? active.filter((x) => x !== name)
			: [...active, name];
	};
	return (
		<div
			className='categories'
			style={{ marginLeft: level * 12 }}
			onClick={(e) => setActive(toggleMenuItem(e, name))}
		>
			<div
				className={
					active.some((x) => x === name) ? 'category active' : 'category'
				}
			>
				<span>{name}</span>
			</div>
		</div>
	);
};
export default Category;
