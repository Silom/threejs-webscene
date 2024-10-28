import * as THREE from "three"
import { useRef, useState } from "react"
import { PerspectiveCamera, OrbitControls, Sky } from "@react-three/drei"
import BaseScene from "./BaseScene"

import AreaA from "./pages/AreaA"
import AreaB from "./pages/AreaB"
import AreaC from "./pages/AreaC"

import { ThreeElements } from "@react-three/fiber"
import { ComputerModel } from "./models/ComputerModel"
import { FloppyModel } from "./models/FloppyModel"
import BaseCharacter from "./models/Player"

import ThreeModel from "./models/ThreeModel"

// import html2canvas from "html2canvas"

function Box(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!)

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry args={[2, 1, 1]} />
      <meshStandardMaterial />
    </mesh>
  )
}

const ContentScene = () => {
  const [activePage, setActivePage] = useState(null)
  function retreiveTemplateFromPage(): React.ReactElement {
    switch (activePage) {
      case "A":
        return <AreaA />
      case "B":
        return <AreaB />
      case "C":
        return <AreaC />
      default:
        return null
    }
  }

  function loadPage(route: string) {
    setActivePage(route)
  }

  return (
    <mesh scale={0.5}>
      <Box position={[0, 0, 0]} />
      <ComputerModel
        position={new THREE.Vector3(0.2, 0.5, 0)}
        screenTpl={retreiveTemplateFromPage()}
      />

      <FloppyModel
        position={new THREE.Vector3(-0.5, 0.5, 0)}
        onClick={() => {
          loadPage("A")
        }}
      />
      <FloppyModel
        position={new THREE.Vector3(-0.58, 0.5, 0)}
        onClick={() => {
          loadPage("B")
        }}
      />
      <FloppyModel
        position={new THREE.Vector3(-0.55, 0.5, 0.1)}
        onClick={() => {
          loadPage("C")
        }}
      />
    </mesh>
  )
}

export default function () {
  // const cameraFov = 75
  // const cameraPos = new THREE.Vector3(0, 1.2, -1)
  // const lightsTpl = (
  //   <>
  //     <ambientLight intensity={Math.PI / 2} />
  //     <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
  //     <spotLight
  //       position={[10, 10, 10]}
  //       angle={0.15}
  //       penumbra={1}
  //       decay={0}
  //       intensity={Math.PI}
  //     />
  //   </>
  // )
  return (
    <BaseScene>
      <BaseCharacter
        controls
        // @ts-ignore
        position={[0, 2, 0]}
        args={[0.5]}
        color="yellow"
      />

      <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[10, 0, -5]} />
      <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[0, 0, 10]} />
      <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-10, 0, 5]} />
      <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-5, 0, -5]} />
      <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[0, 0, -10]} />
      <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[10, 0, 5]} />

      <ContentScene />
      <Sky />
    </BaseScene>
  )

  // return (
  //   <BaseScene>
  //     <ContentScene />
  //     <BaseCharacter
  //       //{/* @ts-ignore */}
  //       controls
  //       position={new THREE.Vector3(0, 2, 0)}
  //       args={[0.5]}
  //       color="yellow"
  //     />
  //   </BaseScene>
  // <Canvas shadows>
  //   <PerspectiveCamera makeDefault position={cameraPos} fov={cameraFov} />
  //   {lightsTpl}
  //   <ContentScene />
  //   <OrbitControls makeDefault />
  // </Canvas>
  // )
}
