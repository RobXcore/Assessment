import React from 'react';
import { useState } from 'react';
import { books } from '../books';
import '../Stylesheets/books.css';
import '../Stylesheets/buttons.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Buttons from './Buttons';

const rows = {
	shelf1: {
		items: books
	},
	shelf2: {
		items: []
	}
};
const onDragEnd = (result, columns, setColumns) => {
	if (!result.destination) return;
	const { source, destination } = result;

	if (source.droppableId !== destination.droppableId) {
		const sourceColumn = columns[source.droppableId];
		const destColumn = columns[destination.droppableId];
		const sourceItems = [...sourceColumn.items];
		const destItems = [...destColumn.items];
		const [removed] = sourceItems.splice(source.index, 1);
		destItems.splice(destination.index, 0, removed);
		setColumns({
			...columns,
			[source.droppableId]: {
				...sourceColumn,
				items: sourceItems
			},
			[destination.droppableId]: {
				...destColumn,
				items: destItems
			}
		});
	} else {
		const column = columns[source.droppableId];
		const copiedItems = [...column.items];
		const [removed] = copiedItems.splice(source.index, 1);
		copiedItems.splice(destination.index, 0, removed);
		setColumns({
			...columns,
			[source.droppableId]: {
				...column,
				items: copiedItems
			}
		});
	}
};

function Books() {
	const [columns, setColumns] = useState(rows);

	const sortAlphabetic = (items) => {
		return [...items].sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
	}

	const setAlphabetic = () => {
		setColumns({
			...columns,
			shelf1: {
				...columns.shelf1,
				items: sortAlphabetic(columns.shelf1.items)
			},
			shelf2: {
				...columns.shelf2,
				items: sortAlphabetic(columns.shelf2.items)
			}
		})
	}
	const sortAlphabeticReverse = (items) => {
		return [...items].sort((a, b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()))
	}
	const setAlphabeticReverse = () => {
		setColumns({
			...columns,
			shelf1: {
				...columns.shelf1,
				items: sortAlphabeticReverse(columns.shelf1.items)
			},
			shelf2: {
				...columns.shelf2,
				items: sortAlphabeticReverse(columns.shelf2.items)
			}
		})
	}
	const sortColor = (items) => {
		return [...items].sort((a, b) => parseFloat(a.colorId) - parseFloat(b.colorId))
	}

	const setColor = () => {
		setColumns({
			...columns,
			shelf1: {
				...columns.shelf1,
				items: sortColor(columns.shelf1.items)
			},
			shelf2: {
				...columns.shelf2,
				items: sortColor(columns.shelf2.items)
			}
		})
	}
	const sortColorReverse = (items) => {
		return [...items].sort((a, b) => parseFloat(b.colorId) - parseFloat(a.colorId))
	}

	const setColorReverse = () => {
		setColumns({
			...columns,
			shelf1: {
				...columns.shelf1,
				items: sortColorReverse(columns.shelf1.items)
			},
			shelf2: {
				...columns.shelf2,
				items: sortColorReverse(columns.shelf2.items)
			}
		})
	}
	const sortSize = (items) => {
		return [...items].sort((a, b) => parseFloat(a.size) - parseFloat(b.size));
	}

	const setSize = () => {
		setColumns({
			...columns,
			shelf1: {
				...columns.shelf1,
				items: sortSize(columns.shelf1.items)
			},
			shelf2: {
				...columns.shelf2,
				items: sortSize(columns.shelf2.items)
			}
		})
	}
	const sortSizeReverse = (items) => {
		return [...items].sort((a, b) => parseFloat(b.size) - parseFloat(a.size));
	}

	const setSizeReverse = () => {
		setColumns({
			...columns,
			shelf1: {
				...columns.shelf1,
				items: sortSizeReverse(columns.shelf1.items)
			},
			shelf2: {
				...columns.shelf2,
				items: sortSizeReverse(columns.shelf2.items)
			}
		})
	}

	return (<>
		<div className="container">

			<DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
				{Object.entries(columns).map(([columnId, column]) => {
					return (
						<div className="items" key={columnId}>
							<div>
								<Droppable
									droppableId={columnId}
									key={columnId}
									direction="horizontal"
								>
									{(provided, snapshot) => {
										return (
											<ul
												className="icons"
												{...provided.droppableProps}
												ref={provided.innerRef}
												style={{background: snapshot.isDraggingOver? 'gray' : ''}}
											>
												{column.items.map((item, index) => {
													return (
														<Draggable
															key={item.id}
															draggableId={item.id}
															index={index}
														>
															{(provided) => {
																return (
																	<li
																		ref={provided.innerRef}
																		{...provided.draggableProps}
																		{...provided.dragHandleProps}
																	>
																		<img
																			src={item.icon}
																			alt=""
																		/>
																	</li>
																);
															}}
														</Draggable>
													);
												})}
												{provided.placeholder}
											</ul>
										);
									}}
								</Droppable>
							</div>
						</div>
					);
				})}
			</DragDropContext>

		</div>
		<Buttons
		 setAlphabetic={setAlphabetic} 
		 setAlphabeticReverse={setAlphabeticReverse} 
		 setColor={setColor} 
		 setColorReverse={setColorReverse}
		 setSize={setSize}
		 setSizeReverse={setSizeReverse}
		  />

	</>);
}

export default Books;
