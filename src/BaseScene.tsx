import { Canvas } from "@react-three/fiber"
import { Loader, PointerLockControls } from "@react-three/drei"
import { Physics } from "@react-three/cannon"

import Lights from "./models/Lights"
import Floor from "./models/Floor"
//@ts-ignore
const BasicScene = ({ children }) => {
  return (
    <>
      <Canvas shadows camera={{ fov: 50 }}>
        <Lights />

        <Physics gravity={[0, -9.8, 0]}>
          {children}

          <Floor rotation={[Math.PI / -2, 0, 0]} color="red" />
        </Physics>

        <PointerLockControls />
      </Canvas>
      <Loader />
    </>
  )
}

export default BasicScene
