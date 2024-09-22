const TextArea = ({ label, name, placeholder, className, refrence, required }) => {
    return (
        <div className={className}>
            {label ? <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900">{label}</label> : ""}
            <textarea ref={refrence} name={name} className="bg-gray-50 focus:outline-none border border-gray-300 text-gray-900 rounded-lg focus:ring-sky-600 
            focus:border-sky-600 block w-full p-2.5" style={{ resize: "none" }} placeholder={placeholder} required={required}></textarea>
        </div>
    );
}

export default TextArea;