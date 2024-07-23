import { User, X } from "lucide-react";
import { Button } from "../../../components/button";
import { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../lib/axios";

interface ConfirmParticipantModalProps {
    CloseConfirmParticipantModal: () => void
}

interface ParticipantProps {
    id: string,
    email: string,
}

export function ConfirmParticipantModal({ CloseConfirmParticipantModal }: ConfirmParticipantModalProps) {

    const { idTrip } = useParams()
    const [participants, setParticipants] = useState<ParticipantProps[]>([]);
    const [selectParticipantId, setSelectiParticipantId] = useState<string | null>(null)

    useEffect(() => {
        api.get(`/trips/${idTrip}/participants`).then(response => setParticipants(response.data))
    }, [idTrip])

    async function confirmParticipant(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const data = new FormData(event.currentTarget)
        const name = data.get('name')?.toString()

        await api.post(`/participants/${selectParticipantId}/confirm`, {
            name
        })

        api.get(`/trips/${idTrip}/participants`).then(response => {
            setParticipants(response.data);
            setSelectiParticipantId(null);
        });

        CloseConfirmParticipantModal()
    }

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="bg-zinc-900 space-y-3 rounded-xl px-6 py-5 w-[540px]">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold">Confirmar Participação</h2>
                    <button onClick={CloseConfirmParticipantModal}>
                        <X />
                    </button>
                </div>
                <p className="text-zinc-400">Escolha o convidado e insira o nome dele para confirmar a participação:</p>
                <div className="flex flex-wrap gap-2">

                    {participants.map(pessoa => {
                        return (
                            <button
                                key={pessoa.id}
                                className={`flex items-center bg-zinc-800 rounded-lg px-2.5 py-1.5 hover:bg-zinc-700 ${selectParticipantId === pessoa.id ? 'border border-purpleMedium ' : ''}}`}
                                onClick={() => setSelectiParticipantId(pessoa.id)}
                            >
                                <span
                                    className="px-2.5 py-1.5 text-zinc-300">
                                    {pessoa.email}
                                </span>
                            </button>
                        )
                    })}

                </div>
                <form onSubmit={confirmParticipant} className="space-y-3">
                    <div className="flex items-center gap-2 flex-1 bg-zinc-950 px-4 rounded-lg h-14">
                        <User className="size-5 text-zinc-400" />
                        <input
                            type="text"
                            name="name"
                            placeholder="Nome do convidado"
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 " />
                    </div>

                    <Button variant="primary" size="full">
                        Confirmar participação
                    </Button>
                </form>
            </div>
        </div>
    )
}
