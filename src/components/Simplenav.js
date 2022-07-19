import { Link } from "react-router-dom";
export default function SimpleNav(){
    return (
        <nav
        style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                    fontColor: "white",
                }}>
            <Link to="/invoices">Invoices</Link> |{" "}
            <Link to="/expenses">Expenses</Link> |{" "}
            <Link to="/signup">Sign Up</Link> |{" "}
            <Link to="/login">Log In</Link> |{" "}
        </nav>
    );
}
