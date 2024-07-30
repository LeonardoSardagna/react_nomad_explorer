import { CheckCircle2, Rocket, User } from "lucide-react";
import { Button } from "../../components/button";
import { useParams } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { TripProps } from "../../interface/tripProps";
import { format } from "date-fns"

export function PageConfirmParticipants() {
    const { idTrip, idParticipant } = useParams()
    const [trip, setTrip] = useState<TripProps | undefined>();
    const [confirm, setConfirm] = useState(false)

    useEffect(() => {
        api.get(`/trips/${idTrip}`).then(response => setTrip(response.data))
    }, [idTrip])

    async function confirmParticipant(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const data = new FormData(event.currentTarget)
        const name = data.get('name')?.toString()

        await api.post(`/participants/${idParticipant}/confirm`, {
            name
        })
    }

    function ConfirmPresence() {
        setConfirm(true)
    }

    const start = trip?.startsAt && format(trip.startsAt, "d'/'LL'/'Y")
    const end = trip?.endsAt && format(trip.endsAt, "d'/'LL'/'Y")

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="bg-zinc-900 space-y-2 rounded-xl px-6 py-5 w-[640px]">
                <div className="flex justify-center items-center ">
                    <h2 className="text-lg font-bold">Confirmar presença na viagem</h2>
                </div>
                <p className="text-zinc-400">Por favor, verifique os detalhes da viagem abaixo e insira seu nome para confirmar sua presença.</p>
                <div className="flex flex-col flex-wrap gap-2">
                    <ul className="list-disc px-5">
                        <li>Destino: {trip?.destination}</li>
                        <li>Data: {start} até {end}</li>
                        <li>Organizador: {trip?.ownerName}</li>
                    </ul>
                </div>
                <div className="w-full h-px bg-zinc-800" />
                <form onSubmit={confirmParticipant} className="bg-zinc-950 px-4 py-2.5 rounded-lg ">
                    <div className="flex items-center gap-2 flex-1">
                        <User className="size-5 text-zinc-400" />
                        <input type="text" name="name" placeholder="Digite seu nome" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
                        <Button onClick={ConfirmPresence}>
                            Confirmar
                            <Rocket className="size-5 text-zinc-950" />
                        </Button>
                        {confirm &&
                            <div className="fixed inset-0 bg-black/90 flex items-center justify-center gap-5">
                                <p className="text-3xl">Sua presença foi confirmada</p>
                                <CheckCircle2 className="text-lime-400 size-8"/>
                            </div>}
                    </div>
                </form>
            </div>
        </div>
    )
}