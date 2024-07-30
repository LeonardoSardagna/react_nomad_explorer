import { CircularProgress } from "@mui/material";

export function LoadingModal() {
    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
            <div className="space-y-2 rounded-xl px-6 py-5 w-[640px] h-[640px] flex justify-center items-center gap-5">
                <p className="text-3xl text-purpleLight">Criando Viagem</p>
                <CircularProgress color="secondary" />
            </div>
        </div>
    )
}