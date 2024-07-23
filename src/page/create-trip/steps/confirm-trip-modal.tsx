import { Mail, User, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../../components/button";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";

interface ConfirmTripModalProps {
    closeModalConfirm: () => void
    createTrip: (evento: FormEvent<HTMLFormElement>) => void
    setOwnerEmail: (email: string) => void
    setOwnerName: (name: string) => void
    eventStartAndEndDates: DateRange | undefined
    destination: string
}

export function ConfirmTripModal({
    closeModalConfirm,
    createTrip,
    setOwnerName,
    setOwnerEmail,
    destination,
    eventStartAndEndDates
}: ConfirmTripModalProps) {

    const displayedDate = eventStartAndEndDates && eventStartAndEndDates.to && eventStartAndEndDates.from
        ? format(eventStartAndEndDates.from, "d' de 'LLL").concat(' até ').concat(format(eventStartAndEndDates.to, "d ' de ' LLL"))
        : null

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="bg-zinc-900 space-y-3 rounded-xl px-6 py-5 w-[640px]">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold">Confirmar criação da viagem</h2>
                    <button onClick={closeModalConfirm}>
                        <X />
                    </button>
                </div>
                <p className="text-zinc-400">Para concluir a criação da viagem para <span className="text-zinc-100 font-semibold">{destination}</span> nas datas de <span className="text-zinc-100 font-semibold">{displayedDate}</span> preencha seus dados abaixo:</p>

                <form onSubmit={createTrip} className="space-y-3">

                    <div className="flex items-center gap-2 flex-1 bg-zinc-950 px-4 rounded-lg h-14">
                        <User className="size-5 text-zinc-400" />
                        <input
                            type="text"
                            placeholder="Seu nome completo"
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 "
                            onChange={event => setOwnerName(event.target.value)}
                        />
                    </div>

                    <div className="flex items-center gap-2 flex-1 bg-zinc-950 px-4 rounded-lg h-14">
                        <Mail className="size-5 text-zinc-400" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Seu e-mail pessoal"
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 "
                            onChange={event => setOwnerEmail(event.target.value)}
                        />
                    </div>
                    <Button size="full">
                        Confirmar criação da viagem
                    </Button>
                </form>
            </div>
        </div>
    )
}
