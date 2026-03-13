function Navbar()
{

    const navbarstyle = {
        display : "flex",
        width : "100vw", 
        backgroundColor : "black", 
        color : "white", 
        justifyContent : "space-between",
        padding : "20px 5px 20px 5px",
        height : "3vh"
    }

    const anchorcontainerstyle = {
        display : "flex",
        gap : "20px"
    }

    return (
        <nav style={navbarstyle}>

            <h3>LOGO</h3>


            <div style={anchorcontainerstyle}>
                <a style={{textDecoration : "none", color : "white"}} href="">Google</a>
                <a style={{textDecoration : "none", color : "white"}} href="">Facebook</a>
                <a style={{textDecoration : "none", color : "white"}} href="">Instagram</a>
            </div>

        </nav>
    )
}

export default Navbar