import { CircleCheck, CircleDashedIcon, UserCog2 } from "lucide-react";
import { Button } from "../../../components/button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../../lib/axios";

interface GuestsProps {
    OpenConfirmParticipant: () => void
}

interface ParticipantProps {
    id: string,
    name: string | null,
    email: string,
    isConfirmed: boolean
}

export function Guests({ OpenConfirmParticipant }: GuestsProps) {
    const { idTrip } = useParams()
    const [participants, setParticipants] = useState<ParticipantProps[]>([]);

    const refreshParticipants = () => {
        api.get(`/trips/${idTrip}/participants`).then(response => setParticipants(response.data));
    }

    useEffect(() => {
        refreshParticipants()
    }, [idTrip])

    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Convidados</h2>
            <div className="space-y-5">

                {participants.map((participant, index) => (
                    <div key={participant.id} className="flex justify-between items-center gap-4">
                        <div className="space-y-1.5 w-64">
                            <span className="block text-zinc-100 font-medium">{participant.name && participant.name.trim() !== '' ? participant.name : `Convidado ${index}`}</span>
                            <span className="block truncate text-zinc-400 text-sm">{participant.email}</span>
                        </div>
                        {participant.isConfirmed ? (
                            <CircleCheck className="size-5 text-green-400 shrink-0" />
                        ) : (
                            <CircleDashedIcon className="size-5 text-zinc-400 shrink-0" />
                        )}
                    </div>
                ))}
            </div>
            <Button variant="secondary" size="full" onClick={OpenConfirmParticipant}>
                <UserCog2 className="size-5 text-zinc-200" />
                Gerenciar convidados
            </Button>
        </div>
    )
}
