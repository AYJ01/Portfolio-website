import { useEffect, useRef } from "react";
import "../SKILLS/skills.css";
import python from "/src/assets/python.png";
import django from "/src/assets/django.png";
import html from "/src/assets/html.png";
import css from "/src/assets/css.png";
import javascript from "/src/assets/javascript.png";
import mongodb from "/src/assets/mongodb.png";
import node from "/src/assets/node.png";
import bootstrap from "/src/assets/bootstrap.png";
import react from "/src/assets/react.png";
import mysql from "/src/assets/mysql.png";
import figma from "/src/assets/figma.png";
import seo from "/src/assets/seo.png";
import tailwind from "/src/assets/tailwind.png";
import git from "/src/assets/Git.png";
import github from "/src/assets/github.png";
import postgres from "/src/assets/PostgresSQL.png";
import api from "/src/assets/api.png";

export default function Skills() {


  return (<>
    <div className="scene w-screen h-fit" id="scene" >
        <h1 className="text-4xl text-center mt-50 skillheading">TOP TECHNICAL SKILLS</h1>
    <div className="mt-20 w-screen lg:w-fit md:w-fit mx-auto p-1 ">
      <div className="flex my-7  lg:w-fit w-[90%]" >
        <div className="lg:w-100 md:w-100"></div>
        <img src={python} className="w-20 mx-10 object-contain" alt="" />
        <div className="w-100 bg-yellow-400 px-5 py-1 rounded-xl" data-side="right" >
          <strong className="text-black text-normal font-[1000]">Python</strong>
          <p className="text-black text-xs font-bold">Proficient | Experinced | &#9733;&#9733;&#9733;&#9733;&#9733; </p>
          <p className="text-black text-[11px]">Proficient in Python with solid OOP and API skills. Integrated ML code into web apps for real-time predictions and data-driven user experiences.</p>
        </div>
      </div>
      <div className="flex my-7  lg:w-fit w-[90%]">
        <div className="w-100 bg-green-600 px-5 py-1 rounded-xl" data-side="left">
          <strong className="text-black text-normal font-[1000]">Django</strong>
          <p className="text-black text-xs font-bold">Proficient | Experinced | &#9733;&#9733;&#9733;&#9733;&#9733; </p>
          <p className="text-black text-[11px]">Built and deployed over 40 Django apps with REST APIs, admin customization, user auth, and ORM, ensuring scalable and secure backend functionality.</p>
        </div>
        <img src={django} className="w-20 mx-10 object-contain" alt="" />
        <div className="lg:w-100 md:w-100"></div>
      </div>
      <div className="flex my-7  lg:w-fit w-[90%]">
        <div className="lg:w-100 md:w-100"></div>
        <img src={node} className="w-20 mx-10 object-contain" alt="" />
        <div className="w-100 bg-green-800 px-5 py-1 rounded-xl" data-side="right">
          <strong className="text-black text-normal font-[1000]">Node.js</strong>
          <p className="text-black text-xs font-bold">Intermediate | Self Learned | &#9733;&#9733;&#9733;&#9733;&#9734; </p>
          <p className="text-black text-[11px]">Self-learned Node.js developer with hands-on experience building APIs, handling async logic, and creating backend services with Express and MongoDB.</p>
        </div>
      </div>
      <div className="flex my-7  lg:w-fit w-[90%]">
        <div className="w-100 bg-orange-500 px-5 py-1 rounded-xl" data-side="left">
          <strong className="text-black text-normal font-[1000]">HTML</strong>
          <p className="text-black text-xs font-bold">Proficient | Experinced | &#9733;&#9733;&#9733;&#9733;&#9733; </p>
          <p className="text-black text-[11px]">Strong grasp of semantic HTML5, accessibility, and structure. Built 40+ responsive UIs with clean markup, optimized layout, and SEO-friendly tags.</p>
        </div>
        <img src={html} className="w-20 mx-10 object-contain" alt="" />
        <div className="lg:w-100 md:w-100"></div>
      </div>
      <div className="flex my-7  lg:w-fit w-[90%]">
        <div className="lg:w-100 md:w-100"></div>
        <img src={css} className="w-20 mx-10 object-contain" alt="" />
        <div className="w-100 bg-sky-600 px-5 py-1 rounded-xl" data-side="right">
          <strong className="text-black text-normal font-[1000]">CSS</strong>
          <p className="text-black text-xs font-bold">Proficient | Experinced | &#9733;&#9733;&#9733;&#9733;&#9733; </p>
          <p className="text-black text-[11px]">Styled 40+ projects with modern CSS, mastering Flexbox, Grid, transitions, and responsive design to create clean, adaptive, and polished UIs.</p>
        </div>
      </div>
      <div className="flex my-7  lg:w-fit w-[90%]">
        <div className="w-100 bg-yellow-400 px-5 py-1 rounded-xl" data-side="left">
          <strong className="text-black text-normal font-[1000]">Javascript</strong>
          <p className="text-black text-xs font-bold">Proficient | Experinced | &#9733;&#9733;&#9733;&#9733;&#9733; </p>
          <p className="text-black text-[11px]">Solid understanding of core JavaScript—ES6+, DOM, events, and async patterns. Built 40+ dynamic UIs with clean, modular, and interactive logic.</p>
        </div>
        <img src={javascript} className="w-20 mx-10 object-contain" alt="" />
        <div className="lg:w-100 md:w-100"></div>
      </div>
      <div className="flex my-7  lg:w-fit w-[90%]">
        <div className="lg:w-100 md:w-100"></div>
        <img src={react} className="w-20 mx-10 object-contain" alt="" />
        <div className="w-100 bg-sky-400 px-5 py-1 rounded-xl" data-side="right">
          <strong className="text-black text-normal font-[1000]">React</strong>
          <p className="text-black text-xs font-bold">Proficient | Self Learned | &#9733;&#9733;&#9733;&#9733;&#9733; </p>
          <p className="text-black text-[11px]">Skilled in React with hands-on experience building reusable components, managing state with hooks, and creating dynamic, responsive single-page apps.</p>
        </div>
      </div>
      <div className="flex my-7  lg:w-fit w-[90%]">
        <div className="w-100 bg-purple-800 px-5 py-1 rounded-xl" data-side="left">
          <strong className="text-black text-normal font-[1000]">Bootstrap</strong>
          <p className="text-black text-xs font-bold">Proficient | Experinced | &#9733;&#9733;&#9733;&#9733;&#9733; </p>
          <p className="text-black text-[11px]">Proficient in Bootstrap for building responsive, mobile-first UIs. Used grid, components, and utilities to rapidly develop clean, consistent layouts.</p>
        </div>
        <img src={bootstrap} className="w-20 mx-10 object-contain" alt="" />
        <div className="lg:w-100 md:w-100"></div>
      </div>
      <div className="flex my-7  lg:w-fit w-[90%]">
        <div className="lg:w-100 md:w-100"></div>
        <img src={tailwind} className="w-20 mx-10 object-contain" alt="" />
        <div className="w-100 bg-sky-400 px-5 py-1 rounded-xl" data-side="right">
          <strong className="text-black text-normal font-[1000]">Tailwind CSS</strong>
          <p className="text-black text-xs font-bold">Proficient | Experinced | &#9733;&#9733;&#9733;&#9733;&#9733; </p>
          <p className="text-black text-[11px]">Experienced in using Tailwind CSS to craft modern, responsive designs with utility classes, ensuring consistency, scalability, and rapid UI development.</p>
        </div>
      </div>
      <div className="flex my-7  lg:w-fit w-[90%]">
        <div className="w-100 bg-sky-800 px-5 py-1 rounded-xl" data-side="left">
          <strong className="text-black text-normal font-[1000]" >MySQL</strong>
          <p className="text-black text-xs font-bold">Proficient | Experinced | &#9733;&#9733;&#9733;&#9733;&#9733; </p>
          <p className="text-black text-[11px]">Experienced in MySQL with strong understanding of relational databases, complex queries, joins, indexing, and backend integration for data handling.</p>
        </div>
        <img src={mysql} className="w-20 mx-10 object-contain" alt="" />
        <div className="lg:w-100 md:w-100"></div>
      </div>
      <div className="flex my-7  lg:w-fit w-[90%]">
        <div className="lg:w-100 md:w-100"></div>
        <img src={mongodb} className="w-20 mx-10 object-contain" alt="" />
        <div className="w-100 bg-green-700 px-5 py-1 rounded-xl" data-side="right">
          <strong className="text-black text-normal font-[1000]">Mongodb</strong>
          <p className="text-black text-xs font-bold">Intermediate | Experinced | &#9733;&#9733;&#9733;&#9733;&#9733; </p>
          <p className="text-black text-[11px]">Skilled in MongoDB with hands-on experience in schema design, CRUD operations, aggregation pipelines, and integrating with Node.js backends.</p>
        </div>
      </div>
      <div className="flex my-7  lg:w-fit w-[90%]">
        <div className="w-100 bg-sky-400 px-5 py-1 rounded-xl" data-side="left">
          <strong className="text-black text-normal font-[1000]">PostgresSQL</strong>
          <p className="text-black text-xs font-bold">Proficient | Experinced | &#9733;&#9733;&#9733;&#9733;&#9733; </p>
          <p className="text-black text-[11px]">Experienced in PostgreSQL with strong skills in schema design, complex joins, indexing, and integrating with Django and REST APIs for robust data handling.</p>
        </div>
        <img src={postgres} className="w-20 mx-10 object-contain" alt="" />
        <div className="lg:w-100 md:w-100"></div>
      </div>
      <div className="flex my-7  lg:w-fit w-[90%]">
        <div className="lg:w-100 md:w-100"></div>
        <img src={git} className="w-20 mx-10 object-contain" alt="" />
        <div className="w-100 bg-red-700 px-5 py-1 rounded-xl" data-side="right">
          <strong className="text-black text-normal font-[1000]">Git</strong>
          <p className="text-black text-xs font-bold">Intermediate | Experinced | &#9733;&#9733;&#9733;&#9733;&#9733; </p>
          <p className="text-black text-[11px]">Proficient in Git for version control, branching, merging, and collaborative workflows. Used in all projects to maintain clean, trackable development history.</p>
        </div>
      </div>
      <div className="flex my-7  lg:w-fit w-[90%]">
        <div className="w-100 bg-gray-400 px-5 py-1 rounded-xl" data-side="left">
          <strong className="text-black text-normal font-[1000]">Github</strong>
          <p className="text-black text-xs font-bold">Proficient | Experinced | &#9733;&#9733;&#9733;&#9733;&#9733; </p>
          <p className="text-black text-[11px]">Used GitHub extensively for source control, project management, and collaboration—handling commits, pull requests, and repository organization efficiently.</p>
        </div>
        <img src={github} className="w-20 mx-10 object-contain" alt="" />
        <div className="lg:w-100 md:w-100"></div>
      </div>
      <div className="flex my-7  lg:w-fit w-[90%]">
        <div className="lg:w-100 md:w-100"></div>
        <img src={seo} className="w-20 mx-10 object-contain" alt="" />
        <div className="w-100 bg-red-600 px-5 py-1 rounded-xl" data-side="right">
          <strong className="text-black text-normal font-[1000]">Search Engine Optimization</strong>
          <p className="text-black text-xs font-bold">Proficient | Experinced | &#9733;&#9733;&#9733;&#9733;&#9733; </p>
          <p className="text-black text-[11px]">Knowledgeable in SEO best practices, including semantic HTML, meta tags, sitemap setup, and performance optimization to improve site visibility and ranking.</p>
        </div>
      </div>
      
    </div>
    </div>
    </>
  );
}
