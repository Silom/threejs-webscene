import React from "react"
import { useGLTF } from "@react-three/drei"
import { Vector3 } from "three"
import { Html } from "@react-three/drei"

interface IComputerModelProps {
  position: Vector3
  screenTpl: React.ReactElement
}

export const ComputerModel: React.FC<IComputerModelProps> = ({
  screenTpl,
  ...props
}) => {
  const { nodes, materials } = useGLTF("/computer_gltf/scene.gltf")
  console.log(screenTpl)

  return (
    <group {...props} dispose={null}>
      <group>
        <mesh
          // @ts-ignore
          geometry={nodes.computer_Computer_0.geometry}
          material={materials.Computer}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        >
          {screenTpl ? (
            <Html
              className="content"
              rotation-y={Math.PI / 2}
              rotation-x={Math.PI / 2}
              position={new Vector3(-0.035, -0.0075, 0.205)}
              transform
              occlude="blending"
              scale={0.04}
            >
              <div
                className="wrapper pc-screen"
                onPointerDown={(e) => e.stopPropagation()}
                style={{
                  backgroundColor: "#000",
                  color: "#0F0",
                  width: 270,
                  height: 205,
                  padding: 10,
                  overflow: "auto",
                }}
              >
                {screenTpl}
              </div>
            </Html>
          ) : null}
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload("/computer_gltf/scene.gltf")
