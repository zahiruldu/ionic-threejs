import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Tab1Page implements OnInit {

  @ViewChild('threeCanvas') threeCanvas;

  private width: number = 350;
  private height: number = 400;

  private scene: THREE.Scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, this.width / this.height, 0.1, 1000);
  private renderer: THREE.WebGLRenderer;
  private cube: THREE.Mesh;

  constructor() { }

  ngOnInit() {
    this.renderer = new THREE.WebGLRenderer({ antialias: false, canvas: this.threeCanvas.nativeElement });

    this.renderer.setSize(this.width, this.height);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    this.camera.position.z = 5;

    this.renderer.render(this.scene, this.camera);

    this.animate();

  }

  animate() {
    requestAnimationFrame(() => this.animate());

    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;

    this.renderer.render(this.scene, this.camera);
  };
}
