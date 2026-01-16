import React from 'react'
import { useThree } from '@react-three/fiber'
import { OrbitControls, useGLTF} from '@react-three/drei';
import * as THREE from 'three';

const Dog = () => {
     const model = useGLTF("models/dog.drc.glb");

     useThree(({camera, scene,gl}) => {
      camera.position.z = 0.7;
     })


   
  return (
    <>
       <primitive object={model.scene} position={[0, -0.5, 0]} rotation={[0,0,0]} />
       <directionalLight position={[0, 5, 5]} color={0xFFFFFF} intensity={10}/>

      <OrbitControls />

    </>
  )
}

export default Dog
