export default function FormInput({
    setData,
    className= '',
    type='text',
    afterContent='',
    ...props
}) {
    return (
        <div className="flex group group-hover:outline-1 border-b-2 border-slate-500 py-1 rounded-md shadow-sm relative bg- w-full">
        <input
            type={type}
            className={`form-input py-1 px-4 outline-none border-none w-full block bg-inherit pl-5 pr-6  ${className}`}
            // onChange={(e) => setData(e.target.value)}
            {...props}
        />
        <button 
           type="button"
           className={`absolute right-1 inset-y-2 text-default-600 p-1`}>
             {!!afterContent && afterContent}
           </button>
        </div>
    )
}