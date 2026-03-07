'use client'

type CheckButtonsButtonProps = {
  className?: string
  label: string
}

export default function CheckButtonsButton({ className, label }: CheckButtonsButtonProps) {
  const handleClick = () => {
    const rows = document.querySelectorAll('.ButtonRows')

  }

  return (
    <button onClick={handleClick} className={className}>
      <span>{label}</span>
    </button>
  )
}
