import { Link } from "react-router-dom";
import Theme from "../../components/Theme";

export default function NotFound() {
    return (
        <Theme>
            <div className="not-found">
                <h2>Página não escontrada 😕</h2>
                <Link className="btn-back" to={"/"}>Voltar</Link>
            </div>
        </Theme>
    )
}