import Input from "../Input/Input"
import Button from "../Button/Button"
import PropTypes from "prop-types"

export default function ToDoItem ({
    text,
    id,
    isComplete,
    isEdit,
    draft,
    onComplete,
    onDraftChange,
    onDelete
}) {
    return (
        <li
            style={{textDecoration: isComplete && "line-through"}}
            onClick={onComplete(id)}
        >
            { isEdit ? (
                <Input
                    onClick = {(e) => e.stopPropagation()}
                    onChange = {onDraftChange(id)}
                    value = {draft}
                />
            ) : (
                <span style={{ marginRight: 20 }} >{text}</span>
            )
            }
            <Button btnName="Done" />
            <Button onClick={onDelete(id)} isDisable="false" btnName="Delete" />
        </li>
    )
}

ToDoItem.propTypes = {
    text: PropTypes.string,
    isEdit: PropTypes.bool,
    onComplete: PropTypes.func,
    onDelete: PropTypes.func,
}