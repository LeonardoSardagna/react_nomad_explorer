import { Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";

export function DestinationDateHeader() {
    return (
        <div className="flex justify-between items-center h-16 px-4 rounded-xl shadow-shape bg-zinc-900">
            <div className="flex items-center gap-2">
                <MapPin className="text-zinc-400 size-5" />
                <span className="text-zinc-100 flex items-center gap-2">Florianópolis, Brasil</span>
            </div>
            <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                    <Calendar className="text-zinc-400 size-5" />
                    <span className="text-zinc-100">17 a 23 de Agosto</span>
                </div>

                <div className="w-px h-6 bg-zinc-800" />

                <Button variant="secondary">
                    Alterar local/data
                    <Settings2 className="size-5 text-zinc-200" />
                </Button>
            </div>
        </div>
    )
}