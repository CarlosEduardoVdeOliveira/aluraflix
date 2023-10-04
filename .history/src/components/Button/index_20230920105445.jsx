// eslint-disable-next-line react/prop-types
function Button({children, bgColor, borderColor}) {
  return(
    <button style={{background:bgColor, border:borderColor}}>
      {children}
    </button>
  )
}

export default Button