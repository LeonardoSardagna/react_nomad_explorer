import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { Button } from "../../../components/button";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns"
import { ptBR } from "date-fns/locale";

interface DestinationAndDateProps {
    isGuestsInputOpen: boolean
    closeGuestInput: () => void
    openGuestInput: () => void
    setEventStartAndEndDates: (dates: DateRange | undefined) => void
    eventStartAndEndDates: DateRange | undefined
    setDestination: (destination: string) => void
}

export function DestinationAndDate({
    closeGuestInput,
    isGuestsInputOpen,
    openGuestInput,
    setEventStartAndEndDates,
    eventStartAndEndDates,
    setDestination
}: DestinationAndDateProps) {

    const [isDayPicker, setIsDayPicker] = useState(false)

    function openDayPicker() {
        setIsDayPicker(true)
    }

    function closeDayPicker() {
        setIsDayPicker(false)
    }

    const displayedDate = eventStartAndEndDates && eventStartAndEndDates.to && eventStartAndEndDates.from
        ? format(eventStartAndEndDates.from, "d' de 'LLL").concat(' até ').concat(format(eventStartAndEndDates.to, "d ' de ' LLL"))
        : null

    return (
        <div className="flex items-center bg-zinc-900 h-16 px-4 rounded-lg shadow-shape gap-3">

            <div className="flex items-center gap-2 flex-1">
                <MapPin className="size-5 text-zinc-400" />
                <input
                    type="text"
                    placeholder="Para onde você vai?"
                    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                    disabled={isGuestsInputOpen}
                    onChange={event => setDestination(event.target.value)}
                />
            </div>
            <button disabled={isGuestsInputOpen} className="flex items-center gap-2 text-left w-[320px]" onClick={openDayPicker}>
                <Calendar className="size-5 text-zinc-400" />
                <span className="bg-transparent text-lg text-zinc-400 flex-1">
                    {displayedDate || "Quando"}
                </span>
            </button>

            {isDayPicker && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
                    <div className="bg-zinc-900 space-y-3 rounded-xl px-6 py-5">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-bold">Selecione a data</h2>
                            <button onClick={closeDayPicker}>
                                <X />
                            </button>
                        </div>
                        <DayPicker
                            mode="range"
                            selected={eventStartAndEndDates}
                            onSelect={setEventStartAndEndDates}
                            locale={ptBR}
                            showOutsideDays={true}
                            classNames={{
                                months:
                                    'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
                                month: 'space-y-4',
                                caption: 'flex justify-center pt-1 relative items-center',
                                caption_label: 'text-sm font-medium',
                                nav: 'space-x-1 flex items-center',
                                nav_button:
                                    'h-7 w-7 hover:opacity-100 shadow-sm hover:bg-accent hover:text-accent-foreground flex justify-center items-center rounded-md',

                                nav_button_previous: 'absolute left-1',
                                nav_button_next: 'absolute right-1',

                                head_row: 'flex',
                                head_cell: 'w-8 font-normal text-[0.8rem]',
                                row: 'flex w-full mt-2',

                                cell: 'p-0',

                                day: 'h-8 w-8 p-0 ease-in-out hover:rounded-md aria-selected:bg-purpleDark aria-selected:text-zinc-50 aria-selected:hover:rounded-none',

                                day_range_start:
                                    'day-range-start rounded-l-md aria-selected:hover:rounded-l-md aria-selected:hover:bg-purpleMedium',
                                day_range_end:
                                    'day-range-end rounded-r-md aria-selected:hover:rounded-r-md aria-selected:hover:bg-purpleMedium',

                                day_today:
                                    'text-accent-foreground bg-zinc-950/95 rounded-md aria-selected:rounded-r-none',

                                day_outside:
                                    'day-outside text-muted-foreground opacity-50 aria-selected:opacity-100 aria-selected:bg-purpleDark aria-selected:text-zinc-50',

                                day_disabled: 'text-muted-foreground opacity-50',

                                day_range_middle:
                                    'aria-selected:bg-purpleDark rounded-none aria-selected:hover:bg-purpleMedium',
                            }}
                        />
                    </div>
                </div>
            )}

            <div className="w-px h-6 bg-zinc-700" />

            {isGuestsInputOpen ?
                (
                    <Button onClick={closeGuestInput} variant="secondary">
                        Alterar
                        <Settings2 className="size-5" />
                    </Button>
                ) : (
                    <Button onClick={openGuestInput}>
                        Continuar
                        <ArrowRight className="size-5 text-zinc-950" />
                    </Button>
                )}
        </div>
    )
}
