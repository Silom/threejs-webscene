import React from "react"
import { useGLTF } from "@react-three/drei"

import { Vector3, Event } from "three"

interface IFloppyModelProps {
  position: Vector3
  onClick(): void
}

export const FloppyModel: React.FC<IFloppyModelProps> = ({
  onClick,
  ...props
}) => {
  const { nodes, materials } = useGLTF(
    process.env.ASSET_PATH + "/floppy_gltf/scene.gltf"
  )
  return (
    <group
      {...props}
      dispose={null}
      scale={new Vector3(0.001, 0.001, 0.001)}
      rotation={[-Math.PI / 2, 0, 0]}
      onClick={() => onClick()}
    >
      <mesh
        // @ts-ignore
        geometry={nodes.Trava_Lock_0.geometry}
        material={materials.Lock}
        position={[-2.221, 22.853, -0.001]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.066, 0.045, 0.066]}
      />
      <mesh
        // @ts-ignore
        geometry={nodes.Disk_Disk_0.geometry}
        material={materials.Disk}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.294, 0.006, 0.294]}
      />
    </group>
  )
}

useGLTF.preload(process.env.ASSET_PATH + "/floppy_gltf/scene.gltf")
