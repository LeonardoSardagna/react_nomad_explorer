import { Link2, Plus } from "lucide-react";
import { Button } from "../../../components/button";

interface LinksImportantProps {
    OpenCreateLink: () => void
}

export function LinksImportant({
    OpenCreateLink
}: LinksImportantProps) {
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links importantes</h2>

            <div className="space-y-5">
                <div className="flex justify-between items-center gap-4">
                    <div className="space-y-1.5 w-64">
                        <span className="block text-zinc-100 font-medium">Reserva do AirBnB</span>
                        <a href="#" className=" block truncate text-zinc-400 text-xs">
                            https://www.airbnb.com.br/rooms/963863438668882193?_set_bev_on_new_domain=1718040006_MWUxMDk2NTc2YWVm&source_impression_id=p3_1718040006_P32WZ94NxT3USpE2
                        </a>
                    </div>
                    <Link2 className="size-5 text-zinc-400 shrink-0" />
                </div>

                <div className="flex justify-between items-center gap-4">
                    <div className="space-y-1.5 w-64">
                        <span className="block text-zinc-100 font-medium">Reserva do AirBnB</span>
                        <a href="#" className="block truncate text-zinc-400 text-xs">
                            https://www.airbnb.com.br/rooms/963863438668882193?_set_bev_on_new_domain=1718040006_MWUxMDk2NTc2YWVm&source_impression_id=p3_1718040006_P32WZ94NxT3USpE2
                        </a>
                    </div>
                    <Link2 className="size-5 text-zinc-400 shrink-0" />
                </div>

            </div>
            <Button variant="secondary" size="full" onClick={OpenCreateLink}>
                <Plus className="size-5 text-zinc-200" />
                Cadastrar novo link
            </Button>
        </div>
    )
}