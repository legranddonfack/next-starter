

const Button = ({children, onClick, className}) => {
  return (
    <button 
      onClick={onClick}
      className={className + " rounded-[5px] w-[40px] h-[40px] bg-grey-light hover:bg-grey active:bg-grey-light flex items-center justify-center"}>
      { children }
    </button>
  )
}

export default Button