import {Suspense,useEffect,useState} from 'react';
import { Canvas } from '@react-three/fiber';
import {Gltf, OrbitControls,Preload,useGLTF } from '@react-three/drei';
import Loader from '../Loader';


const Computers = ({isMobile}) => {
  const computer = useGLTF(process.env.PUBLIC_URL+"/desktop_pc/scene.gltf");
  //console.log("URL  : "+process.env.PUBLIC_URL+"/PC/scene.gltf");
  return (
   <mesh>
    <hemisphereLight intensity={0.15} />
    <pointLight intensity={1}/>
    <spotLight
    position={[-20,50,10]}
    angle={0.12}
    penumbra={1}
    castShadow
    // shadow-mapSize={1024}
    />
    <primitive 
    object={computer.scene}
    scale={isMobile?0.150:0.175}
    position={isMobile?[0.45,-0.7,-0.25]:[0.3,-0.7,-0.25]}
    rotation={[-0.01,4.73,-0.15]}
    />
   </mesh>
  )
}

const ComputersCanvas=()=>{
const [isMobile,setIsMobile]=useState(false);

useEffect(()=>{
  console.log("Ashish CHnagresssss");
  const mediaQuery=window.matchMedia('(max-width:500px)');
  setIsMobile(mediaQuery.matches);
  
  const handleMediaQueryChange=(event)=>{
    setIsMobile(event.matches);
    console.log("handle media query change : "+event.matches);
  }

  mediaQuery.addEventListener('change',handleMediaQueryChange);
return ()=>{
  mediaQuery.removeEventListener('change',handleMediaQueryChange);
}
},[])

  return(
    <Canvas frameloop='demand'  shadows camera={{positions:[20,3,5],fov:25}} gl={{preserveDrawingBuffer:true}}>
          <Suspense fallback={<Loader/>}>
            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
            <Computers isMobile={isMobile}/>
          </Suspense>
          <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas