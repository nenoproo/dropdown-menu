function dropdownItem(props) {

    return (
        <li className="dropdown-item">
            <img src={props.img} />
            <a href="#">{props.text}</a>   
        </li>
    );
}

export default dropdownItem;