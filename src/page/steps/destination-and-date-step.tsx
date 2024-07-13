import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";

interface DestinationAndDateProps {
    isGuestsInputOpen: boolean
    closeGuestInput: () => void
    openGuestInput: () => void
}

export function DestinationAndDate({
    closeGuestInput,
    isGuestsInputOpen,
    openGuestInput
}: DestinationAndDateProps) {
    return (
        <div className="flex items-center bg-zinc-900 h-16 px-4 rounded-lg shadow-shape gap-3">
            
            <div className="flex items-center gap-2 flex-1">
                <MapPin className="size-5 text-zinc-400" />
                <input type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" disabled={isGuestsInputOpen} />
            </div>
            <div className="flex items-center gap-2">
                <Calendar className="size-5 text-zinc-400" />
                <input type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 w-32 outline-none" disabled={isGuestsInputOpen} />
            </div>

            <div className="w-px h-6 bg-zinc-800" />

            {isGuestsInputOpen ?
                (
                    <button onClick={closeGuestInput} className="flex items-center gap-2 bg-purpleDark text-zinc-950 px-3 py-2 rounded-md hover:bg-purpleMedium font-medium">
                        Alterar local/data
                        <Settings2 className="size-5 text-zinc-950" />
                    </button>
                ) : (
                    <button onClick={openGuestInput} className="flex items-center gap-2 bg-purpleDark text-zinc-950 px-3 py-2 rounded-md hover:bg-purpleMedium font-medium">
                        Continuar
                        <ArrowRight className="size-5 text-zinc-950" />
                    </button>
                )}
        </div>
    )
}
