import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2026',
    title: 'Bennett University',
    subtitle: 'Bachelor of Technology',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2024',
    title: 'Code Jam Ranking: 753',
    subtitle: 'Secured 753rd globally in Google Code Jam',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2025',
    title: '8th ICICC [Accepted]',
    subtitle: 'Research on Face Deepfake Detection',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2025',
    title: 'Algorithms & DSA',
    subtitle: '700+ Problems on LeetCode & CodeChef',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: '2026+',
    title: 'Future',
    subtitle: 'Building Intelligent Systems',
    position: 'right',
  }
];