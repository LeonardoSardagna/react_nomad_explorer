import { ArrowRight, UserPlus2Icon } from "lucide-react";
import { Button } from "../../../components/button";

interface InviteGuestsStepProps {
    openModal: () => void
    EmailToInvite: string[]
    openModalConfirm: () => void
}

export function InviteGuestsStep({
    EmailToInvite,
    openModal,
    openModalConfirm
}: InviteGuestsStepProps) {

    return (
        <div className="flex items-center bg-zinc-900 h-16 px-4 rounded-lg shadow-shape gap-3">
            <button className="flex items-center gap-2 flex-1" onClick={openModal}>
                <UserPlus2Icon className="size-5 text-zinc-400" />
                {EmailToInvite.length > 0 ? (
                    <span className="bg-transparent text-lg text-zinc-400 outline-none flex-1 text-start">
                        {EmailToInvite.length} pessoa(s) convidada(s)
                    </span>
                ) :
                    (<span className="bg-transparent text-lg text-zinc-400 outline-none flex-1 text-start">
                        Quem estará na viagem?
                    </span>)}
            </button>

            <Button onClick={openModalConfirm} >
                Confirmar Viagem
                <ArrowRight className="size-5 text-zinc-950" />
            </Button>
        </div>
    )
}
