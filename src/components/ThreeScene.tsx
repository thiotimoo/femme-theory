"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";

interface ItemProps {
    parent: string;
    color: string;
    customModel?: string;
}
const ThreeScene = ({ parent, color, customModel }: ItemProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let map = document.getElementById(parent);
        if (!map) return;
        let mapDimensions = map.getBoundingClientRect();
        let width = mapDimensions.width;
        let height = mapDimensions.height;
        if (typeof window !== "undefined") {

            // Initialize Three.js scene here
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(
                75,
                width / height,
                0.1,
                1000
            );
            const renderer = new THREE.WebGLRenderer({
                alpha: true,
            });

            renderer.setSize(width, height);
            renderer.setClearColor( 0x000000, 0 );
            containerRef.current?.appendChild(renderer.domElement);
            camera.position.z = 4;
            const dracoLoader = new DRACOLoader();

            dracoLoader.setDecoderPath(
                "https://www.gstatic.com/draco/v1/decoders/"
            );
            dracoLoader.preload();

            const loader = new GLTFLoader();
            loader.setDRACOLoader(dracoLoader);

            const modelPath = customModel || "/models/glb/hairdryer.glb"

            loader.load(
                modelPath,
                function (gltf) {
                    
                    var hemiLight = new THREE.HemisphereLight(
                        parseInt('0x' + color.replaceAll('#', ''), 16),
                        0x000000
                    );
                    hemiLight.position.set(0, 300, 0);
                    scene.add(hemiLight);

                    var dirLight = new THREE.DirectionalLight(0xffffff);
                    dirLight.position.set(75, 300, -75);
                    scene.add(dirLight);

                    gltf.scene.traverse(function (child) {
                        if ((child as THREE.Mesh).isMesh) {
                            const m = child as THREE.Mesh;
                            // @ts-ignore: Unreachable code error
                            m.material.metalness = 0;
                            m.receiveShadow = true;
                            m.castShadow = true;
                        }
                        if ((child as THREE.Light).isLight) {
                            const l = child as THREE.SpotLight;
                            l.castShadow = true;
                            l.shadow.bias = -0.003;
                            l.shadow.mapSize.width = 2048;
                            l.shadow.mapSize.height = 2048;
                        }
                    });
                    gltf.scene.rotation.set(0,-90,13);
                    gltf.scene.scale.set(0.15, 0.15, 0.15);
                    scene.add(gltf.scene);

                    const controls = new OrbitControls(
                        camera,
                        renderer.domElement
                    );
                    controls.target.set(0, 0.5, 0);
                    controls.update();
                    controls.minPolarAngle = Math.PI/2;
                    controls.maxPolarAngle = Math.PI/2;
                    controls.enablePan = false;
                    controls.enableDamping = false;

                    // Render the scene and camera
                    const renderScene = () => {
                        
                        gltf.scene.rotation.y += 0.001;
                        renderer.render(scene, camera);
                        requestAnimationFrame(renderScene);
                    };
                    renderScene();
                },
                (xhr) => {
                    console.log(xhr.loaded, xhr.total);
                },
                (error) => {
                    console.log(error);
                }
            );

            // Initialize the Three.js scene here (as in the previous example)
            
            const handleResize = () => {
                let map = document.getElementById(parent);
                if (!map) return;
                let mapDimensions = map.getBoundingClientRect();
                let width = mapDimensions.width;
                let height = mapDimensions.height;
                camera.aspect = width / height;
                camera.updateProjectionMatrix();

                renderer.setSize(width, height);
            };

            window.addEventListener("resize", handleResize);

            /*
            const animate = () => {
                requestAnimationFrame(animate);
                render();
            };

            const render = () => {
                renderer.render(scene, camera);
            };

            animate();
            */
            // Clean up the event listener when the component is unmounted
            return () => {
                window.removeEventListener("resize", handleResize);
                containerRef.current?.removeChild(renderer.domElement);
            };
        }
    }, [color]);

    return <div ref={containerRef} />;
};

export default ThreeScene;
