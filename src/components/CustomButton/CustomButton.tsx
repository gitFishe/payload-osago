type ButtonProps = {
    text?:string,
}

function ButtonArrow  () {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.22462 0.218756L10.7899 4.97188C11.07 5.26355 11.07 5.73645 10.7899 6.02812L6.22462 10.7812C5.94447 11.0729 5.49026 11.0729 5.21011 10.7812C4.92996 10.4896 4.92996 10.0167 5.21011 9.72499L9.26813 5.5L5.21011 1.27501C4.92996 0.98333 4.92996 0.510432 5.21011 0.218756C5.49026 -0.0729188 5.94447 -0.0729188 6.22462 0.218756Z" fill="currentColor"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M1.22462 0.218756L5.78989 4.97188C6.07004 5.26355 6.07004 5.73645 5.78989 6.02812L1.22462 10.7812C0.944468 11.0729 0.490259 11.0729 0.210111 10.7812C-0.070037 10.4896 -0.070037 10.0167 0.210111 9.72499L4.26813 5.5L0.210111 1.27501C-0.070037 0.98333 -0.070037 0.510432 0.210111 0.218756C0.490259 -0.0729188 0.944468 -0.0729188 1.22462 0.218756Z" fill="currentColor"/>
        </svg>
    )
}

export default function CustomButton({text = 'Купить'}:ButtonProps) {

    return(
        <button className='bg-[#3A62FF] rounded-[41px] flex items-center px-8 h-11 cursor-pointer transition-colors duration-200 ease-out hover:bg-[#2f4fcc]'>
            <span className='font-bold mr-2 text-xl'>{text}</span>
            <ButtonArrow/>
        </button>
    )
}