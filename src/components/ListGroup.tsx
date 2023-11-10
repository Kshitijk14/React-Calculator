import { useState } from "react";

interface ListGroupProps {
    items: string[]
    heading: string
    onSelectItem: (item: string) => void
}

function ListGroup( {items, heading, onSelectItem} : ListGroupProps) {

    const [selectedIndex, setSelectedIndex] = useState(-1); // Hook

    return (
        <>
            <h1>{heading}</h1>
            { items.length === 0 && <p>No Items Found</p> }
            <ul className="list-group">
                {items.map((item, index) => (
                    <li className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                        key={item} 
                        onClick={() => { 
                            setSelectedIndex(index)
                            onSelectItem(item) 
                        }}
                    >
                            {item}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ListGroup;

// props => i/p passed to a componenet (similar to func args), treated as immutable i.e unchangable(readOnly), cause a re-render to update a dom
// state => data managed by a component (similar to local vars (inside a func)), mutable, cause a re-render to update a dom