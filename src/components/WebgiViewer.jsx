import React, {
    useRef,
    useState,
    useEffect,
    useCallback,
    forwardRef,
    useImperativeHandle,
} from "react";
import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    BloomPlugin,
    GammaCorrectionPlugin,
    mobileAndTabletCheck,
} from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollAnimation } from "../lib/scroll-animation";

gsap.registerPlugin(ScrollTrigger);

const WebgiViewer = forwardRef((props, ref) => {
    const canvasRef = useRef(null);
    const [viewerRef, setViewerRef] = useState(null);
    const [targetRef, setTargetRef] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [positionRef, setPositionRef] = useState(null);
    const canvasContainerRef = useRef(null);
    const [previewMode, setPreviewMode] = useState(false);
    const [isMobile, setisMobile] = useState(null);

    useImperativeHandle(ref, () => ({
        triggerPreview() {
            setPreviewMode(true);
            canvasContainerRef.current.style.pointerEvents = "all";
            props.contentRef.current.style.opacity = "0";

            gsap.to(positionRef, {
                x: -7.72,
                y: 3.65,
                z: 4.9,
                duration: 2,
                onUpdate: () => {
                    viewerRef.setDirty();
                    cameraRef.positionTargetUpdated(true);
                }
            });

            gsap.to(targetRef, { x: 0.0, y: 0.0, z: 0.0, duration: 2 });

            viewerRef.scene.activeCamera.setCameraOptions({ controlsEnabled: true });
        }
    }));

    console.log('hello');

    const memoizedScrollAnimation = useCallback(
        (position, target, isMobile, onUpdate) => {
            if (position && target && onUpdate) {
                scrollAnimation(position, target, isMobile, onUpdate);
            }
        }, []
    )

    const setupViewer = useCallback(async () => {

        // Initialize the viewer
        const viewer = new ViewerApp({
            canvas: canvasRef.current,
        });

        setViewerRef(viewer);
        const isMobileorTablet = mobileAndTabletCheck();
        setisMobile(isMobileorTablet);

        // Add some plugins
        const manager = await viewer.addPlugin(AssetManagerPlugin)

        const camera = viewer.scene.activeCamera;
        const position = camera.position;
        const target = camera.target;

        setCameraRef(camera);
        setPositionRef(position);
        setTargetRef(target);

        // Add plugins individually.
        await viewer.addPlugin(GBufferPlugin)
        await viewer.addPlugin(new ProgressivePlugin(32))
        await viewer.addPlugin(new TonemapPlugin(true))
        await viewer.addPlugin(GammaCorrectionPlugin)
        await viewer.addPlugin(SSRPlugin)
        await viewer.addPlugin(SSAOPlugin)
        await viewer.addPlugin(BloomPlugin)

        // This must be called once after all plugins are added.
        viewer.renderer.refreshPipeline()

        // Import and add a GLB file.
        await manager.addFromPath("scene-black.glb")

        viewer.getPlugin(TonemapPlugin).config.clipBackground = true

        viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });

        if (isMobileorTablet) {
            position.set(-16.7, 1.17, 11.7);
            target.set(0, 1.37, 0);
            props.contentRef.current.className = "mobile-or-tablet";
        }

        window.scrollTo(0, 0);

        let needsUpdate = true;

        const onUpdate = () => {
            needsUpdate = true;
            viewer.setDirty();
        }

        viewer.addEventListener("preFrame", () => {
            if (needsUpdate) {
                camera.positionTargetUpdated(true);
                needsUpdate = false;
            }
        })

        memoizedScrollAnimation(position, target, isMobileorTablet, onUpdate);
    }, []);

    useEffect(() => {
        setupViewer();
    }, []);

    const handleExit = useCallback(() => {
        canvasContainerRef.current.style.pointerEvents = "none";
        props.contentRef.current.style.opacity = "1";
        viewerRef.scene.activeCamera.setCameraOptions({ controlsEnabled: false });
        setPreviewMode(false);

        gsap.to(positionRef, {
            x: !isMobile ? -5.66 : -7.0,
            y: !isMobile ? 2.68 : -12.2,
            z: !isMobile ? 3.59: -6.0,
            scrollTrigger: {
                trigger: '.display-section',
                start: "top bottom",
                end: "top top",
                scrub: 2,
                immediateRender: false
            },
            onUpdate: () => {
                viewerRef.setDirty();
                cameraRef.positionTargetUpdated(true);
            }
        });
        gsap.to(targetRef, {
            x: !isMobile ? 0 : -1.62,
            y: !isMobile ? 0 : 0.62,
            z: !isMobile ? 0 : -0.06,
            scrollTrigger: {
                trigger: '.display-section',
                start: "top bottom",
                end: "top top",
                scrub: 2,
                immediateRender: false
            },
        });
    }, [canvasContainerRef, viewerRef, positionRef, cameraRef, targetRef]);

    return (
        <div ref={canvasContainerRef} id="webgi-canvas-container">
            <canvas id="webgi-canvas" ref={canvasRef} />
            {
                previewMode && (
                    <button className="button" onClick={handleExit}>Exit</button>
                )
            }
        </div>
    );
})

export default WebgiViewer;