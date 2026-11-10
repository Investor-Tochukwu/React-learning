 import Ultimate from "../assets/Ultimate.png";

 
 export function Header () {
    return (
        <div>
            <h1>My Practice</h1>
            
            <div className="w-full max-w-lg">
                <img src={Ultimate} alt="Ultimate" />
            </div> 
        </div>

    )
};

 export function Footer () {
    return (
        <p>&copy; 2023 My Practice. All rights reserved.</p>
    )
};