import { Mail, User, X } from "lucide-react";
import { Button } from "../../../components/button";

interface ConfirmParticipantModalProps {
    CloseConfirmParticipantModal: () => void
}

export function ConfirmParticipantModal({
    CloseConfirmParticipantModal
}: ConfirmParticipantModalProps) {
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="bg-zinc-900 space-y-3 rounded-xl px-6 py-5 w-[540px]">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold">Confirmr Participação</h2>
                    <button onClick={CloseConfirmParticipantModal}>
                        <X />
                    </button>
                </div>
                <p className="text-zinc-400">Você foi convidado(a) para participar de uma viagem para <span className="text-zinc-100 font-semibold">Florianópolis, Brasil</span> nas datas de <span className="text-zinc-100 font-semibold">16 a 27 de Agosto de 2024.</span></p>
                <p className="text-zinc-400">Para confirmar sua presença na viagem, preencha os dados abaixo:</p>

                <form className="space-y-3">

                    <div className="flex items-center gap-2 flex-1 bg-zinc-950 px-4 rounded-lg h-14">
                        <User className="size-5 text-zinc-400" />
                        <input type="text" name="name" placeholder="Seu nome completo" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 " />
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2 flex-1 bg-zinc-950 px-4 rounded-lg h-14">
                            <Mail className="size-5 text-zinc-400" />
                            <input type="email" name="email" placeholder="Seu e-mail" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 " />
                        </div>
                    </div>
                    <Button variant="primary" size="full">
                        Confirmar minha presença
                    </Button>
                </form>
            </div>
        </div>
    )
}