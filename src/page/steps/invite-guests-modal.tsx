import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";

interface InviteGuestsModalProps {
    closeModal: () => void
    EmailToInvite: string[]
    addNewEmailToInvite: (evento: FormEvent<HTMLFormElement>) => void
    openGuestInput: () => void
    excludeEmailToInvite: (removeEmailToInvite: string) => void
}

export function InviteGuestsModal({
    EmailToInvite,
    addNewEmailToInvite,
    closeModal,
    openGuestInput,
    excludeEmailToInvite
}: InviteGuestsModalProps) {
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="bg-zinc-900 space-y-2 rounded-xl px-6 py-5 w-[640px]">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold">Selecionar convidados</h2>
                    <button onClick={closeModal}>
                        <X />
                    </button>
                </div>
                <p className="text-zinc-400">Os convidados irão receber e-mails para confirmar a participação na viagem.</p>
                <div className="flex flex-wrap gap-2">
                    {EmailToInvite.map(email => (
                        <div key={email} className="flex items-center bg-zinc-800 rounded-lg px-2.5 py-1.5">
                            <span className="px-2.5 py-1.5 text-zinc-300">{email}</span>
                            <button type="button" onClick={() => excludeEmailToInvite(email)}>
                                <X />
                            </button>
                        </div>
                    ))}
                </div>
                <div className="w-full h-px bg-zinc-800" />
                <form onSubmit={addNewEmailToInvite} className="bg-zinc-950 px-4 py-2.5 rounded-lg ">
                    <div className="flex items-center gap-2 flex-1">
                        <AtSign className="size-5 text-zinc-400" />
                        <input type="email" name="email" placeholder="Digite o e-mail do convidado" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
                        <button onClick={openGuestInput} className="flex items-center gap-2 bg-purpleDark text-zinc-950 px-3 py-2 rounded-md hover:bg-purpleMedium font-medium">
                            Convidar
                            <Plus className="size-5 text-zinc-950" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
