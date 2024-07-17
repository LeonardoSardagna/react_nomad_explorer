import { CircleCheck, CircleDashedIcon, UserCog2 } from "lucide-react";
import { Button } from "../../../components/button";

interface GuestsProps {
    OpenConfirmParticipant: () => void
}

export function Guests({
    OpenConfirmParticipant
}: GuestsProps) {
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Convidados</h2>
            <div className="space-y-5">

                <div className="flex justify-between items-center gap-4">
                    <div className="space-y-1.5 w-64">
                        <span className="block text-zinc-100 font-medium">Jessica White</span>
                        <span className="block truncate text-zinc-400 text-sm">jessica.white44@yahoo.com</span>
                    </div>
                    <CircleDashedIcon className="size-5 text-zinc-400 shrink-0" />
                </div>

                <div className="flex justify-between items-center gap-4">
                    <div className="space-y-1.5 w-64">
                        <span className="block text-zinc-100 font-medium">Jessica White</span>
                        <span className="block truncate text-zinc-400 text-sm">jessica.white44Gerenciar</span>
                    </div>
                    <CircleCheck className="size-5 text-lime-300 shrink-0" />
                </div>

            </div>
            <Button variant="secondary" size="full" onClick={OpenConfirmParticipant}>
                <UserCog2 className="size-5 text-zinc-200" />
                Gerenciar convidados
            </Button>
        </div>
    )
}