import styles from './List.module.css'

export default function List({ items, onItemClick, renderItem }) {
    return (
        <div className={`${styles.listStyle}`}>
            <ul>
            {items.map(({ text, id, ...rest }) => {
                return renderItem ? (
                    renderItem({ text, id, ...rest })
                ) : (
                    <li key={id} onClick={() => onItemClick({ id, text })}>
                        {text}
                    </li>
                );
            })}
            </ul>
        </div>
        
    );
}