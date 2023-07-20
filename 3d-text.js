function threeDText() {
    let scene, camera, renderer, material, mesh;

    function init() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
        camera.position.z = 1;
        
        var loader = new THREE.FontLoader();

        loader.load( 'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function ( font ) {

            var geometry = new THREE.TextGeometry( 'Capybara:Visages', {
                font: font,
                size: 0.2,
                height: 0.05,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 0.01,
                bevelSize: 0.01,
                bevelOffset: 0,
                bevelSegments: 5
            } );
            material = new THREE.MeshNormalMaterial();
            mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);
        } );

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Add the alpha: true property
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor( 0x000000, 0 ); // the second parameter is the alpha, or transparency. Set it to 0.
        document.getElementById('three-container').appendChild(renderer.domElement);
    }

    function animate() {
        requestAnimationFrame(animate);
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.02;
        renderer.render(scene, camera);
    }

    init();
    animate();
}
threeDText();
