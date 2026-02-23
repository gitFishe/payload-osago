type ContactInfoProps = {
    mobileNumber?: string | null;
    workingHours?: {
        openingTime: string;
        closingTime: string;
    } | undefined | null;
}

export function toHHMM(value?: string | null): string {
    if (!value) return '00:00'

    const d = new Date(value)
    if (Number.isNaN(d.getTime())) return '00:00'

    const h = String(d.getHours()).padStart(2, '0')
    const m = String(d.getMinutes()).padStart(2, '0')
    return `${h}:${m}`
}

export default function ContactInfo({
    data,isWorkingTimeShown
}: {
    data: ContactInfoProps,
    isWorkingTimeShown?: boolean
}) {

    const hours = data.workingHours

    return(
        <div className='flex flex-col justify-center'>
            <a href={`tel:${data.mobileNumber}`} className='text-2xl leading-6 font-bold text-customBlue'>{data.mobileNumber}</a>
            {isWorkingTimeShown && hours ? (
                <span className='text-[#8799B5] leading-4 text-base'>{toHHMM(hours.openingTime)} - {toHHMM(hours.closingTime)}</span>
            ) : ''}
        </div>
    )
}