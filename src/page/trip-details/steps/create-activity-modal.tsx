import { Calendar, Tag, X } from "lucide-react";
import { Button } from "../../../components/button";

interface CreateActivityModalProps {
    CloseCreateActivityModal: () => void
}

export function CreateActivityModal({
    CloseCreateActivityModal
}: CreateActivityModalProps) {
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="bg-zinc-900 space-y-3 rounded-xl px-6 py-5 w-[540px]">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold">Cadastrar atividade</h2>
                    <button onClick={CloseCreateActivityModal}>
                        <X />
                    </button>
                </div>
                <p className="text-zinc-400">Todos convidados podem visualizar as atividades.</p>

                <form className="space-y-3">

                    <div className="flex items-center gap-2 flex-1 bg-zinc-950 px-4 rounded-lg h-14">
                        <Tag className="size-5 text-zinc-400" />
                        <input type="text" name="title" placeholder="Qual a atividade?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 " />
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2 flex-1 bg-zinc-950 px-4 rounded-lg h-14">
                            <Calendar className="size-5 text-zinc-400" />
                            <input type="datetime-local" name="occurs_at" placeholder="Quando" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 " />
                        </div>
                    </div>
                    <Button variant="primary" size="full">
                        Salvar atividade
                    </Button>
                </form>
            </div>
        </div>
    )
}