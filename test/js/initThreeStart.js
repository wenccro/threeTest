import * as THREE from "./three.min.js"

let renderer;


function initThree(widths,heights,canvasFrame) {
    renderer = new THREE.WebGLRenderer({antialias: true})
    renderer.setSize(widths, heights)
    document.getElementById(""+canvasFrame+"").appendChild(renderer.domElement)
    renderer.setClearColor(0xFFFFFF, 1.0)
}

let camera;

function initCamera(widths,heights) {
    camera = new THREE.PerspectiveCamera(45, widths / heights, 1, 10000)
    camera.position.x = 0;
    camera.position.y = 1000;
    camera.position.z = 0;
    camera.up.x = 0;
    camera.up.y = 0;
    camera.up.z = 1;
    camera.lookAt(0, 0, 0);
}

let scene

function initScene() {
    scene = new THREE.Scene()
}

let light

function initLight() {
    light = new THREE.DirectionalLight(0xFF0000, 1.0, 0);
    light.position.set(100, 100, 200);
    scene.add(light);
}

let cude

function initObject() {
    let geometry = new THREE.Geometry();
    let meterial = new THREE.LineBasicMaterial({vertexColors: THREE.VertexColors})
    let color1 = new THREE.Color(0x444444), color2 = new THREE.Color(0xFF0000);
    // 线的材质可以由2点的颜色决定
    let p1 = new THREE.Vector3(-100, 0, 100);
    let p2 = new THREE.Vector3(100, 0, -100);
    geometry.vertices.push(p1);
    geometry.vertices.push(p2);
    geometry.colors.push(color1, color2);

    let line = new THREE.Line(geometry, material, THREE.LineSegments);
    scene.add(line);
}

function render() {
    renderer.clear();
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

function threeStart(widths,heights,canvasFrame) {
    initThree(widths,heights,canvasFrame);
    initCamera(widths,heights);
    initScene();
    initLight();
    initObject();
    render();
}

export default threeStart(widths,heights,text)
