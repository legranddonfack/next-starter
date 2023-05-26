

const Button = ({children, onClick, className, type, bgColor}) => {
  if (type && type === "icon") {
    return (
      <button 
        onClick={onClick}
        className={`${className} rounded-[5px] w-[40px] h-[40px] bg-${bgColor}-light hover:bg-${bgColor} active:bg-${bgColor}-light flex items-center justify-center`}>
        { children }
      </button>
    )
  }
  return (
    <button 
      onClick={onClick}
      className={`${className} rounded-[5px] px-[20px] h-[40px] bg-secondary hover:bg-${bgColor}-light active:bg-${bgColor} flex items-center justify-center`}>
      { children }
    </button>
  )
}

export default Button