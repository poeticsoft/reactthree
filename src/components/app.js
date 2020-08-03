// https://codeworkshop.dev/blog/2020-03-31-creating-a-3d-spacefox-scene-with-react-three-fiber/

import React, { 
  useRef, 
  useState,
  Suspense,
  useEffect
} from 'react'
import * as THREE from 'three'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { 
  Canvas,
  useLoader,
  useFrame,
  useThree,
  extend 
} from 'react-three-fiber'
extend({ OrbitControls });
import { Slider } from 'antd'
import 'antd/dist/antd.css';
import Effects from './effects'

const rad = deg => deg * Math.PI / 180

const Car = props => {

  let OBJ = useLoader(GLTFLoader, './model/datsun/scene.gltf')

  const [ rotation, setRotation ] = useState(0)

  useFrame(() => {

    setRotation(rotation + 0.01);
  });

  return <object3D 
    rotation={[0, rotation, 0]} 
    position={[0, 0, 0]}
  >
    <primitive 
      object={ OBJ.scene }  
      position={[0.4, 0, 0]}
    /> 
  </object3D>
}

// https://www.digitalocean.com/community/tutorials/react-react-with-threejs
// https://discoverthreejs.com/tips-and-tricks/

const APP = props => {

  let factor = 3  
  const [fov, setFov ] = useState(50)
  const [ glitchFactor, setGlitchFactor ] = useState(factor)

  useEffect(() => {

    const intervalFactor = setInterval(() => {

      factor -= 0.1
      factor <= 0 &&
      clearInterval(intervalFactor)

      setGlitchFactor(factor)
    }, 500)

    return () => clearInterval(intervalFactor)
  }, [])
  
  return <div className="APP">
    <div className="Viewer">
      <Canvas
        camera={{ position: [0, 1, 3] }}
      >
        <ambientLight 
          intensity={ 40 }
        />
        <rectAreaLight  
          position={[0, 10, 0]} 
          rotation={[rad(-90), 0, 0]}
          intensity={  3 }
          color={ 0xffffff }
        />
        <Suspense fallback={ <></> }>
          <Car />
        </Suspense>
        <Effects factor={ glitchFactor } />
      </Canvas>
    </div>
    <div className="Controls">
      <Slider 
        max={ 100 }
        defaultValue={ fov } 
        onChange={ value => setFov(value) }
      />
      { fov }
    </div>
  </div>
}

export default APP