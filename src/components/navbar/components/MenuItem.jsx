import "./MenuItem.css"

export const MenuItem = (props) => {
    return <a href={props.url}>{props.name}</a>
}