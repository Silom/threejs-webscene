import { usePlane } from "@react-three/cannon"

// @ts-ignore
const Floor = (props) => {
  const [ref] = usePlane((_) => ({ type: "Static", mass: 0, ...props }))

  return (
    // @ts-ignore
    <mesh receiveShadow rotation={props.rotation} ref={ref}>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  )
}

export default Floor
