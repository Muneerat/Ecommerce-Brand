export default function FormInput({
    setData,
    className= '',
    type='text',
    ...props
}) {
    return (
        <input
            type={type}
            className={`form-input py-2 px-4 outline outline-[#0D6EFD] focus:outline-none  focus:border-[#0D6EFD] focus:ring-2 focus:ring-[#0D6EFD] ${className}`}
            onChange={(e) => setData(e.target.value)}
            {...props}
        />
    )
}