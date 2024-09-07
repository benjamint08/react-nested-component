const {useState, useEffect} = require("react")

function NestedComponent(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("");
    const children = props.children;

    function toggle() {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        if(isOpen) {
            setTitle(`< ${props.title}`)
        } else {
            setTitle(`> ${props.title}`)
        }
    }, [isOpen, children, props.title, title])

    return (
        <>
        <a onClick={toggle} style={{cursor: "pointer", display: "block"}}>{title}</a> 
        {isOpen && children}
        </>  
    )
}

export default NestedComponent