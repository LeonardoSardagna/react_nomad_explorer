import { Mail, User, X } from "lucide-react";
import { FormEvent } from "react";

interface ConfirmTripModalProps {
    closeModalConfirm: () => void
    createTrip: (evento: FormEvent<HTMLFormElement>) => void
}

export function ConfirmTripModal({
    closeModalConfirm,
    createTrip
}: ConfirmTripModalProps) {
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="bg-zinc-900 space-y-3 rounded-xl px-6 py-5 w-[640px]">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold">Confirmar criação da viagem</h2>
                    <button onClick={closeModalConfirm}>
                        <X />
                    </button>
                </div>
                <p className="text-zinc-400">Para concluir a criação da viagem para <span className="text-zinc-100 font-semibold">Florianópolis, Brasil</span> nas datas de <span className="text-zinc-100 font-semibold">16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:</p>

                <form onSubmit={createTrip} className="space-y-3">

                    <div className="flex items-center gap-2 flex-1 bg-zinc-950 px-4 rounded-lg h-14">
                        <User className="size-5 text-zinc-400" />
                        <input type="text" placeholder="Seu nome completo" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 " />
                    </div>

                    <div className="flex items-center gap-2 flex-1 bg-zinc-950 px-4 rounded-lg h-14">
                        <Mail className="size-5 text-zinc-400" />
                        <input type="email" name="email" placeholder="Seu e-mail pessoal" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 " />
                    </div>
                    <button className="flex items-center gap-2 bg-purpleDark text-zinc-950 px-3 h-11 rounded-md hover:bg-purpleMedium font-medium w-full justify-center">
                        Confirmar criação da viagem
                    </button>
                </form>
            </div>
        </div>
    )
}