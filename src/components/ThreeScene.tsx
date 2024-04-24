"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";

interface ItemProps {
    width: number;
    height: number;
}
const ThreeScene = ({ width, height }: ItemProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    let mounted = false;

    useEffect(() => {
        if (mounted) return;
        if (typeof window !== "undefined") {
            mounted = true;

            // Initialize Three.js scene here
            const scene = new THREE.Scene();
            scene.background = new THREE.Color(0xffffff);
            const camera = new THREE.PerspectiveCamera(
                75,
                width / height,
                0.1,
                1000
            );
            const renderer = new THREE.WebGLRenderer();
            renderer.setSize(width, height);
            containerRef.current?.appendChild(renderer.domElement);
            camera.position.z = 5;
            const dracoLoader = new DRACOLoader();

            dracoLoader.setDecoderPath(
                "https://www.gstatic.com/draco/v1/decoders/"
            );
            dracoLoader.preload();

            const loader = new GLTFLoader();
            loader.setDRACOLoader(dracoLoader);
            /*
            loader.load(
                "models/glb/hairdryer.glb",
                function (object) {
                    const model = object.scene;
                    model.position.set(1, 1, 0);
                    model.scale.set(0.5, 0.5, 0.5);
                    scene.add(model);

                },
                function (xhr) {
                    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
                },
                function (e) {
                    console.error(e);
                }
            );*/

            loader.load(
                "models/glb/untitled.glb",
                function (gltf) {
                    gltf.scene.traverse(function (child) {
                        if ((child as THREE.Mesh).isMesh) {
                            const m = child as THREE.Mesh;
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
                    scene.add(gltf.scene);

                    const controls = new OrbitControls(
                        camera,
                        renderer.domElement
                    );
                    controls.target.set(0, 0.5, 0);
                    controls.update();
                    controls.enablePan = true;
                    controls.enableDamping = true;

                    // Render the scene and camera
                    const renderScene = () => {
                        gltf.scene.rotation.y += 0.01;
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
                const width = window.innerWidth;
                const height = window.innerHeight;

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
            };
        }
    }, []);

    return <div ref={containerRef} />;
};

export default ThreeScene;
