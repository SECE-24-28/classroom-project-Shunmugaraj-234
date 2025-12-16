import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div style={{ padding: "20px" }}>
            <h1>Welcome to our simple Electranic Store.</h1>

            <Link to="/products">
                <img
                    src="https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3Ryb25pYyUyMGRldmljZXxlbnwwfHwwfHx8MA%3D%3D"
                    alt="store banner"
                    style={{ width: "50%", cursor: "pointer" }}
                />
            </Link>

            <p>Click the image to explore products</p>
        </div>
    );
}
