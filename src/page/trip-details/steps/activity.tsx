import { CircleCheck, Plus } from "lucide-react";
import { Button } from "../../../components/button";

interface ActivityProps {
    OpenCreateActivityModal: () => void
}

export function Activity({ OpenCreateActivityModal }: ActivityProps) {
    return (
        <div className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-zinc-50 font-semibold text-3xl">Atividades</h2>
                <Button onClick={OpenCreateActivityModal} variant="primary">
                    <Plus className="size-5 text-zinc-950" />
                    Cadastrar Atividade
                </Button>
            </div>

            <div className="space-y-8">

                <div className="space-y-2.5">
                    <div className="flex items-baseline gap-2">
                        <span className="text-zinc-300 font-semibold text-xl">Dia 17</span>
                        <span className="text-zinc-500 text-xs">Sábado</span>
                    </div>
                    <p className="text-zinc-500">Nenhuma atividade cadastrada nessa data.</p>
                </div>

                <div className="space-y-2.5">
                    <div className="flex items-baseline gap-2">
                        <span className="text-zinc-300 font-semibold text-xl">Dia 18</span>
                        <span className="text-zinc-500 text-xs">Domingo</span>
                    </div>
                    <div className="space-y-2.5">
                        <div className="flex items-center gap-3 bg-zinc-900 rounded-lg px-4 py-2.5 shadow-shape">
                            <CircleCheck className="size-5 text-lime-300" />
                            <span className="text-zinc-100">Corrida de Kart</span>
                            <p className="ml-auto text-zinc-400 text-sm">14:00h</p>
                        </div>
                        <div className="flex items-center gap-3 bg-zinc-900 rounded-lg px-4 py-2.5 shadow-shape">
                            <CircleCheck className="size-5 text-lime-300" />
                            <span className="text-zinc-100">Corrida de Kart</span>
                            <p className="ml-auto text-zinc-400 text-sm">14:00h</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
