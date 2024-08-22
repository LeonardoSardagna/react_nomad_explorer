import { Button } from "../../../components/button"

interface confirmDeleteProps{
    onConfirm: () => void;
    OnCancel: () => void;
}

export function ConfirmDelete({OnCancel,onConfirm}:confirmDeleteProps){
    return(
        <section className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="bg-zinc-900 space-y-2 rounded-xl px-6 py-5 w-[440px] flex flex-col">
                <div className="mb-2">
                    <header>
                        <h2 className="text-center text-lg">Confirmação de exclusão:</h2>
                    </header>
                </div>
                <div className="flex flex-col mb-2">
                    <p>Tem certeza que deseja excluir? <u><b>Esta ação é irreversível.</b></u></p>
                </div>
                <footer className="flex justify-evenly">
                    <Button onClick={onConfirm}>Sim</Button>
                    <Button onClick={OnCancel}>Não</Button>
                </footer>
            </div>
        </section>
    )
}