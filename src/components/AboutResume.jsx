import React from 'react';
import { motion } from 'framer-motion';

export default function AboutResume() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-white">
      <div className="mb-12 grid gap-10 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-extrabold sm:text-4xl">About</h2>
          <p className="mt-4 text-white/80">
            I am a motivated and adaptable student engineer blending a sharp technical focus with creative problem-solving. My journey began with strong academic achievement and has evolved through hands-on innovating, project building, and leadership experiences.
          </p>
          <p className="mt-3 text-white/80">
            Core values include a passion for continual learning, a drive to make technology accessible, and resilience built through challenges. The NCC ‘C’ Certificate experience taught me discipline, teamwork, and confidence to lead.
          </p>
          <p className="mt-3 text-white/80">
            I balance technical depth in AI and IoT with a people-centered mindset—committed to creating solutions that make a difference. What sets me apart: relentless curiosity, real-world impact orientation, and the ability to bridge theory with hands-on engineering.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h3 className="text-xl font-bold">Skills & Tools</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
            <div>
              <p className="font-semibold text-white/90">Programming</p>
              <p className="mt-1 text-white/70">Python, C, HTML, CSS, MySQL</p>
            </div>
            <div>
              <p className="font-semibold text-white/90">Tools</p>
              <p className="mt-1 text-white/70">VS Code, GitHub, OpenCV, CAD software</p>
            </div>
            <div>
              <p className="font-semibold text-white/90">Tech</p>
              <p className="mt-1 text-white/70">ML, AI, IoT Device Integration</p>
            </div>
            <div>
              <p className="font-semibold text-white/90">Creative</p>
              <p className="mt-1 text-white/70">Rapid prototyping, GUI/UX, illustration basics</p>
            </div>
            <div>
              <p className="font-semibold text-white/90">Soft Skills</p>
              <p className="mt-1 text-white/70">Communication, teamwork, leadership, critical thinking</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <h4 className="font-semibold">Education</h4>
              <ul className="mt-2 space-y-2 text-sm text-white/80">
                <li>MVSR Engineering College, BE (ECE), CGPA 8.5</li>
                <li>Narayana Junior College, 95.2%</li>
                <li>Ravindra Bharathi School, GPA 9.5</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <h4 className="font-semibold">Experience</h4>
              <ul className="mt-2 space-y-2 text-sm text-white/80">
                <li>Python Programming Intern, HDLC Technologies — business logic and backend pipelines</li>
                <li>Robotics & IoT Projects, Robotic Soham Academy — Arduino automation prototypes</li>
                <li>ECIL Industrial Training (CAD Division) — Radiation Monitoring mini project</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <h4 className="font-semibold">Awards & Accomplishments</h4>
              <ul className="mt-2 space-y-2 text-sm text-white/80">
                <li>NCC ‘C’ Certificate — leadership and discipline</li>
                <li>Robotic Soham Academy — certified robotics & IoT workshop</li>
                <li>ECIL Industrial Training Certificate — project lead</li>
                <li>Academic achievement awards</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <h4 className="font-semibold">Testimonials</h4>
              <ul className="mt-2 space-y-3 text-sm text-white/80">
                <li>“Samanya’s ability to tackle challenging problems and learn quickly made him outstanding on our sign language project.”</li>
                <li>“His clarity in communication and dedication ensures projects are finished to a professional standard.”</li>
                <li>“Leadership and discipline are evident—contributions were innovative and practical.”</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div id="contact" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 backdrop-blur">
        <h3 className="text-xl font-bold">Contact</h3>
        <div className="mt-4 grid gap-3 text-sm text-white/80 sm:grid-cols-2 lg:grid-cols-3">
          <p><span className="text-white/90">Email:</span> <a className="text-cyan-300 hover:underline" href="mailto:samanyagullapudi24@gmail.com">samanyagullapudi24@gmail.com</a></p>
          <p><span className="text-white/90">LinkedIn:</span> <a className="text-cyan-300 hover:underline" href="https://www.linkedin.com/in/gullapudi-samanya-79347b25b" target="_blank" rel="noreferrer">/gullapudi-samanya</a></p>
          <p><span className="text-white/90">Mobile:</span> <a className="text-cyan-300 hover:underline" href="tel:+917780462204">+91 7780462204</a></p>
        </div>
      </motion.div>
    </section>
  );
}
