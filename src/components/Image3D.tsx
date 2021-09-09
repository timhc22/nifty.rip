import React, {useEffect, useRef} from "react";
import * as THREE from "three";
import {useFrame, useLoader} from "@react-three/fiber";

export default function Image3D(props: any): JSX.Element {
  const mesh = useRef<THREE.Mesh>(null!);
  const texture = useLoader(THREE.TextureLoader, props.image.thumbnail);

  useFrame((state, delta) => (mesh.current.rotation.x += 0.01));

  let handleOpen = props.handleOpen;
  let pos1 = 0, pos2 = 0, pos3 = 0;
  const displayMode = Number.parseInt(props.displayMode); // may not be needed

  pos1 = props.image.displayMode[displayMode].pos1;
  pos2 = props.image.displayMode[displayMode].pos2;
  pos3 = props.image.displayMode[displayMode].pos3;

  return (
    <mesh
      {...props}
      ref={mesh}
      onClick={(event) => handleOpen(props.image) }
      position={[pos1, pos2, pos3]}
      rotation={[Math.PI / pos1, Math.PI / pos2, Math.PI / pos3]}
      scale={props.image.scale}>
      <planeBufferGeometry />

      { /* @ts-ignore */ }
      <meshStandardMaterial map={texture} attach="material" side={THREE.DoubleSide} />

    </mesh>
  )
}
