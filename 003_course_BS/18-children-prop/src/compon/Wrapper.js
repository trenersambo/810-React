function Wrap(props) {
  // передча стиля (цвет фона)
  let styleProps = {
  backgroundColor: props.color,
  }

  return ( 
  < div style={styleProps}>
    {props.children}
  </div>

   );
}

export default Wrap;