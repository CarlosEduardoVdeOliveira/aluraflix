function Button({children, bgColor, border}) {
  return(
    <button style={{background:bgColor, border:border}}>
      {children}
    </button>
  )
}

export default Button