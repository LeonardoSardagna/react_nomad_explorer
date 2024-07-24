
import { Button } from "./../../components/button";
import { useNavigate } from "react-router-dom";

export function NotFound() {
    const navigate = useNavigate();

    function createTrip() {
        navigate(`/`)
    }

    return (
        <div className="h-screen flex items-center bg-pattern3 bg-center justify-center">
            <div className="w-96 text-justify space-y-6">
                <h1 className="text-4xl font-bold">Ops, esta página <br />não foi encontrada</h1>
                <p className="text-xl font-light">Parece que você se perdeu... Tente voltar para a página anterior ou acessar a home.</p>
                <Button onClick={createTrip}>
                    Ir para home
                </Button>
            </div>
        </div>
    )
}